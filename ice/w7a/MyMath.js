<<<<<<< HEAD
//Produces the sum of the two parameters
/**
 * The two parameters must be numbers, otherwise return undefined
 * @param a The first number 
 * @param b The second number
 */
export function Sum (a, b) {
if(typeof a == 'number' && typeof b == 'number')
  return (a + b)
else
  return undefined;
}

export function AddList(list) {
  var result = 0;
  for(var mem of list) {

  }
  for(var i = 0; i < list.length; i++) {
    if(list[i] == undefined)
      return underfined;
    result = result + list[i];
  }
 }  return 0;
}

let op1 = "ten";
let op2 = 2;
let result = Sum(op1,op2);
if(result==op1+op2) {
  console.log("It worked!");
} else {
  console.log("Expected" + op1+op2 )
}
=======
function Sum (a, b) {
  return a + b
}

console.log(Sum(2,3));

export { Sum };
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
