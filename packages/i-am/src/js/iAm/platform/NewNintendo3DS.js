goog.provide( 'iAm.NewNintendo3DS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.NewNintendo3DS = function(){
    return iAm._platformIs( iAm.EnumPlatform.New_NINTENDO_3DS$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NewNintendo3DS.gt = function( version ){
    return iAm.NewNintendo3DS() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NewNintendo3DS.gte = function( version ){
    return iAm.NewNintendo3DS() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NewNintendo3DS.lt = function( version ){
    return iAm.NewNintendo3DS() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NewNintendo3DS.lte = function( version ){
    return iAm.NewNintendo3DS() && iAm._platformVersion.lte( version );
};
