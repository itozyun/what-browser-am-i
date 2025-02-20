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
    return !who.engine.Trident.is() && !!who.env.htmlElement.msContentZoomFactor;
};

/** @return {boolean|void} */
who.engine.EdgeHTML.detect = function(){
    if( who.engine.EdgeHTML.is() ){
        who.base.setEngine(
            who.result.platformName === iAm.EnumPlatform.Windows_Phone ? iAm.EnumEngine.Edge_Mobile : iAm.EnumEngine.EdgeHTML,
            who.util.getVersionString( who.env.strAppVersion, 'Edge/' )
        );
        return true;
    };
};
