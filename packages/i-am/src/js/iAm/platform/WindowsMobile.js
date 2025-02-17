goog.provide( 'iAm.WindowsMobile' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.WindowsMobile = function(){
    return iAm._platformIs( iAm.EnumPlatform.Windows_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.gt = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.gte = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.lt = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.lte = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersionLte( version );
};
