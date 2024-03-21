goog.provide( 'whatBrowserAmI.device.___.is' );
goog.provide( 'whatBrowserAmI.device.___.detect' );

/*----------------------------------------------------------------------------//
 * Manta EBOOK04
 *   https://manuall.co.uk/manta-ebook04-e-reader/
 * 
 *   I have not found the UserAgent string of Manta EBOOK04...
 *     https://whatmyuseragent.com/brand/ma/manta-multimedia
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.device.___ = {};

/** @const {boolean} */
whatBrowserAmI.device.___.is = function(){
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.device.___.detect = function(){
    if( whatBrowserAmI.device.___.is() ){
        p_setDevice( DEVICE.___, 1 );
        return true;
    };
};
