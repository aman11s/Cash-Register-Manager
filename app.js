const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-btn");
const cashDiv = document.querySelector("#cash-div");
const returnTable = document.querySelector(".return-table");
const returnChange = document.querySelector(".return-change");
const change = document.querySelector("#change");
const notes = [2000, 500, 100, 20, 10, 5, 1];

cashDiv.style.display = "none";
returnTable.style.display = "none";
returnChange.style.display = "none";
checkButton.style.display = "none";

nextButton.addEventListener("click", () => {
    if (billAmount.value > 0) {
        nextButton.style.display = "none";
        cashDiv.style.display = "block";
        checkButton.style.display = "inline";
    } else {
        showMessage("Enter a valid amount");
    }
})

checkButton.addEventListener("click", () => {
    hideMessage();
    returnTable.style.display = "inline-block";
    let billAmountValue = Number(billAmount.value);
    let cashGivenValue = Number(cashGiven.value);
    const returnAmount = cashGivenValue - billAmountValue;

    if (billAmountValue <= cashGivenValue) {
        if (billAmountValue === cashGivenValue) {
            showMessage("No amount to be returned");
        } else {
            returnChange.style.display = "block";
            change.innerText = returnAmount;
            calculateReturnCash(returnAmount);
        }
    } else {
        showMessage("Give more cash!!");
    }
})

function calculateReturnCash(returnAmount) {
    for (let i = 0; i < notes.length; i++) {
        const remainderNotes = Math.trunc(returnAmount / notes[i]);
        returnAmount = returnAmount % notes[i];
        noOfNotes[i].innerText = remainderNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    returnTable.style.display = "none";
    returnChange.style.display = "none";
    message.style.display = "block";
    message.innerText = msg;
}