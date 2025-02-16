goog.provide( 'iAm.KHTML' );
goog.provide( 'iAm.KHTML.gt' );
goog.provide( 'iAm.KHTML.gte' );
goog.provide( 'iAm.KHTML.lt' );
goog.provide( 'iAm.KHTML.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/**
 * @return {boolean}
 */
iAm.KHTML = function(){
    return iAm._engineIs( iAm.EnumEngine.KHTML );
};

/*----------------------------------------------------------------------------//
 *  KHTML
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.gt = function( version ){
    return iAm.KHTML() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.gte = function( version ){
    return iAm.KHTML() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.lt = function( version ){
    return iAm.KHTML() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KHTML.lte = function( version ){
    return iAm.KHTML() && iAm._engineVersion.lte( version );
};
