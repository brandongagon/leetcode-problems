const games = [
  { title: "Call of Honor", releaseDate: "2025-06-01" },
  { title: "Call  of Honor", releaseDate: "2025-06-01" },
  { title: "Call-of-Honor", releaseDate: "2025-06-01" },
  { title: "Star Jumpers", releaseDate: "2025-05-20" },
  { title: "StarJumpers", releaseDate: "2025-05-20" }
];

let str = "Star-Jumpers";
//console.log(str.includes('-'));

const r = format(games);
console.log(r.length);

function format(games) {
  let formatted = games.map((game) => {
    if (game.title.includes('-')) {
      return {
        title: game.title,
        formatted: game.title.split('-').join('').toLowerCase(),
        releaseDate: game.releaseDate
      }
    } else {
      return {
        title: game.title,
        formatted: game.title.split('').join('').toLowerCase(),
        releaseDate: game.releaseDate
      }
    }
  });

  console.log(formatted);
  return formatted;
}


/*

*/

// const games = [
//   { title: "Shadowfall", releaseDate: "2025-01-15" },
//   { title: "Sky Edge", releaseDate: "2025-03-10" },
//   { title: "Shadowfall", releaseDate: "2025-06-22" }, // duplicate title
//   { title: "Sky Edge", releaseDate: "2025-07-01" },   // duplicate title
//   
// { title: "Mystic Run", releaseDate: "2025-02-01" }
// ];

// const r = deduplicateGames(games);
// console.log(r);

// function deduplicateGames(games) {
//   let uniqueTitles = new Set();
//   let uniqueGames = [];

//   for (let game of games) {
//     uniqueTitles.add(game.title);
//   }

//   uniqueTitles.forEach((title) => {
//     uniqueGame = games.filter(g => g.title === title)
//     uniqueGames.push(uniqueGame[0]);
//   });

//   return uniqueGames;
// }

// // BETER VERSION
// function deduplicateGames(games) {
//   const seenTitles = new Set();
//   const uniqueGames = [];

//   for (let game of games) {
//     if (!seenTitles.has(game.title)) {
//       seenTitles.add(game.title);
//       uniqueGames.push(game);
//     }
//   }

//   return uniqueGames;
// }



/*
Write a function getRecentlyReleasedGames(games, today) that returns an array of games released within 30 days prior to today (inclusive).

[
  { title: "Arcade Blitz", releaseDate: "2025-06-01" },
  { title: "Witchlight", releaseDate: "2025-05-20" }
]

1. convert releaseDate and today to new DAte() objects
2. calculate difference of dates in MS and then convert it to days
3. If releaseDate is between 0 and 30 days, it is a new release 
*/

// const games = [
//   { title: "Arcade Blitz", releaseDate: "2025-06-01" },
//   { title: "Witchlight", releaseDate: "2025-05-20" },
//   { title: "Robo Reign", releaseDate: "2025-04-15" }
// ];

// const today = "2025-06-13";

// const r = getRecentlyReleasedGames(games, today);
// console.log('Games Release In Last 30 Days', r);

// function getRecentlyReleasedGames(games, today) {
//   const todayDate = new Date(today);
//   return games.filter((game) => {
//     const gameDate = new Date(game.releaseDate);
//     const diffMS = todayDate.getTime() - gameDate.getTime();
//     const diffDays = diffMS / (1000 * 60 * 60 * 24);

//     return diffDays >= 0 && diffDays <= 30;
//   });
// }



/*
Write a function getNextGameRelease(games, today) that returns a single game object with the closest release date after today.

If there are no upcoming games, return null.

expected output
{ title: "Galaxy Raiders", releaseDate: "2024-12-01" }
*/

// const games = [
//   { title: "Cyber Drift", releaseDate: "2024-08-10" },
//   { title: "Galaxy Raiders", releaseDate: "2024-12-01" },
//   { title: "Pixel Clash", releaseDate: "2025-01-20" }
// ];

// const today = "2024-11-15";

// const r = getNextGameRelease(games, today);
// console.log(r);

// function getNextGameRelease(games, today) {
//   const comingGames = games.filter(g => new Date(g.releaseDate) > new Date(today));
//   const sortedByClosest = comingGames.sort((a,b) => new Date(a.releaseDate) - new Date(b.releaseDate));
//   const closestRelease = sortedByLatest[0] ? sortedByLatest[0] : null;

//   return closestRelease;
// }
/*
{
  "2024": [
    { title: "Sky Edge", releaseDate: "2024-11-03" }
  ],
  "2025": [
    { title: "Shadowfall", releaseDate: "2025-02-15" },
    { title: "Dark Moon", releaseDate: "2025-09-01" }
  ]
}
*/

// const games = [
//   { title: "Shadowfall", releaseDate: "2025-02-15" },
//   { title: "Sky Edge", releaseDate: "2024-11-03" },
//   { title: "Dark Moon", releaseDate: "2025-09-01" }
// ]

// const r = groupGamesByYear(games);
// console.log(r);

// 1. {}
// 2. for in -> game
// 3. 2024
// 4. null check, then set key and first array value
// 5. if key already exists, push another game to games array
/*
function groupGamesByYear(games) {
  return games.reduce((acc, game) => {
    const year = new Date(game.releaseDate).getFullYear();
    acc[year] = acc[year] || [];
    acc[year].push(game);
    return acc;
  }, {});
}
*/


// function groupGamesByYear(games) {
//   let releaseYears = {};

//   for (let game of games) {
//     let gameYear = new Date(game.releaseDate).getFullYear();
//     if (!releaseYears[gameYear]) {
//       releaseYears[gameYear] = [game];
//     } else {
//       releaseYears[gameYear].push(game);
//     }
//   }

//   return releaseYears;
// }

// /*

// expected output:
// [
//   { name: "GameHub", opens: "09:00AM", closes: "09:00PM" },
//   { name: "Night Owls Gaming", opens: "04:00PM", closes: "11:00PM" }
// ]

// Let’s say current time is "05:00PM".

// */

// const stores = [
//   { name: "GameHub", opens: "09:00AM", closes: "09:00PM" },
//   { name: "Pixel Palace", opens: "10:30AM", closes: "06:00PM" },
//   { name: "Night Owls Gaming", opens: "04:00PM", closes: "11:00PM" },
//   { name: "Early Birds", opens: "06:00AM", closes: "11:00AM" },
// ];

// const r = getOpenStores(stores, "05:00PM")
// console.log(r);

// function getOpenStores(stores, currentTime) {
//   toMinutes(currentTime)
//   //const eligibleStores = stores.filter(s => s.closes > currentTime && s.opens < currentTime);
//   //return eligibleStores;
// }

// function toMinutes(timeStr) {
//   const [time, modifier] = timeStr.match(/(\d{1,2}:\d{2})(AM|PM)/).slice(1);

//   console.log('what is time', time);
//   console.log('what is modifier', modifier);

//   let [hours, minutes] = time.split(':').map(Number);

//   if (modifier === "PM" && hours !== 12) hours += 12;
//   if (modifier === "AM" && hours === 12) hours = 0;

//   return hours * 60 + minutes;
// }