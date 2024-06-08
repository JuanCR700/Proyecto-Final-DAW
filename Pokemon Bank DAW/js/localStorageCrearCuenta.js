document.getElementById('btn-registrar').addEventListener('click', function() {
  // Obtener datos del formulario
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let contrasena = document.getElementById('contrasena').value;
  let fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
  let sexo = document.getElementById('sexo').value;

  // Guardar datos en localStorage
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('apellido', apellido);
  localStorage.setItem('correo', correo);
  localStorage.setItem('contrasena', contrasena);
  localStorage.setItem('fecha_nacimiento', fecha_nacimiento);
  localStorage.setItem('sexo', sexo);

  // Limpiar campos del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('contrasena').value = '';
  document.getElementById('fecha_nacimiento').value = '';
  document.getElementById('sexo').value = '';
});
