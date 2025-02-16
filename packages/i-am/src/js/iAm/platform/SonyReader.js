goog.provide( 'iAm.SonyReader' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.SonyReader.Gt = function( version ){
    return iAm.SonyReader() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.Gte = function( version ){
    return iAm.SonyReader() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.Lt = function( version ){
    return iAm.SonyReader() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.SonyReader.Lte = function( version ){
    return iAm.SonyReader() && iAm._platformVersion.Lte( version );
};
