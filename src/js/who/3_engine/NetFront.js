goog.provide( 'who.engine.NetFront.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.NetFront.is' );
goog.provide( 'who.engine.NetFront.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  NetFront
 */

/** @const {string|void} */
who.engine.NetFront.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'NetFront/' );

/** @return {boolean} */
who.engine.NetFront.is = function(){
    return !!who.engine.NetFront.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.NetFront.detect = function(){
    if( who.engine.NetFront.is() ){
        who.base.setEngine( iAm.EnumEngine.NetFront, who.engine.NetFront.NAVIGATOR_VERSION );
        who.base.setBrand( iAm.EnumBrand.NetFront$R, who.result.engineVersion );
        return true;
    };
};
