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



};
