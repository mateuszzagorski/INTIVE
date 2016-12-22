function update() {
    setTimeout(zeroNumberValue, 30000)
}
update();

function zeroNumberValue() {
    numberAmount = 0;
    if (numberAmount = 0) {
    	clearTimeout(update);
    }
    document.getElementById('clickCount').innerHTML = numberAmount;
	update();
}
