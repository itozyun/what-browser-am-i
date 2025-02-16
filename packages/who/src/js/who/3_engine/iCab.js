goog.provide( 'who.engine.iCab.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.iCab.is' );
goog.provide( 'who.engine.iCab.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  iCab
 */

/** @const {string|void} */
who.engine.iCab.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'iCab' );

/** @return {boolean} */
who.engine.iCab.is = function(){
    return !!who.engine.iCab.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.engine.iCab.detect = function(){
    if( who.engine.iCab.is() ){
        p_setEngine( EnumEngine.iCab, who.engine.iCab.NAVIGATOR_VERSION );
        p_setBrand( EnumBrand.iCab, p_engineVersion );
        return true;
    };
};
