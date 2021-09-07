function toVersionString( v ){
    if( v === v + '' ){
        return v;
    };
    if( v === v - 0 ){
        return '' + v;
    };
    return v.min && v.max ?
              v.min + '~' + v.max :
           v.min ?
            v.min + '~' :
            '~' + v.max;
};

function toValue( v ){
    if( v === v + '' ){
        return parseFloat( v );
    };
    return v;
};

if( platform ){
    ua.PLATFORM = platform;
    if( platformVersion ){
        ua.PLATFORM_VERSION = toVersionString( platformVersion );
        ua[ platform ] = toValue( platformVersion );
    } else {
        ua[ platform ] = true;
    };
};

if( engine ){
    ua.ENGINE = engine;
    if( engineVersion ){
        // 数値はそのまま。文字列は数値化して。
        // 生のバージョン文字列も ua.ENGINE_VERSION に記録
        ua.ENGINE_VERSION = toVersionString( engineVersion );
        ua[ engine ] = toValue( engineVersion );
    } else {
        ua[ engine ] = true;
    };

    // brand が無い場合は、engine をコピー。
    if( !brand ){
        brand        = engine;
        brandVersion = engineVersion;
    };
};

if( DEFINE_WHAT_BROWSER_AM_I__BRAND_ENABLED && brand ){
    ua.BRAND = brand;
    if( brandVersion ){
        ua.BRAND_VERSION = toVersionString( brandVersion );
        ua[ brand ] = toValue( brandVersion );
    } else {
        ua[ brand ] = true;
    };
};

if( DEFINE_WHAT_BROWSER_AM_I__IOS_DEVICE_ENABLED && device ){
    ua.DEVICE = device;
    if( deviceVersion ){
        ua.DEVICE_VERSION = toVersionString( deviceVersion );
        ua[ device ] = toValue( deviceVersion );
    } else {
        ua[ device ] = true;
    };
};

if( DEFINE_WHAT_BROWSER_AM_I__PCSITE_REQUESTED_ENABLED ){
    if( isPcSiteRequested || is_iPadOsPcSiteRequested ) ua.PCSITE_REQUESTED = true;
};

if( DEFINE_WHAT_BROWSER_AM_I__DEVICE_TYPE_ENABLED ){
    ua.DEVICE_TYPE = deviceTypeIsPDA         ? WHAT_BROWSER_AM_I__DEVICE_TYPE_PDA :
                     deviceTypeIsGame        ? WHAT_BROWSER_AM_I__DEVICE_TYPE_GAME :
                     deviceTypeIsTV          ? WHAT_BROWSER_AM_I__DEVICE_TYPE_TV   :
                     deviceTypeIsMediaPlayer ? WHAT_BROWSER_AM_I__DEVICE_TYPE_MEDIA_PLAYER :
                     deviceTypeIsEBookReader ? WHAT_BROWSER_AM_I__DEVICE_TYPE_EBOOK_READER :
                     deviceTypeIsPhone       ? WHAT_BROWSER_AM_I__DEVICE_TYPE_PHONE        :
                     deviceTypeIsTablet      ? WHAT_BROWSER_AM_I__DEVICE_TYPE_TABLET       :
                     deviceTypeIsPC          ? WHAT_BROWSER_AM_I__DEVICE_TYPE_PC           : 0;
};