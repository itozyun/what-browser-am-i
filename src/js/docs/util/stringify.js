goog.provide( 'util.stringify' );

goog.require( 'JSON2.stringify' );

util.stringify = function( array ){
    if( window.JSON ){
        return JSON.stringify( array, null, '    ' );
    };
    return JSON2.stringify( array, null, '    ' );
};
