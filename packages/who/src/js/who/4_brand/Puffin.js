goog.provide( 'who.brand.Puffin.clientInfo' );
goog.provide( 'who.brand.Puffin.iOSImplementVersion' );
goog.provide( 'who.brand.Puffin.NAVIGATOR_VERSION' );
goog.provide( 'who.brand.Puffin.is' );
goog.provide( 'who.brand.Puffin.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Puffin
 */

/**
 * @private
 * @const {!Object|void} */
var _puffinDevice     = window.puffinDevice;

/**
 * @private
 * @const {!Object|void} */
var _puffinClientInfo = _puffinDevice && _puffinDevice.clientInfo;

/** @const {!Object|void} */
who.brand.Puffin.clientInfo = _puffinClientInfo;

/** @const {string|number|void} */
who.brand.Puffin.iOSImplementVersion = _puffinClientInfo && _puffinClientInfo.os === 'iOS' && _puffinClientInfo.osVersion;

/** @const {string} */
who.brand.Puffin.NAVIGATOR_VERSION = who.util.getVersionString( who.env.strUserAgent, 'Puffin/' );

/** @return {boolean} */
who.brand.Puffin.is = function(){
    return !!_puffinDevice || !!who.brand.Puffin.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
who.brand.Puffin.detect = function(){
    if( who.brand.Puffin.is() ){
        who.base.setBrand( iAm.EnumBrand.Puffin, who.brand.Puffin.NAVIGATOR_VERSION );
        return true;
    };
};
