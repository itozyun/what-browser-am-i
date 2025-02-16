goog.provide( 'iAm.XboxSeries' );

goog.require( 'who.PLATFORM' );

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
