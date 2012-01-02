if (screen.width > 700) {
var $container = $('#collection');
$(window).resize(function(){
    $container.imagesLoaded(function(){
      $container.masonry({
        itemSelector: '.product',
      });
    });
});
}