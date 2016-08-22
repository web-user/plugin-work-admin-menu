<?php
/*
Plugin Name: Admin menu work
Plugin URI:
Description: Wordpress Plugin.
Author: Volodymyr
Text Domain:
Domain Path:
Version: 1.0
Author URI: https://github.com/web-user/plugin-work-admin-menu
License: GPLv2 or later
*/



/**
 * Fucntion load stylesheets and scripts in backend
 */

if ( ! function_exists( 'admin_head' ) ) {
   function admin_head() {
       wp_enqueue_style( 'backend_style', plugins_url( 'css/backend_style.css', __FILE__ ) );

       wp_enqueue_script( 'script', plugins_url( 'js/script.js', __FILE__ ), array( 'jquery' ) );

   }
}

  /* include js- and css-files  */
add_action( 'admin_enqueue_scripts', 'admin_head' );