goog.provide( 'iAm.Gecko' );
goog.provide( 'iAm.Gecko.Based' );
goog.provide( 'iAm.Gecko.Gt' );
goog.provide( 'iAm.Gecko.Gte' );
goog.provide( 'iAm.Gecko.Lt' );
goog.provide( 'iAm.Gecko.Lte' );
goog.provide( 'iAm.AnyGecko' );
goog.provide( 'iAm.AnyGecko.Gt' );
goog.provide( 'iAm.AnyGecko.Gte' );
goog.provide( 'iAm.AnyGecko.Lt' );
goog.provide( 'iAm.AnyGecko.Lte' );
goog.provide( 'iAm.GeckoMobile' );
goog.provide( 'iAm.GeckoMobile.Gt' );
goog.provide( 'iAm.GeckoMobile.Gte' );
goog.provide( 'iAm.GeckoMobile.Lt' );
goog.provide( 'iAm.GeckoMobile.Lte' );

goog.require( 'iAm.Goanne' );
goog.require( 'iAm.EnumEngine' );
goog.require( 'iAm._engineIs' );
goog.require( 'iAm._engineVersion.Gt' );
goog.require( 'iAm._engineVersion.Gte' );
goog.require( 'iAm._engineVersion.Lt' );
goog.require( 'iAm._engineVersion.Lte' );

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
iAm.Gecko.Gt = function( version ){
    return iAm.Gecko() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.Gte = function( version ){
    return iAm.Gecko() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.Lt = function( version ){
    return iAm.Gecko() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.Gecko.Lte = function( version ){
    return iAm.Gecko() && iAm._engineVersion.Lte( version );
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
iAm.AnyGecko.Gt = function( version ){
    return iAm.AnyGecko() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.Gte = function( version ){
    return iAm.AnyGecko() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.Lt = function( version ){
    return iAm.AnyGecko() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.AnyGecko.Lte = function( version ){
    return iAm.AnyGecko() && iAm._engineVersion.Lte( version );
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
iAm.GeckoMobile.Gt = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.Gte = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.Lt = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.GeckoMobile.Lte = function( version ){
    return iAm.GeckoMobile() && iAm._engineVersion.Lte( version );
};
