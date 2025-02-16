goog.provide( 'iAm.Gentoo' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.Gentoo = function(){
    return iAm._platformIs( who.PLATFORM.Gentoo );
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
