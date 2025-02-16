goog.provide( 'iAm.iCab' );
goog.provide( 'iAm.iCab.gt' );
goog.provide( 'iAm.iCab.gte' );
goog.provide( 'iAm.iCab.lt' );
goog.provide( 'iAm.iCab.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

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
    return iAm.iCab() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.gte = function( version ){
    return iAm.iCab() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.lt = function( version ){
    return iAm.iCab() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.lte = function( version ){
    return iAm.iCab() && iAm._engineVersion.lte( version );
};
