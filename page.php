<?php
/**
 * The template for displaying all pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package uw_wp_theme
 */

get_header();

$sidebar = get_post_meta( $post->ID, 'sidebar' );

// get the image header.
get_template_part( 'template-parts/header', 'image' );

?>
<div class="container-fluid ">
<?php echo uw_breadcrumbs(); ?>

</div>
<div class="container-fluid uw-body">
	<div class="row">

		<main id="primary" class="site-main uw-body-copy col-md-<?php echo ( ( ! isset( $sidebar[0] ) || 'on' !== $sidebar[0] ) ? '8' : '12' ); ?>">
		
		<?php
		while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', 'page' );

		endwhile; // End of the loop.
		?>

		</main><!-- #primary -->

		<?php
		if ( ! isset( $sidebar[0] ) || 'on' !== $sidebar[0] ) {
			get_sidebar();
		}
		?>

	</div><!-- .row -->
</div><!-- .container -->

<?php
get_footer();
