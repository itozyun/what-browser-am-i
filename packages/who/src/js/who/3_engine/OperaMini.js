// Opera Mini
goog.provide( 'who.engine.OperaMini.operaminiObject' );
goog.provide( 'who.engine.OperaMini.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.OperaMini.is' );
goog.provide( 'who.engine.OperaMini.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Opera Mini
 */

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
who.engine.OperaMini.operaminiObject = _operaminiObject;

/** @const {string|number|void} */
who.engine.OperaMini.NAVIGATOR_VERSION =
    p_maxVersion( p_getVersionString( p_strUserAgent, 'Opera Mini/' ), p_getVersionString( p_strUserAgent, 'Opera Mobi/' ) )
    || ( _operaminiObject && p_Something.NAVIGATOR_VERSION );

/** @return {boolean} */
who.engine.OperaMini.is = function(){
    return !!_operaminiObject || !!who.engine.OperaMini.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.OperaMini.detect = function(){
    if( who.engine.OperaMini.is() ){
        p_setEngine( EnumEngine.Opera_Mini, who.engine.OperaMini.NAVIGATOR_VERSION );
        p_setBrand( EnumBrand.Opera, p_engineVersion );
        return true;
    };
};