goog.provide( 'iAm.NewNintendo3DS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.NewNintendo3DS.Gt = function( version ){
    return iAm.NewNintendo3DS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NewNintendo3DS.Gte = function( version ){
    return iAm.NewNintendo3DS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NewNintendo3DS.Lt = function( version ){
    return iAm.NewNintendo3DS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NewNintendo3DS.Lte = function( version ){
    return iAm.NewNintendo3DS() && iAm._platformVersion.Lte( version );
};
