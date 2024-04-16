

// const rootNode = document.getRootNode();
// console.log(rootNode)
// console.log(rootNode.childNodes)
// const htmlElementNode = rootNode.childNodes[1];
// console.log(hen)
// console.dir(hen)
// console.log(hen.childNodes)

// const headElementNode = htmlElementNode.childNodes[0];
// const textNode = htmlElementNode.childNodes[1]
// const bodyElementNode = htmlElementNode.childNodes[2]
// console.log(headElementNode)
// console.log(headElementNode.parentNode)
// console.log(htmlElementNode.nextSibling)
// console.log(headElementNode.nextElementSiblings)

// const head = document.querySelector("h1")
// console.log(head)
// console.log(head.parentElement)
// console.log(head.parentElement.style.backgroundColor="red")
// const body = head.parentElement.parentElement
// console.log(body)
// console.log(body.style.backgroundColor="Grey")

// const body = document.body
// console.log(body)

// const head = document.querySelector("head")
// console.log(head)
// const title = head.querySelector("title")
// console.log(title)
// console.log(title.childNodes)

// const cont = document.querySelector(".container")
// console.log(cont)
// console.log(cont.childNodes)
// console.log(cont.children)

//----------------------------------------------------------------------------------------------------------------
// const todo = document.querySelector(".section-todo")
// console.log(todo)

//let and const are block scope means local 
//var is function scope means global
//shift - remove elements of array from starting position
//unshift - add elements from starting position
//push - add elements from end
//pop - remove elements from end

//to change any type to number just add + sign on front of assigned value
//exp var num = +"17"----> it will changed to number
// or var num = number("17")

// let array1 = ["item1", "item2"];
// let array2 = array1--->reference type
// array1.push("item3");
// any changes made in array1 will also reflect in array2.
//console.log(array2); -->["item1", "item2", "item3"]
//
// ----cloning of array------------------------------------------------------------------------------
//let array2 = array1.slice(0)---->return separete array for array2 from index 0
// let array2 = [].concat(array1)

//-----spread operator--------------------------------------------------------------------------------
//let onemore = ["item5", "item6"];
//let array2 = [...array1];
//let array2 = [...array1, ...onemore];
//let array2 = array1.slice(0).concat(["item3", "item4"])

//const myarray = ["1", "2"]
// let [myvar1, myvar2, ...mynewarray] = myarray
//console.log(myvar1)
//console.log(myvar2)
//console.log(mynewarray)

//------how to create objects------------------------------------------------------------------------
//const person = {
//      name: " nikhil",
//      age: 24,
//      hobbies: ["movies", "travel", "driving"]
// };
//console.log(person)
//console.log(person.hobbies)

//to add key value pair
//person.gender = "male"
//console.log(person)

//-----destructuring of objects----------------------------------------------------------------------
// const users = [
//      {id: 1, firstname: "nikhil", gender:"male"},
//      {id: 2, firstname: "nick", gender:"male"},
//      {id: 3, firstname: "coco", gender:"male"},
// ];
// const [{firstname}, ,{gender}] = users
// console.log(firstname)
// console.log(gender)

//-----functions--------------------------------------------------------------------------------------
// function name(){
//     console.log("lalalalala");
// }
// name();

//---arrow function------------------------------------------------------------------------------
// var func = function(num){
//     return function(){
//         return num++
//     }
// }
// const ans = func(5)
// func()
// func()
// func()
// console.log(ans)

// const func = (...num) =>{
//     for(let i of num){
//         console.log(i)
//     }
// }
// func("H&M", "MagicMoment", 78, {24:"bro",89:"get"}, 90)

//-------Param Destructuring-----------------------------------------------------------------------
//object 
//react

// const person = {
//     fname: "nikhil",
//     gend: "male",
// }

// const func =(obj) =>{
//     console.log(obj.fname)
//     console.log(obj.gend)
//     console.log(obj.lname)
// }
// or
// const func =({fname, gend}) =>{
//     console.log(fname)
//     console.log(gend)
//     console.log(lname)
// }

// func(person)

//----------------------------------callbacks--------------------------------------------------
// when we are passing function as a parameter to other functions
// const fun1 = (num1)=>{
//     console.log("user name")
//     return num1
// }
// const fun2 = (callback)=>{
//     console.log("i am function")
//     callback()
// }
// console.log(fun2(fun1))
// console.log(fun2(9))

//-------------------------------function returning function ---------------------------------------
// calbacks and function returning functiions are higher order functons
// const func1 = ()=>{
    // const func2 = () =>{
    //     return "i am function"
    // }
    // // return {name:"nik", age:"24", gen:24}
    // return func2
    // or
//     return function(){
//         return "i am function"
//     }
// }
// const ans = func1()
// console.log(ans())

//---------------------------------important array methods-----------------------------------------------
//map
//filter
//reduce

// const num = [1,3,5,7,9]
// const func1 = (num, ind)=>{
//     console.log("index is:", ind)
//     console.log(`${num}*2 = ${num*2}`)
// }
// for(let i=0;i<num.length;i++){
//     func1(num[i],i)
// }
// or
// num.forEach(func1)
//or
// num.forEach(function(num,ind){
//     console.log("index is:", ind)
//     console.log(`${num}*2 = ${num*2}`)
// })

//------------------------------------map function-------------------------------
// const arr = [4,6,8,3,2,5]
// const sqre = function(num){
//     return num*num
// }
// const sqrenum = arr.map(sqre)
// or
// const sqrenum = arr.map((num, ind)=>{
//     return `index: ${ind}, ${num*num}`
// })
// console.log(sqrenum)

//----------------------------------filter------------------------------------
// const arr = [4,6,8,3,2,5]
// const ans = arr.filter((num)=>{
//     return num%2==0
// })
// console.log(ans)

//-----------------------------reduce--------------------------------
// const arr = [4,6,8,3,2,5]
// const arr = [3,2,5]
// const red = arr.reduce((init, sum)=>{
//     return init+sum
// })
// console.log(red)

//-----------------------------sort---------------------------------------
//change original array
//it sort as a string (considers number as a string) according to ASCII code
// console.log(arr.sort((a,b)=>a-b)) it return sorting of number 

// const arr = [4,6,8,3,2,5]
// const arr = [5,9,1200,400,3000]
// console.log(arr.sort())

// const users = [
//     {id: 1, firstname: "nikhil", gender:"male", price:8000},
//     {id: 2, firstname: "nick", gender:"male", price:3000},
//     {id: 3, firstname: "coco", gender:"male",price:600}
// ];
// console.log(users.sort((a,b)=>a.price-b.price))

//--------------------------------------------find method--------------------------------------
// const arr = ["hello", "cat", "dog", "lion"]
// const ans = arr.find((string)=>{
//     return string.length === 3;
// })
// console.log(ans)

//------------------------------------every method---------------------------------------
// return true or false if condition is satisfied with each of the element
// const arr = [4,6,8,3,2,5]
// const arr = [4,6,8,2]
// const ans = arr.every((num)=>{
//     return num%2===0
// })
// console.log(ans)

//---------------------------------------some method-------------------------------------
// return true or false if condition is satisfied with atleast one of the element
// const arr = [4,6,8,3,2,5]
// const ans = arr.some((num)=>{
//     return num%2===0
// })
// console.log(ans)

//-------------------------------fill method--------------------------------------
//value, start, end
// const arr = new Array(10).fill(-1)
// console.log(arr)

// const arr = [4,6,8,3,2,5]
// const ans = arr.fill(0,2,4)
// console.log(ans)

//-------------------------------splice method-------------------------------------
//start, delete, insert
// const arr = ["item1", "item2", "item3"]

//delete
// const ans = arr.splice(1,1)
// console.log(arr)
// console.log(ans) //deleted item

//insert
// arr.splice(1,0,'inserted item')
// console.log(arr)

//insert and delete
// arr.splice(1,2,"inserted item1", "inserted item2")
// console.log(arr)

//---------------------------------sets---------------------------------------------------
//it is iterable
//store data
//they have also own methods
//no index based access
//order is not guranteed
//unique items only(no duplicate allowed)---

// const num = new Set([1,2,3,4,5])
// const items = ['item1', 'item2', 'item3']
// num.add(2)
// num.add("items")
// num.add(["item1", "item2"])//stored at diff address
// num.add(["item3", "item4"])//stored at diff address
// num.add(8)
// if(num.has(2)){
//     console.log("value is present")
// }else{
//     console.log("value is not present")
// }
// console.log(num)

//--------------------------map objects-----------------------
//it is iterable
//stored data in ordered manner
//store key value pair( like object)
//duplicate keys are not allowed like objects
//different between maps and objects
// objects can have only string or symbol as key
//in maps we can use anythong as key like array , number, string

//object literal
//key always in string or symbol
// const per = {
//     fname:"nikhil",
//     age: 24,
//     1:"one" //type of 1 is string
// }
// console.log(per.fname)
// console.log(per.age)
// for(let key in per){
//     console.log(typeof(key))
// }

//key value pair
// const per = new Map();
// per.set('fname','nick')
// per.set('age','19')
// per.set(1,'one')
// console.log(per)
// console.log(per.get('fname'))
// console.log(per.get(1))
// console.log(per.keys())
// for(let key of per.keys()){
//     console.log(key)
// }
// for(let key of per){
    // console.log(key)
    // console.log(Array.isArray(key))
// }

//destructuring
// for(let [key, value] of per){
//     console.log(key,value)
// }

//Main difference between map and object is map allowed keys to be of any type while object 
// has only key of only string type

// const per = new Map([['fname', 'nick'],['age',19]])
// console.log(per)

//-------------------clone usig object.assign-----------------------------------------------------------------
// const obj = {
//     key1: "value1",
//     key2: "value2"
// }
// const obj2 = obj //in same memory location
// const obj2 = {...obj} //differnt memory location
// const obj2 = Object.assign({}, obj) //different memory location
// obj.key3 = "value3"
// console.log(obj)
// console.log(obj2)

//------------------optional chaining----------------------
//if it is present then show if not it will show undefined
// const user = {
//     fname:"nick",
//     age:24,
//     // address:{houseno:'1234'}
// }
// let user;
// console.log(user?.fname)
// console.log(user.address)
// console.log(user.address.houseno) //will show error
// console.log(user?.address?.houseno) //show undefined, '?' is used for nested object

//----------------------method-------------------------------
//function inside object

// function personinfo(){
//     console.log(`person name is ${this.fname} and age is ${this.age}`)
// }

// const person1 = {
//     fname:"nick",
//     age:19,
//     about: personinfo
// }// here this is person object
// const person2 = {
//     fname:"moh",
//     age:18,
//     about: personinfo
// }
// const person3 = {
//     fname:"poo",
//     age:21,
//     about: personinfo
// }
// const person = {
//     fname:"nikhil",
//     age:19,
//     about: function(){
//         console.log(`person name is ${this.fname} and age is ${this.age}`)
//     }
// }// here this is person object
// person1.about()
// person2.about()
// person3.about()
// console.log(person.about)

//-------------window object-----------------------------
// console.log(this)
// //or
// console.log(window)

// function func(){
//     "use strict"
//     console.log(this)
// }
// window.func()

//-------------------call,apply,bind-------------------------------
// const user1 = {
//     fname: "nick",
//     age: 19,
//     about: function(hobby, music){
//         console.log(this.fname, this.age, hobby, music)
//     }
// }

// const user2 = {
//     fname:"poo",
//     age: 18,
// }

// function userinfo(hobby, music){
//     console.log(this.fname, this.age, hobby, music)
// }

// const user1 = {
//     fname: "nick",
//     age: 19,
//     // about: userinfo
// }

// const user2 = {
//     fname:"poo",
//     age: 18,
// }
// // user1.about("cute", "doggy")
// userinfo.call(user1, "cute", "doggy")
// userinfo.call(user2, "guitar", "bollywood")
// user1.about.call(user2, "guitar", "bollywood") 

//apply-----------------------
//passing in a array
// userinfo.apply(user1, ["guitar","bolly"])

//bind---------------------------
//it returns function
// const func = userinfo.bind(user1, ["guitar","bolly"])
// const func = userinfo.bind(user1, "cute", "doggy")
// func()

//---small warning-------------------------------
// const user1 = {
//     fname: "nick",
//     age:20,
//     about:function(){
//         console.log(this.fname, this.age)
//     }
// }
// const func = user1.about.bind(user1)
// func()

//----------------arrow function---------------------------
//arrow function doesn't have 'this'. It takes this from their surrounding of one level up
//we cann't change this of arrow function
// const user1 = {
//     fname: "nick",
//     age:20,
//     about:()=>{
//         console.log(this.fname, this.age)
//     }
// }//in this 'this' will be window object
// user1.about(user1)

// const user1 = {
//     fname: "nick",
//     age:20,
//     about(){
//         console.log(this.fname, this.age)
//     }
// }
// user1.about()

//
// const user = {
//     fname:"nikhil",
//     lname:"bharti",
//     age:24,
//     email:"nikhil.bharti@hcl.com",
//     address:"Bakhtawarpur, Delhi-110036",
//     about:function(){
//         return `${this.fname} ${this.lname} is ${this.age} years`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// const use = user.about()
// console.log(use)

//function(that function create object)
//2.) add key value pair
//3.) return object

// function createUser(fname, lname, email, age, address){
//     const user = {};
//     user.fname = fname
//     user.lname = lname
//     user.age = age
//     user.email = email
//     user.address = address
//     user.about =function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`
//     },
//     user.is18 = function(){
//         return this.age>=18;
//     }
//     return user
// }

// const userMethods = {
//     about :function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }

// function createUser(fname, lname, email, age, address){
//     const user = {};
//     user.fname = fname
//     user.lname = lname
//     user.age = age
//     user.email = email
//     user.address = address
//     user.about = userMethods.about //refernce
//     user.is18 = userMethods.is18
//     return user
// }

// const userMethods = {
//     about :function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }

// function createUser(fname, lname, email, age, address){
//     const user = {};
//     user.fname = fname
//     user.lname = lname
//     user.age = age
//     user.email = email
//     user.address = address
//     user.about = userMethods.about //refernce
//     user.is18 = userMethods.is18
//     return user
// }

// const userMethods = {
//     about :function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
//     sing: function(){
//         return `ab bc cd ef gh`
//     }
// }

// function createUser(fname, lname, email, age, address){
//     const user = {};
//     user.fname = fname
//     user.lname = lname
//     user.age = age
//     user.email = email
//     user.address = address
//     user.about = userMethods.about //refernce
//     user.is18 = userMethods.is18
//     user.sing = userMethods.sing
//     return user
// }

// const user1 = createUser("nick", "bharti", "nikhil.bharti@hcl.com", 24, "delhi")
// const user2 = createUser("poo", "karl", "poo.karl@hcl.com", 19, "noida")
// const user3 = createUser("moh", "mess", "moo.mess@hcl.com", 20, "gurgaon")
// console.log(user2.about())
// console.log(user3.about())
// console.log(user3.is18())
// console.log(user3.sing())
// console.log(user1)
// const is18 = user1.is18()
// console.log(is18)
// const about = user1.about()
// console.log(about)

//----------------creating empty object with the help of object keyword -------------------------------
// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// }

// const obj2 = {
    //there is one more way to create empty object
    // key3:"value3",
    // key4:"value4"
// }
// console.log(obj2.key1)//undefined

// //there is one more way to create empty object
// const obj2 = Object.create(obj1) //return empty object
// //setting [[prototype property to obj1]]

// obj2.key3 = "value3"
// // obj2.key2 = "value2.1"
// // console.log(obj1.key1)
// console.log(obj2)
// console.log(obj2.key3)
// console.log(obj2.key2)
// console.log(obj2.__proto__)

//------------------------------------------------------
// const userMethods = {
//     about :function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
//     sing: function(){
//         return `ab bc cd ef gh`
//     }
// }

// function createUser(fname, lname, email, age, address){
//     const user = Object.create(userMethods);// returning empty object and setting proto chain to userMethods
//     user.fname = fname
//     user.lname = lname
//     user.age = age
//     user.email = email
//     user.address = address
//     return user
// }

// const user1 = createUser("nick", "bharti", "nikhil.bharti@hcl.com", 24, "delhi")
// const user2 = createUser("poo", "karl", "poo.karl@hcl.com", 19, "noida")
// const user3 = createUser("moh", "mess", "moo.mess@hcl.com", 20, "gurgaon")
// console.log(user1)
// console.log(user1.about())

//----------------------------------------------------------------------------------------------
// javascript function =======> function + object
//function provides more useful property
//function provides free space, that free space is object. That thing is prototype
//only function provides prototype property.

// function hello(){
//     console.log("hello world")
// }
// console.log(hello.name)// tells the nme of that function

//To add property to that function------
// hello.property1 = "property1"
// console.log(hello.property1)
// console.log(hello.prototype)//{}
// hello.prototype.abc = "abc"
// hello.prototype.xyz = "xyz"
// hello.prototype.sing = function() {
//     return "bolyy"
// }
// console.log(hello.prototype.sing())
// console.log(hello.prototype.abc)

//--------------------------------------------------------------------------------
// const userMethods = {
//     about :function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
//     sing: function(){
//         return `ab bc cd ef gh`
//     }
// }

// function createUser(fname, lname, email, age, address){
//     const user = Object.create(createUser.prototype);// returning empty object and setting proto chain to userMethods
//     user.fname = fname
//     user.lname = lname
//     user.age = age
//     user.email = email
//     user.address = address
//     return user
// }
// console.log(createUser.prototype)
// createUser.prototype.about = function(){
//     return `${this.fname} ${this.lname} is ${this.age} years old`
// }
// createUser.prototype.is18 = function(){
//     return this.age>=18;
// }
// createUser.prototype.sing = function(){
//     return `ab bc cd ef gh`
// }

// const user1 = createUser("nick", "bharti", "nikhil.bharti@hcl.com", 24, "delhi")
// const user2 = createUser("poo", "karl", "poo.karl@hcl.com", 19, "noida")
// const user3 = createUser("moh", "mess", "moo.mess@hcl.com", 20, "gurgaon")
// console.log(user1)
// console.log(user1.about())
// console.log(user1.is18())

//-----------------------------------------------------------------------------------------------------
//new keyword
//1.) create empty object , this = {}
//2.)return this
//3.)Object.create(createuser.prototype)

// function createUser(fname, age){
//     this.fname = fname
//     this.age = age
// }
// createUser.prototype.about = function(){
//     console.log(this.fname, this.age)
// }
// const user1 = new createUser("nikhil", 18)
// console.log(user1)

//--------------------------------------------------------------------------------------------------
// const userMethods = {
//     about :function(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age>=18;
//     },
//     sing: function(){
//         return `ab bc cd ef gh`
//     }
// }

// //constructor function
// function CreateUser(fname, lname, email, age, address){
//     // const user = Object.create(createUser.prototype);// returning empty object and setting proto chain to userMethods
//     // const user = Object.create(createUser.prototype);//new keyword is doing this operation , this = {}
//     this.fname = fname
//     this.lname = lname
//     this.age = age
//     this.email = email
//     this.address = address
// }
// console.log(CreateUser.prototype)
// CreateUser.prototype.about = function(){
//     return `${this.fname} ${this.lname} is ${this.age} years old`
// }
// CreateUser.prototype.is18 = function(){
//     return this.age>=18;
// }
// CreateUser.prototype.sing = function(){
//     return `ab bc cd ef gh`
// }

// const user1 = new CreateUser("nick", "bharti", "nikhil.bharti@hcl.com", 24, "delhi")
// const user2 = new CreateUser("poo", "karl", "poo.karl@hcl.com", 19, "noida")
// const user3 = new CreateUser("moh", "mess", "moo.mess@hcl.com", 20, "gurgaon")
// console.log(user1)
// console.log(user1.about())
// console.log(user1.is18())
// for(let key in user1){
    // console.log(key)
    // if(user1.hasOwnProperty(key)){
    //     console.log(key)
    // }
// }

//--------------------------------------------------------------------------------------------------------
//prototype
//prototype ---- functions
// let num = [1,2,3,4]
// let num = new Array(1,2,3,4,5)
// console.log(num)
// // console.log(Array.prototype)
// console.log(Object.getPrototypeOf(num))

//----------------------------------------------------------------------------------------------------
//class keyword
//classes are fake
//constructor function

// class CreateUser{
//     constructor(fname, lname, email, age, address, gen){
//         console.log("Constructor called !!!")
//         this.fname = fname
//         this.lname = lname
//         this.age = age
//         this.gen = gen
//         this.email = email
//         this.address = address
//     }
//     about(){
//         return `${this.fname} ${this.lname} is ${this.age} years old`
//     }
//     is18(){
//         return this.age>=18;
//     }
//     gender(){
//         return `${this.gen}`
//     }
//     func(a){
//         console.log(a)
//     }
// }

// const user1 = new CreateUser("nick", "bharti", "nikhil.bharti@hcl.com", 24, "delhi", "male")
// const user2 = new CreateUser("poo", "karl", "poo.karl@hcl.com", 19, "noida","female")
// const user3 = new CreateUser("moh", "mess", "moo.mess@hcl.com", 20, "gurgaon","female")
// const user4 = new CreateUser("jhg", "gjhj", "hgiy.esa@hcl.com", 17, "gurgaon","male")
// // console.log(user1)
// // console.log(user1.about())
// // console.log(user1.is18())
// // console.log(user4.is18())
// console.log(user1.func(12))
// console.log(Object.getPrototypeOf(user4))

//----------------------------------PRACTICE SET(inheritance)------------------------------------------------------------------------------
//cat class
// class animal{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     eat(food){
//         return `${this.name} eat ${food}`
//     }
//     isCute(){
//         return this.age<=5
//     }
// }

// //dog class
// //inheritance
// class dog extends animal{
//     constructor(name, age, speed){
//         super(name, age)
//         this.speed = speed
//     }
//     isCute(){
//         return this.age>=5
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// }

// //cat class
// class cat extends animal{
    
// }

// const dog1 = new dog("tommy", 7, 45)
// const dog2 = new dog("jerry", 3)
// //console.log(dog1)
// console.log(dog1.isCute())
// console.log(dog1.eat("banana"))
// console.log(dog1.run())

// const cat1 = new cat("miku", 12)
// const cat2 = new cat("paneer", 10)
// // console.log(cat1)
// // console.log(cat1.isCute())
// // console.log(cat1.eat("milk"))

//--------------------------------------------------------------------------------------------------------------------
// class animal{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     eat(food){
//         return `${this.name} eat ${food}`
//     }
//     isCute(){
//         return this.age<=5
//     }
// }

// //dog class
// //inheritance
// class dog extends animal{
//     constructor(name, age, speed){
//         super(name, age)
//         this.speed = speed
//     }
    
//     //modified eat
//     eat(food){
//         return `Modified eat : ${this.name} eat ${food}`
//     }
//     //modified iscute
//     isCute(){
//         return this.age>=5
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// }

// //cat class
// class cat extends animal{
    
// }

// const dog1 = new dog("tommy", 7, 45)
// const dog2 = new dog("jerry", 3)
// // console.log(dog1)
// console.log(dog1.isCute())
// console.log(dog1.eat("banana"))
// console.log(dog1.run())

// const cat1 = new cat("miku", 12)
// const cat2 = new cat("paneer", 10)
// // console.log(cat1)
// // console.log(cat1.isCute())
// // console.log(cat1.eat("milk"))

//-------------------------------------------GETTERES and SETTERS----------------------------------------------------------------
// class person{
//     constructor(fname, lname, age){
//         this.fname = fname
//         this.lname = lname
//         this.age = age
//     }

//     //getter methods
//     get getname(){
//         return `${this.fname} ${this.lname}`
//     }
//     //setter methods
//     // setname(fname, lname){
//     //     this.fname = fname
//     //     this.lname = lname
//     // }
//     set getname(getname){
//         //getname.split(" ")
//         //[harry, potter]
//         const [fname, lname] = getname.split(" ")
//         this.fname = fname
//         this.lname = lname
//     }
// }

// const per1 = new person("harry", 'potter', 1000)
// console.log(per1)
// // console.log(per1.fname)
// console.log(per1.getname)
// // console.log(per1.setname)
// // console.log(per1.setname)
// // per1.getname("clay", "chloe")
// per1.getname = "sam altman"
// console.log(per1.getname)

//--------------------------------------static methods and properties---------------------------------------------------
// class person{
//     constructor(fname, lname, age){
//         this.fname = fname
//         this.lname = lname
//         this.age = age
//     }

//     //static properties
//     static desc = "static property"

//     //static methods
//     static classinfo(){
//         return `this is person class`
//     }

//     //getter methods
//     get getname(){
//         return `${this.fname} ${this.lname}`
//     }

//     //settors
//     set getname(getname){
//         //getname.split(" ")
//         //[harry, potter]
//         const [fname, lname] = getname.split(" ")
//         this.fname = fname
//         this.lname = lname
//     }

//     eat(food){
//         return `${this.fname} is eating`
//     }
//     //modified iscute
//     isCute(){
//         return this.age>=5
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// }

// const per1 = new person("harry", "potter", 18 )
// console.log(per1.eat())
// // const ans = person.classinfo()
// // console.log(ans)
// console.log(person.classinfo())//static method can only be called directly my class name not class objects
// console.log(person.desc)//static property can only be accessed by using only classname

//----------------------------------------------------------------------------------------------------
//JavaScript itself is synchronous language(single threaded) but asynchronous property is provided by browser.
//step 1: compilation
//        compilation phase is done in 3 parts
//        a) tokenizing/lexing-chunks of code b)parsing-converts chunks of code into Abstract Syntax Tree c)code generation
//        -> early error checking
//        -> determining appropriate scope for variable

//step2: code execution phase
//     ->in js code executes inside execution context (global execution context)

//why compilation

//how javascript code executes

// console.log(this) //1)global execution context - a)creation phase(global memory) b)code execution phase
// console.log(window)//
// console.log(fname)
// var fname = "puppy" //global scope
// console.log(fname)

//-----------TDZ(Temporal dead zone)-----------
//The time period when the variable before initailization, the variable store in TDZ
//console.log(fname) //fname is in tdz before initialisztion and give u refernec error
// let fname = "rome"

//------------------------------CLOSURES---------------------------------------------------------
//function returning function
// function outerfunc(fname, lname){
//     function innerfunc() {
//         console.log(fname,lname)
//     }
//     return innerfunc
// }
// const ans = outerfunc("nick", "jonas")// ans is storing returned function i.e: innerfunction()
// // console.log(ans)
// ans()

//PRACTICE SET 1--------------
// function outerfunc(sum){
//     function innerfunc(num) {
//        console.log(sum+num)
//     }
//     return innerfunc
// }
// const ans = outerfunc(5)// ans is storing returned function i.e: innerfunction()
// console.log(ans)
// ans(4) //9 = 5+4
// ans(6)//11 = 5+6
// ans(2)//7 = 5+2

// PRACTICE SET 2-------------------
// function outer(x){
//     // const a = "tom"
//     // const b = "jerry"
//     return function(a,b){
//         console.log(a,b,x)
//     }
// }
// const ans = outer("on bed")
// ans("johny", "sins")
// ans("nick", "jonas")
// ans("sunny", "leone")
// ans("mia", "khalifa")

//PRACTICE SET 3-------------------
// function func(pow){
//     return function(num){
//         console.log(num ** pow)
//     }
// }
// const pow = func(3)
// pow(2)
//or
// const func = (pow) => {
//     return (num)=>{
//         return num ** pow
//     }
// }
// const pow = func(2)
// const ans = pow(2)
// console.log(ans)

//PRACTICE SET 4-------------------
// function func(){
//     let cnt = 0
//     return function(){
//         if (cnt==0){
//             console.log("Hi, You called me !!!")
//         }else if(cnt>=1){
//             console.log("Already called once")
//         }
//         cnt++
//     }
// }
// const ans = func()
// ans()
// ans()
// const ans2 = func()

//

