goog.provide( 'who.brand.AOL.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.AOL.is' );
goog.provide( 'who.brand.AOL.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  AOL
 */

/** @const {string} */
who.brand.AOL.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'AOLBUILD/' ) ||
                                  p_getVersionString( p_strUserAgent, 'AOL/' ) ||
                                  p_getVersionString( p_strUserAgent, 'AOL ' );

/** @return {boolean} */
who.brand.AOL.is = function(){
    return !!who.brand.AOL.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.AOL.detect = function(){
    if( who.brand.AOL.is() ){
        p_setBrand( EnumBrand.AOL, who.brand.AOL.NAVIGATOR_VERSION );
        return true;
    };
};