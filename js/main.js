/* next features: 
 - when click [pay], user choses amt and is subtracted from main.
 - when click [transfer], user can chose to transfer from main and savings.
*/

import { accounts } from "./accountData.js"

const mainAcct = document.getElementById("main-acct-el")
const expensesAcct = document.getElementById("expenses-acct-el")
const savingsAcct = document.getElementById("savings-acct-el")
const rentExp = document.getElementById("rent-exp-el")
const grocExp = document.getElementById("groc-exp-el")
const restExp = document.getElementById("rest-exp-el")
const transExp = document.getElementById("trans-exp-el")
const interExp = document.getElementById("inter-exp-el")
const payBtn = document.getElementById("pay-btn-el")
const transferBtn = document.getElementById("transfer-btn-el")
const transferPopup = document.getElementById("transfer-popup")
const hiddenMessage = document.getElementById("hidden-message")
const transferAmount = document.getElementById("transfer-amount")
const submitBtn = document.getElementById("submit-btn-el")
let transferMsg = document.getElementById("tranfer-message")
const closeX = document.getElementById("close-el")
const closeHome = document.getElementById("close-home-el")
const closeSavings = document.getElementById("close-savings-el")
const closeFinancing = document.getElementById("close-financing-el")
const homeNav = document.getElementById("home-nav-el")
const savingsNav = document.getElementById("savings-nav-el")
const financingNav = document.getElementById("financing-nav-el")
const modalHomeEl = document.getElementById("modal-home-el")
const homeMsg = document.getElementById("home-el")
const modalSavingsEl = document.getElementById("modal-savings-el")
const modalfinancingEl = document.getElementById("modal-financing-el")


homeNav.addEventListener("click", () => {
    modalHomeEl.style.display="block"
})

savingsNav.addEventListener("click", () => {
    modalSavingsEl.style.display="block"
})

financingNav.addEventListener("click", () => {
    modalfinancingEl.style.display="block"
})

// closeHome.addEventListener("click", () => {
//     modalHomeEl.style.display="none"
// })

closeSavings.addEventListener("click", () => {
    modalSavingsEl.style.display="none"
})

closeFinancing.addEventListener("click", () => {
    modalfinancingEl.style.display="none"
})

// payBtn.addEventListener("click", function() {
//     alert("paying my bills is not working at this time. Please try again later.")
// })

transferBtn.addEventListener("click", function() {    
    transferPopup.style.display="block"
    hiddenMessage.innerText = "Transfer Options"
})

submitBtn.addEventListener("click", function(e) {
    e.preventDefault()

    if (transferAmount.value < 1) {
        console.log("Warning...no amount entered")
        transferMsg.innerText = "Please enter amount"
    } else {
        const formattedAmount = numberWithCommasKoreanStyle(transferAmount.value)
        console.log("submitted: ₩" + formattedAmount)
        submitBtn.style.display="none"
        transferMsg.innerHTML = `
                <p><i class="fa-solid fa-right-left"></i> <span class="txt-hl txt-bold txt-ital txt-size20">${formattedAmount} 원</span> transfered</p>
                `
    }

})

closeX.addEventListener("click", () => {
    clearMsgAndInput()
    transferPopup.style.display="none"
    submitBtn.style.display="inline-block"
})

const renderAccount = (element, account) => {
    element.innerHTML = `
        <p>${account.title}</p>
        <p>&#8361; ${account.balance}</p>
    `;
}

const renderExpenses = (element, spending) => {
    element.innerHTML = `
        <p>${spending.category}</p>
        <p>&#8361; ${spending.spent}</p>
    `
}

// main accounts
renderAccount(mainAcct, accounts[0]);
renderAccount(expensesAcct, accounts[1]);
renderAccount(savingsAcct, accounts[2]);

// expense accounts
renderExpenses(rentExp, accounts[0].spendings[0])
renderExpenses(grocExp, accounts[0].spendings[1])
renderExpenses(restExp, accounts[0].spendings[2])
renderExpenses(transExp, accounts[0].spendings[3])
renderExpenses(interExp, accounts[0].spendings[4])

function clearMsgAndInput() {
    transferMsg.innerText = " " 
    transferAmount.value = " "
}

document.getElementById("menu-btn-el").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show")
})

function numberWithCommasKoreanStyle(number) {
    return number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",")
}