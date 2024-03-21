goog.provide( 'whatBrowserAmI.platform.MeeGo.is' );
goog.provide( 'whatBrowserAmI.platform.MeeGo.detect' );

/*----------------------------------------------------------------------------//
 *  MeeGo
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.MeeGo = {};

/** @const {boolean} */
whatBrowserAmI.platform.MeeGo.is = function(){
    return p_hasSubstring( p_strUserAgent, 'MeeGo' );
};

/** @return {boolean|void} */
whatBrowserAmI.platform.MeeGo.detect = function(){
    if( whatBrowserAmI.platform.MeeGo.is() ){
        p_setPlatform( PLATFORM.MeeGo );
        return true;
    };
};
