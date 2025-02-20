goog.provide( 'iAm.Kindle' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.Kindle = function(){
    return iAm._platformIs( iAm.EnumPlatform.Kindle );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.gt = function( version ){
    return iAm.Kindle() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.gte = function( version ){
    return iAm.Kindle() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.lt = function( version ){
    return iAm.Kindle() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.lte = function( version ){
    return iAm.Kindle() && iAm._platformVersionLte( version );
};
