goog.provide( 'iAm.Selvo' );
goog.provide( 'iAm.Selvo.gt' );
goog.provide( 'iAm.Selvo.gte' );
goog.provide( 'iAm.Selvo.lt' );
goog.provide( 'iAm.Selvo.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Selvo = function(){
    return iAm._engineIs( iAm.EnumEngine.Selvo );
};

/*----------------------------------------------------------------------------//
 *  Selvo
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Selvo.gt = function( version ){
    return iAm.Selvo() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Selvo.gte = function( version ){
    return iAm.Selvo() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Selvo.lt = function( version ){
    return iAm.Selvo() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Selvo.lte = function( version ){
    return iAm.Selvo() && iAm._engineVersion.lte( version );
};
