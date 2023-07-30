function validarMensaje() {
    var nombreInput = document.getElementById('nombreMensaje');
    var nombre = nombreInput.value.trim(); // Eliminamos los espacios en blanco al inicio y final del texto
    
    var mensajeInput = document.getElementById('mensaje');
    var mensaje = mensajeInput.value.trim();

   

    if (nombre.length === 0 || mensaje.length === 0) {
      alert('No puedes enviar mensajes con campos vacios.');
      return false;
    }
  
    // Resto de la lógica de validación, si es necesario...
  
    // Si pasa todas las validaciones, el formulario se envía
    return true;
  }