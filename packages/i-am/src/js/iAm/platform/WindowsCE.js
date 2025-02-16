goog.provide( 'iAm.WindowsCE' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.WindowsCE = function(){
    return iAm._platformIs( iAm.EnumPlatform.Windows_CE );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.gt = function( version ){
    return iAm.WindowsCE() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.gte = function( version ){
    return iAm.WindowsCE() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.lt = function( version ){
    return iAm.WindowsCE() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsCE.lte = function( version ){
    return iAm.WindowsCE() && iAm._platformVersion.lte( version );
};
