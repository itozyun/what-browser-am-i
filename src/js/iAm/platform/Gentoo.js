goog.provide( 'iAm.Gentoo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Gentoo = function(){
    return iAm._platformIs( iAm.EnumPlatform.Gentoo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gentoo.gt = function( version ){
    return iAm.Gentoo() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gentoo.gte = function( version ){
    return iAm.Gentoo() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gentoo.lt = function( version ){
    return iAm.Gentoo() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gentoo.lte = function( version ){
    return iAm.Gentoo() && iAm._platformVersionLte( version );
};
