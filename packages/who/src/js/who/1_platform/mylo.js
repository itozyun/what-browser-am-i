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
var _isMylo2 = who.env.numAppVersion === 2 && who.util.hasSubstring( who.env.strUserAgent, 'Sony/COM2/' );

/** @return {boolean} */
who.platform.mylo.is = function(){
    return _isMylo1 || _isMylo2;
};

/** @return {boolean|void} */
who.platform.mylo.detect = function(){
    if( _isMylo1 ){
        who.base.setPlatform( iAm.EnumPlatform.SONY_mylo, 1 );
        who.base.setDevice( iAm.EnumDevice.SONY_mylo, 1, iAm.EnumDeviceType.PDA );
        who.base.setEngine( iAm.EnumEngine.Presto_Mobile, 8.5 );
        return true;
    } else if( _isMylo2 ){
        who.base.setPlatform( iAm.EnumPlatform.SONY_mylo, 2 );
        who.base.setDevice( iAm.EnumDevice.SONY_mylo, 2, iAm.EnumDeviceType.PDA );
        who.base.setEngine( iAm.EnumEngine.NetFront, 3.4 );
        return true;
    };
};
