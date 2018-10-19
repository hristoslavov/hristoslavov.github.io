(function () {
  $('header > nav > button').each(function () {
    $(this).on('click', function (e) {
      var navigateTo = $(e.target).attr('data-navigate-to');

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