var
    /** @define {boolean} */
    DEFINE_WHAT_BROWSER_AM_I__MINIFY                   = false,
    /** @define {boolean} */
    DEFINE_WHAT_BROWSER_AM_I__BRAND_ENABLED            = true,
    /** @define {boolean} */
    DEFINE_WHAT_BROWSER_AM_I__PCSITE_REQUESTED_ENABLED = true,
    /** @define {boolean} */
    DEFINE_WHAT_BROWSER_AM_I__IOS_DEVICE_ENABLED       = true,
    /** @define {boolean} */
    DEFINE_WHAT_BROWSER_AM_I__DEVICE_TYPE_ENABLED      = true,

    WHAT_BROWSER_AM_I__INDEX_ENGINE           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 0 : 'ENGINE',
    WHAT_BROWSER_AM_I__INDEX_ENGINE_VERSION   = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 1 : 'ENGINE_VERSION',
    WHAT_BROWSER_AM_I__INDEX_PLATFORM         = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 2 : 'PLATFORM',
    WHAT_BROWSER_AM_I__INDEX_PLATFORM_VERSION = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 3 : 'PLATFORM_VERSION',
    WHAT_BROWSER_AM_I__INDEX_BRAND            = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 4 : 'BRAND',
    WHAT_BROWSER_AM_I__INDEX_BRAND_VERSION    = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 5 : 'BRAND_VERSION',
    WHAT_BROWSER_AM_I__INDEX_DEVICE           = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 6 : 'DEVICE',
    WHAT_BROWSER_AM_I__INDEX_DEVICE_VERSION   = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 7 : 'DEVICE_VERSION',
    WHAT_BROWSER_AM_I__INDEX_DEVICE_TYPE      = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 8 : 'DEVICE_TYPE',
    WHAT_BROWSER_AM_I__INDEX_PCSITE_REQUESTED = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 9 : 'PCSITE_REQUESTED';

    // 続くクロージャへの参照を残さないように、global.js で定義する。
    ua.conpare = function( v1, v2 ){
        var i = 0,
            l1, l2,
            l, n1, n2;

        v1 = ( v1 + '' ).split( '.' );
        v2 = ( v2 + '' ).split( '.' );
        l1 = v1.length;
        l2 = v2.length;
        while( v1[ l1 - 1 ] === '0' ){
            --l1;
        };
        while( v2[ l2 - 1 ] === '0' ){
            --l2;
        };
        l  = l1 < l2 ? l1 : l2;
    
        for( ; i < l; ++i ){
            n1 = v1[ i ] - 0;
            n2 = v2[ i ] - 0;
            if( n1 !== n2 ){
                return n1 > n2 ? 1 : -1;
            };
        };
        return l1 > l2 ? 1 : l1 === l2 ? 0 : -1;
    };