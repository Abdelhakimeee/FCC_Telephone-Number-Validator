const addNumberToContainer = (number) => {
    const paragraph = document.createElement("p");
    paragraph.className = "number-item";
    paragraph.textContent = `${number}`;

    const deleteNumber = document.createElement("button");
    deleteNumber.textContent = "❌";
    deleteNumber.className = "delete-button";

    deleteNumber.addEventListener("click", () => {
        paragraph.remove();
        const index = numbersList.indexOf(number);
        if (index !== -1) {
            numbersList.splice(index, 1);
        }
        displyaNumbers(numbersList);
    });

    paragraph.appendChild(deleteNumber);
    containerOfNumbers.appendChild(paragraph);
}