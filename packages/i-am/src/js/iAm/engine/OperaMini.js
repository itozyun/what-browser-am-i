goog.provide( 'iAm.OperaMini' );
goog.provide( 'iAm.OperaMini.Gt' );
goog.provide( 'iAm.OperaMini.Gte' );
goog.provide( 'iAm.OperaMini.Lt' );
goog.provide( 'iAm.OperaMini.Lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

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
iAm.OperaMini.Gt = function( version ){
    return iAm.OperaMini() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.Gte = function( version ){
    return iAm.OperaMini() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.Lt = function( version ){
    return iAm.OperaMini() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.Lte = function( version ){
    return iAm.OperaMini() && iAm._engineVersion.Lte( version );
};
