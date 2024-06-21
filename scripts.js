
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
    }else if (operator === "/" && y === parseInt("0")) {
        return "Trying to crash me huh?"
    } else if (operator === "/"){
        return divide(x,y)
    } else{
        return "invalid selection"
    }
}


//console.log(calc("-", 9, 5))

// add numbers and operators
let buttons = document.querySelectorAll(".buttons")
//console.log(buttons)

let display = document.querySelector("#display")

let equalBtn = document.getElementById("=")

let floatBtn = document.getElementById(".")

let store = []
let test1 = []

buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        //console.log(e.target.value)

        let displayText = e.target.value
        //console.log(displayText)
        display.innerText += displayText


            store.push(displayText)
            //console.log(store)

        //Fix double digits here
        
    })

}) 

//isolate the array on test bed

equalBtn.addEventListener("click", () => {
    console.log(store)
    

    const re = /(\+|\-|\*|\/)/;
    let [ value1, operate, value2 ] = store.join("").split(re)
    console.log(value1, operate, value2)


    let firstVarible = value1
    firstVarible = parseInt(firstVarible)
    let secondVarible = value2
    secondVarible = parseInt(secondVarible)
    let operator = operate
    //console.log(typeof(operator))
    //console.log(firstVarible)
    //console.log(secondVarible)
    //console.log(operator)

    let html = "";
    html = calc(operator, firstVarible, secondVarible)
    display.innerHTML = html;

    console.log((calc(operator, firstVarible, secondVarible)))

})


let clear = document.querySelector(".clear")

clear.addEventListener("click", function(){
    //console.log(e)
    store = []
    let html = "";
    display.innerText = html
    
})

let backSpace = document.createElement("button")
backSpace.classList.add("backSpace")
backSpace.innerText = "Backspace"
let main = document.querySelector(".main")
main.appendChild(backSpace)

backSpace.addEventListener("click", (e) => {
    store.pop()
    //console.log(store)
    let html = display.innerText
    //console.log(html)
    html = html.substring(0, html.length - 1)
    //console.log(html)
    display.innerText = html
    
})
