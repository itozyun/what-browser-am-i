// 続くクロージャへの参照を残さないように、global.js で定義する。

/** バージョンの比較
 * @param {string|number} v1 
 * @param {string|number} v2 
 * @return {number}  1:v1 > v2, 0:v1 == v2, -1:v1 < v2
 */
ua.conpare = function( v1, v2 ){
    var i = 0,
        a1 = ( v1 + '' ).split( '.' ),
        a2 = ( v2 + '' ).split( '.' ),
        l1 = a1.length,
        l2 = a2.length,
        l, n1, n2;

    while( a1[ l1 - 1 ] === '0' ){
        --l1;
    };
    while( a2[ l2 - 1 ] === '0' ){
        --l2;
    };
    l = l1 < l2 ? l1 : l2;

    for( ; i < l; ++i ){
        n1 = a1[ i ] - 0;
        n2 = a2[ i ] - 0;
        if( n1 !== n2 ){
            return n1 > n2 ? 1 : -1;
        };
    };
    return l1 > l2 ? 1 : l1 === l2 ? 0 : -1;
};