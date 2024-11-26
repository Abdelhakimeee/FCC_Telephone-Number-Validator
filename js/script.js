const input = document.getElementById("input-number");
const btnClear = document.getElementById("btnClear");
const validateBtn = document.getElementById("validateBtn");
const containerOfNumbers = document.getElementById("container-numbers");

const numbersList = [];

displyaNumbers(numbersList);

input.addEventListener('input', () => {
    if (input.value !== "") {
        btnClear.style.display = "block";
    } else {
        btnClear.style.display = "none"
    }
});

btnClear.addEventListener('click', clearInput);
validateBtn.addEventListener('click', validatePhoneNumber);
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        validatePhoneNumber();
    }
});