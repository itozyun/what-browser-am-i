goog.provide( 'whatBrowserAmI.device.Nook.is' );
goog.provide( 'whatBrowserAmI.device.Nook.detect' );

/**
 * Barnes & Noble
 * 
 * Nook
 *   2009
 *   Android 1.5
 *   https://en.wikipedia.org/wiki/Barnes_%26_Noble_Nook_1st_Edition
 * 
 * Nook Simple Touch
 *   2011
 *   Android 2.1
 *   BNRV300
 *   https://en.wikipedia.org/wiki/Nook_Simple_Touch
 * 
 * Nook Simple Touch with GlowLight
 *   2012
 *   Android 2.1
 *   BNRV350 (https://amzn.to/3Vm6kW3)
 *   https://en.wikipedia.org/wiki/Barnes_%26_Noble_Nook#Nook_Simple_Touch_with_GlowLight
 *   https://thadafinser.github.io/UserAgentParserComparison/v3/user-agent-detail/b6/a3/b6a32dc1-968b-4e51-888e-dfe5abdd84c3.html#!
 *     > Mozilla/5.0 (Linux; U; Android 2.1; en-us; NOOK BNRV350 Build/ERD79) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17
 *                                                       ^^^^^^^
 * 
 * Nook GlowLight
 *   2013
 *   Android 2.3
 *   BNRV500
 *   https://en.wikipedia.org/wiki/Barnes_%26_Noble_Nook#Nook_GlowLight
 * 
 * Nook GlowLight Plus (6 inch)
 *   2015
 *   Android 4.4
 *   BNRV510
 * 
 * Nook Glowlight 3
 *   2017
 *   Android 4.4.2
 *   BNRV520
 *   https://help.barnesandnoble.com/hc/en-us/sections/4783203773339-NOOK-GlowLight-3
 * 
 * Nook GlowLight Plus (7.8 inch)
 *   2019
 *   Android 4.4.2
 *   BNRV700
 *
 * Nook Glowlight 4  (32GB)
 * Nook Glowlight 4e (8GB)
 *   2022
 *   Android 8.1
 *   BNRV1100, BNRV1000(4e)
 *     https://www.amazon.com/Barnes-Noble-Glowlight-Touchscreen-BNRV1100/dp/0594149290
 *     https://www.amazon.com/Barnes-Noble-Glowlight-Touchscreen-BNRV1000/dp/0594149274
 * 
 * Nook Glowlight 4 Plus
 *   2023
 *   Android 8.1
 *   BNRV1300
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.device.Nook = {};

/** @const {boolean} */
whatBrowserAmI.device.Nook.is = function(){
    return p_hasSubstring( p_strUserAgent, 'BNRV300'  ) || // Nook Simple Touch
           p_hasSubstring( p_strUserAgent, 'BNRV350'  ) || // Nook Simple Touch with GlowLight
           p_hasSubstring( p_strUserAgent, 'BNRV500'  ) || // Nook GlowLight
           p_hasSubstring( p_strUserAgent, 'BNRV510'  ) || // Nook GlowLight Plus (6 inch)
           p_hasSubstring( p_strUserAgent, 'BNRV520'  ) || // Nook Glowlight 3
           p_hasSubstring( p_strUserAgent, 'BNRV700'  ) || // Nook GlowLight Plus (7.8 inch)
           p_hasSubstring( p_strUserAgent, 'BNRV1000' ) || // Nook Glowlight 4
           p_hasSubstring( p_strUserAgent, 'BNRV1100' ) || // Nook Glowlight 4e
           p_hasSubstring( p_strUserAgent, 'BNRV1300' );   // Nook Glowlight 4 Plus
};

/** @return {boolean|void} */
whatBrowserAmI.device.Nook.detect = function(){
    if( whatBrowserAmI.device.Nook.is() ){
        p_setDevice( DEVICE.Nook, 1 );
        return true;
    };
};
