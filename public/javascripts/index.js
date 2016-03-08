var gameRound = 0;
var imageUrls = [
  '../media/RougeTomateChelsea1.jpg',
  '../media/RougeTomateChelsea2.jpg',
  '../media/RougeTomateChelsea3.jpg',
  '../media/RougeTomateChelsea4.jpg'
];
var imagePosition = [
  'center', 'center', 'bottom', 'bottom'
];
var winnerHandles = [
  '@WeekendFighter',
  '@alexisurspruch',
  '@DRepresent',
  '@Chilley510'
];
var winnerCount = [ "44 tomatoes", "83 tomatoes", "134 tomatoes", "216 tomatoes" ];
var roundNumber = [ "round one", "round two", "round three", "the final round" ];

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

  // switch between 
  $( ".game-navigation-selector" ).each( function() {
    $( this ).click( function() {
      removeActive($( ".game-navigation-selector" ));
      $( this ).addClass( "active" );
      round = $( this ).data("id");
      changeGameRound(round);
    });
  });

  function removeActive( el ) {
    el.each( function() {
      $( this ).removeClass( "active" );
    });
  }

  function changeGameRound( r ) {
    gameRound = r;

    bgImage = $( ".bg-image, .main-image" );
    bgImage.fadeOut( 400, function() {
      bgImage.css( "background-image", "url('"+imageUrls[r]+"')" );
      bgImage.css( "background-position", imagePosition[r] );
      bgImage.fadeIn( 400 );
    });

    winner = $( ".winner" );
    winner.fadeOut( 400, function() {
      winner.html( winnerHandles[r] );
      winner.fadeIn( 400 );
    }); 

    count = $( ".winning-guess" );
    count.fadeOut( 400, function() {
      count.html( winnerCount[r] );
      count.fadeIn( 400 );
    });

    round = $( ".round-number" );
    round.fadeOut( 400, function() {
      round.html( roundNumber[r] );
      round.fadeIn( 400 );
    });

  }
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
  
  window.open("http://twitter.com/share?text=there%20are%20"+number+"%20tomatoes!%20@rougetomateNYC%20%23RTChelseaOpening", 'twitter', opts);

  return false;
};
