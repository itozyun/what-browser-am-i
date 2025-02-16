goog.provide( 'iAm.iPhone' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.iPhone = function(){
    return iAm._deviceIs( iAm.EnumDevice.iPhone );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.Gt = function( version ){
    return iAm.iPhone() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.Gte = function( version ){
    return iAm.iPhone() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.Lt = function( version ){
    return iAm.iPhone() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.Lte = function( version ){
    return iAm.iPhone() && iAm._deviceVersion.Lte( version );
};
