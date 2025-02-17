goog.provide( 'util.isInstanceOfNode' );

/**
 * instanceof Node polyfill
 * 
 * @see https://github.com/pettanR/webframework/blob/64ee5fad8cf91c8762fcf8e6a48174757ab30771/js/01_core/04_XType.js#L20
 * @see https://github.com/Jin96/uupaa-js/blob/d2bcd1f66bcc856b1414dce66e0d798261d06419/0.8/src/uupaa.js#L2376
 * @const {!function(*):boolean}
 */
util.isInstanceOfNode =
    iAm.AnyTrident.lt( 5 ) || iAm.Tasman()
      ? function( val ){
            return !!( val && val.insertAdjacentHTML );
        }
  : !window.Node || iAm.NetFront.lt( 4 ) || iAm.Gecko.lt( 1.9 ) || iAm.AnyPresto.lt( 8 )
      ? function( val ){
            return !!( val && val.nodeType );
        }
      : new Function( 'v', 'return v instanceof Node' );
