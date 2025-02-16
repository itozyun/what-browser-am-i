goog.provide( 'iAm.EdgeHTML' );
goog.provide( 'iAm.EdgeHTML.gt' );
goog.provide( 'iAm.EdgeHTML.gte' );
goog.provide( 'iAm.EdgeHTML.lt' );
goog.provide( 'iAm.EdgeHTML.lte' );
goog.provide( 'iAm.AnyEdgeHTML' );
goog.provide( 'iAm.AnyEdgeHTML.gt' );
goog.provide( 'iAm.AnyEdgeHTML.gte' );
goog.provide( 'iAm.AnyEdgeHTML.lt' );
goog.provide( 'iAm.AnyEdgeHTML.lte' );
goog.provide( 'iAm.EdgeMobile' );
goog.provide( 'iAm.EdgeMobile.gt' );
goog.provide( 'iAm.EdgeMobile.gte' );
goog.provide( 'iAm.EdgeMobile.lt' );
goog.provide( 'iAm.EdgeMobile.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/*----------------------------------------------------------------------------//
 *  EdgeHTML
 */

/**
 * @return {boolean}
 */
iAm.EdgeHTML = function(){
    return iAm._engineIs( iAm.EnumEngine.EdgeHTML );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeHTML.gt = function( version ){
    return iAm.EdgeHTML() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeHTML.gte = function( version ){
    return iAm.EdgeHTML() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeHTML.lt = function( version ){
    return iAm.EdgeHTML() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeHTML.lte = function( version ){
    return iAm.EdgeHTML() && iAm._engineVersion.lte( version );
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
iAm.AnyEdgeHTML.gt = function( version ){
    return iAm.AnyEdgeHTML() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyEdgeHTML.gte = function( version ){
    return iAm.AnyEdgeHTML() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyEdgeHTML.lt = function( version ){
    return iAm.AnyEdgeHTML() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyEdgeHTML.lte = function( version ){
    return iAm.AnyEdgeHTML() && iAm._engineVersion.lte( version );
};

/*----------------------------------------------------------------------------//
 *  EdgeHTML Mobile
 */

/**
 * @return {boolean}
 */
iAm.EdgeMobile = function(){
    return iAm._engineIs( iAm.EnumEngine.Edge_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeMobile.gt = function( version ){
    return iAm.EdgeMobile() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeMobile.gte = function( version ){
    return iAm.EdgeMobile() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeMobile.lt = function( version ){
    return iAm.EdgeMobile() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.EdgeMobile.lte = function( version ){
    return iAm.EdgeMobile() && iAm._engineVersion.lte( version );
};
