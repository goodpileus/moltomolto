function randomPosition(myclass){
  var randomW = Math.floor(40*Math.random());
  var randomH = Math.floor(40*Math.random());
  $(myclass).css({'top' : randomH + '%'});
  $(myclass).css({'left' : randomW + '%'});
};

function randomPosition2(myclass){
  var randomW = Math.floor(40*Math.random());
  var randomH = Math.floor(40*Math.random());
  $(myclass).css({'bottom' : randomH + '%'});
  $(myclass).css({'right' : randomW + '%'});
};

randomPosition('.rand-a');
randomPosition('.rand-b');
randomPosition('.rand-c');
randomPosition2('.rand-d');
randomPosition2('.rand-e');

const isEmpty = str => !str.trim().length;

document.getElementById("mce-EMAIL").addEventListener("input", function() {
  if( isEmpty(this.value) ) {
    // console.log( "NAME is invalid (Empty)" )
    $('#mc-embedded-subscribe').addClass('hide');
  } else {
    $('#mc-embedded-subscribe').removeClass('hide');
    // console.log( `NAME value is: ${this.value}` );
  }
});
