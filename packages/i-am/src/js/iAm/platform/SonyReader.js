goog.provide( 'iAm.SonyReader' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.SonyReader = function(){
    return iAm._platformIs( iAm.EnumPlatform.SONY_Reader$R );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.gt = function( version ){
    return iAm.SonyReader() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.gte = function( version ){
    return iAm.SonyReader() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.lt = function( version ){
    return iAm.SonyReader() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.lte = function( version ){
    return iAm.SonyReader() && iAm._platformVersion.lte( version );
};
