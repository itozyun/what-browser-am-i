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

goog.provide( 'whatBrowserAmI.device.Cybook.is' );
goog.provide( 'whatBrowserAmI.device.Cybook.detect' );

goog.require( 'whatBrowserAmI.base' );

/*----------------------------------------------------------------------------//
 *  Boyue Likebook Plus
 */

/** @return {boolean} */
whatBrowserAmI.device.Cybook.is = function(){
    return false;
};

/** @return {boolean|void} */
whatBrowserAmI.device.Cybook.detect = function(){
    if( whatBrowserAmI.device.Cybook.is() ){
        p_setDevice( DEVICE.Cybook, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
