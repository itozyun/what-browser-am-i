/**
 * @fileoverview
 * 
 * インライン JavaScript などで ua 判定が既に実行済であり、ua オブジェクトを使って分岐するコードを書く場合、このファイルを読み込むのが早いです
 * 
 * @example
 *   goog.require( 'who.ENUM' );
 *  
 *   goog.scope(
 *      function(){
 *        if(ua[who.INDEX.ENGINE_NAME] === who.ENGINE.Gecko){
 *          // Only for gecko
 *          if(0 <= ua.conpare('1.9.1', ua[who.INDEX.ENGINE_VERSION])){
 *            // Only for firefox 3.5+
 *            if(ua[who.INDEX.PLATFORM_NAME] === who.PLATFORM.Windows){
 *              // Only for firefox 3.5+ and Windows OS
 *            }
 *          }
 *        }
 *      }
 *   );
 */

goog.provide( 'who.ENUM' );

goog.require( 'who.PLATFORM' );
goog.require( 'who.ENGINE' );
goog.require( 'who.BRAND' );
goog.require( 'who.DEVICE' );
goog.require( 'who.DEVICE_TYPE' );
goog.require( 'who.INDEX' );
