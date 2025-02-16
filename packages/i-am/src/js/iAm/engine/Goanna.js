goog.provide( 'iAm.Goanna' );
goog.provide( 'iAm.Goanna.gt' );
goog.provide( 'iAm.Goanna.gte' );
goog.provide( 'iAm.Goanna.lt' );
goog.provide( 'iAm.Goanna.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

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
iAm.Goanna.gt = function( version ){
    return iAm.Goanna() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.gte = function( version ){
    return iAm.Goanna() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.lt = function( version ){
    return iAm.Goanna() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.lte = function( version ){
    return iAm.Goanna() && iAm._engineVersion.lte( version );
};
