goog.provide( 'who.brand.Edge.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML' );
goog.provide( 'who.brand.Edge.is' );
goog.provide( 'who.brand.Edge.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Edge
 */

/** @const {string} */
who.brand.Edge.NAVIGATOR_VERSION =
           p_getVersionString( p_strUserAgent, 'Edge/' ); // Windows + EdgeHTML

/**
 * https://qiita.com/Ungaahhhh/items/980316d11c55acecbfa5
 * Edge のユーザーエージェントがいろいろとひどい
 * @const {string} */
who.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML =
           p_getVersionString( p_strUserAgent, 'EdgA/'   )  // Android
        || p_getVersionString( p_strUserAgent, 'EdgiOS/' )  // iOS
        || p_getVersionString( p_strUserAgent, 'Edg/'    ); // Chromium based Microsoft Edge(MSEdge)

/**
 * @package
 * @return {boolean} */
who.brand.Edge.is = function(){
    return p_engineName === EnumEngine.EdgeHTML || p_engineName === EnumEngine.Edge_Mobile ||
           !!who.brand.Edge.NAVIGATOR_VERSION ||
           !!who.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML;
};

/** @return {boolean|void} */
who.brand.Edge.detect = function(){
    if( who.brand.Edge.is() ){
        p_setBrand(
            EnumBrand.Edge,
            p_engineName === EnumEngine.EdgeHTML || p_engineName === EnumEngine.Edge_Mobile
                ? p_engineVersion
                : ( who.brand.Edge.NAVIGATOR_VERSION || who.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML )
            );
        return true;
    };
};
