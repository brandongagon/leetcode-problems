/*

1. Higher urgency first.
2. If urgency is the same, prioritize closer distance.
3. If both urgency and distance are the same, prioritize in the order: "ambulance" > "fire" > "police".
*/

const requests = [
  { id: 1, urgency: 4, distance: 2.5, type: "fire" },
  { id: 2, urgency: 5, distance: 4.2, type: "police" },
  { id: 3, urgency: 5, distance: 3.1, type: "ambulance" },
  { id: 4, urgency: 4, distance: 2.5, type: "ambulance" },
  { id: 5, urgency: 4, distance: 2.5, type: "police" }
];

function sortDispatchQueue(requests) {
  const priority = {
    ambulance: 3,
    fire: 2,
    police: 1
  };

  const sorted = requests.sort((a, b) => {
    if (a.urgency !== b.urgency) {
      return b.urgency - a.urgency;
    }

    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    }

    return priority[b.type] - priority[a.type];
  });

  return sorted;
}
