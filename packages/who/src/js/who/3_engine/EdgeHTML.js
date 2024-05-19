goog.provide( 'who.engine.EdgeHTML.is' );
goog.provide( 'who.engine.EdgeHTML.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.Trident.is' );

/*----------------------------------------------------------------------------//
 *  EdgeHTML, EdgeMobile
 *
 *    https://en.wikipedia.org/wiki/EdgeHTML
 */

/** @return {boolean} */
who.engine.EdgeHTML.is = function(){
    return !who.engine.Trident.is() && !!p_htmlElement.msContentZoomFactor;
};

/** @return {boolean|void} */
who.engine.EdgeHTML.detect = function(){
    if( who.engine.EdgeHTML.is() ){
        p_setEngine(
            p_platformName === PLATFORM.Windows_Phone ? ENGINE.Edge_Mobile : ENGINE.EdgeHTML,
            p_getVersionString( p_strAppVersion, 'Edge/' )
        );
        return true;
    };
};
