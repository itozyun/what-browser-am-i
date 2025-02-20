goog.provide( 'iAm.Presto' );
goog.provide( 'iAm.Presto.gt' );
goog.provide( 'iAm.Presto.gte' );
goog.provide( 'iAm.Presto.lt' );
goog.provide( 'iAm.Presto.lte' );
goog.provide( 'iAm.AnyPresto' );
goog.provide( 'iAm.AnyPresto.gt' );
goog.provide( 'iAm.AnyPresto.gte' );
goog.provide( 'iAm.AnyPresto.lt' );
goog.provide( 'iAm.AnyPresto.lte' );
goog.provide( 'iAm.PrestoMobile' );
goog.provide( 'iAm.PrestoMobile.gt' );
goog.provide( 'iAm.PrestoMobile.gte' );
goog.provide( 'iAm.PrestoMobile.lt' );
goog.provide( 'iAm.PrestoMobile.lte' );

goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/*----------------------------------------------------------------------------//
 *  Presto
 */

/**
 * @return {boolean}
 */
iAm.Presto = function(){
    return iAm._engineIs( iAm.EnumEngine.Presto );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Presto.gt = function( version ){
    return iAm.Presto() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Presto.gte = function( version ){
    return iAm.Presto() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Presto.lt = function( version ){
    return iAm.Presto() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Presto.lte = function( version ){
    return iAm.Presto() && iAm._engineVersionLte( version );
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
iAm.AnyPresto.gt = function( version ){
    return iAm.AnyPresto() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyPresto.gte = function( version ){
    return iAm.AnyPresto() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyPresto.lt = function( version ){
    return iAm.AnyPresto() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyPresto.lte = function( version ){
    return iAm.AnyPresto() && iAm._engineVersionLte( version );
};

/*----------------------------------------------------------------------------//
 *  Presto Mobile
 */

/**
 * @return {boolean}
 */
iAm.PrestoMobile = function(){
    return iAm._engineIs( iAm.EnumEngine.Presto_Mobile );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PrestoMobile.gt = function( version ){
    return iAm.PrestoMobile() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PrestoMobile.gte = function( version ){
    return iAm.PrestoMobile() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PrestoMobile.lt = function( version ){
    return iAm.PrestoMobile() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.PrestoMobile.lte = function( version ){
    return iAm.PrestoMobile() && iAm._engineVersionLte( version );
};
