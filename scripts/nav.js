(function () {
  var $buttons = $('header > nav > button');
  
  $buttons.each(function () {
    $(this).on('click', function (e) {
      var $this = $(e.target);
      var navigateTo = $this.attr('data-navigate-to');

      $buttons.removeClass('active');

      $this.addClass('active');

      $('main > section').each(function () {
        var $target = $(this);
        var content = $target.attr('data-content');

        if (navigateTo === content) {
          $target.removeClass('hidden');
        } else {
          $target.addClass('hidden');
        }
      });
    });
  });
})();