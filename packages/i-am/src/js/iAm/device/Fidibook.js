goog.provide( 'iAm.Fidibook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.Gt' );
goog.require( 'iAm._deviceVersion.Gte' );
goog.require( 'iAm._deviceVersion.Lt' );
goog.require( 'iAm._deviceVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.Fidibook = function(){
    return iAm._deviceIs( iAm.EnumDevice.Fidibook );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.Gt = function( version ){
    return iAm.Fidibook() && iAm._deviceVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.Gte = function( version ){
    return iAm.Fidibook() && iAm._deviceVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.Lt = function( version ){
    return iAm.Fidibook() && iAm._deviceVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.Lte = function( version ){
    return iAm.Fidibook() && iAm._deviceVersion.Lte( version );
};
