

//dom  - document object model
//select element using query selector

// console.log(document.getElementById("main-heading"))//it returns object
// console.log(typeof document.getElementById("main-heading"))//it returns object
// console.dir(document.getElementById("main-heading"))
// console.dir(document)

// const mainheading = document.getElementById("main-heading")
// const mainheading = document.querySelector("#main-heading")
// console.log(mainheading)

//--------------------------------------------------------------------------------------------------------
// query selector

// const header = document.querySelector(".header")
// console.log(header)

// const navitem = document.querySelector(".nav-items")
// console.log(navitem)
// const navitem = document.querySelectorAll(".nav-items")
// console.log(navitem)

// -------------------------------------------------------------------------------------------------------
// change text
// textcontent and innercontent
// const mainheading = document.getElementById("main-heading")
// console.log(mainheading.textContent);
// console.log(mainheading.innerText);
// mainheading.textContent = "This is my task"
// console.log(mainheading.textContent);

//----------------------------------------------------------------------------------------------------------
// change the style of elements
// const mh = document.querySelector("div.headline h2")
// console.log(mh.style)
// console.log(mh.style.color="red")
// mh.style.backgroundColor="blue"
// mh.style.border="2px solid black"

// const mh = document.querySelector("#main-heading")
// console.log(mh)

//-----------------------------------------------------------------------------------------------------------
//get and set attributes
// const link = document.querySelector("a")
// console.log(link.getAttribute("href"))
// console.log(link)

// const input = document.querySelector(".form-todo input")
// console.log(input.getAttribute("type"))

// const link = document.querySelector("a")
// console.log(link.getAttribute("href"))
// link.setAttribute("href", "https://codprog.com")
// console.log(link.getAttribute("href"))
// console.log(link.getAttribute("href").slice(1))

//-------------------------------------------------------------------------------------------------------
//get multiple elements using classname and using queryselector

// const nitems = document.getElementsByClassName("nav-item")  //HTMLCollection
// console.log(nitems)
// console.log(Array.isArray(nitems))

// const nitems = document.querySelectorAll("nav-item") //NodeList
// console.log(nitems)

//ARRAY LIKE OBJECT
// const navItems = document.getElementsByClassName("nav-item")  //HTMLCollection
// const navItems = document.getElementsByTagName("a")  //HTMLCollection
// console.log(navItems)

//we cannot use foreach to ietrate html collection

// for (let i=0;i<navItems.length;i++){
//     console.log(navItems[i])
//     const navItem = navItems[i]
//     navItem.style.backgroundColor = "#fffff"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"

// }
// for (let navItem of navItems){
//     navItem.style.backgroundColor = "#fffff"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold"
// }


// for (let i in navItems){
//     navItem.style.backgroundColor = "#fffff"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold" 
// }

// to change html collections in array

// let navItems = document.getElementsByTagName("a") 
// navItems = Array.from(navItems)
// console.log(Array.isArray(navItems))
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fffff"
//     navItem.style.color = "green"
//     navItem.style.fontWeight = "bold" 
// })

//for nodelist
// let navItems = document.querySelectorAll("a") 
// console.log(navItems)
//simple for  loop
//for of loop
//foeach loop


//---------------------------------------------------------------------------------------------------------------
//INNERHTML
// const hline = document.querySelector(".headline")
// hline.innerHTML = "<h1>Inner html changed</h1>"
// hline.innerHTML += "<button class=\"btn\">learn more</button>"
// console.log(hline.innerHTML)

//-------------------------------------------------------------------------------------------------------------
// const rootNode = document.getRootNode()
// console.log(rootNode)
// console.log(rootNode.childNodes)

//------------------------------------------------------------------------------------------------------
//  ADD NEW CLASS
// const todo = document.querySelector(".section-todo")
// console.log(todo.classList)
// todo.classList.add('bg-dark')

//REMOVE A CLASS
// const todo = document.querySelector(".section-todo")
// console.log(todo.classList)
// todo.classList.remove("container")

//TO CHECK WHETHER CLASS EXIST OR NOT
// const todo = document.querySelector(".section-todo")
// console.log(todo.classList)
// const ans = todo.classList.contains("container")
// console.log(ans)

//TOGGLE
// const todo = document.querySelector(".section-todo")
// console.log(todo.classList)
// todo .classList.toggle("bg-dark")
// console.log(todo.classList)
// const ans =  todo .classList.toggle("bg-dark")
//

// const header = document.querySelector(".header")
// console.log(header.classList)
// header.classList.add("bg-dark")
// console.log(header.classList)

//--------------------------------------------------------------------------------------------------------------
//TO CREATE HTML ELEMENT 

//innerHTML to add HTML element

// const todo = document.querySelector(".todo-list")
// console.log(todo)
// console.log(todo.innerHTML)
// todo.innerHTML = "<li>new todo</li>"
// console.log(todo.innerHTML)

// todo.innerHTML += "<li>new todo</li>"
// todo.innerHTML += "<li>teach students</li>"

//IT IS RECOMMENDED TO NOT TO USE "INNERHTML" TO ADD NEW ELEMENT, RATHER THAN YOU CAN MODIFY THE CURRENT SESSION

//It is use to create new element
//document.createElement()
//append
//prepend
//remove
//

//APPEND -  ADD AT THE LAST 
// const  newtodo = document.createElement("li")
// const newtodoText = document.createTextNode("Teach Students")
// const todo = document.querySelector(".todo-list")
// newtodo.appendChild(newtodoText)
// newtodo.append(newtodoText)
// todo.append(newtodo)
// console.log(newtodo)

//or

// const newtodo = document.createElement("li")
// newtodo.textContent = "Teach Students"
// const todo = document.querySelector(".todo-list")
// todo.append(newtodo) or todo.appendChild(newtodo)
// console.log(newtodo)

//PREPEND - ADD AT THE START

//REMOVE

// const todo = document.querySelector('.todo-list li')
// todo.remove()
// console.log(todo)

//-------------------------------------------------------------------------------------------------------------
//INSERT
//a. before and b. after

//before
// const newtodo = document.createElement("li")
// newtodo.textContent = "Teach Students"
// const todo = document.querySelector(".todo-list")
// todo.before(newtodo)

//after
// const newtodo = document.createElement("li")
// newtodo.textContent = "Teach Students"
// const todo = document.querySelector(".todo-list")
// todo.after(newtodo)

//---------------------------------------------------------------------------------------------------------------
//insert adjacent element in html
//elem.insertAdjacentHTML(where, html)
//beforbegin
//afterbegin
//beforeend
//afterend

// const todo = document.querySelector(".todo-list")
// todo.insertAdjacentHTML("beforeend", "<li>Teach Students</li>")
// todo.insertAdjacentHTML("afterbegin", "<li>Teach Students</li>")
// todo.insertAdjacentHTML("beforebegin", "<li>Teach Students</li>")
// todo.insertAdjacentHTML("afterend", "<li>Teach Students</li>")

//---------------------------------------------------------------------------------------------------------------
//CLONE NODES
// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "newtodo"
// const li2 = li.cloneNode(true);// true is for declonning
// ul.append(li)
// ul.prepend(li2)

//------------------------------------------------------------------------------------------------------------
//some of old methods to support poor internet explorer
//appendchild
//insertbefore
//replacechild
//removechild

// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "new student"
// ul.appendChild(li)

// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// const refer = document.querySelector(".first-todo")
// li.textContent = "new student"
// ul.insertBefore(li, refer)

// const ul = document.querySelector(".todo-list")

// new element
// const li = document.createElement("li")
// li.textContent = "new student"

//reference element
// const refer = document.querySelector(".first-todo")
// ul.replaceChild(li, refer)
// ul.removeChild(refer)

//---------------------------------------------------------------------------------------------------------------

//static list vs live list
//queryselectorAll will give static list(node list)
//getElementsBysomething will give live list(html collections)

// const litems = document.querySelectorAll(".todo-list li")
// const ul = document.querySelector(".todo-list")
// // const litems = document.getElementsByClassName("li")
// const litems = ul.getElementsByTagName("li")
// const sixli = document.createElement("li")
// sixli.textContent = "item 6"
// ul.append(sixli)
// console.log(litems)// when we add new element it will not reflect in this

//--------------------------------------------------------------------------------------------------------------
//how to get the dimensions
// const sectiontodo = document.querySelector(".section-todo")
// const info = sectiontodo.getBoundingClientRect()
// console.log(info)

//------------------------------------------------------------------------------------------------------------

//intro to events
//click
//buttonhover
//mousehover

//3 methods to add events

// const btn= document.querySelector(".btn-headline")
// console.log(btn)
// console.dir(btn)
// btn.onclick = function(){
//     console.log("you clicked me !!!")
// }

// const btn= document.querySelector(".btn-headline")
//add event listener
// function clickme(){
//     console.log("you clicked me !!!")
// }
// btn.addEventListener("click", clickme)

// or

// const btn= document.querySelector(".btn-headline")
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!")
// })

// or

// const btn= document.querySelector(".btn-headline")
// btn.addEventListener("click", ()=>{
//     console.log("you clicked me !!!")
// })

//--------------------------------------------------------------------------------------------------------------
//this keyword

// const btn = document.querySelector(".btn-headline")
// btn.addEventListener("click", function(){
//     console.log("you clicked me !!!")
//     console.log("value of this")
//     console.log(this)
// })

// or

// const btn = document.querySelector(".btn-headline")
// btn.addEventListener("click", ()=>{
//     console.log("you clicked me !!!") 
//     console.log("value of this")
//     console.log(this)
// })

//---------------------------------------------------------------------------------------------------------------
//WHEN WE ARE HAVING THREE DIFFERENT BUTTONS

// const allbuttons = document.querySelector(".my-buttons button")
// for(let buttons of allbuttons){
//     buttons.addEventListener("click", function(){
//         console.log(this)
//     })
// }

// or

// const allbuttons = document.querySelector(".my-buttons button")
// for(let i;i<allbuttons.length;i++){
//     allbuttons[i].addEventListener("click", function(){
//         console.log(this)
//     })
// }


//----------------------------------------------------------------------------------------------------
//event object

// const firstbutton = document.querySelector("#one")
// firstbutton.addEventListener("click", function(){
//     console.log(this)
// })
// or
// const firstbutton = document.querySelector("#one")
// firstbutton.addEventListener("click", ()=>{
//     console.log(window)
// })

// when we add eventlistener to any element
//js engine - line by line execution
//browser - js engine + extra features
//browser - js engine + webApis
//when  browser get to know that user has peformed some event which was addeventlistner, broswer's extra features wii do two work
//1.) callback function will receive by js engine
//2.) it will give information of event which was performed by callback function
//these above info will get in form of object
//arguement will be object

// const firstbutton = document.querySelector("#one")
// firstbutton.addEventListener("click", function(event){
//     console.log(event)
// })
// const firstbutton = document.querySelector("#one")
// firstbutton.addEventListener("click", function(e){
//     console.log(e.target)
// })


// console.log("script starts !!!!")
// let allbuttons = document.querySelectorAll(".my-buttons button")
// allbuttons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         console.log(e.currentTarget.textContent)
//     })
// })

// const allbuttons = document.querySelectorAll(".my-buttons button")
// for(let i=0;i<allbuttons.length;i++){
//     allbuttons[i].addEventListener("click", function(e){
//         console.log(e.currentTarget.textContent)
//     })
// }

// let allbuttons = document.querySelectorAll(".my-buttons button")
// // console.log(allbuttons)
// for(let button of allbuttons){
//     button.addEventListener("click", function(e){
//         console.log(e.currentTarget.textContent)
//     })
// }
// console.log("script ends !!!!")

//If i want to slow this callback function

// console.log("script starts !!!!")
// const allbuttons = document.querySelectorAll(".my-buttons button")
// allbuttons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//     let num = 0;
//         for( let i= 0;i<=100000000;i++){
//             num += i
//         }
//         console.log(e.currentTarget.textContent, num)
//     })
// })

// let outervar = 0;
// for(let i= 0;i<=100000000;i++){
//     outervar += i 
// }
// console.log("value of outer variable is : ", outervar)
// console.log("Scrpt end !!!")

//-----------------------------------------------------------------------------------------------------
//PRACTICE QUESTION IS THAT TO CHANGE BACKGROUND COLOR WHILE CLICKING EACH BUTTONS

// const allbuttons = document.querySelectorAll(".my-buttons button")
// // console.log(allbuttons.length)
// allbuttons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         // console.log(e.target)
//         e.target.style.backgroundColor = "Yellow"
//         e.target.style.color = "solid black"
//     })
// })

//-----------------------------------------------------------------------------------------------------------
//keypress event
//mouseover event

//KEYPRESS EVENT
// const body = document.body;
// body.addEventListener("keypress", (e)=>{
//     console.log(e.key)
// })

//MOUSEOVER
// const body = document.body;
// const mainButton = document.querySelector(".btn-headline")
// mainButton.addEventListener("mouseover", ()=>{
//     console.log("mouseover event occurs")
// })

//MOUSELEAVE
// const body = document.body;
// const mainButton = document.querySelector(".btn-headline")
// mainButton.addEventListener("mouseleave", ()=>{
//     console.log("mouseleave event occurs")
// })

//----------------------------------------------------------------------------------------------------------
//event bubbling / event propagation
//event capturing
//event delegation

// const todoform = document.querySelector(".form-todo")
// const todoInput = document.querySelector(".form-todo input[type ='text']")
// const todoList =  document.querySelector(".todo-list")
// todoform.addEventListener("submit", (e) =>{
//     e.preventDefault()  //prevent from page refresh
//     const newTodoText = todoInput.value
//     console.log(newTodoText)
//     const newLi = document.createElement("li")
//     const newliInnerHtml = `
//         <span class="text">${newTodoText}</span>
//         <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//         </div>`
//     newLi.innerHTML = newliInnerHtml
//     todoList.append(newLi)
//     todoInput.value = ""
// })

// todoList.addEventListener("click", (e)=>{
//     //check if user clicked on done button
//     if(e.target.classList.contains("remove")){
//         console.log("you want to remove something")
//         const targetedli = e.target.parentNode.parentNode
//         targetedli.remove()
//     }
//     if(e.target.classList.contains("done")){
//         console.log("great !!!")
//         const lispan = e.target.parentNode.previousElementSibling;
//         lispan.style.textDecoration = "line-through"
//     }
// })

import React, {Component} from `react`;
