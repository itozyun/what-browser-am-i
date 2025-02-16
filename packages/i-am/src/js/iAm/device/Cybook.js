goog.provide( 'iAm.Cybook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Cybook = function(){
    return iAm._deviceIs( iAm.EnumDevice.Cybook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.gt = function( version ){
    return iAm.Cybook() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.gte = function( version ){
    return iAm.Cybook() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.lt = function( version ){
    return iAm.Cybook() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Cybook.lte = function( version ){
    return iAm.Cybook() && iAm._deviceVersion.lte( version );
};
