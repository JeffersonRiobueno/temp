<?php 

/*
Plugin Name: Opiniones
Plugin URI: https://somos4boot.com/plugin/b4_producto
Description: Post type recipes
Version: 1.0
Author: MarianWhat
Author URI: https://somos4boot.com
License: GPLv2
*/

function custom_posts_b4_recipes()
{
    register_post_type('Opiniones', array(
        'label' => _('Opiniones'),
        'labels' => array(
            'name' => _('Opiniones'),
            'singular_name' => _('Opiniones'),
            'name_admin_bar' => _('Nuevo Comentario'),
            'add_new' => _('Agregar Opinión'),
            'new_item' => _('Nueva Opinión'),
            'add_new_item' => _('Agregar Opinión'),
            'edit' => _('Editar'),
            'edit_item' => _('Editar Opinión'),
            'view' => _('Ver'),
            'view_item' => _('Ver Opinión'),
            'search_items' => _('Buscar'),
            'not_found' => _('No se encontraron Entradas de Opiniones'),
            'not_found_in_trash' => _('No existen recetas borrados')
        ),
        'menu_position' => 15,
        'public' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'capability_type'    => 'page',
        'supports' => array('title','editor')

    ));

}

add_action('init', 'custom_posts_b4_recipes');
/* Categoria de productos*/


$prefix="opiniones_";
$custom_recipes = array(
    array(
        'label'=> 'Cliente:',
        'desc'  => '',
        'id'    => $prefix.'cliente',
        'type'  => 'text',
        'exclude_from_search' => false,
        
    ),array(
        'label'=> 'Valor:',
        'desc'  => '',
        'id'    => $prefix.'valor',
        'type'  => 'text',
        'exclude_from_search' => false,
        
    ),array(
        'label'=> 'Compra:',
        'desc'  => '',
        'id'    => $prefix.'name_compra',
        'type'  => 'text',
        'exclude_from_search' => false,
        
    ),array(
        'label'=> 'Url de compra:',
        'desc'  => '',
        'id'    => $prefix.'url_compra',
        'type'  => 'text',
        'exclude_from_search' => false,
        
    ),array(
        'label'=> 'Vía:',
        'desc'  => '',
        'id'    => $prefix.'name_via',
        'type'  => 'text',
        'exclude_from_search' => false,
        
    ),array(
        'label'=> 'Url de vía:',
        'desc'  => '',
        'id'    => $prefix.'url_via',
        'type'  => 'text',
        'exclude_from_search' => false,
        
    ),array(
        'label'=> 'Tipo de calificación:',
        'desc'  => '',
        'id'    => $prefix.'calificacion',
        'type'  => 'text',
        'exclude_from_search' => false,
        
    )
    
  );


    function add_custom_meta_recipes() {
        add_meta_box(
                    'custom_meta_recipes', // id
                    'Detalles del Opinión:', // título
                    'show_custom_meta_recipes', // función a la que llamamos
                    'opiniones', // sólo para páginas
                    'normal', // contexto
                    'high'); // prioridad
    }
    add_action('add_meta_boxes', 'add_custom_meta_recipes');


// The Callback
function show_custom_meta_recipes() {
global $custom_recipes, $post;
// Use nonce for verification
echo '<input type="hidden" name="custom_meta_box_nonce" value="'.wp_create_nonce(basename(__FILE__)).'" />';
     
    // Begin the field table and loop
    echo '<table class="form-table">';
    foreach ($custom_recipes as $field) {
        // get value of this field if it exists for this post
        $meta = get_post_meta($post->ID, $field['id'], true);
        // begin a table row with
        echo '<tr>
                <th><label for="'.$field['id'].'">'.$field['label'].'</label></th>
                <td>';
                switch($field['type']) {
                    // case items will go here
case 'text':
    echo '<input type="text" name="'.$field['id'].'" id="'.$field['id'].'" value="'.$meta.'" size="30" />
        <br /><span class="description">'.$field['desc'].'</span>';
break;


case 'textarea':
    echo '<textarea name="'.$field['id'].'" id="'.$field['id'].'" style="
    width: 98%;
    height: 150px;
" />'.$meta.'</textarea>
        <br /><span class="description">'.$field['desc'].'</span>';
break;




                } //end switch
        echo '</td></tr>';
    } // end foreach
    echo '</table>'; 


}


    // Grabar los datos
    function save_custom_recipes($post_id) {
        global $custom_recipes;
          
            // verificamos usando nonce
            if (!wp_verify_nonce($_POST['custom_meta_box_nonce'], basename(__FILE__)))
                    return $post_id;
            // comprobamos si se ha realizado una grabación automática, para no tenerla en cuenta
            if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
                    return $post_id;
            // comprobamos que el usuario puede editar
            if ('page' == $_POST['post_type']) {
                    if (!current_user_can('edit_page', $post_id))
                            return $post_id;
                    } elseif (!current_user_can('edit_post', $post_id)) {
                            return $post_id;
            }
 
            // hacemos un loop por todos los campos y guardamos los datos
            foreach ($custom_recipes as $field) {
                    $old = get_post_meta($post_id, $field['id'], true);
                    $new = $_POST[$field['id']];
                    if ($new && $new != $old) {
                            update_post_meta($post_id, $field['id'], $new);
                    } elseif ('' == $new && $old) {
                            delete_post_meta($post_id, $field['id'], $old);
                    }
            } // final del foreach
    }
    add_action('save_post', 'save_custom_recipes'); 