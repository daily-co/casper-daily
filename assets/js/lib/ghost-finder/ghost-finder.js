/*! For license information please see ghost-finder.js.LICENSE.txt */
!(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 142));
})([
  function (e, t, n) {
    (function (e) {
      e.exports = (function () {
        "use strict";
        var t, a;
        function r() {
          return t.apply(null, arguments);
        }
        function s(e) {
          return (
            e instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(e)
          );
        }
        function i(e) {
          return (
            null != e && "[object Object]" === Object.prototype.toString.call(e)
          );
        }
        function o(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function d(e) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
          var t;
          for (t in e) if (o(e, t)) return !1;
          return !0;
        }
        function u(e) {
          return void 0 === e;
        }
        function l(e) {
          return (
            "number" == typeof e ||
            "[object Number]" === Object.prototype.toString.call(e)
          );
        }
        function _(e) {
          return (
            e instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(e)
          );
        }
        function c(e, t) {
          var n,
            a = [];
          for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
          return a;
        }
        function m(e, t) {
          for (var n in t) o(t, n) && (e[n] = t[n]);
          return (
            o(t, "toString") && (e.toString = t.toString),
            o(t, "valueOf") && (e.valueOf = t.valueOf),
            e
          );
        }
        function h(e, t, n, a) {
          return Dt(e, t, n, a, !0).utc();
        }
        function f(e) {
          return (
            null == e._pf &&
              (e._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1,
              }),
            e._pf
          );
        }
        function p(e) {
          if (null == e._isValid) {
            var t = f(e),
              n = a.call(t.parsedDateParts, function (e) {
                return null != e;
              }),
              r =
                !isNaN(e._d.getTime()) &&
                t.overflow < 0 &&
                !t.empty &&
                !t.invalidEra &&
                !t.invalidMonth &&
                !t.invalidWeekday &&
                !t.weekdayMismatch &&
                !t.nullInput &&
                !t.invalidFormat &&
                !t.userInvalidated &&
                (!t.meridiem || (t.meridiem && n));
            if (
              (e._strict &&
                (r =
                  r &&
                  0 === t.charsLeftOver &&
                  0 === t.unusedTokens.length &&
                  void 0 === t.bigHour),
              null != Object.isFrozen && Object.isFrozen(e))
            )
              return r;
            e._isValid = r;
          }
          return e._isValid;
        }
        function M(e) {
          var t = h(NaN);
          return null != e ? m(f(t), e) : (f(t).userInvalidated = !0), t;
        }
        a = Array.prototype.some
          ? Array.prototype.some
          : function (e) {
              var t,
                n = Object(this),
                a = n.length >>> 0;
              for (t = 0; t < a; t++)
                if (t in n && e.call(this, n[t], t, n)) return !0;
              return !1;
            };
        var y = (r.momentProperties = []),
          L = !1;
        function Y(e, t) {
          var n, a, r;
          if (
            (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
            u(t._i) || (e._i = t._i),
            u(t._f) || (e._f = t._f),
            u(t._l) || (e._l = t._l),
            u(t._strict) || (e._strict = t._strict),
            u(t._tzm) || (e._tzm = t._tzm),
            u(t._isUTC) || (e._isUTC = t._isUTC),
            u(t._offset) || (e._offset = t._offset),
            u(t._pf) || (e._pf = f(t)),
            u(t._locale) || (e._locale = t._locale),
            y.length > 0)
          )
            for (n = 0; n < y.length; n++) u((r = t[(a = y[n])])) || (e[a] = r);
          return e;
        }
        function g(e) {
          Y(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === L && ((L = !0), r.updateOffset(this), (L = !1));
        }
        function v(e) {
          return e instanceof g || (null != e && null != e._isAMomentObject);
        }
        function k(e) {
          !1 === r.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn("Deprecation warning: " + e);
        }
        function w(e, t) {
          var n = !0;
          return m(function () {
            if (
              (null != r.deprecationHandler && r.deprecationHandler(null, e), n)
            ) {
              var a,
                s,
                i,
                d = [];
              for (s = 0; s < arguments.length; s++) {
                if (((a = ""), "object" == typeof arguments[s])) {
                  for (i in ((a += "\n[" + s + "] "), arguments[0]))
                    o(arguments[0], i) &&
                      (a += i + ": " + arguments[0][i] + ", ");
                  a = a.slice(0, -2);
                } else a = arguments[s];
                d.push(a);
              }
              k(
                e +
                  "\nArguments: " +
                  Array.prototype.slice.call(d).join("") +
                  "\n" +
                  new Error().stack
              ),
                (n = !1);
            }
            return t.apply(this, arguments);
          }, t);
        }
        var D,
          T = {};
        function b(e, t) {
          null != r.deprecationHandler && r.deprecationHandler(e, t),
            T[e] || (k(t), (T[e] = !0));
        }
        function S(e) {
          return (
            ("undefined" != typeof Function && e instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(e)
          );
        }
        function x(e, t) {
          var n,
            a = m({}, e);
          for (n in t)
            o(t, n) &&
              (i(e[n]) && i(t[n])
                ? ((a[n] = {}), m(a[n], e[n]), m(a[n], t[n]))
                : null != t[n]
                ? (a[n] = t[n])
                : delete a[n]);
          for (n in e) o(e, n) && !o(t, n) && i(e[n]) && (a[n] = m({}, a[n]));
          return a;
        }
        function j(e) {
          null != e && this.set(e);
        }
        function H(e, t, n) {
          var a = "" + Math.abs(e),
            r = t - a.length;
          return (
            (e >= 0 ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, r)).toString().substr(1) +
            a
          );
        }
        (r.suppressDeprecationWarnings = !1),
          (r.deprecationHandler = null),
          (D = Object.keys
            ? Object.keys
            : function (e) {
                var t,
                  n = [];
                for (t in e) o(e, t) && n.push(t);
                return n;
              });
        var O =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          P = {},
          A = {};
        function W(e, t, n, a) {
          var r = a;
          "string" == typeof a &&
            (r = function () {
              return this[a]();
            }),
            e && (A[e] = r),
            t &&
              (A[t[0]] = function () {
                return H(r.apply(this, arguments), t[1], t[2]);
              }),
            n &&
              (A[n] = function () {
                return this.localeData().ordinal(r.apply(this, arguments), e);
              });
        }
        function N(e, t) {
          return e.isValid()
            ? ((t = F(t, e.localeData())),
              (P[t] =
                P[t] ||
                (function (e) {
                  var t,
                    n,
                    a,
                    r = e.match(O);
                  for (t = 0, n = r.length; t < n; t++)
                    A[r[t]]
                      ? (r[t] = A[r[t]])
                      : (r[t] = (a = r[t]).match(/\[[\s\S]/)
                          ? a.replace(/^\[|\]$/g, "")
                          : a.replace(/\\/g, ""));
                  return function (t) {
                    var a,
                      s = "";
                    for (a = 0; a < n; a++)
                      s += S(r[a]) ? r[a].call(t, e) : r[a];
                    return s;
                  };
                })(t)),
              P[t](e))
            : e.localeData().invalidDate();
        }
        function F(e, t) {
          var n = 5;
          function a(e) {
            return t.longDateFormat(e) || e;
          }
          for (E.lastIndex = 0; n >= 0 && E.test(e); )
            (e = e.replace(E, a)), (E.lastIndex = 0), (n -= 1);
          return e;
        }
        var C = {};
        function R(e, t) {
          var n = e.toLowerCase();
          C[n] = C[n + "s"] = C[t] = e;
        }
        function z(e) {
          return "string" == typeof e ? C[e] || C[e.toLowerCase()] : void 0;
        }
        function I(e) {
          var t,
            n,
            a = {};
          for (n in e) o(e, n) && (t = z(n)) && (a[t] = e[n]);
          return a;
        }
        var J = {};
        function U(e, t) {
          J[e] = t;
        }
        function G(e) {
          return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
        }
        function B(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        }
        function V(e) {
          var t = +e,
            n = 0;
          return 0 !== t && isFinite(t) && (n = B(t)), n;
        }
        function q(e, t) {
          return function (n) {
            return null != n
              ? ($(this, e, n), r.updateOffset(this, t), this)
              : K(this, e);
          };
        }
        function K(e, t) {
          return e.isValid()
            ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            : NaN;
        }
        function $(e, t, n) {
          e.isValid() &&
            !isNaN(n) &&
            ("FullYear" === t &&
            G(e.year()) &&
            1 === e.month() &&
            29 === e.date()
              ? ((n = V(n)),
                e._d["set" + (e._isUTC ? "UTC" : "") + t](
                  n,
                  e.month(),
                  ve(n, e.month())
                ))
              : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
        }
        var Z,
          X = /\d/,
          Q = /\d\d/,
          ee = /\d{3}/,
          te = /\d{4}/,
          ne = /[+-]?\d{6}/,
          ae = /\d\d?/,
          re = /\d\d\d\d?/,
          se = /\d\d\d\d\d\d?/,
          ie = /\d{1,3}/,
          oe = /\d{1,4}/,
          de = /[+-]?\d{1,6}/,
          ue = /\d+/,
          le = /[+-]?\d+/,
          _e = /Z|[+-]\d\d:?\d\d/gi,
          ce = /Z|[+-]\d\d(?::?\d\d)?/gi,
          me =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        function he(e, t, n) {
          Z[e] = S(t)
            ? t
            : function (e, a) {
                return e && n ? n : t;
              };
        }
        function fe(e, t) {
          return o(Z, e)
            ? Z[e](t._strict, t._locale)
            : new RegExp(
                pe(
                  e
                    .replace("\\", "")
                    .replace(
                      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                      function (e, t, n, a, r) {
                        return t || n || a || r;
                      }
                    )
                )
              );
        }
        function pe(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        Z = {};
        var Me,
          ye = {};
        function Le(e, t) {
          var n,
            a = t;
          for (
            "string" == typeof e && (e = [e]),
              l(t) &&
                (a = function (e, n) {
                  n[t] = V(e);
                }),
              n = 0;
            n < e.length;
            n++
          )
            ye[e[n]] = a;
        }
        function Ye(e, t) {
          Le(e, function (e, n, a, r) {
            (a._w = a._w || {}), t(e, a._w, a, r);
          });
        }
        function ge(e, t, n) {
          null != t && o(ye, e) && ye[e](t, n._a, n, e);
        }
        function ve(e, t) {
          if (isNaN(e) || isNaN(t)) return NaN;
          var n,
            a = ((t % (n = 12)) + n) % n;
          return (
            (e += (t - a) / 12), 1 === a ? (G(e) ? 29 : 28) : 31 - ((a % 7) % 2)
          );
        }
        (Me = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (e) {
              var t;
              for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
              return -1;
            }),
          W("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          W("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
          }),
          W("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e);
          }),
          R("month", "M"),
          U("month", 8),
          he("M", ae),
          he("MM", ae, Q),
          he("MMM", function (e, t) {
            return t.monthsShortRegex(e);
          }),
          he("MMMM", function (e, t) {
            return t.monthsRegex(e);
          }),
          Le(["M", "MM"], function (e, t) {
            t[1] = V(e) - 1;
          }),
          Le(["MMM", "MMMM"], function (e, t, n, a) {
            var r = n._locale.monthsParse(e, a, n._strict);
            null != r ? (t[1] = r) : (f(n).invalidMonth = e);
          });
        var ke =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          we = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          De = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Te = me,
          be = me;
        function Se(e, t, n) {
          var a,
            r,
            s,
            i = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                a = 0;
              a < 12;
              ++a
            )
              (s = h([2e3, a])),
                (this._shortMonthsParse[a] = this.monthsShort(
                  s,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[a] = this.months(
                  s,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "MMM" === t
              ? -1 !== (r = Me.call(this._shortMonthsParse, i))
                ? r
                : null
              : -1 !== (r = Me.call(this._longMonthsParse, i))
              ? r
              : null
            : "MMM" === t
            ? -1 !== (r = Me.call(this._shortMonthsParse, i)) ||
              -1 !== (r = Me.call(this._longMonthsParse, i))
              ? r
              : null
            : -1 !== (r = Me.call(this._longMonthsParse, i)) ||
              -1 !== (r = Me.call(this._shortMonthsParse, i))
            ? r
            : null;
        }
        function xe(e, t) {
          var n;
          if (!e.isValid()) return e;
          if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = V(t);
            else if (!l((t = e.localeData().monthsParse(t)))) return e;
          return (
            (n = Math.min(e.date(), ve(e.year(), t))),
            e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
            e
          );
        }
        function je(e) {
          return null != e
            ? (xe(this, e), r.updateOffset(this, !0), this)
            : K(this, "Month");
        }
        function He() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            n,
            a = [],
            r = [],
            s = [];
          for (t = 0; t < 12; t++)
            (n = h([2e3, t])),
              a.push(this.monthsShort(n, "")),
              r.push(this.months(n, "")),
              s.push(this.months(n, "")),
              s.push(this.monthsShort(n, ""));
          for (a.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++)
            (a[t] = pe(a[t])), (r[t] = pe(r[t]));
          for (t = 0; t < 24; t++) s[t] = pe(s[t]);
          (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + r.join("|") + ")",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            ));
        }
        function Oe(e) {
          return G(e) ? 366 : 365;
        }
        W("Y", 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? H(e, 4) : "+" + e;
        }),
          W(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          W(0, ["YYYY", 4], 0, "year"),
          W(0, ["YYYYY", 5], 0, "year"),
          W(0, ["YYYYYY", 6, !0], 0, "year"),
          R("year", "y"),
          U("year", 1),
          he("Y", le),
          he("YY", ae, Q),
          he("YYYY", oe, te),
          he("YYYYY", de, ne),
          he("YYYYYY", de, ne),
          Le(["YYYYY", "YYYYYY"], 0),
          Le("YYYY", function (e, t) {
            t[0] = 2 === e.length ? r.parseTwoDigitYear(e) : V(e);
          }),
          Le("YY", function (e, t) {
            t[0] = r.parseTwoDigitYear(e);
          }),
          Le("Y", function (e, t) {
            t[0] = parseInt(e, 10);
          }),
          (r.parseTwoDigitYear = function (e) {
            return V(e) + (V(e) > 68 ? 1900 : 2e3);
          });
        var Ee = q("FullYear", !0);
        function Pe(e, t, n, a, r, s, i) {
          var o;
          return (
            e < 100 && e >= 0
              ? ((o = new Date(e + 400, t, n, a, r, s, i)),
                isFinite(o.getFullYear()) && o.setFullYear(e))
              : (o = new Date(e, t, n, a, r, s, i)),
            o
          );
        }
        function Ae(e) {
          var t, n;
          return (
            e < 100 && e >= 0
              ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
                (t = new Date(Date.UTC.apply(null, n))),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
              : (t = new Date(Date.UTC.apply(null, arguments))),
            t
          );
        }
        function We(e, t, n) {
          var a = 7 + t - n;
          return (-(7 + Ae(e, 0, a).getUTCDay() - t) % 7) + a - 1;
        }
        function Ne(e, t, n, a, r) {
          var s,
            i,
            o = 1 + 7 * (t - 1) + ((7 + n - a) % 7) + We(e, a, r);
          return (
            o <= 0
              ? (i = Oe((s = e - 1)) + o)
              : o > Oe(e)
              ? ((s = e + 1), (i = o - Oe(e)))
              : ((s = e), (i = o)),
            { year: s, dayOfYear: i }
          );
        }
        function Fe(e, t, n) {
          var a,
            r,
            s = We(e.year(), t, n),
            i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
          return (
            i < 1
              ? (a = i + Ce((r = e.year() - 1), t, n))
              : i > Ce(e.year(), t, n)
              ? ((a = i - Ce(e.year(), t, n)), (r = e.year() + 1))
              : ((r = e.year()), (a = i)),
            { week: a, year: r }
          );
        }
        function Ce(e, t, n) {
          var a = We(e, t, n),
            r = We(e + 1, t, n);
          return (Oe(e) - a + r) / 7;
        }
        function Re(e, t) {
          return e.slice(t, 7).concat(e.slice(0, t));
        }
        W("w", ["ww", 2], "wo", "week"),
          W("W", ["WW", 2], "Wo", "isoWeek"),
          R("week", "w"),
          R("isoWeek", "W"),
          U("week", 5),
          U("isoWeek", 5),
          he("w", ae),
          he("ww", ae, Q),
          he("W", ae),
          he("WW", ae, Q),
          Ye(["w", "ww", "W", "WW"], function (e, t, n, a) {
            t[a.substr(0, 1)] = V(e);
          }),
          W("d", 0, "do", "day"),
          W("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
          }),
          W("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
          }),
          W("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
          }),
          W("e", 0, 0, "weekday"),
          W("E", 0, 0, "isoWeekday"),
          R("day", "d"),
          R("weekday", "e"),
          R("isoWeekday", "E"),
          U("day", 11),
          U("weekday", 11),
          U("isoWeekday", 11),
          he("d", ae),
          he("e", ae),
          he("E", ae),
          he("dd", function (e, t) {
            return t.weekdaysMinRegex(e);
          }),
          he("ddd", function (e, t) {
            return t.weekdaysShortRegex(e);
          }),
          he("dddd", function (e, t) {
            return t.weekdaysRegex(e);
          }),
          Ye(["dd", "ddd", "dddd"], function (e, t, n, a) {
            var r = n._locale.weekdaysParse(e, a, n._strict);
            null != r ? (t.d = r) : (f(n).invalidWeekday = e);
          }),
          Ye(["d", "e", "E"], function (e, t, n, a) {
            t[a] = V(e);
          });
        var ze =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          Ie = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Je = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Ue = me,
          Ge = me,
          Be = me;
        function Ve(e, t, n) {
          var a,
            r,
            s,
            i = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                a = 0;
              a < 7;
              ++a
            )
              (s = h([2e3, 1]).day(a)),
                (this._minWeekdaysParse[a] = this.weekdaysMin(
                  s,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[a] = this.weekdaysShort(
                  s,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[a] = this.weekdays(
                  s,
                  ""
                ).toLocaleLowerCase());
          return n
            ? "dddd" === t
              ? -1 !== (r = Me.call(this._weekdaysParse, i))
                ? r
                : null
              : "ddd" === t
              ? -1 !== (r = Me.call(this._shortWeekdaysParse, i))
                ? r
                : null
              : -1 !== (r = Me.call(this._minWeekdaysParse, i))
              ? r
              : null
            : "dddd" === t
            ? -1 !== (r = Me.call(this._weekdaysParse, i)) ||
              -1 !== (r = Me.call(this._shortWeekdaysParse, i)) ||
              -1 !== (r = Me.call(this._minWeekdaysParse, i))
              ? r
              : null
            : "ddd" === t
            ? -1 !== (r = Me.call(this._shortWeekdaysParse, i)) ||
              -1 !== (r = Me.call(this._weekdaysParse, i)) ||
              -1 !== (r = Me.call(this._minWeekdaysParse, i))
              ? r
              : null
            : -1 !== (r = Me.call(this._minWeekdaysParse, i)) ||
              -1 !== (r = Me.call(this._weekdaysParse, i)) ||
              -1 !== (r = Me.call(this._shortWeekdaysParse, i))
            ? r
            : null;
        }
        function qe() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            n,
            a,
            r,
            s,
            i = [],
            o = [],
            d = [],
            u = [];
          for (t = 0; t < 7; t++)
            (n = h([2e3, 1]).day(t)),
              (a = pe(this.weekdaysMin(n, ""))),
              (r = pe(this.weekdaysShort(n, ""))),
              (s = pe(this.weekdays(n, ""))),
              i.push(a),
              o.push(r),
              d.push(s),
              u.push(a),
              u.push(r),
              u.push(s);
          i.sort(e),
            o.sort(e),
            d.sort(e),
            u.sort(e),
            (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + d.join("|") + ")",
              "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + o.join("|") + ")",
              "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + i.join("|") + ")",
              "i"
            ));
        }
        function Ke() {
          return this.hours() % 12 || 12;
        }
        function $e(e, t) {
          W(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
          });
        }
        function Ze(e, t) {
          return t._meridiemParse;
        }
        W("H", ["HH", 2], 0, "hour"),
          W("h", ["hh", 2], 0, Ke),
          W("k", ["kk", 2], 0, function () {
            return this.hours() || 24;
          }),
          W("hmm", 0, 0, function () {
            return "" + Ke.apply(this) + H(this.minutes(), 2);
          }),
          W("hmmss", 0, 0, function () {
            return (
              "" + Ke.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
            );
          }),
          W("Hmm", 0, 0, function () {
            return "" + this.hours() + H(this.minutes(), 2);
          }),
          W("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
            );
          }),
          $e("a", !0),
          $e("A", !1),
          R("hour", "h"),
          U("hour", 13),
          he("a", Ze),
          he("A", Ze),
          he("H", ae),
          he("h", ae),
          he("k", ae),
          he("HH", ae, Q),
          he("hh", ae, Q),
          he("kk", ae, Q),
          he("hmm", re),
          he("hmmss", se),
          he("Hmm", re),
          he("Hmmss", se),
          Le(["H", "HH"], 3),
          Le(["k", "kk"], function (e, t, n) {
            var a = V(e);
            t[3] = 24 === a ? 0 : a;
          }),
          Le(["a", "A"], function (e, t, n) {
            (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
          }),
          Le(["h", "hh"], function (e, t, n) {
            (t[3] = V(e)), (f(n).bigHour = !0);
          }),
          Le("hmm", function (e, t, n) {
            var a = e.length - 2;
            (t[3] = V(e.substr(0, a))),
              (t[4] = V(e.substr(a))),
              (f(n).bigHour = !0);
          }),
          Le("hmmss", function (e, t, n) {
            var a = e.length - 4,
              r = e.length - 2;
            (t[3] = V(e.substr(0, a))),
              (t[4] = V(e.substr(a, 2))),
              (t[5] = V(e.substr(r))),
              (f(n).bigHour = !0);
          }),
          Le("Hmm", function (e, t, n) {
            var a = e.length - 2;
            (t[3] = V(e.substr(0, a))), (t[4] = V(e.substr(a)));
          }),
          Le("Hmmss", function (e, t, n) {
            var a = e.length - 4,
              r = e.length - 2;
            (t[3] = V(e.substr(0, a))),
              (t[4] = V(e.substr(a, 2))),
              (t[5] = V(e.substr(r)));
          });
        var Xe,
          Qe = q("Hours", !0),
          et = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              w: "a week",
              ww: "%d weeks",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            months: ke,
            monthsShort: we,
            week: { dow: 0, doy: 6 },
            weekdays: ze,
            weekdaysMin: Je,
            weekdaysShort: Ie,
            meridiemParse: /[ap]\.?m?\.?/i,
          },
          tt = {},
          nt = {};
        function at(e, t) {
          var n,
            a = Math.min(e.length, t.length);
          for (n = 0; n < a; n += 1) if (e[n] !== t[n]) return n;
          return a;
        }
        function rt(e) {
          return e ? e.toLowerCase().replace("_", "-") : e;
        }
        function st(t) {
          var a = null;
          if (void 0 === tt[t] && void 0 !== e && e && e.exports)
            try {
              (a = Xe._abbr), n(146)("./" + t), it(a);
            } catch (e) {
              tt[t] = null;
            }
          return tt[t];
        }
        function it(e, t) {
          var n;
          return (
            e &&
              ((n = u(t) ? dt(e) : ot(e, t))
                ? (Xe = n)
                : "undefined" != typeof console &&
                  console.warn &&
                  console.warn(
                    "Locale " + e + " not found. Did you forget to load it?"
                  )),
            Xe._abbr
          );
        }
        function ot(e, t) {
          if (null !== t) {
            var n,
              a = et;
            if (((t.abbr = e), null != tt[e]))
              b(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              ),
                (a = tt[e]._config);
            else if (null != t.parentLocale)
              if (null != tt[t.parentLocale]) a = tt[t.parentLocale]._config;
              else {
                if (null == (n = st(t.parentLocale)))
                  return (
                    nt[t.parentLocale] || (nt[t.parentLocale] = []),
                    nt[t.parentLocale].push({ name: e, config: t }),
                    null
                  );
                a = n._config;
              }
            return (
              (tt[e] = new j(x(a, t))),
              nt[e] &&
                nt[e].forEach(function (e) {
                  ot(e.name, e.config);
                }),
              it(e),
              tt[e]
            );
          }
          return delete tt[e], null;
        }
        function dt(e) {
          var t;
          if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
            return Xe;
          if (!s(e)) {
            if ((t = st(e))) return t;
            e = [e];
          }
          return (function (e) {
            for (var t, n, a, r, s = 0; s < e.length; ) {
              for (
                t = (r = rt(e[s]).split("-")).length,
                  n = (n = rt(e[s + 1])) ? n.split("-") : null;
                t > 0;

              ) {
                if ((a = st(r.slice(0, t).join("-")))) return a;
                if (n && n.length >= t && at(r, n) >= t - 1) break;
                t--;
              }
              s++;
            }
            return Xe;
          })(e);
        }
        function ut(e) {
          var t,
            n = e._a;
          return (
            n &&
              -2 === f(e).overflow &&
              ((t =
                n[1] < 0 || n[1] > 11
                  ? 1
                  : n[2] < 1 || n[2] > ve(n[0], n[1])
                  ? 2
                  : n[3] < 0 ||
                    n[3] > 24 ||
                    (24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]))
                  ? 3
                  : n[4] < 0 || n[4] > 59
                  ? 4
                  : n[5] < 0 || n[5] > 59
                  ? 5
                  : n[6] < 0 || n[6] > 999
                  ? 6
                  : -1),
              f(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2),
              f(e)._overflowWeeks && -1 === t && (t = 7),
              f(e)._overflowWeekday && -1 === t && (t = 8),
              (f(e).overflow = t)),
            e
          );
        }
        var lt =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          _t =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          ct = /Z|[+-]\d\d(?::?\d\d)?/,
          mt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1],
          ],
          ht = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          ft = /^\/?Date\((-?\d+)/i,
          pt =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          Mt = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        function yt(e) {
          var t,
            n,
            a,
            r,
            s,
            i,
            o = e._i,
            d = lt.exec(o) || _t.exec(o);
          if (d) {
            for (f(e).iso = !0, t = 0, n = mt.length; t < n; t++)
              if (mt[t][1].exec(d[1])) {
                (r = mt[t][0]), (a = !1 !== mt[t][2]);
                break;
              }
            if (null == r) return void (e._isValid = !1);
            if (d[3]) {
              for (t = 0, n = ht.length; t < n; t++)
                if (ht[t][1].exec(d[3])) {
                  s = (d[2] || " ") + ht[t][0];
                  break;
                }
              if (null == s) return void (e._isValid = !1);
            }
            if (!a && null != s) return void (e._isValid = !1);
            if (d[4]) {
              if (!ct.exec(d[4])) return void (e._isValid = !1);
              i = "Z";
            }
            (e._f = r + (s || "") + (i || "")), kt(e);
          } else e._isValid = !1;
        }
        function Lt(e) {
          var t = parseInt(e, 10);
          return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
        }
        function Yt(e) {
          var t,
            n,
            a,
            r,
            s,
            i,
            o,
            d,
            u = pt.exec(
              e._i
                .replace(/\([^)]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, "")
            );
          if (u) {
            if (
              ((n = u[4]),
              (a = u[3]),
              (r = u[2]),
              (s = u[5]),
              (i = u[6]),
              (o = u[7]),
              (d = [
                Lt(n),
                we.indexOf(a),
                parseInt(r, 10),
                parseInt(s, 10),
                parseInt(i, 10),
              ]),
              o && d.push(parseInt(o, 10)),
              (t = d),
              !(function (e, t, n) {
                return (
                  !e ||
                  Ie.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
                  ((f(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                );
              })(u[1], t, e))
            )
              return;
            (e._a = t),
              (e._tzm = (function (e, t, n) {
                if (e) return Mt[e];
                if (t) return 0;
                var a = parseInt(n, 10),
                  r = a % 100;
                return ((a - r) / 100) * 60 + r;
              })(u[8], u[9], u[10])),
              (e._d = Ae.apply(null, e._a)),
              e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              (f(e).rfc2822 = !0);
          } else e._isValid = !1;
        }
        function gt(e, t, n) {
          return null != e ? e : null != t ? t : n;
        }
        function vt(e) {
          var t,
            n,
            a,
            s,
            i,
            o = [];
          if (!e._d) {
            for (
              a = (function (e) {
                var t = new Date(r.now());
                return e._useUTC
                  ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                  : [t.getFullYear(), t.getMonth(), t.getDate()];
              })(e),
                e._w &&
                  null == e._a[2] &&
                  null == e._a[1] &&
                  (function (e) {
                    var t, n, a, r, s, i, o, d, u;
                    null != (t = e._w).GG || null != t.W || null != t.E
                      ? ((s = 1),
                        (i = 4),
                        (n = gt(t.GG, e._a[0], Fe(Tt(), 1, 4).year)),
                        (a = gt(t.W, 1)),
                        ((r = gt(t.E, 1)) < 1 || r > 7) && (d = !0))
                      : ((s = e._locale._week.dow),
                        (i = e._locale._week.doy),
                        (u = Fe(Tt(), s, i)),
                        (n = gt(t.gg, e._a[0], u.year)),
                        (a = gt(t.w, u.week)),
                        null != t.d
                          ? ((r = t.d) < 0 || r > 6) && (d = !0)
                          : null != t.e
                          ? ((r = t.e + s), (t.e < 0 || t.e > 6) && (d = !0))
                          : (r = s)),
                      a < 1 || a > Ce(n, s, i)
                        ? (f(e)._overflowWeeks = !0)
                        : null != d
                        ? (f(e)._overflowWeekday = !0)
                        : ((o = Ne(n, a, r, s, i)),
                          (e._a[0] = o.year),
                          (e._dayOfYear = o.dayOfYear));
                  })(e),
                null != e._dayOfYear &&
                  ((i = gt(e._a[0], a[0])),
                  (e._dayOfYear > Oe(i) || 0 === e._dayOfYear) &&
                    (f(e)._overflowDayOfYear = !0),
                  (n = Ae(i, 0, e._dayOfYear)),
                  (e._a[1] = n.getUTCMonth()),
                  (e._a[2] = n.getUTCDate())),
                t = 0;
              t < 3 && null == e._a[t];
              ++t
            )
              e._a[t] = o[t] = a[t];
            for (; t < 7; t++)
              e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
            24 === e._a[3] &&
              0 === e._a[4] &&
              0 === e._a[5] &&
              0 === e._a[6] &&
              ((e._nextDay = !0), (e._a[3] = 0)),
              (e._d = (e._useUTC ? Ae : Pe).apply(null, o)),
              (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
              null != e._tzm &&
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              e._nextDay && (e._a[3] = 24),
              e._w &&
                void 0 !== e._w.d &&
                e._w.d !== s &&
                (f(e).weekdayMismatch = !0);
          }
        }
        function kt(e) {
          if (e._f !== r.ISO_8601)
            if (e._f !== r.RFC_2822) {
              (e._a = []), (f(e).empty = !0);
              var t,
                n,
                a,
                s,
                i,
                o,
                d = "" + e._i,
                u = d.length,
                l = 0;
              for (
                a = F(e._f, e._locale).match(O) || [], t = 0;
                t < a.length;
                t++
              )
                (s = a[t]),
                  (n = (d.match(fe(s, e)) || [])[0]) &&
                    ((i = d.substr(0, d.indexOf(n))).length > 0 &&
                      f(e).unusedInput.push(i),
                    (d = d.slice(d.indexOf(n) + n.length)),
                    (l += n.length)),
                  A[s]
                    ? (n ? (f(e).empty = !1) : f(e).unusedTokens.push(s),
                      ge(s, n, e))
                    : e._strict && !n && f(e).unusedTokens.push(s);
              (f(e).charsLeftOver = u - l),
                d.length > 0 && f(e).unusedInput.push(d),
                e._a[3] <= 12 &&
                  !0 === f(e).bigHour &&
                  e._a[3] > 0 &&
                  (f(e).bigHour = void 0),
                (f(e).parsedDateParts = e._a.slice(0)),
                (f(e).meridiem = e._meridiem),
                (e._a[3] = (function (e, t, n) {
                  var a;
                  return null == n
                    ? t
                    : null != e.meridiemHour
                    ? e.meridiemHour(t, n)
                    : null != e.isPM
                    ? ((a = e.isPM(n)) && t < 12 && (t += 12),
                      a || 12 !== t || (t = 0),
                      t)
                    : t;
                })(e._locale, e._a[3], e._meridiem)),
                null !== (o = f(e).era) &&
                  (e._a[0] = e._locale.erasConvertYear(o, e._a[0])),
                vt(e),
                ut(e);
            } else Yt(e);
          else yt(e);
        }
        function wt(e) {
          var t = e._i,
            n = e._f;
          return (
            (e._locale = e._locale || dt(e._l)),
            null === t || (void 0 === n && "" === t)
              ? M({ nullInput: !0 })
              : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                v(t)
                  ? new g(ut(t))
                  : (_(t)
                      ? (e._d = t)
                      : s(n)
                      ? (function (e) {
                          var t,
                            n,
                            a,
                            r,
                            s,
                            i,
                            o = !1;
                          if (0 === e._f.length)
                            return (
                              (f(e).invalidFormat = !0),
                              void (e._d = new Date(NaN))
                            );
                          for (r = 0; r < e._f.length; r++)
                            (s = 0),
                              (i = !1),
                              (t = Y({}, e)),
                              null != e._useUTC && (t._useUTC = e._useUTC),
                              (t._f = e._f[r]),
                              kt(t),
                              p(t) && (i = !0),
                              (s += f(t).charsLeftOver),
                              (s += 10 * f(t).unusedTokens.length),
                              (f(t).score = s),
                              o
                                ? s < a && ((a = s), (n = t))
                                : (null == a || s < a || i) &&
                                  ((a = s), (n = t), i && (o = !0));
                          m(e, n || t);
                        })(e)
                      : n
                      ? kt(e)
                      : (function (e) {
                          var t = e._i;
                          u(t)
                            ? (e._d = new Date(r.now()))
                            : _(t)
                            ? (e._d = new Date(t.valueOf()))
                            : "string" == typeof t
                            ? (function (e) {
                                var t = ft.exec(e._i);
                                null === t
                                  ? (yt(e),
                                    !1 === e._isValid &&
                                      (delete e._isValid,
                                      Yt(e),
                                      !1 === e._isValid &&
                                        (delete e._isValid,
                                        e._strict
                                          ? (e._isValid = !1)
                                          : r.createFromInputFallback(e))))
                                  : (e._d = new Date(+t[1]));
                              })(e)
                            : s(t)
                            ? ((e._a = c(t.slice(0), function (e) {
                                return parseInt(e, 10);
                              })),
                              vt(e))
                            : i(t)
                            ? (function (e) {
                                if (!e._d) {
                                  var t = I(e._i),
                                    n = void 0 === t.day ? t.date : t.day;
                                  (e._a = c(
                                    [
                                      t.year,
                                      t.month,
                                      n,
                                      t.hour,
                                      t.minute,
                                      t.second,
                                      t.millisecond,
                                    ],
                                    function (e) {
                                      return e && parseInt(e, 10);
                                    }
                                  )),
                                    vt(e);
                                }
                              })(e)
                            : l(t)
                            ? (e._d = new Date(t))
                            : r.createFromInputFallback(e);
                        })(e),
                    p(e) || (e._d = null),
                    e))
          );
        }
        function Dt(e, t, n, a, r) {
          var o,
            u = {};
          return (
            (!0 !== t && !1 !== t) || ((a = t), (t = void 0)),
            (!0 !== n && !1 !== n) || ((a = n), (n = void 0)),
            ((i(e) && d(e)) || (s(e) && 0 === e.length)) && (e = void 0),
            (u._isAMomentObject = !0),
            (u._useUTC = u._isUTC = r),
            (u._l = n),
            (u._i = e),
            (u._f = t),
            (u._strict = a),
            (o = new g(ut(wt(u))))._nextDay &&
              (o.add(1, "d"), (o._nextDay = void 0)),
            o
          );
        }
        function Tt(e, t, n, a) {
          return Dt(e, t, n, a, !1);
        }
        (r.createFromInputFallback = w(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
          }
        )),
          (r.ISO_8601 = function () {}),
          (r.RFC_2822 = function () {});
        var bt = w(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = Tt.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e < this
                  ? this
                  : e
                : M();
            }
          ),
          St = w(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = Tt.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e > this
                  ? this
                  : e
                : M();
            }
          );
        function xt(e, t) {
          var n, a;
          if ((1 === t.length && s(t[0]) && (t = t[0]), !t.length)) return Tt();
          for (n = t[0], a = 1; a < t.length; ++a)
            (t[a].isValid() && !t[a][e](n)) || (n = t[a]);
          return n;
        }
        var jt = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];
        function Ht(e) {
          var t = I(e),
            n = t.year || 0,
            a = t.quarter || 0,
            r = t.month || 0,
            s = t.week || t.isoWeek || 0,
            i = t.day || 0,
            d = t.hour || 0,
            u = t.minute || 0,
            l = t.second || 0,
            _ = t.millisecond || 0;
          (this._isValid = (function (e) {
            var t,
              n,
              a = !1;
            for (t in e)
              if (
                o(e, t) &&
                (-1 === Me.call(jt, t) || (null != e[t] && isNaN(e[t])))
              )
                return !1;
            for (n = 0; n < jt.length; ++n)
              if (e[jt[n]]) {
                if (a) return !1;
                parseFloat(e[jt[n]]) !== V(e[jt[n]]) && (a = !0);
              }
            return !0;
          })(t)),
            (this._milliseconds = +_ + 1e3 * l + 6e4 * u + 1e3 * d * 60 * 60),
            (this._days = +i + 7 * s),
            (this._months = +r + 3 * a + 12 * n),
            (this._data = {}),
            (this._locale = dt()),
            this._bubble();
        }
        function Ot(e) {
          return e instanceof Ht;
        }
        function Et(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
        }
        function Pt(e, t) {
          W(e, 0, 0, function () {
            var e = this.utcOffset(),
              n = "+";
            return (
              e < 0 && ((e = -e), (n = "-")),
              n + H(~~(e / 60), 2) + t + H(~~e % 60, 2)
            );
          });
        }
        Pt("Z", ":"),
          Pt("ZZ", ""),
          he("Z", ce),
          he("ZZ", ce),
          Le(["Z", "ZZ"], function (e, t, n) {
            (n._useUTC = !0), (n._tzm = Wt(ce, e));
          });
        var At = /([\+\-]|\d\d)/gi;
        function Wt(e, t) {
          var n,
            a,
            r = (t || "").match(e);
          return null === r
            ? null
            : 0 ===
              (a =
                60 *
                  (n = ((r[r.length - 1] || []) + "").match(At) || [
                    "-",
                    0,
                    0,
                  ])[1] +
                V(n[2]))
            ? 0
            : "+" === n[0]
            ? a
            : -a;
        }
        function Nt(e, t) {
          var n, a;
          return t._isUTC
            ? ((n = t.clone()),
              (a =
                (v(e) || _(e) ? e.valueOf() : Tt(e).valueOf()) - n.valueOf()),
              n._d.setTime(n._d.valueOf() + a),
              r.updateOffset(n, !1),
              n)
            : Tt(e).local();
        }
        function Ft(e) {
          return -Math.round(e._d.getTimezoneOffset());
        }
        function Ct() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        r.updateOffset = function () {};
        var Rt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          zt =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function It(e, t) {
          var n,
            a,
            r,
            s,
            i,
            d,
            u = e,
            _ = null;
          return (
            Ot(e)
              ? (u = { ms: e._milliseconds, d: e._days, M: e._months })
              : l(e) || !isNaN(+e)
              ? ((u = {}), t ? (u[t] = +e) : (u.milliseconds = +e))
              : (_ = Rt.exec(e))
              ? ((n = "-" === _[1] ? -1 : 1),
                (u = {
                  y: 0,
                  d: V(_[2]) * n,
                  h: V(_[3]) * n,
                  m: V(_[4]) * n,
                  s: V(_[5]) * n,
                  ms: V(Et(1e3 * _[6])) * n,
                }))
              : (_ = zt.exec(e))
              ? ((n = "-" === _[1] ? -1 : 1),
                (u = {
                  y: Jt(_[2], n),
                  M: Jt(_[3], n),
                  w: Jt(_[4], n),
                  d: Jt(_[5], n),
                  h: Jt(_[6], n),
                  m: Jt(_[7], n),
                  s: Jt(_[8], n),
                }))
              : null == u
              ? (u = {})
              : "object" == typeof u &&
                ("from" in u || "to" in u) &&
                ((s = Tt(u.from)),
                (i = Tt(u.to)),
                (r =
                  s.isValid() && i.isValid()
                    ? ((i = Nt(i, s)),
                      s.isBefore(i)
                        ? (d = Ut(s, i))
                        : (((d = Ut(i, s)).milliseconds = -d.milliseconds),
                          (d.months = -d.months)),
                      d)
                    : { milliseconds: 0, months: 0 }),
                ((u = {}).ms = r.milliseconds),
                (u.M = r.months)),
            (a = new Ht(u)),
            Ot(e) && o(e, "_locale") && (a._locale = e._locale),
            Ot(e) && o(e, "_isValid") && (a._isValid = e._isValid),
            a
          );
        }
        function Jt(e, t) {
          var n = e && parseFloat(e.replace(",", "."));
          return (isNaN(n) ? 0 : n) * t;
        }
        function Ut(e, t) {
          var n = {};
          return (
            (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
            e.clone().add(n.months, "M").isAfter(t) && --n.months,
            (n.milliseconds = +t - +e.clone().add(n.months, "M")),
            n
          );
        }
        function Gt(e, t) {
          return function (n, a) {
            var r;
            return (
              null === a ||
                isNaN(+a) ||
                (b(
                  t,
                  "moment()." +
                    t +
                    "(period, number) is deprecated. Please use moment()." +
                    t +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                ),
                (r = n),
                (n = a),
                (a = r)),
              Bt(this, It(n, a), e),
              this
            );
          };
        }
        function Bt(e, t, n, a) {
          var s = t._milliseconds,
            i = Et(t._days),
            o = Et(t._months);
          e.isValid() &&
            ((a = null == a || a),
            o && xe(e, K(e, "Month") + o * n),
            i && $(e, "Date", K(e, "Date") + i * n),
            s && e._d.setTime(e._d.valueOf() + s * n),
            a && r.updateOffset(e, i || o));
        }
        (It.fn = Ht.prototype),
          (It.invalid = function () {
            return It(NaN);
          });
        var Vt = Gt(1, "add"),
          qt = Gt(-1, "subtract");
        function Kt(e) {
          return "string" == typeof e || e instanceof String;
        }
        function $t(e) {
          return (
            v(e) ||
            _(e) ||
            Kt(e) ||
            l(e) ||
            (function (e) {
              var t = s(e),
                n = !1;
              return (
                t &&
                  (n =
                    0 ===
                    e.filter(function (t) {
                      return !l(t) && Kt(e);
                    }).length),
                t && n
              );
            })(e) ||
            (function (e) {
              var t,
                n,
                a = i(e) && !d(e),
                r = !1,
                s = [
                  "years",
                  "year",
                  "y",
                  "months",
                  "month",
                  "M",
                  "days",
                  "day",
                  "d",
                  "dates",
                  "date",
                  "D",
                  "hours",
                  "hour",
                  "h",
                  "minutes",
                  "minute",
                  "m",
                  "seconds",
                  "second",
                  "s",
                  "milliseconds",
                  "millisecond",
                  "ms",
                ];
              for (t = 0; t < s.length; t += 1) (n = s[t]), (r = r || o(e, n));
              return a && r;
            })(e) ||
            null == e
          );
        }
        function Zt(e) {
          var t,
            n = i(e) && !d(e),
            a = !1,
            r = [
              "sameDay",
              "nextDay",
              "lastDay",
              "nextWeek",
              "lastWeek",
              "sameElse",
            ];
          for (t = 0; t < r.length; t += 1) a = a || o(e, r[t]);
          return n && a;
        }
        function Xt(e, t) {
          if (e.date() < t.date()) return -Xt(t, e);
          var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            a = e.clone().add(n, "months");
          return (
            -(
              n +
              (t - a < 0
                ? (t - a) / (a - e.clone().add(n - 1, "months"))
                : (t - a) / (e.clone().add(n + 1, "months") - a))
            ) || 0
          );
        }
        function Qt(e) {
          var t;
          return void 0 === e
            ? this._locale._abbr
            : (null != (t = dt(e)) && (this._locale = t), this);
        }
        (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var en = w(
          "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
          function (e) {
            return void 0 === e ? this.localeData() : this.locale(e);
          }
        );
        function tn() {
          return this._locale;
        }
        function nn(e, t) {
          return ((e % t) + t) % t;
        }
        function an(e, t, n) {
          return e < 100 && e >= 0
            ? new Date(e + 400, t, n) - 126227808e5
            : new Date(e, t, n).valueOf();
        }
        function rn(e, t, n) {
          return e < 100 && e >= 0
            ? Date.UTC(e + 400, t, n) - 126227808e5
            : Date.UTC(e, t, n);
        }
        function sn(e, t) {
          return t.erasAbbrRegex(e);
        }
        function on() {
          var e,
            t,
            n = [],
            a = [],
            r = [],
            s = [],
            i = this.eras();
          for (e = 0, t = i.length; e < t; ++e)
            a.push(pe(i[e].name)),
              n.push(pe(i[e].abbr)),
              r.push(pe(i[e].narrow)),
              s.push(pe(i[e].name)),
              s.push(pe(i[e].abbr)),
              s.push(pe(i[e].narrow));
          (this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
            (this._erasNameRegex = new RegExp("^(" + a.join("|") + ")", "i")),
            (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
            (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
        }
        function dn(e, t) {
          W(0, [e, e.length], 0, t);
        }
        function un(e, t, n, a, r) {
          var s;
          return null == e
            ? Fe(this, a, r).year
            : (t > (s = Ce(e, a, r)) && (t = s), ln.call(this, e, t, n, a, r));
        }
        function ln(e, t, n, a, r) {
          var s = Ne(e, t, n, a, r),
            i = Ae(s.year, 0, s.dayOfYear);
          return (
            this.year(i.getUTCFullYear()),
            this.month(i.getUTCMonth()),
            this.date(i.getUTCDate()),
            this
          );
        }
        W("N", 0, 0, "eraAbbr"),
          W("NN", 0, 0, "eraAbbr"),
          W("NNN", 0, 0, "eraAbbr"),
          W("NNNN", 0, 0, "eraName"),
          W("NNNNN", 0, 0, "eraNarrow"),
          W("y", ["y", 1], "yo", "eraYear"),
          W("y", ["yy", 2], 0, "eraYear"),
          W("y", ["yyy", 3], 0, "eraYear"),
          W("y", ["yyyy", 4], 0, "eraYear"),
          he("N", sn),
          he("NN", sn),
          he("NNN", sn),
          he("NNNN", function (e, t) {
            return t.erasNameRegex(e);
          }),
          he("NNNNN", function (e, t) {
            return t.erasNarrowRegex(e);
          }),
          Le(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, a) {
            var r = n._locale.erasParse(e, a, n._strict);
            r ? (f(n).era = r) : (f(n).invalidEra = e);
          }),
          he("y", ue),
          he("yy", ue),
          he("yyy", ue),
          he("yyyy", ue),
          he("yo", function (e, t) {
            return t._eraYearOrdinalRegex || ue;
          }),
          Le(["y", "yy", "yyy", "yyyy"], 0),
          Le(["yo"], function (e, t, n, a) {
            var r;
            n._locale._eraYearOrdinalRegex &&
              (r = e.match(n._locale._eraYearOrdinalRegex)),
              n._locale.eraYearOrdinalParse
                ? (t[0] = n._locale.eraYearOrdinalParse(e, r))
                : (t[0] = parseInt(e, 10));
          }),
          W(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          W(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          dn("gggg", "weekYear"),
          dn("ggggg", "weekYear"),
          dn("GGGG", "isoWeekYear"),
          dn("GGGGG", "isoWeekYear"),
          R("weekYear", "gg"),
          R("isoWeekYear", "GG"),
          U("weekYear", 1),
          U("isoWeekYear", 1),
          he("G", le),
          he("g", le),
          he("GG", ae, Q),
          he("gg", ae, Q),
          he("GGGG", oe, te),
          he("gggg", oe, te),
          he("GGGGG", de, ne),
          he("ggggg", de, ne),
          Ye(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
            t[a.substr(0, 2)] = V(e);
          }),
          Ye(["gg", "GG"], function (e, t, n, a) {
            t[a] = r.parseTwoDigitYear(e);
          }),
          W("Q", 0, "Qo", "quarter"),
          R("quarter", "Q"),
          U("quarter", 7),
          he("Q", X),
          Le("Q", function (e, t) {
            t[1] = 3 * (V(e) - 1);
          }),
          W("D", ["DD", 2], "Do", "date"),
          R("date", "D"),
          U("date", 9),
          he("D", ae),
          he("DD", ae, Q),
          he("Do", function (e, t) {
            return e
              ? t._dayOfMonthOrdinalParse || t._ordinalParse
              : t._dayOfMonthOrdinalParseLenient;
          }),
          Le(["D", "DD"], 2),
          Le("Do", function (e, t) {
            t[2] = V(e.match(ae)[0]);
          });
        var _n = q("Date", !0);
        W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          R("dayOfYear", "DDD"),
          U("dayOfYear", 4),
          he("DDD", ie),
          he("DDDD", ee),
          Le(["DDD", "DDDD"], function (e, t, n) {
            n._dayOfYear = V(e);
          }),
          W("m", ["mm", 2], 0, "minute"),
          R("minute", "m"),
          U("minute", 14),
          he("m", ae),
          he("mm", ae, Q),
          Le(["m", "mm"], 4);
        var cn = q("Minutes", !1);
        W("s", ["ss", 2], 0, "second"),
          R("second", "s"),
          U("second", 15),
          he("s", ae),
          he("ss", ae, Q),
          Le(["s", "ss"], 5);
        var mn,
          hn,
          fn = q("Seconds", !1);
        for (
          W("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            W(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            W(0, ["SSS", 3], 0, "millisecond"),
            W(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            W(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            W(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            W(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            W(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            W(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            R("millisecond", "ms"),
            U("millisecond", 16),
            he("S", ie, X),
            he("SS", ie, Q),
            he("SSS", ie, ee),
            mn = "SSSS";
          mn.length <= 9;
          mn += "S"
        )
          he(mn, ue);
        function pn(e, t) {
          t[6] = V(1e3 * ("0." + e));
        }
        for (mn = "S"; mn.length <= 9; mn += "S") Le(mn, pn);
        (hn = q("Milliseconds", !1)),
          W("z", 0, 0, "zoneAbbr"),
          W("zz", 0, 0, "zoneName");
        var Mn = g.prototype;
        function yn(e) {
          return e;
        }
        (Mn.add = Vt),
          (Mn.calendar = function (e, t) {
            1 === arguments.length &&
              ($t(arguments[0])
                ? ((e = arguments[0]), (t = void 0))
                : Zt(arguments[0]) && ((t = arguments[0]), (e = void 0)));
            var n = e || Tt(),
              a = Nt(n, this).startOf("day"),
              s = r.calendarFormat(this, a) || "sameElse",
              i = t && (S(t[s]) ? t[s].call(this, n) : t[s]);
            return this.format(i || this.localeData().calendar(s, this, Tt(n)));
          }),
          (Mn.clone = function () {
            return new g(this);
          }),
          (Mn.diff = function (e, t, n) {
            var a, r, s;
            if (!this.isValid()) return NaN;
            if (!(a = Nt(e, this)).isValid()) return NaN;
            switch (
              ((r = 6e4 * (a.utcOffset() - this.utcOffset())), (t = z(t)))
            ) {
              case "year":
                s = Xt(this, a) / 12;
                break;
              case "month":
                s = Xt(this, a);
                break;
              case "quarter":
                s = Xt(this, a) / 3;
                break;
              case "second":
                s = (this - a) / 1e3;
                break;
              case "minute":
                s = (this - a) / 6e4;
                break;
              case "hour":
                s = (this - a) / 36e5;
                break;
              case "day":
                s = (this - a - r) / 864e5;
                break;
              case "week":
                s = (this - a - r) / 6048e5;
                break;
              default:
                s = this - a;
            }
            return n ? s : B(s);
          }),
          (Mn.endOf = function (e) {
            var t, n;
            if (void 0 === (e = z(e)) || "millisecond" === e || !this.isValid())
              return this;
            switch (((n = this._isUTC ? rn : an), e)) {
              case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                t =
                  n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t +=
                    36e5 -
                    nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
                    1);
                break;
              case "minute":
                (t = this._d.valueOf()), (t += 6e4 - nn(t, 6e4) - 1);
                break;
              case "second":
                (t = this._d.valueOf()), (t += 1e3 - nn(t, 1e3) - 1);
            }
            return this._d.setTime(t), r.updateOffset(this, !0), this;
          }),
          (Mn.format = function (e) {
            e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
            var t = N(this, e);
            return this.localeData().postformat(t);
          }),
          (Mn.from = function (e, t) {
            return this.isValid() && ((v(e) && e.isValid()) || Tt(e).isValid())
              ? It({ to: this, from: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }),
          (Mn.fromNow = function (e) {
            return this.from(Tt(), e);
          }),
          (Mn.to = function (e, t) {
            return this.isValid() && ((v(e) && e.isValid()) || Tt(e).isValid())
              ? It({ from: this, to: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }),
          (Mn.toNow = function (e) {
            return this.to(Tt(), e);
          }),
          (Mn.get = function (e) {
            return S(this[(e = z(e))]) ? this[e]() : this;
          }),
          (Mn.invalidAt = function () {
            return f(this).overflow;
          }),
          (Mn.isAfter = function (e, t) {
            var n = v(e) ? e : Tt(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = z(t) || "millisecond")
                ? this.valueOf() > n.valueOf()
                : n.valueOf() < this.clone().startOf(t).valueOf())
            );
          }),
          (Mn.isBefore = function (e, t) {
            var n = v(e) ? e : Tt(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = z(t) || "millisecond")
                ? this.valueOf() < n.valueOf()
                : this.clone().endOf(t).valueOf() < n.valueOf())
            );
          }),
          (Mn.isBetween = function (e, t, n, a) {
            var r = v(e) ? e : Tt(e),
              s = v(t) ? t : Tt(t);
            return (
              !!(this.isValid() && r.isValid() && s.isValid()) &&
              ("(" === (a = a || "()")[0]
                ? this.isAfter(r, n)
                : !this.isBefore(r, n)) &&
              (")" === a[1] ? this.isBefore(s, n) : !this.isAfter(s, n))
            );
          }),
          (Mn.isSame = function (e, t) {
            var n,
              a = v(e) ? e : Tt(e);
            return (
              !(!this.isValid() || !a.isValid()) &&
              ("millisecond" === (t = z(t) || "millisecond")
                ? this.valueOf() === a.valueOf()
                : ((n = a.valueOf()),
                  this.clone().startOf(t).valueOf() <= n &&
                    n <= this.clone().endOf(t).valueOf()))
            );
          }),
          (Mn.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          }),
          (Mn.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          }),
          (Mn.isValid = function () {
            return p(this);
          }),
          (Mn.lang = en),
          (Mn.locale = Qt),
          (Mn.localeData = tn),
          (Mn.max = St),
          (Mn.min = bt),
          (Mn.parsingFlags = function () {
            return m({}, f(this));
          }),
          (Mn.set = function (e, t) {
            if ("object" == typeof e) {
              var n,
                a = (function (e) {
                  var t,
                    n = [];
                  for (t in e) o(e, t) && n.push({ unit: t, priority: J[t] });
                  return (
                    n.sort(function (e, t) {
                      return e.priority - t.priority;
                    }),
                    n
                  );
                })((e = I(e)));
              for (n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
            } else if (S(this[(e = z(e))])) return this[e](t);
            return this;
          }),
          (Mn.startOf = function (e) {
            var t, n;
            if (void 0 === (e = z(e)) || "millisecond" === e || !this.isValid())
              return this;
            switch (((n = this._isUTC ? rn : an), e)) {
              case "year":
                t = n(this.year(), 0, 1);
                break;
              case "quarter":
                t = n(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                t = n(this.year(), this.month(), 1);
                break;
              case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                t = n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date());
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t -= nn(
                    t + (this._isUTC ? 0 : 6e4 * this.utcOffset()),
                    36e5
                  ));
                break;
              case "minute":
                (t = this._d.valueOf()), (t -= nn(t, 6e4));
                break;
              case "second":
                (t = this._d.valueOf()), (t -= nn(t, 1e3));
            }
            return this._d.setTime(t), r.updateOffset(this, !0), this;
          }),
          (Mn.subtract = qt),
          (Mn.toArray = function () {
            var e = this;
            return [
              e.year(),
              e.month(),
              e.date(),
              e.hour(),
              e.minute(),
              e.second(),
              e.millisecond(),
            ];
          }),
          (Mn.toObject = function () {
            var e = this;
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds(),
            };
          }),
          (Mn.toDate = function () {
            return new Date(this.valueOf());
          }),
          (Mn.toISOString = function (e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
              n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
              ? N(
                  n,
                  t
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : S(Date.prototype.toISOString)
              ? t
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", N(n, "Z"))
              : N(
                  n,
                  t
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }),
          (Mn.inspect = function () {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e,
              t,
              n,
              a = "moment",
              r = "";
            return (
              this.isLocal() ||
                ((a =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (r = "Z")),
              (e = "[" + a + '("]'),
              (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
              (n = r + '[")]'),
              this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
            );
          }),
          "undefined" != typeof Symbol &&
            null != Symbol.for &&
            (Mn[Symbol.for("nodejs.util.inspect.custom")] = function () {
              return "Moment<" + this.format() + ">";
            }),
          (Mn.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (Mn.toString = function () {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }),
          (Mn.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (Mn.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }),
          (Mn.creationData = function () {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }),
          (Mn.eraName = function () {
            var e,
              t,
              n,
              a = this.localeData().eras();
            for (e = 0, t = a.length; e < t; ++e) {
              if (
                ((n = this.startOf("day").valueOf()),
                a[e].since <= n && n <= a[e].until)
              )
                return a[e].name;
              if (a[e].until <= n && n <= a[e].since) return a[e].name;
            }
            return "";
          }),
          (Mn.eraNarrow = function () {
            var e,
              t,
              n,
              a = this.localeData().eras();
            for (e = 0, t = a.length; e < t; ++e) {
              if (
                ((n = this.startOf("day").valueOf()),
                a[e].since <= n && n <= a[e].until)
              )
                return a[e].narrow;
              if (a[e].until <= n && n <= a[e].since) return a[e].narrow;
            }
            return "";
          }),
          (Mn.eraAbbr = function () {
            var e,
              t,
              n,
              a = this.localeData().eras();
            for (e = 0, t = a.length; e < t; ++e) {
              if (
                ((n = this.startOf("day").valueOf()),
                a[e].since <= n && n <= a[e].until)
              )
                return a[e].abbr;
              if (a[e].until <= n && n <= a[e].since) return a[e].abbr;
            }
            return "";
          }),
          (Mn.eraYear = function () {
            var e,
              t,
              n,
              a,
              s = this.localeData().eras();
            for (e = 0, t = s.length; e < t; ++e)
              if (
                ((n = s[e].since <= s[e].until ? 1 : -1),
                (a = this.startOf("day").valueOf()),
                (s[e].since <= a && a <= s[e].until) ||
                  (s[e].until <= a && a <= s[e].since))
              )
                return (this.year() - r(s[e].since).year()) * n + s[e].offset;
            return this.year();
          }),
          (Mn.year = Ee),
          (Mn.isLeapYear = function () {
            return G(this.year());
          }),
          (Mn.weekYear = function (e) {
            return un.call(
              this,
              e,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }),
          (Mn.isoWeekYear = function (e) {
            return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
          }),
          (Mn.quarter = Mn.quarters =
            function (e) {
              return null == e
                ? Math.ceil((this.month() + 1) / 3)
                : this.month(3 * (e - 1) + (this.month() % 3));
            }),
          (Mn.month = je),
          (Mn.daysInMonth = function () {
            return ve(this.year(), this.month());
          }),
          (Mn.week = Mn.weeks =
            function (e) {
              var t = this.localeData().week(this);
              return null == e ? t : this.add(7 * (e - t), "d");
            }),
          (Mn.isoWeek = Mn.isoWeeks =
            function (e) {
              var t = Fe(this, 1, 4).week;
              return null == e ? t : this.add(7 * (e - t), "d");
            }),
          (Mn.weeksInYear = function () {
            var e = this.localeData()._week;
            return Ce(this.year(), e.dow, e.doy);
          }),
          (Mn.weeksInWeekYear = function () {
            var e = this.localeData()._week;
            return Ce(this.weekYear(), e.dow, e.doy);
          }),
          (Mn.isoWeeksInYear = function () {
            return Ce(this.year(), 1, 4);
          }),
          (Mn.isoWeeksInISOWeekYear = function () {
            return Ce(this.isoWeekYear(), 1, 4);
          }),
          (Mn.date = _n),
          (Mn.day = Mn.days =
            function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              return null != e
                ? ((e = (function (e, t) {
                    return "string" != typeof e
                      ? e
                      : isNaN(e)
                      ? "number" == typeof (e = t.weekdaysParse(e))
                        ? e
                        : null
                      : parseInt(e, 10);
                  })(e, this.localeData())),
                  this.add(e - t, "d"))
                : t;
            }),
          (Mn.weekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
          }),
          (Mn.isoWeekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              var t = (function (e, t) {
                return "string" == typeof e
                  ? t.weekdaysParse(e) % 7 || 7
                  : isNaN(e)
                  ? null
                  : e;
              })(e, this.localeData());
              return this.day(this.day() % 7 ? t : t - 7);
            }
            return this.day() || 7;
          }),
          (Mn.dayOfYear = function (e) {
            var t =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == e ? t : this.add(e - t, "d");
          }),
          (Mn.hour = Mn.hours = Qe),
          (Mn.minute = Mn.minutes = cn),
          (Mn.second = Mn.seconds = fn),
          (Mn.millisecond = Mn.milliseconds = hn),
          (Mn.utcOffset = function (e, t, n) {
            var a,
              s = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              if ("string" == typeof e) {
                if (null === (e = Wt(ce, e))) return this;
              } else Math.abs(e) < 16 && !n && (e *= 60);
              return (
                !this._isUTC && t && (a = Ft(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != a && this.add(a, "m"),
                s !== e &&
                  (!t || this._changeInProgress
                    ? Bt(this, It(e - s, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      r.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? s : Ft(this);
          }),
          (Mn.utc = function (e) {
            return this.utcOffset(0, e);
          }),
          (Mn.local = function (e) {
            return (
              this._isUTC &&
                (this.utcOffset(0, e),
                (this._isUTC = !1),
                e && this.subtract(Ft(this), "m")),
              this
            );
          }),
          (Mn.parseZone = function () {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var e = Wt(_e, this._i);
              null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
            }
            return this;
          }),
          (Mn.hasAlignedHourOffset = function (e) {
            return (
              !!this.isValid() &&
              ((e = e ? Tt(e).utcOffset() : 0),
              (this.utcOffset() - e) % 60 == 0)
            );
          }),
          (Mn.isDST = function () {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }),
          (Mn.isLocal = function () {
            return !!this.isValid() && !this._isUTC;
          }),
          (Mn.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC;
          }),
          (Mn.isUtc = Ct),
          (Mn.isUTC = Ct),
          (Mn.zoneAbbr = function () {
            return this._isUTC ? "UTC" : "";
          }),
          (Mn.zoneName = function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }),
          (Mn.dates = w("dates accessor is deprecated. Use date instead.", _n)),
          (Mn.months = w(
            "months accessor is deprecated. Use month instead",
            je
          )),
          (Mn.years = w("years accessor is deprecated. Use year instead", Ee)),
          (Mn.zone = w(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            function (e, t) {
              return null != e
                ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
                : -this.utcOffset();
            }
          )),
          (Mn.isDSTShifted = w(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            function () {
              if (!u(this._isDSTShifted)) return this._isDSTShifted;
              var e,
                t = {};
              return (
                Y(t, this),
                (t = wt(t))._a
                  ? ((e = t._isUTC ? h(t._a) : Tt(t._a)),
                    (this._isDSTShifted =
                      this.isValid() &&
                      (function (e, t, n) {
                        var a,
                          r = Math.min(e.length, t.length),
                          s = Math.abs(e.length - t.length),
                          i = 0;
                        for (a = 0; a < r; a++)
                          ((n && e[a] !== t[a]) ||
                            (!n && V(e[a]) !== V(t[a]))) &&
                            i++;
                        return i + s;
                      })(t._a, e.toArray()) > 0))
                  : (this._isDSTShifted = !1),
                this._isDSTShifted
              );
            }
          ));
        var Ln = j.prototype;
        function Yn(e, t, n, a) {
          var r = dt(),
            s = h().set(a, t);
          return r[n](s, e);
        }
        function gn(e, t, n) {
          if ((l(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
            return Yn(e, t, n, "month");
          var a,
            r = [];
          for (a = 0; a < 12; a++) r[a] = Yn(e, a, n, "month");
          return r;
        }
        function vn(e, t, n, a) {
          "boolean" == typeof e
            ? (l(t) && ((n = t), (t = void 0)), (t = t || ""))
            : ((n = t = e),
              (e = !1),
              l(t) && ((n = t), (t = void 0)),
              (t = t || ""));
          var r,
            s = dt(),
            i = e ? s._week.dow : 0,
            o = [];
          if (null != n) return Yn(t, (n + i) % 7, a, "day");
          for (r = 0; r < 7; r++) o[r] = Yn(t, (r + i) % 7, a, "day");
          return o;
        }
        (Ln.calendar = function (e, t, n) {
          var a = this._calendar[e] || this._calendar.sameElse;
          return S(a) ? a.call(t, n) : a;
        }),
          (Ln.longDateFormat = function (e) {
            var t = this._longDateFormat[e],
              n = this._longDateFormat[e.toUpperCase()];
            return t || !n
              ? t
              : ((this._longDateFormat[e] = n
                  .match(O)
                  .map(function (e) {
                    return "MMMM" === e ||
                      "MM" === e ||
                      "DD" === e ||
                      "dddd" === e
                      ? e.slice(1)
                      : e;
                  })
                  .join("")),
                this._longDateFormat[e]);
          }),
          (Ln.invalidDate = function () {
            return this._invalidDate;
          }),
          (Ln.ordinal = function (e) {
            return this._ordinal.replace("%d", e);
          }),
          (Ln.preparse = yn),
          (Ln.postformat = yn),
          (Ln.relativeTime = function (e, t, n, a) {
            var r = this._relativeTime[n];
            return S(r) ? r(e, t, n, a) : r.replace(/%d/i, e);
          }),
          (Ln.pastFuture = function (e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return S(n) ? n(t) : n.replace(/%s/i, t);
          }),
          (Ln.set = function (e) {
            var t, n;
            for (n in e)
              o(e, n) && (S((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
            (this._config = e),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }),
          (Ln.eras = function (e, t) {
            var n,
              a,
              s,
              i = this._eras || dt("en")._eras;
            for (n = 0, a = i.length; n < a; ++n) {
              switch (typeof i[n].since) {
                case "string":
                  (s = r(i[n].since).startOf("day")),
                    (i[n].since = s.valueOf());
              }
              switch (typeof i[n].until) {
                case "undefined":
                  i[n].until = 1 / 0;
                  break;
                case "string":
                  (s = r(i[n].until).startOf("day").valueOf()),
                    (i[n].until = s.valueOf());
              }
            }
            return i;
          }),
          (Ln.erasParse = function (e, t, n) {
            var a,
              r,
              s,
              i,
              o,
              d = this.eras();
            for (e = e.toUpperCase(), a = 0, r = d.length; a < r; ++a)
              if (
                ((s = d[a].name.toUpperCase()),
                (i = d[a].abbr.toUpperCase()),
                (o = d[a].narrow.toUpperCase()),
                n)
              )
                switch (t) {
                  case "N":
                  case "NN":
                  case "NNN":
                    if (i === e) return d[a];
                    break;
                  case "NNNN":
                    if (s === e) return d[a];
                    break;
                  case "NNNNN":
                    if (o === e) return d[a];
                }
              else if ([s, i, o].indexOf(e) >= 0) return d[a];
          }),
          (Ln.erasConvertYear = function (e, t) {
            var n = e.since <= e.until ? 1 : -1;
            return void 0 === t
              ? r(e.since).year()
              : r(e.since).year() + (t - e.offset) * n;
          }),
          (Ln.erasAbbrRegex = function (e) {
            return (
              o(this, "_erasAbbrRegex") || on.call(this),
              e ? this._erasAbbrRegex : this._erasRegex
            );
          }),
          (Ln.erasNameRegex = function (e) {
            return (
              o(this, "_erasNameRegex") || on.call(this),
              e ? this._erasNameRegex : this._erasRegex
            );
          }),
          (Ln.erasNarrowRegex = function (e) {
            return (
              o(this, "_erasNarrowRegex") || on.call(this),
              e ? this._erasNarrowRegex : this._erasRegex
            );
          }),
          (Ln.months = function (e, t) {
            return e
              ? s(this._months)
                ? this._months[e.month()]
                : this._months[
                    (this._months.isFormat || De).test(t)
                      ? "format"
                      : "standalone"
                  ][e.month()]
              : s(this._months)
              ? this._months
              : this._months.standalone;
          }),
          (Ln.monthsShort = function (e, t) {
            return e
              ? s(this._monthsShort)
                ? this._monthsShort[e.month()]
                : this._monthsShort[De.test(t) ? "format" : "standalone"][
                    e.month()
                  ]
              : s(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }),
          (Ln.monthsParse = function (e, t, n) {
            var a, r, s;
            if (this._monthsParseExact) return Se.call(this, e, t, n);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                a = 0;
              a < 12;
              a++
            ) {
              if (
                ((r = h([2e3, a])),
                n &&
                  !this._longMonthsParse[a] &&
                  ((this._longMonthsParse[a] = new RegExp(
                    "^" + this.months(r, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[a] = new RegExp(
                    "^" + this.monthsShort(r, "").replace(".", "") + "$",
                    "i"
                  ))),
                n ||
                  this._monthsParse[a] ||
                  ((s =
                    "^" + this.months(r, "") + "|^" + this.monthsShort(r, "")),
                  (this._monthsParse[a] = new RegExp(s.replace(".", ""), "i"))),
                n && "MMMM" === t && this._longMonthsParse[a].test(e))
              )
                return a;
              if (n && "MMM" === t && this._shortMonthsParse[a].test(e))
                return a;
              if (!n && this._monthsParse[a].test(e)) return a;
            }
          }),
          (Ln.monthsRegex = function (e) {
            return this._monthsParseExact
              ? (o(this, "_monthsRegex") || He.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex)
              : (o(this, "_monthsRegex") || (this._monthsRegex = be),
                this._monthsStrictRegex && e
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }),
          (Ln.monthsShortRegex = function (e) {
            return this._monthsParseExact
              ? (o(this, "_monthsRegex") || He.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (o(this, "_monthsShortRegex") || (this._monthsShortRegex = Te),
                this._monthsShortStrictRegex && e
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }),
          (Ln.week = function (e) {
            return Fe(e, this._week.dow, this._week.doy).week;
          }),
          (Ln.firstDayOfYear = function () {
            return this._week.doy;
          }),
          (Ln.firstDayOfWeek = function () {
            return this._week.dow;
          }),
          (Ln.weekdays = function (e, t) {
            var n = s(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  e && !0 !== e && this._weekdays.isFormat.test(t)
                    ? "format"
                    : "standalone"
                ];
            return !0 === e ? Re(n, this._week.dow) : e ? n[e.day()] : n;
          }),
          (Ln.weekdaysMin = function (e) {
            return !0 === e
              ? Re(this._weekdaysMin, this._week.dow)
              : e
              ? this._weekdaysMin[e.day()]
              : this._weekdaysMin;
          }),
          (Ln.weekdaysShort = function (e) {
            return !0 === e
              ? Re(this._weekdaysShort, this._week.dow)
              : e
              ? this._weekdaysShort[e.day()]
              : this._weekdaysShort;
          }),
          (Ln.weekdaysParse = function (e, t, n) {
            var a, r, s;
            if (this._weekdaysParseExact) return Ve.call(this, e, t, n);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                a = 0;
              a < 7;
              a++
            ) {
              if (
                ((r = h([2e3, 1]).day(a)),
                n &&
                  !this._fullWeekdaysParse[a] &&
                  ((this._fullWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdays(r, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[a] = new RegExp(
                    "^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[a] ||
                  ((s =
                    "^" +
                    this.weekdays(r, "") +
                    "|^" +
                    this.weekdaysShort(r, "") +
                    "|^" +
                    this.weekdaysMin(r, "")),
                  (this._weekdaysParse[a] = new RegExp(
                    s.replace(".", ""),
                    "i"
                  ))),
                n && "dddd" === t && this._fullWeekdaysParse[a].test(e))
              )
                return a;
              if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e))
                return a;
              if (n && "dd" === t && this._minWeekdaysParse[a].test(e))
                return a;
              if (!n && this._weekdaysParse[a].test(e)) return a;
            }
          }),
          (Ln.weekdaysRegex = function (e) {
            return this._weekdaysParseExact
              ? (o(this, "_weekdaysRegex") || qe.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = Ue),
                this._weekdaysStrictRegex && e
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }),
          (Ln.weekdaysShortRegex = function (e) {
            return this._weekdaysParseExact
              ? (o(this, "_weekdaysRegex") || qe.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (o(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = Ge),
                this._weekdaysShortStrictRegex && e
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }),
          (Ln.weekdaysMinRegex = function (e) {
            return this._weekdaysParseExact
              ? (o(this, "_weekdaysRegex") || qe.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (o(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be),
                this._weekdaysMinStrictRegex && e
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }),
          (Ln.isPM = function (e) {
            return "p" === (e + "").toLowerCase().charAt(0);
          }),
          (Ln.meridiem = function (e, t, n) {
            return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }),
          it("en", {
            eras: [
              {
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 === V((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
          }),
          (r.lang = w(
            "moment.lang is deprecated. Use moment.locale instead.",
            it
          )),
          (r.langData = w(
            "moment.langData is deprecated. Use moment.localeData instead.",
            dt
          ));
        var kn = Math.abs;
        function wn(e, t, n, a) {
          var r = It(t, n);
          return (
            (e._milliseconds += a * r._milliseconds),
            (e._days += a * r._days),
            (e._months += a * r._months),
            e._bubble()
          );
        }
        function Dn(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e);
        }
        function Tn(e) {
          return (4800 * e) / 146097;
        }
        function bn(e) {
          return (146097 * e) / 4800;
        }
        function Sn(e) {
          return function () {
            return this.as(e);
          };
        }
        var xn = Sn("ms"),
          jn = Sn("s"),
          Hn = Sn("m"),
          On = Sn("h"),
          En = Sn("d"),
          Pn = Sn("w"),
          An = Sn("M"),
          Wn = Sn("Q"),
          Nn = Sn("y");
        function Fn(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN;
          };
        }
        var Cn = Fn("milliseconds"),
          Rn = Fn("seconds"),
          zn = Fn("minutes"),
          In = Fn("hours"),
          Jn = Fn("days"),
          Un = Fn("months"),
          Gn = Fn("years"),
          Bn = Math.round,
          Vn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
        function qn(e, t, n, a, r) {
          return r.relativeTime(t || 1, !!n, e, a);
        }
        var Kn = Math.abs;
        function $n(e) {
          return (e > 0) - (e < 0) || +e;
        }
        function Zn() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e,
            t,
            n,
            a,
            r,
            s,
            i,
            o,
            d = Kn(this._milliseconds) / 1e3,
            u = Kn(this._days),
            l = Kn(this._months),
            _ = this.asSeconds();
          return _
            ? ((e = B(d / 60)),
              (t = B(e / 60)),
              (d %= 60),
              (e %= 60),
              (n = B(l / 12)),
              (l %= 12),
              (a = d ? d.toFixed(3).replace(/\.?0+$/, "") : ""),
              (r = _ < 0 ? "-" : ""),
              (s = $n(this._months) !== $n(_) ? "-" : ""),
              (i = $n(this._days) !== $n(_) ? "-" : ""),
              (o = $n(this._milliseconds) !== $n(_) ? "-" : ""),
              r +
                "P" +
                (n ? s + n + "Y" : "") +
                (l ? s + l + "M" : "") +
                (u ? i + u + "D" : "") +
                (t || e || d ? "T" : "") +
                (t ? o + t + "H" : "") +
                (e ? o + e + "M" : "") +
                (d ? o + a + "S" : ""))
            : "P0D";
        }
        var Xn = Ht.prototype;
        return (
          (Xn.isValid = function () {
            return this._isValid;
          }),
          (Xn.abs = function () {
            var e = this._data;
            return (
              (this._milliseconds = kn(this._milliseconds)),
              (this._days = kn(this._days)),
              (this._months = kn(this._months)),
              (e.milliseconds = kn(e.milliseconds)),
              (e.seconds = kn(e.seconds)),
              (e.minutes = kn(e.minutes)),
              (e.hours = kn(e.hours)),
              (e.months = kn(e.months)),
              (e.years = kn(e.years)),
              this
            );
          }),
          (Xn.add = function (e, t) {
            return wn(this, e, t, 1);
          }),
          (Xn.subtract = function (e, t) {
            return wn(this, e, t, -1);
          }),
          (Xn.as = function (e) {
            if (!this.isValid()) return NaN;
            var t,
              n,
              a = this._milliseconds;
            if ("month" === (e = z(e)) || "quarter" === e || "year" === e)
              switch (
                ((t = this._days + a / 864e5), (n = this._months + Tn(t)), e)
              ) {
                case "month":
                  return n;
                case "quarter":
                  return n / 3;
                case "year":
                  return n / 12;
              }
            else
              switch (((t = this._days + Math.round(bn(this._months))), e)) {
                case "week":
                  return t / 7 + a / 6048e5;
                case "day":
                  return t + a / 864e5;
                case "hour":
                  return 24 * t + a / 36e5;
                case "minute":
                  return 1440 * t + a / 6e4;
                case "second":
                  return 86400 * t + a / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * t) + a;
                default:
                  throw new Error("Unknown unit " + e);
              }
          }),
          (Xn.asMilliseconds = xn),
          (Xn.asSeconds = jn),
          (Xn.asMinutes = Hn),
          (Xn.asHours = On),
          (Xn.asDays = En),
          (Xn.asWeeks = Pn),
          (Xn.asMonths = An),
          (Xn.asQuarters = Wn),
          (Xn.asYears = Nn),
          (Xn.valueOf = function () {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * V(this._months / 12)
              : NaN;
          }),
          (Xn._bubble = function () {
            var e,
              t,
              n,
              a,
              r,
              s = this._milliseconds,
              i = this._days,
              o = this._months,
              d = this._data;
            return (
              (s >= 0 && i >= 0 && o >= 0) ||
                (s <= 0 && i <= 0 && o <= 0) ||
                ((s += 864e5 * Dn(bn(o) + i)), (i = 0), (o = 0)),
              (d.milliseconds = s % 1e3),
              (e = B(s / 1e3)),
              (d.seconds = e % 60),
              (t = B(e / 60)),
              (d.minutes = t % 60),
              (n = B(t / 60)),
              (d.hours = n % 24),
              (i += B(n / 24)),
              (r = B(Tn(i))),
              (o += r),
              (i -= Dn(bn(r))),
              (a = B(o / 12)),
              (o %= 12),
              (d.days = i),
              (d.months = o),
              (d.years = a),
              this
            );
          }),
          (Xn.clone = function () {
            return It(this);
          }),
          (Xn.get = function (e) {
            return (e = z(e)), this.isValid() ? this[e + "s"]() : NaN;
          }),
          (Xn.milliseconds = Cn),
          (Xn.seconds = Rn),
          (Xn.minutes = zn),
          (Xn.hours = In),
          (Xn.days = Jn),
          (Xn.weeks = function () {
            return B(this.days() / 7);
          }),
          (Xn.months = Un),
          (Xn.years = Gn),
          (Xn.humanize = function (e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n,
              a,
              r = !1,
              s = Vn;
            return (
              "object" == typeof e && ((t = e), (e = !1)),
              "boolean" == typeof e && (r = e),
              "object" == typeof t &&
                ((s = Object.assign({}, Vn, t)),
                null != t.s && null == t.ss && (s.ss = t.s - 1)),
              (n = this.localeData()),
              (a = (function (e, t, n, a) {
                var r = It(e).abs(),
                  s = Bn(r.as("s")),
                  i = Bn(r.as("m")),
                  o = Bn(r.as("h")),
                  d = Bn(r.as("d")),
                  u = Bn(r.as("M")),
                  l = Bn(r.as("w")),
                  _ = Bn(r.as("y")),
                  c =
                    (s <= n.ss && ["s", s]) ||
                    (s < n.s && ["ss", s]) ||
                    (i <= 1 && ["m"]) ||
                    (i < n.m && ["mm", i]) ||
                    (o <= 1 && ["h"]) ||
                    (o < n.h && ["hh", o]) ||
                    (d <= 1 && ["d"]) ||
                    (d < n.d && ["dd", d]);
                return (
                  null != n.w &&
                    (c = c || (l <= 1 && ["w"]) || (l < n.w && ["ww", l])),
                  ((c = c ||
                    (u <= 1 && ["M"]) ||
                    (u < n.M && ["MM", u]) ||
                    (_ <= 1 && ["y"]) || ["yy", _])[2] = t),
                  (c[3] = +e > 0),
                  (c[4] = a),
                  qn.apply(null, c)
                );
              })(this, !r, s, n)),
              r && (a = n.pastFuture(+this, a)),
              n.postformat(a)
            );
          }),
          (Xn.toISOString = Zn),
          (Xn.toString = Zn),
          (Xn.toJSON = Zn),
          (Xn.locale = Qt),
          (Xn.localeData = tn),
          (Xn.toIsoString = w(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            Zn
          )),
          (Xn.lang = en),
          W("X", 0, 0, "unix"),
          W("x", 0, 0, "valueOf"),
          he("x", le),
          he("X", /[+-]?\d+(\.\d{1,3})?/),
          Le("X", function (e, t, n) {
            n._d = new Date(1e3 * parseFloat(e));
          }),
          Le("x", function (e, t, n) {
            n._d = new Date(V(e));
          }),
          (r.version = "2.27.0"),
          (t = Tt),
          (r.fn = Mn),
          (r.min = function () {
            var e = [].slice.call(arguments, 0);
            return xt("isBefore", e);
          }),
          (r.max = function () {
            var e = [].slice.call(arguments, 0);
            return xt("isAfter", e);
          }),
          (r.now = function () {
            return Date.now ? Date.now() : +new Date();
          }),
          (r.utc = h),
          (r.unix = function (e) {
            return Tt(1e3 * e);
          }),
          (r.months = function (e, t) {
            return gn(e, t, "months");
          }),
          (r.isDate = _),
          (r.locale = it),
          (r.invalid = M),
          (r.duration = It),
          (r.isMoment = v),
          (r.weekdays = function (e, t, n) {
            return vn(e, t, n, "weekdays");
          }),
          (r.parseZone = function () {
            return Tt.apply(null, arguments).parseZone();
          }),
          (r.localeData = dt),
          (r.isDuration = Ot),
          (r.monthsShort = function (e, t) {
            return gn(e, t, "monthsShort");
          }),
          (r.weekdaysMin = function (e, t, n) {
            return vn(e, t, n, "weekdaysMin");
          }),
          (r.defineLocale = ot),
          (r.updateLocale = function (e, t) {
            if (null != t) {
              var n,
                a,
                r = et;
              null != tt[e] && null != tt[e].parentLocale
                ? tt[e].set(x(tt[e]._config, t))
                : (null != (a = st(e)) && (r = a._config),
                  (t = x(r, t)),
                  null == a && (t.abbr = e),
                  ((n = new j(t)).parentLocale = tt[e]),
                  (tt[e] = n)),
                it(e);
            } else
              null != tt[e] &&
                (null != tt[e].parentLocale
                  ? ((tt[e] = tt[e].parentLocale), e === it() && it(e))
                  : null != tt[e] && delete tt[e]);
            return tt[e];
          }),
          (r.locales = function () {
            return D(tt);
          }),
          (r.weekdaysShort = function (e, t, n) {
            return vn(e, t, n, "weekdaysShort");
          }),
          (r.normalizeUnits = z),
          (r.relativeTimeRounding = function (e) {
            return void 0 === e ? Bn : "function" == typeof e && ((Bn = e), !0);
          }),
          (r.relativeTimeThreshold = function (e, t) {
            return (
              void 0 !== Vn[e] &&
              (void 0 === t
                ? Vn[e]
                : ((Vn[e] = t), "s" === e && (Vn.ss = t - 1), !0))
            );
          }),
          (r.calendarFormat = function (e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6
              ? "sameElse"
              : n < -1
              ? "lastWeek"
              : n < 0
              ? "lastDay"
              : n < 1
              ? "sameDay"
              : n < 2
              ? "nextDay"
              : n < 7
              ? "nextWeek"
              : "sameElse";
          }),
          (r.prototype = Mn),
          (r.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          r
        );
      })();
    }.call(this, n(145)(e)));
  },
  function (e, t, n) {
    (function (t, n) {
      e.exports = (function (e) {
        function t(a) {
          if (n[a]) return n[a].exports;
          var r = (n[a] = { i: a, l: !1, exports: {} });
          return e[a].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
        }
        var n = {};
        return (
          (t.m = e),
          (t.c = n),
          (t.d = function (e, n, a) {
            t.o(e, n) ||
              Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: a,
              });
          }),
          (t.n = function (e) {
            var n =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(n, "a", n), n;
          }),
          (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (t.p = ""),
          t((t.s = 8))
        );
      })([
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = "swal-button";
          (t.CLASS_NAMES = {
            MODAL: "swal-modal",
            OVERLAY: "swal-overlay",
            SHOW_MODAL: "swal-overlay--show-modal",
            MODAL_TITLE: "swal-title",
            MODAL_TEXT: "swal-text",
            ICON: "swal-icon",
            ICON_CUSTOM: "swal-icon--custom",
            CONTENT: "swal-content",
            FOOTER: "swal-footer",
            BUTTON_CONTAINER: "swal-button-container",
            BUTTON: a,
            CONFIRM_BUTTON: a + "--confirm",
            CANCEL_BUTTON: a + "--cancel",
            DANGER_BUTTON: a + "--danger",
            BUTTON_LOADING: a + "--loading",
            BUTTON_LOADER: a + "__loader",
          }),
            (t.default = t.CLASS_NAMES);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getNode = function (e) {
              var t = "." + e;
              return document.querySelector(t);
            }),
            (t.stringToNode = function (e) {
              var t = document.createElement("div");
              return (t.innerHTML = e.trim()), t.firstChild;
            }),
            (t.insertAfter = function (e, t) {
              var n = t.nextSibling;
              t.parentNode.insertBefore(e, n);
            }),
            (t.removeNode = function (e) {
              e.parentElement.removeChild(e);
            }),
            (t.throwErr = function (e) {
              throw "SweetAlert: " + (e = e.replace(/ +(?= )/g, "")).trim();
            }),
            (t.isPlainObject = function (e) {
              if ("[object Object]" !== Object.prototype.toString.call(e))
                return !1;
              var t = Object.getPrototypeOf(e);
              return null === t || t === Object.prototype;
            }),
            (t.ordinalSuffixOf = function (e) {
              var t = e % 10,
                n = e % 100;
              return 1 === t && 11 !== n
                ? e + "st"
                : 2 === t && 12 !== n
                ? e + "nd"
                : 3 === t && 13 !== n
                ? e + "rd"
                : e + "th";
            });
        },
        function (e, t, n) {
          "use strict";
          function a(e) {
            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
          }
          Object.defineProperty(t, "__esModule", { value: !0 }), a(n(25));
          var r = n(26);
          (t.overlayMarkup = r.default), a(n(27)), a(n(28)), a(n(29));
          var s = n(0),
            i = s.default.MODAL_TITLE,
            o = s.default.MODAL_TEXT,
            d = s.default.ICON,
            u = s.default.FOOTER;
          (t.iconMarkup = '\n  <div class="' + d + '"></div>'),
            (t.titleMarkup = '\n  <div class="' + i + '"></div>\n'),
            (t.textMarkup = '\n  <div class="' + o + '"></div>'),
            (t.footerMarkup = '\n  <div class="' + u + '"></div>\n');
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(1);
          (t.CONFIRM_KEY = "confirm"), (t.CANCEL_KEY = "cancel");
          var r = {
              visible: !0,
              text: null,
              value: null,
              className: "",
              closeModal: !0,
            },
            s = Object.assign({}, r, {
              visible: !1,
              text: "Cancel",
              value: null,
            }),
            i = Object.assign({}, r, { text: "OK", value: !0 });
          t.defaultButtonList = { cancel: s, confirm: i };
          var o = function (e) {
              switch (e) {
                case t.CONFIRM_KEY:
                  return i;
                case t.CANCEL_KEY:
                  return s;
                default:
                  var n = e.charAt(0).toUpperCase() + e.slice(1);
                  return Object.assign({}, r, { text: n, value: e });
              }
            },
            d = function (e, t) {
              var n = o(e);
              return !0 === t
                ? Object.assign({}, n, { visible: !0 })
                : "string" == typeof t
                ? Object.assign({}, n, { visible: !0, text: t })
                : a.isPlainObject(t)
                ? Object.assign({ visible: !0 }, n, t)
                : Object.assign({}, n, { visible: !1 });
            },
            u = function (e) {
              var n = {};
              switch (e.length) {
                case 1:
                  n[t.CANCEL_KEY] = Object.assign({}, s, { visible: !1 });
                  break;
                case 2:
                  (n[t.CANCEL_KEY] = d(t.CANCEL_KEY, e[0])),
                    (n[t.CONFIRM_KEY] = d(t.CONFIRM_KEY, e[1]));
                  break;
                default:
                  a.throwErr(
                    "Invalid number of 'buttons' in array (" +
                      e.length +
                      ").\n      If you want more than 2 buttons, you need to use an object!"
                  );
              }
              return n;
            };
          t.getButtonListOpts = function (e) {
            var n = t.defaultButtonList;
            return (
              "string" == typeof e
                ? (n[t.CONFIRM_KEY] = d(t.CONFIRM_KEY, e))
                : Array.isArray(e)
                ? (n = u(e))
                : a.isPlainObject(e)
                ? (n = (function (e) {
                    for (
                      var t = {}, n = 0, a = Object.keys(e);
                      n < a.length;
                      n++
                    ) {
                      var r = a[n],
                        i = e[r],
                        o = d(r, i);
                      t[r] = o;
                    }
                    return t.cancel || (t.cancel = s), t;
                  })(e))
                : !0 === e
                ? (n = u([!0, !0]))
                : !1 === e
                ? (n = u([!1, !1]))
                : void 0 === e && (n = t.defaultButtonList),
              n
            );
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(1),
            r = n(2),
            s = n(0),
            i = s.default.MODAL,
            o = s.default.OVERLAY,
            d = n(30),
            u = n(31),
            l = n(32),
            _ = n(33);
          t.injectElIntoModal = function (e) {
            var t = a.getNode(i),
              n = a.stringToNode(e);
            return t.appendChild(n), n;
          };
          var c = function (e, t) {
            !(function (e) {
              (e.className = i), (e.textContent = "");
            })(e);
            var n = t.className;
            n && e.classList.add(n);
          };
          (t.initModalContent = function (e) {
            var t = a.getNode(i);
            c(t, e),
              d.default(e.icon),
              u.initTitle(e.title),
              u.initText(e.text),
              _.default(e.content),
              l.default(e.buttons, e.dangerMode);
          }),
            (t.default = function () {
              var e = a.getNode(o),
                t = a.stringToNode(r.modalMarkup);
              e.appendChild(t);
            });
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(3),
            r = { isOpen: !1, promise: null, actions: {}, timer: null },
            s = Object.assign({}, r);
          (t.resetState = function () {
            s = Object.assign({}, r);
          }),
            (t.setActionValue = function (e) {
              if ("string" == typeof e) return i(a.CONFIRM_KEY, e);
              for (var t in e) i(t, e[t]);
            });
          var i = function (e, t) {
            s.actions[e] || (s.actions[e] = {}),
              Object.assign(s.actions[e], { value: t });
          };
          (t.setActionOptionsFor = function (e, t) {
            var n = (void 0 === t ? {} : t).closeModal,
              a = void 0 === n || n;
            Object.assign(s.actions[e], { closeModal: a });
          }),
            (t.default = s);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(1),
            r = n(3),
            s = n(0),
            i = s.default.OVERLAY,
            o = s.default.SHOW_MODAL,
            d = s.default.BUTTON,
            u = s.default.BUTTON_LOADING,
            l = n(5);
          (t.openModal = function () {
            a.getNode(i).classList.add(o), (l.default.isOpen = !0);
          }),
            (t.onAction = function (e) {
              void 0 === e && (e = r.CANCEL_KEY);
              var t = l.default.actions[e],
                n = t.value;
              if (!1 === t.closeModal) {
                var s = d + "--" + e;
                a.getNode(s).classList.add(u);
              } else a.getNode(i).classList.remove(o), (l.default.isOpen = !1);
              l.default.promise.resolve(n);
            }),
            (t.getState = function () {
              var e = Object.assign({}, l.default);
              return delete e.promise, delete e.timer, e;
            }),
            (t.stopLoading = function () {
              for (
                var e = document.querySelectorAll("." + d), t = 0;
                t < e.length;
                t++
              )
                e[t].classList.remove(u);
            });
        },
        function (e, t) {
          var n;
          n = (function () {
            return this;
          })();
          try {
            n = n || Function("return this")() || (0, eval)("this");
          } catch (e) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        },
        function (e, t, n) {
          (function (t) {
            e.exports = t.sweetAlert = n(9);
          }.call(t, n(7)));
        },
        function (e, t, n) {
          (function (t) {
            e.exports = t.swal = n(10);
          }.call(t, n(7)));
        },
        function (e, t, n) {
          "undefined" != typeof window && n(11), n(16);
          var a = n(23).default;
          e.exports = a;
        },
        function (e, t, n) {
          var a = n(12);
          "string" == typeof a && (a = [[e.i, a, ""]]);
          var r = { insertAt: "top", transform: void 0 };
          n(14)(a, r), a.locals && (e.exports = a.locals);
        },
        function (e, t, n) {
          (e.exports = n(13)(void 0)).push([
            e.i,
            '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',
            "",
          ]);
        },
        function (e, t) {
          function n(e, t) {
            var n = e[1] || "",
              a = e[3];
            if (!a) return n;
            if (t && "function" == typeof btoa) {
              var r = (function (e) {
                return (
                  "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
                  " */"
                );
              })(a);
              return [n]
                .concat(
                  a.sources.map(function (e) {
                    return "/*# sourceURL=" + a.sourceRoot + e + " */";
                  })
                )
                .concat([r])
                .join("\n");
            }
            return [n].join("\n");
          }
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var a = n(t, e);
                  return t[2] ? "@media " + t[2] + "{" + a + "}" : a;
                }).join("");
              }),
              (t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var a = {}, r = 0; r < this.length; r++) {
                  var s = this[r][0];
                  "number" == typeof s && (a[s] = !0);
                }
                for (r = 0; r < e.length; r++) {
                  var i = e[r];
                  ("number" == typeof i[0] && a[i[0]]) ||
                    (n && !i[2]
                      ? (i[2] = n)
                      : n && (i[2] = "(" + i[2] + ") and (" + n + ")"),
                    t.push(i));
                }
              }),
              t
            );
          };
        },
        function (e, t, n) {
          function a(e, t) {
            for (var n = 0; n < e.length; n++) {
              var a = e[n],
                r = h[a.id];
              if (r) {
                r.refs++;
                for (var s = 0; s < r.parts.length; s++) r.parts[s](a.parts[s]);
                for (; s < a.parts.length; s++) r.parts.push(l(a.parts[s], t));
              } else {
                var i = [];
                for (s = 0; s < a.parts.length; s++) i.push(l(a.parts[s], t));
                h[a.id] = { id: a.id, refs: 1, parts: i };
              }
            }
          }
          function r(e, t) {
            for (var n = [], a = {}, r = 0; r < e.length; r++) {
              var s = e[r],
                i = t.base ? s[0] + t.base : s[0],
                o = { css: s[1], media: s[2], sourceMap: s[3] };
              a[i]
                ? a[i].parts.push(o)
                : n.push((a[i] = { id: i, parts: [o] }));
            }
            return n;
          }
          function s(e, t) {
            var n = p(e.insertInto);
            if (!n)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
              );
            var a = L[L.length - 1];
            if ("top" === e.insertAt)
              a
                ? a.nextSibling
                  ? n.insertBefore(t, a.nextSibling)
                  : n.appendChild(t)
                : n.insertBefore(t, n.firstChild),
                L.push(t);
            else {
              if ("bottom" !== e.insertAt)
                throw new Error(
                  "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
                );
              n.appendChild(t);
            }
          }
          function i(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = L.indexOf(e);
            t >= 0 && L.splice(t, 1);
          }
          function o(e) {
            var t = document.createElement("style");
            return (e.attrs.type = "text/css"), u(t, e.attrs), s(e, t), t;
          }
          function d(e) {
            var t = document.createElement("link");
            return (
              (e.attrs.type = "text/css"),
              (e.attrs.rel = "stylesheet"),
              u(t, e.attrs),
              s(e, t),
              t
            );
          }
          function u(e, t) {
            Object.keys(t).forEach(function (n) {
              e.setAttribute(n, t[n]);
            });
          }
          function l(e, t) {
            var n, a, r, s;
            if (t.transform && e.css) {
              if (!(s = t.transform(e.css))) return function () {};
              e.css = s;
            }
            if (t.singleton) {
              var u = y++;
              (n = M || (M = o(t))),
                (a = _.bind(null, n, u, !1)),
                (r = _.bind(null, n, u, !0));
            } else
              e.sourceMap &&
              "function" == typeof URL &&
              "function" == typeof URL.createObjectURL &&
              "function" == typeof URL.revokeObjectURL &&
              "function" == typeof Blob &&
              "function" == typeof btoa
                ? ((n = d(t)),
                  (a = m.bind(null, n, t)),
                  (r = function () {
                    i(n), n.href && URL.revokeObjectURL(n.href);
                  }))
                : ((n = o(t)),
                  (a = c.bind(null, n)),
                  (r = function () {
                    i(n);
                  }));
            return (
              a(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap
                  )
                    return;
                  a((e = t));
                } else r();
              }
            );
          }
          function _(e, t, n, a) {
            var r = n ? "" : a.css;
            if (e.styleSheet) e.styleSheet.cssText = g(t, r);
            else {
              var s = document.createTextNode(r),
                i = e.childNodes;
              i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(s, i[t]) : e.appendChild(s);
            }
          }
          function c(e, t) {
            var n = t.css,
              a = t.media;
            if ((a && e.setAttribute("media", a), e.styleSheet))
              e.styleSheet.cssText = n;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(n));
            }
          }
          function m(e, t, n) {
            var a = n.css,
              r = n.sourceMap,
              s = void 0 === t.convertToAbsoluteUrls && r;
            (t.convertToAbsoluteUrls || s) && (a = Y(a)),
              r &&
                (a +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  " */");
            var i = new Blob([a], { type: "text/css" }),
              o = e.href;
            (e.href = URL.createObjectURL(i)), o && URL.revokeObjectURL(o);
          }
          var h = {},
            f = (function (e) {
              var t;
              return function () {
                return void 0 === t && (t = e.apply(this, arguments)), t;
              };
            })(function () {
              return window && document && document.all && !window.atob;
            }),
            p = (function (e) {
              var t = {};
              return function (n) {
                return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
              };
            })(function (e) {
              return document.querySelector(e);
            }),
            M = null,
            y = 0,
            L = [],
            Y = n(15);
          e.exports = function (e, t) {
            if (
              "undefined" != typeof DEBUG &&
              DEBUG &&
              "object" != typeof document
            )
              throw new Error(
                "The style-loader cannot be used in a non-browser environment"
              );
            ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
              t.singleton || (t.singleton = f()),
              t.insertInto || (t.insertInto = "head"),
              t.insertAt || (t.insertAt = "bottom");
            var n = r(e, t);
            return (
              a(n, t),
              function (e) {
                for (var s = [], i = 0; i < n.length; i++) {
                  var o = n[i];
                  (d = h[o.id]).refs--, s.push(d);
                }
                for (e && a(r(e, t), t), i = 0; i < s.length; i++) {
                  var d;
                  if (0 === (d = s[i]).refs) {
                    for (var u = 0; u < d.parts.length; u++) d.parts[u]();
                    delete h[d.id];
                  }
                }
              }
            );
          };
          var g = (function () {
            var e = [];
            return function (t, n) {
              return (e[t] = n), e.filter(Boolean).join("\n");
            };
          })();
        },
        function (e, t) {
          e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
              a = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(
              /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
              function (e, t) {
                var r,
                  s = t
                    .trim()
                    .replace(/^"(.*)"$/, function (e, t) {
                      return t;
                    })
                    .replace(/^'(.*)'$/, function (e, t) {
                      return t;
                    });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(s)
                  ? e
                  : ((r =
                      0 === s.indexOf("//")
                        ? s
                        : 0 === s.indexOf("/")
                        ? n + s
                        : a + s.replace(/^\.\//, "")),
                    "url(" + JSON.stringify(r) + ")");
              }
            );
          };
        },
        function (e, t, n) {
          var a = n(17);
          "undefined" == typeof window ||
            window.Promise ||
            (window.Promise = a),
            n(21),
            String.prototype.includes ||
              (String.prototype.includes = function (e, t) {
                "use strict";
                return (
                  "number" != typeof t && (t = 0),
                  !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                );
              }),
            Array.prototype.includes ||
              Object.defineProperty(Array.prototype, "includes", {
                value: function (e, t) {
                  if (null == this)
                    throw new TypeError('"this" is null or not defined');
                  var n = Object(this),
                    a = n.length >>> 0;
                  if (0 === a) return !1;
                  for (
                    var r = 0 | t,
                      s = Math.max(r >= 0 ? r : a - Math.abs(r), 0);
                    s < a;

                  ) {
                    if (
                      (function (e, t) {
                        return (
                          e === t ||
                          ("number" == typeof e &&
                            "number" == typeof t &&
                            isNaN(e) &&
                            isNaN(t))
                        );
                      })(n[s], e)
                    )
                      return !0;
                    s++;
                  }
                  return !1;
                },
              }),
            "undefined" != typeof window &&
              [
                Element.prototype,
                CharacterData.prototype,
                DocumentType.prototype,
              ].forEach(function (e) {
                e.hasOwnProperty("remove") ||
                  Object.defineProperty(e, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function () {
                      this.parentNode.removeChild(this);
                    },
                  });
              });
        },
        function (e, t, n) {
          (function (t) {
            !(function (n) {
              function a() {}
              function r(e) {
                if ("object" != typeof this)
                  throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e)
                  throw new TypeError("not a function");
                (this._state = 0),
                  (this._handled = !1),
                  (this._value = void 0),
                  (this._deferreds = []),
                  l(e, this);
              }
              function s(e, t) {
                for (; 3 === e._state; ) e = e._value;
                0 !== e._state
                  ? ((e._handled = !0),
                    r._immediateFn(function () {
                      var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                      if (null !== n) {
                        var a;
                        try {
                          a = n(e._value);
                        } catch (e) {
                          return void o(t.promise, e);
                        }
                        i(t.promise, a);
                      } else (1 === e._state ? i : o)(t.promise, e._value);
                    }))
                  : e._deferreds.push(t);
              }
              function i(e, t) {
                try {
                  if (t === e)
                    throw new TypeError(
                      "A promise cannot be resolved with itself."
                    );
                  if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof r)
                      return (e._state = 3), (e._value = t), void d(e);
                    if ("function" == typeof n)
                      return void l(
                        (function (e, t) {
                          return function () {
                            e.apply(t, arguments);
                          };
                        })(n, t),
                        e
                      );
                  }
                  (e._state = 1), (e._value = t), d(e);
                } catch (t) {
                  o(e, t);
                }
              }
              function o(e, t) {
                (e._state = 2), (e._value = t), d(e);
              }
              function d(e) {
                2 === e._state &&
                  0 === e._deferreds.length &&
                  r._immediateFn(function () {
                    e._handled || r._unhandledRejectionFn(e._value);
                  });
                for (var t = 0, n = e._deferreds.length; t < n; t++)
                  s(e, e._deferreds[t]);
                e._deferreds = null;
              }
              function u(e, t, n) {
                (this.onFulfilled = "function" == typeof e ? e : null),
                  (this.onRejected = "function" == typeof t ? t : null),
                  (this.promise = n);
              }
              function l(e, t) {
                var n = !1;
                try {
                  e(
                    function (e) {
                      n || ((n = !0), i(t, e));
                    },
                    function (e) {
                      n || ((n = !0), o(t, e));
                    }
                  );
                } catch (e) {
                  if (n) return;
                  (n = !0), o(t, e);
                }
              }
              var _ = setTimeout;
              (r.prototype.catch = function (e) {
                return this.then(null, e);
              }),
                (r.prototype.then = function (e, t) {
                  var n = new this.constructor(a);
                  return s(this, new u(e, t, n)), n;
                }),
                (r.all = function (e) {
                  var t = Array.prototype.slice.call(e);
                  return new r(function (e, n) {
                    function a(s, i) {
                      try {
                        if (
                          i &&
                          ("object" == typeof i || "function" == typeof i)
                        ) {
                          var o = i.then;
                          if ("function" == typeof o)
                            return void o.call(
                              i,
                              function (e) {
                                a(s, e);
                              },
                              n
                            );
                        }
                        (t[s] = i), 0 == --r && e(t);
                      } catch (e) {
                        n(e);
                      }
                    }
                    if (0 === t.length) return e([]);
                    for (var r = t.length, s = 0; s < t.length; s++) a(s, t[s]);
                  });
                }),
                (r.resolve = function (e) {
                  return e && "object" == typeof e && e.constructor === r
                    ? e
                    : new r(function (t) {
                        t(e);
                      });
                }),
                (r.reject = function (e) {
                  return new r(function (t, n) {
                    n(e);
                  });
                }),
                (r.race = function (e) {
                  return new r(function (t, n) {
                    for (var a = 0, r = e.length; a < r; a++) e[a].then(t, n);
                  });
                }),
                (r._immediateFn =
                  ("function" == typeof t &&
                    function (e) {
                      t(e);
                    }) ||
                  function (e) {
                    _(e, 0);
                  }),
                (r._unhandledRejectionFn = function (e) {
                  "undefined" != typeof console &&
                    console &&
                    console.warn("Possible Unhandled Promise Rejection:", e);
                }),
                (r._setImmediateFn = function (e) {
                  r._immediateFn = e;
                }),
                (r._setUnhandledRejectionFn = function (e) {
                  r._unhandledRejectionFn = e;
                }),
                void 0 !== e && e.exports
                  ? (e.exports = r)
                  : n.Promise || (n.Promise = r);
            })(this);
          }.call(t, n(18).setImmediate));
        },
        function (e, a, r) {
          function s(e, t) {
            (this._id = e), (this._clearFn = t);
          }
          var i = Function.prototype.apply;
          (a.setTimeout = function () {
            return new s(i.call(setTimeout, window, arguments), clearTimeout);
          }),
            (a.setInterval = function () {
              return new s(
                i.call(setInterval, window, arguments),
                clearInterval
              );
            }),
            (a.clearTimeout = a.clearInterval =
              function (e) {
                e && e.close();
              }),
            (s.prototype.unref = s.prototype.ref = function () {}),
            (s.prototype.close = function () {
              this._clearFn.call(window, this._id);
            }),
            (a.enroll = function (e, t) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
            }),
            (a.unenroll = function (e) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
            }),
            (a._unrefActive = a.active =
              function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 &&
                  (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout();
                  }, t));
              }),
            r(19),
            (a.setImmediate = t),
            (a.clearImmediate = n);
        },
        function (e, t, n) {
          (function (e, t) {
            !(function (e, n) {
              "use strict";
              function a(e) {
                delete o[e];
              }
              function r(e) {
                if (d) setTimeout(r, 0, e);
                else {
                  var t = o[e];
                  if (t) {
                    d = !0;
                    try {
                      !(function (e) {
                        var t = e.callback,
                          n = e.args;
                        switch (n.length) {
                          case 0:
                            t();
                            break;
                          case 1:
                            t(n[0]);
                            break;
                          case 2:
                            t(n[0], n[1]);
                            break;
                          case 3:
                            t(n[0], n[1], n[2]);
                            break;
                          default:
                            t.apply(void 0, n);
                        }
                      })(t);
                    } finally {
                      a(e), (d = !1);
                    }
                  }
                }
              }
              if (!e.setImmediate) {
                var s,
                  i = 1,
                  o = {},
                  d = !1,
                  u = e.document,
                  l = Object.getPrototypeOf && Object.getPrototypeOf(e);
                (l = l && l.setTimeout ? l : e),
                  "[object process]" === {}.toString.call(e.process)
                    ? (s = function (e) {
                        t.nextTick(function () {
                          r(e);
                        });
                      })
                    : (function () {
                        if (e.postMessage && !e.importScripts) {
                          var t = !0,
                            n = e.onmessage;
                          return (
                            (e.onmessage = function () {
                              t = !1;
                            }),
                            e.postMessage("", "*"),
                            (e.onmessage = n),
                            t
                          );
                        }
                      })()
                    ? (function () {
                        var t = "setImmediate$" + Math.random() + "$",
                          n = function (n) {
                            n.source === e &&
                              "string" == typeof n.data &&
                              0 === n.data.indexOf(t) &&
                              r(+n.data.slice(t.length));
                          };
                        e.addEventListener
                          ? e.addEventListener("message", n, !1)
                          : e.attachEvent("onmessage", n),
                          (s = function (n) {
                            e.postMessage(t + n, "*");
                          });
                      })()
                    : e.MessageChannel
                    ? (function () {
                        var e = new MessageChannel();
                        (e.port1.onmessage = function (e) {
                          r(e.data);
                        }),
                          (s = function (t) {
                            e.port2.postMessage(t);
                          });
                      })()
                    : u && "onreadystatechange" in u.createElement("script")
                    ? (function () {
                        var e = u.documentElement;
                        s = function (t) {
                          var n = u.createElement("script");
                          (n.onreadystatechange = function () {
                            r(t),
                              (n.onreadystatechange = null),
                              e.removeChild(n),
                              (n = null);
                          }),
                            e.appendChild(n);
                        };
                      })()
                    : (s = function (e) {
                        setTimeout(r, 0, e);
                      }),
                  (l.setImmediate = function (e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (
                      var t = new Array(arguments.length - 1), n = 0;
                      n < t.length;
                      n++
                    )
                      t[n] = arguments[n + 1];
                    var a = { callback: e, args: t };
                    return (o[i] = a), s(i), i++;
                  }),
                  (l.clearImmediate = a);
              }
            })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
          }.call(t, n(7), n(20)));
        },
        function (e, t) {
          function n() {
            throw new Error("setTimeout has not been defined");
          }
          function a() {
            throw new Error("clearTimeout has not been defined");
          }
          function r(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === n || !u) && setTimeout)
              return (u = setTimeout), setTimeout(e, 0);
            try {
              return u(e, 0);
            } catch (t) {
              try {
                return u.call(null, e, 0);
              } catch (t) {
                return u.call(this, e, 0);
              }
            }
          }
          function s() {
            h &&
              c &&
              ((h = !1),
              c.length ? (m = c.concat(m)) : (f = -1),
              m.length && i());
          }
          function i() {
            if (!h) {
              var e = r(s);
              h = !0;
              for (var t = m.length; t; ) {
                for (c = m, m = []; ++f < t; ) c && c[f].run();
                (f = -1), (t = m.length);
              }
              (c = null),
                (h = !1),
                (function (e) {
                  if (l === clearTimeout) return clearTimeout(e);
                  if ((l === a || !l) && clearTimeout)
                    return (l = clearTimeout), clearTimeout(e);
                  try {
                    l(e);
                  } catch (t) {
                    try {
                      return l.call(null, e);
                    } catch (t) {
                      return l.call(this, e);
                    }
                  }
                })(e);
            }
          }
          function o(e, t) {
            (this.fun = e), (this.array = t);
          }
          function d() {}
          var u,
            l,
            _ = (e.exports = {});
          !(function () {
            try {
              u = "function" == typeof setTimeout ? setTimeout : n;
            } catch (e) {
              u = n;
            }
            try {
              l = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
              l = a;
            }
          })();
          var c,
            m = [],
            h = !1,
            f = -1;
          (_.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            m.push(new o(e, t)), 1 !== m.length || h || r(i);
          }),
            (o.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (_.title = "browser"),
            (_.browser = !0),
            (_.env = {}),
            (_.argv = []),
            (_.version = ""),
            (_.versions = {}),
            (_.on = d),
            (_.addListener = d),
            (_.once = d),
            (_.off = d),
            (_.removeListener = d),
            (_.removeAllListeners = d),
            (_.emit = d),
            (_.prependListener = d),
            (_.prependOnceListener = d),
            (_.listeners = function (e) {
              return [];
            }),
            (_.binding = function (e) {
              throw new Error("process.binding is not supported");
            }),
            (_.cwd = function () {
              return "/";
            }),
            (_.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            }),
            (_.umask = function () {
              return 0;
            });
        },
        function (e, t, n) {
          "use strict";
          n(22).polyfill();
        },
        function (e, t, n) {
          "use strict";
          function a(e, t) {
            if (null == e)
              throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(e), a = 1; a < arguments.length; a++) {
              var r = arguments[a];
              if (null != r)
                for (
                  var s = Object.keys(Object(r)), i = 0, o = s.length;
                  i < o;
                  i++
                ) {
                  var d = s[i],
                    u = Object.getOwnPropertyDescriptor(r, d);
                  void 0 !== u && u.enumerable && (n[d] = r[d]);
                }
            }
            return n;
          }
          e.exports = {
            assign: a,
            polyfill: function () {
              Object.assign ||
                Object.defineProperty(Object, "assign", {
                  enumerable: !1,
                  configurable: !0,
                  writable: !0,
                  value: a,
                });
            },
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(24),
            r = n(6),
            s = n(5),
            i = n(36),
            o = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              if ("undefined" != typeof window) {
                var n = i.getOpts.apply(void 0, e);
                return new Promise(function (e, t) {
                  (s.default.promise = { resolve: e, reject: t }),
                    a.default(n),
                    setTimeout(function () {
                      r.openModal();
                    });
                });
              }
            };
          (o.close = r.onAction),
            (o.getState = r.getState),
            (o.setActionValue = s.setActionValue),
            (o.stopLoading = r.stopLoading),
            (o.setDefaults = i.setDefaults),
            (t.default = o);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(1),
            r = n(0).default.MODAL,
            s = n(4),
            i = n(34),
            o = n(35),
            d = n(1);
          (t.init = function (e) {
            a.getNode(r) ||
              (document.body ||
                d.throwErr(
                  "You can only use SweetAlert AFTER the DOM has loaded!"
                ),
              i.default(),
              s.default()),
              s.initModalContent(e),
              o.default(e);
          }),
            (t.default = t.init);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(0).default.MODAL;
          (t.modalMarkup =
            '\n  <div class="' +
            a +
            '" role="dialog" aria-modal="true"></div>'),
            (t.default = t.modalMarkup);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a =
            '<div \n    class="' +
            n(0).default.OVERLAY +
            '"\n    tabIndex="-1">\n  </div>';
          t.default = a;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(0).default.ICON;
          (t.errorIconMarkup = function () {
            var e = a + "--error",
              t = e + "__line";
            return (
              '\n    <div class="' +
              e +
              '__x-mark">\n      <span class="' +
              t +
              " " +
              t +
              '--left"></span>\n      <span class="' +
              t +
              " " +
              t +
              '--right"></span>\n    </div>\n  '
            );
          }),
            (t.warningIconMarkup = function () {
              var e = a + "--warning";
              return (
                '\n    <span class="' +
                e +
                '__body">\n      <span class="' +
                e +
                '__dot"></span>\n    </span>\n  '
              );
            }),
            (t.successIconMarkup = function () {
              var e = a + "--success";
              return (
                '\n    <span class="' +
                e +
                "__line " +
                e +
                '__line--long"></span>\n    <span class="' +
                e +
                "__line " +
                e +
                '__line--tip"></span>\n\n    <div class="' +
                e +
                '__ring"></div>\n    <div class="' +
                e +
                '__hide-corners"></div>\n  '
              );
            });
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(0).default.CONTENT;
          t.contentMarkup = '\n  <div class="' + a + '">\n\n  </div>\n';
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(0),
            r = a.default.BUTTON_CONTAINER,
            s = a.default.BUTTON,
            i = a.default.BUTTON_LOADER;
          t.buttonMarkup =
            '\n  <div class="' +
            r +
            '">\n\n    <button\n      class="' +
            s +
            '"\n    ></button>\n\n    <div class="' +
            i +
            '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(4),
            r = n(2),
            s = n(0),
            i = s.default.ICON,
            o = s.default.ICON_CUSTOM,
            d = ["error", "warning", "success", "info"],
            u = {
              error: r.errorIconMarkup(),
              warning: r.warningIconMarkup(),
              success: r.successIconMarkup(),
            };
          t.default = function (e) {
            if (e) {
              var t = a.injectElIntoModal(r.iconMarkup);
              d.includes(e)
                ? (function (e, t) {
                    var n = i + "--" + e;
                    t.classList.add(n);
                    var a = u[e];
                    a && (t.innerHTML = a);
                  })(e, t)
                : (function (e, t) {
                    t.classList.add(o);
                    var n = document.createElement("img");
                    (n.src = e), t.appendChild(n);
                  })(e, t);
            }
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(2),
            r = n(4),
            s = function (e) {
              navigator.userAgent.includes("AppleWebKit") &&
                ((e.style.display = "none"),
                e.offsetHeight,
                (e.style.display = ""));
            };
          (t.initTitle = function (e) {
            if (e) {
              var t = r.injectElIntoModal(a.titleMarkup);
              (t.textContent = e), s(t);
            }
          }),
            (t.initText = function (e) {
              if (e) {
                var t = document.createDocumentFragment();
                e.split("\n").forEach(function (e, n, a) {
                  t.appendChild(document.createTextNode(e)),
                    n < a.length - 1 &&
                      t.appendChild(document.createElement("br"));
                });
                var n = r.injectElIntoModal(a.textMarkup);
                n.appendChild(t), s(n);
              }
            });
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(1),
            r = n(4),
            s = n(0),
            i = s.default.BUTTON,
            o = s.default.DANGER_BUTTON,
            d = n(3),
            u = n(2),
            l = n(6),
            _ = n(5),
            c = function (e, t, n) {
              var r = t.text,
                s = t.value,
                c = t.className,
                m = t.closeModal,
                h = a.stringToNode(u.buttonMarkup),
                f = h.querySelector("." + i),
                p = i + "--" + e;
              f.classList.add(p),
                c &&
                  (Array.isArray(c) ? c : c.split(" "))
                    .filter(function (e) {
                      return e.length > 0;
                    })
                    .forEach(function (e) {
                      f.classList.add(e);
                    }),
                n && e === d.CONFIRM_KEY && f.classList.add(o),
                (f.textContent = r);
              var M = {};
              return (
                (M[e] = s),
                _.setActionValue(M),
                _.setActionOptionsFor(e, { closeModal: m }),
                f.addEventListener("click", function () {
                  return l.onAction(e);
                }),
                h
              );
            };
          t.default = function (e, t) {
            var n = r.injectElIntoModal(u.footerMarkup);
            for (var a in e) {
              var s = e[a],
                i = c(a, s, t);
              s.visible && n.appendChild(i);
            }
            0 === n.children.length && n.remove();
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(3),
            r = n(4),
            s = n(2),
            i = n(5),
            o = n(6),
            d = n(0).default.CONTENT,
            u = function (e) {
              e.addEventListener("input", function (e) {
                var t = e.target.value;
                i.setActionValue(t);
              }),
                e.addEventListener("keyup", function (e) {
                  if ("Enter" === e.key) return o.onAction(a.CONFIRM_KEY);
                }),
                setTimeout(function () {
                  e.focus(), i.setActionValue("");
                }, 0);
            };
          t.default = function (e) {
            if (e) {
              var t = r.injectElIntoModal(s.contentMarkup),
                n = e.element,
                a = e.attributes;
              "string" == typeof n
                ? (function (e, t, n) {
                    var a = document.createElement(t),
                      r = d + "__" + t;
                    for (var s in (a.classList.add(r), n)) {
                      var i = n[s];
                      a[s] = i;
                    }
                    "input" === t && u(a), e.appendChild(a);
                  })(t, n, a)
                : t.appendChild(n);
            }
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(1),
            r = n(2);
          t.default = function () {
            var e = a.stringToNode(r.overlayMarkup);
            document.body.appendChild(e);
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(5),
            r = n(6),
            s = n(1),
            i = n(3),
            o = n(0),
            d = o.default.MODAL,
            u = o.default.BUTTON,
            l = o.default.OVERLAY,
            _ = function (e) {
              if (a.default.isOpen)
                switch (e.key) {
                  case "Escape":
                    return r.onAction(i.CANCEL_KEY);
                }
            },
            c = function (e) {
              if (a.default.isOpen)
                switch (e.key) {
                  case "Tab":
                    return (function (e) {
                      e.preventDefault(), h();
                    })(e);
                }
            },
            m = function (e) {
              if (a.default.isOpen)
                return "Tab" === e.key && e.shiftKey
                  ? (function (e) {
                      e.preventDefault(), f();
                    })(e)
                  : void 0;
            },
            h = function () {
              var e = s.getNode(u);
              e && ((e.tabIndex = 0), e.focus());
            },
            f = function () {
              var e = s.getNode(d).querySelectorAll("." + u),
                t = e[e.length - 1];
              t && t.focus();
            },
            p = function () {
              var e = s.getNode(d).querySelectorAll("." + u);
              e.length &&
                ((function (e) {
                  e[e.length - 1].addEventListener("keydown", c);
                })(e),
                (function (e) {
                  e[0].addEventListener("keydown", m);
                })(e));
            },
            M = function (e) {
              if (s.getNode(l) === e.target) return r.onAction(i.CANCEL_KEY);
            };
          t.default = function (e) {
            e.closeOnEsc
              ? document.addEventListener("keyup", _)
              : document.removeEventListener("keyup", _),
              e.dangerMode ? h() : f(),
              p(),
              (function (e) {
                var t = s.getNode(l);
                t.removeEventListener("click", M),
                  e && t.addEventListener("click", M);
              })(e.closeOnClickOutside),
              (function (e) {
                a.default.timer && clearTimeout(a.default.timer),
                  e &&
                    (a.default.timer = window.setTimeout(function () {
                      return r.onAction(i.CANCEL_KEY);
                    }, e));
              })(e.timer);
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(1),
            r = n(3),
            s = n(37),
            i = n(38),
            o = {
              title: null,
              text: null,
              icon: null,
              buttons: r.defaultButtonList,
              content: null,
              className: null,
              closeOnClickOutside: !0,
              closeOnEsc: !0,
              dangerMode: !1,
              timer: null,
            },
            d = Object.assign({}, o);
          t.setDefaults = function (e) {
            d = Object.assign({}, o, e);
          };
          var u = function (e) {
              var t = e && e.button,
                n = e && e.buttons;
              return (
                void 0 !== t &&
                  void 0 !== n &&
                  a.throwErr("Cannot set both 'button' and 'buttons' options!"),
                void 0 !== t ? { confirm: t } : n
              );
            },
            l = function (e) {
              return a.ordinalSuffixOf(e + 1);
            },
            _ = function (e, t) {
              a.throwErr(l(t) + " argument ('" + e + "') is invalid");
            },
            c = function (e, t) {
              var n = e + 1,
                r = t[n];
              a.isPlainObject(r) ||
                void 0 === r ||
                a.throwErr(
                  "Expected " +
                    l(n) +
                    " argument ('" +
                    r +
                    "') to be a plain object"
                );
            },
            m = function (e, t, n, r) {
              var s = t instanceof Element;
              if ("string" == typeof t) {
                if (0 === n) return { text: t };
                if (1 === n) return { text: t, title: r[0] };
                if (2 === n) return c(n, r), { icon: t };
                _(t, n);
              } else {
                if (s && 0 === n) return c(n, r), { content: t };
                if (a.isPlainObject(t))
                  return (
                    (function (e, t) {
                      var n = e + 1,
                        r = t[n];
                      void 0 !== r &&
                        a.throwErr(
                          "Unexpected " + l(n) + " argument (" + r + ")"
                        );
                    })(n, r),
                    t
                  );
                _(t, n);
              }
            };
          t.getOpts = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = {};
            e.forEach(function (t, a) {
              var r = m(0, t, a, e);
              Object.assign(n, r);
            });
            var a = u(n);
            (n.buttons = r.getButtonListOpts(a)),
              delete n.button,
              (n.content = s.getContentOpts(n.content));
            var l = Object.assign({}, o, d, n);
            return (
              Object.keys(l).forEach(function (e) {
                i.DEPRECATED_OPTS[e] && i.logDeprecation(e);
              }),
              l
            );
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var a = n(1),
            r = { element: "input", attributes: { placeholder: "" } };
          t.getContentOpts = function (e) {
            return a.isPlainObject(e)
              ? Object.assign({}, e)
              : e instanceof Element
              ? { element: e }
              : "input" === e
              ? r
              : null;
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.logDeprecation = function (e) {
              var n = t.DEPRECATED_OPTS[e],
                a = n.onlyRename,
                r = n.replacement,
                s = n.subOption,
                i = n.link,
                o =
                  'SweetAlert warning: "' +
                  e +
                  '" option has been ' +
                  (a ? "renamed" : "deprecated") +
                  ".";
              r &&
                (o +=
                  " Please use" +
                  (s ? ' "' + s + '" in ' : " ") +
                  '"' +
                  r +
                  '" instead.');
              var d = "https://sweetalert.js.org";
              (o += i
                ? " More details: " + d + i
                : " More details: " + d + "/guides/#upgrading-from-1x"),
                console.warn(o);
            }),
            (t.DEPRECATED_OPTS = {
              type: { replacement: "icon", link: "/docs/#icon" },
              imageUrl: { replacement: "icon", link: "/docs/#icon" },
              customClass: {
                replacement: "className",
                onlyRename: !0,
                link: "/docs/#classname",
              },
              imageSize: {},
              showCancelButton: {
                replacement: "buttons",
                link: "/docs/#buttons",
              },
              showConfirmButton: {
                replacement: "button",
                link: "/docs/#button",
              },
              confirmButtonText: {
                replacement: "button",
                link: "/docs/#button",
              },
              confirmButtonColor: {},
              cancelButtonText: {
                replacement: "buttons",
                link: "/docs/#buttons",
              },
              closeOnConfirm: {
                replacement: "button",
                subOption: "closeModal",
                link: "/docs/#button",
              },
              closeOnCancel: {
                replacement: "buttons",
                subOption: "closeModal",
                link: "/docs/#buttons",
              },
              showLoaderOnConfirm: { replacement: "buttons" },
              animation: {},
              inputType: { replacement: "content", link: "/docs/#content" },
              inputValue: { replacement: "content", link: "/docs/#content" },
              inputPlaceholder: {
                replacement: "content",
                link: "/docs/#content",
              },
              html: { replacement: "content", link: "/docs/#content" },
              allowEscapeKey: {
                replacement: "closeOnEsc",
                onlyRename: !0,
                link: "/docs/#closeonesc",
              },
              allowClickOutside: {
                replacement: "closeOnClickOutside",
                onlyRename: !0,
                link: "/docs/#closeonclickoutside",
              },
            });
        },
      ]);
    }.call(this, n(139).setImmediate, n(139).clearImmediate));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    e.exports = n(144);
  },
  function (e, t, n) {
    e.exports = (function () {
      "use strict";
      var e =
          Object.freeze ||
          function (e) {
            return e;
          },
        t = e([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        n = e([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "audio",
          "canvas",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "video",
          "view",
          "vkern",
        ]),
        a = e([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        r = e([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
        ]),
        s = e(["#text"]),
        i =
          Object.freeze ||
          function (e) {
            return e;
          },
        o = i([
          "accept",
          "action",
          "align",
          "alt",
          "autocomplete",
          "background",
          "bgcolor",
          "border",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "coords",
          "crossorigin",
          "datetime",
          "default",
          "dir",
          "disabled",
          "download",
          "enctype",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "integrity",
          "ismap",
          "label",
          "lang",
          "list",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "multiple",
          "name",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "xmlns",
        ]),
        d = i([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "tabindex",
          "targetx",
          "targety",
          "transform",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        u = i([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        l = i([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        _ = Object.hasOwnProperty,
        c = Object.setPrototypeOf,
        m = ("undefined" != typeof Reflect && Reflect).apply;
      function h(e, t) {
        c && c(e, null);
        for (var n = t.length; n--; ) {
          var a = t[n];
          if ("string" == typeof a) {
            var r = a.toLowerCase();
            r !== a && (Object.isFrozen(t) || (t[n] = r), (a = r));
          }
          e[a] = !0;
        }
        return e;
      }
      function f(e) {
        var t = {},
          n = void 0;
        for (n in e) m(_, e, [n]) && (t[n] = e[n]);
        return t;
      }
      m ||
        (m = function (e, t, n) {
          return e.apply(t, n);
        });
      var p =
          Object.seal ||
          function (e) {
            return e;
          },
        M = p(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        y = p(/<%[\s\S]*|[\s\S]*%>/gm),
        L = p(/^data-[\-\w.\u00B7-\uFFFF]/),
        Y = p(/^aria-[\-\w]+$/),
        g = p(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        ),
        v = p(/^(?:\w+script|data):/i),
        k = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
        w =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
      function D(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      var T = ("undefined" != typeof Reflect && Reflect).apply,
        b = Array.prototype.slice,
        S = Object.freeze,
        x = function () {
          return "undefined" == typeof window ? null : window;
        };
      T ||
        (T = function (e, t, n) {
          return e.apply(t, n);
        });
      var j = function (e, t) {
        if (
          "object" !== (void 0 === e ? "undefined" : w(e)) ||
          "function" != typeof e.createPolicy
        )
          return null;
        var n = null;
        t.currentScript &&
          t.currentScript.hasAttribute("data-tt-policy-suffix") &&
          (n = t.currentScript.getAttribute("data-tt-policy-suffix"));
        var a = "dompurify" + (n ? "#" + n : "");
        try {
          return e.createPolicy(a, {
            createHTML: function (e) {
              return e;
            },
          });
        } catch (e) {
          return (
            console.warn("TrustedTypes policy " + a + " could not be created."),
            null
          );
        }
      };
      return (function e() {
        var i =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : x(),
          _ = function (t) {
            return e(t);
          };
        if (
          ((_.version = "1.0.11"),
          (_.removed = []),
          !i || !i.document || 9 !== i.document.nodeType)
        )
          return (_.isSupported = !1), _;
        var c = i.document,
          m = !1,
          p = !1,
          H = i.document,
          O = i.DocumentFragment,
          E = i.HTMLTemplateElement,
          P = i.Node,
          A = i.NodeFilter,
          W = i.NamedNodeMap,
          N = void 0 === W ? i.NamedNodeMap || i.MozNamedAttrMap : W,
          F = i.Text,
          C = i.Comment,
          R = i.DOMParser,
          z = i.TrustedTypes;
        if ("function" == typeof E) {
          var I = H.createElement("template");
          I.content && I.content.ownerDocument && (H = I.content.ownerDocument);
        }
        var J = j(z, c),
          U = J ? J.createHTML("") : "",
          G = H,
          B = G.implementation,
          V = G.createNodeIterator,
          q = G.getElementsByTagName,
          K = G.createDocumentFragment,
          $ = c.importNode,
          Z = {};
        _.isSupported =
          B && void 0 !== B.createHTMLDocument && 9 !== H.documentMode;
        var X = M,
          Q = y,
          ee = L,
          te = Y,
          ne = v,
          ae = k,
          re = g,
          se = null,
          ie = h({}, [].concat(D(t), D(n), D(a), D(r), D(s))),
          oe = null,
          de = h({}, [].concat(D(o), D(d), D(u), D(l))),
          ue = null,
          le = null,
          _e = !0,
          ce = !0,
          me = !1,
          he = !1,
          fe = !1,
          pe = !1,
          Me = !1,
          ye = !1,
          Le = !1,
          Ye = !1,
          ge = !1,
          ve = !0,
          ke = !0,
          we = !1,
          De = {},
          Te = h({}, [
            "audio",
            "head",
            "math",
            "script",
            "style",
            "template",
            "svg",
            "video",
          ]),
          be = h({}, ["audio", "video", "img", "source", "image"]),
          Se = null,
          xe = h({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "summary",
            "title",
            "value",
            "style",
            "xmlns",
          ]),
          je = null,
          He = H.createElement("form"),
          Oe = function (e) {
            (je && je === e) ||
              ((e && "object" === (void 0 === e ? "undefined" : w(e))) ||
                (e = {}),
              (se = "ALLOWED_TAGS" in e ? h({}, e.ALLOWED_TAGS) : ie),
              (oe = "ALLOWED_ATTR" in e ? h({}, e.ALLOWED_ATTR) : de),
              (Se = "ADD_URI_SAFE_ATTR" in e ? h({}, e.ADD_URI_SAFE_ATTR) : xe),
              (ue = "FORBID_TAGS" in e ? h({}, e.FORBID_TAGS) : {}),
              (le = "FORBID_ATTR" in e ? h({}, e.FORBID_ATTR) : {}),
              (De = "USE_PROFILES" in e && e.USE_PROFILES),
              (_e = !1 !== e.ALLOW_ARIA_ATTR),
              (ce = !1 !== e.ALLOW_DATA_ATTR),
              (me = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
              (he = e.SAFE_FOR_JQUERY || !1),
              (fe = e.SAFE_FOR_TEMPLATES || !1),
              (pe = e.WHOLE_DOCUMENT || !1),
              (Le = e.RETURN_DOM || !1),
              (Ye = e.RETURN_DOM_FRAGMENT || !1),
              (ge = e.RETURN_DOM_IMPORT || !1),
              (ye = e.FORCE_BODY || !1),
              (ve = !1 !== e.SANITIZE_DOM),
              (ke = !1 !== e.KEEP_CONTENT),
              (we = e.IN_PLACE || !1),
              (re = e.ALLOWED_URI_REGEXP || re),
              fe && (ce = !1),
              Ye && (Le = !0),
              De &&
                ((se = h({}, [].concat(D(s)))),
                (oe = []),
                !0 === De.html && (h(se, t), h(oe, o)),
                !0 === De.svg && (h(se, n), h(oe, d), h(oe, l)),
                !0 === De.svgFilters && (h(se, a), h(oe, d), h(oe, l)),
                !0 === De.mathMl && (h(se, r), h(oe, u), h(oe, l))),
              e.ADD_TAGS && (se === ie && (se = f(se)), h(se, e.ADD_TAGS)),
              e.ADD_ATTR && (oe === de && (oe = f(oe)), h(oe, e.ADD_ATTR)),
              e.ADD_URI_SAFE_ATTR && h(Se, e.ADD_URI_SAFE_ATTR),
              ke && (se["#text"] = !0),
              pe && h(se, ["html", "head", "body"]),
              se.table && h(se, ["tbody"]),
              S && S(e),
              (je = e));
          },
          Ee = function (e) {
            _.removed.push({ element: e });
            try {
              e.parentNode.removeChild(e);
            } catch (t) {
              e.outerHTML = U;
            }
          },
          Pe = function (e, t) {
            try {
              _.removed.push({ attribute: t.getAttributeNode(e), from: t });
            } catch (e) {
              _.removed.push({ attribute: null, from: t });
            }
            t.removeAttribute(e);
          },
          Ae = function (e) {
            var t = void 0,
              n = void 0;
            if (ye) e = "<remove></remove>" + e;
            else {
              var a = e.match(/^[\s]+/);
              (n = a && a[0]) && (e = e.slice(n.length));
            }
            if (m)
              try {
                t = new R().parseFromString(e, "text/html");
              } catch (e) {}
            if ((p && h(ue, ["title"]), !t || !t.documentElement)) {
              var r = (t = B.createHTMLDocument("")).body;
              r.parentNode.removeChild(r.parentNode.firstElementChild),
                (r.outerHTML = J ? J.createHTML(e) : e);
            }
            return (
              n &&
                t.body.insertBefore(
                  H.createTextNode(n),
                  t.body.childNodes[0] || null
                ),
              q.call(t, pe ? "html" : "body")[0]
            );
          };
        _.isSupported &&
          ((function () {
            try {
              Ae(
                '<svg><p><style><img src="</style><img src=x onerror=1//">'
              ).querySelector("svg img") && (m = !0);
            } catch (e) {}
          })(),
          (function () {
            try {
              Ae("<x/><title>&lt;/title&gt;&lt;img&gt;")
                .querySelector("title")
                .innerHTML.match(/<\/title/) && (p = !0);
            } catch (e) {}
          })());
        var We = function (e) {
            return V.call(
              e.ownerDocument || e,
              e,
              A.SHOW_ELEMENT | A.SHOW_COMMENT | A.SHOW_TEXT,
              function () {
                return A.FILTER_ACCEPT;
              },
              !1
            );
          },
          Ne = function (e) {
            return !(
              e instanceof F ||
              e instanceof C ||
              ("string" == typeof e.nodeName &&
                "string" == typeof e.textContent &&
                "function" == typeof e.removeChild &&
                e.attributes instanceof N &&
                "function" == typeof e.removeAttribute &&
                "function" == typeof e.setAttribute)
            );
          },
          Fe = function (e) {
            return "object" === (void 0 === P ? "undefined" : w(P))
              ? e instanceof P
              : e &&
                  "object" === (void 0 === e ? "undefined" : w(e)) &&
                  "number" == typeof e.nodeType &&
                  "string" == typeof e.nodeName;
          },
          Ce = function (e, t, n) {
            Z[e] &&
              Z[e].forEach(function (e) {
                e.call(_, t, n, je);
              });
          },
          Re = function (e) {
            var t = void 0;
            if ((Ce("beforeSanitizeElements", e, null), Ne(e)))
              return Ee(e), !0;
            var n = e.nodeName.toLowerCase();
            if (
              (Ce("uponSanitizeElement", e, { tagName: n, allowedTags: se }),
              !se[n] || ue[n])
            ) {
              if (ke && !Te[n] && "function" == typeof e.insertAdjacentHTML)
                try {
                  var a = e.innerHTML;
                  e.insertAdjacentHTML("AfterEnd", J ? J.createHTML(a) : a);
                } catch (e) {}
              return Ee(e), !0;
            }
            return ("noscript" === n && e.innerHTML.match(/<\/noscript/i)) ||
              ("noembed" === n && e.innerHTML.match(/<\/noembed/i))
              ? (Ee(e), !0)
              : (!he ||
                  e.firstElementChild ||
                  (e.content && e.content.firstElementChild) ||
                  !/</g.test(e.textContent) ||
                  (_.removed.push({ element: e.cloneNode() }),
                  e.innerHTML
                    ? (e.innerHTML = e.innerHTML.replace(/</g, "&lt;"))
                    : (e.innerHTML = e.textContent.replace(/</g, "&lt;"))),
                fe &&
                  3 === e.nodeType &&
                  ((t = (t = (t = e.textContent).replace(X, " ")).replace(
                    Q,
                    " "
                  )),
                  e.textContent !== t &&
                    (_.removed.push({ element: e.cloneNode() }),
                    (e.textContent = t))),
                Ce("afterSanitizeElements", e, null),
                !1);
          },
          ze = function (e, t, n) {
            if (ve && ("id" === t || "name" === t) && (n in H || n in He))
              return !1;
            if (ce && ee.test(t));
            else if (_e && te.test(t));
            else {
              if (!oe[t] || le[t]) return !1;
              if (Se[t]);
              else if (re.test(n.replace(ae, "")));
              else if (
                ("src" !== t && "xlink:href" !== t) ||
                "script" === e ||
                0 !== n.indexOf("data:") ||
                !be[e]
              )
                if (me && !ne.test(n.replace(ae, "")));
                else if (n) return !1;
            }
            return !0;
          },
          Ie = function (e) {
            var t = void 0,
              n = void 0,
              a = void 0,
              r = void 0,
              s = void 0;
            Ce("beforeSanitizeAttributes", e, null);
            var i = e.attributes;
            if (i) {
              var o = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: oe,
              };
              for (s = i.length; s--; ) {
                var d = (t = i[s]),
                  u = d.name,
                  l = d.namespaceURI;
                if (
                  ((n = t.value.trim()),
                  (a = u.toLowerCase()),
                  (o.attrName = a),
                  (o.attrValue = n),
                  (o.keepAttr = !0),
                  Ce("uponSanitizeAttribute", e, o),
                  (n = o.attrValue),
                  "name" === a && "IMG" === e.nodeName && i.id)
                )
                  (r = i.id),
                    (i = T(b, i, [])),
                    Pe("id", e),
                    Pe(u, e),
                    i.indexOf(r) > s && e.setAttribute("id", r.value);
                else {
                  if (
                    "INPUT" === e.nodeName &&
                    "type" === a &&
                    "file" === n &&
                    o.keepAttr &&
                    (oe[a] || !le[a])
                  )
                    continue;
                  "id" === u && e.setAttribute(u, ""), Pe(u, e);
                }
                if (o.keepAttr) {
                  fe && (n = (n = n.replace(X, " ")).replace(Q, " "));
                  var c = e.nodeName.toLowerCase();
                  if (ze(c, a, n))
                    try {
                      l ? e.setAttributeNS(l, u, n) : e.setAttribute(u, n),
                        _.removed.pop();
                    } catch (e) {}
                }
              }
              Ce("afterSanitizeAttributes", e, null);
            }
          },
          Je = function e(t) {
            var n = void 0,
              a = We(t);
            for (Ce("beforeSanitizeShadowDOM", t, null); (n = a.nextNode()); )
              Ce("uponSanitizeShadowNode", n, null),
                Re(n) || (n.content instanceof O && e(n.content), Ie(n));
            Ce("afterSanitizeShadowDOM", t, null);
          };
        return (
          (_.sanitize = function (e, t) {
            var n = void 0,
              a = void 0,
              r = void 0,
              s = void 0,
              o = void 0;
            if ((e || (e = "\x3c!--\x3e"), "string" != typeof e && !Fe(e))) {
              if ("function" != typeof e.toString)
                throw new TypeError("toString is not a function");
              if ("string" != typeof (e = e.toString()))
                throw new TypeError("dirty is not a string, aborting");
            }
            if (!_.isSupported) {
              if (
                "object" === w(i.toStaticHTML) ||
                "function" == typeof i.toStaticHTML
              ) {
                if ("string" == typeof e) return i.toStaticHTML(e);
                if (Fe(e)) return i.toStaticHTML(e.outerHTML);
              }
              return e;
            }
            if ((Me || Oe(t), (_.removed = []), we));
            else if (e instanceof P)
              (1 ===
                (a = (n = Ae("\x3c!--\x3e")).ownerDocument.importNode(e, !0))
                  .nodeType &&
                "BODY" === a.nodeName) ||
              "HTML" === a.nodeName
                ? (n = a)
                : n.appendChild(a);
            else {
              if (!Le && !fe && !pe && -1 === e.indexOf("<"))
                return J ? J.createHTML(e) : e;
              if (!(n = Ae(e))) return Le ? null : U;
            }
            n && ye && Ee(n.firstChild);
            for (var d = We(we ? e : n); (r = d.nextNode()); )
              (3 === r.nodeType && r === s) ||
                Re(r) ||
                (r.content instanceof O && Je(r.content), Ie(r), (s = r));
            if (((s = null), we)) return e;
            if (Le) {
              if (Ye)
                for (o = K.call(n.ownerDocument); n.firstChild; )
                  o.appendChild(n.firstChild);
              else o = n;
              return ge && (o = $.call(c, o, !0)), o;
            }
            var u = pe ? n.outerHTML : n.innerHTML;
            return (
              fe && (u = (u = u.replace(X, " ")).replace(Q, " ")),
              J ? J.createHTML(u) : u
            );
          }),
          (_.setConfig = function (e) {
            Oe(e), (Me = !0);
          }),
          (_.clearConfig = function () {
            (je = null), (Me = !1);
          }),
          (_.isValidAttribute = function (e, t, n) {
            je || Oe({});
            var a = e.toLowerCase(),
              r = t.toLowerCase();
            return ze(a, r, n);
          }),
          (_.addHook = function (e, t) {
            "function" == typeof t && ((Z[e] = Z[e] || []), Z[e].push(t));
          }),
          (_.removeHook = function (e) {
            Z[e] && Z[e].pop();
          }),
          (_.removeHooks = function (e) {
            Z[e] && (Z[e] = []);
          }),
          (_.removeAllHooks = function () {
            Z = {};
          }),
          _
        );
      })();
    })();
  },
  function (e, t) {
    var n,
      a,
      r = (e.exports = {});
    function s() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === s || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : s;
      } catch (e) {
        n = s;
      }
      try {
        a = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        a = i;
      }
    })();
    var d,
      u = [],
      l = !1,
      _ = -1;
    function c() {
      l &&
        d &&
        ((l = !1), d.length ? (u = d.concat(u)) : (_ = -1), u.length && m());
    }
    function m() {
      if (!l) {
        var e = o(c);
        l = !0;
        for (var t = u.length; t; ) {
          for (d = u, u = []; ++_ < t; ) d && d[_].run();
          (_ = -1), (t = u.length);
        }
        (d = null),
          (l = !1),
          (function (e) {
            if (a === clearTimeout) return clearTimeout(e);
            if ((a === i || !a) && clearTimeout)
              return (a = clearTimeout), clearTimeout(e);
            try {
              a(e);
            } catch (t) {
              try {
                return a.call(null, e);
              } catch (t) {
                return a.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function f() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      u.push(new h(e, t)), 1 !== u.length || l || o(m);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = f),
      (r.addListener = f),
      (r.once = f),
      (r.off = f),
      (r.removeListener = f),
      (r.removeAllListeners = f),
      (r.emit = f),
      (r.prependListener = f),
      (r.prependOnceListener = f),
      (r.listeners = function (e) {
        return [];
      }),
      (r.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("af", {
        months:
          "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays:
          "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
            "_"
          ),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
          return /^nm$/i.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (n ? "vm" : "VM") : n ? "nm" : "NM";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Vandag om] LT",
          nextDay: "[Môre om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[Gister om] LT",
          lastWeek: "[Laas] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "oor %s",
          past: "%s gelede",
          s: "'n paar sekondes",
          ss: "%d sekondes",
          m: "'n minuut",
          mm: "%d minute",
          h: "'n uur",
          hh: "%d ure",
          d: "'n dag",
          dd: "%d dae",
          M: "'n maand",
          MM: "%d maande",
          y: "'n jaar",
          yy: "%d jaar",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠",
        },
        n = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0",
        },
        a = function (e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : 2 === e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5;
        },
        r = {
          s: [
            "أقل من ثانية",
            "ثانية واحدة",
            ["ثانيتان", "ثانيتين"],
            "%d ثوان",
            "%d ثانية",
            "%d ثانية",
          ],
          m: [
            "أقل من دقيقة",
            "دقيقة واحدة",
            ["دقيقتان", "دقيقتين"],
            "%d دقائق",
            "%d دقيقة",
            "%d دقيقة",
          ],
          h: [
            "أقل من ساعة",
            "ساعة واحدة",
            ["ساعتان", "ساعتين"],
            "%d ساعات",
            "%d ساعة",
            "%d ساعة",
          ],
          d: [
            "أقل من يوم",
            "يوم واحد",
            ["يومان", "يومين"],
            "%d أيام",
            "%d يومًا",
            "%d يوم",
          ],
          M: [
            "أقل من شهر",
            "شهر واحد",
            ["شهران", "شهرين"],
            "%d أشهر",
            "%d شهرا",
            "%d شهر",
          ],
          y: [
            "أقل من عام",
            "عام واحد",
            ["عامان", "عامين"],
            "%d أعوام",
            "%d عامًا",
            "%d عام",
          ],
        },
        s = function (e) {
          return function (t, n, s, i) {
            var o = a(t),
              d = r[e][a(t)];
            return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
          };
        },
        i = [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ];
      e.defineLocale("ar", {
        months: i,
        monthsShort: i,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م";
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: s("s"),
          ss: s("s"),
          m: s("m"),
          mm: s("m"),
          h: s("h"),
          hh: s("h"),
          d: s("d"),
          dd: s("d"),
          M: s("M"),
          MM: s("M"),
          y: s("y"),
          yy: s("y"),
        },
        preparse: function (e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        week: { dow: 6, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = function (e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : 2 === e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5;
        },
        n = {
          s: [
            "أقل من ثانية",
            "ثانية واحدة",
            ["ثانيتان", "ثانيتين"],
            "%d ثوان",
            "%d ثانية",
            "%d ثانية",
          ],
          m: [
            "أقل من دقيقة",
            "دقيقة واحدة",
            ["دقيقتان", "دقيقتين"],
            "%d دقائق",
            "%d دقيقة",
            "%d دقيقة",
          ],
          h: [
            "أقل من ساعة",
            "ساعة واحدة",
            ["ساعتان", "ساعتين"],
            "%d ساعات",
            "%d ساعة",
            "%d ساعة",
          ],
          d: [
            "أقل من يوم",
            "يوم واحد",
            ["يومان", "يومين"],
            "%d أيام",
            "%d يومًا",
            "%d يوم",
          ],
          M: [
            "أقل من شهر",
            "شهر واحد",
            ["شهران", "شهرين"],
            "%d أشهر",
            "%d شهرا",
            "%d شهر",
          ],
          y: [
            "أقل من عام",
            "عام واحد",
            ["عامان", "عامين"],
            "%d أعوام",
            "%d عامًا",
            "%d عام",
          ],
        },
        a = function (e) {
          return function (a, r, s, i) {
            var o = t(a),
              d = n[e][t(a)];
            return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, a);
          };
        },
        r = [
          "جانفي",
          "فيفري",
          "مارس",
          "أفريل",
          "ماي",
          "جوان",
          "جويلية",
          "أوت",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ];
      e.defineLocale("ar-dz", {
        months: r,
        monthsShort: r,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م";
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: a("s"),
          ss: a("s"),
          m: a("m"),
          mm: a("m"),
          h: a("h"),
          hh: a("h"),
          d: a("d"),
          dd: a("d"),
          M: a("M"),
          MM: a("M"),
          y: a("y"),
          yy: a("y"),
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 0, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ar-kw", {
        months:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        monthsShort:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        week: { dow: 0, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          0: "0",
        },
        n = function (e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : 2 === e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5;
        },
        a = {
          s: [
            "أقل من ثانية",
            "ثانية واحدة",
            ["ثانيتان", "ثانيتين"],
            "%d ثوان",
            "%d ثانية",
            "%d ثانية",
          ],
          m: [
            "أقل من دقيقة",
            "دقيقة واحدة",
            ["دقيقتان", "دقيقتين"],
            "%d دقائق",
            "%d دقيقة",
            "%d دقيقة",
          ],
          h: [
            "أقل من ساعة",
            "ساعة واحدة",
            ["ساعتان", "ساعتين"],
            "%d ساعات",
            "%d ساعة",
            "%d ساعة",
          ],
          d: [
            "أقل من يوم",
            "يوم واحد",
            ["يومان", "يومين"],
            "%d أيام",
            "%d يومًا",
            "%d يوم",
          ],
          M: [
            "أقل من شهر",
            "شهر واحد",
            ["شهران", "شهرين"],
            "%d أشهر",
            "%d شهرا",
            "%d شهر",
          ],
          y: [
            "أقل من عام",
            "عام واحد",
            ["عامان", "عامين"],
            "%d أعوام",
            "%d عامًا",
            "%d عام",
          ],
        },
        r = function (e) {
          return function (t, r, s, i) {
            var o = n(t),
              d = a[e][n(t)];
            return 2 === o && (d = d[r ? 0 : 1]), d.replace(/%d/i, t);
          };
        },
        s = [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ];
      e.defineLocale("ar-ly", {
        months: s,
        monthsShort: s,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م";
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: r("s"),
          ss: r("s"),
          m: r("m"),
          mm: r("m"),
          h: r("h"),
          hh: r("h"),
          d: r("d"),
          dd: r("d"),
          M: r("M"),
          MM: r("M"),
          y: r("y"),
          yy: r("y"),
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        week: { dow: 6, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ar-ma", {
        months:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        monthsShort:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        week: { dow: 6, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠",
        },
        n = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0",
        };
      e.defineLocale("ar-sa", {
        months:
          "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        monthsShort:
          "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م";
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        preparse: function (e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ar-tn", {
        months:
          "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        monthsShort:
          "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı",
      };
      e.defineLocale("az", {
        months:
          "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
            "_"
          ),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
          "_"
        ),
        weekdays:
          "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
            "_"
          ),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[sabah saat] LT",
          nextWeek: "[gələn həftə] dddd [saat] LT",
          lastDay: "[dünən] LT",
          lastWeek: "[keçən həftə] dddd [saat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s əvvəl",
          s: "birneçə saniyə",
          ss: "%d saniyə",
          m: "bir dəqiqə",
          mm: "%d dəqiqə",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir il",
          yy: "%d il",
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
          return /^(gündüz|axşam)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "gecə"
            : e < 12
            ? "səhər"
            : e < 17
            ? "gündüz"
            : "axşam";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
          if (0 === e) return e + "-ıncı";
          var n = e % 10;
          return e + (t[n] || t[(e % 100) - n] || t[e >= 100 ? 100 : null]);
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n) {
        var a, r;
        return "m" === n
          ? t
            ? "хвіліна"
            : "хвіліну"
          : "h" === n
          ? t
            ? "гадзіна"
            : "гадзіну"
          : e +
            " " +
            ((a = +e),
            (r = {
              ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
              mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
              hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
              dd: "дзень_дні_дзён",
              MM: "месяц_месяцы_месяцаў",
              yy: "год_гады_гадоў",
            }[n].split("_")),
            a % 10 == 1 && a % 100 != 11
              ? r[0]
              : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
              ? r[1]
              : r[2]);
      }
      e.defineLocale("be", {
        months: {
          format:
            "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
              "_"
            ),
          standalone:
            "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
              "_"
            ),
        },
        monthsShort:
          "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
          format:
            "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
              "_"
            ),
          standalone:
            "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
              "_"
            ),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., HH:mm",
          LLLL: "dddd, D MMMM YYYY г., HH:mm",
        },
        calendar: {
          sameDay: "[Сёння ў] LT",
          nextDay: "[Заўтра ў] LT",
          lastDay: "[Учора ў] LT",
          nextWeek: function () {
            return "[У] dddd [ў] LT";
          },
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return "[У мінулую] dddd [ў] LT";
              case 1:
              case 2:
              case 4:
                return "[У мінулы] dddd [ў] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "праз %s",
          past: "%s таму",
          s: "некалькі секунд",
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "дзень",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t,
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
          return /^(дня|вечара)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return (e % 10 != 2 && e % 10 != 3) ||
                e % 100 == 12 ||
                e % 100 == 13
                ? e + "-ы"
                : e + "-і";
            case "D":
              return e + "-га";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("bg", {
        months:
          "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
            "_"
          ),
        monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split(
          "_"
        ),
        weekdays:
          "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Днес в] LT",
          nextDay: "[Утре в] LT",
          nextWeek: "dddd [в] LT",
          lastDay: "[Вчера в] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[Миналата] dddd [в] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[Миналия] dddd [в] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "след %s",
          past: "преди %s",
          s: "няколко секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дена",
          M: "месец",
          MM: "%d месеца",
          y: "година",
          yy: "%d години",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            n = e % 100;
          return 0 === e
            ? e + "-ев"
            : 0 === n
            ? e + "-ен"
            : n > 10 && n < 20
            ? e + "-ти"
            : 1 === t
            ? e + "-ви"
            : 2 === t
            ? e + "-ри"
            : 7 === t || 8 === t
            ? e + "-ми"
            : e + "-ти";
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("bm", {
        months:
          "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
            "_"
          ),
        monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
          "_"
        ),
        weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
        weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
        weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "MMMM [tile] D [san] YYYY",
          LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
          LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
        },
        calendar: {
          sameDay: "[Bi lɛrɛ] LT",
          nextDay: "[Sini lɛrɛ] LT",
          nextWeek: "dddd [don lɛrɛ] LT",
          lastDay: "[Kunu lɛrɛ] LT",
          lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s kɔnɔ",
          past: "a bɛ %s bɔ",
          s: "sanga dama dama",
          ss: "sekondi %d",
          m: "miniti kelen",
          mm: "miniti %d",
          h: "lɛrɛ kelen",
          hh: "lɛrɛ %d",
          d: "tile kelen",
          dd: "tile %d",
          M: "kalo kelen",
          MM: "kalo %d",
          y: "san kelen",
          yy: "san %d",
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "১",
          2: "২",
          3: "৩",
          4: "৪",
          5: "৫",
          6: "৬",
          7: "৭",
          8: "৮",
          9: "৯",
          0: "০",
        },
        n = {
          "১": "1",
          "২": "2",
          "৩": "3",
          "৪": "4",
          "৫": "5",
          "৬": "6",
          "৭": "7",
          "৮": "8",
          "৯": "9",
          "০": "0",
        };
      e.defineLocale("bn", {
        months:
          "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
            "_"
          ),
        monthsShort:
          "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
            "_"
          ),
        weekdays:
          "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
            "_"
          ),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
        longDateFormat: {
          LT: "A h:mm সময়",
          LTS: "A h:mm:ss সময়",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm সময়",
          LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
        },
        calendar: {
          sameDay: "[আজ] LT",
          nextDay: "[আগামীকাল] LT",
          nextWeek: "dddd, LT",
          lastDay: "[গতকাল] LT",
          lastWeek: "[গত] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s পরে",
          past: "%s আগে",
          s: "কয়েক সেকেন্ড",
          ss: "%d সেকেন্ড",
          m: "এক মিনিট",
          mm: "%d মিনিট",
          h: "এক ঘন্টা",
          hh: "%d ঘন্টা",
          d: "এক দিন",
          dd: "%d দিন",
          M: "এক মাস",
          MM: "%d মাস",
          y: "এক বছর",
          yy: "%d বছর",
        },
        preparse: function (e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            ("রাত" === t && e >= 4) || ("দুপুর" === t && e < 5) || "বিকাল" === t
              ? e + 12
              : e
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "রাত"
            : e < 10
            ? "সকাল"
            : e < 17
            ? "দুপুর"
            : e < 20
            ? "বিকাল"
            : "রাত";
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "༡",
          2: "༢",
          3: "༣",
          4: "༤",
          5: "༥",
          6: "༦",
          7: "༧",
          8: "༨",
          9: "༩",
          0: "༠",
        },
        n = {
          "༡": "1",
          "༢": "2",
          "༣": "3",
          "༤": "4",
          "༥": "5",
          "༦": "6",
          "༧": "7",
          "༨": "8",
          "༩": "9",
          "༠": "0",
        };
      e.defineLocale("bo", {
        months:
          "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
            "_"
          ),
        monthsShort:
          "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split(
            "_"
          ),
        monthsShortRegex: /^(ཟླ་\d{1,2})/,
        monthsParseExact: !0,
        weekdays:
          "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
            "_"
          ),
        weekdaysShort:
          "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
          sameDay: "[དི་རིང] LT",
          nextDay: "[སང་ཉིན] LT",
          nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
          lastDay: "[ཁ་སང] LT",
          lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ལ་",
          past: "%s སྔན་ལ",
          s: "ལམ་སང",
          ss: "%d སྐར་ཆ།",
          m: "སྐར་མ་གཅིག",
          mm: "%d སྐར་མ",
          h: "ཆུ་ཚོད་གཅིག",
          hh: "%d ཆུ་ཚོད",
          d: "ཉིན་གཅིག",
          dd: "%d ཉིན་",
          M: "ཟླ་བ་གཅིག",
          MM: "%d ཟླ་བ",
          y: "ལོ་གཅིག",
          yy: "%d ལོ",
        },
        preparse: function (e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            ("མཚན་མོ" === t && e >= 4) ||
            ("ཉིན་གུང" === t && e < 5) ||
            "དགོང་དག" === t
              ? e + 12
              : e
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "མཚན་མོ"
            : e < 10
            ? "ཞོགས་ཀས"
            : e < 17
            ? "ཉིན་གུང"
            : e < 20
            ? "དགོང་དག"
            : "མཚན་མོ";
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n) {
        return (
          e +
          " " +
          (function (e, t) {
            return 2 === t
              ? (function (e) {
                  var t = { m: "v", b: "v", d: "z" };
                  return void 0 === t[e.charAt(0)]
                    ? e
                    : t[e.charAt(0)] + e.substring(1);
                })(e)
              : e;
          })({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e)
        );
      }
      var n = [
          /^gen/i,
          /^c[ʼ\']hwe/i,
          /^meu/i,
          /^ebr/i,
          /^mae/i,
          /^(mez|eve)/i,
          /^gou/i,
          /^eos/i,
          /^gwe/i,
          /^her/i,
          /^du/i,
          /^ker/i,
        ],
        a =
          /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
        r = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
      e.defineLocale("br", {
        months:
          "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
            "_"
          ),
        monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
          "_"
        ),
        weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParse: r,
        fullWeekdaysParse: [
          /^sul/i,
          /^lun/i,
          /^meurzh/i,
          /^merc[ʼ\']her/i,
          /^yaou/i,
          /^gwener/i,
          /^sadorn/i,
        ],
        shortWeekdaysParse: [
          /^Sul/i,
          /^Lun/i,
          /^Meu/i,
          /^Mer/i,
          /^Yao/i,
          /^Gwe/i,
          /^Sad/i,
        ],
        minWeekdaysParse: r,
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex:
          /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
        monthsShortStrictRegex:
          /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [a viz] MMMM YYYY",
          LLL: "D [a viz] MMMM YYYY HH:mm",
          LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hiziv da] LT",
          nextDay: "[Warcʼhoazh da] LT",
          nextWeek: "dddd [da] LT",
          lastDay: "[Decʼh da] LT",
          lastWeek: "dddd [paset da] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "a-benn %s",
          past: "%s ʼzo",
          s: "un nebeud segondennoù",
          ss: "%d eilenn",
          m: "ur vunutenn",
          mm: t,
          h: "un eur",
          hh: "%d eur",
          d: "un devezh",
          dd: t,
          M: "ur miz",
          MM: t,
          y: "ur bloaz",
          yy: function (e) {
            switch (
              (function e(t) {
                return t > 9 ? e(t % 10) : t;
              })(e)
            ) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return e + " bloaz";
              default:
                return e + " vloaz";
            }
          },
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
          return e + (1 === e ? "añ" : "vet");
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /a.m.|g.m./,
        isPM: function (e) {
          return "g.m." === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "a.m." : "g.m.";
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n) {
        var a = e + " ";
        switch (n) {
          case "ss":
            return (a +=
              1 === e
                ? "sekunda"
                : 2 === e || 3 === e || 4 === e
                ? "sekunde"
                : "sekundi");
          case "m":
            return t ? "jedna minuta" : "jedne minute";
          case "mm":
            return (a +=
              1 === e
                ? "minuta"
                : 2 === e || 3 === e || 4 === e
                ? "minute"
                : "minuta");
          case "h":
            return t ? "jedan sat" : "jednog sata";
          case "hh":
            return (a +=
              1 === e
                ? "sat"
                : 2 === e || 3 === e || 4 === e
                ? "sata"
                : "sati");
          case "dd":
            return (a += 1 === e ? "dan" : "dana");
          case "MM":
            return (a +=
              1 === e
                ? "mjesec"
                : 2 === e || 3 === e || 4 === e
                ? "mjeseca"
                : "mjeseci");
          case "yy":
            return (a +=
              1 === e
                ? "godina"
                : 2 === e || 3 === e || 4 === e
                ? "godine"
                : "godina");
        }
      }
      e.defineLocale("bs", {
        months:
          "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ca", {
        months: {
          standalone:
            "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
              "_"
            ),
          format:
            "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
              "_"
            ),
          isFormat: /D[oD]?(\s)+MMMM/,
        },
        monthsShort:
          "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
            "_"
          ),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a les] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
          llll: "ddd D MMM YYYY, H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          nextDay: function () {
            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          lastDay: function () {
            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [passat a " +
              (1 !== this.hours() ? "les" : "la") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "uns segons",
          ss: "%d segons",
          m: "un minut",
          mm: "%d minuts",
          h: "una hora",
          hh: "%d hores",
          d: "un dia",
          dd: "%d dies",
          M: "un mes",
          MM: "%d mesos",
          y: "un any",
          yy: "%d anys",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n =
            1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
          return ("w" !== t && "W" !== t) || (n = "a"), e + n;
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
            "_"
          ),
        n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
        a = [
          /^led/i,
          /^úno/i,
          /^bře/i,
          /^dub/i,
          /^kvě/i,
          /^(čvn|červen$|června)/i,
          /^(čvc|červenec|července)/i,
          /^srp/i,
          /^zář/i,
          /^říj/i,
          /^lis/i,
          /^pro/i,
        ],
        r =
          /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
      function s(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
      }
      function i(e, t, n, a) {
        var r = e + " ";
        switch (n) {
          case "s":
            return t || a ? "pár sekund" : "pár sekundami";
          case "ss":
            return t || a ? r + (s(e) ? "sekundy" : "sekund") : r + "sekundami";
          case "m":
            return t ? "minuta" : a ? "minutu" : "minutou";
          case "mm":
            return t || a ? r + (s(e) ? "minuty" : "minut") : r + "minutami";
          case "h":
            return t ? "hodina" : a ? "hodinu" : "hodinou";
          case "hh":
            return t || a ? r + (s(e) ? "hodiny" : "hodin") : r + "hodinami";
          case "d":
            return t || a ? "den" : "dnem";
          case "dd":
            return t || a ? r + (s(e) ? "dny" : "dní") : r + "dny";
          case "M":
            return t || a ? "měsíc" : "měsícem";
          case "MM":
            return t || a ? r + (s(e) ? "měsíce" : "měsíců") : r + "měsíci";
          case "y":
            return t || a ? "rok" : "rokem";
          case "yy":
            return t || a ? r + (s(e) ? "roky" : "let") : r + "lety";
        }
      }
      e.defineLocale("cs", {
        months: t,
        monthsShort: n,
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex:
          /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
          l: "D. M. YYYY",
        },
        calendar: {
          sameDay: "[dnes v] LT",
          nextDay: "[zítra v] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v neděli v] LT";
              case 1:
              case 2:
                return "[v] dddd [v] LT";
              case 3:
                return "[ve středu v] LT";
              case 4:
                return "[ve čtvrtek v] LT";
              case 5:
                return "[v pátek v] LT";
              case 6:
                return "[v sobotu v] LT";
            }
          },
          lastDay: "[včera v] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulou neděli v] LT";
              case 1:
              case 2:
                return "[minulé] dddd [v] LT";
              case 3:
                return "[minulou středu v] LT";
              case 4:
              case 5:
                return "[minulý] dddd [v] LT";
              case 6:
                return "[minulou sobotu v] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "před %s",
          s: i,
          ss: i,
          m: i,
          mm: i,
          h: i,
          hh: i,
          d: i,
          dd: i,
          M: i,
          MM: i,
          y: i,
          yy: i,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("cv", {
        months:
          "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
            "_"
          ),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split(
          "_"
        ),
        weekdays:
          "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
            "_"
          ),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
          LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
        },
        calendar: {
          sameDay: "[Паян] LT [сехетре]",
          nextDay: "[Ыран] LT [сехетре]",
          lastDay: "[Ӗнер] LT [сехетре]",
          nextWeek: "[Ҫитес] dddd LT [сехетре]",
          lastWeek: "[Иртнӗ] dddd LT [сехетре]",
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return (
              e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
            );
          },
          past: "%s каялла",
          s: "пӗр-ик ҫеккунт",
          ss: "%d ҫеккунт",
          m: "пӗр минут",
          mm: "%d минут",
          h: "пӗр сехет",
          hh: "%d сехет",
          d: "пӗр кун",
          dd: "%d кун",
          M: "пӗр уйӑх",
          MM: "%d уйӑх",
          y: "пӗр ҫул",
          yy: "%d ҫул",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("cy", {
        months:
          "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
            "_"
          ),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split(
          "_"
        ),
        weekdays:
          "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
            "_"
          ),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Heddiw am] LT",
          nextDay: "[Yfory am] LT",
          nextWeek: "dddd [am] LT",
          lastDay: "[Ddoe am] LT",
          lastWeek: "dddd [diwethaf am] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "mewn %s",
          past: "%s yn ôl",
          s: "ychydig eiliadau",
          ss: "%d eiliad",
          m: "munud",
          mm: "%d munud",
          h: "awr",
          hh: "%d awr",
          d: "diwrnod",
          dd: "%d diwrnod",
          M: "mis",
          MM: "%d mis",
          y: "blwyddyn",
          yy: "%d flynedd",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
          var t = "";
          return (
            e > 20
              ? (t =
                  40 === e || 50 === e || 60 === e || 80 === e || 100 === e
                    ? "fed"
                    : "ain")
              : e > 0 &&
                (t = [
                  "",
                  "af",
                  "il",
                  "ydd",
                  "ydd",
                  "ed",
                  "ed",
                  "ed",
                  "fed",
                  "fed",
                  "fed",
                  "eg",
                  "fed",
                  "eg",
                  "eg",
                  "fed",
                  "eg",
                  "eg",
                  "fed",
                  "eg",
                  "fed",
                ][e]),
            e + t
          );
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("da", {
        months:
          "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
          "_"
        ),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "på dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[i] dddd[s kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "få sekunder",
          ss: "%d sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en måned",
          MM: "%d måneder",
          y: "et år",
          yy: "%d år",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          w: ["eine Woche", "einer Woche"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? r[n][0] : r[n][1];
      }
      e.defineLocale("de", {
        months:
          "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]",
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          w: t,
          ww: "%d Wochen",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          w: ["eine Woche", "einer Woche"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? r[n][0] : r[n][1];
      }
      e.defineLocale("de-at", {
        months:
          "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]",
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          w: t,
          ww: "%d Wochen",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          w: ["eine Woche", "einer Woche"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? r[n][0] : r[n][1];
      }
      e.defineLocale("de-ch", {
        months:
          "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]",
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          w: t,
          ww: "%d Wochen",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = [
          "ޖެނުއަރީ",
          "ފެބްރުއަރީ",
          "މާރިޗު",
          "އޭޕްރީލު",
          "މޭ",
          "ޖޫން",
          "ޖުލައި",
          "އޯގަސްޓު",
          "ސެޕްޓެމްބަރު",
          "އޮކްޓޯބަރު",
          "ނޮވެމްބަރު",
          "ޑިސެމްބަރު",
        ],
        n = [
          "އާދިއްތަ",
          "ހޯމަ",
          "އަންގާރަ",
          "ބުދަ",
          "ބުރާސްފަތި",
          "ހުކުރު",
          "ހޮނިހިރު",
        ];
      e.defineLocale("dv", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/M/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /މކ|މފ/,
        isPM: function (e) {
          return "މފ" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "މކ" : "މފ";
        },
        calendar: {
          sameDay: "[މިއަދު] LT",
          nextDay: "[މާދަމާ] LT",
          nextWeek: "dddd LT",
          lastDay: "[އިއްޔެ] LT",
          lastWeek: "[ފާއިތުވި] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ތެރޭގައި %s",
          past: "ކުރިން %s",
          s: "ސިކުންތުކޮޅެއް",
          ss: "d% ސިކުންތު",
          m: "މިނިޓެއް",
          mm: "މިނިޓު %d",
          h: "ގަޑިއިރެއް",
          hh: "ގަޑިއިރު %d",
          d: "ދުވަހެއް",
          dd: "ދުވަސް %d",
          M: "މަހެއް",
          MM: "މަސް %d",
          y: "އަހަރެއް",
          yy: "އަހަރު %d",
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 7, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("el", {
        monthsNominativeEl:
          "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
            "_"
          ),
        monthsGenitiveEl:
          "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
            "_"
          ),
        months: function (e, t) {
          return e
            ? "string" == typeof t &&
              /D/.test(t.substring(0, t.indexOf("MMMM")))
              ? this._monthsGenitiveEl[e.month()]
              : this._monthsNominativeEl[e.month()]
            : this._monthsNominativeEl;
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split(
          "_"
        ),
        weekdays:
          "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "μμ" : "ΜΜ") : n ? "πμ" : "ΠΜ";
        },
        isPM: function (e) {
          return "μ" === (e + "").toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendarEl: {
          sameDay: "[Σήμερα {}] LT",
          nextDay: "[Αύριο {}] LT",
          nextWeek: "dddd [{}] LT",
          lastDay: "[Χθες {}] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 6:
                return "[το προηγούμενο] dddd [{}] LT";
              default:
                return "[την προηγούμενη] dddd [{}] LT";
            }
          },
          sameElse: "L",
        },
        calendar: function (e, t) {
          var n,
            a = this._calendarEl[e],
            r = t && t.hours();
          return (
            (n = a),
            (("undefined" != typeof Function && n instanceof Function) ||
              "[object Function]" === Object.prototype.toString.call(n)) &&
              (a = a.apply(t)),
            a.replace("{}", r % 12 == 1 ? "στη" : "στις")
          );
        },
        relativeTime: {
          future: "σε %s",
          past: "%s πριν",
          s: "λίγα δευτερόλεπτα",
          ss: "%d δευτερόλεπτα",
          m: "ένα λεπτό",
          mm: "%d λεπτά",
          h: "μία ώρα",
          hh: "%d ώρες",
          d: "μία μέρα",
          dd: "%d μέρες",
          M: "ένας μήνας",
          MM: "%d μήνες",
          y: "ένας χρόνος",
          yy: "%d χρόνια",
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("en-au", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 0, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("en-ca", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY-MM-DD",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("en-gb", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("en-ie", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("en-il", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("en-in", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("en-nz", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("en-sg", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("eo", {
        months:
          "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
            "_"
          ),
        monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split(
          "_"
        ),
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split(
          "_"
        ),
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "[la] D[-an de] MMMM, YYYY",
          LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
          LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
          llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
          return "p" === e.charAt(0).toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "p.t.m." : "P.T.M.") : n ? "a.t.m." : "A.T.M.";
        },
        calendar: {
          sameDay: "[Hodiaŭ je] LT",
          nextDay: "[Morgaŭ je] LT",
          nextWeek: "dddd[n je] LT",
          lastDay: "[Hieraŭ je] LT",
          lastWeek: "[pasintan] dddd[n je] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "post %s",
          past: "antaŭ %s",
          s: "kelkaj sekundoj",
          ss: "%d sekundoj",
          m: "unu minuto",
          mm: "%d minutoj",
          h: "unu horo",
          hh: "%d horoj",
          d: "unu tago",
          dd: "%d tagoj",
          M: "unu monato",
          MM: "%d monatoj",
          y: "unu jaro",
          yy: "%d jaroj",
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        a = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i,
        ],
        r =
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      e.defineLocale("es", {
        months:
          "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
        monthsShort: function (e, a) {
          return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex:
          /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
          "_"
        ),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [pasado a la" +
              (1 !== this.hours() ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
        invalidDate: "Fecha invalida",
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        a = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i,
        ],
        r =
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      e.defineLocale("es-do", {
        months:
          "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
        monthsShort: function (e, a) {
          return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex:
          /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
          "_"
        ),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [pasado a la" +
              (1 !== this.hours() ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        a = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i,
        ],
        r =
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      e.defineLocale("es-us", {
        months:
          "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
        monthsShort: function (e, a) {
          return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex:
          /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
          "_"
        ),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "MM/DD/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [pasado a la" +
              (1 !== this.hours() ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = {
          s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
          ss: [e + "sekundi", e + "sekundit"],
          m: ["ühe minuti", "üks minut"],
          mm: [e + " minuti", e + " minutit"],
          h: ["ühe tunni", "tund aega", "üks tund"],
          hh: [e + " tunni", e + " tundi"],
          d: ["ühe päeva", "üks päev"],
          M: ["kuu aja", "kuu aega", "üks kuu"],
          MM: [e + " kuu", e + " kuud"],
          y: ["ühe aasta", "aasta", "üks aasta"],
          yy: [e + " aasta", e + " aastat"],
        };
        return t ? (r[n][2] ? r[n][2] : r[n][1]) : a ? r[n][0] : r[n][1];
      }
      e.defineLocale("et", {
        months:
          "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
            "_"
          ),
        monthsShort:
          "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
            "_"
          ),
        weekdays:
          "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
            "_"
          ),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Täna,] LT",
          nextDay: "[Homme,] LT",
          nextWeek: "[Järgmine] dddd LT",
          lastDay: "[Eile,] LT",
          lastWeek: "[Eelmine] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s pärast",
          past: "%s tagasi",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: "%d päeva",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("eu", {
        months:
          "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
            "_"
          ),
        monthsShort:
          "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
            "_"
          ),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY[ko] MMMM[ren] D[a]",
          LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
          LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
          l: "YYYY-M-D",
          ll: "YYYY[ko] MMM D[a]",
          lll: "YYYY[ko] MMM D[a] HH:mm",
          llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
        },
        calendar: {
          sameDay: "[gaur] LT[etan]",
          nextDay: "[bihar] LT[etan]",
          nextWeek: "dddd LT[etan]",
          lastDay: "[atzo] LT[etan]",
          lastWeek: "[aurreko] dddd LT[etan]",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s barru",
          past: "duela %s",
          s: "segundo batzuk",
          ss: "%d segundo",
          m: "minutu bat",
          mm: "%d minutu",
          h: "ordu bat",
          hh: "%d ordu",
          d: "egun bat",
          dd: "%d egun",
          M: "hilabete bat",
          MM: "%d hilabete",
          y: "urte bat",
          yy: "%d urte",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "۱",
          2: "۲",
          3: "۳",
          4: "۴",
          5: "۵",
          6: "۶",
          7: "۷",
          8: "۸",
          9: "۹",
          0: "۰",
        },
        n = {
          "۱": "1",
          "۲": "2",
          "۳": "3",
          "۴": "4",
          "۵": "5",
          "۶": "6",
          "۷": "7",
          "۸": "8",
          "۹": "9",
          "۰": "0",
        };
      e.defineLocale("fa", {
        months:
          "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
            "_"
          ),
        monthsShort:
          "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
            "_"
          ),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
          "_"
        ),
        weekdaysShort:
          "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (e) {
          return /بعد از ظهر/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [پیش] [ساعت] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          ss: "%d ثانیه",
          m: "یک دقیقه",
          mm: "%d دقیقه",
          h: "یک ساعت",
          hh: "%d ساعت",
          d: "یک روز",
          dd: "%d روز",
          M: "یک ماه",
          MM: "%d ماه",
          y: "یک سال",
          yy: "%d سال",
        },
        preparse: function (e) {
          return e
            .replace(/[۰-۹]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: { dow: 6, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
            " "
          ),
        n = [
          "nolla",
          "yhden",
          "kahden",
          "kolmen",
          "neljän",
          "viiden",
          "kuuden",
          t[7],
          t[8],
          t[9],
        ];
      function a(e, a, r, s) {
        var i = "";
        switch (r) {
          case "s":
            return s ? "muutaman sekunnin" : "muutama sekunti";
          case "ss":
            i = s ? "sekunnin" : "sekuntia";
            break;
          case "m":
            return s ? "minuutin" : "minuutti";
          case "mm":
            i = s ? "minuutin" : "minuuttia";
            break;
          case "h":
            return s ? "tunnin" : "tunti";
          case "hh":
            i = s ? "tunnin" : "tuntia";
            break;
          case "d":
            return s ? "päivän" : "päivä";
          case "dd":
            i = s ? "päivän" : "päivää";
            break;
          case "M":
            return s ? "kuukauden" : "kuukausi";
          case "MM":
            i = s ? "kuukauden" : "kuukautta";
            break;
          case "y":
            return s ? "vuoden" : "vuosi";
          case "yy":
            i = s ? "vuoden" : "vuotta";
        }
        return (i =
          (function (e, a) {
            return e < 10 ? (a ? n[e] : t[e]) : e;
          })(e, s) +
          " " +
          i);
      }
      e.defineLocale("fi", {
        months:
          "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
            "_"
          ),
        monthsShort:
          "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
            "_"
          ),
        weekdays:
          "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
            "_"
          ),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM[ta] YYYY",
          LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
          LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
          l: "D.M.YYYY",
          ll: "Do MMM YYYY",
          lll: "Do MMM YYYY, [klo] HH.mm",
          llll: "ddd, Do MMM YYYY, [klo] HH.mm",
        },
        calendar: {
          sameDay: "[tänään] [klo] LT",
          nextDay: "[huomenna] [klo] LT",
          nextWeek: "dddd [klo] LT",
          lastDay: "[eilen] [klo] LT",
          lastWeek: "[viime] dddd[na] [klo] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s päästä",
          past: "%s sitten",
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("fil", {
        months:
          "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
            "_"
          ),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
          "_"
        ),
        weekdays:
          "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm",
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L",
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon",
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("fo", {
        months:
          "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
          "_"
        ),
        weekdays:
          "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
            "_"
          ),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D. MMMM, YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Í dag kl.] LT",
          nextDay: "[Í morgin kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[Í gjár kl.] LT",
          lastWeek: "[síðstu] dddd [kl] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "um %s",
          past: "%s síðani",
          s: "fá sekund",
          ss: "%d sekundir",
          m: "ein minuttur",
          mm: "%d minuttir",
          h: "ein tími",
          hh: "%d tímar",
          d: "ein dagur",
          dd: "%d dagar",
          M: "ein mánaður",
          MM: "%d mánaðir",
          y: "eitt ár",
          yy: "%d ár",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
        n = [
          /^janv/i,
          /^févr/i,
          /^mars/i,
          /^avr/i,
          /^mai/i,
          /^juin/i,
          /^juil/i,
          /^août/i,
          /^sept/i,
          /^oct/i,
          /^nov/i,
          /^déc/i,
        ];
      e.defineLocale("fr", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        monthsRegex: t,
        monthsShortRegex: t,
        monthsStrictRegex:
          /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
        monthsShortStrictRegex:
          /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + (1 === e ? "er" : "");
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e");
          }
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("fr-ca", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case "M":
            case "Q":
            case "D":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e");
          }
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("fr-ch", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case "M":
            case "Q":
            case "D":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e");
          }
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
            "_"
          ),
        n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
      e.defineLocale("fy", {
        months:
          "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
            "_"
          ),
        monthsShort: function (e, a) {
          return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split(
          "_"
        ),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[hjoed om] LT",
          nextDay: "[moarn om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[juster om] LT",
          lastWeek: "[ôfrûne] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "oer %s",
          past: "%s lyn",
          s: "in pear sekonden",
          ss: "%d sekonden",
          m: "ien minút",
          mm: "%d minuten",
          h: "ien oere",
          hh: "%d oeren",
          d: "ien dei",
          dd: "%d dagen",
          M: "ien moanne",
          MM: "%d moannen",
          y: "ien jier",
          yy: "%d jierren",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ga", {
        months: [
          "Eanáir",
          "Feabhra",
          "Márta",
          "Aibreán",
          "Bealtaine",
          "Meitheamh",
          "Iúil",
          "Lúnasa",
          "Meán Fómhair",
          "Deireadh Fómhair",
          "Samhain",
          "Nollaig",
        ],
        monthsShort: [
          "Ean",
          "Feabh",
          "Márt",
          "Aib",
          "Beal",
          "Meith",
          "Iúil",
          "Lún",
          "M.F.",
          "D.F.",
          "Samh",
          "Noll",
        ],
        monthsParseExact: !0,
        weekdays: [
          "Dé Domhnaigh",
          "Dé Luain",
          "Dé Máirt",
          "Dé Céadaoin",
          "Déardaoin",
          "Dé hAoine",
          "Dé Sathairn",
        ],
        weekdaysShort: [
          "Domh",
          "Luan",
          "Máirt",
          "Céad",
          "Déar",
          "Aoine",
          "Sath",
        ],
        weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Inniu ag] LT",
          nextDay: "[Amárach ag] LT",
          nextWeek: "dddd [ag] LT",
          lastDay: "[Inné ag] LT",
          lastWeek: "dddd [seo caite] [ag] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "i %s",
          past: "%s ó shin",
          s: "cúpla soicind",
          ss: "%d soicind",
          m: "nóiméad",
          mm: "%d nóiméad",
          h: "uair an chloig",
          hh: "%d uair an chloig",
          d: "lá",
          dd: "%d lá",
          M: "mí",
          MM: "%d míonna",
          y: "bliain",
          yy: "%d bliain",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("gd", {
        months: [
          "Am Faoilleach",
          "An Gearran",
          "Am Màrt",
          "An Giblean",
          "An Cèitean",
          "An t-Ògmhios",
          "An t-Iuchar",
          "An Lùnastal",
          "An t-Sultain",
          "An Dàmhair",
          "An t-Samhain",
          "An Dùbhlachd",
        ],
        monthsShort: [
          "Faoi",
          "Gear",
          "Màrt",
          "Gibl",
          "Cèit",
          "Ògmh",
          "Iuch",
          "Lùn",
          "Sult",
          "Dàmh",
          "Samh",
          "Dùbh",
        ],
        monthsParseExact: !0,
        weekdays: [
          "Didòmhnaich",
          "Diluain",
          "Dimàirt",
          "Diciadain",
          "Diardaoin",
          "Dihaoine",
          "Disathairne",
        ],
        weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[An-diugh aig] LT",
          nextDay: "[A-màireach aig] LT",
          nextWeek: "dddd [aig] LT",
          lastDay: "[An-dè aig] LT",
          lastWeek: "dddd [seo chaidh] [aig] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ann an %s",
          past: "bho chionn %s",
          s: "beagan diogan",
          ss: "%d diogan",
          m: "mionaid",
          mm: "%d mionaidean",
          h: "uair",
          hh: "%d uairean",
          d: "latha",
          dd: "%d latha",
          M: "mìos",
          MM: "%d mìosan",
          y: "bliadhna",
          yy: "%d bliadhna",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("gl", {
        months:
          "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
            "_"
          ),
        monthsShort:
          "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
          },
          nextDay: function () {
            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
          },
          nextWeek: function () {
            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
          },
          lastDay: function () {
            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
          },
          lastWeek: function () {
            return (
              "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return 0 === e.indexOf("un") ? "n" + e : "en " + e;
          },
          past: "hai %s",
          s: "uns segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "unha hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un ano",
          yy: "%d anos",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = {
          s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
          ss: [e + " सॅकंडांनी", e + " सॅकंड"],
          m: ["एका मिणटान", "एक मिनूट"],
          mm: [e + " मिणटांनी", e + " मिणटां"],
          h: ["एका वरान", "एक वर"],
          hh: [e + " वरांनी", e + " वरां"],
          d: ["एका दिसान", "एक दीस"],
          dd: [e + " दिसांनी", e + " दीस"],
          M: ["एका म्हयन्यान", "एक म्हयनो"],
          MM: [e + " म्हयन्यानी", e + " म्हयने"],
          y: ["एका वर्सान", "एक वर्स"],
          yy: [e + " वर्सांनी", e + " वर्सां"],
        };
        return a ? r[n][0] : r[n][1];
      }
      e.defineLocale("gom-deva", {
        months: {
          standalone:
            "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
              "_"
            ),
          format:
            "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split(
              "_"
            ),
          isFormat: /MMMM(\s)+D[oD]?/,
        },
        monthsShort:
          "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split(
          "_"
        ),
        weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
        weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "A h:mm [वाजतां]",
          LTS: "A h:mm:ss [वाजतां]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [वाजतां]",
          LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
          llll: "ddd, D MMM YYYY, A h:mm [वाजतां]",
        },
        calendar: {
          sameDay: "[आयज] LT",
          nextDay: "[फाल्यां] LT",
          nextWeek: "[फुडलो] dddd[,] LT",
          lastDay: "[काल] LT",
          lastWeek: "[फाटलो] dddd[,] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s",
          past: "%s आदीं",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + "वेर";
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
            case "w":
            case "W":
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "राती" === t
              ? e < 4
                ? e
                : e + 12
              : "सकाळीं" === t
              ? e
              : "दनपारां" === t
              ? e > 12
                ? e
                : e + 12
              : "सांजे" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "राती"
            : e < 12
            ? "सकाळीं"
            : e < 16
            ? "दनपारां"
            : e < 20
            ? "सांजे"
            : "राती";
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = {
          s: ["thoddea sekondamni", "thodde sekond"],
          ss: [e + " sekondamni", e + " sekond"],
          m: ["eka mintan", "ek minut"],
          mm: [e + " mintamni", e + " mintam"],
          h: ["eka voran", "ek vor"],
          hh: [e + " voramni", e + " voram"],
          d: ["eka disan", "ek dis"],
          dd: [e + " disamni", e + " dis"],
          M: ["eka mhoinean", "ek mhoino"],
          MM: [e + " mhoineamni", e + " mhoine"],
          y: ["eka vorsan", "ek voros"],
          yy: [e + " vorsamni", e + " vorsam"],
        };
        return a ? r[n][0] : r[n][1];
      }
      e.defineLocale("gom-latn", {
        months: {
          standalone:
            "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
              "_"
            ),
          format:
            "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
              "_"
            ),
          isFormat: /MMMM(\s)+D[oD]?/,
        },
        monthsShort:
          "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split(
          "_"
        ),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "A h:mm [vazta]",
          LTS: "A h:mm:ss [vazta]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [vazta]",
          LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
          llll: "ddd, D MMM YYYY, A h:mm [vazta]",
        },
        calendar: {
          sameDay: "[Aiz] LT",
          nextDay: "[Faleam] LT",
          nextWeek: "[Fuddlo] dddd[,] LT",
          lastDay: "[Kal] LT",
          lastWeek: "[Fattlo] dddd[,] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s",
          past: "%s adim",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + "er";
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
            case "w":
            case "W":
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /rati|sokallim|donparam|sanje/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "rati" === t
              ? e < 4
                ? e
                : e + 12
              : "sokallim" === t
              ? e
              : "donparam" === t
              ? e > 12
                ? e
                : e + 12
              : "sanje" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "rati"
            : e < 12
            ? "sokallim"
            : e < 16
            ? "donparam"
            : e < 20
            ? "sanje"
            : "rati";
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "૧",
          2: "૨",
          3: "૩",
          4: "૪",
          5: "૫",
          6: "૬",
          7: "૭",
          8: "૮",
          9: "૯",
          0: "૦",
        },
        n = {
          "૧": "1",
          "૨": "2",
          "૩": "3",
          "૪": "4",
          "૫": "5",
          "૬": "6",
          "૭": "7",
          "૮": "8",
          "૯": "9",
          "૦": "0",
        };
      e.defineLocale("gu", {
        months:
          "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
            "_"
          ),
        monthsShort:
          "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split(
          "_"
        ),
        weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
        weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
        longDateFormat: {
          LT: "A h:mm વાગ્યે",
          LTS: "A h:mm:ss વાગ્યે",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm વાગ્યે",
          LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
        },
        calendar: {
          sameDay: "[આજ] LT",
          nextDay: "[કાલે] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ગઇકાલે] LT",
          lastWeek: "[પાછલા] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s મા",
          past: "%s પહેલા",
          s: "અમુક પળો",
          ss: "%d સેકંડ",
          m: "એક મિનિટ",
          mm: "%d મિનિટ",
          h: "એક કલાક",
          hh: "%d કલાક",
          d: "એક દિવસ",
          dd: "%d દિવસ",
          M: "એક મહિનો",
          MM: "%d મહિનો",
          y: "એક વર્ષ",
          yy: "%d વર્ષ",
        },
        preparse: function (e) {
          return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "રાત" === t
              ? e < 4
                ? e
                : e + 12
              : "સવાર" === t
              ? e
              : "બપોર" === t
              ? e >= 10
                ? e
                : e + 12
              : "સાંજ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "રાત"
            : e < 10
            ? "સવાર"
            : e < 17
            ? "બપોર"
            : e < 20
            ? "સાંજ"
            : "રાત";
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("he", {
        months:
          "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
            "_"
          ),
        monthsShort:
          "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
            "_"
          ),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [ב]MMMM YYYY",
          LLL: "D [ב]MMMM YYYY HH:mm",
          LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
          l: "D/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[היום ב־]LT",
          nextDay: "[מחר ב־]LT",
          nextWeek: "dddd [בשעה] LT",
          lastDay: "[אתמול ב־]LT",
          lastWeek: "[ביום] dddd [האחרון בשעה] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "בעוד %s",
          past: "לפני %s",
          s: "מספר שניות",
          ss: "%d שניות",
          m: "דקה",
          mm: "%d דקות",
          h: "שעה",
          hh: function (e) {
            return 2 === e ? "שעתיים" : e + " שעות";
          },
          d: "יום",
          dd: function (e) {
            return 2 === e ? "יומיים" : e + " ימים";
          },
          M: "חודש",
          MM: function (e) {
            return 2 === e ? "חודשיים" : e + " חודשים";
          },
          y: "שנה",
          yy: function (e) {
            return 2 === e
              ? "שנתיים"
              : e % 10 == 0 && 10 !== e
              ? e + " שנה"
              : e + " שנים";
          },
        },
        meridiemParse:
          /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function (e) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 5
            ? "לפנות בוקר"
            : e < 10
            ? "בבוקר"
            : e < 12
            ? n
              ? 'לפנה"צ'
              : "לפני הצהריים"
            : e < 18
            ? n
              ? 'אחה"צ'
              : "אחרי הצהריים"
            : "בערב";
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        n = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        };
      e.defineLocale("hi", {
        months:
          "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
            "_"
          ),
        monthsShort:
          "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
          "_"
        ),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm बजे",
          LTS: "A h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[कल] LT",
          nextWeek: "dddd, LT",
          lastDay: "[कल] LT",
          lastWeek: "[पिछले] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s में",
          past: "%s पहले",
          s: "कुछ ही क्षण",
          ss: "%d सेकंड",
          m: "एक मिनट",
          mm: "%d मिनट",
          h: "एक घंटा",
          hh: "%d घंटे",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महीने",
          MM: "%d महीने",
          y: "एक वर्ष",
          yy: "%d वर्ष",
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "रात" === t
              ? e < 4
                ? e
                : e + 12
              : "सुबह" === t
              ? e
              : "दोपहर" === t
              ? e >= 10
                ? e
                : e + 12
              : "शाम" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "रात"
            : e < 10
            ? "सुबह"
            : e < 17
            ? "दोपहर"
            : e < 20
            ? "शाम"
            : "रात";
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n) {
        var a = e + " ";
        switch (n) {
          case "ss":
            return (a +=
              1 === e
                ? "sekunda"
                : 2 === e || 3 === e || 4 === e
                ? "sekunde"
                : "sekundi");
          case "m":
            return t ? "jedna minuta" : "jedne minute";
          case "mm":
            return (a +=
              1 === e
                ? "minuta"
                : 2 === e || 3 === e || 4 === e
                ? "minute"
                : "minuta");
          case "h":
            return t ? "jedan sat" : "jednog sata";
          case "hh":
            return (a +=
              1 === e
                ? "sat"
                : 2 === e || 3 === e || 4 === e
                ? "sata"
                : "sati");
          case "dd":
            return (a += 1 === e ? "dan" : "dana");
          case "MM":
            return (a +=
              1 === e
                ? "mjesec"
                : 2 === e || 3 === e || 4 === e
                ? "mjeseca"
                : "mjeseci");
          case "yy":
            return (a +=
              1 === e
                ? "godina"
                : 2 === e || 3 === e || 4 === e
                ? "godine"
                : "godina");
        }
      }
      e.defineLocale("hr", {
        months: {
          format:
            "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
              "_"
            ),
          standalone:
            "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
              "_"
            ),
        },
        monthsShort:
          "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM YYYY",
          LLL: "Do MMMM YYYY H:mm",
          LLLL: "dddd, Do MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[prošlu] [nedjelju] [u] LT";
              case 3:
                return "[prošlu] [srijedu] [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
        "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
          " "
        );
      function n(e, t, n, a) {
        var r = e;
        switch (n) {
          case "s":
            return a || t ? "néhány másodperc" : "néhány másodperce";
          case "ss":
            return r + (a || t) ? " másodperc" : " másodperce";
          case "m":
            return "egy" + (a || t ? " perc" : " perce");
          case "mm":
            return r + (a || t ? " perc" : " perce");
          case "h":
            return "egy" + (a || t ? " óra" : " órája");
          case "hh":
            return r + (a || t ? " óra" : " órája");
          case "d":
            return "egy" + (a || t ? " nap" : " napja");
          case "dd":
            return r + (a || t ? " nap" : " napja");
          case "M":
            return "egy" + (a || t ? " hónap" : " hónapja");
          case "MM":
            return r + (a || t ? " hónap" : " hónapja");
          case "y":
            return "egy" + (a || t ? " év" : " éve");
          case "yy":
            return r + (a || t ? " év" : " éve");
        }
        return "";
      }
      function a(e) {
        return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
      }
      e.defineLocale("hu", {
        months:
          "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split(
          "_"
        ),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split(
          "_"
        ),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY. MMMM D.",
          LLL: "YYYY. MMMM D. H:mm",
          LLLL: "YYYY. MMMM D., dddd H:mm",
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
          return "u" === e.charAt(1).toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU";
        },
        calendar: {
          sameDay: "[ma] LT[-kor]",
          nextDay: "[holnap] LT[-kor]",
          nextWeek: function () {
            return a.call(this, !0);
          },
          lastDay: "[tegnap] LT[-kor]",
          lastWeek: function () {
            return a.call(this, !1);
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "%s múlva",
          past: "%s",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("hy-am", {
        months: {
          format:
            "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
              "_"
            ),
          standalone:
            "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
              "_"
            ),
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split(
          "_"
        ),
        weekdays:
          "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
            "_"
          ),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY թ.",
          LLL: "D MMMM YYYY թ., HH:mm",
          LLLL: "dddd, D MMMM YYYY թ., HH:mm",
        },
        calendar: {
          sameDay: "[այսօր] LT",
          nextDay: "[վաղը] LT",
          lastDay: "[երեկ] LT",
          nextWeek: function () {
            return "dddd [օրը ժամը] LT";
          },
          lastWeek: function () {
            return "[անցած] dddd [օրը ժամը] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "%s հետո",
          past: "%s առաջ",
          s: "մի քանի վայրկյան",
          ss: "%d վայրկյան",
          m: "րոպե",
          mm: "%d րոպե",
          h: "ժամ",
          hh: "%d ժամ",
          d: "օր",
          dd: "%d օր",
          M: "ամիս",
          MM: "%d ամիս",
          y: "տարի",
          yy: "%d տարի",
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e);
        },
        meridiem: function (e) {
          return e < 4
            ? "գիշերվա"
            : e < 12
            ? "առավոտվա"
            : e < 17
            ? "ցերեկվա"
            : "երեկոյան";
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
          switch (t) {
            case "DDD":
            case "w":
            case "W":
            case "DDDo":
              return 1 === e ? e + "-ին" : e + "-րդ";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("id", {
        months:
          "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "siang" === t
              ? e >= 11
                ? e
                : e + 12
              : "sore" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Besok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kemarin pukul] LT",
          lastWeek: "dddd [lalu pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lalu",
          s: "beberapa detik",
          ss: "%d detik",
          m: "semenit",
          mm: "%d menit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e) {
        return e % 100 == 11 || e % 10 != 1;
      }
      function n(e, n, a, r) {
        var s = e + " ";
        switch (a) {
          case "s":
            return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
          case "ss":
            return t(e)
              ? s + (n || r ? "sekúndur" : "sekúndum")
              : s + "sekúnda";
          case "m":
            return n ? "mínúta" : "mínútu";
          case "mm":
            return t(e)
              ? s + (n || r ? "mínútur" : "mínútum")
              : n
              ? s + "mínúta"
              : s + "mínútu";
          case "hh":
            return t(e)
              ? s + (n || r ? "klukkustundir" : "klukkustundum")
              : s + "klukkustund";
          case "d":
            return n ? "dagur" : r ? "dag" : "degi";
          case "dd":
            return t(e)
              ? n
                ? s + "dagar"
                : s + (r ? "daga" : "dögum")
              : n
              ? s + "dagur"
              : s + (r ? "dag" : "degi");
          case "M":
            return n ? "mánuður" : r ? "mánuð" : "mánuði";
          case "MM":
            return t(e)
              ? n
                ? s + "mánuðir"
                : s + (r ? "mánuði" : "mánuðum")
              : n
              ? s + "mánuður"
              : s + (r ? "mánuð" : "mánuði");
          case "y":
            return n || r ? "ár" : "ári";
          case "yy":
            return t(e)
              ? s + (n || r ? "ár" : "árum")
              : s + (n || r ? "ár" : "ári");
        }
      }
      e.defineLocale("is", {
        months:
          "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split(
          "_"
        ),
        weekdays:
          "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
            "_"
          ),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
        },
        calendar: {
          sameDay: "[í dag kl.] LT",
          nextDay: "[á morgun kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[í gær kl.] LT",
          lastWeek: "[síðasta] dddd [kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "eftir %s",
          past: "fyrir %s síðan",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: "klukkustund",
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("it", {
        months:
          "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
            "_"
          ),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
          "_"
        ),
        weekdays:
          "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: function () {
            return (
              "[Oggi a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          nextDay: function () {
            return (
              "[Domani a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          nextWeek: function () {
            return (
              "dddd [a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          lastDay: function () {
            return (
              "[Ieri a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return (
                  "[La scorsa] dddd [a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              default:
                return (
                  "[Lo scorso] dddd [a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "tra %s",
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("it-ch", {
        months:
          "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
            "_"
          ),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
          "_"
        ),
        weekdays:
          "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Oggi alle] LT",
          nextDay: "[Domani alle] LT",
          nextWeek: "dddd [alle] LT",
          lastDay: "[Ieri alle] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[la scorsa] dddd [alle] LT";
              default:
                return "[lo scorso] dddd [alle] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
          },
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ja", {
        eras: [
          {
            since: "2019-05-01",
            offset: 1,
            name: "令和",
            narrow: "㋿",
            abbr: "R",
          },
          {
            since: "1989-01-08",
            until: "2019-04-30",
            offset: 1,
            name: "平成",
            narrow: "㍻",
            abbr: "H",
          },
          {
            since: "1926-12-25",
            until: "1989-01-07",
            offset: 1,
            name: "昭和",
            narrow: "㍼",
            abbr: "S",
          },
          {
            since: "1912-07-30",
            until: "1926-12-24",
            offset: 1,
            name: "大正",
            narrow: "㍽",
            abbr: "T",
          },
          {
            since: "1873-01-01",
            until: "1912-07-29",
            offset: 6,
            name: "明治",
            narrow: "㍾",
            abbr: "M",
          },
          {
            since: "0001-01-01",
            until: "1873-12-31",
            offset: 1,
            name: "西暦",
            narrow: "AD",
            abbr: "AD",
          },
          {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "紀元前",
            narrow: "BC",
            abbr: "BC",
          },
        ],
        eraYearOrdinalRegex: /(元|\d+)年/,
        eraYearOrdinalParse: function (e, t) {
          return "元" === t[1] ? 1 : parseInt(t[1] || e, 10);
        },
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日 dddd HH:mm",
          l: "YYYY/MM/DD",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日(ddd) HH:mm",
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
          return "午後" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "午前" : "午後";
        },
        calendar: {
          sameDay: "[今日] LT",
          nextDay: "[明日] LT",
          nextWeek: function (e) {
            return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
          },
          lastDay: "[昨日] LT",
          lastWeek: function (e) {
            return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT";
          },
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function (e, t) {
          switch (t) {
            case "y":
              return 1 === e ? "元年" : e + "年";
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "数秒",
          ss: "%d秒",
          m: "1分",
          mm: "%d分",
          h: "1時間",
          hh: "%d時間",
          d: "1日",
          dd: "%d日",
          M: "1ヶ月",
          MM: "%dヶ月",
          y: "1年",
          yy: "%d年",
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("jv", {
        months:
          "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
          "_"
        ),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "enjing" === t
              ? e
              : "siyang" === t
              ? e >= 11
                ? e
                : e + 12
              : "sonten" === t || "ndalu" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11
            ? "enjing"
            : e < 15
            ? "siyang"
            : e < 19
            ? "sonten"
            : "ndalu";
        },
        calendar: {
          sameDay: "[Dinten puniko pukul] LT",
          nextDay: "[Mbenjang pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kala wingi pukul] LT",
          lastWeek: "dddd [kepengker pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "wonten ing %s",
          past: "%s ingkang kepengker",
          s: "sawetawis detik",
          ss: "%d detik",
          m: "setunggal menit",
          mm: "%d menit",
          h: "setunggal jam",
          hh: "%d jam",
          d: "sedinten",
          dd: "%d dinten",
          M: "sewulan",
          MM: "%d wulan",
          y: "setaun",
          yy: "%d taun",
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ka", {
        months:
          "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
            "_"
          ),
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split(
          "_"
        ),
        weekdays: {
          standalone:
            "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
              "_"
            ),
          format:
            "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
              "_"
            ),
          isFormat: /(წინა|შემდეგ)/,
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[დღეს] LT[-ზე]",
          nextDay: "[ხვალ] LT[-ზე]",
          lastDay: "[გუშინ] LT[-ზე]",
          nextWeek: "[შემდეგ] dddd LT[-ზე]",
          lastWeek: "[წინა] dddd LT-ზე",
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return e.replace(
              /(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,
              function (e, t, n) {
                return "ი" === n ? t + "ში" : t + n + "ში";
              }
            );
          },
          past: function (e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
              ? e.replace(/(ი|ე)$/, "ის წინ")
              : /წელი/.test(e)
              ? e.replace(/წელი$/, "წლის წინ")
              : e;
          },
          s: "რამდენიმე წამი",
          ss: "%d წამი",
          m: "წუთი",
          mm: "%d წუთი",
          h: "საათი",
          hh: "%d საათი",
          d: "დღე",
          dd: "%d დღე",
          M: "თვე",
          MM: "%d თვე",
          y: "წელი",
          yy: "%d წელი",
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
          return 0 === e
            ? e
            : 1 === e
            ? e + "-ლი"
            : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
            ? "მე-" + e
            : e + "-ე";
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші",
      };
      e.defineLocale("kk", {
        months:
          "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
            "_"
          ),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split(
          "_"
        ),
        weekdays:
          "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Бүгін сағат] LT",
          nextDay: "[Ертең сағат] LT",
          nextWeek: "dddd [сағат] LT",
          lastDay: "[Кеше сағат] LT",
          lastWeek: "[Өткен аптаның] dddd [сағат] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ішінде",
          past: "%s бұрын",
          s: "бірнеше секунд",
          ss: "%d секунд",
          m: "бір минут",
          mm: "%d минут",
          h: "бір сағат",
          hh: "%d сағат",
          d: "бір күн",
          dd: "%d күн",
          M: "бір ай",
          MM: "%d ай",
          y: "бір жыл",
          yy: "%d жыл",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "១",
          2: "២",
          3: "៣",
          4: "៤",
          5: "៥",
          6: "៦",
          7: "៧",
          8: "៨",
          9: "៩",
          0: "០",
        },
        n = {
          "១": "1",
          "២": "2",
          "៣": "3",
          "៤": "4",
          "៥": "5",
          "៦": "6",
          "៧": "7",
          "៨": "8",
          "៩": "9",
          "០": "0",
        };
      e.defineLocale("km", {
        months:
          "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
            "_"
          ),
        monthsShort:
          "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
            "_"
          ),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (e) {
          return "ល្ងាច" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ព្រឹក" : "ល្ងាច";
        },
        calendar: {
          sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
          nextDay: "[ស្អែក ម៉ោង] LT",
          nextWeek: "dddd [ម៉ោង] LT",
          lastDay: "[ម្សិលមិញ ម៉ោង] LT",
          lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sទៀត",
          past: "%sមុន",
          s: "ប៉ុន្មានវិនាទី",
          ss: "%d វិនាទី",
          m: "មួយនាទី",
          mm: "%d នាទី",
          h: "មួយម៉ោង",
          hh: "%d ម៉ោង",
          d: "មួយថ្ងៃ",
          dd: "%d ថ្ងៃ",
          M: "មួយខែ",
          MM: "%d ខែ",
          y: "មួយឆ្នាំ",
          yy: "%d ឆ្នាំ",
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: "ទី%d",
        preparse: function (e) {
          return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "೧",
          2: "೨",
          3: "೩",
          4: "೪",
          5: "೫",
          6: "೬",
          7: "೭",
          8: "೮",
          9: "೯",
          0: "೦",
        },
        n = {
          "೧": "1",
          "೨": "2",
          "೩": "3",
          "೪": "4",
          "೫": "5",
          "೬": "6",
          "೭": "7",
          "೮": "8",
          "೯": "9",
          "೦": "0",
        };
      e.defineLocale("kn", {
        months:
          "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
            "_"
          ),
        monthsShort:
          "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
        weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
        weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
          sameDay: "[ಇಂದು] LT",
          nextDay: "[ನಾಳೆ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ನಿನ್ನೆ] LT",
          lastWeek: "[ಕೊನೆಯ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ನಂತರ",
          past: "%s ಹಿಂದೆ",
          s: "ಕೆಲವು ಕ್ಷಣಗಳು",
          ss: "%d ಸೆಕೆಂಡುಗಳು",
          m: "ಒಂದು ನಿಮಿಷ",
          mm: "%d ನಿಮಿಷ",
          h: "ಒಂದು ಗಂಟೆ",
          hh: "%d ಗಂಟೆ",
          d: "ಒಂದು ದಿನ",
          dd: "%d ದಿನ",
          M: "ಒಂದು ತಿಂಗಳು",
          MM: "%d ತಿಂಗಳು",
          y: "ಒಂದು ವರ್ಷ",
          yy: "%d ವರ್ಷ",
        },
        preparse: function (e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "ರಾತ್ರಿ" === t
              ? e < 4
                ? e
                : e + 12
              : "ಬೆಳಿಗ್ಗೆ" === t
              ? e
              : "ಮಧ್ಯಾಹ್ನ" === t
              ? e >= 10
                ? e
                : e + 12
              : "ಸಂಜೆ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "ರಾತ್ರಿ"
            : e < 10
            ? "ಬೆಳಿಗ್ಗೆ"
            : e < 17
            ? "ಮಧ್ಯಾಹ್ನ"
            : e < 20
            ? "ಸಂಜೆ"
            : "ರಾತ್ರಿ";
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function (e) {
          return e + "ನೇ";
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
          "_"
        ),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY년 MMMM D일",
          LLL: "YYYY년 MMMM D일 A h:mm",
          LLLL: "YYYY년 MMMM D일 dddd A h:mm",
          l: "YYYY.MM.DD.",
          ll: "YYYY년 MMMM D일",
          lll: "YYYY년 MMMM D일 A h:mm",
          llll: "YYYY년 MMMM D일 dddd A h:mm",
        },
        calendar: {
          sameDay: "오늘 LT",
          nextDay: "내일 LT",
          nextWeek: "dddd LT",
          lastDay: "어제 LT",
          lastWeek: "지난주 dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇 초",
          ss: "%d초",
          m: "1분",
          mm: "%d분",
          h: "한 시간",
          hh: "%d시간",
          d: "하루",
          dd: "%d일",
          M: "한 달",
          MM: "%d달",
          y: "일 년",
          yy: "%d년",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "일";
            case "M":
              return e + "월";
            case "w":
            case "W":
              return e + "주";
            default:
              return e;
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function (e) {
          return "오후" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "오전" : "오후";
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠",
        },
        n = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0",
        },
        a = [
          "کانونی دووەم",
          "شوبات",
          "ئازار",
          "نیسان",
          "ئایار",
          "حوزەیران",
          "تەمموز",
          "ئاب",
          "ئەیلوول",
          "تشرینی یەكەم",
          "تشرینی دووەم",
          "كانونی یەکەم",
        ];
      e.defineLocale("ku", {
        months: a,
        monthsShort: a,
        weekdays:
          "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
            "_"
          ),
        weekdaysShort:
          "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function (e) {
          return /ئێواره‌/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "به‌یانی" : "ئێواره‌";
        },
        calendar: {
          sameDay: "[ئه‌مرۆ كاتژمێر] LT",
          nextDay: "[به‌یانی كاتژمێر] LT",
          nextWeek: "dddd [كاتژمێر] LT",
          lastDay: "[دوێنێ كاتژمێر] LT",
          lastWeek: "dddd [كاتژمێر] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "له‌ %s",
          past: "%s",
          s: "چه‌ند چركه‌یه‌ك",
          ss: "چركه‌ %d",
          m: "یه‌ك خوله‌ك",
          mm: "%d خوله‌ك",
          h: "یه‌ك كاتژمێر",
          hh: "%d كاتژمێر",
          d: "یه‌ك ڕۆژ",
          dd: "%d ڕۆژ",
          M: "یه‌ك مانگ",
          MM: "%d مانگ",
          y: "یه‌ك ساڵ",
          yy: "%d ساڵ",
        },
        preparse: function (e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        week: { dow: 6, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү",
      };
      e.defineLocale("ky", {
        months:
          "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
            "_"
          ),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split(
          "_"
        ),
        weekdays:
          "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Бүгүн саат] LT",
          nextDay: "[Эртең саат] LT",
          nextWeek: "dddd [саат] LT",
          lastDay: "[Кечээ саат] LT",
          lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ичинде",
          past: "%s мурун",
          s: "бирнече секунд",
          ss: "%d секунд",
          m: "бир мүнөт",
          mm: "%d мүнөт",
          h: "бир саат",
          hh: "%d саат",
          d: "бир күн",
          dd: "%d күн",
          M: "бир ай",
          MM: "%d ай",
          y: "бир жыл",
          yy: "%d жыл",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = {
          m: ["eng Minutt", "enger Minutt"],
          h: ["eng Stonn", "enger Stonn"],
          d: ["een Dag", "engem Dag"],
          M: ["ee Mount", "engem Mount"],
          y: ["ee Joer", "engem Joer"],
        };
        return t ? r[n][0] : r[n][1];
      }
      function n(e) {
        if (((e = parseInt(e, 10)), isNaN(e))) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
          var t = e % 10;
          return n(0 === t ? e / 10 : t);
        }
        if (e < 1e4) {
          for (; e >= 10; ) e /= 10;
          return n(e);
        }
        return n((e /= 1e3));
      }
      e.defineLocale("lb", {
        months:
          "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
            "_"
          ),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm [Auer]",
          LTS: "H:mm:ss [Auer]",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm [Auer]",
          LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
        },
        calendar: {
          sameDay: "[Haut um] LT",
          sameElse: "L",
          nextDay: "[Muer um] LT",
          nextWeek: "dddd [um] LT",
          lastDay: "[Gëschter um] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 2:
              case 4:
                return "[Leschten] dddd [um] LT";
              default:
                return "[Leschte] dddd [um] LT";
            }
          },
        },
        relativeTime: {
          future: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
          },
          past: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
          },
          s: "e puer Sekonnen",
          ss: "%d Sekonnen",
          m: t,
          mm: "%d Minutten",
          h: t,
          hh: "%d Stonnen",
          d: t,
          dd: "%d Deeg",
          M: t,
          MM: "%d Méint",
          y: t,
          yy: "%d Joer",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("lo", {
        months:
          "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
            "_"
          ),
        monthsShort:
          "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
            "_"
          ),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "ວັນdddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
          return "ຕອນແລງ" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
        },
        calendar: {
          sameDay: "[ມື້ນີ້ເວລາ] LT",
          nextDay: "[ມື້ອື່ນເວລາ] LT",
          nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
          lastDay: "[ມື້ວານນີ້ເວລາ] LT",
          lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ອີກ %s",
          past: "%sຜ່ານມາ",
          s: "ບໍ່ເທົ່າໃດວິນາທີ",
          ss: "%d ວິນາທີ",
          m: "1 ນາທີ",
          mm: "%d ນາທີ",
          h: "1 ຊົ່ວໂມງ",
          hh: "%d ຊົ່ວໂມງ",
          d: "1 ມື້",
          dd: "%d ມື້",
          M: "1 ເດືອນ",
          MM: "%d ເດືອນ",
          y: "1 ປີ",
          yy: "%d ປີ",
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
          return "ທີ່" + e;
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        ss: "sekundė_sekundžių_sekundes",
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus",
      };
      function n(e, t, n, a) {
        return t ? r(n)[0] : a ? r(n)[1] : r(n)[2];
      }
      function a(e) {
        return e % 10 == 0 || (e > 10 && e < 20);
      }
      function r(e) {
        return t[e].split("_");
      }
      function s(e, t, s, i) {
        var o = e + " ";
        return 1 === e
          ? o + n(0, t, s[0], i)
          : t
          ? o + (a(e) ? r(s)[1] : r(s)[0])
          : i
          ? o + r(s)[1]
          : o + (a(e) ? r(s)[1] : r(s)[2]);
      }
      e.defineLocale("lt", {
        months: {
          format:
            "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
              "_"
            ),
          standalone:
            "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
              "_"
            ),
          isFormat:
            /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
          "_"
        ),
        weekdays: {
          format:
            "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
              "_"
            ),
          standalone:
            "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
              "_"
            ),
          isFormat: /dddd HH:mm/,
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY [m.] MMMM D [d.]",
          LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
          l: "YYYY-MM-DD",
          ll: "YYYY [m.] MMMM D [d.]",
          lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
        },
        calendar: {
          sameDay: "[Šiandien] LT",
          nextDay: "[Rytoj] LT",
          nextWeek: "dddd LT",
          lastDay: "[Vakar] LT",
          lastWeek: "[Praėjusį] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "po %s",
          past: "prieš %s",
          s: function (e, t, n, a) {
            return t
              ? "kelios sekundės"
              : a
              ? "kelių sekundžių"
              : "kelias sekundes";
          },
          ss: s,
          m: n,
          mm: s,
          h: n,
          hh: s,
          d: n,
          dd: s,
          M: n,
          MM: s,
          y: n,
          yy: s,
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
          return e + "-oji";
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_"),
      };
      function n(e, t, n) {
        return n
          ? t % 10 == 1 && t % 100 != 11
            ? e[2]
            : e[3]
          : t % 10 == 1 && t % 100 != 11
          ? e[0]
          : e[1];
      }
      function a(e, a, r) {
        return e + " " + n(t[r], e, a);
      }
      function r(e, a, r) {
        return n(t[r], e, a);
      }
      e.defineLocale("lv", {
        months:
          "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays:
          "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
            "_"
          ),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY.",
          LL: "YYYY. [gada] D. MMMM",
          LLL: "YYYY. [gada] D. MMMM, HH:mm",
          LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
        },
        calendar: {
          sameDay: "[Šodien pulksten] LT",
          nextDay: "[Rīt pulksten] LT",
          nextWeek: "dddd [pulksten] LT",
          lastDay: "[Vakar pulksten] LT",
          lastWeek: "[Pagājušā] dddd [pulksten] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "pēc %s",
          past: "pirms %s",
          s: function (e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm";
          },
          ss: a,
          m: r,
          mm: a,
          h: r,
          hh: a,
          d: r,
          dd: a,
          M: r,
          MM: a,
          y: r,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["sekund", "sekunda", "sekundi"],
          m: ["jedan minut", "jednog minuta"],
          mm: ["minut", "minuta", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mjesec", "mjeseca", "mjeseci"],
          yy: ["godina", "godine", "godina"],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, a) {
          var r = t.words[a];
          return 1 === a.length
            ? n
              ? r[0]
              : r[1]
            : e + " " + t.correctGrammaticalCase(e, r);
        },
      };
      e.defineLocale("me", {
        months:
          "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sjutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[juče u] LT",
          lastWeek: function () {
            return [
              "[prošle] [nedjelje] [u] LT",
              "[prošlog] [ponedjeljka] [u] LT",
              "[prošlog] [utorka] [u] LT",
              "[prošle] [srijede] [u] LT",
              "[prošlog] [četvrtka] [u] LT",
              "[prošlog] [petka] [u] LT",
              "[prošle] [subote] [u] LT",
            ][this.day()];
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "nekoliko sekundi",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "dan",
          dd: t.translate,
          M: "mjesec",
          MM: t.translate,
          y: "godinu",
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("mi", {
        months:
          "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
            "_"
          ),
        monthsShort:
          "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
            "_"
          ),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [i] HH:mm",
          LLLL: "dddd, D MMMM YYYY [i] HH:mm",
        },
        calendar: {
          sameDay: "[i teie mahana, i] LT",
          nextDay: "[apopo i] LT",
          nextWeek: "dddd [i] LT",
          lastDay: "[inanahi i] LT",
          lastWeek: "dddd [whakamutunga i] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "i roto i %s",
          past: "%s i mua",
          s: "te hēkona ruarua",
          ss: "%d hēkona",
          m: "he meneti",
          mm: "%d meneti",
          h: "te haora",
          hh: "%d haora",
          d: "he ra",
          dd: "%d ra",
          M: "he marama",
          MM: "%d marama",
          y: "he tau",
          yy: "%d tau",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("mk", {
        months:
          "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
            "_"
          ),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split(
          "_"
        ),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
          "_"
        ),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Денес во] LT",
          nextDay: "[Утре во] LT",
          nextWeek: "[Во] dddd [во] LT",
          lastDay: "[Вчера во] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[Изминатата] dddd [во] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[Изминатиот] dddd [во] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "за %s",
          past: "пред %s",
          s: "неколку секунди",
          ss: "%d секунди",
          m: "една минута",
          mm: "%d минути",
          h: "еден час",
          hh: "%d часа",
          d: "еден ден",
          dd: "%d дена",
          M: "еден месец",
          MM: "%d месеци",
          y: "една година",
          yy: "%d години",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            n = e % 100;
          return 0 === e
            ? e + "-ев"
            : 0 === n
            ? e + "-ен"
            : n > 10 && n < 20
            ? e + "-ти"
            : 1 === t
            ? e + "-ви"
            : 2 === t
            ? e + "-ри"
            : 7 === t || 8 === t
            ? e + "-ми"
            : e + "-ти";
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ml", {
        months:
          "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
            "_"
          ),
        monthsShort:
          "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
            "_"
          ),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
          LT: "A h:mm -നു",
          LTS: "A h:mm:ss -നു",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm -നു",
          LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
        },
        calendar: {
          sameDay: "[ഇന്ന്] LT",
          nextDay: "[നാളെ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ഇന്നലെ] LT",
          lastWeek: "[കഴിഞ്ഞ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s കഴിഞ്ഞ്",
          past: "%s മുൻപ്",
          s: "അൽപ നിമിഷങ്ങൾ",
          ss: "%d സെക്കൻഡ്",
          m: "ഒരു മിനിറ്റ്",
          mm: "%d മിനിറ്റ്",
          h: "ഒരു മണിക്കൂർ",
          hh: "%d മണിക്കൂർ",
          d: "ഒരു ദിവസം",
          dd: "%d ദിവസം",
          M: "ഒരു മാസം",
          MM: "%d മാസം",
          y: "ഒരു വർഷം",
          yy: "%d വർഷം",
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            ("രാത്രി" === t && e >= 4) ||
            "ഉച്ച കഴിഞ്ഞ്" === t ||
            "വൈകുന്നേരം" === t
              ? e + 12
              : e
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "രാത്രി"
            : e < 12
            ? "രാവിലെ"
            : e < 17
            ? "ഉച്ച കഴിഞ്ഞ്"
            : e < 20
            ? "വൈകുന്നേരം"
            : "രാത്രി";
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        switch (n) {
          case "s":
            return t ? "хэдхэн секунд" : "хэдхэн секундын";
          case "ss":
            return e + (t ? " секунд" : " секундын");
          case "m":
          case "mm":
            return e + (t ? " минут" : " минутын");
          case "h":
          case "hh":
            return e + (t ? " цаг" : " цагийн");
          case "d":
          case "dd":
            return e + (t ? " өдөр" : " өдрийн");
          case "M":
          case "MM":
            return e + (t ? " сар" : " сарын");
          case "y":
          case "yy":
            return e + (t ? " жил" : " жилийн");
          default:
            return e;
        }
      }
      e.defineLocale("mn", {
        months:
          "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
            "_"
          ),
        monthsShort:
          "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
        weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
        weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY оны MMMMын D",
          LLL: "YYYY оны MMMMын D HH:mm",
          LLLL: "dddd, YYYY оны MMMMын D HH:mm",
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (e) {
          return "ҮХ" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ҮӨ" : "ҮХ";
        },
        calendar: {
          sameDay: "[Өнөөдөр] LT",
          nextDay: "[Маргааш] LT",
          nextWeek: "[Ирэх] dddd LT",
          lastDay: "[Өчигдөр] LT",
          lastWeek: "[Өнгөрсөн] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s дараа",
          past: "%s өмнө",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + " өдөр";
            default:
              return e;
          }
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        n = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        };
      function a(e, t, n, a) {
        var r = "";
        if (t)
          switch (n) {
            case "s":
              r = "काही सेकंद";
              break;
            case "ss":
              r = "%d सेकंद";
              break;
            case "m":
              r = "एक मिनिट";
              break;
            case "mm":
              r = "%d मिनिटे";
              break;
            case "h":
              r = "एक तास";
              break;
            case "hh":
              r = "%d तास";
              break;
            case "d":
              r = "एक दिवस";
              break;
            case "dd":
              r = "%d दिवस";
              break;
            case "M":
              r = "एक महिना";
              break;
            case "MM":
              r = "%d महिने";
              break;
            case "y":
              r = "एक वर्ष";
              break;
            case "yy":
              r = "%d वर्षे";
          }
        else
          switch (n) {
            case "s":
              r = "काही सेकंदां";
              break;
            case "ss":
              r = "%d सेकंदां";
              break;
            case "m":
              r = "एका मिनिटा";
              break;
            case "mm":
              r = "%d मिनिटां";
              break;
            case "h":
              r = "एका तासा";
              break;
            case "hh":
              r = "%d तासां";
              break;
            case "d":
              r = "एका दिवसा";
              break;
            case "dd":
              r = "%d दिवसां";
              break;
            case "M":
              r = "एका महिन्या";
              break;
            case "MM":
              r = "%d महिन्यां";
              break;
            case "y":
              r = "एका वर्षा";
              break;
            case "yy":
              r = "%d वर्षां";
          }
        return r.replace(/%d/i, e);
      }
      e.defineLocale("mr", {
        months:
          "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
            "_"
          ),
        monthsShort:
          "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
          "_"
        ),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm वाजता",
          LTS: "A h:mm:ss वाजता",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm वाजता",
          LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[उद्या] LT",
          nextWeek: "dddd, LT",
          lastDay: "[काल] LT",
          lastWeek: "[मागील] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sमध्ये",
          past: "%sपूर्वी",
          s: a,
          ss: a,
          m: a,
          mm: a,
          h: a,
          hh: a,
          d: a,
          dd: a,
          M: a,
          MM: a,
          y: a,
          yy: a,
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "पहाटे" === t || "सकाळी" === t
              ? e
              : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t
              ? e >= 12
                ? e
                : e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e >= 0 && e < 6
            ? "पहाटे"
            : e < 12
            ? "सकाळी"
            : e < 17
            ? "दुपारी"
            : e < 20
            ? "सायंकाळी"
            : "रात्री";
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ms", {
        months:
          "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
          "_"
        ),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "tengahari" === t
              ? e >= 11
                ? e
                : e + 12
              : "petang" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11
            ? "pagi"
            : e < 15
            ? "tengahari"
            : e < 19
            ? "petang"
            : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ms-my", {
        months:
          "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
          "_"
        ),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "tengahari" === t
              ? e >= 11
                ? e
                : e + 12
              : "petang" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11
            ? "pagi"
            : e < 15
            ? "tengahari"
            : e < 19
            ? "petang"
            : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("mt", {
        months:
          "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
            "_"
          ),
        monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split(
          "_"
        ),
        weekdays:
          "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
            "_"
          ),
        weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
        weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Illum fil-]LT",
          nextDay: "[Għada fil-]LT",
          nextWeek: "dddd [fil-]LT",
          lastDay: "[Il-bieraħ fil-]LT",
          lastWeek: "dddd [li għadda] [fil-]LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "f’ %s",
          past: "%s ilu",
          s: "ftit sekondi",
          ss: "%d sekondi",
          m: "minuta",
          mm: "%d minuti",
          h: "siegħa",
          hh: "%d siegħat",
          d: "ġurnata",
          dd: "%d ġranet",
          M: "xahar",
          MM: "%d xhur",
          y: "sena",
          yy: "%d sni",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "၁",
          2: "၂",
          3: "၃",
          4: "၄",
          5: "၅",
          6: "၆",
          7: "၇",
          8: "၈",
          9: "၉",
          0: "၀",
        },
        n = {
          "၁": "1",
          "၂": "2",
          "၃": "3",
          "၄": "4",
          "၅": "5",
          "၆": "6",
          "၇": "7",
          "၈": "8",
          "၉": "9",
          "၀": "0",
        };
      e.defineLocale("my", {
        months:
          "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
            "_"
          ),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split(
          "_"
        ),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split(
          "_"
        ),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[ယနေ.] LT [မှာ]",
          nextDay: "[မနက်ဖြန်] LT [မှာ]",
          nextWeek: "dddd LT [မှာ]",
          lastDay: "[မနေ.က] LT [မှာ]",
          lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
          sameElse: "L",
        },
        relativeTime: {
          future: "လာမည့် %s မှာ",
          past: "လွန်ခဲ့သော %s က",
          s: "စက္ကန်.အနည်းငယ်",
          ss: "%d စက္ကန့်",
          m: "တစ်မိနစ်",
          mm: "%d မိနစ်",
          h: "တစ်နာရီ",
          hh: "%d နာရီ",
          d: "တစ်ရက်",
          dd: "%d ရက်",
          M: "တစ်လ",
          MM: "%d လ",
          y: "တစ်နှစ်",
          yy: "%d နှစ်",
        },
        preparse: function (e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("nb", {
        months:
          "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
          "_"
        ),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          ss: "%d sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          M: "en måned",
          MM: "%d måneder",
          y: "ett år",
          yy: "%d år",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        n = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        };
      e.defineLocale("ne", {
        months:
          "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
            "_"
          ),
        monthsShort:
          "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split(
          "_"
        ),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "Aको h:mm बजे",
          LTS: "Aको h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, Aको h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "राति" === t
              ? e < 4
                ? e
                : e + 12
              : "बिहान" === t
              ? e
              : "दिउँसो" === t
              ? e >= 10
                ? e
                : e + 12
              : "साँझ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 3
            ? "राति"
            : e < 12
            ? "बिहान"
            : e < 16
            ? "दिउँसो"
            : e < 20
            ? "साँझ"
            : "राति";
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[भोलि] LT",
          nextWeek: "[आउँदो] dddd[,] LT",
          lastDay: "[हिजो] LT",
          lastWeek: "[गएको] dddd[,] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sमा",
          past: "%s अगाडि",
          s: "केही क्षण",
          ss: "%d सेकेण्ड",
          m: "एक मिनेट",
          mm: "%d मिनेट",
          h: "एक घण्टा",
          hh: "%d घण्टा",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महिना",
          MM: "%d महिना",
          y: "एक बर्ष",
          yy: "%d बर्ष",
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        a = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i,
        ],
        r =
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      e.defineLocale("nl", {
        months:
          "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: function (e, a) {
          return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex:
          /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays:
          "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
            "_"
          ),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        a = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i,
        ],
        r =
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      e.defineLocale("nl-be", {
        months:
          "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: function (e, a) {
          return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex:
          /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays:
          "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
            "_"
          ),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("nn", {
        months:
          "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split(
          "_"
        ),
        weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[I dag klokka] LT",
          nextDay: "[I morgon klokka] LT",
          nextWeek: "dddd [klokka] LT",
          lastDay: "[I går klokka] LT",
          lastWeek: "[Føregåande] dddd [klokka] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s sidan",
          s: "nokre sekund",
          ss: "%d sekund",
          m: "eit minutt",
          mm: "%d minutt",
          h: "ein time",
          hh: "%d timar",
          d: "ein dag",
          dd: "%d dagar",
          M: "ein månad",
          MM: "%d månader",
          y: "eit år",
          yy: "%d år",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("oc-lnc", {
        months: {
          standalone:
            "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
              "_"
            ),
          format:
            "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
              "_"
            ),
          isFormat: /D[oD]?(\s)+MMMM/,
        },
        monthsShort:
          "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
          llll: "ddd D MMM YYYY, H:mm",
        },
        calendar: {
          sameDay: "[uèi a] LT",
          nextDay: "[deman a] LT",
          nextWeek: "dddd [a] LT",
          lastDay: "[ièr a] LT",
          lastWeek: "dddd [passat a] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "unas segondas",
          ss: "%d segondas",
          m: "una minuta",
          mm: "%d minutas",
          h: "una ora",
          hh: "%d oras",
          d: "un jorn",
          dd: "%d jorns",
          M: "un mes",
          MM: "%d meses",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n =
            1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
          return ("w" !== t && "W" !== t) || (n = "a"), e + n;
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "੧",
          2: "੨",
          3: "੩",
          4: "੪",
          5: "੫",
          6: "੬",
          7: "੭",
          8: "੮",
          9: "੯",
          0: "੦",
        },
        n = {
          "੧": "1",
          "੨": "2",
          "੩": "3",
          "੪": "4",
          "੫": "5",
          "੬": "6",
          "੭": "7",
          "੮": "8",
          "੯": "9",
          "੦": "0",
        };
      e.defineLocale("pa-in", {
        months:
          "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
            "_"
          ),
        monthsShort:
          "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
            "_"
          ),
        weekdays:
          "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
          LT: "A h:mm ਵਜੇ",
          LTS: "A h:mm:ss ਵਜੇ",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
          LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
        },
        calendar: {
          sameDay: "[ਅਜ] LT",
          nextDay: "[ਕਲ] LT",
          nextWeek: "[ਅਗਲਾ] dddd, LT",
          lastDay: "[ਕਲ] LT",
          lastWeek: "[ਪਿਛਲੇ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ਵਿੱਚ",
          past: "%s ਪਿਛਲੇ",
          s: "ਕੁਝ ਸਕਿੰਟ",
          ss: "%d ਸਕਿੰਟ",
          m: "ਇਕ ਮਿੰਟ",
          mm: "%d ਮਿੰਟ",
          h: "ਇੱਕ ਘੰਟਾ",
          hh: "%d ਘੰਟੇ",
          d: "ਇੱਕ ਦਿਨ",
          dd: "%d ਦਿਨ",
          M: "ਇੱਕ ਮਹੀਨਾ",
          MM: "%d ਮਹੀਨੇ",
          y: "ਇੱਕ ਸਾਲ",
          yy: "%d ਸਾਲ",
        },
        preparse: function (e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "ਰਾਤ" === t
              ? e < 4
                ? e
                : e + 12
              : "ਸਵੇਰ" === t
              ? e
              : "ਦੁਪਹਿਰ" === t
              ? e >= 10
                ? e
                : e + 12
              : "ਸ਼ਾਮ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "ਰਾਤ"
            : e < 10
            ? "ਸਵੇਰ"
            : e < 17
            ? "ਦੁਪਹਿਰ"
            : e < 20
            ? "ਸ਼ਾਮ"
            : "ਰਾਤ";
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
            "_"
          ),
        n =
          "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
            "_"
          );
      function a(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
      }
      function r(e, t, n) {
        var r = e + " ";
        switch (n) {
          case "ss":
            return r + (a(e) ? "sekundy" : "sekund");
          case "m":
            return t ? "minuta" : "minutę";
          case "mm":
            return r + (a(e) ? "minuty" : "minut");
          case "h":
            return t ? "godzina" : "godzinę";
          case "hh":
            return r + (a(e) ? "godziny" : "godzin");
          case "MM":
            return r + (a(e) ? "miesiące" : "miesięcy");
          case "yy":
            return r + (a(e) ? "lata" : "lat");
        }
      }
      e.defineLocale("pl", {
        months: function (e, a) {
          return e
            ? "" === a
              ? "(" + n[e.month()] + "|" + t[e.month()] + ")"
              : /D MMMM/.test(a)
              ? n[e.month()]
              : t[e.month()]
            : t;
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
          "_"
        ),
        weekdays:
          "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
            "_"
          ),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Dziś o] LT",
          nextDay: "[Jutro o] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W niedzielę o] LT";
              case 2:
                return "[We wtorek o] LT";
              case 3:
                return "[W środę o] LT";
              case 6:
                return "[W sobotę o] LT";
              default:
                return "[W] dddd [o] LT";
            }
          },
          lastDay: "[Wczoraj o] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W zeszłą niedzielę o] LT";
              case 3:
                return "[W zeszłą środę o] LT";
              case 6:
                return "[W zeszłą sobotę o] LT";
              default:
                return "[W zeszły] dddd [o] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "%s temu",
          s: "kilka sekund",
          ss: r,
          m: r,
          mm: r,
          h: r,
          hh: r,
          d: "1 dzień",
          dd: "%d dni",
          M: "miesiąc",
          MM: r,
          y: "rok",
          yy: r,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("pt", {
        months:
          "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
            "_"
          ),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
          "_"
        ),
        weekdays:
          "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
            "_"
          ),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day()
              ? "[Último] dddd [às] LT"
              : "[Última] dddd [às] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("pt-br", {
        months:
          "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
            "_"
          ),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
          "_"
        ),
        weekdays:
          "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
            "_"
          ),
        weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
        weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day()
              ? "[Último] dddd [às] LT"
              : "[Última] dddd [às] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "poucos segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n) {
        var a = " ";
        return (
          (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (a = " de "),
          e +
            a +
            {
              ss: "secunde",
              mm: "minute",
              hh: "ore",
              dd: "zile",
              MM: "luni",
              yy: "ani",
            }[n]
        );
      }
      e.defineLocale("ro", {
        months:
          "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
            "_"
          ),
        monthsShort:
          "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[azi la] LT",
          nextDay: "[mâine la] LT",
          nextWeek: "dddd [la] LT",
          lastDay: "[ieri la] LT",
          lastWeek: "[fosta] dddd [la] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "peste %s",
          past: "%s în urmă",
          s: "câteva secunde",
          ss: t,
          m: "un minut",
          mm: t,
          h: "o oră",
          hh: t,
          d: "o zi",
          dd: t,
          M: "o lună",
          MM: t,
          y: "un an",
          yy: t,
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n) {
        var a, r;
        return "m" === n
          ? t
            ? "минута"
            : "минуту"
          : e +
              " " +
              ((a = +e),
              (r = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет",
              }[n].split("_")),
              a % 10 == 1 && a % 100 != 11
                ? r[0]
                : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
                ? r[1]
                : r[2]);
      }
      var n = [
        /^янв/i,
        /^фев/i,
        /^мар/i,
        /^апр/i,
        /^ма[йя]/i,
        /^июн/i,
        /^июл/i,
        /^авг/i,
        /^сен/i,
        /^окт/i,
        /^ноя/i,
        /^дек/i,
      ];
      e.defineLocale("ru", {
        months: {
          format:
            "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
              "_"
            ),
          standalone:
            "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
              "_"
            ),
        },
        monthsShort: {
          format:
            "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
              "_"
            ),
          standalone:
            "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
              "_"
            ),
        },
        weekdays: {
          standalone:
            "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
              "_"
            ),
          format:
            "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
              "_"
            ),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        monthsRegex:
          /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex:
          /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex:
          /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex:
          /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., H:mm",
          LLLL: "dddd, D MMMM YYYY г., H:mm",
        },
        calendar: {
          sameDay: "[Сегодня, в] LT",
          nextDay: "[Завтра, в] LT",
          lastDay: "[Вчера, в] LT",
          nextWeek: function (e) {
            if (e.week() === this.week())
              return 2 === this.day()
                ? "[Во] dddd, [в] LT"
                : "[В] dddd, [в] LT";
            switch (this.day()) {
              case 0:
                return "[В следующее] dddd, [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В следующий] dddd, [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В следующую] dddd, [в] LT";
            }
          },
          lastWeek: function (e) {
            if (e.week() === this.week())
              return 2 === this.day()
                ? "[Во] dddd, [в] LT"
                : "[В] dddd, [в] LT";
            switch (this.day()) {
              case 0:
                return "[В прошлое] dddd, [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В прошлый] dddd, [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В прошлую] dddd, [в] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "через %s",
          past: "%s назад",
          s: "несколько секунд",
          ss: t,
          m: t,
          mm: t,
          h: "час",
          hh: t,
          d: "день",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t,
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
          return /^(дня|вечера)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
              return e + "-й";
            case "D":
              return e + "-го";
            case "w":
            case "W":
              return e + "-я";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = [
          "جنوري",
          "فيبروري",
          "مارچ",
          "اپريل",
          "مئي",
          "جون",
          "جولاءِ",
          "آگسٽ",
          "سيپٽمبر",
          "آڪٽوبر",
          "نومبر",
          "ڊسمبر",
        ],
        n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
      e.defineLocale("sd", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm",
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام";
        },
        calendar: {
          sameDay: "[اڄ] LT",
          nextDay: "[سڀاڻي] LT",
          nextWeek: "dddd [اڳين هفتي تي] LT",
          lastDay: "[ڪالهه] LT",
          lastWeek: "[گزريل هفتي] dddd [تي] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s پوء",
          past: "%s اڳ",
          s: "چند سيڪنڊ",
          ss: "%d سيڪنڊ",
          m: "هڪ منٽ",
          mm: "%d منٽ",
          h: "هڪ ڪلاڪ",
          hh: "%d ڪلاڪ",
          d: "هڪ ڏينهن",
          dd: "%d ڏينهن",
          M: "هڪ مهينو",
          MM: "%d مهينا",
          y: "هڪ سال",
          yy: "%d سال",
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("se", {
        months:
          "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
            "_"
          ),
        monthsShort:
          "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
            "_"
          ),
        weekdays:
          "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
            "_"
          ),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "MMMM D. [b.] YYYY",
          LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
          LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
        },
        calendar: {
          sameDay: "[otne ti] LT",
          nextDay: "[ihttin ti] LT",
          nextWeek: "dddd [ti] LT",
          lastDay: "[ikte ti] LT",
          lastWeek: "[ovddit] dddd [ti] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s geažes",
          past: "maŋit %s",
          s: "moadde sekunddat",
          ss: "%d sekunddat",
          m: "okta minuhta",
          mm: "%d minuhtat",
          h: "okta diimmu",
          hh: "%d diimmut",
          d: "okta beaivi",
          dd: "%d beaivvit",
          M: "okta mánnu",
          MM: "%d mánut",
          y: "okta jahki",
          yy: "%d jagit",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("si", {
        months:
          "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
            "_"
          ),
        monthsShort:
          "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays:
          "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
            "_"
          ),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "a h:mm",
          LTS: "a h:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY MMMM D",
          LLL: "YYYY MMMM D, a h:mm",
          LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
        },
        calendar: {
          sameDay: "[අද] LT[ට]",
          nextDay: "[හෙට] LT[ට]",
          nextWeek: "dddd LT[ට]",
          lastDay: "[ඊයේ] LT[ට]",
          lastWeek: "[පසුගිය] dddd LT[ට]",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sකින්",
          past: "%sකට පෙර",
          s: "තත්පර කිහිපය",
          ss: "තත්පර %d",
          m: "මිනිත්තුව",
          mm: "මිනිත්තු %d",
          h: "පැය",
          hh: "පැය %d",
          d: "දිනය",
          dd: "දින %d",
          M: "මාසය",
          MM: "මාස %d",
          y: "වසර",
          yy: "වසර %d",
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
          return e + " වැනි";
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function (e) {
          return "ප.ව." === e || "පස් වරු" === e;
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "ප.ව." : "පස් වරු") : n ? "පෙ.ව." : "පෙර වරු";
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t =
          "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
            "_"
          ),
        n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
      function a(e) {
        return e > 1 && e < 5;
      }
      function r(e, t, n, r) {
        var s = e + " ";
        switch (n) {
          case "s":
            return t || r ? "pár sekúnd" : "pár sekundami";
          case "ss":
            return t || r ? s + (a(e) ? "sekundy" : "sekúnd") : s + "sekundami";
          case "m":
            return t ? "minúta" : r ? "minútu" : "minútou";
          case "mm":
            return t || r ? s + (a(e) ? "minúty" : "minút") : s + "minútami";
          case "h":
            return t ? "hodina" : r ? "hodinu" : "hodinou";
          case "hh":
            return t || r ? s + (a(e) ? "hodiny" : "hodín") : s + "hodinami";
          case "d":
            return t || r ? "deň" : "dňom";
          case "dd":
            return t || r ? s + (a(e) ? "dni" : "dní") : s + "dňami";
          case "M":
            return t || r ? "mesiac" : "mesiacom";
          case "MM":
            return t || r
              ? s + (a(e) ? "mesiace" : "mesiacov")
              : s + "mesiacmi";
          case "y":
            return t || r ? "rok" : "rokom";
          case "yy":
            return t || r ? s + (a(e) ? "roky" : "rokov") : s + "rokmi";
        }
      }
      e.defineLocale("sk", {
        months: t,
        monthsShort: n,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
          "_"
        ),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[dnes o] LT",
          nextDay: "[zajtra o] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v nedeľu o] LT";
              case 1:
              case 2:
                return "[v] dddd [o] LT";
              case 3:
                return "[v stredu o] LT";
              case 4:
                return "[vo štvrtok o] LT";
              case 5:
                return "[v piatok o] LT";
              case 6:
                return "[v sobotu o] LT";
            }
          },
          lastDay: "[včera o] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulú nedeľu o] LT";
              case 1:
              case 2:
                return "[minulý] dddd [o] LT";
              case 3:
                return "[minulú stredu o] LT";
              case 4:
              case 5:
                return "[minulý] dddd [o] LT";
              case 6:
                return "[minulú sobotu o] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "pred %s",
          s: r,
          ss: r,
          m: r,
          mm: r,
          h: r,
          hh: r,
          d: r,
          dd: r,
          M: r,
          MM: r,
          y: r,
          yy: r,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = e + " ";
        switch (n) {
          case "s":
            return t || a ? "nekaj sekund" : "nekaj sekundami";
          case "ss":
            return (r +=
              1 === e
                ? t
                  ? "sekundo"
                  : "sekundi"
                : 2 === e
                ? t || a
                  ? "sekundi"
                  : "sekundah"
                : e < 5
                ? t || a
                  ? "sekunde"
                  : "sekundah"
                : "sekund");
          case "m":
            return t ? "ena minuta" : "eno minuto";
          case "mm":
            return (r +=
              1 === e
                ? t
                  ? "minuta"
                  : "minuto"
                : 2 === e
                ? t || a
                  ? "minuti"
                  : "minutama"
                : e < 5
                ? t || a
                  ? "minute"
                  : "minutami"
                : t || a
                ? "minut"
                : "minutami");
          case "h":
            return t ? "ena ura" : "eno uro";
          case "hh":
            return (r +=
              1 === e
                ? t
                  ? "ura"
                  : "uro"
                : 2 === e
                ? t || a
                  ? "uri"
                  : "urama"
                : e < 5
                ? t || a
                  ? "ure"
                  : "urami"
                : t || a
                ? "ur"
                : "urami");
          case "d":
            return t || a ? "en dan" : "enim dnem";
          case "dd":
            return (r +=
              1 === e
                ? t || a
                  ? "dan"
                  : "dnem"
                : 2 === e
                ? t || a
                  ? "dni"
                  : "dnevoma"
                : t || a
                ? "dni"
                : "dnevi");
          case "M":
            return t || a ? "en mesec" : "enim mesecem";
          case "MM":
            return (r +=
              1 === e
                ? t || a
                  ? "mesec"
                  : "mesecem"
                : 2 === e
                ? t || a
                  ? "meseca"
                  : "mesecema"
                : e < 5
                ? t || a
                  ? "mesece"
                  : "meseci"
                : t || a
                ? "mesecev"
                : "meseci");
          case "y":
            return t || a ? "eno leto" : "enim letom";
          case "yy":
            return (r +=
              1 === e
                ? t || a
                  ? "leto"
                  : "letom"
                : 2 === e
                ? t || a
                  ? "leti"
                  : "letoma"
                : e < 5
                ? t || a
                  ? "leta"
                  : "leti"
                : t || a
                ? "let"
                : "leti");
        }
      }
      e.defineLocale("sl", {
        months:
          "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split(
          "_"
        ),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD. MM. YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danes ob] LT",
          nextDay: "[jutri ob] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v] [nedeljo] [ob] LT";
              case 3:
                return "[v] [sredo] [ob] LT";
              case 6:
                return "[v] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[v] dddd [ob] LT";
            }
          },
          lastDay: "[včeraj ob] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[prejšnjo] [nedeljo] [ob] LT";
              case 3:
                return "[prejšnjo] [sredo] [ob] LT";
              case 6:
                return "[prejšnjo] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prejšnji] dddd [ob] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "čez %s",
          past: "pred %s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("sq", {
        months:
          "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
            "_"
          ),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split(
          "_"
        ),
        weekdays:
          "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
            "_"
          ),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function (e) {
          return "M" === e.charAt(0);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "PD" : "MD";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Sot në] LT",
          nextDay: "[Nesër në] LT",
          nextWeek: "dddd [në] LT",
          lastDay: "[Dje në] LT",
          lastWeek: "dddd [e kaluar në] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "në %s",
          past: "%s më parë",
          s: "disa sekonda",
          ss: "%d sekonda",
          m: "një minutë",
          mm: "%d minuta",
          h: "një orë",
          hh: "%d orë",
          d: "një ditë",
          dd: "%d ditë",
          M: "një muaj",
          MM: "%d muaj",
          y: "një vit",
          yy: "%d vite",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["sekunda", "sekunde", "sekundi"],
          m: ["jedan minut", "jedne minute"],
          mm: ["minut", "minute", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mesec", "meseca", "meseci"],
          yy: ["godina", "godine", "godina"],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, a) {
          var r = t.words[a];
          return 1 === a.length
            ? n
              ? r[0]
              : r[1]
            : e + " " + t.correctGrammaticalCase(e, r);
        },
      };
      e.defineLocale("sr", {
        months:
          "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split(
          "_"
        ),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedelju] [u] LT";
              case 3:
                return "[u] [sredu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[juče u] LT",
          lastWeek: function () {
            return [
              "[prošle] [nedelje] [u] LT",
              "[prošlog] [ponedeljka] [u] LT",
              "[prošlog] [utorka] [u] LT",
              "[prošle] [srede] [u] LT",
              "[prošlog] [četvrtka] [u] LT",
              "[prošlog] [petka] [u] LT",
              "[prošle] [subote] [u] LT",
            ][this.day()];
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "pre %s",
          s: "nekoliko sekundi",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "dan",
          dd: t.translate,
          M: "mesec",
          MM: t.translate,
          y: "godinu",
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        words: {
          ss: ["секунда", "секунде", "секунди"],
          m: ["један минут", "једне минуте"],
          mm: ["минут", "минуте", "минута"],
          h: ["један сат", "једног сата"],
          hh: ["сат", "сата", "сати"],
          dd: ["дан", "дана", "дана"],
          MM: ["месец", "месеца", "месеци"],
          yy: ["година", "године", "година"],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, a) {
          var r = t.words[a];
          return 1 === a.length
            ? n
              ? r[0]
              : r[1]
            : e + " " + t.correctGrammaticalCase(e, r);
        },
      };
      e.defineLocale("sr-cyrl", {
        months:
          "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
            "_"
          ),
        monthsShort:
          "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: !0,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split(
          "_"
        ),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[данас у] LT",
          nextDay: "[сутра у] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[у] [недељу] [у] LT";
              case 3:
                return "[у] [среду] [у] LT";
              case 6:
                return "[у] [суботу] [у] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[у] dddd [у] LT";
            }
          },
          lastDay: "[јуче у] LT",
          lastWeek: function () {
            return [
              "[прошле] [недеље] [у] LT",
              "[прошлог] [понедељка] [у] LT",
              "[прошлог] [уторка] [у] LT",
              "[прошле] [среде] [у] LT",
              "[прошлог] [четвртка] [у] LT",
              "[прошлог] [петка] [у] LT",
              "[прошле] [суботе] [у] LT",
            ][this.day()];
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "за %s",
          past: "пре %s",
          s: "неколико секунди",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "дан",
          dd: t.translate,
          M: "месец",
          MM: t.translate,
          y: "годину",
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ss", {
        months:
          "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
            "_"
          ),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split(
          "_"
        ),
        weekdays:
          "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
            "_"
          ),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Namuhla nga] LT",
          nextDay: "[Kusasa nga] LT",
          nextWeek: "dddd [nga] LT",
          lastDay: "[Itolo nga] LT",
          lastWeek: "dddd [leliphelile] [nga] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "nga %s",
          past: "wenteka nga %s",
          s: "emizuzwana lomcane",
          ss: "%d mzuzwana",
          m: "umzuzu",
          mm: "%d emizuzu",
          h: "lihora",
          hh: "%d emahora",
          d: "lilanga",
          dd: "%d emalanga",
          M: "inyanga",
          MM: "%d tinyanga",
          y: "umnyaka",
          yy: "%d iminyaka",
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function (e, t, n) {
          return e < 11
            ? "ekuseni"
            : e < 15
            ? "emini"
            : e < 19
            ? "entsambama"
            : "ebusuku";
        },
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "ekuseni" === t
              ? e
              : "emini" === t
              ? e >= 11
                ? e
                : e + 12
              : "entsambama" === t || "ebusuku" === t
              ? 0 === e
                ? 0
                : e + 12
              : void 0
          );
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("sv", {
        months:
          "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
          "_"
        ),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Igår] LT",
          nextWeek: "[På] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "för %s sedan",
          s: "några sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en månad",
          MM: "%d månader",
          y: "ett år",
          yy: "%d år",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("sw", {
        months:
          "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays:
          "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
            "_"
          ),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "hh:mm A",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[leo saa] LT",
          nextDay: "[kesho saa] LT",
          nextWeek: "[wiki ijayo] dddd [saat] LT",
          lastDay: "[jana] LT",
          lastWeek: "[wiki iliyopita] dddd [saat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s baadaye",
          past: "tokea %s",
          s: "hivi punde",
          ss: "sekunde %d",
          m: "dakika moja",
          mm: "dakika %d",
          h: "saa limoja",
          hh: "masaa %d",
          d: "siku moja",
          dd: "siku %d",
          M: "mwezi mmoja",
          MM: "miezi %d",
          y: "mwaka mmoja",
          yy: "miaka %d",
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
          1: "௧",
          2: "௨",
          3: "௩",
          4: "௪",
          5: "௫",
          6: "௬",
          7: "௭",
          8: "௮",
          9: "௯",
          0: "௦",
        },
        n = {
          "௧": "1",
          "௨": "2",
          "௩": "3",
          "௪": "4",
          "௫": "5",
          "௬": "6",
          "௭": "7",
          "௮": "8",
          "௯": "9",
          "௦": "0",
        };
      e.defineLocale("ta", {
        months:
          "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
            "_"
          ),
        monthsShort:
          "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
            "_"
          ),
        weekdays:
          "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
            "_"
          ),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split(
          "_"
        ),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, HH:mm",
          LLLL: "dddd, D MMMM YYYY, HH:mm",
        },
        calendar: {
          sameDay: "[இன்று] LT",
          nextDay: "[நாளை] LT",
          nextWeek: "dddd, LT",
          lastDay: "[நேற்று] LT",
          lastWeek: "[கடந்த வாரம்] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s இல்",
          past: "%s முன்",
          s: "ஒரு சில விநாடிகள்",
          ss: "%d விநாடிகள்",
          m: "ஒரு நிமிடம்",
          mm: "%d நிமிடங்கள்",
          h: "ஒரு மணி நேரம்",
          hh: "%d மணி நேரம்",
          d: "ஒரு நாள்",
          dd: "%d நாட்கள்",
          M: "ஒரு மாதம்",
          MM: "%d மாதங்கள்",
          y: "ஒரு வருடம்",
          yy: "%d ஆண்டுகள்",
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function (e) {
          return e + "வது";
        },
        preparse: function (e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (e, t, n) {
          return e < 2
            ? " யாமம்"
            : e < 6
            ? " வைகறை"
            : e < 10
            ? " காலை"
            : e < 14
            ? " நண்பகல்"
            : e < 18
            ? " எற்பாடு"
            : e < 22
            ? " மாலை"
            : " யாமம்";
        },
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "யாமம்" === t
              ? e < 2
                ? e
                : e + 12
              : "வைகறை" === t || "காலை" === t || ("நண்பகல்" === t && e >= 10)
              ? e
              : e + 12
          );
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("te", {
        months:
          "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
            "_"
          ),
        monthsShort:
          "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
            "_"
          ),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
          sameDay: "[నేడు] LT",
          nextDay: "[రేపు] LT",
          nextWeek: "dddd, LT",
          lastDay: "[నిన్న] LT",
          lastWeek: "[గత] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s లో",
          past: "%s క్రితం",
          s: "కొన్ని క్షణాలు",
          ss: "%d సెకన్లు",
          m: "ఒక నిమిషం",
          mm: "%d నిమిషాలు",
          h: "ఒక గంట",
          hh: "%d గంటలు",
          d: "ఒక రోజు",
          dd: "%d రోజులు",
          M: "ఒక నెల",
          MM: "%d నెలలు",
          y: "ఒక సంవత్సరం",
          yy: "%d సంవత్సరాలు",
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "రాత్రి" === t
              ? e < 4
                ? e
                : e + 12
              : "ఉదయం" === t
              ? e
              : "మధ్యాహ్నం" === t
              ? e >= 10
                ? e
                : e + 12
              : "సాయంత్రం" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "రాత్రి"
            : e < 10
            ? "ఉదయం"
            : e < 17
            ? "మధ్యాహ్నం"
            : e < 20
            ? "సాయంత్రం"
            : "రాత్రి";
        },
        week: { dow: 0, doy: 6 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("tet", {
        months:
          "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
            "_"
          ),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
          "_"
        ),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Ohin iha] LT",
          nextDay: "[Aban iha] LT",
          nextWeek: "dddd [iha] LT",
          lastDay: "[Horiseik iha] LT",
          lastWeek: "dddd [semana kotuk] [iha] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "iha %s",
          past: "%s liuba",
          s: "segundu balun",
          ss: "segundu %d",
          m: "minutu ida",
          mm: "minutu %d",
          h: "oras ida",
          hh: "oras %d",
          d: "loron ida",
          dd: "loron %d",
          M: "fulan ida",
          MM: "fulan %d",
          y: "tinan ida",
          yy: "tinan %d",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        0: "-ум",
        1: "-ум",
        2: "-юм",
        3: "-юм",
        4: "-ум",
        5: "-ум",
        6: "-ум",
        7: "-ум",
        8: "-ум",
        9: "-ум",
        10: "-ум",
        12: "-ум",
        13: "-ум",
        20: "-ум",
        30: "-юм",
        40: "-ум",
        50: "-ум",
        60: "-ум",
        70: "-ум",
        80: "-ум",
        90: "-ум",
        100: "-ум",
      };
      e.defineLocale("tg", {
        months:
          "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
            "_"
          ),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
          "_"
        ),
        weekdays:
          "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
        weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
        weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Имрӯз соати] LT",
          nextDay: "[Пагоҳ соати] LT",
          lastDay: "[Дирӯз соати] LT",
          nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
          lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "баъди %s",
          past: "%s пеш",
          s: "якчанд сония",
          m: "як дақиқа",
          mm: "%d дақиқа",
          h: "як соат",
          hh: "%d соат",
          d: "як рӯз",
          dd: "%d рӯз",
          M: "як моҳ",
          MM: "%d моҳ",
          y: "як сол",
          yy: "%d сол",
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "шаб" === t
              ? e < 4
                ? e
                : e + 12
              : "субҳ" === t
              ? e
              : "рӯз" === t
              ? e >= 11
                ? e
                : e + 12
              : "бегоҳ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "шаб"
            : e < 11
            ? "субҳ"
            : e < 16
            ? "рӯз"
            : e < 19
            ? "бегоҳ"
            : "шаб";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("th", {
        months:
          "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
            "_"
          ),
        monthsShort:
          "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY เวลา H:mm",
          LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
          return "หลังเที่ยง" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
        },
        calendar: {
          sameDay: "[วันนี้ เวลา] LT",
          nextDay: "[พรุ่งนี้ เวลา] LT",
          nextWeek: "dddd[หน้า เวลา] LT",
          lastDay: "[เมื่อวานนี้ เวลา] LT",
          lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "อีก %s",
          past: "%sที่แล้ว",
          s: "ไม่กี่วินาที",
          ss: "%d วินาที",
          m: "1 นาที",
          mm: "%d นาที",
          h: "1 ชั่วโมง",
          hh: "%d ชั่วโมง",
          d: "1 วัน",
          dd: "%d วัน",
          M: "1 เดือน",
          MM: "%d เดือน",
          y: "1 ปี",
          yy: "%d ปี",
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        1: "'inji",
        5: "'inji",
        8: "'inji",
        70: "'inji",
        80: "'inji",
        2: "'nji",
        7: "'nji",
        20: "'nji",
        50: "'nji",
        3: "'ünji",
        4: "'ünji",
        100: "'ünji",
        6: "'njy",
        9: "'unjy",
        10: "'unjy",
        30: "'unjy",
        60: "'ynjy",
        90: "'ynjy",
      };
      e.defineLocale("tk", {
        months:
          "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
            "_"
          ),
        monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split(
          "_"
        ),
        weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split(
          "_"
        ),
        weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
        weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[bugün sagat] LT",
          nextDay: "[ertir sagat] LT",
          nextWeek: "[indiki] dddd [sagat] LT",
          lastDay: "[düýn] LT",
          lastWeek: "[geçen] dddd [sagat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s soň",
          past: "%s öň",
          s: "birnäçe sekunt",
          m: "bir minut",
          mm: "%d minut",
          h: "bir sagat",
          hh: "%d sagat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir aý",
          MM: "%d aý",
          y: "bir ýyl",
          yy: "%d ýyl",
        },
        ordinal: function (e, n) {
          switch (n) {
            case "d":
            case "D":
            case "Do":
            case "DD":
              return e;
            default:
              if (0 === e) return e + "'unjy";
              var a = e % 10;
              return e + (t[a] || t[(e % 100) - a] || t[e >= 100 ? 100 : null]);
          }
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("tl-ph", {
        months:
          "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
            "_"
          ),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
          "_"
        ),
        weekdays:
          "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm",
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L",
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon",
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
      function n(e, n, a, r) {
        var s = (function (e) {
          var n = Math.floor((e % 1e3) / 100),
            a = Math.floor((e % 100) / 10),
            r = e % 10,
            s = "";
          return (
            n > 0 && (s += t[n] + "vatlh"),
            a > 0 && (s += ("" !== s ? " " : "") + t[a] + "maH"),
            r > 0 && (s += ("" !== s ? " " : "") + t[r]),
            "" === s ? "pagh" : s
          );
        })(e);
        switch (a) {
          case "ss":
            return s + " lup";
          case "mm":
            return s + " tup";
          case "hh":
            return s + " rep";
          case "dd":
            return s + " jaj";
          case "MM":
            return s + " jar";
          case "yy":
            return s + " DIS";
        }
      }
      e.defineLocale("tlh", {
        months:
          "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
            "_"
          ),
        monthsShort:
          "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort:
          "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin:
          "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[DaHjaj] LT",
          nextDay: "[wa’leS] LT",
          nextWeek: "LLL",
          lastDay: "[wa’Hu’] LT",
          lastWeek: "LLL",
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            var t = e;
            return (t =
              -1 !== e.indexOf("jaj")
                ? t.slice(0, -3) + "leS"
                : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "waQ"
                : -1 !== e.indexOf("DIS")
                ? t.slice(0, -3) + "nem"
                : t + " pIq");
          },
          past: function (e) {
            var t = e;
            return (t =
              -1 !== e.indexOf("jaj")
                ? t.slice(0, -3) + "Hu’"
                : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "wen"
                : -1 !== e.indexOf("DIS")
                ? t.slice(0, -3) + "ben"
                : t + " ret");
          },
          s: "puS lup",
          ss: n,
          m: "wa’ tup",
          mm: n,
          h: "wa’ rep",
          hh: n,
          d: "wa’ jaj",
          dd: n,
          M: "wa’ jar",
          MM: n,
          y: "wa’ DIS",
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı",
      };
      e.defineLocale("tr", {
        months:
          "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
            "_"
          ),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split(
          "_"
        ),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split(
          "_"
        ),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        meridiem: function (e, t, n) {
          return e < 12 ? (n ? "öö" : "ÖÖ") : n ? "ös" : "ÖS";
        },
        meridiemParse: /öö|ÖÖ|ös|ÖS/,
        isPM: function (e) {
          return "ös" === e || "ÖS" === e;
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[yarın saat] LT",
          nextWeek: "[gelecek] dddd [saat] LT",
          lastDay: "[dün] LT",
          lastWeek: "[geçen] dddd [saat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s önce",
          s: "birkaç saniye",
          ss: "%d saniye",
          m: "bir dakika",
          mm: "%d dakika",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir yıl",
          yy: "%d yıl",
        },
        ordinal: function (e, n) {
          switch (n) {
            case "d":
            case "D":
            case "Do":
            case "DD":
              return e;
            default:
              if (0 === e) return e + "'ıncı";
              var a = e % 10;
              return e + (t[a] || t[(e % 100) - a] || t[e >= 100 ? 100 : null]);
          }
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n, a) {
        var r = {
          s: ["viensas secunds", "'iensas secunds"],
          ss: [e + " secunds", e + " secunds"],
          m: ["'n míut", "'iens míut"],
          mm: [e + " míuts", e + " míuts"],
          h: ["'n þora", "'iensa þora"],
          hh: [e + " þoras", e + " þoras"],
          d: ["'n ziua", "'iensa ziua"],
          dd: [e + " ziuas", e + " ziuas"],
          M: ["'n mes", "'iens mes"],
          MM: [e + " mesen", e + " mesen"],
          y: ["'n ar", "'iens ar"],
          yy: [e + " ars", e + " ars"],
        };
        return a || t ? r[n][0] : r[n][1];
      }
      e.defineLocale("tzl", {
        months:
          "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
            "_"
          ),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split(
          "_"
        ),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split(
          "_"
        ),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM [dallas] YYYY",
          LLL: "D. MMMM [dallas] YYYY HH.mm",
          LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function (e) {
          return "d'o" === e.toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
        },
        calendar: {
          sameDay: "[oxhi à] LT",
          nextDay: "[demà à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[ieiri à] LT",
          lastWeek: "[sür el] dddd [lasteu à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "osprei %s",
          past: "ja%s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("tzm", {
        months:
          "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
            "_"
          ),
        monthsShort:
          "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
            "_"
          ),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
          "_"
        ),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
          "_"
        ),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
          nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
          nextWeek: "dddd [ⴴ] LT",
          lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
          lastWeek: "dddd [ⴴ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
          past: "ⵢⴰⵏ %s",
          s: "ⵉⵎⵉⴽ",
          ss: "%d ⵉⵎⵉⴽ",
          m: "ⵎⵉⵏⵓⴺ",
          mm: "%d ⵎⵉⵏⵓⴺ",
          h: "ⵙⴰⵄⴰ",
          hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
          d: "ⴰⵙⵙ",
          dd: "%d oⵙⵙⴰⵏ",
          M: "ⴰⵢoⵓⵔ",
          MM: "%d ⵉⵢⵢⵉⵔⵏ",
          y: "ⴰⵙⴳⴰⵙ",
          yy: "%d ⵉⵙⴳⴰⵙⵏ",
        },
        week: { dow: 6, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("tzm-latn", {
        months:
          "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
            "_"
          ),
        monthsShort:
          "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
            "_"
          ),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
          "_"
        ),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
          "_"
        ),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[asdkh g] LT",
          nextDay: "[aska g] LT",
          nextWeek: "dddd [g] LT",
          lastDay: "[assant g] LT",
          lastWeek: "dddd [g] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dadkh s yan %s",
          past: "yan %s",
          s: "imik",
          ss: "%d imik",
          m: "minuḍ",
          mm: "%d minuḍ",
          h: "saɛa",
          hh: "%d tassaɛin",
          d: "ass",
          dd: "%d ossan",
          M: "ayowr",
          MM: "%d iyyirn",
          y: "asgas",
          yy: "%d isgasn",
        },
        week: { dow: 6, doy: 12 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("ug-cn", {
        months:
          "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
            "_"
          ),
        monthsShort:
          "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
            "_"
          ),
        weekdays:
          "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
        weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
          LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
          LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t
              ? e
              : "چۈشتىن كېيىن" === t || "كەچ" === t
              ? e + 12
              : e >= 11
              ? e
              : e + 12
          );
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600
            ? "يېرىم كېچە"
            : a < 900
            ? "سەھەر"
            : a < 1130
            ? "چۈشتىن بۇرۇن"
            : a < 1230
            ? "چۈش"
            : a < 1800
            ? "چۈشتىن كېيىن"
            : "كەچ";
        },
        calendar: {
          sameDay: "[بۈگۈن سائەت] LT",
          nextDay: "[ئەتە سائەت] LT",
          nextWeek: "[كېلەركى] dddd [سائەت] LT",
          lastDay: "[تۆنۈگۈن] LT",
          lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s كېيىن",
          past: "%s بۇرۇن",
          s: "نەچچە سېكونت",
          ss: "%d سېكونت",
          m: "بىر مىنۇت",
          mm: "%d مىنۇت",
          h: "بىر سائەت",
          hh: "%d سائەت",
          d: "بىر كۈن",
          dd: "%d كۈن",
          M: "بىر ئاي",
          MM: "%d ئاي",
          y: "بىر يىل",
          yy: "%d يىل",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "-كۈنى";
            case "w":
            case "W":
              return e + "-ھەپتە";
            default:
              return e;
          }
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      function t(e, t, n) {
        var a, r;
        return "m" === n
          ? t
            ? "хвилина"
            : "хвилину"
          : "h" === n
          ? t
            ? "година"
            : "годину"
          : e +
            " " +
            ((a = +e),
            (r = {
              ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
              mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
              hh: t ? "година_години_годин" : "годину_години_годин",
              dd: "день_дні_днів",
              MM: "місяць_місяці_місяців",
              yy: "рік_роки_років",
            }[n].split("_")),
            a % 10 == 1 && a % 100 != 11
              ? r[0]
              : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
              ? r[1]
              : r[2]);
      }
      function n(e) {
        return function () {
          return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
        };
      }
      e.defineLocale("uk", {
        months: {
          format:
            "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
              "_"
            ),
          standalone:
            "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
              "_"
            ),
        },
        monthsShort:
          "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function (e, t) {
          var n = {
            nominative:
              "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
                "_"
              ),
            accusative:
              "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
                "_"
              ),
            genitive:
              "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
                "_"
              ),
          };
          return !0 === e
            ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1))
            : e
            ? n[
                /(\[[ВвУу]\]) ?dddd/.test(t)
                  ? "accusative"
                  : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
                  ? "genitive"
                  : "nominative"
              ][e.day()]
            : n.nominative;
        },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY р.",
          LLL: "D MMMM YYYY р., HH:mm",
          LLLL: "dddd, D MMMM YYYY р., HH:mm",
        },
        calendar: {
          sameDay: n("[Сьогодні "),
          nextDay: n("[Завтра "),
          lastDay: n("[Вчора "),
          nextWeek: n("[У] dddd ["),
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return n("[Минулої] dddd [").call(this);
              case 1:
              case 2:
              case 4:
                return n("[Минулого] dddd [").call(this);
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "за %s",
          past: "%s тому",
          s: "декілька секунд",
          ss: t,
          m: t,
          mm: t,
          h: "годину",
          hh: t,
          d: "день",
          dd: t,
          M: "місяць",
          MM: t,
          y: "рік",
          yy: t,
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
          return /^(дня|вечора)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return e + "-й";
            case "D":
              return e + "-го";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      var t = [
          "جنوری",
          "فروری",
          "مارچ",
          "اپریل",
          "مئی",
          "جون",
          "جولائی",
          "اگست",
          "ستمبر",
          "اکتوبر",
          "نومبر",
          "دسمبر",
        ],
        n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
      e.defineLocale("ur", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm",
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام";
        },
        calendar: {
          sameDay: "[آج بوقت] LT",
          nextDay: "[کل بوقت] LT",
          nextWeek: "dddd [بوقت] LT",
          lastDay: "[گذشتہ روز بوقت] LT",
          lastWeek: "[گذشتہ] dddd [بوقت] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s بعد",
          past: "%s قبل",
          s: "چند سیکنڈ",
          ss: "%d سیکنڈ",
          m: "ایک منٹ",
          mm: "%d منٹ",
          h: "ایک گھنٹہ",
          hh: "%d گھنٹے",
          d: "ایک دن",
          dd: "%d دن",
          M: "ایک ماہ",
          MM: "%d ماہ",
          y: "ایک سال",
          yy: "%d سال",
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("uz", {
        months:
          "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
            "_"
          ),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
          "_"
        ),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split(
          "_"
        ),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm",
        },
        calendar: {
          sameDay: "[Бугун соат] LT [да]",
          nextDay: "[Эртага] LT [да]",
          nextWeek: "dddd [куни соат] LT [да]",
          lastDay: "[Кеча соат] LT [да]",
          lastWeek: "[Утган] dddd [куни соат] LT [да]",
          sameElse: "L",
        },
        relativeTime: {
          future: "Якин %s ичида",
          past: "Бир неча %s олдин",
          s: "фурсат",
          ss: "%d фурсат",
          m: "бир дакика",
          mm: "%d дакика",
          h: "бир соат",
          hh: "%d соат",
          d: "бир кун",
          dd: "%d кун",
          M: "бир ой",
          MM: "%d ой",
          y: "бир йил",
          yy: "%d йил",
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("uz-latn", {
        months:
          "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
            "_"
          ),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split(
          "_"
        ),
        weekdays:
          "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
            "_"
          ),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm",
        },
        calendar: {
          sameDay: "[Bugun soat] LT [da]",
          nextDay: "[Ertaga] LT [da]",
          nextWeek: "dddd [kuni soat] LT [da]",
          lastDay: "[Kecha soat] LT [da]",
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: "L",
        },
        relativeTime: {
          future: "Yaqin %s ichida",
          past: "Bir necha %s oldin",
          s: "soniya",
          ss: "%d soniya",
          m: "bir daqiqa",
          mm: "%d daqiqa",
          h: "bir soat",
          hh: "%d soat",
          d: "bir kun",
          dd: "%d kun",
          M: "bir oy",
          MM: "%d oy",
          y: "bir yil",
          yy: "%d yil",
        },
        week: { dow: 1, doy: 7 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("vi", {
        months:
          "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
            "_"
          ),
        monthsShort:
          "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (e) {
          return /^ch$/i.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [năm] YYYY",
          LLL: "D MMMM [năm] YYYY HH:mm",
          LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hôm nay lúc] LT",
          nextDay: "[Ngày mai lúc] LT",
          nextWeek: "dddd [tuần tới lúc] LT",
          lastDay: "[Hôm qua lúc] LT",
          lastWeek: "dddd [tuần trước lúc] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s tới",
          past: "%s trước",
          s: "vài giây",
          ss: "%d giây",
          m: "một phút",
          mm: "%d phút",
          h: "một giờ",
          hh: "%d giờ",
          d: "một ngày",
          dd: "%d ngày",
          M: "một tháng",
          MM: "%d tháng",
          y: "một năm",
          yy: "%d năm",
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("x-pseudo", {
        months:
          "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
            "_"
          ),
        monthsShort:
          "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
            "_"
          ),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[T~ódá~ý át] LT",
          nextDay: "[T~ómó~rró~w át] LT",
          nextWeek: "dddd [át] LT",
          lastDay: "[Ý~ést~érdá~ý át] LT",
          lastWeek: "[L~ást] dddd [át] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "í~ñ %s",
          past: "%s á~gó",
          s: "á ~féw ~sécó~ñds",
          ss: "%d s~écóñ~ds",
          m: "á ~míñ~úté",
          mm: "%d m~íñú~tés",
          h: "á~ñ hó~úr",
          hh: "%d h~óúrs",
          d: "á ~dáý",
          dd: "%d d~áýs",
          M: "á ~móñ~th",
          MM: "%d m~óñt~hs",
          y: "á ~ýéár",
          yy: "%d ý~éárs",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("yo", {
        months:
          "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
            "_"
          ),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split(
          "_"
        ),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Ònì ni] LT",
          nextDay: "[Ọ̀la ni] LT",
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: "[Àna ni] LT",
          lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ní %s",
          past: "%s kọjá",
          s: "ìsẹjú aayá die",
          ss: "aayá %d",
          m: "ìsẹjú kan",
          mm: "ìsẹjú %d",
          h: "wákati kan",
          hh: "wákati %d",
          d: "ọjọ́ kan",
          dd: "ọjọ́ %d",
          M: "osù kan",
          MM: "osù %d",
          y: "ọdún kan",
          yy: "ọdún %d",
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("zh-cn", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "下午" === t || "晚上" === t
              ? e + 12
              : e >= 11
              ? e
              : e + 12
          );
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600
            ? "凌晨"
            : a < 900
            ? "早上"
            : a < 1130
            ? "上午"
            : a < 1230
            ? "中午"
            : a < 1800
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: function (e) {
            return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
          },
          lastDay: "[昨天]LT",
          lastWeek: function (e) {
            return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT";
          },
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "周";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s后",
          past: "%s前",
          s: "几秒",
          ss: "%d 秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年",
        },
        week: { dow: 1, doy: 4 },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("zh-hk", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "中午" === t
              ? e >= 11
                ? e
                : e + 12
              : "下午" === t || "晚上" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600
            ? "凌晨"
            : a < 900
            ? "早上"
            : a < 1200
            ? "上午"
            : 1200 === a
            ? "中午"
            : a < 1800
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年",
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("zh-mo", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "D/M/YYYY",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "中午" === t
              ? e >= 11
                ? e
                : e + 12
              : "下午" === t || "晚上" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600
            ? "凌晨"
            : a < 900
            ? "早上"
            : a < 1130
            ? "上午"
            : a < 1230
            ? "中午"
            : a < 1800
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天] LT",
          nextDay: "[明天] LT",
          nextWeek: "[下]dddd LT",
          lastDay: "[昨天] LT",
          lastWeek: "[上]dddd LT",
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年",
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    !(function (e) {
      "use strict";
      e.defineLocale("zh-tw", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "中午" === t
              ? e >= 11
                ? e
                : e + 12
              : "下午" === t || "晚上" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600
            ? "凌晨"
            : a < 900
            ? "早上"
            : a < 1130
            ? "上午"
            : a < 1230
            ? "中午"
            : a < 1800
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天] LT",
          nextDay: "[明天] LT",
          nextWeek: "[下]dddd LT",
          lastDay: "[昨天] LT",
          lastWeek: "[上]dddd LT",
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年",
        },
      });
    })(n(0));
  },
  function (e, t, n) {
    (function (e) {
      var a =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        r = Function.prototype.apply;
      function s(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new s(r.call(setTimeout, a, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new s(r.call(setInterval, a, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (s.prototype.unref = s.prototype.ref = function () {}),
        (s.prototype.close = function () {
          this._clearFn.call(a, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        n(147),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, n(2)));
  },
  function (e, t, n) {
    "use strict";
    (function (e, n) {
      var a =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : "undefined" != typeof self
          ? self
          : {};
      function r(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var s = function (e) {
          return e && e.Math == Math && e;
        },
        i =
          s("object" == typeof globalThis && globalThis) ||
          s("object" == typeof window && window) ||
          s("object" == typeof self && self) ||
          s("object" == typeof a && a) ||
          Function("return this")(),
        o = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        },
        d = !o(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        }),
        u = {}.propertyIsEnumerable,
        l = Object.getOwnPropertyDescriptor,
        _ = {
          f:
            l && !u.call({ 1: 2 }, 1)
              ? function (e) {
                  var t = l(this, e);
                  return !!t && t.enumerable;
                }
              : u,
        },
        c = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        },
        m = {}.toString,
        h = function (e) {
          return m.call(e).slice(8, -1);
        },
        f = "".split,
        p = o(function () {
          return !Object("z").propertyIsEnumerable(0);
        })
          ? function (e) {
              return "String" == h(e) ? f.call(e, "") : Object(e);
            }
          : Object,
        M = function (e) {
          if (null == e) throw TypeError("Can't call method on " + e);
          return e;
        },
        y = function (e) {
          return p(M(e));
        },
        L = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        },
        Y = function (e, t) {
          if (!L(e)) return e;
          var n, a;
          if (t && "function" == typeof (n = e.toString) && !L((a = n.call(e))))
            return a;
          if ("function" == typeof (n = e.valueOf) && !L((a = n.call(e))))
            return a;
          if (
            !t &&
            "function" == typeof (n = e.toString) &&
            !L((a = n.call(e)))
          )
            return a;
          throw TypeError("Can't convert object to primitive value");
        },
        g = {}.hasOwnProperty,
        v = function (e, t) {
          return g.call(e, t);
        },
        k = i.document,
        w = L(k) && L(k.createElement),
        D = function (e) {
          return w ? k.createElement(e) : {};
        },
        T =
          !d &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(D("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          }),
        b = Object.getOwnPropertyDescriptor,
        S = {
          f: d
            ? b
            : function (e, t) {
                if (((e = y(e)), (t = Y(t, !0)), T))
                  try {
                    return b(e, t);
                  } catch (e) {}
                if (v(e, t)) return c(!_.f.call(e, t), e[t]);
              },
        },
        x = function (e) {
          if (!L(e)) throw TypeError(String(e) + " is not an object");
          return e;
        },
        j = Object.defineProperty,
        H = {
          f: d
            ? j
            : function (e, t, n) {
                if ((x(e), (t = Y(t, !0)), x(n), T))
                  try {
                    return j(e, t, n);
                  } catch (e) {}
                if ("get" in n || "set" in n)
                  throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e;
              },
        },
        O = d
          ? function (e, t, n) {
              return H.f(e, t, c(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            },
        E = function (e, t) {
          try {
            O(i, e, t);
          } catch (n) {
            i[e] = t;
          }
          return t;
        },
        P = i["__core-js_shared__"] || E("__core-js_shared__", {}),
        A = Function.toString;
      "function" != typeof P.inspectSource &&
        (P.inspectSource = function (e) {
          return A.call(e);
        });
      var W,
        N,
        F,
        C = P.inspectSource,
        R = i.WeakMap,
        z = "function" == typeof R && /native code/.test(C(R)),
        I = r(function (e) {
          (e.exports = function (e, t) {
            return P[e] || (P[e] = void 0 !== t ? t : {});
          })("versions", []).push({
            version: "3.6.5",
            mode: "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
          });
        }),
        J = 0,
        U = Math.random(),
        G = function (e) {
          return (
            "Symbol(" +
            String(void 0 === e ? "" : e) +
            ")_" +
            (++J + U).toString(36)
          );
        },
        B = I("keys"),
        V = function (e) {
          return B[e] || (B[e] = G(e));
        },
        q = {},
        K = i.WeakMap;
      if (z) {
        var $ = new K(),
          Z = $.get,
          X = $.has,
          Q = $.set;
        (W = function (e, t) {
          return Q.call($, e, t), t;
        }),
          (N = function (e) {
            return Z.call($, e) || {};
          }),
          (F = function (e) {
            return X.call($, e);
          });
      } else {
        var ee = V("state");
        (q[ee] = !0),
          (W = function (e, t) {
            return O(e, ee, t), t;
          }),
          (N = function (e) {
            return v(e, ee) ? e[ee] : {};
          }),
          (F = function (e) {
            return v(e, ee);
          });
      }
      var te,
        ne,
        ae = {
          set: W,
          get: N,
          has: F,
          enforce: function (e) {
            return F(e) ? N(e) : W(e, {});
          },
          getterFor: function (e) {
            return function (t) {
              var n;
              if (!L(t) || (n = N(t)).type !== e)
                throw TypeError("Incompatible receiver, " + e + " required");
              return n;
            };
          },
        },
        re = r(function (e) {
          var t = ae.get,
            n = ae.enforce,
            a = String(String).split("String");
          (e.exports = function (e, t, r, s) {
            var o = !!s && !!s.unsafe,
              d = !!s && !!s.enumerable,
              u = !!s && !!s.noTargetGet;
            "function" == typeof r &&
              ("string" != typeof t || v(r, "name") || O(r, "name", t),
              (n(r).source = a.join("string" == typeof t ? t : ""))),
              e !== i
                ? (o ? !u && e[t] && (d = !0) : delete e[t],
                  d ? (e[t] = r) : O(e, t, r))
                : d
                ? (e[t] = r)
                : E(t, r);
          })(Function.prototype, "toString", function () {
            return ("function" == typeof this && t(this).source) || C(this);
          });
        }),
        se = i,
        ie = function (e) {
          return "function" == typeof e ? e : void 0;
        },
        oe = function (e, t) {
          return arguments.length < 2
            ? ie(se[e]) || ie(i[e])
            : (se[e] && se[e][t]) || (i[e] && i[e][t]);
        },
        de = Math.ceil,
        ue = Math.floor,
        le = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? ue : de)(e);
        },
        _e = Math.min,
        ce = function (e) {
          return e > 0 ? _e(le(e), 9007199254740991) : 0;
        },
        me = Math.max,
        he = Math.min,
        fe = function (e) {
          return function (t, n, a) {
            var r,
              s = y(t),
              i = ce(s.length),
              o = (function (e, t) {
                var n = le(e);
                return n < 0 ? me(n + t, 0) : he(n, t);
              })(a, i);
            if (e && n != n) {
              for (; i > o; ) if ((r = s[o++]) != r) return !0;
            } else
              for (; i > o; o++)
                if ((e || o in s) && s[o] === n) return e || o || 0;
            return !e && -1;
          };
        },
        pe = { includes: fe(!0), indexOf: fe(!1) },
        Me = pe.indexOf,
        ye = function (e, t) {
          var n,
            a = y(e),
            r = 0,
            s = [];
          for (n in a) !v(q, n) && v(a, n) && s.push(n);
          for (; t.length > r; ) v(a, (n = t[r++])) && (~Me(s, n) || s.push(n));
          return s;
        },
        Le = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ],
        Ye = Le.concat("length", "prototype"),
        ge = {
          f:
            Object.getOwnPropertyNames ||
            function (e) {
              return ye(e, Ye);
            },
        },
        ve = { f: Object.getOwnPropertySymbols },
        ke =
          oe("Reflect", "ownKeys") ||
          function (e) {
            var t = ge.f(x(e)),
              n = ve.f;
            return n ? t.concat(n(e)) : t;
          },
        we = function (e, t) {
          for (var n = ke(t), a = H.f, r = S.f, s = 0; s < n.length; s++) {
            var i = n[s];
            v(e, i) || a(e, i, r(t, i));
          }
        },
        De = /#|\.prototype\./,
        Te = function (e, t) {
          var n = Se[be(e)];
          return n == je || (n != xe && ("function" == typeof t ? o(t) : !!t));
        },
        be = (Te.normalize = function (e) {
          return String(e).replace(De, ".").toLowerCase();
        }),
        Se = (Te.data = {}),
        xe = (Te.NATIVE = "N"),
        je = (Te.POLYFILL = "P"),
        He = Te,
        Oe = S.f,
        Ee = function (e, t) {
          var n,
            a,
            r,
            s,
            o,
            d = e.target,
            u = e.global,
            l = e.stat;
          if ((n = u ? i : l ? i[d] || E(d, {}) : (i[d] || {}).prototype))
            for (a in t) {
              if (
                ((s = t[a]),
                (r = e.noTargetGet ? (o = Oe(n, a)) && o.value : n[a]),
                !He(u ? a : d + (l ? "." : "#") + a, e.forced) && void 0 !== r)
              ) {
                if (typeof s == typeof r) continue;
                we(s, r);
              }
              (e.sham || (r && r.sham)) && O(s, "sham", !0), re(n, a, s, e);
            }
        },
        Pe =
          Array.isArray ||
          function (e) {
            return "Array" == h(e);
          },
        Ae = function (e) {
          return Object(M(e));
        },
        We = function (e, t, n) {
          var a = Y(t);
          a in e ? H.f(e, a, c(0, n)) : (e[a] = n);
        },
        Ne =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            return !String(Symbol());
          }),
        Fe = Ne && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ce = I("wks"),
        Re = i.Symbol,
        ze = Fe ? Re : (Re && Re.withoutSetter) || G,
        Ie = function (e) {
          return (
            v(Ce, e) ||
              (Ne && v(Re, e) ? (Ce[e] = Re[e]) : (Ce[e] = ze("Symbol." + e))),
            Ce[e]
          );
        },
        Je = Ie("species"),
        Ue = function (e, t) {
          var n;
          return (
            Pe(e) &&
              ("function" != typeof (n = e.constructor) ||
              (n !== Array && !Pe(n.prototype))
                ? L(n) && null === (n = n[Je]) && (n = void 0)
                : (n = void 0)),
            new (void 0 === n ? Array : n)(0 === t ? 0 : t)
          );
        },
        Ge = oe("navigator", "userAgent") || "",
        Be = i.process,
        Ve = Be && Be.versions,
        qe = Ve && Ve.v8;
      qe
        ? (ne = (te = qe.split("."))[0] + te[1])
        : Ge &&
          (!(te = Ge.match(/Edge\/(\d+)/)) || te[1] >= 74) &&
          (te = Ge.match(/Chrome\/(\d+)/)) &&
          (ne = te[1]);
      var Ke,
        $e = ne && +ne,
        Ze = Ie("species"),
        Xe = Ie("isConcatSpreadable"),
        Qe =
          $e >= 51 ||
          !o(function () {
            var e = [];
            return (e[Xe] = !1), e.concat()[0] !== e;
          }),
        et =
          ((Ke = "concat"),
          $e >= 51 ||
            !o(function () {
              var e = [];
              return (
                ((e.constructor = {})[Ze] = function () {
                  return { foo: 1 };
                }),
                1 !== e[Ke](Boolean).foo
              );
            })),
        tt = function (e) {
          if (!L(e)) return !1;
          var t = e[Xe];
          return void 0 !== t ? !!t : Pe(e);
        };
      Ee(
        { target: "Array", proto: !0, forced: !Qe || !et },
        {
          concat: function (e) {
            var t,
              n,
              a,
              r,
              s,
              i = Ae(this),
              o = Ue(i, 0),
              d = 0;
            for (t = -1, a = arguments.length; t < a; t++)
              if (tt((s = -1 === t ? i : arguments[t]))) {
                if (d + (r = ce(s.length)) > 9007199254740991)
                  throw TypeError("Maximum allowed index exceeded");
                for (n = 0; n < r; n++, d++) n in s && We(o, d, s[n]);
              } else {
                if (d >= 9007199254740991)
                  throw TypeError("Maximum allowed index exceeded");
                We(o, d++, s);
              }
            return (o.length = d), o;
          },
        }
      );
      var nt = function (e) {
          if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
          return e;
        },
        at = function (e, t, n) {
          if ((nt(e), void 0 === t)) return e;
          switch (n) {
            case 0:
              return function () {
                return e.call(t);
              };
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, a) {
                return e.call(t, n, a);
              };
            case 3:
              return function (n, a, r) {
                return e.call(t, n, a, r);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        },
        rt = [].push,
        st = function (e) {
          var t = 1 == e,
            n = 2 == e,
            a = 3 == e,
            r = 4 == e,
            s = 6 == e,
            i = 5 == e || s;
          return function (o, d, u, l) {
            for (
              var _,
                c,
                m = Ae(o),
                h = p(m),
                f = at(d, u, 3),
                M = ce(h.length),
                y = 0,
                L = l || Ue,
                Y = t ? L(o, M) : n ? L(o, 0) : void 0;
              M > y;
              y++
            )
              if ((i || y in h) && ((c = f((_ = h[y]), y, m)), e))
                if (t) Y[y] = c;
                else if (c)
                  switch (e) {
                    case 3:
                      return !0;
                    case 5:
                      return _;
                    case 6:
                      return y;
                    case 2:
                      rt.call(Y, _);
                  }
                else if (r) return !1;
            return s ? -1 : a || r ? r : Y;
          };
        },
        it = {
          forEach: st(0),
          map: st(1),
          filter: st(2),
          some: st(3),
          every: st(4),
          find: st(5),
          findIndex: st(6),
        },
        ot = function (e, t) {
          var n = [][e];
          return (
            !!n &&
            o(function () {
              n.call(
                null,
                t ||
                  function () {
                    throw 1;
                  },
                1
              );
            })
          );
        },
        dt = Object.defineProperty,
        ut = {},
        lt = function (e) {
          throw e;
        },
        _t = function (e, t) {
          if (v(ut, e)) return ut[e];
          t || (t = {});
          var n = [][e],
            a = !!v(t, "ACCESSORS") && t.ACCESSORS,
            r = v(t, 0) ? t[0] : lt,
            s = v(t, 1) ? t[1] : void 0;
          return (ut[e] =
            !!n &&
            !o(function () {
              if (a && !d) return !0;
              var e = { length: -1 };
              a ? dt(e, 1, { enumerable: !0, get: lt }) : (e[1] = 1),
                n.call(e, r, s);
            }));
        },
        ct = it.forEach,
        mt = ot("forEach"),
        ht = _t("forEach"),
        ft =
          mt && ht
            ? [].forEach
            : function (e) {
                return ct(
                  this,
                  e,
                  arguments.length > 1 ? arguments[1] : void 0
                );
              };
      Ee(
        { target: "Array", proto: !0, forced: [].forEach != ft },
        { forEach: ft }
      );
      var pt,
        Mt =
          Object.keys ||
          function (e) {
            return ye(e, Le);
          },
        yt = d
          ? Object.defineProperties
          : function (e, t) {
              x(e);
              for (var n, a = Mt(t), r = a.length, s = 0; r > s; )
                H.f(e, (n = a[s++]), t[n]);
              return e;
            },
        Lt = oe("document", "documentElement"),
        Yt = V("IE_PROTO"),
        gt = function () {},
        vt = function (e) {
          return "<script>" + e + "</script>";
        },
        kt = function () {
          try {
            pt = document.domain && new ActiveXObject("htmlfile");
          } catch (e) {}
          var e, t;
          kt = pt
            ? (function (e) {
                e.write(vt("")), e.close();
                var t = e.parentWindow.Object;
                return (e = null), t;
              })(pt)
            : (((t = D("iframe")).style.display = "none"),
              Lt.appendChild(t),
              (t.src = String("javascript:")),
              (e = t.contentWindow.document).open(),
              e.write(vt("document.F=Object")),
              e.close(),
              e.F);
          for (var n = Le.length; n--; ) delete kt.prototype[Le[n]];
          return kt();
        };
      q[Yt] = !0;
      var wt =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((gt.prototype = x(e)),
                  (n = new gt()),
                  (gt.prototype = null),
                  (n[Yt] = e))
                : (n = kt()),
              void 0 === t ? n : yt(n, t)
            );
          },
        Dt = Ie("unscopables"),
        Tt = Array.prototype;
      null == Tt[Dt] && H.f(Tt, Dt, { configurable: !0, value: wt(null) });
      var bt,
        St = pe.includes;
      Ee(
        {
          target: "Array",
          proto: !0,
          forced: !_t("indexOf", { ACCESSORS: !0, 1: 0 }),
        },
        {
          includes: function (e) {
            return St(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        (bt = "includes"),
        (Tt[Dt][bt] = !0);
      var xt = [].join,
        jt = p != Object,
        Ht = ot("join", ",");
      Ee(
        { target: "Array", proto: !0, forced: jt || !Ht },
        {
          join: function (e) {
            return xt.call(y(this), void 0 === e ? "," : e);
          },
        }
      );
      var Ot = function (e) {
          return function (t, n, a, r) {
            nt(n);
            var s = Ae(t),
              i = p(s),
              o = ce(s.length),
              d = e ? o - 1 : 0,
              u = e ? -1 : 1;
            if (a < 2)
              for (;;) {
                if (d in i) {
                  (r = i[d]), (d += u);
                  break;
                }
                if (((d += u), e ? d < 0 : o <= d))
                  throw TypeError(
                    "Reduce of empty array with no initial value"
                  );
              }
            for (; e ? d >= 0 : o > d; d += u) d in i && (r = n(r, i[d], d, s));
            return r;
          };
        },
        Et = { left: Ot(!1), right: Ot(!0) }.left,
        Pt = ot("reduce"),
        At = _t("reduce", { 1: 0 });
      Ee(
        { target: "Array", proto: !0, forced: !Pt || !At },
        {
          reduce: function (e) {
            return Et(
              this,
              e,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
      var Wt = H.f,
        Nt = Function.prototype,
        Ft = Nt.toString,
        Ct = /^\s*function ([^ (]*)/;
      d &&
        !("name" in Nt) &&
        Wt(Nt, "name", {
          configurable: !0,
          get: function () {
            try {
              return Ft.call(this).match(Ct)[1];
            } catch (e) {
              return "";
            }
          },
        });
      var Rt = Object.assign,
        zt = Object.defineProperty,
        It =
          !Rt ||
          o(function () {
            if (
              d &&
              1 !==
                Rt(
                  { b: 1 },
                  Rt(
                    zt({}, "a", {
                      enumerable: !0,
                      get: function () {
                        zt(this, "b", { value: 3, enumerable: !1 });
                      },
                    }),
                    { b: 2 }
                  )
                ).b
            )
              return !0;
            var e = {},
              t = {},
              n = Symbol();
            return (
              (e[n] = 7),
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                t[e] = e;
              }),
              7 != Rt({}, e)[n] ||
                "abcdefghijklmnopqrst" != Mt(Rt({}, t)).join("")
            );
          })
            ? function (e, t) {
                for (
                  var n = Ae(e), a = arguments.length, r = 1, s = ve.f, i = _.f;
                  a > r;

                )
                  for (
                    var o,
                      u = p(arguments[r++]),
                      l = s ? Mt(u).concat(s(u)) : Mt(u),
                      c = l.length,
                      m = 0;
                    c > m;

                  )
                    (o = l[m++]), (d && !i.call(u, o)) || (n[o] = u[o]);
                return n;
              }
            : Rt;
      Ee(
        { target: "Object", stat: !0, forced: Object.assign !== It },
        { assign: It }
      ),
        Ee(
          {
            target: "Object",
            stat: !0,
            forced: o(function () {
              Mt(1);
            }),
          },
          {
            keys: function (e) {
              return Mt(Ae(e));
            },
          }
        );
      var Jt = {};
      Jt[Ie("toStringTag")] = "z";
      var Ut = "[object z]" === String(Jt),
        Gt = Ie("toStringTag"),
        Bt =
          "Arguments" ==
          h(
            (function () {
              return arguments;
            })()
          ),
        Vt = Ut
          ? h
          : function (e) {
              var t, n, a;
              return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = Object(e)), Gt))
                ? n
                : Bt
                ? h(t)
                : "Object" == (a = h(t)) && "function" == typeof t.callee
                ? "Arguments"
                : a;
            },
        qt = Ut
          ? {}.toString
          : function () {
              return "[object " + Vt(this) + "]";
            };
      Ut || re(Object.prototype, "toString", qt, { unsafe: !0 });
      var Kt = i.Promise,
        $t = H.f,
        Zt = Ie("toStringTag"),
        Xt = Ie("species"),
        Qt = {},
        en = Ie("iterator"),
        tn = Array.prototype,
        nn = Ie("iterator"),
        an = function (e, t, n, a) {
          try {
            return a ? t(x(n)[0], n[1]) : t(n);
          } catch (t) {
            var r = e.return;
            throw (void 0 !== r && x(r.call(e)), t);
          }
        },
        rn = r(function (e) {
          var t = function (e, t) {
            (this.stopped = e), (this.result = t);
          };
          (e.exports = function (e, n, a, r, s) {
            var i,
              o,
              d,
              u,
              l,
              _,
              c,
              m,
              h = at(n, a, r ? 2 : 1);
            if (s) i = e;
            else {
              if (
                "function" !=
                typeof (o = (function (e) {
                  if (null != e) return e[nn] || e["@@iterator"] || Qt[Vt(e)];
                })(e))
              )
                throw TypeError("Target is not iterable");
              if (void 0 !== (m = o) && (Qt.Array === m || tn[en] === m)) {
                for (d = 0, u = ce(e.length); u > d; d++)
                  if (
                    (l = r ? h(x((c = e[d]))[0], c[1]) : h(e[d])) &&
                    l instanceof t
                  )
                    return l;
                return new t(!1);
              }
              i = o.call(e);
            }
            for (_ = i.next; !(c = _.call(i)).done; )
              if (
                "object" == typeof (l = an(i, h, c.value, r)) &&
                l &&
                l instanceof t
              )
                return l;
            return new t(!1);
          }).stop = function (e) {
            return new t(!0, e);
          };
        }),
        sn = Ie("iterator"),
        on = !1;
      try {
        var dn = 0,
          un = {
            next: function () {
              return { done: !!dn++ };
            },
            return: function () {
              on = !0;
            },
          };
        (un[sn] = function () {
          return this;
        }),
          Array.from(un, function () {
            throw 2;
          });
      } catch (e) {}
      var ln,
        _n,
        cn,
        mn = Ie("species"),
        hn = /(iphone|ipod|ipad).*applewebkit/i.test(Ge),
        fn = i.location,
        pn = i.setImmediate,
        Mn = i.clearImmediate,
        yn = i.process,
        Ln = i.MessageChannel,
        Yn = i.Dispatch,
        gn = 0,
        vn = {},
        kn = function (e) {
          if (vn.hasOwnProperty(e)) {
            var t = vn[e];
            delete vn[e], t();
          }
        },
        wn = function (e) {
          return function () {
            kn(e);
          };
        },
        Dn = function (e) {
          kn(e.data);
        },
        Tn = function (e) {
          i.postMessage(e + "", fn.protocol + "//" + fn.host);
        };
      (pn && Mn) ||
        ((pn = function (e) {
          for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
          return (
            (vn[++gn] = function () {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t);
            }),
            ln(gn),
            gn
          );
        }),
        (Mn = function (e) {
          delete vn[e];
        }),
        "process" == h(yn)
          ? (ln = function (e) {
              yn.nextTick(wn(e));
            })
          : Yn && Yn.now
          ? (ln = function (e) {
              Yn.now(wn(e));
            })
          : Ln && !hn
          ? ((cn = (_n = new Ln()).port2),
            (_n.port1.onmessage = Dn),
            (ln = at(cn.postMessage, cn, 1)))
          : !i.addEventListener ||
            "function" != typeof postMessage ||
            i.importScripts ||
            o(Tn) ||
            "file:" === fn.protocol
          ? (ln =
              "onreadystatechange" in D("script")
                ? function (e) {
                    Lt.appendChild(D("script")).onreadystatechange =
                      function () {
                        Lt.removeChild(this), kn(e);
                      };
                  }
                : function (e) {
                    setTimeout(wn(e), 0);
                  })
          : ((ln = Tn), i.addEventListener("message", Dn, !1)));
      var bn,
        Sn,
        xn,
        jn,
        Hn,
        On,
        En,
        Pn,
        An = { set: pn, clear: Mn },
        Wn = S.f,
        Nn = An.set,
        Fn = i.MutationObserver || i.WebKitMutationObserver,
        Cn = i.process,
        Rn = i.Promise,
        zn = "process" == h(Cn),
        In = Wn(i, "queueMicrotask"),
        Jn = In && In.value;
      Jn ||
        ((bn = function () {
          var e, t;
          for (zn && (e = Cn.domain) && e.exit(); Sn; ) {
            (t = Sn.fn), (Sn = Sn.next);
            try {
              t();
            } catch (e) {
              throw (Sn ? jn() : (xn = void 0), e);
            }
          }
          (xn = void 0), e && e.enter();
        }),
        zn
          ? (jn = function () {
              Cn.nextTick(bn);
            })
          : Fn && !hn
          ? ((Hn = !0),
            (On = document.createTextNode("")),
            new Fn(bn).observe(On, { characterData: !0 }),
            (jn = function () {
              On.data = Hn = !Hn;
            }))
          : Rn && Rn.resolve
          ? ((En = Rn.resolve(void 0)),
            (Pn = En.then),
            (jn = function () {
              Pn.call(En, bn);
            }))
          : (jn = function () {
              Nn.call(i, bn);
            }));
      var Un,
        Gn,
        Bn,
        Vn,
        qn,
        Kn,
        $n,
        Zn =
          Jn ||
          function (e) {
            var t = { fn: e, next: void 0 };
            xn && (xn.next = t), Sn || ((Sn = t), jn()), (xn = t);
          },
        Xn = function (e) {
          var t, n;
          (this.promise = new e(function (e, a) {
            if (void 0 !== t || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (t = e), (n = a);
          })),
            (this.resolve = nt(t)),
            (this.reject = nt(n));
        },
        Qn = {
          f: function (e) {
            return new Xn(e);
          },
        },
        ea = function (e, t) {
          if ((x(e), L(t) && t.constructor === e)) return t;
          var n = Qn.f(e);
          return (0, n.resolve)(t), n.promise;
        },
        ta = function (e) {
          try {
            return { error: !1, value: e() };
          } catch (e) {
            return { error: !0, value: e };
          }
        },
        na = An.set,
        aa = Ie("species"),
        ra = "Promise",
        sa = ae.get,
        ia = ae.set,
        oa = ae.getterFor(ra),
        da = Kt,
        ua = i.TypeError,
        la = i.document,
        _a = i.process,
        ca = oe("fetch"),
        ma = Qn.f,
        ha = ma,
        fa = "process" == h(_a),
        pa = !!(la && la.createEvent && i.dispatchEvent),
        Ma = He(ra, function () {
          if (!(C(da) !== String(da))) {
            if (66 === $e) return !0;
            if (!fa && "function" != typeof PromiseRejectionEvent) return !0;
          }
          if ($e >= 51 && /native code/.test(da)) return !1;
          var e = da.resolve(1),
            t = function (e) {
              e(
                function () {},
                function () {}
              );
            };
          return (
            ((e.constructor = {})[aa] = t),
            !(e.then(function () {}) instanceof t)
          );
        }),
        ya =
          Ma ||
          !(function (e, t) {
            if (!t && !on) return !1;
            var n = !1;
            try {
              var a = {};
              (a[sn] = function () {
                return {
                  next: function () {
                    return { done: (n = !0) };
                  },
                };
              }),
                e(a);
            } catch (e) {}
            return n;
          })(function (e) {
            da.all(e).catch(function () {});
          }),
        La = function (e) {
          var t;
          return !(!L(e) || "function" != typeof (t = e.then)) && t;
        },
        Ya = function (e, t, n) {
          if (!t.notified) {
            t.notified = !0;
            var a = t.reactions;
            Zn(function () {
              for (var r = t.value, s = 1 == t.state, i = 0; a.length > i; ) {
                var o,
                  d,
                  u,
                  l = a[i++],
                  _ = s ? l.ok : l.fail,
                  c = l.resolve,
                  m = l.reject,
                  h = l.domain;
                try {
                  _
                    ? (s || (2 === t.rejection && wa(e, t), (t.rejection = 1)),
                      !0 === _
                        ? (o = r)
                        : (h && h.enter(),
                          (o = _(r)),
                          h && (h.exit(), (u = !0))),
                      o === l.promise
                        ? m(ua("Promise-chain cycle"))
                        : (d = La(o))
                        ? d.call(o, c, m)
                        : c(o))
                    : m(r);
                } catch (e) {
                  h && !u && h.exit(), m(e);
                }
              }
              (t.reactions = []),
                (t.notified = !1),
                n && !t.rejection && va(e, t);
            });
          }
        },
        ga = function (e, t, n) {
          var a, r;
          pa
            ? (((a = la.createEvent("Event")).promise = t),
              (a.reason = n),
              a.initEvent(e, !1, !0),
              i.dispatchEvent(a))
            : (a = { promise: t, reason: n }),
            (r = i["on" + e])
              ? r(a)
              : "unhandledrejection" === e &&
                (function (e, t) {
                  var n = i.console;
                  n &&
                    n.error &&
                    (1 === arguments.length ? n.error(e) : n.error(e, t));
                })("Unhandled promise rejection", n);
        },
        va = function (e, t) {
          na.call(i, function () {
            var n,
              a = t.value;
            if (
              ka(t) &&
              ((n = ta(function () {
                fa
                  ? _a.emit("unhandledRejection", a, e)
                  : ga("unhandledrejection", e, a);
              })),
              (t.rejection = fa || ka(t) ? 2 : 1),
              n.error)
            )
              throw n.value;
          });
        },
        ka = function (e) {
          return 1 !== e.rejection && !e.parent;
        },
        wa = function (e, t) {
          na.call(i, function () {
            fa
              ? _a.emit("rejectionHandled", e)
              : ga("rejectionhandled", e, t.value);
          });
        },
        Da = function (e, t, n, a) {
          return function (r) {
            e(t, n, r, a);
          };
        },
        Ta = function (e, t, n, a) {
          t.done ||
            ((t.done = !0),
            a && (t = a),
            (t.value = n),
            (t.state = 2),
            Ya(e, t, !0));
        },
        ba = function (e, t, n, a) {
          if (!t.done) {
            (t.done = !0), a && (t = a);
            try {
              if (e === n) throw ua("Promise can't be resolved itself");
              var r = La(n);
              r
                ? Zn(function () {
                    var a = { done: !1 };
                    try {
                      r.call(n, Da(ba, e, a, t), Da(Ta, e, a, t));
                    } catch (n) {
                      Ta(e, a, n, t);
                    }
                  })
                : ((t.value = n), (t.state = 1), Ya(e, t, !1));
            } catch (n) {
              Ta(e, { done: !1 }, n, t);
            }
          }
        };
      Ma &&
        ((da = function (e) {
          !(function (e, t, n) {
            if (!(e instanceof t))
              throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
          })(this, da, ra),
            nt(e),
            Un.call(this);
          var t = sa(this);
          try {
            e(Da(ba, this, t), Da(Ta, this, t));
          } catch (e) {
            Ta(this, t, e);
          }
        }),
        ((Un = function (e) {
          ia(this, {
            type: ra,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = (function (e, t, n) {
          for (var a in t) re(e, a, t[a], n);
          return e;
        })(da.prototype, {
          then: function (e, t) {
            var n,
              a,
              r,
              s = oa(this),
              i = ma(
                ((n = da),
                void 0 === (r = x(this).constructor) || null == (a = x(r)[mn])
                  ? n
                  : nt(a))
              );
            return (
              (i.ok = "function" != typeof e || e),
              (i.fail = "function" == typeof t && t),
              (i.domain = fa ? _a.domain : void 0),
              (s.parent = !0),
              s.reactions.push(i),
              0 != s.state && Ya(this, s, !1),
              i.promise
            );
          },
          catch: function (e) {
            return this.then(void 0, e);
          },
        })),
        (Gn = function () {
          var e = new Un(),
            t = sa(e);
          (this.promise = e),
            (this.resolve = Da(ba, e, t)),
            (this.reject = Da(Ta, e, t));
        }),
        (Qn.f = ma =
          function (e) {
            return e === da || e === Bn ? new Gn(e) : ha(e);
          }),
        "function" == typeof Kt &&
          ((Vn = Kt.prototype.then),
          re(
            Kt.prototype,
            "then",
            function (e, t) {
              var n = this;
              return new da(function (e, t) {
                Vn.call(n, e, t);
              }).then(e, t);
            },
            { unsafe: !0 }
          ),
          "function" == typeof ca &&
            Ee(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function (e) {
                  return ea(da, ca.apply(i, arguments));
                },
              }
            ))),
        Ee({ global: !0, wrap: !0, forced: Ma }, { Promise: da }),
        (Kn = ra),
        ($n = !1),
        (qn = da) &&
          !v((qn = $n ? qn : qn.prototype), Zt) &&
          $t(qn, Zt, { configurable: !0, value: Kn }),
        (function (e) {
          var t = oe(e),
            n = H.f;
          d &&
            t &&
            !t[Xt] &&
            n(t, Xt, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        })(ra),
        (Bn = oe(ra)),
        Ee(
          { target: ra, stat: !0, forced: Ma },
          {
            reject: function (e) {
              var t = ma(this);
              return t.reject.call(void 0, e), t.promise;
            },
          }
        ),
        Ee(
          { target: ra, stat: !0, forced: Ma },
          {
            resolve: function (e) {
              return ea(this, e);
            },
          }
        ),
        Ee(
          { target: ra, stat: !0, forced: ya },
          {
            all: function (e) {
              var t = this,
                n = ma(t),
                a = n.resolve,
                r = n.reject,
                s = ta(function () {
                  var n = nt(t.resolve),
                    s = [],
                    i = 0,
                    o = 1;
                  rn(e, function (e) {
                    var d = i++,
                      u = !1;
                    s.push(void 0),
                      o++,
                      n.call(t, e).then(function (e) {
                        u || ((u = !0), (s[d] = e), --o || a(s));
                      }, r);
                  }),
                    --o || a(s);
                });
              return s.error && r(s.value), n.promise;
            },
            race: function (e) {
              var t = this,
                n = ma(t),
                a = n.reject,
                r = ta(function () {
                  var r = nt(t.resolve);
                  rn(e, function (e) {
                    r.call(t, e).then(n.resolve, a);
                  });
                });
              return r.error && a(r.value), n.promise;
            },
          }
        );
      var Sa,
        xa = Ie("match"),
        ja = function (e) {
          if (
            (function (e) {
              var t;
              return L(e) && (void 0 !== (t = e[xa]) ? !!t : "RegExp" == h(e));
            })(e)
          )
            throw TypeError("The method doesn't accept regular expressions");
          return e;
        },
        Ha = Ie("match"),
        Oa = function (e) {
          var t = /./;
          try {
            "/./"[e](t);
          } catch (n) {
            try {
              return (t[Ha] = !1), "/./"[e](t);
            } catch (e) {}
          }
          return !1;
        },
        Ea = S.f,
        Pa = "".endsWith,
        Aa = Math.min,
        Wa = Oa("endsWith");
      Ee(
        {
          target: "String",
          proto: !0,
          forced:
            !!(
              Wa ||
              ((Sa = Ea(String.prototype, "endsWith")), !Sa || Sa.writable)
            ) && !Wa,
        },
        {
          endsWith: function (e) {
            var t = String(M(this));
            ja(e);
            var n = arguments.length > 1 ? arguments[1] : void 0,
              a = ce(t.length),
              r = void 0 === n ? a : Aa(ce(n), a),
              s = String(e);
            return Pa ? Pa.call(t, s, r) : t.slice(r - s.length, r) === s;
          },
        }
      );
      var Na = S.f,
        Fa = "".startsWith,
        Ca = Math.min,
        Ra = Oa("startsWith");
      Ee(
        {
          target: "String",
          proto: !0,
          forced:
            !(
              !Ra &&
              !!(function () {
                var e = Na(String.prototype, "startsWith");
                return e && !e.writable;
              })()
            ) && !Ra,
        },
        {
          startsWith: function (e) {
            var t = String(M(this));
            ja(e);
            var n = ce(
                Ca(arguments.length > 1 ? arguments[1] : void 0, t.length)
              ),
              a = String(e);
            return Fa ? Fa.call(t, a, n) : t.slice(n, n + a.length) === a;
          },
        }
      );
      for (var za in {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      }) {
        var Ia = i[za],
          Ja = Ia && Ia.prototype;
        if (Ja && Ja.forEach !== ft)
          try {
            O(Ja, "forEach", ft);
          } catch (e) {
            Ja.forEach = ft;
          }
      }
      var Ua = function (e, t) {
          return function () {
            for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
              n[a] = arguments[a];
            return e.apply(t, n);
          };
        },
        Ga = Object.prototype.toString;
      function Ba(e) {
        return "[object Array]" === Ga.call(e);
      }
      function Va(e) {
        return void 0 === e;
      }
      function qa(e) {
        return null !== e && "object" == typeof e;
      }
      function Ka(e) {
        return "[object Function]" === Ga.call(e);
      }
      function $a(e, t) {
        if (null != e)
          if (("object" != typeof e && (e = [e]), Ba(e)))
            for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
          else
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.call(null, e[r], r, e);
      }
      var Za = {
        isArray: Ba,
        isArrayBuffer: function (e) {
          return "[object ArrayBuffer]" === Ga.call(e);
        },
        isBuffer: function (e) {
          return (
            null !== e &&
            !Va(e) &&
            null !== e.constructor &&
            !Va(e.constructor) &&
            "function" == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
          return "string" == typeof e;
        },
        isNumber: function (e) {
          return "number" == typeof e;
        },
        isObject: qa,
        isUndefined: Va,
        isDate: function (e) {
          return "[object Date]" === Ga.call(e);
        },
        isFile: function (e) {
          return "[object File]" === Ga.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === Ga.call(e);
        },
        isFunction: Ka,
        isStream: function (e) {
          return qa(e) && Ka(e.pipe);
        },
        isURLSearchParams: function (e) {
          return (
            "undefined" != typeof URLSearchParams &&
            e instanceof URLSearchParams
          );
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        },
        forEach: $a,
        merge: function e() {
          var t = {};
          function n(n, a) {
            "object" == typeof t[a] && "object" == typeof n
              ? (t[a] = e(t[a], n))
              : (t[a] = n);
          }
          for (var a = 0, r = arguments.length; a < r; a++) $a(arguments[a], n);
          return t;
        },
        deepMerge: function e() {
          var t = {};
          function n(n, a) {
            "object" == typeof t[a] && "object" == typeof n
              ? (t[a] = e(t[a], n))
              : (t[a] = "object" == typeof n ? e({}, n) : n);
          }
          for (var a = 0, r = arguments.length; a < r; a++) $a(arguments[a], n);
          return t;
        },
        extend: function (e, t, n) {
          return (
            $a(t, function (t, a) {
              e[a] = n && "function" == typeof t ? Ua(t, n) : t;
            }),
            e
          );
        },
        trim: function (e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "");
        },
      };
      function Xa(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      var Qa = function (e, t, n) {
        if (!t) return e;
        var a;
        if (n) a = n(t);
        else if (Za.isURLSearchParams(t)) a = t.toString();
        else {
          var r = [];
          Za.forEach(t, function (e, t) {
            null != e &&
              (Za.isArray(e) ? (t += "[]") : (e = [e]),
              Za.forEach(e, function (e) {
                Za.isDate(e)
                  ? (e = e.toISOString())
                  : Za.isObject(e) && (e = JSON.stringify(e)),
                  r.push(Xa(t) + "=" + Xa(e));
              }));
          }),
            (a = r.join("&"));
        }
        if (a) {
          var s = e.indexOf("#");
          -1 !== s && (e = e.slice(0, s)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
        }
        return e;
      };
      function er() {
        this.handlers = [];
      }
      (er.prototype.use = function (e, t) {
        return (
          this.handlers.push({ fulfilled: e, rejected: t }),
          this.handlers.length - 1
        );
      }),
        (er.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (er.prototype.forEach = function (e) {
          Za.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        });
      var tr = er,
        nr = function (e, t, n) {
          return (
            Za.forEach(n, function (n) {
              e = n(e, t);
            }),
            e
          );
        },
        ar = function (e) {
          return !(!e || !e.__CANCEL__);
        },
        rr = function (e, t) {
          Za.forEach(e, function (n, a) {
            a !== t &&
              a.toUpperCase() === t.toUpperCase() &&
              ((e[t] = n), delete e[a]);
          });
        },
        sr = function (e, t, n, a, r) {
          return (function (e, t, n, a, r) {
            return (
              (e.config = t),
              n && (e.code = n),
              (e.request = a),
              (e.response = r),
              (e.isAxiosError = !0),
              (e.toJSON = function () {
                return {
                  message: this.message,
                  name: this.name,
                  description: this.description,
                  number: this.number,
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  config: this.config,
                  code: this.code,
                };
              }),
              e
            );
          })(new Error(e), t, n, a, r);
        },
        ir = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ],
        or = Za.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function a(e) {
                var a = e;
                return (
                  t && (n.setAttribute("href", a), (a = n.href)),
                  n.setAttribute("href", a),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (e = a(window.location.href)),
                function (t) {
                  var n = Za.isString(t) ? a(t) : t;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        dr = Za.isStandardBrowserEnv()
          ? {
              write: function (e, t, n, a, r, s) {
                var i = [];
                i.push(e + "=" + encodeURIComponent(t)),
                  Za.isNumber(n) &&
                    i.push("expires=" + new Date(n).toGMTString()),
                  Za.isString(a) && i.push("path=" + a),
                  Za.isString(r) && i.push("domain=" + r),
                  !0 === s && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            },
        ur = function (e) {
          return new Promise(function (t, n) {
            var a = e.data,
              r = e.headers;
            Za.isFormData(a) && delete r["Content-Type"];
            var s = new XMLHttpRequest();
            if (e.auth) {
              var i = e.auth.username || "",
                o = e.auth.password || "";
              r.Authorization = "Basic " + btoa(i + ":" + o);
            }
            var d,
              u,
              l =
                ((d = e.baseURL),
                (u = e.url),
                d && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)
                  ? (function (e, t) {
                      return t
                        ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                        : e;
                    })(d, u)
                  : u);
            if (
              (s.open(
                e.method.toUpperCase(),
                Qa(l, e.params, e.paramsSerializer),
                !0
              ),
              (s.timeout = e.timeout),
              (s.onreadystatechange = function () {
                if (
                  s &&
                  4 === s.readyState &&
                  (0 !== s.status ||
                    (s.responseURL && 0 === s.responseURL.indexOf("file:")))
                ) {
                  var a =
                      "getAllResponseHeaders" in s
                        ? (function (e) {
                            var t,
                              n,
                              a,
                              r = {};
                            return e
                              ? (Za.forEach(e.split("\n"), function (e) {
                                  if (
                                    ((a = e.indexOf(":")),
                                    (t = Za.trim(e.substr(0, a)).toLowerCase()),
                                    (n = Za.trim(e.substr(a + 1))),
                                    t)
                                  ) {
                                    if (r[t] && ir.indexOf(t) >= 0) return;
                                    r[t] =
                                      "set-cookie" === t
                                        ? (r[t] ? r[t] : []).concat([n])
                                        : r[t]
                                        ? r[t] + ", " + n
                                        : n;
                                  }
                                }),
                                r)
                              : r;
                          })(s.getAllResponseHeaders())
                        : null,
                    r = {
                      data:
                        e.responseType && "text" !== e.responseType
                          ? s.response
                          : s.responseText,
                      status: s.status,
                      statusText: s.statusText,
                      headers: a,
                      config: e,
                      request: s,
                    };
                  !(function (e, t, n) {
                    var a = n.config.validateStatus;
                    !a || a(n.status)
                      ? e(n)
                      : t(
                          sr(
                            "Request failed with status code " + n.status,
                            n.config,
                            null,
                            n.request,
                            n
                          )
                        );
                  })(t, n, r),
                    (s = null);
                }
              }),
              (s.onabort = function () {
                s &&
                  (n(sr("Request aborted", e, "ECONNABORTED", s)), (s = null));
              }),
              (s.onerror = function () {
                n(sr("Network Error", e, null, s)), (s = null);
              }),
              (s.ontimeout = function () {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(sr(t, e, "ECONNABORTED", s)),
                  (s = null);
              }),
              Za.isStandardBrowserEnv())
            ) {
              var _ = dr,
                c =
                  (e.withCredentials || or(l)) && e.xsrfCookieName
                    ? _.read(e.xsrfCookieName)
                    : void 0;
              c && (r[e.xsrfHeaderName] = c);
            }
            if (
              ("setRequestHeader" in s &&
                Za.forEach(r, function (e, t) {
                  void 0 === a && "content-type" === t.toLowerCase()
                    ? delete r[t]
                    : s.setRequestHeader(t, e);
                }),
              Za.isUndefined(e.withCredentials) ||
                (s.withCredentials = !!e.withCredentials),
              e.responseType)
            )
              try {
                s.responseType = e.responseType;
              } catch (t) {
                if ("json" !== e.responseType) throw t;
              }
            "function" == typeof e.onDownloadProgress &&
              s.addEventListener("progress", e.onDownloadProgress),
              "function" == typeof e.onUploadProgress &&
                s.upload &&
                s.upload.addEventListener("progress", e.onUploadProgress),
              e.cancelToken &&
                e.cancelToken.promise.then(function (e) {
                  s && (s.abort(), n(e), (s = null));
                }),
              void 0 === a && (a = null),
              s.send(a);
          });
        },
        lr = { "Content-Type": "application/x-www-form-urlencoded" };
      function _r(e, t) {
        !Za.isUndefined(e) &&
          Za.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var cr,
        mr = {
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              (void 0 !== n &&
                "[object process]" === Object.prototype.toString.call(n))) &&
              (cr = ur),
            cr),
          transformRequest: [
            function (e, t) {
              return (
                rr(t, "Accept"),
                rr(t, "Content-Type"),
                Za.isFormData(e) ||
                Za.isArrayBuffer(e) ||
                Za.isBuffer(e) ||
                Za.isStream(e) ||
                Za.isFile(e) ||
                Za.isBlob(e)
                  ? e
                  : Za.isArrayBufferView(e)
                  ? e.buffer
                  : Za.isURLSearchParams(e)
                  ? (_r(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : Za.isObject(e)
                  ? (_r(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (mr.headers = {
        common: { Accept: "application/json, text/plain, */*" },
      }),
        Za.forEach(["delete", "get", "head"], function (e) {
          mr.headers[e] = {};
        }),
        Za.forEach(["post", "put", "patch"], function (e) {
          mr.headers[e] = Za.merge(lr);
        });
      var hr = mr;
      function fr(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      var pr = function (e) {
          return (
            fr(e),
            (e.headers = e.headers || {}),
            (e.data = nr(e.data, e.headers, e.transformRequest)),
            (e.headers = Za.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            Za.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || hr.adapter)(e).then(
              function (t) {
                return (
                  fr(e),
                  (t.data = nr(t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  ar(t) ||
                    (fr(e),
                    t &&
                      t.response &&
                      (t.response.data = nr(
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        },
        Mr = function (e, t) {
          t = t || {};
          var n = {},
            a = ["url", "method", "params", "data"],
            r = ["headers", "auth", "proxy"],
            s = [
              "baseURL",
              "url",
              "transformRequest",
              "transformResponse",
              "paramsSerializer",
              "timeout",
              "withCredentials",
              "adapter",
              "responseType",
              "xsrfCookieName",
              "xsrfHeaderName",
              "onUploadProgress",
              "onDownloadProgress",
              "maxContentLength",
              "validateStatus",
              "maxRedirects",
              "httpAgent",
              "httpsAgent",
              "cancelToken",
              "socketPath",
            ];
          Za.forEach(a, function (e) {
            void 0 !== t[e] && (n[e] = t[e]);
          }),
            Za.forEach(r, function (a) {
              Za.isObject(t[a])
                ? (n[a] = Za.deepMerge(e[a], t[a]))
                : void 0 !== t[a]
                ? (n[a] = t[a])
                : Za.isObject(e[a])
                ? (n[a] = Za.deepMerge(e[a]))
                : void 0 !== e[a] && (n[a] = e[a]);
            }),
            Za.forEach(s, function (a) {
              void 0 !== t[a]
                ? (n[a] = t[a])
                : void 0 !== e[a] && (n[a] = e[a]);
            });
          var i = a.concat(r).concat(s),
            o = Object.keys(t).filter(function (e) {
              return -1 === i.indexOf(e);
            });
          return (
            Za.forEach(o, function (a) {
              void 0 !== t[a]
                ? (n[a] = t[a])
                : void 0 !== e[a] && (n[a] = e[a]);
            }),
            n
          );
        };
      function yr(e) {
        (this.defaults = e),
          (this.interceptors = { request: new tr(), response: new tr() });
      }
      (yr.prototype.request = function (e) {
        "string" == typeof e
          ? ((e = arguments[1] || {}).url = arguments[0])
          : (e = e || {}),
          (e = Mr(this.defaults, e)).method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = "get");
        var t = [pr, void 0],
          n = Promise.resolve(e);
        for (
          this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected);
          }),
            this.interceptors.response.forEach(function (e) {
              t.push(e.fulfilled, e.rejected);
            });
          t.length;

        )
          n = n.then(t.shift(), t.shift());
        return n;
      }),
        (yr.prototype.getUri = function (e) {
          return (
            (e = Mr(this.defaults, e)),
            Qa(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        Za.forEach(["delete", "get", "head", "options"], function (e) {
          yr.prototype[e] = function (t, n) {
            return this.request(Za.merge(n || {}, { method: e, url: t }));
          };
        }),
        Za.forEach(["post", "put", "patch"], function (e) {
          yr.prototype[e] = function (t, n, a) {
            return this.request(
              Za.merge(a || {}, { method: e, url: t, data: n })
            );
          };
        });
      var Lr = yr;
      function Yr(e) {
        this.message = e;
      }
      (Yr.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (Yr.prototype.__CANCEL__ = !0);
      var gr = Yr;
      function vr(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var n = this;
        e(function (e) {
          n.reason || ((n.reason = new gr(e)), t(n.reason));
        });
      }
      (vr.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (vr.source = function () {
          var e;
          return {
            token: new vr(function (t) {
              e = t;
            }),
            cancel: e,
          };
        });
      var kr = vr;
      function wr(e) {
        var t = new Lr(e),
          n = Ua(Lr.prototype.request, t);
        return Za.extend(n, Lr.prototype, t), Za.extend(n, t), n;
      }
      var Dr = wr(hr);
      (Dr.Axios = Lr),
        (Dr.create = function (e) {
          return wr(Mr(Dr.defaults, e));
        }),
        (Dr.Cancel = gr),
        (Dr.CancelToken = kr),
        (Dr.isCancel = ar),
        (Dr.all = function (e) {
          return Promise.all(e);
        }),
        (Dr.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        });
      var Tr = Dr,
        br = Dr;
      Tr.default = br;
      var Sr = Tr,
        xr = ["v2", "v3", "canary"],
        jr = "@tryghost/content-api";
      t.a = function e(t) {
        var n = t.url,
          a = t.host,
          r = t.ghostPath,
          s = void 0 === r ? "ghost" : r,
          i = t.version,
          o = t.key;
        if (
          (a &&
            (console.warn(
              "".concat(
                jr,
                ": The 'host' parameter is deprecated, please use 'url' instead"
              )
            ),
            n || (n = a)),
          this instanceof e)
        )
          return e({ url: n, version: i, key: o });
        if (!i)
          throw new Error(
            ""
              .concat(jr, " Config Missing: 'version' is required. E.g. ")
              .concat(xr.join(","))
          );
        if (!xr.includes(i))
          throw new Error(
            ""
              .concat(jr, " Config Invalid: 'version' ")
              .concat(i, " is not supported")
          );
        if (!n)
          throw new Error(
            "".concat(
              jr,
              " Config Missing: 'url' is required. E.g. 'https://site.com'"
            )
          );
        if (!/https?:\/\//.test(n))
          throw new Error(
            ""
              .concat(jr, " Config Invalid: 'url' ")
              .concat(n, " requires a protocol. E.g. 'https://site.com'")
          );
        if (n.endsWith("/"))
          throw new Error(
            ""
              .concat(jr, " Config Invalid: 'url' ")
              .concat(
                n,
                " must not have a trailing slash. E.g. 'https://site.com'"
              )
          );
        if (s.endsWith("/") || s.startsWith("/"))
          throw new Error(
            ""
              .concat(jr, " Config Invalid: 'ghostPath' ")
              .concat(
                s,
                " must not have a leading or trailing slash. E.g. 'ghost'"
              )
          );
        if (o && !/[0-9a-f]{26}/.test(o))
          throw new Error(
            ""
              .concat(jr, " Config Invalid: 'key' ")
              .concat(o, " must have 26 hex characters")
          );
        var d = ["posts", "authors", "tags", "pages", "settings"].reduce(
          function (e, t) {
            return Object.assign(
              e,
              (function (e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                );
              })({}, t, {
                read: function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = arguments.length > 2 ? arguments[2] : void 0;
                  if (!e || (!e.id && !e.slug))
                    return Promise.reject(
                      new Error("".concat(jr, " read requires an id or slug."))
                    );
                  var r = Object.assign({}, e, n);
                  return u(t, r, e.id || "slug/".concat(e.slug), a);
                },
                browse: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = arguments.length > 1 ? arguments[1] : void 0;
                  return u(t, e, null, n);
                },
              })
            );
          },
          {}
        );
        return delete d.settings.read, d;
        function u(e, t, a) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          if (!r && !o)
            return Promise.reject(
              new Error("".concat(jr, " Config Missing: 'key' is required."))
            );
          delete t.id;
          var d = r ? { Authorization: "GhostMembers ".concat(r) } : void 0;
          return Sr.get(
            ""
              .concat(n, "/")
              .concat(s, "/api/")
              .concat(i, "/content/")
              .concat(e, "/")
              .concat(a ? a + "/" : ""),
            {
              params: Object.assign({ key: o }, t),
              paramsSerializer: function (e) {
                return Object.keys(e)
                  .reduce(function (t, n) {
                    var a = encodeURIComponent([].concat(e[n]).join(","));
                    return t.concat("".concat(n, "=").concat(a));
                  }, [])
                  .join("&");
              },
              headers: d,
            }
          )
            .then(function (t) {
              return Array.isArray(t.data[e])
                ? 1 !== t.data[e].length || t.data.meta
                  ? Object.assign(t.data[e], { meta: t.data.meta })
                  : t.data[e][0]
                : t.data[e];
            })
            .catch(function (e) {
              if (e.response && e.response.data && e.response.data.errors) {
                var t = e.response.data.errors[0],
                  n = new Error(t.message),
                  a = Object.keys(t);
                throw (
                  ((n.name = t.type),
                  a.forEach(function (e) {
                    n[e] = t[e];
                  }),
                  (n.response = e.response),
                  (n.request = e.request),
                  (n.config = e.config),
                  n)
                );
              }
              throw e;
            });
        }
      };
    }.call(this, n(2), n(5)));
  },
  function (e, t, n) {
    e.exports = (function () {
      "use strict";
      var e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        t = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        n = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        r = (function () {
          function e(n) {
            var a =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              s =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 5e3;
            t(this, e),
              (this.ctx = n),
              (this.iframes = a),
              (this.exclude = r),
              (this.iframesTimeout = s);
          }
          return (
            n(
              e,
              [
                {
                  key: "getContexts",
                  value: function () {
                    var e = [];
                    return (
                      (void 0 !== this.ctx && this.ctx
                        ? NodeList.prototype.isPrototypeOf(this.ctx)
                          ? Array.prototype.slice.call(this.ctx)
                          : Array.isArray(this.ctx)
                          ? this.ctx
                          : "string" == typeof this.ctx
                          ? Array.prototype.slice.call(
                              document.querySelectorAll(this.ctx)
                            )
                          : [this.ctx]
                        : []
                      ).forEach(function (t) {
                        var n =
                          e.filter(function (e) {
                            return e.contains(t);
                          }).length > 0;
                        -1 !== e.indexOf(t) || n || e.push(t);
                      }),
                      e
                    );
                  },
                },
                {
                  key: "getIframeContents",
                  value: function (e, t) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : function () {},
                      a = void 0;
                    try {
                      var r = e.contentWindow;
                      if (((a = r.document), !r || !a))
                        throw new Error("iframe inaccessible");
                    } catch (e) {
                      n();
                    }
                    a && t(a);
                  },
                },
                {
                  key: "isIframeBlank",
                  value: function (e) {
                    var t = "about:blank",
                      n = e.getAttribute("src").trim();
                    return e.contentWindow.location.href === t && n !== t && n;
                  },
                },
                {
                  key: "observeIframeLoad",
                  value: function (e, t, n) {
                    var a = this,
                      r = !1,
                      s = null,
                      i = function i() {
                        if (!r) {
                          (r = !0), clearTimeout(s);
                          try {
                            a.isIframeBlank(e) ||
                              (e.removeEventListener("load", i),
                              a.getIframeContents(e, t, n));
                          } catch (e) {
                            n();
                          }
                        }
                      };
                    e.addEventListener("load", i),
                      (s = setTimeout(i, this.iframesTimeout));
                  },
                },
                {
                  key: "onIframeReady",
                  value: function (e, t, n) {
                    try {
                      "complete" === e.contentWindow.document.readyState
                        ? this.isIframeBlank(e)
                          ? this.observeIframeLoad(e, t, n)
                          : this.getIframeContents(e, t, n)
                        : this.observeIframeLoad(e, t, n);
                    } catch (e) {
                      n();
                    }
                  },
                },
                {
                  key: "waitForIframes",
                  value: function (e, t) {
                    var n = this,
                      a = 0;
                    this.forEachIframe(
                      e,
                      function () {
                        return !0;
                      },
                      function (e) {
                        a++,
                          n.waitForIframes(
                            e.querySelector("html"),
                            function () {
                              --a || t();
                            }
                          );
                      },
                      function (e) {
                        e || t();
                      }
                    );
                  },
                },
                {
                  key: "forEachIframe",
                  value: function (t, n, a) {
                    var r = this,
                      s =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : function () {},
                      i = t.querySelectorAll("iframe"),
                      o = i.length,
                      d = 0;
                    i = Array.prototype.slice.call(i);
                    var u = function () {
                      --o <= 0 && s(d);
                    };
                    o || u(),
                      i.forEach(function (t) {
                        e.matches(t, r.exclude)
                          ? u()
                          : r.onIframeReady(
                              t,
                              function (e) {
                                n(t) && (d++, a(e)), u();
                              },
                              u
                            );
                      });
                  },
                },
                {
                  key: "createIterator",
                  value: function (e, t, n) {
                    return document.createNodeIterator(e, t, n, !1);
                  },
                },
                {
                  key: "createInstanceOnIframe",
                  value: function (t) {
                    return new e(t.querySelector("html"), this.iframes);
                  },
                },
                {
                  key: "compareNodeIframe",
                  value: function (e, t, n) {
                    if (
                      e.compareDocumentPosition(n) &
                      Node.DOCUMENT_POSITION_PRECEDING
                    ) {
                      if (null === t) return !0;
                      if (
                        t.compareDocumentPosition(n) &
                        Node.DOCUMENT_POSITION_FOLLOWING
                      )
                        return !0;
                    }
                    return !1;
                  },
                },
                {
                  key: "getIteratorNode",
                  value: function (e) {
                    var t = e.previousNode();
                    return {
                      prevNode: t,
                      node: (null === t || e.nextNode()) && e.nextNode(),
                    };
                  },
                },
                {
                  key: "checkIframeFilter",
                  value: function (e, t, n, a) {
                    var r = !1,
                      s = !1;
                    return (
                      a.forEach(function (e, t) {
                        e.val === n && ((r = t), (s = e.handled));
                      }),
                      this.compareNodeIframe(e, t, n)
                        ? (!1 !== r || s
                            ? !1 === r || s || (a[r].handled = !0)
                            : a.push({ val: n, handled: !0 }),
                          !0)
                        : (!1 === r && a.push({ val: n, handled: !1 }), !1)
                    );
                  },
                },
                {
                  key: "handleOpenIframes",
                  value: function (e, t, n, a) {
                    var r = this;
                    e.forEach(function (e) {
                      e.handled ||
                        r.getIframeContents(e.val, function (e) {
                          r.createInstanceOnIframe(e).forEachNode(t, n, a);
                        });
                    });
                  },
                },
                {
                  key: "iterateThroughNodes",
                  value: function (e, t, n, a, r) {
                    for (
                      var s,
                        i = this,
                        o = this.createIterator(t, e, a),
                        d = [],
                        u = [],
                        l = void 0,
                        _ = void 0;
                      (s = void 0),
                        (s = i.getIteratorNode(o)),
                        (_ = s.prevNode),
                        (l = s.node);

                    )
                      this.iframes &&
                        this.forEachIframe(
                          t,
                          function (e) {
                            return i.checkIframeFilter(l, _, e, d);
                          },
                          function (t) {
                            i.createInstanceOnIframe(t).forEachNode(
                              e,
                              function (e) {
                                return u.push(e);
                              },
                              a
                            );
                          }
                        ),
                        u.push(l);
                    u.forEach(function (e) {
                      n(e);
                    }),
                      this.iframes && this.handleOpenIframes(d, e, n, a),
                      r();
                  },
                },
                {
                  key: "forEachNode",
                  value: function (e, t, n) {
                    var a = this,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : function () {},
                      s = this.getContexts(),
                      i = s.length;
                    i || r(),
                      s.forEach(function (s) {
                        var o = function () {
                          a.iterateThroughNodes(e, s, t, n, function () {
                            --i <= 0 && r();
                          });
                        };
                        a.iframes ? a.waitForIframes(s, o) : o();
                      });
                  },
                },
              ],
              [
                {
                  key: "matches",
                  value: function (e, t) {
                    var n = "string" == typeof t ? [t] : t,
                      a =
                        e.matches ||
                        e.matchesSelector ||
                        e.msMatchesSelector ||
                        e.mozMatchesSelector ||
                        e.oMatchesSelector ||
                        e.webkitMatchesSelector;
                    if (a) {
                      var r = !1;
                      return (
                        n.every(function (t) {
                          return !a.call(e, t) || ((r = !0), !1);
                        }),
                        r
                      );
                    }
                    return !1;
                  },
                },
              ]
            ),
            e
          );
        })(),
        s = (function () {
          function s(e) {
            t(this, s), (this.ctx = e), (this.ie = !1);
            var n = window.navigator.userAgent;
            (n.indexOf("MSIE") > -1 || n.indexOf("Trident") > -1) &&
              (this.ie = !0);
          }
          return (
            n(s, [
              {
                key: "log",
                value: function (t) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "debug",
                    a = this.opt.log;
                  this.opt.debug &&
                    "object" === (void 0 === a ? "undefined" : e(a)) &&
                    "function" == typeof a[n] &&
                    a[n]("mark.js: " + t);
                },
              },
              {
                key: "escapeStr",
                value: function (e) {
                  return e.replace(
                    /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
                    "\\$&"
                  );
                },
              },
              {
                key: "createRegExp",
                value: function (e) {
                  return (
                    "disabled" !== this.opt.wildcards &&
                      (e = this.setupWildcardsRegExp(e)),
                    (e = this.escapeStr(e)),
                    Object.keys(this.opt.synonyms).length &&
                      (e = this.createSynonymsRegExp(e)),
                    (this.opt.ignoreJoiners ||
                      this.opt.ignorePunctuation.length) &&
                      (e = this.setupIgnoreJoinersRegExp(e)),
                    this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
                    (e = this.createMergedBlanksRegExp(e)),
                    (this.opt.ignoreJoiners ||
                      this.opt.ignorePunctuation.length) &&
                      (e = this.createJoinersRegExp(e)),
                    "disabled" !== this.opt.wildcards &&
                      (e = this.createWildcardsRegExp(e)),
                    (e = this.createAccuracyRegExp(e))
                  );
                },
              },
              {
                key: "createSynonymsRegExp",
                value: function (e) {
                  var t = this.opt.synonyms,
                    n = this.opt.caseSensitive ? "" : "i",
                    a =
                      this.opt.ignoreJoiners ||
                      this.opt.ignorePunctuation.length
                        ? "\0"
                        : "";
                  for (var r in t)
                    if (t.hasOwnProperty(r)) {
                      var s = t[r],
                        i =
                          "disabled" !== this.opt.wildcards
                            ? this.setupWildcardsRegExp(r)
                            : this.escapeStr(r),
                        o =
                          "disabled" !== this.opt.wildcards
                            ? this.setupWildcardsRegExp(s)
                            : this.escapeStr(s);
                      "" !== i &&
                        "" !== o &&
                        (e = e.replace(
                          new RegExp(
                            "(" +
                              this.escapeStr(i) +
                              "|" +
                              this.escapeStr(o) +
                              ")",
                            "gm" + n
                          ),
                          a +
                            "(" +
                            this.processSynomyms(i) +
                            "|" +
                            this.processSynomyms(o) +
                            ")" +
                            a
                        ));
                    }
                  return e;
                },
              },
              {
                key: "processSynomyms",
                value: function (e) {
                  return (
                    (this.opt.ignoreJoiners ||
                      this.opt.ignorePunctuation.length) &&
                      (e = this.setupIgnoreJoinersRegExp(e)),
                    e
                  );
                },
              },
              {
                key: "setupWildcardsRegExp",
                value: function (e) {
                  return (e = e.replace(/(?:\\)*\?/g, function (e) {
                    return "\\" === e.charAt(0) ? "?" : "";
                  })).replace(/(?:\\)*\*/g, function (e) {
                    return "\\" === e.charAt(0) ? "*" : "";
                  });
                },
              },
              {
                key: "createWildcardsRegExp",
                value: function (e) {
                  var t = "withSpaces" === this.opt.wildcards;
                  return e
                    .replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?")
                    .replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*");
                },
              },
              {
                key: "setupIgnoreJoinersRegExp",
                value: function (e) {
                  return e.replace(/[^(|)\\]/g, function (e, t, n) {
                    var a = n.charAt(t + 1);
                    return /[(|)\\]/.test(a) || "" === a ? e : e + "\0";
                  });
                },
              },
              {
                key: "createJoinersRegExp",
                value: function (e) {
                  var t = [],
                    n = this.opt.ignorePunctuation;
                  return (
                    Array.isArray(n) &&
                      n.length &&
                      t.push(this.escapeStr(n.join(""))),
                    this.opt.ignoreJoiners &&
                      t.push("\\u00ad\\u200b\\u200c\\u200d"),
                    t.length
                      ? e.split(/\u0000+/).join("[" + t.join("") + "]*")
                      : e
                  );
                },
              },
              {
                key: "createDiacriticsRegExp",
                value: function (e) {
                  var t = this.opt.caseSensitive ? "" : "i",
                    n = this.opt.caseSensitive
                      ? [
                          "aàáảãạăằắẳẵặâầấẩẫậäåāą",
                          "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                          "cçćč",
                          "CÇĆČ",
                          "dđď",
                          "DĐĎ",
                          "eèéẻẽẹêềếểễệëěēę",
                          "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                          "iìíỉĩịîïī",
                          "IÌÍỈĨỊÎÏĪ",
                          "lł",
                          "LŁ",
                          "nñňń",
                          "NÑŇŃ",
                          "oòóỏõọôồốổỗộơởỡớờợöøō",
                          "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                          "rř",
                          "RŘ",
                          "sšśșş",
                          "SŠŚȘŞ",
                          "tťțţ",
                          "TŤȚŢ",
                          "uùúủũụưừứửữựûüůū",
                          "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                          "yýỳỷỹỵÿ",
                          "YÝỲỶỸỴŸ",
                          "zžżź",
                          "ZŽŻŹ",
                        ]
                      : [
                          "aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                          "cçćčCÇĆČ",
                          "dđďDĐĎ",
                          "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                          "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ",
                          "lłLŁ",
                          "nñňńNÑŇŃ",
                          "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                          "rřRŘ",
                          "sšśșşSŠŚȘŞ",
                          "tťțţTŤȚŢ",
                          "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                          "yýỳỷỹỵÿYÝỲỶỸỴŸ",
                          "zžżźZŽŻŹ",
                        ],
                    a = [];
                  return (
                    e.split("").forEach(function (r) {
                      n.every(function (n) {
                        if (-1 !== n.indexOf(r)) {
                          if (a.indexOf(n) > -1) return !1;
                          (e = e.replace(
                            new RegExp("[" + n + "]", "gm" + t),
                            "[" + n + "]"
                          )),
                            a.push(n);
                        }
                        return !0;
                      });
                    }),
                    e
                  );
                },
              },
              {
                key: "createMergedBlanksRegExp",
                value: function (e) {
                  return e.replace(/[\s]+/gim, "[\\s]+");
                },
              },
              {
                key: "createAccuracyRegExp",
                value: function (e) {
                  var t = this,
                    n = this.opt.accuracy,
                    a = "string" == typeof n ? n : n.value,
                    r = "string" == typeof n ? [] : n.limiters,
                    s = "";
                  switch (
                    (r.forEach(function (e) {
                      s += "|" + t.escapeStr(e);
                    }),
                    a)
                  ) {
                    case "partially":
                    default:
                      return "()(" + e + ")";
                    case "complementary":
                      return (
                        "()([^" +
                        (s =
                          "\\s" +
                          (s ||
                            this.escapeStr(
                              "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿"
                            ))) +
                        "]*" +
                        e +
                        "[^" +
                        s +
                        "]*)"
                      );
                    case "exactly":
                      return "(^|\\s" + s + ")(" + e + ")(?=$|\\s" + s + ")";
                  }
                },
              },
              {
                key: "getSeparatedKeywords",
                value: function (e) {
                  var t = this,
                    n = [];
                  return (
                    e.forEach(function (e) {
                      t.opt.separateWordSearch
                        ? e.split(" ").forEach(function (e) {
                            e.trim() && -1 === n.indexOf(e) && n.push(e);
                          })
                        : e.trim() && -1 === n.indexOf(e) && n.push(e);
                    }),
                    {
                      keywords: n.sort(function (e, t) {
                        return t.length - e.length;
                      }),
                      length: n.length,
                    }
                  );
                },
              },
              {
                key: "isNumeric",
                value: function (e) {
                  return Number(parseFloat(e)) == e;
                },
              },
              {
                key: "checkRanges",
                value: function (e) {
                  var t = this;
                  if (
                    !Array.isArray(e) ||
                    "[object Object]" !== Object.prototype.toString.call(e[0])
                  )
                    return (
                      this.log(
                        "markRanges() will only accept an array of objects"
                      ),
                      this.opt.noMatch(e),
                      []
                    );
                  var n = [],
                    a = 0;
                  return (
                    e
                      .sort(function (e, t) {
                        return e.start - t.start;
                      })
                      .forEach(function (e) {
                        var r = t.callNoMatchOnInvalidRanges(e, a),
                          s = r.start,
                          i = r.end;
                        r.valid &&
                          ((e.start = s),
                          (e.length = i - s),
                          n.push(e),
                          (a = i));
                      }),
                    n
                  );
                },
              },
              {
                key: "callNoMatchOnInvalidRanges",
                value: function (e, t) {
                  var n = void 0,
                    a = void 0,
                    r = !1;
                  return (
                    e && void 0 !== e.start
                      ? ((a =
                          (n = parseInt(e.start, 10)) + parseInt(e.length, 10)),
                        this.isNumeric(e.start) &&
                        this.isNumeric(e.length) &&
                        a - t > 0 &&
                        a - n > 0
                          ? (r = !0)
                          : (this.log(
                              "Ignoring invalid or overlapping range: " +
                                JSON.stringify(e)
                            ),
                            this.opt.noMatch(e)))
                      : (this.log(
                          "Ignoring invalid range: " + JSON.stringify(e)
                        ),
                        this.opt.noMatch(e)),
                    { start: n, end: a, valid: r }
                  );
                },
              },
              {
                key: "checkWhitespaceRanges",
                value: function (e, t, n) {
                  var a = void 0,
                    r = !0,
                    s = n.length,
                    i = t - s,
                    o = parseInt(e.start, 10) - i;
                  return (
                    (a = (o = o > s ? s : o) + parseInt(e.length, 10)) > s &&
                      ((a = s),
                      this.log(
                        "End range automatically set to the max value of " + s
                      )),
                    o < 0 || a - o < 0 || o > s || a > s
                      ? ((r = !1),
                        this.log("Invalid range: " + JSON.stringify(e)),
                        this.opt.noMatch(e))
                      : "" === n.substring(o, a).replace(/\s+/g, "") &&
                        ((r = !1),
                        this.log(
                          "Skipping whitespace only range: " + JSON.stringify(e)
                        ),
                        this.opt.noMatch(e)),
                    { start: o, end: a, valid: r }
                  );
                },
              },
              {
                key: "getTextNodes",
                value: function (e) {
                  var t = this,
                    n = "",
                    a = [];
                  this.iterator.forEachNode(
                    NodeFilter.SHOW_TEXT,
                    function (e) {
                      a.push({
                        start: n.length,
                        end: (n += e.textContent).length,
                        node: e,
                      });
                    },
                    function (e) {
                      return t.matchesExclude(e.parentNode)
                        ? NodeFilter.FILTER_REJECT
                        : NodeFilter.FILTER_ACCEPT;
                    },
                    function () {
                      e({ value: n, nodes: a });
                    }
                  );
                },
              },
              {
                key: "matchesExclude",
                value: function (e) {
                  return r.matches(
                    e,
                    this.opt.exclude.concat([
                      "script",
                      "style",
                      "title",
                      "head",
                      "html",
                    ])
                  );
                },
              },
              {
                key: "wrapRangeInTextNode",
                value: function (e, t, n) {
                  var a = this.opt.element ? this.opt.element : "mark",
                    r = e.splitText(t),
                    s = r.splitText(n - t),
                    i = document.createElement(a);
                  return (
                    i.setAttribute("data-markjs", "true"),
                    this.opt.className &&
                      i.setAttribute("class", this.opt.className),
                    (i.textContent = r.textContent),
                    r.parentNode.replaceChild(i, r),
                    s
                  );
                },
              },
              {
                key: "wrapRangeInMappedTextNode",
                value: function (e, t, n, a, r) {
                  var s = this;
                  e.nodes.every(function (i, o) {
                    var d = e.nodes[o + 1];
                    if (void 0 === d || d.start > t) {
                      if (!a(i.node)) return !1;
                      var u = t - i.start,
                        l = (n > i.end ? i.end : n) - i.start,
                        _ = e.value.substr(0, i.start),
                        c = e.value.substr(l + i.start);
                      if (
                        ((i.node = s.wrapRangeInTextNode(i.node, u, l)),
                        (e.value = _ + c),
                        e.nodes.forEach(function (t, n) {
                          n >= o &&
                            (e.nodes[n].start > 0 &&
                              n !== o &&
                              (e.nodes[n].start -= l),
                            (e.nodes[n].end -= l));
                        }),
                        (n -= l),
                        r(i.node.previousSibling, i.start),
                        !(n > i.end))
                      )
                        return !1;
                      t = i.end;
                    }
                    return !0;
                  });
                },
              },
              {
                key: "wrapMatches",
                value: function (e, t, n, a, r) {
                  var s = this,
                    i = 0 === t ? 0 : t + 1;
                  this.getTextNodes(function (t) {
                    t.nodes.forEach(function (t) {
                      t = t.node;
                      for (
                        var r = void 0;
                        null !== (r = e.exec(t.textContent)) && "" !== r[i];

                      )
                        if (n(r[i], t)) {
                          var o = r.index;
                          if (0 !== i)
                            for (var d = 1; d < i; d++) o += r[d].length;
                          (t = s.wrapRangeInTextNode(t, o, o + r[i].length)),
                            a(t.previousSibling),
                            (e.lastIndex = 0);
                        }
                    }),
                      r();
                  });
                },
              },
              {
                key: "wrapMatchesAcrossElements",
                value: function (e, t, n, a, r) {
                  var s = this,
                    i = 0 === t ? 0 : t + 1;
                  this.getTextNodes(function (t) {
                    for (
                      var o = void 0;
                      null !== (o = e.exec(t.value)) && "" !== o[i];

                    ) {
                      var d = o.index;
                      if (0 !== i) for (var u = 1; u < i; u++) d += o[u].length;
                      var l = d + o[i].length;
                      s.wrapRangeInMappedTextNode(
                        t,
                        d,
                        l,
                        function (e) {
                          return n(o[i], e);
                        },
                        function (t, n) {
                          (e.lastIndex = n), a(t);
                        }
                      );
                    }
                    r();
                  });
                },
              },
              {
                key: "wrapRangeFromIndex",
                value: function (e, t, n, a) {
                  var r = this;
                  this.getTextNodes(function (s) {
                    var i = s.value.length;
                    e.forEach(function (e, a) {
                      var o = r.checkWhitespaceRanges(e, i, s.value),
                        d = o.start,
                        u = o.end;
                      o.valid &&
                        r.wrapRangeInMappedTextNode(
                          s,
                          d,
                          u,
                          function (n) {
                            return t(n, e, s.value.substring(d, u), a);
                          },
                          function (t) {
                            n(t, e);
                          }
                        );
                    }),
                      a();
                  });
                },
              },
              {
                key: "unwrapMatches",
                value: function (e) {
                  for (
                    var t = e.parentNode, n = document.createDocumentFragment();
                    e.firstChild;

                  )
                    n.appendChild(e.removeChild(e.firstChild));
                  t.replaceChild(n, e),
                    this.ie ? this.normalizeTextNode(t) : t.normalize();
                },
              },
              {
                key: "normalizeTextNode",
                value: function (e) {
                  if (e) {
                    if (3 === e.nodeType)
                      for (; e.nextSibling && 3 === e.nextSibling.nodeType; )
                        (e.nodeValue += e.nextSibling.nodeValue),
                          e.parentNode.removeChild(e.nextSibling);
                    else this.normalizeTextNode(e.firstChild);
                    this.normalizeTextNode(e.nextSibling);
                  }
                },
              },
              {
                key: "markRegExp",
                value: function (e, t) {
                  var n = this;
                  (this.opt = t),
                    this.log('Searching with expression "' + e + '"');
                  var a = 0,
                    r = "wrapMatches";
                  this.opt.acrossElements && (r = "wrapMatchesAcrossElements"),
                    this[r](
                      e,
                      this.opt.ignoreGroups,
                      function (e, t) {
                        return n.opt.filter(t, e, a);
                      },
                      function (e) {
                        a++, n.opt.each(e);
                      },
                      function () {
                        0 === a && n.opt.noMatch(e), n.opt.done(a);
                      }
                    );
                },
              },
              {
                key: "mark",
                value: function (e, t) {
                  var n = this;
                  this.opt = t;
                  var a = 0,
                    r = "wrapMatches",
                    s = this.getSeparatedKeywords(
                      "string" == typeof e ? [e] : e
                    ),
                    i = s.keywords,
                    o = s.length,
                    d = this.opt.caseSensitive ? "" : "i";
                  this.opt.acrossElements && (r = "wrapMatchesAcrossElements"),
                    0 === o
                      ? this.opt.done(a)
                      : (function e(t) {
                          var s = new RegExp(n.createRegExp(t), "gm" + d),
                            u = 0;
                          n.log('Searching with expression "' + s + '"'),
                            n[r](
                              s,
                              1,
                              function (e, r) {
                                return n.opt.filter(r, t, a, u);
                              },
                              function (e) {
                                u++, a++, n.opt.each(e);
                              },
                              function () {
                                0 === u && n.opt.noMatch(t),
                                  i[o - 1] === t
                                    ? n.opt.done(a)
                                    : e(i[i.indexOf(t) + 1]);
                              }
                            );
                        })(i[0]);
                },
              },
              {
                key: "markRanges",
                value: function (e, t) {
                  var n = this;
                  this.opt = t;
                  var a = 0,
                    r = this.checkRanges(e);
                  r && r.length
                    ? (this.log(
                        "Starting to mark with the following ranges: " +
                          JSON.stringify(r)
                      ),
                      this.wrapRangeFromIndex(
                        r,
                        function (e, t, a, r) {
                          return n.opt.filter(e, t, a, r);
                        },
                        function (e, t) {
                          a++, n.opt.each(e, t);
                        },
                        function () {
                          n.opt.done(a);
                        }
                      ))
                    : this.opt.done(a);
                },
              },
              {
                key: "unmark",
                value: function (e) {
                  var t = this;
                  this.opt = e;
                  var n = this.opt.element ? this.opt.element : "*";
                  (n += "[data-markjs]"),
                    this.opt.className && (n += "." + this.opt.className),
                    this.log('Removal selector "' + n + '"'),
                    this.iterator.forEachNode(
                      NodeFilter.SHOW_ELEMENT,
                      function (e) {
                        t.unwrapMatches(e);
                      },
                      function (e) {
                        var a = r.matches(e, n),
                          s = t.matchesExclude(e);
                        return !a || s
                          ? NodeFilter.FILTER_REJECT
                          : NodeFilter.FILTER_ACCEPT;
                      },
                      this.opt.done
                    );
                },
              },
              {
                key: "opt",
                set: function (e) {
                  this._opt = a(
                    {},
                    {
                      element: "",
                      className: "",
                      exclude: [],
                      iframes: !1,
                      iframesTimeout: 5e3,
                      separateWordSearch: !0,
                      diacritics: !0,
                      synonyms: {},
                      accuracy: "partially",
                      acrossElements: !1,
                      caseSensitive: !1,
                      ignoreJoiners: !1,
                      ignoreGroups: 0,
                      ignorePunctuation: [],
                      wildcards: "disabled",
                      each: function () {},
                      noMatch: function () {},
                      filter: function () {
                        return !0;
                      },
                      done: function () {},
                      debug: !1,
                      log: window.console,
                    },
                    e
                  );
                },
                get: function () {
                  return this._opt;
                },
              },
              {
                key: "iterator",
                get: function () {
                  return new r(
                    this.ctx,
                    this.opt.iframes,
                    this.opt.exclude,
                    this.opt.iframesTimeout
                  );
                },
              },
            ]),
            s
          );
        })();
      return function (e) {
        var t = this,
          n = new s(e);
        return (
          (this.mark = function (e, a) {
            return n.mark(e, a), t;
          }),
          (this.markRegExp = function (e, a) {
            return n.markRegExp(e, a), t;
          }),
          (this.markRanges = function (e, a) {
            return n.markRanges(e, a), t;
          }),
          (this.unmark = function (e) {
            return n.unmark(e), t;
          }),
          this
        );
      };
    })();
  },
  function (e, t, n) {
    e.exports = n(143);
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var t = n(3),
          a = n.n(t),
          r = n(140),
          s = n(4),
          i = n.n(s),
          o = n(0),
          d = n.n(o),
          u = n(1),
          l = n.n(u),
          _ = n(141),
          c = n.n(_);
        function m(e, t, n, a, r, s, i) {
          try {
            var o = e[s](i),
              d = o.value;
          } catch (e) {
            return void n(e);
          }
          o.done ? t(d) : Promise.resolve(d).then(a, r);
        }
        var h = function e(t) {
          var n = this,
            s = t.input,
            o = t.showResult,
            u = t.contentApiKey,
            _ = t.homeUrl,
            h = void 0 === _ ? window.location.origin : _,
            f = t.resultTemplate,
            p =
              void 0 === f
                ? '<ul class="search-results-wrapper">\n                                    <p>Search match(es): ##resultCount</p>\n                                    ##results\n                                </ul>'
                : f,
            M = t.singleResultTemplate,
            y = void 0 === M ? '<li><a href="##url">##title</a></li>' : M,
            L = t.excerpt_length,
            Y = void 0 === L ? 15 : L,
            g = t.time_format,
            v = void 0 === g ? "MMMM Do YYYY" : g,
            k = t.mark,
            w = void 0 !== k && k,
            D = t.markOptions,
            T = void 0 === D ? {} : D;
          if (
            ((function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (this.resultCount = 0),
            (this.allReplace = function (e, t) {
              for (var n in t)
                e = e.replace(new RegExp("##".concat(n), "g"), t[n]);
              return e;
            }),
            (this.doSearch = (function () {
              var e,
                t =
                  ((e = a.a.mark(function e(t) {
                    var r, s, o;
                    return a.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n.searchTerm = t.target.value),
                              (e.next = 3),
                              n.api.posts.browse({
                                limit: "all",
                                fields:
                                  "title,url,slug,html,feature_image,published_at,primary_author,primary_tag,excerpt",
                                include: "tags,authors",
                              })
                            );
                          case 3:
                            (r = e.sent),
                              (s = r.filter(function (e) {
                                var t = e.title
                                    .toLowerCase()
                                    .includes(n.searchTerm.toLowerCase()),
                                  a = i.a
                                    .sanitize(e.html, { ALLOWED_TAGS: [""] })
                                    .toLowerCase()
                                    .includes(n.searchTerm.toLowerCase());
                                return t || a;
                              })),
                              (n.resultCount = s.length),
                              0 === n.searchTerm.length
                                ? (n.showResult.innerHTML = "")
                                : ((o = s
                                    .map(function (e) {
                                      var t = {};
                                      if (
                                        (e.title && (t.title = e.title),
                                        e.title && (t.url = e.url),
                                        e.primary_tag &&
                                          ((t.primary_tag_name =
                                            e.primary_tag.name),
                                          (t.primary_tag_url =
                                            e.primary_tag.url)),
                                        e.primary_author)
                                      ) {
                                        var a = e.primary_author,
                                          r = a.name,
                                          s = a.profile_image,
                                          o = a.url;
                                        (t.primary_author_name = r),
                                          (t.primary_author_url = o),
                                          (t.primary_author_avater = s);
                                      }
                                      if (
                                        (e.feature_image &&
                                          (t.feature_image = e.feature_image),
                                        e.html)
                                      ) {
                                        var u = i.a
                                          .sanitize(e.html, {
                                            ALLOWED_TAGS: [""],
                                          })
                                          .split(" ")
                                          .slice(0, n.excerpt_length)
                                          .join(" ");
                                        t.excerpt = u;
                                      }
                                      return (
                                        e.published_at &&
                                          (t.published_at = d()(
                                            e.published_at
                                          ).format(n.time_format)),
                                        (t.resultCount = n.resultCount),
                                        n.allReplace(n.singleResultTemplate, t)
                                      );
                                    })
                                    .join(" ")),
                                  (n.showResult.innerHTML =
                                    void 0 !== n.resultTemplate
                                      ? n.resultTemplate
                                          .replace("##results", o)
                                          .replace(
                                            "##resultCount",
                                            n.resultCount
                                          )
                                          .replace(
                                            "##searchTerm",
                                            n.input.value
                                          )
                                      : o));
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (a, r) {
                      var s = e.apply(t, n);
                      function i(e) {
                        m(s, a, r, i, o, "next", e);
                      }
                      function o(e) {
                        m(s, a, r, i, o, "throw", e);
                      }
                      i(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
            void 0 === s)
          )
            return l()(
              "Ghost Finder Error",
              'Provide "input" selector in options',
              "error"
            );
          if (void 0 === o)
            return l()(
              "Ghost Finder Error",
              'Provide "showResult" selector in options',
              "error"
            );
          if (void 0 === h)
            return l()(
              "Ghost Finder Error",
              'Provide "homeUrl" selector in options',
              "error"
            );
          if (void 0 === u)
            return l()(
              "Ghost Finder Error",
              'Provide "contentApiKey" selector in options',
              "error"
            );
          if (
            ((this.input = document.querySelector(s)),
            (this.homeUrl = h),
            (this.contentApiKey = u),
            (this.resultTemplate = p),
            (this.singleResultTemplate = y),
            (this.showResult = document.querySelector(o)),
            (this.excerpt_length = Y),
            (this.time_format = v),
            w)
          ) {
            var b = document.querySelector(o);
            this.markInstance = new c.a(b);
          }
          this.input.addEventListener("keyup", function (e) {
            var t = n;
            n.doSearch(e).then(function () {
              w && t.markInstance.mark(t.input.value, T);
            });
          }),
            (this.api = new r.a({
              url: this.homeUrl,
              key: this.contentApiKey,
              version: "v3",
            }));
        };
        (e.GhostFinder = h), (window.GhostFinder = h);
      }.call(this, n(2));
  },
  function (e, t, n) {
    var a = (function (e) {
      "use strict";
      var t = Object.prototype,
        n = t.hasOwnProperty,
        a = "function" == typeof Symbol ? Symbol : {},
        r = a.iterator || "@@iterator",
        s = a.asyncIterator || "@@asyncIterator",
        i = a.toStringTag || "@@toStringTag";
      function o(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        o({}, "");
      } catch (e) {
        o = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function d(e, t, n, a) {
        var r = t && t.prototype instanceof _ ? t : _,
          s = Object.create(r.prototype),
          i = new k(a || []);
        return (
          (s._invoke = (function (e, t, n) {
            var a = "suspendedStart";
            return function (r, s) {
              if ("executing" === a)
                throw new Error("Generator is already running");
              if ("completed" === a) {
                if ("throw" === r) throw s;
                return D();
              }
              for (n.method = r, n.arg = s; ; ) {
                var i = n.delegate;
                if (i) {
                  var o = Y(i, n);
                  if (o) {
                    if (o === l) continue;
                    return o;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === a) throw ((a = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                a = "executing";
                var d = u(e, t, n);
                if ("normal" === d.type) {
                  if (
                    ((a = n.done ? "completed" : "suspendedYield"), d.arg === l)
                  )
                    continue;
                  return { value: d.arg, done: n.done };
                }
                "throw" === d.type &&
                  ((a = "completed"), (n.method = "throw"), (n.arg = d.arg));
              }
            };
          })(e, n, i)),
          s
        );
      }
      function u(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = d;
      var l = {};
      function _() {}
      function c() {}
      function m() {}
      var h = {};
      h[r] = function () {
        return this;
      };
      var f = Object.getPrototypeOf,
        p = f && f(f(w([])));
      p && p !== t && n.call(p, r) && (h = p);
      var M = (m.prototype = _.prototype = Object.create(h));
      function y(e) {
        ["next", "throw", "return"].forEach(function (t) {
          o(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function L(e, t) {
        var a;
        this._invoke = function (r, s) {
          function i() {
            return new t(function (a, i) {
              !(function a(r, s, i, o) {
                var d = u(e[r], e, s);
                if ("throw" !== d.type) {
                  var l = d.arg,
                    _ = l.value;
                  return _ && "object" == typeof _ && n.call(_, "__await")
                    ? t.resolve(_.__await).then(
                        function (e) {
                          a("next", e, i, o);
                        },
                        function (e) {
                          a("throw", e, i, o);
                        }
                      )
                    : t.resolve(_).then(
                        function (e) {
                          (l.value = e), i(l);
                        },
                        function (e) {
                          return a("throw", e, i, o);
                        }
                      );
                }
                o(d.arg);
              })(r, s, a, i);
            });
          }
          return (a = a ? a.then(i, i) : i());
        };
      }
      function Y(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              Y(e, t),
              "throw" === t.method)
            )
              return l;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var a = u(n, e.iterator, t.arg);
        if ("throw" === a.type)
          return (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), l;
        var r = a.arg;
        return r
          ? r.done
            ? ((t[e.resultName] = r.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              l)
            : r
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            l);
      }
      function g(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function v(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function k(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(g, this),
          this.reset(!0);
      }
      function w(e) {
        if (e) {
          var t = e[r];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var a = -1,
              s = function t() {
                for (; ++a < e.length; )
                  if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (s.next = s);
          }
        }
        return { next: D };
      }
      function D() {
        return { value: void 0, done: !0 };
      }
      return (
        (c.prototype = M.constructor = m),
        (m.constructor = c),
        (c.displayName = o(m, i, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === c || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, m)
              : ((e.__proto__ = m), o(e, i, "GeneratorFunction")),
            (e.prototype = Object.create(M)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        y(L.prototype),
        (L.prototype[s] = function () {
          return this;
        }),
        (e.AsyncIterator = L),
        (e.async = function (t, n, a, r, s) {
          void 0 === s && (s = Promise);
          var i = new L(d(t, n, a, r), s);
          return e.isGeneratorFunction(n)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        y(M),
        o(M, i, "Generator"),
        (M[r] = function () {
          return this;
        }),
        (M.toString = function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var a = t.pop();
                if (a in e) return (n.value = a), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = w),
        (k.prototype = {
          constructor: k,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(v),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function a(n, a) {
              return (
                (i.type = "throw"),
                (i.arg = e),
                (t.next = n),
                a && ((t.method = "next"), (t.arg = void 0)),
                !!a
              );
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var s = this.tryEntries[r],
                i = s.completion;
              if ("root" === s.tryLoc) return a("end");
              if (s.tryLoc <= this.prev) {
                var o = n.call(s, "catchLoc"),
                  d = n.call(s, "finallyLoc");
                if (o && d) {
                  if (this.prev < s.catchLoc) return a(s.catchLoc, !0);
                  if (this.prev < s.finallyLoc) return a(s.finallyLoc);
                } else if (o) {
                  if (this.prev < s.catchLoc) return a(s.catchLoc, !0);
                } else {
                  if (!d)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < s.finallyLoc) return a(s.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var r = this.tryEntries[a];
              if (
                r.tryLoc <= this.prev &&
                n.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var s = r;
                break;
              }
            }
            s &&
              ("break" === e || "continue" === e) &&
              s.tryLoc <= t &&
              t <= s.finallyLoc &&
              (s = null);
            var i = s ? s.completion : {};
            return (
              (i.type = e),
              (i.arg = t),
              s
                ? ((this.method = "next"), (this.next = s.finallyLoc), l)
                : this.complete(i)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              l
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), v(n), l;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var a = n.completion;
                if ("throw" === a.type) {
                  var r = a.arg;
                  v(n);
                }
                return r;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: w(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = a;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(a);
    }
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    var a = {
      "./af": 6,
      "./af.js": 6,
      "./ar": 7,
      "./ar-dz": 8,
      "./ar-dz.js": 8,
      "./ar-kw": 9,
      "./ar-kw.js": 9,
      "./ar-ly": 10,
      "./ar-ly.js": 10,
      "./ar-ma": 11,
      "./ar-ma.js": 11,
      "./ar-sa": 12,
      "./ar-sa.js": 12,
      "./ar-tn": 13,
      "./ar-tn.js": 13,
      "./ar.js": 7,
      "./az": 14,
      "./az.js": 14,
      "./be": 15,
      "./be.js": 15,
      "./bg": 16,
      "./bg.js": 16,
      "./bm": 17,
      "./bm.js": 17,
      "./bn": 18,
      "./bn.js": 18,
      "./bo": 19,
      "./bo.js": 19,
      "./br": 20,
      "./br.js": 20,
      "./bs": 21,
      "./bs.js": 21,
      "./ca": 22,
      "./ca.js": 22,
      "./cs": 23,
      "./cs.js": 23,
      "./cv": 24,
      "./cv.js": 24,
      "./cy": 25,
      "./cy.js": 25,
      "./da": 26,
      "./da.js": 26,
      "./de": 27,
      "./de-at": 28,
      "./de-at.js": 28,
      "./de-ch": 29,
      "./de-ch.js": 29,
      "./de.js": 27,
      "./dv": 30,
      "./dv.js": 30,
      "./el": 31,
      "./el.js": 31,
      "./en-au": 32,
      "./en-au.js": 32,
      "./en-ca": 33,
      "./en-ca.js": 33,
      "./en-gb": 34,
      "./en-gb.js": 34,
      "./en-ie": 35,
      "./en-ie.js": 35,
      "./en-il": 36,
      "./en-il.js": 36,
      "./en-in": 37,
      "./en-in.js": 37,
      "./en-nz": 38,
      "./en-nz.js": 38,
      "./en-sg": 39,
      "./en-sg.js": 39,
      "./eo": 40,
      "./eo.js": 40,
      "./es": 41,
      "./es-do": 42,
      "./es-do.js": 42,
      "./es-us": 43,
      "./es-us.js": 43,
      "./es.js": 41,
      "./et": 44,
      "./et.js": 44,
      "./eu": 45,
      "./eu.js": 45,
      "./fa": 46,
      "./fa.js": 46,
      "./fi": 47,
      "./fi.js": 47,
      "./fil": 48,
      "./fil.js": 48,
      "./fo": 49,
      "./fo.js": 49,
      "./fr": 50,
      "./fr-ca": 51,
      "./fr-ca.js": 51,
      "./fr-ch": 52,
      "./fr-ch.js": 52,
      "./fr.js": 50,
      "./fy": 53,
      "./fy.js": 53,
      "./ga": 54,
      "./ga.js": 54,
      "./gd": 55,
      "./gd.js": 55,
      "./gl": 56,
      "./gl.js": 56,
      "./gom-deva": 57,
      "./gom-deva.js": 57,
      "./gom-latn": 58,
      "./gom-latn.js": 58,
      "./gu": 59,
      "./gu.js": 59,
      "./he": 60,
      "./he.js": 60,
      "./hi": 61,
      "./hi.js": 61,
      "./hr": 62,
      "./hr.js": 62,
      "./hu": 63,
      "./hu.js": 63,
      "./hy-am": 64,
      "./hy-am.js": 64,
      "./id": 65,
      "./id.js": 65,
      "./is": 66,
      "./is.js": 66,
      "./it": 67,
      "./it-ch": 68,
      "./it-ch.js": 68,
      "./it.js": 67,
      "./ja": 69,
      "./ja.js": 69,
      "./jv": 70,
      "./jv.js": 70,
      "./ka": 71,
      "./ka.js": 71,
      "./kk": 72,
      "./kk.js": 72,
      "./km": 73,
      "./km.js": 73,
      "./kn": 74,
      "./kn.js": 74,
      "./ko": 75,
      "./ko.js": 75,
      "./ku": 76,
      "./ku.js": 76,
      "./ky": 77,
      "./ky.js": 77,
      "./lb": 78,
      "./lb.js": 78,
      "./lo": 79,
      "./lo.js": 79,
      "./lt": 80,
      "./lt.js": 80,
      "./lv": 81,
      "./lv.js": 81,
      "./me": 82,
      "./me.js": 82,
      "./mi": 83,
      "./mi.js": 83,
      "./mk": 84,
      "./mk.js": 84,
      "./ml": 85,
      "./ml.js": 85,
      "./mn": 86,
      "./mn.js": 86,
      "./mr": 87,
      "./mr.js": 87,
      "./ms": 88,
      "./ms-my": 89,
      "./ms-my.js": 89,
      "./ms.js": 88,
      "./mt": 90,
      "./mt.js": 90,
      "./my": 91,
      "./my.js": 91,
      "./nb": 92,
      "./nb.js": 92,
      "./ne": 93,
      "./ne.js": 93,
      "./nl": 94,
      "./nl-be": 95,
      "./nl-be.js": 95,
      "./nl.js": 94,
      "./nn": 96,
      "./nn.js": 96,
      "./oc-lnc": 97,
      "./oc-lnc.js": 97,
      "./pa-in": 98,
      "./pa-in.js": 98,
      "./pl": 99,
      "./pl.js": 99,
      "./pt": 100,
      "./pt-br": 101,
      "./pt-br.js": 101,
      "./pt.js": 100,
      "./ro": 102,
      "./ro.js": 102,
      "./ru": 103,
      "./ru.js": 103,
      "./sd": 104,
      "./sd.js": 104,
      "./se": 105,
      "./se.js": 105,
      "./si": 106,
      "./si.js": 106,
      "./sk": 107,
      "./sk.js": 107,
      "./sl": 108,
      "./sl.js": 108,
      "./sq": 109,
      "./sq.js": 109,
      "./sr": 110,
      "./sr-cyrl": 111,
      "./sr-cyrl.js": 111,
      "./sr.js": 110,
      "./ss": 112,
      "./ss.js": 112,
      "./sv": 113,
      "./sv.js": 113,
      "./sw": 114,
      "./sw.js": 114,
      "./ta": 115,
      "./ta.js": 115,
      "./te": 116,
      "./te.js": 116,
      "./tet": 117,
      "./tet.js": 117,
      "./tg": 118,
      "./tg.js": 118,
      "./th": 119,
      "./th.js": 119,
      "./tk": 120,
      "./tk.js": 120,
      "./tl-ph": 121,
      "./tl-ph.js": 121,
      "./tlh": 122,
      "./tlh.js": 122,
      "./tr": 123,
      "./tr.js": 123,
      "./tzl": 124,
      "./tzl.js": 124,
      "./tzm": 125,
      "./tzm-latn": 126,
      "./tzm-latn.js": 126,
      "./tzm.js": 125,
      "./ug-cn": 127,
      "./ug-cn.js": 127,
      "./uk": 128,
      "./uk.js": 128,
      "./ur": 129,
      "./ur.js": 129,
      "./uz": 130,
      "./uz-latn": 131,
      "./uz-latn.js": 131,
      "./uz.js": 130,
      "./vi": 132,
      "./vi.js": 132,
      "./x-pseudo": 133,
      "./x-pseudo.js": 133,
      "./yo": 134,
      "./yo.js": 134,
      "./zh-cn": 135,
      "./zh-cn.js": 135,
      "./zh-hk": 136,
      "./zh-hk.js": 136,
      "./zh-mo": 137,
      "./zh-mo.js": 137,
      "./zh-tw": 138,
      "./zh-tw.js": 138,
    };
    function r(e) {
      var t = s(e);
      return n(t);
    }
    function s(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return a[e];
    }
    (r.keys = function () {
      return Object.keys(a);
    }),
      (r.resolve = s),
      (e.exports = r),
      (r.id = 146);
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        "use strict";
        if (!e.setImmediate) {
          var a,
            r,
            s,
            i,
            o,
            d = 1,
            u = {},
            l = !1,
            _ = e.document,
            c = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (c = c && c.setTimeout ? c : e),
            "[object process]" === {}.toString.call(e.process)
              ? (a = function (e) {
                  t.nextTick(function () {
                    h(e);
                  });
                })
              : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? e.MessageChannel
                ? (((s = new MessageChannel()).port1.onmessage = function (e) {
                    h(e.data);
                  }),
                  (a = function (e) {
                    s.port2.postMessage(e);
                  }))
                : _ && "onreadystatechange" in _.createElement("script")
                ? ((r = _.documentElement),
                  (a = function (e) {
                    var t = _.createElement("script");
                    (t.onreadystatechange = function () {
                      h(e),
                        (t.onreadystatechange = null),
                        r.removeChild(t),
                        (t = null);
                    }),
                      r.appendChild(t);
                  }))
                : (a = function (e) {
                    setTimeout(h, 0, e);
                  })
              : ((i = "setImmediate$" + Math.random() + "$"),
                (o = function (t) {
                  t.source === e &&
                    "string" == typeof t.data &&
                    0 === t.data.indexOf(i) &&
                    h(+t.data.slice(i.length));
                }),
                e.addEventListener
                  ? e.addEventListener("message", o, !1)
                  : e.attachEvent("onmessage", o),
                (a = function (t) {
                  e.postMessage(i + t, "*");
                })),
            (c.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var r = { callback: e, args: t };
              return (u[d] = r), a(d), d++;
            }),
            (c.clearImmediate = m);
        }
        function m(e) {
          delete u[e];
        }
        function h(e) {
          if (l) setTimeout(h, 0, e);
          else {
            var t = u[e];
            if (t) {
              l = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n);
                  }
                })(t);
              } finally {
                m(e), (l = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }.call(this, n(2), n(5)));
  },
]);
