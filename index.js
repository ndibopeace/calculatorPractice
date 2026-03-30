console.log("Hello World")

const zeroEl = document.getElementById("zero")
const oneEl  =document.getElementById("one");
const twoEl  =document.getElementById("two");
const threeEl  =document.getElementById("three");
const fourEl  =document.getElementById("four");
const fiveEl  =document.getElementById("five");
const sixEl  =document.getElementById("six");
const sevenEl  =document.getElementById("seven");
const eightEl  =document.getElementById("eight");
const nineEl  =document.getElementById("nine");
const dotEl  =document.getElementById("dot");
const minusEl  =document.getElementById("minus");
const divideEl  =document.getElementById("divide");
const multiplyEl  =document.getElementById("multiply");
const plusEl  =document.getElementById("plus")  ;
const posNegEl  =document.getElementById("pos_neg");
const showSolutionEl  =document.getElementById("show_solution");
const clearMemoryEl  =document.getElementById("clear_memory");
const mathAreaEl  =document.getElementById("math_area");
const solutionEl  =document.getElementById("solution");
// const El  =document.getElementById("");

isOperatorClicked = false;
isNumClicked = false;

let expression = "";
let secondDisplay = "";

zeroEl.addEventListener("click", function() {
    number(0);
    displayExpression()
    console.log("zero")
})

oneEl.addEventListener("click", function() {
    number(1)
    displayExpression()
})

twoEl.addEventListener("click", function() {
    number(2)
    displayExpression()
})

threeEl.addEventListener("click", function() {
    number(3);
    displayExpression();
})

fourEl.addEventListener("click", function() {
    number(4);
    displayExpression();
})

fiveEl.addEventListener("click", function() {
    number(5);
    displayExpression();
})

sixEl.addEventListener("click", function() {
    number(6);
    displayExpression();
})

sevenEl.addEventListener("click", function() {
    number(7);
    displayExpression();
})

eightEl.addEventListener("click", function() {
    number(8);
    displayExpression();
})

nineEl.addEventListener("click", function() {
    number(9);
    displayExpression();
})

dotEl.addEventListener("click", function() {
    number(".");
    displayExpression();
})

// math signs
minusEl.addEventListener("click", function() {
    mathSign("-");
    // displayExpression()
})

plusEl.addEventListener("click", function() {
    mathSign("+");
    // displayExpression()
})

multiplyEl.addEventListener("click", function() {
    mathSign("*");
    // displayExpression()
})

divideEl.addEventListener("click", function() {
    mathSign("/");
    // displayExpression();
})

posNegEl.addEventListener("click", function() {   
    console.log("posNeg")
})

showSolutionEl.addEventListener("click", function() {

    secondDisplay += expression;
    expression = ""
    solutionEl.textContent = secondDisplay

    let solution = Function(`
        "use strict";
        return ${secondDisplay}
        `)();

        mathAreaEl.value = solution
        secondDisplay = solution.toString()  
})



clearMemoryEl.addEventListener("click", function() {
    expression = "";
    secondDisplay = "";
    mathAreaEl.value = 0;
    solutionEl.textContent = secondDisplay;
});

// functions
function number(digit) {
    expression += digit;
    isNumClicked = true;
}

// operation adding function
function mathSign(operator) {

    if (isNumClicked) {
        expression += operator;
        secondDisplay += expression;
        solutionEl.textContent = secondDisplay
        mathAreaEl.value = 0;
        expression = ""        
        isOperatorClicked = true;      
    }

    isNumClicked = false;
}

// display function
function displayExpression() {
    mathAreaEl.value = expression    
}

// console.log(isOperatorClicked)









// console.log(expression)