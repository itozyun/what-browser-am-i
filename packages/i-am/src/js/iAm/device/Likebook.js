goog.provide( 'iAm.Likebook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

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
iAm.Likebook.Gt = function( version ){
    return iAm.Likebook() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.Gte = function( version ){
    return iAm.Likebook() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.Lt = function( version ){
    return iAm.Likebook() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Likebook.Lte = function( version ){
    return iAm.Likebook() && iAm._deviceVersion.Lte( version );
};
