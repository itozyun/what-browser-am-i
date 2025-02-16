goog.provide( 'iAm.Trident' );
goog.provide( 'iAm.Trident.Gt' );
goog.provide( 'iAm.Trident.Gte' );
goog.provide( 'iAm.Trident.Lt' );
goog.provide( 'iAm.Trident.Lte' );
goog.provide( 'iAm.AnyTrident' );
goog.provide( 'iAm.AnyTrident.Gt' );
goog.provide( 'iAm.AnyTrident.Gte' );
goog.provide( 'iAm.AnyTrident.Lt' );
goog.provide( 'iAm.AnyTrident.Lte' );
goog.provide( 'iAm.TridentMobile' );
goog.provide( 'iAm.TridentMobile.Gt' );
goog.provide( 'iAm.TridentMobile.Gte' );
goog.provide( 'iAm.TridentMobile.Lt' );
goog.provide( 'iAm.TridentMobile.Lte' );

goog.require( 'who.ENGINE' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

/*----------------------------------------------------------------------------//
 *  Trident
 */

/**
 * @return {boolean}
 */
iAm.Trident = function(){
    return iAm._engineIs( who.ENGINE.Trident );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Trident.Gt = function( version ){
    return iAm.Trident() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Trident.Gte = function( version ){
    return iAm.Trident() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Trident.Lt = function( version ){
    return iAm.Trident() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Trident.Lte = function( version ){
    return iAm.Trident() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  Any Trident
 */

/**
 * @return {boolean}
 */
iAm.AnyTrident = function(){
    return iAm.Trident() || iAm.TridentMobile();
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyTrident.Gt = function( version ){
    return iAm.AnyTrident() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyTrident.Gte = function( version ){
    return iAm.AnyTrident() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyTrident.Lt = function( version ){
    return iAm.AnyTrident() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyTrident.Lte = function( version ){
    return iAm.AnyTrident() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  Trident Mobile
 */

/**
 * @return {boolean}
 */
iAm.TridentMobile = function(){
    return iAm._engineIs( who.ENGINE.Trident_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.TridentMobile.Gt = function( version ){
    return iAm.TridentMobile() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.TridentMobile.Gte = function( version ){
    return iAm.TridentMobile() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.TridentMobile.Lt = function( version ){
    return iAm.TridentMobile() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.TridentMobile.Lte = function( version ){
    return iAm.TridentMobile() && iAm._engineVersion.Lte( version );
};
