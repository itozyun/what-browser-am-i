goog.provide( 'pageItems.result' );

goog.require( "catalog.BrandValueToDisplayLabel" );
goog.require( "catalog.DeviceTypeValueToDisplayLabel" );
goog.require( "catalog.DeviceValueToDisplayLabel" );
goog.require( "catalog.EngineValueToDisplayLabel" );
goog.require( "catalog.PlatformValueToDisplayLabel" );
goog.require( 'iAm.EnumIndex' );
goog.require( 'util.getElementByName' );
goog.require( 'util.print' );

goog.scope(
    function(){
        /** @const */
        var PREFIX = 'who';
        /** @const */
        var PREFIXED_PCSITE_REQUESTED = PREFIX + 'pcsiterequested';

        /** @const */
        var PREFIXED_RESET = PREFIX + 'reset';
        /** @const */
        var nameAndSelectedIndexes = {};
        /** @const */
        var nameAndValues = {};

        (function(){
            /**
             * @param {string} label 
             * @param {!Array.<string>} items 
             * @param {string} valueSelected 
             * @param {string|number} versionNumber
             * @param {boolean=} opt_cellMerging
             * @return {string} 
             */
            function createRow( label, items, valueSelected, versionNumber, opt_cellMerging ){
                var name = PREFIX + label.toLocaleLowerCase().split( ' ' ).join( '' ).split( '_' ).join( '' ),
                    nameVer = name + 'version',
                    options = '', i = 0, l = items.length, value, selected;

                valueSelected = valueSelected || 'unknown';
                versionNumber = versionNumber || '-';

                for( ; i < l; i += 2 ){
                    value = items[ i ] || 'unknown';
                    selected = value === valueSelected;
                    if( selected ){
                        nameAndSelectedIndexes[ name ] = i / 2;
                    };
                    options += '<option value="' + value + '"' + ( selected ? ' selected' : '' ) + '>' +
                                   items[ i + 1 ] +
                               '</option>';
                };

                if( !opt_cellMerging ){
                    nameAndValues[ nameVer ] = versionNumber;
                };

                return '<tr>' +
                       '<th><label for="' + name + '">' + label + '</label>' +
                       '<td' + ( opt_cellMerging ? ' colspan=2' : '' ) + '><select' + nameAndID( name ) + '>' + options + '</select>' +
                       (
                           opt_cellMerging
                               ? ''
                         : iAm.Servo()
                               ? '<td align="right">' + versionNumber
                               : '<td><input type="text" value="' + versionNumber + '"' + nameAndID( nameVer ) + '>'
                       );
            };

            function nameAndID( name ){
                return ' name="' + name + '" id="' + name + '"';
            };

            util.print(
                '<form name="' + PREFIX + '" onsubmit="">' +
                '<table border=1 cellspacing=0>' +
                    '<thead>' +
                        '<tr>' +
                            '<th><th>Name' + '<th>Version(Generation)' +
                    '<tbody>' +
                        createRow( 'Platfrom'   , catalog.PlatformValueToDisplayLabel  , /** @type {string} */ (ua[ iAm.EnumIndex.PLATFORM    ]), /** @type {string | number} */ (ua[ iAm.EnumIndex.PLATFORM_VERSION  ]) ) +
                        createRow( 'Device'     , catalog.DeviceValueToDisplayLabel    , /** @type {string} */ (ua[ iAm.EnumIndex.DEVICE      ]), /** @type {string | number} */ (ua[ iAm.EnumIndex.DEVICE_GENERATION ]) ) +
                        createRow( 'Device Type', catalog.DeviceTypeValueToDisplayLabel, /** @type {string} */ (ua[ iAm.EnumIndex.DEVICE_TYPE ]), ''                                                              , true ) +
                        createRow( 'Engine'     , catalog.EngineValueToDisplayLabel    , /** @type {string} */ (ua[ iAm.EnumIndex.ENGINE      ]), /** @type {string | number} */ (ua[ iAm.EnumIndex.ENGINE_VERSION    ]) ) +
                        createRow( 'Brand'      , catalog.BrandValueToDisplayLabel     , /** @type {string} */ (ua[ iAm.EnumIndex.BRAND       ]), /** @type {string | number} */ (ua[ iAm.EnumIndex.BRAND_VERSION     ]) ) +
                        '<tr>' +
                            '<th><label for="' + PREFIXED_PCSITE_REQUESTED + '">PC Site Requested</label>' +
                            '<td colspan=2 align="right"><input type="checkbox"' + nameAndID( PREFIXED_PCSITE_REQUESTED ) + ( ua[ iAm.EnumIndex.PCSITE_REQUESTED ] ? ' checked' : '' ) + '>' +
                '</table>' +
                '<button' + nameAndID( PREFIXED_RESET ) + ' type="reset">Reset</button>' +
                '</form>'
            );

            var resetButton = util.getElementByName( PREFIXED_RESET );

            if( resetButton ){
                resetButton.onclick = setDetectedValues;
            };

            setDetectedValues();
        })();

        /**
         * @param {!Event=} ev */
        function setDetectedValues( ev ){
            var name, elm, checkbox;

            for( name in nameAndSelectedIndexes ){
                elm = util.getElementByName( name );

                if( elm ){
                    elm.selectedIndex = nameAndSelectedIndexes[ name ];
                };
            };
            for( name in nameAndValues ){
                elm = util.getElementByName( name );

                if( elm ){
                    elm.value = nameAndValues[ name ];
                };
            };

            checkbox = util.getElementByName( PREFIXED_PCSITE_REQUESTED );

            if( checkbox ){
                checkbox.checked = !!ua[ iAm.EnumIndex.PCSITE_REQUESTED ];
            };
            // if( ev ){
                // ev.preventDefault(); Gecko ~0.9.5 で select.selectedIndex の更新に失敗する
            // };
        };
    }
);
