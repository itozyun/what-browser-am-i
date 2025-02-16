// Presto, PrestoMobile
goog.provide( 'who.engine.Presto.is' );
goog.provide( 'who.engine.Presto.operaObject' );
goog.provide( 'who.engine.Presto.IMPLEMENT_VERSION' );
goog.provide( 'who.engine.Presto.NAVIGATOR_VERSION' );
goog.provide( 'who.engine.Presto.detect' );

goog.require( 'who.base' );
goog.require( 'who.engine.OperaMini.operaminiObject' );

/*----------------------------------------------------------------------------//
 *  Presto, PrestoMobile
 */

/**
 * @private
 * @const {!Object|void} */
var operaObject = window.opera;

/** @return {boolean} */
who.engine.Presto.is = function(){
    return !who.engine.OperaMini.operaminiObject && !!operaObject;
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
who.engine.Presto.IMPLEMENT_VERSION = operaObject && operaObject.version && operaObject.version() || NaN;

/** @const {string|number} */
who.engine.Presto.NAVIGATOR_VERSION =
    p_maxVersion( p_getVersionString( p_strUserAgent, 'Opera ' ), p_Something.NAVIGATOR_VERSION, p_numAppVersion );

/** @const {!Object|void} */
who.engine.Presto.operaObject = operaObject;

/** @return {boolean|void} */
who.engine.Presto.detect = function(){
    if( who.engine.Presto.is() ){
        p_setEngine(
            p_deviceType === EnumDeviceType.PC || p_platformName === EnumPlatform.Wii$TM ? EnumEngine.Presto : EnumEngine.Presto_Mobile,
            who.engine.Presto.IMPLEMENT_VERSION || who.engine.Presto.NAVIGATOR_VERSION
        );
        return true;
    };
};
