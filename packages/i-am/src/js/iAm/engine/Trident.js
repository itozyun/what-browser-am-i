goog.provide( 'iAm.Trident' );
goog.provide( 'iAm.Trident.gt' );
goog.provide( 'iAm.Trident.gte' );
goog.provide( 'iAm.Trident.lt' );
goog.provide( 'iAm.Trident.lte' );
goog.provide( 'iAm.AnyTrident' );
goog.provide( 'iAm.AnyTrident.gt' );
goog.provide( 'iAm.AnyTrident.gte' );
goog.provide( 'iAm.AnyTrident.lt' );
goog.provide( 'iAm.AnyTrident.lte' );
goog.provide( 'iAm.TridentMobile' );
goog.provide( 'iAm.TridentMobile.gt' );
goog.provide( 'iAm.TridentMobile.gte' );
goog.provide( 'iAm.TridentMobile.lt' );
goog.provide( 'iAm.TridentMobile.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

/*----------------------------------------------------------------------------//
 *  Trident
 */

/**
 * @return {boolean}
 */
iAm.Trident = function(){
    return iAm._engineIs( iAm.EnumEngine.Trident );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Trident.gt = function( version ){
    return iAm.Trident() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Trident.gte = function( version ){
    return iAm.Trident() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Trident.lt = function( version ){
    return iAm.Trident() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Trident.lte = function( version ){
    return iAm.Trident() && iAm._engineVersion.lte( version );
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
iAm.AnyTrident.gt = function( version ){
    return iAm.AnyTrident() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyTrident.gte = function( version ){
    return iAm.AnyTrident() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyTrident.lt = function( version ){
    return iAm.AnyTrident() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyTrident.lte = function( version ){
    return iAm.AnyTrident() && iAm._engineVersion.lte( version );
};

/*----------------------------------------------------------------------------//
 *  Trident Mobile
 */

/**
 * @return {boolean}
 */
iAm.TridentMobile = function(){
    return iAm._engineIs( iAm.EnumEngine.Trident_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.TridentMobile.gt = function( version ){
    return iAm.TridentMobile() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.TridentMobile.gte = function( version ){
    return iAm.TridentMobile() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.TridentMobile.lt = function( version ){
    return iAm.TridentMobile() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.TridentMobile.lte = function( version ){
    return iAm.TridentMobile() && iAm._engineVersion.lte( version );
};
