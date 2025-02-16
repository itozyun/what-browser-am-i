goog.provide( 'who.engine.WebKit.is' );
goog.provide( 'who.engine.WebKit.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  WebKit
 */

/** @return {boolean} */
who.engine.WebKit.is = function(){
    return !!who.env.numberWebKit;
};

/** @return {boolean|void} */
who.engine.WebKit.detect = function(){
    if( who.engine.WebKit.is() ){
        who.base.setEngine( iAm.EnumEngine.WebKit, who.env.numberWebKit );
        return true;
    };
};
