function showHome() {
  $('.home').on('click', function (event) {
    console.log('work');
  });
}
$(showHome);

function scroll() {
  $('a').click(function (e) {
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 700);
    e.preventDefault();
  });
}
$(scroll);
