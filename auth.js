// auth.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBclsRAd1bDZwsaE8b6dwR3fGG7lDsZG-8",
    authDomain: "magia-eterna-sullana.firebaseapp.com",
    projectId: "magia-eterna-sullana",
    storageBucket: "magia-eterna-sullana.appspot.com",
    messagingSenderId: "341213457678",
    appId: "1:341213457678:web:24853ac76da5bc570c3b5f",
    measurementId: "G-5H3MRCLZ3W"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función de inicio de sesión
async function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const feedback = document.getElementById('loginFeedback');

    try {
        await signInWithEmailAndPassword(auth, email, password);
        feedback.innerHTML = "Has iniciado sesión correctamente. Redirigiendo...";
        feedback.style.color = "green";
        setTimeout(() => {
            window.location.href = "https://groverfrias.github.io/web/Principal.html";
        }, 2000);
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

// Exporta la función para usarse en el HTML
export { loginUser };
