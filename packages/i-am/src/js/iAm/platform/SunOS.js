goog.provide( 'iAm.SunOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.SunOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.SunOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.gt = function( version ){
    return iAm.SunOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.gte = function( version ){
    return iAm.SunOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.lt = function( version ){
    return iAm.SunOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SunOS.lte = function( version ){
    return iAm.SunOS() && iAm._platformVersion.lte( version );
};
