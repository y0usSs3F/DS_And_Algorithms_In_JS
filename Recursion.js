// 1. Identify the base case          (when to stop recursive)                    the if condition here in the code
// 2. Identify the recursive case     (when the counter is greater than 3)        the return inception() line here
// 3. Get Closer and Closer and return when needed. Usually you have 2 returns (base case + recursive case)



let counter = 0
function inception(){
  console.log(counter)
  if(counter > 3){
    return "done!";
  }
  counter++;
  return inception();
}

console.log(inception());







// another idea of recursion ==> grab the factorial

function findFactorialRecursive(number) {  //O(n)
  if(number === 2){
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}



result = findFactorialRecursive(5);
console.log(result);
