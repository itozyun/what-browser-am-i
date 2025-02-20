goog.provide( 'pageItems.clientInfo' );

goog.require( 'util.print' );


        var navigarorProperties = [ 'userAgent', 'appVersion', 'appCodeName', 'appName', 'buildID', 'securitypolicy', 'oscpu', 'platform', 'product', 'productSub', 'vendor', 'vendorSub' ];
        var j = 0, l = navigarorProperties.length;
        var html = [], value;

        for( ; j < l; ++j ){
            value = navigator[ navigarorProperties[ j ] ];
            if( value ){
                html.push(
                    '<tr><th>' + navigarorProperties[ j ] +
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

