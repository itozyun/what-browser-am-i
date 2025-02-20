goog.provide( 'who.brand.AOL.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.AOL.is' );
goog.provide( 'who.brand.AOL.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  AOL
 */

/** @const {string} */
who.brand.AOL.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'AOLBUILD/' ) ||
                                  who.util.getVersionString( who.env.strUserAgent, 'AOL/' ) ||
                                  who.util.getVersionString( who.env.strUserAgent, 'AOL ' );

/** @return {boolean} */
who.brand.AOL.is = function(){
    return !!who.brand.AOL.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.AOL.detect = function(){
    if( who.brand.AOL.is() ){
        who.base.setBrand( iAm.EnumBrand.AOL, who.brand.AOL.NAVIGATOR_VERSION );
        return true;
    };
};