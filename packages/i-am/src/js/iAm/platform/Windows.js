goog.provide( 'iAm.Windows' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Windows = function(){
    return iAm._platformIs( iAm.EnumPlatform.Windows );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.gt = function( version ){
    return iAm.Windows() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.gte = function( version ){
    return iAm.Windows() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.lt = function( version ){
    return iAm.Windows() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Windows.lte = function( version ){
    return iAm.Windows() && iAm._platformVersion.lte( version );
};
