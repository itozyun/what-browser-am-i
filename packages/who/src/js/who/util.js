goog.provide( 'who.util' );

/** バージョンの比較
 * @param {string|number|void} v1 
 * @param {string|number|void} v2 
 * @return {number}  1:v1 > v2, 0:v1 == v2, -1:v1 < v2
 */
who.util.conpareVersion = function( v1, v2 ){
    return !v1 || !v2 ? NaN : ua.conpare( v1, v2 );
};

/**
 * 
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
who.util.getNumber = function( str1, str2 ){
    var n = parseFloat( str1.split( str2 )[ 1 ] );
    return 0 <= n ? n : 0;
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
who.util.startWith = function( str1, str2 ){
    return str1.indexOf( str2 ) === 0;
};

/**
 * @param {string} str1 
 * @param {string} str2 
 * @return {boolean}
 */
who.util.hasSubstring = function( str1, str2 ){
    return 0 <= str1.indexOf( str2 );
};

/**
 * @param {string} str 
 * @return {boolean}
 */
who.util.hasLinuxCPUString = function( str ){
    return who.util.hasSubstring( str, 'Linux armv'   ) || // armv7l, armv8l
           who.util.hasSubstring( str, 'Linux aarch'  ) || // aarch32, aarch64
           who.util.hasSubstring( str, 'Linux i686'   ) ||
           who.util.hasSubstring( str, 'Linux x86_64' )
};

/**
 * 
 * @param {string} strTarget
 * @param {string} strStart
 * @return {string}
 */
who.util.getVersionString = function( strTarget, strStart ){
    var str = /** @type {string|void} */ (strTarget.split( strStart )[ 1 ]),
        ret = '', i = -1, charCode;

    if( str ){
        str = /** @type {string} */ (str);
        while( charCode = str.charCodeAt( ++i ) ){
            if( ( 48 <= charCode && charCode <= 57 ) || charCode === 46 ){
                ret += str.charAt( i );
            } else {
                break;
            };
        };
        i = ret.length;
        while( i ){
            if( ret.charCodeAt( --i ) === 46 ){
                ret = ret.substr( 0, i );
            } else {
                break;
            };
        };
    };
    return ret;
};

/**
 * 
 * @param {string} strTarget
 * @param {string} strStart
 * @return {string}
 */
who.util.getAppleVersionString = function( strTarget, strStart ){
    return who.util.getVersionString( strTarget.split( '_' ).join( '.' ), strStart );
};

/**
 * @param {...(string|number)} _args
 * @return {string|number}
 */
who.util.maxVersion = function( _args ){
    var args = arguments, i = 1, max = args[ 0 ], v;
    
    for( ; i < args.length; ++i ){
        v = args[ i ];
        if( !max || who.util.conpareVersion( max, v ) < 0 ){
            max = v;
        };
    };
    return max;
};

/**
 * @param {string|number|VersionRange} v 
 * @return {string} 
 */
who.util.toVersionString = function( v ){
    if( core.isString( v ) ){
        return v;
    };
    if( core.isNumber( v ) ){
        return '' + v;
    };
    v = /** @type {VersionRange} */ (v);
    return v.min && v.max
               ? v.min + '~' + v.max
               : v.min
                   ? v.min + '~'
                   : '~' + v.max;
};

/**
 * @param {string|number} v 
 * @return {number}
 */
who.util.toVersionNumber = function( v ){
    if( core.isString( v ) ){
        return parseFloat( v );
    };
    return /** @type {number} */ (v);
};
