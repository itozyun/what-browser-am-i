goog.provide( 'iAm.XboxSeries' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.XboxSeries = function(){
    return iAm._platformIs( who.PLATFORM.Xbox_SeriesX$VLS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.Gt = function( version ){
    return iAm.XboxSeries() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.Gte = function( version ){
    return iAm.XboxSeries() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.Lt = function( version ){
    return iAm.XboxSeries() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxSeries.Lte = function( version ){
    return iAm.XboxSeries() && iAm._platformVersion.Lte( version );
};
