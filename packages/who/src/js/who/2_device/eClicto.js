goog.provide( 'who.device.eClicto.is' );
goog.provide( 'who.device.eClicto.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  eClicto
 *
 *    https://en.wikipedia.org/wiki/EClicto
 *    
 *    eClicto – first Polish e-reader will be launched this autumn
 *    https://web.archive.org/web/20091022022318/http://www.passwordincorrect.com/2009/07/04/first-polish-e-reading-device-to-be-launched-in-autumn/
 */

/** @return {boolean} */
who.device.eClicto.is = function(){
    return false;
};

/** @return {boolean|void} */
who.device.eClicto.detect = function(){
    if( who.device.eClicto.is() ){
        p_setDevice( EnumDevice.eClicto, undefined, EnumDeviceType.EINK_READER );
        return true;
    };
};
