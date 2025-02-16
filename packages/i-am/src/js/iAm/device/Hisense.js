goog.provide( 'iAm.Hisense' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

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
iAm.Hisense.Gt = function( version ){
    return iAm.Hisense() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.Gte = function( version ){
    return iAm.Hisense() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.Lt = function( version ){
    return iAm.Hisense() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Hisense.Lte = function( version ){
    return iAm.Hisense() && iAm._deviceVersion.Lte( version );
};
