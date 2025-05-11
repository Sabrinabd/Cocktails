import { cocktails } from './cocktails.data';

export async function seedData() {
  await fetch('https://restapi.fr/api/bcocktails', {
    method: 'POST',
    body: JSON.stringify(cocktails),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
