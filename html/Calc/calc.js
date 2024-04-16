



let input = document.getElementById("ibox")
let buttons = document.querySelectorAll("button")


//APPEND -  ADD AT THE LAST 
// const  newtodo = document.createElement("li")
// const newtodoText = document.createTextNode("Teach Students")
// const todo = document.querySelector(".todo-list") 
// newtodo.appendChild(newtodoText)
// newtodo.append(newtodoText)
// todo.append(newtodo)
// console.log(newtodo)

let string = ""
let arr = Array.from(buttons)

arr.forEach((button) => {
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        }
        else if(e.target.innerHTML == "AC"){
            string = ""
            input.value = string
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1)
            input.value = string
        }
        else{
            string += e.target.innerHTML
            input.value = string
        }
    })
})
