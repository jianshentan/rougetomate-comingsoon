$( document ).ready( function() {

  // toggle rules
  $( '.game-rules' ).click( function() {
    $( '.rules' ).toggle('slow');
  });

  $( '.rules .exit, .bg-image' ).click( function() {
    $( '.rules' ).toggle('slow');
  });

  // tweet guess
  $( '.submit-tweet' ).click( function() {
    var guess = $( '.submit-input' ).val();
    createTweetPopup( guess );
  });
});

function createTweetPopup(number) {
  var width  = 575,
      height = 400,
      left   = ($(window).width()  - width)  / 2,
      top    = ($(window).height() - height) / 2,
      url    = this.href,
      opts   = 'status=1' +
               ',width='  + width  +
               ',height=' + height +
               ',top='    + top    +
               ',left='   + left;
  
  window.open("http://twitter.com/share?text=there%20are%20"+number+"%20tomatoes!%20@rougetomatechelsea%20%23RTChelseaOpening", 'twitter', opts);

  return false;
};
