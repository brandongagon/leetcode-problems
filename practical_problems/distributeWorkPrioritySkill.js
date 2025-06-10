/*
Here are the steps I'm going to take

1. First, I'm going to map the workers array so that each worker object has an array of aassigned tasks
2. next, I will define a worker index variable initialized to 0
3. next, I will do a for loop through tasks
	a. while looping, I will assign a task to a worker
  b. then increment the worker index by 1
  c. then I will check if the worker index is equal to the worker array length
  	i. if it is of equal length, I will reset it to 0
4. last step will be to return the result array
*/

const tasks= [
  { id: 1, name: "Fix leaky faucet", estimated_time: 2, priority: 1, required_skills: ["plumbing"] },
  { id: 2, name: "Replace door lock", estimated_time: 1, priority: 3, required_skills: ["carpentry"] },
  { id: 3, name: "Paint room", estimated_time: 4, priority: 2, required_skills: ["painting"] }
]

const workers= [
  { id: 1, name: "Alice", skills: ["plumbing", "electrical"] },
  { id: 2, name: "Bob", skills: ["painting", "carpentry"] },
  { id: 3, name: "Carol", skills: ["plumbing", "painting", "carpentry"] }
]

const r = assign_tasks(tasks, workers);
console.log(r);
function assign_tasks(tasks, workers) {
	let result = workers.map((worker) => {
  	return {
    	id: worker.id,
      name: worker.name,
      skills: worker.skills,
      tasks: [],
      totalHours: 0
    }
  });
  
  // sort based on task priority
  tasks.sort((a,b) => b.priority - a.priority);
  
  for (let i=0;i<tasks.length;i++) {
  	// sort based on workload
    result.sort((a,b) => a.totalHours - b.totalHours);
    
    // find worker with right skills
    for (let worker of result) {    	
    	if(hasRequiredSkills(worker, tasks[i].required_skills)) {
      	worker.tasks.push(tasks[i]);        
        worker.totalHours += tasks[i].estimated_time;
        break;
      }
    }
		  
  }
  
  return result;
}

function hasRequiredSkills(worker, requiredSkills) {
  return requiredSkills.every(skill => worker.skills.includes(skill));
}

