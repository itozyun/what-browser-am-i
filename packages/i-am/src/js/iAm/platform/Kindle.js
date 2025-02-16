goog.provide( 'iAm.Kindle' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Kindle = function(){
    return iAm._platformIs( iAm.EnumPlatform.Kindle );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.gt = function( version ){
    return iAm.Kindle() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.gte = function( version ){
    return iAm.Kindle() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.lt = function( version ){
    return iAm.Kindle() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Kindle.lte = function( version ){
    return iAm.Kindle() && iAm._platformVersion.lte( version );
};
