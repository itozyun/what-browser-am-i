goog.provide( 'whatBrowserAmI.util' );

/** @const */
var p_conpareVersion = ua.conpare;

/**
 * 
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
function p_getNumber( str1, str2 ){
    var n = parseFloat( str1.split( str2 )[ 1 ] );
    return 0 <= n ? n : 0;
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function p_startWith( str1, str2 ){
    return str1.indexOf( str2 ) === 0;
};

/**
 * @param {string} str1 
 * @param {string} str2 
 * @return {boolean}
 */
function p_hasSubstring( str1, str2 ){
    return 0 <= str1.indexOf( str2 );
};

/**
 * @param {string} str 
 * @return {boolean}
 */
function p_hasLinuxCPUString( str ){
    return p_hasSubstring( str, 'Linux armv'   ) || // armv7l, armv8l
           p_hasSubstring( str, 'Linux aarch'  ) || // aarch32, aarch64
           p_hasSubstring( str, 'Linux i686'   ) ||
           p_hasSubstring( str, 'Linux x86_64' )
};

/**
 * `if(name in obj)` が使えない IE ~5 用
 * @param {string} name
 * @param {!Object} obj
 * @return {boolean|void}
 */
function p_inObject( name, obj ){
    for( var k in obj ){
        if( k === name ) return true;
    };
};

/**
 * 
 * @param {string} strTarget
 * @param {string} strStart
 * @return {string}
 */
function p_getVersionString( strTarget, strStart ){
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
function p_getAppleVersionString( strTarget, strStart ){
    return p_getVersionString( strTarget.split( '_' ).join( '.' ), strStart );
};

/**
 * @param {...(string|number)} _args
 * @return {string|number}
 */
function p_maxVersion( _args ){
    var args = arguments, i = 1, max = args[ 0 ], v;
    
    for( ; i < args.length; ++i ){
        v = args[ i ];
        if( p_conpareVersion( max, v ) < 0 ){
            max = v;
        };
    };
    return max;
};

/**
 * @param {string|number|VersionRange} v 
 * @return {string} 
 */
function p_toVersionString( v ){
    if( v === v + '' ){
        return v;
    };
    if( v === v - 0 ){
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
function p_toVersionNumber( v ){
    if( v === v + '' ){
        return parseFloat( v );
    };
    return /** @type {number} */ (v);
};