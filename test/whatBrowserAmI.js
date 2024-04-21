/* what-browser-am-i@0.7.1
(c) 2021-2024 itozyun(https://github.com/itozyun/what-browser-am-i#readme), MIT. */
var whatBrowserAmI = {conpare:function(y, g) {
  for (var z = 0, B = (y + "").split("."), M = (g + "").split("."), v = B.length, E = M.length, K, b, N; !(B[v - 1] - 0);) {
    --v;
  }
  for (; !(M[E - 1] - 0);) {
    --E;
  }
  for (K = v < E ? v : E; z < K; ++z) {
    if (b = B[z] - 0, N = M[z] - 0, b !== N) {
      return b > N ? 1 : -1;
    }
  }
  return v > E ? 1 : v === E ? 0 : -1;
}};
(function(y, g, z, B, M, v, E) {
  function K(h, p) {
    var q = v(h.split(p)[1]);
    return 0 <= q ? q : 0;
  }
  function b(h, p) {
    return 0 <= h.indexOf(p);
  }
  function N(h) {
    return b(h, "Linux armv") || b(h, "Linux aarch") || b(h, "Linux i686") || b(h, "Linux x86_64");
  }
  function da(h, p) {
    for (var q in p) {
      if (q === h) {
        return !0;
      }
    }
  }
  function c(h, p) {
    var q = h.split(p)[1], C = "", D = -1, ea;
    if (q) {
      for (; ea = q.charCodeAt(++D);) {
        if (48 <= ea && 57 >= ea || 46 === ea) {
          C += q.charAt(D);
        } else {
          break;
        }
      }
      for (D = C.length; D;) {
        if (46 === C.charCodeAt(--D)) {
          C = C.substr(0, D);
        } else {
          break;
        }
      }
    }
    return C;
  }
  function Wc(h) {
    for (var p = arguments, q = 1, C = p[0], D; q < p.length; ++q) {
      D = p[q], 0 > u(C, D) && (C = D);
    }
    return C;
  }
  function fa(h) {
    return h === h + "" ? h : h === h - 0 ? "" + h : h.min && h.max ? h.min + "~" + h.max : h.min ? h.min + "~" : "~" + h.max;
  }
  function ha() {
    return "Android" === A || "FireOS" === A;
  }
  function f(h, p, q) {
    A = h;
    if (p || 0 <= p) {
      r = p;
    }
    if (q || 0 <= q) {
      H = q;
    }
  }
  function l(h, p, q) {
    V = h;
    if (p || 0 <= p) {
      qc = p;
    }
    if (q || 0 <= q) {
      H = q;
    }
  }
  function m(h, p) {
    n = h;
    if (p || 0 <= p) {
      t = p;
    }
  }
  function d(h, p) {
    ia = h;
    if (p || 0 <= p) {
      rc = p;
    }
  }
  function Xc() {
    return "Mac68K" === k || "MacPowerPC" === k || "MacPPC" === k || "MacIntel" === k || "MacM1" === k;
  }
  function ja() {
    return !(!O && I) && Yc || !!sc;
  }
  function P() {
    return b(a, "UCWEB");
  }
  function ye() {
    if (ze) {
      return f("PlayStation3", c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")), l("PlayStation", 3, "GAME"), 0 > u(r, "4.10") && m("Sony", r), !0;
    }
    if (Ae) {
      return f("PlayStation4", c(e, k + "/")), l("PlayStation", 4, "GAME"), !0;
    }
    if (Be) {
      return f("PlayStation5", c(e, k + "/")), l("PlayStation", 5, "GAME"), !0;
    }
  }
  function Ce() {
    if (De) {
      return f("FreeBSD"), !0;
    }
    if (Ee) {
      return f("OpenBSD"), !0;
    }
    if (Fe) {
      return f("NetBSD"), !0;
    }
  }
  function Zc() {
    return !!$c || !!W && 9 > v(W) && "iOSWebView" === n && 11 <= v(r);
  }
  function ad() {
    return "Chromium" === n || "ChromiumMobile" === n || "AndroidWebView" === n && 0 > u(5, t);
  }
  function bd() {
    return "iOS" === A && !X && (cd || ("iPad" === V || 12 > r) && !!da("webkitFullscreenEnabled", z) || 11 <= r && 13 > r && !!B.mediaDevices);
  }
  function dd() {
    return b(a, " MC_FAUST") || b(a, " MC_DARWIN") || b(a, " DARWIN") || b(a, " KON_TIKI") || b(a, " Kon_Tiki2") || b(a, " MC_GAME") || b(a, " LIVINGSTONE") || b(a, " Lomonosov") || b(a, " MC_Cristo") || b(a, " NoteAir") || b(a, " MC_NovaPro") || b(a, " Poke2Color");
  }
  function ed() {
    return b(a, "BNRV300") || b(a, "BNRV350") || b(a, "BNRV500") || b(a, "BNRV510") || b(a, "BNRV520") || b(a, "BNRV700") || b(a, "BNRV1000") || b(a, "BNRV1100") || b(a, "BNRV1300");
  }
  function tc() {
    return dd() || b(a, "Kobo") || ed() || b(a, " PocketBook") || 0 < uc || !1;
  }
  function Ge() {
    var h;
    if (He) {
      return b(a, "Android 4.4;") ? f("Android", "2.2~3", "PHONE") : 4 <= v(Q) ? f("Android", Q, "PHONE") : f("Android", "2.2~3", "PHONE"), vc && (w = !0), !0;
    }
    if (Ie) {
      h = b(a, "Tablet");
      Q ? f("Android", Q, h ? "TABLET" : "PHONE") : (f("Android", "1.6~", h ? "TABLET" : "PHONE"), w = !0);
      return !0;
    }
    if (Q) {
      return f("Android", Q, "PHONE"), !0;
    }
    if (Je) {
      return R ? f("Android", "4.4~", "PHONE") : Y && !wc || S ? f("Android", "4~", "PHONE") : f("Android", 0 > u(L, 5) ? L : "5~", "PHONE"), F = !0;
    }
    if (Ke) {
      return f("Android"), F = !0;
    }
  }
  var u = y.conpare, a = B.userAgent, e = B.appVersion, fd = v(e) || 0, k = B.platform, sc = z.documentMode, Yc = !!z.all, ka = !!z.registerElement, xc = M.width, yc = M.height, Z = z.documentElement, gd = Z && Z.style, zc = !!g.HTMLAudioElement, hd = g.performance, id = !!g.Int8Array, jd = void 0 !== g.ontouchstart, cd = B.standalone, J = c(e, "Version/") || c(a, "Version/"), W = c(a, "FxiOS/"), T = K(a, "AppleWebKit/"), Ac, kd, la, ld, md, vc, A, n, t, ia, rc, V, qc, H, w, F, Me, O, Bc, I, Ne, 
  Oe, x, Cc, ma, U, Pe, Dc, Ec, Qe, Fc, Gc, Hc, R, aa, nd, od, ze, Ae, Be, De, Ee, Fe, pd, Te, oa, $c, Ic, Jc, Ue, Ve, We, ba, qd, rd, G, Kc, sd, S, Y, wc, Ke, L, pa, td, ud, Lc, qa, X, vd, Xe, ra, Ze, $e, Mc, Nc, Oc, Pc, wd, af, xd, yd, uc, zd, Q, Ad, He, Ie, bf, Je, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, sa, Qc, ta, va, wa, xa, ya, za, Aa, Ba, Ca, 
  Da, ve, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, ca, Ma, Na, Oa, Pa, Qa, r, Ra, Sa, Rc, we, xe, Ta, Ua, Va, Wa, Xa, Ya, Za, Sc, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, Tc, Uc, lb, mb, nb, Vc, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc;
  if (Ac = !Yc) {
    (function() {
      for (var Le in gd) {
        if (0 === Le.indexOf("Moz")) {
          kd = !0;
          return;
        }
      }
      kd = void 0;
    })();
    Ac = !!kd;
  }
  la = Ac;
  ld = b(k, "Linux");
  md = N(k);
  vc = md && !b(a, k) && N(a);
  A = "";
  n = "";
  ia = "";
  V = "";
  H = "";
  w = !1;
  F = !1;
  Me = 2 === fd && b(a, "Sony/COM2/");
  O = g.operamini;
  Bc = Wc(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || O && J;
  I = g.opera;
  Ne = I && I.version && I.version() || NaN;
  Oe = Wc(c(a, "Opera "), J, fd);
  x = sc ? sc : g.XMLHttpRequest ? z.getElementsByTagName ? 7 : 4 : z.compatMode ? 6 : (0).toFixed ? 5.5 : g.attachEvent ? 5 : 4;
  Cc = K(e, "Trident/") + 4;
  ma = c(a.toLowerCase(), "iris");
  U = c(a, "NintendoBrowser/");
  Pe = P() ? c(a, " U2/") : "";
  Dc = P() ? c(a, "; wds ") : "";
  Ec = P() ? c(a.split("_").join("."), "; iPh OS ") : "";
  Qe = P() ? c(a, "; Adr ") : "";
  Fc = c(a, "Windows Phone ") || c(e, "Windows Phone OS ");
  Gc = !ja() && !!Z.msContentZoomFactor && "ARM" === k;
  Hc = 7 <= x && b(e, "ZuneWP");
  R = K(a, "SamsungBrowser/");
  if (aa = !R && [].pop) {
    (function() {
      for (var na, Re = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "); na = 
      Re.pop();) {
        if (b(a, na)) {
          aa = 2 > v(J) ? J : .9;
          return;
        }
      }
      for (var Se = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" "); na = 
      Se.pop();) {
        if (b(a, na)) {
          aa = J;
          return;
        }
      }
      aa = void 0;
    })();
  }
  nd = aa || NaN;
  od = c(a, "Tizen ");
  ze = "PlayStation 3" === k;
  Ae = "PlayStation 4" === k;
  Be = "PlayStation 5" === k;
  De = b(a, "FreeBSD");
  Ee = b(a, "OpenBSD");
  Fe = b(a, "NetBSD");
  pd = b(a, "Xbox One");
  Te = !pd && b(a, "Xbox");
  oa = la ? c(a, "Goanna/") : "";
  $c = c(a, "Focus/") || c(a, "Klar/");
  Ic = c(a, "Firefox/");
  Jc = !!g._firefoxTV_playbackStateObserverJava;
  Ue = la ? c(a, "rv:") || c(a.substr(a.indexOf(") Gecko/") - 11), "; ") : "";
  Ve = Jc ? K(a, "diordnA ") : 0;
  We = b(a, "AmazonWebAppPlatform");
  ba = b(a, "AFTBTX4") ? [7, 2023] : b(a, "AFTMD002") ? [7, 2023] : b(a, "AFTSHN02") ? [7, 2023] : b(a, "AFTMD001") ? [7, 2023] : b(a, "AFTKA002") || b(a, "AFTKAUK002") ? [7, 2023] : b(a, "AFTHA004") ? [7, 2022] : b(a, "AFTTIFF43") ? [7, 2022] : b(a, "AFTANNA0") ? [7, 2022] : b(a, "AFTHA001") ? [7, 2022] : b(a, "AFTMON001") || b(a, "AFTMON002") ? [7, 2022] : b(a, "AFTJULI1") ? [7, 2021] : b(a, "AFTHA003") ? [7, 2021] : b(a, "AFTTI43") ? [7, 2021] : b(a, "AFTPR001") ? [7, 2020] : b(a, "AFTBU001") ? 
  [6, 2020] : b(a, "AFTHA002") ? [7, 2021] : b(a, "AFTWMST22") ? [7, 2021] : b(a, "AFTTIFF55") ? [6, 2020] : b(a, "AFTWI001") ? [7, 2020] : b(a, "AFTDCT31") ? [7, 2020] : b(a, "AFTBAMR311") ? [6, 2020] : b(a, "AFTKMST12") ? [6, 2020] : b(a, "AFTLE") ? [6, 2019] : b(a, "AFTEUFF014") ? [7, 2019] : b(a, "AFTEU014") ? [7, 2019] : b(a, "AFTSO001") ? [7, 2019] : b(a, "AFTEU011") ? [7, 2019] : b(a, "AFTJMST12") ? [6, 2018] : b(a, "AFTRS") ? [5, 2017] : b(a, "AEOHY") ? [7, 2021] : b(a, "AFTLFT962X3") ? [7, 
  2021] : b(a, "AFTLBT962E2") ? [7, 2022] : b(a, "AFTKRT") ? [8, 2023] : b(a, "AFTKM") ? [8, 2023] : b(a, "AFTKA") ? [7, 2021] : b(a, "AFTSSS") ? [7, 2020] : b(a, "AFTSS") ? [7, 2020] : b(a, "AFTT") ? [5, 2020] : b(a, "AFTMM") ? [6, 2018] : b(a, "AFTN") ? [6, 2017] : b(a, "AFTS") ? [5, 2015] : b(a, "AFTM") ? [5, 2014] : b(a, "AFTB") ? [5, 2014] : b(a, "AFTGAZL") ? [7, 2022] : b(a, "AFTR") ? [7, 2019] : b(a, "AFTA") ? [6, 2018] : void 0;
  qd = ba && ba[0];
  rd = c(a, "CriOS/");
  G = c(a, "Chrome/");
  Kc = c(e, "Iron/");
  sd = c(a, "Opera/");
  S = c(a, "OPR/");
  Y = !(!ja() && Z.msContentZoomFactor) && !!(g.chrome || g.chromium || g.opr);
  wc = Y && 534.3 >= T;
  Ke = ld && ka && "11.0.696.34" === G;
  L = void 0 !== gd.touchAction ? 0 : ka ? "4.4.3" : id ? B.connection ? g.searchBoxJavaBridge_ || Y ? E.isNaN ? 4.1 : 4 : 4.2 : 4.4 : g.SVGSVGElement ? 3 : void 0 !== g.onhashchange ? zc ? 2.3 : 2.2 : 530 <= T ? 2 : 1.5;
  pa = b(a, "KFTUWI") || b(a, "KFSNWI") ? [8, 13] : b(a, "KFSUWI") || b(a, "KFRAPWI") || b(a, "KFQUWI") ? [8, 12] : b(a, "KFTRWI") || b(a, "KFTRPWI") ? [7, 11] : b(a, "KFONWI") ? [7, 10] : b(a, "KFMUWI") ? [6.3, 9] : b(a, "KFKAWI") ? [6, 8] : b(a, "KFSUWI") || b(a, "KFAUWI") || b(a, "KFDOWI") ? [5, 7] : b(a, "KFGIWI") ? [5, 6] : b(a, "KFTBWI") || b(a, "KFMEWI") || b(a, "KFFOWI") ? [5, 5] : b(a, "KFARWI") || b(a, "KFSAWA") || b(a, "KFSAWI") ? [5 <= v(L) ? 5 : 4, 4] : b(a, "KFSOWI") || b(a, "KFTHWA") || 
  b(a, "KFTHWI") || b(a, "KFAPWA") || b(a, "KFAPWI") ? [3, 3] : b(a, "KFOT") || b(a, "KFTT") || b(a, "KFJWA") || b(a, "KFJWI") ? [2, 2] : b(a, "Kindle Fire") ? [1, 1] : void 0;
  td = pa && pa[0];
  ud = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ");
  Lc = g.puffinDevice;
  qa = Lc && Lc.clientInfo;
  X = qa && "iOS" === qa.os && qa.osVersion;
  vd = c(a, "Puffin/");
  Xe = !!g.FNRBrowser;
  if (ra = md) {
    (function() {
      for (var Ye in g) {
        if (0 === Ye.indexOf("SlexAPI_")) {
          ra = !0;
          return;
        }
      }
      ra = void 0;
    })();
  }
  Ze = ra;
  $e = g.PointerEvent ? 13 : g.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : B.sendBeacon ? 11.3 : g.WebAssembly ? 11.2 : g.HTMLMeterElement ? 10.3 : g.Proxy ? 10.2 : g.HTMLPictureElement ? 9.3 : E.isNaN ? 9.2 : g.SharedWorker ? hd && hd.now ? 8 : 8.4 : z.execCommand ? 7.1 : g.webkitURL ? 6.1 : g.Worker ? 5.1 : id ? 4.3 : zc ? 4.1 : 3.2;
  Mc = 0 === k.indexOf("iPhone");
  Nc = 0 === k.indexOf("iPad");
  Oc = 0 === k.indexOf("iPod");
  Pc = "MacIntel" === k && void 0 !== cd;
  wd = b(e, "YJApp-ANDROID");
  af = c(a.toLowerCase(), "ybrowser/");
  xd = c(a, "Lunascape/");
  yd = !!g.ReactNativeWebView;
  uc = b(a, "EBRD1301") ? 3 : b(a, "EBRD1201") ? 2 : b(a, "EBRD1101") ? 1 : 0;
  zd = 0 > u(3, L) && !zc;
  Q = c(k, "Android ") || c(e, "Android ") || c(a, "Android ") || Qe;
  Ad = b(k, "Android") || b(e, "Android");
  He = (Ad || vc && jd) && la && !oa;
  Ie = Ad && !O && !!I;
  bf = vc && jd && !!T;
  Je = yd || Ze || wd || bf || tc() || !tc() && zd;
  Bd = c(a, "iCab");
  Cd = c(a, "KHTML/");
  Dd = c(a, "NetFront/");
  Ed = c(a, "Edge/");
  Fd = c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/");
  Gd = c(a, "Coast/");
  Hd = c(e, "OPT/");
  Id = c(e, "UCBrowser/");
  Jd = c(e, "Silk/");
  Kd = c(e, "Vivaldi/");
  Ld = c(e, "QQBrowser/");
  Md = c(e, "YaBrowser/");
  Nd = c(e, "coc_coc_browser/");
  Od = c(e, "Camino/");
  Pd = c(e, "AOLBUILD/") || c(e, "AOL/");
  Qd = c(e, "IceDragon/");
  Rd = c(e, "Iceweasel/");
  Sd = c(e, "TenFourFox/");
  Td = c(e, "Waterfox/");
  Ud = c(e, "GNUzilla/");
  Vd = c(e, "SeaMonkey/");
  Wd = c(e, "PaleMoon/");
  Xd = c(e, "Basilisk/");
  Yd = c(e, "Maxthon/") || c(e, "Maxthon ") || c(e, "MXiOS/");
  Zd = c(e, "Konqueror/");
  $d = c(e, "Midori/");
  ae = c(e, "OmniWeb/");
  be = c(e, "Roccat/");
  ce = c(e, "Epiphany/");
  de = c(e, "WebPositive/");
  ee = c(e, "Comodo Dragon/");
  fe = c(e, "Brave/");
  ge = c(e, "Rockmelt/");
  he = c(e, "Dooble/");
  ie = c(e, "Flock/");
  je = c(e, "Galeon/");
  ke = c(e, "Falkon/");
  le = c(e, "Iceape/");
  me = c(e, "K-Meleon/");
  ne = c(e, "NX/") || c(e, "NF/");
  oe = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/");
  pe = c(e, "FBAV/") || c(e, "FBAN/");
  qe = c(e, "Line/");
  re = c(e, "QtWebEngine/");
  se = c(e, "QtWebKit/");
  te = c(e, "DuckDuckGo/");
  ue = c(e, "Safari/");
  Me ? (f("mylo", 2), l("mylo", 2, "PDA"), m("NetFront", 3.4), Qc = !0) : Qc = void 0;
  (sa = Qc) || ("Nitro" === k ? (f("NintendoDS"), l("NintendoDS", void 0, "GAME"), m("PrestoMobile", 8.5), sa = !0) : sa = void 0);
  (ta = sa) || ("Nintendo DSi" === k ? (f("NintendoDSi", c(a, k + "; Opera/")), l("NintendoDSi", void 0, "GAME"), m("PrestoMobile", 9.5), ta = !0) : ta = void 0);
  (va = ta) || ("PSP" === k ? (f("PlayStationPortable", c(a, "(PlayStation Portable); ")), l("PlayStationPortable", void 0, "GAME"), m("NetFront", 3.2), va = !0) : va = void 0);
  (xa = va) || ("WinCE" === k ? (f("WindowsCE", 5 > x ? 3 : 4.1, "PDA"), xa = !0) : xa = void 0);
  (ya = xa) || (b(a, "Windows Mobile;") || ma ? (f("WindowsMobile", 6.1, "PDA"), ya = !0) : ya = void 0);
  (za = ya) || (b(a, "BlackBerry") || b(a, "BB10") ? (f("BlackBerry", J, "PHONE"), za = !0) : za = void 0);
  (Aa = za) || ("Nintendo 3DS" === k ? (f("Nintendo3DS", U), l("Nintendo3DS", void 0, "GAME"), m("WebKit", T || 535), d("NetFrontNX", U), Aa = !0) : Aa = void 0);
  (Ba = Aa) || ("New Nintendo 3DS" === k || b(a, "iPhone OS 6_0") && 320 === xc && 240 === yc ? (f("NewNintendo3DS", U), l("NewNintendo3DS", void 0, "GAME"), Ba = !0) : Ba = void 0);
  (Ca = Ba) || (I && I.wiiremote ? (f("Wii", c(e, k + "; U; ; ")), l("Wii", void 0, "GAME"), Ca = !0) : Ca = void 0);
  if (!(Da = Ca)) {
    if (g.wiiu) {
      ve = !!g.webkitCancelAnimationFrame;
      U ? f("WiiU", U) : (f("WiiU", ve ? 4 : 2.1), w = b(e, "Macintosh;") || b(e, "Windows NT") && !b(e, "Touch"));
      l("WiiU", void 0, "GAME");
      m("WebKit", c(e, "AppleWebKit/") || (ve ? 536 : 534));
      d("NetFrontNX", 3);
      Da = !0;
    } else {
      Da = void 0;
    }
  }
  (Ea = Da) || (Gc || Hc || Dc || Fc ? (Gc ? (f("WindowsPhone", 10, "PHONE"), w = !0) : Hc ? (f("WindowsPhone", 11 === x ? 8.1 : 10 === x ? 8 : 9 === x ? 7.5 : 7, "PHONE"), w = !0) : f("WindowsPhone", Dc || Fc, "PHONE"), Ea = !0) : Ea = void 0);
  (Fa = Ea) || (b(a, "Maemo") ? (f("Maemo"), Fa = !0) : Fa = void 0);
  (Ga = Fa) || (b(a, "MeeGo") ? (f("MeeGo"), Ga = !0) : Ga = void 0);
  (Ha = Ga) || (g.palmGetResource ? (f("WebOS", c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), b(a, "webOS.TV") || b(a, "/SmartTV") ? "TV" : "PHONE"), Ha = !0) : Ha = void 0);
  (Ia = Ha) || (od ? (f("Tizen", od, "PHONE"), m("SamsungInternet", R), d("SamsungInternet", R), Ia = !0) : Ia = void 0);
  (Ja = Ia) || ("PlayStation Vita" === k ? (f("PlayStationVita", c(e, k + " ")), l("PlayStationVita", void 0, "GAME"), Ja = !0) : Ja = void 0);
  (Ka = Ja || ye()) || (!k && b(e, "Nintendo Switch;") ? (f("NintendoSwitch", U), l("NintendoSwitch", void 0, "GAME"), Ka = !0) : Ka = void 0);
  (La = Ka || Ce()) || (b(a, "SunOS") || b(a, "Sun Solaris") ? (f("SunOS"), H = "PC", La = !0) : La = void 0);
  (ca = La) || (Te ? (f("Xbox360"), l("Xbox360", void 0, "GAME"), ca = !0) : pd ? (f("XboxOne"), l("XboxOne", void 0, "GAME"), ca = !0) : ca = void 0);
  (Ma = ca) || ("WinCE" === k || b(a, "Windows Mobile;") || ma || Gc || Hc || Dc || Fc || 0 !== k.indexOf("Win") ? Ma = void 0 : (f("Windows", c(a, "Windows NT ") || c(a, "Windows "), "PC"), Ma = !0));
  (wa = Ma) || (Xc() ? (f("Mac", c(a.split("_").join("."), "Mac OS X "), "PC"), wa = !0) : wa = void 0);
  (Na = wa) || (void 0 !== g.onmoztimechange ? (f("FirefoxOS", 0 > u(0, 18.1) ? "1.0.1" : 0 > u(0, 19) ? 1.1 : 0 > u(0, 27) ? 1.2 : 0 > u(0, 29) ? 1.3 : 0 > u(0, 31) ? 1.4 : 0 > u(0, 33) ? 2 : 0 > u(0, 35) ? 2.1 : 0 > u(0, 38) ? 2.2 : 0 > u(0, 45) ? 2.5 : 2.6, b(a, "Mobile") ? "PHONE" : b(a, "Tablet") ? "TABLET" : b(a, "TV") ? "TV" : "PHONE"), Na = !0) : Na = void 0);
  (Oa = Na) || (td || qd ? (f("FireOS", td || qd), Oa = !0) : Oa = void 0);
  (Pa = Oa) || (ud ? (f("ChromeOS", ud, "PC"), Pa = !0) : Pa = void 0);
  if (!(Qa = Pa)) {
    if (Mc || Nc || Oc || Pc || Ec || X) {
      if (X) {
        f("iOS", X);
      } else if (A = "iOS", Ec) {
        r = Ec;
      } else if ((r = c(e.split("_").join("."), "OS ")) || (w = !0), !r || Xe) {
        r = $e;
      }
      Qa = !0;
    } else {
      Qa = void 0;
    }
  }
  Qa || Ge() || !ld || (f("Linux"), H = "PC");
  if (!V) {
    if (Mc || Nc || Oc || Pc) {
      if (X) {
        Sa = qa.model;
        switch(Sa.substr(0, 4)) {
          case "iPho":
            l("iPhone", c(Sa, "iPhone"));
            break;
          case "iPad":
            l("iPad", c(Sa, "iPad"));
            break;
          case "iPod":
            l("iPod", c(Sa, "iPod"));
        }
      } else {
        Rc = 1 === g.devicePixelRatio;
        we = xc === 1.5 * yc || 1.5 * xc === yc;
        Mc ? l("iPhone", we ? Rc ? "1~3" : "4~5" : "6~") : Nc || Pc ? l("iPad", Rc ? "~2" : "3~") : Oc && l("iPod", we ? Rc ? "~3" : 4 : "5~");
      }
      xe = !0;
    } else {
      xe = void 0;
    }
    (Ta = xe) || (dd() ? (l("BOOX", void 0, "EINK_READER"), Ta = !0) : Ta = void 0);
    (Ra = Ta || void 0) || (ba || Jc || We ? (Ve ? (l("FireTV", void 0, "TV"), w = !0) : l("FireTV", ba && ba[1], "TV"), Ra = !0) : Ra = void 0);
    (Ua = Ra || void 0) || (pa ? (l("KindleFire", pa[1], "TABLET"), Ua = !0) : Ua = void 0);
    (Va = Ua) || (b(a, "Kobo") ? (l("Kobo", void 0, "EINK_READER"), Va = !0) : Va = void 0);
    (Wa = Va || void 0) || (ed() ? (l("Nook", void 0, "EINK_READER"), Wa = !0) : Wa = void 0);
    (Xa = Wa) || (b(a, " PocketBook") ? (l("PocketBook", void 0, "EINK_READER"), Xa = !0) : Xa = void 0);
    (Ya = Xa) || (0 < uc ? (l("SonyReader", uc, "EINK_READER"), Ya = !0) : Ya = void 0);
    Ya || !tc() && zd && l("Kindle", 5, "EINK_READER");
  }
  if (!n) {
    !O && I ? (m("PC" === H || "Wii" === A ? "Presto" : "PrestoMobile", Ne || Oe), Sc = !0) : Sc = void 0;
    (Za = Sc) || (O || Bc ? (m("OperaMini", Bc), d("Opera", t), Za = !0) : Za = void 0);
    ($a = Za) || (ja() ? ("PC" !== H ? m("TridentMobile", x) : Xc() ? (5 <= x ? m("Tasman", x) : m("Trident", x), d("IEForMac", x)) : (m("Trident", x), 10 <= x && 6.2 <= r && 7 > r && 0 === screenY && innerHeight + 1 !== outerHeight && d("ModernIE", x), 7 <= Cc && Cc !== x && d("InternetExplorer", Cc)), $a = !0) : $a = void 0);
    (bb = $a) || (!ja() && Z.msContentZoomFactor ? (m("WindowsPhone" === A ? "EdgeMobile" : "EdgeHTML", c(e, "Edge/")), bb = !0) : bb = void 0);
    (cb = bb) || (oa ? (m("Goanna", oa), cb = !0) : cb = void 0);
    (db = cb) || (la && !oa ? (m(ha() ? "Fennec" : "Gecko", Ue || Ic), db = !0) : db = void 0);
    (eb = db) || (Bd ? (m("iCab", Bd), d("iCab", t), eb = !0) : eb = void 0);
    (fb = eb) || (Cd ? (m("KHTML", Cd), fb = !0) : fb = void 0);
    (gb = fb) || (Dd ? (m("NetFront", Dd), d("NetFront", t), gb = !0) : gb = void 0);
    (ab = gb) || (P() ? (m("UCWEB", Pe), d("UC", t), ab = !0) : ab = void 0);
    (hb = ab) || (R || ha() && F && nd ? (m("SamsungInternet", R || nd), hb = !0) : hb = void 0);
    (jb = hb) || (bd() ? (m("SafariMobile", r), jb = !0) : jb = void 0);
    (kb = jb) || ("iOS" !== A || bd() || O || Bc || P() ? kb = void 0 : (m("iOSWebView", r), kb = !0));
    if (!(ib = kb)) {
      Tc = "Android" === A;
      if (Tc && wc || Y || Tc && ka || Tc && (J || F) || G || S) {
        Uc = "Android" === A;
        Uc && wc ? (m("AndroidWebView", L), F && (w = !0)) : Y ? (m(ha() ? "ChromiumMobile" : "Chromium", G || Kc), F && (w = !0)) : Uc && ka ? (m("AndroidWebView", L), F && (w = !0)) : Uc && (J || F) ? (m("AndroidWebView", L), F && (w = !0)) : (G || S) && m(ha() ? "ChromiumMobile" : "Chromium", G);
        ib = !0;
      } else {
        ib = void 0;
      }
    }
    ib || T && m("WebKit", T);
  }
  if (!ia) {
    "EdgeHTML" === n || "EdgeMobile" === n || Ed || Fd ? (d("Edge", "EdgeHTML" === n || "EdgeMobile" === n ? t : Ed || Fd), Vc = !0) : Vc = void 0;
    (ob = Vc) || (Gd ? (d("OperaCoast", Gd), ob = !0) : ob = void 0);
    (pb = ob) || (Hd || "iOS" === A && !da("isSecureContext", g) ? (d("OperaTurbo", Hd), w || (w = !b(e, "Mobile/")), pb = !0) : pb = void 0);
    (nb = pb) || (wd ? (d("Yahoo", af), nb = !0) : nb = void 0);
    (qb = nb) || (Id ? (d("UC", Id), qb = !0) : qb = void 0);
    (rb = qb) || (Jd ? (d("SilK", Jd), rb = !0) : rb = void 0);
    (sb = rb) || (Kd ? (d("Vivaldi", Kd), sb = !0) : sb = void 0);
    (tb = sb) || (Ld ? (d("QQ", Ld), tb = !0) : tb = void 0);
    (ub = tb) || (Md ? (d("Yandex", Md), ub = !0) : ub = void 0);
    (vb = ub) || (Nd ? (d("coccoc", Nd), vb = !0) : vb = void 0);
    (wb = vb) || (Od ? (d("Camino", Od), wb = !0) : wb = void 0);
    (xb = wb) || (b(a, "SE 2.X MetaSr 1.0") ? (d("Sogou"), xb = !0) : xb = void 0);
    (mb = xb) || (Zc() ? (d("FirefoxFocus", $c || W), mb = !0) : mb = void 0);
    (zb = mb) || (Pd ? (d("AOL", Pd), zb = !0) : zb = void 0);
    (Ab = zb) || (Qd ? (d("IceDragon", Qd), Ab = !0) : Ab = void 0);
    (Bb = Ab) || (Rd ? (d("Iceweasel", Rd), Bb = !0) : Bb = void 0);
    (Cb = Bb) || (Sd ? (d("TenFourFox", Sd), Cb = !0) : Cb = void 0);
    (Db = Cb) || (Td ? (d("Waterfox", Td), Db = !0) : Db = void 0);
    (Eb = Db) || (Ud ? (d("GNUzilla", Ud), Eb = !0) : Eb = void 0);
    (Fb = Eb) || (Vd ? (d("SeaMonkey", Vd), Fb = !0) : Fb = void 0);
    (Gb = Fb) || (Wd ? (d("PaleMoon", Wd), Gb = !0) : Gb = void 0);
    (Hb = Gb) || (Xd ? (d("Basilisk", Xd), Hb = !0) : Hb = void 0);
    (Ib = Hb) || (Yd || b(e, "Maxthon") ? (d("Maxthon", Yd), Ib = !0) : Ib = void 0);
    (Jb = Ib) || (b(e, "Avant Browser;") ? (d("Avant"), Jb = !0) : Jb = void 0);
    (Kb = Jb) || (Zd ? (d("Konqueror", Zd), Kb = !0) : Kb = void 0);
    (Lb = Kb) || ($d ? (d("Midori", $d), Lb = !0) : Lb = void 0);
    (Mb = Lb) || (ae ? (d("OmniWeb", ae), Mb = !0) : Mb = void 0);
    (Nb = Mb) || (be ? (d("Roccat", be), Nb = !0) : Nb = void 0);
    (Ob = Nb) || (ce ? (d("Epiphany", ce), Ob = !0) : Ob = void 0);
    (Pb = Ob) || (de ? (d("WebPositive", de), Pb = !0) : Pb = void 0);
    (yb = Pb) || (Kc || b(a, " Iron ") ? (d("Iron", Kc || G), yb = !0) : yb = void 0);
    (Rb = yb) || (ee ? (d("ComodoDragon", ee), Rb = !0) : Rb = void 0);
    (Sb = Rb) || (fe || b(a, " Brave ") || "iOSWebView" === n && da("sameOrigin", g) ? (d("Brave", fe || ("Chromium" === n || "ChromiumMobile" === n ? G : void 0)), Sb = !0) : Sb = void 0);
    (Tb = Sb) || (ge ? (d("Rockmelt", ge), Tb = !0) : Tb = void 0);
    (Ub = Tb) || ("iOSWebView" === n && da("enableWebGL", g) ? (d("Dolphin"), Ub = !0) : Ub = void 0);
    (Qb = Ub) || (Lc || vd ? (d("Puffin", vd), Qb = !0) : Qb = void 0);
    (Vb = Qb) || (he ? (d("Dooble", he), Vb = !0) : Vb = void 0);
    (Wb = Vb) || (ie ? (d("Flock", ie), Wb = !0) : Wb = void 0);
    (Xb = Wb) || (je ? (d("Galeon", je), Xb = !0) : Xb = void 0);
    (Yb = Xb) || (ke ? (d("Falkon", ke), Yb = !0) : Yb = void 0);
    (Zb = Yb) || (le ? (d("Iceape", le), Zb = !0) : Zb = void 0);
    ($b = Zb) || (me ? (d("KMeleon", me), $b = !0) : $b = void 0);
    (ac = $b) || (ne ? (d("NetFrontNX", ne), ac = !0) : ac = void 0);
    (bc = ac) || (oe ? (d("NetscapeNavigator", oe), bc = !0) : bc = void 0);
    (lb = bc) || (ma ? (d("Iris", ma), lb = !0) : lb = void 0);
    (ec = lb) || (pe ? (d("Facebook", pe), ec = !0) : ec = void 0);
    (fc = ec) || (qe ? (d("LINE", qe), fc = !0) : fc = void 0);
    (gc = fc) || (re ? (d("QtWebEngine", re), gc = !0) : gc = void 0);
    (hc = gc) || (se ? (d("QtWebKit", se), hc = !0) : hc = void 0);
    (ic = hc) || (te ? (d("DuckDuckGo", te), ic = !0) : ic = void 0);
    (dc = ic) || (xd || yd ? (d("Lunascape", xd), dc = !0) : dc = void 0);
    (jc = dc) || ("Gecko" === n && 0 > u(t, 1.8) && !Ic ? (d("Mozilla", t), jc = !0) : jc = void 0);
    (cc = jc) || ("Gecko" === n || "Fennec" === n || Jc || !Zc() && W ? (d("Firefox", "Gecko" === n || "Fennec" === n ? r : Ic || W), cc = !0) : cc = void 0);
    (mc = cc) || (null === g.onoperadetachedviewchange ? (d("OperaGX", S), mc = !0) : mc = void 0);
    (lc = mc) || (sd || S || "Presto" === n || "PrestoMobile" === n ? (d("Opera", "Presto" === n || "PrestoMobile" === n ? t : sd || S), lc = !0) : lc = void 0);
    (nc = lc) || ("Trident" === n || "TridentMobile" === n || "Tasman" === n ? (d("InternetExplorer", t), nc = !0) : nc = void 0);
    (oc = nc) || ("SamsungInternet" === n ? (d("SamsungInternet", t), oc = !0) : oc = void 0);
    (kc = oc) || (rd || G || ad() ? (d("Chrome", ad() ? t : G || rd), kc = !0) : kc = void 0);
    (pc = kc) || ("AndroidWebView" === n && 0 > u(t, 5) ? (d("AndroidBrowser", t), pc = !0) : pc = void 0);
    pc || ue && d("Safari", ue);
  }
  A && (y.PLATFORM = A, r && (y.PLATFORM_VERSION = fa(r)));
  V && (y.DEVICE = V, qc && (y.DEVICE_GENERATION = fa(qc)));
  H && (y.DEVICE_TYPE = H);
  n && (y.ENGINE = n, t && (y.ENGINE_VERSION = fa(t)));
  ia && (y.BRAND = ia, rc && (y.BRAND_VERSION = fa(rc)));
  y.PCSITE_REQUESTED = w;
})(whatBrowserAmI, this, document, navigator, screen, parseFloat, Number);

