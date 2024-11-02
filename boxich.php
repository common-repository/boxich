<?php
/**
 * Plugin Name: Boxich
 * Plugin URI: http://boxich.com/
 * Description: Boxich WP Plugin.
 * Version: 1.0.0
 * Author: Boxich
 * Author URI: http://boxich.com/
 */

define('BOXICH_INCLUDE_URL', plugin_dir_url(__FILE__).'includes/');


add_shortcode('boxich', 'boxich_shortcode');
add_action('wp_head','boxich_includes');

add_action('admin_menu', function() {
    add_options_page('Boxich settings', 'Boxich', 'manage_options', 'boxich', 'boxich_settings_page' );
});

add_action('admin_init', function() {
    register_setting('boxich-settings', 'boxich_jwt');
    register_setting('boxich-settings', 'boxich_uid');
});

function encodeURIComponent($str) {
    $revert = array('%21'=>'!', '%2A'=>'*', '%27'=>"'", '%28'=>'(', '%29'=>')');
    return strtr(rawurlencode($str), $revert);
}

function boxich_includes(){
    wp_enqueue_style('boxich_includes_css_js', BOXICH_INCLUDE_URL."boxich-style.css");
    wp_enqueue_script('boxich_includes_css_js', BOXICH_INCLUDE_URL."boxich-script.js");
}

function boxich_settings_page() {
 ?>
    <style>
        #_boxichSettingsFrame{
           display:none !important;
        }
		#_boxichManageWrap{
            width: calc(100% - 40px);
			padding:20px;
			position:relative;
            height: 505px;
        }
    </style>
	 <? wp_enqueue_style('boxich_includes_css_js', BOXICH_INCLUDE_URL."boxich-manage-style.css"); ?>
    <iframe id="_boxichSettingsFrame" src="http://boxich.a2hosted.com/boxich/app/#wordpress-<?php echo get_site_url(); ?>"></iframe>
	<div id="_boxichManageWrap">
		<div id="loader">
			<svg  id="loaderSvg" width='120px' height='120px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-gear"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><path d="M75,50.5l5-1.5c-0.1-2.2-0.4-4.3-0.9-6.3l-5.2-0.1c-0.2-0.6-0.4-1.1-0.6-1.7l4-3.3c-0.9-1.9-2-3.8-3.2-5.5L69.2,34 c-0.4-0.5-0.8-0.9-1.2-1.3l2.4-4.6c-1.6-1.4-3.3-2.7-5.1-3.8l-3.7,3.6c-0.5-0.3-1.1-0.5-1.6-0.8l0.5-5.2c-2-0.7-4-1.3-6.2-1.6 l-2.1,4.8c-0.6-0.1-1.2-0.1-1.8-0.1l-1.5-5c-2.2,0.1-4.3,0.4-6.3,0.9l-0.1,5.2c-0.6,0.2-1.1,0.4-1.7,0.6l-3.3-4 c-1.9,0.9-3.8,2-5.5,3.2l1.9,4.9c-0.5,0.4-0.9,0.8-1.3,1.2l-4.6-2.4c-1.4,1.6-2.7,3.3-3.8,5.1l3.6,3.7c-0.3,0.5-0.5,1.1-0.8,1.6 l-5.2-0.5c-0.7,2-1.3,4-1.6,6.2l4.8,2.1c-0.1,0.6-0.1,1.2-0.1,1.8l-5,1.5c0.1,2.2,0.4,4.3,0.9,6.3l5.2,0.1c0.2,0.6,0.4,1.1,0.6,1.7 l-4,3.3c0.9,1.9,2,3.8,3.2,5.5l4.9-1.9c0.4,0.5,0.8,0.9,1.2,1.3l-2.4,4.6c1.6,1.4,3.3,2.7,5.1,3.8l3.7-3.6c0.5,0.3,1.1,0.5,1.6,0.8 l-0.5,5.2c2,0.7,4,1.3,6.2,1.6l2.1-4.8c0.6,0.1,1.2,0.1,1.8,0.1l1.5,5c2.2-0.1,4.3-0.4,6.3-0.9l0.1-5.2c0.6-0.2,1.1-0.4,1.7-0.6 l3.3,4c1.9-0.9,3.8-2,5.5-3.2L66,69.2c0.5-0.4,0.9-0.8,1.3-1.2l4.6,2.4c1.4-1.6,2.7-3.3,3.8-5.1l-3.6-3.7c0.3-0.5,0.5-1.1,0.8-1.6 l5.2,0.5c0.7-2,1.3-4,1.6-6.2l-4.8-2.1C74.9,51.7,75,51.1,75,50.5z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15 C65,58.3,58.3,65,50,65z" fill="#7000ff"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></svg>
			<span id="loaderSpan">Boxich</span>
			<div id="perLoader">0%</div>
		</div>

		<div id="extendScreen">
			<span class="flaticon-monitor"></span>
		</div>

		<div id="viewDocWrap" style="display: none;">
			<span id="viewDocClose">x</span>
			<iframe id="viewDocFrame"></iframe>
		</div>

		<form id="login">
			<h1 id="loginHeader">
				<a id="phone" href=""></a>
				<a id="logo" href="#"></a>
				<a id="mail" href=""></a>
			</h1>
			<div>
				<h1><img src="../wp-content/plugins/boxich/includes/img/boxich.jpg"></h1>
				<span id="loginError"></span>
				<img id="userIcon" src="../wp-content/plugins/boxich/includes/img/user-icon.svg"><input type="text" value="<?php echo wp_get_current_user()->display_name; ?>"  class="blank" placeholder="Username" name="username">
				<img id="pwdIcon" src="../wp-content/plugins/boxich/includes/img/pwd-icon.svg"><input type="password" value="12345" class="blank" placeholder="Password" name="password">
				<br>
				<input type="submit" data-func="login" value="Login">
			</div>
		</form>

		<form id="wpRegisterForm">
			<input type="text" required class="blank" placeholder="Name" name="wpRegName" value="<?php echo wp_get_current_user()->display_name; ?>">
			<input type="email" required class="blank" placeholder="Email" name="wpRegMail" value="<?php echo wp_get_current_user()->user_email; ?>">
			<input type="submit" value="Register">
		</form>

		<button id="wpRegister" data-back="false">not registered? click for free quick 3 month free demo register</button>

		<header id="boxichHeader">
			<button id="leftMenuButton"></button>
			<nav id="leftMenu" class="closed"></nav>
			<h1></h1>
		</header>

		<main id="boxichMain">
			<section id="scriptsGen">
				<h1>Script Generator: <span class="helpMe" data-for="scriptGen">?</span></h1>
				<div id="boxichPreview">
					<span class="boxichPreview"></span>
				   <p id="boxichPreviewText"></p>
				</div>
				<span id="addTargetWrap" style="display: none;">
					<label for="addTarget">Target Element / querySelector string:</label>
					<input type="text" name="addTarget" id="addTarget" value="#boxichPreview">
				</span>        
				<span id="readKwWrap">
					<input type="checkbox" name="readKw" id="readKw">
					<label for="readKw">Get keywords from target:</label>
					<textarea id="readKwText" placeholder=" optional: past text here for testing    "></textarea>
				</span>        
				<span id="readKwDiffWrap">
					<input type="checkbox" name="readKwDiff" id="readKwDiff">
					<label for="readKwDiff">Get keywords from different target/Element/querySelector String:</label>
					<input type="text" name="readKwDiffText" id="readKwDiffText" value="#boxichPreview">
				</span>        
				<span id="addCatWrap">
				   <input type="checkbox" name="addCat" id="addCat"><label for="addCat">Category</label>            
				   <select id="addCatSelect">
					  <option value="0">Uncategorized</option>
					  <option value="1">General Knowledge</option>
					  <option value="2">Books</option>
					  <option value="3">Film</option>
					  <option value="4">Music</option>
					  <option value="5">Musicals / Theatres</option>
					  <option value="6">Television</option>
					  <option value="7">Video Games</option>
					  <option value="8">Board Games</option>
					  <option value="9">Science / Nature</option>
					  <option value="10">Computers</option>
					  <option value="11">Mathematics</option>
					  <option value="12">Mythology</option>
					  <option value="13">Sports</option>
					  <option value="14">Geography</option>
					  <option value="15">History</option>
					  <option value="16">Politics</option>
					  <option value="17">Art</option>
					  <option value="18">Celebrities</option>
					  <option value="19">Animals</option>
					  <option value="20">Vehicles</option>
					  <option value="21">Comics</option>
					  <option value="22">Gadgets</option>
					  <option value="23">Cartoon / Animations</option>
					  <option value="24">Japanese Anime / Manga</option>
					  <option value="25">Food</option>
				   </select>
				</span>
				<span id="addKwWrap">
					<input type="checkbox" name="addKw" id="addKw">
					<label for="addKw">Keywords (separated by comma):</label>
					<input type="text" name="addKwText" id="addKwText" placeholder="keyword,keyword,keyword">
				</span>        
				<span id="addColorWrap">
					<input type="checkbox" name="addColor" id="addColor">
					<label for="addColor">Background Color: :</label>
					<input type="text" class="jscolor" name="addColorVal" id="addColorVal" value="#00E4D5" style="background-color: rgb(0, 228, 213); color: rgb(34, 34, 34);">
				</span>        
				<button id="generateScript">Generate Snippet</button>
				<div id="boxichResultsWrap">
					<label for="boxichResults">WP Snippet:</label>
					<textarea id="boxichResults" name="boxichResults"></textarea>
					<button class="clipCopy" data-clipboard-target="#boxichResults" data-clipboard-action="copy">Copy to clipboard</button>
				</div>
			</section>
			<div id="boxichLogout">Logout</div>
		</main>
	</div>
	<script>
			var curJwt = "<?php echo esc_attr( get_option('boxich_jwt') ); ?>",
				curUid = "<?php echo esc_attr( get_option('boxich_uid') ); ?>",
				pluginDomain = "<?php echo get_site_url(); ?>";
	</script>
    <? wp_enqueue_script('boxich_includes_css_js', BOXICH_INCLUDE_URL."boxich-manage-script.js"); ?>
	
   <div class="wrap" style="display:none;">
     <form id="boxich_form" action="options.php" method="post">
       <?php
       settings_fields('boxich-settings');
       do_settings_sections('boxich-settings');
       ?>
         <input type="hidden" name="boxich_jwt" value="" />
         <input type="hidden" name="boxich_uid" value="" />
        <!-- <?php submit_button(); ?> -->
     </form>
   </div>
 <?php
}

function boxich_shortcode($atts) {
    $kw = 'null';
    $color = 'null';
    $kwt = '';
    $category = 'null';
    if(isset($atts['category'])) $category = $atts['category'];
    if(isset($atts['kwt'])) $kwt = $atts['kwt'];
    if(isset($atts['color'])) $color = $atts['color'];
    if(isset($atts['keywords'])) $kw = '"'.$atts['keywords'].'"';
    $randBoxich = '_boxic'.rand(1111111111,9999999999);
    return '<span class="'.$randBoxich.'" ></span><script type="text/javascript">'.
        'setTimeout(function(){ _boxichWP('.$kw.','.$kwt.','.$category.',"'.$color.'","'.$randBoxich.'","'.esc_attr( get_option('boxich_jwt') ).'");},1000);</script>';
}
?>