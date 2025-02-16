goog.provide( 'iAm.QtWebKit' );
goog.provide( 'iAm.QtWebKit.Gt' );
goog.provide( 'iAm.QtWebKit.Gte' );
goog.provide( 'iAm.QtWebKit.Lt' );
goog.provide( 'iAm.QtWebKit.Lte' );

goog.require( 'who.ENGINE' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.QtWebKit = function(){
    return iAm._engineIs( who.ENGINE.QtWebKit );
};

/*----------------------------------------------------------------------------//
 *  QtWebKit
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.Gt = function( version ){
    return iAm.QtWebKit() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.Gte = function( version ){
    return iAm.QtWebKit() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.Lt = function( version ){
    return iAm.QtWebKit() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.QtWebKit.Lte = function( version ){
    return iAm.QtWebKit() && iAm._engineVersion.Lte( version );
};
