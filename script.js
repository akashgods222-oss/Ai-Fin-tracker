// ==========================================
// 💸 FINTRACK CORE CORE LOGIC ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded",() => {
    


 let aiStatusElement=document.getElementById("ai-status");
 let myBtn=document.getElementById("analyze-btn");
 let bugBox=document.getElementById("expense-amt");
 let expBox=document.getElementById("expense-name");

// creating first function to check expense nature
function checkBudgetLimit(amount) {
    if (amount < 2000){
        return "Safe";
    } else if(amount <= 5000) {
        return "Moderate";
    } else {
        return "Danger";
    }
}
// 2nd function for update ui
function updateUi(name,status,amount){
    if(status === "Danger") {
        aiStatusElement.innerText= "🚨 ALERT:Budget Khatam! Kharcha band karo.";
        aiStatusElement.style.color="red";
    } else if (status === "Moderate") {
        aiStatusElement.innerText= "⚠️ WARNING: Its time to control your expenses!";
        aiStatusElement.style.color="yellow";
    } else {
        aiStatusElement.innerText= "✅ GOOD JOB: Paisa control me hai!";
        aiStatusElement.style.color="green";
    }
}

// 1. CONST Variables (Jo rules ya user profile fix hain)
//const userName = "Akash";
//const monthlyBudget = 15000; // Total pocket money/income

//monthlyBudget innerText 
//bugBox.innerText= "Rs"+ monthlyBudget;






  
  
if (myBtn ){
myBtn.addEventListener("click",() => {
    let expenseName=expBox.value;
    let expenseAmt=Number(bugBox.value);
    
    
    
    if (expenseName === "" || expenseAmt === 0) {
        aiStatusElement.innerText="Bhai! pehle information toh daal.";
        aiStatusElement.style.color="orange";
        return;
    }

const  currentStatus= checkBudgetLimit(expenseAmt);

updateUi(expenseName,currentStatus,expenseAmt);

bugBox.value=" ";
expBox.value=" ";

  
    });
   }
 });


