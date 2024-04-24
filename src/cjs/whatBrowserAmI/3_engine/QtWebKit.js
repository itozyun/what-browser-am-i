goog.provide( 'whatBrowserAmI.engine.QtWebKit.is' );
goog.provide( 'whatBrowserAmI.engine.QtWebKit.detect' );

goog.require( 'whatBrowserAmI.base' );
goog.require( 'whatBrowserAmI.brand.QupZilla.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Qt WebKit
 */

/** @return {boolean} */
whatBrowserAmI.engine.QtWebKit.is = function(){
    return !!whatBrowserAmI.brand.QupZilla.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.QtWebKit.detect = function(){
    if( whatBrowserAmI.engine.QtWebKit.is() ){
        p_setEngine( ENGINE.Qt_WebKit, p_numberWebKit );
        return true;
    };
};
