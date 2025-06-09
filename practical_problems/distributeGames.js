/*

Simple distribution of video games to stores
Doesn't account for inventory_capacity or game size

This will evenly distribute video games
*/

stores = [
    {"name": "Store A", "inventory_capacity": 10},
    {"name": "Store B", "inventory_capacity": 20},
    {"name": "Store C", "inventory_capacity": 30}
]

games = [
    {"title": "Game 1", "size": 5},
    {"title": "Game 2", "size": 10},
    {"title": "Game 3", "size": 15},
    {"title": "Game 4", "size": 20}
]

function assignGames(stores, games) {
	let result = {};
	let storeIndex = 0;
  
  for (let i=0;i<games.length;i++) {
  	let game = games[i];
    let currStore = stores[storeIndex].name;
    if (!result[currStore]) {
    	result[currStore] = []
    }
    result[currStore].push(game);
    
    storeIndex++;
    if (storeIndex === stores.length) {
    	storeIndex = 0;
    }
  }
  
	return result;
}

assignGames(stores, games);