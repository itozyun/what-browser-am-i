goog.provide( 'iAm.Tizen' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Tizen = function(){
    return iAm._platformIs( iAm.EnumPlatform.Tizen );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.gt = function( version ){
    return iAm.Tizen() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.gte = function( version ){
    return iAm.Tizen() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.lt = function( version ){
    return iAm.Tizen() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Tizen.lte = function( version ){
    return iAm.Tizen() && iAm._platformVersion.lte( version );
};
