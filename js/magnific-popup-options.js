$(document).ready(function() {
  // MagnificPopup
	var magnifPopup = function() {
		$(".image-popup").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "fh5co-gallery-list",
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function
      },
    });
	};

	// Call the functions 
	magnifPopup();

});