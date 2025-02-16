goog.provide( 'iAm.NintendoDSi' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.NintendoDSi = function(){
    return iAm._platformIs( iAm.EnumPlatform.NINTENDO_DSi$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.gt = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.gte = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.lt = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.NintendoDSi.lte = function( version ){
    return iAm.NintendoDSi() && iAm._platformVersion.lte( version );
};
