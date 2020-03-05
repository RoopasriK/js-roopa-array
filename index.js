//Array Methods

//forEach, map, filter, include, indexOf, findIndex, find, reduce, slice,splice, sort, reverse, concat, pop, push, shift, unshift

//forEach - method calls a function once for each element in an array, in order
//output:0:dog
  //     1:cat
  //     2:fish
  //     3:parrot
var pet = ['dog', 'cat', 'fish', 'parrot'];
pet.forEach(fnc);

function fnc(item,index)
{
  console.log(index + ':' + item);
}

//map - creates a new array with the results of calling a function for every array element
//output:[11, 22, 33, 44, 55]
var arr = [1,2,3,4,5];
var newarr = arr.map(fnc1);

function fnc1(num){
  return num*11;
}
console.log(newarr);

//filter-creates an array filled with all array elements that pass a test
//output:[145, 76, 101, 95]
var price=[145,23,76,101,35,95];
function fnc2(price){
  return price>=50;
}
console.log(price.filter(fnc2))

//include-determines whether an array contains a specified element
//output:true
var bird=['dove','mynah','pigeon','eagle'];
console.log(bird.includes('pigeon'));

//indexOf-searches the array for the specified item, and returns its position
//output:1
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf('Orange'));


//findIndex-returns the index of the first element in an array that pass a test
//output:2
var price=[23,1,76,101,35,95];
function fnc3(price){
  return price>=50;
}
console.log(price.findIndex(fnc3))

//find-returns the value of the first element in an array that pass a test
//output:76
function fnc4(price){
  return price>=50;
}
console.log(price.find(fnc4))

//reduce-reduces the array to a single value
//output:32
var ar=[16,7.85,6.01,2.45];
function fnc5(total,num){
  return total+Math.round(num);
}
console.log(ar.reduce(fnc5));

//slice-returns the selected elements in an array, as a new array object
//output:["mynah", "pigeon"]
var bird=['dove','mynah','pigeon','eagle'];
var sl=bird.slice(1,3);
console.log(sl);

//splice-adds/removes items to/from an array, and returns the removed item
//output:["pigeon", "eagle"]
var bird1=['dove','mynah','pigeon','eagle'];
console.log(bird1.splice(2,2,'crow','cuckoo'));

//sort-sorts the items of an array
//output:["dove", "eagle", "mynah", "pigeon"]
console.log(bird.sort());

//reverse-reverses the order of the elements in an array
//output:["pigeon", "mynah", "eagle", "dove"]
console.log(bird.reverse());

//concat-used to join two or more arrays
//output:[1, 2, 3, 4, 5, 145, 23, 76, 101, 35, 95]
var arr = [1,2,3,4,5];
var price=[145,23,76,101,35,95];
var join=arr.concat(price);
console.log(join);


