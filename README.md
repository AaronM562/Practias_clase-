
# Smart Recipe: Tu Asistente de Cocina Inteligente

Smart Recipe es una aplicación web diseñada para ayudarte a descubrir recetas de cocina de una manera innovadora y personalizada. Simplemente introduce los ingredientes que tienes a tu disposición, y la aplicación te sugerirá una variedad de platillos que puedes preparar.

## Características Principales

- **Búsqueda por Ingredientes**: Encuentra recetas basadas en los alimentos que ya tienes en tu despensa o refrigerador.
- **Filtros Avanzados**: Personaliza tu búsqueda con filtros por tipo de dieta (balanceada, alta en fibra, etc.), restricciones de salud (vegetariana, sin gluten, etc.), tipo de platillo (plato principal, postre, etc.) y más.
- **Exclusión de Ingredientes**: ¿No te gusta algo o tienes alguna alergia? Puedes excluir ingredientes específicos de los resultados de búsqueda.
- **Autenticación de Usuarios**: Crea una cuenta para guardar tus preferencias y acceder a funciones personalizadas en el futuro.
- **Interfaz Moderna y Responsiva**: Una experiencia de usuario agradable y adaptable a cualquier dispositivo, desde un móvil hasta un ordenador de escritorio.

## Arquitectura

El proyecto sigue una arquitectura cliente-servidor:

- **Frontend**: Una Single-Page Application (SPA) desarrollada con Vue.js que se encarga de la interfaz y la experiencia de usuario.
- **Backend**: Un servidor Node.js con Express que expone una API REST para gestionar la lógica de negocio y la comunicación con servicios externos.

## Tecnologías Utilizadas

### Frontend (Recetario)

- **Framework**: Vue.js 3  
- **Enrutamiento**: Vue Router  
- **Estilos**: Bootstrap y Bootstrap Icons  
- **Cliente HTTP**: Axios para consumir la API  
- **Autenticación**: Firebase Authentication  

### Backend (Server)

- **Entorno**: Node.js  
- **Framework**: Express.js  
- **Cliente HTTP**: Axios  
- **API de Terceros**:  
  - Edamam: Para la búsqueda y obtención de datos de recetas.  
  - Google Translate API: Para traducir los términos de búsqueda y los resultados.  
- **Variables de Entorno**: dotenv para la gestión de credenciales de API.

## Instalación y Puesta en Marcha

### Requisitos Previos

- Node.js (versión 18 o superior)  
- npm (o un gestor de paquetes compatible como Yarn o pnpm)  

### Configuración del Backend (Server)

1. Navega al directorio del servidor:  
   ```bash
   cd server
   ```

2. Instala las dependencias:  
   ```bash
   npm install
   ```

3. Configura las variables de entorno:  
   Crea un archivo `.env` en la raíz de la carpeta `server` con tus credenciales de la API de Edamam.
   ```
   APP_ID=TU_APP_ID_DE_EDAMAM  
   APP_KEY=TU_APP_KEY_DE_EDAMAM  
   EDAMAM_ACCOUNT_USER=TU_USUARIO_DE_EDAMAM
   ```

4. Ejecuta el servidor:  
   ```bash
   node server.js
   ```

   El servidor estará escuchando en http://localhost:3000.

### Configuración del Frontend (Recetario)

1. Navega al directorio del frontend:  
   ```bash
   cd Recetario
   ```

2. Instala las dependencias:  
   ```bash
   npm install
   ```

3. Configura Firebase:  
   Asegúrate de que tu configuración de Firebase en `src/firebase/firebaseConfig.js` sea correcta.

4. Ejecuta el cliente de desarrollo:  
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en la dirección que indique Vite en la consola (generalmente http://localhost:5173).

## API Propia

El backend expone un endpoint principal para la búsqueda de recetas.

- **Endpoint**: `GET /api/recipes`  
- **Descripción**: Realiza una búsqueda de recetas. Recibe los parámetros de búsqueda, los traduce al inglés si es necesario, consulta la API de Edamam, y devuelve los resultados traducidos al español.

### Parámetros de Consulta (Query Params):

- `ingredients` (string, obligatorio): Ingredientes principales separados por comas.  
- `diet` (string, opcional): Tipo de dieta (ej. balanced, high-protein).  
- `health` (string/array, opcional): Etiquetas de salud (ej. vegetarian, gluten-free).  
- `dishType` (string, opcional): Tipo de plato (ej. Main course, Desserts).  
- `excluded` (string/array, opcional): Ingredientes a excluir.
