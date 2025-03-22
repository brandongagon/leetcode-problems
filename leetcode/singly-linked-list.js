
function LinkedList() {
  this.head = null;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

LinkedList.prototype.add = function(node) {
  console.log('Adding Node', node);
  let pointer = null;
  if (!this.head) {
    // here, we add the FIRST node
    this.head = node;
  } else {
    // here, we add the SECOND node
    pointer = this.head;
    while (pointer.next) {
      // here we add the THIRD and any SUBSEQUENT nodes
      pointer = pointer.next
    }
    pointer.next = node;
  }
}

let list = new LinkedList();

let d1 = new Node('diablo1');
let d2 = new Node('diablo2');
let d3 = new Node('diablo3');

list.add(d1);
list.add(d2);
// list.add(d3);