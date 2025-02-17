goog.provide( 'pageItems.collectProperties' );

goog.provide( 'global.phase' );
goog.require( 'global.currentPath' );
goog.require( 'util.getElementByName' );
goog.provide( 'util.getKeys' );
goog.provide( 'util.getOwnPropertyNames' );
goog.provide( 'util.getOwnPropertySymbols' );
goog.provide( 'util.isInstanceOfNode' );
goog.require( 'global.ERROR_MESSAGE_AREA_NAME' );
goog.require( 'global.nodeMessage' );
goog.provide( 'util.print' );
goog.provide( 'util.stringify' );
goog.provide( 'global.errorEventHandler' );
goog.provide( 'global.originalValueOfOnError' );

goog.scope(
    function(){
        /**
         * @param {string | symbol} val 
         * @return {string} */
        function symbolToString( val ){
            if( typeof val === 'symbol' ){
                return val.toString(); // + '[' +  */ val.description //  + ']';
            };
            return val;
        };

        /**
         * 
         * @param {!Function} clazz 
         * @return {!Function | null} */
        function getSuperClass( clazz ){
            var superClass = clazz.prototype ? clazz.prototype.__proto__ && clazz.prototype.__proto__.constructor : null;
        
            return clazz !== superClass ? superClass : null;
        };

        /**
         * 
         * @param {string} name 
         * @return {boolean} */
        function isClassName( name ){
            return name.charAt( 0 ).toUpperCase() === name.charAt( 0 );
        };

        /**
         * [
         *   [
         *     2n+0 : string | symbol,
         *     2n+1 : boolean
         *   ]
         * ]
         * @param {!Object | !Function} obj
         * @param {string} name
         * @return {!Array.<!Array.<string | symbol | boolean>>} */
        function collectAllKeys( obj, name ){
            function swapCase( str ){
                var charList = str.split( '' ), i = 0, l = charList.length, chr;

                for( ; i < l; ++i ){
                    chr = charList[ i ];
                    charList[ i ] = chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase();
                };
                return charList.join( '' );
            };

            var toTopOfList = 'Object,Function,Array,String,Number,Boolean,Symbol,EventTarget,Node,Element,HTMLElement,HTMLAudioElement,Event'.split( ',' );

            // Chrome 1
            var notEnumPrimitiveClasses = 'Object,Function,Array,String,Number,Boolean,Math'.split( ',' );
            //alert( 1 )
            var isPrototype = name === 'prototype',
                isObject    = typeof obj !== 'function',
                allKeys     = [],
                properties  = util.getOwnPropertyNames( obj ),
                keys        = isObject && !isPrototype ? [] : util.getKeys( obj ),
                symbols     = util.getOwnPropertySymbols( obj ),
                property, i, l, propAndNotEnum, superClass, j, inList, sort;
                //alert( 2 )
            if( !isPrototype ){
                if( isObject ){
                    for( property in obj ){
                        if( !( 0 <= property ) ){
                            // alert( property )
                            keys.push( property );
                        };
                    };
                } else {
                    if( isClassName( name ) ){
                        allKeys.push( [ __super__, true ] );
                    };
                };
            };

            if( !isObject && !keys.length && !properties.length && isClassName( name ) ){ // Chrome 1
                properties.push( 'prototype' );
            };

            for( i = 0, l = keys.length; i < l; ++i ){
                property = keys[ i ];
                if( !( 0 <= property ) ){
                    allKeys.push( [ property, false ] );
                };
            };
            for( i = 0, l = properties.length; i < l; ++i ){
                property = properties[ i ];
                if( keys.indexOf( property ) === -1 ){
                    if( !( 0 <= property ) ){ // Numeric property
                        allKeys.push( [ property, true ] );
                    };
                };
            };

            symbols.sort(
                function( sym1, sym2 ){
                    return swapCase( sym1.toString() ) < swapCase( sym2.toString() ) ? -1 : 1;
                }
            );
            allKeys.sort(
                function( ary1, ary2 ){
                    return swapCase( ary1[ 0 ] ) < swapCase( ary2[ 0 ] ) ? -1 : 1;
                }
            );

            if( obj === window ){
                // alert( 3 )
                while( toTopOfList.length ){
                    property = toTopOfList.pop();
                    for( i = 0, l = allKeys.length; i < l; ++i ){
                        if( property === allKeys[ i ][ 0 ] ){
                            propAndNotEnum = allKeys[ i ];
                            allKeys.splice( i, 1 );
                            allKeys.unshift( propAndNotEnum );
                            break;
                        };
                    };
                };
                // alert( 4 )
                while( notEnumPrimitiveClasses.length ){
                    inList = false;
                    property = notEnumPrimitiveClasses.pop();
                    for( i = 0, l = allKeys.length; i < l; ++i ){
                        if( property === allKeys[ i ][ 0 ] ){
                            inList = true;
                            break;
                        };
                    };
                    if( !inList ){
                        allKeys.unshift( [ property, true ] );
                    };
                };
                // alert( 5 )
                do {
                    sort = false;
                    // Super Class を先へ
                    for( i = 0, l = allKeys.length; i < l; ++i ){
                        property = allKeys[ i ][ 0 ];
                        // alert( property )
                        if( isClassName( property ) && typeof obj[ property ] === 'function' ){
                            if( property !== 'XPCNativeWrapper' ){ // Gecko 1.8.1
                                superClass = getSuperClass( obj[ property ] );
                                // alert( 6 + ' ' + property )
                                if( superClass && superClass !== Object ){
                                    for( j = i; j < l; ++j ){
                                        propAndNotEnum = allKeys[ j ];
                                        // if( propAndNotEnum[ 0 ] !== 'prompter' ){ // Gecko 0.9.5
                                            if( isClassName( propAndNotEnum[ 0 ] ) && obj[ propAndNotEnum[ 0 ] ] === superClass ){
                                                allKeys.splice( j, 1 );
                                                allKeys.splice( i, 0, propAndNotEnum );
                                                ++i;
                                                sort = true;
                                                break;
                                            };
                                        // };
                                    };
                                };
                            };
                        };
                    };
                } while( sort );
            };

            for( i = 0, l = symbols.length; i < l; ++i ){
                allKeys.push( [ symbols[ i ], true ] );
            };
            allPropertiesCount += allKeys.length;
            return allKeys;
        };

        function loop(){
            function createDir(){
                var i = 0, l = allKeyList.length, dir = '', propAndNotEnum;

                for( ; i < l; ++i ){
                    propAndNotEnum = allKeyList[ i ][ 0 ];
                    if( propAndNotEnum ){
                        dir += '.' + symbolToString( /** @type {string | symbol} */ (propAndNotEnum[ 0 ]) );
                    };
                };
                return dir.substr( 1 );
            };
            /** @type {!Object | !Function | null} */
            var nextObject = null;
            /** @type {!BrowserRawProperties | null} */
            var nextCollection = null;
            var propAndNotEnum, currentHierarchy, currentObject, result, msg, preMessage, tbl;

            ++retryCount;
            callStack = 0;

            if( failureToCollect ){
                properties.push( symbolToString( currentProperty ), [ '>_<' ] );
            };

            while( allKeyList.length ){
                currentHierarchy = 
                    /**
                     * [2n+0] string property
                     * [2n+1] boolean notEnumerable
                     * @type {!Array.<!Array.<string | symbol | boolean>>} */
                    (allKeyList[ allKeyList.length - 1 ]);
                currentObject =
                    /** @type {!Object | !Function} */ (objectList[ objectList.length - 1 ]);

                properties = propertiesList[ propertiesList.length - 1 ];

                while( currentHierarchy.length ){
                    global.nodeMessage.value = global.currentPath = createDir();
                    propAndNotEnum   = /** @type {!Array.<string | symbol | boolean>} */ (currentHierarchy.shift());
                    currentProperty  = /** @type {string | symbol} */ (propAndNotEnum[ 0 ]);
                    notEnumerable    = /** @type {boolean} */ (propAndNotEnum[ 1 ]);
                    failureToCollect = true;
                    nextObject       = collect( properties, currentObject, currentProperty, notEnumerable );
                    failureToCollect = false;
                    if( nextObject ){
                        if( typeof nextObject === 'function' ){
                            nextCollection = [ ( + getValue( nextObject, 'length', {} ) ) || 'Error!' ];
                            currentProperty += '()';
                        } else {
                            nextCollection = [];
                        };
                        properties.push( symbolToString( currentProperty ), /** @type {!BrowserRawProperties} */ (nextCollection) );
                        break;
                    };
                    if( iAm.Presto.lt( 7.2 ) ){
                        if( 10 < ++callStack ){
                            break;
                        };
                    };
                };
                if( !nextObject ){
                    --allKeyList.length;
                    --objectList.length;
                    --propertiesList.length;
                    currentHierarchy = allKeyList[ allKeyList.length - 1 ];
                    if( currentHierarchy ){
                        currentHierarchy.shift(); // 上の階層に移動した場合、先頭を削除
                    };
                } else {
                    currentHierarchy.unshift( propAndNotEnum ); // 下の Hierarchy が出来た場合、戻す
                    allKeyList.push( collectAllKeys( nextObject, currentProperty ) );
                    objectList.push( nextObject );
                    propertiesList.push( /** @type {!BrowserRawProperties} */ (nextCollection) );
                };
                nextObject = nextCollection = null;
            };
            if( !allKeyList.length ){
                // print( '<p readonly name=' + Date.now() + '>result.error  : "' + result.error  + '"</p>' );
                // print( '<p readonly name=' + Date.now() + '>global.currentPath : "' + global.currentPath + '"</p>' );
                result = util.stringify( allProperties ).split( '&' ).join( '&amp;' ).split( '<' ).join( '&lt;' );
                msg = 'Complete! retry: ' + retryCount + ' time: ' + ( ( + new Date ) - startTime + ' props: ' + allPropertiesCount + ' skipped:' + skippedPropertiesCount );
                if( !iAm.Servo() ){
                    util.getElementByName( 'propertiesList' ).value = result;
                    global.nodeMessage.value = msg;
                } else {
                    preMessage = document.createElement( 'pre' );
                    tbl = document.body.getElementsByTagName( 'table' )[ 0 ];
                    tbl.parentNode.insertBefore( preMessage, tbl );
                    // preMessage.innerHTML = result;
                    preMessage.innerHTML = msg;
                };
                clearInterval( timerID );
            };
        };

        /**
         * 
         * @param {!Array.<!BrowserRawProperties> | !BrowserRawProperties} properties 
         * @param {!Object | !Function} obj 
         * @param {string | symbol} property 
         * @param {boolean} nonenum */
        function collect( properties, obj, property, nonenum ){
            var errorOccered = {}, value, node, returnValue, originalProperty = property, indexFound;

            if( property === 'external' && iAm.AnyTrident.lt( 5 ) ){
                // for in ループを回すとエラーになる object
                properties.push( property, [ property ] );
            } else if( 0 <= [ 'Packages', 'sun', 'java', 'globalStorage', 'localStorage', 'sessionStorage' ].indexOf( property ) && iAm.Gecko.lt( 1.9 ) ){
                // for in ループを回すとエラーになる object
                properties.push( property, [ property ] );
            } else if( property === 'localStorage' && iAm.AnyPresto.gte( '10.50' ) && iAm.AnyPresto.lt( 11 ) ){
                // for in ループを回すとエラーになる object
                properties.push( property, [ property ] );
            } else if( global.currentPath === 'history.current' && iAm.Gecko.lt( 1.9 ) ){
                // get すると error になる
                properties.push( property, [ property ] );
            } else if( 0 < global.currentPath.indexOf( '.constructor.constructor' ) && iAm.AnyPresto.lt( '10.50' ) ){
                // 循環する java, netscape, sun
                properties.push( property, [ property ] );
            } else if( property === __super__ && !( ( value = getSuperClass( /** @type {!Function} */ (obj) ) ) && value !== Object ) ){
                --allPropertiesCount;
            } else if( property === onLoopName ){
                ++skippedPropertiesCount;
            } else if( property === global.ERROR_MESSAGE_AREA_NAME ){
                ++skippedPropertiesCount;
            } else if( patchForOpera && obj === window && ( node = util.getElementByName( /** @type {string} */ (property) ) ) && util.isInstanceOfNode( node ) ){
                ++skippedPropertiesCount;
            } else if( obj === document && ( node = util.getElementByName( /** @type {string} */ (property) ) ) && util.isInstanceOfNode( node ) ){
                ++skippedPropertiesCount;
                // console.log( 'document', property );
            } else if( typeof obj === 'function' && ( property === 'arguments' || property === 'callee' || property === 'caller' ) ){
                if( !functionProperties[ property ] ){
                    properties.push( property, [ property ] );
                    functionProperties[ property ] = true;
                };
                ++skippedPropertiesCount;
            } else if( typeof obj === 'function' && ( property === 'name' || property === 'length' ) ){
                ++skippedPropertiesCount;
            } else {
                if( property !== __super__ ){
                    value = getValue( obj, property, errorOccered );

                    property = symbolToString( property );
                };

                if( value === errorOccered ){
                    properties.push( property, [ ( errorOccered.error.name || 'o_O' ) ] );
                } else {
                    indexFound = foundObjects.indexOf( value );
                    if( 0 <= indexFound ){
                        if( value !== Function.prototype[ property ] ){
                            if( property === 'constructor' ){
                                properties.push( property, [ foundObjectNames[ indexFound ] ] );
                            } else if( typeof value === 'function' ){
                                if( value !== Function ){
                                    properties.push( property, [ 'ref:' + foundObjectNames[ indexFound ] ] );
                                } else if( property === __super__ ){
                                    --allPropertiesCount;
                                };
                            } else {
                                properties.push( property, [ 'ref:' + symbolToString( property ) ] );
                            };
                        };
                        ++skippedPropertiesCount;
                    } else {
                        if( value === global.errorEventHandler ){
                            value = global.originalValueOfOnError;
                        };
                        if( nonenum ){
                            property = '- ' + property;
                        };

                        if( value === null ){
                            properties.push( property, null );
                        } else if( value === undefined ){
                            properties.push( property, [ 'undefined' ] );
                        } else if( value !== value ){
                            properties.push( property, [ 'NaN' ] );
                        } else if( value === window ||
                            originalProperty === 'global' ){ // Chrome 3
                            properties.push( property, [ 'window' ] );
                        } else if( originalProperty === 'clientInformation' && value === navigator ){
                            properties.push( property, [ 'navigator' ] );
                        } else if( originalProperty !== 'prototype' && util.isInstanceOfNode( value ) && value !== document ){
                            properties.push( property, [ value.constructor.name ] );
                        } else {
                            switch( typeof value ){
                                case 'undefined' : // <- document.all
                                    properties.push( property, [ property ] );
                                    break;
                                case 'boolean' :
                                case 'number'  :
                                case 'string'  :
                                    properties.push( property, value );
                                    break;
                                case 'symbol'  :
                                    properties.push( property, symbolToString( value ) );
                                    break;
                                case 'object'  :
                                    foundObjects.push( value );
                                    foundObjectNames.push( originalProperty );
                                    // isNode
                                    // isImage
                                    // isStyleSheets
                                    //} else if( value.constructor === Date ){
                                    //    properties.push( property, [ originalProperty ] );
                                    //} else if( value.constructor === window.RegExp ){
                                    //    properties.push( property, [ originalProperty ] );
                                    if( core.isArray( value ) && originalProperty !== 'prototype' ){
                                        value = core.cloneArray( /** @type {!Array} */ (value) ); // read only array
                                        // value.unshift( Types.ARRAY );
                                        properties.push( property + '[]', value );
                                    } else {
                                        returnValue = true;
                                    };
                                    break;
                                case 'function' :
                                    foundObjects.push( value );
                                    foundObjectNames.push( originalProperty );
                                    returnValue = true;
                                    break;
                                default :
                                    // console.log( global.currentPath + ' unknown typeof ' + typeof value );
                                    ++skippedPropertiesCount;
                                    break;
                            };
                        };
                    };
                };
            };
            return returnValue ? value : null;
        };

        if( !iAm.Servo() ){
            util.print( '<textarea readonly name="propertiesList" cols=80></textarea>' );
        };

        global.phase = 2;

        var retryCount = -1;

        var startTime = + new Date;

        var allPropertiesCount = 0;

        var skippedPropertiesCount = 0;

        /** @const {boolean} */
        var patchForOpera = !!window[ 'opera-8-to-10-copies-meta-tags-to-window' ]; // Opera 8~10.1x, 10.54 で発生しない

        /** @const */
        var foundObjects = [];
        /** @const */
        var foundObjectNames = [];
        /** @const */
        var functionProperties = {};

        /** @const */
        var __super__ = '__super__';

        /**
         * @typedef {!Array.<string | symbol | number | null, !Array.<string | symbol | number | null | !Array>>}
         */
        var BrowserRawProperties;

        /** @type {string | symbol} */
        var currentProperty = '';
        /** @type {boolean} */
        var notEnumerable = false;
        /** @const {!Array.<!Object | !Function>} */
        var objectList = [ window ];
        /**
         * [
         *   ["window"],
         *   ["onload", false, "scrollTop", false, ....] <- currentHierarchy
         * ]
         * 
         * @const {!Array.<!Array.<!Array.<string | symbol | boolean>>>} */
        var allKeyList = [ collectAllKeys( window, 'window' ) ];
        /** @const {!Array.<!BrowserRawProperties>} */
        var allProperties = [];
        /** @type {!Array.<!BrowserRawProperties> | !BrowserRawProperties} */
        var properties = allProperties;
        /** @type {!Array.<!Array.<!BrowserRawProperties> | !BrowserRawProperties>} */
        var propertiesList = [ properties ];
        /** @type {boolean} */
        var failureToCollect = false;
        /** @type {number} */
        var callStack = 0;

        /** @const */
        var onLoopName = '__on_loop__';

        /**
         * @see https://github.com/pettanR/webframework/blob/64ee5fad8cf91c8762fcf8e6a48174757ab30771/js/01_core/16_XTimer.js#L293
         */
        if( iAm.AnyTrident.lt( 5 ) || iAm.Tasman() ){
            window[ onLoopName ] = loop;
            /** @suppress {checkTypes} */
            loop = onLoopName + '()';
        };

        /** @const {function((!Object | !Function), (string | symbol), !Object):* | void} */
        var getValue =
                iAm.AnyTrident.lt( 5 )
                    ? function( obj, property, skip ){ return obj[ property ]; }
                    : new Function( 'o,p,s', 'try{return o[p]}catch(E){s.error=E;return s}' )

        /** @type {number} */
        var timerID = setInterval( loop, 16 );
    }
);
