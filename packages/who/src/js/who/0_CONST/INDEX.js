goog.provide( 'who.INDEX' );

goog.require( 'who.DEFINE.MINIFY' );

/** @enum {string|number} */
who.INDEX = {
    ENGINE            : who.DEFINE.MINIFY ? 0 : 'ENGINE',
    ENGINE_VERSION    : who.DEFINE.MINIFY ? 1 : 'ENGINE_VERSION',
    PLATFORM          : who.DEFINE.MINIFY ? 2 : 'PLATFORM',
    PLATFORM_VERSION  : who.DEFINE.MINIFY ? 3 : 'PLATFORM_VERSION',
    BRAND             : who.DEFINE.MINIFY ? 4 : 'BRAND',
    BRAND_VERSION     : who.DEFINE.MINIFY ? 5 : 'BRAND_VERSION',
    DEVICE            : who.DEFINE.MINIFY ? 6 : 'DEVICE',
    DEVICE_GENERATION : who.DEFINE.MINIFY ? 7 : 'DEVICE_GENERATION',
    DEVICE_TYPE       : who.DEFINE.MINIFY ? 8 : 'DEVICE_TYPE',
    PCSITE_REQUESTED  : who.DEFINE.MINIFY ? 9 : 'PCSITE_REQUESTED'
};