goog.provide( 'iAm.FeaturePhone' );

goog.require( 'who.PLATFORM' );
goog.require( 'iAm._platformIs' );
goog.require( 'iAm._platformVersion.Gt' );
goog.require( 'iAm._platformVersion.Gte' );
goog.require( 'iAm._platformVersion.Lt' );
goog.require( 'iAm._platformVersion.Lte' );

/**
 * @return {boolean}
 */
iAm.FeaturePhone = function(){
    return iAm._platformIs( who.PLATFORM.Feature_Phone );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.Gt = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersion.Gt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.Gte = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersion.Gte( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.Lt = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersion.Lt( version );
};

/**
 * @param {string|number} version 
 * @return {boolean}
 */
iAm.FeaturePhone.Lte = function( version ){
    return iAm.FeaturePhone() && iAm._platformVersion.Lte( version );
};
