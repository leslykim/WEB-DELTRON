document.addEventListener('DOMContentLoaded', function() {
const footerHTML = `
<div class="footer-top">
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer mobile-app">
                <h3>Mobile Apps</h3>
                <div class="app-button">
                    <a href="javascript:void(0)" class="btn">
                        <i class="lni lni-play-store"></i>
                        <span class="text">
                            <span class="small-text">Get It On</span>
                            Google Play
                        </span>
                    </a>
                    <a href="javascript:void(0)" class="btn">
                        <i class="lni lni-apple"></i>
                        <span class="text">
                            <span class="small-text">Get It On</span>
                            App Store
                        </span>
                    </a>
                </div>
            </div>
            <!-- End Single Widget -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer f-link">
                <h3>Locations</h3>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                        <ul>
                            <li><a href="javascript:void(0)">Lima</a></li>
                            <li><a href="javascript:void(0)">Arequipa</a></li>
                            <li><a href="javascript:void(0)">Trujillo</a></li>
                            <li><a href="javascript:void(0)">Piura</a></li>
                            <li><a href="javascript:void(0)">Cajamarca</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- End Single Widget -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer f-link">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="javascript:void(0)">Quienes Somos</a></li>
                    <li><a href="javascript:void(0)">Ingresa</a></li>
                    <li><a href="javascript:void(0)">Registrate</a></li>
                    <li><a href="javascript:void(0)">Contactanos</a></li>
                </ul>
            </div>
            <!-- End Single Widget -->
        </div>
        <div class="col-lg-3 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer f-contact">
                <h3>Contactanos</h3>
                <ul>
                    <li>Calle Raúl Rebagliati 170,Urb<br> Urb Santa Catalina, La Victoria, Lima, Peru</li>
                    <li>Tel. +(51) 415-0101 <br> Mail. contactanos@deltron.com.pe</li>
                </ul>
            </div>
            <!-- End Single Widget -->
        </div>
    </div>
</div>
</div>

<!-- Start Footer Bottom -->
        <div class="footer-bottom">
            <div class="container">
                <div class="inner">
                    <div class="row">
                        <div class="col-12">
                            <div class="content">
                                <ul class="footer-bottom-links">
                                    <li><a href="javascript:void(0)">Terminos de Uso</a></li>
                                    <li><a href="javascript:void(0)">Politica de Privacidad</a></li>
                                    <li><a href="javascript:void(0)">Busqueda Avanzada</a></li>
                                    <li><a href="javascript:void(0)">Mapa del Sitio</a></li>
                                    <li><a href="javascript:void(0)">Quienes Somos</a></li>
                                </ul>
                                <p class="copyright-text">Diseñado y Desarrollado por Lesly, Jennesis, Omar & Jordan</a>
                                </p>
                                <ul class="footer-social">
                                    <li><a href="javascript:void(0)"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-twitter-original"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-youtube"></i></a></li>
                                    <li><a href="javascript:void(0)"><i class="lni lni-linkedin-original"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Footer Middle -->
`;

const footer = document.querySelector('footer');
footer.innerHTML = footerHTML;
});