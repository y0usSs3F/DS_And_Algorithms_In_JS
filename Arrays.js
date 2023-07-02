const strings = ['a', 'b', 'c', 'd'];

// let x = strings[2]

// while(strings[0] < x){
//     console.log(x)
//     x--;
// }


//Access
strings[2] //O(1)

//pop
strings.pop();  //O(1)

//push
strings.push('e');  //O(1)

//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2, 0 , 'Yousseff')



console.log(strings)
