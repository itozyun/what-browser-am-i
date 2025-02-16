goog.provide( 'iAm.MeeGo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.MeeGo = function(){
    return iAm._platformIs( iAm.EnumPlatform.MeeGo );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.gt = function( version ){
    return iAm.MeeGo() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.gte = function( version ){
    return iAm.MeeGo() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.lt = function( version ){
    return iAm.MeeGo() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.lte = function( version ){
    return iAm.MeeGo() && iAm._platformVersion.lte( version );
};
