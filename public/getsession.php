<?php
        //ini_set('session.cookie_domain', '.joshuagarcia.site');
        //session.cookie_domain = '.joshuagarcia.site';
        ini_set('session.cookie_domain', '.joshuagarcia.site' );
        session_start();
        if($_SESSION['userExist'] == 0){
            header("Location: https://joshuagarcia.site/login.php%22");
        }
    ?>