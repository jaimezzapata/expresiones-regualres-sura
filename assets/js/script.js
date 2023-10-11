// const btnIniciar = document.querySelector('.clase')
// console.log(btnIniciar)
// let evento = 'click'
// function validarFormulario(){
//     console.log('Dando click...')
// }
// btnIniciar.addEventListener(evento, validarFormulario)

function validarFormulario(e) {
  // console.log(e);
  const nombre = /^[a-zA-ZÀ-ÿ\s']{1,40}$/;
  const correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  switch (e.target.name) {
    case "nombre":
      if (nombre.test(e.target.value)) {
        console.log("Campo válido");
        document.getElementById('nombre').classList.add('alerta')
        document.getElementById('mensajeNombre').textContent = ''
      } else {
        console.log("Campo falso");
        document.getElementById('mensajeNombre').textContent = 'Campo incorrecto'
      }
      break;
    case "correo":
      console.log("Input correo");
      if (correo.test(e.target.value)) {
        console.log("Campo válido");
      } else {
        console.log("Campo falso");
      }
      break;
  }
}

const inputs = document.querySelectorAll("#form input");
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
