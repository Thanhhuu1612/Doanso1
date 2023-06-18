(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

function check(){
    var arr= document.getElementsByTagName('input');
    var name = arr[0].value;
    var email = arr[1].value;
    
     if (name == "" ){
        alert("Please enter your name")
    }
    if (email == "" ){
        alert("Please enter your email")
    }
    
    else if(!/\@/.test(email))
    {
        alert("Invalid email , At least there must be an @ character in gmail ")
    }
    else
    {
        alert("successful travel registration");      

    }

}



      var images = [
        "img/baiyoke-sky-hotel.jpg",
        "img/tải xuống (23).jpg",
        
      ]; // Array of image filenames
      var currentIndex = 0; // Current image index

      var prevButton = document.getElementById("prevButton");
      var nextButton = document.getElementById("nextButton");
      var sliderImage = document.getElementById("sliderImage");

      // Function to update the image source
      function updateImage() {
        sliderImage.src = images[currentIndex];
      }

      // Function to go to the Qrevious image
      function goToPrevious() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
      }

      // Function to go to the next image
      function goToNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
      }

      prevButton.addEventListener("click", goToPrevious);
      nextButton.addEventListener("click", goToNext);

      // Show the first image on page load
      updateImage();
    

