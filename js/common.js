$(document).ready(function() {

	$('.carousel').carousel({
  interval: 5000
})

 $("#header-menu, #toTop").on("click", ".anchor", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 500);
        });
	
});