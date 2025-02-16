goog.provide( 'iAm.SamsungInternet' );
goog.provide( 'iAm.SamsungInternet.Gt' );
goog.provide( 'iAm.SamsungInternet.Gte' );
goog.provide( 'iAm.SamsungInternet.Lt' );
goog.provide( 'iAm.SamsungInternet.Lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

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
iAm.SamsungInternet.Gt = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.Gte = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.Lt = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SamsungInternet.Lte = function( version ){
    return iAm.SamsungInternet() && iAm._engineVersion.Lte( version );
};
