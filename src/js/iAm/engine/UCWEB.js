goog.provide( 'iAm.UCWEB' );
goog.provide( 'iAm.UCWEB.gt' );
goog.provide( 'iAm.UCWEB.gte' );
goog.provide( 'iAm.UCWEB.lt' );
goog.provide( 'iAm.UCWEB.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.UCWEB = function(){
    return iAm._engineIs( iAm.EnumEngine.UCWEB );
};

/*----------------------------------------------------------------------------//
 *  UCWEB
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.gt = function( version ){
    return iAm.UCWEB() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.gte = function( version ){
    return iAm.UCWEB() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.lt = function( version ){
    return iAm.UCWEB() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.lte = function( version ){
    return iAm.UCWEB() && iAm._engineVersionLte( version );
};
