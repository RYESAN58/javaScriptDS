

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}



class Stack {


  constructor() {
    this.top = null;
  }

  push(item){
    this.top = new Node(item, this.top);
  }

  pop(){
    this.top = this.top.next;
  }

  peek() {
    console.log(this.top.data);
  }
  s
  isEmpty(){
    return this.top == null; 
  }

}


let x = new Stack();

x.push(8)
x.push(100)
x.push(7)
x.pop()
x.peek()
console.log(x.isEmpty())
