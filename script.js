
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function calculateResult() {
    try {
        var display = document.getElementById('display');
        var result = eval(display.value);

        if (isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = result; // Remove the '=' sign here
        }
    } catch (error) {
        display.value = 'Error';
    }
}

