goog.provide( 'who.platform.mylo' );
goog.provide( 'who.platform.mylo.is' );
goog.provide( 'who.platform.mylo.detect' );

goog.require( 'who.base' );

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
who.platform.mylo.is = function(){
    return _isMylo1 || _isMylo2;
};

/** @return {boolean|void} */
who.platform.mylo.detect = function(){
    if( _isMylo1 ){
        p_setPlatform( EnumPlatform.SONY_mylo, 1 );
        p_setDevice( EnumDevice.SONY_mylo, 1, EnumDeviceType.PDA );
        p_setEngine( EnumEngine.Presto_Mobile, 8.5 );
        return true;
    } else if( _isMylo2 ){
        p_setPlatform( EnumPlatform.SONY_mylo, 2 );
        p_setDevice( EnumDevice.SONY_mylo, 2, EnumDeviceType.PDA );
        p_setEngine( EnumEngine.NetFront, 3.4 );
        return true;
    };
};
