goog.provide( 'iAm.Goanna' );
goog.provide( 'iAm.Goanna.Gt' );
goog.provide( 'iAm.Goanna.Gte' );
goog.provide( 'iAm.Goanna.Lt' );
goog.provide( 'iAm.Goanna.Lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Goanna = function(){
    return iAm._engineIs( iAm.EnumEngine.Goanna );
};

/*----------------------------------------------------------------------------//
 *  Goanna
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.Gt = function( version ){
    return iAm.Goanna() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.Gte = function( version ){
    return iAm.Goanna() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.Lt = function( version ){
    return iAm.Goanna() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.Lte = function( version ){
    return iAm.Goanna() && iAm._engineVersion.Lte( version );
};
