goog.provide( 'whatBrowserAmI.device.Fidibook.is' );
goog.provide( 'whatBrowserAmI.device.Fidibook.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Hannah F1 Wi-Fi
 */

/** @return {boolean} */
whatBrowserAmI.device.Fidibook.is = function(){
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.device.Fidibook.detect = function(){
    if( whatBrowserAmI.device.Fidibook.is() ){
        p_setDevice( DEVICE.Fidibook, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
