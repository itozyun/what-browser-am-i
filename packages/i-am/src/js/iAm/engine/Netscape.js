goog.provide( 'iAm.Netscape' );
goog.provide( 'iAm.Netscape.gt' );
goog.provide( 'iAm.Netscape.gte' );
goog.provide( 'iAm.Netscape.lt' );
goog.provide( 'iAm.Netscape.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

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
    return iAm.Netscape() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.gte = function( version ){
    return iAm.Netscape() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.lt = function( version ){
    return iAm.Netscape() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Netscape.lte = function( version ){
    return iAm.Netscape() && iAm._engineVersionLte( version );
};
