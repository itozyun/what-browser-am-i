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
    who.util.maxVersion( who.util.getVersionString( who.env.strUserAgent, 'Opera ' ), who.env.Something.NAVIGATOR_VERSION, who.env.numAppVersion );

/** @const {!Object|void} */
who.engine.Presto.operaObject = operaObject;

/** @return {boolean|void} */
who.engine.Presto.detect = function(){
    if( who.engine.Presto.is() ){
        who.base.setEngine(
            who.result.deviceType === iAm.EnumDeviceType.PC || who.result.platformName === iAm.EnumPlatform.Wii$TM ? iAm.EnumEngine.Presto : iAm.EnumEngine.Presto_Mobile,
            who.engine.Presto.IMPLEMENT_VERSION || who.engine.Presto.NAVIGATOR_VERSION
        );
        return true;
    };
};
