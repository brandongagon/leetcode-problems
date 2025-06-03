/*
This constructor initializes two key data structures:
'this.map': An object (hash map) that stores value -> index mappings
'this.nums': An array that stores the actual values in insertion order

This dual-structure appraoch is the key to achieving O(1) performance for all operations

The combination of array + hash map provides:
- O(1) lookup: The hash map tells us instantly if a value exists
- O(1) insertion: Array push is O(1), hash map insertion is O(1)
- O(1) delete: Array allows random access by index
- O(1) random selection: Array indices can be randomly generated
*/
let RandomizedSet = function() {
 this.map = {};
 this.nums = [];
}

Randomized.prototype.insert = function(val) {
 /*
  Uses the hash map to check if the value already exists in O(1) time
  If the key doesn't exist in the map, it means the value isn't in our set 
 */
 if (this.map[val] === undefined) {
  // Adds the value to the end of the array
  this.nums.push(val);
  // Records the index where we just inserted the value
  this.map[val] = this.nums.length - 1;
  // Indicates successful insertion
  return true;
 }
 // here, we handle duplicates. If the value already exists,
 // return false, without adding it (maintaining uniqueness)
 return false;
}


