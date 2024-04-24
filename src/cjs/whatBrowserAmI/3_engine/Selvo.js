goog.provide( 'whatBrowserAmI.engine.Servo.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.Servo.is' );
goog.provide( 'whatBrowserAmI.engine.Servo.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Servo
 */

/** @const {string|void} */
whatBrowserAmI.engine.Servo.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Servo/' );

/** @return {boolean} */
whatBrowserAmI.engine.Servo.is = function(){
    return !!whatBrowserAmI.engine.Servo.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.Servo.detect = function(){
    if( whatBrowserAmI.engine.Servo.is() ){
        p_setEngine( ENGINE.Servo, whatBrowserAmI.engine.Servo.NAVIGATOR_VERSION );
        p_setBrand( BRAND.Servo, p_engineVersion );
        return true;
    };
};
