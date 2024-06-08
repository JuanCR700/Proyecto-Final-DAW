// Obtener elementos del formulario de login
let inputEmail = document.getElementById('inputEmail');
let inputPassword = document.getElementById('inputPassword');
let btnLog = document.getElementById('btn-log');

// Agregar evento de submit al formulario de login
btnLog.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  // Obtener datos del formulario de login
  let correo = inputEmail.value;
  let contrasena = inputPassword.value;

  // Validar datos con los guardados en localStorage
  let correoGuardado = localStorage.getItem('correo');
  let contrasenaGuardada = localStorage.getItem('contrasena');

  if (correo === correoGuardado && contrasena === contrasenaGuardada) {
    // Si los datos son correctos, redireccionar a la página de index.html
    window.location.href = 'index.html';
  } else {
    // Si los datos son incorrectos, mostrar un mensaje de error
    Swal.fire({
      title: 'Error',
      text: 'Correo o contraseña incorrectos',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
});