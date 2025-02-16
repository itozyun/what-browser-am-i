goog.provide( 'who.device.Fidibook.is' );
goog.provide( 'who.device.Fidibook.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Hannah F1 Wi-Fi
 */

/** @return {boolean} */
who.device.Fidibook.is = function(){
    return false;
};

/** @return {boolean|void} */
who.device.Fidibook.detect = function(){
    if( who.device.Fidibook.is() ){
        p_setDevice( EnumDevice.Fidibook, undefined, EnumDeviceType.EINK_READER );
        return true;
    };
};
