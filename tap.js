function Tap( el ) {
  var me = this;

  var ele = me.el = typeof el === 'object' ? el : document.getElementById( el );
  me.moved = false; //flags if the finger has moved
  me.startX = 0; //starting x coordinate
  me.startY = 0; //starting y coordinate
  me.hasTouchEventOccured = false; //flag touch event

  ele.addEventListener( 'touchstart', me, false );
  ele.addEventListener( 'mousedown', me, false );
}

var tapProto = Tap.prototype;

tapProto._getClientX = function (e) {
  if (e.touches && e.touches.length > 0) {
    return e.touches[0].clientX;
  }
  return e.clientX;
};

tapProto._getClientY = function (e) {
  if (e.touches && e.touches.length > 0) {
    return e.touches[0].clientY;
  }
  return e.clientY;
};

tapProto.start = function ( e ) {
  var me = this;
  var ele = me.el;

  me.startTime = Date.now();

  if ( e.type === 'touchstart' ) {

    me.hasTouchEventOccured = true;
    ele.addEventListener( 'touchmove', me, false );
    ele.addEventListener( 'touchend', me, false );
    ele.addEventListener( 'touchcancel', me, false );

  } else if ( e.type === 'mousedown' ) {
    ele.addEventListener( 'mousemove', me, false );
    ele.addEventListener( 'mouseup', me, false );
  }

  me.startTarget = e.target;

  me.moved = false;
  me.startX = me._getClientX(e); //e.type === 'touchstart' ? e.touches[ 0 ].clientX : e.clientX;
  me.startY = me._getClientY(e);//e.type === 'touchstart' ? e.touches[ 0 ].clientY : e.clientY;
};

tapProto.move = function ( e ) {
  var me = this;
  //if finger moves more than 10px flag to cancel
  if ( Math.abs( me._getClientX(e) - this.startX ) > 10 || Math.abs( me._getClientY(e) - this.startY ) > 10 ) {
    this.moved = true;
  }
};

tapProto.end = function ( e ) {
  var me = this;
  var ele = me.el;

  ele.removeEventListener( 'mousemove', me, false);
  ele.removeEventListener( 'touchmove', me, false );
  ele.removeEventListener( 'touchend', me, false );
  ele.removeEventListener( 'touchcancel', me, false );
  ele.removeEventListener( 'mouseup', me, false );

  var target = e.target;

  if ( !me.moved ) {
    var endTime = Date.now();

    var eventHelper = require( 'dom-event-special' );
    if ( endTime - me.startTime > 500) { // more than 500ms between start and end and we ignore the event
      me.startTime = null;
      return;
    }

    if (e.target !== me.startTarget) { // if the target is not the same as the starting one
      me.startTarget = null;
      return;
    }

    eventHelper.fire( e.target, 'tap', {
      bubbles: true,
      cancelable: true
    } );

  }
};

tapProto.cancel = function () {
  var me = this;
  me.hasTouchEventOccured = false;
  me.moved = false;
  me.startX = 0;
  me.startY = 0;
};

tapProto.destroy = function () {
  var me = this;
  var ele = me.el;

  ele.removeEventListener( 'touchstart', me, false );
  ele.removeEventListener( 'touchmove', me, false );
  ele.removeEventListener( 'touchend', me, false );
  ele.removeEventListener( 'touchcancel', me, false );
  ele.removeEventListener( 'mousedown', me, false );
  ele.removeEventListener( 'mouseup', me, false );
  me.el = null;
};

tapProto.handleEvent = function ( e ) {
  var me = this;
  switch (e.type) {
    case 'touchstart': me.start( e );
      break;
    case 'mousemove': me.move( e );
      break;
    case 'touchmove': me.move( e );
      break;
    case 'touchend': me.end( e );
      break;
    case 'touchcancel': me.cancel( e );
      break;
    case 'mousedown': me.start( e );
      break;
    case 'mouseup': me.end( e );
      break;
  }
};

module.exports = Tap;
