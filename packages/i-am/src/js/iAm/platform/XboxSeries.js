goog.provide( 'iAm.XboxSeries' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
    return iAm.XboxSeries() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.gte = function( version ){
    return iAm.XboxSeries() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.lt = function( version ){
    return iAm.XboxSeries() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.lte = function( version ){
    return iAm.XboxSeries() && iAm._platformVersion.lte( version );
};
