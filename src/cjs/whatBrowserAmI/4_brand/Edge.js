goog.provide( 'whatBrowserAmI.brand.Edge.is' );
goog.provide( 'whatBrowserAmI.brand.Edge.detect' );

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Edge = {};

/** @const {string} */
whatBrowserAmI.brand.Edge.NAVIGATOR_VERSION =
           p_getVersionString( p_strUserAgent, 'Edge/' ); // Windows + EdgeHTML

/**
 * https://qiita.com/Ungaahhhh/items/980316d11c55acecbfa5
 * Edge のユーザーエージェントがいろいろとひどい
 * @const {string} */
whatBrowserAmI.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML =
           p_getVersionString( p_strUserAgent, 'EdgA/'   )  // Android
        || p_getVersionString( p_strUserAgent, 'EdgiOS/' )  // iOS
        || p_getVersionString( p_strUserAgent, 'Edg/'    ); // Chromium based Microsoft Edge(MSEdge)

/*----------------------------------------------------------------------------//
 *  Edge
 */
/** @const {boolean} */
whatBrowserAmI.brand.Edge.is = function(){
    return p_engineName === ENGINE.EdgeHTML || p_engineName === ENGINE.EdgeMobile ||
           !!whatBrowserAmI.brand.Edge.NAVIGATOR_VERSION ||
           !!whatBrowserAmI.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Edge.detect = function(){
    if( whatBrowserAmI.brand.Edge.is() ){
        p_setBrand(
            BRAND.Edge,
            p_engineName === ENGINE.EdgeHTML || p_engineName === ENGINE.EdgeMobile
                ? p_engineVersion
                : ( whatBrowserAmI.brand.Edge.NAVIGATOR_VERSION || whatBrowserAmI.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML )
            );
        return true;
    };
};
