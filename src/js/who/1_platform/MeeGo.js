goog.provide( 'who.platform.MeeGo.is' );
goog.provide( 'who.platform.MeeGo.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  MeeGo
 */

/** @return {boolean} */
who.platform.MeeGo.is = function(){
    return who.util.hasSubstring( who.env.strUserAgent, 'MeeGo' );
};

/** @return {boolean|void} */
who.platform.MeeGo.detect = function(){
    if( who.platform.MeeGo.is() ){
        who.base.setPlatform( iAm.EnumPlatform.MeeGo );
        return true;
    };
};
