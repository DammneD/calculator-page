$(function() {

  $('.opener').click(function(){
    $('#popup-box').arcticmodal();
  });

  $(".slider1").slider({
    min: 1,
    max: 4,
    value: 1,
    range: "min",
    animate: "slow",
  });
  var opt = $(".slider1").data().uiSlider.options,
  min = opt.min,
  raz = opt.max - min;
  for (var i = 0; i <= raz; i++) {
    $(".slider1").append($('<b class="subscribe-slider sl1 subscribe-slider1'+(min++)+'">'+(min++)+'</b>').css('left',(i/raz*100)+'%'));
  }

  $(".slider2").slider({
    min: 1,
    max: 5,
    value: 1,
    range: "min",
    animate: "slow",
  });
  var opt = $(".slider2").data().uiSlider.options,
  min = opt.min,
  raz = opt.max - min;
  for (var i = 0; i <= raz; i++) {
    $(".slider2").append($('<b class="subscribe-slider sl2 subscribe-slider2'+(min++)+'">'+(min++)+'</b>').css('left',(i/raz*100)+'%'));
  }

  $(".slider3").slider({
    min: 1,
    max: 5,
    value: 1,
    range: "min",
    animate: "slow",
  });
  var opt = $(".slider3").data().uiSlider.options,
  min = opt.min,
  raz = opt.max - min;
  for (var i = 0; i <= raz; i++) {
    $(".slider3").append($('<b class="subscribe-slider sl3 subscribe-slider3'+(min++)+'">'+(min++)+'</b>').css('left',(i/raz*100)+'%'));
  }

  $(".slider4").slider({
    min: 1,
    max: 5,
    value: 5,
    range: "max",
    animate: "slow",
    orientation:'vertical',
  });

  var opt = $(".slider4").data().uiSlider.options,
  min = opt.min,
  raz = opt.max - min;

  for (var i = 0; i <= raz; i++) {
    $(".slider4").append($('<b class="subscribe-sliderh subscribe-slider4'+(min++)+'">'+(min++)+'</b>').css('bottom',(i/raz*100)+'%'));
  }
  $('.subscribe-slider41').click(function () {
    $('.subscribe-sliderh').removeClass('active');
    $('.subscribe-slider41').addClass('active');
  });
  $('.subscribe-slider43').click(function () {
    $('.subscribe-sliderh').removeClass('active');
    $('.subscribe-slider43').addClass('active');
  });
  $('.subscribe-slider45').click(function () {
    $('.subscribe-sliderh').removeClass('active');
    $('.subscribe-slider45').addClass('active');
  });
  $('.subscribe-slider47').click(function () {
    $('.subscribe-sliderh').removeClass('active');
    $('.subscribe-slider47').addClass('active');
  });
  $('.subscribe-slider49').click(function () {
    $('.subscribe-sliderh').removeClass('active');
    $('.subscribe-slider49').addClass('active');
  });
  $('.subscribe-slider11').click(function () {
    $('.sl1').removeClass('active');
    $('.subscribe-slider11').addClass('active');
  });
  $('.subscribe-slider13').click(function () {
    $('.sl1').removeClass('active');
    $('.subscribe-slider13').addClass('active');
  });
  $('.subscribe-slider15').click(function () {
    $('.sl1').removeClass('active');
    $('.subscribe-slider15').addClass('active');
  });
  $('.subscribe-slider17').click(function () {
    $('.sl1').removeClass('active');
    $('.subscribe-slider17').addClass('active');
  });
  $('.subscribe-slider21').click(function () {
    $('.sl2').removeClass('active');
    $('.subscribe-slider21').addClass('active');
  });
  $('.subscribe-slider23').click(function () {
    $('.sl2').removeClass('active');
    $('.subscribe-slider23').addClass('active');
  });
  $('.subscribe-slider25').click(function () {
    $('.sl2').removeClass('active');
    $('.subscribe-slider25').addClass('active');
  });
  $('.subscribe-slider27').click(function () {
    $('.sl2').removeClass('active');
    $('.subscribe-slider27').addClass('active');
  });
  $('.subscribe-slider29').click(function () {
    $('.sl2').removeClass('active');
    $('.subscribe-slider29').addClass('active');
  });
  $('.subscribe-slider31').click(function () {
    $('.sl3').removeClass('active');
    $('.subscribe-slider31').addClass('active');
  });
  $('.subscribe-slider33').click(function () {
    $('.sl3').removeClass('active');
    $('.subscribe-slider33').addClass('active');
  });
  $('.subscribe-slider35').click(function () {
    $('.sl3').removeClass('active');
    $('.subscribe-slider35').addClass('active');
  });
  $('.subscribe-slider37').click(function () {
    $('.sl3').removeClass('active');
    $('.subscribe-slider37').addClass('active');
  });
  $('.subscribe-slider39').click(function () {
    $('.sl3').removeClass('active');
    $('.subscribe-slider39').addClass('active');
  });
});