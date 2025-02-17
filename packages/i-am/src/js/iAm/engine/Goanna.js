goog.provide( 'iAm.Goanna' );
goog.provide( 'iAm.Goanna.gt' );
goog.provide( 'iAm.Goanna.gte' );
goog.provide( 'iAm.Goanna.lt' );
goog.provide( 'iAm.Goanna.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

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
    return iAm.Goanna() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.gte = function( version ){
    return iAm.Goanna() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.lt = function( version ){
    return iAm.Goanna() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Goanna.lte = function( version ){
    return iAm.Goanna() && iAm._engineVersionLte( version );
};
