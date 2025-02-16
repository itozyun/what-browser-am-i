goog.provide( 'iAm.iPod' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

/**
 * @return {boolean}
 */
iAm.iPod = function(){
    return iAm._deviceIs( iAm.EnumDevice.iPod );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.gt = function( version ){
    return iAm.iPod() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.gte = function( version ){
    return iAm.iPod() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.lt = function( version ){
    return iAm.iPod() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.iPod.lte = function( version ){
    return iAm.iPod() && iAm._deviceVersion.lte( version );
};
