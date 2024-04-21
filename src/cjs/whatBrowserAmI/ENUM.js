/**
 * @fileoverview
 * 
 * インライン JavaScript などで ua 判定が既に実行済であり、ua オブジェクトを使って分岐するコードを書く場合、このファイルを読み込むのが早いです
 * 
 * @example
 *   goog.require( 'whatBrowserAmI.ENUM' );
 *  
 *   goog.scope(
 *      function(){
 *        if(ua[whatBrowserAmI.INDEX.ENGINE_NAME] === whatBrowserAmI.ENGINE.Gecko){
 *          // Only for gecko
 *          if(0 <= ua.conpare('1.9.1', ua[whatBrowserAmI.INDEX.ENGINE_VERSION])){
 *            // Only for firefox 3.5+
 *            if(ua[whatBrowserAmI.INDEX.PLATFORM_NAME] === whatBrowserAmI.PLATFORM.Windows){
 *              // Only for firefox 3.5+ and Windows OS
 *            }
 *          }
 *        }
 *      }
 *   );
 */

goog.provide( 'whatBrowserAmI.ENUM' );

goog.require( 'whatBrowserAmI.PLATFORM' );
goog.require( 'whatBrowserAmI.ENGINE' );
goog.require( 'whatBrowserAmI.BRAND' );
goog.require( 'whatBrowserAmI.DEVICE' );
goog.require( 'whatBrowserAmI.DEVICE_TYPE' );
goog.require( 'whatBrowserAmI.INDEX' );
