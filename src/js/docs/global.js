goog.provide( 'global.phase' );
goog.provide( 'global.currentPath' );
goog.provide( 'global.ERROR_MESSAGE_AREA_NAME' );
goog.provide( 'global.nodeMessage' );
goog.provide( 'global.errorEventHandler' );
goog.provide( 'global.originalValueOfOnError' );

goog.require( 'iAm.all' );
goog.require( 'util.getElementByName' );

/** @type {number} */
global.phase = 1; // what-browser-am-i
// 2: collect-properties
// 3: send result

/** @type {string} */
global.currentPath = '';

/** @const {string} */
global.ERROR_MESSAGE_AREA_NAME = 'errmsg';

/** @const {HTMLInputElement} */
global.nodeMessage = /** @type {HTMLInputElement} */ (util.getElementByName( global.ERROR_MESSAGE_AREA_NAME ));
global.nodeMessage.value = '';

/** @const */
global.originalValueOfOnError = window.onerror;

/** @const */
global.errorEventHandler = function( errorMsg, url, lineNumber ){
    if( iAm.Gecko.lt( 1 ) ) return;

    var msg = global.currentPath + ' ' + errorMsg + ' #' + lineNumber + ', ' + url;

    if( global.nodeMessage ){
        global.nodeMessage.value = msg;
    } else {
        alert( msg );
    };
};

window.onerror = global.errorEventHandler;
