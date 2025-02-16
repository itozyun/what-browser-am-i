goog.provide( 'who.engine.QtWebKit.is' );
goog.provide( 'who.engine.QtWebKit.detect' );

goog.require( 'who.base' );
goog.require( 'who.brand.QupZilla.NAVIGATOR_VERSION' );

/*----------------------------------------------------------------------------//
 *  Qt WebKit
 */

/** @return {boolean} */
who.engine.QtWebKit.is = function(){
    return !!who.brand.QupZilla.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.QtWebKit.detect = function(){
    if( who.engine.QtWebKit.is() ){
        p_setEngine( EnumEngine.Qt_WebKit, p_numberWebKit );
        return true;
    };
};
