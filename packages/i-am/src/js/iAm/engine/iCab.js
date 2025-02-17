goog.provide( 'iAm.iCab' );
goog.provide( 'iAm.iCab.gt' );
goog.provide( 'iAm.iCab.gte' );
goog.provide( 'iAm.iCab.lt' );
goog.provide( 'iAm.iCab.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.iCab = function(){
    return iAm._engineIs( iAm.EnumEngine.iCab );
};

/*----------------------------------------------------------------------------//
 *  iCab
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.gt = function( version ){
    return iAm.iCab() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.gte = function( version ){
    return iAm.iCab() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.lt = function( version ){
    return iAm.iCab() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.lte = function( version ){
    return iAm.iCab() && iAm._engineVersionLte( version );
};
