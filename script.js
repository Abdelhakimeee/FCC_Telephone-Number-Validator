const input = document.getElementById("input-number")
const btnClear = document.getElementById("btnClear")
const validateBtn = document.getElementById("validateBtn");
const containerOfNumbers = document.getElementById("container-numbers");

const numbersList = [];


const validatePhoneNumber = () => {
    let inputValue = input.value;

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const isValid = regex.test(inputValue);

    const messageElement = document.createElement('div')
    messageElement.classList.add('validation-message');

    if (isValid){
        messageElement.textContent = "✅ Added successfully";
        numbersList.push(inputValue)
        addNumberToContainer(inputValue);
        input.value = "";
        displyaNumbers(numbersList)
            // check 
        btnClear.style.display = "none";

    } else {
        messageElement.textContent = "❌ Please enter a valid number!";
        messageElement.classList.add('error');
    }
    
    document.body.appendChild(messageElement);
    setTimeout(()=> {
        messageElement.remove();
    }, 1000);
}

const addNumberToContainer = (number) => {
    const paragraph = document.createElement("p");
    paragraph.className = "number-item";
    paragraph.textContent = `${number}`;

    const deleteNumber = document.createElement("button");
    deleteNumber.textContent = "❌";
    deleteNumber.className = "delete-button";

    deleteNumber.addEventListener("click", () => {
        paragraph.remove();
        // إزالة الرقم من القائمة
        const index = numbersList.indexOf(number);
        if (index !== -1) {
            numbersList.splice(index, 1);
        }
    });

        // Add the deleteBtn to paragraph 
        paragraph.appendChild(deleteNumber)
        // Add the paragra  in containerOrNumbers
        containerOfNumbers.appendChild(paragraph)  
        
        // displyaNumbers(numbersList)
    }
const displyaNumbers = (numbersList) => {
    containerOfNumbers.innerHTML = "";

    numbersList.forEach((number) =>{
        addNumberToContainer(number)
    });
    if (numbersList.length > 0) {
        const btnClearNumbersList = document.createElement('button')
            btnClearNumbersList.textContent = "Delete ALL"
            btnClearNumbersList.className = "clear-number-list";
        btnClearNumbersList.addEventListener("click", ()=>{
            numbersList.length = 0; 
            containerOfNumbers.innerHTML = "";
        })
        containerOfNumbers.appendChild(btnClearNumbersList)
    }

            //  dd
    console.log(numbersList)

}
        
displyaNumbers(numbersList)


input.addEventListener('input', ()=> {
    if (input.value !== ""){
        btnClear.style.display = "block";
    }else {
        btnClear.style.display = "none";
    }
})
btnClear.addEventListener('click', ()=> {
    input.value = "";
    btnClear.style.display = 'none';
    input.focus();
})
validateBtn.addEventListener('click', validatePhoneNumber);
input.addEventListener('keypress', (event)=>{
    if (event.key === 'Enter'){
        validatePhoneNumber();
    }
})

