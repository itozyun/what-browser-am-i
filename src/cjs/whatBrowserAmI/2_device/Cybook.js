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

goog.provide( 'whatBrowserAmI.device.___.is' );
goog.provide( 'whatBrowserAmI.device.___.detect' );

/*----------------------------------------------------------------------------//
 *  Boyue Likebook Plus
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
