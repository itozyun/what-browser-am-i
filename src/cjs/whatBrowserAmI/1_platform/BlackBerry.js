goog.provide( 'whatBrowserAmI.platform.BlackBerry.is' );
goog.provide( 'whatBrowserAmI.platform.BlackBerry.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  BlackBerry
 *
 */

/** @return {boolean} */
whatBrowserAmI.platform.BlackBerry.is = function(){
    return p_hasSubstring( p_strUserAgent, 'BlackBerry' ) || p_hasSubstring( p_strUserAgent, 'BB10' );
};

/** @return {boolean|void} */
whatBrowserAmI.platform.BlackBerry.detect = function(){
    if( whatBrowserAmI.platform.BlackBerry.is() ){
        p_setPlatform( PLATFORM.BlackBerry, p_Something.NAVIGATOR_VERSION, DEVICE_TYPE.PHONE );
        return true;
    };
};
