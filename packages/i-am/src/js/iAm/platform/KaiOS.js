goog.provide( 'iAm.KaiOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.KaiOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.KaiOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.gt = function( version ){
    return iAm.KaiOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.gte = function( version ){
    return iAm.KaiOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.lt = function( version ){
    return iAm.KaiOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.KaiOS.lte = function( version ){
    return iAm.KaiOS() && iAm._platformVersion.lte( version );
};
