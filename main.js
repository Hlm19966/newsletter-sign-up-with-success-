const formSubmit = document.querySelector("#formSubmit");
const emailInput = document.querySelector("#emailInput");
const errorPragraph = document.querySelector("#error");
const successContainer = document.querySelector("#successContainer");
const emailParagraph = document.querySelector("#emailParagraph");
const dismissButton = document.querySelector("#dismissButton");
const container = document.querySelector("#container");
const userEmail = document.querySelector("#userEmail");

formSubmit.addEventListener("submit", (event)=>{
  event.preventDefault();
  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  console.log(isValidEmail);

  if (isValidEmail) { 
    container.style.display = "none";
    successContainer.style.display = "block";
    userEmail.innerHTML = `${email}`;
  } else {
    errorPragraph.style.display = "block";
    emailInput.classList.add('email-input-valid');
  }
});


dismissButton.addEventListener("click", (event)=> {
  event.preventDefault();
  container.style.display = "grid";
  successContainer.style.display = "none";
  emailInput.value ="";
  emailInput.classList.remove('email-input-valid');
});