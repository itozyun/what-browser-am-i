goog.provide( 'who.platform.MeeGo.is' );
goog.provide( 'who.platform.MeeGo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  MeeGo
 */

/** @return {boolean} */
who.platform.MeeGo.is = function(){
    return p_hasSubstring( p_strUserAgent, 'MeeGo' );
};

/** @return {boolean|void} */
who.platform.MeeGo.detect = function(){
    if( who.platform.MeeGo.is() ){
        p_setPlatform( PLATFORM.MeeGo );
        return true;
    };
};
