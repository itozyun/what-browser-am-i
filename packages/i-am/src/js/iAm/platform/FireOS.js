goog.provide( 'iAm.FireOS' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.FireOS = function(){
    return iAm._platformIs( iAm.EnumPlatform.FireOS );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.Gt = function( version ){
    return iAm.FireOS() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.Gte = function( version ){
    return iAm.FireOS() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.Lt = function( version ){
    return iAm.FireOS() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FireOS.Lte = function( version ){
    return iAm.FireOS() && iAm._platformVersion.Lte( version );
};
