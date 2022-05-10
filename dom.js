const userInput = document.getElementById('user-input')
const currentResultOutput = document.getElementById("current-result")
const currentCalculation = document.getElementById("current-calculation")
const addBtn = document.getElementById('add-button')
const subtractionBtn = document.getElementById('subtraction-button')
const multiplicationBtn = document.getElementById('multiplication-button')
const divisionBtn = document.getElementById('division-button')
function outputResult(result,text){
    currentResultOutput.textContent = result
    currentCalculation.textContent = text
}

