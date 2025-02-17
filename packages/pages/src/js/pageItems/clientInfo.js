goog.provide( 'pageItems.clientInfo' );

goog.require( 'util.print' );

goog.scope(
    function(){
        var navigarorProperties = [ 'userAgent', 'appVersion', 'appCodeName', 'appName', 'buildID', 'securitypolicy', 'oscpu', 'platform', 'product', 'productSub', 'vendor', 'vendorSub' ];
        var i = 0, l = navigarorProperties.length;
        var html = [], value;

        for( ; i < l; ++i ){
            value = navigator[ navigarorProperties[ i ] ];
            if( value ){
                html.push(
                    '<tr><th>' + navigarorProperties[ i ] +
                    '<td>' + value.split( '&' ).join( '&amp;' ).split( '<' ).join( '&lt;' )
                );
            };
        };
        if( html.length ){
            util.print(
                '<details>' +
                    '<summary>navigator</summary>' +
                    '<table class="nav" border=1 cellspacing=0>' +
                        html.join( '' ) +
                    '</table>' +
                '</details>'
            );
        };
    }
);
