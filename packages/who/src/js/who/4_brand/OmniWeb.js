goog.provide( 'who.brand.OmniWeb.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.OmniWeb.is' );
goog.provide( 'who.brand.OmniWeb.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  OmniWeb
 */

/** @const {string} */
who.brand.OmniWeb.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'OmniWeb/' );

/** @return {boolean} */
who.brand.OmniWeb.is = function(){
    return !!who.brand.OmniWeb.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.OmniWeb.detect = function(){
    if( who.brand.OmniWeb.is() ){
        who.base.setBrand( iAm.EnumBrand.OmniWeb, who.brand.OmniWeb.NAVIGATOR_VERSION );
        return true;
    };
};