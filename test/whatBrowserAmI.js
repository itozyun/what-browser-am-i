/* what-browser-am-i@0.7.1
(c) 2021-2024 itozyun(https://github.com/itozyun/what-browser-am-i#readme), MIT. */
var whatBrowserAmI = {conpare:function(z, g) {
  for (var A = 0, C = (z + "").split("."), N = (g + "").split("."), w = C.length, H = N.length, r, J, b; !(C[w - 1] - 0);) {
    --w;
  }
  for (; !(N[H - 1] - 0);) {
    --H;
  }
  for (r = w < H ? w : H; A < r; ++A) {
    if (J = C[A] - 0, b = N[A] - 0, J !== b) {
      return J > b ? 1 : -1;
    }
  }
  return w > H ? 1 : w === H ? 0 : -1;
}};
(function(z, g, A, C, N, w, H) {
  function r(f, m) {
    return f && m ? z.conpare(f, m) : NaN;
  }
  function J(f, m) {
    var q = w(f.split(m)[1]);
    return 0 <= q ? q : 0;
  }
  function b(f, m) {
    return 0 <= f.indexOf(m);
  }
  function Wc(f) {
    return b(f, "Linux armv") || b(f, "Linux aarch") || b(f, "Linux i686") || b(f, "Linux x86_64");
  }
  function ca(f, m) {
    for (var q in m) {
      if (q === f) {
        return !0;
      }
    }
  }
  function c(f, m) {
    var q = f.split(m)[1], D = "", E = -1, da;
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
  function Xc(f) {
    for (var m = arguments, q = 1, D = m[0], E; q < m.length; ++q) {
      E = m[q], 0 > r(D, E) && (D = E);
    }
    return D;
  }
  function ea(f) {
    return f === f + "" ? f : f === f - 0 ? "" + f : f.min && f.max ? f.min + "~" + f.max : f.min ? f.min + "~" : "~" + f.max;
  }
  function fa() {
    return "Android" === B || "FireOS" === B;
  }
  function e(f, m, q) {
    B = f;
    if (m || 0 <= m) {
      u = m;
    }
    if (q || 0 <= q) {
      K = q;
    }
  }
  function n(f, m, q) {
    U = f;
    if (m || 0 <= m) {
      pc = m;
    }
    if (q || 0 <= q) {
      K = q;
    }
  }
  function l(f, m) {
    h = f;
    if (m || 0 <= m) {
      t = m;
    }
  }
  function d(f, m) {
    ha = f;
    if (m || 0 <= m) {
      qc = m;
    }
  }
  function Yc() {
    return "Mac68K" === k || "MacPowerPC" === k || "MacPPC" === k || "MacIntel" === k || "MacM1" === k;
  }
  function ia() {
    return !(!O && L) && Zc || !!rc;
  }
  function P() {
    return b(a, "UCWEB");
  }
  function we() {
    if (xe) {
      return e("PlayStation3", c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")), n("PlayStation", 3, "GAME"), 0 > r(u, "4.10") && l("Sony", u), !0;
    }
    if (ye) {
      return e("PlayStation4", c(p, k + "/")), n("PlayStation", 4, "GAME"), !0;
    }
    if (ze) {
      return e("PlayStation5", c(p, k + "/")), n("PlayStation", 5, "GAME"), !0;
    }
  }
  function Ae() {
    if (Be) {
      return e("FreeBSD"), !0;
    }
    if (Ce) {
      return e("OpenBSD"), !0;
    }
    if (De) {
      return e("NetBSD"), !0;
    }
  }
  function $c() {
    return !!ad || !!V && 9 > w(V) && "iOSWebView" === h && 11 <= w(u);
  }
  function bd() {
    return "Chromium" === h || "ChromiumMobile" === h || "AndroidWebView" === h && 0 > r(5, t);
  }
  function cd() {
    return "iOS" === B && !W && (dd || ("iPad" === U || 12 > u) && !!ca("webkitFullscreenEnabled", A) || 11 <= u && 13 > u && !!C.mediaDevices);
  }
  function ed() {
    return b(a, " MC_FAUST") || b(a, " MC_DARWIN") || b(a, " DARWIN") || b(a, " KON_TIKI") || b(a, " Kon_Tiki2") || b(a, " MC_GAME") || b(a, " LIVINGSTONE") || b(a, " Lomonosov") || b(a, " MC_Cristo") || b(a, " NoteAir") || b(a, " MC_NovaPro") || b(a, " Poke2Color");
  }
  function fd() {
    return b(a, "BNRV300") || b(a, "BNRV350") || b(a, "BNRV500") || b(a, "BNRV510") || b(a, "BNRV520") || b(a, "BNRV700") || b(a, "BNRV1000") || b(a, "BNRV1100") || b(a, "BNRV1300");
  }
  function sc() {
    return ed() || b(a, "Kobo") || fd() || b(a, " PocketBook") || 0 < tc || !1;
  }
  function Ee() {
    var f;
    if (Fe) {
      return b(a, "Android 4.4;") ? e("Android", "2.2~3", "PHONE") : 4 <= w(Q) ? e("Android", Q, "PHONE") : e("Android", "2.2~3", "PHONE"), uc && (x = !0), !0;
    }
    if (Ge) {
      f = b(a, "Tablet");
      Q ? e("Android", Q, f ? "TABLET" : "PHONE") : (e("Android", "1.6~", f ? "TABLET" : "PHONE"), x = !0);
      return !0;
    }
    if (Q) {
      return e("Android", Q, "PHONE"), !0;
    }
    if (He) {
      return R ? e("Android", "4.4~", "PHONE") : X && !vc || S ? e("Android", "4~", "PHONE") : e("Android", 0 > r(M, 5) ? M : "5~", "PHONE"), I = !0;
    }
    if (Ie) {
      return e("Android"), I = !0;
    }
  }
  var a = C.userAgent, p = C.appVersion, gd = w(p) || 0, k = C.platform, rc = A.documentMode, Zc = !!A.all, ja = !!A.registerElement, wc = N.width, xc = N.height, Y = A.documentElement, hd = Y && Y.style, yc = !!g.HTMLAudioElement, id = g.performance, jd = !!g.Int8Array, kd = void 0 !== g.ontouchstart, dd = C.standalone, F = c(p, "Version/") || c(a, "Version/"), V = c(a, "FxiOS/"), v = J(a, "AppleWebKit/"), zc, ld, ka, md, nd, uc, B, h, t, ha, qc, U, pc, K, x, I, Ke, O, Ac, L, Le, Me, y, Bc, la, 
  T, Ne, Cc, Dc, Oe, Ec, Fc, Gc, R, Z, od, pd, xe, ye, ze, Be, Ce, De, qd, Re, na, ad, Hc, Ic, Se, Te, Ue, aa, rd, sd, G, Jc, td, S, X, vc, Ie, M, oa, ud, vd, Kc, pa, W, wd, Ve, qa, Xe, Ye, Lc, Mc, Nc, Oc, xd, Ze, yd, zd, tc, Ad, Q, Bd, Fe, Ge, $e, He, Cd, Dd, Ed, Pc, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, ra, Qc, sa, ta, va, wa, xa, ya, za, Aa, Ba, Ca, te, Da, Ea, Fa, Ga, 
  Ha, Ia, Ja, Ka, ba, La, Ma, Na, Oa, Pa, u, Qa, Ra, Rc, ue, ve, Sa, Ta, Ua, Va, Wa, Xa, Ya, Sc, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, Tc, Uc, mb, nb, ob, Vc, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc;
  if (zc = !Zc) {
    (function() {
      for (var Je in hd) {
        if (0 === Je.indexOf("Moz")) {
          ld = !0;
          return;
        }
      }
      ld = void 0;
    })();
    zc = !!ld;
  }
  ka = zc;
  md = b(k, "Linux");
  nd = Wc(k);
  uc = nd && !b(a, k) && Wc(a);
  B = "";
  h = "";
  ha = "";
  U = "";
  K = "";
  x = !1;
  I = !1;
  Ke = 2 === gd && b(a, "Sony/COM2/");
  O = g.operamini;
  Ac = Xc(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || O && F;
  L = g.opera;
  Le = L && L.version && L.version() || NaN;
  Me = Xc(c(a, "Opera "), F, gd);
  y = rc ? rc : g.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : g.attachEvent ? 5 : 4;
  Bc = J(p, "Trident/") + 4;
  la = c(a.toLowerCase(), "iris");
  T = c(a, "NintendoBrowser/");
  Ne = P() ? c(a, " U2/") : "";
  Cc = P() ? c(a, "; wds ") : "";
  Dc = P() ? c(a.split("_").join("."), "; iPh OS ") : "";
  Oe = P() ? c(a, "; Adr ") : "";
  Ec = c(a, "Windows Phone ") || c(p, "Windows Phone OS ");
  Fc = !ia() && !!Y.msContentZoomFactor && "ARM" === k;
  Gc = 7 <= y && b(p, "ZuneWP");
  R = J(a, "SamsungBrowser/");
  if (Z = !R && [].pop) {
    (function() {
      for (var ma, Pe = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "); ma = 
      Pe.pop();) {
        if (b(a, ma)) {
          Z = 2 > w(F) ? F : .9;
          return;
        }
      }
      for (var Qe = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" "); ma = 
      Qe.pop();) {
        if (b(a, ma)) {
          Z = F;
          return;
        }
      }
      Z = void 0;
    })();
  }
  od = Z || NaN;
  pd = c(a, "Tizen ");
  xe = "PlayStation 3" === k;
  ye = "PlayStation 4" === k;
  ze = "PlayStation 5" === k;
  Be = b(a, "FreeBSD");
  Ce = b(a, "OpenBSD");
  De = b(a, "NetBSD");
  qd = b(a, "Xbox One");
  Re = !qd && b(a, "Xbox");
  na = ka ? c(a, "Goanna/") : "";
  ad = c(a, "Focus/") || c(a, "Klar/");
  Hc = c(a, "Firefox/");
  Ic = !!g._firefoxTV_playbackStateObserverJava;
  Se = ka ? c(a, "rv:") || c(a.substr(a.indexOf(") Gecko/") - 11), "; ") : "";
  Te = Ic ? J(a, "diordnA ") : 0;
  Ue = b(a, "AmazonWebAppPlatform");
  aa = b(a, "AFTBTX4") ? [7, 2023] : b(a, "AFTMD002") ? [7, 2023] : b(a, "AFTSHN02") ? [7, 2023] : b(a, "AFTMD001") ? [7, 2023] : b(a, "AFTKA002") || b(a, "AFTKAUK002") ? [7, 2023] : b(a, "AFTHA004") ? [7, 2022] : b(a, "AFTTIFF43") ? [7, 2022] : b(a, "AFTANNA0") ? [7, 2022] : b(a, "AFTHA001") ? [7, 2022] : b(a, "AFTMON001") || b(a, "AFTMON002") ? [7, 2022] : b(a, "AFTJULI1") ? [7, 2021] : b(a, "AFTHA003") ? [7, 2021] : b(a, "AFTTI43") ? [7, 2021] : b(a, "AFTPR001") ? [7, 2020] : b(a, "AFTBU001") ? 
  [6, 2020] : b(a, "AFTHA002") ? [7, 2021] : b(a, "AFTWMST22") ? [7, 2021] : b(a, "AFTTIFF55") ? [6, 2020] : b(a, "AFTWI001") ? [7, 2020] : b(a, "AFTDCT31") ? [7, 2020] : b(a, "AFTBAMR311") ? [6, 2020] : b(a, "AFTKMST12") ? [6, 2020] : b(a, "AFTLE") ? [6, 2019] : b(a, "AFTEUFF014") ? [7, 2019] : b(a, "AFTEU014") ? [7, 2019] : b(a, "AFTSO001") ? [7, 2019] : b(a, "AFTEU011") ? [7, 2019] : b(a, "AFTJMST12") ? [6, 2018] : b(a, "AFTRS") ? [5, 2017] : b(a, "AEOHY") ? [7, 2021] : b(a, "AFTLFT962X3") ? [7, 
  2021] : b(a, "AFTLBT962E2") ? [7, 2022] : b(a, "AFTKRT") ? [8, 2023] : b(a, "AFTKM") ? [8, 2023] : b(a, "AFTKA") ? [7, 2021] : b(a, "AFTSSS") ? [7, 2020] : b(a, "AFTSS") ? [7, 2020] : b(a, "AFTT") ? [5, 2020] : b(a, "AFTMM") ? [6, 2018] : b(a, "AFTN") ? [6, 2017] : b(a, "AFTS") ? [5, 2015] : b(a, "AFTM") ? [5, 2014] : b(a, "AFTB") ? [5, 2014] : b(a, "AFTGAZL") ? [7, 2022] : b(a, "AFTR") ? [7, 2019] : b(a, "AFTA") ? [6, 2018] : void 0;
  rd = aa && aa[0];
  sd = c(a, "CriOS/");
  G = c(p, "Chrome/");
  Jc = c(a, "Iron/");
  td = c(a, "Opera/");
  S = c(a, "OPR/");
  X = !(!ia() && Y.msContentZoomFactor) && !!(g.chrome || g.chromium || g.opr);
  vc = X && 534.3 >= v;
  Ie = md && ja && "11.0.696.34" === G;
  M = void 0 !== hd.touchAction ? 0 : ja ? "4.4.3" : jd ? C.connection ? g.searchBoxJavaBridge_ || X ? H.isNaN ? 4.1 : 4 : 4.2 : 4.4 : g.SVGSVGElement ? 3 : void 0 !== g.onhashchange ? yc ? 2.3 : 2.2 : 530 <= v ? 2 : 1.5;
  oa = b(a, "KFTUWI") || b(a, "KFSNWI") ? [8, 13] : b(a, "KFSUWI") || b(a, "KFRAPWI") || b(a, "KFQUWI") ? [8, 12] : b(a, "KFTRWI") || b(a, "KFTRPWI") ? [7, 11] : b(a, "KFONWI") ? [7, 10] : b(a, "KFMUWI") ? [6.3, 9] : b(a, "KFKAWI") ? [6, 8] : b(a, "KFSUWI") || b(a, "KFAUWI") || b(a, "KFDOWI") ? [5, 7] : b(a, "KFGIWI") ? [5, 6] : b(a, "KFTBWI") || b(a, "KFMEWI") || b(a, "KFFOWI") ? [5, 5] : b(a, "KFARWI") || b(a, "KFSAWA") || b(a, "KFSAWI") ? [5 <= w(M) ? 5 : 4, 4] : b(a, "KFSOWI") || b(a, "KFTHWA") || 
  b(a, "KFTHWI") || b(a, "KFAPWA") || b(a, "KFAPWI") ? [3, 3] : b(a, "KFOT") || b(a, "KFTT") || b(a, "KFJWA") || b(a, "KFJWI") ? [2, 2] : b(a, "Kindle Fire") ? [1, 1] : void 0;
  ud = oa && oa[0];
  vd = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ");
  Kc = g.puffinDevice;
  pa = Kc && Kc.clientInfo;
  W = pa && "iOS" === pa.os && pa.osVersion;
  wd = c(a, "Puffin/");
  Ve = !!g.FNRBrowser;
  if (qa = nd) {
    (function() {
      for (var We in g) {
        if (0 === We.indexOf("SlexAPI_")) {
          qa = !0;
          return;
        }
      }
      qa = void 0;
    })();
  }
  Xe = qa;
  Ye = g.PointerEvent ? 13 : g.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : C.sendBeacon ? 11.3 : g.WebAssembly ? 11.2 : g.HTMLMeterElement ? 10.3 : g.Proxy ? 10.2 : g.HTMLPictureElement ? 9.3 : H.isNaN ? 9.2 : g.SharedWorker ? id && id.now ? 8 : 8.4 : A.execCommand ? 7.1 : g.webkitURL ? 6.1 : g.Worker ? 5.1 : jd ? 4.3 : yc ? 4.1 : 3.2;
  Lc = 0 === k.indexOf("iPhone");
  Mc = 0 === k.indexOf("iPad");
  Nc = 0 === k.indexOf("iPod");
  Oc = "MacIntel" === k && void 0 !== dd;
  xd = b(p, "YJApp-ANDROID");
  Ze = c(a.toLowerCase(), "ybrowser/");
  yd = c(p, "Lunascape ") || c(a, "Lunascape/");
  zd = !!g.ReactNativeWebView;
  tc = b(a, "EBRD1301") ? 3 : b(a, "EBRD1201") ? 2 : b(a, "EBRD1101") ? 1 : 0;
  Ad = 0 > r(3, M) && !yc;
  Q = c(k, "Android ") || c(p, "Android ") || c(a, "Android ") || Oe;
  Bd = b(k, "Android") || b(p, "Android");
  Fe = (Bd || uc && kd) && ka && !na;
  Ge = Bd && !O && !!L;
  $e = uc && kd && !!v;
  He = zd || Xe || xd || $e || sc() || !sc() && Ad;
  Cd = c(a, "iCab");
  Dd = c(a, "KHTML/");
  Ed = c(a, "NetFront/");
  Pc = c(p, "Falkon/");
  Fd = c(a, "Servo/");
  Gd = c(a, "Edge/");
  Hd = c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/");
  Id = c(p, "Coast/");
  Jd = c(p, "OPT/");
  Kd = c(a, "UCBrowser/");
  Ld = c(p, "Silk/");
  Md = c(a, "Vivaldi/");
  Nd = c(a, "QQBrowser/");
  Od = c(a, "YaBrowser/");
  Pd = c(a, "coc_coc_browser/");
  Qd = c(a, "Camino/");
  Rd = c(a, "AOLBUILD/") || c(a, "AOL/") || c(a, "AOL ");
  Sd = c(a, "IceDragon/");
  Td = c(a, "Iceweasel/");
  Ud = c(a, "TenFourFox/");
  Vd = c(a, "Waterfox/");
  Wd = c(a, "GNUzilla/");
  Xd = c(a, "SeaMonkey/");
  Yd = c(a, "PaleMoon/");
  Zd = c(a, "Basilisk/");
  $d = c(a, "Maxthon/") || c(a, "Maxthon ") || c(a, "MXiOS/");
  ae = c(a, "Konqueror/");
  be = c(a, "Midori/");
  ce = c(a, "OmniWeb/");
  de = c(a, "Roccat/");
  ee = c(a, "Epiphany/");
  fe = c(a, "WebPositive/");
  ge = c(a, "Comodo Dragon/");
  he = c(a, "Brave/");
  ie = c(a, "Rockmelt/");
  je = c(a, "Dooble/");
  ke = c(a, "Flock/");
  le = c(a, "Galeon/");
  me = c(a, "Iceape/");
  ne = c(a, "K-Meleon/");
  oe = c(p, "NX/") || c(p, "NF/");
  pe = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/");
  qe = c(a, "FBAV/") || c(a, "FBAN/");
  re = c(p, "Line/");
  se = c(a, "DuckDuckGo/");
  Ke ? (e("mylo", 2), n("mylo", 2, "PDA"), l("NetFront", 3.4), Qc = !0) : Qc = void 0;
  (ra = Qc) || ("Nitro" === k ? (e("NintendoDS"), n("NintendoDS", void 0, "GAME"), l("PrestoMobile", 8.5), ra = !0) : ra = void 0);
  (sa = ra) || ("Nintendo DSi" === k ? (e("NintendoDSi", c(a, k + "; Opera/")), n("NintendoDSi", void 0, "GAME"), l("PrestoMobile", 9.5), sa = !0) : sa = void 0);
  (ta = sa) || ("PSP" === k ? (e("PlayStationPortable", c(a, "(PlayStation Portable); ")), n("PlayStationPortable", void 0, "GAME"), l("NetFront", 3.2), ta = !0) : ta = void 0);
  (wa = ta) || ("WinCE" === k ? (e("WindowsCE", 5 > y ? 3 : 4.1, "PDA"), wa = !0) : wa = void 0);
  (xa = wa) || (b(a, "Windows Mobile;") || la ? (e("WindowsMobile", 6.1, "PDA"), xa = !0) : xa = void 0);
  (ya = xa) || (b(a, "BlackBerry") || b(a, "BB10") ? (e("BlackBerry", F, "PHONE"), ya = !0) : ya = void 0);
  (za = ya) || ("Nintendo 3DS" === k ? (e("Nintendo3DS", T), n("Nintendo3DS", void 0, "GAME"), l("WebKit", v || 535), d("NetFrontNX", T), za = !0) : za = void 0);
  (Aa = za) || ("New Nintendo 3DS" === k || b(a, "iPhone OS 6_0") && 320 === wc && 240 === xc ? (e("NewNintendo3DS", T), n("NewNintendo3DS", void 0, "GAME"), Aa = !0) : Aa = void 0);
  (Ba = Aa) || (L && L.wiiremote ? (e("Wii", c(p, k + "; U; ; ")), n("Wii", void 0, "GAME"), Ba = !0) : Ba = void 0);
  if (!(Ca = Ba)) {
    if (g.wiiu) {
      te = !!g.webkitCancelAnimationFrame;
      T ? e("WiiU", T) : (e("WiiU", te ? 4 : 2.1), x = b(p, "Macintosh;") || b(p, "Windows NT") && !b(p, "Touch"));
      n("WiiU", void 0, "GAME");
      l("WebKit", c(p, "AppleWebKit/") || (te ? 536 : 534));
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
  (Ha = Ga) || (pd ? (e("Tizen", pd, "PHONE"), l("SamsungInternet", R), d("SamsungInternet", R), Ha = !0) : Ha = void 0);
  (Ia = Ha) || ("PlayStation Vita" === k ? (e("PlayStationVita", c(p, k + " ")), n("PlayStationVita", void 0, "GAME"), Ia = !0) : Ia = void 0);
  (Ja = Ia || we()) || (!k && b(p, "Nintendo Switch;") ? (e("NintendoSwitch", T), n("NintendoSwitch", void 0, "GAME"), Ja = !0) : Ja = void 0);
  (Ka = Ja || Ae()) || (b(a, "SunOS") || b(a, "Sun Solaris") ? (e("SunOS"), K = "PC", Ka = !0) : Ka = void 0);
  (ba = Ka) || (Re ? (e("Xbox360"), n("Xbox360", void 0, "GAME"), ba = !0) : qd ? (e("XboxOne"), n("XboxOne", void 0, "GAME"), ba = !0) : ba = void 0);
  (La = ba) || ("WinCE" === k || b(a, "Windows Mobile;") || la || Fc || Gc || Cc || Ec || 0 !== k.indexOf("Win") ? La = void 0 : (e("Windows", c(a, "Windows NT ") || c(a, "Windows "), "PC"), La = !0));
  (va = La) || (Yc() ? (e("Mac", c(a.split("_").join("."), "Mac OS X "), "PC"), va = !0) : va = void 0);
  (Ma = va) || (void 0 !== g.onmoztimechange ? (e("FirefoxOS", 0 > r(0, 18.1) ? "1.0.1" : 0 > r(0, 19) ? 1.1 : 0 > r(0, 27) ? 1.2 : 0 > r(0, 29) ? 1.3 : 0 > r(0, 31) ? 1.4 : 0 > r(0, 33) ? 2 : 0 > r(0, 35) ? 2.1 : 0 > r(0, 38) ? 2.2 : 0 > r(0, 45) ? 2.5 : 2.6, b(a, "Mobile") ? "PHONE" : b(a, "Tablet") ? "TABLET" : b(a, "TV") ? "TV" : "PHONE"), Ma = !0) : Ma = void 0);
  (Na = Ma) || (ud || rd ? (e("FireOS", ud || rd), Na = !0) : Na = void 0);
  (Oa = Na) || (vd ? (e("ChromeOS", vd, "PC"), Oa = !0) : Oa = void 0);
  if (!(Pa = Oa)) {
    if (Lc || Mc || Nc || Oc || Dc || W) {
      if (W) {
        e("iOS", W);
      } else if (B = "iOS", Dc) {
        u = Dc;
      } else if ((u = c(p.split("_").join("."), "OS ")) || (x = !0), !u || Ve) {
        u = Ye;
      }
      Pa = !0;
    } else {
      Pa = void 0;
    }
  }
  Pa || Ee() || !md || (e("Linux"), K = "PC");
  if (!U) {
    if (Lc || Mc || Nc || Oc) {
      if (W) {
        Ra = pa.model;
        switch(Ra.substr(0, 4)) {
          case "iPho":
            n("iPhone", c(Ra, "iPhone"));
            break;
          case "iPad":
            n("iPad", c(Ra, "iPad"));
            break;
          case "iPod":
            n("iPod", c(Ra, "iPod"));
        }
      } else {
        Rc = 1 === g.devicePixelRatio;
        ue = wc === 1.5 * xc || 1.5 * wc === xc;
        Lc ? n("iPhone", ue ? Rc ? "1~3" : "4~5" : "6~") : Mc || Oc ? n("iPad", Rc ? "~2" : "3~") : Nc && n("iPod", ue ? Rc ? "~3" : 4 : "5~");
      }
      ve = !0;
    } else {
      ve = void 0;
    }
    (Sa = ve) || (ed() ? (n("BOOX", void 0, "EINK_READER"), Sa = !0) : Sa = void 0);
    (Qa = Sa || void 0) || (aa || Ic || Ue ? (Te ? (n("FireTV", void 0, "TV"), x = !0) : n("FireTV", aa && aa[1], "TV"), Qa = !0) : Qa = void 0);
    (Ta = Qa || void 0) || (oa ? (n("KindleFire", oa[1], "TABLET"), Ta = !0) : Ta = void 0);
    (Ua = Ta) || (b(a, "Kobo") ? (n("Kobo", void 0, "EINK_READER"), Ua = !0) : Ua = void 0);
    (Va = Ua || void 0) || (fd() ? (n("Nook", void 0, "EINK_READER"), Va = !0) : Va = void 0);
    (Wa = Va) || (b(a, " PocketBook") ? (n("PocketBook", void 0, "EINK_READER"), Wa = !0) : Wa = void 0);
    (Xa = Wa) || (0 < tc ? (n("SonyReader", tc, "EINK_READER"), Xa = !0) : Xa = void 0);
    Xa || !sc() && Ad && n("Kindle", 5, "EINK_READER");
  }
  if (!h) {
    !O && L ? (l("PC" === K || "Wii" === B ? "Presto" : "PrestoMobile", Le || Me), Sc = !0) : Sc = void 0;
    (Ya = Sc) || (O || Ac ? (l("OperaMini", Ac), d("Opera", t), Ya = !0) : Ya = void 0);
    (Za = Ya) || (ia() ? ("PC" !== K ? l("TridentMobile", y) : Yc() ? (5 <= y ? l("Tasman", y) : l("Trident", y), d("IEForMac", y)) : (l("Trident", y), 10 <= y && 6.2 <= u && 7 > u && 0 === screenY && innerHeight + 1 !== outerHeight && d("ModernIE", y), 7 <= Bc && Bc !== y && d("InternetExplorer", Bc)), Za = !0) : Za = void 0);
    (ab = Za) || (!ia() && Y.msContentZoomFactor ? (l("WindowsPhone" === B ? "EdgeMobile" : "EdgeHTML", c(p, "Edge/")), ab = !0) : ab = void 0);
    (bb = ab) || (na ? (l("Goanna", na), bb = !0) : bb = void 0);
    (cb = bb) || (ka && !na ? (l(fa() ? "Fennec" : "Gecko", Se || Hc), cb = !0) : cb = void 0);
    (db = cb) || (Cd ? (l("iCab", Cd), d("iCab", t), db = !0) : db = void 0);
    (eb = db) || (Dd ? (l("KHTML", Dd), eb = !0) : eb = void 0);
    (fb = eb) || (Ed ? (l("NetFront", Ed), d("NetFront", t), fb = !0) : fb = void 0);
    ($a = fb) || (P() ? (l("UCWEB", Ne), d("UC", t), $a = !0) : $a = void 0);
    (hb = $a) || (Pc ? (l("QtWebEngine", G), hb = !0) : hb = void 0);
    (ib = hb || void 0) || (Fd ? (l("Servo", Fd), d("Servo", t), ib = !0) : ib = void 0);
    (gb = ib) || (R || fa() && I && od ? (l("SamsungInternet", R || od), gb = !0) : gb = void 0);
    (kb = gb) || (cd() ? (l("SafariMobile", u), kb = !0) : kb = void 0);
    (lb = kb) || ("iOS" !== B || cd() || O || Ac || P() ? lb = void 0 : (l("iOSWebView", u), lb = !0));
    if (!(jb = lb)) {
      Tc = "Android" === B;
      if (Tc && vc || X || Tc && ja || Tc && (F || I) || G || S) {
        Uc = "Android" === B;
        Uc && vc ? (l("AndroidWebView", M), I && (x = !0)) : X ? (l(fa() ? "ChromiumMobile" : "Chromium", G || Jc), I && (x = !0)) : Uc && ja ? (l("AndroidWebView", M), I && (x = !0)) : Uc && (F || I) ? (l("AndroidWebView", M), I && (x = !0)) : (G || S) && l(fa() ? "ChromiumMobile" : "Chromium", G);
        jb = !0;
      } else {
        jb = void 0;
      }
    }
    jb || v && l("WebKit", v);
  }
  if (!ha) {
    "EdgeHTML" === h || "EdgeMobile" === h || Gd || Hd ? (d("Edge", "EdgeHTML" === h || "EdgeMobile" === h ? t : Gd || Hd), Vc = !0) : Vc = void 0;
    (pb = Vc) || (Id ? (d("OperaCoast", Id), pb = !0) : pb = void 0);
    (qb = pb) || (Jd || "iOS" === B && !ca("isSecureContext", g) ? (d("OperaTurbo", Jd), x || (x = !b(p, "Mobile/")), qb = !0) : qb = void 0);
    (ob = qb) || (xd ? (d("Yahoo", Ze), ob = !0) : ob = void 0);
    (rb = ob) || (Kd ? (d("UC", Kd), rb = !0) : rb = void 0);
    (sb = rb) || (Ld ? (d("SilK", Ld), sb = !0) : sb = void 0);
    (tb = sb) || (Md ? (d("Vivaldi", Md), tb = !0) : tb = void 0);
    (ub = tb) || (Nd ? (d("QQ", Nd), ub = !0) : ub = void 0);
    (vb = ub) || (Od ? (d("Yandex", Od), vb = !0) : vb = void 0);
    (wb = vb) || (Pd ? (d("coccoc", Pd), wb = !0) : wb = void 0);
    (xb = wb) || (Qd ? (d("Camino", Qd), xb = !0) : xb = void 0);
    (yb = xb) || (b(a, "SE 2.X MetaSr 1.0") ? (d("Sogou"), yb = !0) : yb = void 0);
    (nb = yb) || ($c() ? (d("FirefoxFocus", ad || V), nb = !0) : nb = void 0);
    (Ab = nb) || (Rd ? (d("AOL", Rd), Ab = !0) : Ab = void 0);
    (Bb = Ab) || (Sd ? (d("IceDragon", Sd), Bb = !0) : Bb = void 0);
    (Cb = Bb) || (Td ? (d("Iceweasel", Td), Cb = !0) : Cb = void 0);
    (Db = Cb) || (Ud ? (d("TenFourFox", Ud), Db = !0) : Db = void 0);
    (Eb = Db) || (Vd ? (d("Waterfox", Vd), Eb = !0) : Eb = void 0);
    (Fb = Eb) || (Wd ? (d("GNUzilla", Wd), Fb = !0) : Fb = void 0);
    (Gb = Fb) || (Xd ? (d("SeaMonkey", Xd), Gb = !0) : Gb = void 0);
    (Hb = Gb) || (Yd ? (d("PaleMoon", Yd), Hb = !0) : Hb = void 0);
    (Ib = Hb) || (Zd ? (d("Basilisk", Zd), Ib = !0) : Ib = void 0);
    (Jb = Ib) || ($d || b(a, "Maxthon") ? (d("Maxthon", $d), Jb = !0) : Jb = void 0);
    (Kb = Jb) || (b(a, "Avant Browser;") ? (d("Avant"), Kb = !0) : Kb = void 0);
    (Lb = Kb) || (ae ? (d("Konqueror", ae), Lb = !0) : Lb = void 0);
    (Mb = Lb) || (be ? (d("Midori", be), Mb = !0) : Mb = void 0);
    (Nb = Mb) || (ce ? (d("OmniWeb", ce), Nb = !0) : Nb = void 0);
    (Ob = Nb) || (de ? (d("Roccat", de), Ob = !0) : Ob = void 0);
    (Pb = Ob) || (ee ? (d("Epiphany", ee), Pb = !0) : Pb = void 0);
    (Qb = Pb) || (fe ? (d("WebPositive", fe), Qb = !0) : Qb = void 0);
    (zb = Qb) || (Jc || b(a, " Iron ") ? (d("Iron", Jc || G), zb = !0) : zb = void 0);
    (Sb = zb) || (ge ? (d("ComodoDragon", ge), Sb = !0) : Sb = void 0);
    (Tb = Sb) || (he || b(a, " Brave ") || "iOSWebView" === h && ca("sameOrigin", g) ? (d("Brave", he || ("Chromium" === h || "ChromiumMobile" === h ? G : void 0)), Tb = !0) : Tb = void 0);
    (Ub = Tb) || (ie ? (d("Rockmelt", ie), Ub = !0) : Ub = void 0);
    (Vb = Ub) || ("iOSWebView" === h && ca("enableWebGL", g) ? (d("Dolphin"), Vb = !0) : Vb = void 0);
    (Rb = Vb) || (Kc || wd ? (d("Puffin", wd), Rb = !0) : Rb = void 0);
    (Xb = Rb) || (je ? (d("Dooble", je), Xb = !0) : Xb = void 0);
    (Yb = Xb) || (ke ? (d("Flock", ke), Yb = !0) : Yb = void 0);
    (Zb = Yb) || (le ? (d("Galeon", le), Zb = !0) : Zb = void 0);
    (Wb = Zb) || (Pc ? (d("Falkon", Pc), Wb = !0) : Wb = void 0);
    ($b = Wb) || (me ? (d("Iceape", me), $b = !0) : $b = void 0);
    (ac = $b) || (ne ? (d("KMeleon", ne), ac = !0) : ac = void 0);
    (bc = ac) || (oe ? (d("NetFrontNX", oe), bc = !0) : bc = void 0);
    (cc = bc) || (pe ? (d("NetscapeNavigator", pe), cc = !0) : cc = void 0);
    (mb = cc) || (la ? (d("Iris", la), mb = !0) : mb = void 0);
    (fc = mb) || (qe ? (d("Facebook", qe), fc = !0) : fc = void 0);
    (gc = fc) || (re ? (d("LINE", re), gc = !0) : gc = void 0);
    (hc = gc) || (se ? (d("DuckDuckGo", se), hc = !0) : hc = void 0);
    (ec = hc) || (yd || zd ? (d("Lunascape", yd), ec = !0) : ec = void 0);
    (ic = ec) || ("Gecko" === h && 0 > r(t, 1.8) && !Hc ? (d("Mozilla", t), ic = !0) : ic = void 0);
    (dc = ic) || ("Gecko" === h || "Fennec" === h || Ic || !$c() && V ? (d("Firefox", "Gecko" === h || "Fennec" === h ? t : Hc || V), dc = !0) : dc = void 0);
    (lc = dc) || (null === g.onoperadetachedviewchange ? (d("OperaGX", S), lc = !0) : lc = void 0);
    (kc = lc) || (td || S || "Presto" === h || "PrestoMobile" === h ? (d("Opera", "Presto" === h || "PrestoMobile" === h ? t : td || S), kc = !0) : kc = void 0);
    (mc = kc) || ("Trident" === h || "TridentMobile" === h || "Tasman" === h ? (d("InternetExplorer", t), mc = !0) : mc = void 0);
    (nc = mc) || ("SamsungInternet" === h ? (d("SamsungInternet", t), nc = !0) : nc = void 0);
    (jc = nc) || (sd || G || bd() ? (d("Chrome", bd() ? t : G || sd), jc = !0) : jc = void 0);
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

