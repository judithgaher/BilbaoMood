
var usuarios = [
    { username: "usuario1", password: "contraseña1" },
    { username: "usuario2", password: "contraseña2" },
    { username: "usuario3", password: "contraseña3" }
  ];

  function verificarInicioSesion(username, password) {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].username === username && usuarios[i].password === password) {
        return true;
      }
    }
    return false;
  }
  
  document.getElementById("login-form").addEventListener("submit", function(event) {
    let termsCheckbox = document.getElementById("terms");
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    
    if (!termsCheckbox.checked) {
      alert("Debes aceptar los términos y condiciones para iniciar sesión.");
      event.preventDefault();
    } else {
      var username = usernameInput.value;
      var password = passwordInput.value;
  
      if (verificarInicioSesion(username, password)) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + username + "!");
      } else {
        alert("Nombre de usuario o contraseña incorrectos.");
      }
    }
  });
  
  document.getElementById("signup-btn").addEventListener("click", function() {
    alert("¡Botón de registrarse pulsado!");
  });
  