<!-- LoginPage.vue -->
<template>
  <div class="login-page">
    <form @submit.prevent="handleLogin" class="login-form">
      <h1 class="login-title">Iniciar Sesión</h1>

      <div v-if="registered === 'true'" class="success-box">
        ¡Registro completado! Por favor, inicia sesión.
      </div>

      <div v-if="serverError" class="server-error-box">
        {{ serverError }}
      </div>

      <label for="email" class="form-label">Correo electrónico</label>
      <input
        v-model="form.username"
        type="email"
        id="email"
        placeholder="ejemplo@email.com"
        class="form-input"
        :class="{ 'input-error': errors.username }"
        autocomplete="email"
      />
      <p v-if="errors.username" class="error-text">{{ errors.username }}</p>

      <label for="password" class="form-label">Contraseña</label>
      <input
        v-model="form.password"
        type="password"
        id="password"
        placeholder="••••••••"
        class="form-input"
        :class="{ 'input-error': errors.password }"
        autocomplete="current-password"
      />
      <p v-if="errors.password" class="error-text">{{ errors.password }}</p>

      <button type="submit" class="login-button">Entrar</button>

      <p class="login-text">
        ¿No tienes cuenta?
        <router-link to="/SignIn" class="signup-link">Regístrate</router-link>
      </p>
      <router-link to="/">Ir al inicio</router-link>
    </form>
  </div>
</template>

<script>
import { login } from "../services/authService";

export default {
  props: {
    registered: {
      type: String,
      default: 'false',
    },
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errors: {},
      serverError: "",
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      this.serverError = "";
      let isValid = true;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.username) {
        this.errors.username = "El correo es obligatorio.";
        isValid = false;
      } else if (!emailRegex.test(this.form.username)) {
        this.errors.username = "Ingresa un correo válido.";
        isValid = false;
      }

      if (!this.form.password) {
        this.errors.password = "La contraseña es obligatoria.";
        isValid = false;
      }
      return isValid;
    },

    async handleLogin() {
      if (!this.validateForm()) return;

      try {
        await login(this.form.username, this.form.password);
        this.$router.push("/Home");
      } catch (error) {
        console.error("Error de inicio de sesión:", error.code);
        switch (error.code) {
          case 'auth/user-not-found':
          case 'auth/invalid-email':
            this.serverError = "No se encontró un usuario con ese correo.";
            break;
          case 'auth/wrong-password':
            this.serverError = "La contraseña es incorrecta.";
            break;
          case 'auth/invalid-credential':
             this.serverError = "Las credenciales no son válidas.";
             break;
          default:
            this.serverError = "Error al iniciar sesión. Verifica tus datos.";
        }
      }
    },
  },
};
</script>

<style scoped>
.success-box {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}

.server-error-box {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url('../assets/img/fondo.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
  box-sizing: border-box;
}

.login-form {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.login-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
}

.form-label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #444;
  margin-top: 1rem;
}

.form-input {
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
}

.input-error {
  border-color: #dc3545;
}

.error-text {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 4px;
  min-height: 1em;
}

.login-button {
  margin-top: 2rem;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.login-text {
  margin-top: 1rem;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

.signup-link {
  color: #007bff;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
