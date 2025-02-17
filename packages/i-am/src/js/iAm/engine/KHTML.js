goog.provide( 'iAm.KHTML' );
goog.provide( 'iAm.KHTML.gt' );
goog.provide( 'iAm.KHTML.gte' );
goog.provide( 'iAm.KHTML.lt' );
goog.provide( 'iAm.KHTML.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.KHTML = function(){
    return iAm._engineIs( iAm.EnumEngine.KHTML );
};

/*----------------------------------------------------------------------------//
 *  KHTML
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.gt = function( version ){
    return iAm.KHTML() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.gte = function( version ){
    return iAm.KHTML() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.lt = function( version ){
    return iAm.KHTML() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.lte = function( version ){
    return iAm.KHTML() && iAm._engineVersionLte( version );
};
