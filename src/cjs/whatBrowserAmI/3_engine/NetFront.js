goog.provide( 'whatBrowserAmI.engine.NetFront.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.NetFront.is' );
goog.provide( 'whatBrowserAmI.engine.NetFront.detect' );

/*----------------------------------------------------------------------------//
 *  NetFront
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.NetFront = {};

/** @const {string|void} */
whatBrowserAmI.engine.NetFront.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'NetFront/' );

/** @return {boolean} */
whatBrowserAmI.engine.NetFront.is = function(){
    return !!whatBrowserAmI.engine.NetFront.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.NetFront.detect = function(){
    if( whatBrowserAmI.engine.NetFront.is() ){
        p_setEngine( ENGINE.NetFront, whatBrowserAmI.engine.NetFront.NAVIGATOR_VERSION );
        return true;
    };
};
