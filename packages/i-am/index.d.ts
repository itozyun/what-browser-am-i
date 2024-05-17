type Common = {
    (): boolean;
    Gt(version:(string|number)):boolean;
    Gte(version:(string|number)):boolean;
    Lt(version:(string|number)):boolean;
    Lte(version:(string|number)):boolean;
}

type HasBased = Common & {
    Based(version: string | number): boolean;
};

declare namespace iAm {
    const Chromium:HasBased;
    const AnyChromium:Common;
    const ChromiumMobile:Common;

    const EdgeHTML:Common;
    const AnyEdgeHTML:Common;
    const EdgeMobile:Common;

    const Gecko:HasBased;
    const AnyGecko:Common;
    const GeckoMobile:Common;

    const Presto:Common;
    const AnyPresto:Common;
    const PrestoMobile:Common;

    const Trident:Common;
    const AnyTrident:Common;
    const TridentMobile:Common;

    const WebKit:HasBased & {asSafari:Common};
    const AnySafariMobile:Common;
    const SafariMobile:Common;
    const iOSWebView:Common;
};
