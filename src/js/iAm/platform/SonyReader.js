goog.provide( 'iAm.SonyReader' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

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
    return iAm.SonyReader() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.gte = function( version ){
    return iAm.SonyReader() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.lt = function( version ){
    return iAm.SonyReader() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.lte = function( version ){
    return iAm.SonyReader() && iAm._platformVersionLte( version );
};
