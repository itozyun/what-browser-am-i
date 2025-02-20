goog.provide( 'iAm.SamsungInternet' );
goog.provide( 'iAm.SamsungInternet.gt' );
goog.provide( 'iAm.SamsungInternet.gte' );
goog.provide( 'iAm.SamsungInternet.lt' );
goog.provide( 'iAm.SamsungInternet.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.SamsungInternet = function(){
    return iAm._engineIs( iAm.EnumEngine.SamsungInternet );
};

/*----------------------------------------------------------------------------//
 *  SamsungInternet
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.gt = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.gte = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.lt = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.lte = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersionLte( version );
};
