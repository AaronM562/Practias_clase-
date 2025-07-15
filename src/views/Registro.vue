<template>
  <div class="registro-page">
    <form @submit.prevent="handleregistro" class="registro-form">
      <h1 class="registro-title">Registrarse</h1>

      <label for="name" class="form-label">Nombre de usuario</label>
      <input
        v-model="form.name"
        type="text"
        id="name"
        placeholder="Nombre de usuario"
        class="form-input"
        :class="{ 'input-error': errors.name }"
      />
      <p v-if="errors.name" class="error-text">{{ errors.name }}</p>

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

      <label for="confirm-password" class="form-label"
        >Confirmar contraseña</label
      >
      <input
        v-model="form.confirmPassword"
        type="password"
        id="confirm-password"
        placeholder="••••••••"
        class="form-input"
        :class="{ 'input-error': errors.confirmPassword }"
      />
      <p v-if="errors.confirmPassword" class="error-text">
        {{ errors.confirmPassword }}
      </p>

      <button type="submit" class="registro-button">Registrarse</button>

      <p class="registro-text">
        ¿Ya tienes cuenta?
        <router-link to="/login" class="signup-link">Inicia sesión</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { registro } from "../services/authService";

export default {
  data() {
    return {
      form: {
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      errors: {
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    validateForm() {
      this.errors = {
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
      };

      let isValid = true;

      if (!this.form.name) {
        this.errors.name = "El nombre es obligatorio.";
        isValid = false;
      }

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
      } else if (this.form.password.length < 6) {
        this.errors.password =
          "La contraseña debe tener al menos 6 caracteres.";
        isValid = false;
      }

      if (!this.form.confirmPassword) {
        this.errors.confirmPassword = "Debes confirmar la contraseña.";
        isValid = false;
      } else if (this.form.confirmPassword !== this.form.password) {
        this.errors.confirmPassword = "Las contraseñas no coinciden.";
        isValid = false;
      }

      return isValid;
    },

    async handleregistro() {
      if (!this.validateForm()) return;

      try {
        await registro(this.form);
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        this.$router.push("/dashboard"); // o a "/login" si prefieres
      } catch (error) {
        console.error("Error en el registro:", error);
        alert("Error al registrarse. Intenta más tarde.");
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

.registro-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  padding: 20px;
  box-sizing: border-box;
}

.registro-form {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.registro-title {
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

.registro-button {
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

.registro-button:hover {
  background-color: #0056b3;
}

.registro-text {
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
