
let Stack = function() {
  this.q1 = [];
  this.q2 = [];
}

Stack.prototype.push = function(x) {
  // push to queue2
  this.q2.push(x);
  while (this.q1.length > 0) {
    this.q2.push(this.q1.shift());
  }
  // swap the queues
  [this.q1, this.q2] = [this.q2, this.q1];
}

Stack.prototype.pop = function() {
  return this.q1.length === 0 ? null : this.q1.shift();
}

Stack.prototype.top = function() {
  return this.q1.length === 0 ? null : this.q1[0];
}

Stack.prototype.empty = function() {
  return this.q1.length === 0;
}

let myStack = new Stack();
myStack.push(44);
myStack.push(3)