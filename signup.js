import { ManageAccount } from './firebaseconect.js';

document.getElementById("formulario-crear").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("password-error");

  // Validación de contraseña: mínimo 6 caracteres y al menos un símbolo especial
  const passwordRegex = /^(?=.*[!@#$%^&*()_\-+=<>?]).{6,}$/;

  if (!passwordRegex.test(password)) {
    passwordError.style.display = "block";
    passwordError.textContent = "La contraseña debe tener al menos 6 caracteres y un símbolo especial.";
    return;
  } else {
    passwordError.style.display = "none";
  }

  // Intentar registrar al usuario
  try {
    const account = new ManageAccount();
    await account.register(email, password);
    console.log('Registro exitoso');
    alert('Cuenta creada con éxito. Ahora puedes iniciar sesión.');
    window.location.href = 'login.html';
  } catch (error) {
    console.error('Error de registro:', error);
    passwordError.style.display = "block";
    passwordError.textContent = "Error al crear la cuenta. Intenta con otro correo.";
  }
});

console.log('Formulario de Registro cargado');

