goog.provide( 'iAm.Hisense' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

/**
 * @return {boolean}
 */
iAm.Hisense = function(){
    return iAm._deviceIs( iAm.EnumDevice.Hisense );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.gt = function( version ){
    return iAm.Hisense() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.gte = function( version ){
    return iAm.Hisense() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.lt = function( version ){
    return iAm.Hisense() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.lte = function( version ){
    return iAm.Hisense() && iAm._deviceVersion.lte( version );
};
