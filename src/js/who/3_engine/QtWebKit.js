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
        who.base.setEngine( iAm.EnumEngine.Qt_WebKit, who.env.numberWebKit );
        return true;
    };
};
