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
           who.util.getVersionString( who.env.strUserAgent, 'Edge/' ); // Windows + EdgeHTML

/**
 * https://qiita.com/Ungaahhhh/items/980316d11c55acecbfa5
 * Edge のユーザーエージェントがいろいろとひどい
 * @const {string} */
who.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML =
           who.util.getVersionString( who.env.strUserAgent, 'EdgA/'   )  // Android
        || who.util.getVersionString( who.env.strUserAgent, 'EdgiOS/' )  // iOS
        || who.util.getVersionString( who.env.strUserAgent, 'Edg/'    ); // Chromium based Microsoft Edge(MSEdge)

/**
 * @package
 * @return {boolean} */
who.brand.Edge.is = function(){
    return who.result.engineName === iAm.EnumEngine.EdgeHTML || who.result.engineName === iAm.EnumEngine.Edge_Mobile ||
           !!who.brand.Edge.NAVIGATOR_VERSION ||
           !!who.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML;
};

/** @return {boolean|void} */
who.brand.Edge.detect = function(){
    if( who.brand.Edge.is() ){
        who.base.setBrand(
            iAm.EnumBrand.Edge,
            who.result.engineName === iAm.EnumEngine.EdgeHTML || who.result.engineName === iAm.EnumEngine.Edge_Mobile
                ? who.result.engineVersion
                : ( who.brand.Edge.NAVIGATOR_VERSION || who.brand.Edge.NAVIGATOR_VERSION_NOT_EDGE_HTML )
            );
        return true;
    };
};
