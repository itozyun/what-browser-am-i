goog.provide( 'who.engine.Servo.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.Servo.is' );
goog.provide( 'who.engine.Servo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Servo
 */

/** @const {string|void} */
who.engine.Servo.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Servo/' );

/** @return {boolean} */
who.engine.Servo.is = function(){
    return !!who.engine.Servo.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.Servo.detect = function(){
    if( who.engine.Servo.is() ){
        p_setEngine( ENGINE.Servo, who.engine.Servo.NAVIGATOR_VERSION );
        p_setBrand( BRAND.Servo, p_engineVersion );
        return true;
    };
};
