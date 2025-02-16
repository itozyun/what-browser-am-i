goog.provide( 'iAm.EnumIndex' );

goog.require( 'iAm.DEFINE.MINIFY' );

/** @enum {string|number} */
iAm.EnumIndex = {
    ENGINE            : iAm.DEFINE.MINIFY ? 0 : 'ENGINE',
    ENGINE_VERSION    : iAm.DEFINE.MINIFY ? 1 : 'ENGINE_VERSION',
    PLATFORM          : iAm.DEFINE.MINIFY ? 2 : 'PLATFORM',
    PLATFORM_VERSION  : iAm.DEFINE.MINIFY ? 3 : 'PLATFORM_VERSION',
    BRAND             : iAm.DEFINE.MINIFY ? 4 : 'BRAND',
    BRAND_VERSION     : iAm.DEFINE.MINIFY ? 5 : 'BRAND_VERSION',
    DEVICE            : iAm.DEFINE.MINIFY ? 6 : 'DEVICE',
    DEVICE_GENERATION : iAm.DEFINE.MINIFY ? 7 : 'DEVICE_GENERATION',
    DEVICE_TYPE       : iAm.DEFINE.MINIFY ? 8 : 'DEVICE_TYPE',
    PCSITE_REQUESTED  : iAm.DEFINE.MINIFY ? 9 : 'PCSITE_REQUESTED'
};