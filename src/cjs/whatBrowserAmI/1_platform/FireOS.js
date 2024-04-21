goog.provide( 'whatBrowserAmI.platform.FireOS.is' );
goog.provide( 'whatBrowserAmI.platform.FireOS.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.device.FireTV.FIRE_OS_VERSION' );
goog.require( 'whatBrowserAmI.device.KindleFire.FIRE_OS_VERSION' );
/*----------------------------------------------------------------------------//
 *  FireOS
 *
 */

/** @return {boolean} */
whatBrowserAmI.platform.FireOS.is = function(){
    return !!whatBrowserAmI.device.KindleFire.FIRE_OS_VERSION || !!whatBrowserAmI.device.FireTV.FIRE_OS_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.FireOS.detect = function(){
    if( whatBrowserAmI.platform.FireOS.is() ){
        p_setPlatform( PLATFORM.FireOS, whatBrowserAmI.device.KindleFire.FIRE_OS_VERSION || whatBrowserAmI.device.FireTV.FIRE_OS_VERSION );
        return true;
    };
};
