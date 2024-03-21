goog.provide( 'whatBrowserAmI.engine.KHTML.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.KHTML.is' );
goog.provide( 'whatBrowserAmI.engine.KHTML.detect' );

/*----------------------------------------------------------------------------//
 *  KHTML
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.KHTML = {};

/** @const {string|void} */
whatBrowserAmI.engine.KHTML.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'KHTML/' );

/** @return {boolean} */
whatBrowserAmI.engine.KHTML.is = function(){
    return !!whatBrowserAmI.engine.KHTML.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.KHTML.detect = function(){
    if( whatBrowserAmI.engine.KHTML.is() ){
        p_setEngine( ENGINE.KHTML, whatBrowserAmI.engine.KHTML.NAVIGATOR_VERSION );
        return true;
    };
};
