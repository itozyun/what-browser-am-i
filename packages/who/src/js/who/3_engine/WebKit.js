goog.provide( 'who.engine.WebKit.is' );
goog.provide( 'who.engine.WebKit.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  WebKit
 */

/** @return {boolean} */
who.engine.WebKit.is = function(){
    return !!p_numberWebKit;
};

/** @return {boolean|void} */
who.engine.WebKit.detect = function(){
    if( who.engine.WebKit.is() ){
        p_setEngine( ENGINE.WebKit, p_numberWebKit );
        return true;
    };
};
