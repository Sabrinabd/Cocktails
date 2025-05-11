const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51RMlGmPxwUU3eUzA7KJ2Q9hG3dJ4TwE7JBGeV6uqbR7BcZEmqewTPjG1sN1PL5t2xpVEopUvMh1oQd6kT2JauCen00caXQUUaG'); // Remplacez par votre clé Stripe

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route pour tester le serveur
app.get('/', (req, res) => {
  res.send('Node Backend is running!');
});

// Route pour créer une session de paiement Stripe
app.post('/create-checkout-session', async (req, res) => {
  const { cocktails } = req.body;
 console.log(cocktails);
  const lineItems = cocktails.map((cocktail) => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: cocktail.name,
      },
      unit_amount: cocktail.price * 100, 
    },
    quantity: 1,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:4200/cart/success',
      cancel_url: 'http://localhost:4200/cart/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});