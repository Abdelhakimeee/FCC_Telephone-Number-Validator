const input = document.getElementById("input-number")
const btnClear = document.getElementById("btnClear")
const validateBtn = document.getElementById("validateBtn");
const containerOfNumbers = document.getElementById("container-numbers");




const numbersList = [];

const validatePhoneNumber = () => {
    let inputValue = input.value;

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const isValid = regex.test(inputValue);

    // 
    // console.log(isValid)
    // console.log(inputValue)
    // 

    const messageElement = document.createElement('div')
    messageElement.classList.add('validation-message');

    if (isValid){
        messageElement.textContent = "✅ Added successfully";
        numbersList.push(inputValue)

        // 
        console.log(`1 :${numbersList}`)
    } else {
        messageElement.textContent = "❌ Please enter a valid number!";
        messageElement.classList.add('error');
    }
    
    document.body.appendChild(messageElement);
    setTimeout(()=> {
        messageElement.remove();
    }, 1000);

    //   you have to  :
    // ->   containerOfNumbers.textContent = numbersList
    console.log(`2 :${numbersList}`)
    //
}

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