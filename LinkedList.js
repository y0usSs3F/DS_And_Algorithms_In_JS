// let myLinkedList = {
// 	head: {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: {
// 				value: 16,
// 				next: null
// 			}
// 		}
// 	}
// }

    // 20-->30-->40




class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}





class LinkedList{
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail =	this.head;
		this.length = 1;
	}

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;    
  }



  printList() {
  	const array = [];
  	let currentNode = this.head;
  	while(currentNode !== null){
  		array.push(currentNode.value);
  		currentNode = currentNode.next;
  	}
  	return array;
  }


  insert(index, value){
  	//check params
  	if (index >= this.length){
  		return this.append(value);
  	}
  	const newNode = new Node(value);
  	const leader = this.traverseToIndex(index-1);
  	newNode.next = leader.next;
  	leader.next = newNode;
  	this.length++;
  }

  traverseToIndex(index){
  	let counter = 0;
  	let currentNode = this.head;
  	while(counter !== index){
  		currentNode = currentNode.next;
  		counter++;
  	}
  	return currentNode;
  }

  remove(index){
  	if(index >= this.length){
  		return "Non Valid Index!"
  	}
  	const leader = this.traverseToIndex(index-1);
  	let nextIndex = leader.next.next;
  	delete(leader.next);
  	leader.next = nextIndex;
  	this.length--;
  }

  reverse(){
  	if(!this.head.next){
  		return this.head;
  	}
  	let first = this.head;
  	this.tail = this.head;
  	let second = first.next;
  	while(second){
  		const temp = second.next;
  		second.next = first;
  		first = second;
  		second = temp;
  	}
  	this.head.next = null
  	this.head = first
  	return this.printList()
  }

}




const myLinkedList = new LinkedList(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(1);
myLinkedList.insert(20, 6);
myLinkedList.insert(4, 5);
array = myLinkedList.reverse();
// array = myLinkedList.printList();
console.log(array);



































// class DoublyNode {
// 	constructor(value){
// 		this.value = value;
// 		this.next = null;
// 		this.prev = null;
// 	}
// }


// class DoublyLinkedList{
// 	constructor(value){
// 		this.head = {
// 			value: value,
// 			next: null,
// 			prev: null
// 		}
// 		this.tail =	this.head;
// 		this.length = 1;
// 	}

//   append(value) {
//     const newNode = new DoublyNode(value);
//     newNode.prev = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }

//   prepend(value){
//     const newNode = new DoublyNode(value);
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;    
//   }



//   printList() {
//   	const array = [];
//   	let currentNode = this.head;
//   	while(currentNode !== null){
//   		array.push(currentNode.value);
//   		currentNode = currentNode.next;
//   	}
//   	return array;
//   }


//   insert(index, value){
//   	//check params
//   	if (index >= this.length){
//   		return this.append(value);
//   	}
//   	const newNode = new DoublyNode(value);
//   	const leader = this.traverseToIndex(index-1);

//   	newNode.next = leader.next;
//   	newNode.prev = leader;
//   	leader.next.prev = newNode;
//   	leader.next = newNode;

//   	this.length++;
//   }

//   traverseToIndex(index){
//   	let counter = 0;
//   	let currentNode = this.head;
//   	while(counter !== index){
//   		currentNode = currentNode.next;
//   		counter++;
//   	}
//   	return currentNode;
//   }

//   remove(index){
//   	if(index >= this.length){
//   		return "Non Valid Index!"
//   	}
//   	const leader = this.traverseToIndex(index-1);
//   	let nextIndex = leader.next.next;
//   	delete(leader.next);
//   	leader.next = nextIndex;
//   	this.length--;
//   }


// }


// const myLinkedList = new DoublyLinkedList(2);
// myLinkedList.append(3);
// myLinkedList.append(4);
// myLinkedList.prepend(1);
// // myLinkedList.insert(299, 99);
// myLinkedList.insert(2, 22)
// // myLinkedList.prepend(1);
// // myLinkedList.remove(2);
// array = myLinkedList.printList();
// console.log(array);
// // console.log(myLinkedList)

