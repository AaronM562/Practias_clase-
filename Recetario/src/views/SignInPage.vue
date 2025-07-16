<template>
  <div class="registro-page">
    <form @submit.prevent="handleRegistro" class="registro-form">
      <h1 class="registro-title">Registrarse</h1>

      <!-- Mensaje de error del servidor -->
      <div v-if="serverError" class="server-error-box">
        {{ serverError }}
      </div>

      <label for="name" class="form-label">Nombre de usuario</label>
      <input
        v-model="form.name"
        type="text"
        id="name"
        placeholder="Nombre de usuario"
        class="form-input"
        :class="{ 'input-error': errors.name }"
        autocomplete="name"
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
        autocomplete="new-password"
      />
      <p v-if="errors.password" class="error-text">{{ errors.password }}</p>

      <label for="confirm-password" class="form-label">Confirmar contraseña</label>
      <input
        v-model="form.confirmPassword"
        type="password"
        id="confirm-password"
        placeholder="••••••••"
        class="form-input"
        :class="{ 'input-error': errors.confirmPassword }"
        autocomplete="new-password"
      />
      <p v-if="errors.confirmPassword" class="error-text">
        {{ errors.confirmPassword }}
      </p>

      <button type="submit" class="registro-button">Registrarse</button>

      <p class="registro-text">
        ¿Ya tienes cuenta?
        <router-link to="/Login" class="signup-link">Inicia sesión</router-link>
      </p>
      <router-link to="/">Ir al inicio</router-link>
    </form>
  </div>
</template>

<script>
import { signIn } from "../services/authService";

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
      serverError: "",
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      this.serverError = "";
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
        this.errors.password = "La contraseña debe tener al menos 6 caracteres.";
        isValid = false;
      }

      if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = "Las contraseñas no coinciden.";
        isValid = false;
      }

      return isValid;
    },

    async handleRegistro() {
      if (!this.validateForm()) return;

      try {
        await signIn(this.form.name, this.form.username, this.form.password);
        
        this.$router.push({ path: '/Login', query: { registered: 'true' } });

      } catch (error) {
        console.error("Error en el registro:", error.code, error.message);
        
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.serverError = "Este correo electrónico ya está registrado.";
            break;
          case 'auth/weak-password':
            this.serverError = "La contraseña es demasiado débil. Debe tener al menos 6 caracteres.";
            break;
          case 'auth/invalid-email':
            this.serverError = "El formato del correo electrónico no es válido.";
            break;
          default:
            this.serverError = "Ocurrió un error inesperado al registrarse.";
        }
      }
    },
  },
};
</script>

<style scoped>
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

.registro-page {
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

.registro-form {
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
}

.error-text {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 4px;
  min-height: 1em;
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
