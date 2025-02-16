goog.provide( 'iAm.Fidibook' );

goog.require( 'iAm.EnumDevice' );
goog.require( 'iAm._deviceIs' );
goog.require( 'iAm._deviceVersion.gt' );
goog.require( 'iAm._deviceVersion.gte' );
goog.require( 'iAm._deviceVersion.lt' );
goog.require( 'iAm._deviceVersion.lte' );

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
iAm.Fidibook.gt = function( version ){
    return iAm.Fidibook() && iAm._deviceVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.gte = function( version ){
    return iAm.Fidibook() && iAm._deviceVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.lt = function( version ){
    return iAm.Fidibook() && iAm._deviceVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Fidibook.lte = function( version ){
    return iAm.Fidibook() && iAm._deviceVersion.lte( version );
};
