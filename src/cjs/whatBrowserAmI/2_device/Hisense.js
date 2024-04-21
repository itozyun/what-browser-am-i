goog.provide( 'whatBrowserAmI.device.Hisense.is' );
goog.provide( 'whatBrowserAmI.device.Hisense.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  A5 A5cc
 *  A7 A7cc
 */

/** @return {boolean} */
whatBrowserAmI.device.Hisense.is = function(){
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.device.Hisense.detect = function(){
    if( whatBrowserAmI.device.Hisense.is() ){
        p_setDevice( DEVICE.Hisense, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
