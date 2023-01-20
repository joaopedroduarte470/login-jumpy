const form = document.getElementById("form");
const username = document.getElementById("nome");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const cpf = document.getElementById("cpf");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  successInputs();
});

function successInputs() {
    
    if(username.value!='' && email.value!='' && phone.value!='' && cpf.value!='' && password.value!= ''){
        success.style.display = 'block';
        erro.style.display = 'none';
    } else {
        success.style.display = 'none';
        erro.style.display = 'block';
    }
}

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  const cpfValue = cpf.value;
  const passwordValue = password.value;

  if (usernameValue === "") {
    setErrorFor(username, "*Campo Obrigatório*");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "*Campo Obrigatório*");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "*Campo Obrigatório*");
  } else {
    setSuccessFor(phone);
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "*Campo Obrigatório*");
  } else {
    setSuccessFor(cpf);
  }

  if (passwordValue === "") {
    setErrorFor(password, "*Campo Obrigatório*");
   } else {
    setSuccessFor(password);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}


function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}