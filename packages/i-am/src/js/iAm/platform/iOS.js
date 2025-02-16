goog.provide( 'iAm.iOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.iOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.iOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.gt = function( version ){
    return iAm.iOS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.gte = function( version ){
    return iAm.iOS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.lt = function( version ){
    return iAm.iOS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iOS.lte = function( version ){
    return iAm.iOS() && iAm._platformVersion.lte( version );
};
