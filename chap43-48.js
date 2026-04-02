// q1
function Alert() {
    alert("Welcome..");
}

// q2
function showMessage(msg) {
    alert("Thanks for purchasing: " + msg);
}

// q3
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// q5
var num = 0;

function increase() {
    num++;
    document.getElementById("num").innerText = num;
}

function decrease() {
    num--;
    document.getElementById("num").innerText = num;
}
