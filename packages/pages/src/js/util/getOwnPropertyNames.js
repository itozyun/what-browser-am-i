goog.provide( 'util.getOwnPropertyNames' );

/**
 * Object.getOwnPropertyNames
 * 
 * @param {!Object | !Function} obj 
 * @return {!Array.<string>}
 */
util.getOwnPropertyNames = function( obj ){
    if( Object.getOwnPropertyNames ){
        return Object.getOwnPropertyNames( obj );
    } else {
        return [];
    };
};
