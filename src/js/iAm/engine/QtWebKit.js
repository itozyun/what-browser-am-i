goog.provide( 'iAm.QtWebKit' );
goog.provide( 'iAm.QtWebKit.gt' );
goog.provide( 'iAm.QtWebKit.gte' );
goog.provide( 'iAm.QtWebKit.lt' );
goog.provide( 'iAm.QtWebKit.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.QtWebKit = function(){
    return iAm._engineIs( iAm.EnumEngine.Qt_WebKit );
};

/*----------------------------------------------------------------------------//
 *  QtWebKit
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.gt = function( version ){
    return iAm.QtWebKit() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.gte = function( version ){
    return iAm.QtWebKit() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.lt = function( version ){
    return iAm.QtWebKit() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.lte = function( version ){
    return iAm.QtWebKit() && iAm._engineVersionLte( version );
};
