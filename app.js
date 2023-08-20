let on = 0;

function darkMode() {
    if (on === 0){
    document.body.style.backgroundColor = "grey";
    } else 
    document.body.style.backgroundColor = "white";
    on = 1 - on;
}

function addNum() {

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    let sum = num1 + num2;

    document.getElementById('result').textContent = `Result: ${sum}`

    document.getElementById('num1').value = " ";
    document.getElementById('num2').value = " ";
}

function subNum() {

    let sub1 = parseFloat(document.getElementById('sub1').value);
    let sub2 = parseFloat(document.getElementById('sub2').value);

    let sum = sub1 - sub2;

    document.getElementById('result2').textContent = `Result: ${sum}`

    document.getElementById('sub1').value = " ";
    document.getElementById('sub2').value = " ";
}