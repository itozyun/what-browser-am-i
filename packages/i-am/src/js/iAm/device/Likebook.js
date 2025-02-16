goog.provide( 'iAm.Likebook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
    return iAm.Likebook() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.gte = function( version ){
    return iAm.Likebook() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.lt = function( version ){
    return iAm.Likebook() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.lte = function( version ){
    return iAm.Likebook() && iAm._deviceVersion.lte( version );
};
