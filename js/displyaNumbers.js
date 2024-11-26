const displyaNumbers = (numbersList) => {
    containerOfNumbers.innerHTML = "";

    numbersList.forEach((number) => {
        addNumberToContainer(number);
    });

    if (numbersList.length > 0) {
        const btnClearNumbersList = document.createElement('button');
        btnClearNumbersList.textContent = "Delete ALL";
        btnClearNumbersList.className = "clear-number-list";
        btnClearNumbersList.addEventListener("click", () => {
            numbersList.length = 0;
            containerOfNumbers.innerHTML = "";
        });
        containerOfNumbers.appendChild(btnClearNumbersList);
    }
    console.log(numbersList);
}