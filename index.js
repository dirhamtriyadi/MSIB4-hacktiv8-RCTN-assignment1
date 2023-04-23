function input(val) { 
    let v = document.getElementById("hasil").value+=val;
    v.value += val;
}

function result() {
    let num1 = document.getElementById("hasil").value;
    if (num1 == "") {
        return alert("Please enter a number");
    }
    if(num1.includes("=")) {
        return alert("Please enter AC for clear all");
    }
    let num2 = eval(num1);
    let num3 = num1 + '=' + num2;
    document.getElementById("hasil").value = num3;
}

function ac() {
    document.getElementById("hasil").value = "";
}

function ce() { 
    let num1 = document.getElementById("hasil").value;
    let num2 = num1.slice(0, -1);
    document.getElementById("hasil").value = num2;
}