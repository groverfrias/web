// auth.js
import { auth } from './assets/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

async function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const feedback = document.getElementById('loginFeedback');

  try {
    await signInWithEmailAndPassword(auth, email, password);
    feedback.innerHTML = "Has iniciado sesión correctamente. Redirigiendo...";
    feedback.style.color = "green";
    setTimeout(() => {
      window.location.href = "file:///C:/xampp/htdocs/WebgRUPO2/WebPrincipal/Principal.html";
    }, 2000); // Espera 2 segundos antes de redirigir
  } catch (error) {
    if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
      feedback.innerHTML = "Correo o contraseña incorrectos.";
    } else if (error.code === "auth/invalid-email") {
      feedback.innerHTML = "Correo electrónico inválido.";
    } else {
      feedback.innerHTML = "Error inesperado. Inténtalo de nuevo.";
    }
    feedback.style.color = "red";
  }
}

export { loginUser };
