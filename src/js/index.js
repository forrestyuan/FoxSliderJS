window.onload = function(){
  var tp = new TouchPlugin({
    sliderContainer:'.slider-container',
    slider:'.slider',
    slidePin:'.slider-pin',
    sliderBar:'.slide-bar',
    pinClassName:'on',
    pin:'.pin',
    callback:function(e, dir, distance){
      console.log(dir, distance);
    }
  });
}