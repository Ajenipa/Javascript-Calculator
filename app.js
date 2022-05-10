const defaultResult = 0;
let currentResult = defaultResult
// get input 
function getInput(){
    return Number(userInput.value)  //Number converts userinput to number
}
function createAndshowResult(resultBeforeCalc,operator,calcNumber){
        let calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
        outputResult(currentResult,calcDescription)

}
function add(){
    const enteredNumber = getInput()
    let initialResult = currentResult
    currentResult = currentResult + enteredNumber
    createAndshowResult(initialResult,"+",enteredNumber)
    console.log(currentResult)
   
}
function subtract(){
    const enteredNumber = getInput()
    let initialResult = currentResult
    currentResult = currentResult - enteredNumber
    createAndshowResult(initialResult,"-",enteredNumber)
    console.log(currentResult)  
}
function multiplication(){
    const enteredNumber = getInput()
    let initialResult = currentResult
    currentResult = currentResult * enteredNumber
    createAndshowResult(initialResult,"x",enteredNumber)
    console.log(currentResult)  
}
function division(){
    const enteredNumber = getInput()
    let initialResult = currentResult
    currentResult = currentResult / enteredNumber
    createAndshowResult(initialResult,"÷",enteredNumber)
    console.log(currentResult)  
}
addBtn.addEventListener('click', add)
subtractionBtn.addEventListener('click', subtract)
multiplicationBtn.addEventListener('click', multiplication)
divisionBtn.addEventListener('click', division)
