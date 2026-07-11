// ==========================================
// 💸 FINTRACK CORE CORE LOGIC ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded",() => {
    


aiStatusElement=document.getElementById("ai-status");
myBtn=document.getElementById("analyze-btn");

// 1. CONST Variables (Jo rules ya user profile fix hain)
const userName = "Akash";
const monthlyBudget = 15000; // Total pocket money/income

// 

myBtn.addEventListener("click",() => {
    let foodExpense = 4500;
let internetRecharge = 500;
let codingCourse = 2000;
let roomRent = 3000;


let totalExpenses = foodExpense + internetRecharge + codingCourse + roomRent;

// Triggering conditions
if (totalExpenses > monthlyBudget) {
    aiStatusElement.innerText="🚨 ALERT: Budget Khatam! Kharcha band karo.";
    aiStatusElement.style.color="red"
} else if (totalExpenses >= (monthlyBudget * 0.8)) {
    // Agar kharcha budget ke 80% ke barabar ya upar pohoch gaya hai
    aiStatusElement.innerText = "⚠️ WARNING: 80% Budget khatam ho chuka hai!";
    aiStatusElement.style.color = "yellow"; 
} else {
    aiStatusElement.innerText = "✅ GOOD JOB: Paisa control me hai!";
    aiStatusElement.style.color = "green";
}
  
// 4. TESTING AND DISPLAYING IN CONSOLE
//console.log("=== 🧾 FINTRACK REPORT ===");
//console.log("User:", userName);
//console.log("Budget:", "₹" + monthlyBudget);
//console.log("Total Spent:", "₹" + totalExpenses);
//console.log("AI Status:", aiStatusElement);
  
    });
 });

