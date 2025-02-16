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

goog.require( 'iAm.Goanne' );
goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.gt' );
goog.require( 'iAm._engineVersion.gte' );
goog.require( 'iAm._engineVersion.lt' );
goog.require( 'iAm._engineVersion.lte' );

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
    return iAm.AnyGecko() || iAm.Goanne();
};

/*----------------------------------------------------------------------------//
 *  Gecko
 */

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.gt = function( version ){
    return iAm.Gecko() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.gte = function( version ){
    return iAm.Gecko() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.lt = function( version ){
    return iAm.Gecko() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.lte = function( version ){
    return iAm.Gecko() && iAm._engineVersion.lte( version );
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
    return iAm.AnyGecko() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.gte = function( version ){
    return iAm.AnyGecko() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.lt = function( version ){
    return iAm.AnyGecko() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.lte = function( version ){
    return iAm.AnyGecko() && iAm._engineVersion.lte( version );
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
    return iAm.GeckoMobile() && iAm._engineVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.gte = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.lt = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.lte = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersion.lte( version );
};
