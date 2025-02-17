goog.provide( 'iAm.Tasman' );
goog.provide( 'iAm.Tasman.gt' );
goog.provide( 'iAm.Tasman.gte' );
goog.provide( 'iAm.Tasman.lt' );
goog.provide( 'iAm.Tasman.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.Tasman = function(){
    return iAm._engineIs( iAm.EnumEngine.Tasman );
};

/*----------------------------------------------------------------------------//
 *  Tasman
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.gt = function( version ){
    return iAm.Tasman() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.gte = function( version ){
    return iAm.Tasman() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.lt = function( version ){
    return iAm.Tasman() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.lte = function( version ){
    return iAm.Tasman() && iAm._engineVersionLte( version );
};
