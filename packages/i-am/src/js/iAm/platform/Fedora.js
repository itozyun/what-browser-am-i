goog.provide( 'iAm.Fedora' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Fedora = function(){
    return iAm._platformIs( iAm.EnumPlatform.Fedora );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.gt = function( version ){
    return iAm.Fedora() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.gte = function( version ){
    return iAm.Fedora() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.lt = function( version ){
    return iAm.Fedora() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fedora.lte = function( version ){
    return iAm.Fedora() && iAm._platformVersion.lte( version );
};
