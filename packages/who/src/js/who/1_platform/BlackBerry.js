goog.provide( 'who.platform.BlackBerry.is' );
goog.provide( 'who.platform.BlackBerry.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  BlackBerry
 *
 */

/** @return {boolean} */
who.platform.BlackBerry.is = function(){
    return p_hasSubstring( p_strUserAgent, 'BlackBerry' ) || p_hasSubstring( p_strUserAgent, 'BB10' );
};

/** @return {boolean|void} */
who.platform.BlackBerry.detect = function(){
    if( who.platform.BlackBerry.is() ){
        p_setPlatform( EnumPlatform.BlackBerry, p_Something.NAVIGATOR_VERSION, EnumDeviceType.PHONE );
        return true;
    };
};
