const dashboardSidebar = document.getElementById('dashboard-sidebar');

const dashboardSidebarHTML = `
<div class="user-image">
    <img src="assets/images/Seguimiento/imagen_1.webp" alt="#">
    <h3>
        Lian Salas
        <span><a href="javascript:void(0)">@liansalas</a></span>
    </h3>
</div>
<div class="dashboard-menu">
    <ul>
        <li><a href="javascript:void(0)"><i class="lni lni-dashboard"></i>Perfil</a></li>
        <li>
            <a href="javascript:void(0)"><i class="lni lni-pencil-alt"></i>Editar Perfil</a>
        </li>
        <li><a href="javascript:void(0)"><i class="lni lni-bolt-alt"></i>Mis Productos</a></li>
        <li><a href="javascript:void(0)"><i class="lni lni-heart"></i>Productos Favoritos</a></li>
        <li><a href="javascript:void(0)"><i class="lni lni-circle-plus"></i>Publicar un Producto</a></li>
        <li><a href="javascript:void(0)"><i class="lni lni-bookmark"></i>Historial de Pedidos</a></li>
        <li><a href="Messages.html"><i class="lni lni-envelope"></i>ChatBot</a></li>
        <li><a href="javascript:void(0)"><i class="lni lni-trash"></i>Cerrar Cuenta</a></li>
        <li><a href="SeguimientoPedido.html"><i class="lni lni-trash"></i>Seguimiento de Pedido</a></li>
    </ul>
    <div class="button">
        <a class="btn" href="javascript:void(0)">Cerrar Sesion</a>
    </div>
</div>
`;

dashboardSidebar.innerHTML = dashboardSidebarHTML;
