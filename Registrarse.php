<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Cuenta</title>
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container my-5">
        <div class="auth-section register-section">
            <h3>Crear Cuenta</h3>
            <form id="registerForm" onsubmit="registerAccount(event)">
                <div class="mb-3">
                    <label for="registerEmail" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="registerEmail" required>
                </div>
                <div class="mb-3">
                    <label for="registerPassword" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="registerPassword" required>
                    <small class="form-text text-muted">La contraseña debe tener al menos 6 caracteres y un símbolo.</small>
                </div>
                <button type="submit" class="btn btn-primary w-100">Registrarse</button>
                <p class="text-center mt-3">
                    <a href="index.php" class="auth-link login-link">¿Ya tienes una cuenta? Inicia sesión</a>
                </p>
                <p id="registerFeedback" class="text-center mt-3"></p>
            </form>
        </div>
    </div>

    <script src="assets/bootstrap.bundle.min.js"></script>
    <script type="module" src="app.js"></script>
</body>
</html>