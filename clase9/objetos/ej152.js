// Declaración del objeto usuario
const usuario = {
  username: null,
  password: null,
  
  // Método para saludar
  saludar: function() {
    if (this.username !== null) {
      console.log(`Hola, soy el usuario ${this.username}`);
    } else {
      console.log("Este usuario no tiene username");
    }
  },
  
  // Método para actualizar la contraseña
  updatePassword: function(nuevaPassword) {
    this.password = nuevaPassword;
  },
  
  // Método para actualizar el nombre de usuario
  updaterUsername: function(nuevoUsername) {
    this.username = nuevoUsername;
  }
};

// Mostrar en consola los resultados

// Llamar al método saludar antes de actualizar (debería mostrar mensaje de error)
console.log("Antes de actualizar:");
usuario.saludar();

// Hacer update de la propiedad username
usuario.updaterUsername("CodeMaster123");
console.log("\nDespués de actualizar username:");
console.log("Username actualizado a:", usuario.username);

// Hacer update de la propiedad password
usuario.updatePassword("Contraseña123!");
console.log("\nDespués de actualizar password:");
console.log("Password actualizado a:", usuario.password);

// Llamar al método saludar después de actualizar
console.log("\nLlamada al método saludar:");
usuario.saludar();

// Imprimir el password en consola
console.log("\nPassword del usuario:");
console.log(usuario.password);