const arr = [1,2,3,4,5];
//arr.forEach((element,index,array)=>{element%2===0?console.log(element):""});
const newarr = arr.filter((element,index,array) =>element);
const value = arr.reduce((previous,element)=> Math.max(previous,element));
console.log(value);
console.log(newarr);