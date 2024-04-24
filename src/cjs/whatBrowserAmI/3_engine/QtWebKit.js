goog.provide( 'whatBrowserAmI.engine.QtWebKit.is' );
goog.provide( 'whatBrowserAmI.engine.QtWebKit.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Qt WebKit
 */

/** @return {boolean} */
whatBrowserAmI.engine.QtWebKit.is = function(){
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.QtWebKit.detect = function(){
    if( whatBrowserAmI.engine.QtWebKit.is() ){
        p_setEngine( ENGINE.Qt_WebKit );
        return true;
    };
};
