goog.provide( 'iAm.Servo' );
goog.provide( 'iAm.Servo.gt' );
goog.provide( 'iAm.Servo.gte' );
goog.provide( 'iAm.Servo.lt' );
goog.provide( 'iAm.Servo.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.Servo = function(){
    return iAm._engineIs( iAm.EnumEngine.Servo );
};

/*----------------------------------------------------------------------------//
 *  Servo
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Servo.gt = function( version ){
    return iAm.Servo() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Servo.gte = function( version ){
    return iAm.Servo() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Servo.lt = function( version ){
    return iAm.Servo() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Servo.lte = function( version ){
    return iAm.Servo() && iAm._engineVersionLte( version );
};
