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
var _isFreeBSD = p_hasSubstring( p_strUserAgent, 'FreeBSD' );

/**
 * @private
 * @const {boolean}
 */
var _isOpenBSD = p_hasSubstring( p_strUserAgent, 'OpenBSD' );

/**
 * @private
 * @const {boolean}
 */
var _isNetBSD = p_hasSubstring( p_strUserAgent, 'NetBSD' );

/** @return {boolean} */
who.platform.BSD.is = function(){
    return _isFreeBSD || _isOpenBSD || _isNetBSD;
};

/** @return {boolean|void} */
who.platform.BSD.detect = function(){
    if( _isFreeBSD ){
        p_setPlatform( PLATFORM.FreeBSD );
        return true;
    } else if( _isOpenBSD ){
        p_setPlatform( PLATFORM.OpenBSD );
        return true;
    } else if( _isNetBSD ){
        p_setPlatform( PLATFORM.NetBSD );
        return true;
    };
};
