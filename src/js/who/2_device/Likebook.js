goog.provide( 'who.device.Likebook.is' );
goog.provide( 'who.device.Likebook.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Boyue Likebook(Meebook)
 *
 *  Likebook Plus
 *    2017
 * 
 *  Likebook Mars, Likebook Muses, Likebook Mimas
 *    https://amzn.to/3ILG0gs
 *    2018
 *    Android 6
 * 
 *  Likebook Alita
 *    2019
 *    Android 6 -> 8.1
 *  
 *  Likebook Ares Note
 *    2019
 * 
 *  Likebook (MEEBOOK) P6
 *    2020
 *    Android 8.1
 * 
 *  Likebook (MEEBOOK) P10
 *    2021
 *    Android 8.1
 * 
 *  Likebook (MEEBOOK) P10 PRO
 * 
 *  Likebook (MEEBOOK) P78
 *    https://amzn.to/3Vuotkn
 *    2022
 *    Android 11
 * 
 *  Likebook (MEEBOOK) P78 PRO
 * 
 *  Likebook (MEEBOOK) M6
 *    https://amzn.to/43pRvn7
 *    2023
 *    Android 11
 * 
 *  Likebook (MEEBOOK) M7
 *    https://amzn.to/3IKQcpp
 *    2023
 *    Android 11
 */

/** @return {boolean} */
who.device.Likebook.is = function(){
    return false;
};

/** @return {boolean|void} */
who.device.Likebook.detect = function(){
    if( who.device.Likebook.is() ){
        who.base.setDevice( iAm.EnumDevice.Likebook, undefined, iAm.EnumDeviceType.EInkReader );
        return true;
    };
};