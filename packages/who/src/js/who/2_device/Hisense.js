goog.provide( 'who.device.Hisense.is' );
goog.provide( 'who.device.Hisense.detect' );

goog.require( 'who.base' );

/*----------------------------------------------------------------------------//
 *  A5 A5cc
 *  A7 A7cc
 */

/** @return {boolean} */
who.device.Hisense.is = function(){
    return false;
};

/** @return {boolean|void} */
who.device.Hisense.detect = function(){
    if( who.device.Hisense.is() ){
        p_setDevice( DEVICE.Hisense, undefined, DEVICE_TYPE.EINK_READER );
        return true;
    };
};
