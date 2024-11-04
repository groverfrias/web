import { ManageAccount } from './firebaseconect.js';

document.getElementById("formulario-sesion").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("password-error");

  try {
    const account = new ManageAccount();
    const isAuthenticated = await account.authenticate(email, password);

    if (isAuthenticated) {
      showPopupMessage("Inicio de sesión exitoso. Redirigiendo...");
      
      // Redirigir después de 2 segundos
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 2000);
    } else {
      throw new Error("Correo o contraseña incorrectos.");
    }
  } catch (error) {
    console.error('Error de autenticación:', error);
    showPopupMessage("Correo o contraseña incorrectos.", true);
  }
});

// Función para mostrar mensajes emergentes
function showPopupMessage(message, isError = false) {
  const popup = document.createElement("div");
  popup.classList.add("popup-message");
  popup.textContent = message;
  
  if (isError) {
    popup.classList.add("error"); // Aplica estilo de error si es un mensaje de error
  }
  
  document.body.appendChild(popup);

  // Eliminar el mensaje después de 3 segundos
  setTimeout(() => {
    popup.remove();
  }, 3000);
}

console.log('Formulario de Inicio de Sesión cargado');

