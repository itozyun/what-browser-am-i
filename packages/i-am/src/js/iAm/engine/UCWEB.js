goog.provide( 'iAm.UCWEB' );
goog.provide( 'iAm.UCWEB.gt' );
goog.provide( 'iAm.UCWEB.gte' );
goog.provide( 'iAm.UCWEB.lt' );
goog.provide( 'iAm.UCWEB.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

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
iAm.UCWEB.gt = function( version ){
    return iAm.UCWEB() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.gte = function( version ){
    return iAm.UCWEB() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.lt = function( version ){
    return iAm.UCWEB() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.UCWEB.lte = function( version ){
    return iAm.UCWEB() && iAm._engineVersion.lte( version );
};
