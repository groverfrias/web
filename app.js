import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBclsRAd1bDZwsaE8b6dwR3fGG7lDsZG-8",
  authDomain: "magia-eterna-sullana.firebaseapp.com",
  projectId: "magia-eterna-sullana",
  storageBucket: "magia-eterna-sullana.firebasestorage.app",
  messagingSenderId: "341213457678",
  appId: "1:341213457678:web:24853ac76da5bc570c3b5f",
  measurementId: "G-5H3MRCLZ3W"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para iniciar sesión
async function loginUser(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const feedback = document.getElementById('loginFeedback');

  try {
    await signInWithEmailAndPassword(auth, email, password);
    feedback.innerHTML = "Inicio de sesión exitoso. Redirigiendo...";
    feedback.style.color = "green";
    // Redirigir a la página principal después del inicio de sesión
    setTimeout(() => {
      window.location.href = "pagina_principal.php"; // Cambia a la URL de la página principal
    }, 2000);
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      feedback.innerHTML = "El correo electrónico no está registrado.";
    } else if (error.code === "auth/wrong-password") {
      feedback.innerHTML = "Contraseña incorrecta. Intenta nuevamente.";
    } else if (error.code === "auth/invalid-email") {
      feedback.innerHTML = "Por favor, ingresa un correo electrónico válido.";
    } else {
      feedback.innerHTML = "Ha ocurrido un error. Por favor, intenta nuevamente.";
    }
    feedback.style.color = "red";
  }
}
