goog.provide( 'iAm.MeeGo' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

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
    return iAm.MeeGo() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.gte = function( version ){
    return iAm.MeeGo() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.lt = function( version ){
    return iAm.MeeGo() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.MeeGo.lte = function( version ){
    return iAm.MeeGo() && iAm._platformVersionLte( version );
};
