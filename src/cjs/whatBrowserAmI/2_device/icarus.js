goog.provide( 'whatBrowserAmI.device.icarus.is' );
goog.provide( 'whatBrowserAmI.device.icarus.detect' );

goog.require( 'whatBrowserAmI.base' );

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
whatBrowserAmI.device.icarus.is = function(){
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.device.icarus.detect = function(){
    if( whatBrowserAmI.device.icarus.is() ){
        p_setDevice( DEVICE.icarus, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
