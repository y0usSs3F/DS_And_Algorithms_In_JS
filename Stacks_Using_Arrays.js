//  When it comes to building Stacks:
//  Using Arrays       ==> pros (despite the looping process that happens O(n) ==> accessing items faster in arrays than LinkedLists cuz the memory addressess located beside each others but the LinkedLists element's addressess located in different areas in the memory)
//  Using LinkedLists  ==> pros (size can be dynamic which we can add elements as we want and not being afraid about the size like the array does)


class Stack {
  constructor(){
    this.array = [];
  }

  peek() {
    return this.array[this.array.length-1];
  }

  push(value){
    this.array.push(value);
    return this;
  }

  pop(){
    this.array.pop();
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

