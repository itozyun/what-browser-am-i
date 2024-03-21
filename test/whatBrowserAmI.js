/** (c) 2021-2024 itozyun, https://github.com/itozyun/what-browser-am-i, MIT License. */
whatBrowserAmI={};(function(ua){
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function a(l, d) {
  var q = l.split(d)[1], h = "", k = -1, p;
  if (q) {
    for (; p = q.charCodeAt(++k);) {
      if (48 <= p && 57 >= p || 46 === p) {
        h += q.charAt(k);
      } else {
        break;
      }
    }
    for (k = h.length; k;) {
      if (46 === h.charCodeAt(--k)) {
        h = h.substr(0, k);
      } else {
        break;
      }
    }
  }
  return h;
}
;var b = navigator.userAgent, c = navigator.appVersion, e = navigator.platform, f = screen.width, g = screen.height;
var m = "UnknownPlatform", n;
function r(l, d) {
  m = l;
  if (d || 0 <= d) {
    n = d;
  }
}
;var t = 2 === (parseFloat(c) || 0) && 0 <= b.indexOf("Sony/COM2/");
var u = {};
u = {is:function() {
  return "Nitro" === e;
}, g:function() {
  if (u.is()) {
    return r("NintendoDS", 1), !0;
  }
}};
var v = {};
v = {is:function() {
  return "Nintendo DSi" === e;
}, g:function() {
  if (v.is()) {
    return r("NintendoDSi", a(b, e + "; Opera/")), !0;
  }
}};
var w = {};
w = {};
w.h = a(b, "NintendoBrowser/");
w.is = function() {
  return "Nintendo 3DS" === e;
};
w.g = function() {
  if (w.is()) {
    return r("Nintendo3DS", w.h), !0;
  }
};
var x = {};
x = {is:function() {
  return "New Nintendo 3DS" === e || 0 <= b.indexOf("iPhone OS 6_0") && 320 === f && 240 === g;
}, g:function() {
  if (x.is()) {
    return r("NewNintendo3DS", w.h), !0;
  }
}};
var y = window.opera;
y && y.version && y.version();
var z = {};
z = {is:function() {
  return y && y.wiiremote;
}, g:function() {
  if (z.is()) {
    return r("Wii", a(c, e + "; U; ; ")), !0;
  }
}};
var A = {};
A = {is:function() {
  return !!window.wiiu;
}, g:function() {
  if (A.is()) {
    var l = !!window.webkitCancelAnimationFrame, d = w.h;
    d ? r("WiiU", d) : r("WiiU", l ? 4 : 2.1);
    return !0;
  }
}};
var B = {};
B = {is:function() {
  return !e && 0 <= c.indexOf("Nintendo Switch;");
}, g:function() {
  if (B.is()) {
    return r("NintendoSwitch", w.h), !0;
  }
}};
var C = {};
C = {};
var D = a(b, "CrOS x86_64 ") || a(b, "CrOS aarch64 ") || a(b, "CrOS i686 ") || a(b, "CrOS armv7l ");
C.is = function() {
  return !!D;
};
C.g = function() {
  if (C.is()) {
    return r("ChromeOS", D), !0;
  }
};
var E;
t ? (r("mylo", 2), E = !0) : E = void 0;
E || u.g() || v.g() || w.g() || x.g() || z.g() || A.g() || B.g() || C.g();
if (m && (ua.PLATFORM = m, n)) {
  var F = n;
  ua.PLATFORM_VERSION = F === F + "" ? F : F === F - 0 ? "" + F : F.min && F.max ? F.min + "~" + F.max : F.min ? F.min + "~" : "~" + F.max;
}
;
})(whatBrowserAmI);
