(function () {
  var imageGroups = [
    {
      name: 'Retouch and effects',
      img: [
        { src: './assets/RETOUCH AND EFFECTS/HDR Effect/Missing HDR.jpg', caption: 'No HDR' },
        { src: './assets/RETOUCH AND EFFECTS/HDR Effect/HDR + improved sharpness.jpg', caption: 'HDR and improved sharpness' },
        { src: './assets/RETOUCH AND EFFECTS/Lady with freckles/Lady with freckles original.jpg', caption: 'Original' },
        { src: './assets/RETOUCH AND EFFECTS/Lady with freckles/Lady with freckles Eyeliner.png', caption: 'Added eyeliner and changed eye color' },
        { src: './assets/RETOUCH AND EFFECTS/Pullover/pullover1 original.jpg', caption: 'Original' },
        { src: './assets/RETOUCH AND EFFECTS/Pullover/pullover2 with Intel logo.png', caption: 'Added logo' },
        { src: './assets/RETOUCH AND EFFECTS/Skull Reflection/Skull1.png', caption: 'Original' },
        { src: './assets/RETOUCH AND EFFECTS/Skull Reflection/Skull2 with blood.png', caption: 'With effects' },
        { src: './assets/RETOUCH AND EFFECTS/Waving Bear/Waving Bear original.jpg', caption: 'Original' },
        { src: './assets/RETOUCH AND EFFECTS/Waving Bear/Waving Bear modified.jpg', caption: 'The hand is being stretched' },
        { src: './assets/RETOUCH AND EFFECTS/Pans with dark recolor for a brochure/Pan1 original.jpg', caption: 'Original' },
        { src: './assets/RETOUCH AND EFFECTS/Pans with dark recolor for a brochure/Pan1 dark.jpg', caption: 'Recolored' },
        { src: './assets/RETOUCH AND EFFECTS/Lake/Lake and Water.jpg', caption: 'The letters sink partially into the water' }
      ]
    },
    {
      name: 'Book covers',
      img: [
        { src: './assets/BOOK COVERS/Strange Fox Book Cover.png', caption: 'Dark cover with digital front photo and entertaining text' }
      ]
    },
    {
      name: 'Logos',
      img: [
        { src: './assets/LOGOS/Advanced Logo/HS Logo1.jpg', caption: 'Colorful logo with camouflage background and contrasting effects' },
        { src: './assets/LOGOS/Bright Logo/HS Bright Logo.jpg', caption: 'Two-color bright gradient with top right centered initials and elongated shadow' },
        { src: './assets/LOGOS/Dark Logo/HS Dark Logo.jpg', caption: 'Two-color dark gradient with top right centered initials and elongated shadow' },
        { src: './assets/LOGOS/Initials Logo/H initial Logo.png', caption: 'Symmetric 2-color logo with central initials and falling shadow' }
      ]
    },
    {
      name: 'SVG',
      img: [
        { src: './assets/3D SVG DRAWINGS/Apple/3D Peel - Work in progress.svg', caption: 'Apple peel effect' },
        { src: './assets/3D SVG DRAWINGS/Apple/3D Slice Effect.svg', caption: 'The apple has a carved piece, exposing the interior' }
      ]
    },
    {
      name: 'Icons',
      img: [
        { src: './assets/ICONS/Camera/Camera without Background.png', caption: 'Clear and simplified camera without background' },
        { src: './assets/ICONS/Camera/Camera with Background.jpg', caption: 'Clear and simplified camera with background' },
        { src: './assets/ICONS/Clover/Simple/Detelina1 sredna simple.png', caption: 'Four-leaf clover in a sphere with simple background' },
        { src: './assets/ICONS/Clover/Advanced/Detelina1 sredna.png', caption: 'Four-leaf clover in a sphere with a textured background' }
      ]
    }
  ];

  imageGroups.forEach((imageGroup) => {
    var $container = $('<div/>');
    var $h1 = $('<h1/>');

    $container.addClass('gallery-group');

    $h1.text(imageGroup.name);
    $h1.appendTo($('.gallery'));

    imageGroup.img.forEach((image) => {
      var $div = $('<div/>');
      
      $div.addClass('gallery-item');
      
      var $anchor = $('<a/>');

      $anchor.attr('href', image.src);
      $anchor.attr('target', '_blank');

      var $img = $('<img/>');

      $img.attr('src', image.src);
      $img.appendTo($anchor);
      
      $anchor.appendTo($div);

      if (image.caption) {
        var $caption = $('<span/>');

        $caption.text(image.caption);
        $caption.appendTo($div);
      }

      $div.appendTo($container);
    });

    $container.appendTo($('.gallery'));
  });
}());