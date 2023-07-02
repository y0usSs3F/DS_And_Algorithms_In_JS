//  When it comes to building Stacks:
//  Using Arrays       ==> pros (despite the looping process that happens O(n) ==> accessing items faster in arrays than LinkedLists cuz the memory addressess located beside each others but the LinkedLists element's addressess located in different areas in the memory)
//  Using LinkedLists  ==> pros (size can be dynamic which we can add elements as we want and not being afraid about the size like the array does)


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {

    //return the LinkedList as it is, with it's values
    // return this.top;

    //return the value that inside the Last element, Remember Stacks is (LIFO)
    return this.top.value;
  }

  push(value){

    const newNode = new Node(value);

    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    }

    else{
       newNode.next = this.top;
       this.top = newNode;
    }

    this.length++;
    return this;

  }

  pop(){

    if(!this.top){
      return null;
    }

    if(this.top === this.bottom){
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
    return this;

  }


}


const myStack = new Stack();
myStack.push(5);
myStack.push(4);
myStack.push(3);
myStack.push(2);
myStack.push(1);
myStack.pop()
myStack.pop()
myStack.pop()
peek = myStack.peek();
console.log(peek);




