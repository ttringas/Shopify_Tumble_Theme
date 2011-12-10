var $container = $('#collection_frontpage');
$(window).resize(function(){
    $container.imagesLoaded(function(){
      $container.masonry({
        itemSelector: '.product_frontpage',
      });
    });
});