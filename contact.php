<!doctype html>
<html class="no-js" lang="en">
<head>
    <?php include('assets/includes/head.php'); ?>
</head>
<body>
    <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->


    <!-- header start -->
    <header class="header-area">
        <?php include('assets/includes/canvas_nav.php'); ?>
    </header>
    <!-- header end -->

    <!-- offcanvas Menu Start -->
    <div class="offcanvas offcanvas-start" id="offcanvasMenu">
        <?php include('assets/includes/off_canvas_nav.php'); ?>
    </div>
    <!-- offcanvas Menu end -->


    <!-- Contact area start -->
    <div class="about-main-area">
        <?php include('assets/includes/contact_page.php'); ?>
    </div>
    <!-- Contact area end -->




    <!-- footer area start -->
    <footer>
        <!-- contuct area start -->
        <div class="top-footer ptb-50 bg-2">
            <?php include('assets/includes/contact_area.php'); ?>
        </div>
        <!-- contuct area end -->

        <!-- copy right area start -->
        <div class="footer-bottom ptb-20">
            <?php include('assets/includes/copyright.php'); ?>
        </div>
        <!-- copy right area end -->
    </footer>
    <!-- footer area end -->
    
    <!-- Back To Top Start -->
    <button id="backBTn" class="backbtn"><i class="fa fa-chevron-up"></i></button>
    <!-- Back To Top end -->



    

    <!-- JS
    ============================================ -->

    <!-- Modernizer & jQuery JS -->
    <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
    <script src="assets/js/vendor/jquery-v3.4.1.min.js"></script>

    <!-- Bootstrap JS -->
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <!-- Plugins JS -->
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/jquery-ui.min.js"></script>
    <script src="assets/js/jquery.nivo.slider.pack.js"></script>
    <script src="assets/js/jquery.countdown.min.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/wow.min.js"></script>

    <!-- Main JS -->
    <script src="assets/js/main.js"></script>
    

    <!-- Google Map JS starts -->
        <?php include('assets/includes/google_map_js.php'); ?>
    <!-- Google Map JS end -->
</body>
</html>
