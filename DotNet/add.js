const sum = document.querySelector(".sum")
const buttons = document.getElementById("btn")
const val1 = document.getElementById("val1")
const val2 = document.getElementById("val2")

console.log(buttons)
console.log(sum)
console.log(val1)
// console.log(sum.textContent=`aabra ka daabra`)

function calc(val1, val2, result) {
    const a = parseFloat(val1.value)
    const b = parseFloat(val2.value)
    result.value = a + b
    sum.textContent = `Sum = ${this.value}`
}

buttons.addEventListener("click",calc(val1, val2, result))
// sum.textContent = `Sum = ${num}`

