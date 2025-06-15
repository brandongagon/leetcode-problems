const crates = [
  { id: "A1", priority: "medium", dropDate: "2077-08-12" },
  { id: "B2", priority: "high", dropDate: "2077-06-01" },
  { id: "C3", priority: "high", dropDate: "2077-09-03" },
  { id: "D4", priority: "low", dropDate: "2077-09-10" }
];

const r = sortSupplyCrates(crates);
console.log(r);

function sortSupplyCrates(crates) {
  const priorityMap = { high: 3, medium: 2, low: 1 };

  return [...crates].sort((a, b) => {
    const priorityDiff = priorityMap[b.priority] - priorityMap[a.priority];
    if (priorityDiff !== 0) return priorityDiff;

    const dateDiff = new Date(b.dropDate) - new Date(a.dropDate);
    if (dateDiff !== 0) return dateDiff;

    return a.id.localeCompare(b.id); // third fallback
  });
}
