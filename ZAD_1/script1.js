var numberAmount = 0;

document.getElementById('myBox').setAttribute("onclick", "addNumber(1)");

function addNumber(number){
    numberAmount = numberAmount + number;
    updateValues();
}

function updateValues(){
    document.getElementById('clickCount').innerHTML = numberAmount;
}