goog.provide( 'util.getOwnPropertySymbols' );

/**
 * Object.getOwnPropertySymbols
 * 
 * @param {!Object | !Function} obj 
 * @return {!Array.<symbol>}
 */
util.getOwnPropertySymbols = function( obj ){
    if( Object.getOwnPropertySymbols ){
        return Object.getOwnPropertySymbols( obj );
    } else {
        return [];
    };
};
