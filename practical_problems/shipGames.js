const stores = [
  { name: 'Pixel Palace Downtown', inventory: ['The Last of Us Part II', 'Cyberpunk 2077'] },
  { name: 'Pixel Palace North', inventory: ['Elden Ring'] },
  { name: 'Pixel Palace West', inventory: ['God of War Ragnarök', 'Spider-Man 2', 'Tears of the Kingdom'] }
]

const shipments = ['Starfield', 'Final Fantasy VII Rebirth', 'Hades II'];

function distributeGames(shipments, stores) {
  // Handle edge case where there are no stores
  if (stores.length === 0) {
    return [];
  }

  for (const game of shipments) {
    // Find the store with the least inventory without sorting the whole array
    const leastStockedStore = stores.reduce((storeWithMin, currentStore) => {
      if (currentStore.inventory.length < storeWithMin.inventory.length) {
        return currentStore;
      } else {
        return storeWithMin;
      }
    });

    // Add the game to that store's inventory
    leastStockedStore.inventory.push(game);
  }

  return stores;
}