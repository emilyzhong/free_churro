$(document).ready(function() {
	$(".layout").click(function() {
		$(".lightbox-featured").attr("src", $(this).attr("src"));
		$("body").css("overflow-y", "hidden");
		$("#lightbox").show();
	})

	$("#lightbox").click(function() {
		$("#lightbox").scrollTop(0);
		$("#lightbox").hide();
		$("body").css("overflow-y", "scroll");
	})

	$("#lightbox .lightbox-featured").click(function(e) {
		e.stopPropagation();
	})

	$("#order-toggle").click(function() {
		if ($("body").hasClass("reverse")) {
			$("#order-toggle").text("View Oldest First");
		} else {
			$("#order-toggle").text("View Most Recent First");
		}
		$("body").toggleClass("reverse");
	})

	var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
})