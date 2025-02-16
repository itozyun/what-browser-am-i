goog.provide( 'iAm.Tasman' );
goog.provide( 'iAm.Tasman.gt' );
goog.provide( 'iAm.Tasman.gte' );
goog.provide( 'iAm.Tasman.lt' );
goog.provide( 'iAm.Tasman.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

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
    return iAm.Tasman() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.gte = function( version ){
    return iAm.Tasman() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.lt = function( version ){
    return iAm.Tasman() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tasman.lte = function( version ){
    return iAm.Tasman() && iAm._engineVersion.lte( version );
};
