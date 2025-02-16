goog.provide( 'iAm.Netscape' );
goog.provide( 'iAm.Netscape.Gt' );
goog.provide( 'iAm.Netscape.Gte' );
goog.provide( 'iAm.Netscape.Lt' );
goog.provide( 'iAm.Netscape.Lte' );

goog.require( 'who.ENGINE' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Netscape = function(){
    return iAm._engineIs( who.ENGINE.Netscape );
};

/*----------------------------------------------------------------------------//
 *  Netscape
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.Gt = function( version ){
    return iAm.Netscape() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.Gte = function( version ){
    return iAm.Netscape() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.Lt = function( version ){
    return iAm.Netscape() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.Lte = function( version ){
    return iAm.Netscape() && iAm._engineVersion.Lte( version );
};
