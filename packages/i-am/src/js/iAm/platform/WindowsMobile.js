goog.provide( 'iAm.WindowsMobile' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.WindowsMobile.Gt = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.Gte = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.Lt = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsMobile.Lte = function( version ){
    return iAm.WindowsMobile() && iAm._platformVersion.Lte( version );
};
