goog.provide( 'iAm.Ubuntu' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Ubuntu = function(){
    return iAm._platformIs( iAm.EnumPlatform.Ubuntu );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.gt = function( version ){
    return iAm.Ubuntu() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.gte = function( version ){
    return iAm.Ubuntu() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.lt = function( version ){
    return iAm.Ubuntu() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Ubuntu.lte = function( version ){
    return iAm.Ubuntu() && iAm._platformVersion.lte( version );
};
