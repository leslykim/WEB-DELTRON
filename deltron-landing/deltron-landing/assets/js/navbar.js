document.addEventListener('DOMContentLoaded', function() {
const navbarHTML = `
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="nav-inner">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="index.html">
                                <img src="assets/images/logo/Imagen_logo.png" alt="Logo">
                            </a>
                            <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a class=" active dd-menu collapsed" href="javascript:void(0)"
                                            data-bs-toggle="collapse" data-bs-target="#submenu-1-1"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">Home</a>
                                        <ul class="sub-menu collapse" id="submenu-1-1">
                                            <li class="nav-item active"><a href="index.html">Home</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0)" aria-label="Toggle navigation">Categorias</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class=" dd-menu collapsed" href="javascript:void(0)"
                                            data-bs-toggle="collapse" data-bs-target="#submenu-1-3"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">Listas</a>
                                        <ul class="sub-menu collapse" id="submenu-1-3">
                                            <li class="nav-item"><a href="javascript:void(0)">Grilla de Productos</a></li>
                                            <li class="nav-item"><a href="listaProductos.html">Lista de Productos</a></li>
                                            <li class="nav-item"><a href="javascript:void(0)">Detalles de Productos</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class=" dd-menu collapsed" href="javascript:void(0)"
                                            data-bs-toggle="collapse" data-bs-target="#submenu-1-4"
                                            aria-controls="navbarSupportedContent" aria-expanded="false"
                                            aria-label="Toggle navigation">Paginas</a>
                                        <ul class="sub-menu mega-menu collapse" id="submenu-1-4">
                                            <li class="single-block">
                                                <ul>
                                                    <li class="mega-menu-title">Paginas Escenciales</li>
                                                    <li class="nav-item"><a href="about-us.html">Quienes Somos</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Detalle de Productos</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Insertas Productos</a></li>
                                                    <li class="nav-item"><a href="pricing.html">Tabla de Precios</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Registrate</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Ingresar</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Contactanos</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Preguntas Frecuentes</a></li>
                                                    <li class="nav-item"><a href="404.html">Pagina Error</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Envio Correo</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Proximamante</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="single-block">
                                                <ul>
                                                    <li class="mega-menu-title">Dashboard</li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Account Overview</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Mi Perfil</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Mis Productos</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Productos Favoritos</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Agregar Producto</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Historial de Pedidos</a>
                                                    </li>
                                                    <li class="nav-item"><a href="mensajes.html">Chat Bot</a></li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Eliminar Cuenta</a>
                                                    </li>
                                                    <li class="nav-item"><a href="javascript:void(0)">Seguimiento de Pedido</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div> <!-- navbar collapse -->
                            <div class="login-button">
                                <ul>
                                    <li>
                                        <a href="Login.html"><i class="lni lni-enter"></i>Ingresar</a>
                                    </li>
                                    <li>
                                        <a href="Registrar.html"><i class="lni lni-user"></i>Registrar</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="button header-button">
                                <a href="javascript:void(0)" class="btn">Publicar Producto</a>
                            </div>
                        </nav> <!-- navbar -->
                    </div>
                </div>
            </div> <!-- row -->
        </div>
`;

const header = document.querySelector('header');
  header.innerHTML = navbarHTML;
});