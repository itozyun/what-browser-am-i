goog.provide( 'iAm.WindowsMobile' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
    return iAm.WindowsMobile() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.gte = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.lt = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.lte = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.lte( version );
};
