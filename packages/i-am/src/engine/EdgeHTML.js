goog.provide( 'iAm.EdgeHTML' );
goog.provide( 'iAm.EdgeHTML.Gt' );
goog.provide( 'iAm.EdgeHTML.Gte' );
goog.provide( 'iAm.EdgeHTML.Lt' );
goog.provide( 'iAm.EdgeHTML.Lte' );
goog.provide( 'iAm.AnyEdgeHTML' );
goog.provide( 'iAm.AnyEdgeHTML.Gt' );
goog.provide( 'iAm.AnyEdgeHTML.Gte' );
goog.provide( 'iAm.AnyEdgeHTML.Lt' );
goog.provide( 'iAm.AnyEdgeHTML.Lte' );
goog.provide( 'iAm.EdgeMobile' );
goog.provide( 'iAm.EdgeMobile.Gt' );
goog.provide( 'iAm.EdgeMobile.Gte' );
goog.provide( 'iAm.EdgeMobile.Lt' );
goog.provide( 'iAm.EdgeMobile.Lte' );

goog.require( 'whatBrowserAmI.ENGINE' );

/*----------------------------------------------------------------------------//
 *  EdgeHTML
 */

/**
 * @return {boolean}
 */
iAm.EdgeHTML = function(){
    return iAm._engineIs( whatBrowserAmI.ENGINE.EdgeHTML );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeHTML.Gt = function( version ){
    return iAm.EdgeHTML() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeHTML.Gte = function( version ){
    return iAm.EdgeHTML() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeHTML.Lt = function( version ){
    return iAm.EdgeHTML() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeHTML.Lte = function( version ){
    return iAm.EdgeHTML() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  Any EdgeHTML
 */

/**
 * @return {boolean}
 */
iAm.AnyEdgeHTML = function(){
    return iAm.EdgeHTML() || iAm.EdgeMobile();
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyEdgeHTML.Gt = function( version ){
    return iAm.AnyEdgeHTML() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyEdgeHTML.Gte = function( version ){
    return iAm.AnyEdgeHTML() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyEdgeHTML.Lt = function( version ){
    return iAm.AnyEdgeHTML() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyEdgeHTML.Lte = function( version ){
    return iAm.AnyEdgeHTML() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  EdgeHTML Mobile
 */

/**
 * @return {boolean}
 */
iAm.EdgeMobile = function(){
    return iAm._engineIs( whatBrowserAmI.ENGINE.Edge_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeMobile.Gt = function( version ){
    return iAm.EdgeMobile() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeMobile.Gte = function( version ){
    return iAm.EdgeMobile() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeMobile.Lt = function( version ){
    return iAm.EdgeMobile() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeMobile.Lte = function( version ){
    return iAm.EdgeMobile() && iAm._engineVersion.Lte( version );
};
