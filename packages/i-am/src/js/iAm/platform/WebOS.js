goog.provide( 'iAm.WebOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.WebOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.WebOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.gt = function( version ){
    return iAm.WebOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.gte = function( version ){
    return iAm.WebOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.lt = function( version ){
    return iAm.WebOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WebOS.lte = function( version ){
    return iAm.WebOS() && iAm._platformVersion.lte( version );
};
