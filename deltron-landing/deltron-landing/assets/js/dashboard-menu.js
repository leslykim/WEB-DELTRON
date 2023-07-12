const dashboardSidebar = document.getElementById('dashboard-sidebar');

const dashboardSidebarHTML = `
<div class="user-image">
    <img src="assets/images/Seguimiento/image4.jpg" alt="#">
    <h3>
        Lian Salas
        <span><a href="javascript:void(0)">@liansalas</a></span>
    </h3>
</div>
<div class="dashboard-menu">
    <ul>
        <li><a href="Dashboard.html"><i class="lni lni-dashboard"></i>Perfil</a></li>
        <li>
            <a href="EditarPerfil.html"><i class="lni lni-pencil-alt"></i>Editar Perfil</a>
        </li>
        <li><a href="HistorialPedido.html"><i class="lni lni-bookmark"></i>Historial de Pedidos</a></li>
        <li><a href="mensajes.html"><i class="lni lni-envelope"></i>ChatBot</a></li>
        <li><a href="javascript:void(0)"><i class="lni lni-trash"></i>Cerrar Cuenta</a></li>
        <li><a href="SeguimientoPedido.html"><i class="lni lni-trash"></i>Seguimiento de Pedido</a></li>
    </ul>
    <div class="button">
        <a class="btn" href="javascript:void(0)">Cerrar Sesion</a>
    </div>
</div>
`;

dashboardSidebar.innerHTML = dashboardSidebarHTML;
