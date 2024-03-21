goog.provide( 'whatBrowserAmI.INDEX' );

goog.require( 'whatBrowserAmI' );
goog.require( 'whatBrowserAmI.DEFINE.MINIFY' );

/** @enum {string|number} */
whatBrowserAmI.INDEX = {
    ENGINE            : whatBrowserAmI.DEFINE.MINIFY ? 0 : 'ENGINE',
    ENGINE_VERSION    : whatBrowserAmI.DEFINE.MINIFY ? 1 : 'ENGINE_VERSION',
    PLATFORM          : whatBrowserAmI.DEFINE.MINIFY ? 2 : 'PLATFORM',
    PLATFORM_VERSION  : whatBrowserAmI.DEFINE.MINIFY ? 3 : 'PLATFORM_VERSION',
    BRAND             : whatBrowserAmI.DEFINE.MINIFY ? 4 : 'BRAND',
    BRAND_VERSION     : whatBrowserAmI.DEFINE.MINIFY ? 5 : 'BRAND_VERSION',
    DEVICE            : whatBrowserAmI.DEFINE.MINIFY ? 6 : 'DEVICE',
    DEVICE_GENERATION : whatBrowserAmI.DEFINE.MINIFY ? 7 : 'DEVICE_GENERATION',
    DEVICE_TYPE       : whatBrowserAmI.DEFINE.MINIFY ? 8 : 'DEVICE_TYPE',
    PCSITE_REQUESTED  : whatBrowserAmI.DEFINE.MINIFY ? 9 : 'PCSITE_REQUESTED'
};