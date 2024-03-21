goog.provide( 'whatBrowserAmI.platform.Xbox.is' );
goog.provide( 'whatBrowserAmI.platform.Xbox.detect' );

/*----------------------------------------------------------------------------//
 *  XBox One, Xbox 360
 */

/**
 * @private
 * @const {boolean} */
var _isXboxOne = p_hasSubstring( p_strUserAgent, 'Xbox One' );

/**
 * @private
 * @const {boolean} */
var _isXbox360 = !_isXboxOne && p_hasSubstring( p_strUserAgent, 'Xbox' );


/** @return {boolean} */
whatBrowserAmI.platform.Xbox.is = function(){
    return _isXbox360 || _isXboxOne;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.Xbox.detect = function(){
    if( _isXbox360 ){
        p_setPlatform( PLATFORM.Xbox360, 1, DEVICE_TYPE.GAME );
        return true;
    } else if( _isXboxOne ){
        p_setPlatform( PLATFORM.XboxOne, 1, DEVICE_TYPE.GAME );
        return true;
    };
};
