var container = document.getElementById( 'container' );
var button1 = document.getElementById( 'button-1' );
var button2 = document.getElementById( 'button-2' );
var output = document.getElementById( 'output' );

require( './' ).enableOn( container );

function callback( e ) {
  e.preventDefault();
  var p = document.createElement( 'p' );
  p.textContent = 'event: ' + e.type;
  output.insertBefore( p, output.firstChild );
}

button1.addEventListener( 'click', callback, false );
button2.addEventListener( 'tap', callback, false );
