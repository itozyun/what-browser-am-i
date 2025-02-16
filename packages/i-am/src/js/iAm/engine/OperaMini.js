goog.provide( 'iAm.OperaMini' );
goog.provide( 'iAm.OperaMini.gt' );
goog.provide( 'iAm.OperaMini.gte' );
goog.provide( 'iAm.OperaMini.lt' );
goog.provide( 'iAm.OperaMini.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/**
 * @return {boolean}
 */
iAm.OperaMini = function(){
    return iAm._engineIs( iAm.EnumEngine.OperaMini );
};

/*----------------------------------------------------------------------------//
 *  OperaMini
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.gt = function( version ){
    return iAm.OperaMini() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.gte = function( version ){
    return iAm.OperaMini() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.lt = function( version ){
    return iAm.OperaMini() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.lte = function( version ){
    return iAm.OperaMini() && iAm._engineVersion.lte( version );
};
