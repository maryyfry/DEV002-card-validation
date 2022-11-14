import {validator} from './validator.js';

console.log(typeof validator);

const buttonVerify = document.getElementById('validate');
buttonVerify.addEventListener('click', () => {
  const ntarjeta = document.getElementById('ntarjeta');
  console.log(ntarjeta.value);
  if (!ntarjeta.value) {
    alert("Campo vacio")
    return
  }
  else if (validator.isValid(ntarjeta.value)) {
    
    alert("tarjeta válida")
  }

  else {
    alert("tarjeta inválida")
    
  }
  ntarjeta.value=validator.maskify(ntarjeta.value)
})

// function maskify() {
//   const inputText = document.getElementById('ntarjeta');
  
//   inputText.setAttribute('number',inputText.value)
// }
// window.maskify=maskify;
