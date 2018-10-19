(function () {
  var imageGroups = [
    {
      name: 'Logos',
      img: [
        { src: './assets/HS Logo1.jpg', caption: 'Simple Logo 1' },
        { src: './assets/HS Logo2.jpg', caption: 'Simple Logo 2' },
        { src: './assets/HS Logo3.png', caption: 'Simple Logo 3' }
      ]
    },
    {
      name: 'SVG',
      img: [
        { src: './assets/Krusha.svg', caption: 'Pear SVG' },
        { src: './assets/qbulka1.svg', caption: 'Apple SVG' }
      ]
    },
    {
      name: 'Other',
      img: [
        { src: './assets/Lake.jpg', caption: 'Reflection Effect' },
        { src: './assets/Lady with freckles1.png', caption: 'Face Retouch' },
        { src: './assets/Mente Kniga centriran text.png', caption: 'Book Cover' }
      ]
    }
  ];

  imageGroups.forEach((imageGroup) => {
    var $container = $('<div/>');
    var $h1 = $('<h1/>');

    $h1.text(imageGroup.name);
    $h1.appendTo($container);

    imageGroup.img.forEach((image) => {
      var $div = $('<div/>');
      
      $div.addClass('gallery-item');
      
      var $anchor = $('<a/>');

      $anchor.attr('href', image.src);
      $anchor.attr('target', '_blank');

      var $img = $('<img/>');

      $img.attr('src', image.src);
      $img.appendTo($anchor);

      var $caption = $('<span/>');

      $caption.text(image.caption);
      
      $anchor.appendTo($div);
      $caption.appendTo($div);

      $div.appendTo($container);
    });

    $container.appendTo($('.gallery'));
  });
}());