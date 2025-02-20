goog.provide( 'iAm.conpare' );

/** バージョンの比較
 * @param {string|number} v1 
 * @param {string|number} v2 
 * @return {number}  1:v1 > v2, 0:v1 == v2, -1:v1 < v2 */
iAm.conpare = function( v1, v2 ){
    /** @type {number} */
    var i = 0;
    /** @type {!Array.<string>} */
    var a1 = ( v1 + '' ).split( '.' );
    /** @type {!Array.<string>} */
    var a2 = ( v2 + '' ).split( '.' );
    /** @type {number} */
    var l1 = a1.length;
    /** @type {number} */
    var l2 = a2.length;
    /** @type {number} */
    var l, n1, n2;

    while( !( + a1[ l1 - 1 ] ) ){
        --l1;
    };
    while( !( + a2[ l2 - 1 ] ) ){
        --l2;
    };
    l = l1 < l2 ? l1 : l2;

    for( ; i < l; ++i ){
        n1 = + a1[ i ];
        n2 = + a2[ i ];
        if( n1 !== n2 ){
            return n1 > n2 ? 1 : -1;
        };
    };
    return l1 > l2 ? 1 : l1 === l2 ? 0 : -1;
};
