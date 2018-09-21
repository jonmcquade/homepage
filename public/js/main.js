$( document ).ready(function() {

  $('#design1').on('click', function() {
    $('#imagepreview').attr('src', $('#design1').attr('src')); // here asign the image to the modal when the user click the enlarge link
  });
  
  $('#design2').on('click', function() {
    $('#imagepreview').attr('src', $('#design2').attr('src')); // here asign the image to the modal when the user click the enlarge link
  });
  
  $('#shockedapplaud').on('click', function() {
    $('#imagepreview').attr('src', $('#shockedapplaud').attr('src')); // here asign the image to the modal when the user click the enlarge link
  });
  
  $('#evilkitteh').on('click', function() {
    $('#imagepreview').attr('src', $('#evilkitteh').attr('src')); // here asign the image to the modal when the user click the enlarge link
  });
  
  $('#bugle').on('click', function() {
    $('#imagepreview').attr('src', $('#bugle').attr('src')); // here asign the image to the modal when the user click the enlarge link
  });
  
  // Scrollto events for header/nav
  $('[id=home]').unbind().click(function() {
    $.scrollTo($('a[name=top]').offset().top - 60,{duration: 500});
  });

  $('[id=projects]').unbind().click(function() {
    $.scrollTo($('a[name=projects]').offset().top - 60,{duration: 500});
  });

  $('[id=history]').unbind().click(function() {
    $.scrollTo($('a[name=history]').offset().top - 60,{duration: 500});
  });

  $('[id=articles]').unbind().click(function() {
    $.scrollTo($('a[name=articles]').offset().top - 60,{duration: 500});
  });

});