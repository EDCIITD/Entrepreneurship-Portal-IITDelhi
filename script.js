// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 300; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;

function goTo(slide){
  var iter=slide-currentSlideNumber;
  if (iter>0){
    for (var i = 0; i < iter; i++) {
        currentSlideNumber++;
        nextItem();
    }
  }
  else if(iter <0){
    for (var i = 0; i < -iter; i++) {
        currentSlideNumber--;
        previousItem();
    }
  }
  
}

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }
  // console.log(evt);
  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}
// console.log('hi');
// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

$('#myimg').bind('tap', function(event){
  var x = event.touches[0].pageX;
  var y = event.touches[0].pageY;
  console.log(y);
});
$('body').bind('touchmove', function(e) { 
   var p=e.clientX;
    // parallaxScroll(p);
    // console.log(p);
    // Replace this with your code.
});
var thresh=30;
var clientX, clientY;
var deltaY=0;
window.addEventListener('touchstart', function(e) {
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;
}, false);
  console.log(clientX);

window.addEventListener('touchend', function(e) {
  var deltaX, deltaY;
  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;
  console.log(deltaY);
  if (deltaY<-1*thresh) {
  	if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
  
}}
else if(deltaY>thresh) {
  if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
}
  // Process the data ... 
}, false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  //console.log('next called')
  $('title').text($('section.background .content-wrapper .content-title:eq('+currentSlideNumber+')').text());
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  //console.log('previous called')
  $('title').text($('section.background .content-wrapper .content-title:eq('+currentSlideNumber+')').text());

}
//======================for menu bar===============================================
function aa(){
        if(currentSlideNumber>0){
          $('nav').addClass('black');
        }else {
          $('nav').removeClass('black');
        }
      }