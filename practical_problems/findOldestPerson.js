const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 }
];

const result = findOldestPerson(people);
console.log(result);
// Output: { name: 'Bob', age: 40 }

function findOldestPerson(people) {
  if (people.length === 0) {
    return null; // or throw an error, depending on your requirements
  }
  
  let oldest = people[0].age;
  let oldestPerson = people[0];
  
  people.forEach((person) => {
    if (person.age > oldest) {
      oldest = person.age;
      oldestPerson = person;
    }
  });
  
  return oldestPerson;
}

