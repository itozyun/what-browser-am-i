goog.provide( 'iAm.iPod' );

goog.require( 'who.DEVICE' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.iPod = function(){
    return iAm._deviceIs( who.DEVICE.iPod );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.Gt = function( version ){
    return iAm.iPod() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.Gte = function( version ){
    return iAm.iPod() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.Lt = function( version ){
    return iAm.iPod() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.Lte = function( version ){
    return iAm.iPod() && iAm._deviceVersion.Lte( version );
};
