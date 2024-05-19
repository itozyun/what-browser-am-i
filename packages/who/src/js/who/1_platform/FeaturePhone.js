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
    return p_hasSubstring( p_strUserAgent, 'FOMA;' ) || p_hasSubstring( p_strUserAgent, 'SoftBank;' );
};

/** @return {boolean|void} */
who.platform.FeaturePhone.detect = function(){
    if( who.platform.FeaturePhone.is() ){
        p_setPlatform( PLATFORM.Feature_Phone );
        p_deviceType = DEVICE_TYPE.PHONE;
        return true;
    };
};
