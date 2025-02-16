goog.provide( 'iAm.Windows16' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Windows16 = function(){
    return iAm._platformIs( iAm.EnumPlatform.Windows16 );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.gt = function( version ){
    return iAm.Windows16() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.gte = function( version ){
    return iAm.Windows16() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.lt = function( version ){
    return iAm.Windows16() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows16.lte = function( version ){
    return iAm.Windows16() && iAm._platformVersion.lte( version );
};
