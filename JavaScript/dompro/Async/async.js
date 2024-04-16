//Synchronous Programming Vs Asynchrnous Programing
//Synchrnous pragramming single thread

//Synchrnous
// console.log("scripts start")

// for(let i=1; i<10000; i++){
//     console.log("Inside for loop")
// }

// console.log("Scripts End")

//setTimeout
// console.log("scripts start")

// function hello() {
//     console.log("hello")
// }
// setTimeout(hello, 5000)

// const id = setTimeout(() => {
//     console.log("hello")
// }, 5000);

// for (let index = 1; index <= 100; index++) {
//     console.log("...")
// }

// console.log("SetTimeout ID is", id)
// console.log("Clearing Timeout")
// clearTimeout(id)
// console.log("Scripts End")

//SETINTERVAL
// console.log("scripts start")

// setInterval(() => {
//    console.log(Math.floor(Math.random()*1000)) 
// }, 1000);
// console.log("scripts end")

//----------------------------SETINTERVAL AND SETTIMEOUT IS LOCATED IN WEBAPIS PROVIDED BY BROSER--------------
// console.log("scripts start")
// setInterval(() => {
//     for(let i=0;i<10000000000; i++){
//         continue;
//     }
//    console.log(Math.floor(Math.random()*1000)) 
// }, 2000);
// console.log("scripts end")

//---------------------------------------------------------------------------------------------------------------
// const body = document.body
// const button = document.querySelector("button")
// const ID = setInterval(func = ()=>{
//     const red = Math.floor(Math.random()*256)
//     const blue = Math.floor(Math.random()*256)
//     const green = Math.floor(Math.random()*256)
//     const rgb = `rgb(${red}, ${green}, ${blue})`
//     body.style.background = rgb
// }, 1000)

// button.addEventListener("click",()=>{
//     clearInterval(ID);
//     const color = func()
//     button.textContent = body.style.background
// })  

//------------------------------------------------------------------------------------------------------------------
// function myfunc(callback) {
//     console.log(" abra ka dabra 1")
//     callback()
// }

// function myfunc2() {
//     console.log(" abra ka dabra 2")
// }

// myfunc(myfunc2)

function Add_Two_Numbers(num1, num2, onsuccess, onfailure){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        onsuccess(num1, num1)
    }else{
        onfailure()
    }
}

// or

function getnum(num1, num2){
    console.log(num1+num2)
}

function onfail(){
    console.log("wrong data")
    console.log("please pass numbers only ")
}

Add_Two_Numbers("4",5,getnum,onfail)

// or
// Add_Two_Numbers(4,5,(num1, num2)=>{
//     console.log(num1+num2)
// },()=>{
//     console.log("wrong data")
//     console.log("please pass numbers only ")
// })

//--------------------------------------------------------------------------------------------------------------------
// callback
//callback hell
//pyramid of dom

