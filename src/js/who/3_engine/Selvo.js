goog.provide( 'who.engine.Servo.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.Servo.is' );
goog.provide( 'who.engine.Servo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Servo
 */

/** @const {string|void} */
who.engine.Servo.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Servo/' );

/** @return {boolean} */
who.engine.Servo.is = function(){
    return !!who.engine.Servo.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.Servo.detect = function(){
    if( who.engine.Servo.is() ){
        who.base.setEngine( iAm.EnumEngine.Servo, who.engine.Servo.NAVIGATOR_VERSION );
        who.base.setBrand( iAm.EnumBrand.Servo, who.result.engineVersion );
        return true;
    };
};
