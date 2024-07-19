goog.provide( 'iAm.Tasman' );
goog.provide( 'iAm.Tasman.Gt' );
goog.provide( 'iAm.Tasman.Gte' );
goog.provide( 'iAm.Tasman.Lt' );
goog.provide( 'iAm.Tasman.Lte' );

goog.require( 'who.ENGINE' );

/**
 * @return {boolean}
 */
iAm.Tasman = function(){
    return iAm._engineIs( who.ENGINE.Tasman );
};

/*----------------------------------------------------------------------------//
 *  Tasman
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.Gt = function( version ){
    return iAm.Tasman() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.Gte = function( version ){
    return iAm.Tasman() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.Lt = function( version ){
    return iAm.Tasman() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.Lte = function( version ){
    return iAm.Tasman() && iAm._engineVersion.Lte( version );
};
