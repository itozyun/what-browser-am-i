goog.provide( 'whatBrowserAmI.device.SonyReader.NAVIGATOR_VERSION' );
goog.provide( 'whatBrowserAmI.device.SonyReader.is' );
goog.provide( 'whatBrowserAmI.device.SonyReader.detect' );

/*----------------------------------------------------------------------------//
 *  SonyReader
 *
 *    https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%8B%E3%83%BC%E3%83%BB%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC
 *      > 2011年以降に日本発売された機種では、Wi-Fiを内蔵しており…内蔵ブラウザでWebサイトの閲覧も可能である。
 *
 *    2011
 *      PRS-T1(EBRD1101), PRS-G1
 *            Mozilla/5.0 (Linux; U; ja-jp; EBRD1101; EXT) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1
 *    2012
 *      PRS-T2(EBRD1201)
 *        https://www.itmedia.co.jp/ebook/articles/1209/03/news025_2.html
 *          > Mozilla/5.0 (Linux; U; ja-jp; EBRD1201; EXT; BKLST) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1
 *    2013
 *      PRS-T3S(EBRD1301)
 *        https://psychedelic.lies.jp/2014/01/sony-reader-prs-t3s-%E3%82%92%E8%B2%B7%E3%81%A3%E3%81%9F/
 *          > Mozilla/5.0 (Linux; U; ja-jp; EBRD1301; EXT; BKLST) AppleWebkit/533.1 (KHTML,like Gecko) Version/4.0 Mobile Safari/533.1
 */

/**
 * @namespace
 * @const
 */
whatBrowserAmI.device.SonyReader = {};

/** @const {number} */
whatBrowserAmI.device.SonyReader.NAVIGATOR_VERSION =
    p_hasSubstring( p_strUserAgent, 'EBRD1301' ) ? 3 :
    p_hasSubstring( p_strUserAgent, 'EBRD1201' ) ? 2 :
    p_hasSubstring( p_strUserAgent, 'EBRD1101' ) ? 1 : 0;

/** @return {boolean} */
whatBrowserAmI.device.SonyReader.is = function(){
    return 0 < whatBrowserAmI.device.SonyReader.NAVIGATOR_VERSION;
};

/** @return {boolean|void} */
whatBrowserAmI.device.SonyReader.detect = function(){
    if( whatBrowserAmI.device.SonyReader.is() ){
        p_setDevice( DEVICE.SonyReader, whatBrowserAmI.device.SonyReader.NAVIGATOR_VERSION );
        return true;
    };
};
