/*
Create a function shipGamesToStores that takes an array of games, an array of stores, and a function to check if a store accepts a game's category. The function should return an object with the games shipped to each store.
*/

const game1 = { name: 'The Legend of Zelda', category: 'Action-Adventure' };
const game2 = { name: 'Mario Kart', category: 'Racing' };
const game3 = { name: 'Super Smash Bros.', category: 'Fighting' };

const store1 = { name: 'GameStop', acceptedCategories: ['Action-Adventure', 'Racing'] };
const store2 = { name: 'Best Buy', acceptedCategories: ['Fighting', 'Sports'] };

const games = [game1, game2, game3];
const stores = [store1, store2];

/* const shippedGames = shipGamesToStores((store, game) => {
  return store.acceptedCategories.includes(game.category);
}); */

const r = shipGamesToStores(stores, games);
console.log(r);

function shipGamesToStores(stores, games) {
  const storeMap = {};

  stores.forEach((store) => {
    storeMap[store.name] = games.filter((game) => store.acceptedCategories.includes(game.category));
  });

  return storeMap;
}

/* function shipGamesToStores(stores, games) {
  let storeMap = {};
  
  stores.forEach((store) => {
    if (!storeMap[store.name]) {
      storeMap[store.name] = [];
      
      games.forEach((game) => {
        if (store.acceptedCategories.includes(game.category)) {
          storeMap[store.name].push({ name: game.name, category: game.category });
        }
      });
    }    
  });
  
  return storeMap;
}
 */
// Output:
// {
//   GameStop: [{ name: 'The Legend of Zelda', category: 'Action-Adventure' }, { name: 'Mario Kart', category: 'Racing' }],
//   Best Buy: [{ name: 'Super Smash Bros.', category: 'Fighting' }]
// }
