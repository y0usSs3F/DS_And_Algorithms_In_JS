// when it comes to building Queues:
// it would be Extremely BAD idea to implement it in Arrays cuz the Array using indexs and for example if we wanna remove the first element we should loop through the whole elements and shift the indexs to be in the right position and it takes O(n), but LinkedLists on the other hand all it have is (Head + Tail) and if we wanna add element or remove element we would do it by this pointer and it's O(1) Super simple isn't it?


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {

  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
    if(!this.first){
      return null
    }
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
final_result = myQueue.enqueue('Samir');
console.log(final_result)

final_result = myQueue.peek()
console.log(final_result)

final_result = myQueue.dequeue()
console.log(final_result)
