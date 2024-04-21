goog.provide( 'whatBrowserAmI.device.Movistar.is' );
goog.provide( 'whatBrowserAmI.device.Movistar.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 * Movistar
 */

/** @return {boolean} */
whatBrowserAmI.device.Movistar.is = function(){
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.device.Movistar.detect = function(){
    if( whatBrowserAmI.device.Movistar.is() ){
        p_setDevice( DEVICE.Movistar, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
