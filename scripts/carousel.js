(function () {
  var slides = [
    { src: './assets/RETOUCH AND EFFECTS/Lady with freckles/Lady with freckles Eyeliner.png' },
    { src: './assets/3D SVG DRAWINGS/Apple/3D Peel - Work in progress.svg' },
    { src: './assets/ICONS/Camera/Camera without Background.png' },
    { src: './assets/RETOUCH AND EFFECTS/HDR Effect/HDR + improved sharpness.jpg' },
  ];

  $('.carousel').jR3DCarousel({
    width : 800,
    height: 500,
    slides: slides,
    animation: "scroll3D",
    autoplay: false
  });
}());