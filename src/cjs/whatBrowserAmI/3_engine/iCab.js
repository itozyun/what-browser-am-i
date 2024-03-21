goog.provide( 'whatBrowserAmI.engine.iCab.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.iCab.is' );
goog.provide( 'whatBrowserAmI.engine.iCab.detect' );

/*----------------------------------------------------------------------------//
 *  iCab
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.iCab = {};

/** @const {string|void} */
whatBrowserAmI.engine.iCab.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'iCab' );

/** @return {boolean} */
whatBrowserAmI.engine.iCab.is = function(){
    return !!whatBrowserAmI.engine.iCab.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.iCab.detect = function(){
    if( whatBrowserAmI.engine.iCab.is() ){
        p_setEngine( ENGINE.iCab, whatBrowserAmI.engine.iCab.NAVIGATOR_VERSION );
        return true;
    };
};
