(function () {
  var skills = [
    { name: 'Adobe Photoshop', grade: 90 },
    { name: 'Adobe Illustrator', grade: 70 },
    { name: 'Adobe Indesign', grade: 60 },
    { name: 'Adobe After Effects', grade: 20 },
    { name: 'Adobe Acrobat Reader', grade: 80 },
    { name: 'CorelDRAW', grade: 30 },
    { name: 'MS Office', grade: 60 },
    { name: 'HTML', grade: 10 },
    { name: 'CSS', grade: 5 }
  ];

  var getGradeElement = function (gradeObj) {
    var $container = $('<div/>');
    var $bar = $('<div/>');
    var $barFill = $('<div/>');
    var $heading = $('<p/>');

    var rate = gradeObj.grade / 100;

    $heading.text(gradeObj.name);

    $bar.css('width', '350px');
    $bar.css('height', '10px');
    $bar.css('background-color', 'white');

    $barFill.css('width', Math.floor(rate * 350) + 'px');
    $barFill.css('height', '10px'); 
    $barFill.css('background-color', 'darkslategrey');

    $barFill.appendTo($bar);

    $container.addClass('grade-container');
    
    $heading.appendTo($container);
    $bar.appendTo($container);
    
    return $container;
  };

  skills.forEach((skill) => {
    getGradeElement(skill).appendTo($('.skills'));
  });
}());