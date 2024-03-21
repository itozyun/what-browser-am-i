goog.provide( 'whatBrowserAmI.device.___.is' );
goog.provide( 'whatBrowserAmI.device.___.detect' );

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
