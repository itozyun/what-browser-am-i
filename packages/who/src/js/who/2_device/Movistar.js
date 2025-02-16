goog.provide( 'who.device.Movistar.is' );
goog.provide( 'who.device.Movistar.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 * Movistar
 */

/** @return {boolean} */
who.device.Movistar.is = function(){
    return false;
};

/** @return {boolean|void} */
who.device.Movistar.detect = function(){
    if( who.device.Movistar.is() ){
        p_setDevice( EnumDevice.Movistar, undefined, EnumDeviceType.EINK_READER );
        return true;
    };
};
