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

/*for(let a of array){
    console.log(a);
  }
  const each = (item,index) => {
    if(index>1 && index<5){
      item.name='test'
    }
  }
for(let i=0;i<array.length;i++){
   console.log(array[i]);
}*/

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
  return price === 76;
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

//pop-removes the last element of an array, and returns that element
//output:u
var vow=['a','e','i','o','u'];
console.log(vow.pop());

//push- adds new items to the end of an array, and returns the new length
//output:5
var vow1=['a','e','i'];
console.log(vow1.push('o','u'));
console.log(vow1);

//shift-removes the first item of an array
//output:pigeon
console.log(bird);
console.log(bird.shift());

//unshift-adds new items to the beginning of an array, and returns the new length
//output:5
console.log(bird.unshift("peacock","ostrich"));

//---------------------------------------------------

//Exercise - Prompt and calculate mnarks
//--js file
/*
let name = prompt("Enter the name","roopa");
let m1 = prompt("Enter mark1","78");
while(isNaN(m1)==true)
{
    alert("Enter valid mark1");
    m1 = prompt("Enter mark1");
}
let m2 = prompt("Enter mark2","82");
while(isNaN(m2)==true)
{
    alert("Enter valid mark2");
    m2 = prompt("Enter mark2","78");
}
let m3 = prompt("Enter mark3","65");
while(isNaN(m3)==true)
{
    alert("Enter valid mark3");
    m3 = prompt("Enter mark3","78");
}
function obj(name,m1,m2,m3) {
    this.name = name,
    this.m1=m1,
    this.m2=m2,
    this.m3=m3
}

function total(){
    this.name=name;
    this.objtotal=parseInt(m1)+parseInt(m2)+parseInt(m3);
}

function avg(){
    this.objavg=objtotal.objtotal/3;
}

function det(){
    this.name=objdetails.name,
    this.total=objtotal.objtotal,
    this.avg=objavg.objavg
}

const objdetails = new obj(name,m1,m2,m3);
console.log(objdetails);
const objtotal = new total();
console.log(objtotal);
const objavg = new avg();
console.log(objavg);
const totaldet = new det();
console.log(totaldet);
*/
