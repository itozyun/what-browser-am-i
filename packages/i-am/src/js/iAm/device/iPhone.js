goog.provide( 'iAm.iPhone' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

/**
 * @return {boolean}
 */
iAm.iPhone = function(){
    return iAm._deviceIs( iAm.EnumDevice.iPhone );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.gt = function( version ){
    return iAm.iPhone() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.gte = function( version ){
    return iAm.iPhone() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.lt = function( version ){
    return iAm.iPhone() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPhone.lte = function( version ){
    return iAm.iPhone() && iAm._deviceVersion.lte( version );
};
