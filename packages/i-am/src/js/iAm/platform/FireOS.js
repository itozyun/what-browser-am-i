goog.provide( 'iAm.FireOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.FireOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.FireOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.gt = function( version ){
    return iAm.FireOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.gte = function( version ){
    return iAm.FireOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.lt = function( version ){
    return iAm.FireOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.lte = function( version ){
    return iAm.FireOS() && iAm._platformVersion.lte( version );
};
