jQuery(document).ready(function ($) {
  if ($.isFunction($.fn.owlCarousel)) {
    $('.clients-slider').owlCarousel({
      loop: true,
      dot: false,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        993: {
          items: 3
        },
        1200: {
          items: 4
        },
      }
    })
  }
  jQuery('.mobile-nav .menu-item-has-children').on('click', function (e) {
    if (jQuery(this).hasClass('active')) {
      jQuery(this).removeClass('active');
    } else {
      jQuery('.mobile-nav .menu-item-has-children').removeClass('active');
      jQuery(this).addClass('active');
    }
  });
  jQuery('#nav-icon4').click(function ($) {
    jQuery('#mobile-nav').toggleClass('open');
  });
  jQuery('#res-cross').click(function ($) {
    jQuery('#mobile-nav').removeClass('open');
  });
  jQuery('.bar-menu').click(function ($) {
    jQuery('#mobile-nav').toggleClass('open');
    jQuery('#mobile-nav').toggleClass('hmburger-menu');
    jQuery('#mobile-nav').show();
  });
  jQuery('#res-cross').click(function ($) {
    jQuery('#mobile-nav').removeClass('open');
  });
});
/***--------  search-box   ------- ***/
if (jQuery('.search-box-outer').length) {
  jQuery('.search-box-outer').on('click', function () {
    jQuery('body').addClass('search-active');
  });
  jQuery('.close-search').on('click', function () {
    jQuery('body').removeClass('search-active');
  });
}


function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport

  // console.log( ElementBottom <= WindowBottom, ElementBottom, WindowBottom, ElementTop, WindowTop );
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
  // console.log('testssdf');
    animate(element);
}

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      //duration 5 seconds
      duration: 5000,
      easing: 'linear',
      step: function () {
        console.log('sttep')
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function () {
        // console.log('complere');
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are 
    //visible in the viewport
    $("h2[data-max], h6[data-max]").each(function () {
      // console.log('test');
      inVisible($(this));
    });
  })
});



let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#45D0BD ${scrollValue}%, #ffffff00 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



var boxWidth = $("#lightbox").width();
$(".white_content").animate({
  opacity: 0,
  width: 0,
  left: -10000
});
$("#close").on('click', function () {
  $(".white_content").animate({
    opacity: 0,
    width: 0,
    left: -1000
  });
});
$("#show").on('click', function () {
  $(".white_content").animate({
    opacity: 1,
    width: 500,
    left: 0
  });
  $("#overlay").animate({
    opacity: 1,
    width: boxWidth,
    left: 0
  });

});

$('.testimonials-slider').owlCarousel({
  loop: true,
  dot: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
});


$('.accordion-item .heading').on('click', function (e) {
  e.preventDefault();

  if ($(this).closest('.accordion-item').hasClass('active')) {
    $('.accordion-item').removeClass('active');
  } else {
    $('.accordion-item').removeClass('active');

    $(this).closest('.accordion-item').addClass('active');
  }
  var $content = $(this).next();
  $content.slideToggle(100);
  $('.accordion-item .content').not($content).slideUp('fast');
});


$('.generator-slider').owlCarousel({
  loop: true,
  dot: true,
  nav: true,
  margin:10,
   autoplay: true,
   autoplayTimeout: 3000,
  navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    993: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
});


$('.testimonials-img').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1200:{
          items:4
      }
  }
});

$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
  })
})

function check() {
  var checkBox = document.getElementById("checbox");
  var text1 = document.getElementsByClassName("text1");
  var text2 = document.getElementsByClassName("text2");

  for (var i = 0; i < text1.length; i++) {
    if (checkBox.checked == true) {
      text1[i].style.display = "block";
      text2[i].style.display = "none";
    } else if (checkBox.checked == false) {
      text1[i].style.display = "none";
      text2[i].style.display = "block";
    }
  }
}
check();

  // STICKY HEADER 

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
        $("header").addClass("sticky animated slideInDown");
    } else {
        $("header").removeClass("sticky animated slideInDown");
    }
});

$("#mask").fadeOut();


// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

	
	// Instagram Carousel
	if ($('.instagram-carousel').length) {
		$('.instagram-carousel').owlCarousel({
			// loop:true,
			margin:0,
			// nav:true,
			// smartSpeed: 500,
			// autoplay: 6000,
			navText: [ '<span class="flaticon-left-arrow-1"></span>', '<span class="flaticon-right-arrow-2"></span>' ],
			
		});    		
	}