<template>
  <div class="login-page">
    <form @submit.prevent="handleLogin" class="login-form">
      <h1 class="login-title">Iniciar Sesión</h1>

      <label for="email" class="form-label">Correo electrónico</label>
      <input
        v-model="form.username"
        type="email"
        id="email"
        placeholder="ejemplo@email.com"
        class="form-input"
        :class="{ 'input-error': errors.username }"
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
      />
      <p v-if="errors.password" class="error-text">{{ errors.password }}</p>

      <button type="submit" class="login-button">Entrar</button>

      <p class="login-text">
        ¿No tienes cuenta?
        <router-link to="/registro" class="singup-link">Registrate</router-link>
      </p>
      <router-link to="/welcome">Ir a Welcome</router-link>
    </form>
  </div>
</template>

<script>
import { login } from "../services/authService";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errors: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    validateForm() {
      this.errors.username = "";
      this.errors.password = "";

      let isValid = true;

      // Validación de correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.username) {
        this.errors.username = "El correo es obligatorio.";
        isValid = false;
      } else if (!emailRegex.test(this.form.username)) {
        this.errors.username = "Ingresa un correo válido.";
        isValid = false;
      }

      // Validación de contraseña
      if (!this.form.password) {
        this.errors.password = "La contraseña es obligatoria.";
        isValid = false;
      } else if (this.form.password.length < 6) {
        this.errors.password =
          "La contraseña debe tener al menos 6 caracteres.";
        isValid = false;
      }

      return isValid;
    },

    async handleLogin() {
      if (!this.validateForm()) return;

      try {
        await login(this.form);
        alert("Inicio de sesión exitoso.");
        this.$router.push("/dashboard");
      } catch (error) {
        console.error("Error de inicio de sesión:", error);
        alert("Error al iniciar sesión. Verifica tus credenciales.");
      }
    },
  },
};
</script>

<style scoped>
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
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  padding: 20px;
  box-sizing: border-box;
}

.login-form {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
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
  background-color: #ffe6e6;
}

.error-text {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 4px;
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
