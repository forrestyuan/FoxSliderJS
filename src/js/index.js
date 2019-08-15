window.onload = function(){
  //样式1
  var tp = new TouchPlugin({
    sliderContainer:'.slider-identifier.slider-container',
    slider:'.slider-identifier .slider',
    slidePin:'.slider-identifier .slider-pin',
    sliderBar:'.slider-identifier .slide-bar',
    pinClassName:'on',
    pin:'.slider-identifier .pin',
    callback:function(e, dir, distance){}
  });
  //样式2
  var tp = new TouchPlugin({
    sliderContainer:'.slider-identifier2.slider-container',
    slider:'.slider-identifier2 .slider',
    slidePin:'.slider-identifier2 .slider-pin',
    sliderBar:'.slider-identifier2 .slide-bar',
    pinClassName:'on',
    pin:'.slider-identifier2 .pin',
    leftRightToggleBtn:{left:'.slider-identifier2 .leftArrowIcon',right:'.slider-identifier2 .rightArrowIcon'},
    callback:function(e, dir, distance){}
  });
  // 样式3
  var tp = new TouchPlugin({
    sliderContainer:'.slider-identifier3.slider-container',
    slider:'.slider-identifier3 .slider',
    slidePin:'.slider-identifier3 .slider-pin',
    sliderBar:'.slider-identifier3 .slide-bar',
    pinClassName:'on',
    pin:'.slider-identifier3 .pin',
    leftRightToggleBtn:{left:'.slider-identifier3 .leftArrowIcon',right:'.slider-identifier3 .rightArrowIcon'},
    callback:function(e, dir, distance){}
  });
}