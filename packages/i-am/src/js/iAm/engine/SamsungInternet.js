goog.provide( 'iAm.SamsungInternet' );
goog.provide( 'iAm.SamsungInternet.gt' );
goog.provide( 'iAm.SamsungInternet.gte' );
goog.provide( 'iAm.SamsungInternet.lt' );
goog.provide( 'iAm.SamsungInternet.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

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
    return iAm.SamsungInternet() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.gte = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.lt = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.lte = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersion.lte( version );
};
