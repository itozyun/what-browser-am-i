goog.provide( 'who.engine.NetFront.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.NetFront.is' );
goog.provide( 'who.engine.NetFront.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  NetFront
 */

/** @const {string|void} */
who.engine.NetFront.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'NetFront/' );

/** @return {boolean} */
who.engine.NetFront.is = function(){
    return !!who.engine.NetFront.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.NetFront.detect = function(){
    if( who.engine.NetFront.is() ){
        p_setEngine( EnumEngine.NetFront, who.engine.NetFront.NAVIGATOR_VERSION );
        p_setBrand( EnumBrand.NetFront$R, p_engineVersion );
        return true;
    };
};
