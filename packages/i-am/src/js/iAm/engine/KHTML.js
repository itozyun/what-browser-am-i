goog.provide( 'iAm.KHTML' );
goog.provide( 'iAm.KHTML.Gt' );
goog.provide( 'iAm.KHTML.Gte' );
goog.provide( 'iAm.KHTML.Lt' );
goog.provide( 'iAm.KHTML.Lte' );

goog.require( 'who.ENGINE' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.KHTML = function(){
    return iAm._engineIs( who.ENGINE.KHTML );
};

/*----------------------------------------------------------------------------//
 *  KHTML
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.Gt = function( version ){
    return iAm.KHTML() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.Gte = function( version ){
    return iAm.KHTML() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.Lt = function( version ){
    return iAm.KHTML() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.Lte = function( version ){
    return iAm.KHTML() && iAm._engineVersion.Lte( version );
};
