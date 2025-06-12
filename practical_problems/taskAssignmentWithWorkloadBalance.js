const workers = [
  { name: 'Alice', skills: ['coding', 'testing'] },
  { name: 'Bob', skills: ['design', 'testing'] },
  { name: 'Charlie', skills: ['coding'] }
];

const tasks = [
  { id: 1, category: 'coding' },
  { id: 2, category: 'testing' },
  { id: 3, category: 'coding' },
  { id: 4, category: 'design' },
  { id: 5, category: 'marketing' } // A task no one can do
];

console.log(assignTasks(workers, tasks));

function assignTasks(workers, tasks) {
  // Initialize each worker with an empty tasks array.
	const allWorkers = workers.map((worker) => {
  	return {
    	...worker, // Copy original worker properties
      tasks: []
    }
  });

  const unassignedTasks = [];
    
  tasks.forEach((task) => {
    // 1. Find all workers who have the required skill for the task.
    const capableWorkers = allWorkers.filter(worker => 
      worker.skills.includes(task.category)
    );

    // If no one has the skill, add it to unassigned and move on.
    if (capableWorkers.length === 0) {
      unassignedTasks.push(task);
      return; // Skips to the next task in the forEach loop
    }

    // 2. From the capable workers, find the one with the fewest tasks.
    // We use 'reduce' to find the worker with the minimum tasks.length.
    const leastBusyWorker = capableWorkers.reduce((a, b) => 
      a.tasks.length <= b.tasks.length ? a : b
    );

    // 3. Assign the task to that worker.
    leastBusyWorker.tasks.push(task);
  });
  
  // Return an object showing both the workers' assignments and any unassigned tasks.
  return { assignments: allWorkers, unassignedTasks };
}

