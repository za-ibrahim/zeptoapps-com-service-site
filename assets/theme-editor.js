document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  setTimeout(function() {
    parentSlideshowComponent.slider.scrollTo({
      left: event.target.offsetLeft
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});

$(document).ready(function(){

  $(window).load(function(){
    $duration = 15;
    $('.seconds').text($duration);
    $('.popup-wrap').fadeIn(1500);
  
    $myTimer = setInterval(function(){ startTimer() }, 1000);
    $('.popup .btn-close').on("click",function(){
      clearInterval($myTimer);
      $('.popup-wrap').fadeOut(500);
    });
    
    function startTimer(){
      $duration--;
      $('.seconds').text($duration);
      if($duration==0){
        clearInterval($myTimer);
        $('.popup-wrap').fadeOut(500);
      }
    }
  });
});

