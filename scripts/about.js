(function () {
  var education = [
    {
      description: 'Biotechnology (Engineer)',
      where: 'UCTM - SOFIA',
      degree: 'Bachelor\'s Degree',
      when: '6 / 2010 - 9 / 2015',
      info: 'Studying the microbiological processes and their use in living organisms and biosystems to create new practices and products that improve the quality of human life. Design of equipment by chemical engineering for large-scale production, processing byproducts and direct operations of the facilities. Manufacture of chemicals, fuels, medicines, food and other products. *Semestral graduation.'
    },
    {
      description: 'Information Technology',
      where: '118 High School "Academician Ljudmil Stojanov" | Sofia',
      when: '9 / 2005 - 6 / 2018',
      info: 'Studying Mathematical / Natural Sciences: Mathematics, Computer Science, Biology.'
    }
  ];

  var experience = [
    {
      description: 'QA - iOS Game Tester',
      where: 'Gameloft Bulgaria EOOD - SOFIA',
      when: '6 / 2017 - 9 / 2017',
      info: 'Testing applications and games for mobile devices running iOS (iPhone, iPad, iPod). Implementation of Check Lists and Testing Methods / CRM, Working with Bug Tracker / Project Managment tool, virtual machines. Keeping records, writing reports, and tracking defects (bugs) in a database. Working environment entirely in English.'
    },
    {
      description: 'Seller - Consultant',
      where: 'Technomarket Bulgaria AD',
      when: '4 /2016 - 9 / 2016',
      info: 'IT Sector "Tsarigradsko Shose". Meeting customers in the store. Advising on the quality and technical characteristics of the appliances sold. Arrangement and advertising performance against the standards set by the company.'
    },
    {
      description: 'Promoter (Entertainment)',
      where: 'Sofia',
      when: '8 / 2015 - 3 / 2016',
      info: 'Distribution of advertising materials by mailboxes, events, promotions, etc.'
    },
  ];

  var getParagraph = function (text, className) {
    var p = $('<p/>');

    p.addClass(className);
    p.text(text);

    return p;
  };

  var $topContainer = $('<div/>');
  var $educationContainer = $('<div/>');
  var $experienceContainer = $('<div/>');

  $educationContainer.addClass('education-container');
  $experienceContainer.addClass('experience-container');

  getParagraph('Education', 'section-title').appendTo($educationContainer);
  getParagraph('Experience', 'section-title').appendTo($experienceContainer);

  education.forEach((educationObj) => {
    var educationItem = $('<div/>');
    educationItem.addClass('education-item');

    for (var prop in educationObj) {
      getParagraph(educationObj[prop], prop).appendTo(educationItem);
    }

    educationItem.appendTo($educationContainer);
  });

  experience.forEach((experienceObj) => {
    var experienceItem = $('<div/>');
    experienceItem.addClass('education-item');

    for (var prop in experienceObj) {
      getParagraph(experienceObj[prop], prop).appendTo(experienceItem);
    }

    experienceItem.appendTo($experienceContainer);
  });

  $educationContainer.appendTo($topContainer);
  $experienceContainer.appendTo($topContainer);

  $topContainer.appendTo($('section.about'));
}());