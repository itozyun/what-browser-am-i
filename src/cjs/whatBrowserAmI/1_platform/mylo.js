goog.provide( 'whatBrowserAmI.platform.mylo' );
goog.provide( 'whatBrowserAmI.platform.mylo.is' );
goog.provide( 'whatBrowserAmI.platform.mylo.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  mylo(COM-1)
 *    https://ja.wikipedia.org/wiki/Mylo
 *      > Opera がプリインストール
 * 
 *  mylo(COM-2)
 *    https://ja.wikipedia.org/wiki/Mylo
 *      > NetFront に変更され、Adobe Flash Lite3 が搭載されている。
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.mylo = {};

/**
 * @private
 * @const {boolean}
 */
var _isMylo1 = false;

/**
 * @private
 * @const {boolean}
 */
var _isMylo2 = p_numAppVersion === 2 && p_hasSubstring( p_strUserAgent, 'Sony/COM2/' );

/** @return {boolean} */
whatBrowserAmI.platform.mylo.is = function(){
    return _isMylo1 || _isMylo2;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.mylo.detect = function(){
    if( _isMylo1 ){
        p_setPlatform( PLATFORM.mylo, 1, DEVICE_TYPE.PDA );
        p_setEngine( ENGINE.PrestoMobile, 8.5 );
        return true;
    } else if( _isMylo2 ){
        p_setPlatform( PLATFORM.mylo, 2, DEVICE_TYPE.PDA );
        p_setEngine( ENGINE.NetFront, 3.4 );
        return true;
    };
};
