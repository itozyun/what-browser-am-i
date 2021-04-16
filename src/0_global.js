var
    /** @define {boolean} */
    WHAT_BROWSER_AM_I_DEFINE_BRAND_ENABLED            = true,
    /** @define {boolean} */
    WHAT_BROWSER_AM_I_DEFINE_PCSITE_REQUESTED_ENABLED = true,
    /** @define {boolean} */
    WHAT_BROWSER_AM_I_DEFINE_IOS_DEVICE_ENABLED       = true,
    /** @define {boolean} */
    WHAT_BROWSER_AM_I_DEFINE_DEVICE_TYPE_ENABLED      = true,
    
    WHAT_BROWSER_AM_I_DEVICE_TYPE_PC           = 1,
    WHAT_BROWSER_AM_I_DEVICE_TYPE_PHONE        = 2,
    WHAT_BROWSER_AM_I_DEVICE_TYPE_TABLET       = 3,
    WHAT_BROWSER_AM_I_DEVICE_TYPE_EBOOK_READER = 4,
    WHAT_BROWSER_AM_I_DEVICE_TYPE_MEDIA_PLAYER = 5,
    WHAT_BROWSER_AM_I_DEVICE_TYPE_TV           = 6,
    WHAT_BROWSER_AM_I_DEVICE_TYPE_GAME         = 7,
    WHAT_BROWSER_AM_I_DEVICE_TYPE_PDA          = 8;

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
    