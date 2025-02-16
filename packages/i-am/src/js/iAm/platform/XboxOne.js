goog.provide( 'iAm.XboxOne' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.XboxOne = function(){
    return iAm._platformIs( iAm.EnumPlatform.Xbox_One$TM );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.gt = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.gte = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.lt = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.lte = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.lte( version );
};
