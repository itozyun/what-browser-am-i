goog.provide( 'iAm.OperaMini' );
goog.provide( 'iAm.OperaMini.gt' );
goog.provide( 'iAm.OperaMini.gte' );
goog.provide( 'iAm.OperaMini.lt' );
goog.provide( 'iAm.OperaMini.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.OperaMini = function(){
    return iAm._engineIs( iAm.EnumEngine.Opera_Mini );
};

/*----------------------------------------------------------------------------//
 *  OperaMini
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.gt = function( version ){
    return iAm.OperaMini() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.gte = function( version ){
    return iAm.OperaMini() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.lt = function( version ){
    return iAm.OperaMini() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.OperaMini.lte = function( version ){
    return iAm.OperaMini() && iAm._engineVersionLte( version );
};
