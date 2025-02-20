goog.provide( 'iAm.FeaturePhone' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersionGt' );
goog.require( 'iAm._platformVersionGte' );
goog.require( 'iAm._platformVersionLt' );
goog.require( 'iAm._platformVersionLte' );

/**
 * @return {boolean}
 */
iAm.FeaturePhone = function(){
    return iAm._platformIs( iAm.EnumPlatform.Feature_Phone );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.gt = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersionGt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.gte = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersionGte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.lt = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersionLt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.lte = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersionLte( version );
};
