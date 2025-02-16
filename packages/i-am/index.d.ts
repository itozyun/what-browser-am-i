type VersionRange = {
    Gt(version:(string|number)):boolean;
    Gte(version:(string|number)):boolean;
    Lt(version:(string|number)):boolean;
    Lte(version:(string|number)):boolean;
};

type Common = VersionRange & {
    (): boolean;
};

type HasBased = Common & {
    Based(version: string | number): boolean;
};

declare namespace iAm {
    // engine
    const AndroidWebView:Common;

    const Chromium:HasBased;
    const AnyChromium:Common;
    const ChromiumMobile:Common;

    const EdgeHTML:Common;
    const AnyEdgeHTML:Common;
    const EdgeMobile:Common;

    const Gecko:HasBased;
    const AnyGecko:Common;
    const GeckoMobile:Common;

    const Goannna:Common;

    const iCab:Common;
    const KHTML:Common;
    const NetFront:Common;
    const Netscape:Common;
    const OperaMini:Common;

    const Presto:Common;
    const AnyPresto:Common;
    const PrestoMobile:Common;

    const QtWebEngine:Common;
    const QtWebKit:Common;

    const SamsungInternet:Common;
    const Selvo:Common;
    const Tasman:Common;

    const Trident:Common;
    const AnyTrident:Common;
    const TridentMobile:Common;

    const UCWEB:Common;

    const WebKit:HasBased & {asSafari:VersionRange};
    const AnySafariMobile:Common;
    const SafariMobile:Common;
    const iOSWebView:Common;

    // platform
    const NintendoDS:Common;
    const NintendoDSi:Common;
    const Nintendo3DS:Common;
    const NewNintendo3DS:Common;
    const Wii:Common;
    const WiiU:Common;
    const NintendoSwitch:Common;
    const PlayStationPortable:Common;
    const PlayStationVita:Common;
    const PlayStation3:Common;
    const PlayStation4:Common;
    const PlayStation5:Common;
    const Xbox360:Common;
    const XboxOne:Common;
    const XboxSeries:Common;
    const FeaturePhone:Common;
    const mylo:Common;
    const Kobo:Common;
    const SonyReader:Common;
    const Kindle:Common;
    const WindowsCE:Common;
    const WindowsMobile:Common;
    const WindowsPhone:Common;
    const iOS:Common;
    const iPadOS:Common;
    const WatchOS:Common;
    const Android:Common;
    const AndroidTV:Common;
    const GoogleTV:Common;
    const FireOS:Common;
    const ChromeOS:Common;
    const FirefoxOS:Common;
    const KaiOS:Common;
    const SymbianS60:Common;
    const MeeGo:Common;
    const Maemo:Common;
    const WebOS:Common;
    const Tizen:Common;
    const BlackBerry:Common;
    const Windows16:Common;
    const Windows:Common;
    const Mac:Common;
    const SunOS:Common;
    const FreeBSD:Common;
    const OpenBSD:Common;
    const NetBSD:Common;
    const Ubuntu:Common;
    const Mint:Common;
    const Fedora:Common;
    const Gentoo:Common;
    const Linux:Common;

    // device
    const PlayStation:Common;
    const iPhone:Common;
    const iPod:Common;
    const iPad:Common;
    const BOOX:Common;
    const Cybook:Common;
    const eClicto:Common;
    const Fidibook:Common;
    const FireTV:Common;
    const Hisense:Common;
    const icarus:Common;
    const KindleFire:Common;
    const Likebook:Common;
    const Manta:Common;
    const Movistar:Common;
    const Nook:Common;
    const PocketBook:Common;
    const Tolino:Common;
};
