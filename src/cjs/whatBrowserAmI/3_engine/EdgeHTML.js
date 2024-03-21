goog.provide( 'whatBrowserAmI.engine.EdgeHTML.is' );
goog.provide( 'whatBrowserAmI.engine.EdgeHTML.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.engine.Trident.is' );

/*----------------------------------------------------------------------------//
 *  EdgeHTML, EdgeMobile
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.EdgeHTML = {};

/** @const {boolean} */
whatBrowserAmI.engine.EdgeHTML.is = function(){
    return !whatBrowserAmI.engine.Trident.is() && p_htmlElement.msContentZoomFactor;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.EdgeHTML.detect = function(){
    if( whatBrowserAmI.engine.EdgeHTML.is() ){
        p_setEngine(
            p_platformName === PLATFORM.WindowsPhone ? ENGINE.EdgeMobile : ENGINE.EdgeHTML,
            p_getVersionString( p_strAppVersion, 'Edge/' )
        );
        return true;
    };
};
