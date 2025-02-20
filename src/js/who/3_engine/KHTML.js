goog.provide( 'who.engine.KHTML.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.KHTML.is' );
goog.provide( 'who.engine.KHTML.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  KHTML
 */

/** @const {string|void} */
who.engine.KHTML.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'KHTML/' );

/** @return {boolean} */
who.engine.KHTML.is = function(){
    return !!who.engine.KHTML.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.KHTML.detect = function(){
    if( who.engine.KHTML.is() ){
        who.base.setEngine( iAm.EnumEngine.KHTML, who.engine.KHTML.NAVIGATOR_VERSION );
        return true;
    };
};
