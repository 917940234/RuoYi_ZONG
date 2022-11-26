!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = "length" in a && a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function (a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType;) ;
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
            } catch (e) {
            }
            sa.set(a, b, c)
        } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {
        }
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z, c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;) if (b = Xa[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function () {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && xa(a), p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], $a.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0
            }
            m[d] = p && p[d] || _.style(a, d)
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function () {
                _(a).hide()
            }), l.done(function () {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0, g = bb.length, h = _.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Ya || D(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c)) for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }

        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function (b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty,
        Y = {}, Z = a.document, $ = "2.1.4", _ = function (a, b) {
            return new _.fn.init(a, b)
        }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ba = /^-ms-/, ca = /-([\da-z])/gi, da = function (a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $, constructor: _, selector: "", length: 0, toArray: function () {
            return R.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        }, pushStack: function (a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return _.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(_.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(R.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: T, sort: Q.sort, splice: Q.splice
    }, _.extend = _.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === _.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isPlainObject: function (a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(ba, "ms-").replace(ca, da)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(aa, "")
        }, makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        }, inArray: function (a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        }, now: Date.now, support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {
                    } finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }

            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {
        }

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }

        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--;) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                return a === b
            }, g, !0), j = n(function (a) {
                return aa(b, a) > -1
            }, g, !0), k = [function (a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; e > h; h++) if (c = w.relative[a[h].type]) k = [n(o(k), c)]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                }
                k.push(c)
            }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j),
                    u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++];) if (m(k, g, h)) {
                            i.push(k);
                            break
                        }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++];) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s), p
            };
            return e ? d(g) : g
        }

        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0,
            Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"), oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, xa = function () {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];) ;
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function (a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            }, U = b ? function (a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return b(c, G, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [P, n, m];
                                    break
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b));) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }), contains: d(function (a) {
                    return a = a.replace(va, wa), function (b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }), lang: d(function (a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), function (b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === H
                }, focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !w.pseudos.empty(a)
                }, header: function (a) {
                    return qa.test(a.nodeName)
                }, input: function (a) {
                    return pa.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: j(function () {
                    return [0]
                }), last: j(function (a, b) {
                    return [b - 1]
                }), eq: j(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: j(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: j(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[u] = h(u);
        for (u in {submit: !0, reset: !0}) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function (a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext, ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ha = /^.[^:#\[\.,]*$/;
    _.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function () {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        }, is: function (a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ka = _.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
    };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/, ma = {children: !0, contents: !0, next: !0, prev: !0};
    _.extend({
        dir: function (a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function (a) {
            var b = _(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return _.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return _.dir(a, "parentNode", c)
        }, next: function (a) {
            return e(a, "nextSibling")
        }, prev: function (a) {
            return e(a, "previousSibling")
        }, nextAll: function (a) {
            return _.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return _.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return _.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return _.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return _.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function (a, b) {
        _.fn[a] = function (c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g, oa = {};
    _.Callbacks = function (a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function (f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
        }, l = {
            add: function () {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function (b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), d ? g = i.length : b && (e = c, k(b))
                }
                return this
            }, remove: function () {
                return i && _.each(arguments, function (a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                }), this
            }, has: function (a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
            }, empty: function () {
                return i = [], g = 0, this
            }, disable: function () {
                return i = j = b = void 0, this
            }, disabled: function () {
                return !i
            }, lock: function () {
                return j = void 0, b || l.disable(), this
            }, locked: function () {
                return !j
            }, fireWith: function (a, b) {
                return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return l
    }, _.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return _.Deferred(function (c) {
                            _.each(b, function (b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? _.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, _.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = R.call(arguments), g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function (a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? _.readyWait++ : _.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function (b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(_(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function (a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        }, hasData: function (a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h, sa = new h, ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ua = /([A-Z])/g;
    _.extend({
        hasData: function (a) {
            return sa.hasData(a) || ra.hasData(a)
        }, data: function (a, b, c) {
            return sa.access(a, b, c)
        }, removeData: function (a, b) {
            sa.remove(a, b)
        }, _data: function (a, b, c) {
            return ra.access(a, b, c)
        }, _removeData: function (a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                sa.set(this, a)
            }) : qa(this, function (b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function () {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function () {
                _.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function () {
                    ra.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                _.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, wa = ["Top", "Right", "Bottom", "Left"],
        xa = function (a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        }, ya = /^(?:checkbox|radio)$/i;
    !function () {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/, Ba = /^(?:mouse|pointer|contextmenu)|click/, Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;) if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z], n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return _.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = _.extend(new _.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function (a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        _.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function () {
                _.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function () {
                _.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                _.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/, Ha = /<(?:script|style|link)/i, Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i, Ka = /^true\/(.*)/, La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e); else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function (a) {
            return qa(this, function (a) {
                return void 0 === a ? _.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return _.clone(this, a, b)
            })
        }, html: function (a) {
            return qa(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function (c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        _.fn[a] = function (a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {}, Pa = /^margin/, Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"), Ra = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    };
    !function () {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }

        var c, d, e = Z.documentElement, f = Z.createElement("div"), g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function () {
                return b(), c
            }, boxSizingReliable: function () {
                return null == d && b(), d
            }, reliableMarginRight: function () {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/, Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {position: "absolute", visibility: "hidden", display: "block"},
        Wa = {letterSpacing: "0", fontWeight: "400"}, Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function (a, b) {
        _.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function () {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function (a, b) {
        return b ? _.swap(a, {display: "inline-block"}, v, [a, "marginRight"]) : void 0
    }), _.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        _.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function (a, b) {
            return qa(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return B(this, !0)
        }, hide: function () {
            return B(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/, _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/, bb = [G], cb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = _a.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
        tweener: function (a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? bb.unshift(a) : bb.push(a)
        }
    }), _.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function () {
                var b = I(this, _.extend({}, a), f);
                (e || ra.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = ra.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []),
                     e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function (a, b) {
        var c = _.fn[b];
        _.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        _.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function () {
        var a, b = 0, c = _.timers;
        for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function (a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function () {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function () {
        clearInterval(Za), Za = null
    }, _.fx.speeds = {slow: 600, fast: 200, _default: 400}, _.fn.delay = function (a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
    }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function (a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(na);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function (a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function (a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function (a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function (b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function (b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h) for (b = (a || "").match(na) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function (c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = _.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
            }
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function () {
        _.valHooks[this] = {
            set: function (a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        _.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(), kb = /\?/;
    _.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, _.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/, mb = /([?&])_=[^&]*/, nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pb = /^(?:GET|HEAD)$/, qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, sb = {}, tb = {}, ub = "*/".concat("*"),
        vb = a.location.href, wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": _.parseJSON, "text xml": _.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function (a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }

            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(),
                p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!g) for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {success: 1, error: 1, complete: 1}) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function (a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function (a, b) {
        _[b] = function (a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function (a) {
        return _.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, _.fn.extend({
        wrapAll: function (a) {
            var b;
            return _.isFunction(a) ? this.each(function (b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(_.isFunction(a) ? function (b) {
                _(this).wrapInner(a.call(this, b))
            } : function () {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = _.isFunction(a);
            return this.each(function (c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function (a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g, yb = /\[\]$/, zb = /\r?\n/g, Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function () {
            return _.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function (a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function (a) {
                    return {name: b.name, value: a.replace(zb, "\r\n")}
                }) : {name: b.name, value: c.replace(zb, "\r\n")}
            }).get()
        }
    }), _.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cb = 0, Db = {}, Eb = {0: 200, 1223: 204}, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Db) Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function (a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Gb = [], Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function (a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        _.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function (a) {
        return _.grep(_.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function (e) {
            return qa(this, function (b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function (a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function (a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({Height: "height", Width: "width"}, function (a, b) {
        _.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            _.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function (b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function () {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return _
    });
    var Kb = a.jQuery, Lb = a.$;
    return _.noConflict = function (b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}), function (a, b) {
    function c(b, c) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
    }

    function d(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
            return "hidden" === a.css(this, "visibility")
        }).length
    }

    var e = 0, f = /^ui-id-\d+$/;
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        focus: function (b) {
            return function (c, d) {
                return "number" == typeof c ? this.each(function () {
                    var b = this;
                    setTimeout(function () {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus), scrollParent: function () {
            var b;
            return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        }, zIndex: function (c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e)) return e;
                f = f.parent()
            }
            return 0
        }, uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++e)
            })
        }, removeUniqueId: function () {
            return this.each(function () {
                f.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
            return function (c) {
                return !!a.data(c, b)
            }
        }) : function (b, c, d) {
            return !!a.data(b, d[3])
        }, focusable: function (b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        }, tabbable: function (b) {
            var d = a.attr(b, "tabindex"), e = isNaN(d);
            return (e || d >= 0) && c(b, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
        function e(b, c, d, e) {
            return a.each(f, function () {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }

        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"], g = d.toLowerCase(), h = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + d] = function (c) {
            return c === b ? h["inner" + d].call(this) : this.each(function () {
                a(this).css(g, e(this, c) + "px")
            })
        }, a.fn["outer" + d] = function (b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function () {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
        return function (c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
        disableSelection: function () {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                a.preventDefault()
            })
        }, enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), a.extend(a.ui, {
        plugin: {
            add: function (b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            }, call: function (a, b, c) {
                var d, e = a.plugins[b];
                if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType) for (d = 0; d < e.length; d++) a.options[e[d][0]] && e[d][1].apply(a.element, c)
            }
        }, hasScroll: function (b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
        }
    })
}(jQuery), function (a, b) {
    var c = 0, d = Array.prototype.slice, e = a.cleanData;
    a.cleanData = function (b) {
        for (var c, d = 0; null != (c = b[d]); d++) try {
            a(c).triggerHandler("remove")
        } catch (f) {
        }
        e(b)
    }, a.widget = function (b, c, d) {
        var e, f, g, h, i = {}, j = b.split(".")[0];
        b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function (a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, d) {
            return a.isFunction(d) ? void (i[b] = function () {
                var a = function () {
                    return c.prototype[b].apply(this, arguments)
                }, e = function (a) {
                    return c.prototype[b].apply(this, a)
                };
                return function () {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void (i[b] = d)
        }), g.prototype = a.widget.extend(h, {widgetEventPrefix: f ? h.widgetEventPrefix || b : b}, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function (b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g)
    }, a.widget.extend = function (c) {
        for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++) for (e in g[h]) f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (a.isPlainObject(f) ? c[e] = a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : c[e] = f);
        return c
    }, a.widget.bridge = function (c, e) {
        var f = e.prototype.widgetFullName || c;
        a.fn[c] = function (g) {
            var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
            return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, this.each(h ? function () {
                var d, e = a.data(this, f);
                return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : void 0) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
            } : function () {
                var b = a.data(this, f);
                b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
            }), j
        }
    }, a.Widget = function () {
    }, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (b, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function () {
            return this.element
        },
        option: function (c, d) {
            var e, f, g, h = c;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof c) if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; g < e.length - 1; g++) f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                if (c = e.pop(), 1 === arguments.length) return f[c] === b ? null : f[c];
                f[c] = d
            } else {
                if (1 === arguments.length) return this.options[c] === b ? null : this.options[c];
                h[c] = d
            }
            return this._setOptions(h), this
        },
        _setOptions: function (a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function (a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }

                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^(\w+)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },
        _off: function (a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
        },
        _delay: function (a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }

            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function (b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function (b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function (b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                }, focusout: function (b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent) for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({show: "fadeIn", hide: "fadeOut"}, function (b, c) {
        a.Widget.prototype["_" + b] = function (d, e, f) {
            "string" == typeof e && (e = {effect: e});
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    })
}(jQuery), function () {
    function a(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }

    function b() {
        var a, b, c = arguments, d = {}, e = function (a, b) {
            var c, d;
            "object" != typeof a && (a = {});
            for (d in b) b.hasOwnProperty(d) && (c = b[d], c && "object" == typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" != typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]);
            return a
        };
        for (c[0] === !0 && (d = c[1], c = Array.prototype.slice.call(c, 2)), b = c.length, a = 0; b > a; a++) d = e(d, c[a]);
        return d
    }

    function c(a, b) {
        return parseInt(a, b || 10)
    }

    function d(a) {
        return "string" == typeof a
    }

    function e(a) {
        return a && "object" == typeof a
    }

    function f(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function g(a) {
        return "number" == typeof a
    }

    function h(a) {
        return na.log(a) / na.LN10
    }

    function i(a) {
        return na.pow(10, a)
    }

    function j(a, b) {
        for (var c = a.length; c--;) if (a[c] === b) {
            a.splice(c, 1);
            break
        }
    }

    function k(a) {
        return a !== N && null !== a
    }

    function l(a, b, c) {
        var f, g;
        if (d(b)) k(c) ? a.setAttribute(b, c) : a && a.getAttribute && (g = a.getAttribute(b)); else if (k(b) && e(b)) for (f in b) a.setAttribute(f, b[f]);
        return g
    }

    function m(a) {
        return f(a) ? a : [a]
    }

    function n() {
        var a, b, c = arguments, d = c.length;
        for (a = 0; d > a; a++) if (b = c[a], b !== N && null !== b) return b
    }

    function o(b, c) {
        Aa && !Ga && c && c.opacity !== N && (c.filter = "alpha(opacity=" + 100 * c.opacity + ")"),
            a(b.style, c)
    }

    function p(b, c, d, e, f) {
        var g = la.createElement(b);
        return c && a(g, c), f && o(g, {padding: 0, border: Xa, margin: 0}), d && o(g, d), e && e.appendChild(g), g
    }

    function q(b, c) {
        var d = function () {
            return N
        };
        return d.prototype = new b, a(d.prototype, c), d
    }

    function r(a, b, d, e) {
        var f = ka.numberFormat, g = R.lang, h = +a || 0,
            i = -1 === b ? (h.toString().split(".")[1] || "").length : isNaN(b = ta(b)) ? 2 : b,
            j = void 0 === d ? g.decimalPoint : d, k = void 0 === e ? g.thousandsSep : e, l = 0 > h ? "-" : "",
            m = String(c(h = ta(h).toFixed(i))), n = m.length > 3 ? m.length % 3 : 0;
        return f !== r ? f(a, b, d, e) : l + (n ? m.substr(0, n) + k : "") + m.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + k) + (i ? j + ta(h - m).toFixed(i).slice(2) : "")
    }

    function s(a, b) {
        return new Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function t(a, b, c) {
        var d = a[b];
        a[b] = function () {
            var a = Array.prototype.slice.call(arguments);
            return a.unshift(d), c.apply(this, a)
        }
    }

    function u(a, b) {
        var c, d = /f$/, e = /\.([0-9])/, f = R.lang;
        return d.test(a) ? (c = a.match(e), c = c ? c[1] : -1, null !== b && (b = r(b, c, f.decimalPoint, a.indexOf(",") > -1 ? f.thousandsSep : ""))) : b = S(a, b), b
    }

    function v(a, b) {
        for (var c, d, e, f, g, h, i, j = "{", k = !1, l = []; -1 !== (i = a.indexOf(j));) {
            if (c = a.slice(0, i), k) {
                for (d = c.split(":"), e = d.shift().split("."), g = e.length, h = b, f = 0; g > f; f++) h = h[e[f]];
                d.length && (h = u(d.join(":"), h)), l.push(h)
            } else l.push(c);
            a = a.slice(i + 1), k = !k, j = k ? "}" : "{"
        }
        return l.push(a), l.join("")
    }

    function w(a) {
        return na.pow(10, pa(na.log(a) / na.LN10))
    }

    function x(a, b, c, d) {
        var e, f;
        for (c = n(c, 1), e = a / c, b || (b = [1, 2, 2.5, 5, 10], d === !1 && (1 === c ? b = [1, 2, 5, 10] : .1 >= c && (b = [1 / c]))), f = 0; f < b.length && (a = b[f], !(e <= (b[f] + (b[f + 1] || b[f])) / 2)); f++) ;
        return a *= c
    }

    function y(a, b) {
        var c, d, e = a.length;
        for (d = 0; e > d; d++) a[d].ss_i = d;
        for (a.sort(function (a, d) {
            return c = b(a, d), 0 === c ? a.ss_i - d.ss_i : c
        }), d = 0; e > d; d++) delete a[d].ss_i
    }

    function z(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function A(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function B(a, b) {
        var c;
        for (c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }

    function C(a) {
        Q || (Q = p(Qa)), a && Q.appendChild(a), Q.innerHTML = ""
    }

    function D(a) {
        return parseFloat(a.toPrecision(14))
    }

    function E(a, b) {
        T = n(a, b.animation)
    }

    function F() {
        var a = R.global.useUTC, b = a ? "getUTC" : "get", c = a ? "setUTC" : "set";
        Y = R.global.Date || window.Date, $ = 6e4 * (a && R.global.timezoneOffset || 0), Z = a ? Y.UTC : function (a, b, c, d, e, f) {
            return new Y(a, b, n(c, 1), n(d, 0), n(e, 0), n(f, 0)).getTime()
        }, _ = b + "Minutes", aa = b + "Hours", ba = b + "Day", ca = b + "Date", da = b + "Month", ea = b + "FullYear", fa = c + "Minutes", ga = c + "Hours", ha = c + "Date", ia = c + "Month", ja = c + "FullYear"
    }

    function G(a) {
        return R = b(!0, R, a), F(), R
    }

    function H() {
        return R
    }

    function I() {
    }

    function J(a, b, c, d) {
        this.axis = a, this.pos = b, this.type = c || "", this.isNew = !0, c || d || this.addLabel()
    }

    function K() {
        this.init.apply(this, arguments)
    }

    function L() {
        this.init.apply(this, arguments)
    }

    function M(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a, this.isNegative = c, this.options = b, this.x = d, this.total = null, this.points = {}, this.stack = e, this.alignOptions = {
            align: b.align || (f ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"),
            y: n(b.y, f ? 4 : c ? 14 : -6),
            x: n(b.x, f ? c ? -6 : 6 : 0)
        }, this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    }

    var N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la = document,
        ma = window, na = Math, oa = na.round, pa = na.floor, qa = na.ceil, ra = na.max, sa = na.min, ta = na.abs,
        ua = na.cos, va = na.sin, wa = na.PI, xa = 2 * wa / 360, ya = navigator.userAgent, za = ma.opera,
        Aa = /msie/i.test(ya) && !za, Ba = 8 === la.documentMode, Ca = /AppleWebKit/.test(ya), Da = /Firefox/.test(ya),
        Ea = /(Mobile|Android|Windows Phone)/.test(ya), Fa = "http://www.w3.org/2000/svg",
        Ga = !!la.createElementNS && !!la.createElementNS(Fa, "svg").createSVGRect,
        Ha = Da && parseInt(ya.split("Firefox/")[1], 10) < 4,
        Ia = !Ga && !Aa && !!la.createElement("canvas").getContext, Ja = {}, Ka = 0, La = function () {
            return N
        }, Ma = [], Na = 0, Oa = "Highcharts", Pa = "4.0.4", Qa = "div", Ra = "absolute", Sa = "relative", Ta = "hidden",
        Ua = "highcharts-", Va = "visible", Wa = "px", Xa = "none", Ya = "M", Za = "L", $a = /^[0-9]+$/, _a = "",
        ab = "hover", bb = "select", cb = "stroke-width", db = {};
    ma.Highcharts ? W(16, !0) : ka = ma.Highcharts = {}, S = function (b, c, d) {
        if (!k(c) || isNaN(c)) return "Invalid date";
        b = n(b, "%Y-%m-%d %H:%M:%S");
        var e, f = new Y(c - $), g = f[aa](), h = f[ba](), i = f[ca](), j = f[da](), l = f[ea](), m = R.lang,
            o = m.weekdays, p = a({
                a: o[h].substr(0, 3),
                A: o[h],
                d: s(i),
                e: i,
                b: m.shortMonths[j],
                B: m.months[j],
                m: s(j + 1),
                y: l.toString().substr(2, 2),
                Y: l,
                H: s(g),
                I: s(g % 12 || 12),
                l: g % 12 || 12,
                M: s(f[_]()),
                p: 12 > g ? "AM" : "PM",
                P: 12 > g ? "am" : "pm",
                S: s(f.getSeconds()),
                L: s(oa(c % 1e3), 3)
            }, ka.dateFormats);
        for (e in p) for (; -1 !== b.indexOf("%" + e);) b = b.replace("%" + e, "function" == typeof p[e] ? p[e](c) : p[e]);
        return d ? b.substr(0, 1).toUpperCase() + b.substr(1) : b
    }, W = function (a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        ma.console && console.log(c)
    }, V = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5,
        week: 6048e5,
        month: 26784e5,
        year: 31556952e3
    }, U = {
        init: function (a, b, c) {
            b = b || "";
            var d, e, f, g, h, i = a.shift, j = b.indexOf("C") > -1, k = j ? 7 : 3, l = b.split(" "), m = [].concat(c),
                n = function (a) {
                    for (f = a.length; f--;) a[f] === Ya && a.splice(f + 1, 0, a[f + 1], a[f + 2], a[f + 1], a[f + 2])
                };
            if (j && (n(l), n(m)), a.isArea && (g = l.splice(l.length - 6, 6), h = m.splice(m.length - 6, 6)), i <= m.length / k && l.length === m.length) for (; i--;) m = [].concat(m).splice(0, k).concat(m);
            if (a.shift = 0, l.length) for (d = m.length; l.length < d;) e = [].concat(l).splice(l.length - k, k), j && (e[k - 6] = e[k - 2], e[k - 5] = e[k - 1]), l = l.concat(e);
            return g && (l = l.concat(g), m = m.concat(h)), [l, m]
        }, step: function (a, b, c, d) {
            var e, f = [], g = a.length;
            if (1 === c) f = d; else if (g === b.length && 1 > c) for (; g--;) e = parseFloat(a[g]), f[g] = isNaN(e) ? a[g] : c * parseFloat(b[g] - e) + e; else f = b;
            return f
        }
    }, function (b) {
        ma.HighchartsAdapter = ma.HighchartsAdapter || b && {
            init: function (a) {
                var c = b.fx;
                b.extend(b.easing, {
                    easeOutQuad: function (a, b, c, d, e) {
                        return -d * (b /= e) * (b - 2) + c
                    }
                }), b.each(["cur", "_default", "width", "height", "opacity"], function (a, d) {
                    var e, f = c.step;
                    "cur" === d ? f = c.prototype : "_default" === d && b.Tween && (f = b.Tween.propHooks[d], d = "set"), e = f[d], e && (f[d] = function (b) {
                        var c;
                        return b = a ? b : this, "align" !== b.prop ? (c = b.elem, c.attr ? c.attr(b.prop, "cur" === d ? N : b.now) : e.apply(this, arguments)) : void 0
                    })
                }), t(b.cssHooks.opacity, "get", function (a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c)
                }), this.addAnimSetter("d", function (b) {
                    var c, d = b.elem;
                    b.started || (c = a.init(d, d.d, d.toD), b.start = c[0], b.end = c[1], b.started = !0), d.attr("d", a.step(b.start, b.end, b.pos, d.toD))
                }), this.each = Array.prototype.forEach ? function (a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function (a, b) {
                    var c, d = a.length;
                    for (c = 0; d > c; c++) if (b.call(a[c], a[c], c, a) === !1) return c
                }, b.fn.highcharts = function () {
                    var a, b, c, e = "Chart", f = arguments;
                    return this[0] && (d(f[0]) && (e = f[0], f = Array.prototype.slice.call(f, 1)), a = f[0], a !== N && (a.chart = a.chart || {}, a.chart.renderTo = this[0], c = new ka[e](a, f[1]), b = this), a === N && (b = Ma[l(this[0], "data-highcharts-chart")])), b
                }
            }, addAnimSetter: function (a, c) {
                b.Tween ? b.Tween.propHooks[a] = {set: c} : b.fx.step[a] = c
            }, getScript: b.getScript, inArray: b.inArray, adapterRun: function (a, c) {
                return b(a)[c]()
            }, grep: b.grep, map: function (a, b) {
                for (var c = [], d = 0, e = a.length; e > d; d++) c[d] = b.call(a[d], a[d], d, a);
                return c
            }, offset: function (a) {
                return b(a).offset()
            }, addEvent: function (a, c, d) {
                b(a).bind(c, d)
            }, removeEvent: function (a, c, d) {
                var e = la.removeEventListener ? "removeEventListener" : "detachEvent";
                la[e] && a && !a[e] && (a[e] = function () {
                }), b(a).unbind(c, d)
            }, fireEvent: function (c, d, e, f) {
                var g, h = b.Event(d), i = "detached" + d;
                !Aa && e && (delete e.layerX, delete e.layerY, delete e.returnValue), a(h, e), c[d] && (c[i] = c[d], c[d] = null), b.each(["preventDefault", "stopPropagation"], function (a, b) {
                    var c = h[b];
                    h[b] = function () {
                        try {
                            c.call(h)
                        } catch (a) {
                            "preventDefault" === b && (g = !0)
                        }
                    }
                }), b(c).trigger(h), c[i] && (c[d] = c[i], c[i] = null), !f || h.isDefaultPrevented() || g || f(h)
            }, washMouseEvent: function (a) {
                var b = a.originalEvent || a;
                return b.pageX === N && (b.pageX = a.pageX, b.pageY = a.pageY), b
            }, animate: function (a, c, d) {
                var e = b(a);
                a.style || (a.style = {}), c.d && (a.toD = c.d, c.d = 1), e.stop(), c.opacity !== N && a.attr && (c.opacity += "px"), a.hasAnim = 1, e.animate(c, d)
            }, stop: function (a) {
                a.hasAnim && b(a).stop()
            }
        }
    }(ma.jQuery);
    var eb = ma.HighchartsAdapter, fb = eb || {};
    eb && eb.init.call(eb, U);
    var gb = fb.adapterRun, hb = fb.getScript, ib = fb.inArray, jb = fb.each, kb = fb.grep, lb = fb.offset, mb = fb.map,
        nb = fb.addEvent, ob = fb.removeEvent, pb = fb.fireEvent, qb = fb.washMouseEvent, rb = fb.animate, sb = fb.stop,
        tb = {enabled: !0, x: 0, y: 15, style: {color: "#606060", cursor: "default", fontSize: "11px"}};
    R = {
        colors: ["#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#8085e8", "#8d4653", "#91e8e1"],
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            decimalPoint: ".",
            numericSymbols: ["k", "M", "G", "T", "P", "E"],
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "http://code.highcharts.com/4.0.4/modules/canvas-tools.js",
            VMLRadialGradientURL: "http://code.highcharts.com/4.0.4/gfx/vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 0,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}
        },
        title: {text: "Chart title", align: "center", margin: 15, style: {color: "#333333", fontSize: "18px"}},
        subtitle: {text: "", align: "center", style: {color: "#555555"}},
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {duration: 1e3},
                events: {},
                lineWidth: 2,
                marker: {
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {enabled: !0, lineWidthPlus: 1, radiusPlus: 2},
                        select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}
                    }
                },
                point: {events: {}},
                dataLabels: b(tb, {
                    align: "center", enabled: !1, formatter: function () {
                        return null === this.y ? "" : r(this.y, -1)
                    }, verticalAlign: "bottom", y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                states: {hover: {lineWidthPlus: 1, marker: {}, halo: {size: 10, opacity: .25}}, select: {marker: {}}},
                stickyTracking: !0,
                turboThreshold: 1e3
            }
        },
        labels: {style: {position: Ra, color: "#3E576F"}},
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function () {
                return this.name
            },
            borderColor: "#909090",
            borderRadius: 0,
            navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"},
            shadow: !1,
            itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"},
            itemHoverStyle: {color: "#000"},
            itemHiddenStyle: {color: "#CCC"},
            itemCheckboxStyle: {position: Ra, width: "13px", height: "13px"},
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {style: {fontWeight: "bold"}}
        },
        loading: {
            labelStyle: {fontWeight: "bold", position: Sa, top: "45%"},
            style: {position: Ra, backgroundColor: "white", opacity: .5, textAlign: "center"}
        },
        tooltip: {
            enabled: !0,
            animation: Ga,
            backgroundColor: "rgba(249, 249, 249, .85)",
            borderWidth: 1,
            borderRadius: 3,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
            shadow: !0,
            snap: Ea ? 25 : 10,
            style: {color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap"}
        },
        credits: {
            enabled: !0,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
            style: {cursor: "pointer", color: "#909090", fontSize: "9px"}
        }
    };
    var ub = R.plotOptions, vb = ub.line;
    F();
    var wb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        xb = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
        yb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, zb = function (a) {
            function d(a) {
                a && a.stops ? j = mb(a.stops, function (a) {
                    return zb(a[1])
                }) : (i = wb.exec(a), i ? k = [c(i[1]), c(i[2]), c(i[3]), parseFloat(i[4], 10)] : (i = xb.exec(a), i ? k = [c(i[1], 16), c(i[2], 16), c(i[3], 16), 1] : (i = yb.exec(a), i && (k = [c(i[1]), c(i[2]), c(i[3]), 1]))))
            }

            function e(c) {
                var d;
                return j ? (d = b(a), d.stops = [].concat(d.stops), jb(j, function (a, b) {
                    d.stops[b] = [d.stops[b][0], a.get(c)]
                })) : d = k && !isNaN(k[0]) ? "rgb" === c ? "rgb(" + k[0] + "," + k[1] + "," + k[2] + ")" : "a" === c ? k[3] : "rgba(" + k.join(",") + ")" : a, d
            }

            function f(a) {
                if (j) jb(j, function (b) {
                    b.brighten(a)
                }); else if (g(a) && 0 !== a) {
                    var b;
                    for (b = 0; 3 > b; b++) k[b] += c(255 * a), k[b] < 0 && (k[b] = 0), k[b] > 255 && (k[b] = 255)
                }
                return this
            }

            function h(a) {
                return k[3] = a, this
            }

            var i, j, k = [];
            return d(a), {get: e, brighten: f, rgba: k, setOpacity: h}
        };
    I.prototype = {
        opacity: 1,
        textProps: ["fontSize", "fontWeight", "fontFamily", "color", "lineHeight", "width", "textDecoration", "textShadow", "HcTextStroke"],
        init: function (a, b) {
            var c = this;
            c.element = "span" === b ? p(b) : la.createElementNS(Fa, b), c.renderer = a
        },
        animate: function (a, c, d) {
            var e = n(c, T, !0);
            return sb(this), e ? (e = b(e, {}), d && (e.complete = d), rb(this, a, e)) : (this.attr(a), d && d()), this
        },
        colorGradient: function (a, c, d) {
            var e, g, h, i, j, l, m, n, o, p, q, r = this.renderer, s = [];
            if (a.linearGradient ? g = "linearGradient" : a.radialGradient && (g = "radialGradient"), g) {
                h = a[g], i = r.gradients, l = a.stops, o = d.radialReference, f(h) && (a[g] = h = {
                    x1: h[0],
                    y1: h[1],
                    x2: h[2],
                    y2: h[3],
                    gradientUnits: "userSpaceOnUse"
                }), "radialGradient" === g && o && !k(h.gradientUnits) && (h = b(h, {
                    cx: o[0] - o[2] / 2 + h.cx * o[2],
                    cy: o[1] - o[2] / 2 + h.cy * o[2],
                    r: h.r * o[2],
                    gradientUnits: "userSpaceOnUse"
                }));
                for (p in h) "id" !== p && s.push(p, h[p]);
                for (p in l) s.push(l[p]);
                s = s.join(","), i[s] ? q = i[s].attr("id") : (h.id = q = Ua + Ka++, i[s] = j = r.createElement(g).attr(h).add(r.defs), j.stops = [], jb(l, function (a) {
                    var b;
                    0 === a[1].indexOf("rgba") ? (e = zb(a[1]), m = e.get("rgb"), n = e.get("a")) : (m = a[1], n = 1), b = r.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": m,
                        "stop-opacity": n
                    }).add(j), j.stops.push(b)
                })), d.setAttribute(c, "url(" + r.url + "#" + q + ")")
            }
        },
        attr: function (a, b) {
            var c, d, e, f, g = this.element, h = this;
            if ("string" == typeof a && b !== N && (c = a, a = {}, a[c] = b), "string" == typeof a) h = (this[a + "Getter"] || this._defaultGetter).call(this, a, g); else {
                for (c in a) d = a[c], f = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (e || (this.symbolAttr(a), e = !0), f = !0), !this.rotation || "x" !== c && "y" !== c || (this.doTransform = !0), f || (this[c + "Setter"] || this._defaultSetter).call(this, d, c, g), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) && this.updateShadows(c, d);
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            return h
        },
        updateShadows: function (a, b) {
            for (var c = this.shadows, d = c.length; d--;) c[d].setAttribute(a, "height" === a ? ra(b - (c[d].cutHeight || 0), 0) : "d" === a ? this.d : b)
        },
        addClass: function (a) {
            var b = this.element, c = l(b, "class") || "";
            return -1 === c.indexOf(a) && l(b, "class", c + " " + a), this
        },
        symbolAttr: function (a) {
            var b = this;
            jb(["x", "y", "r", "start", "end", "width", "height", "innerR", "anchorX", "anchorY"], function (c) {
                b[c] = n(a[c], b[c])
            }), b.attr({d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)})
        },
        clip: function (a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : Xa)
        },
        crisp: function (a) {
            var b, c, d = this, e = {}, f = a.strokeWidth || d.strokeWidth || 0;
            c = oa(f) % 2 / 2, a.x = pa(a.x || d.x || 0) + c, a.y = pa(a.y || d.y || 0) + c, a.width = pa((a.width || d.width || 0) - 2 * c), a.height = pa((a.height || d.height || 0) - 2 * c), a.strokeWidth = f;
            for (b in a) d[b] !== a[b] && (d[b] = e[b] = a[b]);
            return e
        },
        css: function (b) {
            var d, e, f, g = this, h = g.styles, i = {}, j = g.element, k = "", m = !h;
            if (b && b.color && (b.fill = b.color), h) for (e in b) b[e] !== h[e] && (i[e] = b[e], m = !0);
            if (m) {
                if (d = g.textWidth = b && b.width && "text" === j.nodeName.toLowerCase() && c(b.width), h && (b = a(h, i)), g.styles = b, d && (Ia || !Ga && g.renderer.forExport) && delete b.width, Aa && !Ga) o(g.element, b); else {
                    f = function (a, b) {
                        return "-" + b.toLowerCase()
                    };
                    for (e in b) k += e.replace(/([A-Z])/g, f) + ":" + b[e] + ";";
                    l(j, "style", k)
                }
                d && g.added && g.renderer.buildText(g)
            }
            return g
        },
        on: function (a, b) {
            var c = this, d = c.element;
            return P && "click" === a ? (d.ontouchstart = function (a) {
                c.touchEventFired = Y.now(), a.preventDefault(), b.call(d, a)
            }, d.onclick = function (a) {
                (-1 === ya.indexOf("Android") || Y.now() - (c.touchEventFired || 0) > 1100) && b.call(d, a)
            }) : d["on" + a] = b, this
        },
        setRadialReference: function (a) {
            return this.element.radialReference = a, this
        },
        translate: function (a, b) {
            return this.attr({translateX: a, translateY: b})
        },
        invert: function () {
            var a = this;
            return a.inverted = !0, a.updateTransform(), a
        },
        updateTransform: function () {
            var a, b = this, c = b.translateX || 0, d = b.translateY || 0, e = b.scaleX, f = b.scaleY, g = b.inverted,
                h = b.rotation, i = b.element;
            g && (c += b.attr("width"), d += b.attr("height")), a = ["translate(" + c + "," + d + ")"], g ? a.push("rotate(90) scale(-1,1)") : h && a.push("rotate(" + h + " " + (i.getAttribute("x") || 0) + " " + (i.getAttribute("y") || 0) + ")"), (k(e) || k(f)) && a.push("scale(" + n(e, 1) + " " + n(f, 1) + ")"), a.length && i.setAttribute("transform", a.join(" "))
        },
        toFront: function () {
            var a = this.element;
            return a.parentNode.appendChild(a), this
        },
        align: function (a, b, c) {
            var e, f, g, h, i, k = {}, l = this.renderer, m = l.alignedObjects;
            return a ? (this.alignOptions = a, this.alignByTranslate = b, (!c || d(c)) && (this.alignTo = i = c || "renderer", j(m, this), m.push(this), c = null)) : (a = this.alignOptions, b = this.alignByTranslate, i = this.alignTo), c = n(c, l[i], l), e = a.align, f = a.verticalAlign, g = (c.x || 0) + (a.x || 0), h = (c.y || 0) + (a.y || 0), ("right" === e || "center" === e) && (g += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            }[e]), k[b ? "translateX" : "x"] = oa(g), ("bottom" === f || "middle" === f) && (h += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            }[f] || 1)), k[b ? "translateY" : "y"] = oa(h), this[this.placed ? "animate" : "attr"](k), this.placed = !0, this.alignAttr = k, this
        },
        getBBox: function () {
            var b, c, d, e = this, f = e.bBox, g = e.renderer, h = e.rotation, i = e.element, j = e.styles, k = h * xa,
                l = e.textStr;
            if (("" === l || $a.test(l)) && (d = "num." + l.toString().length + (j ? "|" + j.fontSize + "|" + j.fontFamily : "")), d && (f = g.cache[d]), !f) {
                if (i.namespaceURI === Fa || g.forExport) {
                    try {
                        f = i.getBBox ? a({}, i.getBBox()) : {width: i.offsetWidth, height: i.offsetHeight}
                    } catch (m) {
                    }
                    (!f || f.width < 0) && (f = {width: 0, height: 0})
                } else f = e.htmlGetBBox();
                g.isSVG && (b = f.width, c = f.height, Aa && j && "11px" === j.fontSize && "16.9" === c.toPrecision(3) && (f.height = c = 14), h && (f.width = ta(c * va(k)) + ta(b * ua(k)), f.height = ta(c * ua(k)) + ta(b * va(k)))), e.bBox = f, d && (g.cache[d] = f)
            }
            return f
        },
        show: function (a) {
            return a && this.element.namespaceURI === Fa ? this.element.removeAttribute("visibility") : this.attr({visibility: a ? "inherit" : Va}), this
        },
        hide: function () {
            return this.attr({visibility: Ta})
        },
        fadeOut: function (a) {
            var b = this;
            b.animate({opacity: 0}, {
                duration: a || 150, complete: function () {
                    b.attr({y: -9999})
                }
            })
        },
        add: function (a) {
            var b, d, e, f, g, h = this.renderer, i = a || h, j = i.element || h.box, m = this.element, n = this.zIndex;
            if (a && (this.parentGroup = a), this.parentInverted = a && a.inverted, void 0 !== this.textStr && h.buildText(this), n && (i.handleZ = !0, n = c(n)), i.handleZ) for (b = j.childNodes, f = 0; f < b.length; f++) if (d = b[f], e = l(d, "zIndex"), d !== m && (c(e) > n || !k(n) && k(e))) {
                j.insertBefore(m, d), g = !0;
                break
            }
            return g || j.appendChild(m), this.added = !0, this.onAdd && this.onAdd(), this
        },
        safeRemoveChild: function (a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function () {
            var a, b, c, d = this, e = d.element || {}, f = d.shadows,
                g = d.renderer.isSVG && "SPAN" === e.nodeName && d.parentGroup;
            if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, sb(d), d.clipPath && (d.clipPath = d.clipPath.destroy()), d.stops) {
                for (c = 0; c < d.stops.length; c++) d.stops[c] = d.stops[c].destroy();
                d.stops = null
            }
            for (d.safeRemoveChild(e), f && jb(f, function (a) {
                d.safeRemoveChild(a)
            }); g && g.div && 0 === g.div.childNodes.length;) a = g.parentGroup, d.safeRemoveChild(g.div), delete g.div, g = a;
            d.alignTo && j(d.renderer.alignedObjects, d);
            for (b in d) delete d[b];
            return null
        },
        shadow: function (a, b, c) {
            var d, e, f, g, h, i, j = [], k = this.element;
            if (a) {
                for (g = n(a.width, 3), h = (a.opacity || .15) / g, i = this.parentInverted ? "(-1,-1)" : "(" + n(a.offsetX, 1) + ", " + n(a.offsetY, 1) + ")", d = 1; g >= d; d++) e = k.cloneNode(0), f = 2 * g + 1 - 2 * d, l(e, {
                    isShadow: "true",
                    stroke: a.color || "black",
                    "stroke-opacity": h * d,
                    "stroke-width": f,
                    transform: "translate" + i,
                    fill: Xa
                }), c && (l(e, "height", ra(l(e, "height") - f, 0)), e.cutHeight = f), b ? b.element.appendChild(e) : k.parentNode.insertBefore(e, k), j.push(e);
                this.shadows = j
            }
            return this
        },
        xGetter: function (a) {
            return "circle" === this.element.nodeName && (a = {x: "cx", y: "cy"}[a] || a), this._defaultGetter(a)
        },
        _defaultGetter: function (a) {
            var b = n(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            return /^[\-0-9\.]+$/.test(b) && (b = parseFloat(b)), b
        },
        dSetter: function (a, b, c) {
            a && a.join && (a = a.join(" ")), /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"), c.setAttribute(b, a), this[b] = a
        },
        dashstyleSetter: function (a) {
            var b;
            if (a = a && a.toLowerCase()) {
                for (a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), b = a.length; b--;) a[b] = c(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none"), this.element.setAttribute("stroke-dasharray", a)
            }
        },
        alignSetter: function (a) {
            this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[a])
        },
        opacitySetter: function (a, b, c) {
            this[b] = a, c.setAttribute(b, a)
        },
        titleSetter: function (a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = la.createElementNS(Fa, "title"), this.element.appendChild(b)), b.textContent = n(a, "").replace(/<[^>]*>/g, "")
        },
        textSetter: function (a) {
            a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
        },
        fillSetter: function (a, b, c) {
            "string" == typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        },
        zIndexSetter: function (a, b, c) {
            c.setAttribute(b, a), this[b] = a
        },
        _defaultSetter: function (a, b, c) {
            c.setAttribute(b, a)
        }
    }, I.prototype.yGetter = I.prototype.xGetter, I.prototype.translateXSetter = I.prototype.translateYSetter = I.prototype.rotationSetter = I.prototype.verticalAlignSetter = I.prototype.scaleXSetter = I.prototype.scaleYSetter = function (a, b) {
        this[b] = a, this.doTransform = !0
    }, I.prototype["stroke-widthSetter"] = I.prototype.strokeSetter = function (a, b, c) {
        this[b] = a, this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], I.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), this.hasStroke = !1)
    };
    var Ab = function () {
        this.init.apply(this, arguments)
    };
    Ab.prototype = {
        Element: I, init: function (a, b, c, d, e) {
            var f, g, h, i = this, j = location;
            f = i.createElement("svg").attr({version: "1.1"}).css(this.getStyle(d)), g = f.element, a.appendChild(g), -1 === a.innerHTML.indexOf("xmlns") && l(g, "xmlns", Fa), i.isSVG = !0, i.box = g, i.boxWrapper = f, i.alignedObjects = [], i.url = (Da || Ca) && la.getElementsByTagName("base").length ? j.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", h = this.createElement("desc").add(), h.element.appendChild(la.createTextNode("Created with " + Oa + " " + Pa)), i.defs = this.createElement("defs").add(), i.forExport = e, i.gradients = {}, i.cache = {}, i.setSize(b, c, !1);
            var k, m;
            Da && a.getBoundingClientRect && (i.subPixelFix = k = function () {
                o(a, {left: 0, top: 0}), m = a.getBoundingClientRect(), o(a, {
                    left: qa(m.left) - m.left + Wa,
                    top: qa(m.top) - m.top + Wa
                })
            }, k(), nb(ma, "resize", k))
        }, getStyle: function (b) {
            return this.style = a({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: "12px"
            }, b)
        }, isHidden: function () {
            return !this.boxWrapper.getBBox().width
        }, destroy: function () {
            var a = this, b = a.defs;
            return a.box = null, a.boxWrapper = a.boxWrapper.destroy(), B(a.gradients || {}), a.gradients = null, b && (a.defs = b.destroy()), a.subPixelFix && ob(ma, "resize", a.subPixelFix), a.alignedObjects = null, null
        }, createElement: function (a) {
            var b = new this.Element;
            return b.init(this, a), b
        }, draw: function () {
        }, buildText: function (a) {
            for (var b, d, e, f = a.element, g = this, h = g.forExport, i = n(a.textStr, "").toString(), j = -1 !== i.indexOf("<"), k = f.childNodes, m = l(f, "x"), p = a.styles, q = a.textWidth, r = p && p.lineHeight, s = p && p.HcTextStroke, t = k.length, u = function (a) {
                return r ? c(r) : g.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : p && p.fontSize || g.style.fontSize || 12, a).h
            }; t--;) f.removeChild(k[t]);
            return j || s || -1 !== i.indexOf(" ") ? (d = /<.*style="([^"]+)".*>/, e = /<.*href="(http[^"]+)".*>/, q && !a.added && this.box.appendChild(f), b = j ? i.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [i], "" === b[b.length - 1] && b.pop(), jb(b, function (b, c) {
                var i, j = 0;
                b = b.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), i = b.split("|||"), jb(i, function (b) {
                    if ("" !== b || 1 === i.length) {
                        var k, n = {}, r = la.createElementNS(Fa, "tspan");
                        if (d.test(b) && (k = b.match(d)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), l(r, "style", k)), e.test(b) && !h && (l(r, "onclick", 'location.href="' + b.match(e)[1] + '"'), o(r, {cursor: "pointer"})), b = (b.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), " " !== b) {
                            if (r.appendChild(la.createTextNode(b)), j ? n.dx = 0 : c && null !== m && (n.x = m), l(r, n), f.appendChild(r), !j && c && (!Ga && h && o(r, {display: "block"}), l(r, "dy", u(r))), q) for (var s, t, v, w = b.replace(/([^\^])-/g, "$1- ").split(" "), x = i.length > 1 || w.length > 1 && "nowrap" !== p.whiteSpace, y = p.HcHeight, z = [], A = u(r), B = 1; x && (w.length || z.length);) delete a.bBox, v = a.getBBox(), t = v.width, !Ga && g.forExport && (t = g.measureSpanWidth(r.firstChild.data, a.styles)), s = t > q, s && 1 !== w.length ? (r.removeChild(r.firstChild), z.unshift(w.pop())) : (w = z, z = [], w.length && (B++, y && B * A > y ? (w = ["..."], a.attr("title", a.textStr)) : (r = la.createElementNS(Fa, "tspan"), l(r, {
                                dy: A,
                                x: m
                            }), k && l(r, "style", k), f.appendChild(r))), t > q && (q = t)), w.length && r.appendChild(la.createTextNode(w.join(" ").replace(/- /g, "-")));
                            j++
                        }
                    }
                })
            }), void 0) : void f.appendChild(la.createTextNode(i))
        }, button: function (c, d, e, f, g, h, i, j, k) {
            var l, m, n, o, p, q, r = this.label(c, d, e, k, null, null, null, null, "button"), s = 0,
                t = {x1: 0, y1: 0, x2: 0, y2: 1};
            return g = b({
                "stroke-width": 1,
                stroke: "#CCCCCC",
                fill: {linearGradient: t, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]},
                r: 2,
                padding: 5,
                style: {color: "black"}
            }, g), n = g.style, delete g.style, h = b(g, {
                stroke: "#68A",
                fill: {linearGradient: t, stops: [[0, "#FFF"], [1, "#ACF"]]}
            }, h), o = h.style, delete h.style, i = b(g, {
                stroke: "#68A",
                fill: {linearGradient: t, stops: [[0, "#9BD"], [1, "#CDF"]]}
            }, i), p = i.style, delete i.style, j = b(g, {style: {color: "#CCC"}}, j), q = j.style, delete j.style, nb(r.element, Aa ? "mouseover" : "mouseenter", function () {
                3 !== s && r.attr(h).css(o)
            }), nb(r.element, Aa ? "mouseout" : "mouseleave", function () {
                3 !== s && (l = [g, h, i][s], m = [n, o, p][s], r.attr(l).css(m))
            }), r.setState = function (a) {
                r.state = s = a, a ? 2 === a ? r.attr(i).css(p) : 3 === a && r.attr(j).css(q) : r.attr(g).css(n)
            }, r.on("click", function () {
                3 !== s && f.call(r)
            }).attr(g).css(a({cursor: "default"}, n))
        }, crispLine: function (a, b) {
            return a[1] === a[4] && (a[1] = a[4] = oa(a[1]) - b % 2 / 2), a[2] === a[5] && (a[2] = a[5] = oa(a[2]) + b % 2 / 2), a
        }, path: function (b) {
            var c = {fill: Xa};
            return f(b) ? c.d = b : e(b) && a(c, b), this.createElement("path").attr(c)
        }, circle: function (a, b, c) {
            var d = e(a) ? a : {x: a, y: b, r: c}, f = this.createElement("circle");
            return f.xSetter = function (a) {
                this.element.setAttribute("cx", a)
            }, f.ySetter = function (a) {
                this.element.setAttribute("cy", a)
            }, f.attr(d)
        }, arc: function (a, b, c, d, f, g) {
            var h;
            return e(a) && (b = a.y, c = a.r, d = a.innerR, f = a.start, g = a.end, a = a.x), h = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: f || 0,
                end: g || 0
            }), h.r = c, h
        }, rect: function (a, b, c, d, f, g) {
            f = e(a) ? a.r : f;
            var h = this.createElement("rect"),
                i = e(a) ? a : a === N ? {} : {x: a, y: b, width: ra(c, 0), height: ra(d, 0)};
            return g !== N && (i.strokeWidth = g, i = h.crisp(i)), f && (i.r = f), h.rSetter = function (a) {
                l(this.element, {rx: a, ry: a})
            }, h.attr(i)
        }, setSize: function (a, b, c) {
            var d = this, e = d.alignedObjects, f = e.length;
            for (d.width = a, d.height = b, d.boxWrapper[n(c, !0) ? "animate" : "attr"]({
                width: a,
                height: b
            }); f--;) e[f].align()
        }, g: function (a) {
            var b = this.createElement("g");
            return k(a) ? b.attr({"class": Ua + a}) : b
        }, image: function (b, c, d, e, f) {
            var g, h = {preserveAspectRatio: Xa};
            return arguments.length > 1 && a(h, {
                x: c,
                y: d,
                width: e,
                height: f
            }), g = this.createElement("image").attr(h), g.element.setAttributeNS ? g.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", b) : g.element.setAttribute("hc-svg-href", b), g
        }, symbol: function (b, c, d, e, f, g) {
            var h, i, j, k, l, m = this.symbols[b], n = m && m(oa(c), oa(d), e, f, g), o = /^url\((.*?)\)$/;
            return n ? (h = this.path(n), a(h, {
                symbolName: b,
                x: c,
                y: d,
                width: e,
                height: f
            }), g && a(h, g)) : o.test(b) && (l = function (a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(oa((e - b[0]) / 2), oa((f - b[1]) / 2)))
            }, j = b.match(o)[1], k = Ja[j] || g && g.width && g.height && [g.width, g.height], h = this.image(j).attr({
                x: c,
                y: d
            }), h.isImg = !0, k ? l(h, k) : (h.attr({width: 0, height: 0}), i = p("img", {
                onload: function () {
                    l(h, Ja[j] = [this.width, this.height])
                }, src: j
            }))), h
        }, symbols: {
            circle: function (a, b, c, d) {
                var e = .166 * c;
                return [Ya, a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            }, square: function (a, b, c, d) {
                return [Ya, a, b, Za, a + c, b, a + c, b + d, a, b + d, "Z"]
            }, triangle: function (a, b, c, d) {
                return [Ya, a + c / 2, b, Za, a + c, b + d, a, b + d, "Z"]
            }, "triangle-down": function (a, b, c, d) {
                return [Ya, a, b, Za, a + c, b, a + c / 2, b + d, "Z"]
            }, diamond: function (a, b, c, d) {
                return [Ya, a + c / 2, b, Za, a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            }, arc: function (a, b, c, d, e) {
                var f = e.start, g = e.r || c || d, h = e.end - .001, i = e.innerR, j = e.open, k = ua(f), l = va(f),
                    m = ua(h), n = va(h), o = e.end - f < wa ? 0 : 1;
                return [Ya, a + g * k, b + g * l, "A", g, g, 0, o, 1, a + g * m, b + g * n, j ? Ya : Za, a + i * m, b + i * n, "A", i, i, 0, o, 0, a + i * k, b + i * l, j ? "" : "Z"]
            }, callout: function (a, b, c, d, e) {
                var f, g = 6, h = 6, i = sa(e && e.r || 0, c, d), j = i + h, k = e && e.anchorX, l = e && e.anchorY,
                    m = oa(e.strokeWidth || 0) % 2 / 2;
                return a += m, b += m, f = ["M", a + i, b, "L", a + c - i, b, "C", a + c, b, a + c, b, a + c, b + i, "L", a + c, b + d - i, "C", a + c, b + d, a + c, b + d, a + c - i, b + d, "L", a + i, b + d, "C", a, b + d, a, b + d, a, b + d - i, "L", a, b + i, "C", a, b, a, b, a + i, b], k && k > c && l > b + j && b + d - j > l ? f.splice(13, 3, "L", a + c, l - h, a + c + g, l, a + c, l + h, a + c, b + d - i) : k && 0 > k && l > b + j && b + d - j > l ? f.splice(33, 3, "L", a, l + h, a - g, l, a, l - h, a, b + i) : l && l > d && k > a + j && a + c - j > k ? f.splice(23, 3, "L", k + h, b + d, k, b + d + g, k - h, b + d, a + i, b + d) : l && 0 > l && k > a + j && a + c - j > k && f.splice(3, 3, "L", k - h, b, k, b - g, k + h, b, c - i, b), f
            }
        }, clipRect: function (a, b, c, d) {
            var e, f = Ua + Ka++, g = this.createElement("clipPath").attr({id: f}).add(this.defs);
            return e = this.rect(a, b, c, d, 0).add(g), e.id = f, e.clipPath = g, e
        }, text: function (a, b, c, d) {
            var e, f = this, g = Ia || !Ga && f.forExport, h = {};
            return d && !f.forExport ? f.html(a, b, c) : (h.x = Math.round(b || 0), c && (h.y = Math.round(c)), (a || 0 === a) && (h.text = a), e = f.createElement("text").attr(h), g && e.css({position: Ra}), d || (e.xSetter = function (a, b, c) {
                var d, e, f = c.getElementsByTagName("tspan"), g = c.getAttribute(b);
                for (e = 0; e < f.length; e++) d = f[e], d.getAttribute(b) === g && d.setAttribute(b, a);
                c.setAttribute(b, a)
            }), e)
        }, fontMetrics: function (a, b) {
            a = a || this.style.fontSize, b && ma.getComputedStyle && (b = b.element || b, a = ma.getComputedStyle(b, "").fontSize), a = /px/.test(a) ? c(a) : /em/.test(a) ? 12 * parseFloat(a) : 12;
            var d = 24 > a ? a + 4 : oa(1.2 * a), e = oa(.8 * d);
            return {h: d, b: e, f: a}
        }, label: function (c, d, e, f, g, h, i, j, l) {
            function m() {
                var b, c, d = z.element.style;
                q = (void 0 === r || void 0 === s || y.styles.textAlign) && z.textStr && z.getBBox(), y.width = (r || q.width || 0) + 2 * B + C, y.height = (s || q.height || 0) + 2 * B, v = B + x.fontMetrics(d && d.fontSize, z).b, w && (p || (b = oa(-A * B), c = j ? -v : 0, y.box = p = f ? x.symbol(f, b, c, y.width, y.height, E) : x.rect(b, c, y.width, y.height, 0, E[cb]), p.attr("fill", Xa).add(y)), p.isImg || p.attr(a({
                    width: oa(y.width),
                    height: oa(y.height)
                }, E)), E = null)
            }

            function n() {
                var a, b = y.styles, c = b && b.textAlign, d = C + B * (1 - A);
                a = j ? 0 : v, k(r) && q && ("center" === c || "right" === c) && (d += {
                    center: .5,
                    right: 1
                }[c] * (r - q.width)), (d !== z.x || a !== z.y) && (z.attr("x", d), a !== N && z.attr("y", a)), z.x = d, z.y = a
            }

            function o(a, b) {
                p ? p.attr(a, b) : E[a] = b
            }

            var p, q, r, s, t, u, v, w, x = this, y = x.g(l), z = x.text("", 0, 0, i).attr({zIndex: 1}), A = 0, B = 3,
                C = 0, D = 0, E = {};
            y.onAdd = function () {
                z.add(y), y.attr({text: c || 0 === c ? c : "", x: d, y: e}), p && k(g) && y.attr({
                    anchorX: g,
                    anchorY: h
                })
            }, y.widthSetter = function (a) {
                r = a
            }, y.heightSetter = function (a) {
                s = a
            }, y.paddingSetter = function (a) {
                k(a) && a !== B && (B = a, n())
            }, y.paddingLeftSetter = function (a) {
                k(a) && a !== C && (C = a, n())
            }, y.alignSetter = function (a) {
                A = {left: 0, center: .5, right: 1}[a]
            }, y.textSetter = function (a) {
                a !== N && z.textSetter(a), m(), n()
            }, y["stroke-widthSetter"] = function (a, b) {
                a && (w = !0), D = a % 2 / 2, o(b, a)
            }, y.strokeSetter = y.fillSetter = y.rSetter = function (a, b) {
                "fill" === b && a && (w = !0), o(b, a)
            }, y.anchorXSetter = function (a, b) {
                g = a, o(b, a + D - t)
            }, y.anchorYSetter = function (a, b) {
                h = a, o(b, a - u)
            }, y.xSetter = function (a) {
                y.x = a, A && (a -= A * ((r || q.width) + B)), t = oa(a), y.attr("translateX", t)
            }, y.ySetter = function (a) {
                u = y.y = oa(a), y.attr("translateY", u)
            };
            var F = y.css;
            return a(y, {
                css: function (a) {
                    if (a) {
                        var c = {};
                        a = b(a), jb(y.textProps, function (b) {
                            a[b] !== N && (c[b] = a[b], delete a[b])
                        }), z.css(c)
                    }
                    return F.call(y, a)
                }, getBBox: function () {
                    return {width: q.width + 2 * B, height: q.height + 2 * B, x: q.x - B, y: q.y - B}
                }, shadow: function (a) {
                    return p && p.shadow(a),
                        y
                }, destroy: function () {
                    ob(y.element, "mouseenter"), ob(y.element, "mouseleave"), z && (z = z.destroy()), p && (p = p.destroy()), I.prototype.destroy.call(y), y = x = m = n = o = null
                }
            })
        }
    }, O = Ab, a(I.prototype, {
        htmlCss: function (b) {
            var c = this, d = c.element, e = b && "SPAN" === d.tagName && b.width;
            return e && (delete b.width, c.textWidth = e, c.updateTransform()), c.styles = a(c.styles, b), o(c.element, b), c
        }, htmlGetBBox: function () {
            var a = this, b = a.element, c = a.bBox;
            return c || ("text" === b.nodeName && (b.style.position = Ra), c = a.bBox = {
                x: b.offsetLeft,
                y: b.offsetTop,
                width: b.offsetWidth,
                height: b.offsetHeight
            }), c
        }, htmlUpdateTransform: function () {
            if (!this.added) return void (this.alignOnAdd = !0);
            var a = this, b = a.renderer, d = a.element, e = a.translateX || 0, f = a.translateY || 0, g = a.x || 0,
                h = a.y || 0, i = a.textAlign || "left", j = {left: 0, center: .5, right: 1}[i], l = a.shadows;
            if (o(d, {marginLeft: e, marginTop: f}), l && jb(l, function (a) {
                o(a, {marginLeft: e + 1, marginTop: f + 1})
            }), a.inverted && jb(d.childNodes, function (a) {
                b.invertChild(a, d)
            }), "SPAN" === d.tagName) {
                var m, p, q = a.rotation, r = c(a.textWidth), s = [q, i, d.innerHTML, a.textWidth].join(",");
                s !== a.cTT && (p = b.fontMetrics(d.style.fontSize).b, k(q) && a.setSpanRotation(q, j, p), m = n(a.elemWidth, d.offsetWidth), m > r && /[ \-]/.test(d.textContent || d.innerText) && (o(d, {
                    width: r + Wa,
                    display: "block",
                    whiteSpace: "normal"
                }), m = r), a.getSpanCorrection(m, p, j, q, i)), o(d, {
                    left: g + (a.xCorr || 0) + Wa,
                    top: h + (a.yCorr || 0) + Wa
                }), Ca && (p = d.offsetHeight), a.cTT = s
            }
        }, setSpanRotation: function (a, b, c) {
            var d = {},
                e = Aa ? "-ms-transform" : Ca ? "-webkit-transform" : Da ? "MozTransform" : za ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)", d[e + (Da ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + c + "px", o(this.element, d)
        }, getSpanCorrection: function (a, b, c) {
            this.xCorr = -a * c, this.yCorr = -b
        }
    }), a(Ab.prototype, {
        html: function (b, c, d) {
            var e = this.createElement("span"), f = e.element, g = e.renderer;
            return e.textSetter = function (a) {
                a !== f.innerHTML && delete this.bBox, f.innerHTML = this.textStr = a
            }, e.xSetter = e.ySetter = e.alignSetter = e.rotationSetter = function (a, b) {
                "align" === b && (b = "textAlign"), e[b] = a, e.htmlUpdateTransform()
            }, e.attr({text: b, x: oa(c), y: oa(d)}).css({
                position: Ra,
                whiteSpace: "nowrap",
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize
            }), e.css = e.htmlCss, g.isSVG && (e.add = function (b) {
                var c, d, h = g.box.parentNode, i = [];
                if (this.parentGroup = b, b) {
                    if (c = b.div, !c) {
                        for (d = b; d;) i.push(d), d = d.parentGroup;
                        jb(i.reverse(), function (b) {
                            var d;
                            c = b.div = b.div || p(Qa, {className: l(b.element, "class")}, {
                                position: Ra,
                                left: (b.translateX || 0) + Wa,
                                top: (b.translateY || 0) + Wa
                            }, c || h), d = c.style, a(b, {
                                translateXSetter: function (a, c) {
                                    d.left = a + Wa, b[c] = a, b.doTransform = !0
                                }, translateYSetter: function (a, c) {
                                    d.top = a + Wa, b[c] = a, b.doTransform = !0
                                }, visibilitySetter: function (a, b) {
                                    d[b] = a
                                }
                            })
                        })
                    }
                } else c = h;
                return c.appendChild(f), e.added = !0, e.alignOnAdd && e.htmlUpdateTransform(), e
            }), e
        }
    });
    var Bb, Cb;
    if (!Ga && !Ia) {
        Cb = {
            init: function (a, b) {
                var c = this, d = ["<", b, ' filled="f" stroked="f"'], e = ["position: ", Ra, ";"], f = b === Qa;
                ("shape" === b || f) && e.push("left:0;top:0;width:1px;height:1px;"), e.push("visibility: ", f ? Ta : Va), d.push(' style="', e.join(""), '"/>'), b && (d = f || "span" === b || "img" === b ? d.join("") : a.prepVML(d), c.element = p(d)), c.renderer = a
            }, add: function (a) {
                var b = this, c = b.renderer, d = b.element, e = c.box, f = a && a.inverted, g = a ? a.element || a : e;
                return f && c.invertChild(d, g), g.appendChild(d), b.added = !0, b.alignOnAdd && !b.deferUpdateTransform && b.updateTransform(), b.onAdd && b.onAdd(), b
            }, updateTransform: I.prototype.htmlUpdateTransform, setSpanRotation: function () {
                var a = this.rotation, b = ua(a * xa), c = va(a * xa);
                o(this.element, {filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : Xa})
            }, getSpanCorrection: function (a, b, c, d, e) {
                var f, g = d ? ua(d * xa) : 1, h = d ? va(d * xa) : 0,
                    i = n(this.elemHeight, this.element.offsetHeight), j = e && "left" !== e;
                this.xCorr = 0 > g && -a, this.yCorr = 0 > h && -i, f = 0 > g * h, this.xCorr += h * b * (f ? 1 - c : c), this.yCorr -= g * b * (d ? f ? c : 1 - c : 1), j && (this.xCorr -= a * c * (0 > g ? -1 : 1), d && (this.yCorr -= i * c * (0 > h ? -1 : 1)), o(this.element, {textAlign: e}))
            }, pathToVML: function (a) {
                for (var b = a.length, c = []; b--;) g(a[b]) ? c[b] = oa(10 * a[b]) - 5 : "Z" === a[b] ? c[b] = "x" : (c[b] = a[b], !a.isArc || "wa" !== a[b] && "at" !== a[b] || (c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1)));
                return c.join(" ") || "x"
            }, clip: function (a) {
                var b, c, d = this;
                return a ? (b = a.members, j(b, d), b.push(d), d.destroyClip = function () {
                    j(b, d)
                }, c = a.getCSS(d)) : (d.destroyClip && d.destroyClip(), c = {clip: Ba ? "inherit" : "rect(auto)"}), d.css(c)
            }, css: I.prototype.htmlCss, safeRemoveChild: function (a) {
                a.parentNode && C(a)
            }, destroy: function () {
                return this.destroyClip && this.destroyClip(), I.prototype.destroy.apply(this)
            }, on: function (a, b) {
                return this.element["on" + a] = function () {
                    var a = ma.event;
                    a.target = a.srcElement, b(a)
                }, this
            }, cutOffPath: function (a, b) {
                var d;
                return a = a.split(/[ ,]/), d = a.length, (9 === d || 11 === d) && (a[d - 4] = a[d - 2] = c(a[d - 2]) - 10 * b), a.join(" ")
            }, shadow: function (a, b, d) {
                var e, f, g, h, i, j, k, l = [], m = this.element, o = this.renderer, q = m.style, r = m.path;
                if (r && "string" != typeof r.value && (r = "x"), i = r, a) {
                    for (j = n(a.width, 3), k = (a.opacity || .15) / j, e = 1; 3 >= e; e++) h = 2 * j + 1 - 2 * e, d && (i = this.cutOffPath(r.value, h + .5)), g = ['<shape isShadow="true" strokeweight="', h, '" filled="false" path="', i, '" coordsize="10 10" style="', m.style.cssText, '" />'], f = p(o.prepVML(g), null, {
                        left: c(q.left) + n(a.offsetX, 1),
                        top: c(q.top) + n(a.offsetY, 1)
                    }), d && (f.cutOff = h + 1), g = ['<stroke color="', a.color || "black", '" opacity="', k * e, '"/>'], p(o.prepVML(g), null, null, f), b ? b.element.appendChild(f) : m.parentNode.insertBefore(f, m), l.push(f);
                    this.shadows = l
                }
                return this
            }, updateShadows: La, setAttr: function (a, b) {
                Ba ? this.element[a] = b : this.element.setAttribute(a, b)
            }, classSetter: function (a) {
                this.element.className = a
            }, dashstyleSetter: function (a, b, c) {
                var d = c.getElementsByTagName("stroke")[0] || p(this.renderer.prepVML(["<stroke/>"]), null, null, c);
                d[b] = a || "solid", this[b] = a
            }, dSetter: function (a, b, c) {
                var d, e = this.shadows;
                if (a = a || [], this.d = a.join && a.join(" "), c.path = a = this.pathToVML(a), e) for (d = e.length; d--;) e[d].path = e[d].cutOff ? this.cutOffPath(a, e[d].cutOff) : a;
                this.setAttr(b, a)
            }, fillSetter: function (a, b, c) {
                var d = c.nodeName;
                "SPAN" === d ? c.style.color = a : "IMG" !== d && (c.filled = a !== Xa, this.setAttr("fillcolor", this.renderer.color(a, c, b, this)))
            }, opacitySetter: La, rotationSetter: function (a, b, c) {
                var d = c.style;
                this[b] = d[b] = a, d.left = -oa(va(a * xa) + 1) + Wa, d.top = oa(ua(a * xa)) + Wa
            }, strokeSetter: function (a, b, c) {
                this.setAttr("strokecolor", this.renderer.color(a, c, b))
            }, "stroke-widthSetter": function (a, b, c) {
                c.stroked = !!a, this[b] = a, g(a) && (a += Wa), this.setAttr("strokeweight", a)
            }, titleSetter: function (a, b) {
                this.setAttr(b, a)
            }, visibilitySetter: function (a, b, c) {
                "inherit" === a && (a = Va), this.shadows && jb(this.shadows, function (c) {
                    c.style[b] = a
                }), "DIV" === c.nodeName && (a = a === Ta ? "-999em" : 0, Ba || (c.style[b] = a ? Va : Ta), b = "top"), c.style[b] = a
            }, xSetter: function (a, b, c) {
                this[b] = a, "x" === b ? b = "left" : "y" === b && (b = "top"), this.updateClipping ? (this[b] = a, this.updateClipping()) : c.style[b] = a
            }, zIndexSetter: function (a, b, c) {
                c.style[b] = a
            }
        }, ka.VMLElement = Cb = q(I, Cb), Cb.prototype.ySetter = Cb.prototype.widthSetter = Cb.prototype.heightSetter = Cb.prototype.xSetter;
        var Db = {
            Element: Cb, isIE8: ya.indexOf("MSIE 8.0") > -1, init: function (b, c, d, e) {
                var f, g, h, i = this;
                if (i.alignedObjects = [], f = i.createElement(Qa).css(a(this.getStyle(e), {position: Sa})), g = f.element, b.appendChild(f.element), i.isVML = !0, i.box = g, i.boxWrapper = f, i.cache = {}, i.setSize(c, d, !1), !la.namespaces.hcv) {
                    la.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), h = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ";
                    try {
                        la.createStyleSheet().cssText = h
                    } catch (j) {
                        la.styleSheets[0].cssText += h
                    }
                }
            }, isHidden: function () {
                return !this.box.offsetWidth
            }, clipRect: function (b, c, d, f) {
                var g = this.createElement(), h = e(b);
                return a(g, {
                    members: [],
                    left: (h ? b.x : b) + 1,
                    top: (h ? b.y : c) + 1,
                    width: (h ? b.width : d) - 1,
                    height: (h ? b.height : f) - 1,
                    getCSS: function (b) {
                        var c = b.element, d = c.nodeName, e = "shape" === d, f = b.inverted, g = this,
                            h = g.top - (e ? c.offsetTop : 0), i = g.left, j = i + g.width, k = h + g.height,
                            l = {clip: "rect(" + oa(f ? i : h) + "px," + oa(f ? k : j) + "px," + oa(f ? j : k) + "px," + oa(f ? h : i) + "px)"};
                        return !f && Ba && "DIV" === d && a(l, {width: j + Wa, height: k + Wa}), l
                    },
                    updateClipping: function () {
                        jb(g.members, function (a) {
                            a.element && a.css(g.getCSS(a))
                        })
                    }
                })
            }, color: function (a, b, c, d) {
                var e, f, g, h = this, i = /^rgba/, j = Xa;
                if (a && a.linearGradient ? g = "gradient" : a && a.radialGradient && (g = "pattern"), g) {
                    var k, l, m, n, o, q, r, s, t, u, v, w, x = a.linearGradient || a.radialGradient, y = "",
                        z = a.stops, A = [], B = function () {
                            f = ['<fill colors="' + A.join(",") + '" opacity="', s, '" o:opacity2="', r, '" type="', g, '" ', y, 'focus="100%" method="any" />'], p(h.prepVML(f), null, null, b)
                        };
                    if (v = z[0], w = z[z.length - 1], v[0] > 0 && z.unshift([0, v[1]]), w[0] < 1 && z.push([1, w[1]]), jb(z, function (a, b) {
                        i.test(a[1]) ? (e = zb(a[1]), k = e.get("rgb"), l = e.get("a")) : (k = a[1], l = 1), A.push(100 * a[0] + "% " + k), b ? (s = l, t = k) : (r = l, u = k)
                    }), "fill" === c) if ("gradient" === g) m = x.x1 || x[0] || 0, n = x.y1 || x[1] || 0, o = x.x2 || x[2] || 0, q = x.y2 || x[3] || 0, y = 'angle="' + (90 - 180 * na.atan((q - n) / (o - m)) / wa) + '"', B(); else {
                        var C, D = x.r, E = 2 * D, F = 2 * D, G = x.cx, H = x.cy, I = b.radialReference,
                            J = function () {
                                I && (C = d.getBBox(), G += (I[0] - C.x) / C.width - .5, H += (I[1] - C.y) / C.height - .5, E *= I[2] / C.width, F *= I[2] / C.height), y = 'src="' + R.global.VMLRadialGradientURL + '" size="' + E + "," + F + '" origin="0.5,0.5" position="' + G + "," + H + '" color2="' + u + '" ', B()
                            };
                        d.added ? J() : d.onAdd = J, j = t
                    } else j = k
                } else if (i.test(a) && "IMG" !== b.tagName) e = zb(a), f = ["<", c, ' opacity="', e.get("a"), '"/>'], p(this.prepVML(f), null, null, b), j = e.get("rgb"); else {
                    var K = b.getElementsByTagName(c);
                    K.length && (K[0].opacity = 1, K[0].type = "solid"), j = a
                }
                return j
            }, prepVML: function (a) {
                var b = "display:inline-block;behavior:url(#default#VML);", c = this.isIE8;
                return a = a.join(""), c ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = -1 === a.indexOf('style="') ? a.replace("/>", ' style="' + b + '" />') : a.replace('style="', 'style="' + b)) : a = a.replace("<", "<hcv:"), a
            }, text: Ab.prototype.html, path: function (b) {
                var c = {coordsize: "10 10"};
                return f(b) ? c.d = b : e(b) && a(c, b), this.createElement("shape").attr(c)
            }, circle: function (a, b, c) {
                var d = this.symbol("circle");
                return e(a) && (c = a.r, b = a.y, a = a.x), d.isCircle = !0, d.r = c, d.attr({x: a, y: b})
            }, g: function (a) {
                var b, c;
                return a && (c = {className: Ua + a, "class": Ua + a}), b = this.createElement(Qa).attr(c)
            }, image: function (a, b, c, d, e) {
                var f = this.createElement("img").attr({src: a});
                return arguments.length > 1 && f.attr({x: b, y: c, width: d, height: e}), f
            }, createElement: function (a) {
                return "rect" === a ? this.symbol(a) : Ab.prototype.createElement.call(this, a)
            }, invertChild: function (a, b) {
                var d = this, e = b.style, f = "IMG" === a.tagName && a.style;
                o(a, {
                    flip: "x",
                    left: c(e.width) - (f ? c(f.top) : 1),
                    top: c(e.height) - (f ? c(f.left) : 1),
                    rotation: -90
                }), jb(a.childNodes, function (b) {
                    d.invertChild(b, a)
                })
            }, symbols: {
                arc: function (a, b, c, d, e) {
                    var f, g = e.start, h = e.end, i = e.r || c || d, j = e.innerR, k = ua(g), l = va(g), m = ua(h),
                        n = va(h);
                    return h - g === 0 ? ["x"] : (f = ["wa", a - i, b - i, a + i, b + i, a + i * k, b + i * l, a + i * m, b + i * n], e.open && !j && f.push("e", Ya, a, b), f.push("at", a - j, b - j, a + j, b + j, a + j * m, b + j * n, a + j * k, b + j * l, "x", "e"), f.isArc = !0, f)
                }, circle: function (a, b, c, d, e) {
                    return e && (c = d = 2 * e.r), e && e.isCircle && (a -= c / 2, b -= d / 2), ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                }, rect: function (a, b, c, d, e) {
                    return Ab.prototype.symbols[k(e) && e.r ? "callout" : "square"].call(0, a, b, c, d, e)
                }
            }
        };
        ka.VMLRenderer = Bb = function () {
            this.init.apply(this, arguments)
        }, Bb.prototype = b(Ab.prototype, Db), O = Bb
    }
    Ab.prototype.measureSpanWidth = function (a, b) {
        var c, d = la.createElement("span"), e = la.createTextNode(a);
        return d.appendChild(e), o(d, b), this.box.appendChild(d), c = d.offsetWidth, C(d), c
    };
    var Eb, Fb;
    Ia && (ka.CanVGRenderer = Eb = function () {
        Fa = "http://www.w3.org/1999/xhtml"
    }, Eb.prototype.symbols = {}, Fb = function () {
        function a() {
            var a, c = b.length;
            for (a = 0; c > a; a++) b[a]();
            b = []
        }

        var b = [];
        return {
            push: function (c, d) {
                0 === b.length && hb(d, a), b.push(c)
            }
        }
    }(), O = Eb), J.prototype = {
        addLabel: function () {
            var b, c, d, e, f = this, h = f.axis, j = h.options, l = h.chart, m = h.horiz, o = h.categories,
                p = h.names, q = f.pos, r = j.labels, s = r.rotation, t = h.tickPositions,
                u = m && o && !r.step && !r.staggerLines && !r.rotation && l.plotWidth / t.length || !m && (l.margin[3] || .33 * l.chartWidth),
                v = q === t[0], w = q === t[t.length - 1], x = o ? n(o[q], p[q], q) : q, y = f.label, z = t.info;
            h.isDatetimeAxis && z && (e = j.dateTimeLabelFormats[z.higherRanks[q] || z.unitName]), f.isFirst = v, f.isLast = w, b = h.labelFormatter.call({
                axis: h,
                chart: l,
                isFirst: v,
                isLast: w,
                dateTimeLabelFormat: e,
                value: h.isLog ? D(i(x)) : x
            }), c = u && {width: ra(1, oa(u - 2 * (r.padding || 10))) + Wa}, k(y) ? y && y.attr({text: b}).css(c) : (d = {align: h.labelAlign}, g(s) && (d.rotation = s), u && r.ellipsis && (c.HcHeight = h.len / t.length), f.label = y = k(b) && r.enabled ? l.renderer.text(b, 0, 0, r.useHTML).attr(d).css(a(c, r.style)).add(h.labelGroup) : null, h.tickBaseline = l.renderer.fontMetrics(r.style.fontSize, y).b, s && 2 === h.side && (h.tickBaseline *= ua(s * xa))), f.yOffset = y ? n(r.y, h.tickBaseline + (2 === h.side ? 8 : -(y.getBBox().height / 2))) : 0
        }, getLabelSize: function () {
            var a = this.label, b = this.axis;
            return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0
        }, getLabelSides: function () {
            var a = this.label.getBBox(), b = this.axis, c = b.horiz, d = b.options, e = d.labels,
                f = c ? a.width : a.height, g = c ? e.x - f * {left: 0, center: .5, right: 1}[b.labelAlign] : 0,
                h = c ? f + g : f;
            return [g, h]
        }, handleOverflow: function (a, b) {
            var c, d, e, f, g, h = !0, i = this.axis, j = this.isFirst, k = this.isLast, l = i.horiz, m = l ? b.x : b.y,
                n = i.reversed, o = i.tickPositions, p = this.getLabelSides(), q = p[0], r = p[1], s = this.label.line,
                t = s || 0, u = i.labelEdge, v = i.justifyLabels && (j || k);
            if (u[t] === N || m + q > u[t] ? u[t] = m + r : v || (h = !1), v) {
                g = i.justifyToPlot, c = g ? i.pos : 0, d = g ? c + i.len : i.chart.chartWidth;
                do a += j ? 1 : -1, e = i.ticks[o[a]]; while (o[a] && (!e || !e.label || e.label.line !== s));
                f = e && e.label.xy && e.label.xy.x + e.getLabelSides()[j ? 0 : 1], j && !n || k && n ? c > m + q && (m = c - q, e && m + r > f && (h = !1)) : m + r > d && (m = d - r, e && f > m + q && (h = !1)), b.x = m
            }
            return h
        }, getPosition: function (a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        }, getLabelPosition: function (a, b, c, d, e, f, g, h) {
            var i = this.axis, j = i.transA, k = i.reversed, l = i.staggerLines;
            return a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0), b = b + this.yOffset - (f && !d ? f * j * (k ? 1 : -1) : 0), l && (c.line = g / (h || 1) % l, b += c.line * (i.labelOffset / l)), {
                x: a,
                y: b
            }
        }, getMarkPath: function (a, b, c, d, e, f) {
            return f.crispLine([Ya, a, b, Za, a + (e ? 0 : -c), b + (e ? c : 0)], d)
        }, render: function (a, b, c) {
            var d, e, f, g = this, h = g.axis, i = h.options, j = h.chart, k = j.renderer, l = h.horiz, m = g.type,
                o = g.label, p = g.pos, q = i.labels, r = g.gridLine, s = m ? m + "Grid" : "grid",
                t = m ? m + "Tick" : "tick", u = i[s + "LineWidth"], v = i[s + "LineColor"], w = i[s + "LineDashStyle"],
                x = i[t + "Length"], y = i[t + "Width"] || 0, z = i[t + "Color"], A = i[t + "Position"], B = g.mark,
                C = q.step, D = !0, E = h.tickmarkOffset, F = g.getPosition(l, p, E, b), G = F.x, H = F.y,
                I = l && G === h.pos + h.len || !l && H === h.pos ? -1 : 1;
            c = n(c, 1), this.isActive = !0, u && (d = h.getPlotLinePath(p + E, u * I, b, !0), r === N && (f = {
                stroke: v,
                "stroke-width": u
            }, w && (f.dashstyle = w), m || (f.zIndex = 1), b && (f.opacity = 0), g.gridLine = r = u ? k.path(d).attr(f).add(h.gridGroup) : null), !b && r && d && r[g.isNew ? "attr" : "animate"]({
                d: d,
                opacity: c
            })), y && x && ("inside" === A && (x = -x), h.opposite && (x = -x), e = g.getMarkPath(G, H, x, y * I, l, k), B ? B.animate({
                d: e,
                opacity: c
            }) : g.mark = k.path(e).attr({
                stroke: z,
                "stroke-width": y,
                opacity: c
            }).add(h.axisGroup)), o && !isNaN(G) && (o.xy = F = g.getLabelPosition(G, H, o, l, q, E, a, C), g.isFirst && !g.isLast && !n(i.showFirstLabel, 1) || g.isLast && !g.isFirst && !n(i.showLastLabel, 1) ? D = !1 : h.isRadial || q.step || q.rotation || b || 0 === c || (D = g.handleOverflow(a, F)), C && a % C && (D = !1), D && !isNaN(F.y) ? (F.opacity = c, o[g.isNew ? "attr" : "animate"](F), g.isNew = !1) : o.attr("y", -9999))
        }, destroy: function () {
            B(this, this.axis)
        }
    }, ka.PlotLineOrBand = function (a, b) {
        this.axis = a, b && (this.options = b, this.id = b.id)
    }, ka.PlotLineOrBand.prototype = {
        render: function () {
            var a, c, d, e, f, g, i = this, j = i.axis, l = j.horiz, m = (j.pointRange || 0) / 2, n = i.options,
                o = n.label, p = i.label, q = n.width, r = n.to, s = n.from, t = k(s) && k(r), u = n.value,
                v = n.dashStyle, w = i.svgElem, x = [], y = n.color, B = n.zIndex, C = n.events, D = {},
                E = j.chart.renderer;
            if (j.isLog && (s = h(s), r = h(r), u = h(u)), q) x = j.getPlotLinePath(u, q), D = {
                stroke: y,
                "stroke-width": q
            }, v && (D.dashstyle = v); else {
                if (!t) return;
                s = ra(s, j.min - m), r = sa(r, j.max + m), x = j.getPlotBandPath(s, r, n), y && (D.fill = y), n.borderWidth && (D.stroke = n.borderColor, D["stroke-width"] = n.borderWidth)
            }
            if (k(B) && (D.zIndex = B), w) x ? w.animate({d: x}, null, w.onGetPath) : (w.hide(), w.onGetPath = function () {
                w.show()
            }, p && (i.label = p = p.destroy())); else if (x && x.length && (i.svgElem = w = E.path(x).attr(D).add(), C)) {
                a = function (a) {
                    w.on(a, function (b) {
                        C[a].apply(i, [b])
                    })
                };
                for (c in C) a(c)
            }
            return o && k(o.text) && x && x.length && j.width > 0 && j.height > 0 ? (o = b({
                align: l && t && "center",
                x: l ? !t && 4 : 10,
                verticalAlign: !l && t && "middle",
                y: l ? t ? 16 : 10 : t ? 6 : -4,
                rotation: l && !t && 90
            }, o), p || (D = {
                align: o.textAlign || o.align,
                rotation: o.rotation
            }, k(B) && (D.zIndex = B), i.label = p = E.text(o.text, 0, 0, o.useHTML).attr(D).css(o.style).add()), d = [x[1], x[4], t ? x[6] : x[1]], e = [x[2], x[5], t ? x[7] : x[2]], f = z(d), g = z(e), p.align(o, !1, {
                x: f,
                y: g,
                width: A(d) - f,
                height: A(e) - g
            }), p.show()) : p && p.hide(), i
        }, destroy: function () {
            j(this.axis.plotLinesAndBands, this), delete this.axis, B(this)
        }
    }, X = {
        getPlotBandPath: function (a, b) {
            var c = this.getPlotLinePath(b), d = this.getPlotLinePath(a);
            return d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null, d
        }, addPlotBand: function (a) {
            return this.addPlotBandOrLine(a, "plotBands")
        }, addPlotLine: function (a) {
            return this.addPlotBandOrLine(a, "plotLines")
        }, addPlotBandOrLine: function (a, b) {
            var c = new ka.PlotLineOrBand(this, a).render(), d = this.userOptions;
            return c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c)), c
        }, removePlotBandOrLine: function (a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--;) b[e].id === a && b[e].destroy();
            jb([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function (b) {
                for (e = b.length; e--;) b[e].id === a && j(b, b[e])
            })
        }
    }, K.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: tb,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: .01,
            maxPadding: .01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {align: "middle", style: {color: "#707070"}},
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {x: -8, y: 3},
            lineWidth: 0,
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            tickWidth: 0,
            title: {rotation: 270, text: "Values"},
            stackLabels: {
                enabled: !1, formatter: function () {
                    return r(this.total, -1)
                }, style: tb.style
            }
        },
        defaultLeftAxisOptions: {labels: {x: -15, y: null}, title: {rotation: 270}},
        defaultRightAxisOptions: {labels: {x: 15, y: null}, title: {rotation: 90}},
        defaultBottomAxisOptions: {labels: {x: 0, y: null}, title: {rotation: 0}},
        defaultTopAxisOptions: {labels: {x: 0, y: -15}, title: {rotation: 0}},
        init: function (a, b) {
            var c = b.isX, d = this;
            d.horiz = a.inverted ? !c : c, d.isXAxis = c, d.coll = c ? "xAxis" : "yAxis", d.opposite = b.opposite, d.side = b.side || (d.horiz ? d.opposite ? 0 : 2 : d.opposite ? 1 : 3), d.setOptions(b);
            var e = this.options, f = e.type, g = "datetime" === f;
            d.labelFormatter = e.labels.formatter || d.defaultLabelFormatter, d.userOptions = b, d.minPixelPadding = 0, d.chart = a, d.reversed = e.reversed, d.zoomEnabled = e.zoomEnabled !== !1, d.categories = e.categories || "category" === f, d.names = [], d.isLog = "logarithmic" === f, d.isDatetimeAxis = g, d.isLinked = k(e.linkedTo), d.tickmarkOffset = d.categories && "between" === e.tickmarkPlacement && 1 === n(e.tickInterval, 1) ? .5 : 0, d.ticks = {}, d.labelEdge = [], d.minorTicks = {}, d.plotLinesAndBands = [], d.alternateBands = {}, d.len = 0, d.minRange = d.userMinRange = e.minRange || e.maxZoom, d.range = e.range, d.offset = e.offset || 0, d.stacks = {}, d.oldStacks = {}, d.max = null, d.min = null, d.crosshair = n(e.crosshair, m(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var j, l = d.options.events;
            -1 === ib(d, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, d) : a.axes.push(d), a[d.coll].push(d)), d.series = d.series || [], a.inverted && c && d.reversed === N && (d.reversed = !0), d.removePlotBand = d.removePlotBandOrLine, d.removePlotLine = d.removePlotBandOrLine;
            for (j in l) nb(d, j, l[j]);
            d.isLog && (d.val2lin = h, d.lin2val = i)
        },
        setOptions: function (a) {
            this.options = b(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], b(R[this.coll], a))
        },
        defaultLabelFormatter: function () {
            var a, b, c = this.axis, d = this.value, e = c.categories, f = this.dateTimeLabelFormat,
                g = R.lang.numericSymbols, h = g && g.length, i = c.options.labels.format,
                j = c.isLog ? d : c.tickInterval;
            if (i) b = v(i, this); else if (e) b = d; else if (f) b = S(f, d); else if (h && j >= 1e3) for (; h-- && b === N;) a = Math.pow(1e3, h + 1), j >= a && null !== g[h] && (b = r(d / a, -1) + g[h]);
            return b === N && (b = ta(d) >= 1e4 ? r(d, 0) : r(d, -1, N, "")), b
        },
        getSeriesExtremes: function () {
            var a = this, b = a.chart;
            a.hasVisibleSeries = !1, a.dataMin = a.dataMax = a.ignoreMinPadding = a.ignoreMaxPadding = null, a.buildStacks && a.buildStacks(), jb(a.series, function (c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d, e, f, g = c.options, h = g.threshold;
                    a.hasVisibleSeries = !0, a.isLog && 0 >= h && (h = null), a.isXAxis ? (d = c.xData, d.length && (a.dataMin = sa(n(a.dataMin, d[0]), z(d)), a.dataMax = ra(n(a.dataMax, d[0]), A(d)))) : (c.getExtremes(), f = c.dataMax, e = c.dataMin, k(e) && k(f) && (a.dataMin = sa(n(a.dataMin, e), e), a.dataMax = ra(n(a.dataMax, f), f)), k(h) && (a.dataMin >= h ? (a.dataMin = h, a.ignoreMinPadding = !0) : a.dataMax < h && (a.dataMax = h, a.ignoreMaxPadding = !0)))
                }
            })
        },
        translate: function (a, b, c, d, e, f) {
            var h, i = this, j = 1, k = 0, l = d ? i.oldTransA : i.transA, m = d ? i.oldMin : i.min,
                n = i.minPixelPadding, o = (i.options.ordinal || i.isLog && e) && i.lin2val;
            return l || (l = i.transA), c && (j *= -1, k = i.len), i.reversed && (j *= -1, k -= j * (i.sector || i.len)), b ? (a = a * j + k, a -= n, h = a / l + m, o && (h = i.lin2val(h))) : (o && (a = i.val2lin(a)), "between" === f && (f = .5), h = j * (a - m) * l + k + j * n + (g(f) ? l * f * i.pointRange : 0)), h
        },
        toPixels: function (a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        },
        toValue: function (a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function (a, b, c, d, e) {
            var f, g, h, i, j, k = this, l = k.chart, m = k.left, o = k.top, p = c && l.oldChartHeight || l.chartHeight,
                q = c && l.oldChartWidth || l.chartWidth, r = k.transB;
            return e = n(e, k.translate(a, null, null, c)), f = h = oa(e + r), g = i = oa(p - e - r), isNaN(e) ? j = !0 : k.horiz ? (g = o, i = p - k.bottom, (m > f || f > m + k.width) && (j = !0)) : (f = m, h = q - k.right, (o > g || g > o + k.height) && (j = !0)), j && !d ? null : l.renderer.crispLine([Ya, f, g, Za, h, i], b || 1)
        },
        getLinearTickPositions: function (a, b, c) {
            var d, e, f = D(pa(b / a) * a), h = D(qa(c / a) * a), i = [];
            if (b === c && g(b)) return [b];
            for (d = f; h >= d && (i.push(d), d = D(d + a), d !== e);) e = d;
            return i
        },
        getMinorTickPositions: function () {
            var a, b, c, d = this, e = d.options, f = d.tickPositions, g = d.minorTickInterval, h = [];
            if (d.isLog) for (c = f.length, b = 1; c > b; b++) h = h.concat(d.getLogTickPositions(g, f[b - 1], f[b], !0)); else if (d.isDatetimeAxis && "auto" === e.minorTickInterval) h = h.concat(d.getTimeTicks(d.normalizeTimeTickInterval(g), d.min, d.max, e.startOfWeek)), h[0] < d.min && h.shift(); else for (a = d.min + (f[0] - d.min) % g; a <= d.max; a += g) h.push(a);
            return h
        },
        adjustForMinRange: function () {
            var a, b, c, d, e, f, g, h, i = this, j = i.options, l = i.min, m = i.max,
                o = i.dataMax - i.dataMin >= i.minRange;
            if (i.isXAxis && i.minRange === N && !i.isLog && (k(j.min) || k(j.max) ? i.minRange = null : (jb(i.series, function (a) {
                for (e = a.xData, f = a.xIncrement ? 1 : e.length - 1, c = f; c > 0; c--) d = e[c] - e[c - 1], (b === N || b > d) && (b = d)
            }), i.minRange = sa(5 * b, i.dataMax - i.dataMin))), m - l < i.minRange) {
                var p = i.minRange;
                a = (p - m + l) / 2, g = [l - a, n(j.min, l - a)], o && (g[2] = i.dataMin), l = A(g), h = [l + p, n(j.max, l + p)], o && (h[2] = i.dataMax), m = z(h), p > m - l && (g[0] = m - p, g[1] = n(j.min, m - p), l = A(g))
            }
            i.min = l, i.max = m
        },
        setAxisTranslation: function (a) {
            var b, c, e = this, f = e.max - e.min, g = e.axisPointRange || 0, h = 0, i = 0, j = e.linkedParent,
                l = !!e.categories, m = e.transA;
            (e.isXAxis || l || g) && (j ? (h = j.minPointOffset, i = j.pointRangePadding) : jb(e.series, function (a) {
                var c = l ? 1 : e.isXAxis ? a.pointRange : e.axisPointRange || 0, j = a.options.pointPlacement,
                    m = a.closestPointRange;
                c > f && (c = 0), g = ra(g, c), h = ra(h, d(j) ? 0 : c / 2), i = ra(i, "on" === j ? 0 : c), !a.noSharedTooltip && k(m) && (b = k(b) ? sa(b, m) : m)
            }), c = e.ordinalSlope && b ? e.ordinalSlope / b : 1, e.minPointOffset = h *= c, e.pointRangePadding = i *= c, e.pointRange = sa(g, f), e.closestPointRange = b), a && (e.oldTransA = m), e.translationSlope = e.transA = m = e.len / (f + i || 1), e.transB = e.horiz ? e.left : e.bottom, e.minPixelPadding = m * h
        },
        setTickPositions: function (a) {
            var b, c, d, e, f = this, i = f.chart, j = f.options, l = j.startOnTick, m = j.endOnTick, o = f.isLog,
                p = f.isDatetimeAxis, q = f.isXAxis, r = f.isLinked, s = f.options.tickPositioner, t = j.maxPadding,
                u = j.minPadding, v = j.tickInterval, y = j.minTickInterval, z = j.tickPixelInterval, A = f.categories;
            if (r ? (f.linkedParent = i[f.coll][j.linkedTo], c = f.linkedParent.getExtremes(), f.min = n(c.min, c.dataMin), f.max = n(c.max, c.dataMax), j.type !== f.linkedParent.options.type && W(11, 1)) : (f.min = n(f.userMin, j.min, f.dataMin), f.max = n(f.userMax, j.max, f.dataMax)), o && (!a && sa(f.min, n(f.dataMin, f.min)) <= 0 && W(10, 1), f.min = D(h(f.min)), f.max = D(h(f.max))), f.range && k(f.max) && (f.userMin = f.min = ra(f.min, f.max - f.range), f.userMax = f.max, f.range = null), f.beforePadding && f.beforePadding(), f.adjustForMinRange(), A || f.axisPointRange || f.usePercentage || r || !k(f.min) || !k(f.max) || (b = f.max - f.min, b && (k(j.min) || k(f.userMin) || !u || !(f.dataMin < 0) && f.ignoreMinPadding || (f.min -= b * u), k(j.max) || k(f.userMax) || !t || !(f.dataMax > 0) && f.ignoreMaxPadding || (f.max += b * t))), g(j.floor) && (f.min = ra(f.min, j.floor)), g(j.ceiling) && (f.max = sa(f.max, j.ceiling)), f.min === f.max || void 0 === f.min || void 0 === f.max ? f.tickInterval = 1 : r && !v && z === f.linkedParent.options.tickPixelInterval ? f.tickInterval = f.linkedParent.tickInterval : (f.tickInterval = n(v, A ? 1 : (f.max - f.min) * z / ra(f.len, z)), !k(v) && f.len < z && !this.isRadial && !this.isLog && !A && l && m && (e = !0, f.tickInterval /= 4)), q && !a && jb(f.series, function (a) {
                a.processData(f.min !== f.oldMin || f.max !== f.oldMax)
            }), f.setAxisTranslation(!0), f.beforeSetTickPositions && f.beforeSetTickPositions(), f.postProcessTickInterval && (f.tickInterval = f.postProcessTickInterval(f.tickInterval)), f.pointRange && (f.tickInterval = ra(f.pointRange, f.tickInterval)), !v && f.tickInterval < y && (f.tickInterval = y), p || o || v || (f.tickInterval = x(f.tickInterval, null, w(f.tickInterval), n(j.allowDecimals, !(f.tickInterval > 1 && f.tickInterval < 5 && f.max > 1e3 && f.max < 9999)))), f.minorTickInterval = "auto" === j.minorTickInterval && f.tickInterval ? f.tickInterval / 5 : j.minorTickInterval, f.tickPositions = d = j.tickPositions ? [].concat(j.tickPositions) : s && s.apply(f, [f.min, f.max]), d || (!f.ordinalPositions && (f.max - f.min) / f.tickInterval > ra(2 * f.len, 200) && W(19, !0), d = p ? f.getTimeTicks(f.normalizeTimeTickInterval(f.tickInterval, j.units), f.min, f.max, j.startOfWeek, f.ordinalPositions, f.closestPointRange, !0) : o ? f.getLogTickPositions(f.tickInterval, f.min, f.max) : f.getLinearTickPositions(f.tickInterval, f.min, f.max), e && d.splice(1, d.length - 2), f.tickPositions = d), !r) {
                var B, C = d[0], E = d[d.length - 1], F = f.minPointOffset || 0;
                l ? f.min = C : f.min - F > C && d.shift(), m ? f.max = E : f.max + F < E && d.pop(), 0 === d.length && k(C) && d.push((E + C) / 2), 1 === d.length && (B = ta(f.max) > 1e13 ? 1 : .001, f.min -= B, f.max += B)
            }
        },
        setMaxTicks: function () {
            var a = this.chart, b = a.maxTicks || {}, c = this.tickPositions,
                d = this._maxTicksKey = [this.coll, this.pos, this.len].join("-");
            !this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && this.options.alignTicks !== !1 && (b[d] = c.length), a.maxTicks = b
        },
        adjustTickAmount: function () {
            var a = this, b = a.chart, c = a._maxTicksKey, d = a.tickPositions, e = b.maxTicks;
            if (e && e[c] && !a.isDatetimeAxis && !a.categories && !a.isLinked && a.options.alignTicks !== !1 && this.min !== N) {
                var f, g = a.tickAmount, h = d.length;
                if (a.tickAmount = f = e[c], f > h) {
                    for (; d.length < f;) d.push(D(d[d.length - 1] + a.tickInterval));
                    a.transA *= (h - 1) / (f - 1), a.max = d[d.length - 1]
                }
                k(g) && f !== g && (a.isDirty = !0)
            }
        },
        setScale: function () {
            var a, b, c, d, e = this, f = e.stacks;
            if (e.oldMin = e.min, e.oldMax = e.max, e.oldAxisLength = e.len, e.setAxisSize(), d = e.len !== e.oldAxisLength, jb(e.series, function (a) {
                (a.isDirtyData || a.isDirty || a.xAxis.isDirty) && (c = !0)
            }), d || c || e.isLinked || e.forceRedraw || e.userMin !== e.oldUserMin || e.userMax !== e.oldUserMax) {
                if (!e.isXAxis) for (a in f) for (b in f[a]) f[a][b].total = null, f[a][b].cum = 0;
                e.forceRedraw = !1, e.getSeriesExtremes(), e.setTickPositions(), e.oldUserMin = e.userMin, e.oldUserMax = e.userMax, e.isDirty || (e.isDirty = d || e.min !== e.oldMin || e.max !== e.oldMax)
            } else if (!e.isXAxis) {
                e.oldStacks && (f = e.stacks = e.oldStacks);
                for (a in f) for (b in f[a]) f[a][b].cum = f[a][b].total
            }
            e.setMaxTicks()
        },
        setExtremes: function (b, c, d, e, f) {
            var g = this, h = g.chart;
            d = n(d, !0), f = a(f, {min: b, max: c}), pb(g, "setExtremes", f, function () {
                g.userMin = b, g.userMax = c, g.eventArgs = f, g.isDirtyExtremes = !0, d && h.redraw(e)
            })
        },
        zoom: function (a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options;
            return this.allowZoomOutside || (k(c) && a <= sa(c, n(e.min, c)) && (a = N), k(d) && b >= ra(d, n(e.max, d)) && (b = N)), this.displayBtn = a !== N || b !== N, this.setExtremes(a, b, !1, N, {trigger: "zoom"}), !0
        },
        setAxisSize: function () {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = b.offsetRight || 0, e = this.horiz,
                f = n(b.width, a.plotWidth - c + d), g = n(b.height, a.plotHeight), h = n(b.top, a.plotTop),
                i = n(b.left, a.plotLeft + c), j = /%$/;
            j.test(g) && (g = parseInt(g, 10) / 100 * a.plotHeight), j.test(h) && (h = parseInt(h, 10) / 100 * a.plotHeight + a.plotTop), this.left = i, this.top = h, this.width = f, this.height = g, this.bottom = a.chartHeight - g - h, this.right = a.chartWidth - f - i, this.len = ra(e ? f : g, 0), this.pos = e ? i : h
        },
        getExtremes: function () {
            var a = this, b = a.isLog;
            return {
                min: b ? D(i(a.min)) : a.min,
                max: b ? D(i(a.max)) : a.max,
                dataMin: a.dataMin,
                dataMax: a.dataMax,
                userMin: a.userMin,
                userMax: a.userMax
            }
        },
        getThreshold: function (a) {
            var b = this, c = b.isLog, d = c ? i(b.min) : b.min, e = c ? i(b.max) : b.max;
            return d > a || null === a ? a = d : a > e && (a = e), b.translate(a, 0, 1, 0, 1)
        },
        autoLabelAlign: function (a) {
            var b, c = (n(a, 0) - 90 * this.side + 720) % 360;
            return b = c > 15 && 165 > c ? "right" : c > 195 && 345 > c ? "left" : "center"
        },
        getOffset: function () {
            var a, b, c, d, e, f, g, h, i, j, l, m, o, p, q, r = this, s = r.chart, t = s.renderer, u = r.options,
                v = r.tickPositions, w = r.ticks, x = r.horiz, y = r.side, z = s.inverted ? [1, 0, 3, 2][y] : y, A = 0,
                B = 0, C = u.title, D = u.labels, E = 0, F = s.axisOffset, G = s.clipOffset, H = [-1, 1, 1, -1][y],
                I = 1, K = n(D.maxStaggerLines, 5);
            if (r.hasData = a = r.hasVisibleSeries || k(r.min) && k(r.max) && !!v, r.showAxis = b = a || n(u.showEmpty, !0), r.staggerLines = r.horiz && D.staggerLines, r.axisGroup || (r.gridGroup = t.g("grid").attr({zIndex: u.gridZIndex || 1}).add(), r.axisGroup = t.g("axis").attr({zIndex: u.zIndex || 2}).add(), r.labelGroup = t.g("axis-labels").attr({zIndex: D.zIndex || 7}).addClass(Ua + r.coll.toLowerCase() + "-labels").add()), a || r.isLinked) {
                if (r.labelAlign = n(D.align || r.autoLabelAlign(D.rotation)), jb(v, function (a) {
                    w[a] ? w[a].addLabel() : w[a] = new J(r, a)
                }), r.horiz && !r.staggerLines && K && !D.rotation) {
                    for (g = r.reversed ? [].concat(v).reverse() : v; K > I;) {
                        for (h = [], i = !1, f = 0; f < g.length; f++) j = g[f], l = w[j].label && w[j].label.getBBox(), o = l ? l.width : 0, p = f % I, o && (m = r.translate(j), h[p] !== N && m < h[p] && (i = !0), h[p] = m + o);
                        if (!i) break;
                        I++
                    }
                    I > 1 && (r.staggerLines = I)
                }
                jb(v, function (a) {
                    (0 === y || 2 === y || {
                        1: "left",
                        3: "right"
                    }[y] === r.labelAlign) && (E = ra(w[a].getLabelSize(), E))
                }), r.staggerLines && (E *= r.staggerLines, r.labelOffset = E)
            } else for (e in w) w[e].destroy(), delete w[e];
            C && C.text && C.enabled !== !1 && (r.axisTitle || (r.axisTitle = t.text(C.text, 0, 0, C.useHTML).attr({
                zIndex: 7,
                rotation: C.rotation || 0,
                align: C.textAlign || {low: "left", middle: "center", high: "right"}[C.align]
            }).addClass(Ua + this.coll.toLowerCase() + "-title").css(C.style).add(r.axisGroup), r.axisTitle.isNew = !0), b && (A = r.axisTitle.getBBox()[x ? "height" : "width"], c = C.offset, B = k(c) ? 0 : n(C.margin, x ? 5 : 10)), r.axisTitle[b ? "show" : "hide"]()), r.offset = H * n(u.offset, F[y]), q = 2 === y ? r.tickBaseline : 0, d = E + B + (E && H * (x ? n(D.y, r.tickBaseline + 8) : D.x) - q), r.axisTitleMargin = n(c, d), F[y] = ra(F[y], r.axisTitleMargin + A + H * r.offset, d), G[z] = ra(G[z], 2 * pa(u.lineWidth / 2))
        },
        getLinePath: function (a) {
            var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz,
                f = this.left + (c ? this.width : 0) + d, g = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            return c && (a *= -1), b.renderer.crispLine([Ya, e ? this.left : f, e ? g : this.top, Za, e ? b.chartWidth - this.right : f, e ? g : b.chartHeight - this.bottom], a)
        },
        getTitlePosition: function () {
            var a = this.horiz, b = this.left, d = this.top, e = this.len, f = this.options.title, g = a ? b : d,
                h = this.opposite, i = this.offset, j = c(f.style.fontSize || 12),
                k = {low: g + (a ? 0 : e), middle: g + e / 2, high: g + (a ? e : 0)}[f.align],
                l = (a ? d + this.height : b) + (a ? 1 : -1) * (h ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? j : 0);
            return {
                x: a ? k : l + (h ? this.width : 0) + i + (f.x || 0),
                y: a ? l - (h ? this.height : 0) + i : k + (f.y || 0)
            }
        },
        render: function () {
            var a, b, c, d, e = this, f = e.horiz, g = e.reversed, h = e.chart, j = h.renderer, l = e.options,
                m = e.isLog, n = e.isLinked, o = e.tickPositions, p = e.axisTitle, q = e.ticks, r = e.minorTicks,
                s = e.alternateBands, t = l.stackLabels, u = l.alternateGridColor, v = e.tickmarkOffset,
                w = l.lineWidth, x = h.hasRendered, y = x && k(e.oldMin) && !isNaN(e.oldMin), z = e.hasData,
                A = e.showAxis, B = l.labels.overflow, C = e.justifyLabels = f && B !== !1;
            e.labelEdge.length = 0, e.justifyToPlot = "justify" === B, jb([q, r, s], function (a) {
                var b;
                for (b in a) a[b].isActive = !1
            }), (z || n) && (e.minorTickInterval && !e.categories && jb(e.getMinorTickPositions(), function (a) {
                r[a] || (r[a] = new J(e, a, "minor")), y && r[a].isNew && r[a].render(null, !0), r[a].render(null, !1, 1)
            }), o.length && (a = o.slice(), (f && g || !f && !g) && a.reverse(), C && (a = a.slice(1).concat([a[0]])), jb(a, function (b, c) {
                C && (c = c === a.length - 1 ? 0 : c + 1), (!n || b >= e.min && b <= e.max) && (q[b] || (q[b] = new J(e, b)), y && q[b].isNew && q[b].render(c, !0, .1), q[b].render(c))
            }), v && 0 === e.min && (q[-1] || (q[-1] = new J(e, -1, null, !0)), q[-1].render(-1))), u && jb(o, function (a, b) {
                b % 2 === 0 && a < e.max && (s[a] || (s[a] = new ka.PlotLineOrBand(e)), c = a + v, d = o[b + 1] !== N ? o[b + 1] + v : e.max, s[a].options = {
                    from: m ? i(c) : c,
                    to: m ? i(d) : d,
                    color: u
                }, s[a].render(), s[a].isActive = !0)
            }), e._addedPlotLB || (jb((l.plotLines || []).concat(l.plotBands || []), function (a) {
                e.addPlotBandOrLine(a)
            }), e._addedPlotLB = !0)), jb([q, r, s], function (a) {
                var b, c, d = [], e = T ? T.duration || 500 : 0, f = function () {
                    for (c = d.length; c--;) a[d[c]] && !a[d[c]].isActive && (a[d[c]].destroy(), delete a[d[c]])
                };
                for (b in a) a[b].isActive || (a[b].render(b, !1, 0), a[b].isActive = !1, d.push(b));
                a !== s && h.hasRendered && e ? e && setTimeout(f, e) : f()
            }), w && (b = e.getLinePath(w), e.axisLine ? e.axisLine.animate({d: b}) : e.axisLine = j.path(b).attr({
                stroke: l.lineColor,
                "stroke-width": w,
                zIndex: 7
            }).add(e.axisGroup), e.axisLine[A ? "show" : "hide"]()), p && A && (p[p.isNew ? "attr" : "animate"](e.getTitlePosition()), p.isNew = !1), t && t.enabled && e.renderStackTotals(), e.isDirty = !1
        },
        redraw: function () {
            this.render(), jb(this.plotLinesAndBands, function (a) {
                a.render()
            }), jb(this.series, function (a) {
                a.isDirty = !0
            })
        },
        destroy: function (a) {
            var b, c, d = this, e = d.stacks, f = d.plotLinesAndBands;
            a || ob(d);
            for (b in e) B(e[b]), e[b] = null;
            for (jb([d.ticks, d.minorTicks, d.alternateBands], function (a) {
                B(a)
            }), c = f.length; c--;) f[c].destroy();
            jb(["stackTotalGroup", "axisLine", "axisTitle", "axisGroup", "cross", "gridGroup", "labelGroup"], function (a) {
                d[a] && (d[a] = d[a].destroy())
            }), this.cross && this.cross.destroy()
        },
        drawCrosshair: function (a, b) {
            if (this.crosshair) {
                if ((k(b) || !n(this.crosshair.snap, !0)) === !1) return void this.hideCrosshair();
                var c, d, e = this.crosshair, f = e.animation;
                if (n(e.snap, !0) ? k(b) && (d = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY) : d = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : n(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, d), null === c) return void this.hideCrosshair();
                if (this.cross) this.cross.attr({visibility: Va})[f ? "animate" : "attr"]({d: c}, f); else {
                    var g = {"stroke-width": e.width || 1, stroke: e.color || "#C0C0C0", zIndex: e.zIndex || 2};
                    e.dashStyle && (g.dashstyle = e.dashStyle), this.cross = this.chart.renderer.path(c).attr(g).add()
                }
            }
        },
        hideCrosshair: function () {
            this.cross && this.cross.hide()
        }
    }, a(K.prototype, X), K.prototype.getTimeTicks = function (b, c, d, e) {
        var f, g, h = [], i = {}, j = R.global.useUTC, l = new Y(c - $), m = b.unitRange, o = b.count;
        if (k(c)) {
            m >= V.second && (l.setMilliseconds(0), l.setSeconds(m >= V.minute ? 0 : o * pa(l.getSeconds() / o))), m >= V.minute && l[fa](m >= V.hour ? 0 : o * pa(l[_]() / o)), m >= V.hour && l[ga](m >= V.day ? 0 : o * pa(l[aa]() / o)), m >= V.day && l[ha](m >= V.month ? 1 : o * pa(l[ca]() / o)), m >= V.month && (l[ia](m >= V.year ? 0 : o * pa(l[da]() / o)), g = l[ea]()), m >= V.year && (g -= g % o, l[ja](g)), m === V.week && l[ha](l[ca]() - l[ba]() + n(e, 1)), f = 1, $ && (l = new Y(l.getTime() + $)), g = l[ea]();
            for (var p = l.getTime(), q = l[da](), r = l[ca](), s = (V.day + (j ? $ : 60 * l.getTimezoneOffset() * 1e3)) % V.day; d > p;) h.push(p), m === V.year ? p = Z(g + f * o, 0) : m === V.month ? p = Z(g, q + f * o) : j || m !== V.day && m !== V.week ? p += m * o : p = Z(g, q, r + f * o * (m === V.day ? 1 : 7)), f++;
            h.push(p), jb(kb(h, function (a) {
                return m <= V.hour && a % V.day === s
            }), function (a) {
                i[a] = "day"
            })
        }
        return h.info = a(b, {higherRanks: i, totalRange: m * o}), h
    }, K.prototype.normalizeTimeTickInterval = function (a, b) {
        var c, d,
            e = b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]],
            f = e[e.length - 1], g = V[f[0]], h = f[1];
        for (d = 0; d < e.length; d++) if (f = e[d], g = V[f[0]], h = f[1], e[d + 1]) {
            var i = (g * h[h.length - 1] + V[e[d + 1][0]]) / 2;
            if (i >= a) break
        }
        return g === V.year && 5 * g > a && (h = [1, 2, 5]), c = x(a / g, h, "year" === f[0] ? ra(w(a / g), 1) : 1), {
            unitRange: g,
            count: c,
            unitName: f[0]
        }
    }, K.prototype.getLogTickPositions = function (a, b, c, d) {
        var e = this, f = e.options, g = e.len, j = [];
        if (d || (e._minorAutoInterval = null), a >= .5) a = oa(a), j = e.getLinearTickPositions(a, b, c); else if (a >= .08) {
            var k, l, m, o, p, q, r, s = pa(b);
            for (k = a > .3 ? [1, 2, 4] : a > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], l = s; c + 1 > l && !r; l++) for (o = k.length, m = 0; o > m && !r; m++) p = h(i(l) * k[m]), p > b && (!d || c >= q) && q !== N && j.push(q), q > c && (r = !0), q = p
        } else {
            var t = i(b), u = i(c), v = f[d ? "minorTickInterval" : "tickInterval"], y = "auto" === v ? null : v,
                z = f.tickPixelInterval / (d ? 5 : 1), A = d ? g / e.tickPositions.length : g;
            a = n(y, e._minorAutoInterval, (u - t) * z / (A || 1)), a = x(a, null, w(a)), j = mb(e.getLinearTickPositions(a, t, u), h), d || (e._minorAutoInterval = a / 5)
        }
        return d || (e.tickInterval = a), j
    };
    var Gb = ka.Tooltip = function () {
        this.init.apply(this, arguments)
    };
    Gb.prototype = {
        init: function (a, b) {
            var d = b.borderWidth, e = b.style, f = c(e.padding);
            this.chart = a, this.options = b, this.crosshairs = [], this.now = {
                x: 0,
                y: 0
            }, this.isHidden = !0, this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({
                padding: f,
                fill: b.backgroundColor,
                "stroke-width": d,
                r: b.borderRadius,
                zIndex: 8
            }).css(e).css({padding: 0}).add().attr({y: -9999}), Ia || this.label.shadow(b.shadow), this.shared = b.shared
        }, destroy: function () {
            this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
        }, move: function (b, c, d, e) {
            var f = this, g = f.now,
                h = f.options.animation !== !1 && !f.isHidden && (ta(b - g.x) > 1 || ta(c - g.y) > 1),
                i = f.followPointer || f.len > 1;
            a(g, {
                x: h ? (2 * g.x + b) / 3 : b,
                y: h ? (g.y + c) / 2 : c,
                anchorX: i ? N : h ? (2 * g.anchorX + d) / 3 : d,
                anchorY: i ? N : h ? (g.anchorY + e) / 2 : e
            }), f.label.attr(g), h && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                f && f.move(b, c, d, e)
            }, 32))
        }, hide: function (a) {
            var b, c = this;
            clearTimeout(this.hideTimer), this.isHidden || (b = this.chart.hoverPoints, this.hideTimer = setTimeout(function () {
                c.label.fadeOut(), c.isHidden = !0
            }, n(a, this.options.hideDelay, 500)), b && jb(b, function (a) {
                a.setState()
            }), this.chart.hoverPoints = null)
        }, getAnchor: function (a, b) {
            var c, d, e = this.chart, f = e.inverted, g = e.plotTop, h = 0, i = 0;
            return a = m(a), c = a[0].tooltipPos, this.followPointer && b && (b.chartX === N && (b = e.pointer.normalize(b)), c = [b.chartX - e.plotLeft, b.chartY - g]), c || (jb(a, function (a) {
                d = a.series.yAxis, h += a.plotX, i += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!f && d ? d.top - g : 0)
            }), h /= a.length, i /= a.length, c = [f ? e.plotWidth - i : h, this.shared && !f && a.length > 1 && b ? b.chartY - g : f ? e.plotHeight - h : i]), mb(c, oa)
        }, getPosition: function (a, b, c) {
            var d, e = this.chart, f = this.distance, g = {}, h = ["y", e.chartHeight, b, c.plotY + e.plotTop],
                i = ["x", e.chartWidth, a, c.plotX + e.plotLeft],
                j = c.ttBelow || e.inverted && !c.negative || !e.inverted && c.negative, k = function (a, b, c, d) {
                    var e = d - f > c, h = b > d + f + c, i = d - f - c, k = d + f;
                    if (j && h) g[a] = k; else if (!j && e) g[a] = i; else if (e) g[a] = i; else {
                        if (!h) return !1;
                        g[a] = k
                    }
                }, l = function (a, b, c, d) {
                    return f > d || d > b - f ? !1 : void (c / 2 > d ? g[a] = 1 : d > b - c / 2 ? g[a] = b - c - 2 : g[a] = d - c / 2)
                }, m = function (a) {
                    var b = h;
                    h = i, i = b, d = a
                }, n = function () {
                    k.apply(0, h) !== !1 ? l.apply(0, i) !== !1 || d || (m(!0), n()) : d ? g.x = g.y = 0 : (m(!0), n())
                };
            return (e.inverted || this.len > 1) && m(), n(), g
        }, defaultFormatter: function (a) {
            var b, c = this.points || m(this), d = c[0].series;
            return b = [a.tooltipHeaderFormatter(c[0])], jb(c, function (a) {
                d = a.series, b.push(d.tooltipFormatter && d.tooltipFormatter(a) || a.point.tooltipFormatter(d.tooltipOptions.pointFormat))
            }), b.push(a.options.footerFormat || ""), b.join("")
        }, refresh: function (a, b) {
            var c, d, e, f, g, h, i = this, j = i.chart, k = i.label, l = i.options, o = {}, p = [],
                q = l.formatter || i.defaultFormatter, r = j.hoverPoints, s = i.shared;
            clearTimeout(this.hideTimer), i.followPointer = m(a)[0].series.tooltipOptions.followPointer, e = i.getAnchor(a, b), c = e[0], d = e[1], !s || a.series && a.series.noSharedTooltip ? o = a.getLabelConfig() : (j.hoverPoints = a, r && jb(r, function (a) {
                a.setState()
            }), jb(a, function (a) {
                a.setState(ab), p.push(a.getLabelConfig())
            }), o = {
                x: a[0].category,
                y: a[0].y
            }, o.points = p, this.len = p.length, a = a[0]), f = q.call(o, i), h = a.series, this.distance = n(h.tooltipOptions.distance, 16), f === !1 ? this.hide() : (i.isHidden && (sb(k), k.attr("opacity", 1).show()), k.attr({text: f}), g = l.borderColor || a.color || h.color || "#606060", k.attr({stroke: g}), i.updatePosition({
                plotX: c,
                plotY: d,
                negative: a.negative,
                ttBelow: a.ttBelow
            }), this.isHidden = !1), pb(j, "tooltipRefresh", {
                text: f,
                x: c + j.plotLeft,
                y: d + j.plotTop,
                borderColor: g
            })
        }, updatePosition: function (a) {
            var b = this.chart, c = this.label,
                d = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(oa(d.x), oa(d.y), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        }, tooltipHeaderFormatter: function (a) {
            var b, c = a.series, d = c.tooltipOptions, e = d.dateTimeLabelFormats, f = d.xDateFormat, h = c.xAxis,
                i = h && "datetime" === h.options.type && g(a.key), j = d.headerFormat, k = h && h.closestPointRange;
            if (i && !f) {
                if (k) {
                    for (b in V) if (V[b] >= k || V[b] <= V.day && a.key % V[b] > 0) {
                        f = e[b];
                        break
                    }
                } else f = e.day;
                f = f || e.year
            }
            return i && f && (j = j.replace("{point.key}", "{point.key:" + f + "}")), v(j, {point: a, series: c})
        }
    };
    var Hb;
    P = la.documentElement.ontouchstart !== N;
    var Ib = ka.Pointer = function (a, b) {
        this.init(a, b)
    };
    if (Ib.prototype = {
        init: function (a, b) {
            var c, d, e = b.chart, f = e.events, g = Ia ? "" : e.zoomType, h = a.inverted;
            this.options = b, this.chart = a, this.zoomX = c = /x/.test(g), this.zoomY = d = /y/.test(g), this.zoomHor = c && !h || d && h, this.zoomVert = d && !h || c && h, this.hasZoom = c || d, this.runChartClick = f && !!f.click, this.pinchDown = [], this.lastValidTouch = {}, ka.Tooltip && b.tooltip.enabled && (a.tooltip = new Gb(a, b.tooltip), this.followTouchMove = b.tooltip.followTouchMove), this.setDOMEvents()
        }, normalize: function (b, c) {
            var d, e, f;
            return b = b || window.event, b = qb(b), b.target || (b.target = b.srcElement), f = b.touches ? b.touches.length ? b.touches.item(0) : b.changedTouches[0] : b, c || (this.chartPosition = c = lb(this.chart.container)), f.pageX === N ? (d = ra(b.x, b.clientX - c.left), e = b.y) : (d = f.pageX - c.left, e = f.pageY - c.top), a(b, {
                chartX: oa(d),
                chartY: oa(e)
            })
        }, getCoordinates: function (a) {
            var b = {xAxis: [], yAxis: []};
            return jb(this.chart.axes, function (c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"])})
            }), b
        }, getIndex: function (a) {
            var b = this.chart;
            return b.inverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
        }, runPointActions: function (a) {
            var b, c, d, e, f, g, h = this, i = h.chart, j = i.series, k = i.tooltip, l = i.hoverPoint,
                m = i.hoverSeries, o = i.chartWidth, p = h.getIndex(a);
            if (k && h.options.tooltip.shared && (!m || !m.noSharedTooltip)) {
                for (d = [], e = j.length, f = 0; e > f; f++) j[f].visible && j[f].options.enableMouseTracking !== !1 && !j[f].noSharedTooltip && j[f].singularTooltips !== !0 && j[f].tooltipPoints.length && (c = j[f].tooltipPoints[p], c && c.series && (c._dist = ta(p - c.clientX), o = sa(o, c._dist), d.push(c)));
                for (e = d.length; e--;) d[e]._dist > o && d.splice(e, 1);
                d.length && d[0].clientX !== h.hoverX && (k.refresh(d, a), h.hoverX = d[0].clientX)
            }
            b = m && m.tooltipOptions.followPointer, m && m.tracker && !b ? (c = m.tooltipPoints[p], c && c !== l && c.onMouseOver(a)) : k && b && !k.isHidden && (g = k.getAnchor([{}], a), k.updatePosition({
                plotX: g[0],
                plotY: g[1]
            })), k && !h._onDocumentMouseMove && (h._onDocumentMouseMove = function (a) {
                Ma[Hb] && Ma[Hb].pointer.onDocumentMouseMove(a)
            }, nb(la, "mousemove", h._onDocumentMouseMove)), jb(i.axes, function (b) {
                b.drawCrosshair(a, n(c, l))
            })
        }, reset: function (a, b) {
            var c = this, d = c.chart, e = d.hoverSeries, f = d.hoverPoint, g = d.tooltip,
                h = g && g.shared ? d.hoverPoints : f;
            a = a && g && h, a && m(h)[0].plotX === N && (a = !1), a ? (g.refresh(h), f && f.setState(f.state, !0)) : (f && f.onMouseOut(), e && e.onMouseOut(), g && g.hide(b), c._onDocumentMouseMove && (ob(la, "mousemove", c._onDocumentMouseMove), c._onDocumentMouseMove = null), jb(d.axes, function (a) {
                a.hideCrosshair()
            }), c.hoverX = null)
        }, scaleGroups: function (a, b) {
            var c, d = this.chart;
            jb(d.series, function (e) {
                c = a || e.getPlotBox(), e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(c), e.markerGroup && (e.markerGroup.attr(c), e.markerGroup.clip(b ? d.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(c))
            }), d.clipRect.attr(b || d.clipBox)
        }, dragStart: function (a) {
            var b = this.chart;
            b.mouseIsDown = a.type, b.cancelClick = !1, b.mouseDownX = this.mouseDownX = a.chartX, b.mouseDownY = this.mouseDownY = a.chartY
        }, drag: function (a) {
            var b, c, d = this.chart, e = d.options.chart, f = a.chartX, g = a.chartY, h = this.zoomHor,
                i = this.zoomVert, j = d.plotLeft, k = d.plotTop, l = d.plotWidth, m = d.plotHeight,
                n = this.mouseDownX, o = this.mouseDownY, p = e.panKey && a[e.panKey + "Key"];
            j > f ? f = j : f > j + l && (f = j + l), k > g ? g = k : g > k + m && (g = k + m), this.hasDragged = Math.sqrt(Math.pow(n - f, 2) + Math.pow(o - g, 2)), this.hasDragged > 10 && (b = d.isInsidePlot(n - j, o - k), d.hasCartesianSeries && (this.zoomX || this.zoomY) && b && !p && (this.selectionMarker || (this.selectionMarker = d.renderer.rect(j, k, h ? 1 : l, i ? 1 : m, 0).attr({
                fill: e.selectionMarkerFill || "rgba(69,114,167,0.25)",
                zIndex: 7
            }).add())), this.selectionMarker && h && (c = f - n, this.selectionMarker.attr({
                width: ta(c),
                x: (c > 0 ? 0 : c) + n
            })), this.selectionMarker && i && (c = g - o, this.selectionMarker.attr({
                height: ta(c),
                y: (c > 0 ? 0 : c) + o
            })), b && !this.selectionMarker && e.panning && d.pan(a, e.panning))
        }, drop: function (b) {
            var c = this.chart, d = this.hasPinched;
            if (this.selectionMarker) {
                var e, f = {xAxis: [], yAxis: [], originalEvent: b.originalEvent || b}, g = this.selectionMarker,
                    h = g.attr ? g.attr("x") : g.x, i = g.attr ? g.attr("y") : g.y,
                    j = g.attr ? g.attr("width") : g.width, k = g.attr ? g.attr("height") : g.height;
                (this.hasDragged || d) && (jb(c.axes, function (a) {
                    if (a.zoomEnabled) {
                        var c = a.horiz, d = "touchend" === b.type ? a.minPixelPadding : 0,
                            g = a.toValue((c ? h : i) + d), l = a.toValue((c ? h + j : i + k) - d);
                        isNaN(g) || isNaN(l) || (f[a.coll].push({axis: a, min: sa(g, l), max: ra(g, l)}), e = !0)
                    }
                }), e && pb(c, "selection", f, function (b) {
                    c.zoom(a(b, d ? {animation: !1} : null))
                })), this.selectionMarker = this.selectionMarker.destroy(), d && this.scaleGroups()
            }
            c && (o(c.container, {cursor: c._cursor}), c.cancelClick = this.hasDragged > 10, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        }, onContainerMouseDown: function (a) {
            a = this.normalize(a), a.preventDefault && a.preventDefault(), this.dragStart(a)
        }, onDocumentMouseUp: function (a) {
            Ma[Hb] && Ma[Hb].pointer.drop(a)
        }, onDocumentMouseMove: function (a) {
            var b = this.chart, c = this.chartPosition, d = b.hoverSeries;
            a = this.normalize(a, c), c && d && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset()
        }, onContainerMouseLeave: function () {
            var a = Ma[Hb];
            a && (a.pointer.reset(), a.pointer.chartPosition = null)
        }, onContainerMouseMove: function (a) {
            var b = this.chart;
            Hb = b.index, a = this.normalize(a), a.returnValue = !1, "mousedown" === b.mouseIsDown && this.drag(a), !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a)
        }, inClass: function (a, b) {
            for (var c; a;) {
                if (c = l(a, "class")) {
                    if (-1 !== c.indexOf(b)) return !0;
                    if (-1 !== c.indexOf(Ua + "container")) return !1
                }
                a = a.parentNode
            }
        }, onTrackerMouseOut: function (a) {
            var b = this.chart.hoverSeries, c = a.relatedTarget || a.toElement, d = c && c.point && c.point.series;
            !b || b.options.stickyTracking || this.inClass(c, Ua + "tooltip") || d === b || b.onMouseOut()
        }, onContainerClick: function (b) {
            var c = this.chart, d = c.hoverPoint, e = c.plotLeft, f = c.plotTop;
            b = this.normalize(b), b.cancelBubble = !0, c.cancelClick || (d && this.inClass(b.target, Ua + "tracker") ? (pb(d.series, "click", a(b, {point: d})), c.hoverPoint && d.firePointEvent("click", b)) : (a(b, this.getCoordinates(b)), c.isInsidePlot(b.chartX - e, b.chartY - f) && pb(c, "click", b)))
        }, setDOMEvents: function () {
            var a = this, b = a.chart.container;
            b.onmousedown = function (b) {
                a.onContainerMouseDown(b)
            }, b.onmousemove = function (b) {
                a.onContainerMouseMove(b)
            }, b.onclick = function (b) {
                a.onContainerClick(b)
            }, nb(b, "mouseleave", a.onContainerMouseLeave), 1 === Na && nb(la, "mouseup", a.onDocumentMouseUp), P && (b.ontouchstart = function (b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function (b) {
                a.onContainerTouchMove(b)
            }, 1 === Na && nb(la, "touchend", a.onDocumentTouchEnd))
        }, destroy: function () {
            var a;
            ob(this.chart.container, "mouseleave", this.onContainerMouseLeave), Na || (ob(la, "mouseup", this.onDocumentMouseUp), ob(la, "touchend", this.onDocumentTouchEnd)), clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }
    }, a(ka.Pointer.prototype, {
        pinchTranslate: function (a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f), (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        }, pinchTranslateDirection: function (a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o = this.chart, p = a ? "x" : "y", q = a ? "X" : "Y", r = "chart" + q,
                s = a ? "width" : "height", t = o["plot" + (a ? "Left" : "Top")], u = h || 1, v = o.inverted,
                w = o.bounds[a ? "h" : "v"], x = 1 === b.length, y = b[0][r], z = c[0][r], A = !x && b[1][r],
                B = !x && c[1][r], C = function () {
                    !x && ta(y - A) > 20 && (u = h || ta(z - B) / ta(y - A)), k = (t - z) / u + y, i = o["plot" + (a ? "Width" : "Height")] / u
                };
            C(), j = k, j < w.min ? (j = w.min, l = !0) : j + i > w.max && (j = w.max - i, l = !0), l ? (z -= .8 * (z - g[p][0]), x || (B -= .8 * (B - g[p][1])), C()) : g[p] = [z, B], v || (f[p] = k - t, f[s] = i), n = v ? a ? "scaleY" : "scaleX" : "scale" + q, m = v ? 1 / u : u, e[s] = i, e[p] = j, d[n] = u, d["translate" + q] = m * t + (z - m * y)
        }, pinch: function (b) {
            var c = this, d = c.chart, e = c.pinchDown, f = c.followTouchMove, g = b.touches, h = g.length,
                i = c.lastValidTouch, j = c.hasZoom, k = c.selectionMarker, l = {},
                m = 1 === h && (c.inClass(b.target, Ua + "tracker") && d.runTrackerClick || c.runChartClick), o = {};
            !j && !f || m || b.preventDefault(), mb(g, function (a) {
                return c.normalize(a)
            }), "touchstart" === b.type ? (jb(g, function (a, b) {
                e[b] = {chartX: a.chartX, chartY: a.chartY}
            }), i.x = [e[0].chartX, e[1] && e[1].chartX], i.y = [e[0].chartY, e[1] && e[1].chartY], jb(d.axes, function (a) {
                if (a.zoomEnabled) {
                    var b = d.bounds[a.horiz ? "h" : "v"], c = a.minPixelPadding,
                        e = a.toPixels(n(a.options.min, a.dataMin)), f = a.toPixels(n(a.options.max, a.dataMax)),
                        g = sa(e, f), h = ra(e, f);
                    b.min = sa(a.pos, g - c), b.max = ra(a.pos + a.len, h + c)
                }
            }), c.res = !0) : e.length && (k || (c.selectionMarker = k = a({destroy: La}, d.plotBox)), c.pinchTranslate(e, g, l, k, o, i), c.hasPinched = j, c.scaleGroups(l, o), !j && f && 1 === h ? this.runPointActions(c.normalize(b)) : c.res && (c.res = !1, this.reset(!1, 0)))
        }, onContainerTouchStart: function (a) {
            var b = this.chart;
            Hb = b.index, 1 === a.touches.length ? (a = this.normalize(a), b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) ? (this.runPointActions(a), this.pinch(a)) : this.reset()) : 2 === a.touches.length && this.pinch(a)
        }, onContainerTouchMove: function (a) {
            (1 === a.touches.length || 2 === a.touches.length) && this.pinch(a)
        }, onDocumentTouchEnd: function (a) {
            Ma[Hb] && Ma[Hb].pointer.drop(a)
        }
    }), ma.PointerEvent || ma.MSPointerEvent) {
        var Jb = {}, Kb = !!ma.PointerEvent, Lb = function () {
            var a, b = [];
            b.item = function (a) {
                return this[a]
            };
            for (a in Jb) Jb.hasOwnProperty(a) && b.push({
                pageX: Jb[a].pageX,
                pageY: Jb[a].pageY,
                target: Jb[a].target
            });
            return b
        }, Mb = function (a, b, c, d) {
            var e;
            a = a.originalEvent || a, "touch" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_TOUCH || !Ma[Hb] || (d(a), e = Ma[Hb].pointer, e[b]({
                type: c,
                target: a.currentTarget,
                preventDefault: La,
                touches: Lb()
            }))
        };
        a(Ib.prototype, {
            onContainerPointerDown: function (a) {
                Mb(a, "onContainerTouchStart", "touchstart", function (a) {
                    Jb[a.pointerId] = {pageX: a.pageX, pageY: a.pageY, target: a.currentTarget}
                })
            }, onContainerPointerMove: function (a) {
                Mb(a, "onContainerTouchMove", "touchmove", function (a) {
                    Jb[a.pointerId] = {
                        pageX: a.pageX,
                        pageY: a.pageY
                    }, Jb[a.pointerId].target || (Jb[a.pointerId].target = a.currentTarget)
                })
            }, onDocumentPointerUp: function (a) {
                Mb(a, "onContainerTouchEnd", "touchend", function (a) {
                    delete Jb[a.pointerId]
                })
            }, batchMSEvents: function (a) {
                a(this.chart.container, Kb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), a(this.chart.container, Kb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), a(la, Kb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }
        }), t(Ib.prototype, "init", function (a, b, c) {
            a.call(this, b, c), (this.hasZoom || this.followTouchMove) && o(b.container, {
                "-ms-touch-action": Xa,
                "touch-action": Xa
            })
        }), t(Ib.prototype, "setDOMEvents", function (a) {
            a.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(nb)
        }), t(Ib.prototype, "destroy", function (a) {
            this.batchMSEvents(ob), a.call(this)
        })
    }
    var Nb = ka.Legend = function (a, b) {
        this.init(a, b)
    };
    Nb.prototype = {
        init: function (a, c) {
            var d = this, e = c.itemStyle, f = n(c.padding, 8), g = c.itemMarginTop || 0;
            this.options = c, c.enabled && (d.itemStyle = e, d.itemHiddenStyle = b(e, c.itemHiddenStyle), d.itemMarginTop = g, d.padding = f, d.initialItemX = f, d.initialItemY = f - 5, d.maxItemWidth = 0, d.chart = a, d.itemHeight = 0, d.lastLineHeight = 0, d.symbolWidth = n(c.symbolWidth, 16), d.pages = [], d.render(), nb(d.chart, "endResize", function () {
                d.positionCheckboxes()
            }))
        }, colorizeItem: function (a, b) {
            var c, d, e = this, f = e.options, g = a.legendItem, h = a.legendLine, i = a.legendSymbol,
                j = e.itemHiddenStyle.color, k = b ? f.itemStyle.color : j,
                l = b ? a.legendColor || a.color || "#CCC" : j, m = a.options && a.options.marker, n = {fill: l};
            if (g && g.css({fill: k, color: k}), h && h.attr({stroke: l}), i) {
                if (m && i.isMarker) {
                    n.stroke = l, m = a.convertAttribs(m);
                    for (c in m) d = m[c], d !== N && (n[c] = d)
                }
                i.attr(n)
            }
        }, positionItem: function (a) {
            var b = this, c = b.options, d = c.symbolPadding, e = !c.rtl, f = a._legendItemPos, g = f[0], h = f[1],
                i = a.checkbox;
            a.legendGroup && a.legendGroup.translate(e ? g : b.legendWidth - g - 2 * d - 4, h), i && (i.x = g, i.y = h)
        }, destroyItem: function (a) {
            var b = a.checkbox;
            jb(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
                a[b] && (a[b] = a[b].destroy())
            }), b && C(a.checkbox)
        }, destroy: function () {
            var a = this, b = a.group, c = a.box;
            c && (a.box = c.destroy()), b && (a.group = b.destroy())
        }, positionCheckboxes: function (a) {
            var b, c = this.group.alignAttr, d = this.clipHeight || this.legendHeight;
            c && (b = c.translateY, jb(this.allItems, function (e) {
                var f, g = e.checkbox;
                g && (f = b + g.y + (a || 0) + 3, o(g, {
                    left: c.translateX + e.checkboxOffset + g.x - 20 + Wa,
                    top: f + Wa,
                    display: f > b - 6 && b + d - 6 > f ? "" : Xa
                }))
            }))
        }, renderTitle: function () {
            var a, b = this.options, c = this.padding, d = b.title, e = 0;
            d.text && (this.title || (this.title = this.chart.renderer.label(d.text, c - 3, c - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(d.style).add(this.group)), a = this.title.getBBox(), e = a.height, this.offsetWidth = a.width, this.contentGroup.attr({translateY: e})), this.titleHeight = e
        }, renderItem: function (a) {
            var c, d, e, f = this, g = f.chart, h = g.renderer, i = f.options, j = "horizontal" === i.layout,
                k = f.symbolWidth, l = i.symbolPadding, m = f.itemStyle, o = f.itemHiddenStyle, p = f.padding,
                q = j ? n(i.itemDistance, 20) : 0, r = !i.rtl, s = i.width, t = i.itemMarginBottom || 0,
                u = f.itemMarginTop, w = f.initialItemX, x = a.legendItem,
                y = a.series && a.series.drawLegendSymbol ? a.series : a, z = y.options,
                A = f.createCheckboxForItem && z && z.showCheckbox, B = i.useHTML;
            x || (a.legendGroup = h.g("legend-item").attr({zIndex: 1}).add(f.scrollGroup), a.legendItem = x = h.text(i.labelFormat ? v(i.labelFormat, a) : i.labelFormatter.call(a), r ? k + l : -l, f.baseline || 0, B).css(b(a.visible ? m : o)).attr({
                align: r ? "left" : "right",
                zIndex: 2
            }).add(a.legendGroup), f.baseline || (f.baseline = h.fontMetrics(m.fontSize, x).f + 3 + u, x.attr("y", f.baseline)), y.drawLegendSymbol(f, a), f.setItemEvents && f.setItemEvents(a, x, B, m, o), f.colorizeItem(a, a.visible), A && f.createCheckboxForItem(a)), d = x.getBBox(), e = a.checkboxOffset = i.itemWidth || a.legendItemWidth || k + l + d.width + q + (A ? 20 : 0), f.itemHeight = c = oa(a.legendItemHeight || d.height), j && f.itemX - w + e > (s || g.chartWidth - 2 * p - w - i.x) && (f.itemX = w, f.itemY += u + f.lastLineHeight + t, f.lastLineHeight = 0), f.maxItemWidth = ra(f.maxItemWidth, e), f.lastItemY = u + f.itemY + t, f.lastLineHeight = ra(c, f.lastLineHeight), a._legendItemPos = [f.itemX, f.itemY], j ? f.itemX += e : (f.itemY += u + c + t, f.lastLineHeight = c), f.offsetWidth = s || ra((j ? f.itemX - w - q : e) + p, f.offsetWidth)
        }, getAllItems: function () {
            var a = [];
            return jb(this.chart.series, function (b) {
                var c = b.options;
                n(c.showInLegend, k(c.linkedTo) ? !1 : N, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)))
            }), a
        }, render: function () {
            var b, c, d, e, f = this, g = f.chart, h = g.renderer, i = f.group, j = f.box, k = f.options, l = f.padding,
                m = k.borderWidth, n = k.backgroundColor;
            f.itemX = f.initialItemX, f.itemY = f.initialItemY, f.offsetWidth = 0, f.lastItemY = 0, i || (f.group = i = h.g("legend").attr({zIndex: 7}).add(), f.contentGroup = h.g().attr({zIndex: 1}).add(i), f.scrollGroup = h.g().add(f.contentGroup)), f.renderTitle(), b = f.getAllItems(), y(b, function (a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            }), k.reversed && b.reverse(), f.allItems = b, f.display = c = !!b.length, jb(b, function (a) {
                f.renderItem(a)
            }), d = k.width || f.offsetWidth, e = f.lastItemY + f.lastLineHeight + f.titleHeight, e = f.handleOverflow(e), (m || n) && (d += l, e += l, j ? d > 0 && e > 0 && (j[j.isNew ? "attr" : "animate"](j.crisp({
                width: d,
                height: e
            })), j.isNew = !1) : (f.box = j = h.rect(0, 0, d, e, k.borderRadius, m || 0).attr({
                stroke: k.borderColor,
                "stroke-width": m || 0,
                fill: n || Xa
            }).add(i).shadow(k.shadow), j.isNew = !0), j[c ? "show" : "hide"]()), f.legendWidth = d, f.legendHeight = e, jb(b, function (a) {
                f.positionItem(a)
            }), c && i.align(a({width: d, height: e}, k), !0, "spacingBox"), g.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (a) {
            var b, c, d = this, e = this.chart, f = e.renderer, g = this.options, h = g.y,
                i = "top" === g.verticalAlign, j = e.spacingBox.height + (i ? -h : h) - this.padding, k = g.maxHeight,
                l = this.clipRect, m = g.navigation, o = n(m.animation, !0), p = m.arrowSize || 12, q = this.nav,
                r = this.pages, s = this.allItems;
            return "horizontal" === g.layout && (j /= 2), k && (j = sa(j, k)), r.length = 0, a > j && !g.useHTML ? (this.clipHeight = b = ra(j - 20 - this.titleHeight - this.padding, 0), this.currentPage = n(this.currentPage, 1), this.fullHeight = a, jb(s, function (a, d) {
                var e = a._legendItemPos[1], f = oa(a.legendItem.getBBox().height), g = r.length;
                (!g || e - r[g - 1] > b && (c || e) !== r[g - 1]) && (r.push(c || e), g++), d === s.length - 1 && e + f - r[g - 1] > b && r.push(e), e !== c && (c = e)
            }), l || (l = d.clipRect = f.clipRect(0, this.padding, 9999, 0), d.contentGroup.clip(l)), l.attr({height: b}), q || (this.nav = q = f.g().attr({zIndex: 1}).add(this.group), this.up = f.symbol("triangle", 0, 0, p, p).on("click", function () {
                d.scroll(-1, o)
            }).add(q), this.pager = f.text("", 15, 10).css(m.style).add(q), this.down = f.symbol("triangle-down", 0, 0, p, p).on("click", function () {
                d.scroll(1, o)
            }).add(q)), d.scroll(0), a = j) : q && (l.attr({height: e.chartHeight}), q.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0), a
        }, scroll: function (a, b) {
            var c, d = this.pages, e = d.length, f = this.currentPage + a, g = this.clipHeight,
                h = this.options.navigation, i = h.activeColor, j = h.inactiveColor, k = this.pager, l = this.padding;
            f > e && (f = e), f > 0 && (b !== N && E(b, this.chart), this.nav.attr({
                translateX: l,
                translateY: g + this.padding + 7 + this.titleHeight,
                visibility: Va
            }), this.up.attr({fill: 1 === f ? j : i}).css({cursor: 1 === f ? "default" : "pointer"}), k.attr({text: f + "/" + e}), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: f === e ? j : i
            }).css({cursor: f === e ? "default" : "pointer"}), c = -d[f - 1] + this.initialItemY, this.scrollGroup.animate({translateY: c}), this.currentPage = f, this.positionCheckboxes(c))
        }
    };
    var Ob = ka.LegendSymbolMixin = {
        drawRectangle: function (a, b) {
            var c = a.options.symbolHeight || 12;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0).attr({zIndex: 3}).add(b.legendGroup)
        }, drawLineMarker: function (a) {
            var b, c, d, e = this.options, f = e.marker, g = a.options, h = a.symbolWidth, i = this.chart.renderer,
                j = this.legendGroup, k = a.baseline - oa(.3 * i.fontMetrics(g.itemStyle.fontSize, this.legendItem).b);
            e.lineWidth && (d = {"stroke-width": e.lineWidth}, e.dashStyle && (d.dashstyle = e.dashStyle), this.legendLine = i.path([Ya, 0, k, Za, h, k]).attr(d).add(j)), f && f.enabled !== !1 && (b = f.radius, this.legendSymbol = c = i.symbol(this.symbol, h / 2 - b, k - b, 2 * b, 2 * b).add(j), c.isMarker = !0)
        }
    };
    (/Trident\/7\.0/.test(ya) || Da) && t(Nb.prototype, "positionItem", function (a, b) {
        var c = this, d = function () {
            b._legendItemPos && a.call(c, b)
        };
        d(), setTimeout(d)
    }), L.prototype = {
        init: function (a, c) {
            var d, e = a.series;
            a.series = null, d = b(R, a), d.series = a.series = e, this.userOptions = a;
            var f = d.chart;
            this.margin = this.splashArray("margin", f), this.spacing = this.splashArray("spacing", f);
            var g = f.events;
            this.bounds = {
                h: {},
                v: {}
            }, this.callback = c, this.isResizing = 0, this.options = d, this.axes = [], this.series = [], this.hasCartesianSeries = f.showAxes;
            var h, i = this;
            if (i.index = Ma.length, Ma.push(i), Na++, f.reflow !== !1 && nb(i, "load", function () {
                i.initReflow()
            }), g) for (h in g) nb(i, h, g[h]);
            i.xAxis = [], i.yAxis = [], i.animation = Ia ? !1 : n(f.animation, !0), i.pointCount = i.colorCounter = i.symbolCounter = 0, i.firstRender()
        }, initSeries: function (a) {
            var b, c = this, d = c.options.chart, e = a.type || d.type || d.defaultSeriesType, f = db[e];
            return f || W(17, !0), b = new f, b.init(this, a), b
        }, isInsidePlot: function (a, b, c) {
            var d = c ? b : a, e = c ? a : b;
            return d >= 0 && d <= this.plotWidth && e >= 0 && e <= this.plotHeight
        }, adjustTickAmounts: function () {
            this.options.chart.alignTicks !== !1 && jb(this.axes, function (a) {
                a.adjustTickAmount()
            }), this.maxTicks = null
        }, redraw: function (b) {
            var c, d, e, f = this, g = f.axes, h = f.series, i = f.pointer, j = f.legend, k = f.isDirtyLegend,
                l = f.hasCartesianSeries, m = f.isDirtyBox, n = h.length, o = n, p = f.renderer, q = p.isHidden(),
                r = [];
            for (E(b, f), q && f.cloneRenderTo(), f.layOutTitles(); o--;) if (e = h[o], e.options.stacking && (c = !0, e.isDirty)) {
                d = !0;
                break
            }
            if (d) for (o = n; o--;) e = h[o], e.options.stacking && (e.isDirty = !0);
            jb(h, function (a) {
                a.isDirty && "point" === a.options.legendType && (k = !0)
            }), k && j.options.enabled && (j.render(), f.isDirtyLegend = !1), c && f.getStacks(), l && (f.isResizing || (f.maxTicks = null, jb(g, function (a) {
                a.setScale()
            })), f.adjustTickAmounts()), f.getMargins(), l && (jb(g, function (a) {
                a.isDirty && (m = !0)
            }), jb(g, function (b) {
                b.isDirtyExtremes && (b.isDirtyExtremes = !1, r.push(function () {
                    pb(b, "afterSetExtremes", a(b.eventArgs, b.getExtremes())), delete b.eventArgs
                })), (m || c) && b.redraw()
            })), m && f.drawChartBox(), jb(h, function (a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            }), i && i.reset(!0), p.draw(), pb(f, "redraw"), q && f.cloneRenderTo(!0), jb(r, function (a) {
                a.call()
            })
        }, get: function (a) {
            var b, c, d, e = this, f = e.axes, g = e.series;
            for (b = 0; b < f.length; b++) if (f[b].options.id === a) return f[b];
            for (b = 0; b < g.length; b++) if (g[b].options.id === a) return g[b];
            for (b = 0; b < g.length; b++) for (d = g[b].points || [], c = 0; c < d.length; c++) if (d[c].id === a) return d[c];
            return null
        }, getAxes: function () {
            var a, b, c = this, d = this.options, e = d.xAxis = m(d.xAxis || {}), f = d.yAxis = m(d.yAxis || {});
            jb(e, function (a, b) {
                a.index = b, a.isX = !0
            }), jb(f, function (a, b) {
                a.index = b
            }), a = e.concat(f), jb(a, function (a) {
                b = new K(c, a)
            }), c.adjustTickAmounts()
        }, getSelectedPoints: function () {
            var a = [];
            return jb(this.series, function (b) {
                a = a.concat(kb(b.points || [], function (a) {
                    return a.selected
                }))
            }), a
        }, getSelectedSeries: function () {
            return kb(this.series, function (a) {
                return a.selected
            })
        }, getStacks: function () {
            var a = this;
            jb(a.yAxis, function (a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
            }), jb(a.series, function (b) {
                !b.options.stacking || b.visible !== !0 && a.options.chart.ignoreHiddenSeries !== !1 || (b.stackKey = b.type + n(b.options.stack, ""))
            })
        }, setTitle: function (a, c, d) {
            var e, f, g = this, h = g.options;
            e = h.title = b(h.title, a), f = h.subtitle = b(h.subtitle, c), jb([["title", a, e], ["subtitle", c, f]], function (a) {
                var b = a[0], c = g[b], d = a[1], e = a[2];
                c && d && (g[b] = c = c.destroy()), e && e.text && !c && (g[b] = g.renderer.text(e.text, 0, 0, e.useHTML).attr({
                    align: e.align,
                    "class": Ua + b,
                    zIndex: e.zIndex || 4
                }).css(e.style).add())
            }), g.layOutTitles(d)
        }, layOutTitles: function (b) {
            var c, d = 0, e = this.title, f = this.subtitle, g = this.options, h = g.title, i = g.subtitle,
                j = this.renderer, k = this.spacingBox.width - 44;
            e && (e.css({width: (h.width || k) + Wa}).align(a({y: j.fontMetrics(h.style.fontSize, e).b - 3}, h), !1, "spacingBox"), h.floating || h.verticalAlign || (d = e.getBBox().height)), f && (f.css({width: (i.width || k) + Wa}).align(a({y: d + (h.margin - 13) + j.fontMetrics(h.style.fontSize, f).b}, i), !1, "spacingBox"), i.floating || i.verticalAlign || (d = qa(d + f.getBBox().height))), c = this.titleOffset !== d, this.titleOffset = d, !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && n(b, !0) && this.isDirtyBox && this.redraw())
        }, getChartSize: function () {
            var a = this, b = a.options.chart, c = b.width, d = b.height, e = a.renderToClone || a.renderTo;
            k(c) || (a.containerWidth = gb(e, "width")), k(d) || (a.containerHeight = gb(e, "height")), a.chartWidth = ra(0, c || a.containerWidth || 600), a.chartHeight = ra(0, n(d, a.containerHeight > 19 ? a.containerHeight : 400))
        }, cloneRenderTo: function (a) {
            var b = this.renderToClone, c = this.container;
            a ? b && (this.renderTo.appendChild(c), C(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), o(b, {
                position: Ra,
                top: "-9999px",
                display: "block"
            }), b.style.setProperty && b.style.setProperty("display", "block", "important"), la.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function () {
            var b, e, f, g, h, i, j = this, k = j.options.chart, m = "data-highcharts-chart";
            j.renderTo = g = k.renderTo, i = Ua + Ka++, d(g) && (j.renderTo = g = la.getElementById(g)), g || W(13, !0), h = c(l(g, m)), !isNaN(h) && Ma[h] && Ma[h].hasRendered && Ma[h].destroy(), l(g, m, j.index), g.innerHTML = "", k.skipClone || g.offsetWidth || j.cloneRenderTo(), j.getChartSize(), e = j.chartWidth, f = j.chartHeight, j.container = b = p(Qa, {
                className: Ua + "container" + (k.className ? " " + k.className : ""),
                id: i
            }, a({
                position: Sa,
                overflow: Ta,
                width: e + Wa,
                height: f + Wa,
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0,
                "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, k.style), j.renderToClone || g), j._cursor = b.style.cursor, j.renderer = k.forExport ? new Ab(b, e, f, k.style, !0) : new O(b, e, f, k.style), Ia && j.renderer.create(j, b, e, f)
        }, getMargins: function () {
            var a, b = this, c = b.spacing, d = b.legend, e = b.margin, f = b.options.legend, g = n(f.margin, 20),
                h = f.x, i = f.y, j = f.align, l = f.verticalAlign, m = b.titleOffset;
            b.resetMargins(), a = b.axisOffset, m && !k(e[0]) && (b.plotTop = ra(b.plotTop, m + b.options.title.margin + c[0])), d.display && !f.floating && ("right" === j ? k(e[1]) || (b.marginRight = ra(b.marginRight, d.legendWidth - h + g + c[1])) : "left" === j ? k(e[3]) || (b.plotLeft = ra(b.plotLeft, d.legendWidth + h + g + c[3])) : "top" === l ? k(e[0]) || (b.plotTop = ra(b.plotTop, d.legendHeight + i + g + c[0])) : "bottom" === l && (k(e[2]) || (b.marginBottom = ra(b.marginBottom, d.legendHeight - i + g + c[2])))), b.extraBottomMargin && (b.marginBottom += b.extraBottomMargin), b.extraTopMargin && (b.plotTop += b.extraTopMargin), b.hasCartesianSeries && jb(b.axes, function (a) {
                a.getOffset()
            }), k(e[3]) || (b.plotLeft += a[3]), k(e[0]) || (b.plotTop += a[0]), k(e[2]) || (b.marginBottom += a[2]), k(e[1]) || (b.marginRight += a[1]), b.setChartSize()
        }, reflow: function (a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = c.width || gb(d, "width"),
                f = c.height || gb(d, "height"), g = a ? a.target : ma, h = function () {
                    b.container && (b.setSize(e, f, !1), b.hasUserSize = null)
                };
            b.hasUserSize || !e || !f || g !== ma && g !== la || ((e !== b.containerWidth || f !== b.containerHeight) && (clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(h, 100) : h()), b.containerWidth = e, b.containerHeight = f)
        }, initReflow: function () {
            var a = this, b = function (b) {
                a.reflow(b)
            };
            nb(ma, "resize", b), nb(a, "destroy", function () {
                ob(ma, "resize", b)
            })
        }, setSize: function (a, b, c) {
            var d, e, f, g = this;
            g.isResizing += 1, f = function () {
                g && pb(g, "endResize", null, function () {
                    g.isResizing -= 1
                })
            }, E(c, g), g.oldChartHeight = g.chartHeight, g.oldChartWidth = g.chartWidth, k(a) && (g.chartWidth = d = ra(0, oa(a)), g.hasUserSize = !!d), k(b) && (g.chartHeight = e = ra(0, oa(b))), (T ? rb : o)(g.container, {
                width: d + Wa,
                height: e + Wa
            }, T), g.setChartSize(!0), g.renderer.setSize(d, e, c), g.maxTicks = null, jb(g.axes, function (a) {
                a.isDirty = !0, a.setScale()
            }), jb(g.series, function (a) {
                a.isDirty = !0
            }), g.isDirtyLegend = !0, g.isDirtyBox = !0, g.layOutTitles(), g.getMargins(), g.redraw(c), g.oldChartHeight = null, pb(g, "resize"), T === !1 ? f() : setTimeout(f, T && T.duration || 500)
        }, setChartSize: function (a) {
            var b, c, d, e, f, g, h, i = this, j = i.inverted, k = i.renderer, l = i.chartWidth, m = i.chartHeight,
                n = i.options.chart, o = i.spacing, p = i.clipOffset;
            i.plotLeft = d = oa(i.plotLeft), i.plotTop = e = oa(i.plotTop), i.plotWidth = f = ra(0, oa(l - d - i.marginRight)), i.plotHeight = g = ra(0, oa(m - e - i.marginBottom)), i.plotSizeX = j ? g : f, i.plotSizeY = j ? f : g, i.plotBorderWidth = n.plotBorderWidth || 0, i.spacingBox = k.spacingBox = {
                x: o[3],
                y: o[0],
                width: l - o[3] - o[1],
                height: m - o[0] - o[2]
            }, i.plotBox = k.plotBox = {
                x: d,
                y: e,
                width: f,
                height: g
            }, h = 2 * pa(i.plotBorderWidth / 2), b = qa(ra(h, p[3]) / 2), c = qa(ra(h, p[0]) / 2), i.clipBox = {
                x: b,
                y: c,
                width: pa(i.plotSizeX - ra(h, p[1]) / 2 - b),
                height: ra(0, pa(i.plotSizeY - ra(h, p[2]) / 2 - c))
            }, a || jb(i.axes, function (a) {
                a.setAxisSize(), a.setAxisTranslation()
            })
        }, resetMargins: function () {
            var a = this, b = a.spacing, c = a.margin;
            a.plotTop = n(c[0], b[0]), a.marginRight = n(c[1], b[1]), a.marginBottom = n(c[2], b[2]), a.plotLeft = n(c[3], b[3]), a.axisOffset = [0, 0, 0, 0], a.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function () {
            var a, b, c = this, d = c.options.chart, e = c.renderer, f = c.chartWidth, g = c.chartHeight,
                h = c.chartBackground, i = c.plotBackground, j = c.plotBorder, k = c.plotBGImage,
                l = d.borderWidth || 0, m = d.backgroundColor, n = d.plotBackgroundColor, o = d.plotBackgroundImage,
                p = d.plotBorderWidth || 0, q = c.plotLeft, r = c.plotTop, s = c.plotWidth, t = c.plotHeight,
                u = c.plotBox, v = c.clipRect, w = c.clipBox;
            a = l + (d.shadow ? 8 : 0), (l || m) && (h ? h.animate(h.crisp({
                width: f - a,
                height: g - a
            })) : (b = {fill: m || Xa}, l && (b.stroke = d.borderColor, b["stroke-width"] = l), c.chartBackground = e.rect(a / 2, a / 2, f - a, g - a, d.borderRadius, l).attr(b).addClass(Ua + "background").add().shadow(d.shadow))), n && (i ? i.animate(u) : c.plotBackground = e.rect(q, r, s, t, 0).attr({fill: n}).add().shadow(d.plotShadow)), o && (k ? k.animate(u) : c.plotBGImage = e.image(o, q, r, s, t).add()), v ? v.animate({
                width: w.width,
                height: w.height
            }) : c.clipRect = e.clipRect(w), p && (j ? j.animate(j.crisp({
                x: q,
                y: r,
                width: s,
                height: t,
                strokeWidth: -p
            })) : c.plotBorder = e.rect(q, r, s, t, 0, -p).attr({
                stroke: d.plotBorderColor,
                "stroke-width": p,
                fill: Xa,
                zIndex: 1
            }).add()), c.isDirtyBox = !1
        }, propFromSeries: function () {
            var a, b, c, d = this, e = d.options.chart, f = d.options.series;
            jb(["inverted", "angular", "polar"], function (g) {
                for (a = db[e.type || e.defaultSeriesType], c = d[g] || e[g] || a && a.prototype[g], b = f && f.length; !c && b--;) a = db[f[b].type], a && a.prototype[g] && (c = !0);
                d[g] = c
            })
        }, linkSeries: function () {
            var a = this, b = a.series;
            jb(b, function (a) {
                a.linkedSeries.length = 0
            }), jb(b, function (b) {
                var c = b.options.linkedTo;
                d(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c), c && (c.linkedSeries.push(b), b.linkedParent = c))
            })
        }, renderSeries: function () {
            jb(this.series, function (a) {
                a.translate(), a.setTooltipPoints && a.setTooltipPoints(), a.render()
            })
        }, renderLabels: function () {
            var b = this, d = b.options.labels;
            d.items && jb(d.items, function (e) {
                var f = a(d.style, e.style), g = c(f.left) + b.plotLeft, h = c(f.top) + b.plotTop + 12;
                delete f.left, delete f.top, b.renderer.text(e.html, g, h).attr({zIndex: 2}).css(f).add()
            })
        }, render: function () {
            var a = this, b = a.axes, c = a.renderer, d = a.options;
            a.setTitle(), a.legend = new Nb(a, d.legend), a.getStacks(), jb(b, function (a) {
                a.setScale()
            }), a.getMargins(), a.maxTicks = null, jb(b, function (a) {
                a.setTickPositions(!0), a.setMaxTicks()
            }), a.adjustTickAmounts(), a.getMargins(), a.drawChartBox(), a.hasCartesianSeries && jb(b, function (a) {
                a.render()
            }), a.seriesGroup || (a.seriesGroup = c.g("series-group").attr({zIndex: 3}).add()), a.renderSeries(), a.renderLabels(), a.showCredits(d.credits), a.hasRendered = !0
        }, showCredits: function (a) {
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text, 0, 0).on("click", function () {
                a.href && (location.href = a.href)
            }).attr({align: a.position.align, zIndex: 8}).css(a.style).add().align(a.position))
        }, destroy: function () {
            var a, b = this, c = b.axes, d = b.series, e = b.container, f = e && e.parentNode;
            for (pb(b, "destroy"), Ma[b.index] = N, Na--, b.renderTo.removeAttribute("data-highcharts-chart"), ob(b), a = c.length; a--;) c[a] = c[a].destroy();
            for (a = d.length; a--;) d[a] = d[a].destroy();
            jb(["title", "subtitle", "chartBackground", "plotBackground", "plotBGImage", "plotBorder", "seriesGroup", "clipRect", "credits", "pointer", "scroller", "rangeSelector", "legend", "resetZoomButton", "tooltip", "renderer"], function (a) {
                var c = b[a];
                c && c.destroy && (b[a] = c.destroy())
            }), e && (e.innerHTML = "", ob(e), f && C(e));
            for (a in b) delete b[a]
        }, isReadyToRender: function () {
            var a = this;
            return !Ga && ma == ma.top && "complete" !== la.readyState || Ia && !ma.canvg ? (Ia ? Fb.push(function () {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : la.attachEvent("onreadystatechange", function () {
                la.detachEvent("onreadystatechange", a.firstRender), "complete" === la.readyState && a.firstRender()
            }), !1) : !0
        }, firstRender: function () {
            var a = this, b = a.options, c = a.callback;
            a.isReadyToRender() && (a.getContainer(), pb(a, "init"), a.resetMargins(), a.setChartSize(), a.propFromSeries(), a.getAxes(), jb(b.series || [], function (b) {
                a.initSeries(b)
            }), a.linkSeries(), pb(a, "beforeRender"), ka.Pointer && (a.pointer = new Ib(a, b)), a.render(), a.renderer.draw(), c && c.apply(a, [a]), jb(a.callbacks, function (b) {
                b.apply(a, [a])
            }), a.cloneRenderTo(!0), pb(a, "load"))
        }, splashArray: function (a, b) {
            var c = b[a], d = e(c) ? c : [c, c, c, c];
            return [n(b[a + "Top"], d[0]), n(b[a + "Right"], d[1]), n(b[a + "Bottom"], d[2]), n(b[a + "Left"], d[3])]
        }
    }, L.prototype.callbacks = [];
    var Pb = ka.CenteredSeriesMixin = {
        getCenter: function () {
            var a, b, d = this.options, e = this.chart, f = 2 * (d.slicedOffset || 0), g = e.plotWidth - 2 * f,
                h = e.plotHeight - 2 * f, i = d.center,
                j = [n(i[0], "50%"), n(i[1], "50%"), d.size || "100%", d.innerSize || 0], k = sa(g, h);
            return mb(j, function (d, e) {
                return b = /%$/.test(d), a = 2 > e || 2 === e && b, (b ? [g, h, k, k][e] * c(d) / 100 : d) + (a ? f : 0)
            })
        }
    }, Qb = function () {
    };
    Qb.prototype = {
        init: function (a, b, c) {
            var d, e = this;
            return e.series = a, e.applyOptions(b, c), e.pointAttr = {}, a.options.colorByPoint && (d = a.options.colors || a.chart.options.colors, e.color = e.color || d[a.colorCounter++], a.colorCounter === d.length && (a.colorCounter = 0)), a.chart.pointCount++, e
        }, applyOptions: function (b, c) {
            var d = this, e = d.series, f = e.options.pointValKey || e.pointValKey;
            return b = Qb.prototype.optionsToObject.call(this, b), a(d, b), d.options = d.options ? a(d.options, b) : b, f && (d.y = d[f]), d.x === N && e && (d.x = c === N ? e.autoIncrement() : c), d
        }, optionsToObject: function (a) {
            var b, c = {}, d = this.series, e = d.pointArrayMap || ["y"], g = e.length, h = 0, i = 0;
            if ("number" == typeof a || null === a) c[e[0]] = a; else if (f(a)) for (a.length > g && (b = typeof a[0], "string" === b ? c.name = a[0] : "number" === b && (c.x = a[0]), h++); g > i;) c[e[i++]] = a[h++]; else "object" == typeof a && (c = a, a.dataLabels && (d._hasPointLabels = !0), a.marker && (d._hasPointMarkers = !0));
            return c
        }, destroy: function () {
            var a, b = this, c = b.series, d = c.chart, e = d.hoverPoints;
            d.pointCount--, e && (b.setState(), j(e, b), e.length || (d.hoverPoints = null)), b === d.hoverPoint && b.onMouseOut(), (b.graphic || b.dataLabel) && (ob(b), b.destroyElements()), b.legendItem && d.legend.destroyItem(b);
            for (a in b) b[a] = null
        }, destroyElements: function () {
            for (var a, b = this, c = ["graphic", "dataLabel", "dataLabelUpper", "group", "connector", "shadowGroup"], d = 6; d--;) a = c[d], b[a] && (b[a] = b[a].destroy())
        }, getLabelConfig: function () {
            var a = this;
            return {
                x: a.category,
                y: a.y,
                key: a.name || a.category,
                series: a.series,
                point: a,
                percentage: a.percentage,
                total: a.total || a.stackTotal
            }
        }, tooltipFormatter: function (a) {
            var b = this.series, c = b.tooltipOptions, d = n(c.valueDecimals, ""), e = c.valuePrefix || "",
                f = c.valueSuffix || "";
            return jb(b.pointArrayMap || ["y"], function (b) {
                b = "{point." + b, (e || f) && (a = a.replace(b + "}", e + b + "}" + f)), a = a.replace(b + "}", b + ":,." + d + "f}")
            }), v(a, {point: this, series: this.series})
        }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series, f = e.options;
            (f.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents(), "click" === a && f.allowPointSelect && (c = function (a) {
                d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            }), pb(this, a, b, c)
        }
    };
    var Rb = function () {
    };
    Rb.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: Qb,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"},
        axisTypes: ["xAxis", "yAxis"],
        colorCounter: 0,
        parallelArrays: ["x", "y"],
        init: function (b, c) {
            var d, e, f = this, g = b.series, h = function (a, b) {
                return n(a.options.index, a._i) - n(b.options.index, b._i)
            };
            f.chart = b, f.options = c = f.setOptions(c), f.linkedSeries = [], f.bindAxes(), a(f, {
                name: c.name,
                state: _a,
                pointAttr: {},
                visible: c.visible !== !1,
                selected: c.selected === !0
            }), Ia && (c.animation = !1), e = c.events;
            for (d in e) nb(f, d, e[d]);
            (e && e.click || c.point && c.point.events && c.point.events.click || c.allowPointSelect) && (b.runTrackerClick = !0), f.getColor(), f.getSymbol(), jb(f.parallelArrays, function (a) {
                f[a + "Data"] = []
            }), f.setData(c.data, !1), f.isCartesian && (b.hasCartesianSeries = !0), g.push(f), f._i = g.length - 1, y(g, h), this.yAxis && y(this.yAxis.series, h), jb(g, function (a, b) {
                a.index = b, a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function () {
            var a, b = this, c = b.options, d = b.chart;
            jb(b.axisTypes || [], function (e) {
                jb(d[e], function (d) {
                    a = d.options, (c[e] === a.index || c[e] !== N && c[e] === a.id || c[e] === N && 0 === a.index) && (d.series.push(b), b[e] = d, d.isDirty = !0)
                }), b[e] || b.optionalAxis === e || W(18, !0)
            })
        },
        updateParallelArrays: function (a, b) {
            var c = a.series, d = arguments, e = "number" == typeof b ? function (d) {
                var e = "y" === d && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = e
            } : function (a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            };
            jb(c.parallelArrays, e)
        },
        autoIncrement: function () {
            var a = this, b = a.options, c = a.xIncrement;
            return c = n(c, b.pointStart, 0), a.pointInterval = n(a.pointInterval, b.pointInterval, 1), a.xIncrement = c + a.pointInterval, c
        },
        getSegments: function () {
            var a, b = this, c = -1, d = [], e = b.points, f = e.length;
            if (f) if (b.options.connectNulls) {
                for (a = f; a--;) null === e[a].y && e.splice(a, 1);
                e.length && (d = [e])
            } else jb(e, function (a, b) {
                null === a.y ? (b > c + 1 && d.push(e.slice(c + 1, b)), c = b) : b === f - 1 && d.push(e.slice(c + 1, b + 1))
            });
            b.segments = d
        },
        setOptions: function (a) {
            var c, d = this.chart, e = d.options, f = e.plotOptions, g = d.userOptions || {}, h = g.plotOptions || {},
                i = f[this.type];
            return this.userOptions = a, c = b(i, f.series, a), this.tooltipOptions = b(R.tooltip, R.plotOptions[this.type].tooltip, g.tooltip, h.series && h.series.tooltip, h[this.type] && h[this.type].tooltip, a.tooltip), null === i.marker && delete c.marker, c
        },
        getCyclic: function (a, b, c) {
            var d, e = this.userOptions, f = "_" + a + "Index", g = a + "Counter";
            b || (k(e[f]) ? d = e[f] : (e[f] = d = this.chart[g] % c.length, this.chart[g] += 1), b = c[d]), this[a] = b
        },
        getColor: function () {
            this.options.colorByPoint || this.getCyclic("color", this.options.color || ub[this.type].color, this.chart.options.colors)
        },
        getSymbol: function () {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols), /^url/.test(this.symbol) && (a.radius = 0)
        },
        drawLegendSymbol: Ob.drawLineMarker,
        setData: function (a, b, c, e) {
            var h, i, j, k = this, l = k.points, m = l && l.length || 0, o = k.options, p = k.chart, q = null,
                r = k.xAxis, s = r && !!r.categories, t = k.tooltipPoints, u = o.turboThreshold, v = this.xData,
                w = this.yData, x = k.pointArrayMap, y = x && x.length;
            if (a = a || [], h = a.length, b = n(b, !0), e === !1 || !h || m !== h || k.cropped || k.hasGroupedData) {
                if (k.xIncrement = null, k.pointRange = s ? 1 : o.pointRange, k.colorCounter = 0, jb(this.parallelArrays, function (a) {
                    k[a + "Data"].length = 0
                }), u && h > u) {
                    for (i = 0; null === q && h > i;) q = a[i], i++;
                    if (g(q)) {
                        var z = n(o.pointStart, 0), A = n(o.pointInterval, 1);
                        for (i = 0; h > i; i++) v[i] = z, w[i] = a[i], z += A;
                        k.xIncrement = z
                    } else if (f(q)) if (y) for (i = 0; h > i; i++) j = a[i], v[i] = j[0], w[i] = j.slice(1, y + 1); else for (i = 0; h > i; i++) j = a[i], v[i] = j[0], w[i] = j[1]; else W(12)
                } else for (i = 0; h > i; i++) a[i] !== N && (j = {series: k}, k.pointClass.prototype.applyOptions.apply(j, [a[i]]), k.updateParallelArrays(j, i), s && j.name && (r.names[j.x] = j.name));
                for (d(w[0]) && W(14, !0), k.data = [], k.options.data = a, i = m; i--;) l[i] && l[i].destroy && l[i].destroy();
                t && (t.length = 0), r && (r.minRange = r.userMinRange), k.isDirty = k.isDirtyData = p.isDirtyBox = !0, c = !1
            } else jb(a, function (a, b) {
                l[b].update(a, !1, null, !1)
            });
            b && p.redraw(c)
        },
        processData: function (a) {
            var b, c, d, e, f, g, h, i, j = this, k = j.xData, l = j.yData, m = k.length, n = 0, o = j.xAxis,
                p = j.options, q = p.cropThreshold, r = 0, s = j.isCartesian;
            if (s && !j.isDirty && !o.isDirty && !j.yAxis.isDirty && !a) return !1;
            for (o && (g = o.getExtremes(), h = g.min, i = g.max), s && j.sorted && (!q || m > q || j.forceCrop) && (k[m - 1] < h || k[0] > i ? (k = [], l = []) : (k[0] < h || k[m - 1] > i) && (b = this.cropData(j.xData, j.yData, h, i), k = b.xData, l = b.yData, n = b.start, c = !0, r = k.length)), f = k.length - 1; f >= 0; f--) d = k[f] - k[f - 1], !c && k[f] > h && k[f] < i && r++, d > 0 && (e === N || e > d) ? e = d : 0 > d && j.requireSorting && W(15);
            j.cropped = c, j.cropStart = n, j.processedXData = k, j.processedYData = l, j.activePointCount = r, null === p.pointRange && (j.pointRange = e || 1), j.closestPointRange = e
        },
        cropData: function (a, b, c, d) {
            var e, f = a.length, g = 0, h = f, i = n(this.cropShoulder, 1);
            for (e = 0; f > e; e++) if (a[e] >= c) {
                g = ra(0, e - i);
                break
            }
            for (; f > e; e++) if (a[e] > d) {
                h = e + i;
                break
            }
            return {xData: a.slice(g, h), yData: b.slice(g, h), start: g, end: h}
        },
        generatePoints: function () {
            var a, b, c, d, e = this, f = e.options, g = f.data, h = e.data, i = e.processedXData, j = e.processedYData,
                k = e.pointClass, l = i.length, n = e.cropStart || 0, o = e.hasGroupedData, p = [];
            if (!h && !o) {
                var q = [];
                q.length = g.length, h = e.data = q
            }
            for (d = 0; l > d; d++) b = n + d, o ? p[d] = (new k).init(e, [i[d]].concat(m(j[d]))) : (h[b] ? c = h[b] : g[b] !== N && (h[b] = c = (new k).init(e, g[b], i[d])), p[d] = c), p[d].index = b;
            if (h && (l !== (a = h.length) || o)) for (d = 0; a > d; d++) d !== n || o || (d += l), h[d] && (h[d].destroyElements(), h[d].plotX = N);
            e.data = h, e.points = p
        },
        getExtremes: function (a) {
            var b, c, d, e, f, g, h, i, j, k = this.xAxis, l = this.yAxis, m = this.processedXData, o = [], p = 0,
                q = k.getExtremes(), r = q.min, s = q.max;
            for (a = a || this.stackedYData || this.processedYData, b = a.length, i = 0; b > i; i++) if (g = m[i], h = a[i], c = null !== h && h !== N && (!l.isLog || h.length || h > 0), d = this.getExtremesFromAll || this.cropped || (m[i + 1] || g) >= r && (m[i - 1] || g) <= s, c && d) if (j = h.length) for (; j--;) null !== h[j] && (o[p++] = h[j]); else o[p++] = h;
            this.dataMin = n(e, z(o)), this.dataMax = n(f, A(o))
        },
        translate: function () {
            this.processedXData || this.processData(), this.generatePoints();
            var a, b = this, c = b.options, d = c.stacking, e = b.xAxis, f = e.categories, h = b.yAxis, i = b.points,
                j = i.length, l = !!b.modifyValue, m = c.pointPlacement, o = "between" === m || g(m), p = c.threshold;
            for (a = 0; j > a; a++) {
                var q, r, s = i[a], t = s.x, u = s.y, v = s.low,
                    w = d && h.stacks[(b.negStacks && p > u ? "-" : "") + b.stackKey];
                h.isLog && 0 >= u && (s.y = u = null, W(10)), s.plotX = e.translate(t, 0, 0, 0, 1, m, "flags" === this.type), d && b.visible && w && w[t] && (q = w[t], r = q.points[b.index + "," + a], v = r[0], u = r[1], 0 === v && (v = n(p, h.min)), h.isLog && 0 >= v && (v = null), s.total = s.stackTotal = q.total, s.percentage = q.total && s.y / q.total * 100, s.stackY = u, q.setOffset(b.pointXOffset || 0, b.barW || 0)), s.yBottom = k(v) ? h.translate(v, 0, 1, 0, 1) : null, l && (u = b.modifyValue(u, s)), s.plotY = "number" == typeof u && u !== 1 / 0 ? h.translate(u, 0, 1, 0, 1) : N, s.clientX = o ? e.translate(t, 0, 0, 0, 1) : s.plotX, s.negative = s.y < (p || 0), s.category = f && f[s.x] !== N ? f[s.x] : s.x
            }
            b.getSegments()
        },
        animate: function (b) {
            var c, d, f, g = this, h = g.chart, i = h.renderer, j = g.options.animation, k = g.clipBox || h.clipBox,
                l = h.inverted;
            j && !e(j) && (j = ub[g.type].animation), f = ["_sharedClip", j.duration, j.easing, k.height].join(","), b ? (c = h[f], d = h[f + "m"], c || (h[f] = c = i.clipRect(a(k, {width: 0})), h[f + "m"] = d = i.clipRect(-99, l ? -h.plotLeft : -h.plotTop, 99, l ? h.chartWidth : h.chartHeight)), g.group.clip(c), g.markerGroup.clip(d), g.sharedClipKey = f) : (c = h[f], c && c.animate({width: h.plotSizeX}, j), h[f + "m"] && h[f + "m"].animate({width: h.plotSizeX + 99}, j), g.animate = null)
        },
        afterAnimate: function () {
            var a = this.chart, b = this.sharedClipKey, c = this.group, d = this.clipBox;
            c && this.options.clip !== !1 && (b && d || c.clip(d ? a.renderer.clipRect(d) : a.clipRect), this.markerGroup.clip()), pb(this, "afterAnimate"), setTimeout(function () {
                b && a[b] && (d || (a[b] = a[b].destroy()), a[b + "m"] && (a[b + "m"] = a[b + "m"].destroy()))
            }, 100)
        },
        drawPoints: function () {
            var b, c, d, e, f, g, h, i, j, k, l, m, o, p = this, q = p.points, r = p.chart, s = p.options, t = s.marker,
                u = p.pointAttr[""], v = p.markerGroup,
                w = n(t.enabled, !p.requireSorting || p.activePointCount < .5 * p.xAxis.len / t.radius);
            if (t.enabled !== !1 || p._hasPointMarkers) for (e = q.length; e--;) f = q[e], c = pa(f.plotX), d = f.plotY, j = f.graphic, k = f.marker || {}, l = !!f.marker, m = w && k.enabled === N || k.enabled, o = r.isInsidePlot(oa(c), d, r.inverted), m && d !== N && !isNaN(d) && null !== f.y ? (b = f.pointAttr[f.selected ? bb : _a] || u, g = b.r, h = n(k.symbol, p.symbol), i = 0 === h.indexOf("url"), j ? j[o ? "show" : "hide"](!0).animate(a({
                x: c - g,
                y: d - g
            }, j.symbolName ? {
                width: 2 * g,
                height: 2 * g
            } : {})) : o && (g > 0 || i) && (f.graphic = j = r.renderer.symbol(h, c - g, d - g, 2 * g, 2 * g, l ? k : t).attr(b).add(v))) : j && (f.graphic = j.destroy())
        },
        convertAttribs: function (a, b, c, d) {
            var e, f, g = this.pointAttrToOptions, h = {};
            a = a || {}, b = b || {}, c = c || {}, d = d || {};
            for (e in g) f = g[e], h[e] = n(a[f], b[e], c[e], d[e]);
            return h
        },
        getAttribs: function () {
            var b, c, d, e, f, g, h = this, i = h.options, j = ub[h.type].marker ? i.marker : i, l = j.states,
                m = l[ab], n = h.color, o = {stroke: n, fill: n}, p = h.points || [], q = [], r = h.pointAttrToOptions,
                s = h.hasPointSpecificOptions, t = i.negativeColor, u = j.lineColor, v = j.fillColor,
                w = i.turboThreshold;
            if (i.marker ? (m.radius = m.radius || j.radius + m.radiusPlus, m.lineWidth = m.lineWidth || j.lineWidth + m.lineWidthPlus) : m.color = m.color || zb(m.color || n).brighten(m.brightness).get(), q[_a] = h.convertAttribs(j, o), jb([ab, bb], function (a) {
                q[a] = h.convertAttribs(l[a], q[_a])
            }), h.pointAttr = q, c = p.length, !w || w > c || s) for (; c--;) {
                if (d = p[c], j = d.options && d.options.marker || d.options, j && j.enabled === !1 && (j.radius = 0), d.negative && t && (d.color = d.fillColor = t), s = i.colorByPoint || d.color, d.options) for (g in r) k(j[r[g]]) && (s = !0);
                s ? (j = j || {}, e = [], l = j.states || {}, b = l[ab] = l[ab] || {}, i.marker || (b.color = b.color || !d.options.color && m.color || zb(d.color).brighten(b.brightness || m.brightness).get()), f = {color: d.color}, v || (f.fillColor = d.color), u || (f.lineColor = d.color), e[_a] = h.convertAttribs(a(f, j), q[_a]), e[ab] = h.convertAttribs(l[ab], q[ab], e[_a]), e[bb] = h.convertAttribs(l[bb], q[bb], e[_a])) : e = q, d.pointAttr = e
            }
        },
        destroy: function () {
            var a, b, c, d, e, f = this, g = f.chart, h = /AppleWebKit\/533/.test(ya), i = f.data || [];
            for (pb(f, "destroy"), ob(f), jb(f.axisTypes || [], function (a) {
                e = f[a], e && (j(e.series, f), e.isDirty = e.forceRedraw = !0)
            }), f.legendItem && f.chart.legend.destroyItem(f), b = i.length; b--;) c = i[b], c && c.destroy && c.destroy();
            f.points = null, clearTimeout(f.animationTimeout), jb(["area", "graph", "dataLabelsGroup", "group", "markerGroup", "tracker", "graphNeg", "areaNeg", "posClip", "negClip"], function (b) {
                f[b] && (a = h && "group" === b ? "hide" : "destroy", f[b][a]())
            }), g.hoverSeries === f && (g.hoverSeries = null), j(g.series, f);
            for (d in f) delete f[d]
        },
        getSegmentPath: function (a) {
            var b = this, c = [], d = b.options.step;
            return jb(a, function (e, f) {
                var g, h = e.plotX, i = e.plotY;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? Za : Ya), d && f && (g = a[f - 1], "right" === d ? c.push(g.plotX, i) : "center" === d ? c.push((g.plotX + h) / 2, g.plotY, (g.plotX + h) / 2, i) : c.push(h, g.plotY)), c.push(e.plotX, e.plotY))
            }), c
        },
        getGraphPath: function () {
            var a, b = this, c = [], d = [];
            return jb(b.segments, function (e) {
                a = b.getSegmentPath(e), e.length > 1 ? c = c.concat(a) : d.push(e[0])
            }), b.singlePoints = d, b.graphPath = c, c
        },
        drawGraph: function () {
            var a = this, b = this.options, c = [["graph", b.lineColor || this.color]], d = b.lineWidth,
                e = b.dashStyle, f = "square" !== b.linecap, g = this.getGraphPath(), h = b.negativeColor;
            h && c.push(["graphNeg", h]), jb(c, function (c, h) {
                var i, j = c[0], k = a[j];
                k ? (sb(k), k.animate({d: g})) : d && g.length && (i = {
                    stroke: c[1],
                    "stroke-width": d,
                    fill: Xa,
                    zIndex: 1
                }, e ? i.dashstyle = e : f && (i["stroke-linecap"] = i["stroke-linejoin"] = "round"), a[j] = a.chart.renderer.path(g).attr(i).add(a.group).shadow(!h && b.shadow))
            })
        },
        clipNeg: function () {
            var a, b, c, d, e, f = this.options, g = this.chart, h = g.renderer,
                i = f.negativeColor || f.negativeFillColor, j = this.graph, k = this.area, l = this.posClip,
                m = this.negClip, n = g.chartWidth, o = g.chartHeight, p = ra(n, o), q = this.yAxis;
            i && (j || k) && (a = oa(q.toPixels(f.threshold || 0, !0)), 0 > a && (p -= a), d = {
                x: 0,
                y: 0,
                width: p,
                height: a
            }, e = {
                x: 0,
                y: a,
                width: p,
                height: p
            }, g.inverted && (d.height = e.y = g.plotWidth - a, h.isVML && (d = {
                x: g.plotWidth - a - g.plotLeft,
                y: 0,
                width: n,
                height: o
            }, e = {
                x: a + g.plotLeft - n,
                y: 0,
                width: g.plotLeft + a,
                height: n
            })), q.reversed ? (b = e, c = d) : (b = d, c = e), l ? (l.animate(b), m.animate(c)) : (this.posClip = l = h.clipRect(b), this.negClip = m = h.clipRect(c), j && this.graphNeg && (j.clip(l), this.graphNeg.clip(m)), k && (k.clip(l), this.areaNeg.clip(m))))
        },
        invertGroups: function () {
            function a() {
                var a = {width: b.yAxis.len, height: b.xAxis.len};
                jb(["group", "markerGroup"], function (c) {
                    b[c] && b[c].attr(a).invert()
                })
            }

            var b = this, c = b.chart;
            b.xAxis && (nb(c, "resize", a), nb(b, "destroy", function () {
                ob(c, "resize", a)
            }), a(), b.invertGroups = a)
        },
        plotGroup: function (a, b, c, d, e) {
            var f = this[a], g = !f;
            return g && (this[a] = f = this.chart.renderer.g(b).attr({
                visibility: c,
                zIndex: d || .1
            }).add(e)), f[g ? "attr" : "animate"](this.getPlotBox()), f
        },
        getPlotBox: function () {
            var a = this.chart, b = this.xAxis, c = this.yAxis;
            return a.inverted && (b = c, c = this.xAxis), {
                translateX: b ? b.left : a.plotLeft,
                translateY: c ? c.top : a.plotTop,
                scaleX: 1,
                scaleY: 1
            }
        },
        render: function () {
            var a, b = this, c = b.chart, d = b.options, e = d.animation,
                f = e && !!b.animate && c.renderer.isSVG && n(e.duration, 500) || 0, g = b.visible ? Va : Ta,
                h = d.zIndex, i = b.hasRendered, j = c.seriesGroup;
            a = b.plotGroup("group", "series", g, h, j), b.markerGroup = b.plotGroup("markerGroup", "markers", g, h, j), f && b.animate(!0), b.getAttribs(), a.inverted = b.isCartesian ? c.inverted : !1, b.drawGraph && (b.drawGraph(), b.clipNeg()), jb(b.points, function (a) {
                a.redraw && a.redraw()
            }), b.drawDataLabels && b.drawDataLabels(), b.visible && b.drawPoints(), b.drawTracker && b.options.enableMouseTracking !== !1 && b.drawTracker(), c.inverted && b.invertGroups(), d.clip === !1 || b.sharedClipKey || i || a.clip(c.clipRect), f && b.animate(), i || (f ? b.animationTimeout = setTimeout(function () {
                b.afterAnimate()
            }, f) : b.afterAnimate()), b.isDirty = b.isDirtyData = !1, b.hasRendered = !0
        },
        redraw: function () {
            var a = this, b = a.chart, c = a.isDirtyData, d = a.group, e = a.xAxis, f = a.yAxis;
            d && (b.inverted && d.attr({
                width: b.plotWidth,
                height: b.plotHeight
            }), d.animate({
                translateX: n(e && e.left, b.plotLeft),
                translateY: n(f && f.top, b.plotTop)
            })), a.translate(), a.setTooltipPoints && a.setTooltipPoints(!0), a.render(), c && pb(a, "updatedData")
        }
    }, M.prototype = {
        destroy: function () {
            B(this, this.axis)
        }, render: function (a) {
            var b = this.options, c = b.format, d = c ? v(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({
                text: d,
                visibility: Ta
            }) : this.label = this.axis.chart.renderer.text(d, null, null, b.useHTML).css(b.style).attr({
                align: this.textAlign,
                rotation: b.rotation,
                visibility: Ta
            }).add(a)
        }, setOffset: function (a, b) {
            var c, d = this, e = d.axis, f = e.chart, g = f.inverted, h = this.isNegative,
                i = e.translate(e.usePercentage ? 100 : this.total, 0, 0, 0, 1), j = e.translate(0), k = ta(i - j),
                l = f.xAxis[0].translate(this.x) + a, m = f.plotHeight, n = {
                    x: g ? h ? i : i - k : l,
                    y: g ? m - l - b : h ? m - i - k : m - i,
                    width: g ? k : b,
                    height: g ? b : k
                }, o = this.label;
            o && (o.align(this.alignOptions, null, n), c = o.alignAttr, o[this.options.crop === !1 || f.isInsidePlot(c.x, c.y) ? "show" : "hide"](!0))
        }
    }, K.prototype.buildStacks = function () {
        var a = this.series, b = n(this.options.reversedStacks, !0), c = a.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; c--;) a[b ? c : a.length - c - 1].setStackedPoints();
            if (this.usePercentage) for (c = 0; c < a.length; c++) a[c].setPercentStacks()
        }
    }, K.prototype.renderStackTotals = function () {
        var a, b, c, d = this, e = d.chart, f = e.renderer, g = d.stacks, h = d.stackTotalGroup;
        h || (d.stackTotalGroup = h = f.g("stack-labels").attr({
            visibility: Va,
            zIndex: 6
        }).add()), h.translate(e.plotLeft, e.plotTop);
        for (a in g) {
            b = g[a];
            for (c in b) b[c].render(h)
        }
    }, Rb.prototype.setStackedPoints = function () {
        if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
            var a, b, c, d, e, f, g, h, i = this, j = i.processedXData, k = i.processedYData, l = [], m = k.length,
                n = i.options, o = n.threshold, p = n.stack, q = n.stacking, r = i.stackKey, s = "-" + r,
                t = i.negStacks, u = i.yAxis, v = u.stacks, w = u.oldStacks;
            for (f = 0; m > f; f++) g = j[f], h = k[f], e = i.index + "," + f, a = t && o > h, d = a ? s : r, v[d] || (v[d] = {}), v[d][g] || (w[d] && w[d][g] ? (v[d][g] = w[d][g], v[d][g].total = null) : v[d][g] = new M(u, u.options.stackLabels, a, g, p)), b = v[d][g], b.points[e] = [b.cum || 0], "percent" === q ? (c = a ? r : s, t && v[c] && v[c][g] ? (c = v[c][g], b.total = c.total = ra(c.total, b.total) + ta(h) || 0) : b.total = D(b.total + (ta(h) || 0))) : b.total = D(b.total + (h || 0)), b.cum = (b.cum || 0) + (h || 0), b.points[e].push(b.cum), l[f] = b.cum;
            "percent" === q && (u.usePercentage = !0), this.stackedYData = l, u.oldStacks = {}
        }
    }, Rb.prototype.setPercentStacks = function () {
        var a = this, b = a.stackKey, c = a.yAxis.stacks, d = a.processedXData;
        jb([b, "-" + b], function (b) {
            for (var e, f, g, h, i = d.length; i--;) e = d[i], f = c[b] && c[b][e], g = f && f.points[a.index + "," + i], g && (h = f.total ? 100 / f.total : 0, g[0] = D(g[0] * h), g[1] = D(g[1] * h), a.stackedYData[i] = g[1])
        })
    }, a(L.prototype, {
        addSeries: function (a, b, c) {
            var d, e = this;
            return a && (b = n(b, !0), pb(e, "addSeries", {options: a}, function () {
                d = e.initSeries(a), e.isDirtyLegend = !0, e.linkSeries(), b && e.redraw(c)
            })), d
        }, addAxis: function (a, c, d, e) {
            var f, g = c ? "xAxis" : "yAxis", h = this.options;
            f = new K(this, b(a, {
                index: this[g].length,
                isX: c
            })), h[g] = m(h[g] || {}), h[g].push(a), n(d, !0) && this.redraw(e)
        }, showLoading: function (b) {
            var c = this, d = c.options, e = c.loadingDiv, f = d.loading, g = function () {
                e && o(e, {
                    left: c.plotLeft + Wa,
                    top: c.plotTop + Wa,
                    width: c.plotWidth + Wa,
                    height: c.plotHeight + Wa
                })
            };
            e || (c.loadingDiv = e = p(Qa, {className: Ua + "loading"}, a(f.style, {
                zIndex: 10,
                display: Xa
            }), c.container), c.loadingSpan = p("span", null, f.labelStyle, e), nb(c, "redraw", g)), c.loadingSpan.innerHTML = b || d.lang.loading, c.loadingShown || (o(e, {
                opacity: 0,
                display: ""
            }), rb(e, {opacity: f.style.opacity}, {duration: f.showDuration || 0}), c.loadingShown = !0), g()
        }, hideLoading: function () {
            var a = this.options, b = this.loadingDiv;
            b && rb(b, {opacity: 0}, {
                duration: a.loading.hideDuration || 100, complete: function () {
                    o(b, {display: Xa})
                }
            }), this.loadingShown = !1
        }
    }), a(Qb.prototype, {
        update: function (a, b, c, d) {
            function g() {
                i.applyOptions(a), e(a) && !f(a) && (i.redraw = function () {
                    k && (a && a.marker && a.marker.symbol ? i.graphic = k.destroy() : k.attr(i.pointAttr[i.state || ""])), a && a.dataLabels && i.dataLabel && (i.dataLabel = i.dataLabel.destroy()), i.redraw = null
                }), h = i.index, j.updateParallelArrays(i, h), m.data[h] = i.options, j.isDirty = j.isDirtyData = !0, !j.fixedBox && j.hasCartesianSeries && (l.isDirtyBox = !0), "point" === m.legendType && l.legend.destroyItem(i), b && l.redraw(c)
            }

            var h, i = this, j = i.series, k = i.graphic, l = j.chart, m = j.options;
            b = n(b, !0), d === !1 ? g() : i.firePointEvent("update", {options: a}, g)
        }, remove: function (a, b) {
            var c, d = this, e = d.series, f = e.points, g = e.chart, h = e.data;
            E(b, g), a = n(a, !0), d.firePointEvent("remove", null, function () {
                c = ib(d, h), h.length === f.length && f.splice(c, 1), h.splice(c, 1), e.options.data.splice(c, 1), e.updateParallelArrays(d, "splice", c, 1), d.destroy(), e.isDirty = !0, e.isDirtyData = !0, a && g.redraw()
            })
        }
    }), a(Rb.prototype, {
        addPoint: function (a, b, c, d) {
            var e, f, g, h, i = this, j = i.options, k = i.data, l = i.graph, m = i.area, o = i.chart,
                p = i.xAxis && i.xAxis.names, q = l && l.shift || 0, r = j.data, s = i.xData;
            if (E(d, o), c && jb([l, m, i.graphNeg, i.areaNeg], function (a) {
                a && (a.shift = q + 1)
            }), m && (m.isArea = !0), b = n(b, !0), e = {series: i}, i.pointClass.prototype.applyOptions.apply(e, [a]), g = e.x, h = s.length, i.requireSorting && g < s[h - 1]) for (f = !0; h && s[h - 1] > g;) h--;
            i.updateParallelArrays(e, "splice", h, 0, 0), i.updateParallelArrays(e, h), p && e.name && (p[g] = e.name), r.splice(h, 0, a), f && (i.data.splice(h, 0, null), i.processData()), "point" === j.legendType && i.generatePoints(), c && (k[0] && k[0].remove ? k[0].remove(!1) : (k.shift(), i.updateParallelArrays(e, "shift"), r.shift())), i.isDirty = !0, i.isDirtyData = !0, b && (i.getAttribs(), o.redraw())
        }, remove: function (a, b) {
            var c = this, d = c.chart;
            a = n(a, !0), c.isRemoving || (c.isRemoving = !0, pb(c, "remove", null, function () {
                c.destroy(), d.isDirtyLegend = d.isDirtyBox = !0, d.linkSeries(), a && d.redraw(b)
            })), c.isRemoving = !1
        }, update: function (c, d) {
            var e, f = this, g = this.chart, h = this.userOptions, i = this.type, j = db[i].prototype,
                k = ["group", "markerGroup", "dataLabelsGroup"];
            jb(k, function (a) {
                k[a] = f[a], delete f[a]
            }), c = b(h, {
                animation: !1,
                index: this.index,
                pointStart: this.xData[0]
            }, {data: this.options.data}, c), this.remove(!1);
            for (e in j) j.hasOwnProperty(e) && (this[e] = N);
            a(this, db[c.type || i].prototype), jb(k, function (a) {
                f[a] = k[a]
            }), this.init(g, c), g.linkSeries(), n(d, !0) && g.redraw(!1)
        }
    }), a(K.prototype, {
        update: function (c, d) {
            var e = this.chart;
            c = e.options[this.coll][this.options.index] = b(this.userOptions, c), this.destroy(!0), this._addedPlotLB = N, this.init(e, a(c, {events: N})), e.isDirtyBox = !0, n(d, !0) && e.redraw()
        }, remove: function (a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--;) d[e] && d[e].remove(!1);
            j(b.axes, this), j(b[c], this), b.options[c].splice(this.options.index, 1), jb(b[c], function (a, b) {
                a.options.index = b
            }), this.destroy(), b.isDirtyBox = !0, n(a, !0) && b.redraw()
        }, setTitle: function (a, b) {
            this.update({title: a}, b)
        }, setCategories: function (a, b) {
            this.update({categories: a}, b)
        }
    });
    var Sb = q(Rb);
    db.line = Sb, ub.area = b(vb, {threshold: 0});
    var Tb = q(Rb, {
        type: "area", getSegments: function () {
            var a, b, c, d, e = this, f = [], g = [], h = [], i = this.xAxis, j = this.yAxis,
                k = j.stacks[this.stackKey], l = {}, m = this.points, n = this.options.connectNulls;
            if (this.options.stacking && !this.cropped) {
                for (c = 0; c < m.length; c++) l[m[c].x] = m[c];
                for (d in k) null !== k[d].total && h.push(+d);
                h.sort(function (a, b) {
                    return a - b
                }), jb(h, function (d) {
                    var f, h = 0;
                    if (!n || l[d] && null !== l[d].y) if (l[d]) g.push(l[d]); else {
                        for (c = e.index; c <= j.series.length; c++) if (f = k[d].points[c + "," + d]) {
                            h = f[1];
                            break
                        }
                        a = i.translate(d), b = j.toPixels(h, !0), g.push({
                            y: null,
                            plotX: a,
                            clientX: a,
                            plotY: b,
                            yBottom: b,
                            onMouseOver: La
                        })
                    }
                }), g.length && f.push(g)
            } else Rb.prototype.getSegments.call(this), f = this.segments;
            this.segments = f
        }, getSegmentPath: function (a) {
            var b, c, d = Rb.prototype.getSegmentPath.call(this, a), e = [].concat(d), f = this.options, g = d.length,
                h = this.yAxis.getThreshold(f.threshold);
            if (3 === g && e.push(Za, d[1], d[2]), f.stacking && !this.closedStacks) for (b = a.length - 1; b >= 0; b--) c = n(a[b].yBottom, h), b < a.length - 1 && f.step && e.push(a[b + 1].plotX, c), e.push(a[b].plotX, c); else this.closeSegment(e, a, h);
            return this.areaPath = this.areaPath.concat(e), d
        }, closeSegment: function (a, b, c) {
            a.push(Za, b[b.length - 1].plotX, c, Za, b[0].plotX, c)
        }, drawGraph: function () {
            this.areaPath = [], Rb.prototype.drawGraph.apply(this);
            var a = this, b = this.areaPath, c = this.options, d = c.negativeColor, e = c.negativeFillColor,
                f = [["area", this.color, c.fillColor]];
            (d || e) && f.push(["areaNeg", d, e]), jb(f, function (d) {
                var e = d[0], f = a[e];
                f ? f.animate({d: b}) : a[e] = a.chart.renderer.path(b).attr({
                    fill: n(d[2], zb(d[1]).setOpacity(n(c.fillOpacity, .75)).get()),
                    zIndex: 0
                }).add(a.group)
            })
        }, drawLegendSymbol: Ob.drawRectangle
    });
    db.area = Tb, ub.spline = b(vb);
    var Ub = q(Rb, {
        type: "spline", getPointSpline: function (a, b, c) {
            var d, e, f, g, h, i = 1.5, j = i + 1, k = b.plotX, l = b.plotY, m = a[c - 1], n = a[c + 1];
            if (m && n) {
                var o, p = m.plotX, q = m.plotY, r = n.plotX, s = n.plotY;
                d = (i * k + p) / j, e = (i * l + q) / j, f = (i * k + r) / j, g = (i * l + s) / j, o = (g - e) * (f - k) / (f - d) + l - g, e += o, g += o, e > q && e > l ? (e = ra(q, l), g = 2 * l - e) : q > e && l > e && (e = sa(q, l), g = 2 * l - e), g > s && g > l ? (g = ra(s, l), e = 2 * l - g) : s > g && l > g && (g = sa(s, l), e = 2 * l - g), b.rightContX = f, b.rightContY = g
            }
            return c ? (h = ["C", m.rightContX || m.plotX, m.rightContY || m.plotY, d || k, e || l, k, l], m.rightContX = m.rightContY = null) : h = [Ya, k, l], h
        }
    });
    db.spline = Ub,
        ub.areaspline = b(ub.area);
    var Vb = Tb.prototype, Wb = q(Ub, {
        type: "areaspline",
        closedStacks: !0,
        getSegmentPath: Vb.getSegmentPath,
        closeSegment: Vb.closeSegment,
        drawGraph: Vb.drawGraph,
        drawLegendSymbol: Ob.drawRectangle
    });
    db.areaspline = Wb, ub.column = b(vb, {
        borderColor: "#FFFFFF",
        borderRadius: 0,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {brightness: .1, shadow: !1, halo: !1},
            select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}
        },
        dataLabels: {align: null, verticalAlign: null, y: null},
        stickyTracking: !1,
        tooltip: {distance: 6},
        threshold: 0
    });
    var Xb = q(Rb, {
        type: "column",
        pointAttrToOptions: {stroke: "borderColor", fill: "color", r: "borderRadius"},
        cropShoulder: 0,
        trackerGroups: ["group", "dataLabelsGroup"],
        negStacks: !0,
        init: function () {
            Rb.prototype.init.apply(this, arguments);
            var a = this, b = a.chart;
            b.hasRendered && jb(b.series, function (b) {
                b.type === a.type && (b.isDirty = !0)
            })
        },
        getColumnMetrics: function () {
            var a, b, c = this, d = c.options, e = c.xAxis, f = c.yAxis, g = e.reversed, h = {}, i = 0;
            d.grouping === !1 ? i = 1 : jb(c.chart.series, function (d) {
                var e = d.options, g = d.yAxis;
                d.type === c.type && d.visible && f.len === g.len && f.pos === g.pos && (e.stacking ? (a = d.stackKey, h[a] === N && (h[a] = i++), b = h[a]) : e.grouping !== !1 && (b = i++), d.columnIndex = b)
            });
            var j = sa(ta(e.transA) * (e.ordinalSlope || d.pointRange || e.closestPointRange || e.tickInterval || 1), e.len),
                l = j * d.groupPadding, m = j - 2 * l, o = m / i, p = d.pointWidth,
                q = k(p) ? (o - p) / 2 : o * d.pointPadding, r = n(p, o - 2 * q),
                s = (g ? i - (c.columnIndex || 0) : c.columnIndex) || 0, t = q + (l + s * o - j / 2) * (g ? -1 : 1);
            return c.columnMetrics = {width: r, offset: t}
        },
        translate: function () {
            var a = this, b = a.chart, c = a.options,
                d = a.borderWidth = n(c.borderWidth, a.activePointCount > .5 * a.xAxis.len ? 0 : 1), e = a.yAxis,
                f = c.threshold, g = a.translatedThreshold = e.getThreshold(f), h = n(c.minPointLength, 5),
                i = a.getColumnMetrics(), j = i.width, k = a.barW = ra(j, 1 + 2 * d), l = a.pointXOffset = i.offset,
                m = -(d % 2 ? .5 : 0), o = d % 2 ? .5 : 1;
            b.renderer.isVML && b.inverted && (o += 1), c.pointPadding && (k = qa(k)), Rb.prototype.translate.apply(a), jb(a.points, function (c) {
                var d, f, i, p = n(c.yBottom, g), q = sa(ra(-999 - p, c.plotY), e.len + 999 + p), r = c.plotX + l,
                    s = k, t = sa(q, p), u = ra(q, p) - t;
                ta(u) < h && h && (u = h, t = oa(ta(t - g) > h ? p - h : g - (e.translate(c.y, 0, 1, 0, 1) <= g ? h : 0))), c.barX = r, c.pointWidth = j, c.tooltipPos = b.inverted ? [e.len - q, a.xAxis.len - r - s / 2] : [r + s / 2, q + e.pos - b.plotTop], d = oa(r + s) + m, r = oa(r) + m, s = d - r, i = ta(t) < .5, f = oa(t + u) + o, t = oa(t) + o, u = f - t, i && (t -= 1, u += 1), c.shapeType = "rect", c.shapeArgs = {
                    x: r,
                    y: t,
                    width: s,
                    height: u
                }
            })
        },
        getSymbol: La,
        drawLegendSymbol: Ob.drawRectangle,
        drawGraph: La,
        drawPoints: function () {
            var a, c, d = this, e = this.chart, f = d.options, g = e.renderer, h = f.animationLimit || 250;
            jb(d.points, function (i) {
                var j, l = i.plotY, m = i.graphic;
                l === N || isNaN(l) || null === i.y ? m && (i.graphic = m.destroy()) : (a = i.shapeArgs, j = k(d.borderWidth) ? {"stroke-width": d.borderWidth} : {}, c = i.pointAttr[i.selected ? bb : _a] || d.pointAttr[_a], m ? (sb(m), m.attr(j)[e.pointCount < h ? "animate" : "attr"](b(a))) : i.graphic = m = g[i.shapeType](a).attr(c).attr(j).add(d.group).shadow(f.shadow, null, f.stacking && !f.borderRadius))
            })
        },
        animate: function (a) {
            var b, c = this, d = this.yAxis, e = c.options, f = this.chart.inverted, g = {};
            Ga && (a ? (g.scaleY = .001, b = sa(d.pos + d.len, ra(d.pos, d.toPixels(e.threshold))), f ? g.translateX = b - d.len : g.translateY = b, c.group.attr(g)) : (g.scaleY = 1, g[f ? "translateX" : "translateY"] = d.pos, c.group.animate(g, c.options.animation), c.animate = null))
        },
        remove: function () {
            var a = this, b = a.chart;
            b.hasRendered && jb(b.series, function (b) {
                b.type === a.type && (b.isDirty = !0)
            }), Rb.prototype.remove.apply(a, arguments)
        }
    });
    db.column = Xb, ub.bar = b(ub.column);
    var Yb = q(Xb, {type: "bar", inverted: !0});
    db.bar = Yb, ub.scatter = b(vb, {
        lineWidth: 0,
        tooltip: {
            headerFormat: '<span style="color:{series.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        },
        stickyTracking: !1
    });
    var Zb = q(Rb, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["markerGroup", "dataLabelsGroup"],
        takeOrdinalPosition: !1,
        singularTooltips: !0,
        drawGraph: function () {
            this.options.lineWidth && Rb.prototype.drawGraph.call(this)
        }
    });
    db.scatter = Zb, ub.pie = b(vb, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
            distance: 30, enabled: !0, formatter: function () {
                return this.point.name
            }
        },
        ignoreHiddenPoint: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        states: {hover: {brightness: .1, shadow: !1}},
        stickyTracking: !1,
        tooltip: {followPointer: !0}
    });
    var $b = q(Qb, {
        init: function () {
            Qb.prototype.init.apply(this, arguments);
            var b, c = this;
            return c.y < 0 && (c.y = null), a(c, {
                visible: c.visible !== !1,
                name: n(c.name, "Slice")
            }), b = function (a) {
                c.slice("select" === a.type)
            }, nb(c, "select", b), nb(c, "unselect", b), c
        }, setVisible: function (a) {
            var b = this, c = b.series, d = c.chart;
            b.visible = b.options.visible = a = a === N ? !b.visible : a, c.options.data[ib(b, c.data)] = b.options, jb(["graphic", "dataLabel", "connector", "shadowGroup"], function (c) {
                b[c] && b[c][a ? "show" : "hide"](!0)
            }), b.legendItem && d.legend.colorizeItem(b, a), !c.isDirty && c.options.ignoreHiddenPoint && (c.isDirty = !0, d.redraw())
        }, slice: function (a, b, c) {
            var d, e = this, f = e.series, g = f.chart;
            E(c, g), b = n(b, !0), e.sliced = e.options.sliced = a = k(a) ? a : !e.sliced, f.options.data[ib(e, f.data)] = e.options, d = a ? e.slicedTranslation : {
                translateX: 0,
                translateY: 0
            }, e.graphic.animate(d), e.shadowGroup && e.shadowGroup.animate(d)
        }, haloPath: function (a) {
            var b = this.shapeArgs, c = this.series.chart;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {
                innerR: this.shapeArgs.r,
                start: b.start,
                end: b.end
            })
        }
    }), _b = {
        type: "pie",
        isCartesian: !1,
        pointClass: $b,
        requireSorting: !1,
        noSharedTooltip: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        axisTypes: [],
        pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
        singularTooltips: !0,
        getColor: La,
        animate: function (a) {
            var b = this, c = b.points, d = b.startAngleRad;
            a || (jb(c, function (a) {
                var c = a.graphic, e = a.shapeArgs;
                c && (c.attr({r: b.center[3] / 2, start: d, end: d}), c.animate({
                    r: e.r,
                    start: e.start,
                    end: e.end
                }, b.options.animation))
            }), b.animate = null)
        },
        setData: function (a, b, c, d) {
            Rb.prototype.setData.call(this, a, !1, c, d), this.processData(), this.generatePoints(), n(b, !0) && this.chart.redraw(c)
        },
        generatePoints: function () {
            var a, b, c, d, e = 0, f = this.options.ignoreHiddenPoint;
            for (Rb.prototype.generatePoints.call(this), b = this.points, c = b.length, a = 0; c > a; a++) d = b[a], e += f && !d.visible ? 0 : d.y;
            for (this.total = e, a = 0; c > a; a++) d = b[a], d.percentage = e > 0 ? d.y / e * 100 : 0, d.total = e
        },
        translate: function (a) {
            this.generatePoints();
            var b, c, d, e, f, g, h, i = this, j = 0, k = 1e3, l = i.options, m = l.slicedOffset, o = m + l.borderWidth,
                p = l.startAngle || 0, q = i.startAngleRad = wa / 180 * (p - 90),
                r = i.endAngleRad = wa / 180 * (n(l.endAngle, p + 360) - 90), s = r - q, t = i.points,
                u = l.dataLabels.distance, v = l.ignoreHiddenPoint, w = t.length;
            for (a || (i.center = a = i.getCenter()), i.getX = function (b, c) {
                return d = na.asin(sa((b - a[1]) / (a[2] / 2 + u), 1)), a[0] + (c ? -1 : 1) * ua(d) * (a[2] / 2 + u)
            }, g = 0; w > g; g++) h = t[g], b = q + j * s, (!v || h.visible) && (j += h.percentage / 100), c = q + j * s, h.shapeType = "arc", h.shapeArgs = {
                x: a[0],
                y: a[1],
                r: a[2] / 2,
                innerR: a[3] / 2,
                start: oa(b * k) / k,
                end: oa(c * k) / k
            }, d = (c + b) / 2, d > 1.5 * wa ? d -= 2 * wa : -wa / 2 > d && (d += 2 * wa), h.slicedTranslation = {
                translateX: oa(ua(d) * m),
                translateY: oa(va(d) * m)
            }, e = ua(d) * a[2] / 2, f = va(d) * a[2] / 2, h.tooltipPos = [a[0] + .7 * e, a[1] + .7 * f], h.half = -wa / 2 > d || d > wa / 2 ? 1 : 0, h.angle = d, o = sa(o, u / 2), h.labelPos = [a[0] + e + ua(d) * u, a[1] + f + va(d) * u, a[0] + e + ua(d) * o, a[1] + f + va(d) * o, a[0] + e, a[1] + f, 0 > u ? "center" : h.half ? "right" : "left", d]
        },
        drawGraph: null,
        drawPoints: function () {
            var b, c, d, e, f = this, g = f.chart, h = g.renderer, i = f.options.shadow;
            i && !f.shadowGroup && (f.shadowGroup = h.g("shadow").add(f.group)), jb(f.points, function (g) {
                c = g.graphic, e = g.shapeArgs, d = g.shadowGroup, i && !d && (d = g.shadowGroup = h.g("shadow").add(f.shadowGroup)), b = g.sliced ? g.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }, d && d.attr(b), c ? c.animate(a(e, b)) : g.graphic = c = h[g.shapeType](e).setRadialReference(f.center).attr(g.pointAttr[g.selected ? bb : _a]).attr({"stroke-linejoin": "round"}).attr(b).add(f.group).shadow(i, d), void 0 !== g.visible && g.setVisible(g.visible)
            })
        },
        sortByAngle: function (a, b) {
            a.sort(function (a, c) {
                return void 0 !== a.angle && (c.angle - a.angle) * b
            })
        },
        drawLegendSymbol: Ob.drawRectangle,
        getCenter: Pb.getCenter,
        getSymbol: La
    };
    _b = q(Rb, _b), db.pie = _b, Rb.prototype.drawDataLabels = function () {
        var c, d, e, f, g = this, h = g.options, i = h.cursor, j = h.dataLabels, l = g.points, m = g.hasRendered || 0;
        (j.enabled || g._hasPointLabels) && (g.dlProcessOptions && g.dlProcessOptions(j), f = g.plotGroup("dataLabelsGroup", "data-labels", j.defer ? Ta : Va, j.zIndex || 6), n(j.defer, !0) && (f.attr({opacity: +m}), m || nb(g, "afterAnimate", function () {
            g.visible && f.show(), f[h.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
        })), d = j, jb(l, function (h) {
            var l, m, o, p, q, r = h.dataLabel, s = h.connector, t = !0;
            if (c = h.options && h.options.dataLabels, l = n(c && c.enabled, d.enabled), r && !l) h.dataLabel = r.destroy(); else if (l) {
                if (j = b(d, c), q = j.rotation, m = h.getLabelConfig(), e = j.format ? v(j.format, m) : j.formatter.call(m, j), j.style.color = n(j.color, j.style.color, g.color, "black"), r) k(e) ? (r.attr({text: e}), t = !1) : (h.dataLabel = r = r.destroy(), s && (h.connector = s.destroy())); else if (k(e)) {
                    o = {
                        fill: j.backgroundColor,
                        stroke: j.borderColor,
                        "stroke-width": j.borderWidth,
                        r: j.borderRadius || 0,
                        rotation: q,
                        padding: j.padding,
                        zIndex: 1
                    };
                    for (p in o) o[p] === N && delete o[p];
                    r = h.dataLabel = g.chart.renderer[q ? "text" : "label"](e, 0, -999, null, null, null, j.useHTML).attr(o).css(a(j.style, i && {cursor: i})).add(f).shadow(j.shadow)
                }
                r && g.alignDataLabel(h, r, j, null, t)
            }
        }))
    }, Rb.prototype.alignDataLabel = function (b, c, d, e, f) {
        var g, h = this.chart, i = h.inverted, j = n(b.plotX, -999), k = n(b.plotY, -999), l = c.getBBox(),
            m = this.visible && (b.series.forceDL || h.isInsidePlot(j, oa(k), i) || e && h.isInsidePlot(j, i ? e.x + 1 : e.y + e.height - 1, i));
        m && (e = a({
            x: i ? h.plotWidth - k : j,
            y: oa(i ? h.plotHeight - j : k),
            width: 0,
            height: 0
        }, e), a(d, {
            width: l.width,
            height: l.height
        }), d.rotation ? c[f ? "attr" : "animate"]({
            x: e.x + d.x + e.width / 2,
            y: e.y + d.y + e.height / 2
        }).attr({align: d.align}) : (c.align(d, null, e), g = c.alignAttr, "justify" === n(d.overflow, "justify") ? this.justifyDataLabel(c, d, g, l, e, f) : n(d.crop, !0) && (m = h.isInsidePlot(g.x, g.y) && h.isInsidePlot(g.x + l.width, g.y + l.height)))), m || (c.attr({y: -999}), c.placed = !1)
    }, Rb.prototype.justifyDataLabel = function (a, b, c, d, e, f) {
        var g, h, i = this.chart, j = b.align, k = b.verticalAlign;
        g = c.x, 0 > g && ("right" === j ? b.align = "left" : b.x = -g, h = !0), g = c.x + d.width, g > i.plotWidth && ("left" === j ? b.align = "right" : b.x = i.plotWidth - g, h = !0), g = c.y, 0 > g && ("bottom" === k ? b.verticalAlign = "top" : b.y = -g, h = !0), g = c.y + d.height, g > i.plotHeight && ("top" === k ? b.verticalAlign = "bottom" : b.y = i.plotHeight - g, h = !0), h && (a.placed = !f, a.align(b, null, e))
    }, db.pie && (db.pie.prototype.drawDataLabels = function () {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, o = this, p = o.data, q = o.chart, r = o.options.dataLabels,
            s = n(r.connectorPadding, 10), t = n(r.connectorWidth, 1), u = q.plotWidth, v = q.plotHeight,
            w = n(r.softConnector, !0), x = r.distance, y = o.center, z = y[2] / 2, B = y[1], C = x > 0, D = [[], []],
            E = [0, 0, 0, 0], F = function (a, b) {
                return b.y - a.y
            };
        if (o.visible && (r.enabled || o._hasPointLabels)) {
            for (Rb.prototype.drawDataLabels.apply(o), jb(p, function (a) {
                a.dataLabel && a.visible && D[a.half].push(a)
            }), l = 2; l--;) {
                var G, H, I, J, K = [], L = [], M = D[l], N = M.length;
                if (N) {
                    for (o.sortByAngle(M, l - .5), m = g = 0; !g && M[m];) g = M[m] && M[m].dataLabel && (M[m].dataLabel.getBBox().height || 21), m++;
                    if (x > 0) {
                        for (I = sa(B + z + x, q.plotHeight), H = ra(0, B - z - x); I >= H; H += g) K.push(H);
                        if (G = K.length, N > G) {
                            for (k = [].concat(M), k.sort(F), m = N; m--;) k[m].rank = m;
                            for (m = N; m--;) M[m].rank >= G && M.splice(m, 1);
                            N = M.length
                        }
                        for (m = 0; N > m; m++) {
                            a = M[m], f = a.labelPos;
                            var O, P, Q = 9999;
                            for (P = 0; G > P; P++) O = ta(K[P] - f[1]), Q > O && (Q = O, J = P);
                            if (m > J && null !== K[m]) J = m; else if (N - m + J > G && null !== K[m]) for (J = G - N + m; null === K[J];) J++; else for (; null === K[J];) J++;
                            L.push({i: J, y: K[J]}), K[J] = null
                        }
                        L.sort(F)
                    }
                    for (m = 0; N > m; m++) {
                        var R, S;
                        a = M[m], f = a.labelPos, d = a.dataLabel, j = a.visible === !1 ? Ta : Va, S = f[1], x > 0 ? (R = L.pop(), J = R.i, i = R.y, (S > i && null !== K[J + 1] || i > S && null !== K[J - 1]) && (i = sa(ra(0, S), q.plotHeight))) : i = S, h = r.justify ? y[0] + (l ? -1 : 1) * (z + x) : o.getX(i === B - z - x || i === B + z + x ? S : i, l), d._attr = {
                            visibility: j,
                            align: f[6]
                        }, d._pos = {
                            x: h + r.x + ({left: s, right: -s}[f[6]] || 0),
                            y: i + r.y - 10
                        }, d.connX = h, d.connY = i, null === this.options.size && (e = d.width, s > h - e ? E[3] = ra(oa(e - h + s), E[3]) : h + e > u - s && (E[1] = ra(oa(h + e - u + s), E[1])), 0 > i - g / 2 ? E[0] = ra(oa(-i + g / 2), E[0]) : i + g / 2 > v && (E[2] = ra(oa(i + g / 2 - v), E[2])))
                    }
                }
            }
            (0 === A(E) || this.verifyDataLabelOverflow(E)) && (this.placeDataLabels(), C && t && jb(this.points, function (a) {
                b = a.connector, f = a.labelPos, d = a.dataLabel, d && d._pos ? (j = d._attr.visibility, h = d.connX, i = d.connY, c = w ? [Ya, h + ("left" === f[6] ? 5 : -5), i, "C", h, i, 2 * f[2] - f[4], 2 * f[3] - f[5], f[2], f[3], Za, f[4], f[5]] : [Ya, h + ("left" === f[6] ? 5 : -5), i, Za, f[2], f[3], Za, f[4], f[5]], b ? (b.animate({d: c}), b.attr("visibility", j)) : a.connector = b = o.chart.renderer.path(c).attr({
                    "stroke-width": t,
                    stroke: r.connectorColor || a.color || "#606060",
                    visibility: j
                }).add(o.dataLabelsGroup)) : b && (a.connector = b.destroy())
            }))
        }
    }, db.pie.prototype.placeDataLabels = function () {
        jb(this.points, function (a) {
            var b, c = a.dataLabel;
            c && (b = c._pos, b ? (c.attr(c._attr), c[c.moved ? "animate" : "attr"](b), c.moved = !0) : c && c.attr({y: -999}))
        })
    }, db.pie.prototype.alignDataLabel = La, db.pie.prototype.verifyDataLabelOverflow = function (a) {
        var b, c = this.center, d = this.options, e = d.center, f = d.minSize || 80, g = f;
        return null !== e[0] ? g = ra(c[2] - ra(a[1], a[3]), f) : (g = ra(c[2] - a[1] - a[3], f), c[0] += (a[3] - a[1]) / 2), null !== e[1] ? g = ra(sa(g, c[2] - ra(a[0], a[2])), f) : (g = ra(sa(g, c[2] - a[0] - a[2]), f), c[1] += (a[0] - a[2]) / 2), g < c[2] ? (c[2] = g, this.translate(c), jb(this.points, function (a) {
            a.dataLabel && (a.dataLabel._pos = null)
        }), this.drawDataLabels && this.drawDataLabels()) : b = !0, b
    }), db.column && (db.column.prototype.alignDataLabel = function (a, c, d, e, f) {
        var g = this.chart, h = g.inverted, i = a.dlBox || a.shapeArgs,
            j = a.below || a.plotY > n(this.translatedThreshold, g.plotSizeY), k = n(d.inside, !!this.options.stacking);
        i && (e = b(i), h && (e = {
            x: g.plotWidth - e.y - e.height,
            y: g.plotHeight - e.x - e.width,
            width: e.height,
            height: e.width
        }), k || (h ? (e.x += j ? 0 : e.width, e.width = 0) : (e.y += j ? e.height : 0, e.height = 0))), d.align = n(d.align, !h || k ? "center" : j ? "right" : "left"), d.verticalAlign = n(d.verticalAlign, h || k ? "middle" : j ? "top" : "bottom"), Rb.prototype.alignDataLabel.call(this, a, c, d, e, f)
    });
    var ac = ka.TrackerMixin = {
        drawTrackerPoint: function () {
            var a = this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && {cursor: d}, f = function (c) {
                var d, e = c.target;
                for (b.hoverSeries !== a && a.onMouseOver(); e && !d;) d = e.point, e = e.parentNode;
                d !== N && d !== b.hoverPoint && d.onMouseOver(c)
            };
            jb(a.points, function (a) {
                a.graphic && (a.graphic.element.point = a), a.dataLabel && (a.dataLabel.element.point = a)
            }), a._hasTracking || (jb(a.trackerGroups, function (b) {
                a[b] && (a[b].addClass(Ua + "tracker").on("mouseover", f).on("mouseout", function (a) {
                    c.onTrackerMouseOut(a)
                }).css(e), P && a[b].on("touchstart", f))
            }), a._hasTracking = !0)
        }, drawTrackerGraph: function () {
            var a, b, c = this, d = c.options, e = d.trackByArea, f = [].concat(e ? c.areaPath : c.graphPath),
                g = f.length, h = c.chart, i = h.pointer, j = h.renderer, k = h.options.tooltip.snap, l = c.tracker,
                m = d.cursor, n = m && {cursor: m}, o = c.singlePoints, p = function () {
                    h.hoverSeries !== c && c.onMouseOver()
                }, q = "rgba(192,192,192," + (Ga ? 1e-4 : .002) + ")";
            if (g && !e) for (b = g + 1; b--;) f[b] === Ya && f.splice(b + 1, 0, f[b + 1] - k, f[b + 2], Za), (b && f[b] === Ya || b === g) && f.splice(b, 0, Za, f[b - 2] + k, f[b - 1]);
            for (b = 0; b < o.length; b++) a = o[b], f.push(Ya, a.plotX - k, a.plotY, Za, a.plotX + k, a.plotY);
            l ? l.attr({d: f}) : (c.tracker = j.path(f).attr({
                "stroke-linejoin": "round",
                visibility: c.visible ? Va : Ta,
                stroke: q,
                fill: e ? q : Xa,
                "stroke-width": d.lineWidth + (e ? 0 : 2 * k),
                zIndex: 2
            }).add(c.group), jb([c.tracker, c.markerGroup], function (a) {
                a.addClass(Ua + "tracker").on("mouseover", p).on("mouseout", function (a) {
                    i.onTrackerMouseOut(a)
                }).css(n), P && a.on("touchstart", p)
            }))
        }
    };
    db.column && (Xb.prototype.drawTracker = ac.drawTrackerPoint), db.pie && (db.pie.prototype.drawTracker = ac.drawTrackerPoint), db.scatter && (Zb.prototype.drawTracker = ac.drawTrackerPoint), a(Nb.prototype, {
        setItemEvents: function (a, b, c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function () {
                a.setState(ab), b.css(f.options.itemHoverStyle)
            }).on("mouseout", function () {
                b.css(a.visible ? d : e), a.setState()
            }).on("click", function (b) {
                var c = "legendItemClick", d = function () {
                    a.setVisible()
                };
                b = {browserEvent: b}, a.firePointEvent ? a.firePointEvent(c, b, d) : pb(a, c, b, d)
            })
        }, createCheckboxForItem: function (a) {
            var b = this;
            a.checkbox = p("input", {
                type: "checkbox",
                checked: a.selected,
                defaultChecked: a.selected
            }, b.options.itemCheckboxStyle, b.chart.container), nb(a.checkbox, "click", function (b) {
                var c = b.target;
                pb(a, "checkboxClick", {checked: c.checked}, function () {
                    a.select()
                })
            })
        }
    }), R.legend.itemStyle.cursor = "pointer", a(L.prototype, {
        showResetZoom: function () {
            var a = this, b = R.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states,
                f = "chart" === c.relativeTo ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
                a.zoomOut()
            }, d, e && e.hover).attr({align: c.position.align, title: b.resetZoomTitle}).add().align(c.position, !1, f)
        }, zoomOut: function () {
            var a = this;
            pb(a, "selection", {resetSelection: !0}, function () {
                a.zoom()
            })
        }, zoom: function (a) {
            var b, c, d = this, f = d.pointer, g = !1;
            !a || a.resetSelection ? jb(d.axes, function (a) {
                b = a.zoom()
            }) : jb(a.xAxis.concat(a.yAxis), function (a) {
                var c = a.axis, d = c.isXAxis;
                (f[d ? "zoomX" : "zoomY"] || f[d ? "pinchX" : "pinchY"]) && (b = c.zoom(a.min, a.max), c.displayBtn && (g = !0))
            }), c = d.resetZoomButton, g && !c ? d.showResetZoom() : !g && e(c) && (d.resetZoomButton = c.destroy()), b && d.redraw(n(d.options.chart.animation, a && a.animation, d.pointCount < 100))
        }, pan: function (a, b) {
            var c, d = this, e = d.hoverPoints;
            e && jb(e, function (a) {
                a.setState()
            }), jb("xy" === b ? [1, 0] : [1], function (b) {
                var e = a[b ? "chartX" : "chartY"], f = d[b ? "xAxis" : "yAxis"][0],
                    g = d[b ? "mouseDownX" : "mouseDownY"], h = (f.pointRange || 0) / 2, i = f.getExtremes(),
                    j = f.toValue(g - e, !0) + h, k = f.toValue(g + d[b ? "plotWidth" : "plotHeight"] - e, !0) - h;
                f.series.length && j > sa(i.dataMin, i.min) && k < ra(i.dataMax, i.max) && (f.setExtremes(j, k, !1, !1, {trigger: "pan"}), c = !0), d[b ? "mouseDownX" : "mouseDownY"] = e
            }), c && d.redraw(!1), o(d.container, {cursor: "move"})
        }
    }), a(Qb.prototype, {
        select: function (a, b) {
            var c = this, d = c.series, e = d.chart;
            a = n(a, !c.selected), c.firePointEvent(a ? "select" : "unselect", {accumulate: b}, function () {
                c.selected = c.options.selected = a, d.options.data[ib(c, d.data)] = c.options, c.setState(a && bb), b || jb(e.getSelectedPoints(), function (a) {
                    a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[ib(a, d.data)] = a.options, a.setState(_a), a.firePointEvent("unselect"))
                })
            })
        }, onMouseOver: function (a) {
            var b = this, c = b.series, d = c.chart, e = d.tooltip, f = d.hoverPoint;
            f && f !== b && f.onMouseOut(), b.firePointEvent("mouseOver"), !e || e.shared && !c.noSharedTooltip || e.refresh(b, a), b.setState(ab), d.hoverPoint = b
        }, onMouseOut: function () {
            var a = this.series.chart, b = a.hoverPoints;
            this.firePointEvent("mouseOut"), b && -1 !== ib(this, b) || (this.setState(), a.hoverPoint = null)
        }, importEvents: function () {
            if (!this.hasImportedEvents) {
                var a, c = this, d = b(c.series.options.point, c.options), e = d.events;
                c.events = e;
                for (a in e) nb(c, a, e[a]);
                this.hasImportedEvents = !0
            }
        }, setState: function (c, d) {
            var e, f, g, h, i = this, j = i.plotX, k = i.plotY, l = i.series, m = l.options.states,
                n = ub[l.type].marker && l.options.marker, o = n && !n.enabled, p = n && n.states[c],
                q = p && p.enabled === !1, r = l.stateMarkerGraphic, s = i.marker || {}, t = l.chart, u = l.halo;
            c = c || _a, h = i.pointAttr[c] || l.pointAttr[c], c === i.state && !d || i.selected && c !== bb || m[c] && m[c].enabled === !1 || c && (q || o && p.enabled === !1) || c && s.states && s.states[c] && s.states[c].enabled === !1 || (i.graphic ? (e = n && i.graphic.symbolName && h.r, i.graphic.attr(b(h, e ? {
                x: j - e,
                y: k - e,
                width: 2 * e,
                height: 2 * e
            } : {})), r && r.hide()) : (c && p && (e = p.radius, g = s.symbol || l.symbol, r && r.currentSymbol !== g && (r = r.destroy()), r ? r[d ? "animate" : "attr"]({
                x: j - e,
                y: k - e
            }) : g && (l.stateMarkerGraphic = r = t.renderer.symbol(g, j - e, k - e, 2 * e, 2 * e).attr(h).add(l.markerGroup), r.currentSymbol = g)), r && r[c && t.isInsidePlot(j, k, t.inverted) ? "show" : "hide"]()), f = m[c] && m[c].halo, f && f.size ? (u || (l.halo = u = t.renderer.path().add(l.seriesGroup)), u.attr(a({fill: zb(i.color || l.color).setOpacity(f.opacity).get()}, f.attributes))[d ? "animate" : "attr"]({d: i.haloPath(f.size)})) : u && u.attr({d: []}), i.state = c)
        }, haloPath: function (a) {
            var b = this.series, c = b.chart, d = b.getPlotBox(), e = c.inverted;
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a, 2 * a, 2 * a)
        }
    }), a(Rb.prototype, {
        onMouseOver: function () {
            var a = this, b = a.chart, c = b.hoverSeries;
            c && c !== a && c.onMouseOut(), a.options.events.mouseOver && pb(a, "mouseOver"), a.setState(ab), b.hoverSeries = a
        }, onMouseOut: function () {
            var a = this, b = a.options, c = a.chart, d = c.tooltip, e = c.hoverPoint;
            e && e.onMouseOut(), a && b.events.mouseOut && pb(a, "mouseOut"), !d || b.stickyTracking || d.shared && !a.noSharedTooltip || d.hide(), a.setState(), c.hoverSeries = null
        }, setState: function (a) {
            var b, c = this, d = c.options, e = c.graph, f = c.graphNeg, g = d.states, h = d.lineWidth;
            if (a = a || _a, c.state !== a) {
                if (c.state = a, g[a] && g[a].enabled === !1) return;
                a && (h = g[a].lineWidth || h + (g[a].lineWidthPlus || 0)), e && !e.dashstyle && (b = {"stroke-width": h}, e.attr(b), f && f.attr(b))
            }
        }, setVisible: function (a, b) {
            var c, d = this, e = d.chart, f = d.legendItem, g = e.options.chart.ignoreHiddenSeries, h = d.visible;
            d.visible = a = d.userOptions.visible = a === N ? !h : a, c = a ? "show" : "hide", jb(["group", "dataLabelsGroup", "markerGroup", "tracker"], function (a) {
                d[a] && d[a][c]()
            }), e.hoverSeries === d && d.onMouseOut(), f && e.legend.colorizeItem(d, a), d.isDirty = !0, d.options.stacking && jb(e.series, function (a) {
                a.options.stacking && a.visible && (a.isDirty = !0)
            }), jb(d.linkedSeries, function (b) {
                b.setVisible(a, !1)
            }), g && (e.isDirtyBox = !0), b !== !1 && e.redraw(), pb(d, c)
        }, setTooltipPoints: function (a) {
            var b, c, d, e, f, g, h, i = this, j = [], k = i.xAxis, l = k && k.getExtremes(),
                m = k ? k.tooltipLen || k.len : i.chart.plotSizeX, n = [];
            if (i.options.enableMouseTracking !== !1 && !i.singularTooltips) {
                for (a && (i.tooltipPoints = null), jb(i.segments || i.points, function (a) {
                    j = j.concat(a)
                }), k && k.reversed && (j = j.reverse()), i.orderTooltipPoints && i.orderTooltipPoints(j), b = j.length, h = 0; b > h; h++) if (e = j[h], f = e.x, f >= l.min && f <= l.max) for (g = j[h + 1], c = d === N ? 0 : d + 1, d = j[h + 1] ? sa(ra(0, pa((e.clientX + (g ? g.wrappedClientX || g.clientX : m)) / 2)), m) : m; c >= 0 && d >= c;) n[c++] = e;
                i.tooltipPoints = n
            }
        }, show: function () {
            this.setVisible(!0)
        }, hide: function () {
            this.setVisible(!1)
        }, select: function (a) {
            var b = this;
            b.selected = a = a === N ? !b.selected : a, b.checkbox && (b.checkbox.checked = a), pb(b, a ? "select" : "unselect")
        }, drawTracker: ac.drawTrackerGraph
    }), a(ka, {
        Axis: K,
        Chart: L,
        Color: zb,
        Point: Qb,
        Tick: J,
        Renderer: O,
        Series: Rb,
        SVGElement: I,
        SVGRenderer: Ab,
        arrayMin: z,
        arrayMax: A,
        charts: Ma,
        dateFormat: S,
        format: v,
        pathAnim: U,
        getOptions: H,
        hasBidiBug: Ha,
        isTouchDevice: Ea,
        numberFormat: r,
        seriesTypes: db,
        setOptions: G,
        addEvent: nb,
        removeEvent: ob,
        createElement: p,
        discardElement: C,
        css: o,
        each: jb,
        extend: a,
        map: mb,
        merge: b,
        pick: n,
        splat: m,
        extendClass: q,
        pInt: c,
        wrap: t,
        svg: Ga,
        canvas: Ia,
        vml: !Ga && !Ia,
        product: Oa,
        version: Pa
    })
}(), function (a, b) {
    function c(a, b, c) {
        this.init.call(this, a, b, c)
    }

    var d = a.arrayMin, e = a.arrayMax, f = a.each, g = a.extend, h = a.merge, i = a.map, j = a.pick, k = a.pInt,
        l = a.getOptions().plotOptions, m = a.seriesTypes, n = a.extendClass, o = a.splat, p = a.wrap, q = a.Axis,
        r = a.Tick, s = a.Point, t = a.Pointer, u = a.CenteredSeriesMixin, v = a.TrackerMixin, w = a.Series, x = Math,
        y = x.round, z = x.floor, A = x.max, B = a.Color, C = function () {
        };
    g(c.prototype, {
        init: function (a, b, c) {
            var d = this, e = d.defaultOptions;
            d.chart = b, b.angular && (e.background = {}), d.options = a = h(e, a), (a = a.background) && f([].concat(o(a)).reverse(), function (a) {
                var b = a.backgroundColor, a = h(d.defaultBackgroundOptions, a);
                b && (a.backgroundColor = b), a.color = a.backgroundColor, c.options.plotBands.unshift(a)
            })
        },
        defaultOptions: {center: ["50%", "50%"], size: "85%", startAngle: 0},
        defaultBackgroundOptions: {
            shape: "circle",
            borderWidth: 1,
            borderColor: "silver",
            backgroundColor: {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#FFF"], [1, "#DDD"]]},
            from: -Number.MAX_VALUE,
            innerRadius: 0,
            to: Number.MAX_VALUE,
            outerRadius: "105%"
        }
    });
    var D = q.prototype, r = r.prototype, E = {
        getOffset: C, redraw: function () {
            this.isDirty = !1
        }, render: function () {
            this.isDirty = !1
        }, setScale: C, setCategories: C, setTitle: C
    }, F = {
        isRadial: !0,
        defaultRadialGaugeOptions: {
            labels: {align: "center", x: 0, y: null},
            minorGridLineWidth: 0,
            minorTickInterval: "auto",
            minorTickLength: 10,
            minorTickPosition: "inside",
            minorTickWidth: 1,
            tickLength: 10,
            tickPosition: "inside",
            tickWidth: 2,
            title: {rotation: 0},
            zIndex: 2
        },
        defaultRadialXOptions: {
            gridLineWidth: 1,
            labels: {align: null, distance: 15, x: 0, y: null},
            maxPadding: 0,
            minPadding: 0,
            showLastLabel: !1,
            tickLength: 0
        },
        defaultRadialYOptions: {
            gridLineInterpolation: "circle",
            labels: {align: "right", x: -3, y: -2},
            showLastLabel: !1,
            title: {x: 4, text: null, rotation: 90}
        },
        setOptions: function (a) {
            a = this.options = h(this.defaultOptions, this.defaultRadialOptions, a), a.plotBands || (a.plotBands = [])
        },
        getOffset: function () {
            D.getOffset.call(this), this.chart.axisOffset[this.side] = 0, this.center = this.pane.center = u.getCenter.call(this.pane)
        },
        getLinePath: function (a, b) {
            var c = this.center, b = j(b, c[2] / 2 - this.offset);
            return this.chart.renderer.symbols.arc(this.left + c[0], this.top + c[1], b, b, {
                start: this.startAngleRad,
                end: this.endAngleRad,
                open: !0,
                innerR: 0
            })
        },
        setAxisTranslation: function () {
            D.setAxisTranslation.call(this), this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
        },
        beforeSetTickPositions: function () {
            this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
        },
        setAxisSize: function () {
            D.setAxisSize.call(this), this.isRadial && (this.center = this.pane.center = a.CenteredSeriesMixin.getCenter.call(this.pane), this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad), this.len = this.width = this.height = this.center[2] * j(this.sector, 1) / 2)
        },
        getPosition: function (a, b) {
            return this.postTranslate(this.isCircular ? this.translate(a) : 0, j(this.isCircular ? b : this.translate(a), this.center[2] / 2) - this.offset)
        },
        postTranslate: function (a, b) {
            var c = this.chart, d = this.center, a = this.startAngleRad + a;
            return {x: c.plotLeft + d[0] + Math.cos(a) * b, y: c.plotTop + d[1] + Math.sin(a) * b}
        },
        getPlotBandPath: function (a, b, c) {
            var d, e = this.center, f = this.startAngleRad, g = e[2] / 2,
                h = [j(c.outerRadius, "100%"), c.innerRadius, j(c.thickness, 10)], l = /%$/, m = this.isCircular;
            return "polygon" === this.options.gridLineInterpolation ? e = this.getPlotLinePath(a).concat(this.getPlotLinePath(b, !0)) : (m || (h[0] = this.translate(a), h[1] = this.translate(b)), h = i(h, function (a) {
                return l.test(a) && (a = k(a, 10) * g / 100), a
            }), "circle" !== c.shape && m ? (a = f + this.translate(a), b = f + this.translate(b)) : (a = -Math.PI / 2, b = 1.5 * Math.PI, d = !0), e = this.chart.renderer.symbols.arc(this.left + e[0], this.top + e[1], h[0], h[0], {
                start: a,
                end: b,
                innerR: j(h[1], h[0] - h[2]),
                open: d
            })), e
        },
        getPlotLinePath: function (a, b) {
            var c, d, e, g = this, h = g.center, i = g.chart, j = g.getPosition(a);
            return g.isCircular ? e = ["M", h[0] + i.plotLeft, h[1] + i.plotTop, "L", j.x, j.y] : "circle" === g.options.gridLineInterpolation ? (a = g.translate(a)) && (e = g.getLinePath(0, a)) : (f(i.xAxis, function (a) {
                a.pane === g.pane && (c = a)
            }), e = [], a = g.translate(a), h = c.tickPositions, c.autoConnect && (h = h.concat([h[0]])), b && (h = [].concat(h).reverse()), f(h, function (b, f) {
                d = c.getPosition(b, a), e.push(f ? "L" : "M", d.x, d.y)
            })), e
        },
        getTitlePosition: function () {
            var a = this.center, b = this.chart, c = this.options.title;
            return {
                x: b.plotLeft + a[0] + (c.x || 0),
                y: b.plotTop + a[1] - {high: .5, middle: .25, low: 0}[c.align] * a[2] + (c.y || 0)
            }
        }
    };
    p(D, "init", function (a, d, e) {
        var f, i, k, l = d.angular, m = d.polar, n = e.isX, p = l && n;
        k = d.options;
        var q = e.pane || 0;
        l ? (g(this, p ? E : F), (i = !n) && (this.defaultRadialOptions = this.defaultRadialGaugeOptions)) : m && (g(this, F), this.defaultRadialOptions = (i = n) ? this.defaultRadialXOptions : h(this.defaultYAxisOptions, this.defaultRadialYOptions)), a.call(this, d, e), p || !l && !m || (a = this.options, d.panes || (d.panes = []), this.pane = (f = d.panes[q] = d.panes[q] || new c(o(k.pane)[q], d, this), q = f), q = q.options, d.inverted = !1, k.chart.zoomType = null, this.startAngleRad = d = (q.startAngle - 90) * Math.PI / 180, this.endAngleRad = k = (j(q.endAngle, q.startAngle + 360) - 90) * Math.PI / 180, this.offset = a.offset || 0, (this.isCircular = i) && e.max === b && k - d === 2 * Math.PI && (this.autoConnect = !0))
    }), p(r, "getPosition", function (a, b, c, d, e) {
        var f = this.axis;
        return f.getPosition ? f.getPosition(c) : a.call(this, b, c, d, e)
    }), p(r, "getLabelPosition", function (a, b, c, d, e, f, g, h, i) {
        var k = this.axis, l = f.y, m = f.align,
            n = (k.translate(this.pos) + k.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
        return k.isRadial ? (a = k.getPosition(this.pos, k.center[2] / 2 + j(f.distance, -25)), "auto" === f.rotation ? d.attr({rotation: n}) : null === l && (l = k.chart.renderer.fontMetrics(d.styles.fontSize).b - d.getBBox().height / 2), null === m && (m = k.isCircular ? n > 20 && 160 > n ? "left" : n > 200 && 340 > n ? "right" : "center" : "center", d.attr({align: m})), a.x += f.x, a.y += l) : a = a.call(this, b, c, d, e, f, g, h, i), a
    }), p(r, "getMarkPath", function (a, b, c, d, e, f, g) {
        var h = this.axis;
        return h.isRadial ? (a = h.getPosition(this.pos, h.center[2] / 2 + d), b = ["M", b, c, "L", a.x, a.y]) : b = a.call(this, b, c, d, e, f, g), b
    }), l.arearange = h(l.area, {
        lineWidth: 1,
        marker: null,
        threshold: null,
        tooltip: {pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
        trackByArea: !0,
        dataLabels: {align: null, verticalAlign: null, xLow: 0, xHigh: 0, yLow: 0, yHigh: 0},
        states: {hover: {halo: !1}}
    }), m.arearange = n(m.area, {
        type: "arearange", pointArrayMap: ["low", "high"], toYData: function (a) {
            return [a.low, a.high]
        }, pointValKey: "low", getSegments: function () {
            var a = this;
            f(a.points, function (b) {
                a.options.connectNulls || null !== b.low && null !== b.high ? null === b.low && null !== b.high && (b.y = b.high) : b.y = null
            }), w.prototype.getSegments.call(this)
        }, translate: function () {
            var a = this.yAxis;
            m.area.prototype.translate.apply(this), f(this.points, function (b) {
                var c = b.low, d = b.high, e = b.plotY;
                null === d && null === c ? b.y = null : null === c ? (b.plotLow = b.plotY = null, b.plotHigh = a.translate(d, 0, 1, 0, 1)) : null === d ? (b.plotLow = e, b.plotHigh = null) : (b.plotLow = e, b.plotHigh = a.translate(d, 0, 1, 0, 1))
            })
        }, getSegmentPath: function (a) {
            var b, c, d, e = [], f = a.length, g = w.prototype.getSegmentPath;
            d = this.options;
            var h = d.step;
            for (b = HighchartsAdapter.grep(a, function (a) {
                return null !== a.plotLow
            }); f--;) c = a[f], null !== c.plotHigh && e.push({plotX: c.plotX, plotY: c.plotHigh});
            return a = g.call(this, b), h && (h === !0 && (h = "left"), d.step = {
                left: "right",
                center: "center",
                right: "left"
            }[h]), e = g.call(this, e), d.step = h, d = [].concat(a, e), e[0] = "L", this.areaPath = this.areaPath.concat(a, e), d
        }, drawDataLabels: function () {
            var a, b, c = this.data, d = c.length, e = [], f = w.prototype, g = this.options.dataLabels, h = g.align,
                i = this.chart.inverted;
            if (g.enabled || this._hasPointLabels) {
                for (a = d; a--;) b = c[a], b.y = b.high, b._plotY = b.plotY, b.plotY = b.plotHigh, e[a] = b.dataLabel, b.dataLabel = b.dataLabelUpper, b.below = !1, i ? (h || (g.align = "left"), g.x = g.xHigh) : g.y = g.yHigh;
                for (f.drawDataLabels && f.drawDataLabels.apply(this, arguments), a = d; a--;) b = c[a], b.dataLabelUpper = b.dataLabel, b.dataLabel = e[a], b.y = b.low, b.plotY = b._plotY, b.below = !0, i ? (h || (g.align = "right"), g.x = g.xLow) : g.y = g.yLow;
                f.drawDataLabels && f.drawDataLabels.apply(this, arguments)
            }
            g.align = h
        }, alignDataLabel: function () {
            m.column.prototype.alignDataLabel.apply(this, arguments)
        }, getSymbol: C, drawPoints: C
    }), l.areasplinerange = h(l.arearange), m.areasplinerange = n(m.arearange, {
        type: "areasplinerange",
        getPointSpline: m.spline.prototype.getPointSpline
    }), function () {
        var a = m.column.prototype;
        l.columnrange = h(l.column, l.arearange, {
            lineWidth: 1,
            pointRange: null
        }), m.columnrange = n(m.arearange, {
            type: "columnrange",
            translate: function () {
                var b, c = this, d = c.yAxis;
                a.translate.apply(c), f(c.points, function (a) {
                    var e, f = a.shapeArgs, g = c.options.minPointLength;
                    a.tooltipPos = null, a.plotHigh = b = d.translate(a.high, 0, 1, 0, 1), a.plotLow = a.plotY, e = b, a = a.plotY - b, g > a && (g -= a, a += g, e -= g / 2), f.height = a, f.y = e
                })
            },
            trackerGroups: ["group", "dataLabelsGroup"],
            drawGraph: C,
            pointAttrToOptions: a.pointAttrToOptions,
            drawPoints: a.drawPoints,
            drawTracker: a.drawTracker,
            animate: a.animate,
            getColumnMetrics: a.getColumnMetrics
        })
    }(), l.gauge = h(l.line, {
        dataLabels: {
            enabled: !0,
            defer: !1,
            y: 15,
            borderWidth: 1,
            borderColor: "silver",
            borderRadius: 3,
            crop: !1,
            style: {fontWeight: "bold"},
            verticalAlign: "top",
            zIndex: 2
        }, dial: {}, pivot: {}, tooltip: {headerFormat: ""}, showInLegend: !1
    }), v = {
        type: "gauge",
        pointClass: n(s, {
            setState: function (a) {
                this.state = a
            }
        }),
        angular: !0,
        drawGraph: C,
        fixedBox: !0,
        forceDL: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        translate: function () {
            var a = this.yAxis, b = this.options, c = a.center;
            this.generatePoints(), f(this.points, function (d) {
                var e = h(b.dial, d.dial), f = k(j(e.radius, 80)) * c[2] / 200, g = k(j(e.baseLength, 70)) * f / 100,
                    i = k(j(e.rearLength, 10)) * f / 100, l = e.baseWidth || 3, m = e.topWidth || 1, n = b.overshoot,
                    o = a.startAngleRad + a.translate(d.y, null, null, null, !0);
                n && "number" == typeof n ? (n = n / 180 * Math.PI, o = Math.max(a.startAngleRad - n, Math.min(a.endAngleRad + n, o))) : b.wrap === !1 && (o = Math.max(a.startAngleRad, Math.min(a.endAngleRad, o))), o = 180 * o / Math.PI, d.shapeType = "path", d.shapeArgs = {
                    d: e.path || ["M", -i, -l / 2, "L", g, -l / 2, f, -m / 2, f, m / 2, g, l / 2, -i, l / 2, "z"],
                    translateX: c[0],
                    translateY: c[1],
                    rotation: o
                }, d.plotX = c[0], d.plotY = c[1]
            })
        },
        drawPoints: function () {
            var a = this, b = a.yAxis.center, c = a.pivot, d = a.options, e = d.pivot, g = a.chart.renderer;
            f(a.points, function (b) {
                var c = b.graphic, e = b.shapeArgs, f = e.d, i = h(d.dial, b.dial);
                c ? (c.animate(e), e.d = f) : b.graphic = g[b.shapeType](e).attr({
                    stroke: i.borderColor || "none",
                    "stroke-width": i.borderWidth || 0,
                    fill: i.backgroundColor || "black",
                    rotation: e.rotation
                }).add(a.group)
            }), c ? c.animate({
                translateX: b[0],
                translateY: b[1]
            }) : a.pivot = g.circle(0, 0, j(e.radius, 5)).attr({
                "stroke-width": e.borderWidth || 0,
                stroke: e.borderColor || "silver",
                fill: e.backgroundColor || "black"
            }).translate(b[0], b[1]).add(a.group)
        },
        animate: function (a) {
            var b = this;
            a || (f(b.points, function (a) {
                var c = a.graphic;
                c && (c.attr({rotation: 180 * b.yAxis.startAngleRad / Math.PI}), c.animate({rotation: a.shapeArgs.rotation}, b.options.animation))
            }), b.animate = null)
        },
        render: function () {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup), w.prototype.render.call(this), this.group.clip(this.chart.clipRect)
        },
        setData: function (a, b) {
            w.prototype.setData.call(this, a, !1), this.processData(), this.generatePoints(), j(b, !0) && this.chart.redraw()
        },
        drawTracker: v && v.drawTrackerPoint
    }, m.gauge = n(m.line, v), l.boxplot = h(l.column, {
        fillColor: "#FFFFFF",
        lineWidth: 1,
        medianWidth: 2,
        states: {hover: {brightness: -.3}},
        threshold: null,
        tooltip: {pointFormat: '<span style="color:{series.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},
        whiskerLength: "50%",
        whiskerWidth: 2
    }), m.boxplot = n(m.column, {
        type: "boxplot",
        pointArrayMap: ["low", "q1", "median", "q3", "high"],
        toYData: function (a) {
            return [a.low, a.q1, a.median, a.q3, a.high]
        },
        pointValKey: "high",
        pointAttrToOptions: {fill: "fillColor", stroke: "color", "stroke-width": "lineWidth"},
        drawDataLabels: C,
        translate: function () {
            var a = this.yAxis, b = this.pointArrayMap;
            m.column.prototype.translate.apply(this), f(this.points, function (c) {
                f(b, function (b) {
                    null !== c[b] && (c[b + "Plot"] = a.translate(c[b], 0, 1, 0, 1))
                })
            })
        },
        drawPoints: function () {
            var a, c, d, e, g, h, i, k, l, m, n, o, p, q, r, s, t, u, v, w, x, A, B = this, C = B.points, D = B.options,
                E = B.chart.renderer, F = B.doQuartiles !== !1, G = parseInt(B.options.whiskerLength, 10) / 100;
            f(C, function (f) {
                l = f.graphic, x = f.shapeArgs, n = {}, q = {}, s = {}, A = f.color || B.color, f.plotY !== b && (a = f.pointAttr[f.selected ? "selected" : ""], t = x.width, u = z(x.x), v = u + t, w = y(t / 2), c = z(F ? f.q1Plot : f.lowPlot), d = z(F ? f.q3Plot : f.lowPlot), e = z(f.highPlot), g = z(f.lowPlot), n.stroke = f.stemColor || D.stemColor || A, n["stroke-width"] = j(f.stemWidth, D.stemWidth, D.lineWidth), n.dashstyle = f.stemDashStyle || D.stemDashStyle, q.stroke = f.whiskerColor || D.whiskerColor || A, q["stroke-width"] = j(f.whiskerWidth, D.whiskerWidth, D.lineWidth), s.stroke = f.medianColor || D.medianColor || A, s["stroke-width"] = j(f.medianWidth, D.medianWidth, D.lineWidth), s["stroke-linecap"] = "round", i = n["stroke-width"] % 2 / 2, k = u + w + i, m = ["M", k, d, "L", k, e, "M", k, c, "L", k, g], F && (i = a["stroke-width"] % 2 / 2, k = z(k) + i, c = z(c) + i, d = z(d) + i, u += i, v += i, o = ["M", u, d, "L", u, c, "L", v, c, "L", v, d, "L", u, d, "z"]), G && (i = q["stroke-width"] % 2 / 2, e += i, g += i, p = ["M", k - w * G, e, "L", k + w * G, e, "M", k - w * G, g, "L", k + w * G, g]), i = s["stroke-width"] % 2 / 2, h = y(f.medianPlot) + i, r = ["M", u, h, "L", v, h], l ? (f.stem.animate({d: m}), G && f.whiskers.animate({d: p}), F && f.box.animate({d: o}), f.medianShape.animate({d: r})) : (f.graphic = l = E.g().add(B.group), f.stem = E.path(m).attr(n).add(l), G && (f.whiskers = E.path(p).attr(q).add(l)), F && (f.box = E.path(o).attr(a).add(l)), f.medianShape = E.path(r).attr(s).add(l)))
            })
        }
    }), l.errorbar = h(l.boxplot, {
        color: "#000000",
        grouping: !1,
        linkedTo: ":previous",
        tooltip: {pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
        whiskerWidth: null
    }), m.errorbar = n(m.boxplot, {
        type: "errorbar",
        pointArrayMap: ["low", "high"],
        toYData: function (a) {
            return [a.low, a.high]
        },
        pointValKey: "high",
        doQuartiles: !1,
        drawDataLabels: m.arearange ? m.arearange.prototype.drawDataLabels : C,
        getColumnMetrics: function () {
            return this.linkedParent && this.linkedParent.columnMetrics || m.column.prototype.getColumnMetrics.call(this)
        }
    }), l.waterfall = h(l.column, {
        lineWidth: 1,
        lineColor: "#333",
        dashStyle: "dot",
        borderColor: "#333",
        states: {hover: {lineWidthPlus: 0}}
    }), m.waterfall = n(m.column, {
        type: "waterfall", upColorProp: "fill", pointArrayMap: ["low", "y"], pointValKey: "y", init: function (a, b) {
            b.stacking = !0, m.column.prototype.init.call(this, a, b)
        }, translate: function () {
            var a, b, c, d, e, f, g, h, i, j, k = this.yAxis;
            for (a = this.options.threshold, m.column.prototype.translate.apply(this), h = i = a, c = this.points, b = 0, a = c.length; a > b; b++) d = c[b], e = d.shapeArgs, f = this.getStack(b), j = f.points[this.index + "," + b], isNaN(d.y) && (d.y = this.yData[b]), g = A(h, h + d.y) + j[0], e.y = k.translate(g, 0, 1), d.isSum ? (e.y = k.translate(j[1], 0, 1), e.height = k.translate(j[0], 0, 1) - e.y) : d.isIntermediateSum ? (e.y = k.translate(j[1], 0, 1), e.height = k.translate(i, 0, 1) - e.y, i = j[1]) : h += f.total, e.height < 0 && (e.y += e.height, e.height *= -1), d.plotY = e.y = y(e.y) - this.borderWidth % 2 / 2, e.height = A(y(e.height), .001), d.yBottom = e.y + e.height, e = d.plotY + (d.negative ? e.height : 0), this.chart.inverted ? d.tooltipPos[0] = k.len - e : d.tooltipPos[1] = e
        }, processData: function (a) {
            var b, c, d, e, f, g, h, i = this.yData, j = this.points, k = i.length;
            for (d = c = e = f = this.options.threshold || 0, h = 0; k > h; h++) g = i[h], b = j && j[h] ? j[h] : {}, "sum" === g || b.isSum ? i[h] = d : "intermediateSum" === g || b.isIntermediateSum ? i[h] = c : (d += g, c += g), e = Math.min(d, e), f = Math.max(d, f);
            w.prototype.processData.call(this, a), this.dataMin = e, this.dataMax = f
        }, toYData: function (a) {
            return a.isSum ? 0 === a.x ? null : "sum" : a.isIntermediateSum ? 0 === a.x ? null : "intermediateSum" : a.y
        }, getAttribs: function () {
            m.column.prototype.getAttribs.apply(this, arguments);
            var b = this.options, c = b.states, d = b.upColor || this.color, b = a.Color(d).brighten(.1).get(),
                e = h(this.pointAttr), g = this.upColorProp;
            e[""][g] = d, e.hover[g] = c.hover.upColor || b, e.select[g] = c.select.upColor || d, f(this.points, function (a) {
                a.y > 0 && !a.color && (a.pointAttr = e, a.color = d)
            })
        }, getGraphPath: function () {
            var a, b, c, d = this.data, e = d.length, f = y(this.options.lineWidth + this.borderWidth) % 2 / 2, g = [];
            for (c = 1; e > c; c++) b = d[c].shapeArgs, a = d[c - 1].shapeArgs, b = ["M", a.x + a.width, a.y + f, "L", b.x, a.y + f], d[c - 1].y < 0 && (b[2] += a.height, b[5] += a.height), g = g.concat(b);
            return g
        }, getExtremes: C, getStack: function (a) {
            var b = this.yAxis.stacks, c = this.stackKey;
            return this.processedYData[a] < this.options.threshold && (c = "-" + c), b[c][a]
        }, drawGraph: w.prototype.drawGraph
    }), l.bubble = h(l.scatter, {
        dataLabels: {
            formatter: function () {
                return this.point.z
            }, inside: !0, style: {color: "white", textShadow: "0px 0px 3px black"}, verticalAlign: "middle"
        },
        marker: {lineColor: null, lineWidth: 1},
        minSize: 8,
        maxSize: "20%",
        states: {hover: {halo: {size: 5}}},
        tooltip: {pointFormat: "({point.x}, {point.y}), Size: {point.z}"},
        turboThreshold: 0,
        zThreshold: 0
    }), v = n(s, {
        haloPath: function () {
            return s.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
        }
    }), m.bubble = n(m.scatter, {
        type: "bubble",
        pointClass: v,
        pointArrayMap: ["y", "z"],
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        bubblePadding: !0,
        pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor"},
        applyOpacity: function (a) {
            var b = this.options.marker, c = j(b.fillOpacity, .5), a = a || b.fillColor || this.color;
            return 1 !== c && (a = B(a).setOpacity(c).get("rgba")), a
        },
        convertAttribs: function () {
            var a = w.prototype.convertAttribs.apply(this, arguments);
            return a.fill = this.applyOpacity(a.fill), a
        },
        getRadii: function (a, b, c, d) {
            var e, f, g, h = this.zData, i = [], j = "width" !== this.options.sizeBy;
            for (f = 0, e = h.length; e > f; f++) g = b - a, g = g > 0 ? (h[f] - a) / (b - a) : .5, j && g >= 0 && (g = Math.sqrt(g)), i.push(x.ceil(c + g * (d - c)) / 2);
            this.radii = i
        },
        animate: function (a) {
            var b = this.options.animation;
            a || (f(this.points, function (a) {
                var c = a.graphic, a = a.shapeArgs;
                c && a && (c.attr("r", 1), c.animate({r: a.r}, b))
            }), this.animate = null)
        },
        translate: function () {
            var a, c, d, e = this.data, f = this.radii;
            for (m.scatter.prototype.translate.call(this), a = e.length; a--;) c = e[a], d = f ? f[a] : 0, c.negative = c.z < (this.options.zThreshold || 0), d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = {
                x: c.plotX,
                y: c.plotY,
                r: d
            }, c.dlBox = {
                x: c.plotX - d,
                y: c.plotY - d,
                width: 2 * d,
                height: 2 * d
            }) : c.shapeArgs = c.plotY = c.dlBox = b
        },
        drawLegendSymbol: function (a, b) {
            var c = k(a.itemStyle.fontSize) / 2;
            b.legendSymbol = this.chart.renderer.circle(c, a.baseline - c, c).attr({zIndex: 3}).add(b.legendGroup), b.legendSymbol.isMarker = !0
        },
        drawPoints: m.column.prototype.drawPoints,
        alignDataLabel: m.column.prototype.alignDataLabel
    }), q.prototype.beforePadding = function () {
        var a = this, c = this.len, g = this.chart, h = 0, i = c, l = this.isXAxis, m = l ? "xData" : "yData",
            n = this.min, o = {}, p = x.min(g.plotWidth, g.plotHeight), q = Number.MAX_VALUE, r = -Number.MAX_VALUE,
            s = this.max - n, t = c / s, u = [];
        this.tickPositions && (f(this.series, function (b) {
            var c = b.options;
            !b.bubblePadding || !b.visible && g.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, u.push(b), l && (f(["minSize", "maxSize"], function (a) {
                var b = c[a], d = /%$/.test(b), b = k(b);
                o[a] = d ? p * b / 100 : b
            }), b.minPxSize = o.minSize, b = b.zData, b.length && (q = j(c.zMin, x.min(q, x.max(d(b), c.displayNegative === !1 ? c.zThreshold : -Number.MAX_VALUE))), r = j(c.zMax, x.max(r, e(b))))))
        }), f(u, function (a) {
            var b, c = a[m], d = c.length;
            if (l && a.getRadii(q, r, o.minSize, o.maxSize), s > 0) for (; d--;) "number" == typeof c[d] && (b = a.radii[d], h = Math.min((c[d] - n) * t - b, h), i = Math.max((c[d] - n) * t + b, i))
        }), u.length && s > 0 && j(this.options.min, this.userMin) === b && j(this.options.max, this.userMax) === b && (i -= c, t *= (c + h - i) / c, this.min += h / t, this.max += i / t))
    }, function () {
        function a(a, b, c) {
            a.call(this, b, c), this.chart.polar && (this.closeSegment = function (a) {
                var b = this.xAxis.center;
                a.push("L", b[0], b[1])
            }, this.closedStacks = !0)
        }

        function b(a, b) {
            var c = this.chart, d = this.options.animation, e = this.group, f = this.markerGroup, g = this.xAxis.center,
                h = c.plotLeft, i = c.plotTop;
            c.polar ? c.renderer.isSVG && (d === !0 && (d = {}), b ? (c = {
                translateX: g[0] + h,
                translateY: g[1] + i,
                scaleX: .001,
                scaleY: .001
            }, e.attr(c), f && f.attr(c)) : (c = {
                translateX: h,
                translateY: i,
                scaleX: 1,
                scaleY: 1
            }, e.animate(c, d), f && f.animate(c, d), this.animate = null)) : a.call(this, b)
        }

        var c, d = w.prototype, e = t.prototype;
        d.toXY = function (a) {
            var b, c = this.chart, d = a.plotX;
            b = a.plotY, a.rectPlotX = d, a.rectPlotY = b, d = (d / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360, 0 > d && (d += 360), a.clientX = d, b = this.xAxis.postTranslate(a.plotX, this.yAxis.len - b), a.plotX = a.polarPlotX = b.x - c.plotLeft, a.plotY = a.polarPlotY = b.y - c.plotTop
        }, d.orderTooltipPoints = function (a) {
            this.chart.polar && (a.sort(function (a, b) {
                return a.clientX - b.clientX
            }), a[0]) && (a[0].wrappedClientX = a[0].clientX + 360, a.push(a[0]))
        }, m.area && p(m.area.prototype, "init", a), m.areaspline && p(m.areaspline.prototype, "init", a), m.spline && p(m.spline.prototype, "getPointSpline", function (a, b, c, d) {
            var e, f, g, h, i, j, k;
            return this.chart.polar ? (e = c.plotX, f = c.plotY, a = b[d - 1], g = b[d + 1], this.connectEnds && (a || (a = b[b.length - 2]), g || (g = b[1])), a && g && (h = a.plotX, i = a.plotY, b = g.plotX, j = g.plotY, h = (1.5 * e + h) / 2.5, i = (1.5 * f + i) / 2.5, g = (1.5 * e + b) / 2.5, k = (1.5 * f + j) / 2.5, b = Math.sqrt(Math.pow(h - e, 2) + Math.pow(i - f, 2)), j = Math.sqrt(Math.pow(g - e, 2) + Math.pow(k - f, 2)), h = Math.atan2(i - f, h - e), i = Math.atan2(k - f, g - e), k = Math.PI / 2 + (h + i) / 2, Math.abs(h - k) > Math.PI / 2 && (k -= Math.PI), h = e + Math.cos(k) * b, i = f + Math.sin(k) * b, g = e + Math.cos(Math.PI + k) * j, k = f + Math.sin(Math.PI + k) * j, c.rightContX = g, c.rightContY = k), d ? (c = ["C", a.rightContX || a.plotX, a.rightContY || a.plotY, h || e, i || f, e, f], a.rightContX = a.rightContY = null) : c = ["M", e, f]) : c = a.call(this, b, c, d), c
        }), p(d, "translate", function (a) {
            if (a.call(this), this.chart.polar && !this.preventPostTranslate) for (var a = this.points, b = a.length; b--;) this.toXY(a[b])
        }), p(d, "getSegmentPath", function (a, b) {
            var c = this.points;
            return this.chart.polar && this.options.connectEnds !== !1 && b[b.length - 1] === c[c.length - 1] && null !== c[0].y && (this.connectEnds = !0, b = [].concat(b, [c[0]])), a.call(this, b)
        }), p(d, "animate", b), p(d, "setTooltipPoints", function (a, b) {
            return this.chart.polar && g(this.xAxis, {tooltipLen: 360}), a.call(this, b)
        }), m.column && (c = m.column.prototype, p(c, "animate", b), p(c, "translate", function (a) {
            var b, c, d = this.xAxis, e = this.yAxis.len, f = d.center, g = d.startAngleRad, h = this.chart.renderer;
            if (this.preventPostTranslate = !0, a.call(this), d.isRadial) for (d = this.points, c = d.length; c--;) b = d[c], a = b.barX + g, b.shapeType = "path", b.shapeArgs = {
                d: h.symbols.arc(f[0], f[1], e - b.plotY, null, {
                    start: a,
                    end: a + b.pointWidth,
                    innerR: e - j(b.yBottom, e)
                })
            }, this.toXY(b), b.tooltipPos = [b.plotX, b.plotY], b.ttBelow = b.plotY > f[1]
        }), p(c, "alignDataLabel", function (a, b, c, e, f, g) {
            this.chart.polar ? (a = b.rectPlotX / Math.PI * 180, null === e.align && (e.align = a > 20 && 160 > a ? "left" : a > 200 && 340 > a ? "right" : "center"), null === e.verticalAlign && (e.verticalAlign = 45 > a || a > 315 ? "bottom" : a > 135 && 225 > a ? "top" : "middle"), d.alignDataLabel.call(this, b, c, e, f, g)) : a.call(this, b, c, e, f, g)
        })), p(e, "getIndex", function (a, b) {
            var c, d, e = this.chart;
            return e.polar ? (d = e.xAxis[0].center, c = b.chartX - d[0] - e.plotLeft, e = b.chartY - d[1] - e.plotTop, c = 180 - Math.round(Math.atan2(c, e) / Math.PI * 180)) : c = a.call(this, b), c
        }), p(e, "getCoordinates", function (a, b) {
            var c = this.chart, d = {xAxis: [], yAxis: []};
            return c.polar ? f(c.axes, function (a) {
                var e = a.isXAxis, f = a.center, g = b.chartX - f[0] - c.plotLeft, f = b.chartY - f[1] - c.plotTop;
                d[e ? "xAxis" : "yAxis"].push({
                    axis: a,
                    value: a.translate(e ? Math.PI - Math.atan2(g, f) : Math.sqrt(Math.pow(g, 2) + Math.pow(f, 2)), !0)
                })
            }) : d = a.call(this, b), d
        })
    }()
}(Highcharts), function (a) {
    var b, c = a.getOptions().plotOptions, d = a.pInt, e = a.pick, f = a.each;
    c.solidgauge = a.merge(c.gauge, {colorByPoint: !0}), b = {
        initDataClasses: function (b) {
            var c, d = this, e = this.chart, g = 0, h = this.options;
            this.dataClasses = c = [], f(b.dataClasses, function (f, i) {
                var j, f = a.merge(f);
                c.push(f), f.color || ("category" === h.dataClassColor ? (j = e.options.colors, f.color = j[g++], g === j.length && (g = 0)) : f.color = d.tweenColors(a.Color(h.minColor), a.Color(h.maxColor), i / (b.dataClasses.length - 1)))
            })
        }, initStops: function (b) {
            this.stops = b.stops || [[0, this.options.minColor], [1, this.options.maxColor]], f(this.stops, function (b) {
                b.color = a.Color(b[1])
            })
        }, toColor: function (a, b) {
            var c, d, e, f, g = this.stops, h = this.dataClasses;
            if (h) {
                for (f = h.length; f--;) if (e = h[f], d = e.from, g = e.to, (void 0 === d || a >= d) && (void 0 === g || g >= a)) {
                    c = e.color, b && (b.dataClass = f);
                    break
                }
            } else {
                for (this.isLog && (a = this.val2lin(a)), c = 1 - (this.max - a) / (this.max - this.min), f = g.length; f-- && !(c > g[f][0]);) ;
                d = g[f] || g[f + 1], g = g[f + 1] || d, c = 1 - (g[0] - c) / (g[0] - d[0] || 1), c = this.tweenColors(d.color, g.color, c)
            }
            return c
        }, tweenColors: function (a, b, c) {
            var d = 1 !== b.rgba[3] || 1 !== a.rgba[3];
            return 0 === a.rgba.length || 0 === b.rgba.length ? "none" : (d ? "rgba(" : "rgb(") + Math.round(b.rgba[0] + (a.rgba[0] - b.rgba[0]) * (1 - c)) + "," + Math.round(b.rgba[1] + (a.rgba[1] - b.rgba[1]) * (1 - c)) + "," + Math.round(b.rgba[2] + (a.rgba[2] - b.rgba[2]) * (1 - c)) + (d ? "," + (b.rgba[3] + (a.rgba[3] - b.rgba[3]) * (1 - c)) : "") + ")"
        }
    }, a.seriesTypes.solidgauge = a.extendClass(a.seriesTypes.gauge, {
        type: "solidgauge", bindAxes: function () {
            var c;
            a.seriesTypes.gauge.prototype.bindAxes.call(this), c = this.yAxis, a.extend(c, b), c.options.dataClasses && c.initDataClasses(c.options), c.initStops(c.options)
        }, drawPoints: function () {
            var c = this, f = c.yAxis, g = f.center, h = c.options, i = c.chart.renderer;
            a.each(c.points, function (j) {
                var k, l = j.graphic, m = f.startAngleRad + f.translate(j.y, null, null, null, !0),
                    n = d(e(h.radius, 100)) * g[2] / 200, o = d(e(h.innerRadius, 60)) * g[2] / 200,
                    p = f.toColor(j.y, j);
                "none" !== p && (k = j.color, j.color = p), h.wrap === !1 && (m = Math.max(f.startAngleRad, Math.min(f.endAngleRad, m)));
                var m = 180 * m / Math.PI, q = m / (180 / Math.PI), r = f.startAngleRad, m = Math.min(q, r),
                    q = Math.max(q, r);
                q - m > 2 * Math.PI && (q = m + 2 * Math.PI), n = {
                    x: g[0],
                    y: g[1],
                    r: n,
                    innerR: o,
                    start: m,
                    end: q
                }, l ? (o = n.d, l.attr({fill: j.color}).animate(n, {
                    step: function (c, d) {
                        l.attr("fill", b.tweenColors(a.Color(k), a.Color(p), d.pos))
                    }
                }), n.d = o) : j.graphic = i.arc(n).attr({
                    stroke: h.borderColor || "none",
                    "stroke-width": h.borderWidth || 0,
                    fill: j.color,
                    "sweep-flag": 0
                }).add(c.group)
            })
        }, animate: null
    })
}(Highcharts), function () {
    "use strict";

    function a(b, d) {
        function e(a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }

        var f;
        if (d = d || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = d.touchBoundary || 10, this.layer = b, this.tapDelay = d.tapDelay || 200, this.tapTimeout = d.tapTimeout || 700, !a.notNeeded(b)) {
            for (var g = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], h = this, i = 0, j = g.length; j > i; i++) h[g[i]] = e(h[g[i]], h);
            c && (b.addEventListener("mouseover", this.onMouse, !0), b.addEventListener("mousedown", this.onMouse, !0), b.addEventListener("mouseup", this.onMouse, !0)), b.addEventListener("click", this.onClick, !0), b.addEventListener("touchstart", this.onTouchStart, !1), b.addEventListener("touchmove", this.onTouchMove, !1), b.addEventListener("touchend", this.onTouchEnd, !1), b.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (b.removeEventListener = function (a, c, d) {
                var e = Node.prototype.removeEventListener;
                "click" === a ? e.call(b, a, c.hijacked || c, d) : e.call(b, a, c, d)
            }, b.addEventListener = function (a, c, d) {
                var e = Node.prototype.addEventListener;
                "click" === a ? e.call(b, a, c.hijacked || (c.hijacked = function (a) {
                    a.propagationStopped || c(a)
                }), d) : e.call(b, a, c, d)
            }), "function" == typeof b.onclick && (f = b.onclick, b.addEventListener("click", function (a) {
                f(a)
            }, !1), b.onclick = null)
        }
    }

    var b = navigator.userAgent.indexOf("Windows Phone") >= 0, c = navigator.userAgent.indexOf("Android") > 0 && !b,
        d = /iP(ad|hone|od)/.test(navigator.userAgent) && !b, e = d && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        f = d && /OS [6-7]_\d/.test(navigator.userAgent), g = navigator.userAgent.indexOf("BB10") > 0;
    a.prototype.needsClick = function (a) {
        switch (a.nodeName.toLowerCase()) {
            case"button":
            case"select":
            case"textarea":
                if (a.disabled) return !0;
                break;
            case"input":
                if (d && "file" === a.type || a.disabled) return !0;
                break;
            case"label":
            case"iframe":
            case"video":
                return !0
        }
        return /\bneedsclick\b/.test(a.className)
    }, a.prototype.needsFocus = function (a) {
        switch (a.nodeName.toLowerCase()) {
            case"textarea":
                return !0;
            case"select":
                return !c;
            case"input":
                switch (a.type) {
                    case"button":
                    case"checkbox":
                    case"file":
                    case"image":
                    case"radio":
                    case"submit":
                        return !1
                }
                return !a.disabled && !a.readOnly;
            default:
                return /\bneedsfocus\b/.test(a.className)
        }
    }, a.prototype.sendClick = function (a, b) {
        var c, d;
        document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, a.dispatchEvent(c)
    }, a.prototype.determineEventType = function (a) {
        return c && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
    }, a.prototype.focus = function (a) {
        var b;
        d && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type && "month" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
    }, a.prototype.updateScrollParent = function (a) {
        var b, c;
        if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
            c = a;
            do {
                if (c.scrollHeight > c.offsetHeight) {
                    b = c, a.fastClickScrollParent = c;
                    break
                }
                c = c.parentElement
            } while (c)
        }
        b && (b.fastClickLastScrollTop = b.scrollTop)
    }, a.prototype.getTargetElementFromEventTarget = function (a) {
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
    }, a.prototype.onTouchStart = function (a) {
        var b, c, f;
        if (a.targetTouches.length > 1) return !0;
        if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], d) {
            if (f = window.getSelection(), f.rangeCount && !f.isCollapsed) return !0;
            if (!e) {
                if (c.identifier && c.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault(), !0
    }, a.prototype.touchHasMoved = function (a) {
        var b = a.changedTouches[0], c = this.touchBoundary;
        return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1
    }, a.prototype.onTouchMove = function (a) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, a.prototype.findControl = function (a) {
        return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, a.prototype.onTouchEnd = function (a) {
        var b, g, h, i, j, k = this.targetElement;
        if (!this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (a.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = a.timeStamp, g = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, f && (j = a.changedTouches[0], k = document.elementFromPoint(j.pageX - window.pageXOffset, j.pageY - window.pageYOffset) || k, k.fastClickScrollParent = this.targetElement.fastClickScrollParent), h = k.tagName.toLowerCase(), "label" === h) {
            if (b = this.findControl(k)) {
                if (this.focus(k), c) return !1;
                k = b
            }
        } else if (this.needsFocus(k)) return a.timeStamp - g > 100 || d && window.top !== window && "input" === h ? (this.targetElement = null, !1) : (this.focus(k), this.sendClick(k, a), d && "select" === h || (this.targetElement = null, a.preventDefault()), !1);
        return d && !e && (i = k.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 : (this.needsClick(k) || (a.preventDefault(), this.sendClick(k, a)), !1)
    }, a.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, a.prototype.onMouse = function (a) {
        return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
    }, a.prototype.onClick = function (a) {
        var b;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
    }, a.prototype.destroy = function () {
        var a = this.layer;
        c && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, a.notNeeded = function (a) {
        var b, d, e, f;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (d = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!c) return !0;
            if (b = document.querySelector("meta[name=viewport]")) {
                if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
                if (d > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (g && (e = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), e[1] >= 10 && e[2] >= 3 && (b = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === a.style.msTouchAction || "manipulation" === a.style.touchAction ? !0 : (f = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], f >= 27 && (b = document.querySelector("meta[name=viewport]"), b && (-1 !== b.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.touchAction || "manipulation" === a.style.touchAction ? !0 : !1)
    }, a.attach = function (b, c) {
        return new a(b, c)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return a
    }) : "undefined" != typeof module && module.exports ? (module.exports = a.attach, module.exports.FastClick = a) : window.FastClick = a
}(), function (a, b, c, d) {
    "use strict";

    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), a
    }

    function f(a) {
        this.selector = a, this.query = ""
    }

    var g = function (b) {
        var c = a("head");
        c.prepend(a.map(b, function (a) {
            return 0 === c.has("." + a).length ? '<meta class="' + a + '" />' : void 0
        }))
    };
    g(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), a(function () {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
    });
    var h = function (b, d) {
        if ("string" == typeof b) {
            if (d) {
                var e;
                if (d.jquery) {
                    if (e = d[0], !e) return d
                } else e = d;
                return a(e.querySelectorAll(b))
            }
            return a(c.querySelectorAll(b))
        }
        return a(b, d)
    }, i = function (a) {
        var b = [];
        return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), b.push(this.name), b.join("-")
    }, j = function (a) {
        for (var b = a.split("-"), c = b.length, d = []; c--;) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
        return d.reverse().join("-")
    }, k = function (b, c) {
        var d = this, e = function () {
            var e = h(this), f = !e.data(d.attr_name(!0) + "-init");
            e.data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(e))), f && d.events(this)
        };
        return h(this.scope).is("[" + this.attr_name() + "]") ? e.call(this.scope) : h("[" + this.attr_name() + "]", this.scope).each(e), "string" == typeof b ? this[b].call(this, c) : void 0
    }, l = function (a, b) {
        function c() {
            b(a[0])
        }

        function d() {
            if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var a = this.attr("src"), b = a.match(/\?/) ? "&" : "?";
                b += "random=" + (new Date).getTime(), this.attr("src", a + b)
            }
        }

        return a.attr("src") ? void (a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
    };
    b.matchMedia || (b.matchMedia = function () {
        var a = b.styleMedia || b.media;
        if (!a) {
            var d = c.createElement("style"), e = c.getElementsByTagName("script")[0], f = null;
            d.type = "text/css", d.id = "matchmediajs-test", e.parentNode.insertBefore(d, e), f = "getComputedStyle" in b && b.getComputedStyle(d, null) || d.currentStyle, a = {
                matchMedium: function (a) {
                    var b = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                    return d.styleSheet ? d.styleSheet.cssText = b : d.textContent = b, "1px" === f.width
                }
            }
        }
        return function (b) {
            return {matches: a.matchMedium(b || "all"), media: b || "all"}
        }
    }()), function (a) {
        function c() {
            d && (g(c), i && a.fx.tick())
        }

        for (var d, e = 0, f = ["webkit", "moz"], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof a.fx; e < f.length && !g; e++) g = b[f[e] + "RequestAnimationFrame"], h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
        g ? (b.requestAnimationFrame = g, b.cancelAnimationFrame = h, i && (a.fx.timer = function (b) {
            b() && a.timers.push(b) && !d && (d = !0, c())
        }, a.fx.stop = function () {
            d = !1
        })) : (b.requestAnimationFrame = function (a) {
            var c = (new Date).getTime(), d = Math.max(0, 16 - (c - e)), f = b.setTimeout(function () {
                a(c + d)
            }, d);
            return e = c + d, f
        }, b.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    }(a), f.prototype.toString = function () {
        return this.query || (this.query = h(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""))
    }, b.Foundation = {
        name: "Foundation",
        version: "5.5.3",
        media_queries: {
            small: new f(".foundation-mq-small"),
            "small-only": new f(".foundation-mq-small-only"),
            medium: new f(".foundation-mq-medium"),
            "medium-only": new f(".foundation-mq-medium-only"),
            large: new f(".foundation-mq-large"),
            "large-only": new f(".foundation-mq-large-only"),
            xlarge: new f(".foundation-mq-xlarge"),
            "xlarge-only": new f(".foundation-mq-xlarge-only"),
            xxlarge: new f(".foundation-mq-xxlarge")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {namespace: d},
        init: function (a, c, d, e, f) {
            var g = [a, d, e, f], i = [];
            if (this.rtl = /rtl/i.test(h("html").attr("dir")), this.scope = a || this.scope, this.set_namespace(), c && "string" == typeof c && !/reflow/i.test(c)) this.libs.hasOwnProperty(c) && i.push(this.init_lib(c, g)); else for (var j in this.libs) i.push(this.init_lib(j, c));
            return h(b).load(function () {
                h(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
            }), a
        },
        init_lib: function (b, c) {
            return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c), this.libs[b].init.apply(this.libs[b], c))) : function () {
            }
        },
        patch: function (a) {
            a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, a.attr_name = i, a.add_namespace = j, a.bindings = k, a.S = this.utils.S
        },
        inherit: function (a, b) {
            for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
        },
        set_namespace: function () {
            var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === d || /false/i.test(b) ? "" : b
        },
        libs: {},
        utils: {
            S: h, throttle: function (a, b) {
                var c = null;
                return function () {
                    var d = this, e = arguments;
                    null == c && (c = setTimeout(function () {
                        a.apply(d, e), c = null
                    }, b))
                }
            }, debounce: function (a, b, c) {
                var d, e;
                return function () {
                    var f = this, g = arguments, h = function () {
                        d = null, c || (e = a.apply(f, g))
                    }, i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
                }
            }, data_options: function (b, c) {
                function d(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
                }

                function e(b) {
                    return "string" == typeof b ? a.trim(b) : b
                }

                c = c || "options";
                var f, g, h, i = {}, j = function (a) {
                    var b = Foundation.global.namespace;
                    return a.data(b.length > 0 ? b + "-" + c : c)
                }, k = j(b);
                if ("object" == typeof k) return k;
                for (h = (k || ":").split(";"), f = h.length; f--;) g = h[f].split(":"), g = [g[0], g.slice(1).join(":")], /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (-1 === g[1].indexOf(".") ? g[1] = parseInt(g[1], 10) : g[1] = parseFloat(g[1])), 2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                return i
            }, register_media: function (b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
            }, add_custom_rule: function (a, b) {
                if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length); else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }", Foundation.stylesheet.cssRules.length)
                }
            }, image_loaded: function (a, b) {
                function c(a) {
                    for (var b = a.length, c = b - 1; c >= 0; c--) if (a.attr("height") === d) return !1;
                    return !0
                }

                var e = this, f = a.length;
                (0 === f || c(a)) && b(a), a.each(function () {
                    l(e.S(this), function () {
                        f -= 1, 0 === f && b(a)
                    })
                })
            }, random_str: function () {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
            }, match: function (a) {
                return b.matchMedia(a).matches
            }, is_small_up: function () {
                return this.match(Foundation.media_queries.small)
            }, is_medium_up: function () {
                return this.match(Foundation.media_queries.medium)
            }, is_large_up: function () {
                return this.match(Foundation.media_queries.large)
            }, is_xlarge_up: function () {
                return this.match(Foundation.media_queries.xlarge)
            }, is_xxlarge_up: function () {
                return this.match(Foundation.media_queries.xxlarge)
            }, is_small_only: function () {
                return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
            }, is_medium_only: function () {
                return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            }, is_large_only: function () {
                return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            }, is_xlarge_only: function () {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
            }, is_xxlarge_only: function () {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
            }
        }
    }, a.fn.foundation = function () {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            return Foundation.init.apply(Foundation, [this].concat(a)), this
        })
    }
}(jQuery, window, window.document), function (a, b, c, d) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.3",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function () {
            }
        },
        init: function (a, b, c) {
            this.bindings(b, c)
        },
        events: function (b) {
            var c = this, d = this.S;
            c.create(this.S(b)), d(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a, [" + this.attr_name() + "] > li > a", function (b) {
                var e = d(this).closest("[" + c.attr_name() + "]"), f = c.attr_name() + "=" + e.attr(c.attr_name()),
                    g = e.data(c.attr_name(!0) + "-init") || c.settings, h = d("#" + this.href.split("#")[1]),
                    i = a("> dd, > li", e), j = i.children("." + g.content_class), k = j.filter("." + g.active_class);
                return b.preventDefault(), e.attr(c.attr_name()) && (j = j.add("[" + f + "] dd > ." + g.content_class + ", [" + f + "] li > ." + g.content_class), i = i.add("[" + f + "] dd, [" + f + "] li")), g.toggleable && h.is(k) ? (h.parent("dd, li").toggleClass(g.active_class, !1), h.toggleClass(g.active_class, !1), d(this).attr("aria-expanded", function (a, b) {
                    return "true" === b ? "false" : "true"
                }), g.callback(h), h.triggerHandler("toggled", [e]), void e.triggerHandler("toggled", [h])) : (g.multi_expand || (j.removeClass(g.active_class), i.removeClass(g.active_class), i.children("a").attr("aria-expanded", "false")), h.addClass(g.active_class).parent().addClass(g.active_class), g.callback(h), h.triggerHandler("toggled", [e]), e.triggerHandler("toggled", [h]), void d(this).attr("aria-expanded", "true"))
            })
        },
        create: function (b) {
            var c = this, d = b, e = a("> .accordion-navigation", d),
                f = d.data(c.attr_name(!0) + "-init") || c.settings;
            e.children("a").attr("aria-expanded", "false"), e.has("." + f.content_class + "." + f.active_class).addClass(f.active_class).children("a").attr("aria-expanded", "true"), f.multi_expand && b.attr("aria-multiselectable", "true")
        },
        toggle: function (a) {
            var a = "undefined" != typeof a ? a : {}, c = "undefined" != typeof a.selector ? a.selector : "",
                d = "undefined" != typeof a.toggle_state ? a.toggle_state : "",
                e = "undefined" != typeof a.$accordion ? a.$accordion : this.S(this.scope).closest("[" + this.attr_name() + "]"),
                f = e.find("> dd" + c + ", > li" + c);
            if (f.length < 1) return b.console && console.error("Selection not found.", c), !1;
            var g = this.S, h = this.settings.active_class;
            f.each(function () {
                var a = g(this), b = a.hasClass(h);
                (b && "close" === d || !b && "open" === d || "" === d) && a.find("> a").trigger("click.fndtn.accordion")
            })
        },
        open: function (a) {
            var a = "undefined" != typeof a ? a : {};
            a.toggle_state = "open", this.toggle(a)
        },
        close: function (a) {
            var a = "undefined" != typeof a ? a : {};
            a.toggle_state = "close", this.toggle(a)
        },
        off: function () {
        },
        reflow: function () {
        }
    }
}(jQuery, window, window.document), function (a, b, c, d) {
    "use strict";

    function e(a) {
        var b = /fade/i.test(a), c = /pop/i.test(a);
        return {animate: b || c, pop: c, fade: b}
    }

    var f = [];
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.5.3",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            multiple_opened: !1,
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function () {
            },
            opened: function () {
            },
            close: function () {
            },
            closed: function () {
            },
            on_ajax_error: a.noop,
            bg: a(".reveal-modal-bg"),
            css: {
                open: {opacity: 0, visibility: "visible", display: "block"},
                close: {opacity: 1, visibility: "hidden", display: "none"}
            }
        },
        init: function (b, c, d) {
            a.extend(!0, this.settings, c, d), this.bindings(c, d)
        },
        events: function (a) {
            var b = this, d = b.S;
            return d(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function (a) {
                if (a.preventDefault(), !b.locked) {
                    var c = d(this), e = c.data(b.data_attr("reveal-ajax")),
                        f = c.data(b.data_attr("reveal-replace-content"));
                    if (b.locked = !0, "undefined" == typeof e) b.open.call(b, c); else {
                        var g = e === !0 ? c.attr("href") : e;
                        b.open.call(b, c, {url: g}, {replaceContentSel: f})
                    }
                }
            }), d(c).on("click.fndtn.reveal", this.close_targets(), function (a) {
                if (a.preventDefault(), !b.locked) {
                    var c = d("[" + b.attr_name() + "].open").data(b.attr_name(!0) + "-init") || b.settings,
                        e = d(a.target)[0] === d("." + c.bg_class)[0];
                    if (e) {
                        if (!c.close_on_background_click) return;
                        a.stopPropagation()
                    }
                    b.locked = !0, b.close.call(b, e ? d("[" + b.attr_name() + "].open:not(.toback)") : d(this).closest("[" + b.attr_name() + "]"))
                }
            }), d("[" + b.attr_name() + "]", this.scope).length > 0 ? d(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : d(this.scope).on("open.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + b.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + b.attr_name() + "]", this.close_video), !0
        },
        key_up_on: function (a) {
            var b = this;
            return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (a) {
                var c = b.S("[" + b.attr_name() + "].open"), d = c.data(b.attr_name(!0) + "-init") || b.settings;
                d && 27 === a.which && d.close_on_esc && !b.locked && b.close.call(b, c)
            }), !0
        },
        key_up_off: function (a) {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        },
        open: function (c, e) {
            var g, h = this;
            c ? "undefined" != typeof c.selector ? g = h.S("#" + c.data(h.data_attr("reveal-id"))).first() : (g = h.S(this.scope), e = c) : g = h.S(this.scope);
            var i = g.data(h.attr_name(!0) + "-init");
            if (i = i || this.settings, g.hasClass("open") && c !== d && c.attr("data-reveal-id") == g.attr("id")) return h.close(g);
            if (!g.hasClass("open")) {
                var j = h.S("[" + h.attr_name() + "].open");
                "undefined" == typeof g.data("css-top") && g.data("css-top", parseInt(g.css("top"), 10)).data("offset", this.cache_offset(g)), g.attr("tabindex", "0").attr("aria-hidden", "false"), this.key_up_on(g), g.on("open.fndtn.reveal", function (a) {
                    "fndtn.reveal" !== a.namespace
                }), g.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), j.length < 1 && this.toggle_bg(g, !0), "string" == typeof e && (e = {url: e});
                var k = function () {
                    j.length > 0 && (i.multiple_opened ? h.to_back(j) : h.hide(j, i.css.close)), i.multiple_opened && f.push(g), h.show(g, i.css.open)
                };
                if ("undefined" != typeof e && e.url) {
                    var l = "undefined" != typeof e.success ? e.success : null;
                    a.extend(e, {
                        success: function (b, c, d) {
                            if (a.isFunction(l)) {
                                var e = l(b, c, d);
                                "string" == typeof e && (b = e)
                            }
                            "undefined" != typeof options && "undefined" != typeof options.replaceContentSel ? g.find(options.replaceContentSel).html(b) : g.html(b), h.S(g).foundation("section", "reflow"), h.S(g).children().foundation(), k()
                        }
                    }), i.on_ajax_error !== a.noop && a.extend(e, {error: i.on_ajax_error}), a.ajax(e)
                } else k()
            }
            h.S(b).trigger("resize")
        },
        close: function (b) {
            var b = b && b.length ? b : this.S(this.scope), c = this.S("[" + this.attr_name() + "].open"),
                d = b.data(this.attr_name(!0) + "-init") || this.settings, e = this;
            if (c.length > 0) if (b.removeAttr("tabindex", "0").attr("aria-hidden", "true"), this.locked = !0, this.key_up_off(b), b.trigger("close.fndtn.reveal"), (d.multiple_opened && 1 === c.length || !d.multiple_opened || b.length > 1) && (e.toggle_bg(b, !1), e.to_front(b)), d.multiple_opened) {
                var g = b.is(":not(.toback)");
                e.hide(b, d.css.close, d), g ? f.pop() : f = a.grep(f, function (a) {
                    var c = a[0] === b[0];
                    return c && e.to_front(b), !c
                }), f.length > 0 && e.to_front(f[f.length - 1])
            } else e.hide(c, d.css.close, d)
        },
        close_targets: function () {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function (b, c) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {"class": this.settings.bg_class}).appendTo("body").hide());
            var e = this.settings.bg.filter(":visible").length > 0;
            c != e && ((c == d ? e : !c) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function (c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init") || this.settings, g = f.root_element, h = this;
                if (0 === c.parent(g).length) {
                    var i = c.wrap('<div style="display: none;" />').parent();
                    c.on("closed.fndtn.reveal.wrapped", function () {
                        c.detach().appendTo(i), c.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), c.detach().appendTo(g)
                }
                var j = e(f.animation);
                if (j.animate || (this.locked = !1), j.pop) {
                    d.top = a(b).scrollTop() - c.data("offset") + "px";
                    var k = {top: a(b).scrollTop() + c.data("css-top") + "px", opacity: 1};
                    return setTimeout(function () {
                        return c.css(d).animate(k, f.animation_speed, "linear", function () {
                            h.locked = !1, c.trigger("opened.fndtn.reveal")
                        }).addClass("open")
                    }, f.animation_speed / 2)
                }
                if (d.top = a(b).scrollTop() + c.data("css-top") + "px", j.fade) {
                    var k = {opacity: 1};
                    return setTimeout(function () {
                        return c.css(d).animate(k, f.animation_speed, "linear", function () {
                            h.locked = !1, c.trigger("opened.fndtn.reveal")
                        }).addClass("open")
                    }, f.animation_speed / 2)
                }
                return c.css(d).show().css({opacity: 1}).addClass("open").trigger("opened.fndtn.reveal")
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, c.show())
        },
        to_back: function (a) {
            a.addClass("toback")
        },
        to_front: function (a) {
            a.removeClass("toback")
        },
        hide: function (c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init"), g = this;
                f = f || this.settings;
                var h = e(f.animation);
                if (h.animate || (this.locked = !1), h.pop) {
                    var i = {top: -a(b).scrollTop() - c.data("offset") + "px", opacity: 0};
                    return setTimeout(function () {
                        return c.animate(i, f.animation_speed, "linear", function () {
                            g.locked = !1, c.css(d).trigger("closed.fndtn.reveal")
                        }).removeClass("open")
                    }, f.animation_speed / 2)
                }
                if (h.fade) {
                    var i = {opacity: 0};
                    return setTimeout(function () {
                        return c.animate(i, f.animation_speed, "linear", function () {
                            g.locked = !1, c.css(d).trigger("closed.fndtn.reveal")
                        }).removeClass("open")
                    }, f.animation_speed / 2)
                }
                return c.hide().css(d).removeClass("open").trigger("closed.fndtn.reveal")
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide()
        },
        close_video: function (b) {
            var c = a(".flex-video", b.target), d = a("iframe", c);
            d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", d.attr("src")), c.hide())
        },
        open_video: function (b) {
            var c = a(".flex-video", b.target), e = c.find("iframe");
            if (e.length > 0) {
                var f = e.attr("data-src");
                if ("string" == typeof f) e[0].src = e.attr("data-src"); else {
                    var g = e[0].src;
                    e[0].src = d, e[0].src = g
                }
                c.show()
            }
        },
        data_attr: function (a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        cache_offset: function (a) {
            var b = a.show().height() + parseInt(a.css("top"), 10) + a.scrollY;
            return a.hide(), b
        },
        off: function () {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function () {
        }
    }
}(jQuery, window, window.document), function (a, b, c, d) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.5.3",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            fade_in_duration: 150,
            fade_out_duration: 150,
            show_on: "all",
            tip_template: function (a, b) {
                return '<span data-selector="' + a + '" id="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + b + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function (a, b, c) {
            Foundation.inherit(this, "random_str"), this.bindings(b, c)
        },
        should_show: function (b, c) {
            var d = a.extend({}, this.settings, this.data_options(b));
            return "all" === d.show_on ? !0 : this.small() && "small" === d.show_on ? !0 : this.medium() && "medium" === d.show_on ? !0 : this.large() && "large" === d.show_on ? !0 : !1
        },
        medium: function () {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function () {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function (b) {
            function c(a, b, c) {
                a.timer || (c ? (a.timer = null, e.showTip(b)) : a.timer = setTimeout(function () {
                    a.timer = null, e.showTip(b)
                }.bind(a), e.settings.hover_delay))
            }

            function d(a, b) {
                a.timer && (clearTimeout(a.timer), a.timer = null), e.hide(b)
            }

            var e = this, f = e.S;
            e.create(this.S(b)), a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function (b) {
                var g = f(this), h = a.extend({}, e.settings, e.data_options(g)), i = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && f(b.target).is("a")) return !1;
                if (/mouse/i.test(b.type) && e.ie_touch(b)) return !1;
                if (g.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && b.preventDefault(), e.hide(g); else {
                    if (h.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type)) return;
                    if (!h.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && (b.preventDefault(), f(h.tooltip_class + ".open").hide(), i = !0, a(".open[" + e.attr_name() + "]").length > 0)) {
                        var j = f(a(".open[" + e.attr_name() + "]")[0]);
                        e.hide(j)
                    }
                    /enter|over/i.test(b.type) ? c(this, g) : "mouseout" === b.type || "mouseleave" === b.type ? d(this, g) : c(this, g, !0)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function (b) {
                return /mouse/i.test(b.type) && e.ie_touch(b) ? !1 : void (("touch" != a(this).data("tooltip-open-event-type") || "mouseleave" != b.type) && ("mouse" == a(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(b.type) ? e.convert_to_touch(a(this)) : d(this, a(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function (a) {
                d(this, f(this))
            })
        },
        ie_touch: function (a) {
            return !1
        },
        showTip: function (a) {
            var b = this.getTip(a);
            return this.should_show(a, b) ? this.show(a) : void 0
        },
        getTip: function (b) {
            var c = this.selector(b), d = a.extend({}, this.settings, this.data_options(b)), e = null;
            return c && (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)), "object" == typeof e ? e : !1
        },
        selector: function (a) {
            var b = a.attr(this.attr_name()) || a.attr("data-selector");
            return "string" != typeof b && (b = this.random_str(6), a.attr("data-selector", b).attr("aria-describedby", b)), b
        },
        create: function (c) {
            var d = this, e = a.extend({}, this.settings, this.data_options(c)), f = this.settings.tip_template;
            "string" == typeof e.tip_template && b.hasOwnProperty(e.tip_template) && (f = b[e.tip_template]);
            var g = a(f(this.selector(c), a("<div></div>").html(c.attr("title")).html())),
                h = this.inheritable_classes(c);
            g.addClass(h).appendTo(e.append_to), Modernizr.touch && (g.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function (a) {
                d.hide(c)
            })), c.removeAttr("title").attr("title", "")
        },
        reposition: function (b, c, d) {
            var e, f, g, h, i;
            c.css("visibility", "hidden").show(), e = b.data("width"), f = c.children(".nub"), g = f.outerHeight(), h = f.outerWidth(), c.css(this.small() ? {width: "100%"} : {width: e ? e : "auto"}), i = function (a, b, c, d, e, f) {
                return a.css({
                    top: b ? b : "auto",
                    bottom: d ? d : "auto",
                    left: e ? e : "auto",
                    right: c ? c : "auto"
                }).end()
            };
            var j = b.offset().top, k = b.offset().left, l = b.outerHeight();
            if (i(c, j + l + 10, "auto", "auto", k), this.small()) i(c, j + l + 10, "auto", "auto", 12.5, a(this.scope).width()), c.addClass("tip-override"), i(f, -g, "auto", "auto", k); else {
                Foundation.rtl && (f.addClass("rtl"), k = k + b.outerWidth() - c.outerWidth()), i(c, j + l + 10, "auto", "auto", k), f.attr("style") && f.removeAttr("style"), c.removeClass("tip-override");
                var m = c.outerHeight();
                d && d.indexOf("tip-top") > -1 ? (Foundation.rtl && f.addClass("rtl"), i(c, j - m, "auto", "auto", k).removeClass("tip-override")) : d && d.indexOf("tip-left") > -1 ? (i(c, j + l / 2 - m / 2, "auto", "auto", k - c.outerWidth() - g).removeClass("tip-override"), f.removeClass("rtl")) : d && d.indexOf("tip-right") > -1 && (i(c, j + l / 2 - m / 2, "auto", "auto", k + b.outerWidth() + g).removeClass("tip-override"), f.removeClass("rtl"))
            }
            c.css("visibility", "visible").hide()
        },
        small: function () {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function (b) {
            var c = a.extend({}, this.settings, this.data_options(b)),
                d = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(c.additional_inheritable_classes),
                e = b.attr("class"), f = e ? a.map(e.split(" "), function (b, c) {
                    return -1 !== a.inArray(b, d) ? b : void 0
                }).join(" ") : "";
            return a.trim(f)
        },
        convert_to_touch: function (b) {
            var c = this, d = c.getTip(b), e = a.extend({}, c.settings, c.data_options(b));
            0 === d.find(".tap-to-close").length && (d.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function (a) {
                c.hide(b)
            })), b.data("tooltip-open-event-type", "touch")
        },
        show: function (a) {
            var b = this.getTip(a);
            "touch" == a.data("tooltip-open-event-type") && this.convert_to_touch(a), this.reposition(a, b, a.attr("class")), a.addClass("open"), b.fadeIn(this.settings.fade_in_duration)
        },
        hide: function (a) {
            var b = this.getTip(a);
            b.fadeOut(this.settings.fade_out_duration, function () {
                b.find(".tap-to-close").remove(), b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), a.removeClass("open")
            })
        },
        off: function () {
            var b = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function (c) {
                a("[" + b.attr_name() + "]").eq(c).attr("title", a(this).text())
            }).remove()
        },
        reflow: function () {
        }
    }
}(jQuery, window, window.document), function (a) {
    "use strict";

    function b(b, c, d, e) {
        var f = d.type;
        d.type = c, e ? a.event.trigger(d, void 0, b) : a.event.dispatch.call(b, d), d.type = f
    }

    var c = a(document);
    a.each("swipe swipeleft swiperight".split(" "), function (b, c) {
        a.fn[c] = function (a) {
            return a ? this.on(c, a) : this.trigger(c)
        }, a.attrFn && (a.attrFn[c] = !0)
    }), a.event.special.swipe = {
        scrollSupressionThreshold: 22,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 22,
        verticalDistanceThreshold: 22,
        getLocation: function (a) {
            var b = window.pageXOffset, c = window.pageYOffset, d = a.clientX, e = a.clientY;
            return 0 === a.pageY && Math.floor(e) > Math.floor(a.pageY) || 0 === a.pageX && Math.floor(d) > Math.floor(a.pageX) ? (d -= b, e -= c) : (e < a.pageY - c || d < a.pageX - b) && (d = a.pageX - b, e = a.pageY - c), {
                x: d,
                y: e
            }
        },
        start: function (b) {
            var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b, d = a.event.special.swipe.getLocation(c);
            return {time: (new Date).getTime(), coords: [d.x, d.y], origin: a(b.target)}
        },
        stop: function (b) {
            var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b, d = a.event.special.swipe.getLocation(c);
            return {time: (new Date).getTime(), coords: [d.x, d.y]}
        },
        handleSwipe: function (c, d, e, f) {
            if (d.time - c.time < a.event.special.swipe.durationThreshold && Math.abs(c.coords[0] - d.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(c.coords[1] - d.coords[1]) < a.event.special.swipe.verticalDistanceThreshold) {
                var g = c.coords[0] > d.coords[0] ? "swipeleft" : "swiperight";
                return b(e, "swipe", a.Event("swipe", {
                    target: f,
                    swipestart: c,
                    swipestop: d
                }), !0), b(e, g, a.Event(g, {target: f, swipestart: c, swipestop: d}), !0), !0
            }
            return !1
        },
        eventInProgress: !1,
        setup: function () {
            var b, d = this, e = a(d), f = {};
            b = a.data(this, "mobile-events"), b || (b = {length: 0}, a.data(this, "mobile-events", b)), b.length++, b.swipe = f, f.start = function (b) {
                if (!a.event.special.swipe.eventInProgress) {
                    a.event.special.swipe.eventInProgress = !0;
                    var e, g = a.event.special.swipe.start(b), h = b.target, i = !1;
                    f.move = function (b) {
                        g && (e = a.event.special.swipe.stop(b), i || (i = a.event.special.swipe.handleSwipe(g, e, d, h), i && (a.event.special.swipe.eventInProgress = !1)), Math.abs(g.coords[0] - e.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault())
                    }, f.stop = function () {
                        i = !0, a.event.special.swipe.eventInProgress = !1, c.off("touchmove", f.move), f.move = null
                    }, c.on("touchmove", f.move).one("touchend", f.stop)
                }
            }, e.on("touchstart", f.start)
        },
        teardown: function () {
            var b, d;
            b = a.data(this, "mobile-events"), b && (d = b.swipe, delete b.swipe, b.length--, 0 === b.length && a.removeData(this, "mobile-events")), d && (d.start && a(this).off("touchstart", d.start), d.move && c.off("touchmove", d.move), d.stop && c.off("touchend", d.stop))
        }
    }, a.each({swipeleft: "swipe.left", swiperight: "swipe.right"}, function (b, c) {
        a.event.special[b] = {
            setup: function () {
                a(this).on(c, a.noop)
            }, teardown: function () {
                a(this).off(c)
            }
        }
    })
}(jQuery), function (a, b, c, d) {
    "use strict";
    var e = a("#sim_body"), f = e.width() / 3;
    a(c).ready(function () {
        a(".drawer .handle").on("click", function (b) {
            a(this).parent(".drawer").toggleClass("opened"), b.preventDefault()
        }), a(".drawer .close").on("click", function (b) {
            a(this).parent(".drawer").removeClass("opened"), b.preventDefault()
        }), a(".drawer-left").on("swipeleft", function (b) {
            var c = a(this);
            c.removeClass("opened")
        }), a(".drawer-right").on("swiperight", function (b) {
            var c = a(this);
            c.removeClass("opened")
        }), a(b).on("swipeleft", function (b) {
            var c = b.swipestart.coords[0], d = e.offset().left + e.width();
            c > d - f && a(".drawer-right").addClass("opened"), b.preventDefault()
        })
    })
}(jQuery, window, document), function (a, b, c, d) {
    "use strict";

    function e(a) {
        return function () {
            var b = this.element.val();
            a.apply(this, arguments), b !== this.element.val() && this._trigger("change")
        }
    }

    a.widget("ptr.spnr", {
        wrapper: '<div class="spnr-wrapper"></div>',
        options: {initialValue: null, min: null, max: null, step: 1, incremental: !0},
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val()), this._draw(), this._on(this._events), this._on(c, {
                mousemove: "_preventScroll",
                mouseup: "_stop",
                touchmove: "_preventScroll",
                touchend: "_stop"
            })
        },
        _getCreateOptions: function () {
            var b = {}, c = this.element;
            return a.each(["min", "max", "step"], function (a, e) {
                var f = c.attr(e);
                f !== d && f.length && (b[e] = f)
            }), "" !== c.val() && (b.initialValue = c.val()), b.disabled = c.prop("disabled"), b
        },
        _draw: function () {
            var a = this.spnr = this.element.addClass("spnr-input radius").wrap(this.wrapper).parent().prepend(this._spinButton("down")).append(this._spinButton("up"));
            this.buttons = a.find(".spnr-btn button").attr("tabIndex", -1), this.options.disabled && this.disable()
        },
        _spinButton: function (a) {
            return ['<div class="spnr-btn"><button class="spnr-', a, '"><span class="fa fa-chevron-', a, ' fa-lg"></span></button></div>'].join("")
        },
        _start: function (a) {
            return this.spinning || this._trigger("start", a) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _startFromEvent: function (b) {
            b.preventDefault(), this._start(b) !== !1 && this._repeat(null, a(b.currentTarget).hasClass("spnr-up") ? 1 : -1, b)
        },
        _repeat: function (a, b, c) {
            a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, b, c)
            }, a), this._spin(b * this.options.step, c)
        },
        _spin: function (a, b) {
            var c = this.value() || 0;
            this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), this.spinning && this._trigger("spin", b, {value: c}) === !1 || (this._value(c), this.counter++)
        },
        _increment: function (b) {
            var c = this.options.incremental;
            return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1
        },
        _events: {
            keydown: function (a) {
                this._start(a) && this._keydown(a) && a.preventDefault()
            }, keyup: "_stop", "mousedown .spnr-btn button": "_startFromEvent", "click .spnr-btn button": function (a) {
                a.preventDefault()
            }, "touchstart .spnr-btn button": "_startFromEvent", "focusout .spnr-input": function () {
                this._value(this.options.initialValue && null === this.value() ? "" : this.value())
            }, mousewheel: function (a) {
                var b = a.originalEvent.wheelDelta;
                if (b) {
                    if (!this.spinning && !this._start(a)) return !1;
                    this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(a)
                    }, 100), a.preventDefault()
                }
            }
        },
        _destroy: function () {
            this.element.removeClass("spnr-input"), this.spnr.replaceWith(this.element)
        },
        _keydown: function (b) {
            var c = this.options, d = a.ui.keyCode;
            switch (b.keyCode) {
                case d.UP:
                    return this._repeat(null, 1, b), !0;
                case d.DOWN:
                    return this._repeat(null, -1, b), !0;
                case d.PAGE_UP:
                    return this._repeat(null, c.page, b), !0;
                case d.PAGE_DOWN:
                    return this._repeat(null, -c.page, b), !0
            }
            return !1
        },
        _stop: function (a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
        },
        _preventScroll: function (a) {
            this.spinning && a.preventDefault()
        },
        _setOption: function (a, b) {
            if (("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), this._super(a, b), "disabled" === a) {
                var c = b ? !0 : !1;
                this.element.prop("disabled", c), this.buttons.prop("disabled", c)
            }
        },
        _setOptions: e(function (a) {
            this._super(a), this._value(this.element.val())
        }),
        _parse: function (a) {
            return "string" == typeof a && "" !== a && (a = +a), "" === a || isNaN(a) ? null : a
        },
        _precision: function () {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
        },
        _precisionOf: function (a) {
            var b = a.toString(), c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1
        },
        _adjustValue: function (a) {
            var b, c, d = this.options;
            return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, a = b + c, a = a.toFixed(this._precision()), null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a
        },
        _value: function (a, b) {
            var c;
            "" !== a ? (c = this._parse(a), null === c || b || (c = this._adjustValue(c))) : c = this.options.initialValue, this.element.val(c)
        },
        value: function (a) {
            return arguments.length ? void e(this._value).call(this, a) : this._parse(this.element.val())
        },
        widget: function () {
            return this.spnr
        }
    })
}(jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        return function () {
            var b = {};
            b.previous = this.value(), a.apply(this, arguments), b.value = this.value(), b.previous !== b.value && (this._updateHandle(this._toPercentage(b.value)), this._trigger("slide", arguments[1], b), this._updateLabel(b.value))
        }
    };
    a.widget("ptr.sldr", {
        template: '<div class="sldr-inner"><a href="#" class="sldr-handle"></a></div>',
        options: {
            min: 0, max: 100, step: 1, labelFunction: function (a) {
                return a
            }, vertical: !1
        },
        _create: function () {
            var a;
            this._draw(), a = this.value(), this._updateHandle(this._toPercentage(a)), this._updateLabel(this.value()), this.sliding = !1, this._setupEvents(), this.element.prop("disabled") && this.disable()
        },
        _draw: function () {
            var b = this.sldr = a(this.template), c = a('<div class="sldr-wrapper"></div>').append(b),
                d = this.element.clone(!0).addClass("sldr-input").attr("type", "number").appendTo(c).val(this._adjustValue(this._adjustValue(+this.element.val()))),
                e = d[0].id;
            e && c.attr("id", "sldr_" + e), this.handle = b.find(".sldr-handle"), this.options.vertical ? c.append('<span class="sldr-label"></span>') : c.prepend('<span class="sldr-label"></span>'), this.label = c.find(".sldr-label"), this.options.vertical && c.addClass("sldr-vertical"), this.element.replaceWith(c), this.oldElement = this.element, this.element = d
        },
        _setupEvents: function () {
            this._on(c, this._documentEvents), this._on(this.sldr, this._sliderEvents)
        },
        _getCreateOptions: function () {
            var b = {}, c = this.element, e = ["min", "max", "step", "vertical"];
            return a.each(e, function (a, e) {
                var f, g;
                switch (e) {
                    case"vertical":
                        f = c.data("sldrVertical"), g = f = f !== d;
                        break;
                    default:
                        f = parseFloat(c.attr(e)), g = !isNaN(f)
                }
                g && (b[e] = f)
            }), b
        },
        _value: function (a) {
            var b;
            "" !== a && (b = this._adjustValue(a)), this.element.val(b)
        },
        value: function (a, b) {
            return arguments.length ? void e(this._value).call(this, a, b) : +this.element.val()
        },
        _precision: function () {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), a
        },
        _precisionOf: function (a) {
            var b = a.toString(), c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1
        },
        _toPercentage: function (a) {
            var b = this.options, c = b.max - b.min, d = (parseFloat(a) - b.min) / c * 100;
            return d = parseFloat(d.toFixed(this._precision()))
        },
        _updateHandle: function (a) {
            var b = this.options.vertical ? "bottom" : "left";
            a += "%", this.handle.css(b, a)
        },
        _adjustValue: function (a) {
            return this._capValue(this._roundStep(a))
        },
        _capValue: function (a) {
            var b = this.options;
            return a <= b.min ? b.min : a >= b.max ? b.max : a
        },
        _roundStep: function (a) {
            var b = this.options, c = (a - b.min) % b.step, d = a - c;
            return 2 * Math.abs(c) >= b.step && (d += c > 0 ? b.step : -b.step), parseFloat(d.toFixed(this._precision()))
        },
        _updateValue: function (a) {
            var b, c = this.options;
            Modernizr.touch && a.originalEvent.touches && (b = c.vertical ? a.originalEvent.touches[0].pageY : a.originalEvent.touches[0].pageX), b === d && (b = c.vertical ? a.pageY : a.pageX);
            var e, f = c.vertical ? this.sldr.offset().top : this.sldr.offset().left,
                g = c.vertical ? this.sldr.outerHeight() : this.sldr.outerWidth(), h = (b - f) / g * 100;
            c.vertical && (h = 100 - h), e = (c.max - c.min) * h / 100, e += c.min, this.value(e, a), a.preventDefault(), a.stopImmediatePropagation()
        },
        _updateLabel: function (a) {
            var b = this.options.labelFunction(a.toFixed(this._precision()));
            this.label[0].innerHTML = b
        },
        _start: function (a) {
            this._startValue = this.value(), this.sliding = !0, this._updateValue(a), this._trigger("start", a, this._startValue)
        },
        _slide: function (a) {
            this.sliding && this._updateValue(a)
        },
        _stop: function (a) {
            var b = {previous: this._startValue, value: this.value()};
            return this.sliding ? (this.sliding = !1, this._trigger("stop", a, b), void (b.value !== b.previous && this._trigger("change", a, b))) : !1
        },
        _documentEvents: {mousemove: "_slide", mouseup: "_stop"},
        _sliderEvents: {
            click: function (a) {
                a.preventDefault()
            }, mousedown: "_start", touchstart: "_start", touchend: "_stop", touchmove: "_slide"
        },
        enable: function () {
            return this.handle.removeClass("disabled"), this._super()
        },
        disable: function () {
            return this.handle.addClass("disabled"), this._super()
        },
        _destroy: function () {
            this.oldElement.val(this.element.val()), this.sldr.parent().replaceWith(this.oldElement)
        }
    })
}(jQuery, window, document), function (a) {
    "use strict";
    var b, c = function (a, b) {
        return new d(a, b)
    }, d = function (b, c) {
        b || (b = c ? c : "intro"), this.currentView = b, this._setupEvents(), this.$this = a(this), this.gotoView(b)
    };
    d.prototype = {
        _setupEvents: function () {
            var b = this;
            a("[data-goto-id]").on("click", function (c) {
                var d = a(this).data("gotoId");
                b.gotoView(d), c.preventDefault()
            })
        }, gotoView: function (a) {
            var c = Date.now();
            b = c, this.trigger("goto.page", {
                current: this.currentView,
                next: a
            }), document.getElementById(this.currentView).style.display = "none", document.getElementById(a).style.display = "inherit", this.currentView = a, this.trigger("goneto.page", this.currentView)
        }, on: function (a, b, c, d) {
            return this.$this.on(a, b, c, d)
        }, trigger: function (a, b) {
            return this.$this.trigger(a, b)
        }
    }, window.Pager = c
}(jQuery), function (a) {
    "use strict";
    a.fn.infoTool = function (b) {
        var c = a(this), d = function (b) {
                var c = a(b.target), d = a(f.container), e = a(f.content), g = c.data("infoKey");
                e.empty().append(gt(g)), d.addClass("opened"), c.trigger("show.infoTool"), b.preventDefault()
            }, e = {trigger: "click", container: "#info-drawer", content: ".info-content", onShowInfo: d},
            f = a.extend({}, e, b);
        return c.on(f.trigger, f.onShowInfo), c
    }
}(jQuery), function (a, b, c) {
    "use strict";
    var d = function (a) {
        return new e(a)._init()
    }, e = function (b) {
        a.extend(!0, this, b)
    };
    return e.prototype = {
        _init: function () {
            return this.trigger("init"), this
        }, on: function (b, c, d, e) {
            return a(this).on(b, c, d, e)
        }, trigger: function (b, c) {
            a(this).trigger(b, c)
        }, get: function (a) {
            if (0 !== arguments.length) {
                var b = this[a];
                return "function" == typeof b && (b = b.apply(this, Array.prototype.slice.call(arguments, 1))), b
            }
            return this
        }, set: function (b, c) {
            var d = {}, e = this, f = function (a, b) {
                return b !== this[a] ? {value: b, oldValue: this[a]} : {}
            };
            if ("object" != typeof b) {
                var g = f.call(this, b, c);
                a.isEmptyObject(g) || (d[b] = g)
            } else a.each(b, function (b, c) {
                var g = f.call(e, b, c);
                a.isEmptyObject(g) || (d[b] = g)
            });
            return a.isEmptyObject(d) || (a.each(d, function (a, b) {
                e[a] = b.value
            }), this.trigger("change", [d])), d
        }
    }, b.M = b.Model = d
}(jQuery, window), function (a) {
    "use strict";
    var b, c = function () {
            b = cancelAnimationFrame(b), h.previousTimestamp = void 0
        }, d = function () {
            return b ? void 0 : b = requestAnimationFrame(f)
        }, e = function () {
            c(), h.set("hours", 0), h.set("minutes", 0), h.set("seconds", 0), h.set("totalSeconds", 0)
        }, f = function (a) {
            b && (b = requestAnimationFrame(f));
            var c, d, e = h.get("previousTimestamp");
            return void 0 === e ? void h.set("previousTimestamp", a) : (c = a - e, d = c * h.get("simRate") / 1e3, void (5 >= d ? d > 1 && h.trigger("tick", [a, c, d]) : h.set("previousTimestamp", a)))
        }, g = function () {
            return ("0" + h.hours).slice(-2) + ":" + ("0" + h.minutes).slice(-2) + ":" + ("0" + h.seconds).slice(-2)
        }, h = M({previousTimestamp: void 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0, simRate: 1}),
        i = {pause: c, start: d, stop: e, getTime: g, Model: h};
    h.on("tick", function (a, b, c, d) {
        if (!(1 > d)) {
            this.previousTimestamp = b;
            var e = this.totalSeconds += Math.floor(d);
            this.set("seconds", e % 60), e /= 60, this.set("minutes", Math.floor(e % 60)), e /= 60, this.set("hours", Math.floor(e % 24))
        }
    }), h.on("change", function (b, c) {
        a.each(c, function (b, c) {
            -1 !== a.inArray(b, ["hours", "minutes", "seconds"]) && (a(".elapsed-time ." + b)[0].innerHTML = ("0" + c.value).slice(-2))
        })
    }), a(".simulation-rate").on("sldrchange", function (a, b) {
        h.set("simRate", b.value), EafLog.storeMsgAudit(i.getTime(), "Simulation rate changed: " + b.value)
    }), window.Timer = i
}(jQuery);
var Challenge = {};
!function (a) {
    "use strict";

    function b(a, b) {
        return b %= a.length, 0 > b && (b = a.length + b), 0 != b ? a.substr(a.length - b, b) + a.substr(0, a.length - b) : unescape(a)
    }

    function c(a) {
        var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.@-_", d = "",
            e = a.slice(a.length - 66, a.length);
        a = a.slice(0, a.length - 66);
        var f = c;
        if (e.length > 0 && a.length > 0) {
            for (var g = 0; g < a.length; g++) {
                var h = e.indexOf(a.substr(g, 1));
                h > -1 && (d += f.substr(h, 1), f = b(f, -f.charCodeAt(h)))
            }
            return d
        }
        return ""
    }

    var d = getParameter("email"), e = getParameter("challengeId"), f = -1,
        g = "https://reg.steeluniversity.org/Challenge/", h = !1;
    a.ajaxSetup({
        beforeSend: function (a) {
            a.setRequestHeader("Authorization", "Bearer g8noIMKk0Wv4HZC1CmZay_Wp1oxJ3vYGm433ewN6AHHyt-F4KP7XtVOUNVOM5546l06u3fm1udBJMxcKSkmYpoxFreBXz5k1Xuz3ziahU9kiZ5T80_Sf7Guf9-GOvZ4JB9k9jbbxerfkfFkksb32TweuhqEvaUNJwp11Kgh-v-C9QvRHaClfd8QozA9lDeh9hvVNPRHfCEMzhtaoH4rR2xpywCg-ZJo9PsIoMMKm5IcR042A");
        }
    }), Challenge.checkStatusEmail = function (b, f) {
        a.ajax({
            url: g + "getRegistrationIdFromEmail",
            type: "POST",
            data: {email: c(d), challengeId: e}
        }).done(function (c) {
            var d = "";
            switch (parseInt(c)) {
                case-1:
                    d = "You are NOT registered for steelChallenge-10.<br>Please go to the Registration page", a(b).addClass("fail"), a(f).css("visibility", "visible");
                    break;
                default:
                    d = "You are registered for the steelChallenge-10.", a(b).addClass("success")
            }
            a(b).html(d)
        })
    }, Challenge.checkStatus = function (b, f) {
        b.attr("disabled", !0), b.children("i").removeClass("invisible"), a.ajax({
            url: g + "getStatusCategory",
            type: "POST",
            data: {email: c(d), challengeId: e}
        }).done(function (c) {
            c = JSON.parse(c);
            var d = "";
            switch (c.status) {
                case-1:
                    d = gt("user_not_registered");
                    break;
                case 0:
                    d = gt("challenge_not_active");
                    break;
                case 1:
                    a("#gear_grade").click(), a("#step2 input[name=steelGrade]").prop("disabled", "disabled");
                    var e;
                    0 == c.category ? (a("#worker_radio").click(), e = "SteelIndustryTechnical", Eaf.Model.targetSteelGrade = Eaf.Model.steelGradesArrayIndustry[3]) : (e = "UniversityStudent", Eaf.Model.targetSteelGrade = Eaf.Model.steelGradesArrayStudent[3]), a("#step1 input[name=userLevel]").prop("disabled", "disabled"), a("dd.selected-user-level").html(gt(e)), Eaf.Model.selectedUserLevel = e, b.attr("disabled", !1), b.children("i").addClass("invisible");
                    break;
                case 2:
                    d = gt("challenge_paused");
                    break;
                case 3:
                    d = gt("challenge_finished")
            }
            a(f).html(d), a(b).children("i").css("visibility", "hidden")
        }).fail(function () {
            h = !0;
            var c = "Connection error";
            a(f).html(c), a(b).children("i").css("visibility", "hidden")
        })
    }, Challenge.start = function (b) {
        h || a.ajax({
            url: g + "StartBatch",
            type: "POST",
            data: {xml: JSON.stringify(b), email: c(d), ChallengeID: e}
        }).done(function (b) {
            f = parseInt(b);
            var c = "<a href='javascript:location.reload(true);'>" + gt("StartOver") + "&nbsp;<span class='fa fa-undo'></span></a>";
            switch (f) {
                case-1:
                case-3:
                    EafView.displayUserMessage(gt("Error"), gt("challenge_not_active"), !0, !0), Timer.stop();
                    break;
                case-2:
                    EafView.displayUserMessage(gt("Error"), gt("user_not_registered"), !0, !0), Timer.stop();
                    break;
                default:
                    c = "# " + f
            }
            a("#run_id").html(c)
        }).fail(function () {
            EafView.displayUserMessage(gt("Error"), gt("Server_error"), !0, !0), Timer.stop(), a("#run_id").html(message)
        })
    }, Challenge.progress = function (b) {
        h || a.ajax({
            url: g + "ProgressBatch",
            type: "POST",
            data: {batchId: f, xml: JSON.stringify(b)}
        }).fail(function () {
            EafView.displayUserMessage(gt("Error"), gt("Server_error"), !0, !0)
        })
    }, Challenge.finish = function (b, c, d, e) {
        h || (d.costBreakdown = b, a.ajax({
            url: g + "EndBatch",
            type: "POST",
            data: {batchId: f, xml: JSON.stringify({auditData: d}), score: c, successful: e ? 1 : 0}
        }).done(function () {
            a(".db_post_result > span.icon").removeClass("fa-spinner fa-spin").addClass("fa-check"), a(".db_post_result").removeClass("yellow").addClass("green"), a(".db_post_result > span.message").html(gt("Results_saved"))
        }).fail(function () {
            a(".db_post_result > span.icon").removeClass("fa-spinner fa-spin").addClass("fa-times"), a(".db_post_result").removeClass("yellow").addClass("red"), a(".db_post_result > span.message").html(gt("Results_not_saved"))
        }))
    }
}(jQuery);