function validarLogin() {
    var correoInput = document.getElementById('correo');
    var correo = correoInput.value; 
    
    var contraseñaInput = document.getElementById('contraseña');
    var contraseña = contraseñaInput.value;

  
    if (correo === "admin@admin.com" && contraseña === "admin1") {
        alert("ingresando");
        redireccionar();
        return false;
    }else{
        alert('Usuario o contraseña incorrectos.');
        
    }
    
  }

  function redireccionar(){
    window.location.href='../productos.html';

  }