goog.provide( 'whatBrowserAmI.engine.EdgeHTML.is' );
goog.provide( 'whatBrowserAmI.engine.EdgeHTML.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.engine.Trident.is' );

/*----------------------------------------------------------------------------//
 *  EdgeHTML, EdgeMobile
 */

/** @return {boolean} */
whatBrowserAmI.engine.EdgeHTML.is = function(){
    return !whatBrowserAmI.engine.Trident.is() && !!p_htmlElement.msContentZoomFactor;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.EdgeHTML.detect = function(){
    if( whatBrowserAmI.engine.EdgeHTML.is() ){
        p_setEngine(
            p_platformName === PLATFORM.Windows_Phone ? ENGINE.Edge_Mobile : ENGINE.EdgeHTML,
            p_getVersionString( p_strAppVersion, 'Edge/' )
        );
        return true;
    };
};
