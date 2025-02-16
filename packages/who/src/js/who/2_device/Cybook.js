/**
 * Bookeen Cybook
 *   https://en.wikipedia.org/wiki/Bookeen
 * 
 * Cybook Orizon
 *   2010
 *   https://en.wikipedia.org/wiki/Cybook_Orizon
 * 
 * 
 *  Cybook Odyssey HD FrontLight
 *    2012
 *  Cybook Odyssey
 *    2013
 *  Cybook Muse HD
 *    2016
 */

goog.provide( 'who.device.Cybook.is' );
goog.provide( 'who.device.Cybook.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  Boyue Likebook Plus
 */

/** @return {boolean} */
who.device.Cybook.is = function(){
    return false;
};

/** @return {boolean|void} */
who.device.Cybook.detect = function(){
    if( who.device.Cybook.is() ){
        who.base.setDevice( iAm.EnumDevice.Cybook, undefined, iAm.EnumDeviceType.EINK_READER );
        return true;
    };
};
