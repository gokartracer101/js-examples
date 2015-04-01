<script>
jQuery( document ).ready(function() {
  jQuery("div#enquire").removeClass("hidden").hide();;
});

jQuery("#fenton").mouseenter(function() {
 jQuery("#enquire").slideDown("slow");
});

jQuery(document).keyup(function(e) {
  if (e.keyCode == 27) {   jQuery("#enquire").slideUp("fast"); }   // ESCAPE
});

jQuery('#enquire').mouseleave(function() {
  jQuery("#enquire").slideUp("fast");
});

</script>
