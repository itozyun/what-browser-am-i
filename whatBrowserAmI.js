/*
 Copyright 2020 itozyun, https://github.com/itozyun/what-browser-am-i, MIT License. */
whatBrowserAmI={};
(function(t,m,M,N,Ia,H,Ja,Cb){function ba(k,u){var q=H(k.split(u)[1]);return 0<=q?q:0}function f(k,u){return 0<=k.indexOf(u)}function Ka(k){return f(k,"Linux armv")||f(k,"Linux aarch")||f(k,"Linux i686")||f(k,"Linux x86_64")}function ca(k,u){for(var q in u)if(q===k)return!0}function c(k,u){var q="",E=-1,Q;if(k=k.split(u)[1]){for(;Q=k.charCodeAt(++E);)if(48<=Q&&57>=Q||46===Q)q+=k.charAt(E);else break;for(E=q.length;E;)if(46===q.charCodeAt(--E))q=q.substr(0,E);else break}return q}function La(k,u){var q=
0,E;k=k.split(".");u=u.split(".");for(E=Math.min(k.length,u.length);q<E;++q){var Q=H(k[q]),Ma=H(u[q]);if(Q!==Ma)return Q>Ma?1:-1}return k.length===u.length?0:k.length>u.length?1:-1}function Na(){for(var k=arguments,u=1,q=k[0],E;u<k.length;++u)0>La(q,E=k[u])&&(q=E);return q}function da(k){return k===k+""?k:k===k-0?""+k:k.min&&k.max?k.min+"~"+k.max:k.min?k.min+"~":"~"+k.max}function ea(k){return k===k+""?H(k):k}var l,n,a=N.userAgent,r=N.appVersion,ra=H(r)||0,p=N.platform,sa=M.documentElement,Oa=sa&&
sa.style,ta=M.documentMode,va=Ia.width,wa=Ia.height,Pa=m.HTMLAudioElement,Qa=m.performance,Ra=m.Int8Array,qb=void 0!==m.ontouchstart,K=c(r,"Version/")||c(a,"Version/"),R=!Sa&&m.opera,Ta=R&&(R.version&&"function"===typeof R.version?R.version():Na(c(a,"Opera "),K,""+ra)),Ua=m.opr,V=!R&&(M.all||ta),D=V&&(ta?ta:m.XMLHttpRequest?M.getElementsByTagName?7:4:M.compatMode?6:(0).toFixed?5.5:m.attachEvent?5:4),fa=!V&&sa.msContentZoomFactor,S=!fa&&m.chrome,T=!V&&void 0!==Oa.MozAppearance,Sa=m.operamini,ha=f(a,
"UCWEB"),rb=ha&&c(a," U2/"),sb=ha&&c(a,"; wds "),xa=c(a.split("_").join("."),"; iPh OS "),tb=c(a,"; Adr "),Va=f(r,"YJApp-ANDROID"),F=f(p,"Android")||T&&f(r,"Android")||Va,z=c(p,"Android ")||c(r,"Android ")||c(a,"Android ")||tb,ya=f(p,"Linux"),za="MacIntel"===p&&void 0!==N.standalone,Aa=T&&c(a,"Goanna/"),I=!Aa&&T&&c(a,"rv:"),Wa=c(a,"Firefox/"),Xa=c(a,"Opera/"),Ya=m.FNRBrowser,v=ba(a,"AppleWebKit/"),O=c(a,"Chrome/"),ia=c(a,"OPR/"),ub=c(r,"KHTML/"),Za=c(a.toLowerCase(),"iris"),Ba=c(a,"FxiOS/"),vb=c(a,
"CriOS/"),wb=c(a,"EdgiOS/"),Ca=c(a,"Silk/"),U=ba(a,"SamsungBrowser/"),W;if(W=!U)a:{for(var $a="GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "),
ja,Da=$a.length;ja=$a[--Da];)if(f(a,ja)){W=2>H(K)?K:.9;break a}var ab="SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
for(Da=ab.length;ja=ab[--Da];)if(f(a,ja)){W=K;break a}W=void 0}var bb=W,cb=S&&534.3>=v,db=Ka(p),xb=db&&!f(a,p)&&Ka(a),eb=qb&&(v||T)&&xb||!z&&Va,fb=!!m.ReactNativeWebView,ka;if(ka=db)a:{var gb=void 0;for(gb in m)if(0===gb.indexOf("SlexAPI_")){ka=!0;break a}ka=void 0}var hb=ka,ib=m.puffinDevice,la=ib&&ib.clientInfo,X=la&&"iOS"===la.os&&la.osVersion,ma=X&&la.model,Ea=!D&&M.registerElement,yb=!D&&M.execCommand,jb=ya&&Ea&&"11.0.696.34"===O,zb=m._firefoxTV_playbackStateObserverJava,kb=ba(a,"diordnA "),
Ab=null===m.onoperadetachedviewchange,L,B,b,Y,na,Z,Fa,oa,lb,mb,nb;if("Nitro"===p){var h="NDS";var G=!0}else if("Nintendo DSi"===p){h="NDSi";var g=Xa;G=!0}else if("New Nintendo 3DS"===p||f(a,"iPhone OS 6_0")&&320===va&&240===wa)h="New3DS",g=c(a,"NintendoBrowser/"),G=!0;else if("Nintendo 3DS"===p){h="N3DS";g=c(a,"Version/");v=535;var Bb=g;G=!0}else if("Nintendo Swicth"===p)h="Swicth",g=c(r,"NintendoBrowser/"),G=!0;else if("Nintendo WiiU"===p)h="WiiU",g=c(r,"NintendoBrowser/"),v=c(r,"AppleWebKit/"),
G=!0;else if("Nintendo Wii"===p){h="Wii";g=c(a,"Wii; U; ; ");var d=h;var e=g;G=!0}else if(b=c(a,"PlayStation Vita "))h="PSVita",g=b,d=h,e=b,G=!0;else if(b=c(a,"(PlayStation Portable); ")){h="PSP";g=b;var ob=3.3;d=h;e=b;G=!0}else if(b=c(a,"PLAYSTATION 3; ")||c(a,"PLAYSTATION 3 "))h="PS3",g=b,d=h,e=b,0>La("4.10",b)&&(l="Sony",n=b),G=!0;else if(f(a,"Xbox One"))h="XboxOne",g=1,G=!0;else if(f(a,"Xbox"))h="Xbox360",g=1,G=!0;else if(2===ra&&f(a,"Sony/COM2/")){h="Mylo";g=2;ob=3.4;d=h;e=2;var aa=!0}else if(0===
p.indexOf("iP")||xa||X||za){if(X)switch(g=X,ma.substr(0,4)){case "iPho":var w="iPhone";var P=c(ma,w);var C=!0;break;case "iPad":w="iPad";P=c(ma,w);var x=!0;break;case "iPod":w="iPod";P=c(ma,w);var Ga=!0}else{xa?g=xa:(g=c(r.split("_").join("."),"OS "),lb=!ca("isSecureContext",m),mb=ca("enableWebGL",m),nb=ca("sameOrigin",m));g||(B=!0);if(!g||Ya)g=m.PointerEvent?13:m.HTMLDataListElement?12.2:Array.prototype.flat?12:N.sendBeacon?11.3:m.WebAssembly?11.2:m.HTMLMeterElement?10.3:m.Proxy?10.2:m.HTMLPictureElement?
9.3:Ja.isNaN?9.2:m.SharedWorker?Qa&&Qa.now?8:8.4:yb?7.1:m.webkitURL?6.1:m.Worker?5.1:Ra?4.3:Pa?4.1:3.2;var Ha=1===m.devicePixelRatio;var y=va===1.5*wa||1.5*va===wa;0===p.indexOf("iPhone")?(w="iPhone",P=y?Ha?{max:3}:{min:4,max:5}:{max:6},C=!0):0===p.indexOf("iPad")||za?(w="iPad",P=Ha?{max:2}:{min:3},x=!0):0===p.indexOf("iPod")&&(w="iPod",P=y?Ha?{max:3}:4:{min:5},Ga=!0)}!X&&(N.standalone||(x||12>g)&&ca("webkitFullscreenEnabled",M)||11<=g&&13>g&&N.mediaDevices)?(l="SafariMobile",d="Safari",e=g):(oa=
!0,l="iOSWebView");h="iOS";n=g}else if(f(a,"Kobo"))h="Kobo",l="AOSP",n=2.2,d=l,e=n,F=na=!0;else if(f(a,"EBRD"))h="SonyReader",l="AOSP",n=2.2,d=l,e=n,na=!0;else if(b=c(a,"CrOS x86_64 ")||c(a,"CrOS aarch64 ")||c(a,"CrOS i686 ")||c(a,"CrOS armv7l ")){h="ChromeOS";g=b;var pa=!0}else if(void 0!==m.onmoztimechange)h="FirefoxOS",g=18.1>I?"1.0.1":19>I?1.1:27>I?1.2:29>I?1.3:31>I?1.4:33>I?2:35>I?2.1:38>I?2.2:45>I?2.5:2.6,f(a,"Mobile")?C=!0:f(a,"Tablet")?x=!0:f(a,"TV")&&(Y=!0);else if(m.palmGetResource)h="webOS",
g=c(a,"webOS/")||c(a,"WEBOS")||c(a,"hpwOS/"),d=h,e=g,f(a,"webOS.TV")||f(a,"/SmartTV")?Y=!0:C=!0;else if(b=c(a,"Tizen "))h="Tizen",g=b,d="Samsung",e=U,l=d,n=e,C=!0;else if(b=c(a,"Windows Phone ")||c(r,"Windows Phone OS ")||sb){var qa=!0;g=b;C=!0}else if(fa&&"ARM"===p)qa=!0,g=10,B=C=!0;else if(V&&f(r,"ZuneWP"))qa=!0,g=11===D?8.1:10===D?8:9===D?7.5:7===D?7:"?",B=C=!0;else if(f(a,"FOMA;"))h="FeaturePhone",C=!0;else if(f(a,"SoftBank;"))h="FeaturePhone",C=!0;else if(f(a,"KFMUWI")){var J=!0;g=6.3;var A=
x=!0}else if(f(a,"KFKAWI"))J=!0,g=6,A=x=!0;else if(f(a,"KFSUWI")||f(a,"KFAUWI")||f(a,"KFDOWI"))J=!0,g=5,A=x=!0;else if(f(a,"KFGIWI"))J=!0,g=5,A=x=!0;else if(f(a,"KFARWI")||f(a,"KFSAWA")||f(a,"KFSAWI"))J=!0,g=5<=H(z)?5:4,A=x=!0;else if(f(a,"KFSOWI")||f(a,"KFTHWA")||f(a,"KFTHWI")||f(a,"KFAPWA")||f(a,"KFAPWI"))J=!0,g=3,A=x=!0;else if(f(a,"KFOT")||f(a,"KFTT")||f(a,"KFJWA")||f(a,"KFJWI"))J=!0,g=2,A=x=!0;else if(f(a,"Kindle Fire"))J=!0,g=1,A=x=!0;else if(b=c(a,"Kindle/"))h="Kindle",g=b,l="AOSP",n=2.2,d=
l,e=n,na=!0;else if(zb)J=!0,g=z||kb,A=Y=!0,B=kb;else if(f(a,"AmazonWebAppPlatform")||f(a,"; AFT"))J=!0,g=z,A=Y=!0;else if(f(a,"MeeGo"))h="MeeGo";else if(f(a,"Maemo"))h="Maemo";else if(0===a.indexOf("Windows Mobile;")||Za)h="WindowsMobile",aa=!0;else if("WinCE"===p)h=p,aa=!0;else if("Win16"===p||"Win32"===p||"Win64"===p)h=p,g=c(a,"Windows NT ")||c(a,"Windows "),pa=!0;else if(0===p.indexOf("Mac")){h="MacPowerPC"===p?"MacPPC":p;if(b=c(a.split("_").join("."),"Mac OS X "))g=b;var pb=pa=!0}else f(a,"BlackBerry")||
f(a,"BB10")?(h="BlackBerry",g=K,C=!0):f(a,"SunOS")||f(a,"Sun Solaris")?(h="SunOS",pa=!0):f(a,"FreeBSD")?h="FreeBSD":f(a,"OpenBSD")?h="OpenBSD":f(a,"NetBSD")?h="NetBSD":F&&T?(f(a,"Android 4.4;")?y={min:2.3}:4<=H(z)?y=z:y={min:2.2},g=y,eb&&(B=!0)):F&&R?(z?y=z:(y={min:1.6},B=!0),g=y,f(a,"Tablet")?x=!0:C=!0):z?(g=z,F=!0):ya&&eb||fb||hb?(L=!0,U?y={min:4.4}:S&&!cb||Ua||ia?y={min:4}:(y=z=void 0!==Oa.touchAction?{min:5}:Ea?4.4:Ra?N.connection?m.searchBoxJavaBridge_||S?Ja.isNaN?4.1:4:4.2:4.4:534<=v?3:533<=
v?Pa?2.3:2.2:530<=v?2:1.5,bb&&(l="Samsung",n=bb)),g=y,F=!0):jb?(g={min:5},L=F=!0):ya&&(f(a,"Ubuntu")?h="Ubuntu":(b=c(a,"Mint/"))?(h="Mint",g=b):(b=c(a,"Fedora/"))?(h="Fedora",g=b):h=f(a,"Gentoo")?"Gentoo":"Linux");J||F&&L&&Ca?h="FireOS":F&&(h=h||"Android");qa&&(h="WindowsPhone");l||(A=A||F,R?(l=A||aa||C||x?"PrestoMobile":"Presto",n=Ta):V?((y=ba(r,"Trident/")+4)&&y!==D&&(d="IEHost",e=y),10<=D&&6.2<=g&&7>g&&0===screenY&&innerHeight+1!==outerHeight&&(d="ModernIE",e=D),aa||C||x||Ga?l="TridentMobile":
pb&&5<=D?(l="Tasman",d="MacIE",e=D):(l="Trident",pb&&(d="MacIE",e=D)),n=D):fa?(l=qa?"EdgeMobile":"EdgeHTML",n=c(r,"Edge/")):Aa?(l="Goanna",n=Aa):T?(l=A?"Fennec":"Gecko",n=I||Wa):U?(l="Samsung",n=U,L&&(B=!0)):(b=ob||c(a,"NetFront/"))?(l="NetFront",n=b):(b=c(a,"iCab"))?(l="iCab",n=b):(b=Na(c(a,"Opera Mini/"),c(a,"Opera Mobi/"))||Sa&&K)?(l="OperaMini",n=b,h||(f(a,"iPhone")?w="iPhone":f(a,"iPad")?w="iPad":f(a,"iPod")&&(w="iPod"),w&&(h="iOS"))):ha?(l="UCWEB",n=rb):ub?(l="KHTML",n=ra):F&&cb?(l="AOSP",n=
z,Z=!0,L&&(B=!0)):S||Ua||ia?(l=A?"ChromiumMobile":"Chromium",n=O,L&&(B=!0)):F&&Ea?(l="ChromeWebView",n=5>H(z)?z:O,Z=!0,m.requestFileSystem||m.webkitRequestFileSystem||(Fa=!0),L&&(B=!0)):F&&(K||L)?(l="AOSP",n=z,Z=!0,L&&(B=!0)):O?(l=A?"ChromiumMobile":"Chromium",n=O):v&&(l="WebKit",n=v));d||((b=fa&&c(a,"Edge/")||c(a,"EdgA/")||wb||c(a,"Edg/"))?(d="Edge",e=b):(b=c(r,"Coast/"))?(d="Coast",e=b):lb?d="OperaTurbo":(b=c(r,"OPT/"))?(d="OperaTouch",e=b,B=B||!f(r,"Mobile/")):(b=c(a.toLowerCase(),"ybrowser/"))?
(d="Yahoo",e=b):!ha&&(b=c(a,"UCBrowser/"))?(d="UC",e=b):Ca?(d="Silk",e=Ca):(b=c(a,"Vivaldi/"))?(d="Vivaldi",e=b):(b=c(a,"QQBrowser/"))?(d="QQ",e=b):(b=c(a,"YaBrowser/"))?(d="Yandex",e=b):(b=c(a,"coc_coc_browser/"))?(d="coccoc",e=b):(b=c(a,"Camino/"))?(d="Camino",e=b):f(a,"SE 2.X MetaSr 1.0")?d="Sogou":(b=c(a,"Focus/")||c(a,"Klar/")||9>H(Ba)&&oa&&11<=H(g)&&Ba)?(d="Focus",e=b):(b=c(a,"AOLBUILD/")||c(a,"AOL/")||c(a,"AOL "))?(d="AOL",e=b):(b=c(a,"IceDragon/"))?(d="IceDragon",e=b):(b=c(a,"Iceweasel/"))?
(d="Iceweasel",e=b):(b=c(a,"TenFourFox/"))?(d="ITenFourFox",e=b):(b=c(a,"Waterfox/"))?(d="Waterfox",e=b):(b=c(a,"GNUzilla/"))?(d="GNUzilla",e=b):(b=c(a,"SeaMonkey/"))?(d="SeaMonkey",e=b):(b=c(a,"PaleMoon/"))?(d="PaleMoon",e=b):(b=c(a,"Basilisk/"))?(d="Basilisk",e=b):(b=c(a,"Maxthon/")||c(a,"Maxthon ")||c(a,"MXiOS/"))||f(a,"Maxthon")?(d="Maxthon",e=b||1):f(a,"Avant Browser;")?d="Avant":(b=c(a,"Konqueror/"))?(d="Konqueror",e=b):(b=c(a,"Midori/"))?(d="Midori",e=b):(b=c(a,"OmniWeb/"))?(d="OmniWeb",e=
b):(b=c(a,"Roccat/"))?(d="Roccat",e=b):(b=c(a,"Epiphany/"))?(d="Epiphany",e=b):(b=c(a,"WebPositive/"))?(d="WebPositive",e=b):(b=c(a,"Iron/"))||f(a," Iron ")?(d="Iron",e=b||S&&O):(b=c(a,"Comodo Dragon/"))?(d="ComodoDragon",e=b):(b=c(a,"Brave/"))||f(a," Brave ")||nb?(d="Brave",e=b||S&&O):(b=c(a,"Rockmelt/"))?(d="Rockmelt",e=b):(b=c(a,"Sleipnir/"))||Ya||hb?(d="Sleipnir",b&&(e=b)):mb?d="Dolphin":(b=c(a,"Puffin/"))?(d="Puffin",e=b):(b=c(a,"Dooble/"))?(d="Dooble",e=b):(b=c(a,"Flock/"))?(d="Flock",e=b):
(b=c(a,"Galeon/"))?(d="Galeon",e=b):(b=c(a,"Falkon/"))?(d="Falkon",e=b):(b=c(a,"Iceape/"))?(d="Iceape",e=b):(b=c(a,"K-Meleon/"))?(d="KMeleon",e=b):(b=Bb||c(r,"NX/"))?(d="NetFrontNX",e=b):(b=c(a,"Netscape6/")||c(a,"Netscape/")||c(a,"Navigator/"))?(d="NN",e=b):Za?(d="Iris",e=b):(b=c(a,"FBAV/")||f(r,"FBAN/"))?(d="Facebook",e=b):(b=c(r,"Line/"))?(d="LINE",e=b):(b=c(a,"QtWebEngine/"))?(d="QtWebEngine",e=b):(b=c(a,"QtWebKit/"))?(d="QtWebKit",e=b):(b=c(a,"DuckDuckGo/"))?(d="DuckDuckGo",e=b):(b=c(a,"Lunascape/")||
fb)?(d="Lunascape",e=b):(b=Ba||T&&(Wa||n))?(d="Firefox",e=b):Ab?(d="OperaGX",e=ia):(b=Ta||ia||Xa)?(d="Opera",e=b):V?(d="IE",e=n):U?(d=l,e=U):(b=vb||(S||jb&&Z)&&O)?(d="Chrome",e=b):Z&&!Fa?(d=l,e=n):oa&&!x?(l="SafariMobile",d="Safari",e=g):oa||Fa||!f(a,"Safari")&&!K||(d="Safari",e=K||(73>v?.8:85>v?.9:100>v?1:125>v?1.1:312>v?1.2:412>v?1.3:419.3>=v?2:525.13>=v?3:525.25>=v?3.1:3.2)),d=d||"unknown");h&&(t.PLATFORM=h,g?(t.PLATFORM_VERSION=da(g),t[h]=ea(g)):t[h]=!0);l&&(t.ENGINE=l,n?(t.ENGINE_VERSION=da(n),
t[l]=ea(n)):t[l]=!0,d||(d=l,e=n));d&&(t.BRAND=d,e?(t.BRAND_VERSION=da(e),t[d]=ea(e)):t[d]=!0);w&&(t.DEVICE=w,P?(t.DEVICE_VERSION=da(P),t[w]=ea(P)):t[w]=!0);if(B||za)t.PCSITE_REQUESTED=!0;t.DEVICE_TYPE=aa?8:G?7:Y?6:Ga?5:na?4:C?2:x?3:pa?1:0})(whatBrowserAmI,this,document,navigator,screen,parseFloat,Number);
