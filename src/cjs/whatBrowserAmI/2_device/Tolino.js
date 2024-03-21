goog.provide( 'whatBrowserAmI.device.___.is' );
goog.provide( 'whatBrowserAmI.device.___.detect' );

/*----------------------------------------------------------------------------//
 *  Tolino
 *    https://mytolino.com/
 * 
 * https://github.com/Ryogo-X/tolino_ntx_6sl_twrp
 * 
 * https://de.wikipedia.org/wiki/Tolino#Tolino-E-Book-Reader
 * 
 *   Tolino Page
 *     https://de.wikipedia.org/wiki/Tolino_Page
 *     2016
 *     Android 4.4.2
 * 
 *   Tolino Page 2
 *     https://de.wikipedia.org/wiki/Tolino_page_2
 *     2019
 * 
 *   Tolino Shine
 *     https://de.wikipedia.org/wiki/Tolino_Shine
 *     2013
 *     Android 2.3.4
 * 
 *   Tolino Shine 2 HD
 *     https://de.wikipedia.org/wiki/Tolino_Shine_2_HD
 *     2015
 *     Android 4.0.4 
 * 
 *   Tolino Shine 3
 *     https://de.wikipedia.org/wiki/Tolino_Shine_3
 *     2018
 * 
 *   Tolino Shine 4
 *     2022
 * 
 *   Tolino Vision
 *     https://de.wikipedia.org/wiki/Tolino_Vision
 *     2014
 * 
 *   Tolino Vision 2
 *     https://de.wikipedia.org/wiki/Tolino_Vision_2
 *     2014
 *     Android 4.0.4
 * 
 *   Tolino Vision 3 HD
 *     https://de.wikipedia.org/wiki/Tolino_vision_3_HD
 *     2015
 *     Android 4.4.2
 * 
 *   Tolino Vision 4 HD
 *     https://de.wikipedia.org/wiki/Tolino_vision_4_HD
 *     2016
 *     Android 4.0.4
 * 
 *   Tolino Vision 5
 *     https://de.wikipedia.org/wiki/Tolino_vision_5
 *     2019
 *     Android 4.4.2
 * 
 *   Tolino Vision 6
 *     2021
 * 
 *   Tolino epos
 *     https://de.wikipedia.org/wiki/Tolino_epos
 *     2017
 * 
 *   Tolino Epos 2
 *     https://de.wikipedia.org/wiki/Tolino_Epos_2
 *     2019
 * 
 *   Tolino Epos 3
 *     2022
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
