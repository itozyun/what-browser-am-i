goog.provide( 'iAm.iCab' );
goog.provide( 'iAm.iCab.Gt' );
goog.provide( 'iAm.iCab.Gte' );
goog.provide( 'iAm.iCab.Lt' );
goog.provide( 'iAm.iCab.Lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

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
iAm.iCab.Gt = function( version ){
    return iAm.iCab() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.Gte = function( version ){
    return iAm.iCab() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.Lt = function( version ){
    return iAm.iCab() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iCab.Lte = function( version ){
    return iAm.iCab() && iAm._engineVersion.Lte( version );
};
