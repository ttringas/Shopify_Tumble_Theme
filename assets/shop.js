$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready;
  $('.thumbnails li a').click(function() {
      $('#first-image a').attr('href', $(this).attr('href')).data('rel', $(this).data('rel'));
      $('#first-image img').attr('src', $(this).children('img').attr('src'));
      return false;
  });
});

