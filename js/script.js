// hero js

new Typed('#typed',{
    strings : ["I'm a Designer.","I'm a Developer."],
    typeSpeed : 40,
    delaySpeed : 90,
    loop : true
  });



  // rkirthth

  $(function () {
    var filterSingle = $('.filter-1').filterizr({
        setupControls: false
    });
    $('#filter-1 li').click(function () {
        $('#filter-1 li').removeClass('active');
        $(this).addClass('active');
        var filter = $(this).data('fltr');
        filterSingle.filterizr('filter', filter);
    });
  });


  // slider js
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768:{
        slidesPerView: 2,
      },
    },
  });


  // menu active
  
  $('#menu-active').click(function () {
      $('#menu-active').addClass('test');
      // $(this).addClass('active');
      // var filter = $(this).data('fltr');
      // filterSingle.filterizr('filter', filter);
  });



  // menu section js

  $(document).ready(function(){
    $('.active').click(function(){
      $('.active').removeClass("menu-active");
      $(this).addClass("menu-active");
  });
});


$(document).ready(function(){
  $('.active1').click(function(){
    $('.active1').removeClass("menu-active");
    $(this).addClass("menu-active");
});
});

  


  