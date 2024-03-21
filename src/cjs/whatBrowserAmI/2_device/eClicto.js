goog.provide( 'whatBrowserAmI.device.___.is' );
goog.provide( 'whatBrowserAmI.device.___.detect' );

/*----------------------------------------------------------------------------//
 *  eClicto
 *
 *    https://en.wikipedia.org/wiki/EClicto
 *    
 *    eClicto – first Polish e-reader will be launched this autumn
 *    https://web.archive.org/web/20091022022318/http://www.passwordincorrect.com/2009/07/04/first-polish-e-reading-device-to-be-launched-in-autumn/
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
