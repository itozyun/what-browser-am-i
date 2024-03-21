// Presto, PrestoMobile
goog.provide( 'whatBrowserAmI.engine.UCWEB' );
goog.provide( 'whatBrowserAmI.engine.UCWEB.is' );
goog.provide( 'whatBrowserAmI.engine.UCWEB.detect' );
goog.provide( 'whatBrowserAmI.engine.UCWEB.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.UCWEB.WindowsPhoneVersionWithUCWEB' );
goog.provide( 'whatBrowserAmI.engine.UCWEB.iOSVersionWithUCWEB' );
goog.provide( 'whatBrowserAmI.engine.UCWEB.AndroidVersionWithUCWEB' );

/*----------------------------------------------------------------------------//
 *  UC Browser Speed Mode
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.engine.UCWEB = {};

/** @return {boolean} */
whatBrowserAmI.engine.UCWEB.is = function(){
    return p_hasSubstring( p_strUserAgent, 'UCWEB' );
};

/**
 * https://developers.whatismybrowser.com/useragents/parse/244780-uc-browser-windows
 *   UCWEB/2.0 (Windows; U; wds 8.10; en-US; NOKIA; RM-976_1115) U2/1.0.0 UCBrowser/4.2.1.541 U2/1.0.0 Mobile
 *                                                                  ^^^^^
 * @const {string} */
whatBrowserAmI.engine.UCWEB.NAVIGATOR_VERSION =
    whatBrowserAmI.engine.UCWEB.is() && p_getVersionString( p_strUserAgent, ' U2/' );

/**
 * https://developers.whatismybrowser.com/useragents/parse/244780-uc-browser-windows
 *   UCWEB/2.0 (Windows; U; wds 8.10; en-US; NOKIA; RM-976_1115) U2/1.0.0 UCBrowser/4.2.1.541 U2/1.0.0 Mobile
 *                              ^^^^
 * @const {string} */
whatBrowserAmI.engine.UCWEB.WindowsPhoneVersionWithUCWEB =
    whatBrowserAmI.engine.UCWEB.is() && p_getVersionString( p_strUserAgent, '; wds ' );

/**
 * http://thadafinser.github.io/UserAgentParserComparison/v4/user-agent-detail/d4/26/d4262844-7040-4f5b-8f26-bf0477b215c3.html
 *   UCWEB/2.0 (iOS; U; iPh OS 6_1_3; xx; iPh3,1) U2/1.0.0 UCBrowser/9.0.1.284 U2/1.0.0 Mobile
 *                             ^^^^^
 * @const {string} */
whatBrowserAmI.engine.UCWEB.iOSVersionWithUCWEB =
    whatBrowserAmI.engine.UCWEB.is() && p_getAppleVersionString( p_strUserAgent, '; iPh OS ' );

/**
 * Android for UC Browser Speed mode
 * @const {string} */
whatBrowserAmI.engine.UCWEB.AndroidVersionWithUCWEB =
    whatBrowserAmI.engine.UCWEB.is() && p_getVersionString( p_strUserAgent, '; Adr ' );

/** @return {boolean|void} */
whatBrowserAmI.engine.UCWEB.detect = function(){
    if( whatBrowserAmI.engine.UCWEB.is() ){
        p_setEngine( ENGINE.UCWEB, whatBrowserAmI.engine.UCWEB.NAVIGATOR_VERSION );
        return true;
    };
};
