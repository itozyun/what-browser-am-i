goog.provide( 'iAm.XboxSeries' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.XboxSeries = function(){
    return iAm._platformIs( iAm.EnumPlatform.Xbox_SeriesX$VLS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.gt = function( version ){
    return iAm.XboxSeries() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.gte = function( version ){
    return iAm.XboxSeries() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.lt = function( version ){
    return iAm.XboxSeries() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.lte = function( version ){
    return iAm.XboxSeries() && iAm._platformVersionLte( version );
};
