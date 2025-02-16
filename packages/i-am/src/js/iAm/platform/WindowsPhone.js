goog.provide( 'iAm.WindowsPhone' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
    return iAm.WindowsPhone() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.gte = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.lt = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.WindowsPhone.lte = function( version ){
    return iAm.WindowsPhone() && iAm._platformVersion.lte( version );
};
