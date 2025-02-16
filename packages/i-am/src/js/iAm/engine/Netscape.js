goog.provide( 'iAm.Netscape' );
goog.provide( 'iAm.Netscape.gt' );
goog.provide( 'iAm.Netscape.gte' );
goog.provide( 'iAm.Netscape.lt' );
goog.provide( 'iAm.Netscape.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Netscape = function(){
    return iAm._engineIs( iAm.EnumEngine.Netscape );
};

/*----------------------------------------------------------------------------//
 *  Netscape
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.gt = function( version ){
    return iAm.Netscape() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.gte = function( version ){
    return iAm.Netscape() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.lt = function( version ){
    return iAm.Netscape() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.lte = function( version ){
    return iAm.Netscape() && iAm._engineVersion.lte( version );
};
