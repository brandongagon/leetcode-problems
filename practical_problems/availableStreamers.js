const tournamentSlots = [
  { time: "Saturday 10AM", game: "Overwatch" },
  { time: "Saturday 2PM", game: "Valorant" },
  { time: "Sunday 10AM", game: "League of Legends" },
  { time: "Sunday 2PM", game: "Valorant" },
];

const streamers = [
  {
    name: "Nova",
    games: ["Valorant", "League of Legends"],
    availability: ["Saturday 2PM", "Sunday 10AM"]
  },
  {
    name: "Kai",
    games: ["Overwatch"],
    availability: ["Saturday 10AM", "Sunday 2PM"]
  },
  {
    name: "Echo",
    games: ["Valorant", "Overwatch"],
    availability: ["Saturday 2PM", "Sunday 2PM"]
  },
];

const r = matchStreamersToSlots(tournamentSlots, streamers);
console.log(r)

function matchStreamersToSlots(tournamentSlots, streamers) {
  let matches = [];
  let slotMap = {};
  tournamentSlots.forEach((slot) => {
    slotMap[slot.time] = { time: slot.time, game: slot.game, availableStreamers: [] };
  });
  
  streamers.forEach((streamer) => {
    let isAvailable = streamer.availability.find(time => slotMap[time]);
    if (isAvailable) {
      let hasGameRights = streamer.games.find(game => slotMap[isAvailable].game);
      slotMap[isAvailable].availableStreamers.push(streamer.name);
    }
  });
  
  return Object.values(slotMap);
}

