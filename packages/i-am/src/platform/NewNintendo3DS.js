goog.provide( 'iAm.NewNintendo3DS' );

goog.require( 'who.PLATFORM' );

/**
 * @return {boolean}
 */
iAm.NewNintendo3DS = function(){
    return iAm._platformIs( who.PLATFORM.New_NINTENDO_3DS$TM );
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
