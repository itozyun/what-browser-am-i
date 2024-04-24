goog.provide( 'whatBrowserAmI.brand.AOL.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.AOL.is' );
goog.provide( 'whatBrowserAmI.brand.AOL.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  AOL
 */

/** @const {string} */
whatBrowserAmI.brand.AOL.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'AOLBUILD/' ) ||
                                             p_getVersionString( p_strUserAgent, 'AOL/' ) ||
                                             p_getVersionString( p_strUserAgent, 'AOL ' );

/** @return {boolean} */
whatBrowserAmI.brand.AOL.is = function(){
    return !!whatBrowserAmI.brand.AOL.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.AOL.detect = function(){
    if( whatBrowserAmI.brand.AOL.is() ){
        p_setBrand( BRAND.AOL, whatBrowserAmI.brand.AOL.NAVIGATOR_VERSION );
        return true;
    };
};