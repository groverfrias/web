<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperar Contraseña</title>
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container my-5">
        <div class="auth-section reset-section">
            <h3>Recuperar Contraseña</h3>
            <form id="resetForm" onsubmit="resetPassword(event)">
                <div class="mb-3">
                    <label for="resetEmail" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="resetEmail" required>
                </div>
                <button type="submit" class="btn btn-warning w-100">Enviar enlace de recuperación</button>
                <p class="text-center mt-3">
                    <a href="index.php" class="auth-link login-link">Volver a iniciar sesión</a>
                </p>
                <p id="feedbackMessage" class="text-center mt-3"></p>
            </form>
        </div>
    </div>

    <script src="assets/bootstrap.bundle.min.js"></script>
    <script type="module" src="app.js"></script>
</body>
</html>
