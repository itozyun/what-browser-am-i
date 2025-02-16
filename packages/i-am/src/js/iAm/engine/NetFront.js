goog.provide( 'iAm.NetFront' );
goog.provide( 'iAm.NetFront.gt' );
goog.provide( 'iAm.NetFront.gte' );
goog.provide( 'iAm.NetFront.lt' );
goog.provide( 'iAm.NetFront.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

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
    return iAm.NetFront() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.gte = function( version ){
    return iAm.NetFront() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.lt = function( version ){
    return iAm.NetFront() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.lte = function( version ){
    return iAm.NetFront() && iAm._engineVersion.lte( version );
};
