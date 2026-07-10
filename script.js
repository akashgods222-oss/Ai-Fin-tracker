// ==========================================
// 💸 FINTRACK CORE CORE LOGIC ENGINE
// ==========================================

// 1. CONST Variables (Jo rules ya user profile fix hain)
const userName = "Akash";
const monthlyBudget = 15000; // Total pocket money/income

// 2. LET Variables (Kharcha badalta rehta hai)
let foodExpense = 4500;
let internetRecharge = 500;
let codingCourse = 2000;
let roomRent = 6000;

// Total calculation
let totalExpenses = foodExpense + internetRecharge + codingCourse + roomRent;

// 3. AI LOGIC IMPLEMENTATION (Decision Making)
let aiRecommendation = "";

// Triggering conditions
if (totalExpenses > monthlyBudget) {
    aiRecommendation = "🚨 ALERT " + userName + "! Tumne budget cross kar diya hai. Kharcha band karo boss!";
} else if (totalExpenses >= (monthlyBudget * 0.8)) {
    // Agar kharcha budget ke 80% ke barabar ya upar pohoch gaya hai
    aiRecommendation = "⚠️ WARNING: Tumhara 80% budget khatam ho chuka hai. Bach ke chalo!";
} else {
    aiRecommendation = "✅ GOOD JOB " + userName + "! Tumhara kharcha control me hai. AI approves your savings! 💰";
}

// 4. TESTING AND DISPLAYING IN CONSOLE
console.log("=== 🧾 FINTRACK REPORT ===");
console.log("User:", userName);
console.log("Budget:", "₹" + monthlyBudget);
console.log("Total Spent:", "₹" + totalExpenses);
console.log("AI Status:", aiRecommendation);

