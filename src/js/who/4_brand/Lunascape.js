goog.provide( 'who.brand.Lunascape.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Lunascape.maybeLunascapeOnAndroid' );
goog.provide( 'who.brand.Lunascape.is' );
goog.provide( 'who.brand.Lunascape.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Lunascape
 */

/** @const {string} */
who.brand.Lunascape.NAVIGATOR_VERSION =
    who.util.getVersionString( who.env.strAppVersion, 'Lunascape ' ) ||
    who.util.getVersionString( who.env.strUserAgent , 'Lunascape/' );

/**
 * https://twitter.com/itozyun/status/1293628829248794624
 * TODO ChromeWebView の version が17に!
 * @const {boolean} */
who.brand.Lunascape.maybeLunascapeOnAndroid = !!window.ReactNativeWebView;

/** @return {boolean} */
who.brand.Lunascape.is = function(){
    return !!who.brand.Lunascape.NAVIGATOR_VERSION || who.brand.Lunascape.maybeLunascapeOnAndroid;
};

/** @return {boolean|void} */
who.brand.Lunascape.detect = function(){
    if( who.brand.Lunascape.is() ){
        who.base.setBrand( iAm.EnumBrand.Lunascape, who.brand.Lunascape.NAVIGATOR_VERSION );
        return true;
    };
};
