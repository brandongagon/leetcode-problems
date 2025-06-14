function getUniquePlayTime(sessions) {
  const grouped = {};

  // Step 1: Group sessions by player
  sessions.forEach(({ player, startTime, endTime }) => {
    if (!grouped[player]) grouped[player] = [];
    grouped[player].push([new Date(startTime), new Date(endTime)]);
  });

  const result = {};

  for (const player in grouped) {
    const intervals = grouped[player];

    // Step 2: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 3: Merge overlapping intervals
    const merged = [];
    let [currentStart, currentEnd] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
      const [nextStart, nextEnd] = intervals[i];

      if (nextStart <= currentEnd) {
        // Overlapping: extend the current end if needed
        currentEnd = new Date(Math.max(currentEnd, nextEnd));
      } else {
        // No overlap: push current, then start new
        merged.push([currentStart, currentEnd]);
        [currentStart, currentEnd] = [nextStart, nextEnd];
      }
    }
    merged.push([currentStart, currentEnd]); // push the last one

    // Step 4: Sum merged durations
    let totalHours = 0;
    for (const [start, end] of merged) {
      totalHours += (end - start) / (1000 * 60 * 60);
    }

    // Optional: round to 1 decimal
    result[player] = Math.round(totalHours * 10) / 10;
  }

  return result;
}

