goog.provide( 'whatBrowserAmI.platform.FeaturePhone.is' );
goog.provide( 'whatBrowserAmI.platform.FeaturePhone.detect' );

/*----------------------------------------------------------------------------//
 *  Feature Phone
 *
 *  https://qiita.com/nao_tuboyaki/items/342bffd963f166393045
 *  ガラケーのフルブラウザ判定
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.FeaturePhone = {};

/** @const {boolean} */
whatBrowserAmI.platform.FeaturePhone.is = function(){
    return p_hasSubstring( p_strUserAgent, 'FOMA;' ) || p_hasSubstring( p_strUserAgent, 'SoftBank;' );
};

/** @return {boolean|void} */
whatBrowserAmI.platform.FeaturePhone.detect = function(){
    if( whatBrowserAmI.platform.FeaturePhone.is() ){
        p_setPlatform( PLATFORM.FeaturePhone );
        p_deviceType = DEVICE_TYPE.Phone;
        return true;
    };
};
