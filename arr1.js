const currencies = new Map([
    ['USD','United States dollar'],
    ['EUR','Euro'],
    ['GBP','POUND Sterling'],
]);

console.log(currencies);

const movements = [200,450,-400,3000,-600,-130,70,1300];
let arr = ['a','b','c','d','e'];
// slice

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log(arr.slice(...arr));

// splice

arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);

// reverse

const arr2 = ['j','i','k','l'];
console.log(arr2.reverse());

// concat

const letters = arr.concat(arr2);
console.log(letters);

// join
console.log(...arr,...arr2);
console.log(letters.join('-'));


