goog.provide( 'iAm.isPC' );
goog.provide( 'iAm.isPhone' );
goog.provide( 'iAm.isTablet' );
goog.provide( 'iAm.isEInkReader' );
goog.provide( 'iAm.isMediaPlayer' );
goog.provide( 'iAm.isTV' );
goog.provide( 'iAm.isGame' );
goog.provide( 'iAm.isPDA' );
goog.provide( 'iAm.isCar' );

goog.require( 'iAm.DEFINE.ASSUME_DEVICE_TYPE' );
goog.require( 'iAm.EnumDeviceType' );
goog.require( 'iAm.EnumIndex' );

/**
 * @return {boolean}
 */
iAm.isPC = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.PC;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.PC;
};

/**
 * @return {boolean}
 */
iAm.isPhone = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.Phone;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.Phone;
};

/**
 * @return {boolean}
 */
iAm.isTablet = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.Tablet;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.Tablet;
};

/**
 * @return {boolean}
 */
iAm.isEInkReader = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.EInkReader;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.EInkReader;
};

/**
 * @return {boolean}
 */
iAm.isMediaPlayer = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.MediaPlayer;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.MediaPlayer;
};

/**
 * @return {boolean}
 */
iAm.isTV = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.TV;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.TV;
};

/**
 * @return {boolean}
 */
iAm.isGame = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.Game;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.Game;
};

/**
 * @return {boolean}
 */
iAm.isPDA = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.PDA;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.PDA;
};

/**
 * @return {boolean}
 */
iAm.isCar = function(){
    if( iAm.DEFINE.ASSUME_DEVICE_TYPE ){
        return iAm.DEFINE.ASSUME_DEVICE_TYPE === iAm.EnumDeviceType.Car;
    };
    return ua[ iAm.EnumIndex.DEVICE_TYPE ] === iAm.EnumDeviceType.Car;
};
