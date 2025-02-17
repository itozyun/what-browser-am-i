goog.provide( 'iAm.Likebook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersionGt' );
goog.require( 'iAm._deviceVersionGte' );
goog.require( 'iAm._deviceVersionLt' );
goog.require( 'iAm._deviceVersionLte' );

/**
 * @return {boolean}
 */
iAm.Likebook = function(){
    return iAm._deviceIs( iAm.EnumDevice.Likebook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.gt = function( version ){
    return iAm.Likebook() && iAm._deviceVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.gte = function( version ){
    return iAm.Likebook() && iAm._deviceVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.lt = function( version ){
    return iAm.Likebook() && iAm._deviceVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.lte = function( version ){
    return iAm.Likebook() && iAm._deviceVersionLte( version );
};
