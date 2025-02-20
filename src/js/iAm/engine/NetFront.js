goog.provide( 'iAm.NetFront' );
goog.provide( 'iAm.NetFront.gt' );
goog.provide( 'iAm.NetFront.gte' );
goog.provide( 'iAm.NetFront.lt' );
goog.provide( 'iAm.NetFront.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.NetFront = function(){
    return iAm._engineIs( iAm.EnumEngine.NetFront );
};

/*----------------------------------------------------------------------------//
 *  NetFront
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.gt = function( version ){
    return iAm.NetFront() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.gte = function( version ){
    return iAm.NetFront() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.lt = function( version ){
    return iAm.NetFront() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.lte = function( version ){
    return iAm.NetFront() && iAm._engineVersionLte( version );
};
