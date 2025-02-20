goog.provide( 'iAm.WindowsPhone' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.WindowsPhone = function(){
    return iAm._platformIs( iAm.EnumPlatform.Windows_Phone );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.gt = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.gte = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.lt = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.lte = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersionLte( version );
};
