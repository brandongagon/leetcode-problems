/*
A video game company is preparing for the launch of its new game. To generate hype, it will hold game demo sessions at various retail stores throughout the week. Each session requires a certified game specialist to run the demo.

You are given a list of available time slots at stores and a list of game specialists, each with their certification status and availability.

Your task is to write a function that returns an array of objects representing which certified specialists are available for which store demo time slots. Only certified specialists should be considered.

expected output:

Return an array of objects. Each object should have a slot and an array of availableSpecialists who are certified and available at that time.
[
  { slot: "Monday 9AM", availableSpecialists: ["Max"] },
  { slot: "Monday 2PM", availableSpecialists: [] },
  { slot: "Tuesday 9AM", availableSpecialists: ["Rico"] },
  { slot: "Tuesday 2PM", availableSpecialists: ["Max", "Rico"] },
  { slot: "Wednesday 9AM", availableSpecialists: ["Rico"] },
  { slot: "Wednesday 2PM", availableSpecialists: ["Max"] }
]

Notes:
Only include certified specialists.

Include all time slots, even if no specialists are available for them.
*/


const storeSlots = [
  "Monday 9AM",
  "Monday 2PM", 
  "Tuesday 9AM",
  "Tuesday 2PM",
  "Wednesday 9AM",
  "Wednesday 2PM"
];

const specialists = [
  { 
    name: "Max", 
    certified: true, 
    availableSlots: ["Monday 9AM", "Tuesday 2PM", "Wednesday 2PM"]
  },
  { 
    name: "Luna", 
    certified: false, 
    availableSlots: ["Monday 9AM", "Monday 2PM", "Tuesday 9AM", "Wednesday 9AM"]
  },
  { 
    name: "Rico", 
    certified: true, 
    availableSlots: ["Tuesday 9AM", "Tuesday 2PM", "Wednesday 9AM"]
  }
];

function getDemoSchedule(slots, specialists) {
	 const slotMap = slots.map(slot => ({
    slot,
    availableSpecialists: []
  }));
  
  const onlyCertified = specialists.filter(s => s.certified);
  
	onlyCertified.forEach((certifiedWorker) => {
	certifiedWorker.availableSlots.forEach((timeSlot) => {
          const match = slotMap.find(s => s.slot === timeSlot);
          if (match) {
            match.availableSpecialists.push(certifiedWorker.name);
          }
       });
  });
  
  return slotMap;
}

console.log(getDemoSchedule(storeSlots, specialists));
