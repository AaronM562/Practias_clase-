<template>
  <div>
    <!-- Responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#!">Smart Recipe</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li>
            <li class="nav-item">
              <router-link to="/Registro">Regístrate</router-link>
              >
            </li>
            <li class="nav-item"><a class="nav-link" href="#!">Contacto</a></li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Recetas</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Page header with logo and tagline-->
    <header class="py-5 bg-light border-bottom mb-4">
      <div class="container">
        <div class="text-center my-5">
          <h1 class="fw-bolder">Bienvenido a Smart Recipe</h1>
          <p class="lead mb-0">
            El lugar perfecto para encontrar tu próxima comida favorita
          </p>
        </div>
      </div>
    </header>
    <!-- Page content-->
    <div class="container">
      <div class="row">
        <!-- Blog entries-->
        <div class="col-lg-8">
          <!-- Featured blog post-->
          <div class="card mb-4">
            <a href="#!"
              ><img
                class="card-img-top"
                src="https://placehold.co/850x350/dee2e6/6c757d?text=Lasaña"
                alt="Imagen de una lasaña"
            /></a>
            <div class="card-body">
              <div class="small text-muted">12 de Julio, 2025</div>
              <h2 class="card-title">Deliciosa Lasaña a la Boloñesa</h2>
              <p class="card-text">
                Una receta clásica que nunca falla. Capas de pasta, una rica
                salsa boloñesa de carne, bechamel cremosa y mucho queso
                parmesano. Perfecta para una comida familiar de domingo.
              </p>
              <a class="btn btn-primary" href="/Recipe">Leer más →</a>
            </div>
          </div>
          <!-- Nested row for non-featured blog posts-->
          <div class="row">
            <div class="col-lg-6">
              <!-- Blog post-->
              <div class="card mb-4">
                <a href="#!"
                  ><img
                    class="card-img-top"
                    src="https://placehold.co/700x350/dee2e6/6c757d?text=Tacos+al+Pastor"
                    alt="Imagen de tacos al pastor"
                /></a>
                <div class="card-body">
                  <div class="small text-muted">11 de Julio, 2025</div>
                  <h2 class="card-title h4">Tacos al Pastor Caseros</h2>
                  <p class="card-text">
                    Aprende a preparar los famosos tacos al pastor en la
                    comodidad de tu casa. ¡El marinado es la clave!
                  </p>
                  <a class="btn btn-primary" href="/Recipe">Leer más →</a>
                </div>
              </div>
              <!-- Blog post-->
              <div class="card mb-4">
                <a href="#!"
                  ><img
                    class="card-img-top"
                    src="https://placehold.co/700x350/dee2e6/6c757d?text=Pastel+de+Chocolate"
                    alt="Imagen de un pastel de chocolate"
                /></a>
                <div class="card-body">
                  <div class="small text-muted">10 de Julio, 2025</div>
                  <h2 class="card-title h4">Pastel de Chocolate Esponjoso</h2>
                  <p class="card-text">
                    La receta definitiva para un pastel de chocolate húmedo y
                    esponjoso que todos amarán.
                  </p>
                  <a class="btn btn-primary" href="/Recipe">Leer más →</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <!-- Blog post-->
              <div class="card mb-4">
                <a href="#!"
                  ><img
                    class="card-img-top"
                    src="https://placehold.co/700x350/dee2e6/6c757d?text=Ensalada+César"
                    alt="Imagen de una ensalada césar"
                /></a>
                <div class="card-body">
                  <div class="small text-muted">9 de Julio, 2025</div>
                  <h2 class="card-title h4">Ensalada César con Pollo</h2>
                  <p class="card-text">
                    Una opción ligera pero completa. El aderezo casero marca
                    toda la diferencia. Ideal para un almuerzo rápido.
                  </p>
                  <a class="btn btn-primary" href="/Recipe">Leer más →</a>
                </div>
              </div>
              <!-- Blog post-->
              <div class="card mb-4">
                <a href="#!"
                  ><img
                    class="card-img-top"
                    src="https://placehold.co/700x350/dee2e6/6c757d?text=Sopa+de+Tortilla"
                    alt="Imagen de una sopa de tortilla"
                /></a>
                <div class="card-body">
                  <div class="small text-muted">8 de Julio, 2025</div>
                  <h2 class="card-title h4">Sopa de Tortilla Tradicional</h2>
                  <p class="card-text">
                    Caliente y reconfortante, esta sopa es un abrazo al corazón.
                    Acompáñala con aguacate, crema y queso.
                  </p>
                  <a class="btn btn-primary" href="/Recipe">Leer más →</a>
                </div>
              </div>
            </div>
          </div>
          <!-- Pagination-->
          <nav aria-label="Pagination">
            <hr class="my-0" />
            <ul class="pagination justify-content-center my-4">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                  >Nuevas</a
                >
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#!">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#!">2</a></li>
              <li class="page-item"><a class="page-link" href="#!">3</a></li>
              <li class="page-item disabled">
                <a class="page-link" href="#!">...</a>
              </li>
              <li class="page-item"><a class="page-link" href="#!">15</a></li>
              <li class="page-item">
                <a class="page-link" href="#!">Antiguas</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Side widgets-->
        <div class="col-lg-4">
          <!-- Search widget-->
          <div class="card mb-4">
            <div class="card-header">Buscar Receta</div>
            <div class="card-body">
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Buscar..."
                  aria-label="Buscar..."
                  aria-describedby="button-search"
                />
                <button
                  class="btn btn-primary"
                  id="button-search"
                  type="button"
                >
                  ¡Vamos!
                </button>
              </div>
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
          <!-- Side widget-->
          <div class="card mb-4">
            <div class="card-header">Tip de la Semana</div>
            <div class="card-body">
              Para que tus pasteles queden más esponjosos, asegúrate de que
              todos los ingredientes estén a temperatura ambiente antes de
              empezar a mezclar.
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Smart Recipe 2025
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup></script>
