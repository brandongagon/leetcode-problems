function matchStreamersToSlots(tournamentSlots, streamers) {
  const slotMap = {};

  tournamentSlots.forEach(slot => {
    slotMap[slot.time] = {
      time: slot.time,
      game: slot.game,
      availableStreamers: []
    };
  });

  streamers.forEach(streamer => {
    streamer.availability.forEach(time => {
      const slot = slotMap[time];
      if (slot && streamer.games.includes(slot.game)) {
        slot.availableStreamers.push(streamer.name);
      }
    });
  });

  return Object.values(slotMap);
}

