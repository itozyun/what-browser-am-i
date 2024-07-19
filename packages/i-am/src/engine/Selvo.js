goog.provide( 'iAm.Selvo' );
goog.provide( 'iAm.Selvo.Gt' );
goog.provide( 'iAm.Selvo.Gte' );
goog.provide( 'iAm.Selvo.Lt' );
goog.provide( 'iAm.Selvo.Lte' );

goog.require( 'who.ENGINE' );

/**
 * @return {boolean}
 */
iAm.Selvo = function(){
    return iAm._engineIs( who.ENGINE.Selvo );
};

/*----------------------------------------------------------------------------//
 *  Selvo
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Selvo.Gt = function( version ){
    return iAm.Selvo() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Selvo.Gte = function( version ){
    return iAm.Selvo() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Selvo.Lt = function( version ){
    return iAm.Selvo() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Selvo.Lte = function( version ){
    return iAm.Selvo() && iAm._engineVersion.Lte( version );
};
