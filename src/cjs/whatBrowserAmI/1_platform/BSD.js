goog.provide( 'whatBrowserAmI.platform.BSD.is' );
goog.provide( 'whatBrowserAmI.platform.BSD.detect' );

/*----------------------------------------------------------------------------//
 *  BSD
 *
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.platform.BSD = {};

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

/** @const {boolean} */
whatBrowserAmI.platform.BSD.is = function(){
    return _isFreeBSD || _isOpenBSD || _isNetBSD;
};

/** @return {boolean|void} */
whatBrowserAmI.platform.BSD.detect = function(){
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
