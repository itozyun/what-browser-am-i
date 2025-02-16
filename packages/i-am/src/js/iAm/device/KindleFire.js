goog.provide( 'iAm.KindleFire' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
iAm.KindleFire.gt = function( version ){
    return iAm.KindleFire() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.gte = function( version ){
    return iAm.KindleFire() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.lt = function( version ){
    return iAm.KindleFire() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KindleFire.lte = function( version ){
    return iAm.KindleFire() && iAm._deviceVersion.lte( version );
};
