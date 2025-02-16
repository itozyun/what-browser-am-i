goog.provide( 'iAm.Gentoo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.Gentoo.Gt = function( version ){
    return iAm.Gentoo() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gentoo.Gte = function( version ){
    return iAm.Gentoo() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gentoo.Lt = function( version ){
    return iAm.Gentoo() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gentoo.Lte = function( version ){
    return iAm.Gentoo() && iAm._platformVersion.Lte( version );
};
