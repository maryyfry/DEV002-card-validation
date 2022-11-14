export const validator = {

isValid: (ntarjeta) => {
  ntarjeta = String(ntarjeta)
  var sum = 0
  var parity = ntarjeta.length % 2

  for (let i = 0; i < ntarjeta.length; i++) {
    const n = parseInt(ntarjeta[i], 10);
    var x
    if ((i + 1) % 2 === parity) {
      x = n;
      // Si es mayor a 4 la multiplcación es un número de 4 dígitos
      // por lo tanto se tiene que sumar los dos dígitos o multiplicarlo 
      // por 2 y restarle nueve ya que no pasara de 18
    } else if (n > 4) {
      x = (2 * n) - 9;
      // caso contrario solo se multiplica por 2 y se suma
    } else {
      x = 2 * n;
    }
    sum = sum + x
  }
  return sum % 10 === 0;
},

maskify: (ntarjeta) =>{
  let cardLength = ntarjeta.length
  let hiddenNumber = ''
  for (let i = 0; i < cardLength - 4; i++) {
    hiddenNumber += '#';
  }
  return hiddenNumber + ntarjeta.substring(cardLength - 4, cardLength);
}
}


  



// export const validator (ntarjeta){
  // return isValidCard(ntarjeta) 
//  }



//export default validator;