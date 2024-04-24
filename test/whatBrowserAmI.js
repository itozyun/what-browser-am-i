/* what-browser-am-i@0.7.1
(c) 2021-2024 itozyun(https://github.com/itozyun/what-browser-am-i#readme), MIT. */
var whatBrowserAmI = {conpare:function(z, g) {
  for (var A = 0, C = (z + "").split("."), N = (g + "").split("."), w = C.length, G = N.length, r, J, b; !(C[w - 1] - 0);) {
    --w;
  }
  for (; !(N[G - 1] - 0);) {
    --G;
  }
  for (r = w < G ? w : G; A < r; ++A) {
    if (J = C[A] - 0, b = N[A] - 0, J !== b) {
      return J > b ? 1 : -1;
    }
  }
  return w > G ? 1 : w === G ? 0 : -1;
}};
(function(z, g, A, C, N, w, G) {
  function r(f, l) {
    return f && l ? z.conpare(f, l) : NaN;
  }
  function J(f, l) {
    var q = w(f.split(l)[1]);
    return 0 <= q ? q : 0;
  }
  function b(f, l) {
    return 0 <= f.indexOf(l);
  }
  function Vc(f) {
    return b(f, "Linux armv") || b(f, "Linux aarch") || b(f, "Linux i686") || b(f, "Linux x86_64");
  }
  function ca(f, l) {
    for (var q in l) {
      if (q === f) {
        return !0;
      }
    }
  }
  function c(f, l) {
    var q = f.split(l)[1], D = "", E = -1, da;
    if (q) {
      for (; da = q.charCodeAt(++E);) {
        if (48 <= da && 57 >= da || 46 === da) {
          D += q.charAt(E);
        } else {
          break;
        }
      }
      for (E = D.length; E;) {
        if (46 === D.charCodeAt(--E)) {
          D = D.substr(0, E);
        } else {
          break;
        }
      }
    }
    return D;
  }
  function Wc(f) {
    for (var l = arguments, q = 1, D = l[0], E; q < l.length; ++q) {
      E = l[q], 0 > r(D, E) && (D = E);
    }
    return D;
  }
  function ea(f) {
    return f === f + "" ? f : f === f - 0 ? "" + f : f.min && f.max ? f.min + "~" + f.max : f.min ? f.min + "~" : "~" + f.max;
  }
  function fa() {
    return "Android" === B || "FireOS" === B;
  }
  function e(f, l, q) {
    B = f;
    if (l || 0 <= l) {
      u = l;
    }
    if (q || 0 <= q) {
      K = q;
    }
  }
  function m(f, l, q) {
    U = f;
    if (l || 0 <= l) {
      pc = l;
    }
    if (q || 0 <= q) {
      K = q;
    }
  }
  function n(f, l) {
    h = f;
    if (l || 0 <= l) {
      t = l;
    }
  }
  function d(f, l) {
    ha = f;
    if (l || 0 <= l) {
      qc = l;
    }
  }
  function Xc() {
    return "Mac68K" === k || "MacPowerPC" === k || "MacPPC" === k || "MacIntel" === k || "MacM1" === k;
  }
  function ia() {
    return !(!O && L) && Yc || !!rc;
  }
  function P() {
    return b(a, "UCWEB");
  }
  function xe() {
    if (ye) {
      return e("PlayStation3", c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")), m("PlayStation", 3, "GAME"), 0 > r(u, "4.10") && n("Sony", u), !0;
    }
    if (ze) {
      return e("PlayStation4", c(p, k + "/")), m("PlayStation", 4, "GAME"), !0;
    }
    if (Ae) {
      return e("PlayStation5", c(p, k + "/")), m("PlayStation", 5, "GAME"), !0;
    }
  }
  function Be() {
    if (Ce) {
      return e("FreeBSD"), !0;
    }
    if (De) {
      return e("OpenBSD"), !0;
    }
    if (Ee) {
      return e("NetBSD"), !0;
    }
  }
  function Zc() {
    return !!$c || !!V && 9 > w(V) && "iOSWebView" === h && 11 <= w(u);
  }
  function ad() {
    return "Chromium" === h || "ChromiumMobile" === h || "AndroidWebView" === h && 0 > r(5, t);
  }
  function bd() {
    return "iOS" === B && !W && (cd || ("iPad" === U || 12 > u) && !!ca("webkitFullscreenEnabled", A) || 11 <= u && 13 > u && !!C.mediaDevices);
  }
  function dd() {
    return b(a, " MC_FAUST") || b(a, " MC_DARWIN") || b(a, " DARWIN") || b(a, " KON_TIKI") || b(a, " Kon_Tiki2") || b(a, " MC_GAME") || b(a, " LIVINGSTONE") || b(a, " Lomonosov") || b(a, " MC_Cristo") || b(a, " NoteAir") || b(a, " MC_NovaPro") || b(a, " Poke2Color");
  }
  function ed() {
    return b(a, "BNRV300") || b(a, "BNRV350") || b(a, "BNRV500") || b(a, "BNRV510") || b(a, "BNRV520") || b(a, "BNRV700") || b(a, "BNRV1000") || b(a, "BNRV1100") || b(a, "BNRV1300");
  }
  function sc() {
    return dd() || b(a, "Kobo") || ed() || b(a, " PocketBook") || 0 < tc || !1;
  }
  function Fe() {
    var f;
    if (Ge) {
      return b(a, "Android 4.4;") ? e("Android", "2.2~3", "PHONE") : 4 <= w(Q) ? e("Android", Q, "PHONE") : e("Android", "2.2~3", "PHONE"), uc && (x = !0), !0;
    }
    if (He) {
      f = b(a, "Tablet");
      Q ? e("Android", Q, f ? "TABLET" : "PHONE") : (e("Android", "1.6~", f ? "TABLET" : "PHONE"), x = !0);
      return !0;
    }
    if (Q) {
      return e("Android", Q, "PHONE"), !0;
    }
    if (Ie) {
      return R ? e("Android", "4.4~", "PHONE") : X && !vc || S ? e("Android", "4~", "PHONE") : e("Android", 0 > r(M, 5) ? M : "5~", "PHONE"), H = !0;
    }
    if (Je) {
      return e("Android"), H = !0;
    }
  }
  var a = C.userAgent, p = C.appVersion, fd = w(p) || 0, k = C.platform, rc = A.documentMode, Yc = !!A.all, ja = !!A.registerElement, wc = N.width, xc = N.height, Y = A.documentElement, gd = Y && Y.style, yc = !!g.HTMLAudioElement, hd = g.performance, id = !!g.Int8Array, jd = void 0 !== g.ontouchstart, cd = C.standalone, F = c(p, "Version/") || c(a, "Version/"), V = c(a, "FxiOS/"), v = J(a, "AppleWebKit/"), zc, kd, ka, ld, md, uc, B, h, t, ha, qc, U, pc, K, x, H, Le, O, Ac, L, Me, Ne, y, Bc, la, 
  T, Oe, Cc, Dc, Pe, Ec, Fc, Gc, R, Z, nd, od, ye, ze, Ae, Ce, De, Ee, pd, Se, na, $c, Hc, Ic, Te, Ue, Ve, aa, qd, rd, I, Jc, sd, S, X, vc, Je, M, oa, td, ud, Kc, pa, W, vd, We, qa, Ye, Ze, Lc, Mc, Nc, Oc, wd, $e, xd, yd, tc, zd, Q, Ad, Ge, He, af, Ie, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ra, Pc, sa, ta, va, wa, xa, ya, za, Aa, Ba, Ca, ue, Da, Ea, Fa, 
  Ga, Ha, Ia, Ja, Ka, ba, La, Ma, Na, Oa, Pa, u, Qa, Ra, Qc, ve, we, Sa, Ta, Ua, Va, Wa, Xa, Ya, Rc, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, Sc, Tc, kb, lb, mb, Uc, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc;
  if (zc = !Yc) {
    (function() {
      for (var Ke in gd) {
        if (0 === Ke.indexOf("Moz")) {
          kd = !0;
          return;
        }
      }
      kd = void 0;
    })();
    zc = !!kd;
  }
  ka = zc;
  ld = b(k, "Linux");
  md = Vc(k);
  uc = md && !b(a, k) && Vc(a);
  B = "";
  h = "";
  ha = "";
  U = "";
  K = "";
  x = !1;
  H = !1;
  Le = 2 === fd && b(a, "Sony/COM2/");
  O = g.operamini;
  Ac = Wc(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || O && F;
  L = g.opera;
  Me = L && L.version && L.version() || NaN;
  Ne = Wc(c(a, "Opera "), F, fd);
  y = rc ? rc : g.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : g.attachEvent ? 5 : 4;
  Bc = J(p, "Trident/") + 4;
  la = c(a.toLowerCase(), "iris");
  T = c(a, "NintendoBrowser/");
  Oe = P() ? c(a, " U2/") : "";
  Cc = P() ? c(a, "; wds ") : "";
  Dc = P() ? c(a.split("_").join("."), "; iPh OS ") : "";
  Pe = P() ? c(a, "; Adr ") : "";
  Ec = c(a, "Windows Phone ") || c(p, "Windows Phone OS ");
  Fc = !ia() && !!Y.msContentZoomFactor && "ARM" === k;
  Gc = 7 <= y && b(p, "ZuneWP");
  R = J(a, "SamsungBrowser/");
  if (Z = !R && [].pop) {
    (function() {
      for (var ma, Qe = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "); ma = 
      Qe.pop();) {
        if (b(a, ma)) {
          Z = 2 > w(F) ? F : .9;
          return;
        }
      }
      for (var Re = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" "); ma = 
      Re.pop();) {
        if (b(a, ma)) {
          Z = F;
          return;
        }
      }
      Z = void 0;
    })();
  }
  nd = Z || NaN;
  od = c(a, "Tizen ");
  ye = "PlayStation 3" === k;
  ze = "PlayStation 4" === k;
  Ae = "PlayStation 5" === k;
  Ce = b(a, "FreeBSD");
  De = b(a, "OpenBSD");
  Ee = b(a, "NetBSD");
  pd = b(a, "Xbox One");
  Se = !pd && b(a, "Xbox");
  na = ka ? c(a, "Goanna/") : "";
  $c = c(a, "Focus/") || c(a, "Klar/");
  Hc = c(a, "Firefox/");
  Ic = !!g._firefoxTV_playbackStateObserverJava;
  Te = ka ? c(a, "rv:") || c(a.substr(a.indexOf(") Gecko/") - 11), "; ") : "";
  Ue = Ic ? J(a, "diordnA ") : 0;
  Ve = b(a, "AmazonWebAppPlatform");
  aa = b(a, "AFTBTX4") ? [7, 2023] : b(a, "AFTMD002") ? [7, 2023] : b(a, "AFTSHN02") ? [7, 2023] : b(a, "AFTMD001") ? [7, 2023] : b(a, "AFTKA002") || b(a, "AFTKAUK002") ? [7, 2023] : b(a, "AFTHA004") ? [7, 2022] : b(a, "AFTTIFF43") ? [7, 2022] : b(a, "AFTANNA0") ? [7, 2022] : b(a, "AFTHA001") ? [7, 2022] : b(a, "AFTMON001") || b(a, "AFTMON002") ? [7, 2022] : b(a, "AFTJULI1") ? [7, 2021] : b(a, "AFTHA003") ? [7, 2021] : b(a, "AFTTI43") ? [7, 2021] : b(a, "AFTPR001") ? [7, 2020] : b(a, "AFTBU001") ? 
  [6, 2020] : b(a, "AFTHA002") ? [7, 2021] : b(a, "AFTWMST22") ? [7, 2021] : b(a, "AFTTIFF55") ? [6, 2020] : b(a, "AFTWI001") ? [7, 2020] : b(a, "AFTDCT31") ? [7, 2020] : b(a, "AFTBAMR311") ? [6, 2020] : b(a, "AFTKMST12") ? [6, 2020] : b(a, "AFTLE") ? [6, 2019] : b(a, "AFTEUFF014") ? [7, 2019] : b(a, "AFTEU014") ? [7, 2019] : b(a, "AFTSO001") ? [7, 2019] : b(a, "AFTEU011") ? [7, 2019] : b(a, "AFTJMST12") ? [6, 2018] : b(a, "AFTRS") ? [5, 2017] : b(a, "AEOHY") ? [7, 2021] : b(a, "AFTLFT962X3") ? [7, 
  2021] : b(a, "AFTLBT962E2") ? [7, 2022] : b(a, "AFTKRT") ? [8, 2023] : b(a, "AFTKM") ? [8, 2023] : b(a, "AFTKA") ? [7, 2021] : b(a, "AFTSSS") ? [7, 2020] : b(a, "AFTSS") ? [7, 2020] : b(a, "AFTT") ? [5, 2020] : b(a, "AFTMM") ? [6, 2018] : b(a, "AFTN") ? [6, 2017] : b(a, "AFTS") ? [5, 2015] : b(a, "AFTM") ? [5, 2014] : b(a, "AFTB") ? [5, 2014] : b(a, "AFTGAZL") ? [7, 2022] : b(a, "AFTR") ? [7, 2019] : b(a, "AFTA") ? [6, 2018] : void 0;
  qd = aa && aa[0];
  rd = c(a, "CriOS/");
  I = c(a, "Chrome/");
  Jc = c(a, "Iron/");
  sd = c(a, "Opera/");
  S = c(a, "OPR/");
  X = !(!ia() && Y.msContentZoomFactor) && !!(g.chrome || g.chromium || g.opr);
  vc = X && 534.3 >= v;
  Je = ld && ja && "11.0.696.34" === I;
  M = void 0 !== gd.touchAction ? 0 : ja ? "4.4.3" : id ? C.connection ? g.searchBoxJavaBridge_ || X ? G.isNaN ? 4.1 : 4 : 4.2 : 4.4 : g.SVGSVGElement ? 3 : void 0 !== g.onhashchange ? yc ? 2.3 : 2.2 : 530 <= v ? 2 : 1.5;
  oa = b(a, "KFTUWI") || b(a, "KFSNWI") ? [8, 13] : b(a, "KFSUWI") || b(a, "KFRAPWI") || b(a, "KFQUWI") ? [8, 12] : b(a, "KFTRWI") || b(a, "KFTRPWI") ? [7, 11] : b(a, "KFONWI") ? [7, 10] : b(a, "KFMUWI") ? [6.3, 9] : b(a, "KFKAWI") ? [6, 8] : b(a, "KFSUWI") || b(a, "KFAUWI") || b(a, "KFDOWI") ? [5, 7] : b(a, "KFGIWI") ? [5, 6] : b(a, "KFTBWI") || b(a, "KFMEWI") || b(a, "KFFOWI") ? [5, 5] : b(a, "KFARWI") || b(a, "KFSAWA") || b(a, "KFSAWI") ? [5 <= w(M) ? 5 : 4, 4] : b(a, "KFSOWI") || b(a, "KFTHWA") || 
  b(a, "KFTHWI") || b(a, "KFAPWA") || b(a, "KFAPWI") ? [3, 3] : b(a, "KFOT") || b(a, "KFTT") || b(a, "KFJWA") || b(a, "KFJWI") ? [2, 2] : b(a, "Kindle Fire") ? [1, 1] : void 0;
  td = oa && oa[0];
  ud = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ");
  Kc = g.puffinDevice;
  pa = Kc && Kc.clientInfo;
  W = pa && "iOS" === pa.os && pa.osVersion;
  vd = c(a, "Puffin/");
  We = !!g.FNRBrowser;
  if (qa = md) {
    (function() {
      for (var Xe in g) {
        if (0 === Xe.indexOf("SlexAPI_")) {
          qa = !0;
          return;
        }
      }
      qa = void 0;
    })();
  }
  Ye = qa;
  Ze = g.PointerEvent ? 13 : g.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : C.sendBeacon ? 11.3 : g.WebAssembly ? 11.2 : g.HTMLMeterElement ? 10.3 : g.Proxy ? 10.2 : g.HTMLPictureElement ? 9.3 : G.isNaN ? 9.2 : g.SharedWorker ? hd && hd.now ? 8 : 8.4 : A.execCommand ? 7.1 : g.webkitURL ? 6.1 : g.Worker ? 5.1 : id ? 4.3 : yc ? 4.1 : 3.2;
  Lc = 0 === k.indexOf("iPhone");
  Mc = 0 === k.indexOf("iPad");
  Nc = 0 === k.indexOf("iPod");
  Oc = "MacIntel" === k && void 0 !== cd;
  wd = b(p, "YJApp-ANDROID");
  $e = c(a.toLowerCase(), "ybrowser/");
  xd = c(a, "Lunascape/");
  yd = !!g.ReactNativeWebView;
  tc = b(a, "EBRD1301") ? 3 : b(a, "EBRD1201") ? 2 : b(a, "EBRD1101") ? 1 : 0;
  zd = 0 > r(3, M) && !yc;
  Q = c(k, "Android ") || c(p, "Android ") || c(a, "Android ") || Pe;
  Ad = b(k, "Android") || b(p, "Android");
  Ge = (Ad || uc && jd) && ka && !na;
  He = Ad && !O && !!L;
  af = uc && jd && !!v;
  Ie = yd || Ye || wd || af || sc() || !sc() && zd;
  Bd = c(a, "iCab");
  Cd = c(a, "KHTML/");
  Dd = c(a, "NetFront/");
  Ed = c(a, "Edge/");
  Fd = c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/");
  Gd = c(p, "Coast/");
  Hd = c(p, "OPT/");
  Id = c(a, "UCBrowser/");
  Jd = c(p, "Silk/");
  Kd = c(a, "Vivaldi/");
  Ld = c(a, "QQBrowser/");
  Md = c(a, "YaBrowser/");
  Nd = c(a, "coc_coc_browser/");
  Od = c(a, "Camino/");
  Pd = c(a, "AOLBUILD/") || c(a, "AOL/") || c(a, "AOL ");
  Qd = c(a, "IceDragon/");
  Rd = c(a, "Iceweasel/");
  Sd = c(a, "TenFourFox/");
  Td = c(a, "Waterfox/");
  Ud = c(a, "GNUzilla/");
  Vd = c(a, "SeaMonkey/");
  Wd = c(a, "PaleMoon/");
  Xd = c(a, "Basilisk/");
  Yd = c(a, "Maxthon/") || c(a, "Maxthon ") || c(a, "MXiOS/");
  Zd = c(a, "Konqueror/");
  $d = c(a, "Midori/");
  ae = c(a, "OmniWeb/");
  be = c(a, "Roccat/");
  ce = c(a, "Epiphany/");
  de = c(a, "WebPositive/");
  ee = c(a, "Comodo Dragon/");
  fe = c(a, "Brave/");
  ge = c(a, "Rockmelt/");
  he = c(a, "Dooble/");
  ie = c(a, "Flock/");
  je = c(a, "Galeon/");
  ke = c(a, "Falkon/");
  le = c(a, "Iceape/");
  me = c(a, "K-Meleon/");
  ne = c(p, "NX/") || c(p, "NF/");
  oe = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/");
  pe = c(a, "FBAV/") || c(a, "FBAN/");
  qe = c(p, "Line/");
  re = c(a, "QtWebEngine/");
  se = c(a, "QtWebKit/");
  te = c(a, "DuckDuckGo/");
  Le ? (e("mylo", 2), m("mylo", 2, "PDA"), n("NetFront", 3.4), Pc = !0) : Pc = void 0;
  (ra = Pc) || ("Nitro" === k ? (e("NintendoDS"), m("NintendoDS", void 0, "GAME"), n("PrestoMobile", 8.5), ra = !0) : ra = void 0);
  (sa = ra) || ("Nintendo DSi" === k ? (e("NintendoDSi", c(a, k + "; Opera/")), m("NintendoDSi", void 0, "GAME"), n("PrestoMobile", 9.5), sa = !0) : sa = void 0);
  (ta = sa) || ("PSP" === k ? (e("PlayStationPortable", c(a, "(PlayStation Portable); ")), m("PlayStationPortable", void 0, "GAME"), n("NetFront", 3.2), ta = !0) : ta = void 0);
  (wa = ta) || ("WinCE" === k ? (e("WindowsCE", 5 > y ? 3 : 4.1, "PDA"), wa = !0) : wa = void 0);
  (xa = wa) || (b(a, "Windows Mobile;") || la ? (e("WindowsMobile", 6.1, "PDA"), xa = !0) : xa = void 0);
  (ya = xa) || (b(a, "BlackBerry") || b(a, "BB10") ? (e("BlackBerry", F, "PHONE"), ya = !0) : ya = void 0);
  (za = ya) || ("Nintendo 3DS" === k ? (e("Nintendo3DS", T), m("Nintendo3DS", void 0, "GAME"), n("WebKit", v || 535), d("NetFrontNX", T), za = !0) : za = void 0);
  (Aa = za) || ("New Nintendo 3DS" === k || b(a, "iPhone OS 6_0") && 320 === wc && 240 === xc ? (e("NewNintendo3DS", T), m("NewNintendo3DS", void 0, "GAME"), Aa = !0) : Aa = void 0);
  (Ba = Aa) || (L && L.wiiremote ? (e("Wii", c(p, k + "; U; ; ")), m("Wii", void 0, "GAME"), Ba = !0) : Ba = void 0);
  if (!(Ca = Ba)) {
    if (g.wiiu) {
      ue = !!g.webkitCancelAnimationFrame;
      T ? e("WiiU", T) : (e("WiiU", ue ? 4 : 2.1), x = b(p, "Macintosh;") || b(p, "Windows NT") && !b(p, "Touch"));
      m("WiiU", void 0, "GAME");
      n("WebKit", c(p, "AppleWebKit/") || (ue ? 536 : 534));
      d("NetFrontNX", 3);
      Ca = !0;
    } else {
      Ca = void 0;
    }
  }
  (Da = Ca) || (Fc || Gc || Cc || Ec ? (Fc ? (e("WindowsPhone", 10, "PHONE"), x = !0) : Gc ? (e("WindowsPhone", 11 === y ? 8.1 : 10 === y ? 8 : 9 === y ? 7.5 : 7, "PHONE"), x = !0) : e("WindowsPhone", Cc || Ec, "PHONE"), Da = !0) : Da = void 0);
  (Ea = Da) || (b(a, "Maemo") ? (e("Maemo"), Ea = !0) : Ea = void 0);
  (Fa = Ea) || (b(a, "MeeGo") ? (e("MeeGo"), Fa = !0) : Fa = void 0);
  (Ga = Fa) || (g.palmGetResource ? (e("WebOS", c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), b(a, "webOS.TV") || b(a, "/SmartTV") ? "TV" : "PHONE"), Ga = !0) : Ga = void 0);
  (Ha = Ga) || (od ? (e("Tizen", od, "PHONE"), n("SamsungInternet", R), d("SamsungInternet", R), Ha = !0) : Ha = void 0);
  (Ia = Ha) || ("PlayStation Vita" === k ? (e("PlayStationVita", c(p, k + " ")), m("PlayStationVita", void 0, "GAME"), Ia = !0) : Ia = void 0);
  (Ja = Ia || xe()) || (!k && b(p, "Nintendo Switch;") ? (e("NintendoSwitch", T), m("NintendoSwitch", void 0, "GAME"), Ja = !0) : Ja = void 0);
  (Ka = Ja || Be()) || (b(a, "SunOS") || b(a, "Sun Solaris") ? (e("SunOS"), K = "PC", Ka = !0) : Ka = void 0);
  (ba = Ka) || (Se ? (e("Xbox360"), m("Xbox360", void 0, "GAME"), ba = !0) : pd ? (e("XboxOne"), m("XboxOne", void 0, "GAME"), ba = !0) : ba = void 0);
  (La = ba) || ("WinCE" === k || b(a, "Windows Mobile;") || la || Fc || Gc || Cc || Ec || 0 !== k.indexOf("Win") ? La = void 0 : (e("Windows", c(a, "Windows NT ") || c(a, "Windows "), "PC"), La = !0));
  (va = La) || (Xc() ? (e("Mac", c(a.split("_").join("."), "Mac OS X "), "PC"), va = !0) : va = void 0);
  (Ma = va) || (void 0 !== g.onmoztimechange ? (e("FirefoxOS", 0 > r(0, 18.1) ? "1.0.1" : 0 > r(0, 19) ? 1.1 : 0 > r(0, 27) ? 1.2 : 0 > r(0, 29) ? 1.3 : 0 > r(0, 31) ? 1.4 : 0 > r(0, 33) ? 2 : 0 > r(0, 35) ? 2.1 : 0 > r(0, 38) ? 2.2 : 0 > r(0, 45) ? 2.5 : 2.6, b(a, "Mobile") ? "PHONE" : b(a, "Tablet") ? "TABLET" : b(a, "TV") ? "TV" : "PHONE"), Ma = !0) : Ma = void 0);
  (Na = Ma) || (td || qd ? (e("FireOS", td || qd), Na = !0) : Na = void 0);
  (Oa = Na) || (ud ? (e("ChromeOS", ud, "PC"), Oa = !0) : Oa = void 0);
  if (!(Pa = Oa)) {
    if (Lc || Mc || Nc || Oc || Dc || W) {
      if (W) {
        e("iOS", W);
      } else if (B = "iOS", Dc) {
        u = Dc;
      } else if ((u = c(p.split("_").join("."), "OS ")) || (x = !0), !u || We) {
        u = Ze;
      }
      Pa = !0;
    } else {
      Pa = void 0;
    }
  }
  Pa || Fe() || !ld || (e("Linux"), K = "PC");
  if (!U) {
    if (Lc || Mc || Nc || Oc) {
      if (W) {
        Ra = pa.model;
        switch(Ra.substr(0, 4)) {
          case "iPho":
            m("iPhone", c(Ra, "iPhone"));
            break;
          case "iPad":
            m("iPad", c(Ra, "iPad"));
            break;
          case "iPod":
            m("iPod", c(Ra, "iPod"));
        }
      } else {
        Qc = 1 === g.devicePixelRatio;
        ve = wc === 1.5 * xc || 1.5 * wc === xc;
        Lc ? m("iPhone", ve ? Qc ? "1~3" : "4~5" : "6~") : Mc || Oc ? m("iPad", Qc ? "~2" : "3~") : Nc && m("iPod", ve ? Qc ? "~3" : 4 : "5~");
      }
      we = !0;
    } else {
      we = void 0;
    }
    (Sa = we) || (dd() ? (m("BOOX", void 0, "EINK_READER"), Sa = !0) : Sa = void 0);
    (Qa = Sa || void 0) || (aa || Ic || Ve ? (Ue ? (m("FireTV", void 0, "TV"), x = !0) : m("FireTV", aa && aa[1], "TV"), Qa = !0) : Qa = void 0);
    (Ta = Qa || void 0) || (oa ? (m("KindleFire", oa[1], "TABLET"), Ta = !0) : Ta = void 0);
    (Ua = Ta) || (b(a, "Kobo") ? (m("Kobo", void 0, "EINK_READER"), Ua = !0) : Ua = void 0);
    (Va = Ua || void 0) || (ed() ? (m("Nook", void 0, "EINK_READER"), Va = !0) : Va = void 0);
    (Wa = Va) || (b(a, " PocketBook") ? (m("PocketBook", void 0, "EINK_READER"), Wa = !0) : Wa = void 0);
    (Xa = Wa) || (0 < tc ? (m("SonyReader", tc, "EINK_READER"), Xa = !0) : Xa = void 0);
    Xa || !sc() && zd && m("Kindle", 5, "EINK_READER");
  }
  if (!h) {
    !O && L ? (n("PC" === K || "Wii" === B ? "Presto" : "PrestoMobile", Me || Ne), Rc = !0) : Rc = void 0;
    (Ya = Rc) || (O || Ac ? (n("OperaMini", Ac), d("Opera", t), Ya = !0) : Ya = void 0);
    (Za = Ya) || (ia() ? ("PC" !== K ? n("TridentMobile", y) : Xc() ? (5 <= y ? n("Tasman", y) : n("Trident", y), d("IEForMac", y)) : (n("Trident", y), 10 <= y && 6.2 <= u && 7 > u && 0 === screenY && innerHeight + 1 !== outerHeight && d("ModernIE", y), 7 <= Bc && Bc !== y && d("InternetExplorer", Bc)), Za = !0) : Za = void 0);
    (ab = Za) || (!ia() && Y.msContentZoomFactor ? (n("WindowsPhone" === B ? "EdgeMobile" : "EdgeHTML", c(p, "Edge/")), ab = !0) : ab = void 0);
    (bb = ab) || (na ? (n("Goanna", na), bb = !0) : bb = void 0);
    (cb = bb) || (ka && !na ? (n(fa() ? "Fennec" : "Gecko", Te || Hc), cb = !0) : cb = void 0);
    (db = cb) || (Bd ? (n("iCab", Bd), d("iCab", t), db = !0) : db = void 0);
    (eb = db) || (Cd ? (n("KHTML", Cd), eb = !0) : eb = void 0);
    (fb = eb) || (Dd ? (n("NetFront", Dd), d("NetFront", t), fb = !0) : fb = void 0);
    ($a = fb) || (P() ? (n("UCWEB", Oe), d("UC", t), $a = !0) : $a = void 0);
    (gb = $a) || (R || fa() && H && nd ? (n("SamsungInternet", R || nd), gb = !0) : gb = void 0);
    (ib = gb) || (bd() ? (n("SafariMobile", u), ib = !0) : ib = void 0);
    (jb = ib) || ("iOS" !== B || bd() || O || Ac || P() ? jb = void 0 : (n("iOSWebView", u), jb = !0));
    if (!(hb = jb)) {
      Sc = "Android" === B;
      if (Sc && vc || X || Sc && ja || Sc && (F || H) || I || S) {
        Tc = "Android" === B;
        Tc && vc ? (n("AndroidWebView", M), H && (x = !0)) : X ? (n(fa() ? "ChromiumMobile" : "Chromium", I || Jc), H && (x = !0)) : Tc && ja ? (n("AndroidWebView", M), H && (x = !0)) : Tc && (F || H) ? (n("AndroidWebView", M), H && (x = !0)) : (I || S) && n(fa() ? "ChromiumMobile" : "Chromium", I);
        hb = !0;
      } else {
        hb = void 0;
      }
    }
    hb || v && n("WebKit", v);
  }
  if (!ha) {
    "EdgeHTML" === h || "EdgeMobile" === h || Ed || Fd ? (d("Edge", "EdgeHTML" === h || "EdgeMobile" === h ? t : Ed || Fd), Uc = !0) : Uc = void 0;
    (nb = Uc) || (Gd ? (d("OperaCoast", Gd), nb = !0) : nb = void 0);
    (ob = nb) || (Hd || "iOS" === B && !ca("isSecureContext", g) ? (d("OperaTurbo", Hd), x || (x = !b(p, "Mobile/")), ob = !0) : ob = void 0);
    (mb = ob) || (wd ? (d("Yahoo", $e), mb = !0) : mb = void 0);
    (pb = mb) || (Id ? (d("UC", Id), pb = !0) : pb = void 0);
    (qb = pb) || (Jd ? (d("SilK", Jd), qb = !0) : qb = void 0);
    (rb = qb) || (Kd ? (d("Vivaldi", Kd), rb = !0) : rb = void 0);
    (sb = rb) || (Ld ? (d("QQ", Ld), sb = !0) : sb = void 0);
    (tb = sb) || (Md ? (d("Yandex", Md), tb = !0) : tb = void 0);
    (ub = tb) || (Nd ? (d("coccoc", Nd), ub = !0) : ub = void 0);
    (vb = ub) || (Od ? (d("Camino", Od), vb = !0) : vb = void 0);
    (wb = vb) || (b(a, "SE 2.X MetaSr 1.0") ? (d("Sogou"), wb = !0) : wb = void 0);
    (lb = wb) || (Zc() ? (d("FirefoxFocus", $c || V), lb = !0) : lb = void 0);
    (yb = lb) || (Pd ? (d("AOL", Pd), yb = !0) : yb = void 0);
    (zb = yb) || (Qd ? (d("IceDragon", Qd), zb = !0) : zb = void 0);
    (Ab = zb) || (Rd ? (d("Iceweasel", Rd), Ab = !0) : Ab = void 0);
    (Bb = Ab) || (Sd ? (d("TenFourFox", Sd), Bb = !0) : Bb = void 0);
    (Cb = Bb) || (Td ? (d("Waterfox", Td), Cb = !0) : Cb = void 0);
    (Db = Cb) || (Ud ? (d("GNUzilla", Ud), Db = !0) : Db = void 0);
    (Eb = Db) || (Vd ? (d("SeaMonkey", Vd), Eb = !0) : Eb = void 0);
    (Fb = Eb) || (Wd ? (d("PaleMoon", Wd), Fb = !0) : Fb = void 0);
    (Gb = Fb) || (Xd ? (d("Basilisk", Xd), Gb = !0) : Gb = void 0);
    (Hb = Gb) || (Yd || b(a, "Maxthon") ? (d("Maxthon", Yd), Hb = !0) : Hb = void 0);
    (Ib = Hb) || (b(a, "Avant Browser;") ? (d("Avant"), Ib = !0) : Ib = void 0);
    (Jb = Ib) || (Zd ? (d("Konqueror", Zd), Jb = !0) : Jb = void 0);
    (Kb = Jb) || ($d ? (d("Midori", $d), Kb = !0) : Kb = void 0);
    (Lb = Kb) || (ae ? (d("OmniWeb", ae), Lb = !0) : Lb = void 0);
    (Mb = Lb) || (be ? (d("Roccat", be), Mb = !0) : Mb = void 0);
    (Nb = Mb) || (ce ? (d("Epiphany", ce), Nb = !0) : Nb = void 0);
    (Ob = Nb) || (de ? (d("WebPositive", de), Ob = !0) : Ob = void 0);
    (xb = Ob) || (Jc || b(a, " Iron ") ? (d("Iron", Jc || I), xb = !0) : xb = void 0);
    (Qb = xb) || (ee ? (d("ComodoDragon", ee), Qb = !0) : Qb = void 0);
    (Rb = Qb) || (fe || b(a, " Brave ") || "iOSWebView" === h && ca("sameOrigin", g) ? (d("Brave", fe || ("Chromium" === h || "ChromiumMobile" === h ? I : void 0)), Rb = !0) : Rb = void 0);
    (Sb = Rb) || (ge ? (d("Rockmelt", ge), Sb = !0) : Sb = void 0);
    (Tb = Sb) || ("iOSWebView" === h && ca("enableWebGL", g) ? (d("Dolphin"), Tb = !0) : Tb = void 0);
    (Pb = Tb) || (Kc || vd ? (d("Puffin", vd), Pb = !0) : Pb = void 0);
    (Ub = Pb) || (he ? (d("Dooble", he), Ub = !0) : Ub = void 0);
    (Vb = Ub) || (ie ? (d("Flock", ie), Vb = !0) : Vb = void 0);
    (Wb = Vb) || (je ? (d("Galeon", je), Wb = !0) : Wb = void 0);
    (Xb = Wb) || (ke ? (d("Falkon", ke), Xb = !0) : Xb = void 0);
    (Yb = Xb) || (le ? (d("Iceape", le), Yb = !0) : Yb = void 0);
    (Zb = Yb) || (me ? (d("KMeleon", me), Zb = !0) : Zb = void 0);
    ($b = Zb) || (ne ? (d("NetFrontNX", ne), $b = !0) : $b = void 0);
    (ac = $b) || (oe ? (d("NetscapeNavigator", oe), ac = !0) : ac = void 0);
    (kb = ac) || (la ? (d("Iris", la), kb = !0) : kb = void 0);
    (dc = kb) || (pe ? (d("Facebook", pe), dc = !0) : dc = void 0);
    (ec = dc) || (qe ? (d("LINE", qe), ec = !0) : ec = void 0);
    (fc = ec) || (re ? (d("QtWebEngine", re), fc = !0) : fc = void 0);
    (gc = fc) || (se ? (d("QtWebKit", se), gc = !0) : gc = void 0);
    (hc = gc) || (te ? (d("DuckDuckGo", te), hc = !0) : hc = void 0);
    (cc = hc) || (xd || yd ? (d("Lunascape", xd), cc = !0) : cc = void 0);
    (ic = cc) || ("Gecko" === h && 0 > r(t, 1.8) && !Hc ? (d("Mozilla", t), ic = !0) : ic = void 0);
    (bc = ic) || ("Gecko" === h || "Fennec" === h || Ic || !Zc() && V ? (d("Firefox", "Gecko" === h || "Fennec" === h ? t : Hc || V), bc = !0) : bc = void 0);
    (lc = bc) || (null === g.onoperadetachedviewchange ? (d("OperaGX", S), lc = !0) : lc = void 0);
    (kc = lc) || (sd || S || "Presto" === h || "PrestoMobile" === h ? (d("Opera", "Presto" === h || "PrestoMobile" === h ? t : sd || S), kc = !0) : kc = void 0);
    (mc = kc) || ("Trident" === h || "TridentMobile" === h || "Tasman" === h ? (d("InternetExplorer", t), mc = !0) : mc = void 0);
    (nc = mc) || ("SamsungInternet" === h ? (d("SamsungInternet", t), nc = !0) : nc = void 0);
    (jc = nc) || (rd || I || ad() ? (d("Chrome", ad() ? t : I || rd), jc = !0) : jc = void 0);
    (oc = jc) || ("AndroidWebView" === h && 0 > r(t, 5) ? (d("AndroidBrowser", t), oc = !0) : oc = void 0);
    oc || (("WebKit" === h || "SafariMobile" === h || "iOSWebView" === h) && b(a, "Safari/") || F) && d("Safari", F || (73 > v ? .8 : 85 > v ? .9 : 100 > v ? 1 : 125 > v ? 1.1 : 312 > v ? 1.2 : 412 > v ? 1.3 : 419.3 >= v ? 2 : 525.13 >= v ? 3 : 525.25 >= v ? 3.1 : 3.2));
  }
  B && (z.PLATFORM = B, u && (z.PLATFORM_VERSION = ea(u)));
  U && (z.DEVICE = U, pc && (z.DEVICE_GENERATION = ea(pc)));
  K && (z.DEVICE_TYPE = K);
  h && (z.ENGINE = h, t && (z.ENGINE_VERSION = ea(t)));
  ha && (z.BRAND = ha, qc && (z.BRAND_VERSION = ea(qc)));
  z.PCSITE_REQUESTED = x;
})(whatBrowserAmI, this, document, navigator, screen, parseFloat, Number);

