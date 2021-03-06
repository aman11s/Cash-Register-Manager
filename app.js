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

function errorHandler() {
    let msg = "Please enter positive values!!";
    if (billAmount.value < 0) {
        showMessage(msg);
    } else if (cashGiven.value < 0) {
        showMessage(msg);
    }
    if(billAmount.value === "") {
        showMessage("Please enter bill amount")
    }
}

nextButton.addEventListener("click", () => {
    if (billAmount.value > 0) {
        message.style.display = "none";
        nextButton.style.display = "none";
        cashDiv.style.display = "block";
        checkButton.style.display = "inline";
    }
    errorHandler();
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

    errorHandler();
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