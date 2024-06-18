console.log("test")

function calculator(){

    this.add = function(x, y){ return x + y }
    this.sub = function(x, y) { return x - y }
    this.multiply = function(x, y) { return x * y }
    this.divide = function(x, y) { return x / y }
}

let c =  new calculator()
console.log(c.add(5,5))
console.log(c.sub(6,5))
console.log(c.multiply(6,5))
console.log(c.divide(6,3))
console.log("break in the code for 2nd calculator")

function calc(operator, x, y){

    let add = function(x, y){ return x + y }
    let sub = function(x, y) { return x - y }
    let multiply = function(x, y) { return x * y }
    let divide = function(x, y) { return x / y }

    
    if(operator === "+" ){
        return add(x,y)
    }else if (operator === "-"){
        return sub(x,y)
    }else if (operator === "*"){
        return multiply(x,y)
    }else if (operator === "/"){
        return divide(x,y)
    } else{
        return "invalid selection"
    }
}


console.log(calc("-", 9, 5))

// add numbers and operators
let buttons = document.querySelectorAll(".buttons")
console.log(buttons)

let display = document.querySelector("#display")

let store = []

buttons.forEach((item) => {
    
    item.addEventListener('click', (e) => {
        console.log(e.target.value)
        let displayText = e.target.value

        display.innerText += displayText
        store.push(displayText)
        console.log(store)
    })
}) 

let clear = document.querySelector(".clear")


clear.addEventListener("click", function(){
    //console.log(e)
    let html = "";
    display.innerText = html
    
})
