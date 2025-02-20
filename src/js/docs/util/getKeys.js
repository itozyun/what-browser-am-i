goog.provide( 'util.getKeys' );

goog.require( 'core.hasOwnProperty' );

/**
 * Object.keys polifill
 * @param {!Object | !Function} obj 
 * @return {!Array.<string>}
 */
util.getKeys = function( obj ){
    /**
     * @param {!Object} instance 
     * @param {string} property 
     * @return {boolean} 
     */
    function hasOwnProperty(instance, property) {
        if(instance.hasOwnProperty){
            return instance.hasOwnProperty(property);
        };
        return core.hasOwnProperty(instance, property);
    };

    if( Object.keys ){
        return Object.keys( obj );
    };
    var property, keys = [];

    for( property in obj ){
        if( hasOwnProperty( obj, property ) ){
            keys.push( property );
        };
    };
    return keys;
};
