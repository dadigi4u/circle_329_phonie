function startApp() {
    
  
  'use strict';
const mtnNumber = ['0803', '0703', '0903', '0806', '0706', '0813', '0810', '0814', '0816'];
const gloNumber = ['0805', '0705', '0905', '0807', '0815', '0811'];
const nineMobile = ['0809', '0909', '0817', '0818'];
const airtelNumber = ['0802', '0902', '0701', '0808', '0708', '0812'];
const numbers = [...mtnNumber, ...gloNumber, ...nineMobile, ...airtelNumber];
const form = document.querySelector('.form');
const SubmitBtn = document.getElementById('btn');

const inputElement = document.querySelector('#telephone');
const autoComplete = document.querySelector('#suggestions');
const icon = document.querySelector('#icon');

const autoCompleteTab = number => {
    const element = document.createElement('div');
    element.classList.add('suggestion');
    element.textContent = number;
    //To respond to user clicking on the autocomplete options
    element.addEventListener('click', e => {
        inputElement.value = e.target.textContent;
        // Remove the autocomplete options once a user has selected
        autoComplete.innerHTML = '';
    })
    return element;
};
const image = (arr) => {
    icon.src = `${arr}.png`;
    icon.style.display = 'block';
}

inputElement.addEventListener('input', () => {
    let input = inputElement.value;
    let values = "";
    if(input.startsWith('0')) {
        values += input.slice(0, 4);
    }else if(input.startsWith("+")) {
        values += `0${input.slice(4, 7)}`;
    };

    //No autocomplete options till users types
    autoComplete.innerHTML = '';
    numbers.forEach(number => {
        if(number.startsWith(values)) {
            autoComplete.appendChild(autoCompleteTab(number));
        } else if(values.length === 4) {
            autoComplete.innerHTML = '';
        }
    })
    for(let i = 0; i < mtnNumber.length; i++) {
        values === mtnNumber[i] ? image('mtn') : 0;
        if (values.length <= 3) image('solid');
    }
    for(let i = 0; i < gloNumber.length; i++) {
        values === gloNumber[i] ? image('glo') : 0;
    }
    for(let i = 0; i < nineMobile.length; i++) {
        values === nineMobile[i] ? image('9mobile') : 0;   
    }
    for(let i = 0; i < airtelNumber.length; i++) {
        values === airtelNumber[i] ? image('airtel') : 0;
    }
})
// To confirm receipt of user details
form.addEventListener('submit', () => {
    SubmitBtn.textContent = "Thank You For Submitting";
});
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //