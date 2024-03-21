// Presto, PrestoMobile
goog.provide( 'whatBrowserAmI.engine.Presto.is' );
goog.provide( 'whatBrowserAmI.engine.Presto.operaObject' );
goog.provide( 'whatBrowserAmI.engine.Presto.IMPLEMENT_VERSION' );
goog.provide( 'whatBrowserAmI.engine.Presto.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.engine.Presto.detect' );

goog.require( 'whatBrowserAmI.engine.OperaMini.operaminiObject' );

/*----------------------------------------------------------------------------//
 *  Presto, PrestoMobile
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.Presto = {};

/**
 * @private
 * @const {!Object|void} */
var operaObject = window.opera;

/** @return {boolean} */
whatBrowserAmI.engine.Presto.is = function(){
    return !whatBrowserAmI.engine.OperaMini.operaminiObject && !!operaObject;
};

/**
 * http://help.dottoro.com/ljifbjwf.php
 *   > version method (opera)
 *   >   window.opera.buildNumber();
 *   >   window.opera.version();
 *
 *   opera.version() は8から実装, Nintendo DS ブラウザには居ない
 *
 * @const {number} */
whatBrowserAmI.engine.Presto.IMPLEMENT_VERSION = operaObject && operaObject.version && operaObject.version() || NaN;

/** @const {string|number} */
whatBrowserAmI.engine.Presto.NAVIGATOR_VERSION =
    p_maxVersion( p_getVersionString( p_strUserAgent, 'Opera ' ), p_Version.NAVIGATOR_VERSION, p_numAppVersion );

/** @const {!Object|void} */
whatBrowserAmI.engine.Presto.operaObject = operaObject;

/** @return {boolean|void} */
whatBrowserAmI.engine.Presto.detect = function(){
    if( whatBrowserAmI.engine.Presto.is() ){
        p_setEngine(
            p_deviceType === DEVICE_TYPE.PC || p_platformName === PLATFORM.Wii ? ENGINE.Presto : ENGINE.PrestoMobile,
            whatBrowserAmI.engine.Presto.IMPLEMENT_VERSION || whatBrowserAmI.engine.Presto.NAVIGATOR_VERSION
        );
        return true;
    };
};
