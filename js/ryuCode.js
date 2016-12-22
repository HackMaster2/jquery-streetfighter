const Ryu = (function($) {
  var ryu = {};

  function _playHadouken() {
    var hadoukenSound = $("#hadouken-sound")[0];
    hadoukenSound.volume = 0.5;
    hadoukenSound.load();
    hadoukenSound.play();
  }

  function _throwFireball() {
    $(".ryu-throwing").show();
    $(".hadouken").finish().show().animate(
      {"left": "1020px"},
      1000,
      function() {
        $(this).hide()
          .css("left", "520px");
        $(".ryu-ready").show();
        $(".ryu-throwing").hide();
      }
    );
  }

  ryu.fireball = function () {
    _playHadouken();
    _throwFireball();
  };

  return ryu;
})(jQuery);
