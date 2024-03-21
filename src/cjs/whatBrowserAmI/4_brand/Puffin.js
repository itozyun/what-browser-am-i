goog.provide( 'whatBrowserAmI.brand.Puffin.clientInfo' );
goog.provide( 'whatBrowserAmI.brand.Puffin.iOSImplementVersion' );
goog.provide( 'whatBrowserAmI.brand.Puffin.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.brand.Puffin.is' );
goog.provide( 'whatBrowserAmI.brand.Puffin.detect' );

/**
 * @namespace
 * @const
 */
whatBrowserAmI.brand.Puffin = {};

/**
 * @private
 * @const {!Object|void} */
var _puffinDevice     = window.puffinDevice;

/**
 * @private
 * @const {!Object|void} */
var _puffinClientInfo = _puffinDevice && _puffinDevice.clientInfo;

/*----------------------------------------------------------------------------//
*  Puffin
*/
/** @const {!Object|void} */
whatBrowserAmI.brand.Puffin.clientInfo = _puffinClientInfo;

/** @const {string|number|void} */
whatBrowserAmI.brand.Puffin.iOSImplementVersion = _puffinClientInfo && _puffinClientInfo.os === 'iOS' && _puffinClientInfo.osVersion;

/** @const {string} */
whatBrowserAmI.brand.Puffin.NAVIGATOR_VERSION = p_getVersionString( p_strUserAgent, 'Puffin/' );

/** @const {boolean} */
whatBrowserAmI.brand.Puffin.is = function(){
    return !!_puffinDevice || !!whatBrowserAmI.brand.Puffin.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.brand.Puffin.detect = function(){
    if( whatBrowserAmI.brand.Puffin.is() ){
        p_setBrand( BRAND.Puffin, whatBrowserAmI.brand.Puffin.NAVIGATOR_VERSION );
        return true;
    };
};
