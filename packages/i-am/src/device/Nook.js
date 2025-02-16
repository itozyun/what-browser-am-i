goog.provide( 'iAm.Nook' );

goog.require( 'who.DEVICE' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Nook = function(){
    return iAm._deviceIs( who.DEVICE.Nook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.Gt = function( version ){
    return iAm.Nook() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.Gte = function( version ){
    return iAm.Nook() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.Lt = function( version ){
    return iAm.Nook() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Nook.Lte = function( version ){
    return iAm.Nook() && iAm._deviceVersion.Lte( version );
};
