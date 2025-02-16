goog.provide( 'iAm.QtWebKit' );
goog.provide( 'iAm.QtWebKit.gt' );
goog.provide( 'iAm.QtWebKit.gte' );
goog.provide( 'iAm.QtWebKit.lt' );
goog.provide( 'iAm.QtWebKit.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/**
 * @return {boolean}
 */
iAm.QtWebKit = function(){
    return iAm._engineIs( iAm.EnumEngine.QtWebKit );
};

/*----------------------------------------------------------------------------//
 *  QtWebKit
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.gt = function( version ){
    return iAm.QtWebKit() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.gte = function( version ){
    return iAm.QtWebKit() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.lt = function( version ){
    return iAm.QtWebKit() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.lte = function( version ){
    return iAm.QtWebKit() && iAm._engineVersion.lte( version );
};
