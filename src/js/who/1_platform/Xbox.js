goog.provide( 'who.platform.Xbox.is' );
goog.provide( 'who.platform.Xbox.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  XBox One, Xbox 360
 */

/**
 * @private
 * @const {boolean} */
var _isXboxOne = who.util.hasSubstring( who.env.strUserAgent, 'Xbox One' );

/**
 * @private
 * @const {boolean} */
var _isXbox360 = !_isXboxOne && who.util.hasSubstring( who.env.strUserAgent, 'Xbox' );


/** @return {boolean} */
who.platform.Xbox.is = function(){
    return _isXbox360 || _isXboxOne;
};

/** @return {boolean|void} */
who.platform.Xbox.detect = function(){
    if( _isXbox360 ){
        who.base.setPlatform( iAm.EnumPlatform.Xbox_360$TM );
        who.base.setDevice( iAm.EnumDevice.Xbox360, undefined, iAm.EnumDeviceType.Game );
        return true;
    } else if( _isXboxOne ){
        who.base.setPlatform( iAm.EnumPlatform.Xbox_One$TM );
        who.base.setDevice( iAm.EnumDevice.XboxOne, undefined, iAm.EnumDeviceType.Game );
        return true;
    };
};
