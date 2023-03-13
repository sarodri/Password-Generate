const button = document.getElementById("btnGenerate")

window.addEventListener('load', (event) =>{
  button.addEventListener('click', generatePassword)
})

const generatePasswordRand = (base, longitud) => {
  let password= ""
  for(let i=0; i<longitud; i++){
    let aleatorio = Math.floor(Math.random()* base.length)
    password += base.charAt(aleatorio)
  }
  return password
}

const generatePassword= () => {

  let longitud = document.getElementById("lengthSelect").value
  let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeros = "0123456789"
  const simbolos = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  
  const checkbox1 = document.getElementById("checkbox1")
  const checkbox2 = document.getElementById("checkbox2")
  const checkbox3 = document.getElementById("checkbox3")

  if(checkbox1.checked) base+=mayusculas;
  if(checkbox2.checked) base+=numeros;
  if(checkbox3.checked) base += simbolos;

  generatedPassword.innerText = generatePasswordRand(base, longitud)
}
