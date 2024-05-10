goog.provide( 'iAm.Presto' );
goog.provide( 'iAm.Presto.Gt' );
goog.provide( 'iAm.Presto.Gte' );
goog.provide( 'iAm.Presto.Lt' );
goog.provide( 'iAm.Presto.Lte' );
goog.provide( 'iAm.AnyPresto' );
goog.provide( 'iAm.AnyPresto.Gt' );
goog.provide( 'iAm.AnyPresto.Gte' );
goog.provide( 'iAm.AnyPresto.Lt' );
goog.provide( 'iAm.AnyPresto.Lte' );
goog.provide( 'iAm.PrestoMobile' );
goog.provide( 'iAm.PrestoMobile.Gt' );
goog.provide( 'iAm.PrestoMobile.Gte' );
goog.provide( 'iAm.PrestoMobile.Lt' );
goog.provide( 'iAm.PrestoMobile.Lte' );

goog.require( 'whatBrowserAmI.ENGINE' );

/*----------------------------------------------------------------------------//
 *  Presto
 */

/**
 * @return {boolean}
 */
iAm.Presto = function(){
    return iAm._engineIs( whatBrowserAmI.ENGINE.Presto );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Presto.Gt = function( version ){
    return iAm.Presto() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Presto.Gte = function( version ){
    return iAm.Presto() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Presto.Lt = function( version ){
    return iAm.Presto() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Presto.Lte = function( version ){
    return iAm.Presto() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  Any Presto
 */

/**
 * @return {boolean}
 */
iAm.AnyPresto = function(){
    return iAm.Presto() || iAm.PrestoMobile();
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyPresto.Gt = function( version ){
    return iAm.AnyPresto() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyPresto.Gte = function( version ){
    return iAm.AnyPresto() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyPresto.Lt = function( version ){
    return iAm.AnyPresto() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyPresto.Lte = function( version ){
    return iAm.AnyPresto() && iAm._engineVersion.Lte( version );
};

/*----------------------------------------------------------------------------//
 *  Presto Mobile
 */

/**
 * @return {boolean}
 */
iAm.PrestoMobile = function(){
    return iAm._engineIs( whatBrowserAmI.ENGINE.Presto_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PrestoMobile.Gt = function( version ){
    return iAm.PrestoMobile() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PrestoMobile.Gte = function( version ){
    return iAm.PrestoMobile() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PrestoMobile.Lt = function( version ){
    return iAm.PrestoMobile() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PrestoMobile.Lte = function( version ){
    return iAm.PrestoMobile() && iAm._engineVersion.Lte( version );
};
