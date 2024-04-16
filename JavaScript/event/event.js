
//Event Bubbling

const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")
// const body = document.body

// child.addEventListener("click", ()=>{
//     console.log("Bubbled child")
// })
// parent.addEventListener("click", ()=>{
//     console.log("Bubbled Parent")
// })
// grandparent.addEventListener("click", ()=>{
//     console.log("Bubbled GrandParent")
// })
// body.addEventListener("click", ()=>{
//     console.log("Bubbled body")
// })


//Capturing Events

// child.addEventListener("click", ()=>{
//     console.log("Captured !!! child")
// }, true)
// parent.addEventListener("click", ()=>{
//     console.log("Captured !!! Parent")
// }, true)
// grandparent.addEventListener("click", ()=>{
//     console.log("Captured !!! GrandParent")
// }, true)
// body.addEventListener("click", ()=>{
//     console.log("Captured !!! body")
// }, true)

//Event Delegation
// grandparent.addEventListener("click", (e)=>{
//     console.log(e.target.textContent)
// })