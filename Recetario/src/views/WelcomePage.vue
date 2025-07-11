<template>
  <div id="page-top">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#page-top">Smart Recipe</a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          @click="toggleNavbar"
          aria-controls="navbarResponsive"
          aria-expanded="navbarOpen.toString()"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: navbarOpen }" id="navbarResponsive">
          <ul class="navbar-nav ms-auto my-2 my-lg-0">
            <li class="nav-item"><a class="nav-link" href="#features" @click="closeNavbar">Características</a></li>
            <li class="nav-item"><a class="nav-link" href="#search" @click="closeNavbar">Buscar Recetas</a></li>
            <li class="nav-item"><a class="nav-link" href="#portfolio" @click="closeNavbar">Recetas por dieta</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact" @click="closeNavbar">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Masthead -->
    <header class="masthead">
      <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-8 align-self-end">
            <h1 class="text-white font-weight-bold">Encuentra recetas perfectas para tus ingredientes</h1>
            <hr class="divider" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 mb-5">
              Busca por ingredientes, calorías, tiempo de preparación y más
            </p>
            <a class="btn btn-primary btn-xl" href="#search">Empezar</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section class="page-section bg-primary" id="features">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0">¿Qué puedes hacer con Smart Recipe?</h2>
            <hr class="divider divider-light" />
            <p class="text-white-75 mb-4">
              Encuentra recetas personalizadas basadas en lo que tienes en tu refrigerador y tus necesidades dietéticas
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section (Now Features) -->
    <section class="page-section" id="search">
      <div class="container px-4 px-lg-5">
        <h2 class="text-center mt-0">Búsqueda Inteligente</h2>
        <hr class="divider" />
        <div class="row gx-4 gx-lg-5">
          <div v-for="(feature, index) in features" :key="index" class="col-lg-3 col-md-6 text-center">
            <div class="mt-5">
              <div class="mb-2"><i :class="['bi', feature.icon, 'fs-1', 'text-primary']"></i></div>
              <h3 class="h4 mb-2">{{ feature.title }}</h3>
              <p class="text-muted mb-0">{{ feature.text }}</p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-8 mx-auto text-center">
            <a class="btn btn-primary btn-xl" href="#portfolio">Ver Recetas</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio -->
    <section id="portfolio">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div
            v-for="(item, index) in portfolio"
            :key="index"
            class="col-lg-4 col-sm-6"
          >
            <div class="portfolio-box" @click="showImage(index)">
              <img class="img-fluid" :src="item.thumb" :alt="item.title" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">
                  {{ item.category }}
                </div>
                <div class="project-name">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Lightbox -->
      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </section>

    <!-- CTA -->
    <section class="page-section bg-dark text-white">
      <div class="container px-4 px-lg-5 text-center">
        <h2 class="mb-4">¡Comienza a cocinar hoy mismo!</h2>
        <a class="btn btn-light btn-xl" href="/Home">Buscar Recetas</a>
      </div>
    </section>

    <!-- Contact -->
    <section class="page-section" id="contact">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8 col-xl-6 text-center">
            <h2 class="mt-0">¿Tienes preguntas?</h2>
            <hr class="divider" />
            <p class="text-muted mb-5">
              Contáctanos para sugerencias o colaboraciones
            </p>
          </div>
        </div>
        <!-- Add form logic here or use external SB Forms -->
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-light py-5">
      <div class="container px-4 px-lg-5">
        <div class="small text-center text-muted">© 2025 - Smart Recipe</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

// Navbar toggle
const navbarOpen = ref(false)
const toggleNavbar = () => {
  navbarOpen.value = !navbarOpen.value
}
const closeNavbar = () => {
  if (navbarOpen.value) {
    navbarOpen.value = false
  }
}

// Características de búsqueda
const features = [
  { 
    icon: 'bi-search', 
    title: 'Búsqueda por ingredientes', 
    text: 'Encuentra recetas con lo que tienes en casa' 
  },
  { 
    icon: 'bi-fire', 
    title: 'Filtro de calorías', 
    text: 'Especifica rango mínimo y máximo de calorías' 
  },
  { 
    icon: 'bi-clock', 
    title: 'Tiempo de preparación', 
    text: 'Filtra por tiempo de cocción necesario' 
  },
  { 
    icon: 'bi-heart', 
    title: 'Preferencias dietéticas', 
    text: 'Vegetariano, vegano, sin gluten, etc.' 
  }
]

// Portfolio
const portfolio = [
  { thumb: 'src/assets/img/receta1.jpg', full: 'src/assets/img/receta1.jpg', title: 'Ensalada de quinoa con salmón a la plancha', category: 'Pescetariana' },
  { thumb: 'src/assets/img/receta2.jpg', full: 'src/assets/img/receta2.jpg', title: 'Curry de lentejas con arroz y yogurt natural', category: 'Lacto vegetariana' },
  { thumb: 'src/assets/img/receta3.jpeg', full: 'src/assets/img/receta3.jpeg', title: 'Omelette de espinaca con pan integral y aguacate', category: 'Ovo vegetariana' },
  { thumb: 'src/assets/img/receta4.jpeg', full: 'src/assets/img/receta4.jpeg', title: 'Tacos de champiñón con guacamole y frijoles negros', category: 'Vegana o Vegetariana' },
  { thumb: 'src/assets/img/receta5.jpg', full: 'src/assets/img/receta5.jpg', title: 'Pollo asado con vegetales al vapor y nueces', category: 'Paleo' },
  { thumb: 'src/assets/img/receta6.jpg', full: 'src/assets/img/receta6.jpg', title: 'Filete de res con mantequilla, espárragos y queso curado', category: 'Primal' },
]

// Lightbox setup
const visibleRef = ref(false)
const indexRef = ref(0)
const imgsRef = ref([])

const showImage = (index) => {
  imgsRef.value = portfolio.map(img => img.full)
  indexRef.value = index
  visibleRef.value = true
}

const onHide = () => {
  visibleRef.value = false
}

// Navbar shrink logic
let shrinkNavbar
onMounted(() => {
  const navbar = document.querySelector('#mainNav')

  shrinkNavbar = () => {
    if (!navbar) return
    if (window.scrollY === 0) {
      navbar.classList.remove('navbar-shrink')
    } else {
      navbar.classList.add('navbar-shrink')
    }
  }

  shrinkNavbar()
  window.addEventListener('scroll', shrinkNavbar)

  const navLinks = document.querySelectorAll('#navbarResponsive .nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', closeNavbar)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', shrinkNavbar)
})
</script>
<style>
@import '../assets/styles.css';
</style>
