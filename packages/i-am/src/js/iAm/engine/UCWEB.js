goog.provide( 'iAm.UCWEB' );
goog.provide( 'iAm.UCWEB.Gt' );
goog.provide( 'iAm.UCWEB.Gte' );
goog.provide( 'iAm.UCWEB.Lt' );
goog.provide( 'iAm.UCWEB.Lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.UCWEB = function(){
    return iAm._engineIs( iAm.EnumEngine.UCWEB );
};

/*----------------------------------------------------------------------------//
 *  UCWEB
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.Gt = function( version ){
    return iAm.UCWEB() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.Gte = function( version ){
    return iAm.UCWEB() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.Lt = function( version ){
    return iAm.UCWEB() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.Lte = function( version ){
    return iAm.UCWEB() && iAm._engineVersion.Lte( version );
};
