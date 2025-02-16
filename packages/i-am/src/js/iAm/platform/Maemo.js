goog.provide( 'iAm.Maemo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Maemo = function(){
    return iAm._platformIs( iAm.EnumPlatform.Maemo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.gt = function( version ){
    return iAm.Maemo() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.gte = function( version ){
    return iAm.Maemo() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.lt = function( version ){
    return iAm.Maemo() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Maemo.lte = function( version ){
    return iAm.Maemo() && iAm._platformVersion.lte( version );
};
