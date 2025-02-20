goog.provide( 'who.platform.FeaturePhone.is' );
goog.provide( 'who.platform.FeaturePhone.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Feature Phone
 *
 *  https://qiita.com/nao_tuboyaki/items/342bffd963f166393045
 *  ガラケーのフルブラウザ判定
 */

/** @return {boolean} */
who.platform.FeaturePhone.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, 'FOMA;' ) || who.util.hasSubstring( who.env.strUserAgent, 'SoftBank;' );
};

/** @return {boolean|void} */
who.platform.FeaturePhone.detect = function(){
    if( who.platform.FeaturePhone.is() ){
        who.base.setPlatform( iAm.EnumPlatform.Feature_Phone );
        who.result.deviceType = iAm.EnumDeviceType.PHONE;
        return true;
    };
};
