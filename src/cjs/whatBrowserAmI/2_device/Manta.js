goog.provide( 'whatBrowserAmI.device.Manta.is' );
goog.provide( 'whatBrowserAmI.device.Manta.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 * Manta EBOOK04
 *   https://manuall.co.uk/manta-ebook04-e-reader/
 * 
 *   I have not found the UserAgent string of Manta EBOOK04...
 *     https://whatmyuseragent.com/brand/ma/manta-multimedia
 */

/** @return {boolean} */
whatBrowserAmI.device.Manta.is = function(){
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.device.Manta.detect = function(){
    if( whatBrowserAmI.device.Manta.is() ){
        p_setDevice( DEVICE.Manta, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
