goog.provide( 'iAm.NetFront' );
goog.provide( 'iAm.NetFront.Gt' );
goog.provide( 'iAm.NetFront.Gte' );
goog.provide( 'iAm.NetFront.Lt' );
goog.provide( 'iAm.NetFront.Lte' );

goog.require( 'who.ENGINE' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.NetFront = function(){
    return iAm._engineIs( who.ENGINE.NetFront );
};

/*----------------------------------------------------------------------------//
 *  NetFront
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.Gt = function( version ){
    return iAm.NetFront() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.Gte = function( version ){
    return iAm.NetFront() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.Lt = function( version ){
    return iAm.NetFront() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NetFront.Lte = function( version ){
    return iAm.NetFront() && iAm._engineVersion.Lte( version );
};
