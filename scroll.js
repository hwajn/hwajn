$(function() {$(window).on('scroll', function() {
  var header = $(".learnmorehere");
  if ($(this).scrollTop() > 300) {
      if (!header.data('faded')) header.data('faded', 1).stop(true).fadeTo(400, 1);
  } else if (header.data('faded')) {
      header.data('faded', 0).stop(true).fadeTo(400, 0);
  }
});
  }
)