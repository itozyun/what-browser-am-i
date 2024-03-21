// Opera Mini
goog.provide( 'whatBrowserAmI.engine.OperaMini.operaminiObject' );
goog.provide( 'whatBrowserAmI.engine.OperaMini.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.OperaMini.is' );
goog.provide( 'whatBrowserAmI.engine.OperaMini.detect' );

/*----------------------------------------------------------------------------//
 *  Opera Mini
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.OperaMini = {};

/**
 * @private
 * @const {!Object|void}
 */
var _operaminiObject = window.operamini;

/**
 * インドネシアの特殊なブラウザ事情(Opera Mini,UC Browser Mini)
 *   http://qiita.com/takanamito/items/8c2b6bc24ea01381f1b5#_reference-8eedaa6525b73cd272b7
 * 
 * iOS 12.2 + Opera Mini 16.0.14 には .operamini が無い
 * 
 * @const {!Object|void} */
whatBrowserAmI.engine.OperaMini.operaminiObject = _operaminiObject;

/** @const {string|number|void} */
whatBrowserAmI.engine.OperaMini.NAVIGATOR_VERSION =
    p_maxVersion( p_getVersionString( p_strUserAgent, 'Opera Mini/' ), p_getVersionString( p_strUserAgent, 'Opera Mobi/' ) )
    || ( _operaminiObject && p_Version.NAVIGATOR_VERSION );

/** @return {boolean} */
whatBrowserAmI.engine.OperaMini.is = function(){
    return !!_operaminiObject || !!whatBrowserAmI.engine.OperaMini.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.engine.OperaMini.detect = function(){
    if( whatBrowserAmI.engine.OperaMini.is() ){
        p_setEngine( ENGINE.OperaMini, whatBrowserAmI.engine.OperaMini.NAVIGATOR_VERSION );
        return true;
    };
};