const myArr=[0,1,2,3,4,5]
const myhero=['shivank','shiv','shee'];
console.log(myhero[0]);

//Array methods
myArr.push(6)
myArr.pop()
console.log(myArr);
const newArr=myArr.join();
console.log(newArr);
console.log(typeof(newArr));
console.log(typeof(myArr));

const mn1=myArr.slice(1,3);
console.log(mn1); 
console.log('b',myArr);
const mn2=myArr.splice(1,3);
console.log(mn2);
console.log('a',myArr);



