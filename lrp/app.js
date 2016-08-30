$(function () {

///window has loaded
	$(window).load(function() {
    $('html, body').smoothScroll();
     function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        });

        }

      preload([
        'images/arrows/arrow_next.png',
        'images/arrows/arrow_previous.png',
        'images/arrows/next_text.png',
        'images/arrows/previous_text.png'
       
      ]);
    $("#status").fadeOut(); 
    $("#preloader").delay(3500).fadeOut("slow"); 
	});



///Click listeners
  $("#logo").click(function(e) {
    $('html, body').animate({
        scrollTop: 0  
    }, 1000); return false;
  });

    $("#workTab").click(function() {
    $('html, body').animate({
        scrollTop: $("#workSection").offset().top -100
    }, 1000);
    });

    $("#workLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#workSection").offset().top -100
    }, 1000);
    });

   $(".scrollAnimateDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#workSection").offset().top -100
    }, 1000);
  });

   $("#aboutTab").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutSection").offset().top -100
    }, 1000);
  });

  $("#aboutLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutSection").offset().top -100
    }, 1000);
  });

  $("#contactLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactSection").offset().top +300
    }, 1000);
  });

  $("#contactTab").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactSection").offset().top +300
    }, 1000);
  });

 

///Scroll Detection for selected states
  $( window ).scroll(function() 
  {
      var currentTop = $(window).scrollTop();
      var winHeight = $(window).height()-150;
      var contactHeight = $(document).height()-1100;
      var aboutHeight = $('#aboutSection').offset().top - 150;
      var workHeight = $('#workSection').offset().top;

      //Splash
      if (currentTop < winHeight)
      {
        $("#workTab").removeClass('selected');
        $("#aboutTab").removeClass('selected');
        $("#contactTab").removeClass('selected');
      } 
      //Work
      else if (currentTop > winHeight && currentTop < aboutHeight)
      {
        $("#workTab").addClass('selected');
        $("#aboutTab").removeClass('selected');
      } 
      //About
      else if (currentTop > aboutHeight && currentTop < contactHeight)
      {
        $("#workTab").removeClass('selected');
        $("#contactTab").removeClass('selected');
        $("#aboutTab").addClass('selected');
      } 
      //Contact 
      else
      {
        $("#aboutTab").removeClass('selected');
        $("#workTab").removeClass('selected');
        $("#contactTab").addClass('selected');
      } 
      
  });



});