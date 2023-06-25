const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  
  console.log('Nombre:', nombre);
  console.log('Email:', email);
  console.log('Mensaje:', mensaje);
  
  formulario.reset();
});
