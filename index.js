module.exports = {
  enableOn: function ( el ) {
    var Tap = require( './tap' );
    var ins = new Tap( el );
    return ins;
  }
};
