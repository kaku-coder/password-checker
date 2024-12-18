let inputfield = document.querySelector('.input');
let outputfield = document.querySelector('.text');
let btn=document.querySelector(".btn")

let checkinput=inputfield.addEventListener('input', () => {
  let password = inputfield.value;

  if (password.length < 7) {
    outputfield.innerText = 'Password is too short';
    outputfield.style.color = 'red';
  } else {
    outputfield.innerText = "Password is long enough";
    outputfield.style.color = 'green';

    if (password.search(/[a-z]/) == -1) {
      outputfield.innerText = 'Password is missing a lowercase letter';
      outputfield.style.color = 'red';
    } else if (password.search(/[A-Z]/) == -1) {
      outputfield.innerText = 'Password is missing an uppercase letter';
      outputfield.style.color = 'red';
    } else if (password.search(/[0-9]/) == -1) {
      outputfield.innerText = 'Password is missing a number';
      outputfield.style.color = 'red';
    } if (password.length>7) {
      alert("It's enough")
    }else {
      outputfield.inputfield.value='Passward is too strong'
      outputfield.style.color='green';    }
  }
}); 
btn.addEventListener("click", () => {
  let password = inputfield.value; //
  console.log(password); 
  inputfield.value = '';  // Clear the input field
  outputfield.innerText = '';  // Clear the output message
  outputfield.style.color = '';  // Reset the color
});