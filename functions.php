<?php
/**
 * WP Bangla "Unijoy" Keyboard
 * write unicode bengali using
 * unijoy keyboard layout from admin
 * panel for posts & pages
 * JS URL: https://cdn.iftekhar.net/js/unijoy.js
 */
// enque the script for admin panel
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_script('unijoy', get_template_directory_uri().'/js/unijoy.js');
});

// add selector for classic text editor
add_action('media_buttons', function() {
    $screen = get_current_screen();
    if ($screen->post_type == 'page' || 
        $screen->post_type == 'post') {
        echo '<input type="radio" name="layoutGrp" onclick="switched=true;" value="bvkenglish" checked>English';
        echo '<input type="radio" name="layoutGrp" onclick="makeUnijoyEditor(\'content\'); switched=false;" value="bvkunijoy">Unijoy';
    }
});
?>