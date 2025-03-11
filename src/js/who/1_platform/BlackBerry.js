goog.provide( 'who.platform.BlackBerry.is' );
goog.provide( 'who.platform.BlackBerry.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  BlackBerry
 *
 */

/** @return {boolean} */
who.platform.BlackBerry.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, 'BlackBerry' ) || who.util.hasSubstring( who.env.strUserAgent, 'BB10' );
};

/** @return {boolean|void} */
who.platform.BlackBerry.detect = function(){
    if( who.platform.BlackBerry.is() ){
        who.base.setPlatform( iAm.EnumPlatform.BlackBerry, who.env.Something.NAVIGATOR_VERSION, iAm.EnumDeviceType.Phone );
        return true;
    };
};
