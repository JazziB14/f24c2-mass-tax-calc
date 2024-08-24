//Create a comprehensive New England Tax Calculator 
//that allows users to calculate taxes for all New England states, 
//with an improved user interface and enhanced functionality.

const maTaxRate = 0.0423;
const nhTaxRate = 0.05;
const meTaxRate = 0.05;
const ctTaxRate = 0.0635;
const vtTaxRate = 0.06;
const riTaxRate = 0.07;
const state = "";

const inputFromHTML = document.querySelector("input");
const selectFromHTML = document.querySelector('select');
const formFromHTML = document.querySelector("form");
const resultElement = document.querySelector("#result");
// const someNameElement = document.querySelector("input");


//Watch for clicks on the form:
formFromHTML.addEventListener("submit", function (event) {
  event.preventDefault();

  const grossIncomefromHTMLForm = inputFromHTML.value;
  const stateFromHTMLForm = selectFromHTML.value;
  
    console.log(grossIncomefromHTMLForm);
    console.log(stateFromHTMLForm);

    console.log(resultElement);
  
  
   
  
  
  // TODO: write a control logic that calculates the state tax based on the state the user select 
  // from your form 
  //calculateTax(maTaxRate, grossIncomefromHTMLForm);
  
  if (stateFromHTMLForm === "VT") {
    calculateTax(vtTaxRate, grossIncomefromHTMLForm);
  }

  if (stateFromHTMLForm === "CT") {
    calculateTax(ctTaxRate, grossIncomefromHTMLForm);
  }

  if (stateFromHTMLForm === "MA") {
    calculateTax(maTaxRate, grossIncomefromHTMLForm);
  }

  if (stateFromHTMLForm === "NH") {
    calculateTax(nhTaxRate, grossIncomefromHTMLForm);
  }

  if (stateFromHTMLForm === "ME") {
    calculateTax(meTaxRate, grossIncomefromHTMLForm);
  }
  if (stateFromHTMLForm === "RI") {
    calculateTax(riTaxRate, grossIncomefromHTMLForm);
  }

})

// when that happens, get the value of the input
function calculateTax(stateTaxRate, grossIncome) {

  console.log(`the tax rate is: ${stateTaxRate}`)
  console.log(`the gross income  is: ${grossIncome}`)
  //do MA stuff

  if (grossIncome >= 200) {

    console.log(`Your gross income is greater than $200 | ${grossIncome}`)

  } else {
    // do some stuff
    const taxDue = grossIncome * stateTaxRate;
    const netIncome = grossIncome - taxDue;

    console.log(`Your gross income is less than $200 | ${grossIncome}`)
  }
  resultElement.innerHTML = `<div> <p> Your gross income is ${grossIncome} and your tax rate is ${stateTaxRate} </p> </div>`;
}




