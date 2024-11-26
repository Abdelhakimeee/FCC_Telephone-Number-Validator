const validatePhoneNumber = () => {
    let inputValue = input.value;

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const isValid = regex.test(inputValue);

    const messageElement = document.createElement('div');
    messageElement.classList.add('validation-message');

    if (isValid) {
        messageElement.textContent = "✅ Added successfully";
        numbersList.push(inputValue);
        addNumberToContainer(inputValue);
        input.value = "";
        displyaNumbers(numbersList);
        btnClear.style.display = "none";
    } else {
        messageElement.textContent = "❌ Please enter a valid number!";
        messageElement.classList.add('error');
    }

    document.body.appendChild(messageElement);
    setTimeout(() => {
        messageElement.remove();
    }, 1000);
}