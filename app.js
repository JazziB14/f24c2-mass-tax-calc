// You are a web developer given the task to create a Massachusetts Tax Calculator Engine
// Javascript will be used to identify the amount of taxes due according to the income submitted by the user
// the only state being checked for is Massachusetts
// the 3 tax brackets are the following: 
// 5% -  up to $50,000
// 5.5% - between $50,001 - $100,000
// 6% - above $100,000

// Steps to accomplish this project

// 1. Tax Bracket #1: 5% -  up to $50,000
// When the income submitted is less than or equal to $50,000, output the calculation for 5% for the tax amount due
//
const grossIncome = 50_000;
const TaxBracket1 = 0.05
const TaxBracket2 = 0.055
const TaxBracket3 = 0.06

const inputFromHTML = document.querySelector("input");
const formFromHTML = document.querySelector("form");

// Watch for clicks on the form:
formFromHTML.addEventListener("submit", function(event){  
    event.preventDefault();

    const grossIncomefromHTMLForm = inputFromHTML.value;

   
    if( grossIncomefromHTMLForm < 0 ){

        console.log(`Your gross income is too low`)

    }
    
    if(grossIncomefromHTMLForm > 0 && grossIncomefromHTMLForm <= 50_000 ){

        const grossIncomefromHTMLForm = inputFromHTML.value;
        taxDue = grossIncomefromHTMLForm * TaxBracket1;
        console.log(`Your gross income is ${grossIncomefromHTMLForm}`)
        console.log(`Your tax amount due is ${taxDue}`)
        

    }
    
    if(grossIncomefromHTMLForm > 50_000 && grossIncomefromHTMLForm <= 100_000 ){

        const grossIncomefromHTMLForm = inputFromHTML.value;
        taxDue = grossIncomefromHTMLForm * TaxBracket2;
        console.log(`Your gross income is ${grossIncomefromHTMLForm}`)
        console.log(`Your tax amount due is ${taxDue}`)
        
    }

    if( grossIncomefromHTMLForm >= 100_000 ){

        const grossIncomefromHTMLForm = inputFromHTML.value;
        taxDue = grossIncomefromHTMLForm * TaxBracket3;
        console.log(`Your gross income is ${grossIncomefromHTMLForm}`)
        console.log(`Your tax amount due is ${taxDue}`)
        
        

    }
})



