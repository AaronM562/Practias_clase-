<template>
    <div>
        <!-- Responsive navbar-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">Smart Recipe</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Acerca de</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Contacto</a></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Recetas</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Page header with logo and tagline-->
        <header class="py-5 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Bienvenido a Smart Recipe</h1>
                    <p class="lead mb-0">El lugar perfecto para encontrar tu próxima comida favorita</p>
                </div>
            </div>
        </header>
        <!-- Page content-->
        <div class="container">
            <div class="row">
                <!-- Blog entries -->
                <div class="col-lg-8">
                    <!-- Mensajes de Carga o Error -->
                    <div v-if="isLoading" class="alert alert-info text-center">Cargando resultados...</div>
                    <div v-if="error" class="alert alert-danger text-center">{{ error }}</div>
                    <div v-if="!isLoading && hasSearched && recipes.length === 0" class="alert alert-warning text-center">
                      No se encontraron recetas. Intenta con otros ingredientes.
                    </div>

                    <!-- Contenedor de Resultados de Búsqueda -->
                    <div v-if="recipes.length > 0" class="row">
                        <div v-for="hit in recipes" :key="hit.recipe.uri" class="col-lg-6">
                            <!-- Tarjeta de Receta -->
                            <div class="card mb-4">
                                <a :href="hit.recipe.url" target="_blank"><img class="card-img-top" :src="hit.recipe.image" :alt="`Imagen de ${hit.recipe.label}`" /></a>
                                <div class="card-body">
                                    <div class="small text-muted">Fuente: {{ hit.recipe.source }}</div>
                                    <h2 class="card-title h4">{{ hit.recipe.label }}</h2>
                                    <!-- Etiquetas de dieta -->
                                    <div>
                                        <span v-for="tag in hit.recipe.dietLabels" :key="tag" class="badge bg-success me-1 mb-2">{{ tag }}</span>
                                    </div>
                                    <a class="btn btn-primary" :href="hit.recipe.url" target="_blank">Ver Receta →</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contenido Estático Inicial (se oculta después de una búsqueda exitosa) -->
                    <div v-else-if="!hasSearched">
                        <!-- Featured blog post-->
                        <div class="card mb-4">
                            <a href="#!"><img class="card-img-top" src="https://placehold.co/850x350/dee2e6/6c757d?text=Lasaña" alt="Imagen de una lasaña" /></a>
                            <div class="card-body">
                                <div class="small text-muted">14 de Julio, 2025</div>
                                <h2 class="card-title">Deliciosa Lasaña a la Boloñesa</h2>
                                <p class="card-text">Una receta clásica que nunca falla. Capas de pasta, una rica salsa boloñesa de carne, bechamel cremosa y mucho queso parmesano. Perfecta para una comida familiar de domingo.</p>
                                <a class="btn btn-primary" href="#">Leer más →</a>
                            </div>
                        </div>
                        <!-- Nested row for non-featured blog posts-->
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card mb-4">
                                    <a href="#!"><img class="card-img-top" src="https://placehold.co/700x350/dee2e6/6c757d?text=Tacos+al+Pastor" alt="..." /></a>
                                    <div class="card-body">
                                        <div class="small text-muted">11 de Julio, 2025</div>
                                        <h2 class="card-title h4">Tacos al Pastor Caseros</h2>
                                        <p class="card-text">Aprende a preparar los famosos tacos al pastor en la comodidad de tu casa.</p>
                                        <a class="btn btn-primary" href="#">Leer más →</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="card mb-4">
                                    <a href="#!"><img class="card-img-top" src="https://placehold.co/700x350/dee2e6/6c757d?text=Ensalada+César" alt="..." /></a>
                                    <div class="card-body">
                                        <div class="small text-muted">9 de Julio, 2025</div>
                                        <h2 class="card-title h4">Ensalada César con Pollo</h2>
                                        <p class="card-text">Una opción ligera pero completa. El aderezo casero marca toda la diferencia.</p>
                                        <a class="btn btn-primary" href="#">Leer más →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Side widgets-->
                <div class="col-lg-4">
                    <!-- Search widget (Ahora funcional) -->
                    <div class="card mb-4">
                        <div class="card-header">Buscar Receta</div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="ingredients" class="form-label">Ingredientes</label>
                                <input 
                                  id="ingredients"
                                  v-model="searchQuery" 
                                  @keyup.enter="fetchRecipes"
                                  class="form-control"
                                  type="text" 
                                  placeholder="Ej: chicken, rice, broccoli" />
                                <div class="form-text">Separa los ingredientes con comas. (En inglés)</div>
                            </div>
                            <div class="mb-3">
                                <label for="diet" class="form-label">Tipo de Dieta (Opcional)</label>
                                <select id="diet" v-model="dietFilter" class="form-select">
                                  <option value="">Cualquiera</option>
                                  <option value="balanced">Balanceada</option>
                                  <option value="high-fiber">Alta en Fibra</option>
                                  <option value="high-protein">Alta en Proteína</option>
                                  <option value="low-carb">Baja en Carbohidratos</option>
                                  <option value="low-fat">Baja en Grasa</option>
                                  <option value="low-sodium">Baja en Sodio</option>
                                </select>
                            </div>
                            <button @click="fetchRecipes" :disabled="isLoading" class="btn btn-primary w-100">
                                {{ isLoading ? 'Buscando...' : 'Buscar Recetas' }}
                            </button>
                        </div>
                    </div>
                    <!-- Categories widget-->
                    <div class="card mb-4">
                        <div class="card-header">Categorías</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Pastas</a></li>
                                        <li><a href="#!">Postres</a></li>
                                        <li><a href="#!">Ensaladas</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Sopas</a></li>
                                        <li><a href="#!">Carnes</a></li>
                                        <li><a href="#!">Vegetariano</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Smart Recipe 2025</p></div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const searchQuery = ref('');
const dietFilter = ref('');
const recipes = ref([]);
const isLoading = ref(false);
const error = ref(null);
const hasSearched = ref(false);

// URL del backend.
const backendUrl = 'http://localhost:3000/api/recipes';

// --- Lógica de la Aplicación ---
const fetchRecipes = async () => {
  if (!searchQuery.value.trim()) {
    error.value = 'Por favor, introduce al menos un ingrediente.';
    return;
  }
  
  isLoading.value = true;
  error.value = null;
  recipes.value = [];
  hasSearched.value = true;

  try {
    // Construir los parámetros para la petición al backend
    const params = {
      ingredients: searchQuery.value.trim(),
    };
    if (dietFilter.value) {
      params.diet = dietFilter.value;
    }

    // Hacemos la llamada a nuestro propio servidor
    const response = await axios.get(backendUrl, { params });
    
    // La API de Edamam devuelve los resultados dentro de la propiedad "hits"
    recipes.value = response.data.hits;

  } catch (err) {
    console.error('Error al obtener recetas:', err);
    error.value = 'No se pudieron obtener las recetas. Revisa que el servidor esté funcionando o intenta más tarde.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 225px;
    object-fit: cover;
}

.form-label {
    font-weight: bold;
}
</style>
