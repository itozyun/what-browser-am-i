goog.provide( 'who.platform.BSD.is' );
goog.provide( 'who.platform.BSD.detect' );

goog.require( 'who.base' );
/*----------------------------------------------------------------------------//
 *  BSD
 *
 */

/**
 * @private
 * @const {boolean}
 */
var _isFreeBSD = who.util.hasSubstring( who.env.strUserAgent, 'FreeBSD' );

/**
 * @private
 * @const {boolean}
 */
var _isOpenBSD = who.util.hasSubstring( who.env.strUserAgent, 'OpenBSD' );

/**
 * @private
 * @const {boolean}
 */
var _isNetBSD = who.util.hasSubstring( who.env.strUserAgent, 'NetBSD' );

/** @return {boolean} */
who.platform.BSD.is = function(){
    return _isFreeBSD || _isOpenBSD || _isNetBSD;
};

/** @return {boolean|void} */
who.platform.BSD.detect = function(){
    if( _isFreeBSD ){
        who.base.setPlatform( iAm.EnumPlatform.FreeBSD );
        return true;
    } else if( _isOpenBSD ){
        who.base.setPlatform( iAm.EnumPlatform.OpenBSD );
        return true;
    } else if( _isNetBSD ){
        who.base.setPlatform( iAm.EnumPlatform.NetBSD );
        return true;
    };
};
