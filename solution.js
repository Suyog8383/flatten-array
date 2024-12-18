//flattenn Array
const arr=[1,2,[3,4,5],6,[7],8,[9,10,11]]
function flattenArray(input){
  let final =[];
  for(let i=0;i<input.length;i++){
    if(Array.isArray(input[i])){
      //final= final.concat(flattenArray(input[i]))
        final.push(...flattenArray(input[i]))
    }else{
      final.push(input[i])
    }
  }
  return final
}
console.log(flattenArray(arr))
