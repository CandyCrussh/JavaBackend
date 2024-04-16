

const mainButton = document.querySelector("button")
const span = document.querySelector(".current-color")
const body = document.body;
console.log(span)

function randomColorGenrator(){
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const color = `rgb(${red}, ${green}, ${blue})`
    return color
}

mainButton.addEventListener("click",()=>{
    const randomColor = randomColorGenrator()
    // console.log(randomColor)
    body.style.backgroundColor = randomColor
    span.textContent = randomColor

})