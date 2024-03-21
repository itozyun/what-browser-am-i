goog.provide( 'whatBrowserAmI.engine.WebKit.is' );
goog.provide( 'whatBrowserAmI.engine.WebKit.detect' );

/*----------------------------------------------------------------------------//
 *  WebKit
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.WebKit = {};

/** @return {boolean} */
whatBrowserAmI.engine.WebKit.is = function(){
    return !!p_numberWebKit;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.WebKit.detect = function(){
    if( whatBrowserAmI.engine.WebKit.is() ){
        p_setEngine( ENGINE.WebKit, p_numberWebKit );
        return true;
    };
};
