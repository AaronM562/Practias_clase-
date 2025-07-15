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
        <!-- Page content-->
        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-8">
                    <!-- Post content-->
                    <article>
                        <!-- Post header-->
                        <header class="mb-4">
                            <!-- Post title-->
                            <h1 class="fw-bolder mb-1">Cómo hacer la Lasaña a la Boloñesa Perfecta</h1>
                            <!-- Post meta content-->
                            <div class="text-muted fst-italic mb-2">Publicado el 12 de Julio, 2025 por Chef GPT</div>
                            <!-- Post categories-->
                            <a class="badge bg-secondary text-decoration-none link-light" href="#!">Pastas</a>
                            <a class="badge bg-secondary text-decoration-none link-light" href="#!">Comida Italiana</a>
                        </header>
                        <!-- Preview image figure-->
                        <figure class="mb-4"><img class="img-fluid rounded" src="https://placehold.co/900x400/ced4da/6c757d?text=Platillo+de+Lasaña" alt="Imagen de un platillo de lasaña" /></figure>
                        <!-- Post content-->
                        <section class="mb-5">
                            <p class="fs-5 mb-4">La lasaña es un plato que evoca hogar, familia y confort. Aunque puede parecer intimidante, con esta guía paso a paso, verás que es más sencillo de lo que crees. ¡El resultado vale cada minuto invertido en la cocina!</p>
                            <p class="fs-5 mb-4">El secreto de una buena lasaña reside en la calidad de sus salsas y en la cocción perfecta de la pasta. Aquí te compartimos todos los trucos para que te quede como de restaurante italiano.</p>
                            <h2 class="fw-bolder mb-4 mt-5">Ingredientes</h2>
                            <p class="fs-5 mb-4"><strong>Para la salsa boloñesa:</strong> 500g de carne molida (res o mezcla), 1 cebolla, 2 zanahorias, 2 tallos de apio, 800g de tomate triturado, 1 vaso de vino tinto, aceite de oliva, sal y pimienta.</p>
                            <p class="fs-5 mb-4"><strong>Para la salsa bechamel:</strong> 1 litro de leche, 90g de mantequilla, 90g de harina, nuez moscada, sal y pimienta.</p>
                            <p class="fs-5 mb-4"><strong>Para el montaje:</strong> 12 láminas de pasta para lasaña, 250g de queso mozzarella rallado, 100g de queso parmesano rallado.</p>
                            <h2 class="fw-bolder mb-4 mt-5">Preparación</h2>
                             <p class="fs-5 mb-4"><strong>1. Salsa Boloñesa:</strong> Sofríe la cebolla, zanahoria y apio picados finamente. Añade la carne y cocina hasta dorar. Vierte el vino y deja evaporar. Agrega el tomate, salpimienta y cocina a fuego lento por 1 hora.</p>
                             <p class="fs-5 mb-4"><strong>2. Salsa Bechamel:</strong> Derrite la mantequilla, añade la harina y cocina por 2 minutos. Vierte la leche poco a poco sin dejar de remover hasta que espese. Sazona con sal, pimienta y nuez moscada.</p>
                             <p class="fs-5 mb-4"><strong>3. Montaje:</strong> Precalienta el horno a 180°C. En un refractario, pon una capa de bechamel, luego una de pasta, boloñesa, mozzarella y parmesano. Repite hasta terminar con una capa de bechamel y mucho queso.</p>
                             <p class="fs-5 mb-4"><strong>4. Horneado:</strong> Hornea por 30-40 minutos o hasta que esté dorada y burbujeante. Deja reposar 10 minutos antes de servir. ¡Buen provecho!</p>
                        </section>
                    </article>
                    <!-- Comments section-->
                    <section class="mb-5">
                        <div class="card bg-light">
                            <div class="card-body">
                                <!-- Comment form-->
                                <form class="mb-4"><textarea class="form-control" rows="3" placeholder="¡Únete a la conversación y deja un comentario!"></textarea></form>
                                <!-- Comment with nested comments-->
                                <div class="d-flex mb-4">
                                    <!-- Parent comment-->
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Ana Pérez</div>
                                        ¡Hice esta receta el fin de semana y fue un éxito total! Gracias por compartirla.
                                        <!-- Child comment 1-->
                                        <div class="d-flex mt-4">
                                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div class="ms-3">
                                                <div class="fw-bold">Carlos Gómez</div>
                                                A mí también me encantó. Le agregué un poco de albahaca fresca a la boloñesa y quedó espectacular.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Single comment-->
                                <div class="d-flex">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Laura García</div>
                                        ¿Se puede preparar con anticipación y congelar?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <!-- Side widgets-->
                <div class="col-lg-4">
                    <!-- Search widget-->
                    <div class="card mb-4">
                        <div class="card-header">Buscar Receta</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button"><i class="bi bi-search"></i></button>
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
                        <div class="card-body">Para que tus pasteles queden más esponjosos, asegúrate de que todos los ingredientes estén a temperatura ambiente antes de empezar a mezclar.</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Recetas Inteligentes 2025</p></div>
        </footer>
    </div>
</template>

<script setup>

</script>
