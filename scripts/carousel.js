(function () {
  var slides = [
    { src: './assets/Lady with freckles1.png' },
    { src: './assets/HS Logo1.jpg' },
    { src: './assets/Mente Kniga centriran text.png' }
  ];

  $('.carousel').jR3DCarousel({
    width : 800,
    height: 500,
    slides: slides,
    animation: "scroll3D",
    autoplay: false
  });
}());