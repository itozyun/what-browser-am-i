goog.provide( 'who.device.icarus.is' );
goog.provide( 'who.device.icarus.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Icarus
 *
 *  Icarus Sense G2
 *    2011
 *  
 *  Icarus Excel
 *    2012
 * 
 *  Icarus 8
 *    2013
 * 
 *  Icarus Essence
 *    2013
 * 
 *  Icarus Illumina Pro
 *    2016
 * 
 *  Icarus Illumina XL HD
 *    2017
 *    Android 4.2.2
 * 
 */

/** @return {boolean} */
who.device.icarus.is = function(){
    return false;
};

/** @return {boolean|void} */
who.device.icarus.detect = function(){
    if( who.device.icarus.is() ){
        who.base.setDevice( iAm.EnumDevice.icarus, undefined, iAm.EnumDeviceType.EInkReader );
        return true;
    };
};
