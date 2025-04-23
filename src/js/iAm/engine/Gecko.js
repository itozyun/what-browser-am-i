goog.provide( 'iAm.Gecko' );
goog.provide( 'iAm.Gecko.Based' );
goog.provide( 'iAm.Gecko.gt' );
goog.provide( 'iAm.Gecko.gte' );
goog.provide( 'iAm.Gecko.lt' );
goog.provide( 'iAm.Gecko.lte' );
goog.provide( 'iAm.AnyGecko' );
goog.provide( 'iAm.AnyGecko.gt' );
goog.provide( 'iAm.AnyGecko.gte' );
goog.provide( 'iAm.AnyGecko.lt' );
goog.provide( 'iAm.AnyGecko.lte' );
goog.provide( 'iAm.GeckoMobile' );
goog.provide( 'iAm.GeckoMobile.gt' );
goog.provide( 'iAm.GeckoMobile.gte' );
goog.provide( 'iAm.GeckoMobile.lt' );
goog.provide( 'iAm.GeckoMobile.lte' );

goog.require( 'iAm.Goanna' );
goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersionGt' );
goog.require( 'iAm._engineVersionGte' );
goog.require( 'iAm._engineVersionLt' );
goog.require( 'iAm._engineVersionLte' );

/**
 * @return {boolean}
 */
iAm.Gecko = function(){
    return iAm._engineIs( iAm.EnumEngine.Gecko );
};

/*----------------------------------------------------------------------------//
 *  Gecko Based
 */

/**
 * @return {boolean}
 */
iAm.Gecko.Based = function(){
    return iAm.AnyGecko() || iAm.Goanna();
};

/*----------------------------------------------------------------------------//
 *  Gecko
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.gt = function( version ){
    return iAm.Gecko() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.gte = function( version ){
    return iAm.Gecko() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.lt = function( version ){
    return iAm.Gecko() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.lte = function( version ){
    return iAm.Gecko() && iAm._engineVersionLte( version );
};

/*----------------------------------------------------------------------------//
 *  Any Gecko
 */

/**
 * @return {boolean}
 */
iAm.AnyGecko = function(){
    return iAm.Gecko() || iAm.GeckoMobile();
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.gt = function( version ){
    return iAm.AnyGecko() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.gte = function( version ){
    return iAm.AnyGecko() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.lt = function( version ){
    return iAm.AnyGecko() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.lte = function( version ){
    return iAm.AnyGecko() && iAm._engineVersionLte( version );
};

/*----------------------------------------------------------------------------//
 *  Gecko Mobile
 */

/**
 * @return {boolean}
 */
iAm.GeckoMobile = function(){
    return iAm._engineIs( iAm.EnumEngine.Fennec );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.gt = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.gte = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.lt = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.lte = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersionLte( version );
};
