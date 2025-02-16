goog.provide( 'iAm.XboxOne' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

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
iAm.XboxOne.Gt = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.Gte = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.Lt = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.XboxOne.Lte = function( version ){
    return iAm.XboxOne() && iAm._platformVersion.Lte( version );
};
