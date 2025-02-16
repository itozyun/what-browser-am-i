goog.provide( 'iAm.FireTV' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.FireTV = function(){
    return iAm._deviceIs( iAm.EnumDevice.FireTV );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.Gt = function( version ){
    return iAm.FireTV() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.Gte = function( version ){
    return iAm.FireTV() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.Lt = function( version ){
    return iAm.FireTV() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireTV.Lte = function( version ){
    return iAm.FireTV() && iAm._deviceVersion.Lte( version );
};
