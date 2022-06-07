const amountEl=document.getElementById("amount")
let amount = 0;

function remove() {
    if(amount > 0) {
        amount -= 1
        amountEl.textContent = amount;
    }
}
function add() {
    if(amount < 10) {
        amount += 1
        amountEl.textContent = amount;
    }
}

function submit() {
    if(amount == 0) {
        document.getElementById('an').innerHTML = "-_-"
    }
    else if(amount < 3) {
        document.getElementById('an').innerHTML = "The noob"
    }
    else if(amount < 5) {
        document.getElementById('an').innerHTML = "so-so"
    } 
    else if(amount < 7) {
        document.getElementById('an').innerHTML = "Master"
    } 
    else if(amount < 9) {
        document.getElementById('an').innerHTML = "Gigachad"
    } 
    else{
        document.getElementById('an').innerHTML = "Bing Chilling"
    } 
}