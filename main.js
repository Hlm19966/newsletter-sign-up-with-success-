const formSubmit = document.querySelector("#formSubmit");
const emailInput = document.querySelector("#emailInput");
const errorPragraph = document.querySelector("#error");
const successContainer = document.querySelector("#successContainer");
const emailParagraph = document.querySelector("#emailParagraph");
const dismissButton = document.querySelector("#dismissButton");
const container = document.querySelector("#container");

formSubmit.addEventListener("submit", (event)=>{
  event.preventDefault();
  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  console.log(isValidEmail);

  if (isValidEmail) {
    
    container.style.display = "none";
    successContainer.style.display = "block";
  } else {
    errorPragraph.style.display = "block";
    emailInput.classList.add('email-input-valid');
  }
});


