goog.provide( 'whatBrowserAmI.platform.BlackBerry.is' );
goog.provide( 'whatBrowserAmI.platform.BlackBerry.detect' );

/*----------------------------------------------------------------------------//
 *  BlackBerry
 *
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.BlackBerry = {};

/** @const {boolean} */
whatBrowserAmI.platform.BlackBerry.is = function(){
    return p_hasSubstring( p_strUserAgent, 'BlackBerry' ) || p_hasSubstring( p_strUserAgent, 'BB10' );
};

/** @return {boolean|void} */
whatBrowserAmI.platform.BlackBerry.detect = function(){
    if( whatBrowserAmI.platform.BlackBerry.is() ){
        p_setPlatform( PLATFORM.BlackBerry, p_Version.NAVIGATOR_VERSION, DEVICE_TYPE.Phone );
        return true;
    };
};
