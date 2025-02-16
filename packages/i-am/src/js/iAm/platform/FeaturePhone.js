goog.provide( 'iAm.FeaturePhone' );

goog.require( 'iAm.EnumPlatform' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.gt' );
goog.require( 'iAm._platformVersion.gte' );
goog.require( 'iAm._platformVersion.lt' );
goog.require( 'iAm._platformVersion.lte' );

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
    return iAm.FeaturePhone() && iAm._platformVersion.gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.gte = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersion.gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.lt = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersion.lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.lte = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersion.lte( version );
};
