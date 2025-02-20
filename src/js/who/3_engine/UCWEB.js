// Presto, PrestoMobile
goog.provide( 'who.engine.UCWEB' );
goog.provide( 'who.engine.UCWEB.is' );
goog.provide( 'who.engine.UCWEB.detect' );
goog.provide( 'who.engine.UCWEB.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.UCWEB.WindowsPhoneVersionWithUCWEB' );
goog.provide( 'who.engine.UCWEB.iOSVersionWithUCWEB' );
goog.provide( 'who.engine.UCWEB.AndroidVersionWithUCWEB' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  UC Browser Speed Mode
 */

/** @return {boolean} */
who.engine.UCWEB.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, 'UCWEB' );
};

/**
 * https://developers.whatismybrowser.com/useragents/parse/244780-uc-browser-windows
 *   UCWEB/2.0 (Windows; U; wds 8.10; en-US; NOKIA; RM-976_1115) U2/1.0.0 UCBrowser/4.2.1.541 U2/1.0.0 Mobile
 *                                                                  ^^^^^
 * @const {string} */
who.engine.UCWEB.NAVIGATOR_VERSION =
    who.engine.UCWEB.is() ? who.util.getVersionString( who.env.strUserAgent, ' U2/' ) : '';

/**
 * https://developers.whatismybrowser.com/useragents/parse/244780-uc-browser-windows
 *   UCWEB/2.0 (Windows; U; wds 8.10; en-US; NOKIA; RM-976_1115) U2/1.0.0 UCBrowser/4.2.1.541 U2/1.0.0 Mobile
 *                              ^^^^
 * @const {string} */
who.engine.UCWEB.WindowsPhoneVersionWithUCWEB =
    who.engine.UCWEB.is() ? who.util.getVersionString( who.env.strUserAgent, '; wds ' ) : '';

/**
 * http://thadafinser.github.io/UserAgentParserComparison/v4/user-agent-detail/d4/26/d4262844-7040-4f5b-8f26-bf0477b215c3.html
 *   UCWEB/2.0 (iOS; U; iPh OS 6_1_3; xx; iPh3,1) U2/1.0.0 UCBrowser/9.0.1.284 U2/1.0.0 Mobile
 *                             ^^^^^
 * @const {string} */
who.engine.UCWEB.iOSVersionWithUCWEB =
    who.engine.UCWEB.is() ? who.util.getAppleVersionString( who.env.strUserAgent, '; iPh OS ' ) : '';

/**
 * Android for UC Browser Speed mode
 * @const {string} */
who.engine.UCWEB.AndroidVersionWithUCWEB =
    who.engine.UCWEB.is() ? who.util.getVersionString( who.env.strUserAgent, '; Adr ' ) : '';

/** @return {boolean|void} */
who.engine.UCWEB.detect = function(){
    if( who.engine.UCWEB.is() ){
        who.base.setEngine( iAm.EnumEngine.UCWEB, who.engine.UCWEB.NAVIGATOR_VERSION );
        who.base.setBrand( iAm.EnumBrand.UC, who.result.engineVersion );
        return true;
    };
};
