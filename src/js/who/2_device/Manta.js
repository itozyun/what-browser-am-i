goog.provide( 'who.device.Manta.is' );
goog.provide( 'who.device.Manta.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 * Manta EBOOK04
 *   https://manuall.co.uk/manta-ebook04-e-reader/
 * 
 *   I have not found the UserAgent string of Manta EBOOK04...
 *     https://whatmyuseragent.com/brand/ma/manta-multimedia
 */

/** @return {boolean} */
who.device.Manta.is = function(){
    return false;
};

/** @return {boolean|void} */
who.device.Manta.detect = function(){
    if( who.device.Manta.is() ){
        who.base.setDevice( iAm.EnumDevice.Manta, undefined, iAm.EnumDeviceType.EInkReader );
        return true;
    };
};
