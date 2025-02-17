goog.provide( 'util.getElementByName' );

/**
 * 
 * @param {string} name 
 * @return {!Element | void}
 */
util.getElementByName = function( name ){
    if( document.getElementsByName ){
        return document.getElementsByName( name )[ 0 ];
    // } else if( document.all ){
    //    return document.all.tags( name )[ 0 ];
    } else {
        return document[ name ] || window[ name ];
    };
};
