goog.provide( 'iAm.KindleFire' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.KindleFire = function(){
    return iAm._deviceIs( iAm.EnumDevice.KindleFire );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.Gt = function( version ){
    return iAm.KindleFire() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.Gte = function( version ){
    return iAm.KindleFire() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.Lt = function( version ){
    return iAm.KindleFire() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.Lte = function( version ){
    return iAm.KindleFire() && iAm._deviceVersion.Lte( version );
};
