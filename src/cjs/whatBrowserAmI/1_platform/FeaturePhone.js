goog.provide( 'whatBrowserAmI.platform.FeaturePhone.is' );
goog.provide( 'whatBrowserAmI.platform.FeaturePhone.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Feature Phone
 *
 *  https://qiita.com/nao_tuboyaki/items/342bffd963f166393045
 *  ガラケーのフルブラウザ判定
 */

/** @return {boolean} */
whatBrowserAmI.platform.FeaturePhone.is = function(){
    return p_hasSubstring( p_strUserAgent, 'FOMA;' ) || p_hasSubstring( p_strUserAgent, 'SoftBank;' );
};

/** @return {boolean|void} */
whatBrowserAmI.platform.FeaturePhone.detect = function(){
    if( whatBrowserAmI.platform.FeaturePhone.is() ){
        p_setPlatform( PLATFORM.Feature_Phone );
        p_deviceType = DEVICE_TYPE.PHONE;
        return true;
    };
};
