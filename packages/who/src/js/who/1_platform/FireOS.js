goog.provide( 'who.platform.FireOS.is' );
goog.provide( 'who.platform.FireOS.detect' );

goog.require( 'who.base' );
goog.require( 'who.device.FireTV.FIRE_OS_VERSION' );
goog.require( 'who.device.KindleFire.FIRE_OS_VERSION' );
/*----------------------------------------------------------------------------//
 *  FireOS
 *
 */

/** @return {boolean} */
who.platform.FireOS.is = function(){
    return !!who.device.KindleFire.FIRE_OS_VERSION || !!who.device.FireTV.FIRE_OS_VERSION;
};

/** @return {boolean|void} */
who.platform.FireOS.detect = function(){
    if( who.platform.FireOS.is() ){
        p_setPlatform( PLATFORM.FireOS, who.device.KindleFire.FIRE_OS_VERSION || who.device.FireTV.FIRE_OS_VERSION );
        return true;
    };
};
