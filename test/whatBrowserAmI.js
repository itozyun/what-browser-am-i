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
  function Zc(f) {
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
  function $c(f) {
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
      rc = m;
    }
    if (q || 0 <= q) {
      K = q;
    }
  }
  function h(f, m) {
    k = f;
    if (m || 0 <= m) {
      t = m;
    }
  }
  function d(f, m) {
    ha = f;
    if (m || 0 <= m) {
      sc = m;
    }
  }
  function ad() {
    return "Mac68K" === l || "MacPowerPC" === l || "MacPPC" === l || "MacIntel" === l || "MacM1" === l;
  }
  function ia() {
    return !(!O && L) && bd || !!tc;
  }
  function P() {
    return b(a, "UCWEB");
  }
  function ze() {
    if (Ae) {
      return e("PlayStation3", c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")), n("PlayStation", 3, "GAME"), 0 > r(u, "4.10") && h("Sony", u), !0;
    }
    if (Be) {
      return e("PlayStation4", c(p, l + "/")), n("PlayStation", 4, "GAME"), !0;
    }
    if (Ce) {
      return e("PlayStation5", c(p, l + "/")), n("PlayStation", 5, "GAME"), !0;
    }
  }
  function De() {
    if (Ee) {
      return e("FreeBSD"), !0;
    }
    if (Fe) {
      return e("OpenBSD"), !0;
    }
    if (Ge) {
      return e("NetBSD"), !0;
    }
  }
  function cd() {
    return !!dd || !!V && 9 > w(V) && "iOSWebView" === k && 11 <= w(u);
  }
  function ed() {
    return "Chromium" === k || "ChromiumMobile" === k || "AndroidWebView" === k && 0 > r(5, t);
  }
  function fd() {
    return "iOS" === B && !W && (gd || ("iPad" === U || 12 > u) && !!ca("webkitFullscreenEnabled", A) || 11 <= u && 13 > u && !!C.mediaDevices);
  }
  function hd() {
    return b(a, " MC_FAUST") || b(a, " MC_DARWIN") || b(a, " DARWIN") || b(a, " KON_TIKI") || b(a, " Kon_Tiki2") || b(a, " MC_GAME") || b(a, " LIVINGSTONE") || b(a, " Lomonosov") || b(a, " MC_Cristo") || b(a, " NoteAir") || b(a, " MC_NovaPro") || b(a, " Poke2Color");
  }
  function id() {
    return b(a, "BNRV300") || b(a, "BNRV350") || b(a, "BNRV500") || b(a, "BNRV510") || b(a, "BNRV520") || b(a, "BNRV700") || b(a, "BNRV1000") || b(a, "BNRV1100") || b(a, "BNRV1300");
  }
  function uc() {
    return hd() || b(a, "Kobo") || id() || b(a, " PocketBook") || 0 < vc || !1;
  }
  function He() {
    var f;
    if (Ie) {
      return b(a, "Android 4.4;") ? e("Android", "2.2~3", "PHONE") : 4 <= w(Q) ? e("Android", Q, "PHONE") : e("Android", "2.2~3", "PHONE"), wc && (x = !0), !0;
    }
    if (Je) {
      f = b(a, "Tablet");
      Q ? e("Android", Q, f ? "TABLET" : "PHONE") : (e("Android", "1.6~", f ? "TABLET" : "PHONE"), x = !0);
      return !0;
    }
    if (Q) {
      return e("Android", Q, "PHONE"), !0;
    }
    if (Ke) {
      return R ? e("Android", "4.4~", "PHONE") : X && !xc || S ? e("Android", "4~", "PHONE") : e("Android", 0 > r(M, 5) ? M : "5~", "PHONE"), I = !0;
    }
    if (Le) {
      return e("Android"), I = !0;
    }
  }
  var a = C.userAgent, p = C.appVersion, jd = w(p) || 0, l = C.platform, tc = A.documentMode, bd = !!A.all, ja = !!A.registerElement, yc = N.width, zc = N.height, Y = A.documentElement, kd = Y && Y.style, Ac = !!g.HTMLAudioElement, ld = g.performance, md = !!g.Int8Array, nd = void 0 !== g.ontouchstart, gd = C.standalone, F = c(p, "Version/") || c(a, "Version/"), V = c(a, "FxiOS/"), v = J(a, "AppleWebKit/"), Bc, od, ka, pd, qd, wc, B, k, t, ha, sc, U, rc, K, x, I, Ne, O, Cc, L, Oe, Pe, y, Dc, la, 
  T, Qe, Ec, Fc, Re, Gc, Hc, Ic, R, Z, rd, sd, Ae, Be, Ce, Ee, Fe, Ge, td, Ue, na, dd, Jc, Kc, Ve, We, Xe, aa, ud, vd, G, Lc, wd, S, X, xc, Le, M, oa, xd, yd, Mc, pa, W, zd, Ye, qa, $e, af, Nc, Oc, Pc, Qc, Ad, bf, Bd, Cd, vc, Dd, Q, Ed, Ie, Je, cf, Ke, Fd, Gd, Hd, Rc, Sc, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, de, ee, fe, ge, he, ie, je, ke, le, me, ne, oe, pe, qe, re, se, te, ue, ve, ra, Tc, sa, ta, va, wa, xa, ya, za, Aa, Ba, Ca, we, Da, Ea, Fa, 
  Ga, Ha, Ia, Ja, Ka, ba, La, Ma, Na, Oa, Pa, u, Qa, Ra, Uc, xe, ye, Sa, Ta, Ua, Va, Wa, Xa, Ya, Vc, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, Wc, Xc, nb, ob, pb, Yc, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc;
  if (Bc = !bd) {
    (function() {
      for (var Me in kd) {
        if (0 === Me.indexOf("Moz")) {
          od = !0;
          return;
        }
      }
      od = void 0;
    })();
    Bc = !!od;
  }
  ka = Bc;
  pd = b(l, "Linux");
  qd = Zc(l);
  wc = qd && !b(a, l) && Zc(a);
  B = "";
  k = "";
  ha = "";
  U = "";
  K = "";
  x = !1;
  I = !1;
  Ne = 2 === jd && b(a, "Sony/COM2/");
  O = g.operamini;
  Cc = $c(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || O && F;
  L = g.opera;
  Oe = L && L.version && L.version() || NaN;
  Pe = $c(c(a, "Opera "), F, jd);
  y = tc ? tc : g.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : g.attachEvent ? 5 : 4;
  Dc = J(p, "Trident/") + 4;
  la = c(a.toLowerCase(), "iris");
  T = c(a, "NintendoBrowser/");
  Qe = P() ? c(a, " U2/") : "";
  Ec = P() ? c(a, "; wds ") : "";
  Fc = P() ? c(a.split("_").join("."), "; iPh OS ") : "";
  Re = P() ? c(a, "; Adr ") : "";
  Gc = c(a, "Windows Phone ") || c(p, "Windows Phone OS ");
  Hc = !ia() && !!Y.msContentZoomFactor && "ARM" === l;
  Ic = 7 <= y && b(p, "ZuneWP");
  R = J(a, "SamsungBrowser/");
  if (Z = !R && [].pop) {
    (function() {
      for (var ma, Se = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "); ma = 
      Se.pop();) {
        if (b(a, ma)) {
          Z = 2 > w(F) ? F : .9;
          return;
        }
      }
      for (var Te = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" "); ma = 
      Te.pop();) {
        if (b(a, ma)) {
          Z = F;
          return;
        }
      }
      Z = void 0;
    })();
  }
  rd = Z || NaN;
  sd = c(a, "Tizen ");
  Ae = "PlayStation 3" === l;
  Be = "PlayStation 4" === l;
  Ce = "PlayStation 5" === l;
  Ee = b(a, "FreeBSD");
  Fe = b(a, "OpenBSD");
  Ge = b(a, "NetBSD");
  td = b(a, "Xbox One");
  Ue = !td && b(a, "Xbox");
  na = ka ? c(a, "Goanna/") : "";
  dd = c(a, "Focus/") || c(a, "Klar/");
  Jc = c(a, "Firefox/");
  Kc = !!g._firefoxTV_playbackStateObserverJava;
  Ve = ka ? c(a, "rv:") || c(a.substr(a.indexOf(") Gecko/") - 11), "; ") : "";
  We = Kc ? J(a, "diordnA ") : 0;
  Xe = b(a, "AmazonWebAppPlatform");
  aa = b(a, "AFTBTX4") ? [7, 2023] : b(a, "AFTMD002") ? [7, 2023] : b(a, "AFTSHN02") ? [7, 2023] : b(a, "AFTMD001") ? [7, 2023] : b(a, "AFTKA002") || b(a, "AFTKAUK002") ? [7, 2023] : b(a, "AFTHA004") ? [7, 2022] : b(a, "AFTTIFF43") ? [7, 2022] : b(a, "AFTANNA0") ? [7, 2022] : b(a, "AFTHA001") ? [7, 2022] : b(a, "AFTMON001") || b(a, "AFTMON002") ? [7, 2022] : b(a, "AFTJULI1") ? [7, 2021] : b(a, "AFTHA003") ? [7, 2021] : b(a, "AFTTI43") ? [7, 2021] : b(a, "AFTPR001") ? [7, 2020] : b(a, "AFTBU001") ? 
  [6, 2020] : b(a, "AFTHA002") ? [7, 2021] : b(a, "AFTWMST22") ? [7, 2021] : b(a, "AFTTIFF55") ? [6, 2020] : b(a, "AFTWI001") ? [7, 2020] : b(a, "AFTDCT31") ? [7, 2020] : b(a, "AFTBAMR311") ? [6, 2020] : b(a, "AFTKMST12") ? [6, 2020] : b(a, "AFTLE") ? [6, 2019] : b(a, "AFTEUFF014") ? [7, 2019] : b(a, "AFTEU014") ? [7, 2019] : b(a, "AFTSO001") ? [7, 2019] : b(a, "AFTEU011") ? [7, 2019] : b(a, "AFTJMST12") ? [6, 2018] : b(a, "AFTRS") ? [5, 2017] : b(a, "AEOHY") ? [7, 2021] : b(a, "AFTLFT962X3") ? [7, 
  2021] : b(a, "AFTLBT962E2") ? [7, 2022] : b(a, "AFTKRT") ? [8, 2023] : b(a, "AFTKM") ? [8, 2023] : b(a, "AFTKA") ? [7, 2021] : b(a, "AFTSSS") ? [7, 2020] : b(a, "AFTSS") ? [7, 2020] : b(a, "AFTT") ? [5, 2020] : b(a, "AFTMM") ? [6, 2018] : b(a, "AFTN") ? [6, 2017] : b(a, "AFTS") ? [5, 2015] : b(a, "AFTM") ? [5, 2014] : b(a, "AFTB") ? [5, 2014] : b(a, "AFTGAZL") ? [7, 2022] : b(a, "AFTR") ? [7, 2019] : b(a, "AFTA") ? [6, 2018] : void 0;
  ud = aa && aa[0];
  vd = c(a, "CriOS/");
  G = c(p, "Chrome/");
  Lc = c(a, "Iron/");
  wd = c(a, "Opera/");
  S = c(a, "OPR/");
  X = !(!ia() && Y.msContentZoomFactor) && !!(g.chrome || g.chromium || g.opr);
  xc = X && 534.3 >= v;
  Le = pd && ja && "11.0.696.34" === G;
  M = void 0 !== kd.touchAction ? 0 : ja ? "4.4.3" : md ? C.connection ? g.searchBoxJavaBridge_ || X ? H.isNaN ? 4.1 : 4 : 4.2 : 4.4 : g.SVGSVGElement ? 3 : void 0 !== g.onhashchange ? Ac ? 2.3 : 2.2 : 530 <= v ? 2 : 1.5;
  oa = b(a, "KFTUWI") || b(a, "KFSNWI") ? [8, 13] : b(a, "KFSUWI") || b(a, "KFRAPWI") || b(a, "KFQUWI") ? [8, 12] : b(a, "KFTRWI") || b(a, "KFTRPWI") ? [7, 11] : b(a, "KFONWI") ? [7, 10] : b(a, "KFMUWI") ? [6.3, 9] : b(a, "KFKAWI") ? [6, 8] : b(a, "KFSUWI") || b(a, "KFAUWI") || b(a, "KFDOWI") ? [5, 7] : b(a, "KFGIWI") ? [5, 6] : b(a, "KFTBWI") || b(a, "KFMEWI") || b(a, "KFFOWI") ? [5, 5] : b(a, "KFARWI") || b(a, "KFSAWA") || b(a, "KFSAWI") ? [5 <= w(M) ? 5 : 4, 4] : b(a, "KFSOWI") || b(a, "KFTHWA") || 
  b(a, "KFTHWI") || b(a, "KFAPWA") || b(a, "KFAPWI") ? [3, 3] : b(a, "KFOT") || b(a, "KFTT") || b(a, "KFJWA") || b(a, "KFJWI") ? [2, 2] : b(a, "Kindle Fire") ? [1, 1] : void 0;
  xd = oa && oa[0];
  yd = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ");
  Mc = g.puffinDevice;
  pa = Mc && Mc.clientInfo;
  W = pa && "iOS" === pa.os && pa.osVersion;
  zd = c(a, "Puffin/");
  Ye = !!g.FNRBrowser;
  if (qa = qd) {
    (function() {
      for (var Ze in g) {
        if (0 === Ze.indexOf("SlexAPI_")) {
          qa = !0;
          return;
        }
      }
      qa = void 0;
    })();
  }
  $e = qa;
  af = g.PointerEvent ? 13 : g.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : C.sendBeacon ? 11.3 : g.WebAssembly ? 11.2 : g.HTMLMeterElement ? 10.3 : g.Proxy ? 10.2 : g.HTMLPictureElement ? 9.3 : H.isNaN ? 9.2 : g.SharedWorker ? ld && ld.now ? 8 : 8.4 : A.execCommand ? 7.1 : g.webkitURL ? 6.1 : g.Worker ? 5.1 : md ? 4.3 : Ac ? 4.1 : 3.2;
  Nc = 0 === l.indexOf("iPhone");
  Oc = 0 === l.indexOf("iPad");
  Pc = 0 === l.indexOf("iPod");
  Qc = "MacIntel" === l && void 0 !== gd;
  Ad = b(p, "YJApp-ANDROID");
  bf = c(a.toLowerCase(), "ybrowser/");
  Bd = c(p, "Lunascape ") || c(a, "Lunascape/");
  Cd = !!g.ReactNativeWebView;
  vc = b(a, "EBRD1301") ? 3 : b(a, "EBRD1201") ? 2 : b(a, "EBRD1101") ? 1 : 0;
  Dd = 0 > r(3, M) && !Ac;
  Q = c(l, "Android ") || c(p, "Android ") || c(a, "Android ") || Re;
  Ed = b(l, "Android") || b(p, "Android");
  Ie = (Ed || wc && nd) && ka && !na;
  Je = Ed && !O && !!L;
  cf = wc && nd && !!v;
  Ke = Cd || $e || Ad || cf || uc() || !uc() && Dd;
  Fd = c(a, "iCab");
  Gd = c(a, "KHTML/");
  Hd = c(a, "NetFront/");
  Rc = c(p, "Falkon/");
  Sc = c(a, "QupZillaBrowser/");
  Id = c(a, "Servo/");
  Jd = c(a, "Edge/");
  Kd = c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/");
  Ld = c(p, "Coast/");
  Md = c(p, "OPT/");
  Nd = c(a, "UCBrowser/");
  Od = c(p, "Silk/");
  Pd = c(a, "Vivaldi/");
  Qd = c(a, "QQBrowser/");
  Rd = c(a, "YaBrowser/");
  Sd = c(a, "coc_coc_browser/");
  Td = c(a, "Camino/");
  Ud = c(a, "AOLBUILD/") || c(a, "AOL/") || c(a, "AOL ");
  Vd = c(a, "IceDragon/");
  Wd = c(a, "Iceweasel/");
  Xd = c(a, "TenFourFox/");
  Yd = c(a, "Waterfox/");
  Zd = c(a, "GNUzilla/");
  $d = c(a, "SeaMonkey/");
  ae = c(a, "PaleMoon/");
  be = c(a, "Basilisk/");
  ce = c(a, "Maxthon/") || c(a, "Maxthon ") || c(a, "MXiOS/");
  de = c(a, "Konqueror/");
  ee = c(a, "Midori/");
  fe = c(a, "OmniWeb/");
  ge = c(a, "Roccat/");
  he = c(a, "Epiphany/");
  ie = c(a, "WebPositive/");
  je = c(a, "Comodo Dragon/");
  ke = c(a, "Brave/");
  le = c(a, "Rockmelt/");
  me = c(a, "Dooble/");
  ne = c(a, "Flock/");
  oe = c(a, "Galeon/");
  pe = c(a, "Iceape/");
  qe = c(a, "K-Meleon/");
  re = c(p, "NX/") || c(p, "NF/");
  se = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/");
  te = c(a, "FBAV/") || c(a, "FBAN/");
  ue = c(p, "Line/");
  ve = c(a, "DuckDuckGo/");
  Ne ? (e("mylo", 2), n("mylo", 2, "PDA"), h("NetFront", 3.4), Tc = !0) : Tc = void 0;
  (ra = Tc) || ("Nitro" === l ? (e("NintendoDS"), n("NintendoDS", void 0, "GAME"), h("PrestoMobile", 8.5), ra = !0) : ra = void 0);
  (sa = ra) || ("Nintendo DSi" === l ? (e("NintendoDSi", c(a, l + "; Opera/")), n("NintendoDSi", void 0, "GAME"), h("PrestoMobile", 9.5), sa = !0) : sa = void 0);
  (ta = sa) || ("PSP" === l ? (e("PlayStationPortable", c(a, "(PlayStation Portable); ")), n("PlayStationPortable", void 0, "GAME"), h("NetFront", 3.2), ta = !0) : ta = void 0);
  (wa = ta) || ("WinCE" === l ? (e("WindowsCE", 5 > y ? 3 : 4.1, "PDA"), wa = !0) : wa = void 0);
  (xa = wa) || (b(a, "Windows Mobile;") || la ? (e("WindowsMobile", 6.1, "PDA"), xa = !0) : xa = void 0);
  (ya = xa) || (b(a, "BlackBerry") || b(a, "BB10") ? (e("BlackBerry", F, "PHONE"), ya = !0) : ya = void 0);
  (za = ya) || ("Nintendo 3DS" === l ? (e("Nintendo3DS", T), n("Nintendo3DS", void 0, "GAME"), h("WebKit", v || 535), d("NetFrontNX", T), za = !0) : za = void 0);
  (Aa = za) || ("New Nintendo 3DS" === l || b(a, "iPhone OS 6_0") && 320 === yc && 240 === zc ? (e("NewNintendo3DS", T), n("NewNintendo3DS", void 0, "GAME"), Aa = !0) : Aa = void 0);
  (Ba = Aa) || (L && L.wiiremote ? (e("Wii", c(p, l + "; U; ; ")), n("Wii", void 0, "GAME"), Ba = !0) : Ba = void 0);
  if (!(Ca = Ba)) {
    if (g.wiiu) {
      we = !!g.webkitCancelAnimationFrame;
      T ? e("WiiU", T) : (e("WiiU", we ? 4 : 2.1), x = b(p, "Macintosh;") || b(p, "Windows NT") && !b(p, "Touch"));
      n("WiiU", void 0, "GAME");
      h("WebKit", c(p, "AppleWebKit/") || (we ? 536 : 534));
      d("NetFrontNX", 3);
      Ca = !0;
    } else {
      Ca = void 0;
    }
  }
  (Da = Ca) || (Hc || Ic || Ec || Gc ? (Hc ? (e("WindowsPhone", 10, "PHONE"), x = !0) : Ic ? (e("WindowsPhone", 11 === y ? 8.1 : 10 === y ? 8 : 9 === y ? 7.5 : 7, "PHONE"), x = !0) : e("WindowsPhone", Ec || Gc, "PHONE"), Da = !0) : Da = void 0);
  (Ea = Da) || (b(a, "Maemo") ? (e("Maemo"), Ea = !0) : Ea = void 0);
  (Fa = Ea) || (b(a, "MeeGo") ? (e("MeeGo"), Fa = !0) : Fa = void 0);
  (Ga = Fa) || (g.palmGetResource ? (e("WebOS", c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), b(a, "webOS.TV") || b(a, "/SmartTV") ? "TV" : "PHONE"), Ga = !0) : Ga = void 0);
  (Ha = Ga) || (sd ? (e("Tizen", sd, "PHONE"), h("SamsungInternet", R), d("SamsungInternet", R), Ha = !0) : Ha = void 0);
  (Ia = Ha) || ("PlayStation Vita" === l ? (e("PlayStationVita", c(p, l + " ")), n("PlayStationVita", void 0, "GAME"), Ia = !0) : Ia = void 0);
  (Ja = Ia || ze()) || (!l && b(p, "Nintendo Switch;") ? (e("NintendoSwitch", T), n("NintendoSwitch", void 0, "GAME"), Ja = !0) : Ja = void 0);
  (Ka = Ja || De()) || (b(a, "SunOS") || b(a, "Sun Solaris") ? (e("SunOS"), K = "PC", Ka = !0) : Ka = void 0);
  (ba = Ka) || (Ue ? (e("Xbox360"), n("Xbox360", void 0, "GAME"), ba = !0) : td ? (e("XboxOne"), n("XboxOne", void 0, "GAME"), ba = !0) : ba = void 0);
  (La = ba) || ("WinCE" === l || b(a, "Windows Mobile;") || la || Hc || Ic || Ec || Gc || 0 !== l.indexOf("Win") ? La = void 0 : (e("Windows", c(a, "Windows NT ") || c(a, "Windows "), "PC"), La = !0));
  (va = La) || (ad() ? (e("Mac", c(a.split("_").join("."), "Mac OS X "), "PC"), va = !0) : va = void 0);
  (Ma = va) || (void 0 !== g.onmoztimechange ? (e("FirefoxOS", 0 > r(0, 18.1) ? "1.0.1" : 0 > r(0, 19) ? 1.1 : 0 > r(0, 27) ? 1.2 : 0 > r(0, 29) ? 1.3 : 0 > r(0, 31) ? 1.4 : 0 > r(0, 33) ? 2 : 0 > r(0, 35) ? 2.1 : 0 > r(0, 38) ? 2.2 : 0 > r(0, 45) ? 2.5 : 2.6, b(a, "Mobile") ? "PHONE" : b(a, "Tablet") ? "TABLET" : b(a, "TV") ? "TV" : "PHONE"), Ma = !0) : Ma = void 0);
  (Na = Ma) || (xd || ud ? (e("FireOS", xd || ud), Na = !0) : Na = void 0);
  (Oa = Na) || (yd ? (e("ChromeOS", yd, "PC"), Oa = !0) : Oa = void 0);
  if (!(Pa = Oa)) {
    if (Nc || Oc || Pc || Qc || Fc || W) {
      if (W) {
        e("iOS", W);
      } else if (B = "iOS", Fc) {
        u = Fc;
      } else if ((u = c(p.split("_").join("."), "OS ")) || (x = !0), !u || Ye) {
        u = af;
      }
      Pa = !0;
    } else {
      Pa = void 0;
    }
  }
  Pa || He() || !pd || (e("Linux"), K = "PC");
  if (!U) {
    if (Nc || Oc || Pc || Qc) {
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
        Uc = 1 === g.devicePixelRatio;
        xe = yc === 1.5 * zc || 1.5 * yc === zc;
        Nc ? n("iPhone", xe ? Uc ? "1~3" : "4~5" : "6~") : Oc || Qc ? n("iPad", Uc ? "~2" : "3~") : Pc && n("iPod", xe ? Uc ? "~3" : 4 : "5~");
      }
      ye = !0;
    } else {
      ye = void 0;
    }
    (Sa = ye) || (hd() ? (n("BOOX", void 0, "EINK_READER"), Sa = !0) : Sa = void 0);
    (Qa = Sa || void 0) || (aa || Kc || Xe ? (We ? (n("FireTV", void 0, "TV"), x = !0) : n("FireTV", aa && aa[1], "TV"), Qa = !0) : Qa = void 0);
    (Ta = Qa || void 0) || (oa ? (n("KindleFire", oa[1], "TABLET"), Ta = !0) : Ta = void 0);
    (Ua = Ta) || (b(a, "Kobo") ? (n("Kobo", void 0, "EINK_READER"), Ua = !0) : Ua = void 0);
    (Va = Ua || void 0) || (id() ? (n("Nook", void 0, "EINK_READER"), Va = !0) : Va = void 0);
    (Wa = Va) || (b(a, " PocketBook") ? (n("PocketBook", void 0, "EINK_READER"), Wa = !0) : Wa = void 0);
    (Xa = Wa) || (0 < vc ? (n("SonyReader", vc, "EINK_READER"), Xa = !0) : Xa = void 0);
    Xa || !uc() && Dd && n("Kindle", 5, "EINK_READER");
  }
  if (!k) {
    !O && L ? (h("PC" === K || "Wii" === B ? "Presto" : "PrestoMobile", Oe || Pe), Vc = !0) : Vc = void 0;
    (Ya = Vc) || (O || Cc ? (h("OperaMini", Cc), d("Opera", t), Ya = !0) : Ya = void 0);
    (Za = Ya) || (ia() ? ("PC" !== K ? h("TridentMobile", y) : ad() ? (5 <= y ? h("Tasman", y) : h("Trident", y), d("IEForMac", y)) : (h("Trident", y), 10 <= y && 6.2 <= u && 7 > u && 0 === screenY && innerHeight + 1 !== outerHeight && d("ModernIE", y), 7 <= Dc && Dc !== y && d("InternetExplorer", Dc)), Za = !0) : Za = void 0);
    (ab = Za) || (!ia() && Y.msContentZoomFactor ? (h("WindowsPhone" === B ? "EdgeMobile" : "EdgeHTML", c(p, "Edge/")), ab = !0) : ab = void 0);
    (bb = ab) || (na ? (h("Goanna", na), bb = !0) : bb = void 0);
    (cb = bb) || (ka && !na ? (h(fa() ? "Fennec" : "Gecko", Ve || Jc), cb = !0) : cb = void 0);
    (db = cb) || (Fd ? (h("iCab", Fd), d("iCab", t), db = !0) : db = void 0);
    (eb = db) || (Gd ? (h("KHTML", Gd), eb = !0) : eb = void 0);
    (fb = eb) || (Hd ? (h("NetFront", Hd), d("NetFront", t), fb = !0) : fb = void 0);
    ($a = fb) || (P() ? (h("UCWEB", Qe), d("UC", t), $a = !0) : $a = void 0);
    (hb = $a) || (Rc ? (h("QtWebEngine", G), hb = !0) : hb = void 0);
    (ib = hb) || (Sc ? (h("QtWebKit", v), ib = !0) : ib = void 0);
    (jb = ib) || (Id ? (h("Servo", Id), d("Servo", t), jb = !0) : jb = void 0);
    (gb = jb) || (R || fa() && I && rd ? (h("SamsungInternet", R || rd), gb = !0) : gb = void 0);
    (lb = gb) || (fd() ? (h("SafariMobile", u), lb = !0) : lb = void 0);
    (mb = lb) || ("iOS" !== B || fd() || O || Cc || P() ? mb = void 0 : (h("iOSWebView", u), mb = !0));
    if (!(kb = mb)) {
      Wc = "Android" === B;
      if (Wc && xc || X || Wc && ja || Wc && (F || I) || G || S) {
        Xc = "Android" === B;
        Xc && xc ? (h("AndroidWebView", M), I && (x = !0)) : X ? (h(fa() ? "ChromiumMobile" : "Chromium", G || Lc), I && (x = !0)) : Xc && ja ? (h("AndroidWebView", M), I && (x = !0)) : Xc && (F || I) ? (h("AndroidWebView", M), I && (x = !0)) : (G || S) && h(fa() ? "ChromiumMobile" : "Chromium", G);
        kb = !0;
      } else {
        kb = void 0;
      }
    }
    kb || v && h("WebKit", v);
  }
  if (!ha) {
    "EdgeHTML" === k || "EdgeMobile" === k || Jd || Kd ? (d("Edge", "EdgeHTML" === k || "EdgeMobile" === k ? t : Jd || Kd), Yc = !0) : Yc = void 0;
    (qb = Yc) || (Ld ? (d("OperaCoast", Ld), qb = !0) : qb = void 0);
    (rb = qb) || (Md || "iOS" === B && !ca("isSecureContext", g) ? (d("OperaTurbo", Md), x || (x = !b(p, "Mobile/")), rb = !0) : rb = void 0);
    (pb = rb) || (Ad ? (d("Yahoo", bf), pb = !0) : pb = void 0);
    (sb = pb) || (Nd ? (d("UC", Nd), sb = !0) : sb = void 0);
    (tb = sb) || (Od ? (d("SilK", Od), tb = !0) : tb = void 0);
    (ub = tb) || (Pd ? (d("Vivaldi", Pd), ub = !0) : ub = void 0);
    (vb = ub) || (Qd ? (d("QQ", Qd), vb = !0) : vb = void 0);
    (wb = vb) || (Rd ? (d("Yandex", Rd), wb = !0) : wb = void 0);
    (xb = wb) || (Sd ? (d("coccoc", Sd), xb = !0) : xb = void 0);
    (yb = xb) || (Td ? (d("Camino", Td), yb = !0) : yb = void 0);
    (zb = yb) || (b(a, "SE 2.X MetaSr 1.0") ? (d("Sogou"), zb = !0) : zb = void 0);
    (ob = zb) || (cd() ? (d("FirefoxFocus", dd || V), ob = !0) : ob = void 0);
    (Cb = ob) || (Ud ? (d("AOL", Ud), Cb = !0) : Cb = void 0);
    (Bb = Cb) || (Sc ? (d("QupZilla", Sc), Bb = !0) : Bb = void 0);
    (Db = Bb) || (Vd ? (d("IceDragon", Vd), Db = !0) : Db = void 0);
    (Eb = Db) || (Wd ? (d("Iceweasel", Wd), Eb = !0) : Eb = void 0);
    (Fb = Eb) || (Xd ? (d("TenFourFox", Xd), Fb = !0) : Fb = void 0);
    (Gb = Fb) || (Yd ? (d("Waterfox", Yd), Gb = !0) : Gb = void 0);
    (Hb = Gb) || (Zd ? (d("GNUzilla", Zd), Hb = !0) : Hb = void 0);
    (Ib = Hb) || ($d ? (d("SeaMonkey", $d), Ib = !0) : Ib = void 0);
    (Jb = Ib) || (ae ? (d("PaleMoon", ae), Jb = !0) : Jb = void 0);
    (Kb = Jb) || (be ? (d("Basilisk", be), Kb = !0) : Kb = void 0);
    (Lb = Kb) || (ce || b(a, "Maxthon") ? (d("Maxthon", ce), Lb = !0) : Lb = void 0);
    (Mb = Lb) || (b(a, "Avant Browser;") ? (d("Avant"), Mb = !0) : Mb = void 0);
    (Nb = Mb) || (de ? (d("Konqueror", de), Nb = !0) : Nb = void 0);
    (Ob = Nb) || (ee ? (d("Midori", ee), Ob = !0) : Ob = void 0);
    (Pb = Ob) || (fe ? (d("OmniWeb", fe), Pb = !0) : Pb = void 0);
    (Qb = Pb) || (ge ? (d("Roccat", ge), Qb = !0) : Qb = void 0);
    (Rb = Qb) || (he ? (d("Epiphany", he), Rb = !0) : Rb = void 0);
    (Sb = Rb) || (ie ? (d("WebPositive", ie), Sb = !0) : Sb = void 0);
    (Ab = Sb) || (Lc || b(a, " Iron ") ? (d("Iron", Lc || G), Ab = !0) : Ab = void 0);
    (Ub = Ab) || (je ? (d("ComodoDragon", je), Ub = !0) : Ub = void 0);
    (Vb = Ub) || (ke || b(a, " Brave ") || "iOSWebView" === k && ca("sameOrigin", g) ? (d("Brave", ke || ("Chromium" === k || "ChromiumMobile" === k ? G : void 0)), Vb = !0) : Vb = void 0);
    (Wb = Vb) || (le ? (d("Rockmelt", le), Wb = !0) : Wb = void 0);
    (Xb = Wb) || ("iOSWebView" === k && ca("enableWebGL", g) ? (d("Dolphin"), Xb = !0) : Xb = void 0);
    (Tb = Xb) || (Mc || zd ? (d("Puffin", zd), Tb = !0) : Tb = void 0);
    (Zb = Tb) || (me ? (d("Dooble", me), Zb = !0) : Zb = void 0);
    ($b = Zb) || (ne ? (d("Flock", ne), $b = !0) : $b = void 0);
    (ac = $b) || (oe ? (d("Galeon", oe), ac = !0) : ac = void 0);
    (Yb = ac) || (Rc ? (d("Falkon", Rc), Yb = !0) : Yb = void 0);
    (bc = Yb) || (pe ? (d("Iceape", pe), bc = !0) : bc = void 0);
    (cc = bc) || (qe ? (d("KMeleon", qe), cc = !0) : cc = void 0);
    (dc = cc) || (re ? (d("NetFrontNX", re), dc = !0) : dc = void 0);
    (ec = dc) || (se ? (d("NetscapeNavigator", se), ec = !0) : ec = void 0);
    (nb = ec) || (la ? (d("Iris", la), nb = !0) : nb = void 0);
    (hc = nb) || (te ? (d("Facebook", te), hc = !0) : hc = void 0);
    (ic = hc) || (ue ? (d("LINE", ue), ic = !0) : ic = void 0);
    (jc = ic) || (ve ? (d("DuckDuckGo", ve), jc = !0) : jc = void 0);
    (gc = jc) || (Bd || Cd ? (d("Lunascape", Bd), gc = !0) : gc = void 0);
    (kc = gc) || ("Gecko" === k && 0 > r(t, 1.8) && !Jc ? (d("Mozilla", t), kc = !0) : kc = void 0);
    (fc = kc) || ("Gecko" === k || "Fennec" === k || Kc || !cd() && V ? (d("Firefox", "Gecko" === k || "Fennec" === k ? t : Jc || V), fc = !0) : fc = void 0);
    (nc = fc) || (null === g.onoperadetachedviewchange ? (d("OperaGX", S), nc = !0) : nc = void 0);
    (mc = nc) || (wd || S || "Presto" === k || "PrestoMobile" === k ? (d("Opera", "Presto" === k || "PrestoMobile" === k ? t : wd || S), mc = !0) : mc = void 0);
    (oc = mc) || ("Trident" === k || "TridentMobile" === k || "Tasman" === k ? (d("InternetExplorer", t), oc = !0) : oc = void 0);
    (pc = oc) || ("SamsungInternet" === k ? (d("SamsungInternet", t), pc = !0) : pc = void 0);
    (lc = pc) || (vd || G || ed() ? (d("Chrome", ed() ? t : G || vd), lc = !0) : lc = void 0);
    (qc = lc) || ("AndroidWebView" === k && 0 > r(t, 5) ? (d("AndroidBrowser", t), qc = !0) : qc = void 0);
    qc || (("WebKit" === k || "SafariMobile" === k || "iOSWebView" === k) && b(a, "Safari/") || F) && d("Safari", F || (73 > v ? .8 : 85 > v ? .9 : 100 > v ? 1 : 125 > v ? 1.1 : 312 > v ? 1.2 : 412 > v ? 1.3 : 419.3 >= v ? 2 : 525.13 >= v ? 3 : 525.25 >= v ? 3.1 : 3.2));
  }
  B && (z.PLATFORM = B, u && (z.PLATFORM_VERSION = ea(u)));
  U && (z.DEVICE = U, rc && (z.DEVICE_GENERATION = ea(rc)));
  K && (z.DEVICE_TYPE = K);
  k && (z.ENGINE = k, t && (z.ENGINE_VERSION = ea(t)));
  ha && (z.BRAND = ha, sc && (z.BRAND_VERSION = ea(sc)));
  z.PCSITE_REQUESTED = x;
})(whatBrowserAmI, this, document, navigator, screen, parseFloat, Number);

