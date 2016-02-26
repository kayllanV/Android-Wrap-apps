/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
(function(n, t) {
    function kt(n) {
        var t = n.length,
            r = i.type(n);
        return i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r ===
            "array" || r !== "function" && (t === 0 || typeof t ==
                "number" && t > 0 && t - 1 in n)
    }

    function ku(n) {
        var t = dt[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function c() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = i.expando + Math.random()
    }

    function pi(n, i, r) {
        var u;
        if (r === t && n.nodeType === 1)
            if (u = "data-" + i.replace(yi, "-$1")
                .toLowerCase(), r = n.getAttribute(u), typeof r ==
                "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r ===
                        "null" ? null : +r + "" === r ? +r : vi.test(r) ?
                        JSON.parse(r) : r
                } catch (e) {}
                f.set(n, i, r)
            } else r = t;
        return r
    }

    function ht() {
        return !0
    }

    function p() {
        return !1
    }

    function di() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function nr(n, t) {
        while ((n = n[t]) && n.nodeType !== 1);
        return n
    }

    function ni(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if (typeof t == "string") {
            if (uf.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return et.call(t, n) >= 0 !== r
        })
    }

    function fr(n, t) {
        return i.nodeName(n, "table") && i.nodeName(t.nodeType === 1 ?
            t : t.firstChild, "tr") ? n.getElementsByTagName(
            "tbody")[0] || n.appendChild(n.ownerDocument.createElement(
            "tbody")) : n
    }

    function af(n) {
        return n.type = (n.getAttribute("type") !== null) + "/" + n.type,
            n
    }

    function vf(n) {
        var t = cf.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function ti(n, t) {
        for (var u = n.length, i = 0; i < u; i++) r.set(n[i],
            "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function er(n, t) {
        var e, c, o, s, h, l, a, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u =
                s.events, u)) {
                delete h.handle;
                h.events = {};
                for (o in u)
                    for (e = 0, c = u[o].length; e < c; e++) i.event.add(
                        t, o, u[o][e])
            }
            f.hasData(n) && (l = f.access(n), a = i.extend({}, l), f.set(
                t, a))
        }
    }

    function o(n, r) {
        var u = n.getElementsByTagName ? n.getElementsByTagName(r ||
            "*") : n.querySelectorAll ? n.querySelectorAll(r || "*") : [];
        return r === t || r && i.nodeName(n, r) ? i.merge([n], u) : u
    }

    function yf(n, t) {
        var i = t.nodeName.toLowerCase();
        i === "input" && rr.test(n.type) ? t.checked = n.checked : (i ===
            "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }

    function lr(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0)
            .toUpperCase() + t.slice(1), u = t, i = cr.length; i--;)
            if (t = cr[i] + r, t in n) return t;
        return u
    }

    function d(n, t) {
        return n = t || n, i.css(n, "display") === "none" || !i.contains(
            n.ownerDocument, n)
    }

    function ct(t) {
        return n.getComputedStyle(t, null)
    }

    function ar(n, t) {
        for (var e, u, s, o = [], f = 0, h = n.length; f < h; f++)(u =
            n[f], u.style) && (o[f] = r.get(u, "olddisplay"), e = u
            .style.display, t ? (o[f] || e !== "none" || (u.style.display =
                ""), u.style.display === "" && d(u) && (o[f] =
                r.access(u, "olddisplay", df(u.nodeName)))) : o[f] ||
            (s = d(u), (e && e !== "none" || !s) && r.set(u,
                "olddisplay", s ? e : i.css(u, "display"))));
        for (f = 0; f < h; f++)(u = n[f], u.style) && (t && u.style.display !==
            "none" && u.style.display !== "" || (u.style.display =
                t ? o[f] || "" : "none"));
        return n
    }

    function vr(n, t, i) {
        var r = wf.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function yr(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : t ===
            "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o +=
            i.css(n, r + v[e], !0, f)), u ? (r === "content" && (o -=
                i.css(n, "padding" + v[e], !0, f)), r !== "margin" &&
            (o -= i.css(n, "border" + v[e] + "Width", !0, f))) : (o +=
            i.css(n, "padding" + v[e], !0, f), r !== "padding" && (
                o += i.css(n, "border" + v[e] + "Width", !0, f)));
        return o
    }

    function pr(n, t, r) {
        var e = !0,
            u = t === "width" ? n.offsetWidth : n.offsetHeight,
            f = ct(n),
            o = i.support.boxSizing && i.css(n, "boxSizing", !1, f) ===
            "border-box";
        if (u <= 0 || u == null) {
            if (u = w(n, t, f), (u < 0 || u == null) && (u = n.style[t]),
                ii.test(u)) return u;
            e = o && (i.support.boxSizingReliable || u === n.style[t]);
            u = parseFloat(u) || 0
        }
        return u + yr(n, t, r || (o ? "border" : "content"), e, f) +
            "px"
    }

    function df(n) {
        var r = u,
            t = sr[n];
        return t || (t = wr(n, r), t !== "none" && t || (k = (k || i(
                    "<iframe frameborder='0' width='0' height='0'/>"
                )
                .css("cssText", "display:block !important"))
            .appendTo(r.documentElement), r = (k[0].contentWindow ||
                k[0].contentDocument)
            .document, r.write("<!doctype html><html><body>"),
            r.close(), t = wr(n, r), k.detach()), sr[n] = t), t
    }

    function wr(n, t) {
        var r = i(t.createElement(n))
            .appendTo(t.body),
            u = i.css(r[0], "display");
        return r.remove(), u
    }

    function ri(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || ne.test(n) ? u(n, i) : ri(n + "[" + (typeof i ==
                "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) ri(n + "[" + f + "]", t[f], r, u)
    }

    function iu(n) {
        return function(t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase()
                .match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) ||
                        "*", (n[u] = n[u] || [])
                        .unshift(r)) : (n[u] = n[u] || [])
                    .push(r)
        }
    }

    function ru(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !
                    1
            }), h
        }
        var f = {},
            o = n === ei;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function oi(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f), n
    }

    function oe(n, i, r) {
        for (var o, f, e, s, h = n.contents, u = n.dataTypes; u[0] ===
            "*";) u.shift(), o === t && (o = n.mimeType || i.getResponseHeader(
            "Content-Type"));
        if (o)
            for (f in h)
                if (h[f] && h[f].test(o)) {
                    u.unshift(f);
                    break
                }
        if (u[0] in r) e = u[0];
        else {
            for (f in r) {
                if (!u[0] || n.converters[f + " " + u[0]]) {
                    e = f;
                    break
                }
                s || (s = f)
            }
            e = e || s
        } if (e) return e !== u[0] && u.unshift(e), r[e]
    }

    function se(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e &&
                r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
                e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " +
                        s[0]] || o["* " + s[0]], f)) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0],
                            c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e +
                            " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function fu() {
        return setTimeout(function() {
            b = t
        }), b = i.now()
    }

    function eu(n, t, i) {
        for (var u, f = (tt[t] || [])
            .concat(tt["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function ou(n, t, r) {
        var e, o, s = 0,
            l = vt.length,
            f = i.Deferred()
            .always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return !1;
                for (var s = b || fu(), t = Math.max(0, u.startTime + u
                        .duration - s), h = t / u.duration || 0, i =
                    1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[
                    r].run(i);
                return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(
                    n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: b || fu(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[
                        t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(
                        n, [u, t]), this
                }
            }),
            h = u.props;
        for (ve(h, u.opts.specialEasing); s < l; s++)
            if (e = vt[s].call(u, n, h, u.opts), e) return e;
        return i.map(h, eu, u), i.isFunction(u.opts.start) && u.opts.start
            .call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always)
    }

    function ve(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) &&
                (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u,
                    delete n[r]), o = i.cssHooks[f], o && "expand" in o
            ) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function ye(n, u, f) {
        var e, a, p, v, s, w, l = this,
            y = {},
            h = n.style,
            c = n.nodeType && d(n),
            o = r.get(n, "fxshow");
        f.queue || (s = i._queueHooks(n, "fx"), s.unqueued == null && (
            s.unqueued = 0, w = s.empty.fire, s.empty.fire =
            function() {
                s.unqueued || w()
            }), s.unqueued++, l.always(function() {
            l.always(function() {
                s.unqueued--;
                i.queue(n, "fx")
                    .length || s.empty.fire()
            })
        }));
        n.nodeType === 1 && ("height" in u || "width" in u) && (f.overflow = [
                h.overflow, h.overflowX, h.overflowY], i.css(n,
                "display") === "inline" && i.css(n, "float") ===
            "none" && (h.display = "inline-block"));
        f.overflow && (h.overflow = "hidden", l.always(function() {
            h.overflow = f.overflow[0];
            h.overflowX = f.overflow[1];
            h.overflowY = f.overflow[2]
        }));
        for (e in u)
            if (a = u[e], le.exec(a)) {
                if (delete u[e], p = p || a === "toggle", a === (c ?
                    "hide" : "show"))
                    if (a === "show" && o && o[e] !== t) c = !0;
                    else continue;
                y[e] = o && o[e] || i.style(n, e)
            }
        if (!i.isEmptyObject(y)) {
            o ? "hidden" in o && (c = o.hidden) : o = r.access(n,
                "fxshow", {});
            p && (o.hidden = !c);
            c ? i(n)
                .show() : l.done(function() {
                    i(n)
                        .hide()
                });
            l.done(function() {
                var t;
                r.remove(n, "fxshow");
                for (t in y) i.style(n, t, y[t])
            });
            for (e in y) v = eu(c ? o[e] : 0, e, l), e in o || (o[e] =
                v.start, c && (v.end = v.start, v.start = e ===
                    "width" || e === "height" ? 1 : 0))
        }
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function yt(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = v[u], i["margin" + r] =
            i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function su(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 && n.defaultView
    }
    var hi, it, rt = typeof t,
        hu = n.location,
        u = n.document,
        ci = u.documentElement,
        cu = n.jQuery,
        lu = n.$,
        ut = {},
        ft = [],
        pt = "2.0.3",
        li = ft.concat,
        wt = ft.push,
        a = ft.slice,
        et = ft.indexOf,
        au = ut.toString,
        bt = ut.hasOwnProperty,
        vu = pt.trim,
        i = function(n, t) {
            return new i.fn.init(n, t, hi)
        },
        ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        h = /\S+/g,
        yu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ai = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pu = /^-ms-/,
        wu = /-([\da-z])/gi,
        bu = function(n, t) {
            return t.toUpperCase()
        },
        st = function() {
            u.removeEventListener("DOMContentLoaded", st, !1);
            n.removeEventListener("load", st, !1);
            i.ready()
        },
        dt, f, r, vi, yi, si, lt;
    i.fn = i.prototype = {
        jquery: pt,
        constructor: i,
        init: function(n, r, f) {
            var e, o;
            if (!n) return this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length -
                    1) === ">" && n.length >= 3 ? [null, n,
                    null] : yu.exec(n), e && (e[1] || !r)) {
                    if (e[1]) {
                        if (r = r instanceof i ? r[0] : r, i.merge(
                                this, i.parseHTML(e[1], r && r.nodeType ?
                                    r.ownerDocument || r : u, !0)),
                            ai.test(e[1]) && i.isPlainObject(r))
                            for (e in r) i.isFunction(this[e]) ?
                                this[e](r[e]) : this.attr(e, r[e]);
                        return this
                    }
                    return o = u.getElementById(e[2]), o && o.parentNode &&
                        (this.length = 1, this[0] = o), this.context =
                        u, this.selector = n, this
                }
                return !r || r.jquery ? (r || f)
                    .find(n) : this.constructor(r)
                    .find(n)
            }
            return n.nodeType ? (this.context = this[0] = n, this.length =
                1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !==
                t && (this.selector = n.selector, this.context =
                    n.context), i.makeArray(n, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length +
                n] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise()
                .done(n), this
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: wt,
        sort: [].sort,
        splice: [].splice
    };
    i.fn.init.prototype = i.fn;
    i.extend = i.fn.extend = function() {
        var o, e, u, r, s, h, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            c = !1;
        for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f =
                2), typeof n == "object" || i.isFunction(n) || (n = {}),
            l === f && (n = this, --f); f < l; f++)
            if ((o = arguments[f]) != null)
                for (e in o)(u = n[e], r = o[e], n !== r) && (c && r &&
                    (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ?
                        (s = !1, h = u && i.isArray(u) ? u : []) :
                        h = u && i.isPlainObject(u) ? u : {}, n[e] =
                        i.extend(c, h, r)) : r !== t && (n[e] = r));
        return n
    };
    i.extend({
        expando: "jQuery" + (pt + Math.random())
            .replace(/\D/g, ""),
        noConflict: function(t) {
            return n.$ === i && (n.$ = lu), t && n.jQuery === i &&
                (n.jQuery = cu), i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !
                0, n !== !0 && --i.readyWait > 0) || (it.resolveWith(
                    u, [i]), i.fn.trigger && i(u)
                .trigger("ready")
                .off("ready"))
        },
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(n) {
            return n != null && n === n.window
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return n == null ? String(n) : typeof n == "object" ||
                typeof n == "function" ? ut[au.call(n)] ||
                "object" : typeof n
        },
        isPlainObject: function(n) {
            if (i.type(n) !== "object" || n.nodeType || i.isWindow(
                n)) return !1;
            try {
                if (n.constructor && !bt.call(n.constructor.prototype,
                    "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n) return !1;
            return !0
        },
        error: function(n) {
            throw new Error(n);
        },
        parseHTML: function(n, t, r) {
            if (!n || typeof n != "string") return null;
            typeof t == "boolean" && (r = t, t = !1);
            t = t || u;
            var f = ai.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment(
                    [n], t, e), e && i(e)
                .remove(), i.merge([], f.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function(n) {
            var r, u;
            if (!n || typeof n != "string") return null;
            try {
                u = new DOMParser;
                r = u.parseFromString(n, "text/xml")
            } catch (f) {
                r = t
            }
            return (!r || r.getElementsByTagName("parsererror")
                .length) && i.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(n) {
            var t, r = eval;
            n = i.trim(n);
            n && (n.indexOf("use strict") === 1 ? (t = u.createElement(
                    "script"), t.text = n, u.head.appendChild(
                    t)
                .parentNode.removeChild(t)) : r(n))
        },
        camelCase: function(n) {
            return n.replace(pu, "ms-")
                .replace(wu, bu)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t
                .toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                f = n.length,
                e = kt(n);
            if (i) {
                if (e) {
                    for (; r < f; r++)
                        if (u = t.apply(n[r], i), u === !1)
                            break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1)
                            break
            } else if (e) {
                for (; r < f; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1)
                        break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1)
                        break; return n
        },
        trim: function(n) {
            return n == null ? "" : vu.call(n)
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (kt(Object(n)) ? i.merge(r,
                typeof n == "string" ? [n] : n) : wt.call(
                r, n)), r
        },
        inArray: function(n, t, i) {
            return t == null ? -1 : et.call(t, n, i)
        },
        merge: function(n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if (typeof f == "number")
                for (; r < f; r++) n[u++] = i[r];
            else
                while (i[r] !== t) n[u++] = i[r++];
            return n.length = u, n
        },
        grep: function(n, t, i) {
            var u, f = [],
                r = 0,
                e = n.length;
            for (i = !!i; r < e; r++) u = !!t(n[r], r), i !== u &&
                f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                e = n.length,
                o = kt(n),
                f = [];
            if (o)
                for (; r < e; r++) u = t(n[r], r, i), u != null &&
                    (f[f.length] = u);
            else
                for (r in n) u = t(n[r], r, i), u != null && (f[
                    f.length] = u);
            return li.apply([], f)
        },
        guid: 1,
        proxy: function(n, r) {
            var f, e, u;
            return (typeof r == "string" && (f = n[r], r = n, n =
                f), !i.isFunction(n)) ? t : (e = a.call(
                arguments, 2), u = function() {
                return n.apply(r || this, e.concat(a.call(
                    arguments)))
            }, u.guid = n.guid = n.guid || i.guid++, u)
        },
        access: function(n, r, u, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = u == null;
            if (i.type(u) === "object") {
                e = !0;
                for (h in u) i.access(n, r, h, u[h], !0, o, s)
            } else if (f !== t && (e = !0, i.isFunction(f) || (
                s = !0), c && (s ? (r.call(n, f), r =
                null) : (c = r, r = function(n, t,
                r) {
                return c.call(i(n), r)
            })), r))
                for (; h < l; h++) r(n[h], u, s ? f : f.call(n[
                    h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
        },
        now: Date.now,
        swap: function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        }
    });
    i.ready.promise = function(t) {
        return it || (it = i.Deferred(), u.readyState === "complete" ?
            setTimeout(i.ready) : (u.addEventListener(
                "DOMContentLoaded", st, !1), n.addEventListener(
                "load", st, !1))), it.promise(t)
    };
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(
        " "), function(n, t) {
        ut["[object " + t + "]"] = t.toLowerCase()
    });
    hi = i(u);
    /*!
     * Sizzle CSS Selector Engine v1.9.4-pre
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2013-06-03
     */
    (function(n, t) {
        function u(n, t, i, r) {
            var p, u, f, l, w, a, k, c, g, d;
            if ((t ? t.ownerDocument || t : y) !== s && nt(t), t =
                t || s, i = i || [], !n || typeof n != "string")
                return i;
            if ((l = t.nodeType) !== 1 && l !== 9) return [];
            if (v && !r) {
                if (p = or.exec(n))
                    if (f = p[1]) {
                        if (l === 9)
                            if (u = t.getElementById(f), u && u.parentNode) {
                                if (u.id === f) return i.push(u), i
                            } else return i;
                        else if (t.ownerDocument && (u = t.ownerDocument
                                .getElementById(f)) && ot(t, u) &&
                            u.id === f) return i.push(u), i
                    } else {
                        if (p[2]) return b.apply(i, t.getElementsByTagName(
                            n)), i;
                        if ((f = p[3]) && e.getElementsByClassName &&
                            t.getElementsByClassName) return b.apply(
                                i, t.getElementsByClassName(f)),
                            i
                    }
                if (e.qsa && (!h || !h.test(n))) {
                    if (c = k = o, g = t, d = l === 9 && n, l === 1 &&
                        t.nodeName.toLowerCase() !== "object") {
                        for (a = pt(n), (k = t.getAttribute("id")) ?
                            c = k.replace(cr, "\\$&") : t.setAttribute(
                                "id", c), c = "[id='" + c + "'] ",
                            w = a.length; w--;) a[w] = c + wt(a[w]);
                        g = ti.test(n) && t.parentNode || t;
                        d = a.join(",")
                    }
                    if (d) try {
                        return b.apply(i, g.querySelectorAll(d)),
                            i
                    } catch (tt) {} finally {
                        k || t.removeAttribute("id")
                    }
                }
            }
            return pr(n.replace(vt, "$1"), t, i, r)
        }

        function ri() {
            function n(i, u) {
                return t.push(i += " ") > r.cacheLength &&
                    delete n[t.shift()], n[i] = u
            }
            var t = [];
            return n
        }

        function c(n) {
            return n[o] = !0, n
        }

        function l(n) {
            var t = s.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ui(n, t) {
            for (var u = n.split("|"), i = n.length; i--;) r.attrHandle[
                u[i]] = t
        }

        function bi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && (~
                    t.sourceIndex || vi) - (~n.sourceIndex || vi);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function lr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type ===
                    n
            }
        }

        function rt(n) {
            return c(function(t) {
                return t = +t, c(function(i, r) {
                    for (var u, f = n([], i.length,
                        t), e = f.length; e--;) i[u =
                        f[e]] && (i[u] = !(r[u] =
                        i[u]))
                })
            })
        }

        function ki() {}

        function pt(n, t) {
            var e, f, s, o, i, h, c, l = li[n + " "];
            if (l) return t ? 0 : l.slice(0);
            for (i = n, h = [], c = r.preFilter; i;) {
                (!e || (f = ir.exec(i))) && (f && (i = i.slice(f[0]
                    .length) || i), h.push(s = []));
                e = !1;
                (f = rr.exec(i)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(vt, " ")
                }), i = i.slice(e.length));
                for (o in r.filter)(f = yt[o].exec(i)) && (!c[o] ||
                    (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), i = i.slice(e.length));
                if (!e) break
            }
            return t ? i.length : i ? u.error(n) : li(n, h)
                .slice(0)
        }

        function wt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i +=
                n[t].value;
            return i
        }

        function fi(n, t, i) {
            var r = t.dir,
                u = i && r === "parentNode",
                f = di++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (t.nodeType === 1 || u) return n(t, i, f)
            } : function(t, i, e) {
                var h, s, c, l = p + " " + f;
                if (e) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || u) && n(t, i,
                            e)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || u)
                            if (c = t[o] || (t[o] = {}), (s = c[
                                r]) && s[0] === l) {
                                if ((h = s[1]) === !0 || h ===
                                    ht) return h === !0
                            } else if (s = c[r] = [l], s[1] = n(
                    t, i, e) || ht, s[1] === !0) return !0
            }
        }

        function ei(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f <
                s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(
                e), h && t.push(f));
            return o
        }

        function oi(n, t, i, r, u, f) {
            return r && !r[o] && (r = oi(r)), u && !u[o] && (u = oi(
                u, f)), c(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    k = f || yr(t || "*", o.nodeType ? [o] :
                        o, []),
                    v = n && (f || !t) ? bt(k, p, n, o, s) :
                    k,
                    h = i ? u || (f ? n : w || r) ? [] : e :
                    v;
                if (i && i(v, h, o, s), r)
                    for (l = bt(h, y), r(l, [], o, s), c =
                        l.length; c--;)(a = l[c]) && (h[y[c]] = !
                        (v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)
                                (a = h[c]) && l.push(v[c] =
                                    a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) &&
                            (l = u ? it.call(f, a) : p[c]) >
                            -1 && (f[l] = !(e[l] = a))
                    }
                } else h = bt(h === e ? h.splice(w, h.length) :
                    h), u ? u(null, e, h, s) : b.apply(
                    e, h)
            })
        }

        function si(n) {
            for (var s, u, i, e = n.length, h = r.relative[n[0].type],
                c = h || r.relative[" "], t = h ? 1 : 0, l = fi(
                    function(n) {
                        return n === s
                    }, c, !0), a = fi(function(n) {
                    return it.call(s, n) > -1
                }, c, !0), f = [
                    function(n, t, i) {
                        return !h && (i || t !== lt) || ((s = t)
                            .nodeType ? l(n, t, i) : a(n, t,
                                i))
                    }]; t < e; t++)
                if (u = r.relative[n[t].type]) f = [fi(ei(f), u)];
                else {
                    if (u = r.filter[n[t].type].apply(null, n[t].matches),
                        u[o]) {
                        for (i = ++t; i < e; i++)
                            if (r.relative[n[i].type]) break;
                        return oi(t > 1 && ei(f), t > 1 && wt(n.slice(
                                    0, t - 1)
                                .concat({
                                    value: n[t - 2].type ===
                                        " " ? "*" : ""
                                }))
                            .replace(vt, "$1"), u, t < i && si(
                                n.slice(t, i)), i < e && si(n =
                                n.slice(i)), i < e && wt(n))
                    }
                    f.push(u)
                }
            return ei(f)
        }

        function vr(n, t) {
            var f = 0,
                i = t.length > 0,
                e = n.length > 0,
                o = function(o, h, c, l, a) {
                    var y, g, k, w = [],
                        d = 0,
                        v = "0",
                        nt = o && [],
                        tt = a != null,
                        it = lt,
                        ut = o || e && r.find.TAG("*", a && h.parentNode ||
                            h),
                        rt = p += it == null ? 1 : Math.random() ||
                        .1;
                    for (tt && (lt = h !== s && h, ht = f);
                        (y = ut[v]) != null; v++) {
                        if (e && y) {
                            for (g = 0; k = n[g++];)
                                if (k(y, h, c)) {
                                    l.push(y);
                                    break
                                }
                            tt && (p = rt, ht = ++f)
                        }
                        i && ((y = !k && y) && d--, o && nt.push(y))
                    }
                    if (d += v, i && v !== d) {
                        for (g = 0; k = t[g++];) k(nt, w, h, c);
                        if (o) {
                            if (d > 0)
                                while (v--) nt[v] || w[v] || (w[v] =
                                    nr.call(l));
                            w = bt(w)
                        }
                        b.apply(l, w);
                        tt && !o && w.length > 0 && d + t.length >
                            1 && u.uniqueSort(l)
                    }
                    return tt && (p = rt, lt = it), nt
                };
            return i ? c(o) : o
        }

        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function pr(n, t, i, u) {
            var s, f, o, c, l, h = pt(n);
            if (!u && h.length === 1) {
                if (f = h[0] = h[0].slice(0), f.length > 2 && (o =
                        f[0])
                    .type === "ID" && e.getById && t.nodeType === 9 &&
                    v && r.relative[f[1].type]) {
                    if (t = (r.find.ID(o.matches[0].replace(k, d),
                        t) || [])[0], !t) return i;
                    n = n.slice(f.shift()
                        .value.length)
                }
                for (s = yt.needsContext.test(n) ? 0 : f.length; s--;) {
                    if (o = f[s], r.relative[c = o.type]) break;
                    if ((l = r.find[c]) && (u = l(o.matches[0].replace(
                            k, d), ti.test(f[0].type) && t.parentNode ||
                        t))) {
                        if (f.splice(s, 1), n = u.length && wt(f), !
                            n) return b.apply(i, u), i;
                        break
                    }
                }
            }
            return kt(n, h)(u, t, !v, i, ti.test(n)), i
        }
        var ut, e, ht, r, ct, hi, kt, lt, g, nt, s, a, v, h, tt, at, ot,
            o = "sizzle" + -new Date,
            y = n.document,
            p = 0,
            di = 0,
            ci = ri(),
            li = ri(),
            ai = ri(),
            ft = !1,
            dt = function(n, t) {
                return n === t ? (ft = !0, 0) : 0
            },
            st = typeof t,
            vi = -2147483648,
            gi = {}.hasOwnProperty,
            w = [],
            nr = w.pop,
            tr = w.push,
            b = w.push,
            yi = w.slice,
            it = w.indexOf || function(n) {
                for (var t = 0, i = this.length; t < i; t++)
                    if (this[t] === n) return t;
                return -1
            },
            gt =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            f = "[\\x20\\t\\r\\n\\f]",
            et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            pi = et.replace("w", "w#"),
            wi = "\\[" + f + "*(" + et + ")" + f + "*(?:([*^$|!~]?=)" +
            f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + pi + ")|)|)" +
            f + "*\\]",
            ni = ":(" + et +
            ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
            wi.replace(3, 8) + ")*)|.*)\\)|)",
            vt = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f +
                "+$", "g"),
            ir = new RegExp("^" + f + "*," + f + "*"),
            rr = new RegExp("^" + f + "*([>+~]|" + f + ")" + f + "*"),
            ti = new RegExp(f + "*[+~]"),
            ur = new RegExp("=" + f + "*([^\\]'\"]*)" + f + "*\\]", "g"),
            fr = new RegExp(ni),
            er = new RegExp("^" + pi + "$"),
            yt = {
                ID: new RegExp("^#(" + et + ")"),
                CLASS: new RegExp("^\\.(" + et + ")"),
                TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + wi),
                PSEUDO: new RegExp("^" + ni),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    f + "*(even|odd|(([+-]|)(\\d*)n|)" + f +
                    "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)",
                    "i"),
                bool: new RegExp("^(?:" + gt + ")$", "i"),
                needsContext: new RegExp("^" + f +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)",
                    "i")
            },
            ii = /^[^{]+\{\s*\[native \w/,
            or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            cr = /'|\\/g,
            k = new RegExp("\\\\([\\da-f]{1,6}" + f + "?|(" + f +
                ")|.)", "ig"),
            d = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r +
                    65536) : String.fromCharCode(r >> 10 | 55296, r &
                    1023 | 56320)
            };
        try {
            b.apply(w = yi.call(y.childNodes), y.childNodes);
            w[y.childNodes.length].nodeType
        } catch (wr) {
            b = {
                apply: w.length ? function(n, t) {
                    tr.apply(n, yi.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];)
                    ;
                    n.length = i - 1
                }
            }
        }
        hi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n)
                .documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        e = u.support = {};
        nt = u.setDocument = function(n) {
            var t = n ? n.ownerDocument || n : y,
                i = t.defaultView;
            return t === s || t.nodeType !== 9 || !t.documentElement ?
                s : (s = t, a = t.documentElement, v = !hi(t), i &&
                    i.attachEvent && i !== i.top && i.attachEvent(
                        "onbeforeunload", function() {
                            nt()
                        }), e.attributes = l(function(n) {
                        return n.className = "i", !n.getAttribute(
                            "className")
                    }), e.getElementsByTagName = l(function(n) {
                        return n.appendChild(t.createComment("")), !
                            n.getElementsByTagName("*")
                            .length
                    }), e.getElementsByClassName = l(function(n) {
                        return n.innerHTML =
                            "<div class='a'><\/div><div class='a i'><\/div>",
                            n.firstChild.className = "i", n.getElementsByClassName(
                                "i")
                            .length === 2
                    }), e.getById = l(function(n) {
                        return a.appendChild(n)
                            .id = o, !t.getElementsByName || !t
                            .getElementsByName(o)
                            .length
                    }), e.getById ? (r.find.ID = function(n, t) {
                        if (typeof t.getElementById !== st && v) {
                            var i = t.getElementById(n);
                            return i && i.parentNode ? [i] : []
                        }
                    }, r.filter.ID = function(n) {
                        var t = n.replace(k, d);
                        return function(n) {
                            return n.getAttribute("id") ===
                                t
                        }
                    }) : (delete r.find.ID, r.filter.ID = function(
                        n) {
                        var t = n.replace(k, d);
                        return function(n) {
                            var i = typeof n.getAttributeNode !==
                                st && n.getAttributeNode(
                                    "id");
                            return i && i.value === t
                        }
                    }), r.find.TAG = e.getElementsByTagName ?
                    function(n, t) {
                        if (typeof t.getElementsByTagName !== st)
                            return t.getElementsByTagName(n)
                    } : function(n, t) {
                        var i, r = [],
                            f = 0,
                            u = t.getElementsByTagName(n);
                        if (n === "*") {
                            while (i = u[f++]) i.nodeType === 1 &&
                                r.push(i);
                            return r
                        }
                        return u
                    }, r.find.CLASS = e.getElementsByClassName &&
                    function(n, t) {
                        if (typeof t.getElementsByClassName !== st &&
                            v) return t.getElementsByClassName(n)
                    }, tt = [], h = [], (e.qsa = ii.test(t.querySelectorAll)) &&
                    (l(function(n) {
                        n.innerHTML =
                            "<select><option selected=''><\/option><\/select>";
                        n.querySelectorAll("[selected]")
                            .length || h.push("\\[" + f +
                                "*(?:value|" + gt + ")");
                        n.querySelectorAll(":checked")
                            .length || h.push(":checked")
                    }), l(function(n) {
                        var i = t.createElement("input");
                        i.setAttribute("type", "hidden");
                        n.appendChild(i)
                            .setAttribute("t", "");
                        n.querySelectorAll("[t^='']")
                            .length && h.push("[*^$]=" + f +
                                "*(?:''|\"\")");
                        n.querySelectorAll(":enabled")
                            .length || h.push(":enabled",
                                ":disabled");
                        n.querySelectorAll("*,:x");
                        h.push(",.*:")
                    })), (e.matchesSelector = ii.test(at = a.webkitMatchesSelector ||
                        a.mozMatchesSelector || a.oMatchesSelector ||
                        a.msMatchesSelector)) && l(function(n) {
                        e.disconnectedMatch = at.call(n, "div");
                        at.call(n, "[s!='']:x");
                        tt.push("!=", ni)
                    }), h = h.length && new RegExp(h.join("|")), tt =
                    tt.length && new RegExp(tt.join("|")), ot = ii.test(
                        a.contains) || a.compareDocumentPosition ?
                    function(n, t) {
                        var r = n.nodeType === 9 ? n.documentElement :
                            n,
                            i = t && t.parentNode;
                        return n === i || !!(i && i.nodeType === 1 &&
                            (r.contains ? r.contains(i) : n.compareDocumentPosition &&
                                n.compareDocumentPosition(i) &
                                16))
                    } : function(n, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === n) return !0;
                        return !1
                    }, dt = a.compareDocumentPosition ? function(n,
                        i) {
                        if (n === i) return ft = !0, 0;
                        var r = i.compareDocumentPosition && n.compareDocumentPosition &&
                            n.compareDocumentPosition(i);
                        return r ? r & 1 || !e.sortDetached && i.compareDocumentPosition(
                                n) === r ? n === t || ot(y, n) ? -1 :
                            i === t || ot(y, i) ? 1 : g ? it.call(g,
                                n) - it.call(g, i) : 0 : r & 4 ? -1 :
                            1 : n.compareDocumentPosition ? -1 : 1
                    } : function(n, i) {
                        var r, u = 0,
                            o = n.parentNode,
                            s = i.parentNode,
                            f = [n],
                            e = [i];
                        if (n === i) return ft = !0, 0;
                        if (o && s) {
                            if (o === s) return bi(n, i)
                        } else return n === t ? -1 : i === t ? 1 :
                            o ? -1 : s ? 1 : g ? it.call(g, n) -
                            it.call(g, i) : 0;
                        for (r = n; r = r.parentNode;) f.unshift(r);
                        for (r = i; r = r.parentNode;) e.unshift(r);
                        while (f[u] === e[u]) u++;
                        return u ? bi(f[u], e[u]) : f[u] === y ? -1 :
                            e[u] === y ? 1 : 0
                    }, t)
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== s && nt(n), t = t.replace(
                ur, "='$1']"), e.matchesSelector && v && (!tt ||
                !tt.test(t)) && (!h || !h.test(t))) try {
                var i = at.call(n, t);
                if (i || e.disconnectedMatch || n.document && n
                    .document.nodeType !== 11) return i
            } catch (r) {}
            return u(t, s, null, [n])
                .length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== s && nt(n), ot(n, t)
        };
        u.attr = function(n, i) {
            (n.ownerDocument || n) !== s && nt(n);
            var f = r.attrHandle[i.toLowerCase()],
                u = f && gi.call(r.attrHandle, i.toLowerCase()) ? f(
                    n, i, !v) : t;
            return u === t ? e.attributes || !v ? n.getAttribute(i) :
                (u = n.getAttributeNode(i)) && u.specified ? u.value :
                null : u
        };
        u.error = function(n) {
            throw new Error(
                "Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ft = !e.detectDuplicates, g = !e.sortStable && n.slice(
                0), n.sort(dt), ft) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return n
        };
        ct = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i +=
                        ct(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                for (; r = n[u]; u++) i += ct(r);
            return i
        };
        r = u.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: yt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d), n[3] = (n[
                            4] || n[5] || "")
                        .replace(k, d), n[2] === "~=" && (n[3] =
                            " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(
                            0, 3) === "nth" ? (n[3] || u.error(
                                n[0]), n[4] = +(n[4] ? n[5] + (
                                n[6] || 1) : 2 * (n[3] ===
                                "even" || n[3] === "odd")), n[5] = +
                            (n[7] + n[8] || n[3] === "odd")) :
                        n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var r, i = !n[5] && n[2];
                    return yt.CHILD.test(n[0]) ? null : (n[3] &&
                        n[4] !== t ? n[2] = n[4] : i && fr.test(
                            i) && (r = pt(i, !0)) && (r = i
                            .indexOf(")", i.length - r) - i
                            .length) && (n[0] = n[0].slice(
                            0, r), n[2] = i.slice(0, r)), n
                        .slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d)
                        .toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() ===
                            t
                    }
                },
                CLASS: function(n) {
                    var t = ci[n + " "];
                    return t || (t = new RegExp("(^|" + f + ")" +
                        n + "(" + f + "|$)")) && ci(n,
                        function(n) {
                            return t.test(typeof n.className ==
                                "string" && n.className ||
                                typeof n.getAttribute !==
                                st && n.getAttribute(
                                    "class") || "")
                        })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ?
                            (f += "", t === "=" ? f === i :
                                t === "!=" ? f !== i : t ===
                                "^=" ? i && f.indexOf(i) ===
                                0 : t === "*=" ? i && f.indexOf(
                                    i) > -1 : t === "$=" ?
                                i && f.slice(-i.length) ===
                                i : t === "~=" ? (" " + f +
                                    " ")
                                .indexOf(i) > -1 : t ===
                                "|=" ? f === i || f.slice(0,
                                    i.length + 1) === i +
                                "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        e = n.slice(-4) !== "last",
                        f = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var a, k, c, l, v, w, b = s !== e ?
                            "nextSibling" :
                            "previousSibling",
                            y = t.parentNode,
                            g = f && t.nodeName.toLowerCase(),
                            d = !h && !f;
                        if (y) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (f ? c.nodeName.toLowerCase() ===
                                            g : c.nodeType ===
                                            1) return !1;
                                    w = b = n === "only" &&
                                        !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [e ? y.firstChild : y.lastChild],
                                e && d) {
                                for (k = y[o] || (y[o] = {}),
                                    a = k[n] || [], v = a[0] ===
                                    p && a[1], l = a[0] ===
                                    p && a[2], c = v && y.childNodes[
                                        v]; c = ++v && c &&
                                    c[b] || (l = v = 0) ||
                                    w.pop();)
                                    if (c.nodeType === 1 &&
                                        ++l && c === t) {
                                        k[n] = [p, v, l];
                                        break
                                    }
                            } else if (d && (a = (t[o] || (
                                    t[o] = {}))[n]) && a[0] ===
                                p) l = a[1];
                            else
                                while (c = ++v && c && c[b] ||
                                    (l = v = 0) || w.pop())
                                    if ((f ? c.nodeName.toLowerCase() ===
                                        g : c.nodeType ===
                                        1) && ++l && (d &&
                                        ((c[o] || (c[o] = {}))[
                                            n] = [p,
                                            l]), c ===
                                        t)) break; return l -=
                                u, l === r || l % r == 0 &&
                                l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, t) {
                    var f, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] ||
                        u.error("unsupported pseudo: " + n);
                    return i[o] ? i(t) : i.length > 1 ? (f = [n,
                        n, "", t], r.setFilters.hasOwnProperty(
                        n.toLowerCase()) ? c(function(n,
                        r) {
                        for (var u, f = i(n, t), e =
                            f.length; e--;) u = it.call(
                            n, f[e]), n[u] = !(
                            r[u] = f[e])
                    }) : function(n) {
                        return i(n, 0, f)
                    }) : i
                }
            },
            pseudos: {
                not: c(function(n) {
                    var i = [],
                        r = [],
                        t = kt(n.replace(vt, "$1"));
                    return t[o] ? c(function(n, i, r, u) {
                        for (var e, o = t(n, null,
                            u, []), f = n.length; f--;)
                            (e = o[f]) && (n[f] = !
                                (i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n, t(i, null, f,
                            r), !r.pop()
                    }
                }),
                has: c(function(n) {
                    return function(t) {
                        return u(n, t)
                            .length > 0
                    }
                }),
                contains: c(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText ||
                                ct(t))
                            .indexOf(n) > -1
                    }
                }),
                lang: c(function(n) {
                    return er.test(n || "") || u.error(
                            "unsupported lang: " + n), n =
                        n.replace(k, d)
                        .toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = v ? t.lang : t.getAttribute(
                                    "xml:lang") || t.getAttribute(
                                    "lang")) return i = i.toLowerCase(),
                                    i === n || i.indexOf(
                                        n + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType ===
                                1);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === a
                },
                focus: function(n) {
                    return n === s.activeElement && (!s.hasFocus ||
                        s.hasFocus()) && !!(n.type || n.href ||
                        ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t ===
                        "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                        n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeName > "@" || n.nodeType ===
                            3 || n.nodeType === 4) return !1;
                    return !0
                },
                parent: function(n) {
                    return !r.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" ||
                        t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" &&
                        n.type === "text" && ((t = n.getAttribute(
                                "type")) == null || t.toLowerCase() ===
                            n.type)
                },
                first: rt(function() {
                    return [0]
                }),
                last: rt(function(n, t) {
                    return [t - 1]
                }),
                eq: rt(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: rt(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: rt(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: rt(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >=
                        0;) n.push(r);
                    return n
                }),
                gt: rt(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;)
                        n.push(r);
                    return n
                })
            }
        };
        r.pseudos.nth = r.pseudos.eq;
        for (ut in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[ut] = lr(ut);
        for (ut in {
            submit: !0,
            reset: !0
        }) r.pseudos[ut] = ar(ut);
        ki.prototype = r.filters = r.pseudos;
        r.setFilters = new ki;
        kt = u.compile = function(n, t) {
            var r, u = [],
                f = [],
                i = ai[n + " "];
            if (!i) {
                for (t || (t = pt(n)), r = t.length; r--;) i = si(t[
                    r]), i[o] ? u.push(i) : f.push(i);
                i = ai(n, vr(f, u))
            }
            return i
        };
        e.sortStable = o.split("")
            .sort(dt)
            .join("") === o;
        e.detectDuplicates = ft;
        nt();
        e.sortDetached = l(function(n) {
            return n.compareDocumentPosition(s.createElement(
                "div")) & 1
        });
        l(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild
                .getAttribute("href") === "#"
        }) || ui("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() ===
                "type" ? 1 : 2)
        });
        e.attributes && l(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute(
                "value", ""), n.firstChild.getAttribute(
                "value") === ""
        }) || ui("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input")
                return n.defaultValue
        });
        l(function(n) {
            return n.getAttribute("disabled") == null
        }) || ui(gt, function(n, t, i) {
            var r;
            if (!i) return (r = n.getAttributeNode(t)) && r.specified ?
                r.value : n[t] === !0 ? t.toLowerCase() :
                null
        });
        i.find = u;
        i.expr = u.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = u.uniqueSort;
        i.text = u.getText;
        i.isXMLDoc = u.isXML;
        i.contains = u.contains
    })(n);
    dt = {};
    i.Callbacks = function(n) {
        n = typeof n == "string" ? dt[n] || ku(n) : i.extend({}, n);
        var f, c, s, l, e, o, r = [],
            u = !n.once && [],
            a = function(t) {
                for (f = n.memory && t, c = !0, o = l || 0, l = 0, e =
                    r.length, s = !0; r && o < e; o++)
                    if (r[o].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                        f = !1;
                        break
                    }
                s = !1;
                r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
            },
            h = {
                add: function() {
                    if (r) {
                        var t = r.length;
                        (function u(t) {
                            i.each(t, function(t, f) {
                                var e = i.type(f);
                                e === "function" ? n.unique &&
                                    h.has(f) || r.push(
                                        f) : f && f.length &&
                                    e !== "string" && u(
                                        f)
                            })
                        })(arguments);
                        s ? e = r.length : f && (l = t, a(f))
                    }
                    return this
                },
                remove: function() {
                    return r && i.each(arguments, function(n, t) {
                        for (var u;
                            (u = i.inArray(t, r, u)) > -1;)
                            r.splice(u, 1), s && (u <= e &&
                                e--, u <= o && o--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, r) > -1 : !!(r && r.length)
                },
                empty: function() {
                    return r = [], e = 0, this
                },
                disable: function() {
                    return r = u = f = t, this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return u = t, f || h.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(n, t) {
                    return r && (!c || u) && (t = t || [], t = [n,
                        t.slice ? t.slice() : t], s ? u.push(
                        t) : a(t)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return h
    };
    i.extend({
        Deferred: function(n) {
            var u = [["resolve", "done", i.Callbacks(
                    "once memory"), "resolved"], ["reject",
                    "fail", i.Callbacks("once memory"),
                    "rejected"], ["notify", "progress", i.Callbacks(
                    "memory")]],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments)
                            .fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var s = e[0],
                                        o = i.isFunction(
                                            n[u]
                                        ) && n[
                                            u];
                                    t[e[1]](
                                        function() {
                                            var
                                                n =
                                                o &&
                                                o
                                                .apply(
                                                    this,
                                                    arguments
                                                );
                                            n
                                                &&
                                                i
                                                .isFunction(
                                                    n
                                                    .promise
                                                ) ?
                                                n
                                                .promise()
                                                .done(
                                                    f
                                                    .resolve
                                                )
                                                .fail(
                                                    f
                                                    .reject
                                                )
                                                .progress(
                                                    f
                                                    .notify
                                                ) :
                                                f[
                                                    s +
                                                    "With"
                                                    ]
                                                (
                                                    this ===
                                                    r ?
                                                    f
                                                    .promise() :
                                                    this,
                                                    o ? [
                                                        n
                                                        ] :
                                                    arguments
                                                )
                                        })
                                });
                                n = null
                            })
                            .promise()
                    },
                    promise: function(n) {
                        return n != null ? i.extend(n, r) :
                            r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                        f = o
                    }, u[n ^ 1][2].disable, u[2][2]
                    .lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this ===
                        t ? r : this, arguments
                    ), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = a.call(arguments),
                r = u.length,
                e = r !== 1 || n && i.isFunction(n.promise) ? r :
                0,
                f = e === 1 ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? a.call(
                            arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e ||
                            f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s =
                    new Array(r); t < r; t++) u[t] && i.isFunction(
                        u[t].promise) ? u[t].promise()
                    .done(h(t, s, u))
                    .fail(f.reject)
                    .progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.support = function(t) {
        var r = u.createElement("input"),
            e = u.createDocumentFragment(),
            f = u.createElement("div"),
            o = u.createElement("select"),
            s = o.appendChild(u.createElement("option"));
        return r.type ? (r.type = "checkbox", t.checkOn = r.value !==
            "", t.optSelected = s.selected, t.reliableMarginRight = !
            0, t.boxSizingReliable = !0, t.pixelPosition = !1, r.checked = !
            0, t.noCloneChecked = r.cloneNode(!0)
            .checked, o.disabled = !0, t.optDisabled = !s.disabled,
            r = u.createElement("input"), r.value = "t", r.type =
            "radio", t.radioValue = r.value === "t", r.setAttribute(
                "checked", "t"), r.setAttribute("name", "t"), e.appendChild(
                r), t.checkClone = e.cloneNode(!0)
            .cloneNode(!0)
            .lastChild.checked, t.focusinBubbles = "onfocusin" in n,
            f.style.backgroundClip = "content-box", f.cloneNode(!0)
            .style.backgroundClip = "", t.clearCloneStyle = f.style
            .backgroundClip === "content-box", i(function() {
                var o, r, e = u.getElementsByTagName("body")[0];
                e && (o = u.createElement("div"), o.style.cssText =
                    "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                    e.appendChild(o)
                    .appendChild(f), f.innerHTML = "", f.style
                    .cssText =
                    "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",
                    i.swap(e, e.style.zoom != null ? {
                        zoom: 1
                    } : {}, function() {
                        t.boxSizing = f.offsetWidth ===
                            4
                    }), n.getComputedStyle && (t.pixelPosition =
                        (n.getComputedStyle(f, null) || {})
                        .top !== "1%", t.boxSizingReliable =
                        (n.getComputedStyle(f, null) || {
                            width: "4px"
                        })
                        .width === "4px", r = f.appendChild(
                            u.createElement("div")), r.style
                        .cssText = f.style.cssText =
                        "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                        r.style.marginRight = r.style.width =
                        "0", f.style.width = "1px", t.reliableMarginRight = !
                        parseFloat((n.getComputedStyle(r,
                                null) || {})
                            .marginRight)), e.removeChild(o)
                )
            }), t) : t
    }({});
    vi = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
    yi = /([A-Z])/g;
    c.uid = 1;
    c.accepts = function(n) {
        return n.nodeType ? n.nodeType === 1 || n.nodeType === 9 : !0
    };
    c.prototype = {
        key: function(n) {
            if (!c.accepts(n)) return 0;
            var r = {},
                t = n[this.expando];
            if (!t) {
                t = c.uid++;
                try {
                    r[this.expando] = {
                        value: t
                    };
                    Object.defineProperties(n, r)
                } catch (u) {
                    r[this.expando] = t;
                    i.extend(n, r)
                }
            }
            return this.cache[t] || (this.cache[t] = {}), t
        },
        set: function(n, t, r) {
            var f, e = this.key(n),
                u = this.cache[e];
            if (typeof t == "string") u[t] = r;
            else if (i.isEmptyObject(u)) i.extend(this.cache[e], t);
            else
                for (f in t) u[f] = t[f];
            return u
        },
        get: function(n, i) {
            var r = this.cache[this.key(n)];
            return i === t ? r : r[i]
        },
        access: function(n, r, u) {
            var f;
            return r === t || r && typeof r == "string" && u === t ?
                (f = this.get(n, r), f !== t ? f : this.get(n, i.camelCase(
                    r))) : (this.set(n, r, u), u !== t ? u : r)
        },
        remove: function(n, r) {
            var f, u, e, s = this.key(n),
                o = this.cache[s];
            if (r === t) this.cache[s] = {};
            else
                for (i.isArray(r) ? u = r.concat(r.map(i.camelCase)) :
                    (e = i.camelCase(r), r in o ? u = [r, e] : (u =
                        e, u = u in o ? [u] : u.match(h) || [])), f =
                    u.length; f--;) delete o[u[f]]
        },
        hasData: function(n) {
            return !i.isEmptyObject(this.cache[n[this.expando]] || {})
        },
        discard: function(n) {
            n[this.expando] && delete this.cache[n[this.expando]]
        }
    };
    f = new c;
    r = new c;
    i.extend({
        acceptData: c.accepts,
        hasData: function(n) {
            return f.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return f.access(n, t, i)
        },
        removeData: function(n, t) {
            f.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, u) {
            var s, o, e = this[0],
                h = 0,
                c = null;
            if (n === t) {
                if (this.length && (c = f.get(e), e.nodeType ===
                    1 && !r.get(e, "hasDataAttrs"))) {
                    for (s = e.attributes; h < s.length; h++) o =
                        s[h].name, o.indexOf("data-") === 0 &&
                        (o = i.camelCase(o.slice(5)), pi(e, o,
                            c[o]));
                    r.set(e, "hasDataAttrs", !0)
                }
                return c
            }
            return typeof n == "object" ? this.each(function() {
                f.set(this, n)
            }) : i.access(this, function(r) {
                var u, o = i.camelCase(n);
                if (e && r === t) return (u = f.get(e,
                        n), u !== t) ? u : (u = f.get(
                        e, o), u !== t) ? u : (u =
                        pi(e, o, t), u !== t) ? u :
                    void 0;
                this.each(function() {
                    var i = f.get(this, o);
                    f.set(this, o, r);
                    n.indexOf("-") !== -1 && i !==
                        t && f.set(this, n, r)
                })
            }, null, u, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                f.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(
                n, t), u && (!f || i.isArray(u) ? f = r
                .access(n, t, i.makeArray(u)) : f.push(
                    u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f
                .stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory")
                    .add(function() {
                        r.remove(n, [t + "queue", u])
                    })
            })
        }
    });
    i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n, n = "fx", u--),
                    arguments.length < u) ? i.queue(this[0], n) :
                r === t ? this : this.each(function() {
                    var t = i.queue(this, n, r);
                    i._queueHooks(this, n);
                    n === "fx" && t[0] !== "inprogress" &&
                        i.dequeue(this, n)
                })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t ||
                "fx", this.queue(t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, u) {
            var f, o = 1,
                s = i.Deferred(),
                e = this,
                h = this.length,
                c = function() {
                    --o || s.resolveWith(e, [e])
                };
            for (typeof n != "string" && (u = n, n = t), n = n ||
                "fx"; h--;) f = r.get(e[h], n + "queueHooks"),
                f && f.empty && (o++, f.empty.add(c));
            return c(), s.promise(u)
        }
    });
    var du, wi, gt = /[\t\r\n\f]/g,
        gu = /\r/g,
        nf = /^(?:input|select|textarea|button)$/i;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length >
                1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length >
                1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        },
        addClass: function(n) {
            var e, t, r, u, o, f = 0,
                s = this.length,
                c = typeof n == "string" && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this)
                    .addClass(n.call(this, t, this.className))
            });
            if (c)
                for (e = (n || "")
                    .match(h) || []; f < s; f++)
                    if (t = this[f], r = t.nodeType === 1 && (t
                        .className ? (" " + t.className +
                            " ")
                        .replace(gt, " ") : " "), r) {
                        for (o = 0; u = e[o++];) r.indexOf(" " +
                            u + " ") < 0 && (r += u + " ");
                        t.className = i.trim(r)
                    }
            return this
        },
        removeClass: function(n) {
            var e, r, t, u, o, f = 0,
                s = this.length,
                c = arguments.length === 0 || typeof n ==
                "string" && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this)
                    .removeClass(n.call(this, t,
                        this.className))
            });
            if (c)
                for (e = (n || "")
                    .match(h) || []; f < s; f++)
                    if (r = this[f], t = r.nodeType === 1 && (r
                        .className ? (" " + r.className +
                            " ")
                        .replace(gt, " ") : ""), t) {
                        for (o = 0; u = e[o++];)
                            while (t.indexOf(" " + u + " ") >=
                                0) t = t.replace(" " + u + " ",
                                " ");
                        r.className = n ? i.trim(t) : ""
                    }
            return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return typeof t == "boolean" && u === "string" ? t ?
                this.addClass(n) : this.removeClass(n) : i.isFunction(
                    n) ? this.each(function(r) {
                    i(this)
                        .toggleClass(n.call(this, r, this.className,
                            t), t)
                }) : this.each(function() {
                    if (u === "string")
                        for (var t, e = 0, f = i(this), o =
                            n.match(h) || []; t = o[e++];) f
                            .hasClass(t) ? f.removeClass(t) :
                            f.addClass(t);
                    else(u === rt || u === "boolean") && (
                        this.className && r.set(this,
                            "__className__", this.className
                        ), this.className = this.className ||
                        n === !1 ? "" : r.get(this,
                            "__className__") || "")
                })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t <
                r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className +
                        " ")
                    .replace(gt, " ")
                    .indexOf(i) >= 0) return !0;
            return !1
        },
        val: function(n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n),
                this.each(function(u) {
                    var f;
                    this.nodeType === 1 && (f = e ? n.call(
                            this, u, i(this)
                            .val()) : n, f == null ?
                        f = "" : typeof f ==
                        "number" ? f += "" : i.isArray(
                            f) && (f = i.map(f,
                            function(n) {
                                return n ==
                                    null ? "" :
                                    n + ""
                            })), r = i.valHooks[
                            this.type] || i.valHooks[
                            this.nodeName.toLowerCase()
                            ], r && "set" in r && r
                        .set(this, f, "value") !==
                        t || (this.value = f))
                })) : f ? (r = i.valHooks[f.type] || i.valHooks[
                    f.nodeName.toLowerCase()], r && "get" in
                r && (u = r.get(f, "value")) !== t) ? u : (
                u = f.value, typeof u == "string" ? u.replace(
                    gu, "") : u == null ? "" : u) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, r = n.selectedIndex,
                            u = n.type === "select-one" || r <
                            0, s = u ? null : [], h = u ? r + 1 :
                            o.length, f = r < 0 ? h : u ? r : 0; f <
                        h; f++)
                        if (t = o[f], (t.selected || f === r) &&
                            (i.support.optDisabled ? !t.disabled :
                                t.getAttribute("disabled") ===
                                null) && (!t.parentNode.disabled ||
                                !i.nodeName(t.parentNode,
                                    "optgroup"))) {
                            if (e = i(t)
                                .val(), u) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(
                        t), o = f.length; o--;) r = f[o], (r.selected =
                        i.inArray(i(r)
                            .val(), e) >= 0) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        },
        attr: function(n, r, u) {
            var f, e, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2) {
                if (typeof n.getAttribute === rt) return i.prop(
                    n, r, u);
                if (o === 1 && i.isXMLDoc(n) || (r = r.toLowerCase(),
                    f = i.attrHooks[r] || (i.expr.match.bool
                        .test(r) ? wi : du)), u !== t)
                    if (u === null) i.removeAttr(n, r);
                    else return f && "set" in f && (e = f.set(n,
                        u, r)) !== t ? e : (n.setAttribute(
                        r, u + ""), u);
                else return f && "get" in f && (e = f.get(n, r)) !==
                    null ? e : (e = i.find.attr(n, r), e ==
                        null ? t : e)
            }
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && n.nodeType === 1)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr
                    .match.bool.test(r) && (n[u] = !1), n.removeAttribute(
                        r)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!i.support.radioValue && t === "radio" &&
                        i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r &&
                            (n.value = r), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2) return s =
                o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[
                    r] || r, f = i.propHooks[r]), u !== t ?
                f && "set" in f && (e = f.set(n, u, r)) !==
                t ? e : n[r] = u : f && "get" in f && (e =
                    f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    return n.hasAttribute("tabindex") || nf.test(
                            n.nodeName) || n.href ? n.tabIndex :
                        -1
                }
            }
        }
    });
    wi = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r,
                r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, r) {
        var u = i.expr.attrHandle[r] || i.find.attr;
        i.expr.attrHandle[r] = function(n, r, f) {
            var e = i.expr.attrHandle[r],
                o = f ? t : (i.expr.attrHandle[r] = t) != u(n,
                    r, f) ? r.toLowerCase() : null;
            return i.expr.attrHandle[r] = e, o
        }
    });
    i.support.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
                null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing",
        "cellPadding", "rowSpan", "colSpan", "useMap",
        "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(
                    i(n)
                    .val(), t) >= 0
            }
        };
        i.support.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" :
                n.value
        })
    });
    var tf = /^key/,
        rf = /^(?:mouse|contextmenu)|click/,
        bi = /^(?:focusinfocus|focusoutblur)$/,
        ki = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, u, f, e, o) {
            var p, l, b, w, k, a, c, v, s, d, g, y = r.get(n);
            if (y) {
                for (f.handler && (p = f, f = p.handler, o = p.selector),
                    f.guid || (f.guid = i.guid++), (w = y.events) ||
                    (w = y.events = {}), (l = y.handle) || (l = y.handle =
                        function(n) {
                            return typeof i !== rt && (!n || i.event
                                    .triggered !== n.type) ? i.event
                                .dispatch.apply(l.elem, arguments) :
                                t
                        }, l.elem = n), u = (u || "")
                    .match(h) || [""], k = u.length; k--;)(b = ki.exec(
                        u[k]) || [], s = g = b[1], d = (b[2] ||
                        "")
                    .split(".")
                    .sort(), s) && (c = i.event.special[s] || {},
                    s = (o ? c.delegateType : c.bindType) || s,
                    c = i.event.special[s] || {}, a = i.extend({
                        type: s,
                        origType: g,
                        data: e,
                        handler: f,
                        guid: f.guid,
                        selector: o,
                        needsContext: o && i.expr.match.needsContext
                            .test(o),
                        namespace: d.join(".")
                    }, p), (v = w[s]) || (v = w[s] = [], v.delegateCount =
                        0, c.setup && c.setup.call(n, e, d, l) !==
                        !1 || n.addEventListener && n.addEventListener(
                            s, l, !1)), c.add && (c.add.call(n,
                        a), a.handler.guid || (a.handler.guid =
                        f.guid)), o ? v.splice(v.delegateCount++,
                        0, a) : v.push(a), i.event.global[s] = !
                    0);
                n = null
            }
        },
        remove: function(n, t, u, f, e) {
            var p, k, c, v, w, s, l, a, o, b, d, y = r.hasData(n) &&
                r.get(n);
            if (y && (v = y.events)) {
                for (t = (t || "")
                    .match(h) || [""], w = t.length; w--;) {
                    if (c = ki.exec(t[w]) || [], o = d = c[1], b =
                        (c[2] || "")
                        .split(".")
                        .sort(), !o) {
                        for (o in v) i.event.remove(n, o + t[w], u,
                            f, !0);
                        continue
                    }
                    for (l = i.event.special[o] || {}, o = (f ? l.delegateType :
                            l.bindType) || o, a = v[o] || [], c = c[
                            2] && new RegExp("(^|\\.)" + b.join(
                            "\\.(?:.*\\.|)") + "(\\.|$)"), k = p =
                        a.length; p--;) s = a[p], (e || d === s.origType) &&
                        (!u || u.guid === s.guid) && (!c || c.test(
                            s.namespace)) && (!f || f === s.selector ||
                            f === "**" && s.selector) && (a.splice(
                                p, 1), s.selector && a.delegateCount--,
                            l.remove && l.remove.call(n, s));
                    k && !a.length && (l.teardown && l.teardown.call(
                        n, b, y.handle) !== !1 || i.removeEvent(
                        n, o, y.handle), delete v[o])
                }
                i.isEmptyObject(v) && (delete y.handle, r.remove(n,
                    "events"))
            }
        },
        trigger: function(f, e, o, s) {
            var b, h, l, k, v, y, a, w = [o || u],
                c = bt.call(f, "type") ? f.type : f,
                p = bt.call(f, "namespace") ? f.namespace.split(".") : [];
            if ((h = l = o = o || u, o.nodeType !== 3 && o.nodeType !==
                8) && !bi.test(c + i.event.triggered) && (c.indexOf(
                    ".") >= 0 && (p = c.split("."), c = p.shift(),
                    p.sort()), v = c.indexOf(":") < 0 && "on" +
                c, f = f[i.expando] ? f : new i.Event(c, typeof f ==
                    "object" && f), f.isTrigger = s ? 2 : 3, f.namespace =
                p.join("."), f.namespace_re = f.namespace ? new RegExp(
                    "(^|\\.)" + p.join("\\.(?:.*\\.|)") +
                    "(\\.|$)") : null, f.result = t, f.target ||
                (f.target = o), e = e == null ? [f] : i.makeArray(
                    e, [f]), a = i.event.special[c] || {}, s ||
                !a.trigger || a.trigger.apply(o, e) !== !1)) {
                if (!s && !a.noBubble && !i.isWindow(o)) {
                    for (k = a.delegateType || c, bi.test(k + c) ||
                        (h = h.parentNode); h; h = h.parentNode) w.push(
                        h), l = h;
                    l === (o.ownerDocument || u) && w.push(l.defaultView ||
                        l.parentWindow || n)
                }
                for (b = 0;
                    (h = w[b++]) && !f.isPropagationStopped();) f.type =
                    b > 1 ? k : a.bindType || c, y = (r.get(h,
                        "events") || {})[f.type] && r.get(h,
                        "handle"), y && y.apply(h, e), y = v && h[v],
                    y && i.acceptData(h) && y.apply && y.apply(h, e) ===
                    !1 && f.preventDefault();
                return f.type = c, s || f.isDefaultPrevented() || (!
                    a._default || a._default.apply(w.pop(), e) ===
                    !1) && i.acceptData(o) && v && i.isFunction(
                    o[c]) && !i.isWindow(o) && (l = o[v], l &&
                    (o[v] = null), i.event.triggered = c, o[c](),
                    i.event.triggered = t, l && (o[v] = l)), f.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var s, h, o, f, u, c = [],
                l = a.call(arguments),
                v = (r.get(this, "events") || {})[n.type] || [],
                e = i.event.special[n.type] || {};
            if (l[0] = n, n.delegateTarget = this, !e.preDispatch ||
                e.preDispatch.call(this, n) !== !1) {
                for (c = i.event.handlers.call(this, n, v), s = 0;
                    (f = c[s++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = f.elem, h = 0;
                        (u = f.handlers[h++]) && !n.isImmediatePropagationStopped();
                    )(!n.namespace_re || n.namespace_re.test(u.namespace)) &&
                        (n.handleObj = u, n.data = u.data, o = ((i.event
                                    .special[u.origType] || {})
                                .handle || u.handler)
                            .apply(f.elem, l), o !== t && (n.result =
                                o) === !1 && (n.preventDefault(), n
                                .stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this,
                    n), n.result
            }
        },
        handlers: function(n, r) {
            var o, f, e, s, c = [],
                h = r.delegateCount,
                u = n.target;
            if (h && u.nodeType && (!n.button || n.type !== "click"))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || n.type !== "click") {
                        for (f = [], o = 0; o < h; o++) s = r[o], e =
                            s.selector + " ", f[e] === t && (f[e] =
                                s.needsContext ? i(e, this)
                                .index(u) >= 0 : i.find(e, this,
                                    null, [u])
                                .length), f[e] && f.push(s);
                        f.length && c.push({
                            elem: u,
                            handlers: f
                        })
                    }
            return h < r.length && c.push({
                elem: this,
                handlers: r.slice(h)
            }), c
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
            .split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return n.which == null && (n.which = t.charCode !=
                    null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement"
                .split(" "),
            filter: function(n, i) {
                var o, r, f, e = i.button;
                return n.pageX == null && i.clientX != null && (o =
                    n.target.ownerDocument || u, r = o.documentElement,
                    f = o.body, n.pageX = i.clientX + (r && r.scrollLeft ||
                        f && f.scrollLeft || 0) - (r && r.clientLeft ||
                        f && f.clientLeft || 0), n.pageY = i.clientY +
                    (r && r.scrollTop || f && f.scrollTop || 0) -
                    (r && r.clientTop || f && f.clientTop || 0)
                ), n.which || e === t || (n.which = e & 1 ? 1 :
                    e & 2 ? 3 : e & 4 ? 2 : 0), n
            }
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var f, e, o, r = n.type,
                s = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = rf.test(r) ? this.mouseHooks :
                    tf.test(r) ? this.keyHooks : {}), o = t.props ?
                this.props.concat(t.props) : this.props, n = new i.Event(
                    s), f = o.length; f--;) e = o[f], n[e] = s[e];
            return n.target || (n.target = u), n.target.nodeType ===
                3 && (n.target = n.target.parentNode), t.filter ? t
                .filter(n, s) : n
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== di() && this.focus) return this.focus(), !
                        1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === di() && this.blur) return this.blur(), !
                        1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && i
                        .nodeName(this, "input")) return this.click(), !
                        1
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== t && (n.originalEvent.returnValue =
                        n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(
                t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this
            .isDefaultPrevented = n.defaultPrevented || n.getPreventDefault &&
            n.getPreventDefault() ? ht : p) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ht;
            n && n.preventDefault && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ht;
            n && n.stopPropagation && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = ht;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) ||
                    (n.type = e.origType, u = e.handler.apply(
                        this, arguments), n.type = t), u
            }
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = 0,
            f = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
        i.event.special[t] = {
            setup: function() {
                r++ == 0 && u.addEventListener(n, f, !0)
            },
            teardown: function() {
                --r == 0 && u.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function(n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r, u = r = t) : f ==
                null && (typeof r == "string" ? (f = u, u = t) :
                    (f = u, u = r, r = t)), f === !1) f = p;
            else if (!f) return this;
            return e === 1 && (o = f, f = function(n) {
                    return i()
                        .off(n), o.apply(this, arguments)
                }, f.guid = o.guid || (o.guid = i.guid++)),
                this.each(function() {
                    i.event.add(this, n, f, u, r)
                })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f =
                n.handleObj, i(n.delegateTarget)
                .off(f.namespace ? f.origType + "." + f.namespace :
                    f.origType, f.selector, f.handler),
                this;
            if (typeof n == "object") {
                for (e in n) this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u =
                r, r = t), u === !1 && (u = p), this.each(
                function() {
                    i.event.remove(this, n, u, r)
                })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var uf = /^.[^:#\[\.,]*$/,
        ff = /^(?:parents|prev(?:Until|All))/,
        gi = i.expr.match.needsContext,
        ef = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function(n) {
            var t, r = [],
                u = this,
                f = u.length;
            if (typeof n != "string") return this.pushStack(i(n)
                .filter(function() {
                    for (t = 0; t < f; t++)
                        if (i.contains(u[t], this))
                            return !0
                }));
            for (t = 0; t < f; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r),
                r.selector = this.selector ? this.selector +
                " " + n : n, r
        },
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !
                        0
            })
        },
        not: function(n) {
            return this.pushStack(ni(this, n || [], !0))
        },
        filter: function(n) {
            return this.pushStack(ni(this, n || [], !1))
        },
        is: function(n) {
            return !!ni(this, typeof n == "string" && gi.test(n) ?
                    i(n) : n || [], !1)
                .length
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = gi.test(
                n) || typeof n != "string" ? i(n, t ||
                this.context) : 0; f < o; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 :
                        r.nodeType === 1 && i.find.matchesSelector(
                            r, n))) {
                        r = u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) :
                u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? et.call(i(n),
                    this[0]) : et.call(this, n.jquery ? n[0] :
                    n) : this[0] && this[0].parentNode ? this.first()
                .prevAll()
                .length : -1
        },
        add: function(n, t) {
            var r = typeof n == "string" ? i(n, t) : i.makeArray(
                    n && n.nodeType ? [n] : n),
                u = i.merge(this.get(), r);
            return this.pushStack(i.unique(u))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject
                .filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return nr(n, "nextSibling")
        },
        prev: function(n) {
            return nr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {})
                .firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return n.contentDocument || i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u &&
                typeof u == "string" && (f = i.filter(u, f)),
                this.length > 1 && (ef[n] || i.unique(f), ff.test(
                    n) && f.reverse()), this.pushStack(f)
        }
    });
    i.extend({
        filter: function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), t.length === 1 &&
                u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [
                    u] : [] : i.find.matches(n, i.grep(t,
                    function(n) {
                        return n.nodeType === 1
                    }))
        },
        dir: function(n, r, u) {
            for (var f = [], e = u !== t;
                (n = n[r]) && n.nodeType !== 9;)
                if (n.nodeType === 1) {
                    if (e && i(n)
                        .is(u)) break;
                    f.push(n)
                }
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType ===
                1 && n !== t && i.push(n);
            return i
        }
    });
    var tr =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ir = /<([\w:]+)/,
        of = /<|&#?\w+;/,
        sf = /<(?:script|style|link)/i,
        rr = /^(?:checkbox|radio)$/i,
        hf = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ur = /^$|\/(?:java|ecma)script/i,
        cf = /^true\/(.*)/,
        lf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        s = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty()
                    .append((this[0] && this[0].ownerDocument ||
                            u)
                        .createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType ===
                    11 || this.nodeType === 9) {
                    var t = fr(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType ===
                    11 || this.nodeType === 9) {
                    var t = fr(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(
                    n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(
                    n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, f = n ? i.filter(n, this) : this, u = 0;
                (r = f[u]) != null; u++) t || r.nodeType !== 1 ||
                i.cleanData(o(r)), r.parentNode && (t && i.contains(
                        r.ownerDocument, r) && ti(o(r, "script")),
                    r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0;
                (n = this[t]) != null; t++) n.nodeType === 1 &&
                (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n :
                t, this.map(function() {
                    return i.clone(this, n, t)
                })
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {},
                    u = 0,
                    f = this.length;
                if (n === t && r.nodeType === 1) return
                    r.innerHTML;
                if (typeof n == "string" && !sf.test(n) &&
                    !s[(ir.exec(n) || ["", ""])[1].toLowerCase()]
                ) {
                    n = n.replace(tr, "<$1><\/$2>");
                    try {
                        for (; u < f; u++) r = this[u] || {},
                            r.nodeType === 1 && (i.cleanData(
                                    o(r, !1)), r.innerHTML =
                                n);
                        r = 0
                    } catch (e) {}
                }
                r && this.empty()
                    .append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var t = i.map(this, function(n) {
                    return [n.nextSibling, n.parentNode]
                }),
                n = 0;
            return this.domManip(arguments, function(r) {
                var u = t[n++],
                    f = t[n++];
                f && (u && u.parentNode !== f && (u =
                        this.nextSibling), i(this)
                    .remove(), f.insertBefore(r, u)
                )
            }, !0), n ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t, u) {
            n = li.apply([], n);
            var h, v, s, c, f, y, e = 0,
                l = this.length,
                w = this,
                b = l - 1,
                a = n[0],
                p = i.isFunction(a);
            if (p || !(l <= 1 || typeof a != "string" || i.support
                .checkClone || !hf.test(a))) return this.each(
                function(i) {
                    var r = w.eq(i);
                    p && (n[0] = a.call(this, i, r.html()));
                    r.domManip(n, t, u)
                });
            if (l && (h = i.buildFragment(n, this[0].ownerDocument, !
                    1, !u && this), v = h.firstChild, h.childNodes
                .length === 1 && (h = v), v)) {
                for (s = i.map(o(h, "script"), af), c = s.length; e <
                    l; e++) f = h, e !== b && (f = i.clone(f, !
                    0, !0), c && i.merge(s, o(f,
                    "script"))), t.call(this[e], f, e);
                if (c)
                    for (y = s[s.length - 1].ownerDocument, i.map(
                        s, vf), e = 0; e < c; e++) f = s[e], ur
                        .test(f.type || "") && !r.access(f,
                            "globalEval") && i.contains(y, f) &&
                        (f.src ? i._evalUrl(f.src) : i.globalEval(
                            f.textContent.replace(lf, "")))
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r =
                0; r <= o; r++) u = r === o ? this : this.clone(!
                0), i(e[r])[t](u), wt.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    i.extend({
        clone: function(n, t, r) {
            var u, h, e, f, s = n.cloneNode(!0),
                c = i.contains(n.ownerDocument, n);
            if (!i.support.noCloneChecked && (n.nodeType === 1 ||
                n.nodeType === 11) && !i.isXMLDoc(n))
                for (f = o(s), e = o(n), u = 0, h = e.length; u <
                    h; u++) yf(e[u], f[u]);
            if (t)
                if (r)
                    for (e = e || o(n), f = f || o(s), u = 0, h =
                        e.length; u < h; u++) er(e[u], f[u]);
                else er(n, s);
            return f = o(s, "script"), f.length > 0 && ti(f, !c &&
                o(n, "script")), s
        },
        buildFragment: function(n, t, r, u) {
            for (var f, e, y, l, p, a, h = 0, w = n.length, c =
                t.createDocumentFragment(), v = []; h < w; h++)
                if (f = n[h], f || f === 0)
                    if (i.type(f) === "object") i.merge(v, f.nodeType ? [
                        f] : f);
                    else if (of.test(f)) {
                for (e = e || c.appendChild(t.createElement(
                        "div")), y = (ir.exec(f) || ["", ""])[1]
                    .toLowerCase(), l = s[y] || s._default, e.innerHTML =
                    l[1] + f.replace(tr, "<$1><\/$2>") + l[2],
                    a = l[0]; a--;) e = e.lastChild;
                i.merge(v, e.childNodes);
                e = c.firstChild;
                e.textContent = ""
            } else v.push(t.createTextNode(f));
            for (c.textContent = "", h = 0; f = v[h++];)
                if ((!u || i.inArray(f, u) === -1) && (p = i.contains(
                    f.ownerDocument, f), e = o(c.appendChild(
                    f), "script"), p && ti(e), r))
                    for (a = 0; f = e[a++];) ur.test(f.type ||
                        "") && r.push(f);
            return c
        },
        cleanData: function(n) {
            for (var s, u, h, o, e, l, v = i.event.special, a =
                    0;
                (u = n[a]) !== t; a++) {
                if (c.accepts(u) && (e = u[r.expando], e && (s =
                    r.cache[e]))) {
                    if (h = Object.keys(s.events || {}), h.length)
                        for (l = 0;
                            (o = h[l]) !== t; l++) v[o] ? i.event
                            .remove(u, o) : i.removeEvent(u, o,
                                s.handle);
                    r.cache[e] && delete r.cache[e]
                }
                delete f.cache[u[f.expando]]
            }
        },
        _evalUrl: function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    });
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return i.isFunction(n) ? this.each(function(t) {
                i(this)
                    .wrapAll(n.call(this, t))
            }) : (this[0] && (t = i(n, this[0].ownerDocument)
                .eq(0)
                .clone(!0), this[0].parentNode && t.insertBefore(
                    this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;)
                        n = n.firstElementChild;
                    return n
                })
                .append(this)), this)
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this)
                    .wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this)
                    .wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent()
                .each(function() {
                    i.nodeName(this, "body") || i(this)
                        .replaceWith(this.childNodes)
                })
                .end()
        }
    });
    var w, k, pf = /^(none|table(?!-c[ea]).+)/,
        or = /^margin/,
        wf = new RegExp("^(" + ot + ")(.*)$", "i"),
        ii = new RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i"),
        bf = new RegExp("^([+-])=(" + ot + ")", "i"),
        sr = {
            BODY: "block"
        },
        kf = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        hr = {
            letterSpacing: 0,
            fontWeight: 400
        },
        v = ["Top", "Right", "Bottom", "Left"],
        cr = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                var e, o, s = {},
                    f = 0;
                if (i.isArray(r)) {
                    for (e = ct(n), o = r.length; f < o; f++)
                        s[r[f]] = i.css(n, r[f], !1, e);
                    return s
                }
                return u !== t ? i.style(n, r, u) : i.css(
                    n, r)
            }, n, r, arguments.length > 1)
        },
        show: function() {
            return ar(this, !0)
        },
        hide: function() {
            return ar(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() :
                this.hide() : this.each(function() {
                    d(this) ? i(this)
                        .show() : i(this)
                        .hide()
                })
        }
    });
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = w(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, s, e, h = i.camelCase(r),
                    c = n.style;
                if (r = i.cssProps[h] || (i.cssProps[h] = lr(c,
                        h)), e = i.cssHooks[r] || i.cssHooks[h],
                    u !== t) {
                    if (s = typeof u, s === "string" && (o = bf
                            .exec(u)) && (u = (o[1] + 1) * o[2] +
                            parseFloat(i.css(n, r)), s =
                            "number"), u == null || s ===
                        "number" && isNaN(u)) return;
                    s !== "number" || i.cssNumber[h] || (u +=
                        "px");
                    i.support.clearCloneStyle || u !== "" || r.indexOf(
                        "background") !== 0 || (c[r] =
                        "inherit");
                    e && "set" in e && (u = e.set(n, u, f)) ===
                        t || (c[r] = u)
                } else return e && "get" in e && (o = e.get(n, !
                    1, f)) !== t ? o : c[r]
            }
        },
        css: function(n, r, u, f) {
            var e, h, o, s = i.camelCase(r);
            return (r = i.cssProps[s] || (i.cssProps[s] = lr(n.style,
                    s)), o = i.cssHooks[r] || i.cssHooks[s],
                o && "get" in o && (e = o.get(n, !0, u)), e ===
                t && (e = w(n, r, f)), e === "normal" && r in
                hr && (e = hr[r]), u === "" || u) ? (h =
                parseFloat(e), u === !0 || i.isNumeric(h) ?
                h || 0 : e) : e
        }
    });
    w = function(n, r, u) {
        var s, h, c, o = u || ct(n),
            e = o ? o.getPropertyValue(r) || o[r] : t,
            f = n.style;
        return o && (e !== "" || i.contains(n.ownerDocument, n) || (e =
            i.style(n, r)), ii.test(e) && or.test(r) && (s = f.width,
            h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth =
            f.width = e, e = o.width, f.width = s, f.minWidth =
            h, f.maxWidth = c)), e
    };
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return n.offsetWidth === 0 && pf.test(
                    i.css(n, "display")) ? i.swap(n,
                    kf, function() {
                        return pr(n, t, u)
                    }) : pr(n, t, u)
            },
            set: function(n, r, u) {
                var f = u && ct(n);
                return vr(n, r, u ? yr(n, t, u, i.support.boxSizing &&
                    i.css(n, "boxSizing", !1, f) ===
                    "border-box", f) : 0)
            }
        }
    });
    i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, t) {
                if (t) return i.swap(n, {
                    display: "inline-block"
                }, w, [n, "marginRight"])
            }
        });
        !i.support.pixelPosition && i.fn.position && i.each(["top",
            "left"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r) {
                    if (r) return r = w(n, t), ii.test(
                            r) ? i(n)
                        .position()[t] + "px" :
                        r
                }
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0
    }, i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i ==
                        "string" ? i.split(" ") : [i]; r <
                    4; r++) f[n + v[r] + t] = u[r] || u[r -
                    2] || u[0];
                return f
            }
        };
        or.test(n) || (i.cssHooks[n + t].set = vr)
    });
    var gf = /%20/g,
        ne = /\[\]$/,
        br = /\r?\n/g,
        te = /^(?:submit|button|image|reset|file)$/i,
        ie = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                })
                .filter(function() {
                    var n = this.type;
                    return this.name && !i(this)
                        .is(":disabled") && ie.test(this.nodeName) &&
                        !te.test(n) && (this.checked || !rr
                            .test(n))
                })
                .map(function(n, t) {
                    var r = i(this)
                        .val();
                    return r == null ? null : i.isArray(r) ?
                        i.map(r, function(n) {
                            return {
                                name: t.name,
                                value: n.replace(br,
                                    "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: r.replace(br, "\r\n")
                        }
                })
                .get()
        }
    });
    i.param = function(n, r) {
        var u, f = [],
            e = function(n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t;
                f[f.length] = encodeURIComponent(n) + "=" +
                    encodeURIComponent(t)
            };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional),
            i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n,
            function() {
                e(this.name, this.value)
            });
        else
            for (u in n) ri(u, n[u], r, e);
        return f.join("&")
            .replace(gf, "+")
    };
    i.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
        .split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) :
                    this.trigger(t)
            }
        });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n)
                .mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") :
                this.off(t, n || "**", i)
        }
    });
    var y, l, ui = i.now(),
        fi = /\?/,
        re = /#.*$/,
        kr = /([?&])_=[^&]*/,
        ue = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        fe = /^(?:GET|HEAD)$/,
        ee = /^\/\//,
        dr = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        gr = i.fn.load,
        nu = {},
        ei = {},
        tu = "*/".concat("*");
    try {
        l = hu.href
    } catch (pe) {
        l = u.createElement("a");
        l.href = "";
        l = l.href
    }
    y = dr.exec(l.toLowerCase()) || [];
    i.fn.load = function(n, r, u) {
        if (typeof n != "string" && gr) return gr.apply(this, arguments);
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return o >= 0 && (f = n.slice(o), n = n.slice(0, o)), i.isFunction(
                r) ? (u = r, r = t) : r && typeof r == "object" && (s =
                "POST"), e.length > 0 && i.ajax({
                url: n,
                type: s,
                dataType: "html",
                data: r
            })
            .done(function(n) {
                h = arguments;
                e.html(f ? i("<div>")
                    .append(i.parseHTML(n))
                    .find(f) : n)
            })
            .complete(u && function(n, t) {
                e.each(u, h || [n.responseText, t, n])
            }), this
    };
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError",
        "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: l,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
                .test(y[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tu,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? oi(oi(n, i.ajaxSettings), t) : oi(i.ajaxSettings,
                n)
        },
        ajaxPrefilter: iu(nu),
        ajaxTransport: iu(ei),
        ajax: function(n, r) {
            function k(n, r, h, l) {
                var v, rt, k, y, w, a = r;
                o !== 2 && (o = 2, g && clearTimeout(g), c =
                    t, d = l || "", f.readyState = n >
                    0 ? 4 : 0, v = n >= 200 && n < 300 ||
                    n === 304, h && (y = oe(u, f, h)),
                    y = se(u, y, f, v), v ? (u.ifModified &&
                        (w = f.getResponseHeader(
                                "Last-Modified"), w &&
                            (i.lastModified[e] = w), w =
                            f.getResponseHeader("etag"),
                            w && (i.etag[e] = w)), n ===
                        204 || u.type === "HEAD" ? a =
                        "nocontent" : n === 304 ? a =
                        "notmodified" : (a = y.state,
                            rt = y.data, k = y.error, v = !
                            k)) : (k = a, (n || !a) &&
                        (a = "error", n < 0 && (n = 0))
                    ), f.status = n, f.statusText = (r ||
                        a) + "", v ? tt.resolveWith(s, [
                        rt, a, f]) : tt.rejectWith(s, [
                        f, a, k]), f.statusCode(b), b =
                    t, p && nt.trigger(v ?
                        "ajaxSuccess" : "ajaxError", [f,
                            u, v ? rt : k]), it.fireWith(
                        s, [f, a]), p && (nt.trigger(
                            "ajaxComplete", [f, u]), --
                        i.active || i.event.trigger(
                            "ajaxStop")))
            }
            typeof n == "object" && (r = n, n = t);
            r = r || {};
            var c, e, d, w, g, a, p, v, u = i.ajaxSetup({}, r),
                s = u.context || u,
                nt = u.context && (s.nodeType || s.jquery) ? i(
                    s) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                b = u.statusCode || {},
                rt = {},
                ut = {},
                o = 0,
                ft = "canceled",
                f = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (o === 2) {
                            if (!w)
                                for (w = {}; t = ue.exec(d);)
                                    w[t[1].toLowerCase()] =
                                    t[2];
                            t = w[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return o === 2 ? d : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return o || (n = ut[i] = ut[i] || n,
                            rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return o || (u.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (o < 2)
                                for (t in n) b[t] = [b[t],
                                    n[t]];
                            else f.always(n[f.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return c && c.abort(t), k(0, t),
                            this
                    }
                };
            if (tt.promise(f)
                .complete = it.add, f.success = f.done, f.error =
                f.fail, u.url = ((n || u.url || l) + "")
                .replace(re, "")
                .replace(ee, y[1] + "//"), u.type = r.method ||
                r.type || u.method || u.type, u.dataTypes = i.trim(
                    u.dataType || "*")
                .toLowerCase()
                .match(h) || [""], u.crossDomain == null && (a =
                    dr.exec(u.url.toLowerCase()), u.crossDomain = !
                    !(a && (a[1] !== y[1] || a[2] !== y[2] || (
                        a[3] || (a[1] === "http:" ?
                            "80" : "443")) !== (y[3] ||
                        (y[1] === "http:" ? "80" :
                            "443"))))), u.data && u.processData &&
                typeof u.data != "string" && (u.data = i.param(
                    u.data, u.traditional)), ru(nu, u, r, f), o ===
                2) return f;
            p = u.global;
            p && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !fe.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (fi.test(e) ?
                    "&" : "?") + u.data, delete u.data), u.cache ===
                !1 && (u.url = kr.test(e) ? e.replace(kr,
                    "$1_=" + ui++) : e + (fi.test(e) ?
                    "&" : "?") + "_=" + ui++));
            u.ifModified && (i.lastModified[e] && f.setRequestHeader(
                    "If-Modified-Since", i.lastModified[e]),
                i.etag[e] && f.setRequestHeader(
                    "If-None-Match", i.etag[e]));
            (u.data && u.hasContent && u.contentType !== !1 ||
                r.contentType) && f.setRequestHeader(
                "Content-Type", u.contentType);
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[
                u.dataTypes[0]] ? u.accepts[u.dataTypes[
                0]] + (u.dataTypes[0] !== "*" ? ", " +
                tu + "; q=0.01" : "") : u.accepts["*"]);
            for (v in u.headers) f.setRequestHeader(v, u.headers[
                v]);
            if (u.beforeSend && (u.beforeSend.call(s, f, u) ===
                !1 || o === 2)) return f.abort();
            ft = "abort";
            for (v in {
                success: 1,
                error: 1,
                complete: 1
            }) f[v](u[v]);
            if (c = ru(ei, u, r, f), c) {
                f.readyState = 1;
                p && nt.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (g = setTimeout(
                    function() {
                        f.abort("timeout")
                    }, u.timeout));
                try {
                    o = 1;
                    c.send(rt, k)
                } catch (et) {
                    if (o < 2) k(-1, et);
                    else throw et;
                }
            } else k(-1, "No Transport");
            return f
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        }
    });
    i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t),
                i.ajax({
                    url: n,
                    type: r,
                    dataType: e,
                    data: u,
                    success: f
                })
        }
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    });
    i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    });
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>")
                        .prop({
                            async: !0,
                            charset: n.scriptCharset,
                            src: n.url
                        })
                        .on("load error", t = function(n) {
                            r.remove();
                            t = null;
                            n && e(n.type === "error" ? 404 :
                                200, n.type)
                        });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    });
    si = [];
    lt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = si.pop() || i.expando + "_" + ui++;
            return this[n] = !0, n
        }
    });
    i.ajaxPrefilter("json jsonp", function(r, u, f) {
        var e, s, o, h = r.jsonp !== !1 && (lt.test(r.url) ? "url" :
            typeof r.data == "string" && !(r.contentType || "")
            .indexOf("application/x-www-form-urlencoded") && lt
            .test(r.data) && "data");
        if (h || r.dataTypes[0] === "jsonp") return e = r.jsonpCallback =
            i.isFunction(r.jsonpCallback) ? r.jsonpCallback() :
            r.jsonpCallback, h ? r[h] = r[h].replace(lt, "$1" +
                e) : r.jsonp !== !1 && (r.url += (fi.test(r.url) ?
                "&" : "?") + r.jsonp + "=" + e), r.converters[
                "script json"] = function() {
                return o || i.error(e + " was not called"), o[0]
            }, r.dataTypes[0] = "json", s = n[e], n[e] =
            function() {
                o = arguments
            }, f.always(function() {
                n[e] = s;
                r[e] && (r.jsonpCallback = u.jsonpCallback,
                    si.push(e));
                o && i.isFunction(s) && s(o[0]);
                o = s = t
            }), "script"
    });
    i.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (n) {}
    };
    var g = i.ajaxSettings.xhr(),
        he = {
            0: 200,
            1223: 204
        },
        ce = 0,
        nt = {};
    if (n.ActiveXObject) i(n)
        .on("unload", function() {
            for (var n in nt) nt[n]();
            nt = t
        });
    i.support.cors = !!g && "withCredentials" in g;
    i.support.ajax = g = !!g;
    i.ajaxTransport(function(n) {
        var r;
        if (i.support.cors || g && !n.crossDomain) return {
            send: function(i, u) {
                var e, o, f = n.xhr();
                if (f.open(n.type, n.url, n.async, n.username,
                    n.password), n.xhrFields)
                    for (e in n.xhrFields) f[e] = n.xhrFields[
                        e];
                n.mimeType && f.overrideMimeType && f.overrideMimeType(
                    n.mimeType);
                n.crossDomain || i["X-Requested-With"] || (
                    i["X-Requested-With"] =
                    "XMLHttpRequest");
                for (e in i) f.setRequestHeader(e, i[e]);
                r = function(n) {
                    return function() {
                        r && (delete nt[o], r = f.onload =
                            f.onerror = null, n ===
                            "abort" ? f.abort() :
                            n === "error" ? u(f
                                .status || 404,
                                f.statusText) :
                            u(he[f.status] || f
                                .status, f.statusText,
                                typeof f.responseText ==
                                "string" ? {
                                    text: f.responseText
                                } : t, f.getAllResponseHeaders()
                            ))
                    }
                };
                f.onload = r();
                f.onerror = r("error");
                r = nt[o = ce++] = r("abort");
                f.send(n.hasContent && n.data || null)
            },
            abort: function() {
                r && r()
            }
        }
    });
    var b, at, le = /^(?:toggle|show|hide)$/,
        uu = new RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i"),
        ae = /queueHooks$/,
        vt = [ye],
        tt = {
            "*": [
                function(n, t) {
                    var f = this.createTween(n, t),
                        s = f.cur(),
                        u = uu.exec(t),
                        e = u && u[3] || (i.cssNumber[n] ? "" : "px"),
                        r = (i.cssNumber[n] || e !== "px" && +s) && uu.exec(
                            i.css(f.elem, n)),
                        o = 1,
                        h = 20;
                    if (r && r[3] !== e) {
                        e = e || r[3];
                        u = u || [];
                        r = +s || 1;
                        do o = o || ".5", r = r / o, i.style(f.elem, n,
                            r + e); while (o !== (o = f.cur() / s) && o !==
                            1 && --h)
                    }
                    return u && (r = f.start = +r || +s || 0, f.unit =
                        e, f.end = u[1] ? r + (u[1] + 1) * u[2] : +
                        u[2]), f
                }]
        };
    i.Animation = i.extend(ou, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(
                " ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[
                u], tt[r] = tt[r] || [], tt[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? vt.unshift(n) : vt.push(n)
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(
                this)
        },
        run: function(n) {
            var t, r = e.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[
                    this.easing](n, this.options.duration * n, 0, 1,
                    this.options.duration) : t = n, this.now = (
                    this.end - this.start) * t + this.start, this.options
                .step && this.options.step.call(this.elem, this.now,
                    this), r && r.set ? r.set(this) : e.propHooks._default
                .set(this), this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem[n.prop] != null && (!n.elem.style ||
                        n.elem.style[n.prop] == null) ? n.elem[n.prop] :
                    (t = i.css(n.elem, n.prop, ""), !t || t ===
                        "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style &&
                    (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[
                        n.prop]) ? i.style(n.elem, n.prop, n.now +
                        n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] =
                n.now)
        }
    };
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(
                this, arguments) : this.animate(yt(t, !0),
                n, i, u)
        }
    });
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(d)
                .css("opacity", 0)
                .show()
                .end()
                .animate({
                    opacity: t
                }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = ou(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(
                e) : this.queue(o.queue, e)
        },
        stop: function(n, u, f) {
            var e = function(n) {
                var t = n.stop;
                delete n.stop;
                t(f)
            };
            return typeof n != "string" && (f = u, u = n, n = t),
                u && n !== !1 && this.queue(n || "fx", []),
                this.each(function() {
                    var s = !0,
                        t = n != null && n + "queueHooks",
                        o = i.timers,
                        u = r.get(this);
                    if (t) u[t] && u[t].stop && e(u[t]);
                    else
                        for (t in u) u[t] && u[t].stop &&
                            ae.test(t) && e(u[t]);
                    for (t = o.length; t--;) o[t].elem ===
                        this && (n == null || o[t].queue ===
                            n) && (o[t].anim.stop(f), s = !
                            1, o.splice(t, 1));
                    (s || !f) && i.dequeue(this, n)
                })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(
                function() {
                    var t, e = r.get(this),
                        u = e[n + "queue"],
                        o = e[n + "queueHooks"],
                        f = i.timers,
                        s = u ? u.length : 0;
                    for (e.finish = !0, i.queue(this, n, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = f.length; t--;) f[t].elem ===
                        this && f[t].queue === n && (f[t].anim
                            .stop(!0), f.splice(t, 1));
                    for (t = 0; t < s; t++) u[t] && u[t].finish &&
                        u[t].finish.call(this);
                    delete e.finish
                })
        }
    });
    i.each({
        slideDown: yt("show"),
        slideUp: yt("hide"),
        slideToggle: yt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration ==
            "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[
                u.duration] : i.fx.speeds._default, (u.queue == null ||
                u.queue === !0) && (u.queue = "fx"), u.old = u.complete,
            u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.timers = [];
    i.fx = e.prototype.init;
    i.fx.tick = function() {
        var u, n = i.timers,
            r = 0;
        for (b = i.now(); r < n.length; r++) u = n[r], u() || n[r] !==
            u || n.splice(r--, 1);
        n.length || i.fx.stop();
        b = t
    };
    i.fx.timer = function(n) {
        n() && i.timers.push(n) && i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        at || (at = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(at);
        at = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fx.step = {};
    i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
                return n === t.elem
            })
            .length
    });
    i.fn.offset = function(n) {
        if (arguments.length) return n === t ? this : this.each(
            function(t) {
                i.offset.setOffset(this, n, t)
            });
        var u, e, r = this[0],
            f = {
                top: 0,
                left: 0
            },
            o = r && r.ownerDocument;
        if (o) return (u = o.documentElement, !i.contains(u, r)) ? f :
            (typeof r.getBoundingClientRect !== rt && (f = r.getBoundingClientRect()),
                e = su(o), {
                    top: f.top + e.pageYOffset - u.clientTop,
                    left: f.left + e.pageXOffset - u.clientLeft
                })
    };
    i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && (s + c)
                .indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h =
                parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    };
    i.fn.extend({
        position: function() {
            if (this[0]) {
                var n, r, u = this[0],
                    t = {
                        top: 0,
                        left: 0
                    };
                return i.css(u, "position") === "fixed" ? r = u
                    .getBoundingClientRect() : (n = this.offsetParent(),
                        r = this.offset(), i.nodeName(n[0],
                            "html") || (t = n.offset()), t.top +=
                        i.css(n[0], "borderTopWidth", !0), t.left +=
                        i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u,
                            "marginTop", !0),
                        left: r.left - t.left - i.css(u,
                            "marginLeft", !0)
                    }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || ci; n &&
                    !i.nodeName(n, "html") && i.css(n,
                        "position") === "static";) n =
                    n.offsetParent;
                return n || ci
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(r, u) {
        var f = "pageYOffset" === u;
        i.fn[r] = function(e) {
            return i.access(this, function(i, r, e) {
                var o = su(i);
                if (e === t) return o ? o[u] : i[r];
                o ? o.scrollTo(f ? n.pageXOffset : e, f ?
                    e : n.pageYOffset) : i[r] = e
            }, r, e, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var o = arguments.length && (u ||
                        typeof f != "boolean"),
                    s = u || (f === !0 || e === !0 ?
                        "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document
                        .documentElement[
                            "client" + n] : r.nodeType ===
                        9 ? (e = r.documentElement,
                            Math.max(r.body[
                                "scroll" +
                                n], e[
                                "scroll" +
                                n], r.body[
                                "offset" +
                                n], e[
                                "offset" +
                                n], e[
                                "client" +
                                n])) : f === t ?
                        i.css(r, u, s) : i.style(
                            r, u, f, s)
                }, r, o ? f : t, o, null)
            }
        })
    });
    i.fn.size = function() {
        return this.length
    };
    i.fn.andSelf = i.fn.addBack;
    typeof module == "object" && module && typeof module.exports ==
        "object" ? module.exports = i : typeof define == "function" &&
        define.amd && define("jquery", [], function() {
            return i
        });
    typeof n == "object" && typeof n.document == "object" && (n.jQuery = n.$ =
        i)
})(window);
(function(n) {
    "use strict";
    n.fn.touchclick = function(t) {
        function s() {
            return lobbyConfig.Core.DeviceInfo.OS === "Android" &&
                (lobbyConfig.Core.DeviceInfo.OSVersion === "2.2" ||
                    lobbyConfig.Core.DeviceInfo.OSVersion === "4.1"
                ) ? !0 : !1
        }

        function e(n) {
            return n = n.replace(" selected", ""), n = n.replace(
                / /g, "."), "." + n
        }

        function h(n) {
            var t = "";
            return n.id && (t += "#" + n.id), n.className && (t +=
                e(n.className)), t
        }

        function c(n) {
            var t = n.parentElement,
                i;
            if (t.tagName.toLowerCase() === "body") return "body";
            while (t.className === "" && t.id === "" && t.parentElement !==
                null) t = t.parentElement;
            return i = "", t.id && (i += "#" + t.id), t.className &&
                (i += e(t.className)), i
        }
        var u = ["standard", "pointer"],
            r;
        u.standard = {
            touchStart: "touchstart",
            touchMove: "touchmove",
            touchEnd: "touchend"
        };
        u.pointer = {
            touchStart: "PointerDown",
            touchMove: "PointerMove",
            touchEnd: "PointerUp"
        };
        r = window.navigator.msPointerEnabled ? u.pointer : u.standard;
        var o = s(),
            f = 3,
            i = {};
        return i.preventDefault = !1, n.extend(i, t), typeof t ==
            "function" && (i.callback = t), this.each(function() {
                var v = this,
                    s = h(this),
                    l = c(this),
                    t = {
                        x: 0,
                        y: 0
                    },
                    a = {
                        x: 0,
                        y: 0
                    },
                    u = !1;
                n.each(("mousedown mouseup " + r.touchStart)
                    .split(" "), function(t, i) {
                        n(l)
                            .on(i, s, function(n) {
                                n.stopPropagation();
                                n.originalEvent.changedTouches ?
                                    (a.x = n.originalEvent.changedTouches[
                                            0].clientX, a.y =
                                        n.originalEvent.changedTouches[
                                            0].clientY, u = !
                                        1) : u = !0
                            })
                    });
                n(l)
                    .on(r.touchMove, s, function(n) {
                        t.x = n.originalEvent.changedTouches[n.originalEvent
                            .changedTouches.length - 1].clientX;
                        t.y = n.originalEvent.changedTouches[n.originalEvent
                            .changedTouches.length - 1].clientY;
                        (Math.abs(a.x - t.x) > f || Math.abs(a.y -
                            t.y) > f) && (u = !0);
                        return
                    });
                n(l)
                    .on(r.touchEnd, s, function(n) {
                        y(n);
                        var r = p(t.x, t.y);
                        (v === r && u !== !0 || u === !1) && i.callback
                            .call(v, n)
                    });
                n(l)
                    .on("click", s, function(n) {
                        i.preventDefault ? n.preventDefault() :
                            (y(n), i.callback.call(v, n))
                    });
                var y = function(n) {
                        n.stopPropagation();
                        n.type === r.touchStart && o;
                        n.preventDefault()
                    },
                    e = {
                        check: !1,
                        isRelative: !0
                    },
                    p = function(t, i) {
                        if (!document.elementFromPoint) return null;
                        if (!e.check) {
                            var r;
                            (r = n(document)
                                .scrollTop()) > 0 ? e.isRelative =
                                document.elementFromPoint(0, r + n(
                                        window)
                                    .height() - 1) == null : (r = n(
                                        document)
                                    .scrollLeft()) > 0 && (e.isRelative =
                                    document.elementFromPoint(r + n(
                                            window)
                                        .width() - 1, 0) == null);
                            e.check = r > 0
                        }
                        return e.isRelative || (t += n(document)
                            .scrollLeft(), i += n(document)
                            .scrollTop()), document.elementFromPoint(
                            t, i)
                    }
            })
    }
})(jQuery);
/*!
 * VERSION: beta 1.10.3
 * DATE: 2013-09-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue || (window._gsQueue = []))
.push(function() {
    "use strict";
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin",
        "TweenLite"], function(n, t) {
        var nt, pt, u, wt, e = function() {
                n.call(this, "css");
                this._overwriteProps.length = 0;
                this.setRatio = e.prototype.setRatio
            },
            c = {},
            i = e.prototype = new n("css"),
            er, yt, or, sr, st;
        i.constructor = e;
        e.version = "1.10.3";
        e.API = 2;
        e.defaultTransformPerspective = 0;
        i = "px";
        e.suffixMap = {
            top: i,
            right: i,
            bottom: i,
            left: i,
            width: i,
            height: i,
            fontSize: i,
            padding: i,
            margin: i,
            perspective: i
        };
        var bt, ci, kt, dt, li, tt, ht =
            /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            ai =
            /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            gt =
            /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            ct = /[^\d\-\.]/g,
            ni = /(?:\d|\-|\+|=|#|\.)*/g,
            ti = /opacity *= *([^)]*)/,
            hr = /opacity:([^;]*)/,
            cr = /alpha\(opacity *=.+?\)/i,
            vi = /^(rgb|hsl)/,
            yi = /([A-Z])/g,
            pi = /-([a-z])/gi,
            lr = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            wi = function(n, t) {
                return t.toUpperCase()
            },
            ar = /(?:Left|Right|Width)/i,
            vr = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            yr =
            /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            l = /,(?=[^\)]*(?:\(|$))/gi,
            bi = Math.PI / 180,
            p = 180 / Math.PI,
            lt = {},
            b = document,
            it = b.createElement("div"),
            ii = b.createElement("img"),
            at = e._internals = {
                _specialProps: c
            },
            v = navigator.userAgent,
            k = function() {
                var n, t = v.indexOf("Android"),
                    i = b.createElement("div");
                return kt = -1 !== v.indexOf("Safari") && -1 ===
                    v.indexOf("Chrome") && (-1 === t || Number(
                        v.substr(t + 8, 1)) > 3), li = kt && 6 >
                    Number(v.substr(v.indexOf("Version/") + 8,
                        1)), dt = -1 !== v.indexOf("Firefox"),
                    /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(v), tt =
                    parseFloat(RegExp.$1), i.innerHTML =
                    "<a style='top:1px;opacity:.55;'>a<\/a>", n =
                    i.getElementsByTagName("a")[0], n ? /^0.55/
                    .test(n.style.opacity) : !1
            }(),
            ki = function(n) {
                return ti.test("string" == typeof n ? n : (n.currentStyle ?
                    n.currentStyle.filter : n.style.filter
                ) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            di = function(n) {
                window.console && console.log(n)
            },
            gi = "",
            ri = "",
            rt = function(n, t) {
                t = t || it;
                var r, i, u = t.style;
                if (void 0 !== u[n]) return n;
                for (n = n.charAt(0)
                    .toUpperCase() + n.substr(1), r = ["O",
                        "Moz", "ms", "Ms", "Webkit"], i = 5; --
                    i > -1 && void 0 === u[r[i] + n];);
                return i >= 0 ? (ri = 3 === i ? "ms" : r[i], gi =
                        "-" + ri.toLowerCase() + "-", ri + n) :
                    null
            },
            ut = b.defaultView ? b.defaultView.getComputedStyle :
            function() {},
            r = e.getStyle = function(n, t, i, r, u) {
                var f;
                return k || "opacity" !== t ? (!r && n.style[t] ?
                    f = n.style[t] : (i = i || ut(n, null)) ?
                    (n = i.getPropertyValue(t.replace(yi,
                                "-$1")
                            .toLowerCase()), f = n || i.length ?
                        n : i[t]) : n.currentStyle && (f =
                        n.currentStyle[t]), null == u || f &&
                    "none" !== f && "auto" !== f &&
                    "auto auto" !== f ? f : u) : ki(n)
            },
            a = function(n, t, i, r, u) {
                if ("px" === r || !r) return i;
                if ("auto" === r || !i) return 0;
                var f, e = ar.test(t),
                    o = n,
                    s = it.style,
                    h = 0 > i;
                return h && (i = -i), "%" === r && -1 !== t.indexOf(
                    "border") ? f = i / 100 * (e ? n.clientWidth :
                    n.clientHeight) : (s.cssText =
                    "border-style:solid;border-width:0;position:absolute;line-height:0;",
                    "%" !== r && o.appendChild ? s[e ?
                        "borderLeftWidth" :
                        "borderTopWidth"] = i + r : (o = n.parentNode ||
                        b.body, s[e ? "width" : "height"] =
                        i + r), o.appendChild(it), f =
                    parseFloat(it[e ? "offsetWidth" :
                        "offsetHeight"]), o.removeChild(it),
                    0 !== f || u || (f = a(n, t, i, r, !0))
                ), h ? -f : f
            },
            nr = function(n, t, i) {
                if ("absolute" !== r(n, "position", i)) return 0;
                var u = "left" === t ? "Left" : "Top",
                    f = r(n, "margin" + u, i);
                return n["offset" + u] - (a(n, t, parseFloat(f),
                    f.replace(ni, "")) || 0)
            },
            ft = function(n, t) {
                var u, r, i = {};
                if (t = t || ut(n, null))
                    if (u = t.length)
                        for (; --u > -1;) i[t[u].replace(pi, wi)] =
                            t.getPropertyValue(t[u]);
                    else
                        for (u in t) i[u] = t[u];
                else if (t = n.currentStyle || n.style)
                    for (u in t) i[u.replace(pi, wi)] = t[u];
                return k || (i.opacity = ki(n)), r = ot(n, t, !
                        1), i.rotation = r.rotation * p, i.skewX =
                    r.skewX * p, i.scaleX = r.scaleX, i.scaleY =
                    r.scaleY, i.x = r.x, i.y = r.y, y && (i.z =
                        r.z, i.rotationX = r.rotationX * p, i.rotationY =
                        r.rotationY * p, i.scaleZ = r.scaleZ),
                    i.filters && delete i.filters, i
            },
            ui = function(n, t, i, r, u) {
                var e, f, o, s = {},
                    h = n.style;
                for (f in i) "cssText" !== f && "length" !== f &&
                    isNaN(f) && (t[f] !== (e = i[f]) || u && u[
                        f]) && -1 === f.indexOf("Origin") && (
                        "number" == typeof e || "string" ==
                        typeof e) && (s[f] = "auto" !== e ||
                        "left" !== f && "top" !== f ? "" !== e &&
                        "auto" !== e && "none" !== e ||
                        "string" != typeof t[f] || "" === t[f].replace(
                            ct, "") ? e : 0 : nr(n, f), void 0 !==
                        h[f] && (o = new si(h, f, h[f], o)));
                if (r)
                    for (f in r) "className" !== f && (s[f] = r[
                        f]);
                return {
                    difs: s,
                    firstMPT: o
                }
            },
            pr = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            wr = ["marginLeft", "marginRight", "marginTop",
                "marginBottom"],
            br = function(n, t, i) {
                var u = parseFloat("width" === t ? n.offsetWidth :
                        n.offsetHeight),
                    f = pr[t],
                    e = f.length;
                for (i = i || ut(n, null); --e > -1;) u -=
                    parseFloat(r(n, "padding" + f[e], i, !0)) ||
                    0, u -= parseFloat(r(n, "border" + f[e] +
                        "Width", i, !0)) || 0;
                return u
            },
            fi = function(n, t) {
                (null == n || "" === n || "auto" === n ||
                    "auto auto" === n) && (n = "0 0");
                var u = n.split(" "),
                    i = -1 !== n.indexOf("left") ? "0%" : -1 !==
                    n.indexOf("right") ? "100%" : u[0],
                    r = -1 !== n.indexOf("top") ? "0%" : -1 !==
                    n.indexOf("bottom") ? "100%" : u[1];
                return null == r ? r = "0" : "center" === r &&
                    (r = "50%"), ("center" === i || isNaN(
                            parseFloat(i)) && -1 === (i + "")
                        .indexOf("=")) && (i = "50%"), t && (t.oxp = -
                        1 !== i.indexOf("%"), t.oyp = -1 !== r.indexOf(
                            "%"), t.oxr = "=" === i.charAt(1),
                        t.oyr = "=" === r.charAt(1), t.ox =
                        parseFloat(i.replace(ct, "")), t.oy =
                        parseFloat(r.replace(ct, ""))), i + " " +
                    r + (u.length > 2 ? " " + u[2] : "")
            },
            tr = function(n, t) {
                return "string" == typeof n && "=" === n.charAt(
                        1) ? parseInt(n.charAt(0) + "1", 10) *
                    parseFloat(n.substr(2)) : parseFloat(n) -
                    parseFloat(t)
            },
            w = function(n, t) {
                return null == n ? t : "string" == typeof n &&
                    "=" === n.charAt(1) ? parseInt(n.charAt(0) +
                        "1", 10) * Number(n.substr(2)) + t :
                    parseFloat(n)
            },
            et = function(n, t, i, r) {
                var f, o, u, e, s = 1e-6;
                return null == n ? e = t : "number" == typeof n ?
                    e = n * bi : (f = 2 * Math.PI, o = n.split(
                            "_"), u = Number(o[0].replace(ct,
                            "")) * (-1 === n.indexOf("rad") ?
                            bi : 1) - ("=" === n.charAt(1) ? 0 :
                            t), o.length && (r && (r[i] = t + u), -
                            1 !== n.indexOf("short") && (u %= f,
                                u !== u % (f / 2) && (u = 0 > u ?
                                    u + f : u - f)), -1 !== n.indexOf(
                                "_cw") && 0 > u ? u = (u +
                                9999999999 * f) % f - (0 | u /
                                f) * f : -1 !== n.indexOf("ccw") &&
                            u > 0 && (u = (u - 9999999999 * f) %
                                f - (0 | u / f) * f)), e = t +
                        u), s > e && e > -s && (e = 0), e
            },
            d = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ei = function(n, t, i) {
                return n = 0 > n ? n + 1 : n > 1 ? n - 1 : n, 0 |
                    255 * (1 > 6 * n ? t + 6 * (i - t) * n : .5 >
                        n ? i : 2 > 3 * n ? t + 6 * (i - t) * (
                            2 / 3 - n) : t) + .5
            },
            oi = function(n) {
                var i, t, e, u, f, r;
                return n && "" !== n ? "number" == typeof n ? [
                        n >> 16, 255 & n >> 8, 255 & n] : ("," ===
                        n.charAt(n.length - 1) && (n = n.substr(
                            0, n.length - 1)), d[n] ? d[n] :
                        "#" === n.charAt(0) ? (4 === n.length &&
                            (i = n.charAt(1), t = n.charAt(2),
                                e = n.charAt(3), n = "#" + i +
                                i + t + t + e + e), n =
                            parseInt(n.substr(1), 16), [n >> 16,
                                255 & n >> 8, 255 & n]) : "hsl" ===
                        n.substr(0, 3) ? (n = n.match(ht), u =
                            Number(n[0]) % 360 / 360, f =
                            Number(n[1]) / 100, r = Number(n[2]) /
                            100, t = .5 >= r ? r * (f + 1) : r +
                            f - r * f, i = 2 * r - t, n.length >
                            3 && (n[3] = Number(n[3])), n[0] =
                            ei(u + 1 / 3, i, t), n[1] = ei(u, i,
                                t), n[2] = ei(u - 1 / 3, i, t),
                            n) : (n = n.match(ht) || d.transparent,
                            n[0] = Number(n[0]), n[1] = Number(
                                n[1]), n[2] = Number(n[2]), n.length >
                            3 && (n[3] = Number(n[3])), n)) : d
                    .black
            },
            g =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (i in d) g += "|" + i + "\\b";
        g = RegExp(g + ")", "gi");
        var ir = function(n, t, i, r) {
                if (null == n) return function(n) {
                    return n
                };
                var e, s = t ? (n.match(g) || [""])[0] : "",
                    f = n.split(s)
                    .join("")
                    .match(gt) || [],
                    h = n.substr(0, n.indexOf(f[0])),
                    c = ")" === n.charAt(n.length - 1) ? ")" :
                    "",
                    o = -1 !== n.indexOf(" ") ? " " : ",",
                    u = f.length,
                    a = u > 0 ? f[0].replace(ht, "") : "";
                return u ? e = t ? function(n) {
                    var p, v, t, y;
                    if ("number" == typeof n) n += a;
                    else if (r && l.test(n)) {
                        for (y = n.replace(l, "|")
                            .split("|"), t = 0; y.length >
                            t; t++) y[t] = e(y[t]);
                        return y.join(",")
                    }
                    if (p = (n.match(g) || [s])[0], v = n.split(
                            p)
                        .join("")
                        .match(gt) || [], t = v.length, u >
                        t--)
                        for (; u > ++t;) v[t] = i ? v[0 | (
                            t - 1) / 2] : f[t];
                    return h + v.join(o) + o + p + c + (-1 !==
                        n.indexOf("inset") ? " inset" :
                        "")
                } : function(n) {
                    var s, v, t;
                    if ("number" == typeof n) n += a;
                    else if (r && l.test(n)) {
                        for (v = n.replace(l, "|")
                            .split("|"), t = 0; v.length >
                            t; t++) v[t] = e(v[t]);
                        return v.join(",")
                    }
                    if (s = n.match(gt) || [], t = s.length,
                        u > t--)
                        for (; u > ++t;) s[t] = i ? s[0 | (
                            t - 1) / 2] : f[t];
                    return h + s.join(o) + c
                } : function(n) {
                    return n
                }
            },
            rr = function(n) {
                return n = n.split(","),
                    function(t, i, r, u, f, e, o) {
                        var s, h = (i + "")
                            .split(" ");
                        for (o = {}, s = 0; 4 > s; s++) o[n[s]] =
                            h[s] = h[s] || h[(s - 1) / 2 >> 0];
                        return u.parse(t, o, f, e)
                    }
            },
            si = (at._setPluginRatio = function(n) {
                this.plugin.setRatio(n);
                for (var r, t, u, e, f = this.data, o = f.proxy,
                    i = f.firstMPT, s = 1e-6; i;) r = o[i.v],
                    i.r ? r = r > 0 ? 0 | r + .5 : 0 | r -
                    .5 : s > r && r > -s && (r = 0), i.t[i.p] =
                    r, i = i._next;
                if (f.autoRotate && (f.autoRotate.rotation =
                    o.rotation), 1 === n)
                    for (i = f.firstMPT; i;) {
                        if (t = i.t, t.type) {
                            if (1 === t.type) {
                                for (e = t.xs0 + t.s + t.xs1,
                                    u = 1; t.l > u; u++) e +=
                                    t["xn" + u] + t["xs" +
                                        (u + 1)];
                                t.e = e
                            }
                        } else t.e = t.s + t.xs0;
                        i = i._next
                    }
            }, function(n, t, i, r, u) {
                this.t = n;
                this.p = t;
                this.v = i;
                this.r = u;
                r && (r._prev = this, this._next = r)
            }),
            o = (at._parseToProxy = function(n, t, i, r, u, f) {
                var c, e, o, s, v, h = r,
                    l = {},
                    a = {},
                    y = i._transform,
                    p = lt;
                for (i._transform = null, lt = t, r = v = i
                    .parse(n, t, r, u), lt = p, f && (i._transform =
                        y, h && (h._prev = null, h._prev &&
                            (h._prev._next = null))); r &&
                    r !== h;) {
                    if (1 >= r.type && (e = r.p, a[e] = r.s +
                        r.c, l[e] = r.s, f || (s = new si(
                                r, "s", e, s, r.r), r.c =
                            0), 1 === r.type))
                        for (c = r.l; --c > 0;) o = "xn" +
                            c, e = r.p + "_" + o, a[e] = r.data[
                                o], l[e] = r[o], f || (s =
                                new si(r, o, e, s, r.rxp[o])
                            );
                    r = r._next
                }
                return {
                    proxy: l,
                    end: a,
                    firstMPT: s,
                    pt: v
                }
            }, at.CSSPropTween = function(n, t, i, r, u, f,
                e, s, h, c, l) {
                this.t = n;
                this.p = t;
                this.s = i;
                this.c = r;
                this.n = e || t;
                n instanceof o || wt.push(this.n);
                this.r = s;
                this.type = f || 0;
                h && (this.pr = h, nt = !0);
                this.b = void 0 === c ? i : c;
                this.e = void 0 === l ? i + r : l;
                u && (this._next = u, u._prev = this)
            }),
            vt = e.parseComplex = function(n, t, i, r, u, f, e,
                s, h, c) {
                i = i || f || "";
                e = new o(n, t, 0, 0, e, c ? 2 : 1, null, !1, s,
                    i, r);
                r += "";
                var y, w, b, a, v, ut, ft, it, g, et, nt, tt, p =
                    i.split(", ")
                    .join(",")
                    .split(" "),
                    rt = r.split(", ")
                    .join(",")
                    .split(" "),
                    ot = p.length,
                    st = bt !== !1;
                for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(
                        ",")) && (p = p.join(" ")
                        .replace(l, ", ")
                        .split(" "), rt = rt.join(" ")
                        .replace(l, ", ")
                        .split(" "), ot = p.length), ot !== rt.length &&
                    (p = (f || "")
                        .split(" "), ot = p.length), e.plugin =
                    h, e.setRatio = c, y = 0; ot > y; y++)
                    if (a = p[y], v = rt[y], it = parseFloat(a),
                        it || 0 === it) e.appendXtra("", it, tr(
                            v, it), v.replace(ai, ""), st &&
                        -1 !== v.indexOf("px"), !0);
                    else if (u && ("#" === a.charAt(0) || d[a] ||
                    vi.test(a))) tt = "," === v.charAt(v.length -
                        1) ? ")," : ")", a = oi(a), v = oi(v),
                    g = a.length + v.length > 6, g && !k && 0 ===
                    v[3] ? (e["xs" + e.l] += e.l ?
                        " transparent" : "transparent", e.e = e
                        .e.split(rt[y])
                        .join("transparent")) : (k || (g = !1),
                        e.appendXtra(g ? "rgba(" : "rgb(", a[0],
                            v[0] - a[0], ",", !0, !0)
                        .appendXtra("", a[1], v[1] - a[1], ",", !
                            0)
                        .appendXtra("", a[2], v[2] - a[2], g ?
                            "," : tt, !0), g && (a = 4 > a.length ?
                            1 : a[3], e.appendXtra("", a, (4 >
                                    v.length ? 1 : v[3]) - a,
                                tt, !1)));
                else if (ut = a.match(ht)) {
                    if (ft = v.match(ai), !ft || ft.length !==
                        ut.length) return e;
                    for (b = 0, w = 0; ut.length > w; w++) nt =
                        ut[w], et = a.indexOf(nt, b), e.appendXtra(
                            a.substr(b, et - b), Number(nt), tr(
                                ft[w], nt), "", st && "px" ===
                            a.substr(et + nt.length, 2), 0 ===
                            w), b = et + nt.length;
                    e["xs" + e.l] += a.substr(b)
                } else e["xs" + e.l] += e.l ? " " + a : a; if (-
                    1 !== r.indexOf("=") && e.data) {
                    for (tt = e.xs0 + e.data.s, y = 1; e.l > y; y++)
                        tt += e["xs" + y] + e.data["xn" + y];
                    e.e = tt + e["xs" + y]
                }
                return e.l || (e.type = -1, e.xs0 = e.e), e.xfirst ||
                    e
            },
            s = 9;
        for (i = o.prototype, i.l = i.pr = 0; --s > 0;) i["xn" +
            s] = 0, i["xs" + s] = "";
        i.xs0 = "";
        i._next = i._prev = i.xfirst = i.data = i.plugin = i.setRatio =
            i.rxp = null;
        i.appendXtra = function(n, t, i, r, u, f) {
            var e = this,
                s = e.l;
            return e["xs" + s] += f && s ? " " + n : n ||
                "", i || 0 === s || e.plugin ? (e.l++, e.type =
                    e.setRatio ? 2 : 1, e["xs" + e.l] = r ||
                    "", s > 0 ? (e.data["xn" + s] = t + i,
                        e.rxp["xn" + s] = u, e["xn" + s] =
                        t, e.plugin || (e.xfirst = new o(e,
                                "xn" + s, t, i, e.xfirst ||
                                e, 0, e.n, u, e.pr), e.xfirst
                            .xs0 = 0), e) : (e.data = {
                            s: t + i
                        }, e.rxp = {}, e.s = t, e.c = i, e.r =
                        u, e)) : (e["xs" + s] += t + (r ||
                    ""), e)
        };
        var ur = function(n, t) {
                t = t || {};
                this.p = t.prefix ? rt(n) || n : n;
                c[n] = c[this.p] = this;
                this.format = t.formatter || ir(t.defaultValue,
                    t.color, t.collapsible, t.multi);
                t.parser && (this.parse = t.parser);
                this.clrs = t.color;
                this.multi = t.multi;
                this.keyword = t.keyword;
                this.dflt = t.defaultValue;
                this.pr = t.priority || 0
            },
            f = at._registerComplexSpecialProp = function(n, t,
                i) {
                "object" != typeof t && (t = {
                    parser: i
                });
                var r, e, u = n.split(","),
                    f = t.defaultValue;
                for (i = i || [f], r = 0; u.length > r; r++) t.prefix =
                    0 === r && t.prefix, t.defaultValue = i[r] ||
                    f, e = new ur(u[r], t)
            },
            kr = function(n) {
                if (!c[n]) {
                    var t = n.charAt(0)
                        .toUpperCase() + n.substr(1) + "Plugin";
                    f(n, {
                        parser: function(n, i, r, u, f,
                            e, o) {
                            var s = (window.GreenSockGlobals ||
                                    window)
                                .com.greensock.plugins[
                                    t];
                            return s ? (s._cssRegister(),
                                c[r].parse(n, i,
                                    r, u, f, e,
                                    o)) : (di(
                                "Error: " +
                                t +
                                " js file not loaded."
                            ), f)
                        }
                    })
                }
            };
        i = ur.prototype;
        i.parseComplex = function(n, t, i, r, u, f) {
            var o, s, e, a, v, c, h = this.keyword;
            if (this.multi && (l.test(i) || l.test(t) ? (s =
                t.replace(l, "|")
                .split("|"), e = i.replace(l, "|")
                .split("|")) : h && (s = [t], e = [
                i])), e) {
                for (a = e.length > s.length ? e.length : s
                    .length, o = 0; a > o; o++) t = s[o] =
                    s[o] || this.dflt, i = e[o] = e[o] ||
                    this.dflt, h && (v = t.indexOf(h), c =
                        i.indexOf(h), v !== c && (i = -1 ===
                            c ? e : s, i[o] += " " + h));
                t = s.join(", ");
                i = e.join(", ")
            }
            return vt(n, this.p, t, i, this.clrs, this.dflt,
                r, this.pr, u, f)
        };
        i.parse = function(n, t, i, f, e, o) {
            return this.parseComplex(n.style, this.format(r(
                    n, this.p, u, !1, this.dflt)), this
                .format(t), e, o)
        };
        e.registerSpecialProp = function(n, t, i) {
            f(n, {
                parser: function(n, r, u, f, e, s) {
                    var h = new o(n, u, 0, 0, e,
                        2, u, !1, i);
                    return h.plugin = s, h.setRatio =
                        t(n, r, f._tween, u), h
                },
                priority: i
            })
        };
        var fr =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective"
            .split(","),
            h = rt("transform"),
            dr = gi + "transform",
            hi = rt("transformOrigin"),
            y = null !== rt("perspective"),
            ot = function(n, t, i, u) {
                if (n._gsTransform && i && !u) return n._gsTransform;
                var a, o, d, st, ii, lt, at, it, g, ri, ui, vt,
                    yt, f = i ? n._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    },
                    ai = 0 > f.scaleX,
                    ut = 2e-5,
                    v = 1e5,
                    ht = -Math.PI + .0001,
                    ct = Math.PI - .0001,
                    vi = y ? parseFloat(r(n, hi, t, !1, "0 0 0")
                        .split(" ")[2]) || f.zOrigin || 0 : 0;
                for (h ? a = r(n, dr, t, !0) : n.currentStyle &&
                    (a = n.currentStyle.filter.match(vr), a = a &&
                        4 === a.length ? [a[0].substr(4),
                            Number(a[2].substr(4)), Number(a[1]
                                .substr(4)), a[3].substr(4), f.x ||
                            0, f.y || 0].join(",") : ""), o = (
                        a || "")
                    .match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], d =
                    o.length; --d > -1;) st = Number(o[d]), o[d] =
                    (ii = st - (st |= 0)) ? (0 | ii * v + (0 >
                        ii ? -.5 : .5)) / v + st : st;
                if (16 === o.length) {
                    var ft = o[8],
                        w = o[9],
                        p = o[10],
                        oi = o[12],
                        si = o[13],
                        et = o[14];
                    if (f.zOrigin && (et = -f.zOrigin, oi = ft *
                            et - o[12], si = w * et - o[13], et =
                            p * et + f.zOrigin - o[14]), !i ||
                        u || null == f.rotationX) {
                        var pt, ot, wt, s, c, fi, ei, rt = o[0],
                            b = o[1],
                            bt = o[2],
                            yi = o[3],
                            kt = o[4],
                            k = o[5],
                            nt = o[6],
                            pi = o[7],
                            tt = o[11],
                            l = f.rotationX = Math.atan2(nt, p),
                            ci = ht > l || l > ct;
                        l && (s = Math.cos(-l), c = Math.sin(-l),
                            pt = kt * s + ft * c, ot = k *
                            s + w * c, wt = nt * s + p * c,
                            ft = kt * -c + ft * s, w = k *
                            -c + w * s, p = nt * -c + p * s,
                            tt = pi * -c + tt * s, kt = pt,
                            k = ot, nt = wt);
                        l = f.rotationY = Math.atan2(ft, rt);
                        l && (fi = ht > l || l > ct, s = Math.cos(-
                                l), c = Math.sin(-l), pt =
                            rt * s - ft * c, ot = b * s - w *
                            c, wt = bt * s - p * c, w = b *
                            c + w * s, p = bt * c + p * s,
                            tt = yi * c + tt * s, rt = pt,
                            b = ot, bt = wt);
                        l = f.rotation = Math.atan2(b, k);
                        l && (ei = ht > l || l > ct, s = Math.cos(-
                                l), c = Math.sin(-l), rt =
                            rt * s + kt * c, ot = b * s + k *
                            c, k = b * -c + k * s, nt = bt *
                            -c + nt * s, b = ot);
                        ei && ci ? f.rotation = f.rotationX = 0 :
                            ei && fi ? f.rotation = f.rotationY =
                            0 : fi && ci && (f.rotationY = f.rotationX =
                                0);
                        f.scaleX = (0 | Math.sqrt(rt * rt + b *
                            b) * v + .5) / v;
                        f.scaleY = (0 | Math.sqrt(k * k + w * w) *
                            v + .5) / v;
                        f.scaleZ = (0 | Math.sqrt(nt * nt + p *
                            p) * v + .5) / v;
                        f.skewX = 0;
                        f.perspective = tt ? 1 / (0 > tt ? -tt :
                            tt) : 0;
                        f.x = oi;
                        f.y = si;
                        f.z = et
                    }
                } else if (!(y && !u && o.length && f.x === o[4] &&
                    f.y === o[5] && (f.rotationX || f.rotationY) ||
                    void 0 !== f.x && "none" === r(n,
                        "display", t))) {
                    var li = o.length >= 6,
                        dt = li ? o[0] : 1,
                        gt = o[1] || 0,
                        ni = o[2] || 0,
                        ti = li ? o[3] : 1;
                    f.x = o[4] || 0;
                    f.y = o[5] || 0;
                    lt = Math.sqrt(dt * dt + gt * gt);
                    at = Math.sqrt(ti * ti + ni * ni);
                    it = dt || gt ? Math.atan2(gt, dt) : f.rotation ||
                        0;
                    g = ni || ti ? Math.atan2(ni, ti) + it : f.skewX ||
                        0;
                    ri = lt - Math.abs(f.scaleX || 0);
                    ui = at - Math.abs(f.scaleY || 0);
                    Math.abs(g) > Math.PI / 2 && Math.abs(g) <
                        1.5 * Math.PI && (ai ? (lt *= -1, g +=
                            0 >= it ? Math.PI : -Math.PI,
                            it += 0 >= it ? Math.PI : -Math
                            .PI) : (at *= -1, g += 0 >= g ?
                            Math.PI : -Math.PI));
                    vt = (it - f.rotation) % Math.PI;
                    yt = (g - f.skewX) % Math.PI;
                    (void 0 === f.skewX || ri > ut || -ut > ri ||
                        ui > ut || -ut > ui || vt > ht && ct >
                        vt && !1 | vt * v || yt > ht && ct > yt &&
                        !1 | yt * v) && (f.scaleX = lt, f.scaleY =
                        at, f.rotation = it, f.skewX = g);
                    y && (f.rotationX = f.rotationY = f.z = 0,
                        f.perspective = parseFloat(e.defaultTransformPerspective) ||
                        0, f.scaleZ = 1)
                }
                f.zOrigin = vi;
                for (d in f) ut > f[d] && f[d] > -ut && (f[d] =
                    0);
                return i && (n._gsTransform = f), f
            },
            gr = function(n) {
                var o, p, t = this.data,
                    g = -t.rotation,
                    ut = g + t.skewX,
                    e = 1e5,
                    h = (0 | Math.cos(g) * t.scaleX * e) / e,
                    u = (0 | Math.sin(g) * t.scaleX * e) / e,
                    f = (0 | Math.sin(ut) * -t.scaleY * e) / e,
                    c = (0 | Math.cos(ut) * t.scaleY * e) / e,
                    k = this.t.style,
                    d = this.t.currentStyle,
                    b, y, ft, et;
                if (d) {
                    p = u;
                    u = -f;
                    f = -p;
                    o = d.filter;
                    k.filter = "";
                    var i, r, l = this.t.offsetWidth,
                        v = this.t.offsetHeight,
                        nt = "absolute" !== d.position,
                        w =
                        "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                        h + ", M12=" + u + ", M21=" + f +
                        ", M22=" + c,
                        it = t.x,
                        rt = t.y;
                    if (null != t.ox && (i = (t.oxp ? .01 * l *
                                t.ox : t.ox) - l / 2, r = (t.oyp ?
                                .01 * v * t.oy : t.oy) - v / 2,
                            it += i - (i * h + r * u), rt += r -
                            (i * f + r * c)), nt ? (i = l / 2,
                            r = v / 2, w += ", Dx=" + (i - (i *
                                h + r * u) + it) + ", Dy=" + (r -
                                (i * f + r * c) + rt) + ")") :
                        w += ", sizingMethod='auto expand')", k
                        .filter = -1 !== o.indexOf(
                            "DXImageTransform.Microsoft.Matrix("
                        ) ? o.replace(yr, w) : w + " " + o, (0 ===
                            n || 1 === n) && 1 === h && 0 === u &&
                        0 === f && 1 === c && (nt && -1 === w.indexOf(
                                "Dx=0, Dy=0") || ti.test(o) &&
                            100 !== parseFloat(RegExp.$1) || -1 ===
                            o.indexOf("gradient(" && o.indexOf(
                                "Alpha")) && k.removeAttribute(
                                "filter")), !nt)
                        for (et = 8 > tt ? 1 : -1, i = t.ieOffsetX ||
                            0, r = t.ieOffsetY || 0, t.ieOffsetX =
                            Math.round((l - ((0 > h ? -h : h) *
                                l + (0 > u ? -u : u) *
                                v)) / 2 + it), t.ieOffsetY =
                            Math.round((v - ((0 > c ? -c : c) *
                                v + (0 > f ? -f : f) *
                                l)) / 2 + rt), s = 0; 4 > s; s++
                        ) y = wr[s], b = d[y], p = -1 !== b.indexOf(
                                "px") ? parseFloat(b) : a(this.t,
                                y, parseFloat(b), b.replace(ni,
                                    "")) || 0, ft = p !== t[y] ?
                            2 > s ? -t.ieOffsetX : -t.ieOffsetY :
                            2 > s ? i - t.ieOffsetX : r - t.ieOffsetY,
                            k[y] = (t[y] = Math.round(p - ft *
                                (0 === s || 2 === s ? 1 :
                                    et))) + "px"
                }
            },
            nu = function() {
                var d, p, c, l, g, w, a, v, ft, nt, s, o, et,
                    tt, y, ot, n, i, u, f, ct, lt, at, ht, st,
                    vt, t = this.data,
                    rt = this.t.style,
                    e = t.rotation,
                    b = t.scaleX,
                    k = t.scaleY,
                    it = t.scaleZ,
                    ut = t.perspective;
                if (dt && (ht = rt.top ? "top" : rt.bottom ?
                    "bottom" : parseFloat(r(this.t, "top",
                        null, !1)) ? "bottom" : "top", f =
                    r(this.t, ht, null, !1), st =
                    parseFloat(f) || 0, vt = f.substr((st +
                            "")
                        .length) || "px", t._ffFix = !t._ffFix,
                    rt[ht] = (t._ffFix ? st + .05 : st - .05) +
                    vt), e || t.skewX) i = Math.cos(e), u =
                    Math.sin(e), d = i, g = u, t.skewX && (e -=
                        t.skewX, i = Math.cos(e), u = Math.sin(
                            e)), p = -u, w = i;
                else {
                    if (!(t.rotationY || t.rotationX || 1 !==
                        it || ut)) return rt[h] =
                        "translate3d(" + t.x + "px," + t.y +
                        "px," + t.z + "px)" + (1 !== b || 1 !==
                            k ? " scale(" + b + "," + k +
                            ")" : ""), void 0;
                    d = w = 1;
                    p = g = 0
                }
                s = 1;
                c = l = a = v = ft = nt = o = et = tt = 0;
                y = ut ? -1 / ut : 0;
                ot = t.zOrigin;
                n = 1e5;
                e = t.rotationY;
                e && (i = Math.cos(e), u = Math.sin(e), ft = s *
                    -u, et = y * -u, c = d * u, a = g * u,
                    s *= i, y *= i, d *= i, g *= i);
                e = t.rotationX;
                e && (i = Math.cos(e), u = Math.sin(e), f = p *
                    i + c * u, ct = w * i + a * u, lt = nt *
                    i + s * u, at = tt * i + y * u, c = p *
                    -u + c * i, a = w * -u + a * i, s = nt *
                    -u + s * i, y = tt * -u + y * i, p = f,
                    w = ct, nt = lt, tt = at);
                1 !== it && (c *= it, a *= it, s *= it, y *= it);
                1 !== k && (p *= k, w *= k, nt *= k, tt *= k);
                1 !== b && (d *= b, g *= b, ft *= b, et *= b);
                ot && (o -= ot, l = c * o, v = a * o, o = s * o +
                    ot);
                l = (f = (l += t.x) - (l |= 0)) ? (0 | f * n +
                    (0 > f ? -.5 : .5)) / n + l : l;
                v = (f = (v += t.y) - (v |= 0)) ? (0 | f * n +
                    (0 > f ? -.5 : .5)) / n + v : v;
                o = (f = (o += t.z) - (o |= 0)) ? (0 | f * n +
                    (0 > f ? -.5 : .5)) / n + o : o;
                rt[h] = "matrix3d(" + [(0 | d * n) / n, (0 | g *
                            n) / n, (0 | ft * n) / n, (0 | et *
                            n) / n, (0 | p * n) / n, (0 | w * n) /
                        n, (0 | nt * n) / n, (0 | tt * n) / n, (
                            0 | c * n) / n, (0 | a * n) / n, (0 |
                            s * n) / n, (0 | y * n) / n, l, v,
                        o, ut ? 1 + -o / ut : 1].join(",") +
                    ")"
            },
            tu = function() {
                var e, o, u, v, f, s, t, c, l, n = this.data,
                    a = this.t,
                    i = a.style;
                dt && (e = i.top ? "top" : i.bottom ? "bottom" :
                    parseFloat(r(a, "top", null, !1)) ?
                    "bottom" : "top", o = r(a, e, null, !1),
                    u = parseFloat(o) || 0, v = o.substr((u +
                            "")
                        .length) || "px", n._ffFix = !n._ffFix,
                    i[e] = (n._ffFix ? u + .05 : u - .05) +
                    v);
                n.rotation || n.skewX ? (f = n.rotation, s = f -
                        n.skewX, t = 1e5, c = n.scaleX * t, l =
                        n.scaleY * t, i[h] = "matrix(" + (0 |
                            Math.cos(f) * c) / t + "," + (0 |
                            Math.sin(f) * c) / t + "," + (0 |
                            Math.sin(s) * -l) / t + "," + (0 |
                            Math.cos(s) * l) / t + "," + n.x +
                        "," + n.y + ")") : i[h] = "matrix(" + n
                    .scaleX + ",0,0," + n.scaleY + "," + n.x +
                    "," + n.y + ")"
            };
        for (f(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                parser: function(n, t, i, f, e, s, c) {
                    if (f._transform) return e;
                    var b, rt, k, v, tt, it, g, a = f._transform =
                        ot(n, u, !0, c.parseTransform),
                        d = n.style,
                        ut = 1e-6,
                        ft = fr.length,
                        l = c,
                        nt = {};
                    if ("string" == typeof l.transform &&
                        h) k = d.cssText, d[h] = l.transform,
                        d.display = "block", b = ot(n,
                            null, !1), d.cssText = k;
                    else if ("object" == typeof l) {
                        if (b = {
                                scaleX: w(null != l.scaleX ?
                                    l.scaleX : l.scale,
                                    a.scaleX),
                                scaleY: w(null != l.scaleY ?
                                    l.scaleY : l.scale,
                                    a.scaleY),
                                scaleZ: w(null != l.scaleZ ?
                                    l.scaleZ : l.scale,
                                    a.scaleZ),
                                x: w(l.x, a.x),
                                y: w(l.y, a.y),
                                z: w(l.z, a.z),
                                perspective: w(l.transformPerspective,
                                    a.perspective)
                            }, g = l.directionalRotation,
                            null != g)
                            if ("object" == typeof g)
                                for (k in g) l[k] = g[k];
                            else l.rotation = g;
                        b.rotation = et("rotation" in l ?
                            l.rotation :
                            "shortRotation" in l ?
                            l.shortRotation +
                            "_short" : "rotationZ" in
                            l ? l.rotationZ : a.rotation *
                            p, a.rotation,
                            "rotation", nt);
                        y && (b.rotationX = et(
                                "rotationX" in l ?
                                l.rotationX :
                                "shortRotationX" in
                                l ? l.shortRotationX +
                                "_short" : a.rotationX *
                                p || 0, a.rotationX,
                                "rotationX", nt), b
                            .rotationY = et(
                                "rotationY" in l ?
                                l.rotationY :
                                "shortRotationY" in
                                l ? l.shortRotationY +
                                "_short" : a.rotationY *
                                p || 0, a.rotationY,
                                "rotationY", nt));
                        b.skewX = null == l.skewX ? a.skewX :
                            et(l.skewX, a.skewX);
                        b.skewY = null == l.skewY ? a.skewY :
                            et(l.skewY, a.skewY);
                        (rt = b.skewY - a.skewY) && (b.skewX +=
                            rt, b.rotation += rt)
                    }
                    for (null != l.force3D && (a.force3D =
                            l.force3D, it = !0), tt = a
                        .force3D || a.z || a.rotationX ||
                        a.rotationY || b.z || b.rotationX ||
                        b.rotationY || b.perspective,
                        tt || null == l.scale || (b.scaleZ =
                            1); --ft > -1;) i = fr[ft],
                        v = b[i] - a[i], (v > ut || -ut >
                            v || null != lt[i]) && (it = !
                            0, e = new o(a, i, a[i], v,
                                e), i in nt && (e.e =
                                nt[i]), e.xs0 = 0, e.plugin =
                            s, f._overwriteProps.push(e
                                .n));
                    return v = l.transformOrigin, (v ||
                            y && tt && a.zOrigin) && (h ?
                            (it = !0, i = hi, v = (v ||
                                    r(n, i, u, !1,
                                        "50% 50%")) +
                                "", e = new o(d, i, 0,
                                    0, e, -1,
                                    "transformOrigin"),
                                e.b = d[i], e.plugin =
                                s, y ? (k = a.zOrigin,
                                    v = v.split(" "), a
                                    .zOrigin = (v.length >
                                        2 && (0 === k ||
                                            "0px" !== v[
                                                2]) ?
                                        parseFloat(v[2]) :
                                        k) || 0, e.xs0 =
                                    e.e = d[i] = v[0] +
                                    " " + (v[1] ||
                                        "50%") + " 0px",
                                    e = new o(a,
                                        "zOrigin", 0, 0,
                                        e, -1, e.n), e.b =
                                    k, e.xs0 = e.e = a.zOrigin
                                ) : e.xs0 = e.e = d[i] =
                                v) : fi(v + "", a)), it &&
                        (f._transformType = tt || 3 ===
                            this._transformType ? 3 : 2
                        ), e
                },
                prefix: !0
            }), f("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), f("borderRadius", {
            defaultValue: "0px",
            parser: function(n, t, i, f, e) {
                t = this.format(t);
                var tt, l, d, h, o, s, w, v, it, ut,
                    c, y, g, b, k, nt, p = [
                        "borderTopLeftRadius",
                        "borderTopRightRadius",
                        "borderBottomRightRadius",
                        "borderBottomLeftRadius"],
                    ft = n.style;
                for (it = parseFloat(n.offsetWidth),
                    ut = parseFloat(n.offsetHeight),
                    tt = t.split(" "), l = 0; p.length >
                    l; l++) this.p.indexOf("border") &&
                    (p[l] = rt(p[l])), o = h = r(n,
                        p[l], u, !1, "0px"), -1 !==
                    o.indexOf(" ") && (h = o.split(
                        " "), o = h[0], h = h[1]),
                    s = d = tt[l], w = parseFloat(o),
                    y = o.substr((w + "")
                        .length), g = "=" === s.charAt(
                        1), g ? (v = parseInt(s.charAt(
                            0) + "1", 10), s = s.substr(
                            2), v *= parseFloat(s),
                        c = s.substr((v + "")
                            .length - (0 > v ? 1 :
                                0)) || "") : (v =
                        parseFloat(s), c = s.substr(
                            (v + "")
                            .length)), "" === c &&
                    (c = pt[i] || y), c !== y && (b =
                        a(n, "borderLeft", w, y), k =
                        a(n, "borderTop", w, y),
                        "%" === c ? (o = 100 * (b /
                                it) + "%", h = 100 *
                            (k / ut) + "%") : "em" ===
                        c ? (nt = a(n, "borderLeft",
                                1, "em"), o = b /
                            nt + "em", h = k / nt +
                            "em") : (o = b + "px",
                            h = k + "px"), g && (s =
                            parseFloat(o) + v + c,
                            d = parseFloat(h) + v +
                            c)), e = vt(ft, p[l], o +
                        " " + h, s + " " + d, !1,
                        "0px", e);
                return e
            },
            prefix: !0,
            formatter: ir("0px 0px 0px 0px", !1, !0)
        }), f("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(n, t, i, f, e, o) {
                var c, b, h, v, y, l, p =
                    "background-position",
                    a = u || ut(n, null),
                    s = this.format((a ? tt ? a.getPropertyValue(
                            p + "-x") + " " + a
                        .getPropertyValue(p +
                            "-y") : a.getPropertyValue(
                            p) : n.currentStyle
                        .backgroundPositionX +
                        " " + n.currentStyle.backgroundPositionY
                    ) || "0 0"),
                    w = this.format(t);
                if (-1 !== s.indexOf("%") != (-1 !==
                    w.indexOf("%")) && (l = r(n,
                        "backgroundImage")
                    .replace(lr, ""), l &&
                    "none" !== l)) {
                    for (c = s.split(" "), b = w.split(
                            " "), ii.setAttribute(
                            "src", l), h = 2; --h >
                        -1;) s = c[h], v = -1 !== s
                        .indexOf("%"), v !== (-1 !==
                            b[h].indexOf("%")) && (
                            y = 0 === h ? n.offsetWidth -
                            ii.width : n.offsetHeight -
                            ii.height, c[h] = v ?
                            parseFloat(s) / 100 * y +
                            "px" : 100 * (
                                parseFloat(s) / y) +
                            "%");
                    s = c.join(" ")
                }
                return this.parseComplex(n.style, s,
                    w, e, o)
            },
            formatter: fi
        }), f("backgroundSize", {
            defaultValue: "0 0",
            formatter: fi
        }), f("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), f("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), f("transformStyle", {
            prefix: !0
        }), f("backfaceVisibility", {
            prefix: !0
        }), f("margin", {
            parser: rr(
                "marginTop,marginRight,marginBottom,marginLeft"
            )
        }), f("padding", {
            parser: rr(
                "paddingTop,paddingRight,paddingBottom,paddingLeft"
            )
        }), f("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(n, t, i, f, e, o) {
                var c, s, h;
                return 9 > tt ? (s = n.currentStyle,
                    h = 8 > tt ? " " : ",", c =
                    "rect(" + s.clipTop + h + s
                    .clipRight + h + s.clipBottom +
                    h + s.clipLeft + ")", t =
                    this.format(t)
                    .split(",")
                    .join(h)) : (c = this.format(
                        r(n, this.p, u, !1,
                            this.dflt)), t =
                    this.format(t)), this.parseComplex(
                    n.style, c, t, e, o)
            }
        }), f("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), f("autoRound,strictUnits", {
            parser: function(n, t, i, r, u) {
                return u
            }
        }), f("border", {
            defaultValue: "0px solid #000",
            parser: function(n, t, i, f, e, o) {
                return this.parseComplex(n.style,
                    this.format(r(n,
                            "borderTopWidth", u, !
                            1, "0px") + " " + r(
                            n, "borderTopStyle",
                            u, !1, "solid") +
                        " " + r(n,
                            "borderTopColor", u, !
                            1, "#000")), this.format(
                        t), e, o)
            },
            color: !0,
            formatter: function(n) {
                var t = n.split(" ");
                return t[0] + " " + (t[1] ||
                    "solid") + " " + (n.match(g) || [
                    "#000"])[0]
            }
        }), f("float,cssFloat,styleFloat", {
            parser: function(n, t, i, r, u) {
                var f = n.style,
                    e = "cssFloat" in f ?
                    "cssFloat" : "styleFloat";
                return new o(f, e, 0, 0, u, -1, i, !
                    1, 0, f[e], t)
            }
        }), er = function(n) {
            var f, i = this.t,
                t = i.filter || r(this.data, "filter"),
                u = 0 | this.s + this.c * n;
            100 === u && (-1 === t.indexOf("atrix(") && -1 ===
                t.indexOf("radient(") && -1 === t.indexOf(
                    "oader(") ? (i.removeAttribute(
                    "filter"), f = !r(this.data,
                    "filter")) : (i.filter = t.replace(
                    cr, ""), f = !0));
            f || (this.xn1 && (i.filter = t = t ||
                    "alpha(opacity=" + u + ")"), -1 ===
                t.indexOf("opacity") ? 0 === u && this.xn1 ||
                (i.filter = t + " alpha(opacity=" + u +
                    ")") : i.filter = t.replace(ti,
                    "opacity=" + u))
        }, f("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(n, t, i, f, e, s) {
                var h = parseFloat(r(n, "opacity",
                        u, !1, "1")),
                    c = n.style,
                    l = "autoAlpha" === i;
                return t = parseFloat(t), l && 1 ===
                    h && "hidden" === r(n,
                        "visibility", u) && 0 !== t &&
                    (h = 0), k ? e = new o(c,
                        "opacity", h, t - h, e) : (
                        e = new o(c, "opacity", 100 *
                            h, 100 * (t - h), e), e
                        .xn1 = l ? 1 : 0, c.zoom =
                        1, e.type = 2, e.b =
                        "alpha(opacity=" + e.s +
                        ")", e.e = "alpha(opacity=" +
                        (e.s + e.c) + ")", e.data =
                        n, e.plugin = s, e.setRatio =
                        er), l && (e = new o(c,
                            "visibility", 0, 0, e, -
                            1, null, !1, 0, 0 !== h ?
                            "inherit" : "hidden", 0 ===
                            t ? "hidden" :
                            "inherit"), e.xs0 =
                        "inherit", f._overwriteProps
                        .push(e.n), f._overwriteProps
                        .push(i)), e
            }
        }), yt = function(n, t) {
            t && (n.removeProperty ? n.removeProperty(t.replace(
                    yi, "-$1")
                .toLowerCase()) : n.removeAttribute(
                t))
        }, or = function(n) {
            if (this.t._gsClassPT = this, 1 === n || 0 ===
                n) {
                this.t.className = 0 === n ? this.b : this.e;
                for (var t = this.data, i = this.t.style; t;)
                    t.v ? i[t.p] = t.v : yt(i, t.p), t = t._next;
                1 === n && this.t._gsClassPT === this && (
                    this.t._gsClassPT = null)
            } else this.t.className !== this.e && (this.t.className =
                this.e)
        }, f("className", {
            parser: function(n, t, i, r, f, e, s) {
                var c, y, l, a, h, v = n.className,
                    p = n.style.cssText;
                if (f = r._classNamePT = new o(n, i,
                        0, 0, f, 2), f.setRatio =
                    or, f.pr = -11, nt = !0, f.b =
                    v, y = ft(n, u), l = n._gsClassPT
                ) {
                    for (a = {}, h = l.data; h;) a[
                        h.p] = 1, h = h._next;
                    l.setRatio(1)
                }
                return n._gsClassPT = f, f.e = "=" !==
                    t.charAt(1) ? t : v.replace(
                        RegExp("\\s*\\b" + t.substr(
                            2) + "\\b"), "") + ("+" ===
                        t.charAt(0) ? " " + t.substr(
                            2) : ""), r._tween._duration &&
                    (n.className = f.e, c = ui(n, y,
                            ft(n), s, a), n.className =
                        v, f.data = c.firstMPT, n.style
                        .cssText = p, f = f.xfirst =
                        r.parse(n, c.difs, f, e)),
                    f
            }
        }), sr = function(n) {
            if ((1 === n || 0 === n) && this.data._totalTime ===
                this.data._totalDuration) {
                var i, t, r, u, f = this.t.style,
                    e = c.transform.parse;
                if ("all" === this.e) f.cssText = "", u = !
                    0;
                else
                    for (i = this.e.split(","), r = i.length; --
                        r > -1;) t = i[r], c[t] && (c[t].parse ===
                        e ? u = !0 : t =
                        "transformOrigin" === t ? hi :
                        c[t].p), yt(f, t);
                u && (yt(f, h), this.t._gsTransform &&
                    delete this.t._gsTransform)
            }
        }, f("clearProps", {
            parser: function(n, t, i, r, u) {
                return u = new o(n, i, 0, 0, u, 2),
                    u.setRatio = sr, u.e = t, u.pr = -
                    10, u.data = r._tween, nt = !0,
                    u
            }
        }), i = "bezier,throwProps,physicsProps,physics2D".split(
            ","), s = i.length; s--;) kr(i[s]);
        return i = e.prototype, i._firstPT = null, i._onInitTween =
            function(n, t, i) {
                if (!n.nodeType) return !1;
                this._target = n;
                this._tween = i;
                this._vars = t;
                bt = t.autoRound;
                nt = !1;
                pt = t.suffixMap || e.suffixMap;
                u = ut(n, "");
                wt = this._overwriteProps;
                var l, s, f, a, b, d, p, v, w, c = n.style;
                if (ci && "" === c.zIndex && (l = r(n, "zIndex",
                        u), ("auto" === l || "" === l) && (
                        c.zIndex = 0)), "string" == typeof t &&
                    (a = c.cssText, l = ft(n, u), c.cssText = a +
                        ";" + t, l = ui(n, l, ft(n))
                        .difs, !k && hr.test(t) && (l.opacity =
                            parseFloat(RegExp.$1)), t = l, c.cssText =
                        a), this._firstPT = s = this.parse(n, t,
                        null), this._transformType) {
                    for (w = 3 === this._transformType, h ? kt &&
                        (ci = !0, "" === c.zIndex && (p = r(n,
                                "zIndex", u), ("auto" === p ||
                                "" === p) && (c.zIndex = 0)),
                            li && (c.WebkitBackfaceVisibility =
                                this._vars.WebkitBackfaceVisibility ||
                                (w ? "visible" : "hidden"))) :
                        c.zoom = 1, f = s; f && f._next;) f = f
                        ._next;
                    v = new o(n, "transform", 0, 0, null, 2);
                    this._linkCSSP(v, null, f);
                    v.setRatio = w && y ? nu : h ? tu : gr;
                    v.data = this._transform || ot(n, u, !0);
                    wt.pop()
                }
                if (nt) {
                    for (; s;) {
                        for (d = s._next, f = a; f && f.pr > s.pr;)
                            f = f._next;
                        (s._prev = f ? f._prev : b) ? s._prev._next =
                            s: a = s;
                        (s._next = f) ? f._prev = s: b = s;
                        s = d
                    }
                    this._firstPT = a
                }
                return !0
            }, i.parse = function(n, t, i, f) {
                var e, d, h, l, y, s, p, v, w, b, k = n.style;
                for (e in t) s = t[e], d = c[e], d ? i = d.parse(
                        n, s, e, this, i, f, t) : (y = r(n, e,
                            u) + "", w = "string" == typeof s,
                        "color" === e || "fill" === e ||
                        "stroke" === e || -1 !== e.indexOf(
                            "Color") || w && vi.test(s) ? (w ||
                            (s = oi(s), s = (s.length > 3 ?
                                "rgba(" : "rgb(") + s.join(
                                ",") + ")"), i = vt(k, e, y, s, !
                                0, "transparent", i, 0, f)) : !
                        w || -1 === s.indexOf(" ") && -1 === s.indexOf(
                            ",") ? (h = parseFloat(y), p = h ||
                            0 === h ? y.substr((h + "")
                                .length) : "", ("" === y ||
                                "auto" === y) && ("width" === e ||
                                "height" === e ? (h = br(n, e,
                                    u), p = "px") : "left" ===
                                e || "top" === e ? (h = nr(n, e,
                                    u), p = "px") : (h =
                                    "opacity" !== e ? 0 : 1, p =
                                    "")), b = w && "=" === s.charAt(
                                1), b ? (l = parseInt(s.charAt(
                                    0) + "1", 10), s = s.substr(
                                    2), l *= parseFloat(s), v =
                                s.replace(ni, "")) : (l =
                                parseFloat(s), v = w ? s.substr(
                                    (l + "")
                                    .length) || "" : ""), "" ===
                            v && (v = pt[e] || p), s = l || 0 ===
                            l ? (b ? l + h : l) + v : t[e], p !==
                            v && "" !== v && (l || 0 === l) &&
                            (h || 0 === h) && (h = a(n, e, h, p),
                                "%" === v ? (h /= a(n, e, 100,
                                        "%") / 100, h > 100 &&
                                    (h = 100), t.strictUnits !==
                                    !0 && (y = h + "%")) : "em" ===
                                v ? h /= a(n, e, 1, "em") : (l =
                                    a(n, e, l, v), v = "px"), b &&
                                (l || 0 === l) && (s = l + h +
                                    v)), b && (l += h), !h && 0 !==
                            h || !l && 0 !== l ? void 0 !== k[e] &&
                            (s || "NaN" != s + "" && null != s) ?
                            (i = new o(k, e, l || h || 0, 0, i, -
                                    1, e, !1, 0, y, s), i.xs0 =
                                "none" !== s || "display" !== e &&
                                -1 === e.indexOf("Style") ? s :
                                y) : di("invalid " + e +
                                " tween value: " + t[e]) : (i =
                                new o(k, e, h, l - h, i, 0, e,
                                    bt !== !1 && ("px" === v ||
                                        "zIndex" === e), 0, y,
                                    s), i.xs0 = v)) : i = vt(k,
                            e, y, s, !0, null, i, 0, f)), f &&
                    i && !i.plugin && (i.plugin = f);
                return i
            }, i.setRatio = function(n) {
                var i, u, r, t = this._firstPT,
                    f = 1e-6;
                if (1 !== n || this._tween._time !== this._tween
                    ._duration && 0 !== this._tween._time)
                    if (n || this._tween._time !== this._tween._duration &&
                        0 !== this._tween._time || this._tween._rawPrevTime ===
                        -1e-6)
                        for (; t;) {
                            if (i = t.c * n + t.s, t.r ? i = i >
                                0 ? 0 | i + .5 : 0 | i - .5 : f >
                                i && i > -f && (i = 0), t.type)
                                if (1 === t.type)
                                    if (r = t.l, 2 === r) t.t[t
                                            .p] = t.xs0 + i + t
                                        .xs1 + t.xn1 + t.xs2;
                                    else if (3 === r) t.t[t.p] =
                                t.xs0 + i + t.xs1 + t.xn1 + t.xs2 +
                                t.xn2 + t.xs3;
                            else if (4 === r) t.t[t.p] = t.xs0 +
                                i + t.xs1 + t.xn1 + t.xs2 + t.xn2 +
                                t.xs3 + t.xn3 + t.xs4;
                            else if (5 === r) t.t[t.p] = t.xs0 +
                                i + t.xs1 + t.xn1 + t.xs2 + t.xn2 +
                                t.xs3 + t.xn3 + t.xs4 + t.xn4 +
                                t.xs5;
                            else {
                                for (u = t.xs0 + i + t.xs1, r =
                                    1; t.l > r; r++) u += t[
                                    "xn" + r] + t["xs" + (r +
                                    1)];
                                t.t[t.p] = u
                            } else -1 === t.type ? t.t[t.p] = t
                                .xs0 : t.setRatio && t.setRatio(
                                    n);
                            else t.t[t.p] = i + t.xs0;
                            t = t._next
                        } else
                            for (; t;) 2 !== t.type ? t.t[t.p] =
                                t.b : t.setRatio(n), t = t._next;
                    else
                        for (; t;) 2 !== t.type ? t.t[t.p] = t.e :
                            t.setRatio(n), t = t._next
            }, i._enableTransforms = function(n) {
                this._transformType = n || 3 === this._transformType ?
                    3 : 2;
                this._transform = this._transform || ot(this._target,
                    u, !0)
            }, i._linkCSSP = function(n, t, i, r) {
                return n && (t && (t._prev = n), n._next && (n._next
                        ._prev = n._prev), n._prev ? n._prev
                    ._next = n._next : this._firstPT === n &&
                    (this._firstPT = n._next, r = !0), i ?
                    i._next = n : r || null !== this._firstPT ||
                    (this._firstPT = n), n._next = t, n._prev =
                    i), n
            }, i._kill = function(t) {
                var i, f, r, u = t;
                if (t.autoAlpha || t.alpha) {
                    u = {};
                    for (f in t) u[f] = t[f];
                    u.opacity = 1;
                    u.autoAlpha && (u.visibility = 1)
                }
                return t.className && (i = this._classNamePT) &&
                    (r = i.xfirst, r && r._prev ? this._linkCSSP(
                            r._prev, i._next, r._prev._prev) :
                        r === this._firstPT && (this._firstPT =
                            i._next), i._next && this._linkCSSP(
                            i._next, i._next._next, r._prev),
                        this._classNamePT = null), n.prototype._kill
                    .call(this, u)
            }, st = function(n, t, i) {
                var e, u, r, f;
                if (n.slice)
                    for (u = n.length; --u > -1;) st(n[u], t, i);
                else
                    for (e = n.childNodes, u = e.length; --u >
                        -1;) r = e[u], f = r.type, r.style && (
                            t.push(ft(r)), i && i.push(r)), 1 !==
                        f && 9 !== f && 11 !== f || !r.childNodes
                        .length || st(r, t, i)
            }, e.cascadeTo = function(n, i, r) {
                var u, f, o, e = t.to(n, i, r),
                    h = [e],
                    c = [],
                    l = [],
                    s = [],
                    a = t._internals.reservedProps;
                for (n = e._targets || e.target, st(n, c, s), e
                    .render(i, !0), st(n, l), e.render(0, !0),
                    e._enabled(!0), u = s.length; --u > -1;)
                    if (f = ui(s[u], c[u], l[u]), f.firstMPT) {
                        f = f.difs;
                        for (o in r) a[o] && (f[o] = r[o]);
                        h.push(t.to(s[u], i, f))
                    }
                return h
            }, n.activate([e]), e
    }, !0)
});
window._gsDefine && window._gsQueue.pop()();
/*!
 * VERSION: beta 1.9.3
 * DATE: 2013-04-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue || (window._gsQueue = []))
.push(function() {
    "use strict";
    window._gsDefine("easing.Back", ["easing.Ease"], function(n) {
        var f, u, h, v = window.GreenSockGlobals || window,
            p = v.com.greensock,
            s = 2 * Math.PI,
            y = Math.PI / 2,
            r = p._class,
            t = function(t, i) {
                var u = r("easing." + t, function() {}, !0),
                    f = u.prototype = new n;
                return f.constructor = u, f.getRatio = i, u
            },
            c = n.register || function() {},
            e = function(n, t, i, u) {
                var f = r("easing." + n, {
                    easeOut: new t,
                    easeIn: new i,
                    easeInOut: new u
                }, !0);
                return c(f, n), f
            },
            l = function(n, t, i) {
                this.t = n;
                this.v = t;
                i && (this.next = i, i.prev = this, this.c = i.v -
                    t, this.gap = i.t - n)
            },
            a = function(t, i) {
                var u = r("easing." + t, function(n) {
                        this._p1 = n || 0 === n ? n : 1.70158;
                        this._p2 = 1.525 * this._p1
                    }, !0),
                    f = u.prototype = new n;
                return f.constructor = u, f.getRatio = i, f.config =
                    function(n) {
                        return new u(n)
                    }, u
            },
            w = e("Back", a("BackOut", function(n) {
                return (n -= 1) * n * ((this._p1 + 1) *
                    n + this._p1) + 1
            }), a("BackIn", function(n) {
                return n * n * ((this._p1 + 1) * n -
                    this._p1)
            }), a("BackInOut", function(n) {
                return 1 > (n *= 2) ? .5 * n * n * ((
                        this._p2 + 1) * n - this._p2) :
                    .5 * ((n -= 2) * n * ((this._p2 + 1) *
                        n + this._p2) + 2)
            })),
            o = r("easing.SlowMo", function(n, t, i) {
                t = t || 0 === t ? t : .7;
                null == n ? n = .7 : n > 1 && (n = 1);
                this._p = 1 !== n ? t : 0;
                this._p1 = (1 - n) / 2;
                this._p2 = n;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = i === !0
            }, !0),
            i = o.prototype = new n;
        return i.constructor = o, i.getRatio = function(n) {
                var t = n + (.5 - n) * this._p;
                return this._p1 > n ? this._calcEnd ? 1 - (n =
                        1 - n / this._p1) * n : t - (n = 1 - n /
                        this._p1) * n * n * n * t : n > this._p3 ?
                    this._calcEnd ? 1 - (n = (n - this._p3) /
                        this._p1) * n : t + (n - t) * (n = (n -
                        this._p3) / this._p1) * n * n * n :
                    this._calcEnd ? 1 : t
            }, o.ease = new o(.7, .7), i.config = o.config =
            function(n, t, i) {
                return new o(n, t, i)
            }, f = r("easing.SteppedEase", function(n) {
                n = n || 1;
                this._p1 = 1 / n;
                this._p2 = n + 1
            }, !0), i = f.prototype = new n, i.constructor = f,
            i.getRatio = function(n) {
                return 0 > n ? n = 0 : n >= 1 && (n = .999999999), (
                    this._p2 * n >> 0) * this._p1
            }, i.config = f.config = function(n) {
                return new f(n)
            }, u = r("easing.RoughEase", function(t) {
                t = t || {};
                for (var i, r, u, f, h, e, c = t.taper ||
                    "none", a = [], w = 0, v = 0 | (t.points ||
                        20), o = v, y = t.randomize !==
                    !1, b = t.clamp === !0, p = t.template instanceof n ?
                    t.template : null, s = "number" ==
                    typeof t.strength ? .4 * t.strength :
                    .4; --o > -1;) i = y ? Math.random() :
                    1 / v * o, r = p ? p.getRatio(i) : i,
                    "none" === c ? u = s : "out" === c ? (f =
                        1 - i, u = f * f * s) : "in" === c ?
                    u = i * i * s : .5 > i ? (f = 2 * i, u =
                        .5 * f * f * s) : (f = 2 * (1 - i),
                        u = .5 * f * f * s), y ? r += Math.random() *
                    u - .5 * u : o % 2 ? r += .5 * u : r -=
                    .5 * u, b && (r > 1 ? r = 1 : 0 > r &&
                        (r = 0)), a[w++] = {
                        x: i,
                        y: r
                    };
                for (a.sort(function(n, t) {
                        return n.x - t.x
                    }), e = new l(1, 1, null), o = v; --o >
                    -1;) h = a[o], e = new l(h.x, h.y, e);
                this._prev = new l(0, 0, 0 !== e.t ? e : e.next)
            }, !0), i = u.prototype = new n, i.constructor = u,
            i.getRatio = function(n) {
                var t = this._prev;
                if (n > t.t) {
                    for (; t.next && n >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && t.t >= n;) t = t.prev;
                return this._prev = t, t.v + (n - t.t) / t.gap *
                    t.c
            }, i.config = function(n) {
                return new u(n)
            }, u.ease = new u, e("Bounce", t("BounceOut",
                function(n) {
                    return 1 / 2.75 > n ? 7.5625 * n * n :
                        2 / 2.75 > n ? 7.5625 * (n -= 1.5 /
                            2.75) * n + .75 : 2.5 / 2.75 >
                        n ? 7.5625 * (n -= 2.25 / 2.75) * n +
                        .9375 : 7.5625 * (n -= 2.625 / 2.75) *
                        n + .984375
                }), t("BounceIn", function(n) {
                return 1 / 2.75 > (n = 1 - n) ? 1 - 7.5625 *
                    n * n : 2 / 2.75 > n ? 1 - (7.5625 *
                        (n -= 1.5 / 2.75) * n + .75) :
                    2.5 / 2.75 > n ? 1 - (7.5625 * (n -=
                        2.25 / 2.75) * n + .9375) : 1 -
                    (7.5625 * (n -= 2.625 / 2.75) * n +
                        .984375)
            }), t("BounceInOut", function(n) {
                var t = .5 > n;
                return n = t ? 1 - 2 * n : 2 * n - 1, n =
                    1 / 2.75 > n ? 7.5625 * n * n : 2 /
                    2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) *
                    n + .75 : 2.5 / 2.75 > n ? 7.5625 *
                    (n -= 2.25 / 2.75) * n + .9375 : 7.5625 *
                    (n -= 2.625 / 2.75) * n + .984375,
                    t ? .5 * (1 - n) : .5 * n + .5
            })), e("Circ", t("CircOut", function(n) {
                return Math.sqrt(1 - (n -= 1) * n)
            }), t("CircIn", function(n) {
                return -(Math.sqrt(1 - n * n) - 1)
            }), t("CircInOut", function(n) {
                return 1 > (n *= 2) ? -.5 * (Math.sqrt(
                    1 - n * n) - 1) : .5 * (Math.sqrt(
                    1 - (n -= 2) * n) + 1)
            })), h = function(t, i, u) {
                var f = r("easing." + t, function(n, t) {
                        this._p1 = n || 1;
                        this._p2 = t || u;
                        this._p3 = this._p2 / s * (Math.asin(
                            1 / this._p1) || 0)
                    }, !0),
                    e = f.prototype = new n;
                return e.constructor = f, e.getRatio = i, e.config =
                    function(n, t) {
                        return new f(n, t)
                    }, f
            }, e("Elastic", h("ElasticOut", function(n) {
                return this._p1 * Math.pow(2, -10 * n) *
                    Math.sin((n - this._p3) * s / this._p2) +
                    1
            }, .3), h("ElasticIn", function(n) {
                return -(this._p1 * Math.pow(2, 10 * (n -=
                    1)) * Math.sin((n - this._p3) *
                    s / this._p2))
            }, .3), h("ElasticInOut", function(n) {
                return 1 > (n *= 2) ? -.5 * this._p1 *
                    Math.pow(2, 10 * (n -= 1)) * Math.sin(
                        (n - this._p3) * s / this._p2) :
                    .5 * this._p1 * Math.pow(2, -10 * (
                        n -= 1)) * Math.sin((n - this._p3) *
                        s / this._p2) + 1
            }, .45)), e("Expo", t("ExpoOut", function(n) {
                return 1 - Math.pow(2, -10 * n)
            }), t("ExpoIn", function(n) {
                return Math.pow(2, 10 * (n - 1)) - .001
            }), t("ExpoInOut", function(n) {
                return 1 > (n *= 2) ? .5 * Math.pow(2,
                    10 * (n - 1)) : .5 * (2 - Math.pow(
                    2, -10 * (n - 1)))
            })), e("Sine", t("SineOut", function(n) {
                return Math.sin(n * y)
            }), t("SineIn", function(n) {
                return -Math.cos(n * y) + 1
            }), t("SineInOut", function(n) {
                return -.5 * (Math.cos(Math.PI * n) - 1)
            })), r("easing.EaseLookup", {
                find: function(t) {
                    return n.map[t]
                }
            }, !0), c(v.SlowMo, "SlowMo", "ease,"), c(u,
                "RoughEase", "ease,"), c(f, "SteppedEase",
                "ease,"), w
    }, !0)
});
window._gsDefine && window._gsQueue.pop()();
/*!
 * VERSION: beta 1.10.3
 * DATE: 2013-09-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(n) {
    "use strict";
    var e, u, t, r, o, tt = n.GreenSockGlobals || n,
        lt = function(n) {
            for (var r = n.split("."), i = tt, t = 0; r.length > t; t++) i[
                r[t]] = i = i[r[t]] || {};
            return i
        },
        l = lt("com.greensock"),
        at = [].slice,
        vt = function() {},
        w = {},
        yt = function(t, i, r, u) {
            this.sc = w[t] ? w[t].sc : [];
            w[t] = this;
            this.gsClass = null;
            this.func = r;
            var f = [];
            this.check = function(e) {
                for (var h, c, l, s, o = i.length, a = o; --o > -1;)(h =
                        w[i[o]] || new yt(i[o], []))
                    .gsClass ? (f[o] = h.gsClass, a--) : e && h.sc.push(
                        this);
                if (0 === a && r)
                    for (c = ("com.greensock." + t)
                        .split("."), l = c.pop(), s = lt(c.join("."))[l] =
                        this.gsClass = r.apply(r, f), u && (tt[l] = s,
                            "function" == typeof define && define.amd ?
                            define((n.GreenSockAMDPath ? n.GreenSockAMDPath +
                                    "/" : "") + t.split(".")
                                .join("/"), [], function() {
                                    return s
                                }) : "undefined" != typeof module &&
                            module.exports && (module.exports = s)), o =
                        0; this.sc.length > o; o++) this.sc[o].check()
            };
            this.check(!0)
        },
        it = n._gsDefine = function(n, t, i, r) {
            return new yt(n, t, i, r)
        },
        h = l._class = function(n, t, i) {
            return t = t || function() {}, it(n, [], function() {
                return t
            }, i), t
        },
        ft, f, st, d, s;
    it.globals = tt;
    var pt = [0, 0, 1, 1],
        rt = [],
        c = h("easing.Ease", function(n, t, i, r) {
            this._func = n;
            this._type = i || 0;
            this._power = r || 0;
            this._params = t ? pt.concat(t) : pt
        }, !0),
        b = c.map = {},
        ut = c.register = function(n, t, i, r) {
            for (var o, u, e, f, s = t.split(","), c = s.length, a = (i ||
                    "easeIn,easeOut,easeInOut")
                .split(","); --c > -1;)
                for (u = s[c], o = r ? h("easing." + u, null, !0) : l.easing[
                    u] || {}, e = a.length; --e > -1;) f = a[e], b[u + "." +
                    f] = b[f + u] = o[f] = n.getRatio ? n : n[f] || new n
        };
    for (t = c.prototype, t._calcEnd = !1, t.getRatio = function(n) {
            if (this._func) return this._params[0] = n, this._func.apply(
                null, this._params);
            var i = this._type,
                r = this._power,
                t = 1 === i ? 1 - n : 2 === i ? n : .5 > n ? 2 * n : 2 * (1 -
                    n);
            return 1 === r ? t *= t : 2 === r ? t *= t * t : 3 === r ? t *=
                t * t * t : 4 === r && (t *= t * t * t * t), 1 === i ? 1 -
                t : 2 === i ? t : .5 > n ? t / 2 : 1 - t / 2
        }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = e.length; --
        u > -1;) t = e[u] + ",Power" + u, ut(new c(null, null, 1, u), t,
        "easeOut", !0), ut(new c(null, null, 2, u), t, "easeIn" + (0 ===
        u ? ",easeNone" : "")), ut(new c(null, null, 3, u), t,
        "easeInOut");
    b.linear = l.easing.Linear.easeIn;
    b.swing = l.easing.Quad.easeInOut;
    ft = h("events.EventDispatcher", function(n) {
        this._listeners = {};
        this._eventTarget = n || this
    });
    t = ft.prototype;
    t.addEventListener = function(n, t, i, u, f) {
        f = f || 0;
        var h, s, e = this._listeners[n],
            c = 0;
        for (null == e && (this._listeners[n] = e = []), s = e.length; --
            s > -1;) h = e[s], h.c === t && h.s === i ? e.splice(s, 1) :
            0 === c && f > h.pr && (c = s + 1);
        e.splice(c, 0, {
            c: t,
            s: i,
            up: u,
            pr: f
        });
        this !== r || o || r.wake()
    };
    t.removeEventListener = function(n, t) {
        var i, r = this._listeners[n];
        if (r)
            for (i = r.length; --i > -1;)
                if (r[i].c === t) return r.splice(i, 1), void 0
    };
    t.dispatchEvent = function(n) {
        var r, i, t, u = this._listeners[n];
        if (u)
            for (r = u.length, i = this._eventTarget; --r > -1;) t = u[
                r], t.up ? t.c.call(t.s || i, {
                type: n,
                target: i
            }) : t.c.call(t.s || i)
    };
    var k = n.requestAnimationFrame,
        et = n.cancelAnimationFrame,
        nt = Date.now || function() {
            return (new Date)
                .getTime()
        },
        ot = nt();
    for (e = ["ms", "moz", "webkit", "o"], u = e.length; --u > -1 && !k;) k =
        n[e[u] + "RequestAnimationFrame"], et = n[e[u] +
            "CancelAnimationFrame"] || n[e[u] +
            "CancelRequestAnimationFrame"];
    h("Ticker", function(n, t) {
        var f, c, u, s, h, i = this,
            a = nt(),
            e = t !== !1 && k,
            l = function(n) {
                ot = nt();
                i.time = (ot - a) / 1e3;
                var r, t = i.time - h;
                (!f || t > 0 || n === !0) && (i.frame++, h += t + (
                    t >= s ? .004 : s - t), r = !0);
                n !== !0 && (u = c(l));
                r && i.dispatchEvent("tick")
            };
        ft.call(i);
        i.time = i.frame = 0;
        i.tick = function() {
            l(!0)
        };
        i.sleep = function() {
            null != u && (e && et ? et(u) : clearTimeout(u), c =
                vt, u = null, i === r && (o = !1))
        };
        i.wake = function() {
            null !== u && i.sleep();
            c = 0 === f ? vt : e && k ? k : function(n) {
                return setTimeout(n, 0 | 1e3 * (h - i.time) +
                    1)
            };
            i === r && (o = !0);
            l(2)
        };
        i.fps = function(n) {
            return arguments.length ? (f = n, s = 1 / (f || 60),
                h = this.time + s, i.wake(), void 0) : f
        };
        i.useRAF = function(n) {
            return arguments.length ? (i.sleep(), e = n, i.fps(
                f), void 0) : e
        };
        i.fps(n);
        setTimeout(function() {
            e && (!u || 5 > i.frame) && i.useRAF(!1)
        }, 1500)
    });
    t = l.Ticker.prototype = new l.events.EventDispatcher;
    t.constructor = l.Ticker;
    f = h("core.Animation", function(n, t) {
        if (this.vars = t = t || {}, this._duration = this._totalDuration =
            n || 0, this._delay = Number(t.delay) || 0, this._timeScale =
            1, this._active = t.immediateRender === !0, this.data =
            t.data, this._reversed = t.reversed === !0, a) {
            o || r.wake();
            var i = this.vars.useFrames ? p : a;
            i.add(this, i._time);
            this.vars.paused && this.paused(!0)
        }
    });
    r = f.ticker = new l.Ticker;
    t = f.prototype;
    t._dirty = t._gc = t._initted = t._paused = !1;
    t._totalTime = t._time = 0;
    t._rawPrevTime = -1;
    t._next = t._last = t._onUpdate = t._timeline = t.timeline = null;
    t._paused = !1;
    st = function() {
        nt() - ot > 2e3 && r.wake();
        setTimeout(st, 2e3)
    };
    st();
    t.play = function(n, t) {
        return arguments.length && this.seek(n, t), this.reversed(!1)
            .paused(!1)
    };
    t.pause = function(n, t) {
        return arguments.length && this.seek(n, t), this.paused(!0)
    };
    t.resume = function(n, t) {
        return arguments.length && this.seek(n, t), this.paused(!1)
    };
    t.seek = function(n, t) {
        return this.totalTime(Number(n), t !== !1)
    };
    t.restart = function(n, t) {
        return this.reversed(!1)
            .paused(!1)
            .totalTime(n ? -this._delay : 0, t !== !1, !0)
    };
    t.reverse = function(n, t) {
        return arguments.length && this.seek(n || this.totalDuration(),
                t), this.reversed(!0)
            .paused(!1)
    };
    t.render = function() {};
    t.invalidate = function() {
        return this
    };
    t._enabled = function(n, t) {
        return o || r.wake(), this._gc = !n, this._active = n && !this._paused &&
            this._totalTime > 0 && this._totalTime < this._totalDuration,
            t !== !0 && (n && !this.timeline ? this._timeline.add(this,
                    this._startTime - this._delay) : !n && this.timeline &&
                this._timeline._remove(this, !0)), !1
    };
    t._kill = function() {
        return this._enabled(!1, !1)
    };
    t.kill = function(n, t) {
        return this._kill(n, t), this
    };
    t._uncache = function(n) {
        for (var t = n ? this : this.timeline; t;) t._dirty = !0, t = t
            .timeline;
        return this
    };
    t._swapSelfInParams = function(n) {
        for (var t = n.length, i = n.concat(); --t > -1;) "{self}" ===
            n[t] && (i[t] = this);
        return i
    };
    t.eventCallback = function(n, t, i, r) {
        if ("on" === (n || "")
            .substr(0, 2)) {
            var u = this.vars;
            if (1 === arguments.length) return u[n];
            null == t ? delete u[n] : (u[n] = t, u[n + "Params"] = i instanceof Array &&
                -1 !== i.join("")
                .indexOf("{self}") ? this._swapSelfInParams(i) : i,
                u[n + "Scope"] = r);
            "onUpdate" === n && (this._onUpdate = t)
        }
        return this
    };
    t.delay = function(n) {
        return arguments.length ? (this._timeline.smoothChildTiming &&
            this.startTime(this._startTime + n - this._delay), this
            ._delay = n, this) : this._delay
    };
    t.duration = function(n) {
        return arguments.length ? (this._duration = this._totalDuration =
            n, this._uncache(!0), this._timeline.smoothChildTiming &&
            this._time > 0 && this._time < this._duration && 0 !==
            n && this.totalTime(this._totalTime * (n / this._duration), !
                0), this) : (this._dirty = !1, this._duration)
    };
    t.totalDuration = function(n) {
        return this._dirty = !1, arguments.length ? this.duration(n) :
            this._totalDuration
    };
    t.time = function(n, t) {
        return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(n > this._duration ? this._duration : n,
                t)) : this._time
    };
    t.totalTime = function(n, t, i) {
        if (o || r.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > n && !i && (n += this.totalDuration()), this._timeline
                .smoothChildTiming) {
                this._dirty && this.totalDuration();
                var f = this._totalDuration,
                    u = this._timeline;
                if (n > f && !i && (n = f), this._startTime = (this._paused ?
                    this._pauseTime : u._time) - (this._reversed ?
                    f - n : n) / this._timeScale, u._dirty || this._uncache(!
                    1), u._timeline)
                    for (; u._timeline;) u._timeline._time !== (u._startTime +
                        u._totalTime) / u._timeScale && u.totalTime(
                        u._totalTime, !0), u = u._timeline
            }
            this._gc && this._enabled(!0, !1);
            this._totalTime !== n && this.render(n, t, !1)
        }
        return this
    };
    t.startTime = function(n) {
        return arguments.length ? (n !== this._startTime && (this._startTime =
                n, this.timeline && this.timeline._sortChildren &&
                this.timeline.add(this, n - this._delay)), this) : this
            ._startTime
    };
    t.timeScale = function(n) {
        if (!arguments.length) return this._timeScale;
        if (n = n || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var t = this._pauseTime,
                i = t || 0 === t ? t : this._timeline.totalTime();
            this._startTime = i - (i - this._startTime) * this._timeScale /
                n
        }
        return this._timeScale = n, this._uncache(!1)
    };
    t.reversed = function(n) {
        return arguments.length ? (n != this._reversed && (this._reversed =
            n, this.totalTime(this._totalTime, !0)), this) : this._reversed
    };
    t.paused = function(n) {
        if (!arguments.length) return this._paused;
        if (n != this._paused && this._timeline) {
            o || n || r.wake();
            var t = this._timeline,
                i = t.rawTime(),
                u = i - this._pauseTime;
            !n && t.smoothChildTiming && (this._startTime += u, this._uncache(!
                1));
            this._pauseTime = n ? i : null;
            this._paused = n;
            this._active = !n && this._totalTime > 0 && this._totalTime <
                this._totalDuration;
            n || 0 === u || 0 === this._duration || this.render(t.smoothChildTiming ?
                this._totalTime : (i - this._startTime) / this._timeScale, !
                0, !0)
        }
        return this._gc && !n && this._enabled(!0, !1), this
    };
    d = h("core.SimpleTimeline", function(n) {
        f.call(this, 0, n);
        this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    t = d.prototype = new f;
    t.constructor = d;
    t.kill()
        ._gc = !1;
    t._first = t._last = null;
    t._sortChildren = !1;
    t.add = t.insert = function(n, t) {
        var i, r;
        if (n._startTime = Number(t || 0) + n._delay, n._paused && this !==
            n._timeline && (n._pauseTime = n._startTime + (this.rawTime() -
                n._startTime) / n._timeScale), n.timeline && n.timeline
            ._remove(n, !0), n.timeline = n._timeline = this, n._gc &&
            n._enabled(!0, !0), i = this._last, this._sortChildren)
            for (r = n._startTime; i && i._startTime > r;) i = i._prev;
        return i ? (n._next = i._next, i._next = n) : (n._next = this._first,
                this._first = n), n._next ? n._next._prev = n : this._last =
            n, n._prev = i, this._timeline && this._uncache(!0), this
    };
    t._remove = function(n, t) {
        return n.timeline === this && (t || n._enabled(!1, !0), n.timeline =
            null, n._prev ? n._prev._next = n._next : this._first ===
            n && (this._first = n._next), n._next ? n._next._prev =
            n._prev : this._last === n && (this._last = n._prev),
            this._timeline && this._uncache(!0)), this
    };
    t.render = function(n, t, i) {
        var u, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = n; r;) u =
            r._next, (r._active || n >= r._startTime && !r._paused) &&
            (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) -
                (n - r._startTime) * r._timeScale, t, i) : r.render(
                (n - r._startTime) * r._timeScale, t, i)), r = u
    };
    t.rawTime = function() {
        return o || r.wake(), this._totalTime
    };
    var i = h("TweenLite", function(t, r, u) {
            if (f.call(this, r, u), this.render = i.prototype.render,
                null == t) throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : i.selector(t) ||
                t;
            var o, e, s, c = t.jquery || t.length && t !== n && t[0] &&
                (t[0] === n || t[0].nodeType && t[0].style && !t.nodeType),
                h = this.vars.overwrite;
            if (this._overwrite = h = null == h ? bt[i.defaultOverwrite] :
                "number" == typeof h ? h >> 0 : bt[h], (c || t instanceof Array) &&
                "number" != typeof t[0])
                for (this._targets = s = at.call(t, 0), this._propLookup = [],
                    this._siblings = [], o = 0; s.length > o; o++) e =
                    s[o], e ? "string" != typeof e ? e.length && e !==
                    n && e[0] && (e[0] === n || e[0].nodeType && e[0].style &&
                        !e.nodeType) ? (s.splice(o--, 1), this._targets =
                        s = s.concat(at.call(e, 0))) : (this._siblings[
                        o] = g(e, this, !1), 1 === h && this._siblings[
                        o].length > 1 && ct(e, this, null, 1, this._siblings[
                        o])) : (e = s[o--] = i.selector(e), "string" ==
                        typeof e && s.splice(o + 1, 1)) : s.splice(o--,
                        1);
            else this._propLookup = {}, this._siblings = g(t, this, !1),
                1 === h && this._siblings.length > 1 && ct(t, this,
                    null, 1, this._siblings);
            (this.vars.immediateRender || 0 === r && 0 === this._delay &&
                this.vars.immediateRender !== !1) && this.render(-this._delay, !
                1, !0)
        }, !0),
        wt = function(t) {
            return t.length && t !== n && t[0] && (t[0] === n || t[0].nodeType &&
                t[0].style && !t.nodeType)
        },
        dt = function(n, t) {
            var i, r = {};
            for (i in n) ht[i] || i in t && "x" !== i && "y" !== i &&
                "width" !== i && "height" !== i && "className" !== i &&
                "border" !== i || !(!v[i] || v[i] && v[i]._autoCSS) || (r[i] =
                    n[i], delete n[i]);
            n.css = r
        };
    t = i.prototype = new f;
    t.constructor = i;
    t.kill()
        ._gc = !1;
    t.ratio = 0;
    t._firstPT = t._targets = t._overwrittenProps = t._startAt = null;
    t._notifyPluginsOfEnabled = !1;
    i.version = "1.10.3";
    i.defaultEase = t._ease = new c(null, null, 1, 1);
    i.defaultOverwrite = "auto";
    i.ticker = r;
    i.autoSleep = !0;
    i.selector = n.$ || n.jQuery || function(t) {
        return n.$ ? (i.selector = n.$, n.$(t)) : n.document ? n.document
            .getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
    };
    var gt = i._internals = {},
        v = i._plugins = {},
        y = i._tweenLookup = {},
        ni = 0,
        ht = gt.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        bt = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        p = f._rootFramesTimeline = new d,
        a = f._rootTimeline = new d;
    a._startTime = r.time;
    p._startTime = r.frame;
    a._active = p._active = !0;
    f._updateRoot = function() {
        if (a.render((r.time - a._startTime) * a._timeScale, !1, !1), p
            .render((r.frame - p._startTime) * p._timeScale, !1, !1), !
            (r.frame % 120)) {
            var u, t, n;
            for (n in y) {
                for (t = y[n].tweens, u = t.length; --u > -1;) t[u]._gc &&
                    t.splice(u, 1);
                0 === t.length && delete y[n]
            }
            if (n = a._first, (!n || n._paused) && i.autoSleep && !p._first &&
                1 === r._listeners.tick.length) {
                for (; n && n._paused;) n = n._next;
                n || r.sleep()
            }
        }
    };
    r.addEventListener("tick", f._updateRoot);
    var g = function(n, t, i) {
            var r, f, u = n._gsTweenID;
            if (y[u || (n._gsTweenID = u = "t" + ni++)] || (y[u] = {
                target: n,
                tweens: []
            }), t && (r = y[u].tweens, r[f = r.length] = t, i))
                for (; --f > -1;) r[f] === t && r.splice(f, 1);
            return y[u].tweens
        },
        ct = function(n, t, i, r, u) {
            var e, o, f, v;
            if (1 === r || r >= 4) {
                for (v = u.length, e = 0; v > e; e++)
                    if ((f = u[e]) !== t) f._gc || f._enabled(!1, !1) && (o = !
                        0);
                    else if (5 === r) break;
                return o
            }
            var s, h = t._startTime + 1e-10,
                c = [],
                l = 0,
                a = 0 === t._duration;
            for (e = u.length; --e > -1;)(f = u[e]) === t || f._gc || f._paused ||
                (f._timeline !== t._timeline ? (s = s || kt(t, 0, a), 0 ===
                        kt(f, s, a) && (c[l++] = f)) : h >= f._startTime &&
                    f._startTime + f.totalDuration() / f._timeScale + 1e-10 >
                    h && ((a || !f._initted) && 2e-10 >= h - f._startTime ||
                        (c[l++] = f)));
            for (e = l; --e > -1;) f = c[e], 2 === r && f._kill(i, n) && (o = !
                0), (2 !== r || !f._firstPT && f._initted) && f._enabled(!
                1, !1) && (o = !0);
            return o
        },
        kt = function(n, t, i) {
            for (var u = n._timeline, e = u._timeScale, r = n._startTime, f =
                1e-10; u._timeline;) {
                if (r += u._startTime, e *= u._timeScale, u._paused) return
                    -100;
                u = u._timeline
            }
            return r /= e, r > t ? r - t : i && r === t || !n._initted && 2 *
                f > r - t ? f : (r += n.totalDuration() / n._timeScale / e) >
                t + f ? 0 : r - t - f
        };
    if (t._init = function() {
            var u, o, t, f, n = this.vars,
                e = this._overwrittenProps,
                s = this._duration,
                h = n.immediateRender,
                r = n.ease;
            if (n.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), n.startAt
                    .overwrite = 0, n.startAt.immediateRender = !0, this._startAt =
                    i.to(this.target, 0, n.startAt), h)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== s) return
            } else if (n.runBackwards && n.immediateRender && 0 !== s)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt =
                    null;
                else if (0 === this._time) {
                t = {};
                for (f in n) ht[f] && "autoCSS" !== f || (t[f] = n[f]);
                return t.overwrite = 0, this._startAt = i.to(this.target, 0,
                    t), void 0
            }
            if (this._ease = r ? r instanceof c ? n.easeParams instanceof Array ?
                r.config.apply(r, n.easeParams) : r : "function" == typeof r ?
                new c(r, n.easeParams) : b[r] || i.defaultEase : i.defaultEase,
                this._easeType = this._ease._type, this._easePower = this._ease
                ._power, this._firstPT = null, this._targets)
                for (u = this._targets.length; --u > -1;) this._initProps(
                    this._targets[u], this._propLookup[u] = {}, this._siblings[
                        u], e ? e[u] : null) && (o = !0);
            else o = this._initProps(this.target, this._propLookup, this._siblings,
                e); if (o && i._onPluginEvent("_onInitAllProps", this), e &&
                (this._firstPT || "function" != typeof this.target && this._enabled(!
                    1, !1)), n.runBackwards)
                for (t = this._firstPT; t;) t.s += t.c, t.c = -t.c, t = t._next;
            this._onUpdate = n.onUpdate;
            this._initted = !0
        }, t._initProps = function(t, i, r, u) {
            var f, h, c, s, e, o;
            if (null == t) return !1;
            this.vars.css || t.style && t !== n && t.nodeType && v.css &&
                this.vars.autoCSS !== !1 && dt(this.vars, t);
            for (f in this.vars) {
                if (o = this.vars[f], ht[f]) o instanceof Array && -1 !== o
                    .join("")
                    .indexOf("{self}") && (this.vars[f] = o = this._swapSelfInParams(
                        o, this));
                else if (v[f] && (s = new v[f])
                    ._onInitTween(t, this.vars[f], this)) {
                    for (this._firstPT = e = {
                        _next: this._firstPT,
                        t: s,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: f,
                        pg: !0,
                        pr: s._priority
                    }, h = s._overwriteProps.length; --h > -1;) i[s._overwriteProps[
                        h]] = this._firstPT;
                    (s._priority || s._onInitAllProps) && (c = !0);
                    (s._onDisable || s._onEnable) && (this._notifyPluginsOfEnabled = !
                        0)
                } else this._firstPT = i[f] = e = {
                        _next: this._firstPT,
                        t: t,
                        p: f,
                        f: "function" == typeof t[f],
                        n: f,
                        pg: !1,
                        pr: 0
                    }, e.s = e.f ? t[f.indexOf("set") || "function" !=
                        typeof t["get" + f.substr(3)] ? f : "get" + f.substr(
                            3)]() : parseFloat(t[f]), e.c = "string" ==
                    typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) +
                        "1", 10) * Number(o.substr(2)) : Number(o) - e.s ||
                    0;
                e && e._next && (e._next._prev = e)
            }
            return u && this._kill(u, t) ? this._initProps(t, i, r, u) :
                this._overwrite > 1 && this._firstPT && r.length > 1 && ct(
                    t, this, i, this._overwrite, r) ? (this._kill(i, t),
                    this._initProps(t, i, r, u)) : c
        }, t.render = function(n, t, i) {
            var e, f, u, s = this._time;
            if (n >= this._duration) this._totalTime = this._time = this._duration,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) :
                1, this._reversed || (e = !0, f = "onComplete"), 0 === this
                ._duration && ((0 === n || 0 > this._rawPrevTime) && this._rawPrevTime !==
                    n && (i = !0, this._rawPrevTime > 0 && (f =
                        "onReverseComplete", t && (n = -1))), this._rawPrevTime =
                    n);
            else if (1e-7 > n) this._totalTime = this._time = 0, this.ratio =
                this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s ||
                    0 === this._duration && this._rawPrevTime > 0) && (f =
                    "onReverseComplete", e = this._reversed), 0 > n ? (this
                    ._active = !1, 0 === this._duration && (this._rawPrevTime >=
                        0 && (i = !0), this._rawPrevTime = n)) : this._initted ||
                (i = !0);
            else if (this._totalTime = this._time = n, this._easeType) {
                var r = n / this._duration,
                    o = this._easeType,
                    h = this._easePower;
                (1 === o || 3 === o && r >= .5) && (r = 1 - r);
                3 === o && (r *= 2);
                1 === h ? r *= r : 2 === h ? r *= r * r : 3 === h ? r *= r *
                    r * r : 4 === h && (r *= r * r * r * r);
                this.ratio = 1 === o ? 1 - r : 2 === o ? r : .5 > n / this._duration ?
                    r / 2 : 1 - r / 2
            } else this.ratio = this._ease.getRatio(n / this._duration); if (
                this._time !== s || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted) return;
                    this._time && !e ? this.ratio = this._ease.getRatio(
                            this._time / this._duration) : e && this._ease._calcEnd &&
                        (this.ratio = this._ease.getRatio(0 === this._time ?
                            0 : 1))
                }
                for (this._active || !this._paused && this._time !== s && n >=
                    0 && (this._active = !0), 0 === s && (this._startAt &&
                        (n >= 0 ? this._startAt.render(n, t, i) : f || (f =
                            "_dummyGS")), this.vars.onStart && (0 !== this._time ||
                            0 === this._duration) && (t || this.vars.onStart
                            .apply(this.vars.onStartScope || this, this.vars
                                .onStartParams || rt))), u = this._firstPT; u;
                ) u.f ? u.t[u.p](u.c * this.ratio + u.s) : u.t[u.p] = u.c *
                    this.ratio + u.s, u = u._next;
                this._onUpdate && (0 > n && this._startAt && this._startAt.render(
                    n, t, i), t || this._onUpdate.apply(this.vars.onUpdateScope ||
                    this, this.vars.onUpdateParams || rt));
                f && (this._gc || (0 > n && this._startAt && !this._onUpdate &&
                    this._startAt.render(n, t, i), e && (this._timeline
                        .autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1), !t && this.vars[f] &&
                    this.vars[f].apply(this.vars[f + "Scope"] ||
                        this, this.vars[f + "Params"] || rt)))
            }
        }, t._kill = function(n, t) {
            if ("all" === n && (n = null), null == n && (null == t || t ===
                this.target)) return this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target :
                i.selector(t) || t;
            var u, e, o, r, f, s, h, c;
            if ((t instanceof Array || wt(t)) && "number" != typeof t[0])
                for (u = t.length; --u > -1;) this._kill(n, t[u]) && (s = !
                    0);
            else {
                if (this._targets) {
                    for (u = this._targets.length; --u > -1;)
                        if (t === this._targets[u]) {
                            f = this._propLookup[u] || {};
                            this._overwrittenProps = this._overwrittenProps || [];
                            e = this._overwrittenProps[u] = n ? this._overwrittenProps[
                                u] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target) return !1;
                    f = this._propLookup;
                    e = this._overwrittenProps = n ? this._overwrittenProps || {} :
                        "all"
                } if (f) {
                    h = n || f;
                    c = n !== e && "all" !== e && n !== f && (null == n ||
                        n._tempKill !== !0);
                    for (o in h)(r = f[o]) && (r.pg && r.t._kill(h) && (s = !
                            0), r.pg && 0 !== r.t._overwriteProps.length ||
                        (r._prev ? r._prev._next = r._next : r === this
                            ._firstPT && (this._firstPT = r._next), r._next &&
                            (r._next._prev = r._prev), r._next = r._prev =
                            null), delete f[o]), c && (e[o] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return s
        }, t.invalidate = function() {
            return this._notifyPluginsOfEnabled && i._onPluginEvent(
                    "_onDisable", this), this._firstPT = null, this._overwrittenProps =
                null, this._onUpdate = null, this._startAt = null, this._initted =
                this._active = this._notifyPluginsOfEnabled = !1, this._propLookup =
                this._targets ? {} : [], this
        }, t._enabled = function(n, t) {
            if (o || r.wake(), n && this._gc) {
                var u, e = this._targets;
                if (e)
                    for (u = e.length; --u > -1;) this._siblings[u] = g(e[u],
                        this, !0);
                else this._siblings = g(this.target, this, !0)
            }
            return f.prototype._enabled.call(this, n, t), this._notifyPluginsOfEnabled &&
                this._firstPT ? i._onPluginEvent(n ? "_onEnable" :
                    "_onDisable", this) : !1
        }, i.to = function(n, t, r) {
            return new i(n, t, r)
        }, i.from = function(n, t, r) {
            return r.runBackwards = !0, r.immediateRender = 0 != r.immediateRender,
                new i(n, t, r)
        }, i.fromTo = function(n, t, r, u) {
            return u.startAt = r, u.immediateRender = 0 != u.immediateRender &&
                0 != r.immediateRender, new i(n, t, u)
        }, i.delayedCall = function(n, t, r, u, f) {
            return new i(t, 0, {
                delay: n,
                onComplete: t,
                onCompleteParams: r,
                onCompleteScope: u,
                onReverseComplete: t,
                onReverseCompleteParams: r,
                onReverseCompleteScope: u,
                immediateRender: !1,
                useFrames: f,
                overwrite: 0
            })
        }, i.set = function(n, t) {
            return new i(n, 0, t)
        }, i.killTweensOf = i.killDelayedCallsTo = function(n, t) {
            for (var r = i.getTweensOf(n), u = r.length; --u > -1;) r[u]._kill(
                t, n)
        }, i.getTweensOf = function(n) {
            if (null == n) return [];
            n = "string" != typeof n ? n : i.selector(n) || n;
            var t, r, u, f;
            if ((n instanceof Array || wt(n)) && "number" != typeof n[0]) {
                for (t = n.length, r = []; --t > -1;) r = r.concat(i.getTweensOf(
                    n[t]));
                for (t = r.length; --t > -1;)
                    for (f = r[t], u = t; --u > -1;) f === r[u] && r.splice(
                        t, 1)
            } else
                for (r = g(n)
                    .concat(), t = r.length; --t > -1;) r[t]._gc && r.splice(
                    t, 1);
            return r
        }, s = h("plugins.TweenPlugin", function(n, t) {
            this._overwriteProps = (n || "")
                .split(",");
            this._propName = this._overwriteProps[0];
            this._priority = t || 0;
            this._super = s.prototype
        }, !0), t = s.prototype, s.version = "1.10.1", s.API = 2, t._firstPT =
        null, t._addTween = function(n, t, i, r, u, f) {
            var o, e;
            if (null != r && (o = "number" == typeof r || "=" !== r.charAt(
                    1) ? Number(r) - i : parseInt(r.charAt(0) + "1", 10) *
                Number(r.substr(2)))) return (this._firstPT = e = {
                _next: this._firstPT,
                t: n,
                p: t,
                s: i,
                c: o,
                f: "function" == typeof n[t],
                n: u || t,
                r: f
            }, e._next && (e._next._prev = e), e)
        }, t.setRatio = function(n) {
            for (var i, t = this._firstPT, r = 1e-6; t;) i = t.c * n + t.s,
                t.r ? i = 0 | i + (i > 0 ? .5 : -.5) : r > i && i > -r && (
                    i = 0), t.f ? t.t[t.p](i) : t.t[t.p] = i, t = t._next
        }, t._kill = function(n) {
            var i, r = this._overwriteProps,
                t = this._firstPT;
            if (null != n[this._propName]) this._overwriteProps = [];
            else
                for (i = r.length; --i > -1;) null != n[r[i]] && r.splice(i,
                    1);
            for (; t;) null != n[t.n] && (t._next && (t._next._prev = t._prev),
                    t._prev ? (t._prev._next = t._next, t._prev = null) :
                    this._firstPT === t && (this._firstPT = t._next)), t =
                t._next;
            return !1
        }, t._roundProps = function(n, t) {
            for (var i = this._firstPT; i;)(n[this._propName] || null != i.n &&
                n[i.n.split(this._propName + "_")
                    .join("")]) && (i.r = t), i = i._next
        }, i._onPluginEvent = function(n, t) {
            var f, r, u, e, o, i = t._firstPT;
            if ("_onInitAllProps" === n) {
                for (; i;) {
                    for (o = i._next, r = u; r && r.pr > i.pr;) r = r._next;
                    (i._prev = r ? r._prev : e) ? i._prev._next = i: u = i;
                    (i._next = r) ? r._prev = i: e = i;
                    i = o
                }
                i = t._firstPT = u
            }
            for (; i;) i.pg && "function" == typeof i.t[n] && i.t[n]() && (
                f = !0), i = i._next;
            return f
        }, s.activate = function(n) {
            for (var t = n.length; --t > -1;) n[t].API === s.API && (v[(new n[
                    t])
                ._propName] = n[t]);
            return !0
        }, it.plugin = function(n) {
            if (!(n && n.propName && n.init && n.API)) throw "illegal plugin definition.";
            var i, r = n.propName,
                e = n.priority || 0,
                o = n.overwriteProps,
                u = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                },
                t = h("plugins." + r.charAt(0)
                    .toUpperCase() + r.substr(1) + "Plugin", function() {
                        s.call(this, r, e);
                        this._overwriteProps = o || []
                    }, n.global === !0),
                f = t.prototype = new s(r);
            f.constructor = t;
            t.API = n.API;
            for (i in u) "function" == typeof n[i] && (f[u[i]] = n[i]);
            return t.version = n.version, s.activate([t]), t
        }, e = n._gsQueue) {
        for (u = 0; e.length > u; u++) e[u]();
        for (t in w) w[t].func || n.console.log(
            "GSAP encountered missing dependency: com.greensock." + t)
    }
    o = !1
})(window);
/*!
 * VERSION: 0.1.6
 * DATE: 2013-02-13
 * UPDATES AND DOCS AT: http://www.greensock.com/jquery-gsap-plugin/
 *
 * Requires TweenLite version 1.8.0 or higher and CSSPlugin.
 *
 * @license Copyright (c) 2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(n) {
    "use strict";
    var t, r, e, u = n.fn.animate,
        h = n.fn.stop,
        o = !0,
        c = function(n, t) {
            "function" == typeof n && this.each(n);
            t()
        },
        l = function(n, t, i, r, u) {
            u = "function" == typeof u ? u : null;
            t = "function" == typeof t ? t : null;
            (t || u) && (r[n] = u ? c : i.each, r[n + "Scope"] = i, r[n +
                "Params"] = u ? [t, u] : [t])
        },
        s = {
            overwrite: 1,
            delay: 1,
            useFrames: 1,
            runBackwards: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            autoCSS: 1
        },
        a = function(n, t) {
            for (var i in s) s[i] && void 0 !== n[i] && (t[i] = n[i])
        },
        v = function(n) {
            return function(t) {
                return n.getRatio(t)
            }
        },
        i = {},
        f = function() {
            var o, s, h, u = window.GreenSockGlobals || window;
            if (t = u.TweenMax || u.TweenLite, t && (o = (t.version +
                    ".0.0")
                .split("."), s = !(Number(o[0]) > 0 && Number(o[1]) > 7),
                u = u.com.greensock, r = u.plugins.CSSPlugin, i = u.easing
                .Ease.map || {}), !t || !r || s) return t = null, !e &&
                window.console && (window.console.log(
                    "The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." +
                    (s ? " Version " + o.join(".") + " is too old." :
                        "")), e = !0), void 0;
            if (n.easing) {
                for (h in i) n.easing[h] = v(i[h]);
                f = !1
            }
        };
    n.fn.animate = function(e, s, h, c) {
        if ((e = e || {}, f && (f(), !t || !r)) || !o || e.skipGSAP ===
            !0 || "object" == typeof s && "function" == typeof s.step ||
            null != e.scrollTop || null != e.scrollLeft) return u.call(
            this, e, s, h, c);
        var v, y, g, p, w = n.speed(s, h, c),
            b = {
                ease: i[w.easing] || (w.easing === !1 ? i.linear : i.swing)
            },
            d = this,
            k = "object" == typeof s ? s.specialEasing : null;
        for (y in e) {
            if (v = e[y], v instanceof Array && i[v[1]] && (k = k || {},
                    k[y] = v[1], v = v[0]), "toggle" === v || "hide" ===
                v || "show" === v) return u.call(this, e, s, h, c);
            b[-1 === y.indexOf("-") ? y : n.camelCase(y)] = v
        }
        if (k) {
            p = [];
            for (y in k) v = p[p.length] = {}, a(b, v), v.ease = i[k[y]] ||
                b.ease, -1 !== y.indexOf("-") && (y = n.camelCase(y)),
                v[y] = b[y];
            0 === p.length && (p = null)
        }
        return g = function(i) {
            if (p)
                for (var r = p.length; --r > -1;) t.to(d, n.fx.off ?
                    0 : w.duration / 1e3, p[r]);
            l("onComplete", w.old, d, b, i);
            t.to(d, n.fx.off ? 0 : w.duration / 1e3, b)
        }, w.queue !== !1 ? d.queue(w.queue, g) : g(), d
    };
    n.fn.stop = function(n, i) {
        if (h.call(this, n, i), t) {
            if (i)
                for (var f, r = t.getTweensOf(this), u = r.length; --u >
                    -1;) f = r[u].totalTime() / r[u].totalDuration(), f >
                    0 && 1 > f && r[u].seek(r[u].totalDuration());
            t.killTweensOf(this)
        }
        return this
    };
    n.gsap = {
        enabled: function(n) {
            o = n
        },
        version: "0.1.6"
    }
})(jQuery);
(function(n, t) {
    typeof exports == "object" ? module.exports = t() : typeof define ==
        "function" && define.amd ? define(t) : n.Spinner = t()
})(this, function() {
    "use strict";

    function r(n, t) {
        var r = document.createElement(n || "div"),
            i;
        for (i in t) r[i] = t[i];
        return r
    }

    function t(n) {
        for (var t = 1, i = arguments.length; t < i; t++) n.appendChild(
            arguments[t]);
        return n
    }

    function v(n, t, i, r) {
        var f = ["opacity", t, ~~(n * 100), i, r].join("-"),
            o = .01 + i / r * 100,
            s = Math.max(1 - (1 - n) / t * (100 - o), n),
            c = u.substring(0, u.indexOf("Animation"))
            .toLowerCase(),
            l = c && "-" + c + "-" || "";
        return h[f] || (e.insertRule("@" + l + "keyframes " + f +
            "{0%{opacity:" + s + "}" + o + "%{opacity:" + n +
            "}" + (o + .01) + "%{opacity:1}" + (o + t) % 100 +
            "%{opacity:" + n + "}100%{opacity:" + s + "}}", e.cssRules
            .length), h[f] = 1), f
    }

    function o(n, t) {
        var u = n.style,
            r, i;
        for (t = t.charAt(0)
            .toUpperCase() + t.slice(1), i = 0; i < s.length; i++)
            if (r = s[i] + t, u[r] !== undefined) return r;
        if (u[t] !== undefined) return t
    }

    function n(n, t) {
        for (var i in t) n.style[o(n, i) || i] = t[i];
        return n
    }

    function c(n) {
        for (var r, i, t = 1; t < arguments.length; t++) {
            r = arguments[t];
            for (i in r) n[i] === undefined && (n[i] = r[i])
        }
        return n
    }

    function l(n) {
        for (var t = {
            x: n.offsetLeft,
            y: n.offsetTop
        }; n = n.offsetParent;) t.x += n.offsetLeft, t.y += n.offsetTop;
        return t
    }

    function a(n, t) {
        return typeof n == "string" ? n : n[t % n.length]
    }

    function i(n) {
        if (typeof this == "undefined") return new i(n);
        this.opts = c(n || {}, i.defaults, y)
    }

    function p() {
        function u(n, t) {
            return r("<" + n +
                ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',
                t)
        }
        e.addRule(".spin-vml", "behavior:url(#default#VML)");
        i.prototype.lines = function(i, r) {
            function s() {
                return n(u("group", {
                    coordsize: o + " " + o,
                    coordorigin: -e + " " + -e
                }), {
                    width: o,
                    height: o
                })
            }

            function l(i, f, o) {
                t(c, t(n(s(), {
                    rotation: 360 / r.lines * i +
                        "deg",
                    left: ~~f
                }), t(n(u("roundrect", {
                    arcsize: r.corners
                }), {
                    width: e,
                    height: r.width,
                    left: r.radius,
                    top: -r.width >> 1,
                    filter: o
                }), u("fill", {
                    color: a(r.color, i),
                    opacity: r.opacity
                }), u("stroke", {
                    opacity: 0
                }))))
            }
            var e = r.length + r.width,
                o = 2 * e,
                h = -(r.width + r.length) * 2 + "px",
                c = n(s(), {
                    position: "absolute",
                    top: h,
                    left: h
                }),
                f;
            if (r.shadow)
                for (f = 1; f <= r.lines; f++) l(f, -2,
                    "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)"
                );
            for (f = 1; f <= r.lines; f++) l(f);
            return t(i, c)
        };
        i.prototype.opacity = function(n, t, i, r) {
            var u = n.firstChild;
            r = r.shadow && r.lines || 0;
            u && t + r < u.childNodes.length && (u = u.childNodes[t +
                    r], u = u && u.firstChild, u = u && u.firstChild,
                u && (u.opacity = i))
        }
    }
    var s = ["webkit", "Moz", "ms", "O"],
        h = {},
        u, e = function() {
            var n = r("style", {
                type: "text/css"
            });
            return t(document.getElementsByTagName("head")[0], n), n.sheet ||
                n.styleSheet
        }(),
        y = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: 1 / 4,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        },
        f;
    return i.defaults = {}, c(i.prototype, {
        spin: function(t) {
            this.stop();
            var f = this,
                i = f.opts,
                e = f.el = n(r(0, {
                    className: i.className
                }), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                }),
                c = i.radius + i.length + i.width,
                o, s;
            if (t && (t.insertBefore(e, t.firstChild || null),
                    s = l(t), o = l(e), n(e, {
                        left: (i.left == "auto" ? s.x - o.x +
                                (t.offsetWidth >> 1) :
                                parseInt(i.left, 10) + c) +
                            "px",
                        top: (i.top == "auto" ? s.y - o.y +
                                (t.offsetHeight >> 1) :
                                parseInt(i.top, 10) + c) +
                            "px"
                    })), e.setAttribute("role", "progressbar"),
                f.lines(e, f.opts), !u) {
                var a = 0,
                    p = (i.lines - 1) * (1 - i.direction) / 2,
                    v, y = i.fps,
                    h = y / i.speed,
                    w = (1 - i.opacity) / (h * i.trail / 100),
                    b = h / i.lines;
                (function k() {
                    a++;
                    for (var n = 0; n < i.lines; n++) v =
                        Math.max(1 - (a + (i.lines - n) * b) %
                            h * w, i.opacity), f.opacity(e,
                            n * i.direction + p, v, i);
                    f.timeout = f.el && setTimeout(k, ~~(
                        1e3 / y))
                })()
            }
            return f
        },
        stop: function() {
            var n = this.el;
            return n && (clearTimeout(this.timeout), n.parentNode &&
                n.parentNode.removeChild(n), this.el =
                undefined), this
        },
        lines: function(i, f) {
            function s(t, i) {
                return n(r(), {
                    position: "absolute",
                    width: f.length + f.width +
                        "px",
                    height: f.width + "px",
                    background: t,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 /
                            f.lines * e + f.rotate) +
                        "deg) translate(" + f.radius +
                        "px,0)",
                    borderRadius: (f.corners * f.width >>
                        1) + "px"
                })
            }
            for (var e = 0, h = (f.lines - 1) * (1 - f.direction) /
                2, o; e < f.lines; e++) o = n(r(), {
                position: "absolute",
                top: 1 + ~(f.width / 2) + "px",
                transform: f.hwaccel ?
                    "translate3d(0,0,0)" : "",
                opacity: f.opacity,
                animation: u && v(f.opacity, f.trail, h +
                        e * f.direction, f.lines) + " " +
                    1 / f.speed + "s linear infinite"
            }), f.shadow && t(o, n(s("#000", "0 0 4px #000"), {
                top: "2px"
            })), t(i, t(o, s(a(f.color, e),
                "0 0 1px rgba(0,0,0,.1)")));
            return i
        },
        opacity: function(n, t, i) {
            t < n.childNodes.length && (n.childNodes[t].style.opacity =
                i)
        }
    }), f = n(r("group"), {
        behavior: "url(#default#VML)"
    }), !o(f, "transform") && f.adj ? p() : u = o(f, "animation"), i
});
var JSON;
JSON || (JSON = {}),
    function() {
        "use strict";

        function i(n) {
            return n < 10 ? "0" + n : n
        }

        function o(n) {
            return e.lastIndex = 0, e.test(n) ? '"' + n.replace(e, function(
                n) {
                var t = s[n];
                return typeof t == "string" ? t : "\\u" + ("0000" +
                        n.charCodeAt(0)
                        .toString(16))
                    .slice(-4)
            }) + '"' : '"' + n + '"'
        }

        function u(i, f) {
            var s, l, h, a, v = n,
                c, e = f[i];
            e && typeof e == "object" && typeof e.toJSON == "function" && (
                e = e.toJSON(i));
            typeof t == "function" && (e = t.call(f, i, e));
            switch (typeof e) {
                case "string":
                    return o(e);
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "boolean":
                case "null":
                    return String(e);
                case "object":
                    if (!e) return "null";
                    if (n += r, c = [], Object.prototype.toString.apply(e) ===
                        "[object Array]") {
                        for (a = e.length, s = 0; s < a; s += 1) c[s] = u(s,
                            e) || "null";
                        return h = c.length === 0 ? "[]" : n ? "[\n" + n +
                            c.join(",\n" + n) + "\n" + v + "]" : "[" + c.join(
                                ",") + "]", n = v, h
                    }
                    if (t && typeof t == "object")
                        for (a = t.length, s = 0; s < a; s += 1) typeof t[s] ==
                            "string" && (l = t[s], h = u(l, e), h && c.push(
                                o(l) + (n ? ": " : ":") + h));
                    else
                        for (l in e) Object.prototype.hasOwnProperty.call(e,
                            l) && (h = u(l, e), h && c.push(o(l) + (n ?
                            ": " : ":") + h));
                    return h = c.length === 0 ? "{}" : n ? "{\n" + n + c.join(
                            ",\n" + n) + "\n" + v + "}" : "{" + c.join(",") +
                        "}", n = v, h
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON =
            function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() +
                    "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) +
                    "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) +
                    ":" + i(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype
            .toJSON = function() {
                return this.valueOf()
            });
        var f =
            /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            e =
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            n, r, s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            t;
        typeof JSON.stringify != "function" && (JSON.stringify = function(i, f,
            e) {
            var o;
            if (n = "", r = "", typeof e == "number")
                for (o = 0; o < e; o += 1) r += " ";
            else typeof e == "string" && (r = e); if (t = f, f &&
                typeof f != "function" && (typeof f != "object" ||
                    typeof f.length != "number")) throw new Error(
                "JSON.stringify");
            return u("", {
                "": i
            })
        });
        typeof JSON.parse != "function" && (JSON.parse = function(n, t) {
            function r(n, i) {
                var f, e, u = n[i];
                if (u && typeof u == "object")
                    for (f in u) Object.prototype.hasOwnProperty.call(
                        u, f) && (e = r(u, f), e !== undefined ?
                        u[f] = e : delete u[f]);
                return t.call(n, i, u)
            }
            var i;
            if (n = String(n), f.lastIndex = 0, f.test(n) && (n = n.replace(
                f, function(n) {
                    return "\\u" + ("0000" + n.charCodeAt(0)
                            .toString(16))
                        .slice(-4)
                })), /^[\],:{}\s]*$/.test(n.replace(
                    /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                .replace(
                    /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    "]")
                .replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return i = eval(
                "(" + n + ")"), typeof t == "function" ? r({
                "": i
            }, "") : i;
            throw new SyntaxError("JSON.parse");
        })
    }();
(function(n) {
    function o(i, r, f, o) {
        var s = {
            data: o || (r ? r.data : {}),
            _wrap: r ? r._wrap : null,
            tmpl: null,
            parent: r || null,
            nodes: [],
            calls: d,
            nest: g,
            wrap: nt,
            html: tt,
            update: it
        };
        return i && n.extend(s, i, {
            nodes: [],
            parent: r
        }), f && (s.tmpl = f, s._ctnt = s._ctnt || s.tmpl(n, s), s.key = ++
            e, (h.length ? u : t)[e] = s), s
    }

    function s(t, i, u) {
        var f, e = u ? n.map(u, function(n) {
            return typeof n == "string" ? t.key ? n.replace(
                /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,
                "$1 " + r + '="' + t.key + '" $2') : n : s(
                n, t, n._ctnt)
        }) : t;
        return i ? e : (e = e.join(""), e.replace(
            /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
            function(t, i, r, u) {
                f = n(r)
                    .get();
                b(f);
                i && (f = c(i)
                    .concat(f));
                u && (f = f.concat(c(u)))
            }), f ? f : c(e))
    }

    function c(t) {
        var i = document.createElement("div");
        return i.innerHTML = t, n.makeArray(i.childNodes)
    }

    function p(t) {
        return new Function("jQuery", "$item",
            "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" +
            n.trim(t)
            .replace(/([\\'])/g, "\\$1")
            .replace(/[\r\t\n]/g, " ")
            .replace(/\$\{([^\}]*)\}/g, "{{= $1}}")
            .replace(
                /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
                function(t, i, r, u, f, e, o) {
                    var h = n.tmpl.tag[r],
                        c, s, a;
                    if (!h) throw "Template command not found: " +
                        r;
                    return c = h._default || [], e && !/\w$/.test(f) &&
                        (f += e, e = ""), f ? (f = l(f), o = o ?
                            "," + l(o) + ")" : e ? ")" : "", s = e ?
                            f.indexOf(".") > -1 ? f + e : "(" + f +
                            ").call($item" + o : f, a = e ? s :
                            "(typeof(" + f + ")==='function'?(" + f +
                            ").call($item):(" + f + "))") : a = s =
                        c.$1 || "null", u = l(u), "');" + h[i ?
                            "close" : "open"].split("$notnull_1")
                        .join(f ? "typeof(" + f +
                            ")!=='undefined' && (" + f + ")!=null" :
                            "true")
                        .split("$1a")
                        .join(a)
                        .split("$1")
                        .join(s)
                        .split("$2")
                        .join(u ? u.replace(
                            /\s*([^\(]+)\s*(\((.*?)\))?/g,
                            function(n, t, i, r) {
                                return r = r ? "," + r + ")" :
                                    i ? ")" : "", r ? "(" + t +
                                    ").call($item" + r : n
                            }) : c.$2 || "") + "_.push('"
                }) + "');}return _;")
    }

    function w(t, i) {
        t._wrap = s(t, !0, n.isArray(i) ? i : [v.test(i) ? i : n(i)
                .html()])
            .join("")
    }

    function l(n) {
        return n ? n.replace(/\\'/g, "'")
            .replace(/\\\\/g, "\\") : null
    }

    function k(n) {
        var t = document.createElement("div");
        return t.appendChild(n.cloneNode(!0)), t.innerHTML
    }

    function b(f) {
        function p(f) {
            function p(n) {
                n = n + a;
                s = v[n] = v[n] || o(s, t[s.parent.key + a] ||
                    s.parent, null, !0)
            }
            var y, h = f,
                c, s, l;
            if (l = f.getAttribute(r)) {
                while (h.parentNode && (h = h.parentNode)
                    .nodeType === 1 && !(y = h.getAttribute(r)));
                y !== l && (h = h.parentNode ? h.nodeType === 11 ?
                    0 : h.getAttribute(r) || 0 : 0, (s = t[l]) ||
                    (s = u[l], s = o(s, t[h] || u[h], null, !0),
                        s.key = ++e, t[e] = s), i && p(l));
                f.removeAttribute(r)
            } else i && (s = n.data(f, "tmplItem")) && (p(s.key), t[
                s.key] = s, h = n.data(f.parentNode,
                "tmplItem"), h = h ? h.key : 0); if (s) {
                for (c = s; c && c.key != h;) c.nodes.push(f), c =
                    c.parent;
                delete s._ctnt;
                delete s._wrap;
                n.data(f, "tmplItem", s)
            }
        }
        for (var a = "_" + i, c, l, v = {}, h, s = 0, y = f.length; s <
            y; s++)
            if ((c = f[s])
                .nodeType === 1) {
                for (l = c.getElementsByTagName("*"), h = l.length - 1; h >=
                    0; h--) p(l[h]);
                p(c)
            }
    }

    function d(n, t, i, r) {
        if (!n) return h.pop();
        h.push({
            _: n,
            tmpl: t,
            item: this,
            data: i,
            options: r
        })
    }

    function g(t, i, r) {
        return n.tmpl(n.template(t), i, r, this)
    }

    function nt(t, i) {
        var r = t.options || {};
        return r.wrapped = i, n.tmpl(n.template(t.tmpl), t.data, r, t.item)
    }

    function tt(t, i) {
        var r = this._wrap;
        return n.map(n(n.isArray(r) ? r.join("") : r)
            .filter(t || "*"), function(n) {
                return i ? n.innerText || n.textContent : n.outerHTML ||
                    k(n)
            })
    }

    function it() {
        var t = this.nodes;
        n.tmpl(null, null, null, this)
            .insertBefore(t[0]);
        n(t)
            .remove()
    }
    var a = n.fn.domManip,
        r = "_tmplitem",
        v = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
        t = {},
        u = {},
        f, y = {
            key: 0,
            data: {}
        },
        e = 0,
        i = 0,
        h = [];
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(r, u) {
        n.fn[r] = function(e) {
            var o = [],
                h = n(e),
                c, s, a, v, l = this.length === 1 && this[0].parentNode;
            if (f = t || {}, l && l.nodeType === 11 && l.childNodes
                .length === 1 && h.length === 1) h[u](this[0]),
                o = this;
            else {
                for (s = 0, a = h.length; s < a; s++) i = s, c =
                    (s > 0 ? this.clone(!0) : this)
                    .get(), n.fn[u].apply(n(h[s]), c), o = o.concat(
                        c);
                i = 0;
                o = this.pushStack(o, r, h.selector)
            }
            return v = f, f = null, n.tmpl.complete(v), o
        }
    });
    n.fn.extend({
        tmpl: function(t, i, r) {
            return n.tmpl(this[0], t, i, r)
        },
        tmplItem: function() {
            return n.tmplItem(this[0])
        },
        template: function(t) {
            return n.template(t, this[0])
        },
        domManip: function(r, u, e) {
            if (r[0] && r[0].nodeType) {
                for (var o = n.makeArray(arguments), s = r.length,
                    h = 0, c; h < s && !(c = n.data(r[h++],
                    "tmplItem")););
                s > 1 && (o[0] = [n.makeArray(r)]);
                c && i && (o[2] = function(t) {
                    n.tmpl.afterManip(this, t, e)
                });
                a.apply(this, o)
            } else a.apply(this, arguments);
            return i = 0, f || n.tmpl.complete(t), this
        }
    });
    n.extend({
        tmpl: function(i, r, f, e) {
            var h, c = !e;
            if (c) e = y, i = n.template[i] || n.template(null,
                i), u = {};
            else if (!i) return i = e.tmpl, t[e.key] = e, e.nodes = [],
                e.wrapped && w(e, e.wrapped), n(s(e, null,
                    e.tmpl(n, e)));
            return i ? (typeof r == "function" && (r = r.call(e || {})),
                f && f.wrapped && w(f, f.wrapped), h = n.isArray(
                    r) ? n.map(r, function(n) {
                    return n ? o(f, e, i, n) : null
                }) : [o(f, e, i, r)], c ? n(s(e, null, h)) :
                h) : []
        },
        tmplItem: function(t) {
            var i;
            for (t instanceof n && (t = t[0]); t && t.nodeType ===
                1 && !(i = n.data(t, "tmplItem")) && (t = t.parentNode);
            );
            return i || y
        },
        template: function(t, i) {
            return i ? (typeof i == "string" ? i = p(i) : i instanceof n &&
                    (i = i[0] || {}), i.nodeType && (i = n.data(
                        i, "tmpl") || n.data(i, "tmpl", p(i
                        .innerHTML))), typeof t == "string" ? n
                    .template[t] = i : i) : t ? typeof t !=
                "string" ? n.template(null, t) : n.template[t] ||
                n.template(null, v.test(t) ? t : n(t)) : null
        },
        encode: function(n) {
            return ("" + n)
                .split("<")
                .join("&lt;")
                .split(">")
                .join("&gt;")
                .split('"')
                .join("&#34;")
                .split("'")
                .join("&#39;")
        }
    });
    n.extend(n.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(_,$1,$2);_=[];",
                close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){_.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){_.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            t = {}
        },
        afterManip: function(t, r, u) {
            var f = r.nodeType === 11 ? n.makeArray(r.childNodes) :
                r.nodeType === 1 ? [r] : [];
            u.call(t, r);
            b(f);
            i++
        }
    })
})(jQuery);
(function() {
    var v = this,
        lt = v._,
        e = {},
        r = Array.prototype,
        nt = Object.prototype,
        at = Function.prototype,
        y = r.push,
        t = r.slice,
        o = r.concat,
        f = nt.toString,
        vt = nt.hasOwnProperty,
        tt = r.forEach,
        it = r.map,
        rt = r.reduce,
        ut = r.reduceRight,
        ft = r.filter,
        et = r.every,
        ot = r.some,
        s = r.indexOf,
        st = r.lastIndexOf,
        yt = Array.isArray,
        pt = Object.keys,
        p = at.bind,
        n = function(t) {
            if (t instanceof n) return t;
            if (!(this instanceof n)) return new n(t);
            this._wrapped = t
        },
        i, w, b, h, k, d, c, l, u, ht, ct, a;
    typeof exports != "undefined" ? (typeof module != "undefined" && module
            .exports && (exports = module.exports = n), exports._ = n) : v._ =
        n;
    n.VERSION = "1.5.1";
    i = n.each = n.forEach = function(t, i, r) {
        var u, o, f;
        if (t != null)
            if (tt && t.forEach === tt) t.forEach(i, r);
            else if (t.length === +t.length) {
            for (u = 0, o = t.length; u < o; u++)
                if (i.call(r, t[u], u, t) === e) return
        } else
            for (f in t)
                if (n.has(t, f) && i.call(r, t[f], f, t) === e) return
    };
    n.map = n.collect = function(n, t, r) {
        var u = [];
        return n == null ? u : it && n.map === it ? n.map(t, r) : (i(n,
            function(n, i, f) {
                u.push(t.call(r, n, i, f))
            }), u)
    };
    w = "Reduce of empty array with no initial value";
    n.reduce = n.foldl = n.inject = function(t, r, u, f) {
        var e = arguments.length > 2;
        if (t == null && (t = []), rt && t.reduce === rt) return f && (
            r = n.bind(r, f)), e ? t.reduce(r, u) : t.reduce(r);
        if (i(t, function(n, t, i) {
            e ? u = r.call(f, u, n, t, i) : (u = n, e = !0)
        }), !e) throw new TypeError(w);
        return u
    };
    n.reduceRight = n.foldr = function(t, r, u, f) {
        var o = arguments.length > 2,
            e, s;
        if (t == null && (t = []), ut && t.reduceRight === ut) return f &&
            (r = n.bind(r, f)), o ? t.reduceRight(r, u) : t.reduceRight(
                r);
        if (e = t.length, e !== +e && (s = n.keys(t), e = s.length), i(
            t, function(n, i, h) {
                i = s ? s[--e] : --e;
                o ? u = r.call(f, u, t[i], i, h) : (u = t[i], o = !
                    0)
            }), !o) throw new TypeError(w);
        return u
    };
    n.find = n.detect = function(n, t, i) {
        var r;
        return b(n, function(n, u, f) {
            if (t.call(i, n, u, f)) return r = n, !0
        }), r
    };
    n.filter = n.select = function(n, t, r) {
        var u = [];
        return n == null ? u : ft && n.filter === ft ? n.filter(t, r) :
            (i(n, function(n, i, f) {
                t.call(r, n, i, f) && u.push(n)
            }), u)
    };
    n.reject = function(t, i, r) {
        return n.filter(t, function(n, t, u) {
            return !i.call(r, n, t, u)
        }, r)
    };
    n.every = n.all = function(t, r, u) {
        r || (r = n.identity);
        var f = !0;
        return t == null ? f : et && t.every === et ? t.every(r, u) : (
            i(t, function(n, t, i) {
                if (!(f = f && r.call(u, n, t, i))) return e
            }), !!f)
    };
    b = n.some = n.any = function(t, r, u) {
        r || (r = n.identity);
        var f = !1;
        return t == null ? f : ot && t.some === ot ? t.some(r, u) : (i(
            t, function(n, t, i) {
                if (f || (f = r.call(u, n, t, i))) return e
            }), !!f)
    };
    n.contains = n.include = function(n, t) {
        return n == null ? !1 : s && n.indexOf === s ? n.indexOf(t) !=
            -1 : b(n, function(n) {
                return n === t
            })
    };
    n.invoke = function(i, r) {
        var u = t.call(arguments, 2),
            f = n.isFunction(r);
        return n.map(i, function(n) {
            return (f ? r : n[r])
                .apply(n, u)
        })
    };
    n.pluck = function(t, i) {
        return n.map(t, function(n) {
            return n[i]
        })
    };
    n.where = function(t, i, r) {
        return n.isEmpty(i) ? r ? void 0 : [] : n[r ? "find" : "filter"]
            (t, function(n) {
                for (var t in i)
                    if (i[t] !== n[t]) return !1;
                return !0
            })
    };
    n.findWhere = function(t, i) {
        return n.where(t, i, !0)
    };
    n.max = function(t, r, u) {
        if (!r && n.isArray(t) && t[0] === +t[0] && t.length < 65535)
            return Math.max.apply(Math, t);
        if (!r && n.isEmpty(t)) return -Infinity;
        var f = {
            computed: -Infinity,
            value: -Infinity
        };
        return i(t, function(n, t, i) {
            var e = r ? r.call(u, n, t, i) : n;
            e > f.computed && (f = {
                value: n,
                computed: e
            })
        }), f.value
    };
    n.min = function(t, r, u) {
        if (!r && n.isArray(t) && t[0] === +t[0] && t.length < 65535)
            return Math.min.apply(Math, t);
        if (!r && n.isEmpty(t)) return Infinity;
        var f = {
            computed: Infinity,
            value: Infinity
        };
        return i(t, function(n, t, i) {
            var e = r ? r.call(u, n, t, i) : n;
            e < f.computed && (f = {
                value: n,
                computed: e
            })
        }), f.value
    };
    n.shuffle = function(t) {
        var u, f = 0,
            r = [];
        return i(t, function(t) {
            u = n.random(f++);
            r[f - 1] = r[u];
            r[u] = t
        }), r
    };
    h = function(t) {
        return n.isFunction(t) ? t : function(n) {
            return n[t]
        }
    };
    n.sortBy = function(t, i, r) {
        var u = h(i);
        return n.pluck(n.map(t, function(n, t, i) {
                return {
                    value: n,
                    index: t,
                    criteria: u.call(r, n, t, i)
                }
            })
            .sort(function(n, t) {
                var i = n.criteria,
                    r = t.criteria;
                if (i !== r) {
                    if (i > r || i === void 0) return 1;
                    if (i < r || r === void 0) return -1
                }
                return n.index < t.index ? -1 : 1
            }), "value")
    };
    k = function(t, r, u, f) {
        var e = {},
            o = h(r == null ? n.identity : r);
        return i(t, function(n, i) {
            var r = o.call(u, n, i, t);
            f(e, r, n)
        }), e
    };
    n.groupBy = function(t, i, r) {
        return k(t, i, r, function(t, i, r) {
            (n.has(t, i) ? t[i] : t[i] = [])
            .push(r)
        })
    };
    n.countBy = function(t, i, r) {
        return k(t, i, r, function(t, i) {
            n.has(t, i) || (t[i] = 0);
            t[i]++
        })
    };
    n.sortedIndex = function(t, i, r, u) {
        var e;
        r = r == null ? n.identity : h(r);
        for (var s = r.call(u, i), f = 0, o = t.length; f < o;) e = f +
            o >>> 1, r.call(u, t[e]) < s ? f = e + 1 : o = e;
        return f
    };
    n.toArray = function(i) {
        return i ? n.isArray(i) ? t.call(i) : i.length === +i.length ?
            n.map(i, n.identity) : n.values(i) : []
    };
    n.size = function(t) {
        return t == null ? 0 : t.length === +t.length ? t.length : n.keys(
                t)
            .length
    };
    n.first = n.head = n.take = function(n, i, r) {
        if (n != null) return i != null && !r ? t.call(n, 0, i) : n[0]
    };
    n.initial = function(n, i, r) {
        return t.call(n, 0, n.length - (i == null || r ? 1 : i))
    };
    n.last = function(n, i, r) {
        if (n != null) return i == null || r ? n[n.length - 1] : t.call(
            n, Math.max(n.length - i, 0))
    };
    n.rest = n.tail = n.drop = function(n, i, r) {
        return t.call(n, i == null || r ? 1 : i)
    };
    n.compact = function(t) {
        return n.filter(t, n.identity)
    };
    d = function(t, r, u) {
        return r && n.every(t, n.isArray) ? o.apply(u, t) : (i(t,
            function(t) {
                n.isArray(t) || n.isArguments(t) ? r ? y.apply(
                    u, t) : d(t, r, u) : u.push(t)
            }), u)
    };
    n.flatten = function(n, t) {
        return d(n, t, [])
    };
    n.without = function(i) {
        return n.difference(i, t.call(arguments, 1))
    };
    n.uniq = n.unique = function(t, r, u, f) {
        n.isFunction(r) && (f = u, u = r, r = !1);
        var s = u ? n.map(t, u, f) : t,
            o = [],
            e = [];
        return i(s, function(i, u) {
            (r ? u && e[e.length - 1] === i : n.contains(e, i)) ||
            (e.push(i), o.push(t[u]))
        }), o
    };
    n.union = function() {
        return n.uniq(n.flatten(arguments, !0))
    };
    n.intersection = function(i) {
        var r = t.call(arguments, 1);
        return n.filter(n.uniq(i), function(t) {
            return n.every(r, function(i) {
                return n.indexOf(i, t) >= 0
            })
        })
    };
    n.difference = function(i) {
        var u = o.apply(r, t.call(arguments, 1));
        return n.filter(i, function(t) {
            return !n.contains(u, t)
        })
    };
    n.zip = function() {
        for (var i = n.max(n.pluck(arguments, "length")
            .concat(0)), r = new Array(i), t = 0; t < i; t++) r[t] = n.pluck(
            arguments, "" + t);
        return r
    };
    n.object = function(n, t) {
        var r, i, u;
        if (n == null) return {};
        for (r = {}, i = 0, u = n.length; i < u; i++) t ? r[n[i]] = t[i] :
            r[n[i][0]] = n[i][1];
        return r
    };
    n.indexOf = function(t, i, r) {
        if (t == null) return -1;
        var u = 0,
            f = t.length;
        if (r)
            if (typeof r == "number") u = r < 0 ? Math.max(0, f + r) :
                r;
            else return u = n.sortedIndex(t, i), t[u] === i ? u : -1;
        if (s && t.indexOf === s) return t.indexOf(i, r);
        for (; u < f; u++)
            if (t[u] === i) return u;
        return -1
    };
    n.lastIndexOf = function(n, t, i) {
        var u, r;
        if (n == null) return -1;
        if (u = i != null, st && n.lastIndexOf === st) return u ? n.lastIndexOf(
            t, i) : n.lastIndexOf(t);
        for (r = u ? i : n.length; r--;)
            if (n[r] === t) return r;
        return -1
    };
    n.range = function(n, t, i) {
        arguments.length <= 1 && (t = n || 0, n = 0);
        i = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((t - n) / i), 0), u = 0, f =
            new Array(r); u < r;) f[u++] = n, n += i;
        return f
    };
    c = function() {};
    n.bind = function(i, r) {
        var u, f;
        if (p && i.bind === p) return p.apply(i, t.call(arguments, 1));
        if (!n.isFunction(i)) throw new TypeError;
        return u = t.call(arguments, 2), f = function() {
            var e, n;
            return (this instanceof f) ? (c.prototype = i.prototype,
                e = new c, c.prototype = null, n = i.apply(e, u
                    .concat(t.call(arguments))), Object(n) ===
                n) ? n : e : i.apply(r, u.concat(t.call(
                arguments)))
        }
    };
    n.partial = function(n) {
        var i = t.call(arguments, 1);
        return function() {
            return n.apply(this, i.concat(t.call(arguments)))
        }
    };
    n.bindAll = function(r) {
        var u = t.call(arguments, 1);
        if (u.length === 0) throw new Error(
            "bindAll must be passed function names");
        return i(u, function(t) {
            r[t] = n.bind(r[t], r)
        }), r
    };
    n.memoize = function(t, i) {
        var r = {};
        return i || (i = n.identity),
            function() {
                var u = i.apply(this, arguments);
                return n.has(r, u) ? r[u] : r[u] = t.apply(this,
                    arguments)
            }
    };
    n.delay = function(n, i) {
        var r = t.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, i)
    };
    n.defer = function(i) {
        return n.delay.apply(n, [i, 1].concat(t.call(arguments, 1)))
    };
    n.throttle = function(n, t, i) {
        var f, e, o, r = null,
            u = 0,
            s;
        return i || (i = {}), s = function() {
                u = i.leading === !1 ? 0 : new Date;
                r = null;
                o = n.apply(f, e)
            },
            function() {
                var h = new Date,
                    c;
                return u || i.leading !== !1 || (u = h), c = t - (h - u),
                    f = this, e = arguments, c <= 0 ? (clearTimeout(r),
                        r = null, u = h, o = n.apply(f, e)) : r || i.trailing ===
                    !1 || (r = setTimeout(s, c)), o
            }
    };
    n.debounce = function(n, t, i) {
        var u, r = null;
        return function() {
            var f = this,
                e = arguments,
                o = function() {
                    r = null;
                    i || (u = n.apply(f, e))
                },
                s = i && !r;
            return clearTimeout(r), r = setTimeout(o, t), s && (u =
                n.apply(f, e)), u
        }
    };
    n.once = function(n) {
        var i = !1,
            t;
        return function() {
            return i ? t : (i = !0, t = n.apply(this, arguments), n =
                null, t)
        }
    };
    n.wrap = function(n, t) {
        return function() {
            var i = [n];
            return y.apply(i, arguments), t.apply(this, i)
        }
    };
    n.compose = function() {
        var n = arguments;
        return function() {
            for (var i = arguments, t = n.length - 1; t >= 0; t--) i = [
                n[t].apply(this, i)];
            return i[0]
        }
    };
    n.after = function(n, t) {
        return function() {
            if (--n < 1) return t.apply(this, arguments)
        }
    };
    n.keys = pt || function(t) {
        var i, r;
        if (t !== Object(t)) throw new TypeError("Invalid object");
        i = [];
        for (r in t) n.has(t, r) && i.push(r);
        return i
    };
    n.values = function(t) {
        var r = [],
            i;
        for (i in t) n.has(t, i) && r.push(t[i]);
        return r
    };
    n.pairs = function(t) {
        var r = [],
            i;
        for (i in t) n.has(t, i) && r.push([i, t[i]]);
        return r
    };
    n.invert = function(t) {
        var r = {},
            i;
        for (i in t) n.has(t, i) && (r[t[i]] = i);
        return r
    };
    n.functions = n.methods = function(t) {
        var r = [],
            i;
        for (i in t) n.isFunction(t[i]) && r.push(i);
        return r.sort()
    };
    n.extend = function(n) {
        return i(t.call(arguments, 1), function(t) {
            if (t)
                for (var i in t) n[i] = t[i]
        }), n
    };
    n.pick = function(n) {
        var u = {},
            f = o.apply(r, t.call(arguments, 1));
        return i(f, function(t) {
            t in n && (u[t] = n[t])
        }), u
    };
    n.omit = function(i) {
        var f = {},
            e = o.apply(r, t.call(arguments, 1)),
            u;
        for (u in i) n.contains(e, u) || (f[u] = i[u]);
        return f
    };
    n.defaults = function(n) {
        return i(t.call(arguments, 1), function(t) {
            if (t)
                for (var i in t) n[i] === void 0 && (n[i] = t[i])
        }), n
    };
    n.clone = function(t) {
        return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({},
            t) : t
    };
    n.tap = function(n, t) {
        return t(n), n
    };
    l = function(t, i, r, u) {
        var a, v, h, c, e, o, s;
        if (t === i) return t !== 0 || 1 / t == 1 / i;
        if (t == null || i == null) return t === i;
        if (t instanceof n && (t = t._wrapped), i instanceof n && (i =
            i._wrapped), a = f.call(t), a != f.call(i)) return !1;
        switch (a) {
            case "[object String]":
                return t == String(i);
            case "[object Number]":
                return t != +t ? i != +i : t == 0 ? 1 / t == 1 / i : t ==
                    +i;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +i;
            case "[object RegExp]":
                return t.source == i.source && t.global == i.global &&
                    t.multiline == i.multiline && t.ignoreCase == i.ignoreCase
        }
        if (typeof t != "object" || typeof i != "object") return !1;
        for (v = r.length; v--;)
            if (r[v] == t) return u[v] == i;
        if (h = t.constructor, c = i.constructor, h !== c && !(n.isFunction(
            h) && h instanceof h && n.isFunction(c) && c instanceof c))
            return !1;
        if (r.push(t), u.push(i), e = 0, o = !0, a == "[object Array]") {
            if (e = t.length, o = e == i.length, o)
                while (e--)
                    if (!(o = l(t[e], i[e], r, u))) break
        } else {
            for (s in t)
                if (n.has(t, s) && (e++, !(o = n.has(i, s) && l(t[s], i[
                    s], r, u)))) break;
            if (o) {
                for (s in i)
                    if (n.has(i, s) && !e--) break;
                o = !e
            }
        }
        return r.pop(), u.pop(), o
    };
    n.isEqual = function(n, t) {
        return l(n, t, [], [])
    };
    n.isEmpty = function(t) {
        if (t == null) return !0;
        if (n.isArray(t) || n.isString(t)) return t.length === 0;
        for (var i in t)
            if (n.has(t, i)) return !1;
        return !0
    };
    n.isElement = function(n) {
        return !!(n && n.nodeType === 1)
    };
    n.isArray = yt || function(n) {
        return f.call(n) == "[object Array]"
    };
    n.isObject = function(n) {
        return n === Object(n)
    };
    i(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
        function(t) {
            n["is" + t] = function(n) {
                return f.call(n) == "[object " + t + "]"
            }
        });
    n.isArguments(arguments) || (n.isArguments = function(t) {
        return !!(t && n.has(t, "callee"))
    });
    typeof / . / != "function" && (n.isFunction = function(n) {
        return typeof n == "function"
    });
    n.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    };
    n.isNaN = function(t) {
        return n.isNumber(t) && t != +t
    };
    n.isBoolean = function(n) {
        return n === !0 || n === !1 || f.call(n) == "[object Boolean]"
    };
    n.isNull = function(n) {
        return n === null
    };
    n.isUndefined = function(n) {
        return n === void 0
    };
    n.has = function(n, t) {
        return vt.call(n, t)
    };
    n.noConflict = function() {
        return v._ = lt, this
    };
    n.identity = function(n) {
        return n
    };
    n.times = function(n, t, i) {
        for (var u = Array(Math.max(0, n)), r = 0; r < n; r++) u[r] = t
            .call(i, r);
        return u
    };
    n.random = function(n, t) {
        return t == null && (t = n, n = 0), n + Math.floor(Math.random() *
            (t - n + 1))
    };
    u = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    u.unescape = n.invert(u.escape);
    ht = {
        escape: new RegExp("[" + n.keys(u.escape)
            .join("") + "]", "g"),
        unescape: new RegExp("(" + n.keys(u.unescape)
            .join("|") + ")", "g")
    };
    n.each(["escape", "unescape"], function(t) {
        n[t] = function(n) {
            return n == null ? "" : ("" + n)
                .replace(ht[t], function(n) {
                    return u[t][n]
                })
        }
    });
    n.result = function(t, i) {
        if (t == null) return void 0;
        var r = t[i];
        return n.isFunction(r) ? r.call(t) : r
    };
    n.mixin = function(t) {
        i(n.functions(t), function(i) {
            var r = n[i] = t[i];
            n.prototype[i] = function() {
                var t = [this._wrapped];
                return y.apply(t, arguments), a.call(this,
                    r.apply(n, t))
            }
        })
    };
    ct = 0;
    n.uniqueId = function(n) {
        var t = ++ct + "";
        return n ? n + t : t
    };
    n.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var g = /(.)^/,
        wt = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        bt = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    n.template = function(t, i, r) {
        var f, e;
        r = n.defaults({}, r, n.templateSettings);
        var h = new RegExp([(r.escape || g)
                .source, (r.interpolate || g)
                .source, (r.evaluate || g)
                .source].join("|") + "|$", "g"),
            o = 0,
            u = "__p+='";
        t.replace(h, function(n, i, r, f, e) {
            return u += t.slice(o, e)
                .replace(bt, function(n) {
                    return "\\" + wt[n]
                }), i && (u += "'+\n((__t=(" + i +
                    "))==null?'':_.escape(__t))+\n'"), r && (u +=
                    "'+\n((__t=(" + r + "))==null?'':__t)+\n'"),
                f && (u += "';\n" + f + "\n__p+='"), o = e + n.length,
                n
        });
        u += "';\n";
        r.variable || (u = "with(obj||{}){\n" + u + "}\n");
        u =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            u + "return __p;\n";
        try {
            f = new Function(r.variable || "obj", "_", u)
        } catch (s) {
            s.source = u;
            throw s;
        }
        return i ? f(i, n) : (e = function(t) {
                return f.call(this, t, n)
            }, e.source = "function(" + (r.variable || "obj") +
            "){\n" + u + "}", e)
    };
    n.chain = function(t) {
        return n(t)
            .chain()
    };
    a = function(t) {
        return this._chain ? n(t)
            .chain() : t
    };
    n.mixin(n);
    i(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function(t) {
            var i = r[t];
            n.prototype[t] = function() {
                var n = this._wrapped;
                return i.apply(n, arguments), (t == "shift" || t ==
                        "splice") && n.length === 0 && delete n[0],
                    a.call(this, n)
            }
        });
    i(["concat", "join", "slice"], function(t) {
        var i = r[t];
        n.prototype[t] = function() {
            return a.call(this, i.apply(this._wrapped,
                arguments))
        }
    });
    n.extend(n.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
})
.call(this);
(function(n, t) {
    typeof module == "object" && module.exports ? module.exports = function(
        n) {
        return n = n || require("underscore"), t(n)
    } : typeof define == "function" && define.amd ? define([
        "underscore"], function(i) {
        return t(i, n)
    }) : n.postal = t(n._, n)
})(this, function(n) {
    var i = "/",
        u = "postal",
        h = function() {
            var t;
            return function(i) {
                var r = !1;
                return n.isString(i) ? (r = i === t, t = i) : (r = n.isEqual(
                    i, t), t = n.clone(i)), !r
            }
        },
        c = function() {
            var t = [];
            return function(i) {
                var r = !n.any(t, function(t) {
                    return n.isObject(i) || n.isArray(i) ? n.isEqual(
                        i, t) : i === t
                });
                return r && t.push(i), r
            }
        },
        f = function(n) {
            this.channel = n || i
        },
        r, t;
    f.prototype.subscribe = function() {
        return arguments.length === 1 ? new r(this.channel, arguments[0]
            .topic, arguments[0].callback) : new r(this.channel,
            arguments[0], arguments[1])
    };
    f.prototype.publish = function() {
        var n = arguments.length === 1 ? Object.prototype.toString.call(
            arguments[0]) === "[object String]" ? {
            topic: arguments[0]
        } : arguments[0] : {
            topic: arguments[0],
            data: arguments[1]
        };
        return n.channel = this.channel, t.configuration.bus.publish(n)
    };
    r = function(n, i, r) {
        this.channel = n;
        this.topic = i;
        this.callback = r;
        this.constraints = [];
        this.context = null;
        t.configuration.bus.publish({
            channel: u,
            topic: "subscription.created",
            data: {
                event: "subscription.created",
                channel: n,
                topic: i
            }
        });
        t.configuration.bus.subscribe(this)
    };
    r.prototype = {
        unsubscribe: function() {
            this.inactive || (this.inactive = !0, t.configuration.bus
                .unsubscribe(this), t.configuration.bus.publish({
                    channel: u,
                    topic: "subscription.removed",
                    data: {
                        event: "subscription.removed",
                        channel: this.channel,
                        topic: this.topic
                    }
                }))
        },
        defer: function() {
            var n = this.callback;
            return this.callback = function(t, i) {
                setTimeout(function() {
                    n(t, i)
                }, 0)
            }, this
        },
        disposeAfter: function(t) {
            if (n.isNaN(t) || t <= 0) throw "The value provided to disposeAfter (maxCalls) must be a number greater than zero.";
            var i = this.callback,
                r = n.after(t, n.bind(function() {
                    this.unsubscribe()
                }, this));
            return this.callback = function() {
                i.apply(this.context, arguments);
                r()
            }, this
        },
        distinctUntilChanged: function() {
            return this.withConstraint(new h), this
        },
        distinct: function() {
            return this.withConstraint(new c), this
        },
        once: function() {
            return this.disposeAfter(1), this
        },
        withConstraint: function(t) {
            if (!n.isFunction(t)) throw "Predicate constraint must be a function";
            return this.constraints.push(t), this
        },
        withConstraints: function(t) {
            var i = this;
            return n.isArray(t) && n.each(t, function(n) {
                i.withConstraint(n)
            }), i
        },
        withContext: function(n) {
            return this.context = n, this
        },
        withDebounce: function(t) {
            if (n.isNaN(t)) throw "Milliseconds must be a number";
            var i = this.callback;
            return this.callback = n.debounce(i, t), this
        },
        withDelay: function(t) {
            if (n.isNaN(t)) throw "Milliseconds must be a number";
            var i = this.callback;
            return this.callback = function(n, r) {
                setTimeout(function() {
                    i(n, r)
                }, t)
            }, this
        },
        withThrottle: function(t) {
            if (n.isNaN(t)) throw "Milliseconds must be a number";
            var i = this.callback;
            return this.callback = n.throttle(i, t), this
        },
        subscribe: function(n) {
            return this.callback = n, this
        }
    };
    var l = {
            cache: {},
            regex: {},
            compare: function(t, i) {
                var e, u, f, r = this.cache[i] && this.cache[i][t];
                return typeof r != "undefined" ? r : ((u = this.regex[t]) ||
                    (e = "^" + n.map(t.split("."), function(n) {
                            var t = "";
                            return !f || (t = f !== "#" ?
                                    "\\.\\b" : "\\b"), t += n ===
                                "#" ? "[\\s\\S]*" : n === "*" ?
                                "[^.]+" : n, f = n, t
                        })
                        .join("") + "$", u = this.regex[t] = new RegExp(
                            e)), this.cache[i] = this.cache[i] || {},
                    this.cache[i][t] = r = u.test(i), r)
            },
            reset: function() {
                this.cache = {};
                this.regex = {}
            }
        },
        a = function(i, r) {
            !i.inactive && t.configuration.resolver.compare(i.topic, r.topic) &&
                n.all(i.constraints, function(n) {
                    return n.call(i.context, r.data, r)
                }) && typeof i.callback == "function" && i.callback.call(i.context,
                    r.data, r)
        },
        e = 0,
        o = [],
        v = function() {
            while (o.length) o.shift()
                .unsubscribe()
        },
        s = {
            addWireTap: function(n) {
                var t = this;
                return t.wireTaps.push(n),
                    function() {
                        var i = t.wireTaps.indexOf(n);
                        i !== -1 && t.wireTaps.splice(i, 1)
                    }
            },
            publish: function(t) {
                return ++e, t.timeStamp = new Date, n.each(this.wireTaps,
                    function(n) {
                        n(t.data, t)
                    }), this.subscriptions[t.channel] && n.each(
                    this.subscriptions[t.channel], function(n) {
                        for (var i = 0, u = n.length, r; i < u;)(r =
                            n[i++]) && a(r, t)
                    }), --e == 0 && v(), t
            },
            reset: function() {
                this.subscriptions && (n.each(this.subscriptions,
                    function(t) {
                        n.each(t, function(n) {
                            while (n.length) n.pop()
                                .unsubscribe()
                        })
                    }), this.subscriptions = {})
            },
            subscribe: function(n) {
                var i = this.subscriptions[n.channel],
                    t;
                return i || (i = this.subscriptions[n.channel] = {}), t =
                    this.subscriptions[n.channel][n.topic], t || (t =
                        this.subscriptions[n.channel][n.topic] = []), t
                    .push(n), n
            },
            subscriptions: {},
            wireTaps: [],
            unsubscribe: function(n) {
                if (e) {
                    o.push(n);
                    return
                }
                if (this.subscriptions[n.channel][n.topic])
                    for (var i = this.subscriptions[n.channel][n.topic]
                        .length, t = 0; t < i;) {
                        if (this.subscriptions[n.channel][n.topic][t] ===
                            n) {
                            this.subscriptions[n.channel][n.topic].splice(
                                t, 1);
                            break
                        }
                        t += 1
                    }
            }
        };
    return s.subscriptions[u] = {}, t = {
        configuration: {
            bus: s,
            resolver: l,
            DEFAULT_CHANNEL: i,
            SYSTEM_CHANNEL: u
        },
        ChannelDefinition: f,
        SubscriptionDefinition: r,
        channel: function(n) {
            return new f(n)
        },
        subscribe: function(n) {
            return new r(n.channel || i, n.topic, n.callback)
        },
        publish: function(n) {
            return n.channel = n.channel || i, t.configuration.bus.publish(
                n)
        },
        addWireTap: function(n) {
            return this.configuration.bus.addWireTap(n)
        },
        linkChannels: function(r, u) {
            var f = [];
            return r = n.isArray(r) ? r : [r], u = n.isArray(u) ? u : [
                u], n.each(r, function(r) {
                var e = r.topic || "#";
                n.each(u, function(u) {
                    var e = u.channel || i;
                    f.push(t.subscribe({
                        channel: r.channel ||
                            i,
                        topic: r.topic ||
                            "#",
                        callback: function(
                            i, r) {
                            var f =
                                n.clone(
                                    r
                                );
                            f.topic =
                                n.isFunction(
                                    u
                                    .topic
                                ) ?
                                u.topic(
                                    r
                                    .topic
                                ) :
                                u.topic ||
                                r.topic;
                            f.channel =
                                e;
                            f.data =
                                i;
                            t.publish(
                                f
                            )
                        }
                    }))
                })
            }), f
        },
        utils: {
            getSubscribersFor: function() {
                var n = arguments[0],
                    i = arguments[1];
                return (arguments.length === 1 && (n = arguments[0]
                        .channel || t.configuration.DEFAULT_CHANNEL,
                        i = arguments[0].topic), t.configuration
                    .bus.subscriptions[n] && Object.prototype.hasOwnProperty
                    .call(t.configuration.bus.subscriptions[n],
                        i)) ? t.configuration.bus.subscriptions[
                    n][i] : []
            },
            reset: function() {
                t.configuration.bus.reset();
                t.configuration.resolver.reset()
            }
        }
    }
});
(function() {
    var t, r, u, f, a, e, o, s, h, i, c, l, n;
    window.console && window.console.log && (a = /Firefox/.test(navigator.userAgent),
        e = /Chrome/.test(navigator.userAgent), s = function() {
            var t, r, u;
            if (t = [], i(arguments)
                .forEach(function(n) {
                    return typeof n == "string" ? t = t.concat(l(n)) :
                        t.push(n)
                }), e && typeof t[0] != "object") {
                u = (new Error)
                    .stack.split("\n");
                r = u[3].replace(/^.*\(/, "")
                    .replace(/:?\d*\)$/, "");
                var f = t[0].replace(/%c/, "")
                    .length,
                    o = r.length;
                return t[0] = t[0] + h(" ", 245 - f - o) + "%c" + r, t.push(
                    "font-family: Consolas, Lucida Console, monospace; font-size: 12px;"
                ), console.log.apply(console, t)
            }
            return n.apply(window, t)
        }, h = function(n, t) {
            return t > 0 ? new Array(1 + t)
                .join(n) : n
        }, n = function() {
            return console.log.apply(console, i(arguments))
        }, i = function(n) {
            return Array.prototype.slice.call(n)
        }, t = [{
            regex: /\*([^\*)]+)\*/,
            replacer: function(n, t) {
                return "%c" + t + "%c"
            },
            styles: function() {
                return ["font-style: italic", ""]
            }
        }, {
            regex: /\_([^\_)]+)\_/,
            replacer: function(n, t) {
                return "%c" + t + "%c"
            },
            styles: function() {
                return ["font-weight: bold", ""]
            }
        }, {
            regex: /\`([^\`)]+)\`/,
            replacer: function(n, t) {
                return "%c" + t + "%c"
            },
            styles: function() {
                return [
                    "background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1)",
                    ""]
            }
        }, {
            regex: /\[c\=\"([^\")]+)\"\]([^\[)]+)\[c\]/,
            replacer: function(n, t, i) {
                return "%c" + i + "%c"
            },
            styles: function(n) {
                return [n[1], ""]
            }
        }], u = function(n) {
            var i;
            return i = !1, t.forEach(function(t) {
                if (t.regex.test(n)) return i = !0
            }), i
        }, r = function(n) {
            var i;
            return i = [], t.forEach(function(t) {
                var r;
                return r = n.match(t.regex), r ? i.push({
                    format: t,
                    match: r
                }) : void 0
            }), i.sort(function(n, t) {
                return n.match.index - t.match.index
            })
        }, l = function(n) {
            for (var t, f, i = []; u(n);) f = r(n), t = f[0], n = n.replace(
                t.format.regex, t.format.replacer), i = i.concat(t.format
                .styles(t.match));
            return [n].concat(i)
        }, o = function() {
            return /Safari/.test(navigator.userAgent) &&
                /Apple Computer/.test(navigator.vendor)
        }, f = function() {
            return /MSIE/.test(navigator.userAgent)
        }, c = function() {
            var n;
            return (n = navigator.userAgent.match(
                    /AppleWebKit\/(\d+)\.(\d+)(\.|\+|\s)/), !n) ? !1 :
                537.38 <= parseInt(n[1], 10) + parseInt(n[2], 10) / 100
        }, o() && !c() || f() ? window.log = n : eval("window.log = " +
            s.toString()), window.log.l = n)
})
.call(this);
(function() {
    function n(n) {
        n && n.storage && (this.storage = n.storage);
        this.async.set = r(this.async.set, this);
        this.async.get = r(this.async.get, this)
    }
    var t = this,
        r = function(n, t) {
            return function() {
                return n.apply(t, arguments)
            }
        },
        s, l, u, f, a, h, e, o, i, c;
    n.prototype.VERSION = "0.3.2";
    u = n.prototype;
    try {
        t.localStorage.setItem("___locache___", "___locache___");
        t.localStorage.getItem("___locache___");
        t.localStorage.removeItem("___locache___");
        s = !0
    } catch (v) {
        s = !1
    }
    l = u.supportsLocalStorage = s;
    u = n.prototype;
    try {
        t.sessionStorage.setItem("___locache___", "___locache___");
        t.sessionStorage.getItem("___locache___");
        t.sessionStorage.removeItem("___locache___");
        f = !0
    } catch (y) {
        f = !1
    }
    a = u.supportsSessionStorage = f;
    h = n.prototype.supportsNativeJSON = !!t.JSON;
    n.prototype.supportsPostMessage = !!window.postMessage;
    f = n.prototype;
    e = function(n) {
        this.fn = n
    };
    o = [];
    t.addEventListener ? i = t.addEventListener : t.attachEvent && (i = t.attachEvent);
    i("message", function(n) {
        if (!(n.source !== t || n.data !== "function-defer-message") &&
            (n.stopPropagation(), o.length !== 0)) return o.shift()
            (), !1
    }, !0);
    e.prototype.defer = function() {
        this.resultValue = this.fn();
        this.hasOwnProperty("finishedFunction") && this.finishedFunction(
            this.resultValue)
    };
    e.prototype.hasFinished = function() {
        return this.hasOwnProperty("resultValue")
    };
    e.prototype.finished = function(n) {
        return this.finishedFunction = n, this.hasFinished() && this.finishedFunction(
            this.resultValue), this
    };
    c = f._defer = function(n) {
        return n = new e(n), o.push(r(n.defer, n)), t.postMessage(
            "function-defer-message", "*"), n
    };
    n.prototype.cachePrefix = "___locache___";
    n.prototype.expirePrefix = "___locacheExpire___";
    n.prototype.backends = {
        local: {
            set: function(n, i) {
                return t.localStorage.setItem(n, i)
            },
            get: function(n) {
                return t.localStorage.getItem(n)
            },
            remove: function(n) {
                return t.localStorage.removeItem(n)
            },
            length: function() {
                return t.localStorage.length
            },
            key: function(n) {
                if (!(n < 0 || n >= this.length())) return t.localStorage
                    .key(n)
            },
            enabled: function() {
                return h && l
            }
        },
        session: {
            set: function(n, i) {
                return t.sessionStorage.setItem(n, i)
            },
            get: function(n) {
                return t.sessionStorage.getItem(n)
            },
            remove: function(n) {
                return t.sessionStorage.removeItem(n)
            },
            length: function() {
                return t.sessionStorage.length
            },
            key: function(n) {
                if (!(n < 0 || n >= this.length())) return t.sessionStorage
                    .key(n)
            },
            enabled: function() {
                return h && a
            }
        }
    };
    n.prototype.storage = n.prototype.backends.local;
    n.prototype.key = function(n) {
        return this.cachePrefix + n
    };
    n.prototype.expirekey = function(n) {
        return this.expirePrefix + n
    };
    n.prototype.hasExpired = function(n) {
        return n = this.expirekey(n), (n = parseInt(this.storage.get(n),
                10)) && n < (new Date)
            .getTime() ? !0 : !1
    };
    n.prototype.set = function(n, t, i) {
        if (this.storage.enabled() && n) {
            var r = this.expirekey(n),
                n = this.key(n);
            return i && this.storage.set(r, (new Date)
                    .getTime() + i * 1e3), t = JSON.stringify(t), this.storage
                .set(n, t)
        }
    };
    n.prototype.get = function(n) {
        if (!this.storage.enabled() || !n) return null;
        if (this.hasExpired(n)) return this.remove(this.key(n)), null;
        if (n = this.key(n), n = this.storage.get(n)) try {
            return JSON.parse(n)
        } catch (t) {
            return null
        }
        return n
    };
    n.prototype.async = {
        set: function(n, t, i) {
            return c(r(function() {
                return this.set(n, t, i)
            }, this))
        },
        get: function(n) {
            return c(r(function() {
                return this.get(n)
            }, this))
        }
    };
    n.prototype.remove = function(n) {
        if (this.storage.enabled()) {
            var t = this.expirekey(n),
                n = this.key(n);
            this.storage.remove(t);
            this.storage.remove(n)
        }
    };
    n.prototype.incr = function(n) {
        if (this.storage.enabled()) {
            var t = parseInt(this.get(n), 10);
            return t || (t = 0), t++, this.set(n, t), t
        }
    };
    n.prototype.decr = function(n) {
        if (this.storage.enabled()) {
            var t = parseInt(this.get(n), 10);
            return t || (t = 0), t--, this.set(n, t), t
        }
    };
    n.prototype.setMany = function(n, t) {
        if (this.storage.enabled())
            for (var i in n) n.hasOwnProperty(i) && this.set(i, n[i], t)
    };
    n.prototype.getMany = function(n) {
        for (var i = {}, t = 0; t < n.length; t++) i[n[t]] = this.storage
            .enabled() ? this.get(n[t]) : null;
        return i
    };
    n.prototype.getManyValues = function(n) {
        for (var t = [], i = 0; i < n.length; i++) this.storage.enabled() ?
            t.push(this.get(n[i])) : t.push(null);
        return t
    };
    n.prototype.removeMany = function(n) {
        if (this.storage.enabled())
            for (var t = 0; t < n.length; t++) this.remove(n[t])
    };
    n.prototype.flush = function() {
        var t;
        if (this.storage.enabled())
            for (var n = this.storage.length(), i = this.cachePrefix, n =
                n - 1; n >= 0; n--) t = this.storage.key(n), t && t.indexOf(
                i) === 0 && this.storage.remove(t)
    };
    n.prototype.length = function() {
        if (!this.storage.enabled()) return 0;
        for (var t = 0, i = this.storage.length(), r = this.cachePrefix,
            n = 0; n < i; n++) this.storage.key(n)
            .indexOf(r) === 0 && t++;
        return t
    };
    n.prototype.cleanup = function() {
        var n;
        if (this.storage.enabled())
            for (var r = this.storage.length(), i = this.cachePrefix, t =
                0; t < r; t++) n = this.storage.key(t), n && n.indexOf(
                i) === 0 && (n = n.substring(i.length, n.length),
                this.hasExpired(n) && this.remove(n))
    };
    n.prototype.createCache = function(t) {
        return new n(t)
    };
    i = new n;
    i.session = new n({
        storage: i.backends.session
    });
    t.locache = i
})
.call(this);
var Tea = {},
    Base64, Utf8;
Tea.encrypt = function(n, t) {
    var i, r, c;
    if (n.length == 0) return "";
    i = Tea.strToLongs(Utf8.encode(n));
    i.length <= 1 && (i[1] = 0);
    for (var l = Tea.strToLongs(Utf8.encode(t)
            .slice(0, 16)), u = i.length, f = i[u - 1], e = i[0], s, h,
        a = Math.floor(6 + 52 / u), o = 0; a-- > 0;)
        for (o += 2654435769, h = o >>> 2 & 3, r = 0; r < u; r++) e = i[(r +
            1) % u], s = (f >>> 5 ^ e << 2) + (e >>> 3 ^ f << 4) ^ (o ^
            e) + (l[r & 3 ^ h] ^ f), f = i[r] += s;
    return c = Tea.longsToStr(i), Base64.encode(c)
};
Tea.decrypt = function(n, t) {
    var i, s;
    if (n.length == 0) return "";
    for (var r = Tea.strToLongs(Base64.decode(n)), a = Tea.strToLongs(Utf8.encode(
                t)
            .slice(0, 16)), u = r.length, f = r[u - 1], e = r[0], h =
        2654435769, c, l, v = Math.floor(6 + 52 / u), o = v * h; o != 0;) {
        for (l = o >>> 2 & 3, i = u - 1; i >= 0; i--) f = r[i > 0 ? i - 1 :
            u - 1], c = (f >>> 5 ^ e << 2) + (e >>> 3 ^ f << 4) ^ (o ^
            e) + (a[i & 3 ^ l] ^ f), e = r[i] -= c;
        o -= h
    }
    return s = Tea.longsToStr(r), s = s.replace(/\0+$/, ""), Utf8.decode(s)
};
Tea.strToLongs = function(n) {
    for (var i = new Array(Math.ceil(n.length / 4)), t = 0; t < i.length; t++)
        i[t] = n.charCodeAt(t * 4) + (n.charCodeAt(t * 4 + 1) << 8) + (n.charCodeAt(
            t * 4 + 2) << 16) + (n.charCodeAt(t * 4 + 3) << 24);
    return i
};
Tea.longsToStr = function(n) {
    for (var i = new Array(n.length), t = 0; t < n.length; t++) i[t] =
        String.fromCharCode(n[t] & 255, n[t] >>> 8 & 255, n[t] >>> 16 & 255,
            n[t] >>> 24 & 255);
    return i.join("")
};
Base64 = {};
Base64.code =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
Base64.encode = function(n, t) {
    t = typeof t == "undefined" ? !1 : t;
    var s, h, c, u, l, a, v, y, p = [],
        e = "",
        i, r, o, f = Base64.code;
    if (r = t ? Utf8.encode(n) : n, i = r.length % 3, i > 0)
        while (i++ < 3) e += "=", r += '\0';
    for (i = 0; i < r.length; i += 3) s = r.charCodeAt(i), h = r.charCodeAt(
            i + 1), c = r.charCodeAt(i + 2), u = s << 16 | h << 8 | c, l =
        u >> 18 & 63, a = u >> 12 & 63, v = u >> 6 & 63, y = u & 63, p[i /
            3] = f.charAt(l) + f.charAt(a) + f.charAt(v) + f.charAt(y);
    return o = p.join(""), o.slice(0, o.length - e.length) + e
};
Base64.decode = function(n, t) {
    var e, s, a, v, y, h, c, o, u, l, r, f, i;
    for (t = typeof t == "undefined" ? !1 : t, u = [], f = Base64.code, r =
        t ? Utf8.decode(n) : n, i = 0; i < r.length; i += 4) v = f.indexOf(
            r.charAt(i)), y = f.indexOf(r.charAt(i + 1)), h = f.indexOf(r.charAt(
            i + 2)), c = f.indexOf(r.charAt(i + 3)), o = v << 18 | y << 12 |
        h << 6 | c, e = o >>> 16 & 255, s = o >>> 8 & 255, a = o & 255, u[i /
            4] = String.fromCharCode(e, s, a), c == 64 && (u[i / 4] =
            String.fromCharCode(e, s)), h == 64 && (u[i / 4] = String.fromCharCode(
            e));
    return l = u.join(""), t ? Utf8.decode(l) : l
};
Utf8 = {};
Utf8.encode = function(n) {
    var t = n.replace(/[\u0080-\u07ff]/g, function(n) {
        var t = n.charCodeAt(0);
        return String.fromCharCode(192 | t >> 6, 128 | t & 63)
    });
    return t.replace(/[\u0800-\uffff]/g, function(n) {
        var t = n.charCodeAt(0);
        return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63,
            128 | t & 63)
    })
};
Utf8.decode = function(n) {
    var t = n.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
        function(n) {
            var t = (n.charCodeAt(0) & 15) << 12 | (n.charCodeAt(1) &
                63) << 6 | n.charCodeAt(2) & 63;
            return String.fromCharCode(t)
        });
    return t.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(n) {
        var t = (n.charCodeAt(0) & 31) << 6 | n.charCodeAt(1) & 63;
        return String.fromCharCode(t)
    })
};
/**
@license jQuery Toggles v2.0.4 - Custom
Copyright 2013 Simon Tabor - MIT License
https://github.com/simontabor/jquery-toggles / http://simontabor.com/labs/toggles
*/
$.fn.toggles = function(n) {
    var t, i;
    n = n || {};
    t = $.extend({
        drag: !0,
        click: !0,
        on: !1,
        animate: 250,
        transition: "ease-in-out",
        checkbox: null,
        clicker: null,
        width: 50,
        height: 20,
        type: "compact"
    }, n);
    i = t.type == "select";
    t.checkbox = $(t.checkbox);
    t.clicker && (t.clicker = $(t.clicker));
    var u = "margin-left " + t.animate + "ms " + t.transition,
        f = {
            "-webkit-transition": u,
            "-moz-transition": u,
            transition: u
        },
        r = function(n, r, u, e) {
            var o = n.toggleClass("active")
                .hasClass("active"),
                s, h;
            e !== o && ((s = n.find(".toggle-inner")
                .css(f), n.find(".toggle-off")
                .toggleClass("active"), n.find(".toggle-on")
                .toggleClass("active"), t.checkbox.prop("checked",
                    o), i) || (h = o ? -r + u : 0, s.css(
                "margin-left", h), setTimeout(function() {
                s.css("margin-left", h)
            }, t.animate)))
        };
    return this.each(function() {
        var n = $(this),
            u = n.height(),
            e = n.width();
        u && e || (n.height(u = t.height), n.width(e = t.width));
        var f = $(".toggle-slide", this),
            l = $(".toggle-inner", this),
            b = $(".toggle-on", this),
            k = $(".toggle-off", this),
            v = $(".toggle-blob", this),
            h = u / 2,
            y = e - h,
            p = !1;
        b.css({
            height: u,
            width: y,
            textAlign: "center",
            textIndent: i ? "" : -h,
            lineHeight: u + "px"
        });
        k.css({
                height: u,
                width: y,
                marginLeft: i ? "" : -h,
                textAlign: "center",
                textIndent: i ? "" : h,
                lineHeight: u + "px"
            })
            .addClass("active");
        v.css({
            height: u,
            width: u,
            marginLeft: -h
        });
        l.css({
            width: e * 2 - u,
            marginLeft: i ? 0 : -e + u
        });
        i && (f.addClass("toggle-select"), n.css("width", y * 2), v
            .hide());
        f.on("toggle", function(t, i) {
            t && t.stopPropagation();
            r(f, e, u);
            n.trigger("toggle", i)
        });
        n.on("toggleOn", function() {
            r(f, e, u, !1)
        });
        n.on("toggleOff", function() {
            r(f, e, u, !0)
        });
        if (t.on && r(f, e, u), t.clicker) t.clicker.on("click",
            function(n) {
                n.target == v[0] && t.drag || f.trigger(
                    "toggle", f.hasClass("active"))
            });
        if (t.drag && !i) {
            var s, w = (e - u) / 4,
                o = function(i) {
                    n.off("touchmove");
                    n.off("mousemove");
                    n.off("MSPointerMove");
                    n.off("pointermove");
                    n.off("touchcancel");
                    n.off("mouseleave");
                    n.off("MSPointerOut");
                    n.off("pointerout");
                    n.off("touchend");
                    n.off("mouseup");
                    n.off("MSPointerUp");
                    n.off("pointerup");
                    p = !1;
                    var r = f.hasClass("active");
                    if (!s && t.click && i.type !== "touchcancel" &&
                        i.type !== "mouseleave" && i.type !==
                        "MSPointerOut" && i.type !== "pointerout") {
                        f.trigger("toggle", r);
                        return
                    }
                    r ? s > w ? f.trigger("toggle", r) : l.animate({
                        marginLeft: -e + u
                    }, t.animate / 2) : s < -w ? f.trigger(
                        "toggle", r) : l.animate({
                        marginLeft: 0
                    }, t.animate / 2)
                },
                c = -e + u,
                a = function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    s = 0;
                    n.off("mouseup");
                    n.off("touchend");
                    n.off("MSPointerUp");
                    n.off("pointerup");
                    n.off("mouseleave");
                    n.off("touchcancel");
                    n.off("MSPointerOut");
                    n.off("pointerout");
                    var r = t.pageX || t.originalEvent.changedTouches[
                            0].pageX,
                        i = +new Date,
                        u = function(n) {
                            var u, t;
                            n.preventDefault; + new Date - i > 16 &&
                                (i = +new Date, p = !0, u = n.pageX ||
                                    n.originalEvent.changedTouches[
                                        0].pageX, s = u - r, f.hasClass(
                                        "active") ? (t = s, s > 0 &&
                                        (t = 0), s < c && (t = c)) :
                                    (t = s + c, s < 0 && (t = c), s >
                                        -c && (t = 0)), l.css(
                                        "margin-left", t))
                        };
                    n.on("mousemove", o);
                    n.on("touchmove", o);
                    if (window.navigator.pointerEnabled) n.on(
                        "pointermove", o);
                    else if (window.navigator.MSPointerEnabled) n.on(
                        "MSPointerMove", o);
                    if (!lobby.ui.useTouchClickDoubleClick()) n.on(
                        "mouseup", o);
                    n.on("touchend", o);
                    if (window.navigator.pointerEnabled) n.on(
                        "pointerup", o);
                    else if (window.navigator.MSPointerEnabled) n.on(
                        "MSPointerUp", o);
                    n.on("mouseleave", o);
                    n.on("touchcancel", o);
                    if (window.navigator.pointerEnabled) n.on(
                        "pointerout", o);
                    else if (window.navigator.MSPointerEnabled) n.on(
                        "MSPointerOut", o)
                };
            if (!lobby.ui.useTouchClickDoubleClick()) n.on(
                "mousedown", a);
            n.on("touchstart", a);
            if (window.navigator.pointerEnabled) n.on("pointerdown",
                a);
            else if (window.navigator.MSPointerEnabled) n.on(
                "MSPointerDown", a)
        }
    })
};

function JL(n) {
    if (!n) return JL.__;
    var t = "";
    return ("." + n)
        .split(".")
        .reduce(function(n, i) {
            t = t ? t + ("." + i) : i;
            var r = n["__" + t];
            return void 0 === r && (JL.Logger.prototype = n, r = new JL
                .Logger(t), n["__" + t] = r), r
        }, JL.__)
}
var __extends = this.__extends || function(n, t) {
    function r() {
        this.constructor = n
    }
    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
    r.prototype = t.prototype;
    n.prototype = new r
};
(function(n) {
    function t(n, t, i) {
        void 0 !== t[n] && (null === t[n] ? delete i[n] : i[n] = t[n])
    }

    function o(t) {
        if (null != n.enabled && !n.enabled) return !1;
        try {
            if (t.userAgentRegex && !RegExp(t.userAgentRegex)
                .test(navigator.userAgent)) return !1
        } catch (i) {}
        try {
            if (t.ipRegex && n.clientIP && !RegExp(t.ipRegex)
                .test(n.clientIP)) return !1
        } catch (r) {}
        return !0
    }

    function s(n, t) {
        try {
            if (n.disallow && RegExp(n.disallow)
                .test(t)) return !1
        } catch (i) {}
        return !0
    }
    var e, r, f, u, i;
    n.enabled;
    n.clientIP;
    n.requestId;
    n.setOptions = function(n) {
        return t("enabled", n, this), t("clientIP", n, this), t(
            "requestId", n, this), this
    };
    n.getAllLevel = function() {
        return -2147483648
    };
    n.getTraceLevel = function() {
        return 1e3
    };
    n.getDebugLevel = function() {
        return 2e3
    };
    n.getInfoLevel = function() {
        return 3e3
    };
    n.getWarnLevel = function() {
        return 4e3
    };
    n.getErrorLevel = function() {
        return 5e3
    };
    n.getFatalLevel = function() {
        return 6e3
    };
    n.getOffLevel = function() {
        return 2147483647
    };
    e = function(n, t, i, r) {
        this.l = n;
        this.m = t;
        this.n = i;
        this.t = r
    };
    n.LogItem = e;
    r = function(t, i) {
        this.appenderName = t;
        this.sendLogItems = i;
        this.level = n.getTraceLevel();
        this.sendWithBufferLevel = 2147483647;
        this.storeInBufferLevel = -2147483648;
        this.bufferSize = 0;
        this.batchSize = 1;
        this.buffer = [];
        this.batchBuffer = []
    };
    r.prototype.setOptions = function(n) {
        return t("level", n, this), t("ipRegex", n, this), t(
            "userAgentRegex", n, this), t("disallow", n, this), t(
            "sendWithBufferLevel", n, this), t("storeInBufferLevel",
            n, this), t("bufferSize", n, this), t("batchSize", n,
            this), this.bufferSize < this.buffer.length && (this.buffer
            .length = this.bufferSize), this
    };
    r.prototype.log = function(n, t, i) {
        !o(this) || !s(this, t) || n < this.storeInBufferLevel || (t =
            new e(n, t, i, (new Date)
                .getTime()), n < this.level ? 0 < this.bufferSize &&
            (this.buffer.push(t), this.buffer.length > this.bufferSize &&
                this.buffer.shift()) : (!(n < this.sendWithBufferLevel) &&
                this.buffer.length && (this.batchBuffer = this.batchBuffer
                    .concat(this.buffer), this.buffer.length = 0),
                this.batchBuffer.push(t), this.batchBuffer.length >=
                this.batchSize && this.sendBatch()))
    };
    r.prototype.sendBatch = function() {
        0 != this.batchBuffer.length && (this.sendLogItems(this.batchBuffer),
            this.batchBuffer.length = 0)
    };
    n.Appender = r;
    u = function(n) {
        r.call(this, n, u.prototype.sendLogItemsAjax);
        this.url = "jsnlog.logger"
    };
    __extends(u, r);
    u.prototype.setOptions = function(n) {
        return t("url", n, this), r.prototype.setOptions.call(this, n),
            this
    };
    u.prototype.sendLogItemsAjax = function(t) {
        try {
            var r = JSON.stringify({
                    r: n.requestId,
                    lg: t
                }),
                i = new XMLHttpRequest;
            i.open("POST", this.url);
            i.setRequestHeader("Content-Type", "application/json");
            i.send(r)
        } catch (u) {}
    };
    f = u;
    n.AjaxAppender = f;
    i = function(n) {
        this.loggerName = n;
        this.seenRegexes = []
    };
    i.prototype.stringifyLogObject = function(n) {
        switch (typeof n) {
            case "string":
                return n;
            case "number":
                return n.toString();
            case "boolean":
                return n.toString();
            case "undefined":
                return "undefined";
            case "function":
                return n instanceof RegExp ? n.toString() : this.stringifyLogObject(
                    n());
            case "object":
                return n instanceof RegExp || n instanceof String || n instanceof Number ||
                    n instanceof Boolean ? n.toString() : JSON.stringify(
                        n);
            default:
                return "unknown"
        }
    };
    i.prototype.setOptions = function(n) {
        return t("level", n, this), t("userAgentRegex", n, this), t(
                "disallow", n, this), t("ipRegex", n, this), t(
                "appenders", n, this), t("onceOnly", n, this), this.seenRegexes = [],
            this
    };
    i.prototype.log = function(n, t) {
        var i = 0,
            r;
        if (!this.appenders) return this;
        if (n >= this.level && o(this) && (r = this.stringifyLogObject(
            t), s(this, r))) {
            if (this.onceOnly)
                for (i = this.onceOnly.length - 1; 0 <= i;) {
                    if (RegExp(this.onceOnly[i])
                        .test(r)) {
                        if (this.seenRegexes[i]) return this;
                        this.seenRegexes[i] = !0
                    }
                    i--
                }
            for (i = this.appenders.length - 1; 0 <= i;) this.appenders[
                i].log(n, r, this.loggerName), i--
        }
        return this
    };
    i.prototype.trace = function(n) {
        return this.log(1e3, n)
    };
    i.prototype.debug = function(n) {
        return this.log(2e3, n)
    };
    i.prototype.info = function(n) {
        return this.log(3e3, n)
    };
    i.prototype.warn = function(n) {
        return this.log(4e3, n)
    };
    i.prototype.error = function(n) {
        return this.log(5e3, n)
    };
    i.prototype.fatal = function(n) {
        return this.log(6e3, n)
    };
    n.Logger = i;
    i = new f("");
    n.__ = new n.Logger("");
    n.__.setOptions({
        level: n.getDebugLevel(),
        appenders: [i]
    });
    n.createAjaxAppender = function(n) {
        return new f(n)
    }
})(JL || (JL = {}));
(function(n) {
    n.lobby = n.lobby || {};
    lobby.config = lobby.config || null;
    lobby.requiredComponents = lobby.requiredComponents || 0;
    lobby.signal = postal.channel("lobby");
    lobby.status = 0;
    lobby.init = function() {
        var i = this;
        i.config = n.lobbyConfig;
        i.config.LanguageStrings = n.languageStrings;
        t(i);
        lobby.logging.logDebug("Core Loaded")
    };
    lobby.start = function() {
        var n = lobby.localStorage.get("autoredirect");
        n ? lobby.utils.setLocation(n) : (lobby.logging.logInfo(
                "Lobby Started"), lobby.status = lobby.enums.statuses
            .LOADED, lobby.signals.startLobby())
    };
    lobby.require = function() {
        this.requiredComponents++;
        lobby.logging.logDebug("Core Required Component Added")
    };
    lobby.requireLoaded = function() {
        this.requiredComponents--;
        lobby.logging.logDebug("Core Required Component Removed");
        this.requiredComponents === 0 && (lobby.logging.logInfo(
                "Lobby Loaded"), lobby.status = lobby.enums.statuses
            .STARTED, lobby.signals.lobbyLoaded())
    };
    var t = function(t) {
        var i = ["BannerTags"];
        if (n.RequestData)
            for (key in n.RequestData) i.indexOf(key) === -1 && n.RequestData
                .hasOwnProperty(key) && (t.config[key] = n.RequestData[
                    key])
    }
})(window);
(function(n, t) {
    t = t || (n.lobby = {});
    t.enums = {};
    t.enums.viewNames = {
        BANKING_CASINO_PARTIAL: "Banking/CasinoPartial/",
        BANKING_BINGO_PARTIAL: "Banking/BingoPartial/",
        REGISTRATION_CASINO_PARTIAL: "Registration/CasinoPartial/",
        REGISTRATION_BINGO_PARTIAL: "Registration/BingoPartial/"
    };
    t.enums.endPointTypes = {
        GAME_V: 4,
        GAME_SIMPLELINK: 5,
        GAME_PATHFINDER: 32,
        GAME_MESSAGE: 37,
        RESPONSIBLE_GAMING_TOOLS_EXTERNAL: 38,
        RESPONSIBLE_GAMING_TOOLS_FORMSSERVICE: 39
    };
    t.enums.loggedInStates = {
        LOGGEDON: 0,
        LOGGEDOUT: 1,
        UNSURE: 2
    };
    t.enums.playerTypes = {
        REAL: 0,
        PRACTICE: 1,
        NONE: -1,
        NOTSET: -2
    };
    t.enums.statuses = {
        EMPTY: 0,
        LOADED: 1,
        STARTED: 2
    };
    t.enums.accountStatuses = {
        PROVISONAL_ACCOUNT: 1,
        DEACTIVATED_ACCOUNT: 3,
        ACTIVATED_ACCOUNT: 4,
        CLOSED_ACCOUNT: 5,
        BLACKLISTED_ACCOUNT: 6,
        SELFEXCLUDED_ACCOUNT: 7
    };
    t.enums.exclusionStatuses = {
        NOT_EXCLUDED: 0,
        OPERATOR_TEMPORARY_EXCLUSION: 5e4,
        OPERATOR_PERMANENT_EXCLUSION: 50001,
        PLAYER_TEMPORARY_EXCLUSION: 50002,
        PLAYER_PERMANENT_EXCLUSION: 50003,
        ACCOUNT_DEACTIVATED: 50005,
        ACCOUNT_CLOSED: 50006,
        ACCOUNT_BANNED: 50007,
        EXTERNAL_EXCLUSION_SRM_1: 50096,
        EXTERNAL_EXCLUSION_SRM_2: 50103,
        EXTERNAL_EXCLUSION_SRM_3: 50104,
        EXTERNAL_EXCLUSION_DRM_1: 50093,
        EXTERNAL_EXCLUSION_DRM_2: 50094,
        EXTERNAL_EXCLUSION_DRM_3: 50095,
        EXTERNAL_EXCLUSION_DRM_4: 50105,
        EXTERNAL_EXCLUSION_DRM_5: 50106
    };
    t.enums.trackingEvents = {
        LOBBYLAUNCHED: "LobbyLaunched",
        ADDEDTOHOMESCREEN: "AddedToHomeScreen",
        REGISTRATIONPAGE1: "RegistrationPage1",
        REGISTRATIONSUCCESSFUL: "RegistrationSuccessful",
        FIRSTGAMELAUNCHED: "FirstGameLaunched",
        BANKINGOPEN: "BankingOpen",
        DEPOSITSUCCESSFUL: "DepositSuccessful",
        FETCHGAMESFAILED: "FetchGamesFailed",
        FETCHMYACCOUNTFAILED: "FetchMyAccountFailed",
        FETCHHELPFAILED: "FetchHelpFailed",
        FETCHBANKINGFALIED: "FetchBankingFailed",
        FETCHBANKINGWITHDRAWALFALIED: "FetchBankingWithdrawalFailed",
        FETCHBANKINGDEPOSITFALIED: "FetchBankingDepositFailed",
        FETCHFORGOTPASSWORDFALIED: "FetchForgotPasswordFailed",
        FETCHCHANGEPASSWORDFALIED: "FetchChangePasswordFailed",
        FETCHREGISTRATIONFALIED: "FetchRegistrationFailed",
        LOGINERROR: "LoginError",
        LOGINSUCCESS: "LoginSuccess",
        PRIVATEBROWSING: "PrivateBrowsing",
        DEVICEINFORMATION: "DeviceInformation",
        PLAYEREXCLUSIONOPEN: "PlayerExclusionOpen",
        POSTLOGINERROR: "PostLoginError",
        LOGOUTERROR: "LogoutError",
        MARKETERROR: "MarketError",
        DEPOSITLIMITSOPEN: "DepositLimitsOpen",
        RESPONSIBLEGAMINGTOOLS: "ResponsibleGamingToolsOpen",
        GAMESOPEN: "GamesOpen",
        PROMOTIONSOPEN: "PromotionsOpen",
        HELPOPEN: "HelpOpen",
        MYACCOUNTOPEN: "MyAccountOpen",
        GAMESLAUNCHED: "GamesLaunched",
        DEPOSITLAUNCHED: "DepositLaunched",
        WITHDRAWLAUNCHED: "WithdrawLaunched",
        WITHDRAWSUCCESSFUL: "WithdrawSuccessful",
        WITHDRAWREVERSED: "WithdrawReversed",
        FORGOTPASSWORDOPEN: "ForgotPasswordOpen",
        FETCHALLGAMEDETAILSFAILED: "FetchAllGameDetailsFailed",
        FETCHPLAYEREXCLUSIONFAILED: "FetchPlayerExclusionFailed",
        FETCHDEPOSITLIMITSFAILED: "FetchDepositLimitsFailed",
        FETCHRESPONSIBLEGAMINGTOOLSFAILED: "FetchResponsibleGamingToolsFailed",
        CHANGEPASSWORDOPEN: "ChangePasswordOpen",
        PASSWORDCHANGEDSUCCESSFUL: "PasswordChangedSuccessful",
        BRANDMIGRATION: "BrandMigration",
        FETCHBINGOGAMESFAILED: "FetchBingoGamesFailed"
    };
    t.enums.orientation = {
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape",
        NONE: "none"
    };
    t.enums.scroll = {
        TOP: "top",
        MIDDLE: "middle",
        BOTTOM: "bottom"
    };
    t.enums.spinner = {
        STARTED: "started",
        STOPPED: "stopped"
    };
    t.enums.vpbMessageTypes = {
        LAUNCHOLR: 0,
        LAUNCHGAME: 1,
        SENDEMAIL: 2,
        LAUNCHBANKING: 3,
        LAUNCHFANFAIR1: 4,
        LAUNCHFANFAIR2: 5,
        LAUNCHFANFAIR3: 6,
        LAUNCHWEBPAGE: 7,
        POSTTOWEBSERVER: 8,
        LAUNCHCHAT: 9,
        DISPLAYMESSAGE: 10,
        LAUNCHPLAYCHECK: 11,
        LAUNCHCASHCHECK: 12,
        LAUNCHLOYALTY: 12,
        LAUNCHMYACCOUNT: 14
    };
    t.enums.formsServiceRequestState = {
        STANDARD: "standard",
        CANCELLED: "cancelled",
        ELEVATED: "elevated"
    };
    t.enums.brandMigrationType = {
        SILENT: 1,
        MODAL: 2,
        JITSILENT: 3
    };
    t.enums.loginResponseType = {
        LOGIN: 2,
        PREMIGRATION: 13,
        POSTMIGRATION: 14
    };
    t.enums.endpointTypeRedirection = {
        LOGIN: "Login",
        REGISTRATION: "Registration",
        BANKING: "Banking",
        PROMOTIONS: "Promotions",
        OPERATORTRACKING: "OperatorTracking",
        LOBBY: "Lobby",
        CHANGEPASSWORD: "ChangePassword",
        RESPONSIBLEGAMING: "ResponsibleGaming"
    }
})(window, lobby);
(function(n, t, i) {
    var r = null;
    t = t || (n.lobby = {});
    t.logging = t.logging || {};
    t.logging._getVersionInfo = function() {
        r = this;
        i.get(n.lobbyConfig.Core.LobbyRoot +
            "Scripts/CodeName.Release.txt", function(n) {
                r.sprintVersion = n
            })
    }
})(window, lobby, jQuery);
(function(n, t, i, r) {
    var u = null;
    t = t || (n.lobby = {});
    t.logging = t.logging || {};
    t.logging.logLevel = n.lobbyConfig.Core.ConsoleLogLevel;
    t.logging.styleDebug =
        "font-family: Consolas, Lucida Console, monospace; font-size: 12px; color: #0000ff; padding: 8px 0; line-height: 16px; align: right;";
    t.logging.styleError =
        "font-family: Consolas, Lucida Console, monospace; font-size: 12px; color: #FF0000; padding: 8px 0; line-height: 16px";
    t.logging.styleWarn =
        "font-family: Consolas, Lucida Console, monospace; font-size: 12px; color: #FFA500; padding: 8px 0; line-height: 16px";
    t.logging.styleTrace =
        "font-family: Consolas, Lucida Console, monospace; font-size: 12px; color: #9C853D; padding: 8px 0; line-height: 16px";
    t.logging.styleInfo =
        "font-family: Consolas, Lucida Console, monospace; font-size: 12px; color: #00C200; padding: 8px 0; line-height: 16px";
    t.logging.styleFatal =
        "font-family: Consolas, Lucida Console, monospace; font-size: 14px; color: #800000; padding: 8px 0; line-height: 18px";
    t.logging.sprintVersion = "";
    t.logging.sprintVersionImage = "";
    t.logging.nlog = {};
    t.logging.init = function() {
        JL.setOptions(n.JLOptions);
        u = this;
        t.logging._getVersionInfo();
        t.logging._createJSNLog()
    };
    t.logging._createJSNLog = function() {
        this.nlog = JL("LobbyClient");
        var i = JL.createAjaxAppender("Mgs.Mobile.Web.Lobby appender");
        i.setOptions({
            bufferSize: 5,
            url: n.lobbyConfig.Core.LobbyRoot + "jsnlog.logger"
        });
        this.nlog.setOptions({
            appenders: [i],
            level: t.logging.convertToJSNLogLevel(n.lobbyConfig
                .Core.LogEventLevel)
        })
    };
    t.logging.logFatal = function(n) {
        u = this;
        u._checkConsoleLogLevel("FATAL") && n && log("%cFATAL: " + n, u
            .styleFatal);
        this.nlog.fatal(n)
    };
    t.logging.logError = function(n) {
        u = this;
        u._checkConsoleLogLevel("ERROR") && n && log("%cERROR: " + n, u
            .styleError);
        this.nlog.error(n)
    };
    t.logging.logWarning = function(n) {
        t.logging.logWarn(
            "The logWarning method is deprecated. Use logWarn instead."
        );
        t.logging.logWarn(n)
    };
    t.logging.logWarn = function(n) {
        u = this;
        u._checkConsoleLogLevel("WARN") && n && log("%cWARN: " + n, u.styleWarn);
        this.nlog.warn(n)
    };
    t.logging.logSuccess = function(n) {
        t.logging.logWarn(
            "The logSuccess method is deprecated. Use logInfo instead."
        );
        t.logging.logInfo(n)
    };
    t.logging.logInfo = function(n) {
        u = this;
        u._checkConsoleLogLevel("INFO") && n && log("%cINFO: " + n, u.styleInfo);
        this.nlog.info(n)
    };
    t.logging.trackEvent = function(n) {
        t.logging.logWarn(
            "The trackEvent method is deprecated. Use logDebug instead."
        );
        t.logging.logDebug(n)
    };
    t.logging.logDebug = function(n) {
        u = this;
        u._checkConsoleLogLevel("DEBUG") && n && log("%cDEBUG: " + n, u
            .styleDebug);
        this.nlog.debug(n)
    };
    t.logging.trackData = function(n, i) {
        t.logging.logWarn(
            "The trackData method is deprecated. Use logTrace instead."
        );
        t.logging.logTrace(n, i)
    };
    t.logging.logTrace = function(n, t) {
        if (u = this, u._checkConsoleLogLevel("TRACE") && (n || t)) {
            n && !t && typeof n == "string" && (t = n, n = null);
            var i = t ? "%cTRACE: " + t : "%cTRACE:";
            log(i, u.styleTrace);
            n && log(n)
        }
        t !== r && this.nlog.trace(t);
        n && this.nlog.trace(n)
    };
    t.logging._checkConsoleLogLevel = function(n) {
        var i, r, t, f;
        for (u = this, i = !1, r = ["OFF", "FATAL", "ERROR", "WARN",
            "INFO", "DEBUG", "TRACE"], t = 0; t < r.length; t++)
            if (f = r[t], n === f && (i = !0), u.logLevel === f) break;
        return i
    };
    t.logging.version = function(n) {
        return u = this, n && u._checkConsoleLogLevel("DEBUG") ?
            console.log(u.sprintVersion + u.sprintVersionImage) :
            console.log(u.sprintVersion)
    };
    t.logging.convertToJSNLogLevel = function(n) {
        var t;
        switch (n.toUpperCase()) {
            case "TRACE":
                t = 1e3;
                break;
            case "DEBUG":
                t = 2e3;
                break;
            case "INFO":
                t = 3e3;
                break;
            case "WARN":
                t = 4e3;
                break;
            case "ERROR":
                t = 5e3;
                break;
            case "FATAL":
                t = 6e3;
                break;
            default:
                t = 2147483647
        }
        return t
    };
    t.logging.init()
})(window, lobby, jQuery);
(function(n) {
    var t = null;
    n = n || (global.lobby = {});
    n.signals = n.signals || {};
    n.signals = {
        init: function() {
            n.logging.logDebug("Core Signals Loaded");
            t = this;
            t.loadSubscribe()
        },
        loadPublish: function() {},
        loadSubscribe: function() {
            n.signal.subscribe("lobby.start", function() {
                    t.loadPublish();
                    n.init()
                })
                .disposeAfter(1)
        },
        startLobby: function() {
            n.signal.publish("lobby.start")
        },
        lobbyLoaded: function() {
            n.signal.publish("lobby.loaded")
        }
    };
    n.signals.init()
})(lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.setLocation = function(t, i) {
        i ? n.open(t, "_blank") : n.location.href = t
    };
    t.utils.submitForm = function(n) {
        n.submit()
    };
    t.utils.trim = function(n, t) {
        if (typeof n != "string") return n;
        t === i && (t = "\\s");
        var r = n.replace(new RegExp("^[" + t + "]+"), "");
        return r.replace(new RegExp("[" + t + "]+$"), "")
    };
    t.utils.trimstart = function(n, t) {
        if (typeof n != "string") return n;
        t === i && (t = "\\s");
        return n.replace(new RegExp("^[" + t + "]+"), "")
    };
    t.utils.trimend = function(n, t) {
        if (typeof n != "string") return n;
        t === i && (t = "\\s");
        return n.replace(new RegExp("[" + t + "]+$"), "")
    };
    t.utils.trimSlashes = function(n) {
        return n.replace(/^\/|\/$/g, "")
    };
    t.utils.isNullorEmptyString = function(n) {
        return (t.logging.logWarn(
                "The isNullorEmptyString method is deprecated. Use isNullorEmpty instead."
            ), typeof n == "string" && t.utils.trim(n)
            .length > 0) ? !1 : !0
    };
    t.utils.isEmptyorUndefinedString = function(n) {
        return (t.logging.logWarn(
                "The isEmptyorUndefinedString method is deprecated. Use isNullorEmpty instead."
            ), n === null || n === i) ? !0 : t.utils.trim(n)
            .length > 0 ? !1 : !0
    };
    t.utils.isNullorEmptyObject = function(n) {
        if (t.logging.logWarn(
            "The isNullorEmptyObject method is deprecated. Use isNullorEmpty instead."
        ), n === null || n === i) return !0;
        if (n.length && n.length > 0) return !1;
        if (n.length === 0) return !0;
        for (var r in n)
            if (hasOwnProperty.call(n, r)) return !1;
        return !0
    };
    t.utils.isNullorEmpty = function(n) {
        if (n === null || n === i) return !0;
        if (typeof n == "string") return t.utils.trim(n)
            .length === 0;
        if (typeof n == "number" || typeof n == "boolean" || typeof n ==
            "function") return !1;
        if (n.length) return n.length === 0;
        for (var r in n)
            if (n.hasOwnProperty(r)) return !1;
        return !0
    };
    t.utils.lobbyUrl = function(i) {
        var r = "/" + t.utils.trim(t.config.Core.LobbyRoot + t.config.Core
                .LanguageCode + "/" + t.config.Core.LobbyName, "/") +
            "/";
        return i ? (n.location.origin || (n.location.origin = n.location
                .protocol + "//" + n.location.host), n.location.origin +
            r) : r
    };
    t.utils.guid = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
            function(n) {
                var t = Math.random() * 16 | 0,
                    i = n === "x" ? t : t & 3 | 8;
                return i.toString(16)
            })
    };
    t.utils.getCurrentRoute = function() {
        n.location.origin || (n.location.origin = n.location.protocol +
            "//" + n.location.host);
        var r = (n.location.origin + n.location.pathname)
            .toLowerCase(),
            u = new RegExp(t.config.Core.LobbyRoot + "([^/]+/)?" + t.config
                .Core.LobbyName + "/", "i"),
            i = r.split(u);
        return typeof i[2] != "undefined" ? t.utils.trimSlashes(i[2]) :
            ""
    };
    t.utils.parseDate = function(n) {
        var u = Date.parse,
            s, f, t, r, e, o;
        try {
            if (n = n.replace(" ", "T"), s = [1, 4, 5, 6, 7, 10, 11], r =
                0, t =
                /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{1,3})?(?:\d{1,6})?))?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/
                .exec(n)) {
                for (e = 0; o = s[e]; ++e) t[o] = +t[o] || 0;
                t[2] = (+t[2] || 1) - 1;
                t[3] = +t[3] || 1;
                t[8] !== "Z" && t[9] !== i && (r = t[10] * 60 + t[11],
                    t[9] === "+" && (r = 0 - r));
                f = Date.UTC(t[1], t[2], t[3], t[4], t[5] + r, t[6], t[
                    7])
            } else f = u ? u(n) : NaN
        } catch (h) {
            f = u ? u(n) : NaN
        }
        return f
    };
    t.utils.localiseDateAndTime = function(n) {
        var i = null,
            r;
        if (n !== null) try {
            n = n.replace(" ", "T");
            r = t.utils.parseDate(n);
            i = new Date(r)
        } catch (u) {
            t.logging.trackError(
                "lobby.utils.localiseDateAndTime failed to parse the date string: " +
                n)
        }
        return n = t.config.Core.useAlternateDateTime ? i.getDate() +
            "/" + (i.getMonth() + 1) + "/" + i.getFullYear() : i.toLocaleDateString(),
            n = n + " " + i.toLocaleTimeString()
    };
    t.utils.addEvent = function(t, i) {
        $(n)
            .on(t, i)
    };
    t.utils.removeEvent = function(t, i) {
        $(n)
            .off(t, i)
    };
    t.utils.getPropertyCaseInsensitive = function(n, t) {
        if (t = (t + "")
            .toUpperCase(), typeof n == "object")
            for (var i in n)
                if (n.hasOwnProperty(i) && i.toUpperCase() === t) return
                    n[i];
        return null
    };
    t.utils.compareCaseInsensitive = function(n, t) {
        return n = (n + "")
            .toUpperCase(), t = (t + "")
            .toUpperCase(), n === t
    };
    t.utils.setCookie = function(n, i, r, u) {
        var f = new Date,
            e;
        f.setDate(f.getDate() + r);
        t.utils.isNullorEmpty(u) && (u = "/");
        e = window.escape(i) + (r === null ? "" : "; expires=" + f.toUTCString()) +
            "; path=" + u + ";";
        window.document.cookie = n + "=" + e
    };
    t.utils.getCookie = function(n) {
        var u = n + "=",
            t, i, r = [];
        for (window.document.cookie && (r = window.document.cookie.split(
            ";")), i = 0; i < r.length; i++) {
            for (t = r[i]; t.charAt(0) === " ";) t = t.substring(1, t.length);
            if (t.indexOf(u) === 0) return window.unescape(t.substring(
                u.length, t.length))
        }
        return null
    };
    n.requestAnimFrame = function() {
        return n.requestAnimationFrame || n.webkitRequestAnimationFrame ||
            n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n
            .msRequestAnimationFrame || function(t) {
                n.setTimeout(t, 1e3 / 60)
            }
    }();
    t.utils.getExternalDataBlob = function(n) {
        var i = t.utils.isNullorEmpty(t.player.getXmanSessionID()) ? "" :
            t.player.getXmanSessionID(),
            r = t.player.service.getType(),
            u = t.utils.isNullorEmpty(t.player.bannerTags.bannerTag1) ?
            "" : t.player.bannerTags.bannerTag1,
            f = t.utils.isNullorEmpty(t.player.bannerTags.bannerTag2) ?
            "" : t.player.bannerTags.bannerTag2,
            e = t.utils.isNullorEmpty(t.player.bannerTags.bannerTag3) ?
            "" : t.player.bannerTags.bannerTag3,
            o = t.utils.isNullorEmpty(t.player.bannerTags.bannerTag4) ?
            "" : t.player.bannerTags.bannerTag4,
            s = t.utils.isNullorEmpty(t.player.bannerTags.bannerTag5) ?
            "" : t.player.bannerTags.bannerTag5,
            h = t.config.Core.ActiveCategoryID,
            c = t.utils.lobbyUrl(!0),
            l = t.utils.isNullorEmpty(t.player.getCurrencyDisplayFormat()) ?
            "" : t.player.getCurrencyDisplayFormat(),
            a = t.utils.isNullorEmpty(t.player.getRegisteredCasinoID()) ?
            t.config.Core.RegistrationCasinoID : t.player.getRegisteredCasinoID();
        return {
            lobbyName: t.config.Core.LobbyName,
            languageCode: t.config.Core.LanguageCode,
            userName: t.utils.isNullorEmpty(t.player.getUsername()) ?
                "" : t.player.getUsername(),
            xmanSessionID: n ? i : encodeURIComponent(i),
            userType: n ? r : encodeURIComponent(r),
            casinoCasinoID: t.config.Core.CasinoID,
            bingoCasinoID: t.config.Core.BingoCasinoID,
            pokerCasinoID: t.config.Core.PokerCasinoID,
            clientTypeID: t.config.Core.ClientTypeID,
            bannerTag1: n ? u : encodeURIComponent(u),
            bannerTag2: n ? f : encodeURIComponent(f),
            bannerTag3: n ? e : encodeURIComponent(e),
            bannerTag4: n ? o : encodeURIComponent(o),
            bannerTag5: n ? s : encodeURIComponent(s),
            activeCategoryID: n ? h : encodeURIComponent(h),
            returnUrl: n ? c : encodeURIComponent(c),
            isPracticePlay: t.player.isPractice(),
            registeredCasinoID: a,
            currencyFormat: n ? l : encodeURIComponent(l),
            currencyIsoCode: t.utils.isNullorEmpty(t.player.getCurrencyIsoCode()) ?
                "" : t.player.getCurrencyIsoCode(),
            password: "",
            compatibleGames: t.utils.games.getCompatibleGamesList(),
            favouriteGames: "",
            userID: t.utils.isNullorEmpty(t.player.getUserID()) ? "" : t
                .player.getUserID(),
            cashBalance: t.utils.isNullorEmpty(t.player.getBalance()) ?
                "" : t.player.getBalance(),
            bonusBalance: t.utils.isNullorEmpty(t.player.getBonusBalance()) ?
                "" : t.player.getBonusBalance()
        }
    }
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.url = t.utils.url || {};
    t.utils.url.replace = function(n, i) {
        if (i || (i = t.marshal.currentUrl), i = t.utils.trim(i, "/"),
            i && i.length > 0 && typeof i == "string") {
            var r = i.split("/"),
                u = r[r.length - 1];
            return t.utils.trim(i.substr(0, i.length - u.length) + n,
                "/")
        }
        return n
    };
    t.utils.url.append = function(n, i) {
        if (i || (i = t.marshal.currentUrl), i = t.utils.trim(i, "/"),
            i && i.length > 0 && typeof i == "string") {
            var r = t.marshal.registry.findUrlInStore(i);
            return t.utils.trim(r.toLowerCase(), " ") === t.utils.trim(
                n.toLowerCase(), " ") ? i : i + "/" + t.utils.trim(
                n, " ")
        }
        return n
    };
    t.utils.url.getInitialUrl = function(n, i) {
        var r = "",
            u;
        (i === null || typeof i == "undefined") && (i = t.utils.getCurrentRoute());
        i = t.utils.trim(i, "/");
        i = t.utils.trim(i, " ");
        u = "";
        t.categories && t.categories.currentCategory && (u = t.categories
            .currentCategory);
        switch (i.toLowerCase()) {
            case "":
                r = n + "/" + u;
                break;
            case "games":
                r = i + "/" + u;
                break;
            default:
                r = i
        }
        return r
    };
    t.utils.url.isSecure = function(n) {
        return n.substring(0, 8)
            .toLowerCase() === "https://" ? !0 : !1
    };
    t.utils.url.buildQueryString = function(n, i) {
        var u, r;
        if (t.utils.isNullorEmpty(n)) return "";
        u = "?";
        for (r in n) n.hasOwnProperty(r) && (u += i ? r + "=" +
            encodeURIComponent(n[r]) + "&" : r + "=" + n[r] + "&");
        return t.utils.trimend(u, "&")
    };
    t.utils.url.getHash = function() {
        return location.hash
    };
    t.utils.url.getSearch = function() {
        return location.search
    }
})(window, lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.ajax = {
        validVerbs: ["GET", "POST"],
        call: function(n, r, u, f, e, o) {
            t.logging.logTrace("AJAX request to " + n);
            var s = {
                data: r,
                success: u,
                error: f
            };
            e && (s.dataType = e);
            o && i.inArray(o.toUpperCase(), t.utils.ajax.validVerbs) >=
                0 && (s.type = o);
            i.ajax(n, s)
        }
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.content = t.utils.content || {};
    var i = function(n, i) {
        return t.utils.viewLoader.signals.viewLoaded(i), n
    };
    t.utils.content.getCacheOrAjax = function(n, r, u, f, e) {
        try {
            if (t.localStorage.exists(n) && e !== !0) {
                var o = t.localStorage.get(n);
                t.logging.logDebug(
                    "Data returned from local storage for: " + n);
                r(o, f)
            } else t.utils.viewLoader.signals.serverLoad(n), t.utils.content
                .callAjax(n, i(r, n), u, f)
        } catch (s) {
            u(s, f)
        }
    };
    t.utils.content.callAjax = function(n, i, r, u) {
        t.utils.ajax.call(n, null, function(r) {
            t.logging.logDebug("Data returned from: " + n);
            t.localStorage.set(n, r);
            i(r, u)
        }, function(i, f) {
            t.logging.logError("Error(" + f +
                ") returned from: " + n);
            r && r(i, u)
        }, "html")
    }
})(window, lobby, jQuery);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.iframePreloader = t.utils.iframePreloader || {};
    t.utils.iframePreloader.counter = 0;
    t.utils.iframePreloader.preload = function(n, r) {
        t.utils.url.isSecure(n) ? (i("<iframe>", {
                src: n,
                id: "preloadIFrame" + t.utils.iframePreloader.counter,
                frameborder: 0,
                scrolling: "no",
                style: "height: 1px; width: 1px; left: -99999px; position: absolute; z-index: -5; visibility: hidden;",
                width: 1
            })
            .appendTo("body")
            .load(function() {
                r()
            }), t.utils.iframePreloader.counter++) : t.logging.logWarn(
            'Preload: Cannot preload promotions url "' + n +
            '" as it is not secure.')
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.games = t.utils.games || {};
    t.utils.games.getGameName = function(n, i) {
        var f, r, e, u;
        for (f in t.config.Categories.Categories)
            if (t.config.Categories.Categories.hasOwnProperty(f)) {
                r = t.config.Categories.Categories[f].Games;
                for (e in r)
                    if (r.hasOwnProperty(e) && (u = r[e], u.ModuleID ===
                        n && u.ClientID === i)) return u.Name
            }
        return t.logging.logWarn(
            "getGameName: Game Not Found in config"), !1
    };
    t.utils.games.getCompatibleGamesList = function(n) {
        var r, i, u;
        if (n = n || t.config.Categories.Categories, typeof n !=
            "object") throw t.Exception("'" + n +
            "' is not an object.  Not able to compile a compatible games list using the given data."
        );
        r = "";
        for (i in n)
            if (n[i].hasOwnProperty("Games"))
                for (u in n[i].Games)
                    if (n[i].Games[u].hasOwnProperty("Name")) r += n[i]
                        .Games[u].Name + ",";
                    else throw t.Exception(
                        "Object does not contain a property called 'Name'.  It is possible that the compatible games list will not complete successfully."
                    );
        else if (i.toUpperCase() !== "POKER" && i.toUpperCase() !==
            "BINGO") throw t.Exception("Category '" + i +
            "' does not contain a 'Games' node... Not able to compile a compatible games list using the given data.  This happened while attempting to compile a list of games to represent the compatible games for this device so it could be passed onto promotions.  The Categories data structure may have changed."
        );
        if (r.length === 0) throw t.Exception(
            "No games were found when attempting to compile the compatible games list. "
        );
        return t.utils.trim(r, ",")
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.timer = function(t, i) {
        var r = !1,
            u, f, e, o = function(n, t) {
                f = n;
                e = t
            },
            h = function() {
                r || (r = !0, s())
            },
            s = function() {
                u = n.setTimeout(function() {
                    e();
                    s()
                }, f)
            },
            c = function() {
                r = !1;
                n.clearTimeout(u)
            };
        return o(t, i), {
            running: r,
            start: h,
            stop: c,
            init: o
        }
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.localStorage = t.localStorage || {};
    t.localStorage.defaultTimeout = t.localStorage.defaultTimeout || 1e4;
    t.localStorage.init = function() {
        locache.cleanup();
        t.logging.logDebug("LocalStorage Loaded")
    };
    t.localStorage.set = function(n, i, r) {
        r || (r = null);
        locache.set(t.localStorage.getFormattedKey(n), i, r)
    };
    t.localStorage.get = function(n) {
        return locache.get(t.localStorage.getFormattedKey(n))
    };
    t.localStorage.exists = function(n) {
        return locache.get(t.localStorage.getFormattedKey(n)) !== null ?
            !0 : !1
    };
    t.localStorage.remove = function(n) {
        locache.remove(this.getFormattedKey(n))
    };
    t.localStorage.flush = function() {
        locache.flush()
    };
    t.localStorage.getFormattedKey = function(n) {
        if (!n) throw t.Exception(
            "error.lobby.localStorage.getFormattedKey");
        return this.getLobbyName() + "." + n
    };
    t.localStorage.getLobbyName = function() {
        return lobbyConfig.Core.LobbyName
    };
    t.localStorage.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.sessionStorage = t.sessionStorage || {};
    t.sessionStorage.init = function() {
        t.logging.logDebug("SessionStorage Loaded")
    };
    t.sessionStorage.set = function(n, i) {
        sessionStorage.setItem(t.sessionStorage.getFormattedKey(n), i)
    };
    t.sessionStorage.get = function(n) {
        return sessionStorage.getItem(t.sessionStorage.getFormattedKey(
            n))
    };
    t.sessionStorage.exists = function(n) {
        return sessionStorage.getItem(t.sessionStorage.getFormattedKey(
            n)) ? !0 : !1
    };
    t.sessionStorage.remove = function(n) {
        sessionStorage.removeItem(this.getFormattedKey(n))
    };
    t.sessionStorage.getFormattedKey = function(n) {
        if (!n) throw t.Exception(
            "error.lobby.sessionStorage.getFormattedKey");
        return "___lobby___" + this.getLobbyName() + "." + n
    };
    t.sessionStorage.getLobbyName = function() {
        return lobbyConfig.Core.LobbyName
    };
    t.sessionStorage.init()
})(window, lobby);
(function(n, t, i) {
    n.cookies = {
        _viewData: [],
        init: function() {},
        setCookie: function(n, t, r) {
            var u = new Date,
                f;
            u.setDate(u.getDate() + r);
            f = i.escape(t) + (r === null ? "" : "; expires=" + u.toUTCString()) +
                "; path=/";
            i.document.cookie = n + "=" + f
        },
        getCookie: function(n) {
            var f = n + "=",
                t, r, u = [];
            for (i.document.cookie && (u = i.document.cookie.split(
                ";")), r = 0; r < u.length; r++) {
                for (t = u[r]; t.charAt(0) === " ";) t = t.substring(
                    1, t.length);
                if (t.indexOf(f) === 0) return t.substring(f.length,
                    t.length)
            }
            return null
        },
        deleteCookie: function(n) {
            i.document.cookie = n + "=; expires=" + new Date(1970,
                    1, 1)
                .toUTCString()
        },
        loginStatus: function() {}
    }
})(lobby, jQuery, window);
(function(n, t) {
    t = t || (n.lobby = {});
    t.appCache = t.appCache || {};
    t.appCache.getApplicationCache = function() {
        return n.applicationCache
    };
    t.appCache.reloadPage = function() {
        n.location.reload(!0)
    };
    t.appCache.init = function() {
        if (n.applicationCache) {
            var i = t.appCache.getApplicationCache();
            switch (i.status) {
                case i.UPDATEREADY:
                    t.logging.logDebug("appcache state is UpdateReady");
                    t.appCache.reloadPage();
                    break;
                case i.DOWNLOADING:
                    t.logging.logDebug("appcache state is DOWNLOADING");
                    i.addEventListener("updateready", t.appCache.onUpdateReady, !
                        1);
                    i.addEventListener("cached", t.appCache.firstCached, !
                        1);
                    i.addEventListener("error", t.appCache.noUpdate, !1);
                    t.localStorage.exists("appCacheInitialLoad") && t.require();
                    break;
                case i.CHECKING:
                    t.logging.logDebug("appcache state is CHECKING");
                    i.addEventListener("downloading", t.appCache.downloading, !
                        1);
                    i.addEventListener("noupdate", t.appCache.noUpdate, !
                        1);
                    i.addEventListener("error", t.appCache.noUpdate, !1);
                    t.localStorage.exists("appCacheInitialLoad") && t.require()
            }
        }
    };
    t.appCache.onUpdateReady = function() {
        t.logging.logDebug("onUpdateReady fired");
        t.appCache.reloadPage()
    };
    t.appCache.downloading = function() {
        t.logging.logDebug("downloading fired");
        n.applicationCache.addEventListener("updateready", t.appCache.onUpdateReady, !
            1);
        n.applicationCache.addEventListener("cached", t.appCache.firstCached, !
            1);
        n.applicationCache.addEventListener("error", t.appCache.noUpdate, !
            1)
    };
    t.appCache.firstCached = function() {
        t.logging.logDebug("first cached loaded");
        t.localStorage.exists("appCacheInitialLoad") ? t.requireLoaded() :
            t.localStorage.set("appCacheInitialLoad", !0)
    };
    t.appCache.noUpdate = function() {
        t.logging.logDebug("requireLoaded fired");
        t.requireLoaded()
    };
    t.appCache.init()
})(window, lobby, jQuery);
(function(n) {
    n = n || (global.lobby = {});
    n.history = n.history || {};
    n.history.isPoppedUrl = !1;
    n.history.firstEventFired = !1;
    n.history.pageStack = [];
    n.history.init = function() {
        n.history.createPopState();
        n.logging.logDebug("History Loaded")
    };
    n.history.createPopState = function() {
        var t = this;
        window.onpopstate = function(i) {
            t.isPoppedUrl = !1;
            i.state ? (n.logging.logTrace(location.pathname,
                        " location pathname"), n.logging.logTrace(i
                        .state, "History State"), t.isPoppedUrl = !
                    0, n.marshal.loadURL(i.state.state)) : n.history
                .firstEventFired && (n.logging.logTrace(
                        "handling subsequent eventless popstate"),
                    t.isPoppedUrl = !0, n.history.replace("",
                        "games"), n.marshal.loadURL(""));
            n.history.firstEventFired = !0
        }
    };
    n.history._getHistoryUrl = function(t) {
        var i = n.utils.url.getHash(),
            r = i ? i : "";
        return n.config.Core.LobbyRoot + n.config.Core.LanguageCode +
            "/" + n.config.Core.LobbyName + "/" + t + r
    };
    n.history.push = function(t, i) {
        var f = "Mgs.Lobby",
            r = {
                state: t,
                data: i
            },
            u;
        this.isPoppedUrl !== !0 && n.history.pageStack.length > 0 ?
            window.history.pushState && (window.history.pushState(r, f,
                this._getHistoryUrl(t)), n.logging.logTrace(r,
                "History Push: ")) : (window.history.replaceState && (
                    window.history.replaceState(r, f, this._getHistoryUrl(
                        t)), n.logging.logTrace(r,
                        "History Replace (in push): ")), this.isPoppedUrl = !
                1);
        u = n.history.pageStack[n.history.pageStack.length - 1];
        (n.utils.isNullorEmpty(u) || u.data !== r.data) && n.history.pageStack
            .push(r)
    };
    n.history.replace = function(t, i) {
        var r = {
            state: t,
            data: i
        };
        n.logging.logTrace(r, "History Replace: ");
        window.history.replaceState && window.history.replaceState(r,
            "Mgs.Lobby", this._getHistoryUrl(t));
        n.history.pageStack.length ? n.history.pageStack[n.history.pageStack
            .length - 1] = r : n.history.pageStack.push(r)
    };
    n.history.back = function(t) {
        if (t = Number(t), (isNaN(t) || t <= 0) && (t = 1), n.history.pageStack
            .length >= t) {
            var r = n.marshal.registry.findUrlInStore(n.marshal.currentUrl),
                i = n.history.pageStack[n.history.pageStack.length - t],
                u = n.marshal.registry.findUrlInStore(n.marshal.maestro
                    .loadURL(i.state));
            r === u ? n.history.back(t + 1) : n.marshal.loadURL(i.state)
        } else n.marshal.loadURL("")
    }
})(lobby, jQuery);
(function(n) {
    var t = null;
    n.history.signals = {
        defaultView: null,
        init: function() {
            t = this;
            t.loadSubscribe();
            n.logging.logDebug("History Signals Loaded")
        },
        loadSubscribe: function() {
            n.signal.subscribe("lobby.loaded", function() {
                    t.loadPublish();
                    n.history.init()
                })
                .disposeAfter(1);
            n.signal.subscribe("marshal.viewLoaded.#", function(t) {
                n.history.push(t.url, t.view)
            });
            n.signal.subscribe("marshal.initialViewLoaded.#",
                function(t) {
                    n.history.replace(t.url, t.view)
                })
        },
        loadPublish: function() {}
    };
    n.history.signals.init()
})(lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.dialogManager = t.dialogManager || {};
    t.dialogManager.View = t.dialogManager.View || {};
    t.dialogManager.Dialog = function(n) {
        var r = {},
            u = ["callback", "topClose", "bottomLinkLeft",
                "bottomLinkRight"],
            f = ["main", "default", "primary"],
            e = ["large", "small", "smallWide"],
            o = {
                title: "",
                html: "",
                message: "",
                buttonBag: [{
                    type: "callback",
                    text: t.languageStringProvider.getString(
                        "Close"),
                    event: t.dialogManager.View.hideDialog,
                    style: "smallWide",
                    color: "default"
                }],
                autoLogin: {
                    showAutoLogin: !1,
                    event: null
                },
                fullscreen: !1
            },
            s = function() {
                r = i.extend(o, n);
                a()
            },
            h = function() {
                t.dialogManager.View.cleanDialog();
                l();
                t.ui.hideMainContent();
                t.dialogManager.View.showDialog()
            },
            c = function() {
                t.dialogManager.View.hideDialog();
                t.ui.showMainContent()
            },
            l = function() {
                var f, i, o, n, e;
                for (r.title && t.dialogManager.View.addTitle(r.title),
                    r.html ? t.dialogManager.View.addHtml(r.html) : t.dialogManager
                    .View.addMessage(r.message), r.autoLogin && r.autoLogin
                    .showAutoLogin && t.dialogManager.View.showAutoLogin(
                        r.autoLogin.event), f = 0, i = 0; i < r.buttonBag
                    .length; i++) o = r.buttonBag[i], o.style ===
                    "small" && f++;
                var s = parseInt(f / 2),
                    h = ["bttn-left", "bttn-right"],
                    u = !0;
                for (n = 0; n < r.buttonBag.length; n++) e = r.buttonBag[
                    n], e.style === "small" && s !== 0 && (r.buttonBag[
                        n].style = "small " + h[u ? 0 : 1], u || s--,
                    u = u ? !1 : !0), e.style === "smallwide" && (r
                    .buttonBag[n].style = "small");
                t.dialogManager.View.addButtonBag(r.buttonBag)
            },
            a = function() {
                var o, s, n;
                if (t.utils.isNullorEmpty(r.html) && t.utils.isNullorEmpty(
                    r.message)) throw t.Exception(
                    "error.lobby.dialog.validate.message");
                if (i.isEmptyObject(r.buttonBag)) throw t.Exception(
                    "error.lobby.dialog.validate.buttonBag");
                for (o = 0, s = 0; s < r.buttonBag.length; s++) {
                    if (n = r.buttonBag[s], t.utils.isNullorEmpty(n.text))
                        throw t.Exception(
                            "error.lobby.dialog.validate.buttonText");
                    if (i.inArray(n.type, u) === -1) throw t.Exception(
                        "error.lobby.dialog.validate.buttonType");
                    if (n.event === null || typeof n.event ==
                        "undefined") throw t.Exception(
                        "error.lobby.dialog.validate.buttonEvent");
                    if (n.type === "callback") {
                        if (i.inArray(n.color, f) === -1) throw t.Exception(
                            "error.lobby.dialog.validate.buttonColor"
                        );
                        if (i.inArray(n.style, e) === -1) throw t.Exception(
                            "error.lobby.dialog.validate.buttonStyle"
                        );
                    }
                    if (o = n.type === "close" ? o + 1 : o, o > 1) throw t
                        .Exception(
                            "error.lobby.dialog.validate.closeButton");
                }
            };
        return {
            options: r,
            showDialog: h,
            hideDialog: c,
            init: s
        }
    }
})(window, lobby, jQuery);
(function(n) {
    n = n || (global.lobby = {});
    n.dialogManager = n.dialogManager || {};
    n.dialogManager.visible = !1;
    n.dialogManager.init = function() {};
    n.dialogManager.alertBox = function(t, i) {
        var u = {
                title: i,
                message: t,
                buttonBag: [{
                    type: "callback",
                    text: n.languageStringProvider.getString(
                        "Close"),
                    event: n.dialogManager.View.hideDialog,
                    style: "small",
                    color: "default"
                }, {
                    type: "topClose",
                    text: n.languageStringProvider.getString(
                        "Close"),
                    event: n.dialogManager.View.hideDialog
                }]
            },
            r = n.dialogManager.Dialog(u);
        return r.init(), r.showDialog(), r
    }
})(lobby);
(function(n, t) {
    n = n || (global.lobby = {});
    n.dialogManager = n.dialogManager || {};
    n.dialogManager.View = n.dialogManager.View || {};
    n.dialogManager.View.container = "#dialogContainerOuter";
    n.dialogManager.View.showDialog = function() {
        n.dialogManager.visible || (t(n.dialogManager.View.container)
            .fadeIn(0), n.dialogManager.visible = !0)
    };
    n.dialogManager.View.hideDialog = function() {
        n.dialogManager.visible && (t(n.dialogManager.View.container)
            .fadeOut(0), n.dialogManager.visible = !1)
    };
    n.dialogManager.View.cleanDialog = function() {
        t("#dialog")
            .find("*")
            .off();
        t("#dialog")
            .off();
        t("#dialogTitle", this.container)
            .html("&nbsp;");
        t("#dialogCloseBttn", this.container)
            .fadeOut(0);
        t("#dialogMessage", this.container)
            .text("");
        t(".dialog-form-actions nav > *", this.container)
            .remove();
        t(".dialog-checkbox", this.container)
            .fadeOut(0);
        t("#dialogLinkLeft", this.container)
            .fadeOut(0);
        t("#dialogLinkRight", this.container)
            .fadeOut(0)
    };
    n.dialogManager.View.addTitle = function(n) {
        t("#dialogTitle", this.container)
            .text(n)
    };
    n.dialogManager.View.addHtml = function(n) {
        t("#dialogMessage", this.container)
            .html(n)
    };
    n.dialogManager.View.addMessage = function(n) {
        var i = '<p class="dialog-text-info">' + n + "<\/p>";
        t("#dialogMessage", this.container)
            .html(i)
    };
    n.dialogManager.View.showAutoLogin = function(i) {
        i && t(".dialog-checkbox", this.container)
            .touchclick({
                callback: i,
                preventDefault: n.ui.useTouchClickDoubleClick()
            });
        t(".dialog-checkbox", this.container)
            .fadeIn(0)
    };
    n.dialogManager.View.addButtonBag = function(i) {
        for (var e = 0, r, f, u = 0; u < i.length; u++) {
            r = i[u];
            f = "";
            switch (r.type) {
                case "callback":
                    f = r.type + e;
                    t(".dialog-form-actions nav", this.container)
                        .append(this._buttonHtml(f, r));
                    t("#" + f, this.container)
                        .touchclick({
                            callback: r.event,
                            preventDefault: n.ui.useTouchClickDoubleClick()
                        });
                    break;
                case "topClose":
                    t("#dialogCloseBttn", this.container)
                        .fadeIn(0);
                    t("#dialogCloseBttn", this.container)
                        .touchclick({
                            callback: r.event,
                            preventDefault: n.ui.useTouchClickDoubleClick()
                        });
                    break;
                case "bottomLinkLeft":
                    t("#dialogLinkLeft", this.container)
                        .fadeIn(0);
                    t("#dialogLinkLeft p", this.container)
                        .text(r.text);
                    t("#dialogLinkLeft", this.container)
                        .touchclick({
                            callback: r.event,
                            preventDefault: n.ui.useTouchClickDoubleClick()
                        });
                    break;
                case "bottomLinkRight":
                    t("#dialogLinkRight", this.container)
                        .fadeIn(0);
                    t("#dialogLinkRight p", this.container)
                        .text(r.text);
                    t("#dialogLinkRight", this.container)
                        .touchclick({
                            callback: r.event,
                            preventDefault: n.ui.useTouchClickDoubleClick()
                        });
                    break;
                default:
                    throw n.Exception("error.lobby.dialog.view.button");
            }
            e++
        }
    };
    n.dialogManager.View._buttonHtml = function(n, t) {
        var i = "dialog-bttn-" + t.style;
        return i += " bttn-color-" + t.color, '<p id="' + n +
            '" class="' + i + ' single-bttn">' + t.text + "<\/p>"
    }
})(lobby, jQuery);
(function(n) {
    var t = null;
    n.dialogManager.signals = {
        init: function() {
            t = this;
            t.loadSubscribe();
            n.logging.logDebug("Dialog Manager Signals Loaded")
        },
        loadSubscribe: function() {
            n.signal.subscribe("lobby.start", function() {
                    t.loadPublish();
                    n.dialogManager.init()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {}
    };
    n.dialogManager.signals.init()
})(lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.overlayMessage = t.overlayMessage || {};
    t.overlayMessage.currentButtonAction = null;
    t.overlayMessage.currentCloseAction = null;
    t.overlayMessage.isModal = !1;
    t.overlayMessage.init = function() {
        t.overlayMessage.view.init()
    };
    t.overlayMessage.show = function() {
        t.overlayMessage.view.showOverlay()
    };
    t.overlayMessage.hide = function() {
        if (t.overlayMessage.view.hideOverlay(), !t.utils.isNullorEmpty(
            t.overlayMessage.currentCloseAction)) {
            if (typeof t.overlayMessage.currentCloseAction !=
                "function") return t.logging.logWarn(
                "Overlay Message: Trying to call action that is not set"
            ), !1;
            t.overlayMessage.currentCloseAction();
            t.overlayMessage.currentCloseAction = null
        }
    };
    t.overlayMessage.doButtonAction = function() {
        if (typeof t.overlayMessage.currentButtonAction != "function")
            return t.logging.logWarn(
                "Overlay Message: Trying to call action that is not set"
            ), !1;
        t.overlayMessage.currentButtonAction()
    };
    t.overlayMessage.resetActions = function() {
        t.overlayMessage.currentButtonAction = null;
        t.overlayMessage.currentCloseAction = null
    };
    t.overlayMessage.setModalAction = function(n, i) {
        t.overlayMessage.currentCloseAction = null;
        t.overlayMessage.currentButtonAction = i;
        t.overlayMessage.view.setButtonText(n);
        t.overlayMessage.view.showActionButton();
        t.overlayMessage.view.removeCloseOnTap()
    }
})(window, lobby, jQuery);
/*!
 * Overlay Message
 *
 */
(function(n, t) {
    t = t || (n.lobby = {});
    t.overlayMessage = t.overlayMessage || {};
    t.overlayMessage.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Overlay Message Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.loaded", function() {
                    n.loadPublish();
                    t.overlayMessage.init()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {},
        showPublish: function() {
            t.logging.logDebug(
                "Overlay Message Signal: Show Message");
            t.signal.publish("overlayMessage.show")
        },
        hidePublish: function() {
            t.logging.logDebug(
                "Overlay Message Signals: Hide Message");
            t.signal.publish("overlayMessage.hide")
        }
    };
    t.overlayMessage.signals.init()
})(window, lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.overlayMessage = t.overlayMessage || {};
    t.overlayMessage.view = t.overlayMessage.view || {};
    t.overlayMessage.view.visible = !1;
    t.overlayMessage.view.canInteract = !1;
    t.overlayMessage.view.init = function() {
        t.overlayMessage.view.reset();
        i("#overlay-message")
            .on("touchmove", function(n) {
                n.preventDefault()
            });
        i("#overlay-message")
            .touchclick({
                callback: function() {
                    t.overlayMessage.view.canInteract && !t.overlayMessage
                        .isModal && t.overlayMessage.hide()
                },
                preventDefault: t.ui.useTouchClickDoubleClick()
            });
        i("#overlay-message .button-action")
            .touchclick({
                callback: function() {
                    t.overlayMessage.view.canInteract && t.overlayMessage
                        .doButtonAction()
                },
                preventDefault: t.ui.useTouchClickDoubleClick()
            })
    };
    t.overlayMessage.view.showOverlay = function() {
        t.overlayMessage.signals.showPublish();
        t.overlayMessage.view.visible = !0;
        n.scrollTo(0, 0);
        i("#overlay-message")
            .finish()
            .css("display", "inline-block")
            .finish()
            .animate({
                opacity: 1
            }, 500, function() {
                t.ui.addLayoutClass("lobby-blur")
            });
        setTimeout(function() {
            t.overlayMessage.view.canInteract = !0
        }, 800)
    };
    t.overlayMessage.view.hideOverlay = function() {
        t.ui.removeLayoutClass("lobby-blur");
        i("#overlay-message")
            .animate({
                opacity: 0
            }, 500, function() {
                i(this)
                    .css("display", "none");
                t.overlayMessage.view.reset();
                t.overlayMessage.view.visible = !1;
                t.overlayMessage.view.canInteract = !1;
                t.overlayMessage.signals.hidePublish()
            })
    };
    t.overlayMessage.view.reset = function() {
        t.overlayMessage.view.setTitle("");
        t.overlayMessage.view.setBody("");
        t.overlayMessage.view.hideImage();
        t.overlayMessage.view.setButtonText("");
        t.overlayMessage.view.hideActionButton();
        t.overlayMessage.resetActions();
        t.overlayMessage.view.setCloseOnTap()
    };
    t.overlayMessage.view.setTitle = function(n) {
        i("#overlay-message .message-title")
            .text(n)
    };
    t.overlayMessage.view.setBody = function(n) {
        i("#overlay-message .message-body")
            .html(n)
    };
    t.overlayMessage.view.setButtonText = function(n) {
        i("#overlay-message .button-action .button-text")
            .text(n)
    };
    t.overlayMessage.view.showActionButton = function() {
        i("#overlay-message .button-action")
            .show()
    };
    t.overlayMessage.view.hideActionButton = function() {
        i("#overlay-message .button-action")
            .hide()
    };
    t.overlayMessage.view.setGameImage = function(n, r) {
        i("#overlay-message .image-container img")
            .attr("src", t.config.Core.LobbyRoot + "Images/VPB/" + n +
                "_" + r + ".jpg");
        t.overlayMessage.view.showImage()
    };
    t.overlayMessage.view.showImage = function() {
        i("#overlay-message .image-container")
            .show();
        i("#overlay-message")
            .addClass("image-visible")
    };
    t.overlayMessage.view.hideImage = function() {
        i("#overlay-message .image-container")
            .hide();
        i("#overlay-message")
            .removeClass("image-visible")
    };
    t.overlayMessage.view.showProcessing = function() {
        t.overlayMessage.view.canInteract = !1;
        t.spinner.view.noBackground();
        t.spinner.start()
    };
    t.overlayMessage.view.hideProcessing = function() {
        t.overlayMessage.view.canInteract = !0;
        t.spinner.stop()
    };
    t.overlayMessage.view.setCloseOnTap = function() {
        t.overlayMessage.isModal = !1;
        i("#overlay-message .close-text")
            .show()
    };
    t.overlayMessage.view.removeCloseOnTap = function() {
        t.overlayMessage.isModal = !0;
        i("#overlay-message .close-text")
            .hide()
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.languageStringProvider = t.languageStringProvider || {};
    t.languageStringProvider.getString = function(n) {
        var i = "";
        return typeof n != "string" && t.logging.logWarn(
            "The stringName '" + n +
            "' is not of type 'string' it is of type '" + typeof n +
            "'.  This is bad as the LanguageStringProvider expects typeof 'string' to find strings but has encountered a different type."
        ), n ? t.config.LanguageStrings.hasOwnProperty(n) ? (typeof t
            .config.LanguageStrings[n] != "string" && t.logging.logWarn(
                "The stringValue for stringName '" + n +
                "' is not of type 'string' it is of type '" +
                typeof t.config.LanguageStrings[n] +
                "'.  This is bad as the LanguageStringProvider wants to return strings but has encountered a different type.  Returning the string value regardless of its type in case this was intended."
            ), i = t.config.LanguageStrings[n]) : t.logging.logWarn(
            "The languageStrings blob does not contain a property for stringName '" +
            n + "'.") : t.logging.logWarn(
            "languageStringProvider.getString method was called with a falsy stringName '" +
            n + "'."), i === "" && t.logging.logError(
            "The clients LangaugeStringProvider is returning an empty stringValue for stringName '" +
            n +
            "'.  To understand why please have a look at any previous language string related logs and double check the stringName is correct and is being used as intended."
        ), i
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.privateBrowsing = t.privateBrowsing || {};
    t.privateBrowsing.init = function() {
        if (t.privateBrowsing.isPrivateBrowsingEnabled()) {
            t.tracking.trackEvent(t.enums.trackingEvents.PRIVATEBROWSING);
            throw t.Exception("privateBrowsing");
        }
    };
    t.privateBrowsing.isPrivateBrowsingEnabled = function() {
        try {
            var t = n.localStorage,
                i = "testKey";
            t && (t.setItem(i, "1"), t.removeItem(i))
        } catch (r) {
            if (r.code === n.DOMException.SECURITY_ERR || r.code === n.DOMException
                .QUOTA_EXCEEDED_ERR && t.length === 0) return !0
        }
        return !1
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.privateBrowsing = t.privateBrowsing || {};
    t.privateBrowsing.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Private Browsing Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.start", function() {
                    n.loadPublish();
                    t.privateBrowsing.init()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {}
    };
    t.privateBrowsing.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.spinner = t.spinner || {};
    t.spinner.state = t.enums.spinner.STOPPED;
    t.spinner.Spinner = {};
    t.spinner.init = function() {
        t.spinner.Spinner = new n.Spinner({
            lines: 12,
            length: 11,
            width: 4,
            radius: 10,
            corners: 1,
            rotate: 0,
            color: "#C8C8C8",
            speed: 1,
            trail: 100,
            shadow: !1,
            hwaccel: !0,
            className: "lobby-spinner",
            zIndex: 2e9,
            top: "auto",
            left: "auto",
            visibility: !0
        });
        t.logging.logDebug("Spinner Loaded");
        t.requireLoaded()
    };
    t.spinner.start = function() {
        t.spinner.state !== t.enums.spinner.STARTED && (t.spinner.state =
            t.enums.spinner.STARTED, t.spinner.view.start())
    };
    t.spinner.stop = function() {
        t.spinner.state !== t.enums.spinner.STOPPED && (t.spinner.state =
            t.enums.spinner.STOPPED, t.spinner.view.stop())
    };
    t.require()
})(window, lobby, jQuery);
(function(n, t, i) {
    function u(n) {
        n.stopPropagation();
        n.preventDefault()
    }

    function r() {
        var t = i(window)
            .height(),
            f = i(window)
            .scrollTop();
        i(".lobby-spinner-modal")
            .height(t)
            .css({
                "margin-top": f,
                position: "absolute"
            });
        i(".lobby-spinner-modal")
            .on("touchmove", u);
        i(".lobby-spinner-modal")
            .on("touchstart", u);
        i(n)
            .on("resize", r)
    }

    function f() {
        i(".lobby-spinner-modal")
            .off();
        i(n)
            .off("resize", r)
    }
    t = t || (n.lobby = {});
    t.spinner = t.spinner || {};
    t.spinner.view = t.spinner.view || {};
    t.spinner.view.init = function() {
        i(".lobby-spinner-modal")
            .hide();
        i("#spinner")
            .show()
    };
    t.spinner.view.start = function() {
        i(".lobby-spinner-modal")
            .show();
        i("#spinner")
            .append(t.spinner.Spinner.spin()
                .el);
        r();
        t.logging.logTrace("Spinner started")
    };
    t.spinner.view.noBackground = function() {
        i(".lobby-spinner-modal")
            .addClass("no-bg")
    };
    t.spinner.view.stop = function() {
        t.spinner.Spinner.stop();
        i(".lobby-spinner-modal")
            .hide();
        i(".lobby-spinner-modal")
            .removeClass("no-bg");
        i("#spinner")
            .empty();
        f();
        t.logging.logTrace("Spinner stopped")
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.spinner = t.spinner || {};
    t.spinner.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Spinner Signals Loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("lobby.start", function() {
                    t.spinner.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    t.spinner.view.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("utils.viewloader.serverLoad",
                function() {
                    t.spinner.start()
                });
            t.signal.subscribe("utils.viewloader.viewLoaded",
                function() {
                    t.spinner.stop()
                });
            t.signal.subscribe("login.start", function() {
                t.spinner.start()
            });
            t.signal.subscribe("login.success", function() {
                t.spinner.stop()
            });
            t.signal.subscribe("login.fail", function() {
                t.spinner.stop()
            });
            t.signal.subscribe("logout.start", function() {
                t.spinner.start()
            });
            t.signal.subscribe("logout.success", function() {
                t.spinner.stop()
            });
            t.signal.subscribe("logout.fail", function() {
                t.spinner.stop()
            })
        }
    };
    t.spinner.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.marshal = t.marshal || {};
    t.marshal.currentUrl = t.marshal.currentUrl || "";
    t.marshal.requestedUrl = t.marshal.requestedUrl || "";
    t.marshal.processLoadInitialStartURL = !0;
    t.marshal.registerURL = function(n, i, r) {
        if (!t.marshal.registry) throw t.Exception(
            "error.lobby.marshal.registry");
        t.marshal.registry.registerURL(n, i, r)
    };
    t.marshal.loadURL = function(n) {
        if (!this.maestro) throw t.Exception(
            "error.lobby.marshal.maestro");
        if (!this.registry) throw t.Exception(
            "error.lobby.marshal.registry");
        t.marshal.signals.loadStart(n, t.marshal.currentUrl);
        t.marshal.requestedUrl = n;
        var i = t.marshal.maestro.loadURL(n),
            r = t.marshal.registry.getComponent(i);
        if (t.marshal.currentUrl = i, !r || !r.loadView) throw t.Exception(
            "error.lobby.marshal.invalid");
        r.loadView(i)
    };
    t.marshal.loadInitialStartURL = function() {
        var f = t.login.isLoggedIn(t.marshal.loadInitialStartURL, !0),
            n, i, u, r;
        if (f !== null) {
            if (n = t.utils.getCurrentRoute(), t.marshal.registry.findInitialViewInStore(
                n) !== t.config.InitialView.toLowerCase()) throw t.Exception(
                "error.lobby.marshal.initialView");
            i = t.marshal.maestro.loadURL(n);
            t.login.isPlayerSessionTimeout(f) && t.utils.isNullorEmpty(
                t.localStorage.get("playerHasAlreadySeenTimeoutMsg")
            ) && (i = t.utils.url.append("login", i));
            t.utils.trim(i.toLowerCase(), " ") !== t.utils.trim(n.toLowerCase(),
                " ") ? t.marshal.loadURL(i) : (u = t.marshal.registry
                .findUrlInStore(n), r = u.replace("/", "."), t.utils
                .isNullorEmpty(r) && (r = "games"), t.marshal.currentUrl =
                u, t.marshal.processLoadInitialStartURL && t.marshal
                .signals.initialLoadedView(r, t.utils.url.getInitialUrl(
                    r, n)));
            t.marshal.signals.marshalReady()
        }
    }
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.marshal = t.marshal || {};
    t.marshal.maestro = t.marshal.maestro || {};
    t.marshal.maestro.init = function() {
        f()
    };
    t.marshal.maestro.loadURL = function(n) {
        for (var u, i = n, f = [n]; u !== i;) {
            if (u = i, i = r(i), u !== i && f.indexOf(i) >= 0) throw t.Exception(
                "error.lobby.marshal.maestro.infinite");
            f.push(i)
        }
        return u
    };
    var r = function(n) {
            var o = t.marshal.registry.getComponent(n),
                f, s, r, e;
            if (!o) return n = i(n), t.error.silent(t.Exception(
                "error.lobby.marshal.invalid", "SILENT")), n;
            if (f = u(n), f === null) return n;
            if (s = o.getState(n), r = f[s], r) {
                e = n;
                switch (r.action) {
                    case "redirect":
                        n = r.url;
                        t.logging.logTrace(e + " redirected to: " + n);
                        break;
                    case "replace":
                        n = n.substr(0, n.length - f.section.length) + r.url;
                        t.logging.logTrace(e + " replaced with: " + n);
                        break;
                    case "reduce":
                        n = i(n, f, r.url);
                        t.logging.logTrace(e + " reduced to: " + n);
                        break;
                    default:
                        n += "/" + r.url;
                        t.logging.logTrace(e + " appended with: " + r.url)
                }
            }
            return t.utils.trim(n, "/")
        },
        u = function(n) {
            var i;
            t.utils.isNullorEmpty(n) && (n = "");
            n = t.utils.trim(n, "/");
            for (var f = n.toUpperCase()
                .split("/"), r = f.length - 1, u = f[r]; r >= 0;) {
                if (i = t.utils.getPropertyCaseInsensitive(t.config.Core.Maestro,
                    u), i && typeof i == "object") return i.section = u, i;
                r -= 1;
                u = f[r] + "/" + u
            }
            return null
        },
        i = function(n, i, r) {
            var u = Math.min(i ? i.section.length : n.length - n.lastIndexOf(
                "/"), n.length);
            return n = n.substr(0, n.length - u), t.utils.trim(n, "/")
                .length === 0 && (n = r || ""), t.utils.trim(n, "/")
        },
        f = function() {
            t.config.Core.Maestro = t.config.Core.Maestro || {
                Register: {
                    Completed: {
                        url: "banking",
                        action: "replace"
                    }
                },
                Login: {
                    Completed: {
                        url: "banking",
                        action: "replace"
                    }
                },
                ForgotPassword: {
                    Completed: {
                        url: "myaccount",
                        action: "replace"
                    }
                },
                Banking: {
                    Invalid: {
                        url: "login",
                        action: "append"
                    }
                },
                MyAccount: {
                    Invalid: {
                        url: "login",
                        action: "append"
                    }
                },
                ResetPassword: {
                    Invalid: {
                        url: "login",
                        action: "append"
                    }
                },
                ExcludeMe: {
                    Invalid: {
                        url: "login",
                        action: "append"
                    }
                },
                DepositLimits: {
                    Invalid: {
                        url: "login",
                        action: "append"
                    }
                },
                TermsAndConditions: {
                    Invalid: {
                        url: "login",
                        action: "append"
                    }
                }
            };
            typeof t.config.Core.Maestro == "string" && (t.config.Core.Maestro =
                JSON.parse(t.config.Core.Maestro))
        }
})(window, lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.marshal = t.marshal || {};
    t.marshal.registry = t.marshal.registry || {};
    t.marshal.registry.store = t.marshal.registry.store || [];
    t.marshal.registry.registerURL = function(n, r, u) {
        if (n === null || n === i) throw t.Exception(
            "error.lobby.marshal.registry.urlEmpty");
        if (typeof r != "object" || r === null) throw t.Exception(
            "error.lobby.marshal.registry.invalidObject");
        if (!r.hasOwnProperty("getState") || !r.hasOwnProperty(
            "loadView")) throw t.Exception(
            "error.lobby.marshal.registry.invalidComponent");
        n = t.utils.trim(n, "/")
            .toLowerCase();
        u = t.utils.trim(u);
        u = t.utils.isNullorEmpty(u) ? n : u.toLowerCase();
        this.store[n] = {
            component: r,
            initialView: u
        };
        t.logging.logDebug("URL registered: " + n)
    };
    t.marshal.registry.getComponent = function(n) {
        if (n === null || n === i) throw t.Exception(
            "error.lobby.marshal.registry.get.urlEmpty");
        var r = this.findInStore(n);
        if (r === null || typeof r == "undefined") throw t.Exception(
            "error.lobby.marshal.registry.get.notFound");
        return r
    };
    t.marshal.registry.findInStore = function(n) {
        var i = t.marshal.registry.findUrlInStore(n);
        return i in t.marshal.registry.store ? t.marshal.registry.store[
            i].component : null
    };
    t.marshal.registry.findInitialViewInStore = function(n) {
        var i = t.marshal.registry.findUrlInStore(n);
        return i in t.marshal.registry.store ? t.marshal.registry.store[
            i].initialView : null
    };
    t.marshal.registry.findUrlInStore = function(n) {
        var u, i, r;
        for (t.utils.isNullorEmpty(n) && (n = ""), n = t.utils.trim(n,
                "/")
            .toLowerCase(), u = n.split("/"), i = "", r = u.length - 1; r >=
            0; r--)
            if (i = u[r] + "/" + i, i = i.substr(i.length - 1, 1) ===
                "/" ? i.substr(0, i.length - 1) : i, this.store[i] !==
                null && typeof this.store[i] != "undefined") return i;
        return ""
    }
})(window, lobby);
(function(n, t) {
    var i = null;
    t = t || (n.lobby = {});
    t.marshal = t.marshal || {};
    t.marshal.signals = {
        init: function() {
            i = this;
            i.loadSubscribe();
            t.logging.logDebug("Marshal Signals Loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("lobby.start", function() {
                    t.marshal.maestro.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    t.marshal.loadInitialStartURL()
                })
                .disposeAfter(1)
        },
        loadStart: function(n, i) {
            t.logging.logDebug("Marshal starting to load URL: " + n);
            t.signal.publish("marshal.beginload", {
                url: n,
                current: i
            })
        },
        serverLoad: function(n) {
            t.logging.logDebug("Marshal loading view from server: " +
                n);
            t.signal.publish("marshal.serverLoad", n)
        },
        loadedView: function(n, i) {
            t.logging.logDebug("Marshal finished loading View: " +
                n);
            t.signal.publish("marshal.viewLoaded." + n, {
                view: n,
                url: i
            })
        },
        loadedFormsServiceView: function(n) {
            t.logging.logDebug(
                "Marshal finished loading forms service view: " +
                n);
            t.signal.publish("marshal.formsServiceviewLoaded." + n, {
                view: n
            })
        },
        initialLoadedView: function(n, i) {
            t.logging.logDebug(
                "Marshal finished loading initial View: " + n);
            t.signal.publish("marshal.initialViewLoaded." + n, {
                view: n,
                url: i
            })
        },
        marshalReady: function() {
            t.logging.logDebug("Marshal is ready");
            t.signal.publish("marshal.ready")
        }
    };
    t.marshal.signals.init()
})(window, lobby);
(function(n) {
    n = n || (global.lobby = {});
    n.preloader = n.preloader || {};
    n.preloader.formsServiceUrls = ["forgotdetails", "changepassword",
        "termsandconditions", "banking", "registration",
        "selfexclusion", "depositlimits"];
    n.preloader.init = function() {};
    n.preloader.preloadStaticPages = function() {
        var t, i;
        n.utils.content.getCacheOrAjax(n.utils.lobbyUrl() +
            "ContactUsPartial", function() {
                n.logging.logInfo("Preloaded ContactUsPartial")
            }, function() {}, [], !0);
        n.utils.content.getCacheOrAjax(n.utils.lobbyUrl() +
            "GamesPartial", function() {
                n.logging.logInfo("Preloaded GamesPartial")
            }, function() {}, [], !0);
        for (t in n.config.Categories.Categories) n.config.Categories.Categories
            .hasOwnProperty(t) && (i = n.config.Categories.Categories[t],
                n.utils.content.getCacheOrAjax(n.utils.lobbyUrl() +
                    "GamesPartial/" + i.Name, function(t, i) {
                        n.logging.logInfo("Preloaded GamesPartial/" + i
                            .catname)
                    }, function() {}, {
                        catname: i.Name
                    }, !0))
    };
    n.preloader.preloadLoginSensitivePages = function() {
        var t = n.login.isLoggedIn(n.preloader.preloadLoginSensitivePages, !
            0);
        t !== null && (t && (n.utils.content.callAjax(n.utils.lobbyUrl() +
                "MyAccountPartial", function() {
                    n.logging.logInfo(
                        "Preloaded MyAccountPartial")
                }, function() {}, []), n.logging.logTrace(
                "Preloading Myaccount initiated")), n.promotions &&
            n.config.Promotions.isPromotionsUrlSecure && n.config.Promotions
            .preloadPromotions && n.utils.iframePreloader.preload(n
                .config.Promotions.promotionsUrl + "?preload=true",
                function() {
                    n.logging.logInfo("Preloaded Promotions")
                }))
    };
    n.preloader.preloadFormsServiceContainer = function() {
        var u = n.login.isLoggedIn(n.preloader.preloadFormsServiceContainer, !
            0);
        u !== null && (u ? n.marshal.registry.findUrlInStore(n.marshal.currentUrl) !==
            "registration" ? t() : n.logging.logTrace(
                "Preloading Banking cancelled: " + n.marshal.currentUrl
            ) : n.player.isReturning() ? r() : i())
    };
    var t = function() {
            n.banking && !n.config.Banking.IsExternal && (n.banking.loadView(
                "banking", !0), n.logging.logTrace(
                "Preloading Banking initiated"))
        },
        i = function() {
            n.registration && !n.config.Registration.IsExternal && (n.registration
                .loadView("registration", !0), n.logging.logTrace(
                    "Preloading Registration initiated"))
        },
        r = function() {
            n.forgotdetails && (n.forgotdetails.loadView("forgotdetails", !
                0), n.logging.logTrace(
                "Preloading Forgot Details initiated"))
        }
})(lobby, jQuery);
(function(n) {
    n.preloader.signals = {
        init: function() {
            var t = this;
            t.loadSubscribe();
            n.logging.logDebug("Preloader Signals Loaded")
        },
        loadSubscribe: function() {
            var t = this;
            n.signal.subscribe("marshal.ready", function() {
                    t.loadPublish();
                    n.preloader.preloadStaticPages();
                    n.preloader.preloadLoginSensitivePages();
                    n.preloader.preloadFormsServiceContainer()
                })
                .disposeAfter(1);
            n.signal.subscribe("login.success", function() {
                n.preloader.preloadLoginSensitivePages();
                n.preloader.preloadFormsServiceContainer()
            });
            n.signal.subscribe("logout.success", function() {
                n.preloader.preloadLoginSensitivePages();
                n.preloader.preloadFormsServiceContainer()
            });
            n.signal.subscribe("lobby.banking.form.backToGames",
                function() {
                    n.preloader.preloadFormsServiceContainer()
                });
            n.signal.subscribe(
                "lobby.registration.form.backToGames", function() {
                    n.preloader.preloadFormsServiceContainer()
                })
        },
        loadPublish: function() {}
    };
    n.preloader.signals.init()
})(lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.viewLoader = t.utils.viewLoader || {};
    t.utils.viewLoader.currentView = t.utils.viewLoader.currentView || {};
    t.utils.viewLoader.content = t.utils.viewLoader.content || {};
    t.utils.viewLoader.content.loadView = function(n, i, r) {
        var u = t.marshal.currentUrl;
        n = this.lobbyUrl() + n;
        n = this.addPartial(n, r);
        t.utils.content.getCacheOrAjax(n, t.utils.viewLoader.content.successCallback,
            t.utils.viewLoader.content.errorCallback, {
                successViewName: i,
                currentUrl: u
            })
    };
    t.utils.viewLoader.content.addPartial = function(n, i) {
        return (typeof i == "undefined" || i === !0) && (n = t.utils.trimend(
            n, "/") + "Partial"), n
    };
    t.utils.viewLoader.content.successCallback = function(n, i) {
        t.utils.viewLoader.content.finalizeView(n, i.successViewName, i
            .currentUrl)
    };
    t.utils.viewLoader.content.errorCallback = function(n) {
        t.logging.logWarn("Failed to get content from ajax call: " + n.message)
    };
    t.utils.viewLoader.content.finalizeView = function(n, r, u) {
        if (u === t.marshal.currentUrl) {
            t.spinner.start();
            var f = i("#contentContainer");
            f.hide();
            f.empty();
            f.html(n);
            t.utils.viewLoader.currentView = r;
            i.each(f.siblings(), function(n, t) {
                i(t)
                    .css("display") !== "none" && i(t)
                    .css("display", "none")
            });
            f.css("display", "block");
            t.spinner.stop();
            t.marshal.signals.loadedView(r, u)
        }
    };
    t.utils.viewLoader.content.lobbyUrl = function() {
        return "/" + t.utils.trim(t.config.Core.LobbyRoot + t.config.Core
                .LanguageCode + "/" + t.config.Core.LobbyName, "/") +
            "/"
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.viewLoader = t.utils.viewLoader || {};
    t.utils.viewLoader.externalLink = t.utils.viewLoader.externalLink || {};
    t.utils.viewLoader.externalLink.loadView = function(n, i, r) {
        if (t.utils.isNullorEmpty(r)) t.logging.logDebug(
            "ViewLoader External Link loading: " + n), t.utils.setLocation(
            n, i);
        else {
            var e = i === !0 ? "_blank" : "_self",
                u = "form" + t.utils.guid(),
                f = [];
            f[u] = t.utils.viewLoader.externalLink.getFormElement(u, n,
                e, r);
            document.body.appendChild(f[u]);
            t.logging.logDebug(
                "ViewLoader External Form submitting to: " + n);
            t.utils.submitForm(f[u]);
            document.body.removeChild(f[u])
        }
    };
    t.utils.viewLoader.externalLink.loadViewViaPlayerServiceRedirection =
        function(n, i, r) {
            t.logging.logDebug(
                "ViewLoader External Link loading Via Player Service Redirection: " +
                n);
            t.player.service.redirectToEndpoint(n, i, r)
        };
    t.utils.viewLoader.externalLink.getFormElement = function(n, t, i, r) {
        var o = "",
            u, e, s, f;
        o = r ? "POST" : "GET";
        u = document.createElement("form");
        n && u.setAttribute("id", n);
        i && u.setAttribute("target", i);
        u.setAttribute("method", o);
        u.setAttribute("action", t);
        for (e in r) r.hasOwnProperty(e) && (s = r[e], f = document.createElement(
            "input"), f.setAttribute("name", e), f.setAttribute(
            "value", s), f.setAttribute("type", "hidden"), u.appendChild(
            f));
        return u
    }
})(window, lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.utils = t.utils || {};
    t.utils.viewLoader = t.utils.viewLoader || {};
    t.utils.viewLoader.formsService = t.utils.viewLoader.formsService || {};
    t.utils.viewLoader.formsService.currentForm = null;
    t.utils.viewLoader.formsService.formStack = [];
    t.utils.viewLoader.formsService.queue = null;
    t.utils.viewLoader.formsService.cachableForms = ["Olr", "BingoOlr",
        "PurchaseMethods", "PasswordReset"];
    t.utils.viewLoader.formsService.loadView = function(n, i, u, f, e, s) {
        var h, c, l;
        if (s) {
            if (o()) {
                t.logging.logTrace("Forms Service preloaded for " + e +
                    " cancelled because container is visible");
                return
            }
            if (t.utils.viewLoader.formsService.formStack.length > 0) {
                t.logging.logTrace("Forms Service preloaded for " + e +
                    " cancelled because another form is loading already"
                );
                return
            }
            r(n, i, u, f, e, s)
        } else {
            for (h = !1, c = 0; c < t.utils.viewLoader.formsService.formStack
                .length; c++)
                if (l = t.utils.viewLoader.formsService.formStack[c], l
                    .state !== t.enums.formsServiceRequestState.CANCELLED
                ) {
                    h = l;
                    break
                }
            if (h !== !1) {
                if (h.formName == n) {
                    h.state = t.enums.formsServiceRequestState.ELEVATED;
                    h.currentUrl = t.marshal.currentUrl;
                    t.logging.logTrace("Forms Service for " + e +
                        " cancelled; " + h.viewName + (h.hidden ?
                            " (hidden)" : "") + " elevated");
                    return
                }
                h.state = t.enums.formsServiceRequestState.CANCELLED;
                t.utils.viewLoader.formsService.queue = {
                    formName: n,
                    variables: i,
                    callbackBag: u,
                    options: f,
                    viewName: e,
                    hidden: s
                };
                t.logging.logTrace("Forms Service for " + e +
                    " queued; " + h.viewName + (h.hidden ?
                        " (hidden)" : "") + " cancelled");
                return
            }
            t.logging.logTrace("Forms Service for " + e +
                " loading because no active request found");
            r(n, i, u, f, e, s)
        }
    };
    var r = function(n, r, o, s, h, c) {
            if (t.utils.viewLoader.formsService.currentForm === n && i.inArray(
                    n, t.utils.viewLoader.formsService.cachableForms) > -1 &&
                !c) {
                u();
                t.logging.logInfo("Forms Service form already loaded: " + n +
                    "; just displaying...");
                t.marshal.signals.loadedView(h, t.marshal.currentUrl);
                t.marshal.signals.loadedFormsServiceView(h);
                return
            }
            i(".formsServiceContainer #inject")
                .empty();
            t.logging.logTrace("Forms Service: clearing container");
            c || t.utils.viewLoader.signals.serverLoad(t.marshal.currentUrl);
            r = r || {};
            s = s || [];
            o = o || [];
            var l = e(n, h, c);
            t.utils.viewLoader.formsService.formStack.push(l);
            t.logging.logTrace("Forms Service callback added to stack: " +
                n + (c ? " (hidden)" : ""));
            t.utils.viewLoader.formsService.currentForm = n;
            o.push({
                event: "formRenderedCallback",
                callBack: l
            });
            i(".formsServiceContainer #inject")
                .formsService("getForm", r, n, s, o);
            t.logging.logTrace("Forms Service injected: " + n + (c ?
                " (hidden)" : ""));
            c || f()
        },
        e = function(n, i, r) {
            var f = function() {
                var n = function() {
                    var i, r;
                    for (n.hidden === !0 && n.state !== t.enums.formsServiceRequestState
                        .ELEVATED ? n.state === t.enums.formsServiceRequestState
                        .CANCELLED ? t.logging.logDebug(
                            "Forms Service preloading for " + n.viewName +
                            " cancelled") : t.logging.logInfo(
                            "Forms Service preloading for " + n.viewName +
                            " completed") : (t.logging.logTrace(
                                "Forms Service callback handling display: " +
                                n.formName + (n.hidden ?
                                    " (hidden)" : "") + " (" + n.state +
                                ")"), n.state !== t.enums.formsServiceRequestState
                            .CANCELLED && t.utils.compareCaseInsensitive(
                                n.currentUrl, t.marshal.currentUrl) ?
                            (u(), t.marshal.signals.loadedView(n.viewName,
                                    n.currentUrl), t.marshal.signals
                                .loadedFormsServiceView(n.viewName),
                                t.logging.logInfo(
                                    "Forms Service opened for " + n
                                    .viewName)) : t.logging.logDebug(
                                "Forms Service cancelled for " + n.viewName
                            )), t.utils.viewLoader.formsService.queue !=
                        null && (i = t.utils.viewLoader.formsService
                            .queue, t.utils.viewLoader.formsService
                            .loadView(i.formName, i.variables, i.callbackBag,
                                i.options, i.viewName, i.hidden), t
                            .utils.viewLoader.formsService.queue =
                            null, t.logging.logTrace(
                                "Forms Service callback processing queue: " +
                                i.formName + (i.hidden ?
                                    " (hidden)" : ""))), r = 0; r <
                        t.utils.viewLoader.formsService.formStack.length; r++
                    )
                        if (t.utils.viewLoader.formsService.formStack[
                            r] === n) {
                            t.utils.viewLoader.formsService.formStack
                                .splice(r, 1);
                            break
                        }
                };
                return n
            }();
            return f.state = t.enums.formsServiceRequestState.STANDARD, f.hidden =
                r, f.formName = n, f.viewName = i, f.currentUrl = t.marshal
                .currentUrl, f
        },
        o = function() {
            return i(".formsServiceContainer")
                .is(":visible")
        },
        u = function() {
            i(".formsServiceContainer")
                .siblings()
                .fadeOut(0);
            i(".formsServiceContainer")
                .fadeIn(250);
            f()
        },
        f = function() {
            i(".formsServiceContainer #hiddenOverlay")
                .show(0);
            setTimeout(function() {
                i(".formsServiceContainer #hiddenOverlay")
                    .hide(0)
            }, 500)
        };
    t.utils.viewLoader.formsService.formsClient = function(n, r) {
        r = r || {};
        i(".formsClient")
            .formsService(n, r);
        t.logging.logDebug("Forms Client method run for : " + n)
    }
})(window, lobby, jQuery);
(function(n, t) {
    var i = null;
    t = t || (n.lobby = {});
    t.utils.viewLoader = t.utils.viewLoader || {};
    t.utils.viewLoader.signals = {
        init: function() {
            i = this;
            i.loadSubscribe();
            t.logging.logDebug("Utils View Loader Signals Loaded")
        },
        loadSubscribe: function() {},
        serverLoad: function(n) {
            t.logging.logDebug(
                "View Loader Util loading view from server: " +
                n);
            t.signal.publish("utils.viewloader.serverLoad", n)
        },
        viewLoaded: function(n) {
            t.logging.logDebug(
                "View Loader Util finished loading view from server: " +
                n);
            t.signal.publish("utils.viewloader.viewLoaded", n)
        }
    };
    t.utils.viewLoader.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.tracking = t.tracking || {};
    t.tracking.init = function() {
        var i, r, u, f, e, o = {
            googleAnalyticsTrackingCode: t.config.Core.GoogleAnalyticsTrackingCode,
            lobbyName: t.config.Core.LobbyName,
            languageCode: t.config.Core.LanguageCode,
            bannerTag1: t.utils.isNullorEmpty(i = t.localStorage.get(
                "bannerTag1")) ? n.RequestData.BannerTags.bannerTag1 : i,
            bannerTag2: t.utils.isNullorEmpty(r = t.localStorage.get(
                "bannerTag2")) ? n.RequestData.BannerTags.bannerTag2 : r,
            bannerTag3: t.utils.isNullorEmpty(u = t.localStorage.get(
                "bannerTag3")) ? n.RequestData.BannerTags.bannerTag3 : u,
            bannerTag4: t.utils.isNullorEmpty(f = t.localStorage.get(
                "bannerTag4")) ? n.RequestData.BannerTags.bannerTag4 : f,
            bannerTag5: t.utils.isNullorEmpty(e = t.localStorage.get(
                "bannerTag5")) ? n.RequestData.BannerTags.bannerTag5 : e,
            username: t.utils.isNullorEmpty(t.localStorage.get(
                "username")) ? "" : t.localStorage.get(
                "username"),
            deviceType: t.config.Core.DeviceInfo.DeviceType,
            model: t.config.Core.DeviceInfo.Model,
            isHomeScreen: t.config.Core.DeviceInfo.IsHomeScreen,
            platform: t.config.Core.DeviceInfo.OS,
            platformVersion: t.config.Core.DeviceInfo.OSVersion,
            screenResolutionX: t.config.Core.DeviceInfo.ScreenWidth,
            screenResolutionY: t.config.Core.DeviceInfo.ScreenHeight,
            devicePixelRatio: t.config.Core.DeviceInfo.DevicePixelRatio
        };
        n.TrackingService.init(t.config.Core.EnableTrackingStandard, t.config
            .Core.EnableTrackingGoogle, t.config.Core.TrackingStandardURL,
            o);
        t.logging.logDebug("Tracking Loaded")
    };
    t.tracking.trackEvent = function(i, r) {
        r && !r.username && (r.username = t.utils.isNullorEmpty(t.localStorage
            .get("username")) ? "" : t.localStorage.get(
            "username"));
        typeof r == "undefined" && (r = {
            username: t.utils.isNullorEmpty(t.localStorage.get(
                "username")) ? "" : t.localStorage.get(
                "username")
        });
        t.logging.logTrace(r, "Tracked event: " + i);
        n.TrackingService.trackEvent(i, r)
    };
    t.tracking.trackAddedToHomeScreen = function() {
        t.logging.logTrace("Checking ishomescreen value");
        t.config.Core.DeviceInfo.IsHomeScreen && !t.localStorage.get(
            "AddedToHomeScreenTracked") && (n.TrackingService.trackEvent(
                t.enums.trackingEvents.ADDEDTOHOMESCREEN), t.localStorage
            .set("AddedToHomeScreenTracked", "1"))
    };
    t.tracking.trackInitialLoad = function() {
        t.sessionStorage.get("LobbyLaunchedTracked") || (n.TrackingService
            .trackEvent(t.enums.trackingEvents.LOBBYLAUNCHED), t.sessionStorage
            .set("LobbyLaunchedTracked", "1"));
        t.tracking.trackAddedToHomeScreen()
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.tracking = t.tracking || {};
    t.tracking.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Tracking Signals Loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("player.bannertags.processed",
                    function() {
                        t.tracking.init()
                    })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    t.spinner.stop();
                    t.tracking.trackInitialLoad()
                })
                .disposeAfter(1)
        }
    };
    t.tracking.signals.init()
})(window, lobby);
(function(n, t, i) {
    n.TrackingService = n.TrackingService || {};
    n.TrackingService.providers = n.TrackingService.providers || [];
    n.TrackingService.defaultData = n.TrackingService.defaultData || {};
    n.TrackingService.events = {
        LobbyLaunched: {
            Name: "Lobby/LobbyLaunched",
            Level: "Tracking",
            Code: 1
        },
        AddedToHomeScreen: {
            Name: "Lobby/AddedToHomeScreen",
            Level: "Tracking",
            Code: 2
        },
        RegistrationPage1: {
            Name: "Lobby/RegistrationPage1",
            Level: "Tracking",
            Code: 3
        },
        RegistrationPage2: {
            Name: "Lobby/RegistrationPage2",
            Level: "Tracking",
            Code: 4
        },
        RegistrationPage3: {
            Name: "Lobby/RegistrationPage3",
            Level: "Tracking",
            Code: 5
        },
        RegistrationPage4: {
            Name: "Lobby/RegistrationPage4",
            Level: "Tracking",
            Code: 6
        },
        RegistrationSuccessful: {
            Name: "Lobby/RegistrationSuccessful",
            Level: "Tracking",
            Code: 7
        },
        FirstGameLaunched: {
            Name: "Lobby/FirstGameLaunched",
            Level: "Tracking",
            Code: 8
        },
        BankingOpen: {
            Name: "Lobby/BankingOpen",
            Level: "Tracking",
            Code: 9
        },
        DepositSuccessful: {
            Name: "Lobby/DepositSuccessful",
            Level: "Tracking",
            Code: 10
        },
        FetchGamesFailed: {
            Name: "Lobby/FetchGamesFailed",
            Level: "Error",
            Code: 1
        },
        FetchRegistrationFailed: {
            Name: "Lobby/FetchRegistrationFailed",
            Level: "Error",
            Code: 2
        },
        FetchBankingFailed: {
            Name: "Lobby/FetchBankingFailed",
            Level: "Error",
            Code: 3
        },
        FetchMyAccountFailed: {
            Name: "Lobby/FetchMyAccountFailed",
            Level: "Error",
            Code: 4
        },
        FetchHelpFailed: {
            Name: "Lobby/FetchHelpFailed",
            Level: "Error",
            Code: 5
        },
        LoginError: {
            Name: "Lobby/LoginError",
            Level: "Warning",
            Code: 0
        },
        LoginSuccess: {
            Name: "Lobby/LoginSuccess",
            Level: "Tracking",
            Code: 0
        },
        PrivateBrowsing: {
            Name: "Lobby/PrivateBrowsing",
            Level: "Warning",
            Code: 0
        },
        DeviceInformation: {
            Name: "DeviceManager/DeviceInfoLogging",
            Level: "Warning",
            Code: 0
        },
        PlayerExclusionOpen: {
            Name: "Lobby/PlayerExclusionOpen",
            Level: "Tracking",
            Code: 11
        },
        PostLoginError: {
            Name: "Lobby/PostLoginError",
            Level: "Error",
            Code: 12
        },
        LogoutError: {
            Name: "Lobby/LogoutError",
            Level: "Error",
            Code: 13
        },
        MarketError: {
            Name: "Lobby/MarketError",
            Level: "Error",
            Code: 14
        },
        DepositLimitsOpen: {
            Name: "Lobby/DepositLimitsOpen",
            Level: "Tracking",
            Code: 15
        },
        GamesOpen: {
            Name: "Lobby/GamesOpen",
            Level: "Tracking",
            Code: 0
        },
        PromotionsOpen: {
            Name: "Lobby/PromotionsOpen",
            Level: "Tracking",
            Code: 0
        },
        HelpOpen: {
            Name: "Lobby/HelpOpen",
            Level: "Tracking",
            Code: 0
        },
        MyAccountOpen: {
            Name: "Lobby/MyAccountOpen",
            Level: "Tracking",
            Code: 0
        },
        GamesLaunched: {
            Name: "Lobby/GamesLaunched/",
            Level: "Tracking",
            Code: 0
        },
        DepositLaunched: {
            Name: "Lobby/Banking/DepositLaunched",
            Level: "Tracking",
            Code: 0
        },
        WithdrawLaunched: {
            Name: "Lobby/Banking/WithdrawLaunched",
            Level: "Tracking",
            Code: 0
        },
        WithdrawSuccessful: {
            Name: "Lobby/WithdrawSuccessful",
            Level: "Tracking",
            Code: 0
        },
        WithdrawReversed: {
            Name: "Lobby/Banking/WithdrawReversed",
            Level: "Tracking",
            Code: 0
        },
        ForgotPasswordOpen: {
            Name: "Lobby/ForgotPasswordOpen",
            Level: "Tracking",
            Code: 0
        },
        FetchForgotPasswordFailed: {
            Name: "Lobby/FetchForgotPasswordFailed ",
            Level: "Tracking",
            Code: 0
        },
        FetchAllGameDetailsFailed: {
            Name: "Lobby/FetchAllGameDetailsFailed",
            Level: "Error",
            Code: 6
        },
        FetchPlayerExclusionFailed: {
            Name: "Lobby/FetchPlayerExclusionFailed",
            Level: "Error",
            Code: 7
        },
        FetchDepositLimitsFailed: {
            Name: "Lobby/FetchDepositLimitsFailed",
            Level: "Error",
            Code: 8
        },
        FetchResponsibleGamingToolsFailed: {
            Name: "Lobby/FetchResponsibleGamingToolsFailed",
            Level: "Error",
            Code: 8
        },
        ChangePasswordOpen: {
            Name: "Lobby/ChangePasswordOpen",
            Level: "Tracking",
            Code: 0
        },
        FetchChangePasswordFailed: {
            Name: "Lobby/FetchChangePasswordFailed",
            Level: "Error",
            Code: 0
        },
        PasswordChangedSuccessful: {
            Name: "Lobby/PasswordChangedSuccessful",
            Level: "Tracking",
            Code: 0
        },
        FetchBingoGamesFailed: {
            Name: "Lobby/Bingo/FetchBingoGamesFailed",
            Level: "Info",
            Code: 0
        },
        FetchBankingWithdrawalFailed: {
            Name: "Lobby/FetchBankingWithdrawalFailed",
            Level: "Error",
            Code: 3
        },
        FetchBankingDepositFailed: {
            Name: "Lobby/FetchBankingDepositFailed",
            Level: "Error",
            Code: 3
        },
        BrandMigration: {
            Name: "Lobby/BrandMigration",
            Level: "Tracking",
            Code: 0
        },
        ResponsibleGamingToolsOpen: {
            Name: "Lobby/ResponsibleGamingToolsOpen",
            Level: "Tracking",
            Code: 0
        }
    };
    n.TrackingService.init = function(t, i, r, u) {
        var f, e;
        n.TrackingService.defaultData = u;
        t && (f = n.TrackingService.StandardProvider(r), n.TrackingService
            .providers.push(f));
        i && (e = n.TrackingService.GoogleAnalyticsProvider(), n.TrackingService
            .providers.push(e))
    };
    n.TrackingService.trackEvent = function(t, i) {
        var u, r, e, f;
        for (i = i || {}, u = n.TrackingService.events[t], u = {
            Name: i.Name || u.Name,
            Code: i.Code || u.Code,
            Level: i.Level || u.Level
        }, r = n.TrackingService.defaultData, e = {
            lobbyName: i.lobbyName || r.lobbyName || "",
            languageCode: i.languageCode || r.languageCode || "",
            username: i.username || r.username || "",
            uniqueUserID: i.uniqueUserID || r.uniqueUserID || "",
            bannerTag1: i.bannerTag1 || r.bannerTag1 || "",
            bannerTag2: i.bannerTag2 || r.bannerTag2 || "",
            bannerTag3: i.bannerTag3 || r.bannerTag3 || "",
            bannerTag4: i.bannerTag4 || r.bannerTag4 || "",
            bannerTag5: i.bannerTag5 || r.bannerTag5 || "",
            deviceType: i.deviceType || r.deviceType || "",
            model: i.model || r.model || "",
            platform: i.platform || r.platform || "",
            platformVersion: i.platformVersion || r.platformVersion ||
                "",
            screenResolutionX: i.screenResolutionX || r.screenResolutionX ||
                "",
            screenResolutionY: i.screenResolutionY || r.screenResolutionY ||
                "",
            devicePixelRatio: i.devicePixelRatio || r.devicePixelRatio ||
                "",
            gameName: i.gameName || r.gameName || "",
            moduleId: i.moduleId || r.moduleId || "",
            clientId: i.clientId || r.clientId || ""
        }, f = 0; f < n.TrackingService.providers.length; f++) n.TrackingService
            .providers[f].trackEvent(u, e)
    };
    n.TrackingService.GoogleAnalyticsProvider = function() {
        var i = "",
            t = {
                DeviceType: "dimension1",
                HomeScreen: "dimension2",
                LobbyName: "dimension3",
                ScreenResolution: "dimension4",
                Orientation: "dimension5",
                Model: "dimension6"
            },
            r = function(n) {
                return n.screenResolutionY + "x" + n.screenResolutionX
            },
            u = function(n) {
                return "/TrackedEvent/" + n
            },
            s = function(n) {
                return n.platform + " " + n.platformVersion
            },
            f = function() {
                if (!n.hasOwnProperty("orientation")) return "NONE";
                var t = n.orientation;
                switch (n.orientation) {
                    case 0:
                        t = "PORTRAIT";
                        break;
                    case 90:
                        t = "LANDSCAPE";
                        break;
                    case -90:
                        t = "LANDSCAPE"
                }
                return t
            },
            e = function() {
                var u = n.TrackingService.defaultData;
                i = u.googleAnalyticsTrackingCode,
                    function(n, t, i, r, u, f, e) {
                        n.GoogleAnalyticsObject = u;
                        n[u] = n[u] || function() {
                            (n[u].q = n[u].q || [])
                            .push(arguments)
                        };
                        n[u].l = 1 * new Date;
                        f = t.createElement(i);
                        e = t.getElementsByTagName(i)[0];
                        f.async = 1;
                        f.src = r;
                        e.parentNode.insertBefore(f, e)
                    }(window, document, "script",
                        "//www.google-analytics.com/analytics.js", "ga"
                    );
                n.ga("create", i, "auto");
                n.ga("set", t.DeviceType, u.deviceType);
                n.ga("set", t.Model, u.model);
                n.ga("set", t.HomeScreen, u.isHomeScreen);
                n.ga("set", t.LobbyName, u.lobbyName);
                n.ga("set", t.ScreenResolution, r(u))
            },
            o = function(i, r) {
                if (i.Level === "Tracking") {
                    var e = {};
                    e[t.Orientation] = f();
                    r.username && n.ga("set", "&uid", r.username);
                    n.ga("send", "pageview", u(i.Name), e)
                }
            };
        return e(), {
            trackEvent: o
        }
    };
    n.TrackingService.StandardProvider = function(n) {
        var r = n,
            u = function(n) {
                i.set("TrackingService_GUID", n)
            },
            f = function() {
                return i.get("TrackingService_GUID")
            },
            e = function(n, i) {
                var e = {
                        lobbyName: i.lobbyName,
                        languageCode: i.languageCode,
                        eventName: n.Name,
                        eventCode: n.Code,
                        eventLevel: n.Level,
                        trackingGuid: f(),
                        username: n.Username || i.username,
                        uniqueUserID: i.uniqueUserID,
                        bannerTag1: i.bannerTag1,
                        bannerTag2: i.bannerTag2,
                        bannerTag3: i.bannerTag3,
                        bannerTag4: i.bannerTag4,
                        bannerTag5: i.bannerTag5,
                        deviceType: i.deviceType,
                        platform: i.platform,
                        platformVersion: i.platformVersion,
                        screenResolutionX: i.screenResolutionX,
                        screenResolutionY: i.screenResolutionY,
                        devicePixelRatio: i.devicePixelRatio,
                        gameName: i.gameName,
                        moduleId: i.moduleId,
                        clientId: i.clientId
                    },
                    o = r;
                t.ajax({
                    url: o,
                    type: "POST",
                    data: e || "",
                    success: function(n) {
                        n.TrackingGuid && u(n.TrackingGuid)
                    }
                })
            };
        return {
            trackEvent: e
        }
    }
})(window, jQuery, locache);
(function(n, t) {
    n = n || (global.lobby = {});
    n.navigation = n.navigation || {};
    n.navigation.currentView = "";
    n.navigation.init = function() {
        n.logging.logDebug("Navigation Loaded");
        var i = n.navigation.sanitizeViewString(n.config.InitialView);
        n.navigation.navClick(t(".lobby-nav li." + i), i)
    };
    n.navigation.navClick = function(t, i) {
        n.logging.logTrace("Navigation icon click handled: " + i);
        n.navigation.view.changeClass(t);
        n.navigation.currentView = i
    };
    n.navigation.navigationChange = function(t) {
        n.logging.logTrace("clicked navigation button: " + t);
        (typeof t == "undefined" || t === null) && (t = n.config.InitialView);
        n.navigation.currentView !== t && (n.navigation.currentView = t,
            n.navigation.signals.navigationButtonClick(t))
    };
    n.navigation.sanitizeViewString = function(n) {
        return n === "myaccount" && (n = "account"), n
    }
})(lobby, jQuery);
(function(n, t) {
    var i = null;
    n.navigation.signals = {
        init: function() {
            i = this;
            i.loadSubscribe();
            n.logging.logDebug("Navigation Signals Loaded")
        },
        loadSubscribe: function() {
            n.signal.subscribe("marshal.viewLoaded.*", function(i) {
                var r = n.navigation.sanitizeViewString(i.view);
                n.navigation.navClick(t(".lobby-nav li." +
                    r), r);
                n.navigation.view.showNav()
            });
            n.signal.subscribe("marshal.formsServiceviewLoaded.*",
                function() {
                    n.navigation.view.hideNav()
                });
            n.signal.subscribe("marshal.viewLoaded.games.*",
                function() {
                    n.navigation.navClick(t(
                        ".lobby-nav li.games"), "games");
                    n.navigation.view.showNav()
                });
            n.signal.subscribe("lobby.start", function() {
                    i.loadPublish();
                    n.navigation.init()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {
            t(".lobby-nav li")
                .touchclick({
                    callback: function() {
                        var i = t(this)
                            .attr("class"),
                            r = i.replace("selected", "")
                            .trim();
                        n.navigation.navigationChange(r)
                    },
                    preventDefault: n.ui.useTouchClickDoubleClick()
                })
        },
        navigationButtonClick: function(t) {
            n.signal.publish(t + ".navigation.button.click", t)
        }
    };
    n.navigation.signals.init()
})(lobby, jQuery);
(function(n, t) {
    n = n || (global.lobby = {});
    n.navigation = n.navigation || {};
    n.navigation.view = n.navigation.view || {};
    n.navigation.view.changeClass = function(n) {
        t(".lobby-nav li")
            .removeClass("selected");
        t(n)
            .addClass("selected")
    };
    n.navigation.view.clearSelected = function() {
        t(".lobby-nav li")
            .removeClass("selected");
        n.logging.logTrace("Navigation icon cleared")
    };
    n.navigation.view.hideNav = function() {
        t(".lobby-nav")
            .is(":visible") && (t(".lobby-nav")
                .hide(), n.ui.addLayoutClass("no-nav"), n.ui.scroller &&
                n.ui.scroller.refresh());
        n.logging.logTrace("Navigation bar hidden")
    };
    n.navigation.view.showNav = function() {
        t(".lobby-nav")
            .is(":hidden") && (t(".lobby-nav")
                .show(), n.ui.removeLayoutClass("no-nav"));
        n.logging.logTrace("Navigation bar shown")
    };
    n.navigation.view.hidePromotions = function() {
        t(".lobby-nav")
            .is(":visible") && t(".lobby-nav .promotions")
            .is(":visible") && (t(".lobby-nav .promotions")
                .hide(), n.ui.addLayoutClass("no-promo"));
        n.logging.logTrace("Promotions btn hidden")
    };
    n.navigation.view.showPromotions = function() {
        t(".lobby-nav .promotions")
            .is(":hidden") && (t(".lobby-nav .promotions")
                .show(), n.ui.removeLayoutClass("no-promo"));
        n.logging.logTrace("Promotions btn shown")
    }
})(lobby, jQuery);
(function(n, t) {
    n = n || (global.lobby = {});
    n.header = n.header || {};
    var i, r;
    n.header.init = function() {
        n.header.view.setupPromotionTouchclick();
        n.header.refresh();
        n.header.startWinRealMoneyToggle();
        n.logging.logDebug("Header Loaded")
    };
    n.header.refresh = function() {
        n.player.isValidLogin(n.header.refresh, !0) === !0 ? t(
                "#headerPromotionsMessage")
            .is(":visible") ? t("#headerPromotionsMessage")
            .fadeOut(400, n.header.updateNameAndBalance()) : n.header.updateNameAndBalance() :
            n.header.view.cleanHeader();
        n.logging.logDebug("Header Refreshed")
    };
    n.header.updateNameAndBalance = function() {
        n.logging.logTrace("Update Name and Balance called");
        n.header.refreshPlayerName();
        n.player.refreshBalance()
    };
    n.header.refreshPlayerName = function() {
        n.player.isPractice() ? n.header.view.addPlayerName(n.languageStringProvider
            .getString("Account.PracticePlay")) : n.utils.isNullorEmpty(
            n.player.getFirstName()) || n.header.view.addPlayerName(
            n.player.getFirstName())
    };
    n.header.startWinRealMoneyToggle = function() {
        if (n.header.stopWinRealMoneyToggle(), n.player.isPractice()) {
            n.logging.logTrace("Starting Win Real Money toggle");
            var t, u = null;
            t = function() {
                n.header.view.showWinRealMoney();
                r = setTimeout(u, 9e3)
            };
            u = function() {
                n.header.view.hideWinRealMoney();
                i = setTimeout(t, 5e3)
            };
            t()
        }
    };
    n.header.stopWinRealMoneyToggle = function() {
        n.logging.logTrace("Stopping Win Real Money toggle");
        clearTimeout(i);
        clearTimeout(r);
        n.header.view.hideWinRealMoney()
    }
})(lobby, jQuery);
(function(n) {
    n.header.signals = {
        init: function() {
            var t = this;
            t.loadSubscribe();
            n.logging.logDebug("Header Signals Loaded")
        },
        loadSubscribe: function() {
            var t = this;
            n.signal.subscribe("lobby.loaded", function() {
                    t.loadPublish();
                    n.header.init()
                })
                .disposeAfter(1);
            n.signal.subscribe("login.success", function() {
                n.header.refresh();
                n.header.startWinRealMoneyToggle()
            });
            n.signal.subscribe("logout.success", function() {
                n.header.view.cleanHeader();
                n.header.stopWinRealMoneyToggle()
            });
            n.signal.subscribe("login.start", function() {
                n.header.view.cleanHeader();
                n.header.stopWinRealMoneyToggle()
            });
            n.signal.subscribe("marshal.viewLoaded.banking",
                function() {
                    n.header.refresh()
                });
            n.signal.subscribe("lobby.banking.form.processed",
                function() {
                    n.header.refresh()
                });
            n.signal.subscribe("player.balanceReturned", function(t) {
                n.header.view.hidePromotionMessage();
                n.header.refreshPlayerName();
                n.header.view.addPlayerBalance(t.balance.Total)
            });
            n.signal.subscribe("termsAndConditions.accepted",
                function() {
                    n.header.refresh()
                });
            n.signal.subscribe("marshal.viewLoaded.*", function(t) {
                var i = n.navigation.sanitizeViewString(t.view);
                i === "registration" ? n.header.view.hidePromotionMessage() :
                    n.header.view.showPromotionMessage()
            });
            n.signal.subscribe("marshal.viewLoaded.games.*",
                function(t) {
                    var i = n.navigation.sanitizeViewString(t.view);
                    i === "registration" ? n.header.view.hidePromotionMessage() :
                        n.header.view.showPromotionMessage()
                })
        },
        loadPublish: function() {},
        promotionsClicked: function() {
            n.signal.publish("header.promotions.click")
        }
    };
    n.header.signals.init()
})(lobby);
(function(n, t) {
    n = n || (global.lobby = {});
    n.header = n.header || {};
    n.header.view = n.header.view || {};
    var i = !1;
    n.header.view.container = "#lobbyHeader";
    n.header.view.cleanHeader = function() {
        n.logging.logDebug("Header is being cleared");
        t("#playerName", this.container)
            .text("");
        t("#playerBalance", this.container)
            .text("");
        n.header.view.showPromotionMessage()
    };
    n.header.view.addPlayerName = function(i) {
        n.logging.logTrace(i, "Add Player Name called");
        t("#playerName", this.container)
            .text(i)
    };
    n.header.view.addPlayerBalance = function(i) {
        n.logging.logTrace(i, "Add Player Balance called");
        t("#playerBalance", this.container)
            .text(i)
    };
    n.header.view.showPromotionMessage = function() {
        t("#playerName")
            .is(":visible") || t("#playerBalance")
            .is(":visible") || (t("#headerPromotionsMessage")
                .length > 0 && t("#headerPromotionsMessage > img")
                .attr("src")
                .length > 0 ? t("#headerPromotionsMessage")
                .show() : t("#headerPromotionsMessage")
                .hide())
    };
    n.header.view.hidePromotionMessage = function() {
        t("#headerPromotionsMessage")
            .is(":visible") && t("#headerPromotionsMessage")
            .hide()
    };
    n.header.view.setupPromotionTouchclick = function() {
        t("#headerPromotionsMessage > img")
            .touchclick({
                callback: function() {
                    n.logging.logTrace(
                        "Header Promotions Message clicked"
                    );
                    n.header.signals.promotionsClicked()
                },
                preventDefault: n.ui.useTouchClickDoubleClick()
            })
    };
    n.header.view.showWinRealMoney = function() {
        n.logging.logTrace("Show Win Real Money");
        t("#winRealMoney")
            .removeClass("hide");
        t("#winRealMoney")
            .addClass("show");
        n.header.view.setupWinRealMoneyTouchclick()
    };
    n.header.view.hideWinRealMoney = function() {
        n.logging.logTrace("Hide Win Real Money");
        t("#winRealMoney")
            .removeClass("show");
        t("#winRealMoney")
            .addClass("hide")
    };
    n.header.view.setupWinRealMoneyTouchclick = function() {
        i || (t("#winRealMoney")
            .touchclick({
                callback: function() {
                    n.logging.logTrace(
                        "Win Real Money banner clicked"
                    );
                    n.registration ? n.player.logout(
                        "Registration") : n.player.logout(
                        "Login")
                },
                preventDefault: n.ui.useTouchClickDoubleClick()
            }), i = !0, n.logging.logTrace(
                "Created Win Real Money banner touchclick"))
    }
})(lobby, jQuery);

function addBTags(n) {
    var i = findBTags(),
        t = [];
    $.each(i, function(n, i) {
        var r = i.key.replace("bannerTag", "btag");
        t.push({
            Name: r,
            Val: i.val.replace(/^\"|\"$/gi, "")
        })
    });
    n.BTags = t
}

function findBTags() {
    var i = function() {
            if (typeof lobbyConfig != "undefined" && lobbyConfig &&
                lobbyConfig.LobbyName) return lobbyConfig.LobbyName;
            var n = location.search.match(/lobbyname=([^&]+)/i);
            return n && n.length > 0 ? n[1] : null
        },
        t = i();
    if (!t) return [];
    var r = function() {
            var u = ".*?" + t + "\\.(lobby\\.|)(bannerTag\\d)",
                f = new RegExp(u, "gi"),
                e = new RegExp(".*?" + t + "\\.(lobby\\.|)", "gi"),
                n, i = [],
                r;
            for (n in localStorage) localStorage.hasOwnProperty(n) && n.match(
                f) && (r = localStorage.getItem(n), i.push({
                key: n.replace(e, ""),
                val: r
            }));
            return i
        },
        u = function() {
            var r = [],
                n = location.search.match(/bannerTag\d=([^&]+)/gi),
                t, i;
            if (n && n.length > 0)
                for (t = 0; t < n.length; t++) i = n[t].split("="), r.push({
                    key: decodeURIComponent(i[0]),
                    val: decodeURIComponent(i[1])
                });
            return r
        },
        n = u();
    return n && n.length === 0 && (n = r()), n
}
var PTRMF = PTRMF || {};
PTRMF.namespace = function(n) {
    var t = n.split("."),
        r = PTRMF,
        i;
    for (t[0] === "PTRMF" && (t = t.slice(1)), i = 0; i < t.length; i++)
        typeof r[t[i]] == "undefined" && (r[t[i]] = {}), r = r[t[i]];
    return r
};
PTRMF.namespace("forms");
PTRMF.namespace("forms.utils")
    .getUTCDate = function(n) {
        return Date.UTC(n.getFullYear(), n.getMonth(), n.getDay(), n.getHours(),
            n.getMinutes(), n.getSeconds(), n.getMilliseconds())
    };
PTRMF.namespace("metrics");
PTRMF.metrics = function() {
    var n = {},
        i = [],
        r = {},
        t = {},
        o = 5e3,
        u, f = function(n) {
            var i = [],
                t;
            for (t in n) i.push({
                Key: t,
                Value: n[t]
            });
            return i
        },
        s = function() {
            if ($.isEmptyObject(n) && i.length === 0 && $.isEmptyObject(r)) {
                u();
                return
            }
            var t = {
                    Counts: f(n),
                    Latencies: i,
                    Gauges: f(r)
                },
                e = PTRMF.services.values.sessionBag.serviceUrl +
                "/tracking/ClientMetrics?sid=" + (PTRMF.services.values.sessionResponseInfo ?
                    PTRMF.services.values.sessionResponseInfo.SessionId :
                    "");
            $.ajax({
                url: e,
                data: {
                    metrics: JSON.stringify(t)
                },
                type: "POST",
                dataType: "json",
                complete: function() {
                    u()
                }
            });
            n = {};
            i = [];
            r = {}
        };
    u = function() {
        setTimeout(function() {
            s()
        }, o)
    };
    var h = function(t, i) {
            i = i || 1;
            n[t] ? n[t] += i : n[t] = i
        },
        e = function(n, t) {
            i.push({
                Key: n,
                Value: t
            })
        },
        c = function(n, t) {
            r[n] = t
        },
        l = function(n) {
            t[n] = new Date
        },
        a = function(n) {
            if (t[n]) {
                var i = new Date - t[n];
                e(n, i);
                delete t[n]
            }
        },
        v = function(n) {
            return t.hasOwnProperty(n)
        };
    return u(), {
        logCount: h,
        logLatency: e,
        logGauge: c,
        startTimer: l,
        endTimer: a,
        hasTimer: v
    }
}();
PTRMF.namespace("forms.templates")
    .addresslookup =
    '<fieldset fsiid="${IId}" fstype="${Type}" class="addressLookup" min="${Min}" max="${Max}" regex="${RX}" input="${AdditionalData.PostalCodeInputIid}" addressOutput="${AdditionalData.AddressOutputIid}" townOutput="${AdditionalData.CityOutputIid}" valUrl mode="numeric" countryInput="${AdditionalData.CountryIid}" visibleCountries="${AdditionalData.VisibleForCountries}">     <legend>${AdditionalData.HouseNumberText}<\/legend>     <div class="wrapper fullwidth">         <input autocomplete="off" autocorrect="off" autocapitalization="off" type="text" tabindex="${PTRMF.services.values.getNextTabIndex}"/>         <p class="valicon"><\/p>     <\/div>          {{each(i, errorMessage) Err.split(";")}}         <span>${errorMessage}<\/span>     {{/each}}          <br/>     <span class="button">${AdditionalData.ButtonText}<\/span>     <section class="addressFailure">         <section class="nobg" id="messageText">             <span class="icon failureIcon"><\/span>             <p class="failure">${AdditionalData.ServerError}<\/p>         <\/section>     <\/section> <\/fieldset>';
PTRMF.namespace("forms.templates")
    .buttongroup =
    '<fieldset fsIid="${IId}" fsVal="${Value}" class="buttonGroup bypassValidation" {{if Min > 0}}min="${Min}"{{/if}} {{if Max > 0}}max="${Max}"{{/if}} {{if RX}}regex="${RX}"{{/if}}>     {{each(i, dependency) Dependencies}}     <input type="hidden"            control-attribute="${dependency.ControlAttribute}"            control-name="${dependency.ControlName}"            control-value="${dependency.ControlValue}"            dependant-control-attribute="${dependency.DependantControlAttribute}"            dependant-control-name="${dependency.DependantControlName}"            dependant-control-value="${dependency.DependantControlValue}" />     {{/each}}     <legend>${Disp}<\/legend>     {{html PTRMF.controls.controlFactory.getChildrenHtml(Children)}}     <span class="error">${Err}<\/span>     <span class="serverError"><\/span> <\/fieldset>';
PTRMF.namespace("forms.templates")
    .checkbox =
    '<fieldset fsIid="${IId}" fsVal="${AdditionalData["default"] ? true : false}" class="checkbox">     <div class="wrapper-checkbox">         <div class="wrapper">           {{each(i, dependency) Dependencies}}           <input type="hidden"                  control-attribute="${dependency.ControlAttribute}"                  control-name="${dependency.ControlName}"                  control-value="${dependency.ControlValue}"                  dependant-control-attribute="${dependency.DependantControlAttribute}"                  dependant-control-name="${dependency.DependantControlName}"                  dependant-control-value="${dependency.DependantControlValue}" />           {{/each}}              <input type="checkbox" id="${IId}" mode="${Mode}" readonly="readonly" tabindex="${PTRMF.services.values.getNextTabIndex}"              ${AdditionalData["default"]}             {{if (Mand)}}                    required             {{/if}}                 />         <\/div>     <\/div>     {{html HtmlStr}} <\/fieldset>';
PTRMF.namespace("forms.templates")
    .checklist =
    '<fieldset fsIid="${IId}"      {{if ((Value.length == 0) && (LookUps.length > 0))}}         fsVal     {{else}}         fsVal="${Value}"     {{/if}}     {{if LookUps.length <= 0}}         class="disabled"     {{/if}}     {{if (Mand)}}       required="1"     {{else}}       required="0"     {{/if}}     {{if (AdditionalData)}}       {{if (AdditionalData.Preset)}}         data-preticked="${AdditionalData.Preset}"       {{else}}         data-preticked       {{/if}}       {{if (AdditionalData.Disabled)}}         data-disabled="${AdditionalData.Disabled}"       {{else}}         data-disabled       {{/if}}     {{else}}       data-preticked       data-disabled     {{/if}}>      <legend>${Disp}<\/legend>      <div class="wrapper checklist">         <div class="tickBox" data-selected="0">           <div><\/div>           <span>${AdditionalData.SelectAllText}<\/span>         <\/div>         <ul>             {{if LookUps.length > 0}}             {{each(i, lookup) LookUps}}             <li data-value="${lookup.Val}">               <div class="tickBox" data-selected="0">                   <div>                       <div class="overlay"><\/div>                   <\/div>               <\/div>                 ${lookup.Name}             <\/li>             {{/each}}             {{/if}}         <\/ul>      <\/div>   <span>${Err}<\/span> <\/fieldset> ';
PTRMF.namespace("forms.templates")
    .confirmationmessage =
    '<section class="${Mode} confirmationMessage">   <section class="nobg" id="${Name}">     <span class="icon ${Mode}Icon" />     <p class="${Mode}">${Disp}<\/p>   <\/section> <\/section> ';
PTRMF.namespace("forms.templates")
    .date =
    '<fieldset fsIid="${IId}" fsVal="${Value}" fsType="date" mode="${Mode}" {{if Mode == "cardexpiry"}}           class="monthyear"> {{else}}           max="${Max}"     {{if Mode == "monthyear"}}       class="monthyear">     {{else}}       class="dateofbirth">     {{/if}} {{/if}}   <legend>     ${Disp}   <\/legend>   <div class="wrapper">     {{if Mode !== "cardexpiry"}}     {{if Mode !== "monthyear"}}     <select fsType="date_day" tabindex="${PTRMF.services.values.getNextTabIndex}">       <option value=""><\/option>       {{each(i, lookup) LookUps}}        {{if LookUps[i].Val.match(/^[0-9]*$/)}}       <option value="${lookup.Val}">${lookup.Name}<\/option>       {{/if}}       {{/each}}     <\/select>     {{/if}}     <select fsType="date_month" tabindex="${PTRMF.services.values.getNextTabIndex}">       <option value=""><\/option>       {{each(i, lookup) LookUps}}        {{if !LookUps[i].Val.match(/^[0-9]*$/)}}       <option value="${i-31}">${lookup.Name}<\/option>       {{/if}}       {{/each}}     <\/select>     {{else}}     <select fsType="date_month" tabindex="${PTRMF.services.values.getNextTabIndex}">       <option value=""><\/option>       {{each(i, lookup) Months}}        <option value="${Months[i]}">${Months[i]}<\/option>       {{/each}}     <\/select>     {{/if}}     <select fsType="date_year" tabindex="${PTRMF.services.values.getNextTabIndex}">       <option value=""><\/option>       {{each(i, lookup) Years}}        <option value="${Years[i]}">${Years[i]}<\/option>       {{/each}}     <\/select>   <\/div>   <span>${Err}<\/span>   <span class="serverError"><\/span> <\/fieldset> ';
PTRMF.namespace("forms.templates")
    .displaybox =
    '<section class="displayBox" id="${IId}">     <p>${Disp}<\/p>     <p class="displayBoxOutput">${Value}<\/p>     <br /> <\/section>';
PTRMF.namespace("forms.templates")
    .header = '<header fsiid="${IId}">${Disp}<\/header>';
PTRMF.namespace("forms.templates")
    .hidden = '<input type="hidden" fsIid="${IId}" fsVal="${Value}"/>';
PTRMF.namespace("forms.templates")
    .hiddentracker =
    '<div style="display: none;">   <form id="${IId}_form" action="${LookupUrl}" method="${Disp}" target="${IId}_iframe">     {{each(i, lookup) LookUps}}       <input type="hidden" name="${lookup.Name}" value="${lookup.Val}" />     {{/each}}     <input type="submit" value="submit" />   <\/form>   <iframe name="${IId}_iframe" src="about:blank">   <\/iframe> <\/div>';
PTRMF.namespace("forms.templates")
    .inputbox =
    '{{if (Mode == "password")}} <div> {{/if}}   <fieldset fsIid="${IId}" fsVal="${Value}" fsType="${Type}" mode="${Mode}" min="${Min}" max="${Max}" regex="${RX}" valUrl="${ValUrl}"   {{if Mode == "address"}}     class="address"   {{/if}}     >     <legend>${Disp}<\/legend>     <div class="wrapper{{if ((Max) && (Max >= 20)) }} fullwidth{{/if}}">       <input id="${IId}" value="${PTRMF.controls.controlFactory.formatFormInputValue(Mode, Value)}" line="1" tabindex="${PTRMF.services.values.getNextTabIndex}" maxlength="${Max}"              autocomplete="off" autocorrect="off" autocapitalization="off"        {{if (Max < 20) }}         size="${Max}"       {{/if}}              {{if (Mode == "password")}}              type="password"       {{else}}            {{if (Mode == "email")}}                 type="email"           {{else}}                  type="text"               {{/if}}       {{/if}}           {{if (Disable)}}             disabled         {{/if}}          {{if (Mand)}}               required="required"        {{/if}}         {{if ImgUrl}}         placeholder="${ImgUrl}"       {{/if}}              />       {{if Mode == "address"}}         <input type="text" line="2" maxlength="${Max}" value="${PTRMF.controls.controlFactory.formatFormInputValue(Mode, Value, 2)}" tabindex="${PTRMF.services.values.getNextTabIndex}" class="fullwidth" autocomplete="off" autocorrect="off" autocapitalization="off" {{if (Mand)}} required="required" {{/if}} />       {{/if}}       <p class="valicon"><\/p>     <\/div>      <span>${Err}<\/span>     <span class="serverError"><\/span>   <\/fieldset>   {{if (Mode == "password")}}   <fieldset class="checkbox" fsMode="${Mode}">     <div class="wrapper">       <input type="checkbox" id="chkShowPassword" inputId="${IId}" tabindex="-1"/>     <\/div>     <label for="chkShowPassword">${PTRMF.i18n.getString("ShowPassword")}<\/label>   <\/fieldset> <\/div> {{/if}}';
PTRMF.namespace("forms.templates")
    .label =
    '{{if Mode && Mode.length > 0 && Mode !== "info"}}   <section class="nobg" {{if IId && IId.length > 0}}id="${IId}"{{/if}} >     <span class="icon ${Mode}Icon"><\/span>     <p class="${Mode}">${Disp}<\/p>   <\/section> {{else}}   {{if ((PId) && (PId.length > 0))}} <div>   {{if includeImgSpacer }}     {{if ImgUrl && ImgUrl.length > 0}}       <span class="icon" style="background-image:url(${PTRMF.services.values.sessionBag.serviceUrl}${ImgUrl})"><\/span>     {{else}}       <span class="spacer"><\/span>     {{/if}}   {{/if}}   <p>${Disp}<\/p> <\/div>   {{else}}   <section class="${Mode}">     <p>${Disp}<\/p>   <\/section>   {{/if}} {{/if}}';
PTRMF.namespace("forms.templates")
    .linkbutton =
    '{{if ((PId) && (PId.length > 0))}}   <li formName="${FormName}" formParameters="${FormParameters}" >     {{if ImgUrl.length > 0}}     <p style="background-image:url(${PTRMF.services.values.sessionBag.serviceUrl}${ImgUrl})"><\/p>     {{/if}}     <span>${Disp}<\/span>   <\/li> {{else}} <section   {{if Mode == "nav" }}     callback="${Value}" {{else}}     {{if Mode != "href" }}       formName="${FormName}" formParameters="${FormParameters}"     {{/if}} {{/if}}   mode="${Mode}" class="info arrow">   {{if ImgUrl.length > 0}}     <span class="icon" style="background-image:url(${PTRMF.services.values.sessionBag.serviceUrl}${ImgUrl})"><\/span>   {{/if}}   <p>   {{if Mode == "href" }}     <a href="${Value}" target="_blank">${Disp}<\/a>   {{else}}     ${Disp}   {{/if}}   <\/p> <\/section> {{/if}} ';
PTRMF.namespace("forms.templates")
    .list =
    '{{if Value == "1"}} {{if Mode == "menu"}} <div>   {{if Disp.length > 0 }}     <h1>${Disp}<\/h1>   {{/if}} <ul>   {{html PTRMF.controls.controlFactory.getChildrenHtml(Children)}} <\/ul> <\/div> {{else}} {{if Disp.length > 0 }}   <h1>${Disp}<\/h1>   {{/if}} <section class="${Mode} ${IId}">   {{if Mode == "info" }}     {{html PTRMF.controls.controlFactory.getChildrenHtml(Children, "true")}}   {{else}}     {{html PTRMF.controls.controlFactory.getChildrenHtml(Children)}}   {{/if}} <\/section> {{/if}} {{else Mode == "radiogroup"}} <fieldset fsiid="${IId}" fsval="${Value}" class="radiogroup">     <legend>${Disp}<\/legend>     <ul>         {{html PTRMF.controls.controlFactory.getChildrenHtml(Children)}}     <\/ul> <\/fieldset> {{else}} <footer>   {{if Children.length > 0}}   {{html PTRMF.controls.controlFactory.getChildrenHtml(Children)}}   {{/if}} <\/footer> {{/if}}';
PTRMF.namespace("forms.templates")
    .multifieldvalidator =
    '<section class="failure" style="display: none;">   <span class="icon failureIcon"><\/span>   <p class="failure"><\/p>   <div style="display: none;" fsIid="${IId}" mode="${Mode}" id="${IId}" class="multiFieldValidator" data-targets="${Value}" data-state="ready" data-global-error-target="${DepIId}"/> <\/section>';
PTRMF.namespace("forms.templates")
    .navbutton =
    '<span value="${Value}" mode="${Mode}" pageid="${GId}" tabindex="-1" class="button" fsiid="${IId}">     {{each(i, dependency) Dependencies}}     <input type="hidden"            control-attribute="${dependency.ControlAttribute}"            control-name="${dependency.ControlName}"            control-value="${dependency.ControlValue}"            dependant-control-attribute="${dependency.DependantControlAttribute}"            dependant-control-name="${dependency.DependantControlName}"            dependant-control-value="${dependency.DependantControlValue}" />     {{/each}}     ${Disp} <\/span>';
PTRMF.namespace("forms.templates")
    .numeric =
    '{{if Mode != "AmountOther"}} <fieldset fsIid="${IId}" fsVal="${CentsValue}" valUrl="${ValUrl}" regex="${RX}" mode="${Mode}" min="${Min}" max="${Max}" mandatory="${Mand}" {{if Mode == "creditcard"}}           class="${LookUps[0].Val}" {{/if}} {{if Mode == "creditcard" && LookUps.length == 3}}           data-pci-enabled="true"           data-pci-url="${LookUps[1].Val}"           data-pci-token="${LookUps[2].Val}" {{/if}} {{if Mode == "creditcard" && LookUps.length == 1}}           data-pci-enabled="false" {{/if}}     >     <legend>${Disp}<\/legend>     <div class="wrapper{{if ((Max) && (Max >= 20)) }} fullwidth{{/if}}">         <input id="${IId}" fsType="number" value="${Value}" tabindex="${PTRMF.services.values.getNextTabIndex}" mode="${Mode}"                 autocomplete="off" autocorrect="off" autocapitalization="off"          {{if (Mode == "amount") }}                type="number" step="0.1"         {{else}}                type="tel" step="1"         {{/if}}         {{if (Max < 20) }}         size="${parseInt(Max) + 2}"         maxlength="${Max}"         {{/if}}         {{if ImgUrl}}         placeholder="${ImgUrl}"         {{/if}}         {{if Mand}}         required          {{/if}}          />         <p class="valicon"><\/p>     <\/div>     {{if (Mode == "creditcard" || Mode == "cvv" || Mode == "eCheckBankAccountNum" || Mode == "eCheckBranch" || Mode == "eCheckInstituteNum") }}     <p class="outericon"><\/p>     {{/if}}     <span>${Err}<\/span>     <span class="serverError"><\/span> <\/fieldset> {{else}}     <input id="${IId}" fstype="number" value="${Value}" tabindex="${PTRMF.services.values.getNextTabIndex}" mode="${Mode}"     {{if (Max < 20) }}     size="${parseInt(Max) + 2}"     maxlength="${Max == -1 ? 99999 : Max}"     {{/if}}     {{if ImgUrl}}     placeholder="${ImgUrl}"     {{/if}}     /> {{/if}}';
PTRMF.namespace("forms.templates")
    .phonenumber =
    '<div>   <fieldset fsIid="${IId}" fsVal="${Value}" fsType="${Type}" mode="${Mode}" min="${Min}" max="${Max}" regex="${RX}" valUrl="${ValUrl}" class="phonenumber">     <legend>${Disp}<\/legend>       <div  id="${IId}IntDialingCodeContainer" class="wrapper">           <input id="${IId}IntDialingCode" type="text" maxlength="4" disabled="true" type="tel"/>           <input id="${IId}" value="${Value}" line="1" tabindex="${PTRMF.services.values.getNextTabIndex}" maxlength="${Max}"                  autocomplete="off" autocorrect="off" autocapitalization="off"  type="tel"           {{if (Mand)}}                  required="required"            {{/if}}/>            <p class="valicon"><\/p><\/div>     <span>${Err}<\/span>     <span class="serverError"><\/span>   <\/fieldset> <\/div> ';
PTRMF.namespace("forms.templates")
    .radiobutton =
    '{{if ((PId) && (PId.length > 0))}} <li {{if (Mode.length > 0)}} class="selected" {{/if}}>   <span>{{html PTRMF.controls.controlFactory.ParseOrCreateFromValueJson(Disp).Text}}<\/span>   {{if PTRMF.controls.controlFactory.ParseOrCreateFromValueJson(Disp).SubText}}   <div>{{html PTRMF.controls.controlFactory.ParseOrCreateFromValueJson(Disp).SubText}}<\/div>   {{/if}}   <input type="radio" name="${PId}" value="${Value}" class="check" {{if (Mode.length > 0)}} checked="checked" {{/if}}/> <\/li> {{/if}}   ';
PTRMF.namespace("forms.templates")
    .select =
    '<fieldset fsIid="${IId}"  {{if ((Value.length == 0) && (LookUps.length > 0))}}     fsVal="${LookUps[0].Val}"     {{if LookUps[0].Val.length > 0}}         class="valid"     {{/if}} {{else}}   fsVal="${Value}" {{/if}} {{if LookUps.length <= 0}}     class="disabled" {{/if}}   >   <legend>${Disp}<\/legend>   <div class="wrapper select">   <select id="${IId}" fsType="select" tabindex="${PTRMF.services.values.getNextTabIndex}"   {{if Dependants.length > 0}}     dependants="${Dependants.join(",")}"     {{else}}     {{if LookUps.length > 0}}     fsVal="${LookUps[0].Val}"     value="${LookUps[0].Name}"     {{/if}}     {{/if}}     {{if LookUps.length <= 0}}     disabled="disabled"     {{/if}}     {{if (Mand)}}     required      {{/if}}      >     {{if LookUps.length > 0}}     {{each(i, lookup) LookUps}}      <option value="${lookup.Val}"      {{if (Value.length > 0) && (Value == lookup.Val)}}       selected       {{/if}}       >${lookup.Name}     <\/option>     {{/each}}     {{/if}}   <\/select>   <p class="valicon"><\/p>   <\/div>   <span>${Err}<\/span> <\/fieldset> ';
PTRMF.namespace("forms.templates")
    .tabstrip =
    '<nav> {{each(i, lookup) LookUps}} \t<span formName="${lookup.formName}"  \t{{if  (i + 1)==Value }}           class="active"   {{/if}} \t> \t  ${lookup.Name} \t<\/span> {{/each}} <\/nav> ';
PTRMF.namespace("forms.templates")
    .unknown = "${Type} : ${IId} ";
PTRMF.namespace("forms.templates")
    .waitcontrol =
    '  <section class="nobg waitcontrol" fsVal="${Value}" fsIid="${IId}" >     <span class="icon waitIcon"><\/span>     <p>${Disp}<\/p>   <\/section> ';
$.fn.outerHTML = function(n) {
    return n ? this.before(n)
        .remove() : $("<p>")
        .append(this.eq(0)
            .clone())
        .html()
};
$.fn.spin = function(n) {
    return this.each(function() {
        var i = $(this),
            t = i.data();
        t.spinner && (t.spinner.stop(), delete t.spinner);
        n !== !1 && (t.spinner = new Spinner($.extend({}, n))
            .spin(this))
    }), this
};
$.fn.stopSpin = function() {
    return this.each(function() {
        var t = $(this),
            n = t.data();
        n.spinner && (n.spinner.stop(), delete n.spinner)
    }), this
};
PTRMF.namespace("controls")
    .controlFactory = PTRMF.controls.controlFactory || {
        render: function(n) {
            for (var u = [], s = [], t, e, f, r = "", o, h, c, l, i = 0; i <
                n.FormControls.length; i++) t = n.FormControls[i], h = this
                .getGroup(t.GId, u), h.length == 0 ? (e = {
                    GId: t.GId,
                    SectionMU: "",
                    NonSectionMU: ""
                }, u.push(e)) : e = h[0], s.indexOf(t.IId) == -1 && (f =
                    this.getControlModel(t), this.isSectionControl(t) && (f =
                        this.addChildrenToModel(f, n.FormControls, s)), t.Type ===
                    "select" && (f = this.addDependantsIds(f, n.FormControls)),
                    o = this.getControl(f)
                    .outerHTML(), t.Type == "hiddentracker" && (o +=
                        '<script type="text/javascript">$("#' + t.IId +
                        '_form").submit();<\/script>'), this.isSectionControl(
                        t) ? e.SectionMU += o : e.NonSectionMU += o, s.push(
                        t.IId));
            if (u.length == 1) r += "<view>", r += u[0].NonSectionMU, r +=
                "<article>" + u[0].SectionMU + "<\/article>", r +=
                "<\/view>";
            else
                for (i = 0; i < u.length; i++) r += i == 0 ? "<view>" :
                    '<view style="display:none">', r += u[i].NonSectionMU,
                    r += "<article>" + u[i].SectionMU + "<\/article>", r +=
                    "<\/view>";
            return c = $(r), l = c.find("p"), l.length && $.each(l,
                function() {
                    var n = new RegExp(
                        /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/gi
                    );
                    n.test($(this)
                            .text()) && $(this)
                        .html($(this)
                            .html()
                            .replace(
                                /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/gi,
                                '<a href="mailto:$1">$1<\/a>'))
                }), c
        },
        getChildrenHtml: function(n, t) {
            var i = "",
                r;
            return n && n.length > 0 && $(n)
                .each(function(n, u) {
                    var f = PTRMF.controls.controlFactory.getControlModel(
                        u);
                    t && t === "true" && (f.ImgUrl && f.ImgUrl.length >
                        0 || n > 0) && (f.includeImgSpacer = "true");
                    r = PTRMF.controls.controlFactory.getControl(f);
                    i += $(r)
                        .outerHTML()
                }), i
        },
        getControl: function(n) {
            return typeof n == "undefined" ? "" : typeof PTRMF.forms.templates[
                    n.Type] == "undefined" ? "" : n.Type === "numeric" && n
                .Mode === "phonenumber" ? $.tmpl(PTRMF.forms.templates.phonenumber,
                    n) : $.tmpl(PTRMF.forms.templates[n.Type], n)
        },
        isSectionControl: function(n) {
            var t = n.Type.toLowerCase();
            return !(t === "header" || t === "tabstrip")
        },
        getGroup: function(n, t) {
            return $.grep(t, function(t) {
                return t.GId == n
            })
        },
        getControlModel: function(n) {
            var t;
            switch (n.Type.toLowerCase()) {
                case "date":
                    t = this.getDateModel(n);
                    break;
                case "linkbutton":
                    t = this.getLinkButtonModel(n);
                    break;
                case "tabstrip":
                    t = this.getTabStripModel(n);
                    break;
                case "checkbox":
                    t = this.getCheckboxModel(n);
                    break;
                case "numeric":
                    t = this.getNumericModel(n);
                default:
                    t = n
            }
            return t
        },
        addChildrenToModel: function(n, t, i) {
            var r, u;
            for (n.Children = [], r = 0; r < t.length; r++) t[r].PId === n.IId &&
                (u = t[r], n.Children.push(u), i.push(u.IId));
            return n
        },
        addDependantsIds: function(n, t) {
            for (var r = [], i = 0; i < t.length; i++) t[i].DepIId === n.IId &&
                r.push(t[i].IId);
            return n.Dependants = r, n
        },
        getCheckboxModel: function(n) {
            var r = n.Disp,
                t, u, i, f, e;
            if (n.Mode === "terms" && (t = n.Disp.match(/\[%+(.*?)%\]/g), u =
                n.Value.split(";"), t != null && t.length > 0))
                if (t.length != u.length) throw n.IId +
                    ": Errors processing urls";
                else
                    for (i = 0; i < t.length; i++) f = t[i].substring(2, t[
                            i].length - 2), e = '<a href="' + u[i] +
                        '" target="_blank" tabindex="-1">' + f + "<\/a>", r =
                        r.replace(t[i], e);
            return n.HtmlStr = '<label for="' + n.IId + '">' + r +
                "<\/label>", n
        },
        getTabStripModel: function(n) {
            for (var t = n.LookUps.length - 1; t >= 0; t--) n.LookUps[t].formName =
                n.LookUps[t].Val;
            return n
        },
        getLinkButtonModel: function(n) {
            return n.FormName = n.Value, n.FormParameters = n.LookUps.length ===
                0 ? "" : JSON.stringify(n.LookUps), n
        },
        getNumericModel: function(n) {
            return n.Mode == "amount" && n.Value && (n.CentsValue = n.Value,
                n.Value = (n.Value / 100)
                .toFixed(2)), n
        },
        ParseOrCreateFromValueJson: function(n) {
            var t;
            try {
                t = $.parseJSON(n)
            } catch (i) {
                t = {
                    Text: n
                }
            }
            return t
        },
        getDateModel: function(n) {
            var r = [],
                e = [],
                u, f, t, o, i, h = n.Mode.toLowerCase(),
                s;
            if (h == "cardexpiry") {
                for (i = new Date, s = i.getFullYear(), t = 0; t < 100; t++)
                    r.push(s + t);
                for (t = 1; t < 13; t++) o = t < 10 ? "0" + t : t, e.push(o)
            } else
                for (n.Min && n.Min.length > 0 && n.Max && n.Max.length > 0 ?
                    (u = n.Min.split("/")[0], f = n.Max.split("/")[0]) : (i =
                        new Date, u = i.getFullYear() - 100, f = i.getFullYear() +
                        100), t = f; t >= u; t--) r.push(t);
            return n.Years = r, n.Months = e, n
        },
        formatFormInputValue: function(n, t, i) {
            if (n.toLowerCase() === "address") {
                if (t.length === 0) return "";
                i = i ? i - 1 : 0;
                var r = t.split(/\r\n|\r|\n/g);
                return typeof r[i] == "undefined" ? "" : r[i]
            }
            return t
        }
    };
PTRMF.namespace("ui")
    .UIManager = PTRMF.ui.UIManager || {
        NavigateTo: function(n, t, i) {
            this.ShowLoader();
            PTRMF.services.operations.getForm(n, t, function(n) {
                PTRMF.ui.UIManager.RenderResponseToContainer(n);
                $.each(PTRMF.services.values.container.find(
                    "select[dependants]"), function(n, t) {
                    PTRMF.events.eventManager.PopulateDependantDropDowns(
                        $(t))
                });
                PTRMF.events.eventManager.WireUpForm(i);
                PTRMF.services.values.formRenderedCallback();
                PTRMF.ui.UIManager.HideLoader()
            })
        },
        MoveToNextView: function(n) {
            var t = $(n)
                .parents("view:first"),
                r = $(t)
                .next("view"),
                i = function() {
                    PTRMF.ui.UIManager.MoveToNextView(n)
                };
            if (!PTRMF.ui.UIManager.IsBusy(i, t))
                if (PTRMF.validation.validator.validateView(t)) this.ShowFalseLoader(
                    500), t.hide(), r.show(), PTRMF.services.values.pageViewChanged();
                else if (PTRMF.ui.UIManager.IsBusy(i, t)) return
        },
        MoveToPreviousView: function(n) {
            var t = $(n)
                .parents("view:first"),
                i = $(t)
                .prev("view");
            i.length > 0 ? (this.ShowFalseLoader(500), t.hide(), i.show(),
                PTRMF.services.values.pageViewChanged()) : (this.ShowLoader(),
                PTRMF.services.operations.getPreviousForm(function(n) {
                    PTRMF.ui.UIManager.LoadContents(n);
                    PTRMF.ui.UIManager.HideLoader()
                }))
        },
        Submit: function(n) {
            var t = $(n)
                .parents("view:first"),
                i, r;
            if ($(t)
                .find("section.confirmationMessage")
                .remove(), i = function() {
                    PTRMF.ui.UIManager.Submit(n)
                }, !PTRMF.ui.UIManager.IsBusy(i, t))
                if (r = !0, PTRMF.validation.validator.validateView(t, r)) {
                    if ($("div[data-form='UKMyAccountDepositLimits']")
                        .length > 0) $("#noLimit:checked")
                        .length > 0 && ($("fieldset[fsiid='dailyLimit']")
                            .removeClass("valid")
                            .removeClass("invalid")
                            .removeClass("focus"), $(
                                "fieldset[fsiid='weeklyLimit']")
                            .removeClass("valid")
                            .removeClass("invalid")
                            .removeClass("focus"), $(
                                "fieldset[fsiid='monthlyLimit']")
                            .removeClass("valid")
                            .removeClass("invalid")
                            .removeClass("focus"));
                    else if ($("div[data-form='UKFirstDepositLimits']")
                        .length > 0) $("#noLimit:checked")
                        .length > 0 && $("fieldset[fsiid='dailyLimit']")
                        .removeClass("valid")
                        .removeClass("invalid")
                        .removeClass("focus");
                    else if (PTRMF.ui.UIManager.IsBusy(i, t)) return;
                    this.ShowLoader();
                    PTRMF.services.operations.processForm($(n)
                        .attr("value"), function() {
                            PTRMF.ui.UIManager.HideLoader()
                        })
                } else $(".formsService section.validation-summary")
                    .css("display", "block"), $("#noLimit:checked")
                    .length > 0 && $("fieldset[fsiid='dailyLimit']")
                    .removeClass("valid")
                    .removeClass("invalid")
                    .removeClass("focus")
        },
        IsBusy: function(n, t) {
            return PTRMF.validation.validator.isViewBusyValidating(t) ? (
                PTRMF.services.values.pendingSubmitCall = function() {
                    PTRMF.services.values.pendingSubmitCall = null;
                    n()
                }, !0) : !1
        },
        OpenPopup: function(n) {
            var y = $(n)
                .parents("view:first"),
                t, i, u, e, o, l, a, r, h, f, c, s, v;
            if (PTRMF.validation.validator.validateView(y)) {
                if (t = JSON.parse($(n)
                        .attr("value")), i = t.url, t.method.toLowerCase()
                    .trim() === "get") {
                    if (t.parameters && t.parameters.length > 0)
                        for (i = i + "?", u = 0; u < t.parameters.length; u++)
                            i = i + t.parameters[u][0] + "=" + t.parameters[
                                u][1], u < t.parameters.length - 1 && (i +=
                                "&");
                    t.openInOwnWindow ? window.open(i) : window.location.href =
                        i
                } else if (t.method.toLowerCase()
                    .trim() === "post") {
                    e = {};
                    for (o in t.parameters) l = t.parameters[o][0], a = t.parameters[
                        o][1], t.parameters.hasOwnProperty(o) && (e[l] =
                        a);
                    r = document.createElement("form");
                    r.setAttribute("method", t.method);
                    r.setAttribute("action", i);
                    for (h in e) f = document.createElement("input"), f.setAttribute(
                            "type", "hidden"), f.setAttribute("name", h), f
                        .setAttribute("value", e[h]), r.appendChild(f);
                    t.openInOwnWindow ? r.setAttribute("target", "_blank") :
                        r.setAttribute("target", "_self");
                    document.body.appendChild(r);
                    r.submit()
                }
                t.submitForm === !0 && (c = function() {
                    PTRMF.ui.UIManager.ShowLoader();
                    PTRMF.services.operations.processForm("submit",
                        function() {
                            PTRMF.ui.UIManager.HideLoader()
                        })
                }, window.hasOwnProperty("onpageshow") ? (s =
                    window.onpageshow, window.onpageshow = function() {
                        window.onpageshow = s;
                        c();
                        s && s()
                    }) : v = setInterval(function() {
                    clearInterval(v);
                    c()
                }, 3e3))
            }
        },
        LoadContents: function(n) {
            $(PTRMF.services.values.container)
                .hasClass("formsService") || $(PTRMF.services.values.container)
                .addClass("formsService");
            PTRMF.ui.UIManager.RenderResponseToContainer(n);
            $.each(PTRMF.services.values.container.find(
                "select[dependants]"), function(n, t) {
                PTRMF.events.eventManager.PopulateDependantDropDowns(
                    $(t))
            });
            PTRMF.events.eventManager.WireUpForm();
            PTRMF.services.values.formRenderedCallback()
        },
        RenderResponseToContainer: function(n) {
            $(PTRMF.services.values.container)
                .attr("data-form", n.FormName);
            var t = PTRMF.controls.controlFactory.render(n);
            PTRMF.services.values.container.html(t)
        },
        SetControlStyle: function(n, t) {
            $(n)
                .removeClass("valid invalid focus server-invalid");
            t && $(n)
                .addClass(t)
        },
        ShowFalseLoader: function(n) {
            this.ShowLoader();
            setTimeout(function() {
                PTRMF.ui.UIManager.HideLoader()
            }, n)
        },
        ShowLoader: function() {
            var n, t;
            if (PTRMF.services.values.hasOwnProperty("ShowLoader")) {
                PTRMF.services.values.ShowLoader();
                return
            }
            n = $(".formsservicemodal");
            n.length === 0 && (n = $("<div><\/div>")
                .addClass("formsservicemodal")
                .html("<span><p><\/p><\/span>"), $(PTRMF.services.values
                    .container)
                .after(n), n.css({
                    top: $(window)
                        .scrollTop() - 100,
                    height: (window.innerHeight || window.height) +
                        100
                }));
            t = new Spinner(this.spinnerOptions)
                .spin();
            n.find("span > p")
                .html(t.el);
            n.bind("touchmove", function(n) {
                n.preventDefault()
            });
            n.css({
                top: $(window)
                    .scrollTop() - 100,
                height: (window.innerHeight || window.height) + 100
            });
            n.show()
        },
        HideLoader: function() {
            if (PTRMF.services.values.hasOwnProperty("HideLoader")) {
                PTRMF.services.values.HideLoader();
                return
            }
            $(".formsservicemodal")
                .remove()
        },
        GetFormResponseHandler: function(n) {
            PTRMF.ui.UIManager.LoadContents(n);
            PTRMF.ui.UIManager.HideLoader()
        },
        CloseBrowserWindow: function(n) {
            var t = this;
            t.ShowLoader();
            window.close();
            setTimeout(function() {
                var i = PTRMF.i18n.getString("CantCloseWindow"),
                    r;
                n && n.is(".formsService span.button") ? (r = PTRMF
                    .controls.controlFactory.getControl({
                        Type: "label",
                        Mode: "info",
                        includeImgSpacer: !0,
                        Disp: i,
                        PId: null
                    }), n.hide(), n.parent()
                    .append(r)) : alert(i);
                t.HideLoader()
            }, 2e3)
        },
        resetAndShowLoader: function(n, t) {
            PTRMF.services.values.reset();
            PTRMF.services.values.container = $(n);
            t && PTRMF.services.values.setCallbacks(t);
            this.ShowLoader()
        },
        spinnerOptions: {
            lines: 12,
            length: 11,
            width: 4,
            radius: 10,
            color: "#C8C8C8",
            speed: 1,
            trail: 100,
            shadow: !1
        }
    };
PTRMF.namespace("events")
    .eventManager = PTRMF.events.eventManager || {
        numericChangingState: !1,
        WireUpForm: function() {
            this.WireTabNavigation();
            this.WireLinkButtons();
            this.WireDropdowns();
            this.WireDatePickers();
            this.WireInputControls();
            this.WireNavButtons();
            this.WireWaitControls();
            this.WireRadioButtons();
            this.WireMultiFieldValidators();
            this.WirePhoneNumberInputs();
            this.WireCheckListControls();
            this.WireUpCheckboxDependencies();
            this.WireUpAddressLookupControls();
            this.WireUpButtonGroups();
            this.WireClearButton();
            this.WireValidationSummary()
        },
        WireValidationSummary: function() {
            var n = $(PTRMF.services.values.container);
            n.find("section.validation-summary")
                .css("display", "none")
        },
        WireClearButton: function() {
            var n = $(PTRMF.services.values.container);
            n.find("span[value='clearValues']")
                .on("click", function() {
                    $(this)
                        .find("input[type='hidden']")
                        .each(function() {
                            var t = "fieldset[fsiid='" + $(this)
                                .attr("dependant-control-name") +
                                "']";
                            n.find(t)
                                .removeClass("invalid")
                                .removeClass("server-invalid")
                                .removeClass("valid")
                                .removeClass("focus")
                                .attr("fsval", "")
                                .find("input")
                                .val("")
                        });
                    $(this)
                        .css("display", "none")
                })
        },
        HandleClearValues: function() {
            var n = $(PTRMF.services.values.container);
            n.find("span[value='clearValues']")
                .each(function() {
                    var t = !1;
                    $(this)
                        .find("input[type='hidden']")
                        .each(function() {
                            var i = "fieldset[fsiid='" + $(this)
                                .attr("dependant-control-name") +
                                "']",
                                r = n.find(i);
                            r.attr("fsval")
                                .length > 0 && (t = !0)
                        });
                    t ? $(this)
                        .css("display", "block") : $(this)
                        .css("display", "none")
                })
        },
        WireUpButtonGroups: function() {
            var n = $(PTRMF.services.values.container);
            $(n)
                .find(".buttonGroup")
                .each(function() {
                    $(this)
                        .on("change", function(t) {
                            var i = $(this);
                            $(t.target)
                                .is("input") ? i.attr("fsval", i.attr(
                                    "fsval") + "00") : i.find(
                                    "input:not([type='hidden'])")
                                .val("");
                            $(this)
                                .find("input[type='hidden']")
                                .each(function() {
                                    for (var s = i.attr("fsval"),
                                        r = $(this), t = {
                                            dependantControl: r
                                                .attr(
                                                    "dependant-control-name"
                                                ),
                                            dependantAttr: r
                                                .attr(
                                                    "dependant-control-attribute"
                                                ),
                                            dependantValue: r
                                                .attr(
                                                    "dependant-control-value"
                                                ) == "true",
                                            onCondition: r.attr(
                                                "control-value"
                                            )
                                        }, u = $(n)
                                        .find("*[fsiid='" +
                                            t.dependantControl +
                                            "'],#" + t.dependantControl
                                        ), e = t.onCondition
                                        .split(","), o = !1,
                                        f = 0; f < e.length; f++)
                                        s === e[f] && (o = !0);
                                    if (o) u.attr(t.dependantAttr,
                                        t.dependantValue);
                                    else {
                                        if (u.is("input") && u.val()
                                            .length > 0) return
                                        ;
                                        u.attr(t.dependantAttr, !
                                            t.dependantValue
                                        )
                                    }
                                })
                        });
                    var t = $(this)
                        .attr("fsval");
                    t.length > 0 && $(this)
                        .find("span.button[value='" + t + "']")
                        .addClass("buttonGroupActive");
                    $(this)
                        .trigger("change")
                });
            $(n)
                .find(".buttonGroup span.button")
                .on("click", function() {
                    var n = $(this)
                        .attr("value");
                    $(this)
                        .parent()
                        .attr("fsval", n);
                    $(this)
                        .parent()
                        .find("span.button")
                        .removeClass("buttonGroupActive");
                    $(this)
                        .addClass("buttonGroupActive");
                    $(this)
                        .parent()
                        .trigger("change")
                })
        },
        WireUpAddressLookupControls: function() {
            var n = $(PTRMF.services.values.container),
                i, r, t;
            $(n)
                .find(".addressLookup .addressFailure")
                .hide();
            $(n)
                .find(".addressLookup .button")
                .on("click", function() {
                    PTRMF.ui.UIManager.ShowLoader();
                    var n = $(this);
                    setTimeout(function() {
                        n.parent()
                            .find("input")
                            .val()
                            .length == 0 && n.parent()
                            .addClass("invalid");
                        $("fieldset[fsiid='" + n.parent()
                                .attr("input") + "'] input")
                            .val()
                            .length == 0 && $(
                                "fieldset[fsiid='" + n.parent()
                                .attr("input") + "']")
                            .addClass("invalid");
                        n.parent()
                            .hasClass("invalid") || $(
                                "fieldset[fsiid='" + n.parent()
                                .attr("input") + "']")
                            .hasClass("invalid") ? PTRMF.ui.UIManager
                            .HideLoader() : PTRMF.services.operations
                            .getAddressLookup(n.parent()
                                .find("input")
                                .val(), $("fieldset[fsiid='" +
                                    n.parent()
                                    .attr("input") + "'] input"
                                )
                                .val(), function(t) {
                                    t && (t.AddressFieldOne ||
                                        (t.AddressFieldOne =
                                            ""), t.AddressFieldTwo ||
                                        (t.AddressFieldTwo =
                                            ""), t.TownOrCity ||
                                        (t.TownOrCity = ""),
                                        $(
                                            "fieldset[fsiid='" +
                                            n.parent()
                                            .attr(
                                                "addressOutput"
                                            ) +
                                            "'] input[line='1']"
                                        )
                                        .val(t.AddressFieldOne),
                                        $(
                                            "fieldset[fsiid='" +
                                            n.parent()
                                            .attr(
                                                "addressOutput"
                                            ) +
                                            "'] input[line='1']"
                                        )
                                        .trigger("change"),
                                        $(
                                            "fieldset[fsiid='" +
                                            n.parent()
                                            .attr(
                                                "addressOutput"
                                            ) +
                                            "'] input[line='2']"
                                        )
                                        .val(t.AddressFieldTwo),
                                        $(
                                            "fieldset[fsiid='" +
                                            n.parent()
                                            .attr(
                                                "addressOutput"
                                            ) +
                                            "'] input[line='2']"
                                        )
                                        .trigger("change"),
                                        $(
                                            "fieldset[fsiid='" +
                                            n.parent()
                                            .attr(
                                                "townOutput"
                                            ) + "'] input")
                                        .val(t.TownOrCity),
                                        $(
                                            "fieldset[fsiid='" +
                                            n.parent()
                                            .attr(
                                                "townOutput"
                                            ) + "'] input")
                                        .trigger("change"),
                                        t.ServerErrorOccured ?
                                        n.parent()
                                        .find(
                                            ".addressFailure"
                                        )
                                        .show() : n.parent()
                                        .find(
                                            ".addressFailure"
                                        )
                                        .hide());
                                    PTRMF.ui.UIManager.HideLoader()
                                })
                    }, 200)
                });
            $(n)
                .find("fieldset[fsiid='" + $(n)
                    .find("fieldset[fstype='addresslookup']")
                    .attr("countryinput") + "'] select")
                .on("change", function() {
                    var i, r, t;
                    for ($(n)
                        .find(
                            "fieldset[fstype='addresslookup'] section.addressFailure"
                        )
                        .hide(), i = $(n)
                        .find("fieldset[fstype='addresslookup']")
                        .attr("visiblecountries")
                        .split(";"), r = !0, t = 0; t < i.length; t++)
                        if ($(this)
                            .val() == i[t]) {
                            r = !1;
                            break
                        }
                    r ? $(n)
                        .find("fieldset[fstype='addresslookup']")
                        .hide() : $(n)
                        .find("fieldset[fstype='addresslookup']")
                        .show()
                });
            if ($(n)
                .find("fieldset[fstype='addresslookup']")
                .length > 0) {
                for (i = $(n)
                    .find("fieldset[fstype='addresslookup']")
                    .attr("visiblecountries")
                    .split(";"), r = !0, t = 0; t < i.length; t++)
                    if ($(n)
                        .find("fieldset[fstype='addresslookup']")
                        .val() == i[t]) {
                        r = !1;
                        break
                    }
                r ? $(n)
                    .find("fieldset[fstype='addresslookup']")
                    .hide() : $(n)
                    .find("fieldset[fstype='addresslookup']")
                    .show()
            }
        },
        WireUpCheckboxDependencies: function() {
            var n = $(PTRMF.services.values.container);
            $(n)
                .find(".checkbox input[type='checkbox']")
                .on("click", function() {
                    var t = $(this),
                        u = $(this)
                        .parent()
                        .find("input[type='hidden']"),
                        i = !1,
                        r;
                    u.each(function() {
                        var r = n.find("fieldset[fsiid='" + $(
                                    this)
                                .attr("dependant-control-name") +
                                "']"),
                            f = t.is(":checked"),
                            u;
                        f ? (r.find("input")
                            .attr("disabled", "disabled"),
                            r.find("input")
                            .attr("persist", r.find("input")
                                .val()), r.find("input")
                            .val(""), r.attr("fsval", ""),
                            r.hasClass("valid") && r.removeClass(
                                "valid"), r.hasClass(
                                "invalid") && r.removeClass(
                                "invalid"), i = !1) : (r.find(
                                "input")
                            .removeAttr("disabled"), u = r.find(
                                "input")
                            .attr("persist"), typeof u ==
                            "string" && (u = u.replace(".",
                                "")), r.attr("fsval", u), r
                            .find("input")
                            .val(r.find("input")
                                .attr("persist")), r.find(
                                "input")
                            .removeAttr("persist"), i = !0)
                    });
                    i && $("div.multiFieldValidator")
                        .trigger("post-validate-no-limit");
                    r = t.parent()
                        .parent()
                        .parent();
                    t.is(":required") || t.is(":checked") || r.removeClass(
                        "valid")
                });
            $(n)
                .find(".checkbox input[type='checkbox']")
                .each(function() {
                    var t = $(this)
                        .is(":checked"),
                        i = $(this)
                        .parent()
                        .find("input[type='hidden']");
                    i.each(function() {
                        var i = n.find("fieldset[fsiid='" + $(
                                this)
                            .attr("dependant-control-name") +
                            "']");
                        t ? (i.find("input")
                                .attr("disabled", "disabled"),
                                i.find("input")
                                .val("")) : i.find("input")
                            .removeAttr("disabled")
                    })
                })
        },
        WireCheckListControls: function() {
            var n = $(PTRMF.services.values.container),
                r = function(n) {
                    n.parent()
                        .children("ul")
                        .children("li:not([data-disabled='1'])")
                        .children(".tickBox")
                        .attr("data-selected", "1");
                    n.parent()
                        .children("ul")
                        .children("li:not([data-disabled='1'])")
                        .children(".tickBox")
                        .addClass("checked");
                    t(n.parent())
                },
                u = function(n) {
                    n.parent()
                        .children("ul")
                        .children("li:not([data-disabled='1'])")
                        .children(".tickBox")
                        .attr("data-selected", "0");
                    n.parent()
                        .children("ul")
                        .children("li:not([data-disabled='1'])")
                        .children(".tickBox")
                        .removeClass("checked");
                    t(n.parent())
                },
                i = function(n) {
                    n.children("ul")
                        .children("li:not([data-disabled='1'])")
                        .children(".tickBox[data-selected='0']")
                        .length > 0 ? (n.children(".tickBox")
                            .attr("data-selected", "0"), n.children(
                                ".tickBox")
                            .removeClass("checked")) : (n.children(
                                ".tickBox")
                            .attr("data-selected", "1"), n.children(
                                ".tickBox")
                            .addClass("checked"))
                },
                t = function(n) {
                    var t = "";
                    n.children("ul")
                        .children("li:not([data-disabled='1'])")
                        .children(".tickBox[data-selected='1']")
                        .each(function() {
                            t += $(this)
                                .parent()
                                .data("value") + ","
                        });
                    n.parent()
                        .attr("fsval", t.substring(0, t.length - 1))
                };
            try {
                $(n)
                    .find(".checklist")
                    .parent()
                    .attr("data-disabled")
                    .split(",")
                    .forEach(function(t) {
                        $(n)
                            .find(".checklist>ul>li>.tickBox")
                            .each(function() {
                                $(this)
                                    .parent()
                                    .attr("data-value") === t && $(
                                        this)
                                    .parent()
                                    .attr("data-disabled", "1")
                            })
                    });
                $(n)
                    .find(".checklist")
                    .parent()
                    .attr("data-preticked")
                    .split(",")
                    .forEach(function(i) {
                        $(n)
                            .find(".checklist>ul>li>.tickBox")
                            .each(function() {
                                $(this)
                                    .parent()
                                    .attr("data-value") === i && ($(
                                            this)
                                        .attr("data-selected", "1"),
                                        t($(this)
                                            .parent()
                                            .parent()
                                            .parent()))
                            })
                    })
            } catch (f) {}
            $(n)
                .find(".checklist>.tickBox>p, .checklist>.tickBox")
                .click(function() {
                    var n = $(this);
                    switch (n.attr("data-selected")) {
                        case "0":
                            n.attr("data-selected", "1");
                            n.addClass("checked");
                            r(n);
                            break;
                        case "1":
                            n.attr("data-selected", "0");
                            n.removeClass("checked");
                            u(n)
                    }
                });
            $(n)
                .find(".checklist>ul>li")
                .click(function() {
                    if ($(this)
                        .attr("data-disabled") == undefined) {
                        switch ($(this)
                            .children(".tickBox")
                            .attr("data-selected")) {
                            case "0":
                                $(this)
                                    .children(".tickBox")
                                    .attr("data-selected", "1");
                                $(this)
                                    .children(".tickBox")
                                    .addClass("checked");
                                i($(this)
                                    .parent()
                                    .parent());
                                break;
                            case "1":
                                $(this)
                                    .children(".tickBox")
                                    .attr("data-selected", "0");
                                $(this)
                                    .children(".tickBox")
                                    .removeClass("checked");
                                i($(this)
                                    .parent()
                                    .parent())
                        }
                        t($(this)
                            .parent()
                            .parent())
                    }
                })
        },
        WireNavButtons: function() {
            var n = $(PTRMF.services.values.container);
            $(n)
                .find('span[value="next"]')
                .click(function() {
                    PTRMF.ui.UIManager.MoveToNextView($(this))
                });
            $(n)
                .find('span[value="prev"]')
                .click(function() {
                    PTRMF.ui.UIManager.MoveToPreviousView($(this))
                });
            $(n)
                .find('span[mode="submit"]')
                .click(function() {
                    $("div[data-form='UKMyAccountDepositLimits']")
                        .length > 0 && $("#weeklyLimit")
                        .focus();
                    PTRMF.ui.UIManager.Submit($(this))
                });
            $(n)
                .find('span[mode="popup"]')
                .click(function() {
                    PTRMF.ui.UIManager.OpenPopup($(this))
                });
            $(n)
                .find('span[value="restart"]')
                .click(function() {
                    PTRMF.services.operations.getFirstForm(function(n) {
                        PTRMF.ui.UIManager.LoadContents(n)
                    })
                });
            $(n)
                .find('span[value="close"]')
                .click(function() {
                    PTRMF.services.values.closeFormCallback($(this))
                });
            $(n)
                .find('span[value="games"],section[callback="games"]')
                .click(function() {
                    PTRMF.services.values.backToGamesCallback()
                });
            $(n)
                .find(
                    'span[value="gameslogin"],section[callback="gameslogin"]'
                )
                .click(function() {
                    PTRMF.services.values.gotoLoginCallback()
                });
            $(n)
                .find('span[value="logout"],section[callback="logout"]')
                .click(function() {
                    PTRMF.services.values.logoutCallback()
                });
            $(n)
                .find(
                    'span[value="close-callback"],section[callback="close"]'
                )
                .click(function() {
                    PTRMF.services.values.closeCallback()
                })
        },
        WireInputControls: function() {
            var n = $(PTRMF.services.values.container);
            $(n)
                .find('input,select[fsType="select"]')
                .change(function() {
                    PTRMF.events.eventManager.InputChangeEventHandler($(
                        this))
                });
            $(n)
                .find("input,select")
                .focusin(function() {
                    var n = PTRMF.validation.validator.getContainerFieldSet(
                        $(this));
                    $(n)
                        .attr("mode") === "amount" && $(this)
                        .val() === "0.00" && ($(this)
                            .val(""), $(n)
                            .attr("fsval", 0), $(n)
                            .removeClass("valid"));
                    $(n)
                        .hasClass("valid") || $(n)
                        .hasClass("invalid") || PTRMF.ui.UIManager.SetControlStyle(
                            $(n), "focus")
                });
            $(n)
                .find("input,select")
                .blur(function() {
                    var n = PTRMF.validation.validator.getContainerFieldSet(
                        $(this));
                    $(n)
                        .removeClass("focus");
                    $(n)
                        .attr("mode") === "amount" && $(this)
                        .val() == "" && (this.validity.valid ? $(n)
                            .attr("mandatory") === "true" ? $(this)
                            .val("0.00")
                            .change() : n.attr("fsval") != $(this)
                            .val() ? $(this)
                            .change() : $(n)
                            .removeClass(
                                "validating valid invalid server-invalid"
                            ) : PTRMF.ui.UIManager.SetControlStyle($(n),
                                "invalid"))
                });
            $(n)
                .find('input[fsType="number"]')
                .keydown(function(n) {
                    if (PTRMF.validation.validator.checkNumericLengthLimit(
                        $(this)))[8, 255, 4, 46].indexOf(n.keyCode) ==
                        -1 && n.preventDefault()
                });
            this.HandleClearValues()
        },
        InputChangeEventHandler: function(n) {
            var t = PTRMF.validation.validator.getContainerFieldSet($(n)),
                i = $("div.formsService:first")
                .attr("data-form");
            PTRMF.metrics.logCount("5if." + i + "." + t.attr("fsiid"));
            t.attr("mode") == "amount" ? this.HandleAmountFieldUpdate(n, t) :
                PTRMF.events.eventManager.SetInputValue($(n));
            $(n)
                .attr("inputid") !== "Password" && PTRMF.validation.validator
                .setValid(n)
        },
        HandleAmountFieldUpdate: function(n, t) {
            var i, r;
            t.attr("mandatory") === "false" && t.find("input:first")
                .val() === "" ? $(t)
                .attr("fsVal", "") : (i = $(n)
                    .val(), i.length == 0 || i === "0" ? $(n)
                    .val("0.00") : isNaN(new Number(i)) || (r = new Number(
                            i), r = Math.min(r, 21474836.47), $(n)
                        .val(r.toFixed(2)), $(t)
                        .attr("fsVal", Math.round(r * 100))));
            this.HandleClearValues()
        },
        ZeroFill: function(n, t) {
            return t -= n.toString()
                .length, t > 0 ? new Array(t + (/\./.test(n) ? 2 : 1))
                .join("0") + n : n + ""
        },
        WireTabNavigation: function() {
            $(PTRMF.services.values.container)
                .find("nav span")
                .click(function() {
                    PTRMF.ui.UIManager.NavigateTo($(this)
                        .attr("formName"), [], $(PTRMF.services.values
                            .container))
                })
        },
        WireLinkButtons: function() {
            $(PTRMF.services.values.container)
                .find("li[formName],section[formName]")
                .click(function() {
                    PTRMF.ui.UIManager.NavigateTo($(this)
                        .attr("formName"), $(this)
                        .attr("formParameters"), $(PTRMF.services.values
                            .container))
                })
        },
        WireDatePickers: function() {
            $(PTRMF.services.values.container)
                .find('select[fsType="date_day"]')
                .change(function() {
                    var n = $(this)
                        .val(),
                        t = $(this)
                        .next("select")
                        .val(),
                        i = $(this)
                        .next("select")
                        .next("select")
                        .val();
                    PTRMF.events.eventManager.SetDatePickerValue($(this),
                        n, t, i)
                });
            $(PTRMF.services.values.container)
                .find('select[fsType="date_month"]')
                .change(function() {
                    var i = $(this)
                        .val(),
                        n, t, r;
                    n = $(this)
                        .parents("fieldset")
                        .attr("mode")
                        .toLowerCase() === "cardexpiry" ? 1 : $(this)
                        .prev("select")
                        .val() || 1;
                    t = $(this)
                        .next("select")
                        .val();
                    r = PTRMF.events.helpers.getLeapYearDaysList(i, t,
                        n);
                    $(this)
                        .prev("select")
                        .html(r);
                    PTRMF.events.eventManager.SetDatePickerValue($(this),
                        n, i, t);
                    $(PTRMF.services.values.container)
                        .find('select[fsType="date_day"]')
                        .change()
                });
            $(PTRMF.services.values.container)
                .find('select[fsType="date_year"]')
                .change(function() {
                    var i = $(this)
                        .prev("select")
                        .val(),
                        n, t, r;
                    n = $(this)
                        .parents("fieldset")
                        .attr("mode")
                        .toLowerCase() === "cardexpiry" ? 1 : $(this)
                        .siblings('select[fsType="date_day"]')
                        .val() || 1;
                    t = $(this)
                        .val();
                    r = PTRMF.events.helpers.getLeapYearDaysList(i, t,
                        n);
                    $(this)
                        .siblings('select[fsType="date_day"]')
                        .html(r);
                    PTRMF.events.eventManager.SetDatePickerValue($(this),
                        n, i, t);
                    $(PTRMF.services.values.container)
                        .find('select[fsType="date_day"]')
                        .change()
                })
        },
        SetDatePickerValue: function(n, t, i, r) {
            var u, f, e = $(n)
                .parents("fieldset");
            u = PTRMF.events.helpers.getEnglishMonthName(parseInt(i, 10) +
                1);
            f = e.attr("mode")
                .toLowerCase() === "cardexpiry" ? i + "/" + r : t + " " + u +
                " " + r;
            e.attr("fsVal", f);
            PTRMF.validation.validator.setValid(n)
        },
        SetInputValue: function(n) {
            var t = $(n)
                .parents("fieldset"),
                s = $(n)
                .attr("type"),
                i, r, u, o, f, e;
            switch (s) {
                case "checkbox":
                    t.attr("fsMode") === "password" ? (i = $(
                            'fieldset[fsIId="' + $(n)
                            .attr("inputId") + '"]')
                        .find("input:first"), r = "text", $(i)
                        .attr("type") === "text" && (r = "password"), i[
                            0].setAttribute("type", r)) : (u = "false",
                        $(n)
                        .is(":checked") && (u = "true"), t.attr("fsVal",
                            u));
                    break;
                case "tel":
                case "number":
                case "text":
                    t.attr("mode") === "phonenumber" ? (o = $("#" + t.attr(
                                "fsiid") + "IntDialingCode")
                            .val(), t.attr("fsVal", o + n.val()
                                .replace(/^0/g, ""))) : t.attr("mode") ===
                        "address" ? ($(n)
                            .attr("line") === "2" ? (f = $(n)
                                .siblings('input[line="1"]:first'), e = $(n)
                            ) : (f = $(n), e = $(n)
                                .siblings('input[line="2"]:first')), t.attr(
                                "fsVal", f.val() + "\n" + e.val())) : t.attr(
                            "fsVal", n.val());
                    break;
                case "radio":
                    $(n)
                        .attr("checked") === "checked" && t.attr("fsVal", n
                            .val());
                    break;
                default:
                    t.attr("fsVal", n.val())
            }
        },
        WireDropdowns: function() {
            $("select")
                .change(function() {
                    PTRMF.events.eventManager.PopulateDependantDropDowns(
                        $(this))
                })
        },
        PopulateDependantDropDowns: function(n) {
            if ($(n)
                .attr("dependants") && $(n)
                .attr("dependants")
                .length > 0)
                for (var i = $(n)
                    .attr("dependants")
                    .split(","), t = 0; t < i.length; t++) $(
                        'fieldset[fsIId="' + i[t] +
                        '"][mode="phonenumber"]')
                    .length > 0 ? PTRMF.events.eventManager.GetInputLookupItem(
                        i[t], $(n)
                        .val(), i[t] + "IntDialingCode") : $("#" + i[t])
                    .is("input") ? PTRMF.events.eventManager.GetInputLookupItem(
                        i[t], $(n)
                        .val()) : PTRMF.events.eventManager.GetSelectListItems(
                        i[t], $(n)
                        .val());
            $(n)
                .attr("fsVal", $(n)
                    .val())
        },
        GetSelectListItems: function(n, t) {
            PTRMF.ui.UIManager.ShowLoader();
            PTRMF.services.operations.getLookups(PTRMF.services.values.currentForm
                .FormName, n, t, function(t) {
                    var i = $('select[id="' + n + '"]'),
                        r, u, f;
                    for (i.html(), r = "", u = 0; u < t.length; u++) r =
                        r + '<option value="' + t[u].Val + '">' + t[u].Name +
                        "<\/li>";
                    i.html(r);
                    f = $('fieldset[fsIId="' + n + '"]');
                    r.length > 0 ? (i.removeAttr("disabled", ""), i.parents(
                            "fieldset")
                        .removeClass("disabled"), i.change()) : (i.html(
                            "<option>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<\/option>"
                        ), i.attr("disabled", "disabled"), i.parents(
                            "fieldset")
                        .addClass("disabled"), f.attr("fsVal", null),
                        PTRMF.events.eventManager.PopulateDependantDropDowns(
                            i));
                    PTRMF.ui.UIManager.HideLoader();
                    i.is(":focus") && (i.blur(), i.focus())
                })
        },
        GetInputLookupItem: function(n, t, i) {
            i || (i = n);
            PTRMF.ui.UIManager.ShowLoader();
            PTRMF.services.operations.getLookups(PTRMF.services.values.currentForm
                .FormName, n, t, function(t) {
                    var r = $("#" + i);
                    t.length > 0 && (r.val(t[0].Val), PTRMF.events.eventManager
                        .SetInputValue(r), $('fieldset[fsIId="' + n +
                            '"]')
                        .is(".valid, .invalid") && $("#" + n)
                        .change());
                    PTRMF.ui.UIManager.HideLoader();
                    r.is(":focus") && (r.blur(), r.focus())
                })
        },
        WireWaitControls: function() {
            var n = $(".waitcontrol")
                .first(),
                i, t;
            n.length === 1 && (i = $.extend({}, PTRMF.ui.UIManager.spinnerOptions, {
                    color: "black",
                    length: 6,
                    width: 2,
                    radius: 6
                }), n.find(".waitIcon")
                .spin(i), t = function() {
                    var i = n.attr("fsiid"),
                        r = n.attr("fsval");
                    try {
                        PTRMF.services.operations.serverValidate(PTRMF.services
                            .values.currentForm.FormName, i, r,
                            function(i) {
                                i.Valid ? PTRMF.ui.UIManager.Submit(
                                    n) : setTimeout(t, 5e3)
                            })
                    } catch (u) {
                        PTRMF.ui.UIManager.Submit(n)
                    }
                }, setTimeout(t, 5e3))
        },
        RadioButtonClick: function(n) {
            $(n)
                .siblings()
                .removeClass("selected");
            $(n)
                .addClass("selected");
            $(n)
                .children("input[type=radio]")[0].click()
        },
        WireRadioButtons: function() {
            var n = $("fieldset input[type=radio][checked=checked]");
            n.each(function() {
                $(this)
                    .parents("fieldset")
                    .attr("fsVal", $(this)
                        .val())
            });
            $(".formsService fieldset.radiogroup ul li")
                .click(function() {
                    PTRMF.events.eventManager.RadioButtonClick($(this))
                })
        },
        WireMultiFieldValidators: function() {
            $(".formsService div.multiFieldValidator")
                .each(function(n, t) {
                    var u = $(this)
                        .attr("Mode"),
                        i;
                    if (u == null || u !== "submit") {
                        var f = $(this)
                            .attr("fsIid"),
                            e = $(t)
                            .attr("data-targets")
                            .split(","),
                            r = [];
                        for (i = 0; i < e.length; i++) r.push($(
                                'fieldset[fsIid="' + e[i] + '"]')), r[i]
                            .attr("data-notify-post-validate", $(t)
                                .attr("id"));
                        $(t)
                            .bind("post-validate", function(n) {
                                $(this)
                                    .is(".validating") || PTRMF.validation
                                    .validator.doMultipleInputServerValidation(
                                        r, n.sourceInputId, f)
                            });
                        $(t)
                            .bind("post-validate-no-limit", function() {
                                $(this)
                                    .is(".validating") || PTRMF.validation
                                    .validator.doMultipleInputServerValidation(
                                        r, "dailyLimit", f)
                            })
                    }
                })
        },
        WirePhoneNumberInputs: function() {
            $('fieldset[fstype="numeric"][mode="phonenumber"]')
                .each(function() {
                    var n = $(this)
                        .attr("fsIid");
                    $("#" + n + "IntDialingCodeContainer")
                        .click(function() {
                            $("#" + n)
                                .focus()
                        })
                })
        }
    };
PTRMF.namespace("events")
    .helpers = PTRMF.events.helpers || {
        isLeapYear: function(n) {
            return new Date(n, 1, 29)
                .getDate() == 29
        },
        getLeapYearDaysList: function(n, t, i) {
            for (var e = "", o, u, f = n == 1 ? this.isLeapYear(t) ? 29 :
                28 : n < 7 ? n % 2 == 0 ? 31 : 30 : n % 2 == 0 ? 30 :
                31, r = 1; r <= f; r++) o = parseInt(i) === r ? " selected" :
                "", u = r < 10 ? "0" + r : r, e += '<option value="' + u +
                '"' + o + ">" + u + "<\/option>";
            return e
        },
        getEnglishMonthName: function(n) {
            switch (n) {
                case 1:
                    return "January";
                case 2:
                    return "February";
                case 3:
                    return "March";
                case 4:
                    return "April";
                case 5:
                    return "May";
                case 6:
                    return "June";
                case 7:
                    return "July";
                case 8:
                    return "August";
                case 9:
                    return "September";
                case 10:
                    return "October";
                case 11:
                    return "November";
                case 12:
                    return "December";
                default:
                    return ""
            }
        }
    };
PTRMF.namespace("services")
    .helpers = PTRMF.services.helpers || {
        buildServiceRequestStr: function(n, t) {
            if (typeof t == "undefined") return JSON.stringify({
                FormName: n,
                Parameters: []
            });
            for (var r = [], i = 0; i < t.length; i++) r.push({
                Name: t[i].Name,
                Val: t[i].Val
            });
            return JSON.stringify({
                FormName: n,
                Parameters: r
            })
        },
        buildBaseRequest: function(n, t) {
            var r = n.toLowerCase() === "opensession" || n.toLowerCase() ===
                "resumesession" ? "session" : "forms",
                u = PTRMF.services.values.sessionBag.serviceUrl + "/" + r +
                "/" + n,
                i;
            return i = n.toLowerCase() === "getform" ? this.buildServiceRequestStr(
                t.formName, t.lookups) : JSON.stringify(t), {
                url: u,
                requestStr: i
            }
        },
        buildFormsServiceUrl: function(n, t) {
            var i = PTRMF.services.helpers.buildBaseRequest(n, t);
            return i.url += "?", PTRMF.services.values.sessionResponseInfo &&
                (i.url += "sid=" + PTRMF.services.values.sessionResponseInfo
                    .SessionId + "&"), i.url += "requestStr=" + i.requestStr,
                i.url
        },
        buildFormsServicePostRequest: function(n, t) {
            var i, r, t;
            return t && t.authToken && (i = t.authToken, delete t.authToken),
                r = PTRMF.services.helpers.buildBaseRequest(n, t), t = {
                    requestStr: r.requestStr
                }, PTRMF.services.values.sessionResponseInfo && (t.sid =
                    PTRMF.services.values.sessionResponseInfo.SessionId), i &&
                (t.authToken = i), {
                    url: r.url,
                    data: t
                }
        }
    };
PTRMF.namespace("services")
    .session = PTRMF.services.session || {
        open: function(n) {
            var t = PTRMF.services.values.sessionBag,
                i;
            t.clientUrl = window.location.href;
            addBTags(t);
            i = PTRMF.services.helpers.buildFormsServicePostRequest(
                "opensession", t);
            $.ajax({
                type: "POST",
                url: i.url,
                data: i.data,
                success: function(t) {
                    PTRMF.services.values.sessionResponseInfo =
                        t;
                    PTRMF.metrics.logCount("5os");
                    n(t)
                }
            })
        },
        resume: function(n, t) {
            var i = PTRMF.services.helpers.buildFormsServicePostRequest(
                "resumesession", null);
            i.url += (i.url.indexOf("?") > -1 ? "&" : "?") + "sid=" + n;
            $.ajax({
                type: "POST",
                url: i.url,
                data: i.data,
                success: function(n) {
                    n.State !== "Invalid" ? (PTRMF.services.values
                            .sessionResponseInfo = n, t(n)) :
                        PTRMF.services.session.open(t)
                },
                error: function() {
                    PTRMF.services.session.open(t)
                }
            })
        }
    };
PTRMF.namespace("services")
    .operations = PTRMF.services.operations || {
        getForm: function(n, t, i) {
            if (PTRMF.metrics.startTimer("5gf." + n), typeof t == "string")
                try {
                    t = $.parseJSON(t) === null ? [] : $.parseJSON(t)
                } catch (r) {
                    t = []
                }
            PTRMF.services.values.currentForm.FormName.length > 0 && PTRMF.services
                .values.pageStack.push(PTRMF.services.values.currentForm);
            this.makeServiceCall("GetForm", {
                formName: n,
                lookups: t
            }, function(r) {
                PTRMF.services.values.currentTabIndex = 0;
                PTRMF.services.values.currentForm = {
                    FormName: r.FormName || n,
                    Parameters: t
                };
                PTRMF.services.values.getFormCallback({
                    FormName: PTRMF.services.values.currentForm
                        .FormName,
                    SystemInfoRequest: r.SystemInfoRequest,
                    Status: r.Status
                });
                i(r);
                PTRMF.metrics.startTimer("5tof." + n);
                PTRMF.metrics.endTimer("5gf." + n)
            })
        },
        getPreviousForm: function(n) {
            var t = PTRMF.services.values.pageStack.pop();
            this.getForm(t.FormName, t.Parameters, n)
        },
        getFirstForm: function(n) {
            this.getForm(PTRMF.services.values.firstForm.FormName, PTRMF.services
                .values.firstForm.Parameters, n)
        },
        processForm: function(n, t) {
            var i = [],
                r, u, e, o, f;
            PTRMF.metrics.startTimer("5pf." + PTRMF.services.values.currentForm
                .FormName);
            PTRMF.services.values.container.find("[fsIId]")
                .each(function() {
                    var n = $(this),
                        r = n.attr("fsIId"),
                        f = n.attr("fsVal"),
                        t;
                    n.data("pci-enabled") && (t = $.Deferred(), u = t.promise(),
                        PTRMF.metrics.startTimer("5pcit"), PTRMF.metrics
                        .logCount("5pcir.attempt"), $.ajax({
                            url: n.data("pci-url"),
                            data: {
                                EncryptionList: [{
                                    ClearText: n.attr(
                                        "fsVal")
                                }]
                            },
                            dataType: "json",
                            type: "POST",
                            headers: {
                                "Access-Token": n.data(
                                    "pci-token")
                            },
                            complete: function(n, t) {
                                PTRMF.metrics.endTimer(
                                    "5pcit");
                                PTRMF.metrics.logCount(
                                    "5pcir." + t)
                            }
                        })
                        .done(function(n) {
                            i.forEach(function(t) {
                                if (t.IId === r) return
                                    t.Val = n[0].Token, !
                                    1
                            });
                            t.resolve()
                        }));
                    i.push({
                        IId: r,
                        Val: f
                    })
                });
            Array.isArray(PTRMF.services.values.currentForm.Parameters) ||
                (PTRMF.services.values.currentForm.Parameters = []);
            PTRMF.services.values.currentForm.Parameters.push({
                Name: "submit",
                Val: n
            });
            e = function(n, t) {
                if (n && n instanceof Array)
                    for (var i in n)
                        if (n[i].Name === t) return i;
                return -1
            };
            o = function(n, t, i) {
                var r = e(n, t);
                r !== -1 && (n[r].Val || (n[r].Val = i))
            };
            o(PTRMF.services.values.formSysInfo, "referrerUrl", window.location
                .href);
            r = {
                FormName: PTRMF.services.values.currentForm.FormName,
                FormControlValues: i,
                Parameters: PTRMF.services.values.currentForm.Parameters,
                ReturnedSystemInfo: PTRMF.services.values.formSysInfo
            };
            PTRMF.metrics.endTimer("5tof." + PTRMF.services.values.currentForm
                .FormName);
            f = function() {
                PTRMF.services.operations.makeServiceCall("ProcessForm",
                    r, function(n) {
                        PTRMF.services.values.currentTabIndex = 0;
                        PTRMF.services.values.currentForm = {
                            FormName: n.FormName || PTRMF.services
                                .values.currentForm.FormName,
                            Parameters: []
                        };
                        PTRMF.services.values.container.html(PTRMF.controls
                            .controlFactory.render(n));
                        PTRMF.events.eventManager.WireUpForm();
                        Array.isArray(n.SystemInfoResponse) && n.SystemInfoResponse
                            .forEach(function(n) {
                                if (n.Name == "addToPageStack") {
                                    var t = n.Val;
                                    PTRMF.services.values.firstForm =
                                        PTRMF.services.values.currentForm;
                                    PTRMF.services.values.pageStack
                                        .push(PTRMF.services.values
                                            .currentForm)
                                }
                            });
                        t && t(n);
                        PTRMF.services.values.processFormCallback &&
                            PTRMF.services.values.processFormCallback({
                                FormName: PTRMF.services.values
                                    .currentForm.FormName,
                                SystemInfoResponse: n.SystemInfoResponse,
                                Status: n.Status
                            });
                        PTRMF.metrics.endTimer("5pf." + r.FormName)
                    })
            };
            u ? u.done(function() {
                f()
            }) : f()
        },
        getAddressLookup: function(n, t, i) {
            var r = {
                PostalCode: t,
                HouseNumber: n
            };
            this.makeServiceCall("lookupAddress", r, function(n) {
                i(n)
            })
        },
        getLookups: function(n, t, i, r) {
            var u = {
                FormName: n,
                ItemId: t,
                FilterValue: i
            };
            this.makeServiceCall("getLookups", u, function(n) {
                r(n)
            })
        },
        serverValidate: function(n, t, i, r) {
            PTRMF.metrics.startTimer("5vi." + n + "." + t);
            var u = {
                FormName: n,
                RequestData: {
                    IId: t,
                    Value: i
                }
            };
            this.makeServiceCall("ValidateItem", u, function(i) {
                PTRMF.metrics.endTimer("5vi." + n + "." + t);
                r(i)
            })
        },
        makeServiceCall: function(n, t, i) {
            var f = new Date,
                r = function() {
                    var r = PTRMF.services.helpers.buildFormsServicePostRequest(
                        n, t);
                    $.ajax({
                        type: "POST",
                        url: r.url,
                        data: r.data,
                        success: function(n) {
                            i(n)
                        }
                    })
                },
                u = PTRMF.services.values.sessionResponseInfo && PTRMF.services
                .values.sessionOpenedAt,
                o = u && PTRMF.forms.utils.getUTCDate(f) - PTRMF.services.values
                .sessionOpenedAt > PTRMF.services.values.sessionResponseInfo
                .SessionTimeout,
                e = PTRMF.services.values.sessionBag.SessionId,
                s = PTRMF.services.values.sessionBag.CasinoId;
            !u && e ? PTRMF.services.session.resume(e, function() {
                r()
            }) : !u || o ? PTRMF.services.session.open(function() {
                PTRMF.metrics.logCount("5ops");
                "standalone" in navigator && navigator.standalone &&
                    PTRMF.metrics.logCount("5ihs");
                r()
            }) : r();
            PTRMF.services.values.sessionOpenedAt = PTRMF.forms.utils.getUTCDate(
                f)
        }
    };
PTRMF.namespace("services")
    .values = PTRMF.services.values || {
        setCallbacks: function(n) {
            $.each(n, function(n, t) {
                PTRMF.services.values[t.event] = t.callBack
            })
        },
        currentTabIndex: 0,
        closeFormCallback: function(n) {
            PTRMF.ui.UIManager.CloseBrowserWindow(n)
        },
        backToGamesCallback: function() {},
        getFormCallback: function() {},
        processFormCallback: function() {},
        gotoLoginCallback: function() {},
        logoutCallback: function() {},
        closeCallback: function() {
            PTRMF.services.values.backToGamesCallback()
        },
        pageViewChanged: function() {},
        formRenderedCallback: function() {},
        sessionResponseInfo: null,
        sessionOpenedAt: null,
        sessionBag: {
            serviceUrl: "",
            CasinoId: null,
            LanguageCode: "en",
            LoginName: "",
            Password: "",
            UserId: 0,
            ClientTypeId: 40
        },
        currentForm: {
            FormName: "",
            Parameters: []
        },
        firstForm: {
            FormName: "",
            Parameters: []
        },
        container: null,
        formSysInfo: [],
        pageStack: [],
        pendingSubmitCall: null,
        getNextTabIndex: function() {
            return PTRMF.services.values.currentTabIndex++, PTRMF.services.values
                .currentTabIndex
        },
        reset: function() {
            this.processFormCallback = undefined;
            this.gotoLoginCallback = undefined;
            this.logoutCallback = undefined;
            this.sessionResponseInfo = undefined;
            this.currentForm.FormName = "";
            this.currentForm.Parameters.length = 0;
            this.formSysInfo.length = 0;
            this.pageStack.length = 0;
            this.pendingSubmitCall = null
        }
    };
PTRMF.namespace("validation")
    .validator = PTRMF.validation.validator || {
        validateControl: function(n, t) {
            var i, r;
            t = t || "control";
            switch ($(n)
                .get(0)
                .tagName.toLowerCase()) {
                case "input":
                    r = PTRMF.validation.validator.getContainerFieldSet(n);
                    i = this.validateInputTag(n, t);
                    r.attr("mode") == "amount" ? PTRMF.events.eventManager.HandleAmountFieldUpdate(
                        n, r) : PTRMF.events.eventManager.SetInputValue(
                        n);
                    break;
                case "select":
                    i = this.validateSelectTag(n, t);
                    break;
                default:
                    i = !0
            }
            return i
        },
        validateOnSubmitMutlifieldValidators: function() {
            $('.formsService div.multiFieldValidator[mode="submit"]')
                .each(function(n, t) {
                    var f = $(this)
                        .attr("data-state"),
                        i;
                    if (f !== "valid-data") {
                        var e = $(this)
                            .attr("fsIid"),
                            r = $(t)
                            .attr("data-targets")
                            .split(","),
                            u = [];
                        for (i = 0; i < r.length; i++) u.push($(
                            'fieldset[fsIid="' + r[i].trim() +
                            '"]'));
                        PTRMF.validation.validator.doMultipleInputServerValidation(
                            u, null, e)
                    }
                })
        },
        validateView: function(n, t) {
            var i, r, f, e, u;
            return t = typeof t == "undefined" ? !1 : t, i = !0, r = !0, $.each(
                    $(n)
                    .find("fieldset")
                    .not(".valid,.invalid,.validating,.bypassValidation")
                    .find("input,select"), function(n, t) {
                        $(t)
                            .attr("inputid") !== "Password" && (r = PTRMF.validation
                                .validator.validateControl($(t), "view"), f =
                                r ? "valid" : "invalid", PTRMF.ui.UIManager
                                .SetControlStyle(PTRMF.validation.validator
                                    .getContainerFieldSet($(t)), f), i = i &&
                                r)
                    }), i = i && !$(n)
                .find("fieldset")
                .is(".invalid"), e = $("div.formsService:first")
                .attr("data-form"), u = "5fv." + e, i && t ? (PTRMF.metrics
                    .endTimer(u), PTRMF.ui.UIManager.ShowLoader(), PTRMF.validation
                    .validator.validateOnSubmitMutlifieldValidators()) : (
                    PTRMF.metrics.logCount("5sb." + e), PTRMF.metrics.hasTimer(
                        u) || PTRMF.metrics.startTimer(u)), i = i && $(n)
                .find("div.multiFieldValidator.invalid")
                .length === 0
        },
        isViewBusyValidating: function(n) {
            return $(n)
                .find("fieldset")
                .is(".validating") || $(n)
                .find("div.multiFieldValidator")
                .is(".validating")
        },
        validateSelectTag: function(n, t) {
            var i = this.getContainerFieldSet(n);
            return $(n)
                .attr("required") == "required" && $(n)
                .attr("disabled") !== "disabled" && $(n)
                .val()
                .length == 0 ? !1 : i.attr("mode") === "cardexpiry" ? this.validateCardExpiry(
                    i, t) : i.attr("fsType") === "date" ? this.validateDateControl(
                    i, t) : !0
        },
        validateCardExpiry: function(n, t) {
            var i = $(n)
                .find('select[fsType="date_month"]:first')
                .val(),
                r = $(n)
                .find('select[fsType="date_year"]:first')
                .val(),
                u = new Date(r, i, 0, 23, 59, 59, 0);
            return i === "" || r === "" ? t === "control" ?
                "insufficient-data" : !1 : u >= new Date
        },
        validateDateControl: function(n, t) {
            var i = !0,
                f;
            if (n.attr("fsVal") && n.attr("fsVal")
                .length !== 0 ? $(n)
                .find("select")
                .each(function() {
                    if (!$(this)
                        .attr("fsVal") || $(this)
                        .attr("fsVal")
                        .length === 0) return i = "insufficient-data", !
                        1
                }) : i = !1, t === "view" && i === "insufficient-data" && (
                    i = !1), i && n.attr("max")) {
                var r = n.attr("max")
                    .split("/"),
                    e = new Date(parseInt(r[0], 10), parseInt(r[1], 10) - 1,
                        parseInt(r[2], 10)),
                    u = function(t) {
                        return parseInt(n.find('[fstype="' + t + '"]')
                            .attr("fsval"), 10)
                    },
                    o = new Date(u("date_year"), u("date_month"), u(
                        "date_day"));
                o > e && (i = !1)
            }
            return i === !0 && (f = this.getPostValidationCallback(n), f &&
                (f(), i = "insufficient-data")), i
        },
        validateInputTag: function(n) {
            var t = n.val();
            if (t.length > 0 && t.trim() === "") return !1;
            switch (n.attr("type")) {
                case "tel":
                case "password":
                case "email":
                case "text":
                    if (n.attr("mode") === "amount" || n.attr("fsType") ===
                        "number") return n.val($.trim(n.val())), this.validateNumeric(
                        n);
                    if (n.attr("required") === undefined && jQuery.trim(n.val()) ===
                        "") return !0;
                    this.validateInput(n);
                case "number":
                    return this.validateNumeric(n);
                case "checkbox":
                    return this.validateCheckbox(n)
            }
            return !0
        },
        validateCheckbox: function(n) {
            var t = !0;
            return $(n)
                .attr("required") == "required" && (t = $(n)
                    .is(":checked") ? !0 : !1), t
        },
        checkNumericLengthLimit: function(n) {
            var t = this.getContainerFieldSet(n),
                r = t.attr("max"),
                u = $(n)
                .val()
                .length,
                i = !1;
            return t.attr("mode") !== "amount" && u >= r && (i = !0), i
        },
        validateNumeric: function(n) {
            var t, r = this.getContainerFieldSet(n),
                i = r.find("input:first"),
                u = r.attr("min"),
                f = r.attr("max"),
                o = r.attr("regex"),
                s = r.attr("mode")
                .toLowerCase(),
                e;
            t = !0;
            switch (s) {
                case "amount":
                    u && f ? t = t && i.val() * 100 >= u && i.val() * 100 <=
                        f : u && f.length === 0 ? t = t && i.val() * 100 >=
                        u : f && u.length === 0 && (t = t && i.val() * 100 <=
                            f);
                    break;
                default:
                    u && f && (t = t && i.val()
                        .length >= u && i.val()
                        .length <= f)
            }
            return o && o.length > 0 && (t = t && this.validateRegex(o, i.val())),
                r.attr("mode") === "creditcard" && (t = t && PTRMF.validation
                    .validator.validateLuhn(i.val())), r.attr("mandatory") ===
                "false" && r.find("input:first")
                .val() === "" && (t = !0), t ? (e = this.getPostValidationCallback(
                        r), r.attr("valUrl")
                    .length > 0 && i.val()
                    .length > 0 ? (this.doInputServerValidation(i, r,
                        function(n) {
                            s == "creditcard" && (n.Valid ? i.next(
                                    'p[class="valicon"]')
                                .attr("style",
                                    "background-image:url(" + PTRMF
                                    .services.values.sessionBag.serviceUrl +
                                    n.Text + ")") : i.next(
                                    'p[class="valicon"]')
                                .attr("style", ""));
                            n.Valid && e ? e() : PTRMF.services.values.pendingSubmitCall &&
                                PTRMF.services.values.pendingSubmitCall()
                        }), t = !1) : e && e()) : s == "creditcard" && i.next(
                    'p[class="valicon"]')
                .attr("style", ""), t
        },
        getPostValidationCallback: function(n) {
            return n.attr("data-notify-post-validate") ? function() {
                var t = $(n)
                    .attr("data-notify-post-validate");
                $("#" + t)
                    .trigger({
                        type: "post-validate",
                        sourceInputId: n.attr("fsIid")
                    })
            } : null
        },
        validateInput: function(n) {
            var r = !0,
                t, i = this.getContainerFieldSet(n);
            switch (i.attr("mode")) {
                case "phonenumber":
                    t = i.find("input:last");
                    r = this.doBaseInputValidation(t, i);
                    r = r && i.find("input:first")
                        .val()
                        .length > 0;
                    break;
                case "address":
                    t = i.find("input:first");
                    r = this.doBaseInputValidation(t, i);
                    t = t.next("input");
                    r = r && t.val()
                        .length <= i.attr("max");
                    break;
                default:
                    t = i.find("input:first");
                    r = this.doBaseInputValidation(t, i)
            }
            return r && i.attr("valUrl")
                .length > 0 && t.val()
                .length > 0 && (this.doInputServerValidation(t, i), r = !1),
                r
        },
        doBaseInputValidation: function(n, t) {
            var r = t.attr("min"),
                u = t.attr("max"),
                i = t.attr("regex");
            return valid = n.val()
                .length >= r && n.val()
                .length <= u, i && i.length > 0 && (valid = valid && this.validateRegex(
                    i, n.val())), valid
        },
        doInputServerValidation: function(n, t, i) {
            var e = t.attr("fsIid"),
                f = "",
                u, r;
            t.find('div[class="suggestionBlock"]')
                .remove();
            PTRMF.ui.UIManager.SetControlStyle(t, "validating");
            r = n.val();
            switch (t.attr("mode")) {
                case "phonenumber":
                    r = t.find("input:first")
                        .val() + ";" + n.val();
                    break;
                case "creditcard":
                    r = r.substring(0, 6)
            }
            PTRMF.services.operations.serverValidate(PTRMF.services.values.currentForm
                .FormName, e, r, function(r) {
                    var e, o;
                    if (r.Valid) PTRMF.ui.UIManager.SetControlStyle(t,
                        "valid");
                    else if (r.Text && r.Text !== "" ? (PTRMF.ui.UIManager
                            .SetControlStyle(t,
                                "invalid server-invalid"), e = t.find(
                                "span.serverError"), e.html(r.Text.replace(
                                /(\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)/gi,
                                '<a href="mailto:$1">$1<\/a>'))) :
                        PTRMF.ui.UIManager.SetControlStyle(t, "invalid"),
                        r.Suggestions && r.Suggestions.length > 0) {
                        for (f = "", u = 0; u < r.Suggestions.length; u++)
                            f += "<p>" + r.Suggestions[u].Val + "<\/p>";
                        t.find('div[class="suggestionBlock"]')
                            .length === 0 && (o = $(
                                    '<div class="suggestionBlock"><\/div>'
                                ), t.find("span:last")
                                .after($(o)
                                    .html(f)), t.find(
                                    'div[class="suggestionBlock"] p')
                                .click(function() {
                                    n.val($(this)
                                        .html());
                                    PTRMF.events.eventManager.SetInputValue(
                                        n);
                                    $(this)
                                        .parent()
                                        .remove();
                                    PTRMF.validation.validator.validateInput(
                                        n);
                                    $(n)
                                        .select()
                                }))
                    }
                    $(t)
                        .removeClass("validating");
                    i ? i(r) : PTRMF.services.values.pendingSubmitCall &&
                        PTRMF.services.values.pendingSubmitCall()
                })
        },
        doMultipleInputServerValidation: function(n, t, i) {
            PTRMF.ui.UIManager.SetControlStyle($("#" + i), "validating");
            var r = n.map(function(n) {
                var i = n.attr("fsVal");
                return i !== "" && PTRMF.ui.UIManager.SetControlStyle(
                    n, "validating"), {
                    IId: n.attr("fsIid"),
                    Value: n.attr("fsVal"),
                    IsSourceInput: n.attr("fsIid") === t
                }
            });
            PTRMF.services.operations.serverValidate(PTRMF.services.values.currentForm
                .FormName, i, JSON.stringify(r), function(r) {
                    var u, f;
                    if ($("#noLimit:checked")
                        .length > 0 || $("#noLimit")
                        .parent()
                        .parent()
                        .hasClass("focus")) {
                        $(".validating")
                            .removeClass("validating");
                        return
                    }
                    n.forEach(function(n) {
                        n.removeClass("validating")
                    });
                    u = $("#" + i);
                    u.removeClass("validating");
                    u.attr("data-state", "invalid-data");
                    f = JSON.parse(r.Text);
                    f.IsGlobalError ? (PTRMF.ui.UIManager.HideLoader(),
                            u.addClass("invalid"), u.parent()
                            .show()
                            .find("p")
                            .text(f.GlobalErrorText), n.forEach(
                                function(n) {
                                    n.removeClass("valid")
                                }), u.removeClass("validating"), PTRMF.services
                            .values.pendingSubmitCall && (PTRMF.services
                                .values.pendingSubmitCall = null)) : f.Errors
                        .length > 0 ? (PTRMF.ui.UIManager.HideLoader(),
                            f.Errors.forEach(function(n) {
                                var t = $('fieldset[fsIid="' + n.IId +
                                    '"]');
                                PTRMF.ui.UIManager.SetControlStyle(
                                    t, "invalid server-invalid"
                                );
                                t.find("span.serverError")
                                    .text(n.Message)
                            }), n.forEach(function(n) {
                                n.is("invalid") || n.addClass(
                                    "valid")
                            }), PTRMF.services.values.pendingSubmitCall &&
                            (PTRMF.services.values.pendingSubmitCall =
                                null)) : f.ValidationPostponed ? n.forEach(
                            function(n) {
                                n.attr("fsIid") === t && n.addClass(
                                    "valid")
                            }) : (u.attr("data-state", "valid-data"), u
                            .addClass("valid"), PTRMF.services.values.pendingSubmitCall &&
                            PTRMF.services.values.pendingSubmitCall(),
                            n.forEach(function(n) {
                                n.addClass("valid")
                            }))
                })
        },
        getContainerFieldSet: function(n) {
            return $(n)
                .parents("fieldset")
        },
        validateRegex: function(n, t) {
            var i = new RegExp(n);
            return i.test(t)
        },
        validateLuhn: function(n) {
            for (var i = n.length, r = 0, u = [[0, 1, 2, 3, 4, 5, 6, 7, 8,
                9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], t = 0; i--;) t += u[r]
                [parseInt(n.charAt(i), 10)], r ^= 1;
            return t % 10 == 0 && t > 0
        },
        setValid: function(n) {
            var t, i, r, u;
            if ($(".formsService section.validation-summary")
                .css("display", "none"), t = this.validateControl($(n)), t ===
                "insufficient-data") {
                this.getContainerFieldSet($(n))
                    .removeClass("valid invalid")
                    .addClass("insufficient-data");
                return
            }
            t ? (this.getContainerFieldSet($(n))
                .removeClass("insufficient-data"), PTRMF.ui.UIManager.SetControlStyle(
                    this.getContainerFieldSet($(n)), "valid")) : (this.getContainerFieldSet(
                    $(n))
                .removeClass("insufficient-data"), i = this.getContainerFieldSet(
                    $(n)), r = i.is(".validating") ? "validating" :
                "invalid", PTRMF.ui.UIManager.SetControlStyle(this.getContainerFieldSet(
                    $(n)), r), r === "invalid" && (u = $(
                        "div.formsService:first")
                    .attr("data-form"), PTRMF.metrics.logCount("5ve." +
                        u + "." + i.attr("fsiid"))))
        }
    };
PTRMF.namespace("jqueryplugins")
    .fsPlugin = function(n) {
        var i = {
                initialForm: {
                    formName: "Olr",
                    parameters: {}
                }
            },
            t = {
                init: function(t) {
                    return PTRMF.services.values.container = this, t && (t.sessionBag &&
                        (n.extend(PTRMF.services.values.sessionBag, t.sessionBag),
                            delete t.sessionBag), n.extend(i, t)), this
                },
                getForm: function(t, i, r, u) {
                    return PTRMF.ui.UIManager.resetAndShowLoader(this, u),
                        PTRMF.services.values.firstForm = {
                            FormName: i,
                            Parameters: r
                        }, t && n.extend(PTRMF.services.values.sessionBag,
                            t), u && PTRMF.services.values.setCallbacks(u),
                        PTRMF.services.operations.getForm(i, r, function(n) {
                            PTRMF.ui.UIManager.LoadContents(n);
                            PTRMF.ui.UIManager.HideLoader()
                        }), this
                },
                setFormRequiredSystemInfoFields: function(n) {
                    return n && (PTRMF.services.values.formSysInfo = n),
                        this
                },
                registration: function(t, i) {
                    return PTRMF.ui.UIManager.resetAndShowLoader(this, i),
                        PTRMF.services.values.firstForm = {
                            FormName: "Olr",
                            Parameters: []
                        }, t && n.extend(PTRMF.services.values.sessionBag,
                            t), i && PTRMF.services.values.setCallbacks(i),
                        PTRMF.services.operations.getForm("Olr", [],
                            function(n) {
                                PTRMF.ui.UIManager.GetFormResponseHandler(n);
                                PTRMF.ui.UIManager.HideLoader()
                            }), this
                },
                banking: function(t, i, r) {
                    return PTRMF.ui.UIManager.resetAndShowLoader(this),
                        PTRMF.services.values.firstForm = {
                            FormName: "PurchaseMethods",
                            Parameters: r || []
                        }, t && n.extend(PTRMF.services.values.sessionBag,
                            t), i && PTRMF.services.values.setCallbacks(i),
                        PTRMF.services.operations.getForm("PurchaseMethods",
                            PTRMF.services.values.firstForm.Parameters,
                            function(n) {
                                PTRMF.ui.UIManager.GetFormResponseHandler(n);
                                PTRMF.ui.UIManager.HideLoader()
                            }), this
                }
            };
        n.fn.formsService = function(i) {
            if (t[i]) return t[i].apply(this, Array.prototype.slice.call(
                arguments, 1));
            if (typeof i != "object" && i) n.error("Method " + i +
                " does not exist on jQuery.formsService");
            else return t.init.apply(this, arguments)
        }
    }(jQuery);
PTRMF.i18n = PTRMF.i18n || {
    getString: function(n, t) {
        var i = t || PTRMF.services.values.sessionBag.LanguageCode;
        return this[i] || (i = "en"), this[i][n] || this.en[n]
    },
    en: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Show password"
    },
    da: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Vis adgangskode"
    },
    de: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Kennwort anzeigen"
    },
    es: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Mostrar contraseña"
    },
    fi: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Näytä Salasana"
    },
    ja: {
        CantCloseWindow: "申し訳ございません お使いのブラウザーを閉じることが出来ませんでした ご使用中のタブを閉じてください",
        ShowPassword: "パスワードを表示"
    },
    nl: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Wachtwoord weergeven"
    },
    no: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Vis passord"
    },
    ru: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Показать пароль"
    },
    sv: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Visa lösenord"
    },
    it: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Mostra password"
    },
    lv: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Rādīt paroli"
    },
    el: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Προβολή κωδικού πρόσβασης"
    },
    fr: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Afficher le mot de passe"
    },
    pt: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Mostrar palavra-passe"
    },
    pl: {
        CantCloseWindow: "Oops! The browser won't let us close this page for you. Please close it by closing the current tab.",
        ShowPassword: "Pokaż Hasło"
    }
};
(function(n, t) {
    t = t || (n.lobby = {});
    t.banking = t.banking || {};
    t.banking.viewData = {};
    t.banking.callbackBag = [];
    t.banking.isHidden = !1;
    t.banking.init = function() {
        t.marshal.registerURL("Banking", t.banking);
        t.banking.buildCallbackBag();
        t.banking.buildViewData();
        t.config.InitialView === "banking" && (t.marshal.processLoadInitialStartURL = !
            1);
        t.requireLoaded();
        t.logging.logDebug("Banking component initialised")
    };
    t.banking.buildCallbackBag = function() {
        t.banking.callbackBag = [];
        t.banking.callbackBag.push({
            event: "backToGamesCallback",
            callBack: function() {
                t.marshal.loadURL("Games");
                t.banking.signals.backToGamesCalled()
            }
        });
        t.banking.callbackBag.push({
            event: "getFormCallback",
            callBack: function(n) {
                n.FormName === "WithdrawalPaymentMethod" ?
                    (t.logging.logDebug("Withdraw Launched"),
                        t.tracking.trackEvent(t.enums.trackingEvents
                            .WITHDRAWLAUNCHED), n.Status.StatusCode !==
                        0 && (t.logging.logDebug(
                            "Fetch Banking Withdrawal Failed"
                        ), t.tracking.trackEvent(t.enums
                            .trackingEvents.FETCHBANKINGWITHDRAWALFALIED
                        ))) : n.FormName ===
                    "PurchaseMethods" ? (t.logging.logDebug(
                            "Deposit Launched"), t.banking.isHidden ||
                        t.tracking.trackEvent(t.enums.trackingEvents
                            .DEPOSITLAUNCHED), n.Status.StatusCode !==
                        0 && (t.logging.logDebug(
                            "Fetch Banking Deposit Failed"
                        ), t.tracking.trackEvent(t.enums
                            .trackingEvents.FETCHBANKINGDEPOSITFALIED
                        ))) : n.Status.StatusCode !== 0 &&
                    (t.logging.logDebug(
                            "Fetch Banking Failed"), t.tracking
                        .trackEvent(t.enums.trackingEvents.FETCHBANKINGFALIED)
                    )
            }
        });
        t.banking.callbackBag.push({
            event: "processFormCallback",
            callBack: function(n) {
                n.Status.StatusCode === 0 && (n.FormName.indexOf(
                        "ReverseWithdrawal") > -1 ? t.tracking
                    .trackEvent(t.enums.trackingEvents.WITHDRAWREVERSED) :
                    n.FormName.indexOf("Withdrawal") >
                    -1 ? t.tracking.trackEvent(t.enums.trackingEvents
                        .WITHDRAWSUCCESSFUL) : n.FormName
                    .indexOf("Purchase") > -1 && t.tracking
                    .trackEvent(t.enums.trackingEvents.DEPOSITSUCCESSFUL)
                );
                t.banking.signals.formProcessed();
                t.logging.logDebug(
                    "bankingFormProcessedCallback")
            }
        });
        t.banking.callbackBag.push({
            event: "pageViewChanged",
            callBack: function() {
                t.logging.logDebug(
                    "pageViewChangedCallback")
            }
        });
        t.banking.callbackBag.push({
            event: "ShowLoader",
            callBack: function() {
                t.banking.isHidden || t.spinner.start()
            }
        });
        t.banking.callbackBag.push({
            event: "HideLoader",
            callBack: function() {
                t.spinner.stop()
            }
        })
    };
    t.banking.buildViewData = function() {
        t.banking.viewData = {
            bankingEndPointType: t.config.Banking.EndPointType,
            lobbyName: t.config.Banking.LobbyName,
            languageCode: t.config.Banking.LanguageCode,
            formsClientUrl: t.config.Core.FormsClientUrl,
            casinoID: t.config.Banking.CasinoID,
            clientTypeID: t.config.Banking.ClientTypeID,
            isPracticeLogin: t.player.service.getType() === t.enums
                .playerTypes.PRACTICE ? !0 : !1,
            isBingo: t.config.Banking.IsBingo
        }
    };
    t.banking.loadBanking = function() {
        t.marshal.loadURL("Banking")
    };
    t.banking.getState = function() {
        return t.player.isValidLogin() ? "Display" : (t.banking.signals
            .getStateInvalid(), "Invalid")
    };
    t.banking.loadView = function(n, i) {
        t.banking.isHidden = i;
        t.banking.buildCallbackBag();
        t.banking.buildViewData();
        var r = t.banking.viewData,
            u = {
                serviceUrl: r.formsClientUrl,
                CasinoId: r.casinoID,
                LanguageCode: r.languageCode,
                UserId: t.player.getUserID() || 0,
                PlayerType: t.player.service.getType() === t.enums.playerTypes
                    .PRACTICE ? 1 : 0,
                ClientTypeId: r.clientTypeID,
                authToken: t.player.playerService.getAuthToken()
            };
        r.isBingo ? (t.utils.viewLoader.formsService.loadView(
            "PurchaseMethods", u, t.banking.callbackBag, [{
                Name: "LaunchingAppID",
                Val: "2"
            }, {
                Name: "ShowBackNav",
                Val: "true"
            }], "banking", i), t.logging.logDebug(
            "Banking Bingo Open")) : (t.utils.viewLoader.formsService
            .loadView("PurchaseMethods", u, t.banking.callbackBag, [{
                Name: "ShowBackNav",
                Val: "true"
            }], "banking", i), t.logging.logDebug("Banking Open"));
        i || t.tracking.trackEvent(t.enums.trackingEvents.BANKINGOPEN)
    };
    t.require()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.banking = t.banking || {};
    t.banking.signals = {
        init: function() {
            t.banking.signals.loadSubscribe();
            t.logging.logDebug("Banking Signals Loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("banking.navigation.button.click",
                function(n) {
                    t.banking.loadBanking(n)
                });
            t.signal.subscribe("lobby.start", function() {
                    t.banking.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    t.config.InitialView === "banking" && t.banking
                        .loadBanking()
                })
                .disposeAfter(1)
        },
        formProcessed: function() {
            t.logging.logDebug(
                "Signal: lobby.banking.form.processed");
            t.signal.publish("lobby.banking.form.processed")
        },
        getStateInvalid: function() {
            t.logging.logDebug(
                "Signal: lobby.banking.getState.invalid");
            t.signal.publish("lobby.banking.getState.invalid")
        },
        backToGamesCalled: function() {
            t.logging.logDebug(
                "Signal: lobby.banking.form.backToGames");
            t.signal.publish("lobby.banking.form.backToGames")
        }
    };
    t.banking.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.registration = t.registration || {};
    t.registration.viewData = {};
    t.registration.callbackBag = [];
    t.registration.registrationCompleted = !1;
    t.registration.isHidden = !1;
    t.registration.init = function() {
        t.marshal.registerURL("Registration", t.registration);
        t.registration.buildCallbackBag();
        t.config.InitialView === "registration" && (t.marshal.processLoadInitialStartURL = !
            1);
        t.requireLoaded();
        t.logging.logDebug("Registration component initialised")
    };
    t.registration.setFormRequiredSystemInfoFields = function(n) {
        var i = [{
            Name: "useridentifier",
            Val: "RUNT"
        }, {
            Name: "hddid",
            Val: n.sampleHddID
        }, {
            Name: "machineid",
            Val: n.sampleMachineID
        }, {
            Name: "btag1",
            Val: n.btag1
        }, {
            Name: "btag2",
            Val: n.btag2
        }, {
            Name: "btag3",
            Val: n.btag3
        }, {
            Name: "btag4",
            Val: n.btag4
        }, {
            Name: "btag5",
            Val: n.btag5
        }];
        t.utils.viewLoader.formsService.formsClient(
            "setFormRequiredSystemInfoFields", i)
    };
    t.registration.buildCallbackBag = function() {
        t.registration.callbackBag = [];
        t.registration.callbackBag.push({
            event: "backToGamesCallback",
            callBack: function() {
                t.marshal.loadURL("Games");
                t.registration.signals.backToGamesCalled()
            }
        });
        t.registration.callbackBag.push({
            event: "getFormCallback",
            callBack: function(n) {
                n.Status.StatusCode === 0 ? (t.registration
                    .setFormRequiredSystemInfoFields(t.registration
                        .viewData), t.logging.logDebug(
                        "Registration Launched")) : (t.logging
                    .logDebug(
                        "Fetch Registration Failed"), t
                    .tracking.trackEvent(t.enums.trackingEvents
                        .FETCHREGISTRATIONFALIED))
            }
        });
        t.registration.callbackBag.push({
            event: "ShowLoader",
            callBack: function() {
                t.registration.isHidden || t.spinner.start()
            }
        });
        t.registration.callbackBag.push({
            event: "HideLoader",
            callBack: function() {
                t.spinner.stop()
            }
        });
        t.registration.callbackBag.push({
            event: "processFormCallback",
            callBack: function(n) {
                var r = n.SystemInfoResponse,
                    i;
                n.Status.StatusCode === 0 && r.length > 0 &&
                    (t.logging.logDebug(
                            "Registration Successful"), t.tracking
                        .trackEvent(t.enums.trackingEvents.REGISTRATIONSUCCESSFUL),
                        i = {}, $.each(r, function(n, r) {
                            if (r.Val) switch (r.Name) {
                                case "username":
                                    t.player.setUsername(
                                        t.utils
                                        .trim(r
                                            .Val
                                        ));
                                    i.username = t.utils
                                        .trim(r.Val);
                                    break;
                                case "password":
                                    i.password = t.utils
                                        .trim(r.Val)
                            }
                        }), t.registration.registrationCompleted = !
                        0, t.player.settings.setAutoLogin(!
                            1, !0), i.autologin = !1, t.login
                        .loginUser(i, ""))
            }
        });
        t.registration.callbackBag.push({
            event: "gotoLoginCallback",
            callBack: t.registration.loadOnCallback
        });
        t.registration.callbackBag.push({
            event: "pageViewChanged",
            callBack: function() {
                t.logging.logDebug(
                    "Page View Changed Registration")
            }
        })
    };
    t.registration.loadOnCallback = function() {
        t.login.isLoggedIn(t.registration.loadOnCallback) ? t.marshal.loadURL(
            t.utils.getCurrentRoute()) : t.marshal.loadURL(t.utils.url
            .replace("Login"))
    };
    t.registration.getState = function() {
        return t.player.isValidLogin() && t.registration.registrationCompleted ?
            "Processed" : t.player.isValidLogin() && !t.registration.registrationCompleted ?
            "Completed" : t.player.getRealUsername() ? "Invalid" :
            "Display"
    };
    t.registration.loadRegistration = function() {
        t.marshal.loadURL(t.utils.getCurrentRoute())
    };
    t.registration.loadView = function(n, i) {
        t.registration.isHidden = i;
        t.registration.buildCallbackBag();
        t.registration.viewData = {
            languageCode: t.config.Registration.LanguageCode,
            formsClientUrl: t.config.Core.FormsClientUrl,
            playerType: t.config.Registration.PlayerType,
            clientTypeID: t.config.Registration.ClientTypeID,
            OlrType: t.config.Registration.OlrType,
            casinoID: t.config.Registration.CasinoID,
            sampleHddID: t.config.SampleHddID,
            sampleMachineID: t.config.SampleMachineID,
            btag1: t.player.bannerTags.bannerTag1 || "",
            btag2: t.player.bannerTags.bannerTag2 || "",
            btag3: t.player.bannerTags.bannerTag3 || "",
            btag4: t.player.bannerTags.bannerTag4 || "",
            btag5: t.player.bannerTags.bannerTag5 || ""
        };
        var r = {
            serviceUrl: t.registration.viewData.formsClientUrl,
            CasinoId: t.registration.viewData.casinoID,
            LanguageCode: t.registration.viewData.languageCode,
            ClientTypeId: t.registration.viewData.clientTypeID,
            PlayerType: t.registration.viewData.playerType,
            btag1: t.player.bannerTags.bannerTag1 || "",
            btag2: t.player.bannerTags.bannerTag2 || "",
            btag3: t.player.bannerTags.bannerTag3 || "",
            btag4: t.player.bannerTags.bannerTag4 || "",
            btag5: t.player.bannerTags.bannerTag5 || ""
        };
        t.utils.viewLoader.formsService.loadView(t.registration.viewData
            .OlrType, r, t.registration.callbackBag, [],
            "registration", i);
        i || t.tracking.trackEvent(t.enums.trackingEvents.REGISTRATIONPAGE1);
        t.logging.logDebug("Registration Loaded")
    };
    t.require()
})(window, lobby);
(function(n) {
    n = n || (global.lobby = {});
    n.registration = n.registration || {};
    n.registration.signals = {
        init: function() {
            n.registration.signals.loadSubscribe();
            n.logging.logDebug("Registration Signals Loaded")
        },
        loadSubscribe: function() {
            n.signal.subscribe("marshal.viewLoaded.account",
                function() {
                    n.registration.loadRegistration()
                });
            n.signal.subscribe("login.registerbutton.click",
                function() {
                    n.registration.loadRegistration()
                });
            n.signal.subscribe("lobby.start", function() {
                    n.registration.init()
                })
                .disposeAfter(1);
            n.signal.subscribe("lobby.loaded", function() {
                    n.config.InitialView === "registration" &&
                        n.registration.loadRegistration()
                })
                .disposeAfter(1)
        },
        backToGamesCalled: function() {
            n.logging.logDebug(
                "Signal: lobby.registration.form.backToGames");
            n.signal.publish("lobby.registration.form.backToGames")
        }
    };
    n.registration.signals.init()
})(lobby);
(function(n, t, i) {
    var r = null;
    t = t || (n.lobby = {});
    t.games = t.games || {};
    t.games.providers = t.games.providers || {};
    t.games.currentProvider = t.games.currentProvider || null;
    t.games.init = function() {
        var u, n;
        r = this;
        t.config.CurrentGameCategory && i.inArray(t.config.CurrentGameCategory,
            Object.keys(t.config.Categories.Categories)) || (t.config
            .CurrentGameCategory = Object.keys(t.config.Categories.Categories)[
                0]);
        r.providers = {};
        for (u in t.config.Categories.Categories) t.config.Categories.Categories
            .hasOwnProperty(u) && (n = t.config.Categories.Categories[u],
                r.providers[n.Name] = n.Type === "Poker" ? t.games.PokerProvider(
                    n.Name) : n.Type === "Bingo" ? t.games.BingoProvider(
                    n.Name) : t.games.CasinoProvider(n.Name), r.providers[
                    n.Name].init(), t.config.CurrentGameCategory.toUpperCase() ===
                n.Name.toUpperCase() && (r.currentProvider = r.providers[
                    n.Name]), t.marshal.registerURL(r.providers[n.Name]
                    .navigationPath, this, "games"));
        t.marshal.registerURL("", this, "games");
        t.marshal.registerURL("Games", this, "games");
        t.config.InitialView === "games" && r.currentProvider.startUp();
        t.requireLoaded();
        t.logging.logDebug("Core Games Loaded")
    };
    t.games.loaded = function() {
        t.config.InitialView === "games" && (t.tracking.trackEvent(t.enums
            .trackingEvents.GAMESOPEN), t.logging.logTrace(
            "Initial Games view tracked"))
    };
    t.games.loadGameOnFirstLoad = function() {
        t.marshal.loadURL(t.marshal.currentUrl)
    };
    t.games.setCurrentProvider = function(n) {
        var i = t.utils.getPropertyCaseInsensitive(r.providers, n);
        if (i !== null && typeof i != "undefined") r.currentProvider =
            i, t.logging.logTrace("Current games provider set to: " + n);
        else throw t.Exception("error.lobby.games.casino.provider");
    };
    t.games.navigationEnter = function() {
        r.currentProvider.shutDown();
        var n = r.currentProvider.navigationPath;
        return t.marshal.loadURL(n), !0
    };
    t.games.navigationLeave = function() {
        return r.currentProvider && r.currentProvider.shutDown(), !0
    };
    t.games.contentLoaded = function() {
        r.currentProvider.startUp()
    };
    t.games.getPartialPath = function(n) {
        if (!n || n.length === 0) return "GamesPartial";
        return n.replace(/Games/i, "GamesPartial")
    };
    t.games.categoryClick = function(n) {
        r.currentProvider.shutDown();
        var i = t.utils.getPropertyCaseInsensitive(r.providers, n),
            u = i.navigationPath;
        t.marshal.loadURL(u)
    };
    t.games.getState = function() {
        return t.config.CasinoGames.isPromotionsEnabled && !t.promotions
            .getHasAlreadyAutoPromoted() ? "Invalid" : "Display"
    };
    t.games.loadView = function(n) {
        try {
            n = t.utils.trim(n, "/");
            var i = "",
                u = n.match(/games\/([\w]+)$/i);
            u && (i = u[1]);
            t.utils.isNullorEmpty(i) ? (i = r.currentProvider.categoryName,
                n = r.currentProvider.navigationPath, t.marshal.currentUrl =
                "games/" + i) : r.setCurrentProvider(i);
            t.logging.logTrace("Games loading: " + n);
            t.utils.viewLoader.content.loadView(this.getPartialPath(n),
                "games." + i, !1);
            t.tracking.trackEvent(t.enums.trackingEvents.GAMESOPEN)
        } catch (f) {
            t.tracking.trackEvent(t.enums.trackingEvents.FETCHGAMESFAILED);
            throw f;
        }
    };
    t.require()
})(window, lobby, jQuery);
(function(n, t) {
    var i = null;
    t = t || (n.lobby = {});
    t.games = t.games || {};
    t.games.signals = {
        init: function() {
            i = this;
            i.loadSubscribe();
            t.logging.logDebug("Games Signals Loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("games.navigation.button.click",
                function() {
                    t.games.navigationEnter()
                });
            t.signal.subscribe("marshal.viewLoaded.*", function(n) {
                n.view !== "games" ? t.games.navigationLeave() :
                    t.games.contentLoaded()
            });
            t.signal.subscribe("*.categories.button.click",
                function(n) {
                    t.games.categoryClick(n)
                });
            t.signal.subscribe("marshal.viewLoaded.games.*",
                function() {
                    t.games.contentLoaded()
                });
            t.signal.subscribe("lobby.start", function() {
                    t.games.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    t.games.loaded()
                })
                .disposeAfter(1);
            t.signal.subscribe("marshal.initialViewLoaded.game.*",
                    function() {
                        t.games.loadGameOnFirstLoad()
                    })
                .disposeAfter(1)
        }
    };
    t.games.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.games = t.games || {};
    var i = n.document;
    t.games.CasinoProvider = function(n) {
        var f = null,
            u = "Games/" + n,
            e = function() {
                f = this;
                for (var i in t.config.Categories.Categories[n].Games) t
                    .config.Categories.Categories[n].Games.hasOwnProperty(
                        i) && t.marshal.registerURL("Game/" + i, this,
                        "game");
                t.logging.logDebug(
                    "Casino games provider initialised for " + n)
            },
            o = function() {
                t.progressive && (t.progressive.ProgressiveCounterManager
                    .start(), t.logging.logDebug(
                        "Casino provider for " + n +
                        " startup completed."))
            },
            s = function() {
                t.progressive && (t.progressive.ProgressiveCounterManager
                    .stop(), t.logging.logDebug(
                        "Casino provider for " + n +
                        " shut down completed."))
            },
            h = function(n) {
                var i = "Game/" + n;
                t.marshal.loadURL(i)
            },
            c = function(i) {
                i.toLowerCase()
                    .substr(0, 5) === "game/" && (i = i.substr(5));
                for (var r in t.config.Categories.Categories[n].Games)
                    if (r.toUpperCase() === i.toUpperCase()) return !0;
                return !1
            },
            l = function() {
                return t.player.isValidLogin() ? "Display" : "Invalid"
            },
            a = function(i) {
                i = t.utils.trim(i, "/");
                var u = i.split("/"),
                    e = u[u.length - 1],
                    o = t.utils.getPropertyCaseInsensitive(t.config.Categories
                        .Categories, n),
                    r = t.utils.getPropertyCaseInsensitive(o.Games, e);
                if (typeof r != "object" || !r) throw t.Exception(
                    "error.lobby.games.casino.load");
                if (r.EndPoint.EndPointType !== t.enums.endPointTypes.GAME_MESSAGE &&
                    !t.player.isValidLogin(function() {
                        f.loadView(i)
                    })) throw t.Exception(
                    "error.lobby.games.casino.invalid");
                t.localStorage.exists("lobby.firstGameLaunched") || (t.logging
                    .logInfo("Game launched: " + r.Name), t.tracking
                    .trackEvent(t.enums.trackingEvents.FIRSTGAMELAUNCHED, {
                        gameName: r.Name,
                        moduleId: r.ModuleID,
                        clientId: r.ClientID
                    }), t.localStorage.set(
                        "lobby.firstGameLaunched", !0));
                t.logging.logInfo("Game launched: " + r.Name);
                t.tracking.trackEvent(t.enums.trackingEvents.GAMESLAUNCHED, {
                    Name: "Lobby/GamesLaunched/" + r.Name + "-" +
                        r.ModuleID + "-" + r.ClientID,
                    gameName: r.Name,
                    moduleId: r.ModuleID,
                    clientId: r.ClientID
                });
                setTimeout(function() {
                    switch (r.EndPoint.EndPointType) {
                        case t.enums.endPointTypes.GAME_V:
                            t.config.CasinoGames.PathFinderEndPoint &&
                                t.config.CasinoGames.PathFinderEndPoint
                                .length ? y(r) : p(r);
                            break;
                        case t.enums.endPointTypes.GAME_SIMPLELINK:
                            w(r);
                            break;
                        case t.enums.endPointTypes.GAME_MESSAGE:
                            b(r);
                            break;
                        default:
                            v(r)
                    }
                }, 500)
            },
            v = function(n) {
                t.utils.setLocation(n.EndPoint.EndPointValue)
            },
            y = function(n) {
                var i = t.utils.trimend(t.config.CasinoGames.PathFinderEndPoint,
                    "/") + "/";
                i += t.config.Core.LobbyName + "/";
                i += n.Name + "/";
                i += t.config.Core.LanguageCode + "/";
                i += "?lobbyURL=" + escape(t.utils.lobbyUrl(!0) + u);
                t.utils.setLocation(i)
            },
            p = function(n) {
                var f = i.createElement("form");
                f.action = n.EndPoint.EndPointValue;
                f.appendChild(r("lobbyURL", t.utils.lobbyUrl(!0) + u));
                f.appendChild(r("moduleID", n.ModuleID));
                f.appendChild(r("clientID", n.ClientID));
                f.appendChild(r("gameName", n.Name));
                f.appendChild(r("gameTitle", t.languageStringProvider.getString(
                    n.StringName)));
                f.appendChild(r("LanguageCode", t.config.Core.LanguageCode));
                f.appendChild(r("clientTypeID", t.config.CasinoGames.ClientTypeId));
                f.appendChild(r("casinoID", t.config.Core.CasinoID));
                f.appendChild(r("lobbyName", t.config.Core.LobbyName));
                f.appendChild(r("loginType", "PlayerService"));
                f.appendChild(r("bankingURL", t.config.CasinoGames.BankingURL));
                f.appendChild(r("xmanEndPoints", t.config.CasinoGames.XmanEndPoints));
                f.appendChild(r("routerEndPoints", t.config.CasinoGames
                    .RouterEndPoint));
                f.appendChild(r("disablePoweredBy", t.config.CasinoGames
                    .DisablePoweredBy));
                f.appendChild(r("currencyFormat", t.config.CasinoGames.CurrencyFormat));
                f.appendChild(r("isPracticePlay", t.player.isPractice()));
                t.utils.submitForm(f)
            },
            w = function(n) {
                var f = i.createElement("form");
                f.action = n.EndPoint.EndPointValue;
                f.appendChild(r("lobbyURL", t.utils.lobbyUrl(!0) + u));
                f.appendChild(r("moduleID", n.ModuleID));
                f.appendChild(r("clientID", n.ClientID));
                f.appendChild(r("gameName", n.Name));
                f.appendChild(r("gameTitle", n.StringName));
                f.appendChild(r("LanguageCode", t.config.Core.LanguageCode));
                f.appendChild(r("clientTypeID", t.config.CasinoGames.ClientTypeId));
                f.appendChild(r("casinoID", t.config.Core.CasinoID));
                f.appendChild(r("lobbyName", t.config.Core.LobbyName));
                f.appendChild(r("bannerTag1", t.player.bannerTags.bannerTag1));
                f.appendChild(r("bannerTag2", t.player.bannerTags.bannerTag2));
                f.appendChild(r("bannerTag3", t.player.bannerTags.bannerTag3));
                f.appendChild(r("bannerTag4", t.player.bannerTags.bannerTag4));
                f.appendChild(r("bannerTag5", t.player.bannerTags.bannerTag5));
                f.appendChild(r("username", t.player.getUsername()));
                f.appendChild(r("isPracticePlay", t.player.isPractice()));
                t.utils.submitForm(f)
            },
            b = function(n) {
                var i = t.marshal.currentUrl.toLocaleLowerCase() ==
                    "game/" + n.Name.toLocaleLowerCase();
                t.overlayMessage.view.reset();
                t.overlayMessage.view.setBody(t.languageStringProvider.getString(
                    n.EndPoint.EndPointValue.substring(8)));
                t.overlayMessage.view.setButtonText(t.languageStringProvider
                    .getString("Close"));
                t.overlayMessage.view.showActionButton();
                t.overlayMessage.currentButtonAction = function() {
                    t.overlayMessage.hide()
                };
                t.overlayMessage.currentCloseAction = function() {
                    i && t.marshal.loadURL("")
                };
                t.overlayMessage.show()
            },
            r = function(n, t) {
                var r = i.createElement("input");
                return r.type = "hidden", r.name = n, r.value = t, r
            };
        return {
            categoryName: n,
            type: "casino",
            navigationPath: u,
            init: e,
            startUp: o,
            shutDown: s,
            gameClicked: h,
            containsGame: c,
            getState: l,
            loadView: a
        }
    }
})(window, lobby, jQuery);
(function(n, t, i) {
    var r = null,
        u;
    t = t || (n.lobby = {});
    t.casinogames = t.casinogames || {};
    u = t.casinogames.signals = {
        defaultView: null,
        init: function() {
            r = this;
            r.loadSubscribe();
            t.logging.logDebug("Casino games signals loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("lobby.start", function() {
                    r.loadPublish()
                })
                .disposeAfter(1);
            t.signal.subscribe("marshal.viewLoaded.games.*",
                function() {
                    r.loadPublish()
                });
            t.signal.subscribe("games.iconclick.*", function(n) {
                t.games.currentProvider.gameClicked(n)
            })
        },
        loadPublish: function() {
            i(".lobby-games-list li")
                .touchclick({
                    callback: function() {
                        var r = this,
                            n;
                        i(r)
                            .addClass("active");
                        setTimeout(function() {
                            i(r)
                                .removeClass(
                                    "active")
                        }, 500);
                        n = i(this)
                            .attr("id");
                        t.logging.logTrace("clicked " + n +
                            " icon");
                        t.signal.publish("games.iconclick." +
                            n, n)
                    },
                    preventDefault: t.ui.useTouchClickDoubleClick()
                })
        }
    };
    u.init()
})(window, lobby, jQuery);
(function(n, t) {
    function i(n) {
        this.currencyDisplayFormat = n
    }
    t = t || (n.lobby = {});
    t.progressive = t.progressive || {};
    var r = i.prototype;
    r.convertCurrency = function(n) {
        var i = this.currencyDisplayFormat,
            t = "",
            s = 0,
            e = 0,
            a = 0,
            h, f, u, o, r, l, v;
        i.search(/###[.,]##/i) === -1 && (n = Math.floor(n / 100));
        h = Math.abs(n)
            .toString();
        f = h.length;
        n < 0 && (a = 1);
        u = i.search(/[^.,\-#' ]/i);
        u === 0 ? o = i.search(/[#]/) : (i.substr(u - 1, 1) === " " &&
            (u = u - 1), o = i.length - u);
        var c = i.substr(u, o),
            y = c.substr(0, o),
            p = i.replace(y, "");
        for (i = p.split("")
            .reverse()
            .join(""), i.substr(2, 1)
            .search(/[.,'' ]/) >= 0 && (r = i.substr(2, 1), i = this.getRightSubstring(
                i, i.length - 4)), l = i.search(/[.,'' ]/), v = i.substr(
                l, 1); f > 0;) u > 0 && f === h.length && (t = c.replace(
                /[ ]$/, "")), t = h.substr(f - 1, 1) + t, e = e + 1, e ===
            2 && r !== undefined && r !== null && (t = r.replace(/[ ]$/,
                "") + t), (e >= 3 || r === undefined || r === null) &&
            (s = s + 1), s === l && f !== 1 && (t = v + t, s = 0), f =
            f - 1;
        return e === 1 && r !== undefined && r !== null ? t = "0" + r.replace(
                /[ ]$/, "") + "0" + t : e === 2 && t.search(/[.,'' ]/) ===
            0 && r !== undefined && r !== null && (t = "0" + t), u ===
            0 && (t = c.substr(0, o) + t), a === 1 && (t = "-" + t), t
    };
    r.getRightSubstring = function(n, t) {
        var i = n.length;
        return n.substr(i - 1 - t, i - 1)
    };
    t.progressive.CurrencyConverter = i
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.progressive = t.progressive || {};
    t.progressive.ProgressiveCounterManager = {
        data: {},
        refreshInterval: 6e4,
        snapTime: 0
    };
    var i = t.progressive.ProgressiveCounterManager;
    i.fetchData = function() {
        t.progressive.signals.fetchData(function(n) {
            if (t.logging.logDebug(
                    "Progressive request completed"), n && n.Completed &&
                i.snapTime !== n.SnapTime) {
                i.snapTime = n.SnapTime;
                i.data = n.Games;
                var r = new Date(t.utils.parseDate(n.ServerTime)),
                    u = r.getTime() - (new Date)
                    .getTime();
                i.lastRefresh = new Date(t.utils.parseDate(i.snapTime) +
                        (new Date)
                        .getTimezoneOffset() * 6e4 - u)
                    .getTime();
                isNaN(i.lastRefresh) && (t.logging.logWarn(
                        "Not A Number calculated for last refresh: " +
                        i.snapTime + ", timezone offset: " +
                        (new Date)
                        .getTimezoneOffset()), i.lastRefresh =
                    0);
                t.progressive.signals.dataUpdated()
            } else n && n.Completed ? t.logging.logTrace(
                "Progressive data unchanged") : t.logging.logWarn(
                "Progressive data empty or incomplete")
        })
    };
    i.start = function() {
        var r, f, u;
        t.progressive.counters = [];
        r = t.config.Categories.Categories[t.games.currentProvider.categoryName]
            .Games;
        for (f in r) r.hasOwnProperty(f) && (u = r[f], u.ProgressiveTickerID >
            0 && (t.progressive.counters.push(new t.progressive.ProgressiveCounter(
                u.Name)), t.logging.logTrace(
                "Progressive counter " + u.Name + " created")));
        i.fetchData();
        clearInterval(i.interval);
        i.interval = n.setInterval(i.fetchData, i.refreshInterval);
        t.logging.logDebug("Progressive counter manager started")
    };
    i.stop = function() {
        var n, r;
        if (clearInterval(i.interval), i.interval = null, t.progressive
            .counters)
            for (n = t.progressive.counters.length - 1; n >= 0; n--) t.progressive
                .counters[n] && (r = t.progressive.counters[n].name, t.progressive
                    .counters[n].counter.stop(), t.progressive.counters[
                        n].signal && t.progressive.counters[n].signal.unsubscribe(),
                    delete t.progressive.counters[n].counter, delete t.progressive
                    .counters.splice(n, 1), t.logging.logTrace(
                        "Progressive counter " + r + " disposed"));
        t.logging.logDebug("Progressive counter manager stopped")
    }
})(window, lobby);
(function(n, t) {
    function i(n) {
        var i = this,
            r;
        this.name = n;
        this.dataUpdated = function() {
            t.logging.logTrace("Progressive counter " + i.name +
                " data updated");
            var n = t.progressive.ProgressiveCounterManager.data[i.name];
            i.counter.running ? i.counter.reset(i.calculateCurrentJackpot(
                n), n.Increment) : i.counter.start(i.calculateCurrentJackpot(
                n), n.Increment)
        };
        this.calculateCurrentJackpot = function(n) {
            var i = n.Jackpot + Math.max(Math.floor((Date.now() - t
                .progressive.ProgressiveCounterManager.lastRefresh
            ) / 1e3 * n.Increment), 0);
            return isNaN(i) ? (t.logging.logWarn(
                "Not A Number calculated for Jackpot: " + n
                .Jackpot + ", date: " + Date.now() +
                ", refresh: " + t.progressive.ProgressiveCounterManager
                .lastRefresh + ", increment: " + n.Increment
            ), 0) : i
        };
        this.counter = new t.progressive.Counter(this.name + "Counter",
            11, new t.progressive.CurrencyConverter(
                "###,###,###,###.##"));
        this.counter.initialize();
        t.progressive.ProgressiveCounterManager && t.progressive.ProgressiveCounterManager
            .data[this.name] && (r = t.progressive.ProgressiveCounterManager
                .data[this.name], this.counter.start(i.calculateCurrentJackpot(
                    r), r.Increment));
        this.signal = t.progressive.signals.registerSubscription(this.dataUpdated)
    }
    t = t || (n.lobby = {});
    t.progressive = t.progressive || {};
    t.progressive.ProgressiveCounter = i
})(window, lobby);
(function(n, t) {
    function i(n) {
        this.characters = {};
        this.canvas = document.createElement("canvas");
        this.source = n;
        this.currentLeft = 0;
        this.context = this.canvas.getContext("2d");
        this.canvas.width = (this.source.digitWidth + this.source.textShadowX +
            this.source.textShadowBlur + 1) * 14;
        this.canvas.height = this.source.canvas.height;
        this.canvas.className = this.source.canvas.className;
        this.height = this.source.canvas.height;
        this.context.textBaseline = "top";
        this.context.textAlign = "left";
        this.context.font = this.source.fontStyle + " " + this.source.fontWeight +
            " " + this.source.fontSize + " " + this.source.fontFamily;
        this.context.fillStyle = this.source.fontColour;
        this.source.textShadow && (this.context.shadowColor = this.source
            .textShadowColour, this.context.shadowOffsetX = this.source
            .textShadowX, this.context.shadowOffsetY = this.source.textShadowY,
            this.context.shadowBlur = this.source.textShadowBlur);
        this.drawCharacter = function(n, t, i, r) {
            this.characters[n] || (this.characters[n] = new this.CanvasRenderDigit(
                n, this));
            this.characters[n].drawMe(t, i, r)
        };
        this.CanvasRenderDigit = function(n, t) {
            this.owner = t;
            this.character = n;
            this.width = this.owner.context.measureText(this.character)
                .width + this.owner.source.textShadowX + this.owner
                .source.textShadowBlur;
            this.left = this.owner.currentLeft + 1;
            this.owner.currentLeft += this.width + 1;
            t.context.fillText(this.character, this.left, 0, this.width);
            this.drawMe = function(n, t, i) {
                n.drawImage(this.owner.canvas, this.left, 0,
                    this.width, this.owner.height, i, t,
                    this.width, this.owner.height)
            }
        }
    }
    t = t || (n.lobby = {});
    t.progressive = t.progressive || {};
    t.progressive.CounterRenderer = i
})(window, lobby);
(function(n, t) {
    var i = null;
    t = t || (n.lobby = {});
    t.progressive = t.progressive || {};
    t.progressive.signals = {
        init: function() {
            i = this;
            t.logging.logDebug("Progressive Signals Loaded")
        },
        fetchData: function(n) {
            t.utils.ajax.call(t.config.Progressive.ProgressiveEndpoint,
                null, n, function(n, i, r) {
                    t.logging.logError(
                        "Progressive request failed: " + r)
                }, "json")
        },
        dataUpdated: function() {
            t.logging.logTrace("Progressive counter data updated");
            t.signal.publish("progressive.dataupdated")
        },
        registerSubscription: function(n) {
            return t.signal.subscribe("progressive.dataupdated", n)
        }
    };
    t.progressive.signals.init()
})(window, lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.progressive = t.progressive || {};
    t.progressive.Counter = function(r, u, f) {
        var e, o;
        this.currentVal = 0;
        this.endVal = 0;
        this.updateRate = 1e3;
        this.speed = 500;
        this.maxStringLength = u;
        this.currencyConverter = f;
        this.canvasId = r;
        this.working = !1;
        this.running = !1;
        this.digitTest = /[^.,' ]/;
        this.digits = [];
        this.lastTimeStamp = null;
        this.lastStepTimeStamp = null;
        this.clearImage = null;
        e = this;
        this.initialize = function() {
            return this.stop(), this.canvas = document.getElementById(
                this.canvasId), this.canvas ? (this.context =
                this.canvas.getContext("2d"), this.prepare(), !
                0) : !1
        };
        this.prepare = function() {
            var t = i(this.canvas),
                r, n, f, u;
            if (this.width = t.css("width"), this.height = t.css(
                    "height"), this.fontFamily = t.css(
                    "font-family"), this.fontSize = Math.floor(
                    parseInt(t.css("font-size")) * window.devicePixelRatio
                ) + "px", this.fontStyle = t.css("font-style"),
                this.fontWeight = t.css("font-weight"), this.fontColour =
                t.css("color"), this.backColour = t.css(
                    "background-color"), r = t.css("text-shadow"),
                r && r !== "none") {
                for (this.textShadow = !0, n = i.trim(r)
                    .split(" "), f = n[0], u = 1; u < n.length - 3; u++
                ) f += " " + n[u];
                this.textShadowColour = f;
                this.textShadowX = parseInt(n[n.length - 3]);
                this.textShadowY = parseInt(n[n.length - 2]);
                this.textShadowBlur = parseInt(n[n.length - 1])
            } else this.textShadow = !1, this.textShadowColour =
                "rgba(0,0,0,0)", this.textShadowX = 0, this.textShadowY =
                0, this.textShadowBlur = 0;
            this.canvas.width = Math.floor(parseInt(this.width) *
                window.devicePixelRatio);
            this.canvas.height = Math.floor(parseInt(this.height) *
                window.devicePixelRatio);
            this.context.textBaseline = "top";
            this.context.textAlign = "left";
            this.context.font = this.fontStyle + " " + this.fontWeight +
                " " + this.fontSize + " " + this.fontFamily;
            this.context.fillStyle = this.backColour;
            this.measureFont();
            this.stylehash = this.fontFamily + "|" + this.fontStyle +
                "|" + this.fontWeight + "|" + this.fontColour + "|" +
                this.fontSize;
            this.textShadow && (this.stylehash += "|" + this.textShadowColour +
                "|" + this.textShadowX + "|" + this.textShadowY +
                "|" + this.textShadowBlur);
            this.ForceRefreshAdditionalPrep()
        };
        this.measureFont = function() {
            for (var t = this.context.measureText("0")
                .width, i = this.context.measureText(" ")
                .width, u = this.currencyConverter.convertCurrency(
                    3 * Math.pow(10, this.maxStringLength - 1)),
                f = 0, e = 0, n, r = 0; r < u.length; r++) this.digitTest
                .test(u[r]) ? f++ : e++;
            n = f * t + e * i;
            n > this.canvas.width ? (this.digitWidth = Math.floor(
                        this.canvas.width / n * t), this.punctWidth =
                    Math.floor(this.canvas.width / n * i)) : n <
                this.canvas.width ? (this.digitWidth = Math.floor(
                        this.canvas.width / n * t), this.punctWidth =
                    Math.floor(this.canvas.width / n * i)) : (this.digitWidth =
                    t, this.punctWidth = i)
        };
        o = function() {
            t.progressive.Counter.isRegistered(e) && (e.stop(), e.prepare(),
                e.start(e.currentVal, e.stepVal))
        };
        this.start = function(r, u) {
            this.stop();
            i(n)
                .on("resize focus", o);
            this.startVal = this.currentVal = Number(r);
            this.stepVal = Number(u);
            this.draw();
            t.progressive.Counter.registerCounter(this);
            this.running = !0
        };
        this.reset = function(n, t) {
            var i = this.currencyConverter.convertCurrency(n);
            if (i.length !== this.currentFormat.length) {
                this.stop();
                this.start(n, this.stepVal);
                return
            }
            this.currentVal = Number(n);
            this.currentFormat = i;
            this.stepVal = Number(t)
        };
        this.stop = function() {
            t.progressive.Counter.removeCounter(this);
            this.working = !1;
            this.running = !1;
            i(n)
                .off("resize focus", o)
        };
        this.increment = function() {
            var f = Date.now(),
                o = e.lastStepTimeStamp ? Math.max(1, Math.floor((f -
                    e.lastStepTimeStamp) / 1e3)) : 1,
                u = e.currentVal + e.stepVal * o,
                i = e.currencyConverter.convertCurrency(u),
                t, r, s;
            if (i.length > e.currentFormat.length) {
                e.stop();
                e.start(u, e.stepVal);
                return
            }
            if (!e.working || o > 3) {
                for (e.working = !0, e.anidigits = [], t = 0; t < i
                    .length; t++) i[t] !== e.currentFormat[t] && (r =
                    e.digits[t], s = new e.Digit(i[t], r.top +
                        2 * e.canvas.height, r.left, r.width, r
                        .height, e), e.anidigits[t] = s);
                n.requestAnimFrame(e.step);
                e.currentVal = u;
                e.currentFormat = i;
                e.lastStepTimeStamp = f
            }
        };
        this.step = function(t) {
            var s = !1,
                u, r, i, f, o, h;
            if (e.working)
                for (u = 1, e.lastTimeStamp && (u = Math.ceil((t -
                        e.lastTimeStamp) / (1e3 / 60))), e.lastTimeStamp =
                    t, r = 0; r < e.anidigits.length; r++) i = e.anidigits[
                    r], i && (f = e.digits[r], i.top > 0 ? (o =
                    Math.min(e.canvas.height * 2 / (60 / (
                        1e3 / e.speed)) * u, i.top), h = e.context,
                    e.forceRefresh(), h.fillRect(i.left, 0,
                        i.width + 1, e.canvas.height), i.top -=
                    o, f.top -= o, i.draw(), f.draw(), s = !
                    0) : (e.digits[r] = i, e.anidigits[r] =
                    null));
            s ? n.requestAnimFrame(e.step) : (e.working = !1, e.lastTimeStamp = !
                1)
        };
        this.forceRefresh = function() {
            t.config.Progressive.ForceRefresh && this.context.putImageData(
                this.clearImage, 0, 0)
        };
        this.ForceRefreshAdditionalPrep = function() {
            t.config.Progressive.ForceRefresh && (this.clearImage =
                this.context.createImageData(1, 1))
        };
        this.draw = function() {
            var r = 0,
                n, t, i;
            for (this.digits = [], this.context.fillRect(0, 0, this
                    .canvas.width, this.canvas.height), this.currentFormat =
                this.currencyConverter.convertCurrency(this.currentVal),
                n = 0; n < this.currentFormat.length; n++) r +=
                this.digitTest.test(this.currentFormat[n]) ? this.digitWidth :
                this.punctWidth;
            for (t = Math.round(this.canvas.width / 2 - r / 2), n =
                0; n < this.currentFormat.length; n++) this.digitTest
                .test(this.currentFormat[n]) ? (i = new this.Digit(
                    this.currentFormat[n], 0, t, this.digitWidth,
                    this.height, this), t += this.digitWidth) : (i =
                    new this.Digit(this.currentFormat[n], 0, t,
                        this.punctWidth, this.canvas.height, this),
                    t += this.punctWidth), i.draw(), this.digits[n] =
                i
        };
        this.Digit = function(n, i, r, u, f, e) {
            this.character = n;
            this.top = i;
            this.left = r;
            this.width = u;
            this.height = f;
            this.counter = e;
            this.draw = function() {
                var n = t.progressive.Counter.getRenderer(this.counter);
                n.drawCharacter(this.character, this.counter.context,
                    this.top, this.left)
            }
        }
    };
    t.progressive.Counter.Renderers = {};
    t.progressive.Counter.Counters = [];
    t.progressive.Counter.timer = setInterval(function() {
        for (var n = 0; n < t.progressive.Counter.Counters.length; n++)
            t.progressive.Counter.Counters[n].increment()
    }, 1e3);
    t.progressive.Counter.getRenderer = function(n) {
        return t.progressive.Counter.Renderers || (t.progressive.Counter
                .Renderers = {}), t.progressive.Counter.Renderers[n.stylehash] ||
            (t.progressive.Counter.Renderers[n.stylehash] = new t.progressive
                .CounterRenderer(n)), t.progressive.Counter.Renderers[n
                .stylehash]
    };
    t.progressive.Counter.registerCounter = function(n) {
        i.inArray(n, t.progressive.Counter.Counters) === -1 && t.progressive
            .Counter.Counters.push(n)
    };
    t.progressive.Counter.removeCounter = function(n) {
        var r;
        (r = i.inArray(n, t.progressive.Counter.Counters)) > -1 && t.progressive
            .Counter.Counters.splice(r, 1)
    };
    t.progressive.Counter.isRegistered = function(n) {
        return i.inArray(n, t.progressive.Counter.Counters) > -1
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.categories = t.categories || {};
    t.categories.currentCategory = "";
    t.categories.init = function() {
        t.config.InitialView === "games" ? t.categories.showNav() : t.categories
            .hideNav();
        t.logging.logDebug("Categories Loaded");
        t.requireLoaded()
    };
    t.categories.showNav = function() {
        t.config.Categories.length > 1 && t.categories.view.showNav()
    };
    t.categories.hideNav = function() {
        t.categories.view.hideNav()
    };
    t.categories.categoryClick = function(n) {
        t.logging.logTrace("Categories Nav Clicked: " + n.className);
        t.categories.view.categoryClick(n)
    };
    t.require()
})(window, lobby, jQuery);
(function(n, t, i) {
    var r = null;
    t = t || (n.lobby = {});
    t.categories = t.categories || {};
    t.categories.signals = {
        init: function() {
            r = this;
            r.loadSubscribe();
            t.logging.logDebug("Categories Signals Loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("marshal.viewLoaded.*", function(n) {
                n.view !== "games" && t.categories.hideNav()
            });
            t.signal.subscribe("marshal.viewLoaded.games", function() {
                t.categories.showNav()
            });
            t.signal.subscribe("marshal.viewLoaded.games.*",
                function(n) {
                    t.categories.showNav();
                    n.view && n.view.length > 5 && n.view.substr(
                        0, 5) === "games" && (n.view = n.view
                        .substr(6));
                    t.categories.categoryClick(i("#cat_" + n.view
                        .toLowerCase())[0]);
                    t.categories.currentCategory = n.view
                });
            t.signal.subscribe("lobby.start", function() {
                    r.loadPublish();
                    t.categories.init();
                    t.config.Categories.length > 1 && (t.categories
                        .categoryClick(i("#cat_" + t.config
                            .CurrentGameCategory.toLowerCase()
                        )[0]), t.categories.currentCategory =
                        t.config.CurrentGameCategory.toLowerCase()
                    )
                })
                .disposeAfter(1)
        },
        loadPublish: function() {
            i(".lobby-categories li")
                .touchclick({
                    callback: function() {
                        t.logging.logTrace(
                            "clicked category button");
                        var n = i(this)
                            .attr("id");
                        n.length > 4 && (n = n.substr(4));
                        r.categoryChange(n)
                    },
                    preventDefault: t.ui.useTouchClickDoubleClick()
                })
        },
        categoryChange: function(n) {
            t.categories.currentCategory !== n && (t.logging.logTrace(
                    n), r = this, (typeof n == "undefined" || n ===
                    null) && (n = t.config.CurrentGameCategory.toLowerCase()),
                t.signal.publish(n + ".categories.button.click",
                    n), t.categories.currentCategory = n)
        }
    };
    t.categories.signals.init()
})(window, lobby, jQuery);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.categories = t.categories || {};
    t.categories.view = t.categories.view || {};
    t.categories.view.showNav = function() {
        i("#lobbyCategories")
            .fadeIn(0)
    };
    t.categories.view.hideNav = function() {
        i("#lobbyCategories")
            .fadeOut(0)
    };
    t.categories.view.categoryClick = function(n) {
        i(".lobby-categories li")
            .removeClass("selected");
        i(n)
            .addClass("selected")
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.login = t.login || {};
    t.login.view = t.login.view || {};
    t.player = t.player || {};
    t.login.loginDialog = null;
    t.login.continueURL = "";
    t.login.init = function() {
        t.marshal.registerURL("Login", t.login);
        t.config.InitialView === "login" && (t.marshal.processLoadInitialStartURL = !
            1);
        t.utils.isNullorEmpty(t.config.loginNameRequested) || t.localStorage
            .set("queryUsername", t.config.loginNameRequested);
        t.requireLoaded()
    };
    t.login.getState = function() {
        return t.login.isLoggedIn() ? "Completed" : "Display"
    };
    t.login.getLoginHTML = function() {
        t.login.view.getLoginHTML()
    };
    t.login.buildLoginDialog = function() {
        var n = {
            title: t.languageStringProvider.getString(
                "LoginDialog.Login"),
            html: t.login.view.getLoginHTML(),
            autoLogin: {
                showAutoLogin: t.config.Login.allowAutoLogin && !t.config
                    .Login.showNemIdHint,
                event: t.login.toggleAutoLogin
            },
            buttonBag: [{
                type: "callback",
                text: t.languageStringProvider.getString(
                    "LoginDialog.Login"),
                event: t.login.loginUserTouchClick,
                style: "large",
                color: "main"
            }, {
                type: "topClose",
                text: t.languageStringProvider.getString(
                    "Close"),
                event: t.login.topClose
            }]
        };
        t.player.hasConfirmedRealUsername() || t.registration && n.buttonBag
            .push({
                type: "callback",
                text: t.languageStringProvider.getString("Register"),
                event: t.login.register,
                style: "small",
                color: "primary"
            });
        t.config.Login.showPracticePlay && n.buttonBag.push({
            type: "callback",
            text: t.languageStringProvider.getString(
                "Account.PracticePlay"),
            event: t.login.practiceLoginUser,
            style: "small",
            color: "default"
        });
        t.config.Login.showNemIdHint && !t.config.Login.allowAutoLogin &&
            n.buttonBag.push({
                type: "bottomLinkLeft",
                text: "NemID?",
                event: t.login.NemID
            });
        t.config.Login.showForgotDetails && n.buttonBag.push({
            type: "bottomLinkRight",
            text: t.languageStringProvider.getString(
                "ForgotDetails"),
            event: t.login.forgotDetails
        });
        t.login.setAutoLogin();
        t.login.loginDialog = t.dialogManager.Dialog(n);
        t.login.loginDialog.init()
    };
    t.login.NemID = function() {};
    t.login.topClose = function() {
        t.login.view.blurInputs();
        t.history.back()
    };
    t.login.register = function() {
        t.marshal.loadURL(t.utils.url.replace("Registration"))
    };
    t.login.forgotDetails = function() {
        t.marshal.loadURL("ForgotDetails")
    };
    t.login.isLoggedIn = function(n, i) {
        return t.player.checkPlayerServiceLogin(n, i)
    };
    t.login.loadView = function(n) {
        var r = t.player.getRealUsername(),
            u;
        t.login.buildLoginDialog();
        u = t.login.isLoggedIn();
        t.login.signals.loginStart();
        t.login.canAutoLogin() && !u && t.player.service.getType() !==
            t.enums.playerTypes.PRACTICE && t.player.playerService.getAuthToken() &&
            t.player.playerService.PlayerData.AutoLogin ? i(null,
                function(i, u) {
                    t.player.login(r, u.SessionToken, u.PlayerInfo.FirstName, !
                        1);
                    t.player.service.setType();
                    t.login.view.blurInputs();
                    t.login.loginDialog.hideDialog();
                    var f = t.marshal.currentUrl;
                    f && t.marshal.loadURL(f);
                    t.marshal.signals.loadedView("login", n)
                }, function(i, u, f) {
                    t.login.loginDialog.showDialog();
                    t.login.dialogErrorMessage(f);
                    r && t.login.view.setUsernameField(r);
                    t.marshal.signals.loadedView("login", n)
                }) : u || (t.login.loginDialog.showDialog(), r && t.login
                .view.setUsernameField(r), t.login.isPlayerSessionTimeout(
                    u) && t.utils.isNullorEmpty(t.localStorage.get(
                    "playerHasAlreadySeenTimeoutMsg")) && (t.login.view
                    .showErrorMessage(t.languageStringProvider.getString(
                        "sessionError")), t.localStorage.set(
                        "playerHasAlreadySeenTimeoutMsg", !0)), t.login
                .view.attachEvents(), t.marshal.signals.loadedView(
                    "login", n), t.login.signals.loginFail())
    };
    t.login.loginUserTouchClick = function() {
        t.logging.logDebug("clicked login button");
        t.login.view.blurInputs();
        t.login.loginUser(t.login.view.getLoginInfo(), null)
    };
    t.login.loginUser = function(n, i) {
        t.login.signals.loginStart();
        t.login.buildLoginDialog();
        t.login.view.hideErrorMessage();
        n || (n = t.login.view.getLoginInfo());
        t.login.performRealLogin(n, i)
    };
    t.login.performRealLogin = function(n, r) {
        (n.autologin == null || typeof n.autologin == "undefined") && (
            n.autologin = t.player.settings.getAutoLogin());
        t.login.isValidInput(n) ? i(n, function(i, u) {
            t.player.login(n.username, u.SessionToken, u.PlayerInfo
                .FirstName, !1);
            t.player.service.setType();
            t.login.view.blurInputs();
            t.login.loginDialog.hideDialog();
            (r === null || r === "undefined") && (r = t.marshal
                .currentUrl);
            (r !== "" || r !== "") && t.marshal.loadURL(r)
        }, function(i, u, f) {
            (r !== "" || r !== "") && (t.login.loginDialog.showDialog(),
                n.username && t.login.view.setUsernameField(n.username),
                t.login.dialogErrorMessage(f))
        }) : (t.login.loginDialog.showDialog(), n.username && t.login
            .view.setUsernameField(n.username), t.login.view.showErrorMessage(
                t.languageStringProvider.getString(
                    "LoginDialog.ErrorIncorrectDetail")), t.login.signals
            .loginFail())
    };
    t.login.practiceLoginUser = function() {
        t.login.signals.loginStart();
        t.login.buildLoginDialog();
        var n = {
                IsPracticePlay: !0,
                autologin: !1
            },
            r = t.player.getPracticeUsername(),
            u = t.player.getPracticePassword();
        r && u ? (n.Username = r, n.Password = u) : (n.Username = "", n
            .Password = "");
        t.login.view.hideErrorMessage();
        i(n, function(n, i) {
            t.player.setPracticePassword(i.PracticePassword);
            t.player.login(i.Username, i.SessionToken, t.languageStringProvider
                .getString("Account.PracticePlay"), !0);
            t.player.service.setType();
            t.login.view.blurInputs();
            t.login.loginDialog.hideDialog();
            var r = t.marshal.currentUrl;
            r && t.marshal.loadURL(r)
        }, function(n, i, r) {
            t.login.loginDialog.showDialog();
            t.login.dialogErrorMessage(r)
        })
    };
    t.login.backgroundLogin = function(n) {
        i(n, function(i, r) {
            t.player.login(n.username, r.SessionToken, r.PlayerInfo
                .FirstName, !1);
            t.player.service.setType();
            t.login.loginDialog !== null && t.login.loginDialog
                .hideDialog()
        }, function() {})
    };
    t.login.logoutUser = function() {
        t.login.signals.logoutStart();
        t.player.logout()
    };
    t.login.loginStatus = function() {
        return t.player.service.getType()
    };
    t.login.isValidInput = function(n) {
        return !n || !n.username || !n.password ? !1 : n.username.length <=
            0 || n.password.length <= 0 ? !1 : !0
    };
    t.login.toggleAutoLogin = function() {
        var n = t.player.settings.getAutoLogin();
        n === !0 ? (t.login.view.setAutoLogin(!1), t.player.settings.setAutoLogin(!
            1, !0)) : (t.login.view.setAutoLogin(!0), t.player.settings
            .setAutoLogin(!0, !0))
    };
    t.login.setAutoLogin = function() {
        var n = t.player.settings.getAutoLogin();
        n === !0 ? t.login.view.setAutoLogin(!0) : t.login.view.setAutoLogin(!
            1)
    };
    t.login.canAutoLogin = function() {
        return t.player.settings.getAutoLogin() && t.config.Login.allowAutoLogin
    };
    t.login.isPlayerSessionTimeout = function(n) {
        return !t.utils.isNullorEmpty(t.localStorage.get(
            "xmanSessionID")) && !n
    };
    t.login.cantLogin = function(n, i) {
        t.player.silentLogout();
        t.login.view.showErrorMessage(i);
        t.tracking.trackEvent(t.enums.trackingEvents.LOGINERROR);
        t.logging.logDebug(i);
        t.login.signals.loginFail()
    };
    t.login.dialogErrorMessage = function(n) {
        switch (n.serverErrorCode) {
            case t.enums.exclusionStatuses.ACCOUNT_CLOSED:
                t.login.view.showErrorMessage(t.languageStringProvider.getString(
                        "AccountHasBeenClosed") + " " + t.languageStringProvider
                    .getString("ContactCasinoHelpDesk"));
                break;
            case t.enums.exclusionStatuses.ACCOUNT_BANNED:
                t.login.view.showErrorMessage(t.languageStringProvider.getString(
                        "YouAreBanned") + " " + t.languageStringProvider
                    .getString("ContactCasinoHelpDesk"));
                break;
            default:
                t.login.view.showErrorMessage(n.displayMessage || t.languageStringProvider
                    .getString("LoginDialog.ErrorDefault"))
        }
    };
    var i = function(n, i, u) {
            t.player.playerService.login(n)
                .done(function(f, e, o) {
                    if (f) t.config.Login.loginCheck_SelfExclusion && e
                        .RegulatedPlayerInfo.UserDetails.AccountStatus ===
                        t.enums.accountStatuses.SELFEXCLUDED_ACCOUNT ?
                        t.login.cantLogin(n, t.languageStringProvider.getString(
                            "LoginDialog.ErrorSelfExcluded")) : (t.utils
                            .isNullorEmpty(i) || typeof i != "function" ||
                            i(f, e, o), t.tracking.trackEvent(t.enums.trackingEvents
                                .LOGINSUCCESS), t.login.signals.loginSuccess()
                        );
                    else switch (e.ResponseType) {
                        case t.enums.loginResponseType.PREMIGRATION:
                            if (t.brandmigration) e.username = n.username,
                                e.password = n.password, t.brandmigration
                                .loadmigration(e), t.login.signals.loginSuccess();
                            else throw t.Exception(
                                "error.lobby.brandmigration.notLoaded"
                            );
                            break;
                        case t.enums.loginResponseType.POSTMIGRATION:
                            throw t.Exception(
                                "error.lobby.login.postmigration"
                            );
                        default:
                            r(f, e, o, u)
                    }
                })
                .fail(function(n, t, i) {
                    r(n, t, i, u)
                })
        },
        r = function(n, i, r, u) {
            t.utils.isNullorEmpty(u) || typeof u != "function" || u(n, i, r);
            t.tracking.trackEvent(t.enums.trackingEvents.LOGINERROR);
            t.logging.logDebug(JSON.stringify(r, null, 4));
            t.login.signals.loginFail()
        };
    t.require()
})(window, lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.login = t.login || {};
    t.login.view = t.login.view || {};
    t.login.view.attachEvents = function() {
        i(".lobby-dialog input")
            .off("keydown");
        i(".lobby-dialog input")
            .keydown(function(n) {
                n.which === 13 && (t.logging.logDebug(
                        "Pressed enter on login form"), t.login
                    .loginUserTouchClick(n))
            })
    };
    t.login.view.showErrorMessage = function(n) {
        i(".lobby-dialog .dialog-text-error")
            .text(n);
        i(".lobby-dialog .dialog-text-error")
            .show()
    };
    t.login.view.getLoginHTML = function() {
        return i("#loginInnerHtml")
            .html()
    };
    t.login.view.hideErrorMessage = function() {
        i(".lobby-dialog .dialog-text-error")
            .text("")
    };
    t.login.view.getLoginInfo = function() {
        var n = {};
        return n.username = i(".lobby-dialog input[name=username]")
            .val(), n.password = i(".lobby-dialog input[name=password]")
            .val(), n
    };
    t.login.view.setAutoLogin = function(n) {
        n ? (i(".lobby-dialog .dialog-checkbox")
            .addClass("selected"), i(
                ".lobby-dialog .dialog-checkbox div[data-checked=false]"
            )
            .addClass("selected")) : (i(
                ".lobby-dialog .dialog-checkbox")
            .removeClass("selected"), i(
                ".lobby-dialog .dialog-checkbox div[data-checked=false]"
            )
            .removeClass("selected"))
    };
    t.login.view.setUsernameField = function(n) {
        i(".lobby-dialog input[name=username]") && i(
                ".lobby-dialog input[name=username]")
            .val(n)
    };
    t.login.view.blurInputs = function() {
        i(".lobby-dialog input[name=username]")
            .blur();
        i(".lobby-dialog input[name=password]")
            .blur()
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.login = t.login || {};
    t.login.view = t.login.view || {};
    t.login.signals = {
        init: function() {
            t.login.signals.loadSubscribe();
            t.logging.logDebug("Login Signals Loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("lobby.start", function() {
                    t.login.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    if (t.config.InitialView === "login") {
                        var n = t.utils.getCurrentRoute(),
                            i = t.marshal.maestro.loadURL(n);
                        i === n && (n ? t.marshal.loadURL(n) :
                            t.marshal.loadURL("Games/login")
                        )
                    }
                })
                .disposeAfter(1);
            t.signal.subscribe("marshal.beginload", function(n) {
                t.marshal.registry.findUrlInStore(n.current) ===
                    "login" && t.marshal.registry.findUrlInStore(
                        n.url) !== "login" && t.login.loginDialog
                    .hideDialog()
            })
        },
        loginStart: function() {
            t.signal.publish("login.start")
        },
        loginSuccess: function() {
            t.signal.publish("login.success");
            t.localStorage.remove("playerHasAlreadySeenTimeoutMsg")
        },
        loginFail: function() {
            t.signal.publish("login.fail")
        },
        logoutStart: function() {
            t.signal.publish("logout.start")
        },
        logoutSuccess: function() {
            t.signal.publish("logout.success")
        },
        logoutFail: function() {
            t.signal.publish("logout.fail")
        }
    };
    t.login.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.forgotdetails = t.forgotdeatils || {};
    t.forgotdetails.callbackBag = [];
    t.forgotdetails.isHidden = !1;
    t.forgotdetails.init = function() {
        t.marshal.registerURL("ForgotDetails", t.forgotdetails);
        t.forgotdetails.buildCallbackBag();
        t.config.InitialView === "forgotdetails" && (t.marshal.processLoadInitialStartURL = !
            1);
        t.logging.logDebug("Forgot details component initialised.");
        t.requireLoaded()
    };
    t.forgotdetails.loadView = function(n, i) {
        var f;
        t.forgotdetails.isHidden = i;
        t.forgotdetails.buildCallbackBag();
        var e = lobbyConfig.ForgotDetails.ChangePasswordRedirectUrl,
            r = [],
            u = t.player.getRealUsername();
        typeof u == "string" && u.length > 0 && r.push({
            Name: "userName",
            Val: u
        });
        r.push({
            Name: "resetUrl",
            Val: e
        });
        f = {
            serviceUrl: lobbyConfig.Core.FormsClientUrl,
            CasinoId: lobbyConfig.ForgotDetails.CasinoID,
            LanguageCode: lobbyConfig.ForgotDetails.LanguageCode,
            ClientTypeId: lobbyConfig.ForgotDetails.ClientTypeID
        };
        t.utils.viewLoader.formsService.loadView("PasswordReset", f, t.forgotdetails
            .callbackBag, r, "ForgotDetails", i);
        i || (t.logging.logDebug("Forgot Details Form Launched"), t.tracking
            .trackEvent(t.enums.trackingEvents.FORGOTPASSWORDOPEN))
    };
    t.forgotdetails.getState = function() {
        return t.login.isLoggedIn() ? "Completed" : "Display"
    };
    t.forgotdetails.loadForgotDetails = function() {
        t.marshal.loadURL("ForgotDetails")
    };
    t.forgotdetails.buildCallbackBag = function() {
        t.forgotdetails.callbackBag = [];
        t.forgotdetails.callbackBag.push({
            event: "backToGamesCallback",
            callBack: function() {
                t.logging.logDebug(
                    "backToGamesCallback - forgot details"
                );
                t.marshal.loadURL("Games")
            }
        });
        t.forgotdetails.callbackBag.push({
            event: "getFormCallback",
            callBack: function(n) {
                n.Status.StatusCode === 0 ? t.logging.logDebug(
                    "Forgot Details Opened") : (t.logging
                    .logDebug(
                        "Fetch Forgot Details Failed"),
                    t.tracking.trackEvent(t.enums.trackingEvents
                        .FETCHFORGOTPASSWORDFALIED))
            }
        });
        t.forgotdetails.callbackBag.push({
            event: "ShowLoader",
            callBack: function() {
                t.forgotdetails.isHidden || t.spinner.start()
            }
        });
        t.forgotdetails.callbackBag.push({
            event: "HideLoader",
            callBack: function() {
                t.spinner.stop()
            }
        })
    };
    t.require()
})(window, lobby);
(function(n, t, i) {
    t = t || n.lobby === {};
    t.forgotdetails = t.forgotdetails || {};
    t.forgotdetails.signals = {
        defaultView: null,
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Forgot Details Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("forgotdetails.clicked", function() {
                t.marshal.loadURL("ForgotDetails")
            });
            t.signal.subscribe("lobby.start", function() {
                    n.loadPublish();
                    t.forgotdetails.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    t.config.InitialView === "forgotdetails" &&
                        t.marshal.loadURL("ForgotDetails")
                })
                .disposeAfter(1)
        },
        loadPublish: function() {
            i(".lobby-login .forgot-details")
                .touchclick(function() {
                    t.logging.logDebug(
                        "clicked forgot details button");
                    t.marshal.loadURL("ForgotDetails")
                })
        }
    };
    t.forgotdetails.signals.init()
})(window, lobby, jQuery);
(function(n) {
    n = n || (global.lobby = {});
    n.myAccount = n.myAccount || {};
    n.myAccount.init = function() {
        n.marshal.registerURL("MyAccount", n.myAccount);
        n.myAccount.view.init();
        n.requireLoaded();
        n.logging.logDebug("My Account Loaded")
    };
    n.myAccount.loadView = function() {
        n.utils.viewLoader.content.loadView("MyAccount", "myaccount", !
            0)
    };
    n.myAccount.refreshBalances = function() {
        n.player.refreshBalance()
    };
    n.myAccount.refresh = function() {
        n.myAccount.clientLoad();
        n.player.isPractice() && n.myAccount.view.practicePlayerView();
        n.player.isReal() && n.myAccount.view.realPlayerView();
        n.myAccount.refreshUsername()
    };
    n.myAccount.loaded = function() {
        n.config.InitialView === "myaccount" && (n.tracking.trackEvent(
            n.enums.trackingEvents.MYACCOUNTOPEN), n.logging.logTrace(
            "My Account view tracked"))
    };
    n.myAccount.getState = function() {
        return n.player.isValidLogin() ? "Display" : "Invalid"
    };
    var t = function() {
        n.logging.logDebug("backToGamesCallback");
        n.marshal.loadURL("MyAccount")
    };
    n.myAccount.refreshUsername = function() {
        n.player.isPractice() || n.utils.isNullorEmpty(n.player.getUsername()) ||
            n.myAccount.view.setUsername(n.player.getUsername())
    };
    n.myAccount.loadMyAccount = function() {
        n.marshal.loadURL("MyAccount")
    };
    n.myAccount.loadSelfExclusion = function() {
        n.selfexclusion.loadSelfExclusion(t)
    };
    n.myAccount.loadDepositLimits = function() {
        n.depositlimits.loadDepositLimits(t)
    };
    n.myAccount.loadActivityStatement = function(t) {
        var i = n.config.MyAccount.ActivityStatement + "?casinoID=" + n
            .config.MyAccount.CasinoID,
            r;
        i += "&languageCode=" + n.config.MyAccount.LanguageCode;
        t || (i += "&returnUrl=" + n.utils.lobbyUrl(!0));
        r = {
            clientTypeID: n.config.Core.ClientTypeID,
            username: n.player.getUsername(),
            password: null
        };
        n.utils.viewLoader.externalLink.loadView(i, t, r)
    };
    n.myAccount.loadCloseAccount = function() {
        n.closeaccount.loadCloseAccount(t)
    };
    n.myAccount.loadBanking = function() {
        n.marshal.loadURL("Banking")
    };
    n.myAccount.loadResponsibleGamingToolsLink = function() {
        n.responsibleGamingTools && n.responsibleGamingTools.loadResponsibleGamingTools(
            t)
    };
    n.myAccount._loadMyAccountForm = function(t, i) {
        var r = i || [],
            u;
        r.push({
            event: "backToGamesCallback",
            callBack: function() {
                n.logging.logDebug("backToGamesCallback");
                n.marshal.loadURL("MyAccount")
            }
        });
        u = {
            serviceUrl: n.config.Core.FormsClientUrl,
            CasinoId: n.config.MyAccount.CasinoID,
            LanguageCode: n.config.MyAccount.LanguageCode,
            LoginName: n.config.MyAccount.LoginName,
            Password: n.config.MyAccount.Password,
            SessionToken: n.config.MyAccount.SessionToken ?
                "undefined" : n.config.MyAccount.SessionToken,
            Token: n.config.MyAccount.Token ? "undefined" : n.config
                .MyAccount.Token,
            UserId: n.config.MyAccount.UserID,
            PlayerType: 0,
            ClientTypeId: n.config.MyAccount.ClientTypeID
        };
        n.logging.logDebug(t + "Open");
        n.utils.viewLoader.formsService.loadView(t, u, r, [], t, !1)
    };
    n.myAccount.getToggleStateObject = function(t) {
        var i;
        switch (t) {
            case "sound":
                i = n.player.settings.getSound();
                break;
            case "autoLogin":
                i = n.player.settings.getAutoLogin();
                break;
            default:
                throw n.Exception("error.lobby.myaccount.toggle");
        }
        return {
            on: i
        }
    };
    n.myAccount.loadChangePassword = function() {
        n.player.logout("ChangePassword")
    };
    n.myAccount.clientLoad = function() {
        !n.player.isPractice() && n.config.MyAccount.myAccount_AccountActivationStatuses &&
            n.player.playerService.PlayerData.RegulatedInfo != null ? n
            .player.playerService.PlayerData.RegulatedInfo.UserDetails.AccountStatus ===
            n.enums.accountStatuses.PROVISONAL_ACCOUNT ? (n.myAccount.view
                .removeAccountStatusDeactivated(), n.myAccount.view.removeAccountStatusActivated(),
                n.config.MyAccount.myAccount_ProvisionalAccountSimple ||
                n.myAccount.view.removeProvisionalAccountSimple(), n.config
                .MyAccount.myAccount_ProvisionalAccountSteps || n.myAccount
                .view.removeProvisionalAccountSteps(), n.config.MyAccount
                .myAccount_showStatusProvisionalInfo || n.myAccount.view
                .removeAccountStatusProvisionalInfo()) : n.player.playerService
            .PlayerData.RegulatedInfo.UserDetails.AccountStatus === n.enums
            .accountStatuses.DEACTIVATED_ACCOUNT ? (n.myAccount.view.removeAccountStatusProvisional(),
                n.myAccount.view.removeAccountStatusActivated(), n.config
                .MyAccount.myAccount_DeactivateAccountInfo || n.myAccount
                .view.removeDeactivateAccountInfo(), n.config.MyAccount
                .myAccount_ContactInfo || n.myAccount.view.removeContactInfo(),
                n.config.MyAccount.myAccount_showStatusDeactivatedInfo ||
                n.myAccount.view.removeAccountStatusDeactivatedInfo()) :
            n.player.playerService.PlayerData.RegulatedInfo.UserDetails
            .AccountStatus === n.enums.accountStatuses.ACTIVATED_ACCOUNT ?
            (n.myAccount.view.removeAccountStatusDeactivated(), n.myAccount
                .view.removeAccountStatusProvisional(), n.myAccount.view
                .removeContactInfo(), n.config.MyAccount.myAccount_showStatusActivatedInfo ||
                n.myAccount.view.removeAccountStatusActivatedInfo()) :
            n.myAccount.view.removeAccountStatuses() : n.myAccount.view
            .removeAccountStatuses()
    };
    n.require()
})(lobby, jQuery);
(function(n) {
    n.myAccount.signals = {
        init: function() {
            var t = this;
            t.loadSubscribe();
            n.logging.logDebug("My Account Signals Loaded")
        },
        loadSubscribe: function() {
            n.signal.subscribe("lobby.start", function() {
                    n.myAccount.signals.loadPublish();
                    n.myAccount.init()
                })
                .disposeAfter(1);
            n.signal.subscribe("lobby.loaded", function() {
                    n.myAccount.view.doToggles();
                    n.myAccount.refresh();
                    n.myAccount.loaded()
                })
                .disposeAfter(1);
            n.signal.subscribe("account.navigation.button.click",
                function() {
                    n.myAccount.loadMyAccount()
                });
            n.signal.subscribe("marshal.viewLoaded.myaccount",
                function() {
                    n.myAccount.view.init();
                    n.myAccount.view.doToggles();
                    n.tracking.trackEvent(n.enums.trackingEvents
                        .MYACCOUNTOPEN);
                    n.myAccount.refresh();
                    n.myAccount.refreshBalances()
                });
            n.signal.subscribe("player.balanceReturned", function(t) {
                n.myAccount.view.addPlayerBalance(t.balance
                    .Cash);
                n.myAccount.view.addPlayerBonusBalance(t.balance
                    .Bonus)
            })
        },
        loadPublish: function() {}
    };
    n.myAccount.signals.init()
})(lobby);
(function(n, t) {
    n = n || (global.lobby = {});
    n.myAccount = n.myAccount || {};
    n.myAccount.view = n.myAccount.view || {};
    var i = "#myAccount";
    n.myAccount.view.init = function() {
        n.myAccount.view.setupTouchclicks();
        n.myAccount.view.setupToggles();
        n.myAccount.view.resetLogout();
        n.myAccount.view.resetUsername();
        n.logging.logDebug("My Account View Loaded")
    };
    n.myAccount.view.setupTouchclicks = function() {
        t("#self-exclusion")
            .touchclick(function() {
                n.myAccount.loadSelfExclusion()
            });
        t("#deposit-limits")
            .touchclick(function() {
                n.myAccount.loadDepositLimits()
            });
        t("#activity-statement")
            .touchclick(function() {
                var i = t(this)
                    .data("new-window");
                n.myAccount.loadActivityStatement(i)
            });
        t("#close-account")
            .touchclick(function() {
                n.myAccount.loadCloseAccount()
            });
        t("#log-out")
            .touchclick(function() {
                n.myAccount.view.disableLogout();
                n.player.logout()
            });
        t("#myAccountPlayForReal")
            .touchclick(function() {
                n.registration ? n.player.logout("Registration") :
                    n.player.logout("Login")
            });
        t("#changePassword")
            .touchclick(function() {
                n.myAccount.loadChangePassword()
            });
        t("#deposit-btn")
            .touchclick(function() {
                n.myAccount.loadBanking()
            });
        t("#myAccountBankingButton")
            .touchclick(function() {
                n.marshal.loadURL("Banking")
            });
        t("#myAccount_ResponsileGamingToolsLink")
            .touchclick(function() {
                n.myAccount.loadResponsibleGamingToolsLink()
            })
    };
    n.myAccount.view.doToggles = function() {
        t("#preferences-sound")
            .toggles(n.myAccount.getToggleStateObject("sound"));
        t("#preferences-autologin")
            .toggles(n.myAccount.getToggleStateObject("autoLogin"))
    };
    n.myAccount.view.setupToggles = function() {
        t("#preferences-sound")
            .on("toggle", function(t, i) {
                n.player.settings.setSound(i)
            });
        t("#preferences-autologin")
            .on("toggle", function(t, i) {
                n.player.settings.setAutoLogin(i, !1)
            })
    };
    n.myAccount.view.resetLogout = function() {
        t("#log-out")
            .removeClass("disabled")
    };
    n.myAccount.view.disableLogout = function() {
        t("#log-out")
            .addClass("disabled")
    };
    n.myAccount.view.resetUsername = function() {
        t("#myAccountUsername")
            .text("")
    };
    n.myAccount.view.setUsername = function(n) {
        t("#myAccountUsername")
            .text(" - " + n)
    };
    n.myAccount.view.addPlayerBalance = function(n) {
        t("#myAccountBalance", i)
            .text(n)
    };
    n.myAccount.view.addPlayerBonusBalance = function(n) {
        t("#myAccountBonusBalance", i)
            .text(n)
    };
    n.myAccount.view.removeProvisionalAccountSimple = function() {
        t("#myAccountProvisionalAccountSimple")
            .remove()
    };
    n.myAccount.view.removeProvisionalAccountSteps = function() {
        t("#myAccountProvisionalAccountSteps")
            .remove()
    };
    n.myAccount.view.removeDeactivateAccountInfo = function() {
        t("#myAccountDeactivateAccountInfo")
            .remove()
    };
    n.myAccount.view.removeContactInfo = function() {
        t("#myAccountContactInfo")
            .remove()
    };
    n.myAccount.view.removeAccountStatuses = function() {
        t("#myAccountAccountStatus")
            .remove()
    };
    n.myAccount.view.removeAccountStatusProvisional = function() {
        t("#myAccountAccountStatusProvisional")
            .remove()
    };
    n.myAccount.view.removeAccountStatusDeactivated = function() {
        t("#myAccountAccountStatusDeActivated")
            .remove()
    };
    n.myAccount.view.removeAccountStatusActivated = function() {
        t("#myAccountAccountStatusActivated")
            .remove()
    };
    n.myAccount.view.removeAccountStatusProvisionalInfo = function() {
        t("#myAccountStatusProvisional")
            .remove();
        t("#myAccountStatusProvisionalVerifyDeposit")
            .remove();
        t("#myAccountStatusProvisionalVerifyResidence")
            .remove();
        t("#myAccountDepositButton")
            .remove()
    };
    n.myAccount.view.removeAccountStatusDeactivatedInfo = function() {
        t("#myAccountStatusDeactivated")
            .remove()
    };
    n.myAccount.view.removeAccountStatusActivatedInfo = function() {
        t("#myAccountStatusActivated")
            .remove()
    };
    n.myAccount.view.practicePlayerView = function() {
        t("#myAccountBalanceText")
            .text(n.languageStringProvider.getString(
                "PracticePlayBalance"));
        t("#myAccountContactInfo")
            .fadeOut(0);
        t("#myAccountBonusBalanceRow")
            .fadeOut(0);
        t("#self-exclusion")
            .fadeOut(0);
        t("#deposit-limits")
            .fadeOut(0);
        t("#activity-statement")
            .fadeOut(0);
        t("#close-account")
            .fadeOut(0);
        t("#myAccountPreferencesAutoLogin")
            .fadeOut(0);
        t("#log-out")
            .fadeOut(0);
        t("#changePassword")
            .fadeOut(0);
        t("#myAccount_ResponsileGamingToolsLink")
            .fadeOut(0);
        t("#myAccountPlayForReal")
            .fadeIn(0);
        t("#myAccountContainer")
            .fadeIn(0)
    };
    n.myAccount.view.realPlayerView = function() {
        t("#myAccountBalanceText")
            .text(n.languageStringProvider.getString("cash"));
        t("#myAccountContactInfo")
            .fadeIn(0);
        t("#myAccountBonusBalanceRow")
            .fadeIn(0);
        t("#self-exclusion")
            .fadeIn(0);
        t("#deposit-limits")
            .fadeIn(0);
        t("#activity-statement")
            .fadeIn(0);
        t("#close-account")
            .fadeIn(0);
        t("#myAccountPreferencesAutoLogin")
            .fadeIn(0);
        t("#log-out")
            .fadeIn(0);
        t("#myAccount_ResponsileGamingToolsLink")
            .fadeIn(0);
        t("#myAccountPlayForReal")
            .fadeOut(0);
        t("#myAccountContainer")
            .fadeIn(0);
        t("myAccountAccountStatus")
            .fadeOut(0)
    }
})(lobby, jQuery);
(function(n) {
    n = n || (global.lobby = {});
    n.contactUs = n.contactUs || {};
    n.contactUs.init = function() {
        n.marshal.registerURL("ContactUs", n.contactUs);
        n.contactUs.view.init();
        n.requireLoaded();
        n.logging.logDebug("Contact Us Loaded")
    };
    n.contactUs.loaded = function() {
        n.config.InitialView === "contactus" && (n.tracking.trackEvent(
            n.enums.trackingEvents.HELPOPEN), n.logging.logTrace(
            "Contact Us view tracked"))
    };
    n.contactUs.loadView = function() {
        n.utils.viewLoader.content.loadView("ContactUs", "contactus", !
            0)
    };
    n.contactUs.loadHelpUrl = function() {
        var t = encodeURIComponent(n.utils.lobbyUrl() + "ContactUs");
        n.utils.viewLoader.externalLink.loadView(this.getHelpEndpoint() +
            "?returnUrl=" + t)
    };
    n.contactUs.getHelpEndpoint = function() {
        var t = n.config.ContactUs.HelpEndPoint;
        return t.indexOf("{languageCode}") !== -1 && (t = t.replace(
            "{languageCode}", n.config.Core.LanguageCode)), t
    };
    n.contactUs.loadProtectionOfPrivacyUrl = function() {
        n.utils.viewLoader.externalLink.loadView(n.config.ContactUs.ProtectionOfPrivacyEndPoint +
            "?casinoID=" + n.config.ContactUs.CasinoID)
    };
    n.contactUs.getState = function() {
        return "Display"
    };
    n.contactUs.loadContactUs = function() {
        n.marshal.loadURL("ContactUs")
    };
    n.contactUs.loadResponsibleGaming = function() {
        var t = encodeURIComponent(n.utils.lobbyUrl() + "ContactUs");
        n.logging.logDebug("Loading External Responsible Gaming  Link");
        n.utils.viewLoader.externalLink.loadView(n.config.ContactUs.ResponsibleGamingEndPointValue +
            "?returnUrl=" + t)
    };
    n.require()
})(lobby, jQuery);
(function(n) {
    n.contactUs.signals = {
        init: function() {
            var t = this;
            t.loadSubscribe();
            n.logging.logDebug("Contact Us Signals Loaded")
        },
        loadSubscribe: function() {
            n.signal.subscribe("lobby.start", function() {
                    n.contactUs.signals.loadPublish();
                    n.contactUs.init()
                })
                .disposeAfter(1);
            n.signal.subscribe("contactus.navigation.button.click",
                function() {
                    n.contactUs.loadContactUs()
                });
            n.signal.subscribe("marshal.viewLoaded.contactus",
                function() {
                    n.contactUs.view.init();
                    n.tracking.trackEvent(n.enums.trackingEvents
                        .HELPOPEN)
                });
            n.signal.subscribe("lobby.loaded", function() {
                    n.contactUs.loaded()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {}
    };
    n.contactUs.signals.init()
})(lobby);
(function(n, t) {
    n = n || (global.lobby = {});
    n.contactUs = n.contactUs || {};
    n.contactUs.view = n.contactUs.view || {};
    n.contactUs.view.init = function() {
        t("#help-link")
            .touchclick({
                callback: function() {
                    n.ui.useTouchClickDoubleClick() ?
                        setTimeout(function() {
                            n.contactUs.loadHelpUrl()
                        }, 350) : n.contactUs.loadHelpUrl()
                },
                preventDefault: n.ui.useTouchClickDoubleClick()
            });
        t("#protection-of-privacy-link")
            .touchclick({
                callback: function() {
                    n.contactUs.loadProtectionOfPrivacyUrl()
                },
                preventDefault: n.ui.useTouchClickDoubleClick()
            });
        t("#responsibleGaming")
            .touchclick(function() {
                n.contactUs.loadResponsibleGaming()
            });
        n.logging.logDebug("Contact Us View Loaded")
    }
})(lobby, jQuery);
(function(n, t) {
    t = t || n.lobby === {};
    t.changePassword = t.changePassword || {};
    t.changePassword.signals = {
        defaultView: null,
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Change Password Signals Loaded")
        },
        loadSubscribe: function() {
            t.signal.subscribe("changepassword.clicked", function() {
                t.changePassword.loadChangePassword()
            });
            t.signal.subscribe("lobby.start", function() {
                    t.changePassword.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    t.config.InitialView === "changepassword" &&
                        t.changePassword.loadChangePassword()
                })
                .disposeAfter(1)
        }
    };
    t.changePassword.signals.init()
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.changePassword = t.changePassword || {};
    t.changePassword.callbackBag = [];
    t.changePassword.init = function() {
        t.changePassword.buildCallbackBag();
        t.marshal.registerURL("ChangePassword", t.changePassword);
        t.config.InitialView === "changepassword" && (t.marshal.processLoadInitialStartURL = !
            1);
        t.requireLoaded();
        t.logging.logDebug("Change Password component initialised")
    };
    t.changePassword.loadView = function() {
        var i, r;
        t.changePassword.buildCallbackBag();
        i = [];
        i.push({
            Name: "email",
            Val: n.RequestData.Email
        });
        i.push({
            Name: "resetKey",
            Val: n.RequestData.ResetKey
        });
        r = {
            serviceUrl: t.config.Core.FormsClientUrl,
            CasinoId: t.config.ChangePassword.CasinoID,
            LanguageCode: t.config.ChangePassword.LanguageCode,
            ClientTypeId: t.config.ChangePassword.ClientTypeID
        };
        t.utils.viewLoader.formsService.loadView("ChangePassword", r, t
            .changePassword.callbackBag, i, "ChangePassword", !1);
        t.logging.logDebug("Change Password Form Opened")
    };
    t.changePassword.getState = function() {
        return "Display"
    };
    t.changePassword.loadChangePassword = function() {
        t.marshal.loadURL(t.marshal.currentUrl)
    };
    t.changePassword.buildCallbackBag = function() {
        t.changePassword.callbackBag = [];
        t.changePassword.callbackBag.push({
            event: "backToGamesCallback",
            callBack: function() {
                t.marshal.loadURL("Games")
            }
        });
        t.changePassword.callbackBag.push({
            event: "gotoLoginCallback",
            callBack: function() {
                t.marshal.loadURL("Login")
            }
        });
        t.changePassword.callbackBag.push({
            event: "processFormCallback",
            callBack: function(n) {
                var i = n.SystemInfoResponse;
                n.Status.StatusCode === 0 && i.length > 0 &&
                    (t.player.setUsername(t.utils.trim(i[0]
                            .Val)), t.logging.logDebug(
                            "Password Changed Successful"),
                        t.tracking.trackEvent(t.enums.trackingEvents
                            .PASSWORDCHANGEDSUCCESSFUL))
            }
        });
        t.changePassword.callbackBag.push({
            event: "getFormCallback",
            callBack: function(n) {
                n.Status.StatusCode === 0 ? (t.logging.logDebug(
                        "Change Password Launched"), t.tracking
                    .trackEvent(t.enums.trackingEvents.CHANGEPASSWORDOPEN)
                ) : (t.logging.logDebug(
                        "Fetch Change Password Failed"),
                    t.tracking.trackEvent(t.enums.trackingEvents
                        .FETCHCHANGEPASSWORDFALIED))
            }
        });
        t.changePassword.callbackBag.push({
            event: "ShowLoader",
            callBack: function() {
                t.spinner.start()
            }
        });
        t.changePassword.callbackBag.push({
            event: "HideLoader",
            callBack: function() {
                t.spinner.stop()
            }
        })
    };
    t.require()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.error = t.error || {};
    t.error.init = function() {
        n.onerror = function(n, i, r) {
            n = t.error.ensureException(n);
            n.url = i;
            n.lineNumber = r;
            switch (n.severity) {
                case "NOTICE":
                    t.error.notice(n);
                    break;
                case "SILENT":
                    t.error.silent(n);
                    break;
                default:
                    t.error.fatal(n)
            }
            return !0
        };
        t.logging.logDebug("Global error handler initiated")
    };
    t.error.getLanguageString = function(t) {
        var i = n.lobbyConfig.Error.Messages[t];
        return i || (i = n.lobbyConfig.Error.DefaultMessage), i
    };
    t.error.getLoggingString = function(t) {
        var i = n.lobbyConfig.Error.Logs[t];
        return i || (i = t), i
    };
    t.error.fatal = function(i) {
        var u, r, e, f, o;
        i = t.error.ensureException(i);
        e = t.error.getLanguageString(i.errorString);
        f = t.error.getLoggingString(i.errorString);
        t.logging.logError(f);
        n.lobbyConfig.Core.InDebugMode ? (o =
                '<p class="dialog-text-info">' + f + "<br /><br /><i>" +
                i.url + "<\/i><br /><br />Line: " + i.lineNumber +
                "<\/p>", u = {
                    title: "Error",
                    html: o,
                    buttonBag: [{
                        type: "callback",
                        text: "Reload Lobby",
                        event: function() {
                            t.utils.setLocation(t.utils.lobbyUrl(!
                                0))
                        },
                        style: "smallWide",
                        color: "default"
                    }]
                }, r = t.dialogManager.Dialog(u), r.init(), r.showDialog()
            ) : t.enums && t.enums.statuses && t.status === t.enums.statuses
            .STARTED && t.offline && !t.offline.isConnected ? t.utils.setLocation(
                t.config.Error.ExceptionEndpoint + i.errorString) : (u = {
                title: t.languageStringProvider.getString("error"),
                message: e,
                buttonBag: [{
                    type: "callback",
                    text: t.languageStringProvider.getString(
                        "lobby.reload"),
                    event: function() {
                        t.utils.setLocation(t.utils.lobbyUrl(!
                            0))
                    },
                    style: "smallWide",
                    color: "default"
                }]
            }, r = t.dialogManager.Dialog(u), r.init(), r.showDialog());
        $("#dialogContainer")
            .css("z-index", 5)
    };
    t.error.notice = function(n, i) {
        var u, f, e, r;
        n = t.error.ensureException(n);
        u = t.error.getLanguageString(n.errorString);
        f = t.error.getLoggingString(n.errorString);
        t.logging.logWarn(f);
        e = {
            message: u,
            buttonbag: i
        };
        r = t.dialogManager.Dialog(e);
        r.init();
        r.showDialog();
        $("#dialogContainer")
            .css("z-index", 5)
    };
    t.error.silent = function(n) {
        n = t.error.ensureException(n);
        var i = t.error.getLoggingString(n.errorString);
        t.logging.logWarn(i)
    };
    t.error.ensureException = function(i) {
        if (!i.isLobbyException)
            if (typeof i == "string") {
                var r = $.trim(i.replace(/uncaught/i, ""));
                i = $.inArray(r, n.lobbyConfig.Error.Logs) > -1 || t.Exception
                    .Exceptions.length === 0 ? t.Exception(r) : t.Exception
                    .Exceptions.pop()
            } else i = t.Exception(i.message || i.toString());
        return i
    };
    t.error.init()
})(window, lobby);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.Exception = function(n, r) {
        var f = ["FATAL", "NOTICE", "SILENT"],
            e = function() {
                i.inArray(r, f) === -1 && (r = f[0])
            },
            u;
        return e(), u = {
            severity: r,
            errorString: n,
            url: "",
            lineNumber: 0,
            logMessage: "",
            isLobbyException: !0
        }, t.Exception.Exceptions.push(u), u
    };
    t.Exception.Exceptions = []
})(window, lobby, jQuery);
(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(
        jQuery)
})(function(n) {
    function i(n) {
        return t.raw ? n : encodeURIComponent(n)
    }

    function u(n) {
        return t.raw ? n : decodeURIComponent(n)
    }

    function f(n) {
        return i(t.json ? JSON.stringify(n) : String(n))
    }

    function e(n) {
        n.indexOf('"') === 0 && (n = n.slice(1, -1)
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, "\\"));
        try {
            return n = decodeURIComponent(n.replace(o, " ")), t.json ?
                JSON.parse(n) : n
        } catch (i) {}
    }

    function r(i, r) {
        var u = t.raw ? i : e(i);
        return n.isFunction(r) ? r(u) : u
    }
    var o = /\+/g,
        t = n.cookie = function(e, o, s) {
            var y, a, h, v, c, p;
            if (o !== undefined && !n.isFunction(o)) return s = n.extend({},
                t.defaults, s), typeof s.expires == "number" && (y =
                s.expires, a = s.expires = new Date, a.setTime(+a +
                    y * 864e5)), document.cookie = [i(e), "=", f(o),
                s.expires ? "; expires=" + s.expires.toUTCString() :
                "", s.path ? "; path=" + s.path : "", s.domain ?
                "; domain=" + s.domain : "", s.secure ? "; secure" :
                ""].join("");
            for (h = e ? undefined : {}, v = document.cookie ? document.cookie
                .split("; ") : [], c = 0, p = v.length; c < p; c++) {
                var w = v[c].split("="),
                    b = u(w.shift()),
                    l = w.join("=");
                if (e && e === b) {
                    h = r(l, o);
                    break
                }
                e || (l = r(l)) === undefined || (h[b] = l)
            }
            return h
        };
    t.defaults = {};
    n.removeCookie = function(t, i) {
        return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({},
            i, {
                expires: -1
            })), !n.cookie(t))
    }
}),
function() {
    var o = this,
        r = !1,
        n = {},
        t = {},
        i;
    n.types = {};
    n.lookups = {};
    o.dingu = n;
    var s = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        h = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        c = function(n, t) {
            var i = [],
                r = [];
            return i = t || n.toString()
                .match(s)[1].split(","), i.forEach(function(n) {
                    var i = n.match(h),
                        t;
                    if (i !== null)
                        for (t = 0; t < i.length; t++) n = n.replace(i[t],
                            "");
                    n = n.trim();
                    n !== "" && r.push(n)
                }), r
        },
        u = function(t, r) {
            r.forEach(function(i) {
                if (i === t.name) throw new n.types.CircularDependencyError(
                    t, r);
            });
            var u;
            switch (t.type) {
                case i.SINGLETON:
                    t.value || (u = f(t.dependencyNames, r.concat(t.name)), t.value =
                        t.target.apply(t.target, u));
                    break;
                case i.INSTANCE:
                    u = f(t.dependencyNames, r.concat(t.name));
                    t.value = t.target.apply(t.target, u)
            }
            return t.value
        },
        f = function(n, i) {
            return n.map(function(n) {
                if (!t.hasOwnProperty(n)) throw new Error(
                    "Failed to resolve dependency. Could not find a module called " +
                    n);
                return u(t[n], i)
            })
        },
        e = function(n) {
            var t, i = n;
            return n instanceof Array && (i = n.pop(), t = n), {
                fn: i,
                args: t
            }
        };
    n.module = function(u, f) {
        if (!r) {
            var o = e(f);
            t[u] = new n.types.RegistryItem(u, o.fn, i.INSTANCE, o.args)
        }
    };
    n.singleton = function(u, f) {
        if (!r) {
            var o = e(f);
            t[u] = new n.types.RegistryItem(u, o.fn, i.SINGLETON, o.args)
        }
    };
    n.value = function(u, f) {
        r || (t[u] = new n.types.RegistryItem(u, f, i.VALUE))
    };
    n.get = function(i, r) {
        if (!t.hasOwnProperty(i)) {
            if (r) return undefined;
            throw new n.types.ItemNotFoundError(i);
        }
        return u(t[i], [])
    };
    n.reset = function() {
        r || (t = {})
    };
    n.lock = function() {
        r = !0
    };
    n.types.RegistryItem = function(n, t, r, u) {
        this.name = n;
        this.target = t;
        this.type = r;
        this.value = r === i.VALUE ? t : null;
        this.dependencyNames = r !== i.VALUE ? c(t, u) : null
    };
    n.types.CircularDependencyError = function(n, t) {
        this.rootItem = n;
        this.dependencyChain = t;
        this.name = "CircularDependencyError";
        this.message = "Calling " + n.name +
            " resolved a dependency that depends on this item. Chain: " + t
            .join("->") + "->" + n.name
    };
    n.types.CircularDependencyError.prototype.toString = function() {
        return this.message
    };
    n.types.ItemNotFoundError = function(n) {
        this.item = n;
        this.message = "Item not found: " + n + " - was it registered?"
    };
    n.types.ItemNotFoundError.prototype.toString = function() {
        return this.message
    };
    n.lookups.RegistryItemType = {
        VALUE: "value",
        SINGLETON: "singleton",
        INSTANCE: "instance"
    };
    i = n.lookups.RegistryItemType;
    window.testHarness && (testHarness.resetLockStatus = function() {
        r = !1
    })
}.call(this),
    function() {
        var y = this,
            lt = y._,
            e = {},
            r = Array.prototype,
            nt = Object.prototype,
            at = Function.prototype,
            p = r.push,
            t = r.slice,
            o = r.concat,
            f = nt.toString,
            vt = nt.hasOwnProperty,
            tt = r.forEach,
            it = r.map,
            rt = r.reduce,
            ut = r.reduceRight,
            ft = r.filter,
            et = r.every,
            ot = r.some,
            s = r.indexOf,
            st = r.lastIndexOf,
            yt = Array.isArray,
            pt = Object.keys,
            w = at.bind,
            n = function(t) {
                if (t instanceof n) return t;
                if (!(this instanceof n)) return new n(t);
                this._wrapped = t
            },
            i, b, k, h, c, d, l, a, u, ht, ct, v;
        typeof exports != "undefined" ? (typeof module != "undefined" && module
                .exports && (exports = module.exports = n), exports._ = n) : y._ =
            n;
        n.VERSION = "1.5.2";
        i = n.each = n.forEach = function(t, i, r) {
            var f, u, o;
            if (t != null)
                if (tt && t.forEach === tt) t.forEach(i, r);
                else if (t.length === +t.length) {
                for (u = 0, o = t.length; u < o; u++)
                    if (i.call(r, t[u], u, t) === e) return
            } else
                for (f = n.keys(t), u = 0, o = f.length; u < o; u++)
                    if (i.call(r, t[f[u]], f[u], t) === e) return
        };
        n.map = n.collect = function(n, t, r) {
            var u = [];
            return n == null ? u : it && n.map === it ? n.map(t, r) : (i(n,
                function(n, i, f) {
                    u.push(t.call(r, n, i, f))
                }), u)
        };
        b = "Reduce of empty array with no initial value";
        n.reduce = n.foldl = n.inject = function(t, r, u, f) {
            var e = arguments.length > 2;
            if (t == null && (t = []), rt && t.reduce === rt) return f && (
                r = n.bind(r, f)), e ? t.reduce(r, u) : t.reduce(r);
            if (i(t, function(n, t, i) {
                e ? u = r.call(f, u, n, t, i) : (u = n, e = !0)
            }), !e) throw new TypeError(b);
            return u
        };
        n.reduceRight = n.foldr = function(t, r, u, f) {
            var o = arguments.length > 2,
                e, s;
            if (t == null && (t = []), ut && t.reduceRight === ut) return f &&
                (r = n.bind(r, f)), o ? t.reduceRight(r, u) : t.reduceRight(
                    r);
            if (e = t.length, e !== +e && (s = n.keys(t), e = s.length), i(
                t, function(n, i, h) {
                    i = s ? s[--e] : --e;
                    o ? u = r.call(f, u, t[i], i, h) : (u = t[i], o = !
                        0)
                }), !o) throw new TypeError(b);
            return u
        };
        n.find = n.detect = function(n, t, i) {
            var r;
            return k(n, function(n, u, f) {
                if (t.call(i, n, u, f)) return r = n, !0
            }), r
        };
        n.filter = n.select = function(n, t, r) {
            var u = [];
            return n == null ? u : ft && n.filter === ft ? n.filter(t, r) :
                (i(n, function(n, i, f) {
                    t.call(r, n, i, f) && u.push(n)
                }), u)
        };
        n.reject = function(t, i, r) {
            return n.filter(t, function(n, t, u) {
                return !i.call(r, n, t, u)
            }, r)
        };
        n.every = n.all = function(t, r, u) {
            r || (r = n.identity);
            var f = !0;
            return t == null ? f : et && t.every === et ? t.every(r, u) : (
                i(t, function(n, t, i) {
                    if (!(f = f && r.call(u, n, t, i))) return e
                }), !!f)
        };
        k = n.some = n.any = function(t, r, u) {
            r || (r = n.identity);
            var f = !1;
            return t == null ? f : ot && t.some === ot ? t.some(r, u) : (i(
                t, function(n, t, i) {
                    if (f || (f = r.call(u, n, t, i))) return e
                }), !!f)
        };
        n.contains = n.include = function(n, t) {
            return n == null ? !1 : s && n.indexOf === s ? n.indexOf(t) !=
                -1 : k(n, function(n) {
                    return n === t
                })
        };
        n.invoke = function(i, r) {
            var u = t.call(arguments, 2),
                f = n.isFunction(r);
            return n.map(i, function(n) {
                return (f ? r : n[r])
                    .apply(n, u)
            })
        };
        n.pluck = function(t, i) {
            return n.map(t, function(n) {
                return n[i]
            })
        };
        n.where = function(t, i, r) {
            return n.isEmpty(i) ? r ? void 0 : [] : n[r ? "find" : "filter"]
                (t, function(n) {
                    for (var t in i)
                        if (i[t] !== n[t]) return !1;
                    return !0
                })
        };
        n.findWhere = function(t, i) {
            return n.where(t, i, !0)
        };
        n.max = function(t, r, u) {
            if (!r && n.isArray(t) && t[0] === +t[0] && t.length < 65535)
                return Math.max.apply(Math, t);
            if (!r && n.isEmpty(t)) return -Infinity;
            var f = {
                computed: -Infinity,
                value: -Infinity
            };
            return i(t, function(n, t, i) {
                var e = r ? r.call(u, n, t, i) : n;
                e > f.computed && (f = {
                    value: n,
                    computed: e
                })
            }), f.value
        };
        n.min = function(t, r, u) {
            if (!r && n.isArray(t) && t[0] === +t[0] && t.length < 65535)
                return Math.min.apply(Math, t);
            if (!r && n.isEmpty(t)) return Infinity;
            var f = {
                computed: Infinity,
                value: Infinity
            };
            return i(t, function(n, t, i) {
                var e = r ? r.call(u, n, t, i) : n;
                e < f.computed && (f = {
                    value: n,
                    computed: e
                })
            }), f.value
        };
        n.shuffle = function(t) {
            var u, f = 0,
                r = [];
            return i(t, function(t) {
                u = n.random(f++);
                r[f - 1] = r[u];
                r[u] = t
            }), r
        };
        n.sample = function(t, i, r) {
            return arguments.length < 2 || r ? t[n.random(t.length - 1)] :
                n.shuffle(t)
                .slice(0, Math.max(0, i))
        };
        h = function(t) {
            return n.isFunction(t) ? t : function(n) {
                return n[t]
            }
        };
        n.sortBy = function(t, i, r) {
            var u = h(i);
            return n.pluck(n.map(t, function(n, t, i) {
                    return {
                        value: n,
                        index: t,
                        criteria: u.call(r, n, t, i)
                    }
                })
                .sort(function(n, t) {
                    var i = n.criteria,
                        r = t.criteria;
                    if (i !== r) {
                        if (i > r || i === void 0) return 1;
                        if (i < r || r === void 0) return -1
                    }
                    return n.index - t.index
                }), "value")
        };
        c = function(t) {
            return function(r, u, f) {
                var e = {},
                    o = u == null ? n.identity : h(u);
                return i(r, function(n, i) {
                    var u = o.call(f, n, i, r);
                    t(e, u, n)
                }), e
            }
        };
        n.groupBy = c(function(t, i, r) {
            (n.has(t, i) ? t[i] : t[i] = [])
            .push(r)
        });
        n.indexBy = c(function(n, t, i) {
            n[t] = i
        });
        n.countBy = c(function(t, i) {
            n.has(t, i) ? t[i]++ : t[i] = 1
        });
        n.sortedIndex = function(t, i, r, u) {
            var f;
            r = r == null ? n.identity : h(r);
            for (var s = r.call(u, i), e = 0, o = t.length; e < o;) f = e +
                o >>> 1, r.call(u, t[f]) < s ? e = f + 1 : o = f;
            return e
        };
        n.toArray = function(i) {
            return i ? n.isArray(i) ? t.call(i) : i.length === +i.length ?
                n.map(i, n.identity) : n.values(i) : []
        };
        n.size = function(t) {
            return t == null ? 0 : t.length === +t.length ? t.length : n.keys(
                    t)
                .length
        };
        n.first = n.head = n.take = function(n, i, r) {
            if (n != null) return i == null || r ? n[0] : t.call(n, 0, i)
        };
        n.initial = function(n, i, r) {
            return t.call(n, 0, n.length - (i == null || r ? 1 : i))
        };
        n.last = function(n, i, r) {
            if (n != null) return i == null || r ? n[n.length - 1] : t.call(
                n, Math.max(n.length - i, 0))
        };
        n.rest = n.tail = n.drop = function(n, i, r) {
            return t.call(n, i == null || r ? 1 : i)
        };
        n.compact = function(t) {
            return n.filter(t, n.identity)
        };
        d = function(t, r, u) {
            return r && n.every(t, n.isArray) ? o.apply(u, t) : (i(t,
                function(t) {
                    n.isArray(t) || n.isArguments(t) ? r ? p.apply(
                        u, t) : d(t, r, u) : u.push(t)
                }), u)
        };
        n.flatten = function(n, t) {
            return d(n, t, [])
        };
        n.without = function(i) {
            return n.difference(i, t.call(arguments, 1))
        };
        n.uniq = n.unique = function(t, r, u, f) {
            n.isFunction(r) && (f = u, u = r, r = !1);
            var s = u ? n.map(t, u, f) : t,
                o = [],
                e = [];
            return i(s, function(i, u) {
                (r ? u && e[e.length - 1] === i : n.contains(e, i)) ||
                (e.push(i), o.push(t[u]))
            }), o
        };
        n.union = function() {
            return n.uniq(n.flatten(arguments, !0))
        };
        n.intersection = function(i) {
            var r = t.call(arguments, 1);
            return n.filter(n.uniq(i), function(t) {
                return n.every(r, function(i) {
                    return n.indexOf(i, t) >= 0
                })
            })
        };
        n.difference = function(i) {
            var u = o.apply(r, t.call(arguments, 1));
            return n.filter(i, function(t) {
                return !n.contains(u, t)
            })
        };
        n.zip = function() {
            for (var i = n.max(n.pluck(arguments, "length")
                .concat(0)), r = new Array(i), t = 0; t < i; t++) r[t] = n.pluck(
                arguments, "" + t);
            return r
        };
        n.object = function(n, t) {
            var r, i, u;
            if (n == null) return {};
            for (r = {}, i = 0, u = n.length; i < u; i++) t ? r[n[i]] = t[i] :
                r[n[i][0]] = n[i][1];
            return r
        };
        n.indexOf = function(t, i, r) {
            if (t == null) return -1;
            var u = 0,
                f = t.length;
            if (r)
                if (typeof r == "number") u = r < 0 ? Math.max(0, f + r) :
                    r;
                else return u = n.sortedIndex(t, i), t[u] === i ? u : -1;
            if (s && t.indexOf === s) return t.indexOf(i, r);
            for (; u < f; u++)
                if (t[u] === i) return u;
            return -1
        };
        n.lastIndexOf = function(n, t, i) {
            var u, r;
            if (n == null) return -1;
            if (u = i != null, st && n.lastIndexOf === st) return u ? n.lastIndexOf(
                t, i) : n.lastIndexOf(t);
            for (r = u ? i : n.length; r--;)
                if (n[r] === t) return r;
            return -1
        };
        n.range = function(n, t, i) {
            arguments.length <= 1 && (t = n || 0, n = 0);
            i = arguments[2] || 1;
            for (var r = Math.max(Math.ceil((t - n) / i), 0), u = 0, f =
                new Array(r); u < r;) f[u++] = n, n += i;
            return f
        };
        l = function() {};
        n.bind = function(i, r) {
            var u, f;
            if (w && i.bind === w) return w.apply(i, t.call(arguments, 1));
            if (!n.isFunction(i)) throw new TypeError;
            return u = t.call(arguments, 2), f = function() {
                var e, n;
                return this instanceof f ? (l.prototype = i.prototype,
                    e = new l, l.prototype = null, n = i.apply(e, u
                        .concat(t.call(arguments))), Object(n) ===
                    n) ? n : e : i.apply(r, u.concat(t.call(
                    arguments)))
            }
        };
        n.partial = function(n) {
            var i = t.call(arguments, 1);
            return function() {
                return n.apply(this, i.concat(t.call(arguments)))
            }
        };
        n.bindAll = function(r) {
            var u = t.call(arguments, 1);
            if (u.length === 0) throw new Error(
                "bindAll must be passed function names");
            return i(u, function(t) {
                r[t] = n.bind(r[t], r)
            }), r
        };
        n.memoize = function(t, i) {
            var r = {};
            return i || (i = n.identity),
                function() {
                    var u = i.apply(this, arguments);
                    return n.has(r, u) ? r[u] : r[u] = t.apply(this,
                        arguments)
                }
        };
        n.delay = function(n, i) {
            var r = t.call(arguments, 2);
            return setTimeout(function() {
                return n.apply(null, r)
            }, i)
        };
        n.defer = function(i) {
            return n.delay.apply(n, [i, 1].concat(t.call(arguments, 1)))
        };
        n.throttle = function(n, t, i) {
            var f, e, o, r = null,
                u = 0,
                s;
            return i || (i = {}), s = function() {
                    u = i.leading === !1 ? 0 : new Date;
                    r = null;
                    o = n.apply(f, e)
                },
                function() {
                    var h = new Date,
                        c;
                    return u || i.leading !== !1 || (u = h), c = t - (h - u),
                        f = this, e = arguments, c <= 0 ? (clearTimeout(r),
                            r = null, u = h, o = n.apply(f, e)) : r || i.trailing ===
                        !1 || (r = setTimeout(s, c)), o
                }
        };
        n.debounce = function(n, t, i) {
            var r, u, f, o, e;
            return function() {
                f = this;
                u = arguments;
                o = new Date;
                var s = function() {
                        var h = new Date - o;
                        h < t ? r = setTimeout(s, t - h) : (r = null, i ||
                            (e = n.apply(f, u)))
                    },
                    h = i && !r;
                return r || (r = setTimeout(s, t)), h && (e = n.apply(f,
                    u)), e
            }
        };
        n.once = function(n) {
            var i = !1,
                t;
            return function() {
                return i ? t : (i = !0, t = n.apply(this, arguments), n =
                    null, t)
            }
        };
        n.wrap = function(n, t) {
            return function() {
                var i = [n];
                return p.apply(i, arguments), t.apply(this, i)
            }
        };
        n.compose = function() {
            var n = arguments;
            return function() {
                for (var t = arguments, i = n.length - 1; i >= 0; i--) t = [
                    n[i].apply(this, t)];
                return t[0]
            }
        };
        n.after = function(n, t) {
            return function() {
                if (--n < 1) return t.apply(this, arguments)
            }
        };
        n.keys = pt || function(t) {
            var i, r;
            if (t !== Object(t)) throw new TypeError("Invalid object");
            i = [];
            for (r in t) n.has(t, r) && i.push(r);
            return i
        };
        n.values = function(t) {
            for (var r = n.keys(t), u = r.length, f = new Array(u), i = 0; i <
                u; i++) f[i] = t[r[i]];
            return f
        };
        n.pairs = function(t) {
            for (var r = n.keys(t), u = r.length, f = new Array(u), i = 0; i <
                u; i++) f[i] = [r[i], t[r[i]]];
            return f
        };
        n.invert = function(t) {
            for (var u = {}, r = n.keys(t), i = 0, f = r.length; i < f; i++)
                u[t[r[i]]] = r[i];
            return u
        };
        n.functions = n.methods = function(t) {
            var r = [],
                i;
            for (i in t) n.isFunction(t[i]) && r.push(i);
            return r.sort()
        };
        n.extend = function(n) {
            return i(t.call(arguments, 1), function(t) {
                if (t)
                    for (var i in t) n[i] = t[i]
            }), n
        };
        n.pick = function(n) {
            var u = {},
                f = o.apply(r, t.call(arguments, 1));
            return i(f, function(t) {
                t in n && (u[t] = n[t])
            }), u
        };
        n.omit = function(i) {
            var f = {},
                e = o.apply(r, t.call(arguments, 1)),
                u;
            for (u in i) n.contains(e, u) || (f[u] = i[u]);
            return f
        };
        n.defaults = function(n) {
            return i(t.call(arguments, 1), function(t) {
                if (t)
                    for (var i in t) n[i] === void 0 && (n[i] = t[i])
            }), n
        };
        n.clone = function(t) {
            return n.isObject(t) ? n.isArray(t) ? t.slice() : n.extend({},
                t) : t
        };
        n.tap = function(n, t) {
            return t(n), n
        };
        a = function(t, i, r, u) {
            var l, v, h, c, e, o, s;
            if (t === i) return t !== 0 || 1 / t == 1 / i;
            if (t == null || i == null) return t === i;
            if (t instanceof n && (t = t._wrapped), i instanceof n && (i =
                i._wrapped), l = f.call(t), l != f.call(i)) return !1;
            switch (l) {
                case "[object String]":
                    return t == String(i);
                case "[object Number]":
                    return t != +t ? i != +i : t == 0 ? 1 / t == 1 / i : t ==
                        +i;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +i;
                case "[object RegExp]":
                    return t.source == i.source && t.global == i.global &&
                        t.multiline == i.multiline && t.ignoreCase == i.ignoreCase
            }
            if (typeof t != "object" || typeof i != "object") return !1;
            for (v = r.length; v--;)
                if (r[v] == t) return u[v] == i;
            if (h = t.constructor, c = i.constructor, h !== c && !(n.isFunction(
                h) && h instanceof h && n.isFunction(c) && c instanceof c))
                return !1;
            if (r.push(t), u.push(i), e = 0, o = !0, l == "[object Array]") {
                if (e = t.length, o = e == i.length, o)
                    while (e--)
                        if (!(o = a(t[e], i[e], r, u))) break
            } else {
                for (s in t)
                    if (n.has(t, s) && (e++, !(o = n.has(i, s) && a(t[s], i[
                        s], r, u)))) break;
                if (o) {
                    for (s in i)
                        if (n.has(i, s) && !e--) break;
                    o = !e
                }
            }
            return r.pop(), u.pop(), o
        };
        n.isEqual = function(n, t) {
            return a(n, t, [], [])
        };
        n.isEmpty = function(t) {
            if (t == null) return !0;
            if (n.isArray(t) || n.isString(t)) return t.length === 0;
            for (var i in t)
                if (n.has(t, i)) return !1;
            return !0
        };
        n.isElement = function(n) {
            return !!(n && n.nodeType === 1)
        };
        n.isArray = yt || function(n) {
            return f.call(n) == "[object Array]"
        };
        n.isObject = function(n) {
            return n === Object(n)
        };
        i(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
            function(t) {
                n["is" + t] = function(n) {
                    return f.call(n) == "[object " + t + "]"
                }
            });
        n.isArguments(arguments) || (n.isArguments = function(t) {
            return !!(t && n.has(t, "callee"))
        });
        typeof / . / != "function" && (n.isFunction = function(n) {
            return typeof n == "function"
        });
        n.isFinite = function(n) {
            return isFinite(n) && !isNaN(parseFloat(n))
        };
        n.isNaN = function(t) {
            return n.isNumber(t) && t != +t
        };
        n.isBoolean = function(n) {
            return n === !0 || n === !1 || f.call(n) == "[object Boolean]"
        };
        n.isNull = function(n) {
            return n === null
        };
        n.isUndefined = function(n) {
            return n === void 0
        };
        n.has = function(n, t) {
            return vt.call(n, t)
        };
        n.noConflict = function() {
            return y._ = lt, this
        };
        n.identity = function(n) {
            return n
        };
        n.times = function(n, t, i) {
            for (var u = Array(Math.max(0, n)), r = 0; r < n; r++) u[r] = t
                .call(i, r);
            return u
        };
        n.random = function(n, t) {
            return t == null && (t = n, n = 0), n + Math.floor(Math.random() *
                (t - n + 1))
        };
        u = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        u.unescape = n.invert(u.escape);
        ht = {
            escape: new RegExp("[" + n.keys(u.escape)
                .join("") + "]", "g"),
            unescape: new RegExp("(" + n.keys(u.unescape)
                .join("|") + ")", "g")
        };
        n.each(["escape", "unescape"], function(t) {
            n[t] = function(n) {
                return n == null ? "" : ("" + n)
                    .replace(ht[t], function(n) {
                        return u[t][n]
                    })
            }
        });
        n.result = function(t, i) {
            if (t == null) return void 0;
            var r = t[i];
            return n.isFunction(r) ? r.call(t) : r
        };
        n.mixin = function(t) {
            i(n.functions(t), function(i) {
                var r = n[i] = t[i];
                n.prototype[i] = function() {
                    var t = [this._wrapped];
                    return p.apply(t, arguments), v.call(this,
                        r.apply(n, t))
                }
            })
        };
        ct = 0;
        n.uniqueId = function(n) {
            var t = ++ct + "";
            return n ? n + t : t
        };
        n.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var g = /(.)^/,
            wt = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\t": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            bt = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        n.template = function(t, i, r) {
            var f, e;
            r = n.defaults({}, r, n.templateSettings);
            var h = new RegExp([(r.escape || g)
                    .source, (r.interpolate || g)
                    .source, (r.evaluate || g)
                    .source].join("|") + "|$", "g"),
                o = 0,
                u = "__p+='";
            t.replace(h, function(n, i, r, f, e) {
                return u += t.slice(o, e)
                    .replace(bt, function(n) {
                        return "\\" + wt[n]
                    }), i && (u += "'+\n((__t=(" + i +
                        "))==null?'':_.escape(__t))+\n'"), r && (u +=
                        "'+\n((__t=(" + r + "))==null?'':__t)+\n'"),
                    f && (u += "';\n" + f + "\n__p+='"), o = e + n.length,
                    n
            });
            u += "';\n";
            r.variable || (u = "with(obj||{}){\n" + u + "}\n");
            u =
                "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                u + "return __p;\n";
            try {
                f = new Function(r.variable || "obj", "_", u)
            } catch (s) {
                s.source = u;
                throw s;
            }
            return i ? f(i, n) : (e = function(t) {
                    return f.call(this, t, n)
                }, e.source = "function(" + (r.variable || "obj") +
                "){\n" + u + "}", e)
        };
        n.chain = function(t) {
            return n(t)
                .chain()
        };
        v = function(t) {
            return this._chain ? n(t)
                .chain() : t
        };
        n.mixin(n);
        i(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
            function(t) {
                var i = r[t];
                n.prototype[t] = function() {
                    var n = this._wrapped;
                    return i.apply(n, arguments), (t == "shift" || t ==
                            "splice") && n.length === 0 && delete n[0],
                        v.call(this, n)
                }
            });
        i(["concat", "join", "slice"], function(t) {
            var i = r[t];
            n.prototype[t] = function() {
                return v.call(this, i.apply(this._wrapped,
                    arguments))
            }
        });
        n.extend(n.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        })
    }.call(this),
    function(n) {
        var i = [],
            t = function(n) {
                return new t.fn.init(n)
            };
        t.fn = {
            init: function(t) {
                var u = t.split("."),
                    r = {},
                    f = "",
                    e, o;
                for (n[u[0]] ? r = n[u[0]] : (n[u[0]] = {}, n[u[0]].isNamespace = !
                        0, r = n[u[0]], i[u[0]] = r), u = u.slice(1), e =
                    0, o = u.length; e < o; e++) {
                    if (f = u[e], r[f] && !r[f].isNamespace) throw "Cannot define a namespace inside a non-namespace object.";
                    r[f] = r[f] || {};
                    r[f].isNamespace = !0;
                    r = r[f]
                }
                return r
            }
        };
        t.buildClassNames = function() {
            for (var n in i) t.buildClassNamesForRoot(i[n], n)
        };
        t.buildClassNamesForRoot = function(n, i) {
            var r;
            if (n && n.isNamespace && n.isNamespace == !0) {
                for (r in n) r != "isNamespace" && (n[r].className = i +
                    "." + r);
                for (r in n) t.buildClassNamesForRoot(n[r], i + "." + r)
            }
        };
        n.JsNamespace = t
    }(window);
dingu.singleton("claimsKeyCacheService", ["tracing", "storage",
    function(n, t) {
        var u = !1,
            e = 5,
            i = [],
            f = "ps.ios.claimedKeys",
            r = {};
        return r.loadCache = function() {
            if (!u) {
                u = !0;
                var r = t.getValue(f);
                r ? (i = JSON.parse(r), n.info("ios", "Loaded " + i
                    .length + " claimed keys")) : (i = [], n.info(
                    "ios", "New used keys cache"))
            }
        }, r.claimsKeyUsed = function(t) {
            var u, r, f;
            if (i.length === 0 || !t) return !1;
            for (u = t.toLowerCase()
                .trim(), r = 0; r < i.length; r++)
                if (f = i[r].toLowerCase()
                    .trim(), u === f) return n.info("ios",
                    "This claimsKey has been used"), !0;
            return !1
        }, r.addClaimedKey = function(u) {
            u && !r.claimsKeyUsed(u) && (i.unshift(u), n.info("ios",
                    "Adding used claimsKey :: " + u), i.length >
                e && i.pop(), t.setValue(f, JSON.stringify(i)))
        }, r
    }]);
dingu.singleton("ajax", ["$", "logger", "session", "url", "dateUtils",
    "options", "metrics", "tracing", "storage",
    function(n, t, i, r, u, f, e, o, s) {
        var c = function() {
                var t = !1,
                    n = {};
                return s.hasKey("ps.bound") && (t = !0, n.bound = s.getValue(
                    "ps.bound")), t && o.info("ajax.headers", JSON.stringify(
                    n, null, 2)), n
            },
            l = function(n, t, i) {
                var r = "ajax." + n.toLowerCase()
                    .trim(),
                    u;
                o.flagEnabled(r) && (u = {
                    URL: t,
                    RequestType: "POST",
                    Data: i
                }, o.info(r, JSON.stringify(u, null, 2)))
            },
            h = {};
        return h.ajaxPost = function(t, i) {
            var u;
            l("post", t, i);
            var s = r.getControllerName(t),
                o = "client." + s + "." + f.lobbyName,
                h = null;
            return s && (h = e.startTimer(), e.count(o + ".attempt")),
                u = n.ajax({
                    type: "POST",
                    url: t,
                    headers: c(),
                    xhrFields: {
                        withCredentials: !0
                    },
                    data: i || {},
                    dataType: "json"
                }), u.done(function() {
                    e.count(o + ".success")
                }), u.fail(function() {
                    e.count(o + ".failure")
                }), u.always(function() {
                    e.logTimer(h, o + ".executionTime")
                }), u
        }, h.ajaxGet = function(t, i) {
            var u;
            l("get", t, i);
            var s = r.getControllerName(t),
                o = "client." + s + "." + f.lobbyName,
                h = null;
            return s && (h = e.startTimer(), e.count(o + ".attempt")),
                u = n.ajax({
                    type: "GET",
                    url: t,
                    headers: c(),
                    xhrFields: {
                        withCredentials: !0
                    },
                    data: i || {},
                    dataType: "json"
                }), u.done(function() {
                    e.count(o + ".success")
                }), u.fail(function() {
                    e.count(o + ".failure")
                }), u.always(function() {
                    e.logTimer(h, o + ".executionTime")
                }), u
        }, h
    }]);
dingu.module("claimsKeyService", ["url", "options", "urls", "utils", "tracing",
    "claimsKeyCacheService", "deviceInfo", "ajax",
    function(n, t, i, r, u, f, e, o) {
        var c, h, s = {};
        return s.isNewKey = function(n) {
            return c !== n
        }, s.getCurrent = function() {
            var t = n.getHashValue();
            return t ? t.length < 5 ? null : f.claimsKeyUsed(t) ?
                null : t : null
        }, s.touch = function() {
            var n = t.endPointURL + i.TOUCH_CLAIMS_KEY,
                f = r.getBasePostData();
            h && clearTimeout(h);
            o.ajaxPost(n, f)
                .always(function(n) {
                    n.IsSuccess && u.info("claimsKey",
                        "Touched");
                    c && (h = setTimeout(function() {
                        s.touch()
                    }, t.touchInterval))
                })
        }, s.updateUrl = function(t) {
            c = t;
            n.setHashValue(t || "");
            h && clearTimeout(h);
            c && s.touch()
        }, s
    }]);
dingu.singleton("cookies", ["$",
    function(n) {
        var t = {};
        return t.get = function(t) {
            return n.cookie(t)
        }, t.set = function(t, i, r) {
            var u;
            u = r === "never" ? new Date((new Date)
                    .getFullYear() + 5, 0) : (new Date)
                .setDate((new Date)
                    .getDate() + r || 7);
            n.cookie(t, i, {
                expires: u
            })
        }, t.destroy = function(t) {
            n.removeCookie(t)
        }, t
    }]);
dingu.singleton("dateUtils", function() {
    var n = {};
    return n.getNow = function() {
        return new Date
    }, n.addMin = function(t, i) {
        return t === "now" && (t = n.getNow()), new Date(t.getTime() +
            i * 6e4)
    }, n.toEpoch = function(n) {
        return n === null || typeof n != "object" ? null : Math.floor(
            n.getTime() / 1e3)
    }, n.dateFromTime = function(n) {
        return new Date(n * 1e3)
    }, n.secondsSince = function(t) {
        return Math.ceil((n.getNow() - t) / 1e3)
    }, n.msSince = function(t) {
        return n.getNow() - t
    }, n.getNowMs = function() {
        return n.getNow() - 0
    }, n
});
dingu.singleton("deviceInfo", function() {
    var t = !1,
        i = function() {
            n.isIOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
        },
        r = function() {
            n.inHomeScreen = n.isIOS ? "standalone" in navigator &&
                navigator.standalone : !1
        },
        n = {
            isIOS: null,
            inHomeScreen: null
        };
    return n.detectCapabilities = function() {
        t || (i(), r(), t = !0)
    }, n
});
dingu.value("enums", {
    casinoUserType: {
        Real: 0,
        Guest: 1
    },
    events: {
        initializing: "initializing",
        ready: "ready",
        error: "error",
        stateChanged: "state_changed",
        sendingCommand: "sending_command",
        serverResponse: "server_response",
        loggedIn: "logged_in",
        loggedOff: "logged_off",
        balanceUpdated: "balance_updated",
        detailedBalanceUpdated: "detailed_balance_updated",
        sessionTokenUpdated: "session_token_updated",
        preMigrationResponse: "premigration_response"
    },
    exceptionType: {
        unknownError: 100,
        genericError: 101,
        missingAuthToken: 102,
        invalidAuthToken: 103,
        serverError: 104,
        notLoggedIn: 105,
        renegotiationFailed: 106,
        missingClientLang: 107,
        xmanError: 108,
        localStorageUnavailable: 109,
        missingArguments: 110,
        internalServerError: 111,
        migrationInfoError: 112
    },
    isLoggedInState: {
        LoggedOn: 0,
        LoggedOut: 1,
        Unsure: 2
    },
    methodName: {
        login: "login",
        renegotiateSession: "renegotiateSession",
        logOff: "logOff",
        setAutoLoginFlag: "setAutoLoginFlag",
        getClaimsKey: "getClaimsKey",
        getBalance: "getBalance",
        getDetailedBalance: "getDetailedBalance",
        validateSession: "validateSession",
        migrationLogin: "migrationLogin",
        getNextVPBMessage: "getNextVPBMessage"
    },
    objectType: {
        XHR: 100,
        ServerResponse: 101
    },
    responseType: {
        Login: 0,
        Renegotiate: 1,
        ValidateSession: 3,
        GetBalance: 4,
        Logout: 5,
        SetAutoLoginFlag: 6
    },
    serviceState: {
        initializing: "initializing",
        ready: "ready",
        error: "error",
        sendingCommand: "sending_command",
        processingResponse: "processing_response"
    }
});
dingu.singleton("events", ["$", "logger", "tracing",
    function(n, t, i) {
        var u = {},
            f = function(n, t) {
                return {
                    name: n,
                    fn: t,
                    callCount: 0
                }
            },
            r = {};
        return r.hasEvent = function(n) {
            return u.hasOwnProperty(n)
        }, r.setEvent = function(n, i) {
            if (!i) {
                t.warn('Unable to register event "' + n +
                    '", callback is NULL.', "SingleEventHelper"
                );
                return
            }
            t.info('Registering event "' + n + '"',
                "SingleEventHelper");
            u[n] = f(n, i)
        }, r.removeEvent = function(n) {
            r.hasEvent(n) && (t.info('Removing event "' + n + '"',
                "SingleEventHelper"), delete u[n])
        }, r.fireEvent = function(n, t) {
            var f, e, o;
            if (r.hasEvent(n)) {
                if (i.flagEnabled("events") && (f =
                        'Firing event "' + n + '"', t && i.flagEnabled(
                            "events.args") && (f += " :: " + JSON.stringify(
                            t, null, 2)), i.info("events", f)), e =
                    u[n], o = {
                        name: n,
                        callCount: e.callCount,
                        remove: function() {
                            r.removeEvent(n)
                        }
                    }, !u[n].fn) {
                    i.warn("events",
                        'There is no callback fn bound to the event :: "' +
                        n + '"');
                    return
                }
                u[n].fn.apply(o, t || []);
                e.callCount++
            }
        }, r.removeAllEvents = function() {
            u = {}
        }, r
    }]);
dingu.singleton("iosHelper", ["storage", "url", "dateUtils", "logger",
    "deviceInfo", "session", "tracing", "options", "urls", "utils",
    "ajax", "enums", "loggedInTracker", "metrics", "claimsKeyService",
    "claimsKeyCacheService", "events", "PlayerServiceCore",
    function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b) {
        var d = null,
            k = {};
        return k.updateUrlHash = function(n) {
            if (!u.isIOS || u.inHomeScreen) {
                v.count(
                    "client.api.updateUrlHash.notIosOrNotHomescreen"
                );
                return
            }
            if (!y.isNewKey(n)) {
                v.count("client.api.updateUrlHash.notNewKey");
                return
            }
            y.updateUrl(n)
        }, k.logIOSMetrics = function() {
            u.isIOS && u.inHomeScreen && v.count("ios.homescreen")
        }, k.hasClaimsKey = function() {
            if (!u.isIOS || !u.inHomeScreen) return !1;
            var n = y.getCurrent();
            return n != null
        }, k.reclaimAuthToken = function(n, t) {
            e.info("method,ios", "ios.reclaimAuthToken()");
            var i = new MobileServices.LoginHelper(b, t, n, r, c, s,
                o, l, a, h, e, v, w);
            i.reclaimAuthToken(y, p)
        }, k.logoutCalled = function() {
            p.addClaimedKey(d)
        }, p.loadCache(), k
    }]);
dingu.value("$", jQuery);
dingu.singleton("loggedInTracker", ["logger", "options", "dateUtils", "enums",
    "$", "utils", "tracing",
    function(n, t, i, r, u, f, e) {
        var s = !1,
            c = null,
            l = !1,
            h = null,
            a = function() {
                c = new Date
            },
            v = function() {
                if (!c) return !0;
                var n = (new Date)
                    .getTime() - c;
                return n >= t.isLoggedInPollInt
            },
            o = {
                LOGGED_IN: r.isLoggedInState.LoggedOn,
                LOGGED_OUT: r.isLoggedInState.LoggedOut,
                UNSURE: r.isLoggedInState.Unsure
            };
        return o.updateState = function(n) {
            e.info("player", "setting logged on state to :: " + (n ?
                "true" : "false"));
            a();
            s = n
        }, o.getLoggedInState = function() {
            return v() ? (e.info("login",
                    "Players login status is unsure"), o.UNSURE) :
                (e.info("login", "Players login status is " + (s ?
                        "Logged In" : "Logged Out")), s ? o.LOGGED_IN :
                    o.LOGGED_OUT)
        }, o.getLoggedInStateAsync = function(n) {
            return l ? h : (e.info("method",
                    "loggedInTracker.getLoggedInStateAsync()"),
                h = u.Deferred(), n.validateSession()
                .done(function(n) {
                    o.updateState(n);
                    var t = s ? o.LOGGED_IN : o.LOGGED_OUT;
                    h.resolve(!0, t, null)
                })
                .fail(function(n) {
                    var t = f.extractError(n, r.methodName.getBalance,
                        r.objectType.XHR);
                    h.reject(t)
                })
                .always(function() {
                    l = !1
                }), h)
        }, o.reset = function() {
            s = !1;
            c = null
        }, o
    }]);
dingu.singleton("logger", ["options",
    function(n) {
        var r = 4,
            e = n.loggingBufferEnabled,
            u = !1,
            i = [],
            o = function() {
                var t = new Date,
                    n = "";
                return n += ("00" + t.getHours())
                    .slice(-2), n += ":", n += ("00" + t.getMinutes())
                    .slice(-2), n += ":", n + ("00" + t.getSeconds())
                    .slice(-2)
            },
            s = function(n) {
                return n >= r
            },
            h = function(n) {
                switch (n) {
                    case 4:
                        return "None";
                    case 3:
                        return "Error";
                    case 2:
                        return "Warn";
                    case 1:
                        return "Info";
                    default:
                        return "Unknown"
                }
            },
            f = function(n, r, f) {
                if (s(n) && console) {
                    var c = h(n),
                        e = "(" + c.toUpperCase() + ") ";
                    e += f ? "[" + f + "] " : "";
                    e += '"' + o() + '" ';
                    e += r;
                    u ? i.push(e) : n === t.Severities.Warn ? console.warn(
                        e) : console.log(e)
                }
            },
            c = function(n) {
                n && (n = n.toLowerCase()
                    .trim());
                switch (n) {
                    case "error":
                        return 3;
                    case "warn":
                        return 2;
                    case "info":
                        return 1;
                    case "none":
                        return 4;
                    default:
                        return 4
                }
            },
            t;
        return e && (u = !0, setTimeout(function() {
            if (u = !1, console) {
                for (var n = 0; n < i.length; n++) console.log(
                    i[n]);
                i = []
            }
        }, 5e3)), t = {}, t.Severities = {
            None: 4,
            Error: 3,
            Warn: 2,
            Info: 1
        }, t.setLoggingLevel = function(n) {
            r = c(n)
        }, t.info = function(n, i) {
            f(t.Severities.Info, n, i)
        }, t.warn = function(n, i) {
            f(t.Severities.Warn, n, i)
        }, t.error = function(n, i) {
            f(t.Severities.Error, n, i)
        }, t.getLoggingLevel = function() {
            return r
        }, t
    }]);
dingu.singleton("metrics", ["options", "dateUtils",
    function(n, t) {
        var r = n.m_enabled || !1,
            f = null,
            i = {},
            u = [],
            e = function(n, t, i, r, u, f) {
                var e = this,
                    o;
                if (!n || n === "") throw new Error(
                    "Must specify where metrics will be sent to. Parameter: targetURL."
                );
                t = t || "";
                i = i || 10;
                o = function(n, t) {
                    return jQuery.post(n, t.metrics)
                };
                f = f || o;
                e._url = n;
                e._rootNamespace = t;
                e._postFunction = f;
                e._pumpIntervalEnabled = i !== -1;
                e._pumpIntervalMS = i * 1e3;
                e._maxBufferSize = u;
                e._logInternalMetrics = r || !0;
                e._lastRequestLatency = 0;
                e._counts = {};
                e._timings = [];
                e._gauges = {};
                var h = function() {
                        e._pumpIntervalEnabled && s()
                    },
                    s = function() {
                        var i = function() {
                                e._pumpIntervalEnabled && setTimeout(s,
                                    e._pumpIntervalMS)
                            },
                            n = c(),
                            t, r;
                        return n.length === 0 ? (i(), t = jQuery.Deferred(),
                            t.resolve(), t.promise()) : (e._logInternalMetrics &&
                            e._lastRequestLatency && e.timing(
                                "jsclient.post", e._lastRequestLatency
                            ), r = (new Date)
                            .getTime(), e._maxBufferSize && n.length >
                            e._maxBufferSize && n.splice(0, n.length -
                                e._maxBufferSize), e._counts = {},
                            e._timings = [], e._gauges = {}, e._postFunction(
                                e._url, {
                                    metrics: n.join(",")
                                })
                            .then(function() {
                                e._lastRequestLatency = (new Date)
                                    .getTime() - r;
                                i()
                            }, function() {}))
                    },
                    c = function() {
                        var i = [],
                            t, n;
                        for (n in e._counts) i.push(e._rootNamespace +
                            "." + n + ":" + e._counts[n] + "|c");
                        for (t = 0; t < e._timings.length; t++) i.push(
                            e._rootNamespace + "." + e._timings[t][
                                0] + ":" + e._timings[t][1] + "|ms"
                        );
                        for (n in e._gauges) i.push(e._rootNamespace +
                            "." + n + ":" + e._gauges[n] + "|g");
                        return i
                    };
                e.timing = function(n, t) {
                    e._timings.push([n, t])
                };
                e.count = function(n, t) {
                    t = t || 1;
                    e._counts[n] = e._counts.hasOwnProperty(n) ? e._counts[
                        n] + t : t
                };
                e.gauge = function(n, t) {
                    e._gauges[n] = t
                };
                e.flushMetrics = function() {
                    return s()
                };
                e.setPostFunction = function(n) {
                    e._postFunction = n || o
                };
                h()
            };
        return r && (f = new e(n.m_url, n.m_prefix || "ps", n.m_pumpInterval ||
                5, n.m_logInternal || !1, n.m_maxBufferSize == -1 ?
                null : n.m_maxBufferSize, null)), i.startTimer =
            function(n) {
                return r ? (n || (n = "metric." + t.getNowMs()), u.hasOwnProperty(
                    n)) ? !0 : (u[n] = new Date, n) : !1
            }, i.logTimer = function(n, f) {
                if (!r || !u.hasOwnProperty(n)) return null;
                f = f || n;
                var e = t.msSince(u[n]);
                return i.timing(f, e), e
            }, i.stopAndLogTimer = function(n, f) {
                if (!r || !u.hasOwnProperty(n)) return null;
                f = f || n;
                var e = t.msSince(u[n]);
                return i.timing(f, e), delete u[n], e
            }, i.stopTimer = function(n) {
                if (!r || !u.hasOwnProperty(n)) return null;
                delete u[n]
            }, i.timing = function(n, t) {
                r && f.timing(n, t)
            }, i.count = function(n, t) {
                r && f.count(n, t)
            }, i.gauge = function(n, t) {
                r && f.gauge(n, t)
            }, i.postFunction = function(n) {
                r && typeof n == "function" && f.setPostFunction(n)
            }, i
    }]);
JsNamespace("MobileServices");
MobileServices.PlayerService = function(n) {
    return n.tracingKeys = n.tracingKeys || "", dingu.value("options", n),
        dingu.get("PlayerService")
};
dingu.module("PlayerService", ["PlayerServiceCore", "logger", "options", "urls",
    "enums", "ajax", "loggedInTracker", "$", "utils", "deviceInfo",
    "iosHelper", "session", "metrics", "tracing", "events", "storage",
    "psExceptions",
    function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w) {
        var k, b;
        return t.setLoggingLevel(i.loggingLevel), v.setFlag(i.tracingOn, !
                0), v.setFlag(i.tracingOff, !1), k = {
                promises: {
                    LoginPromise: o.Deferred(),
                    readyPromise: o.Deferred()
                },
                loggingIn: !1,
                currentClaimsKey: null,
                playerLoggedIn: !1,
                lastMigrationResponse: null
            }, k.utils = {}, k.utils.updateClaimsKey = function(n) {
                v.info("claimsKey", 'Updating key "' + n + '"');
                c.updateUrlHash(n);
                k.currentClaimsKey = n
            }, k.utils.getClaimsKey = function() {
                return k.currentClaimsKey
            }, k.utils.hasClaimsKey = function() {
                return !(k.currentClaimsKey === null)
            }, k.utils.createPlayerData = function(n, t) {
                return {
                    Balance: b.PlayerData.Balance,
                    PlayerInfo: b.PlayerData.PlayerInfo,
                    RegulatedPlayerInfo: b.PlayerData.RegulatedInfo,
                    SessionToken: b.PlayerData.Token,
                    UserType: t.UserType,
                    ResponseType: t.ResponseType,
                    Username: t.Username,
                    PracticePassword: t.PracticePassword,
                    UserId: t.UserId,
                    LoggedIn: n,
                    AutoLogin: t.AutoLogin
                }
            }, k.utils.init = function() {
                v.info("method", "init()");
                var o = {};
                h.detectCapabilities();
                o.checkLocalStorageIsAvailable = function() {
                    if (v.info("method",
                            "init.checkLocalStorageIsAvailable()"), !
                        p.localStorageAvailable) {
                        var n = u.exceptionType.localStorageUnavailable,
                            t = w.createPsException(
                                "PlayerService.Initialize", n,
                                "localStoage is unavailable", "", n
                            );
                        return k.promises.readyPromise.resolve(!1, {},
                            t), !1
                    }
                    return !0
                };
                o.attemptSessionRestore = function() {
                    if (v.info("method",
                        "init.attemptSessionRestore()"), !i.hasCookies)
                        return !1;
                    var o = new MobileServices.LoginHelper(n, b, k,
                        t, f, r, i, u, e, s, v, a, y);
                    return o.renegotiateSession(), !0
                };
                o.InitializePlayerService = function() {
                    if (v.info("method",
                            "init.InitializePlayerService()"), c.logIOSMetrics(),
                        i.skipDinguLock || (t.warn(
                            "Dingu.Lock() has been bypassed!!!"
                        ), dingu.lock()), k.utils.setServiceState(u
                            .serviceState.initializing), y.fireEvent(
                            u.events.initializing), b.PlayerData.ClientLang =
                        i.clientLang, o.checkLocalStorageIsAvailable()
                    ) {
                        if (c.hasClaimsKey()) {
                            c.reclaimAuthToken(k, b);
                            return
                        }
                        o.attemptSessionRestore() || (e.updateState(!
                                1), b.PlayerData.Token = null,
                            k.promises.readyPromise.resolve(!0, {},
                                null))
                    }
                };
                setTimeout(o.InitializePlayerService, 4)
            }, k.utils.setServiceState = function(n) {
                var t = b.ServiceState;
                b.ServiceState = n;
                y.fireEvent(u.events.stateChanged, [t, n])
            }, k.utils.processServerResponse = function(n) {
                var f, o, r, i;
                n.Balance && (v.info("player",
                        "Updating players balance"), n.Balance.Bonus &&
                    (b.PlayerData.Balance.Bonus = n.Balance.Bonus),
                    n.Balance.Cash && (b.PlayerData.Balance.Cash =
                        n.Balance.Cash), n.Balance.Total && (b.PlayerData
                        .Balance.Total = n.Balance.Total), e.updateState(!
                        0), y.fireEvent(u.events.balanceUpdated, [b
                        .PlayerData.Balance]));
                n.BalanceCents && (t.info(
                        "Updating players detailed balance"), n.BalanceCents
                    .hasOwnProperty("Bonus") && (b.PlayerData.BalanceCents
                        .Bonus = n.BalanceCents.Bonus === null ? 0 :
                        n.BalanceCents.Bonus), n.BalanceCents.hasOwnProperty(
                        "Cash") && (b.PlayerData.BalanceCents.Cash =
                        n.BalanceCents.Cash === null ? 0 : n.BalanceCents
                        .Cash), n.BalanceCents.hasOwnProperty(
                        "Total") && (b.PlayerData.BalanceCents.Total =
                        n.BalanceCents.Total === null ? 0 : n.BalanceCents
                        .Total), e.updateState(!0), y.fireEvent(u.events
                        .detailedBalanceUpdated, [{
                            Balance: b.PlayerData.Balance,
                            BalanceCents: b.PlayerData.BalanceCents
                        }]));
                n.PlayerInfo && (b.PlayerData.PlayerInfo = n.PlayerInfo,
                    v.info("player", "Updated Player Information"));
                n.RegulatedPlayerInfo && (b.PlayerData.RegulatedInfo =
                    n.RegulatedPlayerInfo, v.info("player",
                        "Updated Regulated Player Information"));
                n.SessionToken && (f = b.PlayerData.Token, b.PlayerData
                    .Token = n.SessionToken, v.info("player",
                        "Updated Players Session Token"), y.fireEvent(
                        u.events.sessionTokenUpdated, [f, n.SessionToken]
                    ));
                n.hasOwnProperty("SessionValid") && e.updateState(n.SessionValid);
                n.hasOwnProperty("RegistrationState") && (b.PlayerData.RegistrationState =
                    n.RegistrationState);
                n.hasOwnProperty("UserType") && (b.PlayerData.UserType =
                    n.UserType);
                n.hasOwnProperty("UserId") && (b.PlayerData.UserId = n.UserId);
                n.hasOwnProperty("Username") && (b.PlayerData.Username =
                    n.Username);
                n.PracticePassword && (o = dingu.get(
                    "practicePlayerStore"), t.info(
                    "Updating players practice play credentials"
                ), o.setUserCredentials(n.Username, n.PracticePassword));
                n.hasOwnProperty("AutoLogin") && (b.PlayerData.AutoLogin =
                    n.AutoLogin, v.info("player",
                        "Updated players auto-login state flag"));
                n.hasOwnProperty("BoundName") && (r = p.getValue(
                        "ps.bound"), i = n.BoundName, i && i !== r &&
                    (v.info("bound", i), p.setValue("ps.bound", i)), !
                    i && r && v.info("bound",
                        "Got null, sticking with " + r));
                n.hasOwnProperty("ClaimsKey") && k.utils.updateClaimsKey(
                    n.ClaimsKey)
            }, k.utils.resetPlayerData = function() {
                t.info("Resetting PlayerData object");
                b.PlayerData = {
                    Balance: {
                        Bonus: null,
                        Cash: null,
                        Total: null
                    },
                    BalanceCents: {
                        Bonus: null,
                        Cash: null,
                        Total: null
                    },
                    RegulatedInfo: null,
                    PlayerInfo: null,
                    ClientLang: null,
                    AutoLogin: !1,
                    RegistrationState: null,
                    Token: i.CurrentSessionToken || null,
                    UserId: null,
                    Username: null,
                    UserType: null
                }
            }, b = {
                ServiceUrl: i.endPointURL,
                ServiceState: null,
                ClientInfo: null,
                PlayerData: {},
                ReadyPromise: k.promises.readyPromise,
                Enums: u
            }, b.ClientInfo = {
                version: "2.2",
                lobbyName: i.lobbyName
            }, b.login = function(h) {
                var c;
                if (v.info("method", "login()"), k.loggingIn) return a.count(
                    "client.Login." + i.lobbyName +
                    ".alreadyExecuting"), k.promises.LoginPromise;
                var w = function(n) {
                        return n = n || {}, n && (typeof n)
                            .toLowerCase() === "boolean" && (n = {
                                IsPracticePlay: !0
                            }), n.ClientLang = i.clientLang, s.appendDeviceInfo(
                                n), n
                    },
                    l = function(h) {
                        k.loggingIn = !0;
                        k.promises.LoginPromise = o.Deferred();
                        var c = new MobileServices.LoginHelper(n, b, k,
                            t, f, r, i, u, e, s, v, a, y);
                        return k.promises.readyPromise.then(function() {
                            var n = w(h);
                            c.runPlayerServiceLogin(n)
                        }, function() {
                            k.promises.LoginPromise.rejectWith(
                                b, arguments);
                            k.loggingIn = !1
                        }), c.LoginPromise
                    },
                    p = e.getLoggedInState();
                return p === e.LOGGED_IN ? (v.info("login",
                        "Player still logged in"), k.promises.LoginPromise) :
                    p === e.LOGGED_OUT ? (v.info("login",
                        "Player not logged in, running login"), l(h)) :
                    (c = o.Deferred(), e.getLoggedInStateAsync(b)
                        .done(function(n, t) {
                            t === e.LOGGED_IN ? (v.info("login",
                                "getLoggedInStateAsync() - Player Logged in"
                            ), k.promises.LoginPromise.then(
                                function() {
                                    c.resolveWith(b,
                                        arguments)
                                }, function() {
                                    c.rejectWith(b,
                                        arguments)
                                })) : (v.info("login",
                                    "getLoggedInStateAsync() - Player not Logged in"
                                ), l(h)
                                .then(function() {
                                    c.resolveWith(b,
                                        arguments)
                                }, function() {
                                    c.rejectWith(b,
                                        arguments)
                                }))
                        })
                        .fail(function(n) {
                            var t = s.extractError(n, u.methodName.login,
                                u.objectType.XHR);
                            c.reject(!1, {}, t)
                        }), c.promise())
            }, b.practicePlayLogin = function() {
                v.info("method", "practicePlayLogin()");
                var n = dingu.get("practicePlayerStore");
                return b.login({
                    username: n.getUserName(),
                    password: n.getPassword(),
                    autoLogin: i.practicePlayAutoLogin,
                    isPracticePlay: !0
                })
            }, b.destroyPracticePlayCredentials = function() {
                v.info("method", "destroyPracticePlayCredentials()");
                dingu.get("practicePlayerStore")
                    .destroyCredentials()
            }, b.getClaimsKey = function() {
                return v.info("method", "getClaimsKey()"), dingu.get(
                        "getClaimsKey")
                    .setup(k)
                    .execute()
            }, b.getBalance = function() {
                return v.info("method", "getBalance()"), dingu.get(
                        "getBalance")
                    .setup(k, b)
                    .execute()
            }, b.getDetailedBalance = function() {
                return v.info("method", "getDetailedBalance()"), dingu.get(
                        "getDetailedBalance")
                    .setup(k, b)
                    .execute()
            }, b.validateSession = function() {
                return v.info("method", "validateSession()"), dingu.get(
                        "validateSession")
                    .setup(k, b)
                    .execute()
            }, b.getSessionToken = function() {
                return (v.info("method", "getSessionToken()"), b.PlayerData
                    .Token) ? b.PlayerData.Token : null
            }, b.logoff = function() {
                v.info("method", "logoff()");
                var t = o.Deferred(),
                    h = i.endPointURL + r.LOG_OUT,
                    n;
                return c.logoutCalled(), f.ajaxPost(h, s.getBasePostData())
                    .done(function(t) {
                        k.utils.processServerResponse(t);
                        n = s.extractError(t, u.methodName.logOff,
                            u.objectType.ServerResponse)
                    })
                    .fail(function(t) {
                        n = s.extractError(t, u.methodName.logOff,
                            u.objectType.XHR)
                    })
                    .always(function() {
                        k.utils.resetPlayerData();
                        b.PlayerData.Token = null;
                        k.utils.updateClaimsKey(null);
                        e.updateState(!1);
                        k.promises.loginPromise = o.Deferred();
                        p.destroy("ps.bound");
                        t.resolve(!0, {}, n);
                        y.fireEvent(u.events.loggedOff, [!0])
                    }), t.promise()
            }, b.isLoggedIn = function() {
                return v.info("method", "isLoggedIn()"), e.getLoggedInState()
            }, b.isLoggedInAsync = function() {
                return v.info("method", "isLoggedInAsync()"), e.getLoggedInStateAsync(
                    b)
            }, b.setAutoLoginFlag = function(n) {
                return v.info("method", "setAutoLoginFlag()"), dingu.get(
                        "setAutoLoginFlag")
                    .setup(k, b)
                    .execute(n)
            }, b.getAuthToken = function() {
                return (v.info("method", "getAuthToken()"), !k.utils.hasClaimsKey()) ?
                    null : (b.getClaimsKey()
                        .done(function(n, t) {
                            k.utils.updateClaimsKey(t)
                        }), k.utils.getClaimsKey())
            }, b.migrationLogin = function(n) {
                return v.info("method", "migrationLogin()"), s.appendBasePostData(
                        n), dingu.get("migrationLogin")
                    .setup(k, b)
                    .execute(n)
            }, b.getBoundHeader = function() {
                return (v.info("method", "getBoundHeader()"), !p.hasKey(
                    "ps.bound")) ? "" : p.getValue("ps.bound")
            }, b.setTracingFlag = function(n, t) {
                v.setFlag(n, t)
            }, b.getNextVPBMessage = function() {
                return v.info("method", "getNextVPBMessage()"), dingu.get(
                        "getNextVPBMessage")
                    .setup(k, b)
                    .execute()
            }, b.redirectToEndpoint = function(n, t, i, r) {
                return v.info("method", "redirectToEndpoint()"), dingu.get(
                        "redirectToEndpoint")
                    .setup(b)
                    .execute(n, t, i, r)
            }, b.getLastMigrationResponse = function() {
                return k.lastMigrationResponse
            }, b.events = {}, b.events.initializing = function(n) {
                y.setEvent(u.events.initializing, n)
            }, b.events.ready = function(n) {
                y.setEvent(u.events.ready, n)
            }, b.events.processingServerResponse = function(n) {
                y.setEvent(u.events.serverResponse, n)
            }, b.events.loggedIn = function(n) {
                y.setEvent(u.events.loggedIn, n)
            }, b.events.loggedOff = function(n) {
                y.setEvent(u.events.loggedOff, n)
            }, b.events.balanceUpdated = function(n) {
                y.setEvent(u.events.balanceUpdated, n)
            }, b.events.detailedBalanceUpdated = function(n) {
                y.setEvent(u.events.detailedBalanceUpdated, n)
            }, b.events.sessionTokenUpdated = function(n) {
                y.setEvent(u.events.sessionTokenUpdated, n)
            }, b.events.preMigrationResponse = function(n) {
                y.setEvent(u.events.preMigrationResponse, n)
            }, b.events.error = function(n) {
                y.setEvent(u.events.error, n)
            }, k.promises.readyPromise.done(function(t, i, r) {
                k.utils.setServiceState(u.serviceState.ready);
                y.fireEvent(u.events.ready, [t, i, r]);
                b.PlayerData.UserId && e.updateState(b.PlayerData.UserId >
                    0);
                n.FirePlayerServiceInstanceCreated()
            })
            .fail(function() {
                k.utils.setServiceState(u.serviceState.error);
                y.fireEvent(u.events.error, arguments)
            }), k.promises.LoginPromise.done(function(n, t, r) {
                v.info("method", "LoginPromise.done()");
                a.count("login." + i.lobbyName + "." + [n ?
                    "success" : "failure"]);
                e.updateState(n);
                y.fireEvent(u.events.loggedIn, [n, t, r]);
                k.loggingIn = !1
            }), k.utils.resetPlayerData(), k.utils.init(), b
    }]);
dingu.singleton("PlayerServiceCore", function() {
    var n = this,
        t = {};
    return t.ResponseMapper = function(n, t, i, r) {
        var u = {
                CasinoID: i.CasinoID || 0,
                Error: {
                    Code: 0,
                    CodeRaw: 0,
                    Message: "",
                    MessageRaw: ""
                },
                Handler: {
                    Name: i.HandlerName || "",
                    Version: i.HandlerVersion || ""
                },
                LobbyName: i.LobbyName || "",
                Response: {
                    APIVersion: i.APIVersion || "1.0.0",
                    URL: n || "",
                    JSON: i
                },
                Request: {
                    APIVersion: null,
                    URL: n || "",
                    AjaxObject: r || {},
                    Headers: r.hasOwnProperty("headers") ? r.headers : {},
                    PostData: t
                }
            },
            f;
        return i.Messages.length > 0 && (f = i.Messages[0], u.Error
            .Code = f.Code, u.Error.CodeRaw = f.CodeRaw, u.Error
            .Message = f.Message, u.Error.MessageRaw = f.MessageRaw
        ), r.hasOwnProperty("headers") && r.headers.hasOwnProperty(
            "PS-Version") && (u.Request.APIVersion = r.headers[
            "PS-Version"]), u
    }, t.PlayerServiceInstanceCreated = function(i) {
        n.psReadyFn = i;
        n.psReadyFnCalled && t.FirePlayerServiceInstanceCreated()
    }, t.FirePlayerServiceInstanceCreated = function() {
        n.psReadyFn && (n.psReadyFn.call(), n.psReadyFnCalled = !0)
    }, t
});
dingu.singleton("practicePlayerStore", ["storage", "logger",
    function(n, t) {
        var i = {},
            r = {
                keyUsername: "ps.pp.username",
                keyPassword: "ps.pp.password"
            };
        return i.getUserName = function() {
            return n.getValue(r.keyUsername)
        }, i.getPassword = function() {
            return n.getValue(r.keyPassword)
        }, i.setUsername = function(i) {
            t.info("[practicePlayerStore] Updating User Username");
            n.setValue(r.keyUsername, i)
        }, i.setPassword = function(i) {
            t.info("[practicePlayerStore] Updating User Password");
            n.setValue(r.keyPassword, i)
        }, i.setUserCredentials = function(n, t) {
            i.setUsername(n);
            i.setPassword(t)
        }, i.destroyCredentials = function() {
            t.info("[practicePlayerStore] destroyCredentials()");
            n.destroy(r.keyUsername);
            n.destroy(r.keyPassword)
        }, i
    }]);
dingu.singleton("psExceptions", ["enums",
    function(n) {
        var t = {};
        t.createPsException = function(n, t, r, u, f, e) {
            return new i(n, t, r, u, f, e)
        };
        t.createMissingArgsException = function(n, t) {
            return new u(n, t)
        };
        var i = function(t, i, u, f, e, o) {
                var s = {
                    exceptionType: n.exceptionType.unknownError,
                    message: u || i,
                    displayMessage: f || null,
                    errorCode: e,
                    serverErrorCode: o
                };
                return String.prototype.replaceAll = function(n, t) {
                        for (var r = "", i = 0; i < this.length; i++) r +=
                            this[i];
                        return r.replace(new RegExp(n, "g"), t)
                    }, s.exceptionType = typeof i == "number" ? i : i ===
                    null ? n.exceptionType.genericError : r(i.replaceAll(
                        "_", ""), n.exceptionType), s
            },
            r = function(n, t) {
                var i = null;
                return _.each(t, function(t, r) {
                    if (r.toLowerCase() === n.toLowerCase()) {
                        i = t;
                        return
                    }
                }), i
            },
            u = function(n, t) {
                this.message = "Required argument " + t +
                    " was either missing or null when calling method " +
                    n;
                this.value = t;
                this.toString = function() {
                    return this.message
                }
            };
        return t
    }]);
dingu.singleton("session", function() {
    var n = {};
    return n.setValue = function(n, t) {
        sessionStorage.setItem(n, t)
    }, n.hasKey = function(n) {
        return sessionStorage.hasOwnProperty(n)
    }, n.getValue = function(n) {
        return sessionStorage.getItem(n)
    }, n.destroy = function(n) {
        sessionStorage.removeItem(n)
    }, n
});
dingu.singleton("storage", function() {
    var t = function() {
            try {
                var n = "testKey";
                localStorage && (localStorage.setItem(n, "1"),
                    localStorage.removeItem(n))
            } catch (t) {
                if (t.code === DOMException.SECURITY_ERR || t.code ===
                    DOMException.QUOTA_EXCEEDED_ERR && localStorage.length ===
                    0) return !1
            }
            return !0
        },
        n = {
            localStorageAvailable: t()
        };
    return n.setValue = function(t, i) {
        n.localStorageAvailable && localStorage.setItem(t, i)
    }, n.hasKey = function(t) {
        return n.localStorageAvailable ? localStorage.hasOwnProperty(
            t) : !1
    }, n.getValue = function(t) {
        return n.localStorageAvailable ? localStorage.getItem(t) :
            null
    }, n.destroy = function(t) {
        n.localStorageAvailable && localStorage.removeItem(t)
    }, n
});
dingu.singleton("tracing", ["options", "logger",
    function(n, t) {
        var o = n.tracingEnabled,
            r = {},
            s = function() {
                for (var i = n.tracingKeys.split(","), t = 0; t < i.length; t++)
                    i[t] && (r[i[t].toLowerCase()
                        .trim()] = !1)
            },
            u = function(n) {
                return r.hasOwnProperty(n) ? r[n] : !1
            },
            e = function(n, i) {
                t.info('Setting tracing flag "' + n + '" = ' + (i === !
                    0 ? "true" : "false"));
                r[n] = i === !0
            },
            h = function() {
                for (var t = Object.getOwnPropertyNames(r), n = 0; n <
                    t.length; n++) e(t[n], !0)
            },
            f = function(n) {
                return (n = n.toLowerCase(), !u(n)) ? !1 : r[n] === !0
            },
            i;
        return s(), i = {}, i.setFlag = function(n, t) {
            var f, i, r;
            if (o) {
                if (n === "*") {
                    h();
                    return
                }
                for (f = n.split(","), i = 0; i < f.length; i++) r =
                    (f[i] || "")
                    .toLowerCase()
                    .trim(), r && u(r) && e(r, t)
            }
        }, i.info = function(n, i) {
            for (var r, e = n.split(","), u = 0; u < e.length; u++)
                r = e[u] || "", f(r) && t.info("(" + r + ") " + i,
                    "ps.tracing")
        }, i.warn = function(n, i) {
            for (var r, e = n.split(","), u = 0; u < e.length; u++)
                r = e[u] || "", f(r) && t.warn("(" + r + ") " + i,
                    "ps.tracing")
        }, i.error = function(n, i) {
            for (var r, e = n.split(","), u = 0; u < e.length; u++)
                r = e[u] || "", f(r) && t.error("(" + r + ") " + i,
                    "ps.tracing")
        }, i.flagEnabled = u, i
    }]);
dingu.singleton("url", ["logger", "tracing",
    function(n, t) {
        var i = {};
        return i.setHashValue = function(n) {
            t.info("url,claimsKey", "Updating URL # with claimsKey");
            history.pushState(null, null, "#" + n)
        }, i.getHashValue = function() {
            return decodeURIComponent(location.hash.replace("#", ""))
        }, i.getControllerName = function(n) {
            var t = n.split("/");
            return t.length <= 0 ? null : t[t.length - 1]
        }, i
    }]);
dingu.value("urls", {
    INITIALIZE: "Initialize",
    VALIDATE_SESSION: "ValidateSession",
    LOGIN: "Login",
    GET_BALANCE: "GetBalance",
    GET_CLAIMS_KEY: "GetClaimsKey",
    GET_DETAILED_BALANCE: "GetDetailedBalance",
    GET_PLAYER_INFO: "GetPlayerInfo",
    LOG_OUT: "LogOut",
    REGULATED_PLAYER_INFO: "GetRequlatedPlayerInfo",
    GET_BONUS_BALANCE: "GetBonusBalance",
    GET_PLAYER_DATA: "GetPlayerData",
    SET_AUTO_LOGIN_STATE: "SetAutoLoginState",
    RENEGOTIATE_SESSION: "RenegotiateSession",
    MIGRATE_LOGIN: "MigrationLogin",
    CLAIM_AUTH_TOKEN: "ClaimAuthToken",
    TOUCH_CLAIMS_KEY: "TouchClaimsKey",
    GET_NEXT_VPB_MESSAGE: "GetNextVPBMessage"
});
dingu.module("utils", ["options", "enums", "logger", "psExceptions",
    function(n, t, i, r) {
        var u = {},
            f = {};
        return f.mapErrorDetails = function(n) {
            var i = {
                    exceptionType: null,
                    message: null,
                    displayMessage: null,
                    productErrorCode: null,
                    serverErrorCode: null
                },
                f, u;
            if (typeof n == "object" && (i.message = n.hasOwnProperty(
                    "Text") ? n.Text : null, i.serverErrorCode =
                n.hasOwnProperty("ServerErrorCode") ? n.ServerErrorCode :
                null, n.hasOwnProperty("XmanErrorCode"))) return i.exceptionType =
                t.exceptionType.xmanError, i.productErrorCode =
                n.XmanErrorCode, i.displayMessage = n.Text, i;
            for (typeof n == "string" && (i.message = n), f = [{
                rxp: "Session could not be renegotiated",
                mod: "gi",
                exceptionType: t.exceptionType.renegotiationFailed
            }, {
                rxp: "Missing Client Language",
                mod: "gi",
                exceptionType: t.exceptionType.missingClientLang
            }, {
                rxp: "Internal Server Error Occurred",
                mod: "gi",
                exceptionType: t.exceptionType.internalServerError
            }, {
                rxp: "no migration information available",
                mod: "gi",
                exceptionType: t.exceptionType.migrationInfoError
            }], u = 0; u < f.length; u++) {
                var r = f[u],
                    e = ".*?" + r.rxp + ".*?",
                    o = new RegExp(e, r.mod);
                if (o.test(i.message)) {
                    i.exceptionType = r.exceptionType;
                    i.displayMessage = r.hasOwnProperty(
                            "displayMessage") ? r.displayMessage :
                        null;
                    i.productErrorCode = r.hasOwnProperty(
                            "productErrorCode") ? r.productErrorCode :
                        i.productErrorCode;
                    break
                }
            }
            return i
        }, u.createBaseErrorObj = function(n, i, f) {
            var e;
            return f || (f = t.exceptionType), e = u.mapEnumFromString(
                    i, f), e >= 0 ? r.createPsException(n, e, i) :
                r.createPsException(n, t.exceptionType.unknownError,
                    i)
        }, u.extractError = function(n, i, u) {
            var e = null,
                o;
            return (u === t.objectType.XHR && (o = "", n.status >=
                    400 && n.status <= 401 && ("responseJSON" in
                        n && (o = typeof n.responseJSON ==
                            "string" ? n.responseJSON :
                            "Message" in n.responseJSON ? n.responseJSON
                            .Message : ""), e = f.mapErrorDetails(
                            o)), n.status === 500 && n.statusText ===
                    "Internal Server Error" && (e = f.mapErrorDetails(
                        "Internal Server Error Occurred"))), u ===
                t.objectType.ServerResponse && (n.Error ? e = f
                    .mapErrorDetails(n.Error) : n.Message && (e =
                        f.mapErrorDetails(n.Message))), e ===
                null) ? null : r.createPsException(i, e.exceptionType,
                e.message, e.displayMessage, e.productErrorCode,
                e.serverErrorCode)
        }, u.getURIParameter = function(n, t) {
            var i = new RegExp("(^|&)" + t + "=([^&|^$]+)")
                .exec(decodeURIComponent(n));
            return i && i[2] ? i[2] : null
        }, u.appendDeviceInfo = function(n) {
            n || (n = {});
            var r = dingu.get("cookies"),
                t = r.get("DeviceInfo");
            t && (i.info("Appending deviceModel to post data"), n.DeviceModel =
                u.getURIParameter(t, "DeviceType"))
        }, u.getBasePostData = function() {
            var t = {
                clientLang: n.clientLang,
                practicePlayAutoLogin: n.practicePlayAutoLogin,
                hasCookies: n.hasCookies || !1
            };
            return u.appendDeviceInfo(t), t
        }, u.appendBasePostData = function(n) {
            var t = u.getBasePostData();
            n || (n = {});
            n.clientLang = t.clientLang;
            u.appendDeviceInfo(n)
        }, u.mapEnumFromString = function(n, t) {
            var i = null;
            return n = n.replace(/_/gi, ""), _.each(t, function(t,
                r) {
                if (r.toLowerCase() === n.toLowerCase()) {
                    i = t;
                    return
                }
            }), i
        }, u.isNumeric = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        }, u
    }]);
JsNamespace("MobileServices");
MobileServices.LoginHelper = function(n, t, i, r, u, f, e, o, s, h, c, l, a) {
        var v = {
                LoginPromise: i.promises.LoginPromise,
                ReadyPromise: i.promises.readyPromise
            },
            p = function(n, r, u, f) {
                c.info("sessionToken", "Player logged in (" + t.PlayerData.Token +
                    ")");
                var o = i.utils.createPlayerData(r, n);
                l.count("login." + e.lobbyName + "." + [r ? "success" :
                    "failure"]);
                c.info("player", r ? "Logged in player" :
                    "Unable to log player in");
                s.updateState(r);
                v.LoginPromise.resolve(r, o, u);
                i.lastMigrationResponse = null;
                f && i.promises.readyPromise.resolve(!0)
            },
            w = function(n, t, r, u) {
                var f = {
                    SourceServerId: n.SourceServerId,
                    TargetServerId: n.TargetServerId,
                    SourceUserId: n.SourceUserId,
                    MupIdentifier: n.MupIdentifier,
                    SessionToken: n.SessionToken,
                    ResponseType: n.ResponseType,
                    TargetServerName: n.TargetServerName
                };
                n.MigrationInfo && (f.TargetUrl = n.MigrationInfo.TargetUrl, f.MigrationUrl =
                    n.MigrationInfo.MigrationUrl, f.MoreInfoLink = n.MigrationInfo
                    .MoreInfoLink, f.TermsAndConditionsLink = n.MigrationInfo
                    .TermsAndConditionsLink, f.MigrationType = n.MigrationInfo
                    .MigrationType);
                c.info("player", "Pre-Migration MupID Returned = " + n.MupIdentifier);
                v.LoginPromise.resolve(!1, f, r);
                i.lastMigrationResponse = f;
                a.fireEvent(o.events.preMigrationResponse, [f]);
                u && i.promises.readyPromise.resolve(!0)
            },
            b = function(n, t, r, u) {
                var f = {
                    OldSingleSignOnName: n.OldSingleSignOnName,
                    ResponseType: n.ResponseType
                };
                c.info("player", "Post-Migration OldSingleSignOnName = " + n.OldSingleSignOnName);
                v.LoginPromise.resolve(!1, f, r);
                i.lastMigrationResponse = f;
                u && i.promises.readyPromise.resolve(!0)
            },
            y = function(n, r) {
                i.utils.processServerResponse(n);
                t.PlayerData.Token = n.SessionToken || null;
                var u = n.IsSuccess,
                    f = h.extractError(n, o.methodName.login, o.objectType.ServerResponse);
                switch (n.ResponseType) {
                    case 13:
                        return w(n, u, f, r);
                    case 14:
                        return b(n, u, f, r);
                    default:
                        return p(n, u, f, r)
                }
            };
        return v.runPlayerServiceLogin = function(n) {
            var t = e.endPointURL + f.LOGIN;
            u.ajaxPost(t, n)
                .done(function(n) {
                    y(n, !1)
                })
                .fail(function(n) {
                    var t = h.extractError(n, o.methodName.login, o.objectType
                        .XHR);
                    r.info("Unable to log player in :: " + JSON.stringify(
                        t, null, 2));
                    v.LoginPromise.resolve(!1, {}, t)
                })
                .always(function() {
                    i.loggingIn = !1
                })
        }, v.renegotiateSession = function() {
            var n = e.endPointURL + f.RENEGOTIATE_SESSION;
            u.ajaxPost(n, h.getBasePostData())
                .done(function(n) {
                    y(n, !0)
                })
                .fail(function(n) {
                    var r = h.extractError(n, o.methodName.renegotiateSession,
                        o.objectType.XHR);
                    t.PlayerData.Token = null;
                    s.updateState(!1);
                    i.promises.LoginPromise.resolve(!1, {}, r);
                    i.promises.readyPromise.resolve(!0, {}, r)
                })
        }, v.reclaimAuthToken = function(n, r) {
            c.info("method,ios", "ios.reclaimAuthToken()");
            var a = e.endPointURL + f.CLAIM_AUTH_TOKEN,
                o = h.getBasePostData(),
                l = n.getCurrent();
            o.ClaimsKey = l;
            u.ajaxPost(a, o)
                .done(function(n) {
                    y(n, !0)
                })
                .fail(function() {
                    c.info("ios", "Failed to claim claimsKey");
                    s.updateState(!1);
                    t.PlayerData.Token = null;
                    i.promises.readyPromise.resolve(!0, {}, null)
                })
                .always(function() {
                    r.addClaimedKey(l)
                })
        }, v
    },
    function(n, t) {
        var i = function(i, r, u) {
                var e = {
                        EndPointURL: r || "Metrics/Publish",
                        PumpTimeMs: u || 5e3,
                        MetricsNameSpace: i
                    },
                    f;
                if (typeof e.MetricsNameSpace == "undefined" || e.MetricsNameSpace ==
                    null) throw psExceptions.createMissingArgsException(
                    "metrics", "pub.MetricsNameSpace");
                return f = this, f.outputBuffer = [], f.lastRequestLatency =
                    null, f.Lang = t.Lang.getProvider("ps", "metrics"), f.pump =
                    function() {
                        if (f.outputBuffer.length > 0) {
                            f.Lang.log(100, f.outputBuffer.length);
                            f.lastRequestLatency && e.timing(e.MetricsNameSpace,
                                f.lastRequestLatency);
                            var t = (new Date)
                                .getTime();
                            n.post(e.EndPointURL, {
                                    metrics: f.getOutputBuffer()
                                })
                                .done(function() {
                                    f.lastRequestLatency = (new Date)
                                        .getTime() - t;
                                    setTimeout(f.pump, e.PumpTimeMs)
                                })
                                .fail(function(n) {
                                    f.Lang.log(101, n.status, n.statusText);
                                    setTimeout(f.pump, e.PumpTimeMs)
                                })
                        }
                        setTimeout(f.pump, e.PumpTimeMs)
                    }, f.getOutputBuffer = function() {
                        var n = f.outputBuffer.join("{||}");
                        return f.outputBuffer = [], n
                    }, f.fmtName = function(n) {
                        return e.MetricsNameSpace + "[|]" + n
                    }, e.timing = function(n, t) {
                        f.outputBuffer.push(f.fmtName(n) + ":" + (t || 0) +
                            "|ms")
                    }, e.count = function(n, t) {
                        f.outputBuffer.push(f.fmtName(n) + ":" + (t || 1) +
                            "|c")
                    }, setTimeout(f.pump, e.PumpTimeMs), e
            },
            r = function() {
                var n = {},
                    i = {},
                    r = this;
                return r.isMetricsClient = function(n) {
                    for (var i = ["EndPointURL", "PumpTimeMs",
                        "MetricsNameSpace"], t = 0; t < i.length; t++)
                        if (!n.hasOwnProperty(i[t])) return !1;
                    return !0
                }, i.registerClient = function(u) {
                    if (!u || !r.isMetricsClient(u)) return t.logger.warn(
                            "This is not a MetricsClient object!"),
                        null;
                    var f = u.MetricsNameSpace;
                    return f ? (i.getClient(f) ? t.logger.info(
                        'There is already a metrics client for the namespace "' +
                        f + '"') : (t.logger.info(
                        'Registering a new metrics client for the namespace "' +
                        f + '".'), n[f] = u), n[f]) : (t.logger.warn(
                        "Unable to register metrics client, the root namespace is EMPTY!"
                    ), null)
                }, i.getClient = function(t) {
                    return n.hasOwnProperty(t) ? n[t] : null
                }, i.getClientCount = function() {
                    return Object.getOwnPropertyNames(n)
                        .length
                }, i.logCount = function(r, u) {
                    var e, f;
                    if (i.getClientCount() === 0) {
                        t.logger.info("There are no clients to log against");
                        return
                    }
                    for (e = Object.getOwnPropertyNames(n), f = 0; f < e.length; f++)
                        n[e[f]].count(r, u)
                }, i
            };
        t.Metrics = new r;
        t.MetricsClient = i
    }(jQuery, MobileServices);
dingu.module("getClaimsKey", ["ajax", "options", "urls", "enums", "$", "utils",
    function(n, t, i, r, u, f) {
        var s = {},
            o = null,
            e = null;
        s.setup = function(n) {
            return o = n, this
        };
        s.execute = function() {
            e = u.Deferred();
            var n = o.promises.LoginPromise.state();
            return n === "resolved" ? o.promises.LoginPromise.done(
                    l)
                .fail(c) : h(), e.promise()
        };
        var l = function(n) {
                n ? a() : h()
            },
            h = function() {
                var n = f.createBaseErrorObj(r.methodName.getBalance,
                    "NOT_LOGGED_IN");
                e.resolve(!1, null, n)
            },
            a = function() {
                var u = t.endPointURL + i.GET_CLAIMS_KEY,
                    s = f.getBasePostData();
                n.ajaxPost(u, s)
                    .done(function(n) {
                        o.utils.processServerResponse(n);
                        var t = n.IsSuccess || !1,
                            i = n.ClaimsKey || null,
                            u = f.extractError(n, r.methodName.getClaimsKey,
                                r.objectType.ServerResponse);
                        e.resolve(t, i, u)
                    })
                    .fail(c)
            },
            c = function(n) {
                var t = f.extractError(n, r.methodName.getClaimsKey, r.objectType
                    .XHR);
                e.resolve(!1, null, t)
            };
        return s
    }]);
dingu.module("setAutoLoginFlag", ["ajax", "options", "urls", "enums", "$",
    "utils", "psExceptions",
    function(n, t, i, r, u, f, e) {
        var s = {},
            o = {},
            h = function() {
                var n = u.Deferred(),
                    t = o.psPublic.isLoggedIn();
                return t === r.isLoggedInState.LoggedOn ? (n.resolve(!0),
                    n) : t === r.isLoggedInState.LoggedOut ? (n.resolve(!
                    1), n) : (o.psPublic.isLoggedInAsync()
                    .done(function(t, i) {
                        i === r.isLoggedInState.LoggedOn ? n.resolve(!
                            0) : n.resolve(!1)
                    })
                    .fail(function() {
                        n.resolve(!1)
                    }), n)
            };
        return s.setup = function(n, t) {
            return o.ps = n, o.psPublic = t, this
        }, s.execute = function(s) {
            var c = u.Deferred(),
                a = t.endPointURL + i.SET_AUTO_LOGIN_STATE,
                l = f.getBasePostData();
            return l.autoLoginState = s, h()
                .then(function(t) {
                    if (!t) {
                        c.resolve(!1, {}, e.createPsException(
                            "setAutoLoginFlag", r.exceptionType
                            .notLoggedIn,
                            "NOT_LOGGED_IN"));
                        return
                    }
                    n.ajaxPost(a, l)
                        .done(function(n) {
                            o.ps.utils.processServerResponse(
                                n);
                            c.resolve(n.IsSuccess, o.psPublic
                                .PlayerData.AutoLogin,
                                f.extractError(n, r.methodName
                                    .setAutoLoginFlag,
                                    r.objectType.ServerResponse
                                ))
                        })
                        .fail(function(n) {
                            var t = o.psPublic.PlayerData.AutoLoginEnabled;
                            c.resolve(!1, t, f.extractError(
                                n, r.methodName.setAutoLoginFlag,
                                r.objectType.XHR))
                        })
                }), c.promise()
        }, s
    }]);
dingu.module("redirectToEndpoint", ["options", "psExceptions", "utils",
    function(n, t, i) {
        var u = {},
            f = null,
            e = function(n, t) {
                var i = document.createElement("form");
                i.setAttribute("method", "post");
                i.setAttribute("action", n);
                r(i, "PostData", JSON.stringify(t.PostData));
                r(i, "GetData", JSON.stringify(t.GetData));
                r(i, "EndPointType", t.EndPointType);
                r(i, "LobbyName", t.LobbyName);
                r(i, "LanguageCode", t.LanguageCode);
                r(i, "BoundHeader", t.BoundHeader);
                r(i, "DeviceModel", t.DeviceModel);
                document.body.appendChild(i);
                i.submit()
            },
            r = function(n, t, i) {
                var r = document.createElement("input");
                r.setAttribute("type", "hidden");
                r.setAttribute("name", t);
                r.setAttribute("value", i);
                n.appendChild(r)
            };
        return u.setup = function(n) {
            return f = n, this
        }, u.execute = function(r, u, o, s) {
            if (!r) throw t.createMissingArgsException(
                "redirectToEndpoint", "endpointType");
            u = u || {};
            o = o || {};
            s = s || n.lobbyName;
            var c = n.endPointURL.split("/API/")[0],
                l = c + "/EndPointRedirection/OpenRedirectionUrl",
                h = {
                    PostData: u,
                    GetData: o,
                    EndPointType: r,
                    LobbyName: s,
                    LanguageCode: n.clientLang,
                    BoundHeader: f.getBoundHeader()
                };
            i.appendDeviceInfo(h);
            e(l, h)
        }, u
    }]);
dingu.module("getBalance", ["ajax", "options", "urls", "enums", "$", "utils",
    function(n, t, i, r, u, f) {
        var o = {},
            e = {};
        return o.setup = function(n, t) {
            return e.ps = n, e.psPublic = t, this
        }, o.execute = function() {
            var o = u.Deferred();
            return e.ps.promises.LoginPromise.done(function(u) {
                    var s, h, c;
                    if (e.ps.promises.LoginPromise.state() ===
                        "resolved" && !u) return s = f.createBaseErrorObj(
                        r.methodName.getBalance,
                        "NOT_LOGGED_IN"), o.resolve(!1, {},
                        s), o.promise();
                    h = t.endPointURL + i.GET_BALANCE;
                    c = f.getBasePostData();
                    n.ajaxPost(h, c)
                        .done(function(n) {
                            e.ps.utils.processServerResponse(
                                n);
                            o.resolve(n.IsSuccess, e.psPublic
                                .PlayerData.Balance, f.extractError(
                                    n, r.methodName.getBalance,
                                    r.objectType.ServerResponse
                                ))
                        })
                        .fail(function(n) {
                            var t = f.extractError(n, r.methodName
                                .getBalance, r.objectType
                                .XHR);
                            o.resolve(!1, {}, t)
                        })
                })
                .fail(function(n) {
                    var t = f.extractError(n, r.methodName.getBalance,
                        r.objectType.XHR);
                    o.resolve(!1, {}, t)
                }), o.promise()
        }, o
    }]);
dingu.module("getDetailedBalance", ["ajax", "options", "urls", "enums", "$",
    "utils",
    function(n, t, i, r, u, f) {
        var o = {},
            e = {};
        return o.setup = function(n, t) {
            return e.ps = n, e.psPublic = t, this
        }, o.execute = function() {
            var o = u.Deferred();
            return e.ps.promises.LoginPromise.done(function(u) {
                    var s, h, c;
                    if (e.ps.promises.LoginPromise.state() ===
                        "resolved" && !u) return s = f.createBaseErrorObj(
                        r.methodName.getDetailedBalance,
                        "NOT_LOGGED_IN"), o.resolve(!1, {},
                        s), o.promise();
                    h = t.endPointURL + i.GET_DETAILED_BALANCE;
                    c = f.getBasePostData();
                    n.ajaxPost(h, c)
                        .done(function(n) {
                            e.ps.utils.processServerResponse(
                                n);
                            o.resolve(n.IsSuccess, {
                                Balance: e.psPublic
                                    .PlayerData.Balance,
                                BalanceCents: e.psPublic
                                    .PlayerData.BalanceCents
                            }, f.extractError(n, r.methodName
                                .getDetailedBalance,
                                r.objectType.ServerResponse
                            ))
                        })
                        .fail(function(n) {
                            var t = f.extractError(n, r.methodName
                                .getDetailedBalance, r.objectType
                                .XHR);
                            o.resolve(!1, {}, t)
                        })
                })
                .fail(function(n) {
                    var t = f.extractError(n, r.methodName.getBalance,
                        r.objectType.XHR);
                    o.resolve(!1, {}, t)
                }), o.promise()
        }, o
    }]);
dingu.module("getNextVPBMessage", ["$", "ajax", "options", "urls", "enums",
    "utils", "loggedInTracker",
    function(n, t, i, r, u, f, e) {
        var o = {},
            s, c, h = function() {
                return f.createBaseErrorObj(u.methodName.getNextVPBMessage,
                    "NOT_LOGGED_IN")
            },
            l = function(n) {
                return f.extractError(n, u.methodName.getNextVPBMessage,
                    u.objectType.ServerResponse)
            };
        return o.setup = function(n, t) {
            return s = n, c = t, this
        }, o.execute = function() {
            var o = n.Deferred();
            return s.promises.LoginPromise.done(function() {
                    var a = e.getLoggedInState(),
                        n, c;
                    if (a === e.LOGGED_OUT) {
                        o.resolve(!1, {}, h());
                        return
                    }
                    n = i.endPointURL + r.GET_NEXT_VPB_MESSAGE;
                    c = f.getBasePostData();
                    t.ajaxPost(n, c)
                        .done(function(n) {
                            s.utils.processServerResponse(n);
                            var i = n.IsSuccess,
                                t = {
                                    Message: null,
                                    PendingMessage: !1
                                };
                            i && (t.Message = n.Message, t.PendingMessage =
                                n.PendingMessage);
                            o.resolve(i, t, l(n))
                        })
                        .fail(function(n) {
                            var t = f.extractError(n, u.methodName
                                .getDetailedBalance, u.objectType
                                .XHR);
                            o.resolve(!1, {}, t)
                        })
                })
                .fail(function() {
                    o.resolve(!1, {}, h())
                }), o.promise()
        }, o
    }]);
dingu.module("migrationLogin", ["ajax", "options", "urls", "enums", "$",
    "utils",
    function(n, t, i, r, u, f) {
        var o = {},
            e = {};
        return o.setup = function(n, t) {
            return e.ps = n, e.psPublic = t, this
        }, o.execute = function(o) {
            var s = u.Deferred(),
                h = t.endPointURL + i.MIGRATE_LOGIN;
            return n.ajaxPost(h, o)
                .done(function(n) {
                    e.ps.utils.processServerResponse(n);
                    s.resolve(n.IsSuccess || !1, e.ps.utils.createPlayerData(
                        n.IsSuccess, n), f.extractError(
                        n, r.methodName.migrationLogin,
                        r.objectType.ServerResponse))
                })
                .fail(function(n) {
                    var t = f.extractError(n, r.methodName.migrationLogin,
                        r.objectType.XHR);
                    s.resolve(!1, {}, t)
                }), s
        }, o
    }]);
dingu.module("validateSession", ["ajax", "options", "urls", "enums", "$",
    "utils",
    function(n, t, i, r, u, f) {
        var e = {},
            o = {};
        return e.setup = function(n, t) {
            return o.ps = n, o.psPublic = t, this
        }, e.execute = function() {
            var e = u.Deferred(),
                s = t.endPointURL + i.VALIDATE_SESSION,
                h = f.getBasePostData();
            return n.ajaxPost(s, h)
                .done(function(n) {
                    o.ps.utils.processServerResponse(n);
                    var t = n.IsSuccess && n.ResponseType === r
                        .responseType.GetBalance,
                        i = f.extractError(n, r.methodName.validateSession,
                            r.objectType.ServerResponse);
                    e.resolve(t, {
                        sessionValid: t
                    }, i)
                })
                .fail(function(n) {
                    e.resolve(!1, {}, f.extractError(n, r.methodName
                        .validateSession, r.objectType.XHR
                    ))
                }), e.promise()
        }, e
    }]);
(function(n, t, i, r) {
    var u, e, f;
    t = t || (n.lobby = {});
    t.player = t.player || {};
    t.player.type = t.enums.playerTypes.NOTSET;
    t.player.autoLogin = null;
    t.player.sound = null;
    t.player.playerService = t.player.playerService || {};
    t.player.bannerTags = t.player.bannerTags || {};
    u = [];
    t.player.init = function() {
        t.player.service.init();
        t.player.bannerTags.init(n.RequestData.BannerTags);
        t.logging.logDebug("Player Loaded")
    };
    t.player.isValidLogin = function(n, i) {
        return t.login.isLoggedIn(n, i) && !t.player.displayTermsAndConditions() ?
            !0 : !1
    };
    t.player.isPractice = function() {
        var n = t.player.service.getType();
        if (n === t.enums.playerTypes.NOTSET) throw t.Exception(
            "error.lobby.player.type.notSet");
        return n === t.enums.playerTypes.PRACTICE ? !0 : !1
    };
    t.player.isReal = function() {
        var n = t.player.service.getType();
        if (n === t.enums.playerTypes.NOTSET) throw t.Exception(
            "error.lobby.player.type.notSet");
        return n === t.enums.playerTypes.REAL ? !0 : !1
    };
    t.player.login = function(n, i, r, u) {
        if (t.utils.isNullorEmpty(n)) throw t.Exception(
            "error.lobby.player.username.empty");
        if (t.utils.isNullorEmpty(i)) throw t.Exception(
            "error.lobby.player.sessionID");
        if (t.utils.isNullorEmpty(r)) throw t.Exception(
            "error.lobby.player.firstName");
        u ? t.localStorage.set("practiceUsername", n) : t.localStorage.set(
            "username", n);
        t.localStorage.set("xmanSessionID", i);
        t.localStorage.set("firstname", r)
    };
    t.player.logout = function(n) {
        t.login.signals.logoutStart();
        n !== "" && t.utils.isNullorEmpty(n) && (n = "Games/Login");
        t.player.settings.setAutoLogin(t.config.Login.setAutoLoginTrue, !
            0);
        t.player.playerService.logoff()
            .done(function(t, i, r) {
                e(t, i, r, n)
            })
            .fail(function(t, i, r) {
                f(t, i, r, n)
            })
    };
    t.player.silentLogout = function() {
        t.player.playerService.logoff()
            .done(function(n, t, i) {
                e(n, t, i)
            })
            .fail(function(n, t, i) {
                f(n, t, i)
            })
    };
    e = function(n, i, r, u) {
        n ? (t.player.clearPlayerInfo(), t.utils.isNullorEmpty(u) || t.player
                .logoutCallback(u), t.login.signals.logoutSuccess()) :
            f(n, i, r, u)
    };
    f = function(n, i, r, u) {
        t.logging.logTrace(i, "Logout failed");
        t.player.clearPlayerInfo();
        t.tracking.trackEvent(t.enums.trackingEvents.LOGOUTERROR, r);
        t.logging.logDebug(JSON.stringify(r, null, 4));
        t.login.signals.logoutSuccess();
        t.utils.isNullorEmpty(u) || t.player.logoutCallback(u)
    };
    t.player.logoutCallback = function(n) {
        t.player.clearPlayerInfo();
        t.marshal.loadURL(n);
        t.login.signals.logoutSuccess()
    };
    t.player.isReturning = function() {
        return !t.utils.isNullorEmpty(t.localStorage.get("username"))
    };
    t.player.getFirstName = function() {
        return t.localStorage.exists("firstname") ? t.localStorage.get(
                "firstname") : t.utils.isNullorEmpty(t.player.playerService
                .PlayerData.PlayerInfo) ? r : t.player.playerService.PlayerData
            .PlayerInfo.FirstName
    };
    t.player.getRegisteredCasinoID = function() {
        return t.utils.isNullorEmpty(t.player.playerService.PlayerData.PlayerInfo) ?
            r : t.player.playerService.PlayerData.PlayerInfo.RegisteredCasinoID
    };
    t.player.refreshBalance = function() {
        t.player.isValidLogin(function() {
            t.player.refreshBalance()
        }) && (t.player.service.setPlayerService(), t.logging.logDebug(
                "Balance Refresh"), t.player.playerService.getBalance()
            .done(function(n, i, r) {
                n ? (t.logging.logTrace(i,
                            "Player Balance returned"), t.player
                        .signals.balanceReturned(i)) : t.logging
                    .logTrace(r,
                        "Player Balance retrieve failed.")
            })
            .fail(function(n, i, r) {
                t.logging.logTrace(r,
                    "Player Balance retrieve failed.")
            }))
    };
    t.player.getBalance = function() {
        return t.utils.isNullorEmpty(t.player.playerService.PlayerData.Balance) ?
            r : t.player.playerService.PlayerData.Balance.Cash
    };
    t.player.getBonusBalance = function() {
        return t.utils.isNullorEmpty(t.player.playerService.PlayerData.Balance) ?
            r : t.player.playerService.PlayerData.Balance.Bonus
    };
    t.player.getTotalBalance = function() {
        return t.utils.isNullorEmpty(t.player.playerService.PlayerData.Balance) ?
            r : t.player.playerService.PlayerData.Balance.Total
    };
    t.player.setUsername = function(n) {
        if (t.utils.isNullorEmpty(n)) throw t.Exception(
            "error.lobby.player.username.invalid");
        t.localStorage.set("username", n)
    };
    t.player.clearPlayerInfo = function() {
        t.localStorage.set("xmanSessionID", "");
        t.player.type = t.enums.playerTypes.NONE
    };
    t.player.getUsername = function() {
        return t.player.type === t.enums.playerTypes.PRACTICE ? t.player
            .getPracticeUsername() : t.player.getRealUsername()
    };
    t.player.getRealUsername = function() {
        return t.localStorage.exists("username") ? t.localStorage.get(
                "username") : t.player.type === t.enums.playerTypes.REAL &&
            t.player.playerService.PlayerData && !t.utils.isNullorEmpty(
                t.player.playerService.PlayerData.PlayerInfo) ? t.player
            .playerService.PlayerData.PlayerInfo.Username : t.localStorage
            .exists("queryUsername") ? t.localStorage.get(
                "queryUsername") : r
    };
    t.player.hasConfirmedRealUsername = function() {
        return t.localStorage.exists("username") || !t.utils.isNullorEmpty(
                t.player.playerService.PlayerData.PlayerInfo) && t.player
            .type === t.enums.playerTypes.REAL
    };
    t.player.getPracticeUsername = function() {
        return t.localStorage.get("practiceUsername")
    };
    t.player.getPracticePassword = function() {
        return t.localStorage.get("practicePassword")
    };
    t.player.setPracticePassword = function(n) {
        return t.localStorage.set("practicePassword", n)
    };
    t.player.getXmanSessionID = function() {
        return t.localStorage.get("xmanSessionID")
    };
    t.player.getCurrencyDisplayFormat = function() {
        return t.utils.isNullorEmpty(t.player.playerService.PlayerData.PlayerInfo) ?
            r : t.player.playerService.PlayerData.PlayerInfo.CurrencyMask
    };
    t.player.getCurrencyIsoCode = function() {
        return t.utils.isNullorEmpty(t.player.playerService.PlayerData.PlayerInfo) ?
            null : t.player.playerService.PlayerData.PlayerInfo.CurrencyISOCode
    };
    t.player.getUserID = function() {
        return t.utils.isNullorEmpty(t.player.playerService.PlayerData) ?
            null : t.player.playerService.PlayerData.UserId
    };
    t.player.displayTermsAndConditions = function() {
        return (t.logging.logTrace(
                    "Player object checking for terms and conditions"),
                t.config.Core.postLoginCheck_termsAndConditionsCheck) ?
            (t.logging.logDebug("Brand has Terms and Conditions"), t.termsAndConditions
                .checkTermsAndConditions()) : !1
    };
    t.player.getPlayerServiceLoginState = function() {
        return t.player.playerService.isLoggedIn()
    };
    t.player.checkPlayerServiceLogin = function(n, i) {
        var r = t.player.playerService.isLoggedIn();
        switch (r) {
            case t.enums.loggedInStates.LOGGEDON:
                return !0;
            case t.enums.loggedInStates.LOGGEDOUT:
                return !1;
            default:
                if (n || (n = function() {
                        var n = "";
                        n = t.utils.isNullorEmpty(t.marshal.requestedUrl) ?
                            t.utils.isNullorEmpty(t.marshal.currentUrl) ?
                            "" : t.marshal.currentUrl : t.marshal.requestedUrl;
                        t.marshal.loadURL(n)
                    }), u.push(n), i || t.spinner.start(), t.player.playerService
                    .isLoggedInAsync()
                    .done(function(n, t, i) {
                        if (n) u.forEach(function(n) {
                            n(t)
                        });
                        else throw i;
                    })
                    .fail(function(n, t, i) {
                        throw i;
                    })
                    .always(function() {
                        u = [];
                        t.spinner.stop()
                    }), i) return null;
                throw t.Exception("warn.lobby.executionStopped",
                    "SILENT");
        }
    };
    t.player.getRegulatedPlayerInfo = function() {
        if (t.utils.isNullorEmpty(t.player.playerService.PlayerData.RegulatedInfo)) {
            t.logging.logWarn(
                "Regulated Player Info was not available on the player service object."
            );
            for (var n = t.player.service.getRegulatedPlayerInfo(), i =
                Date.now(); !n && Date.now() < i + 2e3;) n = t.player.service
                .getRegulatedPlayerInfo();
            if (t.utils.isNullorEmpty(t.player.playerService.PlayerData
                .RegulatedInfo)) throw t.Exception(
                "error.lobby.player.regulatedPlayerInfo.notSet");
        }
        return t.player.playerService.PlayerData.RegulatedInfo
    }
})(window, lobby, jQuery);
(function(n, t, i, r) {
    t = t || (n.lobby = {});
    t.player = t.player || {};
    t.player.service = t.player.service || {};
    t.player.service.endpointTypeRedirectionEnums = {
        LOGIN: "Login",
        REGISTRATION: "Registration",
        BANKING: "Banking",
        PROMOTIONS: "Promotions",
        OPERATORTRACKING: "OperatorTracking",
        LOBBY: "Lobby",
        CHANGEPASSWORD: "ChangePassword",
        RESPONSIBLEGAMING: "ResponsibleGaming",
        MIGRATION: "Migration"
    };
    t.player.playerServiceDefined = !1;
    t.player.service.init = function() {
        t.player.service.setPlayerService();
        n.MobileServices.PlayerServiceCore = dingu.get(
            "PlayerServiceCore");
        n.MobileServices && n.MobileServices.PlayerServiceCore && n.MobileServices
            .PlayerServiceCore.PlayerServiceInstanceCreated(function() {
                t.player.service._setDefaultType()
            });
        t.player.playerService.events.ready(function() {
            t.player.settings.init();
            t.login.isLoggedIn() && t.player.playerService.PlayerData &&
                (t.player.service.setType(), t.player.playerService
                    .PlayerData.PlayerInfo && t.player.login(t.player
                        .playerService.PlayerData.Username, t.player
                        .playerService.PlayerData.Token, t.player
                        .type === t.enums.playerTypes.PRACTICE ?
                        t.languageStringProvider.getString(
                            "Account.PracticePlay") : t.player.playerService
                        .PlayerData.PlayerInfo.FirstName, t.player
                        .type === t.enums.playerTypes.PRACTICE ?
                        !0 : !1));
            t.requireLoaded()
        })
    };
    t.player.service.setPlayerService = function() {
        t.player.service.playerServiceDefined || (t.player.playerService =
            playerSvc, t.player.service.playerServiceDefined = !0)
    };
    t.player.service._setDefaultType = function() {
        if (t.player.playerService.PlayerData && t.player.playerService
            .PlayerData.PlayerInfo) switch (t.player.playerService.PlayerData
            .PlayerInfo.UserType) {
            case "Real User":
            case "Real Player":
                t.player.type = t.enums.playerTypes.REAL;
                break;
            default:
                t.player.type = t.enums.playerTypes.PRACTICE
        } else t.player.type = t.enums.playerTypes.NONE;
        t.localStorage.set("playerType", t.player.type)
    };
    t.player.service.setType = function() {
        t.player.service._setDefaultType()
    };
    t.player.service.getType = function() {
        return t.player.service._setDefaultType(), t.player.type
    };
    t.player.service.getRegulatedPlayerInfo = function() {
        return t.utils.isNullorEmpty(t.player.playerService.PlayerData.RegulatedInfo) ?
            (t.player.service.setPlayerService(), t.player.playerService
                .getRegulatedPlayerInfo()
                .done(function(n, i, r) {
                    n ? (t.player.playerService.PlayerData.RegulatedInfo =
                            i, t.logging.logDebug(
                                "Regulated player info returned")) :
                        t.logging.logDebug(
                            "Regulated player retrieve failed: " +
                            JSON.stringify(r, null, 4))
                })
                .fail(function(n, i, r) {
                    t.logging.logError(
                        "Player.GetRegulatedPlayerInfo failed: " +
                        JSON.stringify(r, null, 4))
                }), !1) : !0
    };
    t.player.service.redirectToEndpoint = function(n, i, u) {
        t.utils.isNullorEmpty(t.player.playerService.redirectToEndpoint) &&
            t.logging.logError(
                "Method lobby.player.playerService.redirectToEndpoint is not defined. Dependant on player service version >= 2.2.0"
            );
        t.utils.isNullorEmpty(n) && t.logging.logWarn(
            "endpointType is not defined, redirectToEndpoint may fail."
        );
        t.player.playerService.redirectToEndpoint(n, t.utils.isNullorEmpty(
            i) ? r : i, t.utils.isNullorEmpty(u) ? r : u)
    };
    t.player.service.getLastMigrationObject = function() {
        var n = t.player.playerService.getLastMigrationResponse();
        return t.utils.isNullorEmpty(n) ? !1 : n
    };
    t.require()
})(window, lobby, jQuery);
(function(n, t, i, r) {
    t = t || (n.lobby = {});
    t.player = t.player || {};
    t.player.settings = t.player.settings || {};
    t.player.settings.init = function() {
        t.player.settings._setDefaultAutoLogin()
    };
    t.player.settings._setDefaultSound = function() {
        t.localStorage.exists("sound") ? t.player.sound === null && (t.player
            .sound = t.localStorage.get("sound")) : (t.localStorage
            .set("sound", !1), t.player.sound = !1)
    };
    t.player.settings.getSound = function() {
        var n = t.localStorage.get("sound");
        return (n === null || n === r || typeof n != "boolean") && (n = !
            0), n
    };
    t.player.settings.setSound = function(n) {
        if (typeof n != "boolean") throw t.Exception(
            "error.lobby.player.sound");
        t.localStorage.set("sound", n);
        t.player.sound = n
    };
    t.player.settings._setDefaultAutoLogin = function() {
        t.utils.isNullorEmpty(t.config.autoLoginRequested) ? t.player.autoLogin ===
            null || t.player.autoLogin === "undefined" ? t.player.autoLogin =
            t.player.playerService.PlayerData && typeof t.player.playerService
            .PlayerData.AutoLogin != "undefined" && t.player.playerService
            .isLoggedIn() === t.enums.loggedInStates.LOGGEDON ? t.player
            .playerService.PlayerData.AutoLogin : t.config.Login.setAutoLoginTrue :
            t.localStorage.get("autoLogin") !== "undefined" && t.localStorage
            .get("autoLogin") !== null && (t.player.autoLogin = t.localStorage
                .get("autoLogin")) : (t.player.autoLogin = t.config.autoLoginRequested,
                t.player.settings.setAutoLogin(t.config.autoLoginRequested)
            );
        t.localStorage.set("autoLogin", t.player.autoLogin)
    };
    t.player.settings.getAutoLogin = function() {
        return t.localStorage.exists("autoLogin") ? t.localStorage.get(
            "autoLogin") : ((t.player.autoLogin === null || t.player
                .autoLogin === "undefined") && t.player.settings._setDefaultAutoLogin(),
            t.player.autoLogin)
    };
    t.player.settings.setAutoLogin = function(n, i) {
        if (typeof n != "boolean") throw t.Exception(
            "error.lobby.player.autologin");
        t.localStorage.set("autoLogin", n);
        i || t.player.playerService.setAutoLoginFlag(n)
            .done(function(n, i) {
                n ? (t.logging.logDebug(
                        "Player Setting: AutoLogin Set"), t.player
                    .autoLogin = i) : t.logging.logDebug(
                    "Player Setting: Failed to set AutoLogin state"
                )
            })
            .fail(function(n, i, r) {
                t.logging.logDebug(
                    "Player Setting: Failed to set AutoLogin state"
                );
                t.logging.logError(r)
            })
    }
})(window, lobby, jQuery);
(function(n) {
    n.player.signals = {
        init: function() {
            var t = this;
            t.loadSubscribe();
            n.logging.logDebug("Player Signals Loaded")
        },
        loadSubscribe: function() {
            var t = this;
            n.signal.subscribe("lobby.start", function() {
                    t.loadPublish();
                    n.player.init()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {},
        balanceReturned: function(t) {
            n.signal.publish("player.balanceReturned", {
                balance: t
            })
        },
        bannerTagsProcessed: function() {
            n.logging.logDebug(
                "Signal: player.bannertags.processed");
            n.signal.publish("player.bannertags.processed")
        }
    };
    n.player.signals.init()
})(lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.player = t.player || {};
    t.player.bannerTags = t.player.bannerTags || {};
    t.player.bannerTags.bannerTag1 = "";
    t.player.bannerTags.bannerTag2 = "";
    t.player.bannerTags.bannerTag3 = "";
    t.player.bannerTags.bannerTag4 = "";
    t.player.bannerTags.bannerTag5 = "";
    t.player.bannerTags.oldBannerTagsRemoved = !1;
    t.player.bannerTags.init = function(i) {
        var r;
        if (t.utils.isNullorEmpty(i)) throw t.Exception(
            "The bannerTagsFromServer object is undefined, the bannertags module always expects a valid bannertags object even of the bannertags are empty in order to initiate."
        );
        if (!i.hasOwnProperty("bannerTag1")) throw t.Exception(
            "The bannerTagsFromServer does not contain a property for bannerTag1"
        );
        if (!i.hasOwnProperty("bannerTag2")) throw t.Exception(
            "The bannerTagsFromServer does not contain a property for bannerTag2"
        );
        if (!i.hasOwnProperty("bannerTag3")) throw t.Exception(
            "The bannerTagsFromServer does not contain a property for bannerTag3"
        );
        if (!i.hasOwnProperty("bannerTag4")) throw t.Exception(
            "The bannerTagsFromServer does not contain a property for bannerTag4"
        );
        if (!i.hasOwnProperty("bannerTag5")) throw t.Exception(
            "The bannerTagsFromServer does not contain a property for bannerTag5"
        );
        if (t.player.bannerTags.haveNewBannerTagsFromServer(i)) {
            t.player.bannerTags.removeCurrentBannerTagsFromLocalStorage(
                i);
            for (r in i) t.utils.isNullorEmpty(i[r]) || t.localStorage.set(
                r, i[r])
        } else n.localStorage.getItem("mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag1") && t.player.bannerTags.processLegacyBannerTag(
            "bannerTag1", "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag1", i), n.localStorage.getItem(
            "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag2") && t.player.bannerTags.processLegacyBannerTag(
            "bannerTag2", "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag2", i), n.localStorage.getItem(
            "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag3") && t.player.bannerTags.processLegacyBannerTag(
            "bannerTag3", "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag3", i), n.localStorage.getItem(
            "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag4") && t.player.bannerTags.processLegacyBannerTag(
            "bannerTag4", "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag4", i), n.localStorage.getItem(
            "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag5") && t.player.bannerTags.processLegacyBannerTag(
            "bannerTag5", "mgs.mobileWeb." + t.config.Core.LobbyName +
            ".lobby.bannerTag5", i);
        for (r in i) t.utils.isNullorEmpty(t.localStorage.get(r)) || (t
            .player.bannerTags[r] = t.localStorage.get(r));
        t.player.signals.bannerTagsProcessed();
        t.requireLoaded();
        t.logging.logDebug("Player.BannerTags Loaded")
    };
    t.player.bannerTags.processLegacyBannerTag = function(i, r, u) {
        t.player.bannerTags.removeCurrentBannerTagsFromLocalStorage(u);
        t.localStorage.set(i, n.localStorage.getItem(r));
        n.localStorage.removeItem(r)
    };
    t.player.bannerTags.removeCurrentBannerTagsFromLocalStorage = function(
        n) {
        if (!t.player.bannerTags.oldBannerTagsRemoved) {
            for (var i in n) t.localStorage.remove(i);
            t.player.bannerTags.oldBannerTagsRemoved = !0
        }
    };
    t.player.bannerTags.haveNewBannerTagsFromServer = function(n) {
        var i = _.find(n, function(n) {
            return !t.utils.isNullorEmpty(n)
        });
        return typeof i == "undefined" ? !1 : !0
    };
    t.require()
})(window, lobby, jQuery);
(function(n) {
    n = n || (global.lobby = {});
    n.promotions = n.promotions || {};
    n.promotions.launchedByPlayer = !1;
    n.promotions.init = function() {
        n.marshal.registerURL("Promotions", n.promotions);
        n.config.InitialView === "promotions" && (n.marshal.processLoadInitialStartURL = !
            1);
        n.requireLoaded();
        n.logging.logDebug("Promotions Loaded")
    };
    n.promotions.loadView = function() {
        var t = n.promotions.getPromotionsPostKeyValuePairs(n.promotions
                .getPTPC(!0)),
            i = n.promotions.getPromotionsQueryStringKeyValuePairs(n.promotions
                .getPTPC()),
            r = n.config.Promotions.promotionsUrl + n.utils.url.buildQueryString(
                i);
        n.sessionStorage.set("hasAlreadyAutoPromoted", !0);
        n.tracking.trackEvent(n.enums.trackingEvents.PROMOTIONSOPEN);
        setTimeout(function() {
            n.config.Promotions.isPostAdditionalPromotionalContent ?
                n.config.Promotions.passThePasswordTo_Promotions &&
                n.login.isLoggedIn() ? n.utils.viewLoader.externalLink
                .loadViewViaPlayerServiceRedirection(n.enums.endpointTypeRedirection
                    .PROMOTIONS, t, i) : n.utils.viewLoader.externalLink
                .loadView(r, !1, t) : n.utils.viewLoader.externalLink
                .loadView(r)
        }, 500)
    };
    n.promotions.getState = function() {
        return n.config.InitialView !== "promotions" && n.promotions.getHasAlreadyAutoPromoted() &&
            !n.promotions.launchedByPlayer ? "Completed" : "Display"
    };
    n.promotions.loadPromotions = function() {
        n.marshal.loadURL("Promotions")
    };
    n.promotions.getHasAlreadyAutoPromoted = function() {
        return n.sessionStorage.get("hasAlreadyAutoPromoted") ? !0 : !1
    };
    n.promotions.getPromotionsQueryStringKeyValuePairs = function(t) {
        var i = {
            lobbyName: t.lobbyName,
            languageCode: t.languageCode,
            userName: t.userName,
            xmanSessionID: "",
            userType: "",
            casinoCasinoID: t.casinoCasinoID,
            bingoCasinoID: t.bingoCasinoID,
            pokerCasinoID: t.pokerCasinoID,
            clientTypeID: t.clientTypeID,
            bannerTag1: t.bannerTag1,
            bannerTag2: t.bannerTag2,
            bannerTag3: t.bannerTag3,
            bannerTag4: t.bannerTag4,
            bannerTag5: t.bannerTag5,
            activeCategoryID: t.activeCategoryID,
            returnUrl: t.returnUrl,
            isPracticePlay: t.isPracticePlay,
            registeredCasinoID: t.registeredCasinoID,
            currencyFormat: t.currencyFormat,
            currencyIsoCode: t.currencyIsoCode
        };
        return n.config.Promotions.isPromotionsUrlSecure && (i.xmanSessionID =
            t.xmanSessionID, i.userType = t.userType), i
    };
    n.promotions.getPromotionsPostKeyValuePairs = function(t) {
        return {
            password: "",
            compatibleGames: t.compatibleGames,
            favouriteGames: t.favouriteGames,
            userID: n.config.Promotions.isPromotionsUrlSecure ? t.userID : "",
            cashBalance: t.cashBalance,
            bonusBalance: t.bonusBalance
        }
    };
    n.promotions.getPTPC = function(t) {
        return n.utils.getExternalDataBlob(t)
    };
    n.require()
})(lobby, jQuery);
(function(n) {
    n.promotions.signals = {
        init: function() {
            var t = this;
            t.loadSubscribe();
            n.logging.logDebug("Promotions Signals Loaded")
        },
        loadSubscribe: function() {
            n.signal.subscribe("lobby.start", function() {
                    n.promotions.signals.loadPublish();
                    n.promotions.init()
                })
                .disposeAfter(1);
            n.signal.subscribe("promotions.navigation.button.click",
                function() {
                    n.promotions.launchedByPlayer = !0;
                    n.promotions.loadPromotions()
                });
            n.signal.subscribe("header.promotions.click", function() {
                n.promotions.launchedByPlayer = !0;
                n.promotions.loadPromotions()
            });
            n.signal.subscribe("lobby.loaded", function() {
                n.config.InitialView === "promotions" && n.promotions
                    .loadPromotions()
            });
            n.signal.subscribe("marshal.viewLoaded.promotions",
                function() {
                    n.promotions.view.init()
                });
            n.signal.subscribe("marshal.ready", function() {
                n.config.InitialView === "promotions" && n.history
                    .replace("", "games")
            })
        },
        loadPublish: function() {}
    };
    n.promotions.signals.init()
})(lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.view = t.ui.view || {};
    t.ui.init = function() {
        t.ui.checkLegacy();
        t.ui.setupResizeEvent();
        t.ui.view.addScrollableContainers()
    };
    t.ui.hasLayoutClass = function(n) {
        return t.ui.view.hasLayoutClass(n)
    };
    t.ui.addLayoutClass = function(n) {
        t.ui.view.addLayoutClass(n)
    };
    t.ui.removeLayoutClass = function(n) {
        t.ui.view.removeLayoutClass(n)
    };
    t.ui.hideMainContent = function() {
        t.ui.view.hideMainContent()
    };
    t.ui.showMainContent = function() {
        t.ui.view.showMainContent()
    };
    t.ui.setupResizeEvent = function() {
        var n = +new Date;
        window.addEventListener("resize", function() {
            +new Date - n > 400 && (n = +new Date, t.ui.signals
                .resize())
        })
    };
    t.ui.checkLegacy = function() {
        t.config.Core.DeviceInfo.IsLegacy ? t.ui.addLayoutClass(
            "legacy-device") : t.ui.addLayoutClass("normal-device")
    };
    t.ui.useTouchClickDoubleClick = function() {
        if (t.config.Core.DeviceInfo.OS === "Android" && t.config.Core.DeviceInfo
            .Browser === "Android") return !0;
        if (t.config.Core.DeviceInfo.OS === "iOS") {
            var n = parseInt(t.config.Core.DeviceInfo.OSVersion, 10);
            if (!isNaN(n) && n <= 5) return !0
        }
        return !1
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Ui Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.start", function() {
                    n.loadPublish();
                    t.ui.init()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {},
        resize: function() {
            t.signal.publish("lobby.ui.resize.changed")
        }
    };
    t.ui.signals.init()
})(window, lobby);
(function(n, t) {
    n = n || (global.lobby = {});
    n.ui = n.ui || {};
    n.ui.view = n.ui.view || {};
    n.ui.view.hasLayoutClass = function(n) {
        return t(".lobby-container")
            .hasClass(n)
    };
    n.ui.view.addLayoutClass = function(n) {
        t(".lobby-container")
            .addClass(n)
    };
    n.ui.view.removeLayoutClass = function(n) {
        t(".lobby-container")
            .removeClass(n)
    };
    n.ui.view.hideMainContent = function() {
        t("#lobbyContent")
            .fadeOut(0);
        t("#contentContainer")
            .fadeOut(0);
        t("#formsServiceContainer")
            .fadeOut(0);
        t("#lobbyCategories")
            .fadeOut(0)
    };
    n.ui.view.showMainContent = function(n) {
        t(".lobby-content")
            .fadeIn(0);
        n && t(".lobby-categories")
            .fadeIn(0)
    };
    n.ui.view.addScrollableContainers = function() {
        t("#lobbyGamesList")
            .addClass("scrollable");
        t("#lobbyCategoriesScroller")
            .addClass("scrollable");
        t("#lobbyContent")
            .addClass("scrollable")
    }
})(lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.resizer = t.ui.resizer || {};
    t.ui.resizer.init = function() {
        t.ui.resizer.refresh()
    };
    t.ui.resizer.refresh = function() {}
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.resizer = t.ui.resizer || {};
    t.ui.resizer.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Ui Resizer Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.start", function() {
                    n.loadPublish();
                    t.ui.resizer.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.ui.orientation.changed.*",
                function() {
                    t.ui.resizer.refresh()
                })
        },
        loadPublish: function() {}
    };
    t.ui.resizer.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.orientation = t.ui.orientation || {};
    t.ui.orientation.currentOrientation = t.enums.orientation.NONE;
    t.ui.orientation.init = function() {
        t.ui.orientation.addEvents();
        t.ui.orientation.refreshOrientation()
    };
    t.ui.orientation.refreshOrientation = function() {
        if (!n.hasOwnProperty("orientation")) {
            t.ui.orientation.currentOrientation = t.enums.orientation.NONE;
            return
        }
        var i = n.orientation;
        switch (i) {
            case 0:
                t.ui.orientation.currentOrientation = t.enums.orientation
                    .PORTRAIT;
                break;
            case 90:
                t.ui.orientation.currentOrientation = t.enums.orientation
                    .LANDSCAPE;
                break;
            case -90:
                t.ui.orientation.currentOrientation = t.enums.orientation
                    .LANDSCAPE;
                break;
            case 180:
                t.ui.orientation.currentOrientation = t.enums.orientation
                    .PORTRAIT
        }
        t.ui.removeLayoutClass(t.enums.orientation.PORTRAIT);
        t.ui.removeLayoutClass(t.enums.orientation.LANDSCAPE);
        t.ui.addLayoutClass(t.ui.orientation.currentOrientation)
    };
    t.ui.orientation.addEvents = function() {
        t.utils.addEvent("orientationchange", t.ui.orientation.orientationChanged)
    };
    t.ui.orientation.orientationChanged = function() {
        t.ui.orientation.refreshOrientation();
        t.ui.orientation.signals.orientationChanged();
        t.logging.logDebug("Orientation Changed to: " + t.ui.orientation
            .currentOrientation)
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.orientation = t.ui.orientation || {};
    t.ui.orientation.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Ui Orientation Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.start", function() {
                    n.loadPublish();
                    t.ui.orientation.init()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {},
        orientationChanged: function() {
            var n = t.ui.orientation.currentOrientation;
            t.signal.publish("lobby.ui.orientation.changed." + n, n)
        }
    };
    t.ui.orientation.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui = t.ui || {};
    t.ui.addressBar = t.ui.addressBar || {};
    t.ui.addressBar.init = function() {
        t.ui.addressBar.startTimer()
    };
    t.ui.addressBar.startTimer = function() {
        setTimeout(function() {
            t.ui.addressBar.signals.fireTick();
            t.ui.addressBar.startTimer()
        }, 5e3)
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.addressBar = t.ui.addressBar || {};
    t.ui.addressBar.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug(
                "Ui AddressBar Android Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.loaded", function() {
                    n.loadPublish();
                    t.ui.addressBar.init()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {},
        fireTick: function() {
            t.signal.publish("lobby.ui.addressbar.tick")
        }
    };
    t.ui.addressBar.signals.init()
})(window, lobby);
/**
 * @license FTScroller is (c) 2012 The Financial Times Ltd [All rights reserved] and licensed under the MIT license.
 *
 * Inspired by Uxebu TouchScroll, (c) 2010 uxebu Consulting Ltd. & Co. KG and David Aurelio, which is BSD licensed (https://github.com/davidaurelio/TouchScroll)
 * Inspired by Zynga Scroller, (c) 2011 Zynga Inc and Deutsche Telekom AG, which is MIT licensed (https://github.com/zynga/scroller)
 * Includes CubicBezier, (c) 2008 Apple Inc [All rights reserved], (c) 2010 David Aurelio and uxebu Consulting Ltd. & Co. KG. [All rights reserved], which is 2-clause BSD licensed (see above or https://github.com/davidaurelio/TouchScroll).
 */
var FTScroller, CubicBezier, module;
(function() {
    "use strict";
    var i = !1,
        f = window.navigator.msPointerEnabled,
        v = !f && (window.propertyIsEnumerable("ontouchstart") || window.document
            .hasOwnProperty("ontouchstart")),
        r = !window.hasOwnProperty("ArrayBuffer"),
        y = window.Selection && window.Selection.prototype.removeAllRanges,
        t, n, u;
    document.createElement("div")
        .style.transform !== undefined ? (t = "", n = "", u = "transform") :
        window.opera && Object.prototype.toString.call(window.opera) ===
        "[object Opera]" ? (t = "-o-", n = "O", u = "OTransform") :
        document.documentElement.style.MozTransform !== undefined ? (t =
            "-moz-", n = "Moz", u = "MozTransform") : document.documentElement
        .style.webkitTransform !== undefined ? (t = "-webkit-", n =
            "webkit", u = "-webkit-transform") : typeof navigator.cpuClass ==
        "string" && (t = "-ms-", n = "ms", u = "-ms-transform");
    r || document.createElement("div")
        .style[n + (n ? "P" : "p") + "erspective"] !== undefined || (r = !0);
    var h = n + (n ? "T" : "t") + "ransform",
        e = n + (n ? "T" : "t") + "ransition",
        c = r ? "translate(" : "translate3d(",
        l = {
            x: "",
            y: "0,"
        },
        a = {
            x: ",0" + (r ? ")" : ",0)"),
            y: r ? ")" : ",0)"
        },
        o = .998,
        s = .01;
    (function() {
        var u = document.getElementsByTagName("head")[0] || document.documentElement,
            n = document.createElement("style"),
            f, i;
        n.type = "text/css";
        f = r ? t + "transform-style: preserve-3d;" : t +
            "transform: translateZ(0);";
        i = [".ftscroller_scrolling { " + t +
            "user-select: none; cursor: all-scroll !important }",
            ".ftscroller_container { overflow: hidden; position: relative; max-height: 100%; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -ms-touch-action: none }",
            ".ftscroller_hwaccelerated { " + f + " }",
            ".ftscroller_x, .ftscroller_y { position: relative; min-width: 100%; min-height: 100%; overflow: hidden }",
            ".ftscroller_x { display: inline-block }",
            ".ftscroller_scrollbar { pointer-events: none; position: absolute; width: 5px; height: 5px; border: 1px solid rgba(255, 255, 255, 0.15); -webkit-border-radius: 3px; border-radius: 6px; opacity: 0; " +
            t +
            "transition: opacity 350ms; z-index: 10; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box }",
            ".ftscroller_scrollbarx { bottom: 2px; left: 2px }",
            ".ftscroller_scrollbary { right: 2px; top: 2px }",
            ".ftscroller_scrollbarinner { height: 100%; background: rgba(0,0,0,0.5); -webkit-border-radius: 2px; border-radius: 4px / 6px }",
            ".ftscroller_scrolling .ftscroller_scrollbar { opacity: 1; " +
            t + "transition: none; -o-transition: all 0 none }",
            ".ftscroller_scrolling .ftscroller_container .ftscroller_scrollbar { opacity: 0 }"
            ];
        n.styleSheet ? n.styleSheet.cssText = i.join("\n") : n.appendChild(
            document.createTextNode(i.join("\n")));
        u.insertBefore(n, u.firstChild)
    })();
    FTScroller = function(r, p) {
        var lt, kr, dr, oi, gr, nu, tu, iu, si, ti, pt, at, ru, uu, ii,
            ur, fu, eu, ou, su, wt, hi, fr, hu, ri, st, er, ot, or, sr,
            cu, lu, hr, ui, cr, au, vu, lr, yu, wi, bi, pu, wu, bu, ku,
            ar, ki, vr, du, di, yr, w = {
                scrollbars: !0,
                scrollingX: !0,
                scrollingY: !0,
                scrollBoundary: 1,
                scrollResponseBoundary: 1,
                alwaysScroll: !1,
                contentWidth: undefined,
                contentHeight: undefined,
                snapping: !1,
                snapSizeX: undefined,
                snapSizeY: undefined,
                paginatedSnap: !1,
                bouncing: !0,
                flinging: !0,
                updateOnChanges: !0,
                updateOnWindowResize: !1,
                baseAlignments: {
                    x: -1,
                    y: -1
                },
                windowScrollingActiveFlag: undefined,
                hwAccelerationClass: "ftscroller_hwaccelerated",
                enableRequestAnimationFrameSupport: !0,
                maxFlingDuration: 1e3,
                disabledInputMethods: {
                    mouse: !1,
                    touch: !1,
                    scroll: !1
                },
                flingBezier: new CubicBezier(.103, .389, .307, .966),
                bounceDecelerationBezier: new CubicBezier(0, .5, .5, 1),
                bounceBezier: new CubicBezier(.7, 0, .9, .6)
            },
            gu, gi = this,
            vt = r,
            k, rt, ft = {
                x: null,
                y: null
            },
            ht = {
                x: null,
                y: null
            },
            b = {
                container: {
                    x: null,
                    y: null
                },
                content: {
                    x: null,
                    y: null,
                    rawX: null,
                    rawY: null
                },
                scrollEnd: {
                    x: null,
                    y: null
                }
            },
            d = {
                x: !1,
                y: !1,
                userX: !1,
                userY: !1
            },
            pr = {
                x: 0,
                y: 0
            },
            ci = {
                x: 0,
                y: 0
            },
            fi = {
                x: 0,
                y: 0
            },
            it = !1,
            li = 0,
            nr = !1,
            dt = !1,
            ai = !1,
            tr = !1,
            ir = !1,
            tt = {
                x: 0,
                y: 0
            },
            g = {
                x: 0,
                y: 0
            },
            nf = {
                x: null,
                y: null
            },
            vi = !1,
            et = [],
            wr = !1,
            bt = {},
            nt = {
                x: !0,
                y: !0
            },
            gt = {
                x: 0,
                y: 0,
                t: 0
            },
            kt = {
                x: 0,
                y: 0
            },
            ut = [],
            yt = !1,
            br = !1,
            yi = !1,
            pi = {
                x: 0,
                y: 0
            },
            ni = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
            !1,
            rr = window.cancelAnimationFrame || window.cancelRequestAnimationFrame ||
            window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
            window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
            window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
            !1,
            ct = {
                scrollstart: [],
                scroll: [],
                scrollend: [],
                segmentwillchange: [],
                segmentdidchange: [],
                reachedstart: [],
                reachedend: [],
                scrollinteractionend: []
            },
            ei;
        if (typeof FTScrollerOptions == "object" && FTScrollerOptions)
            for (lt in FTScrollerOptions) FTScrollerOptions.hasOwnProperty(
                lt) && w.hasOwnProperty(lt) && (w[lt] =
                FTScrollerOptions[lt]);
        if (p) {
            for (lt in p) p.hasOwnProperty(lt) && w.hasOwnProperty(lt) &&
                (w[lt] = p[lt]);
            p.hasOwnProperty("snapSizeX") && !isNaN(p.snapSizeX) && (d.userX =
                d.x = p.snapSizeX);
            p.hasOwnProperty("snapSizeY") && !isNaN(p.snapSizeY) && (d.userY =
                d.y = p.snapSizeY);
            p.contentWidth && p.contentHeight && (p.updateOnChanges = !
                1)
        }
        return w.scrollResponseBoundary = Math.min(w.scrollBoundary, w.scrollResponseBoundary),
            w.scrollingX && (bt.x = !0), w.scrollingY && (bt.y = !0),
            ni = w.enableRequestAnimationFrameSupport && ni, rr = ni &&
            rr, kr = function(n) {
                var t, r;
                for (cr(!1), ui(), yt && (window.clearTimeout(yt), yt = !
                    1), t = 0, r = et.length; t < r; t = t + 1) window.clearTimeout(
                    et[t]);
                if (et.length = 0, n && vt) {
                    while (rt.firstChild) vt.appendChild(rt.firstChild);
                    vt.removeChild(k)
                }
                vt = null;
                k = null;
                rt = null;
                ft.x = null;
                ft.y = null;
                ht.x = null;
                ht.y = null;
                for (t in ct) ct.hasOwnProperty(t) && (ct[t].length = 0);
                i && i === gi && (i = !1, w.windowScrollingActiveFlag &&
                    (window[w.windowScrollingActiveFlag] = !1))
            }, dr = function(n, t) {
                d.userX = n;
                d.userY = t;
                d.x = n;
                d.y = t;
                b.content.x = Math.ceil(b.content.rawX / n) * n;
                b.content.y = Math.ceil(b.content.rawY / t) * t;
                b.scrollEnd.x = b.container.x - b.content.x;
                b.scrollEnd.y = b.container.y - b.content.y;
                fr();
                ii();
                ri(!0)
            }, oi = function(n, t, i) {
                var u, f, e, r, o = 0,
                    s = {};
                pt(Date.now());
                e = {
                    x: -n,
                    y: -t
                };
                for (r in bt)
                    if (bt.hasOwnProperty(r)) {
                        if (u = e[r], u === !1) continue;
                        u = Math.min(0, Math.max(b.scrollEnd[r], u));
                        w.snapping && d[r] && (u = Math.round(u / d[r]) *
                            d[r]);
                        f = i || 0;
                        f === !0 && (f = Math.sqrt(Math.abs(tt[r] - u)) *
                            20);
                        st(r, u, f);
                        s[r] = u;
                        o = Math.max(o, f)
                    }(tt.x !== e.x || tt.y !== e.y) && (wr = !0, ot(
                        "scrollstart", {
                            scrollLeft: -tt.x,
                            scrollTop: -tt.y
                        }));
                o ? et.push(setTimeout(function() {
                    var n;
                    for (n in s) s.hasOwnProperty(n) && (g[
                        n] = s[n]);
                    at()
                }, o)) : at();
                ot("scroll", {
                    scrollLeft: -tt.x,
                    scrollTop: -tt.y
                })
            }, gr = function(n, t, i) {
                oi(parseFloat(n) - tt.x, parseFloat(t) - tt.y, i)
            }, nu = function(n, t, i) {
                p.contentWidth = n || p.contentWidth;
                p.contentHeight = t || p.contentHeight;
                hi(!!i)
            }, tu = function(n, t) {
                return ct.hasOwnProperty(n) ? (ct[n].push(t), !0) : !1
            }, iu = function(n, t) {
                var i;
                if (!ct.hasOwnProperty(n)) return !1;
                for (i = ct[n].length; i >= 0; i = i - 1) ct[n][i] ===
                    t && ct[n].splice(i, 1);
                return !0
            }, si = function(n, t, i, r) {
                var u = tr;
                return (i <= 0 && (i = Date.now()), w.windowScrollingActiveFlag &&
                    window[w.windowScrollingActiveFlag]) ? !1 : (u ?
                    ru() : vi = !1, gt.x = n, gt.y = t, gt.t = i,
                    pi.x = g.x, pi.y = g.y, ut.length = 0, ut.push({
                        x: n,
                        y: t,
                        t: i
                    }), u && ti(n, t, i, r, u), !0)
            }, ti = function(n, t, r, u, f) {
                var e, c, l = !1,
                    s = {
                        x: n - gt.x,
                        y: t - gt.y
                    },
                    o = {
                        x: tt.x + s.x,
                        y: tt.y + s.y
                    },
                    h = cu(o);
                if (r <= 0 && (r = Date.now()), !dt && (i && i !== gi ?
                    c = !0 : w.windowScrollingActiveFlag && window[
                        w.windowScrollingActiveFlag] && (c = !0), c
                )) {
                    it = !1;
                    di();
                    ir && (ui(), ii(!0) || at(!0));
                    return
                }
                if (ai) u.preventDefault();
                else {
                    if ((w.bouncing || f || nt.x && s.x && h.x < 0 ||
                            nt.y && s.y && h.y < 0) && u.preventDefault(), !
                        (f && w.snapping) && (!nt.x || Math.abs(s.x) <
                            w.scrollResponseBoundary) && (!nt.y || Math
                            .abs(s.y) < w.scrollResponseBoundary))
                        return;
                    if (!w.bouncing && !f && (!nt.x || !s.x || h.x > 0) &&
                        (!nt.y || !s.y || h.y > 0)) {
                        vi = !0;
                        return
                    }
                    lu();
                    ai = !0;
                    wr = !0;
                    tr = !0;
                    l = !0;
                    ir = !0
                }
                dt || (f && w.snapping || nt.x && Math.abs(s.x) >= w.scrollBoundary ||
                    nt.y && Math.abs(s.y) >= w.scrollBoundary) && (
                    dt = !0, i = gi, w.windowScrollingActiveFlag &&
                    (window[w.windowScrollingActiveFlag] = gi), ot(
                        "scrollstart", {
                            scrollLeft: -tt.x,
                            scrollTop: -tt.y
                        }));
                y && window.getSelection()
                    .removeAllRanges();
                for (e in nt) nt.hasOwnProperty(e) && (o[e] > 0 ? o[e] =
                    sr(o[e], e) : o[e] < b.scrollEnd[e] && (o[e] =
                        b.scrollEnd[e] + sr(o[e] - b.scrollEnd[e],
                            e)), ni ? pi[e] = o[e] : st(e, o[e]));
                l && k.className.indexOf("ftscroller_scrolling") === -1 &&
                    (k.className += " ftscroller_scrolling");
                dt && (ot("scroll", {
                    scrollLeft: -o.x,
                    scrollTop: -o.y
                }), ri(!1));
                ut.push({
                    x: n,
                    y: t,
                    t: r
                });
                ut.length > 30 && ut.splice(0, 15)
            }, pt = function(n, t) {
                if (it = !1, di(), ui(), ot("scrollinteractionend", {}), !
                    dt) {
                    !ii(!0) && ir && at(!0);
                    return
                }
                ut[ut.length - 1].t = n;
                dt = !1;
                ai = !1;
                i = !1;
                w.windowScrollingActiveFlag && (window[w.windowScrollingActiveFlag] = !
                    1);
                vi = !0;
                t && t.preventDefault();
                uu() || ii() || at()
            }, at = function(n) {
                var t, r, i;
                tr = !1;
                ir = !1;
                ai = !1;
                k.className = k.className.replace(
                    / ?ftscroller_scrolling/g, "");
                tt.x = g.x;
                tt.y = g.y;
                n || (ot("scroll", {
                    scrollLeft: -tt.x,
                    scrollTop: -tt.y
                }), ri(!0));
                ot("scrollend", {
                    scrollLeft: -tt.x,
                    scrollTop: -tt.y,
                    cancelled: n
                });
                for (i in nt) nt.hasOwnProperty(i) && (ft[i].style[e] =
                    "", w.scrollbars && (ht[i].style[e] = ""));
                for (t = 0, r = et.length; t < r; t = t + 1) window.clearTimeout(
                    et[t]);
                et.length = 0
            }, ru = function() {
                var t, n, i;
                tr = !1;
                hu();
                for (t in nt) nt.hasOwnProperty(t) && st(t, tt[t]);
                for (ri(!1), n = 0, i = et.length; n < i; n = n + 1)
                    window.clearTimeout(et[n]);
                et.length = 0
            }, uu = function() {
                var v, n, k, y, tt, rt, i, u, t, c, r, l, p, ft, a, f,
                    e, ot, h, ht, ct, lt = 0,
                    yt = !1,
                    vt = {};
                if (ut.length === 1 || !w.flinging || it ===
                    "scrollwheel") return !1;
                for (n in nt)
                    if (nt.hasOwnProperty(n)) {
                        for (l = 350, r = 0, ft = !1, p = !1, ot =
                            undefined, f = w.flingBezier, tt = ut[ut.length -
                                1], rt = ut[ut.length - 2], v = ut.length -
                            3; v >= 0; v = v - 1) {
                            if (tt.t - ut[v].t > 100) break;
                            rt = ut[v]
                        }
                        if (k = tt.t - rt.t, k || (k = 16), y = (tt[n] -
                                rt[n]) / k, Math.abs(y) < s ? (i = 0, u =
                                0) : (i = Math.log(s / Math.abs(y)) /
                                Math.log(o), u = y * (1 - Math.pow(o, i +
                                    1)) / (1 - o)), t = Math.floor(g[n] +
                                u), w.bouncing || (g[n] === 0 && t > 0 ?
                                t = 0 : g[n] === b.scrollEnd[n] && t <
                                g[n] && (t = g[n])), w.paginatedSnap &&
                            w.snapping ? (h = -g[n] / d[n], h = ci[n] <
                                h ? Math.floor(h) : Math.ceil(h), t > -
                                (h - 1) * d[n] ? r = t + (h - 1) * d[n] :
                                t < -(h + 1) * d[n] ? r = t + (h + 1) *
                                d[n] : Math.abs(y) > s && (t = y < 0 ?
                                    Math.floor(g[n] / d[n]) * d[n] :
                                    Math.ceil(g[n] / d[n]) * d[n], i =
                                    Math.min(w.maxFlingDuration, i * (t -
                                        g[n]) / u))) : w.snapping && (r =
                                t - Math.round(t / d[n]) * d[n]), t - r >
                            0 ? (r = t, ft = !0) : t - r < b.scrollEnd[
                                n] && (r = t - b.scrollEnd[n], ft = !0),
                            r && (ft && w.bouncing && u ? (u = Math.floor(
                                        u), ht = t > 0 ? t - Math.max(0,
                                        g[n]) : t - Math.min(b.scrollEnd[
                                        n], g[n]), ct = u - ht, u && i ?
                                    (e = f._getCoordinateForT(f.getTForY(
                                                (u - ht) / u, 1 / i), f
                                            ._p1.x, f._p2.x), ot = e *
                                        i) : e = 0, a = Math.ceil(ht /
                                        8), Math.abs(a) > b.container[n] /
                                    2 && (a = a < 0 ? -Math.floor(b.container[
                                        n] / 2) : Math.floor(b.container[
                                        n] / 2)), p = t > 0 ? 0 : b.scrollEnd[
                                        n], e === 0 ? (i = i / 6, t = g[
                                        n] + ct + a, c = i) : (c = (e +
                                            (1 - e) / 6) * i, er(n, g[n] +
                                            ct + a, (1 - e) * i / 6, w.bounceDecelerationBezier,
                                            ot), f = f.divideAtX(c / i,
                                            1 / i)[0], i = c, t = g[n] +
                                        ct + a)) : u < 0 && r < u || u >
                                0 && r > u ? (t = t - Math.floor(u / 2),
                                    r = r - Math.floor(u / 2), l = Math
                                    .sqrt(Math.abs(r)) * 50, p = t - r,
                                    i = 350, c = i * .97) : (t = t - r,
                                    u ? (u < 0 && r < 0 || u > 0 && r >
                                        0) && (e = f._getCoordinateForT(
                                        f.getTForY((Math.abs(u) -
                                                Math.abs(r)) / Math
                                            .abs(u), 1 / i), f._p1.x,
                                        f._p2.x), f = f.divideAtX(e,
                                        1 / i)[0], i = Math.round(i *
                                        e)) : i = l, r = 0, l = 0)), t ===
                            g[n] && !r) continue;
                        yt = !0;
                        st(n, t, i, f, ot);
                        r && l && er(n, p, l, w.bounceBezier, c);
                        lt = Math.max(lt, r ? c + l : i);
                        vt[n] = p === !1 ? t : p
                    }
                return yt && lt && et.push(setTimeout(function() {
                    var n;
                    for (n in vt) vt.hasOwnProperty(n) && (
                        g[n] = vt[n]);
                    at()
                }, lt)), yt
            }, ii = function(n) {
                var t, u = n ? 100 : 350,
                    i = g,
                    r;
                w.snapping && (pr = fu(i), i = ur(pr, i));
                i = eu(i);
                r = !1;
                for (t in bt) bt.hasOwnProperty(t) && i[t] !== g[t] &&
                    (r = !0);
                if (!r) return !1;
                for (t in bt) bt.hasOwnProperty(t) && st(t, i[t], u);
                return et.push(setTimeout(function() {
                    g = i;
                    at(n)
                }, u)), !0
            }, fu = function(n) {
                var t, i = {
                    x: 0,
                    y: 0
                };
                for (t in nt) nt.hasOwnProperty(t) && (i[t] = Math.round(
                    n[t] / d[t]));
                return i
            }, ur = function(n, t) {
                var i, r = {
                    x: t.x,
                    y: t.y
                };
                for (i in nt) nt.hasOwnProperty(i) && (r[i] = n[i] * d[
                    i]);
                return r
            }, eu = function(n) {
                var t, i = {
                    x: n.x,
                    y: n.y
                };
                for (t in nt)
                    if (nt.hasOwnProperty(t)) {
                        if (n[t] > 0) {
                            i[t] = 0;
                            continue
                        }
                        if (n[t] < b.scrollEnd[t]) {
                            i[t] = b.scrollEnd[t];
                            continue
                        }
                    }
                return i
            }, ou = function() {
                var i, n, t;
                if (!su()) {
                    for (i = vt.ownerDocument.createDocumentFragment(),
                        n = document.createElement("DIV"), i.appendChild(
                            n), n.innerHTML = FTScroller.prototype.getPrependedHTML(!
                            w.scrollingX, !w.scrollingY, w.hwAccelerationClass
                        ) + FTScroller.prototype.getAppendedHTML(!w.scrollingX, !
                            w.scrollingY, w.hwAccelerationClass, w.scrollbars
                        ), k = n.firstElementChild, t = k, w.scrollingX &&
                        (ft.x = k.firstElementChild, t = ft.x, w.scrollbars &&
                            (ht.x = k.getElementsByClassName(
                                "ftscroller_scrollbarx")[0])), w.scrollingY ?
                        (ft.y = t.firstElementChild, w.scrollbars && (
                                ht.y = k.getElementsByClassName(
                                    "ftscroller_scrollbary")[0]), rt =
                            ft.y) : rt = ft.x; vt.firstChild;) rt.appendChild(
                        vt.firstChild);
                    vt.appendChild(k)
                }
            }, su = function() {
                var t, r, u, s, f, e, i, n, o;
                if (t = vt.firstElementChild, t && t.className.indexOf(
                    "ftscroller_container") !== -1) {
                    if (w.scrollingX) {
                        if (r = t.firstElementChild, !r || r.className.indexOf(
                            "ftscroller_x") === -1) return;
                        if (s = r, w.scrollbars) {
                            if (i = t.getElementsByClassName(
                                "ftscroller_scrollbarx"), i)
                                for (n = 0, o = i.length; n < o; n = n +
                                    1)
                                    if (i[n].parentNode === t) {
                                        f = i[n];
                                        break
                                    }
                            if (!f) return
                        }
                    } else s = t; if (w.scrollingY) {
                        if (u = s.firstElementChild, !u || u.className.indexOf(
                            "ftscroller_y") === -1) return;
                        if (w.scrollbars) {
                            if (i = t.getElementsByClassName(
                                "ftscroller_scrollbary"), i)
                                for (n = 0, o = i.length; n < o; n = n +
                                    1)
                                    if (i[n].parentNode === t) {
                                        e = i[n];
                                        break
                                    }
                            if (!e) return
                        }
                    }
                    return k = t, r && (ft.x = r), u && (ft.y = u), f &&
                        (ht.x = f), e && (ht.y = e), rt = w.scrollingY ?
                        u : r, !0
                }
            }, wt = function(n) {
                yt && window.clearTimeout(yt);
                n && n.type === "resize" ? hi() : yt = setTimeout(
                    function() {
                        hi()
                    }, 100)
            }, hi = function(n) {
                var t, e, o, r;
                if (!k || !rt) return !1;
                yt && (window.clearTimeout(yt), yt = !1);
                pt(Date.now());
                r = {
                    x: !1,
                    y: !1
                };
                for (t in r) r.hasOwnProperty(t) && (g[t] === 0 ? r[t] = -
                    1 : g[t] <= b.scrollEnd[t] ? r[t] = 1 : g[t] *
                    2 <= b.scrollEnd[t] + 5 && g[t] * 2 >= b.scrollEnd[
                        t] - 5 && (r[t] = 0));
                e = k.offsetWidth;
                o = k.offsetHeight;
                var s = p.contentWidth || rt.offsetWidth,
                    h = p.contentHeight || rt.offsetHeight,
                    u = s,
                    f = h,
                    i = {
                        x: !1,
                        y: !1
                    };
                if (d.userX || (d.x = e), d.userY || (d.y = o), w.snapping &&
                    (u = d.userX ? Math.ceil(u / d.userX) * d.userX :
                        Math.ceil(u / d.x) * d.x, f = d.userY ? Math.ceil(
                            f / d.userY) * d.userY : Math.ceil(f / d.y) *
                        d.y), b.container.x !== e || b.container.y !==
                    o || b.content.x !== u || b.content.y !== f) {
                    b.container.x = e;
                    b.container.y = o;
                    b.content.x = u;
                    b.content.rawX = s;
                    b.content.y = f;
                    b.content.rawY = h;
                    b.scrollEnd.x = e - u;
                    b.scrollEnd.y = o - f;
                    fr();
                    !n && w.snapping && (ri(), i = ur(pr, g));
                    for (t in i)
                        if (i.hasOwnProperty(t)) {
                            if (b.container[t] < b.content[t] && wr &&
                                w.baseAlignments[t] !== r[t]) continue;
                            w.baseAlignments[t] === 1 ? i[t] = b.scrollEnd[
                                    t] : w.baseAlignments[t] === 0 ? i[
                                    t] = Math.floor(b.scrollEnd[t] / 2) :
                                w.baseAlignments[t] === -1 && (i[t] = 0)
                        }
                    w.scrollingX && i.x !== !1 && (st("x", i.x, 0), tt.x =
                        i.x);
                    w.scrollingY && i.y !== !1 && (st("y", i.y, 0), tt.y =
                        i.y)
                }
            }, fr = function() {
                w.scrollbars && (w.scrollingX && (ht.x.style.width =
                        Math.max(6, Math.round(b.container.x * (b.container
                            .x / b.content.x) - 4)) + "px"), w.scrollingY &&
                    (ht.y.style.height = Math.max(6, Math.round(b.container
                        .y * (b.container.y / b.content.y) -
                        4)) + "px"));
                nt = {};
                w.scrollingX && (b.content.x > b.container.x || w.alwaysScroll) &&
                    (nt.x = !0);
                w.scrollingY && (b.content.y > b.container.y || w.alwaysScroll) &&
                    (nt.y = !0)
            }, hu = function() {
                var n, i, t;
                for (n in nt) nt.hasOwnProperty(n) && (i = window.getComputedStyle(
                        ft[n], null)[u], t = i.split(", "), tt[n] =
                    t.length === 6 ? parseInt(t[n === "y" ? 5 : 4],
                        10) : parseInt(t[n === "y" ? 13 : 12], 10),
                    g[n] = tt[n])
            }, ri = function(n) {
                var i, t = {
                    x: 0,
                    y: 0
                };
                if (w.snapping) {
                    for (i in nt) nt.hasOwnProperty(i) && (t[i] = Math.max(
                        0, Math.min(Math.ceil(b.content[i] / d[
                            i]) - 1, Math.round(-g[i] / d[i]))));
                    (t.x !== fi.x || t.y !== fi.y) && (fi.x = t.x, fi.y =
                        t.y, ot("segmentwillchange", {
                            segmentX: t.x,
                            segmentY: t.y
                        }));
                    n && (t.x !== ci.x || t.y !== ci.y) && (ci.x = t.x,
                        ci.y = t.y, ot("segmentdidchange", {
                            segmentX: t.x,
                            segmentY: t.y
                        }))
                }
            }, st = function(n, i, r, u, f) {
                var s, o = null;
                if (!ft[n]) return !1;
                r ? (u || (u = w.flingBezier), s = t + "transform " + r +
                    "ms " + u.toString()) : s = "";
                ft[n].style[e] = s;
                w.scrollbars && (ht[n].style[e] = s);
                ft[n].style[h] = c + l[n] + i + "px" + a[n];
                w.scrollbars && (ht[n].style[h] = c + l[n] + -i * b.container[
                    n] / b.content[n] + "px" + a[n]);
                i >= 0 ? o = "start" : i <= b.scrollEnd[n] && (o =
                    "end");
                o !== nf[n] && (o !== null && (r ? et.push(setTimeout(
                    function() {
                        ot("reached" + o, {
                            axis: n
                        })
                    }, f || r)) : ot("reached" + o, {
                    axis: n
                })), nf[n] = o);
                r || (g[n] = i)
            }, er = function(n, t, i, r, u) {
                et.push(setTimeout(function() {
                    st(n, t, i, r)
                }, u))
            }, ot = function(n, t) {
                var i, u;
                for (t.srcObject = gu, i = 0, u = ct[n].length; i < u; i =
                    i + 1) try {
                    ct[n][i](t)
                } catch (r) {
                    window.console && window.console.error &&
                        window.console.error(r.message + " (" + r.sourceURL +
                            ", line " + r.line + ")")
                }
            }, or = function(n) {
                var e, t, s, i = yr(n.target),
                    r = yr(k),
                    u = {
                        x: "left",
                        y: "top"
                    },
                    o = {
                        x: "right",
                        y: "bottom"
                    },
                    f = {
                        x: "width",
                        y: "height"
                    };
                if (it === !1) {
                    for (t in nt)
                        if (nt.hasOwnProperty(t)) {
                            if (i[u[t]] >= r[u[t]] && i[o[t]] <= r[o[t]])
                                continue;
                            if (i[f[t]] > r[f[t]] && (s = i[f[t]] -
                                Math.max(0, r[u[t]] - i[u[t]]) -
                                Math.max(0, i[o[t]] - r[o[t]]), s >=
                                r[f[t]] / 2)) continue;
                            e = -Math.round(i[f[t]] / 2 - g[t] + i[u[t]] -
                                r[u[t]] - r[f[t]] / 2);
                            e = Math.min(0, Math.max(b.scrollEnd[t], e));
                            st(t, e, 0);
                            tt[t] = e
                        }
                    ot("scroll", {
                        scrollLeft: -tt.x,
                        scrollTop: -tt.y
                    })
                }
            }, sr = function(n, t) {
                if (!w.bouncing) return 0;
                var i = Math.exp(n / b.container[t]);
                return Math.round(b.container[t] * .6 * (i - 1) / (i +
                    1))
            }, cu = function(n) {
                var t, i, r = {};
                for (t in n) n.hasOwnProperty(t) && (i = n[t], r[t] = i >=
                    0 ? i : i > b.scrollEnd[t] ? -1 : b.scrollEnd[t] -
                    i);
                return r
            }, lu = function() {
                ni && (ui(), yi = ni(hr))
            }, hr = function hr() {
                var n;
                yi = ni(hr);
                for (n in nt) nt.hasOwnProperty(n) && pi[n] !== g[n] &&
                    st(n, pi[n])
            }, ui = function() {
                yi !== !1 && rr && (rr(yi), yi = !1)
            }, cr = function(t) {
                var i;
                k && (k._ftscrollerToggle = t ? k.addEventListener : k.removeEventListener,
                    f ? (k._ftscrollerToggle("MSPointerDown", pu, !
                        0), k._ftscrollerToggle("MSPointerMove",
                        wu, !0), k._ftscrollerToggle(
                        "MSPointerUp", bu, !0), k._ftscrollerToggle(
                        "MSPointerCancel", ku, !0)) : (v && !w.disabledInputMethods
                        .touch && (k._ftscrollerToggle("touchstart",
                            au, !0), k._ftscrollerToggle(
                            "touchmove", vu, !0), k._ftscrollerToggle(
                            "touchend", lr, !0), k._ftscrollerToggle(
                            "touchcancel", lr, !0)), w.disabledInputMethods
                        .mouse || (k._ftscrollerToggle("mousedown",
                            yu, !0), t || (document.removeEventListener(
                            "mousemove", wi, !0), document.removeEventListener(
                            "mouseup", bi, !0)))), w.disabledInputMethods
                    .scroll || (k._ftscrollerToggle(
                        "DOMMouseScroll", vr, !1), k._ftscrollerToggle(
                        "mousewheel", vr, !1)), f ? t ? document.addEventListener(
                        "click", ki, !0) : document.removeEventListener(
                        "click", ki, !0) : k._ftscrollerToggle(
                        "click", ki, !0), t ? (rt.addEventListener(
                            "focus", or, !0), w.updateOnChanges &&
                        (ei || (i = window.MutationObserver ||
                            window.WebKitMutationObserver ||
                            window[n + "MutationObserver"], i &&
                            (ei = new i(wt))), ei ? ei.observe(
                            rt, {
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            }) : rt.addEventListener(
                            "DOMSubtreeModified", function(n) {
                                n && (n.srcElement === rt || n.srcElement
                                    .className.indexOf(
                                        "ftscroller_") !==
                                    -1) || wt()
                            }, !0), rt.addEventListener("load",
                            wt, !0)), w.updateOnWindowResize &&
                        window.addEventListener("resize", wt, !0)) :
                    (rt.removeEventListener("focus", or, !0), ei ?
                        ei.disconnect() : rt.removeEventListener(
                            "DOMSubtreeModified", wt, !0), rt.removeEventListener(
                            "load", wt, !0), window.removeEventListener(
                            "resize", wt, !0)), delete k._ftscrollerToggle
                )
            }, au = function(n) {
                var t, r, i;
                if (it) {
                    for (t = 0, r = n.touches.length; t < r; t = t + 1)
                        n.touches[t].identifier === it && (li = t);
                    return
                }
                i = n.touches[0];
                it = i.identifier;
                li = 0;
                si(i.clientX, i.clientY, n.timeStamp, n)
            }, vu = function(n) {
                if (it !== !1) {
                    var t = n.touches[li];
                    ti(t.clientX, t.clientY, n.timeStamp, n)
                }
            }, lr = function(n) {
                var t, i;
                if (n.touches)
                    for (t = 0, i = n.touches.length; t < i; t = t + 1)
                        if (n.touches[t].identifier === it) {
                            li = t;
                            return
                        }
                pt(n.timeStamp, n)
            }, yu = function(n) {
                n.button && n.button === 2 || n.ctrlKey || (k.setCapture &&
                    k.setCapture(), document.addEventListener(
                        "mousemove", wi, !0), document.addEventListener(
                        "mouseup", bi, !0), it = n.button || 1, li =
                    0, si(n.clientX, n.clientY, n.timeStamp, n))
            }, wi = function(n) {
                it && ti(n.clientX, n.clientY, n.timeStamp, n)
            }, bi = function bi(n) {
                n.button && n.button !== it || (document.removeEventListener(
                        "mousemove", wi, !0), document.removeEventListener(
                        "mouseup", bi, !0), k.releaseCapture && k.releaseCapture(),
                    pt(n.timeStamp, n))
            }, pu = function(n) {
                if (!it) {
                    if (n.pointerType === n.MSPOINTER_TYPE_TOUCH) {
                        if (w.disabledInputMethods.touch) return
                    } else if (w.disabledInputMethods.mouse) return;
                    it = n.pointerId;
                    du();
                    si(n.clientX, n.clientY, n.timeStamp, n)
                }
            }, wu = function(n) {
                it === n.pointerId && ti(n.clientX, n.clientY, n.timeStamp,
                    n)
            }, bu = function(n) {
                it === n.pointerId && pt(n.timeStamp, n)
            }, ku = function(n) {
                pt(n.timeStamp, n)
            }, ar = function(n) {
                pt(n.timeStamp, n)
            }, ki = function(n) {
                return !vi && !it ? !0 : (n.preventDefault(), n.stopPropagation(),
                    it || (vi = !1), !1)
            }, vr = function(n) {
                var t, r;
                if (it !== "scrollwheel") {
                    if (it !== !1) return !0;
                    if (it = "scrollwheel", kt.x = 0, kt.y = 0, !si(n.clientX,
                        n.clientY, Date.now(), n)) return
                }
                n.wheelDelta ? n.wheelDeltaX ? (t = n.wheelDeltaX / 2,
                    r = n.wheelDeltaY / 2) : (t = 0, r = n.wheelDelta /
                    2) : n.axis && n.axis === n.HORIZONTAL_AXIS ? (
                    t = n.detail * -10, r = 0) : (t = 0, r = n.detail *
                    -10);
                w.scrollingY || t || (t = r, r = 0);
                kt.x = Math.round(kt.x + t);
                kt.y = Math.round(kt.y + r);
                ti(gt.x + kt.x, gt.y + kt.y, n.timeStamp, n);
                br && clearTimeout(br);
                br = setTimeout(function() {
                    it = !1;
                    di();
                    dt = !1;
                    ai = !1;
                    i = !1;
                    w.windowScrollingActiveFlag && (window[w.windowScrollingActiveFlag] = !
                        1);
                    ui();
                    ii() || at()
                }, 300)
            }, du = function() {
                nr || it === !1 || it === "scrollwheel" || (f && (k.msSetPointerCapture(
                    it), k.addEventListener(
                    "MSLostPointerCapture", ar, !1)), nr = !0)
            }, di = function() {
                nr && (f && (k.removeEventListener(
                    "MSLostPointerCapture", ar, !1), k.msReleasePointerCapture(
                    it)), nr = !1)
            }, yr = function(n) {
                if (n.getBoundingClientRect) return n.getBoundingClientRect();
                for (var i = 0, r = 0, t = n; t;) i = i + t.offsetLeft -
                    t.scrollLeft, r = r + t.offsetTop - t.scrollTop, t =
                    t.offsetParent;
                return {
                    left: i,
                    top: r,
                    width: n.offsetWidth,
                    height: n.offsetHeight
                }
            }, ou(), hi(), cr(!0), gu = {
                destroy: kr,
                setSnapSize: dr,
                scrollTo: oi,
                scrollBy: gr,
                updateDimensions: nu,
                addEventListener: tu,
                removeEventListener: iu,
                get scrollHeight() {
                    return b.content.y
                },
                set scrollHeight(n) {
                    throw new SyntaxError(
                        "scrollHeight is currently read-only - ignoring " +
                        n);
                },
                get scrollLeft() {
                    return -g.x
                },
                set scrollLeft(n) {
                    return oi(n, !1, !1), -g.x
                },
                get scrollTop() {
                    return -g.y
                },
                set scrollTop(n) {
                    return oi(!1, n, !1), -g.y
                },
                get scrollWidth() {
                    return b.content.x
                },
                set scrollWidth(n) {
                    throw new SyntaxError(
                        "scrollWidth is currently read-only - ignoring " +
                        n);
                },
                get segmentCount() {
                    return w.snapping ? {
                        x: Math.ceil(b.content.x / d.x),
                        y: Math.ceil(b.content.y / d.y)
                    } : {
                        x: NaN,
                        y: NaN
                    }
                },
                set segmentCount(n) {
                    throw new SyntaxError(
                        "segmentCount is currently read-only - ignoring " +
                        n);
                },
                get currentSegment() {
                    return {
                        x: fi.x,
                        y: fi.y
                    }
                },
                set currentSegment(n) {
                    throw new SyntaxError(
                        "currentSegment is currently read-only - ignoring " +
                        n);
                },
                get contentContainerNode() {
                    return rt
                },
                set contentContainerNode(n) {
                    throw new SyntaxError(
                        "contentContainerNode is currently read-only - ignoring " +
                        n);
                }
            }
    };
    FTScroller.prototype.getPrependedHTML = function(n, t, i) {
        i || (i = typeof FTScrollerOptions == "object" &&
            FTScrollerOptions.hwAccelerationClass ?
            FTScrollerOptions.hwAccelerationClass :
            "ftscroller_hwaccelerated");
        var r = '<div class="ftscroller_container">';
        return n || (r += '<div class="ftscroller_x ' + i + '">'), t ||
            (r += '<div class="ftscroller_y ' + i + '">'), r
    };
    FTScroller.prototype.getAppendedHTML = function(n, t, i, r) {
        i || (i = typeof FTScrollerOptions == "object" &&
            FTScrollerOptions.hwAccelerationClass ?
            FTScrollerOptions.hwAccelerationClass :
            "ftscroller_hwaccelerated");
        var u = "";
        return n || (u += "<\/div>"), t || (u += "<\/div>"), r && (n ||
            (u +=
                '<div class="ftscroller_scrollbar ftscroller_scrollbarx ' +
                i +
                '"><div class="ftscroller_scrollbarinner"><\/div><\/div>'
            ), t || (u +=
                '<div class="ftscroller_scrollbar ftscroller_scrollbary ' +
                i +
                '"><div class="ftscroller_scrollbarinner"><\/div><\/div>'
            )), u + "<\/div>"
    }
})(),
function() {
    "use strict";

    function n(n, t) {
        throw new RangeError('"' + n +
            '" must be a number between 0 and 1. Got ' + t +
            " instead.");
    }
    CubicBezier = function(t, i, r, u) {
        t >= 0 && t <= 1 || n("p1x", t);
        i >= 0 && i <= 1 || n("p1y", i);
        r >= 0 && r <= 1 || n("p2x", r);
        u >= 0 && u <= 1 || n("p2y", u);
        this._p1 = {
            x: t,
            y: i
        };
        this._p2 = {
            x: r,
            y: u
        }
    };
    CubicBezier.prototype._getCoordinateForT = function(n, t, i) {
        var r = 3 * t,
            u = 3 * (i - t) - r,
            f = 1 - r - u;
        return ((f * n + u) * n + r) * n
    };
    CubicBezier.prototype._getCoordinateDerivateForT = function(n, t, i) {
        var r = 3 * t,
            u = 3 * (i - t) - r,
            f = 1 - r - u;
        return (3 * f * n + 2 * u) * n + r
    };
    CubicBezier.prototype._getTForCoordinate = function(n, t, i, r) {
        var u, s, e, h, f, o;
        if (!isFinite(r) || r <= 0) throw new RangeError(
            '"epsilon" must be a number greater than 0.');
        for (u = n, s = 0; s < 8; s = s + 1) {
            if (e = this._getCoordinateForT(u, t, i) - n, Math.abs(e) < r)
                return u;
            if (h = this._getCoordinateDerivateForT(u, t, i), Math.abs(h) <
                1e-6) break;
            u = u - e / h
        }
        if (u = n, f = 0, o = 1, u < f) return f;
        if (u > o) return o;
        while (f < o) {
            if (e = this._getCoordinateForT(u, t, i), Math.abs(e - n) < r)
                return u;
            n > e ? f = u : o = u;
            u = (o - f) * .5 + f
        }
        return u
    };
    CubicBezier.prototype.getPointForT = function(t) {
        return t === 0 || t === 1 ? {
            x: t,
            y: t
        } : ((t < 0 || t > 1) && n("t", t), {
            x: this._getCoordinateForT(t, this._p1.x, this._p2.x),
            y: this._getCoordinateForT(t, this._p1.y, this._p2.y)
        })
    };
    CubicBezier.prototype.getTForX = function(n, t) {
        return this._getTForCoordinate(n, this._p1.x, this._p2.x, t)
    };
    CubicBezier.prototype.getTForY = function(n, t) {
        return this._getTForCoordinate(n, this._p1.y, this._p2.y, t)
    };
    CubicBezier.prototype._getAuxPoints = function(t) {
        (t <= 0 || t >= 1) && n("t", t);
        var r = {
                x: t * this._p1.x,
                y: t * this._p1.y
            },
            i = {
                x: this._p1.x + t * (this._p2.x - this._p1.x),
                y: this._p1.y + t * (this._p2.y - this._p1.y)
            },
            f = {
                x: this._p2.x + t * (1 - this._p2.x),
                y: this._p2.y + t * (1 - this._p2.y)
            },
            u = {
                x: r.x + t * (i.x - r.x),
                y: r.y + t * (i.y - r.y)
            },
            e = {
                x: i.x + t * (f.x - i.x),
                y: i.y + t * (f.y - i.y)
            },
            o = {
                x: u.x + t * (e.x - u.x),
                y: u.y + t * (e.y - u.y)
            };
        return {
            i0: r,
            i1: i,
            i2: f,
            j0: u,
            j1: e,
            k: o
        }
    };
    CubicBezier.prototype.divideAtT = function(t) {
        var o;
        if ((t < 0 || t > 1) && n("t", t), t === 0 || t === 1) return o = [],
            o[t] = CubicBezier.linear(), o[1 - t] = this.clone(), o;
        var i = {},
            r = {},
            e = this._getAuxPoints(t),
            s = e.i0,
            h = e.i2,
            c = e.j0,
            l = e.j1,
            a = e.k,
            u = a.x,
            f = a.y;
        return i.p1 = {
            x: s.x / u,
            y: s.y / f
        }, i.p2 = {
            x: c.x / u,
            y: c.y / f
        }, r.p1 = {
            x: (l.x - u) / (1 - u),
            y: (l.y - f) / (1 - f)
        }, r.p2 = {
            x: (h.x - u) / (1 - u),
            y: (h.y - f) / (1 - f)
        }, [new CubicBezier(i.p1.x, i.p1.y, i.p2.x, i.p2.y), new CubicBezier(
            r.p1.x, r.p1.y, r.p2.x, r.p2.y)]
    };
    CubicBezier.prototype.divideAtX = function(t, i) {
        (t < 0 || t > 1) && n("x", t);
        var r = this.getTForX(t, i);
        return this.divideAtT(r)
    };
    CubicBezier.prototype.divideAtY = function(t, i) {
        (t < 0 || t > 1) && n("y", t);
        var r = this.getTForY(t, i);
        return this.divideAtT(r)
    };
    CubicBezier.prototype.clone = function() {
        return new CubicBezier(this._p1.x, this._p1.y, this._p2.x, this._p2
            .y)
    };
    CubicBezier.prototype.toString = function() {
        return "cubic-bezier(" + [this._p1.x, this._p1.y, this._p2.x, this._p2
            .y].join(", ") + ")"
    };
    CubicBezier.linear = function() {
        return new CubicBezier
    };
    CubicBezier.ease = function() {
        return new CubicBezier(.25, .1, .25, 1)
    };
    CubicBezier.linear = function() {
        return new CubicBezier(0, 0, 1, 1)
    };
    CubicBezier.easeIn = function() {
        return new CubicBezier(.42, 0, 1, 1)
    };
    CubicBezier.easeOut = function() {
        return new CubicBezier(0, 0, .58, 1)
    };
    CubicBezier.easeInOut = function() {
        return new CubicBezier(.42, 0, .58, 1)
    }
}();
module !== undefined && module.exports && (module.exports = function(n, t) {
        "use strict";
        return new FTScroller(n, t)
    }, module.exports.FTScroller = FTScroller, module.exports.CubicBezier =
    CubicBezier);
(function(n, t, i) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.scroller = t.ui.scroller || {};
    t.ui.scroller.contentScroller = null;
    t.ui.scroller.gamesListScroller = null;
    t.ui.scroller.gamesCategoriesScroller = null;
    t.ui.scroller.init = function() {
        t.ui.scroller.refresh()
    };
    t.ui.scroller.gamesListRefresh = function(n) {
        if ((t.ui.scroller.contentScroller !== null && t.ui.scroller.contentScroller
            .destroy(!0), t.ui.scroller.gamesListScroller !== null &&
            t.ui.scroller.gamesListScroller.destroy(!0), document.getElementById(
                "lobbyGamesList") && (t.ui.scroller.gamesListScroller =
                new FTScroller(document.getElementById(
                    "lobbyGamesList"), {
                    scrollbars: !0,
                    scrollingX: !1,
                    bouncing: !1
                })), !t.ui.scroller.gamesCategoriesScroller || t.ui
            .scroller.gamesCategoriesScroller.contentContainerNode ===
            null || n) && (t.ui.scroller.gamesCategoriesScroller !==
            null && t.ui.scroller.gamesCategoriesScroller.destroy(!
                0), document.getElementById(
                "lobbyCategoriesScroller"))) {
            var i = !1;
            t.ui && t.ui.orientation && (i = t.ui.orientation.currentOrientation ===
                t.enums.orientation.PORTRAIT ? !1 : !0);
            t.ui.scroller.gamesCategoriesScroller = new FTScroller(
                document.getElementById("lobbyCategoriesScroller"), {
                    scrollbars: !1,
                    scrollingY: i,
                    bouncing: !1
                })
        }
    };
    t.ui.scroller.contentRefresh = function() {
        t.ui.scroller.contentScroller !== null && t.ui.scroller.contentScroller
            .destroy(!0);
        t.ui.scroller.gamesListScroller !== null && t.ui.scroller.gamesListScroller
            .destroy(!0);
        t.ui.scroller.gamesCategoriesScroller !== null && t.ui.scroller
            .gamesCategoriesScroller.destroy(!0);
        t.ui.hasLayoutClass("no-nav") || document.getElementById(
            "lobbyContent") && (t.ui.scroller.contentScroller = new FTScroller(
            document.getElementById("lobbyContent"), {
                scrollbars: !0,
                scrollingX: !1,
                bouncing: !1
            }))
    };
    t.ui.scroller.refresh = function(n) {
        i("#lobbyGamesList")
            .length > 0 && i("#contentContainer")
            .is(":visible") ? (n = typeof n == "undefined" ? !1 : n, t.config
                .Core.DeviceInfo.IsLegacy ? setTimeout(function() {
                    t.ui.scroller.gamesListRefresh(n)
                }, 600) : t.ui.scroller.gamesListRefresh(n)) : t.config
            .Core.DeviceInfo.IsLegacy ? setTimeout(function() {
                t.ui.scroller.contentRefresh()
            }, 600) : t.ui.scroller.contentRefresh()
    };
    t.ui.scroller.getMainContainer = function() {
        return t.ui.scroller.contentScroller !== null ? t.ui.scroller.contentScroller :
            t.ui.scroller.gamesListScroller !== null ? t.ui.scroller.gamesListScroller :
            null
    }
})(window, lobby, jQuery);
(function(n, t) {
    t = t || (n.lobby = {});
    t.ui = t.ui || {};
    t.ui.scroller = t.ui.scroller || {};
    t.ui.scroller.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Ui Scroller Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.start", function() {
                    n.loadPublish();
                    t.ui.scroller.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("marshal.viewLoaded.*", function() {
                t.ui.scroller.refresh()
            });
            t.signal.subscribe("marshal.viewLoaded.games.*",
                function() {
                    t.ui.scroller.refresh()
                });
            t.signal.subscribe("lobby.ui.orientation.changed.*",
                function() {
                    t.ui.scroller.refresh(!0)
                })
        },
        loadPublish: function() {}
    };
    t.ui.scroller.signals.init()
})(window, lobby);
(function(n, t) {
    t = t || (n.lobby = {});
    t.virtualPitBoss = t.virtualPitBoss || {};
    t.virtualPitBoss.pendingMessage = !1;
    t.virtualPitBoss.currentMessage = {};
    t.virtualPitBoss.onHoldMessage = null;
    t.virtualPitBoss.timer = null;
    t.virtualPitBoss.timerDelay = 1e4;
    t.virtualPitBoss.init = function() {
        t.config.VirtualPitBoss.TimerDelay && (t.virtualPitBoss.timerDelay =
            t.config.VirtualPitBoss.TimerDelay);
        t.virtualPitBoss.createTimer()
    };
    t.virtualPitBoss.createTimer = function(n) {
        n = typeof n == "undefined" ? !0 : n;
        t.virtualPitBoss.timer || (t.logging.logDebug(
                "Virtual Pit Boss: Timer Initialized"), t.virtualPitBoss
            .timer = new t.utils.timer(t.virtualPitBoss.timerDelay,
                t.virtualPitBoss.checkForNewMessage), n && t.virtualPitBoss
            .startTimer())
    };
    t.virtualPitBoss.show = function() {
        t.overlayMessage.view.showOverlay()
    };
    t.virtualPitBoss.hide = function() {
        t.overlayMessage.view.hideOverlay()
    };
    t.virtualPitBoss.checkForPendingMessage = function() {
        t.virtualPitBoss.pendingMessage && (t.logging.logTrace(
                "Virtual Pit Boss: There is a Pending Message"), t.virtualPitBoss
            .checkForNewMessage())
    };
    t.virtualPitBoss.startTimer = function() {
        t.player.getPlayerServiceLoginState() !== 1 ? (t.logging.logTrace(
                "Virtual Pit Boss: Timer Started"), t.virtualPitBoss
            .timer ? t.virtualPitBoss.timer.start() : t.virtualPitBoss
            .createTimer(!0)) : t.logging.logTrace(
            "Virtual Pit Boss: Cannot Start Timer, Not Logged In")
    };
    t.virtualPitBoss.stopTimer = function() {
        t.logging.logTrace("Virtual Pit Boss: Timer Stopped");
        t.virtualPitBoss.timer ? t.virtualPitBoss.timer.stop() : t.virtualPitBoss
            .createTimer(!1)
    };
    t.virtualPitBoss.isViewExcluded = function(n) {
        return t.config.VirtualPitBoss.ExcludedViews && t.config.VirtualPitBoss
            .ExcludedViews.indexOf(n) !== -1 ? !0 : !1
    };
    t.virtualPitBoss.checkForNewMessage = function() {
        t.virtualPitBoss.isViewExcluded(t.marshal.registry.findUrlInStore(
            t.marshal.currentUrl)) || (t.logging.logTrace(
                "Virtual Pit Boss: Check for new Message"), t.virtualPitBoss
            .onHoldMessage === null ? t.player.playerService.getNextVPBMessage()
            .done(function(n, i, r) {
                n ? i.Message !== null ? (t.virtualPitBoss.receivedMessage(
                        i), t.logging.logTrace(
                        "Virtual Pit Boss: Parsing Received Message"
                    )) : t.logging.logTrace(
                        "Virtual Pit Boss: No Current Message") :
                    r && r.message ? t.logging.logWarn(
                        "Virtual Pit Boss: Check VPB Error - " +
                        r.message) : t.logging.logWarn(
                        "Virtual Pit Boss: Check VPB Error - Unknown"
                    )
            })
            .fail(function(n, i, r) {
                t.logging.logError(JSON.stringify(r, null, 4))
            }) : (t.virtualPitBoss.currentMessage = t.virtualPitBoss
                .onHoldMessage, t.virtualPitBoss.onHoldMessage =
                null, t.virtualPitBoss.parseCurrentMessage()))
    };
    t.virtualPitBoss.receivedMessage = function(n) {
        t.virtualPitBoss.isViewExcluded(t.marshal.registry.findUrlInStore(
            t.marshal.currentUrl)) ? (t.virtualPitBoss.onHoldMessage =
            n.Message, t.logging.logTrace(
                "Virtual Pit Boss: Not allowed to display message in current view"
            ), t.logging.logDebug(
                "Virtual Pit Boss: Current message held")) : n && (
            t.virtualPitBoss.pendingMessage = n.PendingMessage, n.Message !==
            null && (t.virtualPitBoss.currentMessage = n.Message, t
                .virtualPitBoss.parseCurrentMessage()))
    };
    t.virtualPitBoss.parseCurrentMessage = function() {
        t.overlayMessage.view.reset();
        t.virtualPitBoss.loadSimpleMessage()
    };
    t.virtualPitBoss.loadSimpleMessage = function() {
        var n = !1;
        switch (t.virtualPitBoss.currentMessage.MessageType) {
            case t.enums.vpbMessageTypes.LAUNCHOLR:
                typeof t.registration == "undefined" || t.player.getRealUsername() ||
                    (t.virtualPitBoss.loadSimpleMessageInfo(), t.virtualPitBoss
                        .loadSimpleMessageButton(t.languageStringProvider
                            .getString(
                                "lobby.virtualPitBoss.registerNow"), t.virtualPitBoss
                            .actionButtonLaunchOLR), n = !0);
                break;
            case t.enums.vpbMessageTypes.LAUNCHGAME:
                t.utils.games.getGameName(t.virtualPitBoss.currentMessage
                    .Game.ModuleId, t.virtualPitBoss.currentMessage
                    .Game.ClientId) && (t.virtualPitBoss.loadSimpleMessageInfo(),
                    t.virtualPitBoss.loadSimpleMessageButton(t.languageStringProvider
                        .getString("lobby.virtualPitBoss.playNow"),
                        t.virtualPitBoss.actionButtonLaunchGame), t
                    .virtualPitBoss.loadGameImage(), n = !0);
                break;
            case t.enums.vpbMessageTypes.LAUNCHBANKING:
                t.virtualPitBoss.loadSimpleMessageInfo();
                t.virtualPitBoss.loadSimpleMessageButton(t.languageStringProvider
                    .getString("lobby.virtualPitBoss.depositNow"),
                    t.virtualPitBoss.actionButtonLaunchBanking);
                n = !0;
                break;
            case t.enums.vpbMessageTypes.LAUNCHWEBPAGE:
                t.virtualPitBoss.loadSimpleMessageInfo();
                t.virtualPitBoss.loadSimpleMessageButton(t.languageStringProvider
                    .getString("lobby.virtualPitBoss.tapHere"), t.virtualPitBoss
                    .actionButtonExternalLink);
                n = !0;
                break;
            case t.enums.vpbMessageTypes.DISPLAYMESSAGE:
                t.virtualPitBoss.loadSimpleMessageInfo();
                n = !0;
                break;
            case t.enums.vpbMessageTypes.LAUNCHMYACCOUNT:
                t.virtualPitBoss.loadSimpleMessageInfo();
                t.virtualPitBoss.loadSimpleMessageButton(t.languageStringProvider
                    .getString("lobby.virtualPitBoss.openMyAccount"),
                    t.virtualPitBoss.actionButtonLaunchMyAccount);
                n = !0
        }
        n ? t.virtualPitBoss.show() : t.virtualPitBoss.pendingMessage &&
            (t.logging.logTrace(
                "Virtual Pit Boss: Cannot show current message therefore Pending Message Waiting."
            ), t.virtualPitBoss.checkForNewMessage())
    };
    t.virtualPitBoss.loadGameImage = function() {
        t.config.VirtualPitBoss.GameImages.indexOf(t.virtualPitBoss.currentMessage
            .Game.ModuleId + "_" + t.virtualPitBoss.currentMessage.Game
            .ClientId) !== -1 && t.overlayMessage.view.setGameImage(
            t.virtualPitBoss.currentMessage.Game.ModuleId, t.virtualPitBoss
            .currentMessage.Game.ClientId)
    };
    t.virtualPitBoss.loadSimpleMessageInfo = function() {
        t.overlayMessage.view.setTitle(t.virtualPitBoss.currentMessage.Title);
        t.overlayMessage.view.setBody(t.virtualPitBoss.currentMessage.Message)
    };
    t.virtualPitBoss.loadSimpleMessageButton = function(n, i) {
        var r = t.virtualPitBoss.currentMessage.HyperLink ? t.virtualPitBoss
            .currentMessage.HyperLink : n;
        t.overlayMessage.view.setButtonText(r);
        t.overlayMessage.view.showActionButton();
        t.overlayMessage.currentButtonAction = i
    };
    t.virtualPitBoss.actionButtonLaunchOLR = function() {
        t.virtualPitBoss.hide();
        t.player.logout("Registration")
    };
    t.virtualPitBoss.actionButtonLaunchGame = function() {
        var n = t.utils.games.getGameName(t.virtualPitBoss.currentMessage
            .Game.ModuleId, t.virtualPitBoss.currentMessage.Game.ClientId
        );
        t.overlayMessage.view.showProcessing();
        t.marshal.loadURL("Game/" + n)
    };
    t.virtualPitBoss.actionButtonLaunchBanking = function() {
        t.virtualPitBoss.hide();
        t.marshal.loadURL("Banking")
    };
    t.virtualPitBoss.actionButtonExternalLink = function() {
        t.overlayMessage.view.showProcessing();
        t.utils.viewLoader.externalLink.loadView(t.virtualPitBoss.currentMessage
            .URL, !1)
    };
    t.virtualPitBoss.actionButtonLaunchMyAccount = function() {
        t.virtualPitBoss.hide();
        t.marshal.loadURL("MyAccount")
    }
})(window, lobby, jQuery);
/*!
 * Virtual Pit Boss (VPB)
 *
 */
(function(n, t) {
    t = t || (n.lobby = {});
    t.virtualPitBoss = t.virtualPitBoss || {};
    t.virtualPitBoss.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Virtual Pit Boss Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.loaded", function() {
                    n.loadPublish();
                    t.virtualPitBoss.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("overlayMessage.hide", function() {
                t.virtualPitBoss.checkForPendingMessage();
                t.virtualPitBoss.startTimer()
            });
            t.signal.subscribe("overlayMessage.show", function() {
                t.virtualPitBoss.stopTimer()
            });
            t.signal.subscribe("marshal.viewLoaded.*", function(n) {
                t.virtualPitBoss.isViewExcluded(n.view) ? t
                    .virtualPitBoss.stopTimer() : t.virtualPitBoss
                    .startTimer()
            });
            t.signal.subscribe("marshal.viewLoaded.games.*",
                function() {
                    t.virtualPitBoss.startTimer()
                });
            t.signal.subscribe("login.success", function() {
                t.virtualPitBoss.startTimer()
            });
            t.signal.subscribe("logout.success", function() {
                t.virtualPitBoss.stopTimer()
            })
        },
        loadPublish: function() {}
    };
    t.virtualPitBoss.signals.init()
})(window, lobby);
(function(n, t, i, r, u) {
    t = t || (n.lobby = {});
    t.migration = t.migration || {};
    t.migration.isMigrating = !1;
    t.migration.accountDetails = {
        autoLogin: u,
        sound: u,
        username: u,
        password: u,
        passwordKey: u,
        bannerTag1: u,
        bannerTag2: u,
        bannerTag3: u,
        bannerTag4: u,
        bannerTag5: u
    };
    t.migration.init = function() {
        t.marshal.registerURL("Migrate", t.migration);
        t.marshal.registerURL("MigrateLogin", t.migration);
        (t.config.InitialView === "migrate" || t.config.InitialView ===
            "migratelogin") && (t.migration.isMigrating = !0, t.marshal
            .processLoadInitialStartURL = !1);
        t.migration.setLocalStorage();
        t.requireLoaded();
        t.logging.logDebug("Migration Loaded")
    };
    t.migration.setLocalStorage = function() {
        var n = t.config.FormCollection,
            i;
        if (n)
            for (i in n) localStorage.setItem(i, n[i])
    };
    t.migration.migrateAccount = function() {
        t.spinner.start();
        t.migration.setAccountDetails();
        t.logging.logDebug("Migrating account");
        t.localStorage.exists("username") || t.utils.isNullorEmpty(t.migration
            .accountDetails.username) || t.localStorage.set(
            "username", t.migration.accountDetails.username);
        t.utils.isNullorEmpty(t.migration.accountDetails.autoLogin) ||
            t.localStorage.set("autoLogin", t.migration.accountDetails.autoLogin);
        t.utils.isNullorEmpty(t.migration.accountDetails.sound) || t.localStorage
            .set("sound", t.migration.accountDetails.sound);
        t.utils.isNullorEmpty(t.migration.accountDetails.practicePassword) ||
            t.localStorage.set("practicePassword", t.migration.accountDetails
                .practicePassword);
        t.utils.isNullorEmpty(t.migration.accountDetails.practiceUsername) ||
            t.localStorage.set("practiceUsername", t.migration.accountDetails
                .practiceUsername);
        t.localStorage.exists("bannerTag1") || t.utils.isNullorEmpty(t.migration
            .accountDetails.bannerTag1) || t.localStorage.set(
            "bannerTag1", t.migration.accountDetails.bannerTag1);
        t.localStorage.exists("bannerTag2") || t.utils.isNullorEmpty(t.migration
            .accountDetails.bannerTag2) || t.localStorage.set(
            "bannerTag2", t.migration.accountDetails.bannerTag2);
        t.localStorage.exists("bannerTag3") || t.utils.isNullorEmpty(t.migration
            .accountDetails.bannerTag3) || t.localStorage.set(
            "bannerTag3", t.migration.accountDetails.bannerTag3);
        t.localStorage.exists("bannerTag4") || t.utils.isNullorEmpty(t.migration
            .accountDetails.bannerTag4) || t.localStorage.set(
            "bannerTag4", t.migration.accountDetails.bannerTag4);
        t.localStorage.exists("bannerTag5") || t.utils.isNullorEmpty(t.migration
            .accountDetails.bannerTag5) || t.localStorage.set(
            "bannerTag5", t.migration.accountDetails.bannerTag5);
        t.utils.isNullorEmpty(t.migration.accountDetails.password) ? t.migration
            .migrationComplete(!0) : ((t.migration.accountDetails.autoLogin ||
                    t.config.InitialView === "migratelogin") && !t.login
                .isLoggedIn(t.migration.migrateAccount) ? t.migration.loginUser() :
                t.migration.migrationComplete(!0), n.localStorage.removeItem(
                    t.migration.accountDetails.passwordKey));
        t.logging.logDebug("Account migrated")
    };
    t.migration.migrationComplete = function(n) {
        t.config.InitialView === "migratelogin" && t.player.settings.setAutoLogin(
            t.migration.accountDetails.autoLogin ? !0 : !1);
        t.migration.isMigrating = !1;
        n && t.marshal.loadURL(t.utils.getCurrentRoute())
    };
    t.migration.setAccountDetails = function() {
        for (var u = n.lobbyConfig.Core.LobbyName, i = 0; i < n.localStorage
            .length; i++) n.localStorage.key(i)
            .indexOf(u + ".account.password") !== -1 && (t.migration.accountDetails
                .password = n.localStorage.getItem(n.localStorage.key(i)),
                t.migration.accountDetails.passwordKey = n.localStorage
                .key(i)), n.localStorage.key(i)
            .indexOf(u + ".account.username") !== -1 && (t.migration.accountDetails
                .username = n.localStorage.getItem(n.localStorage.key(i))
            ), n.localStorage.key(i)
            .indexOf(u + ".lobby.autoLogin") !== -1 && (t.migration.accountDetails
                .autoLogin = n.localStorage.getItem(n.localStorage.key(
                    i)) == "true"), n.localStorage.key(i)
            .indexOf(u + ".soundsEnabled") !== -1 && (t.migration.accountDetails
                .sound = n.localStorage.getItem(n.localStorage.key(i)) ==
                "true"), n.localStorage.key(i)
            .indexOf(u + ".lobby.bannerTag1") !== -1 && (t.migration.accountDetails
                .bannerTag1 = n.localStorage.getItem(n.localStorage.key(
                    i))), n.localStorage.key(i)
            .indexOf(u + ".lobby.bannerTag2") !== -1 && (t.migration.accountDetails
                .bannerTag2 = n.localStorage.getItem(n.localStorage.key(
                    i))), n.localStorage.key(i)
            .indexOf(u + ".lobby.bannerTag3") !== -1 && (t.migration.accountDetails
                .bannerTag3 = n.localStorage.getItem(n.localStorage.key(
                    i))), n.localStorage.key(i)
            .indexOf(u + ".lobby.bannerTag4") !== -1 && (t.migration.accountDetails
                .bannerTag4 = n.localStorage.getItem(n.localStorage.key(
                    i))), n.localStorage.key(i)
            .indexOf(u + ".lobby.bannerTag5") !== -1 && (t.migration.accountDetails
                .bannerTag5 = n.localStorage.getItem(n.localStorage.key(
                    i))), n.localStorage.key(i)
            .indexOf(u + ".account.practicePassword") !== -1 && (t.migration
                .accountDetails.practicePassword = r.decrypt(n.localStorage
                    .getItem(n.localStorage.key(i)) ? n.localStorage.getItem(
                        n.localStorage.key(i)) : "", n.lobbyConfig.Core
                    .EncKey)), n.localStorage.key(i)
            .indexOf(u + ".account.practiceUsername") !== -1 && (t.migration
                .accountDetails.practiceUsername = n.localStorage.getItem(
                    n.localStorage.key(i)));
        t.logging.logTrace(t.migration.accountDetails,
            "Retrieved account values from migration")
    };
    t.migration.loginUser = function() {
        var i = {
            username: t.migration.accountDetails.username,
            password: r.decrypt(t.migration.accountDetails.password ?
                t.migration.accountDetails.password : "", n.lobbyConfig
                .Core.EncKey),
            autologin: t.config.InitialView === "migratelogin" || t
                .migration.accountDetails.autoLogin
        };
        t.migration.signals.loadLoginSignalSubscribe();
        t.login.backgroundLogin(i)
    };
    t.migration.getState = function() {
        return t.migration.isMigrating ? "Display" : "Completed"
    };
    t.migration.loadView = function() {};
    t.require()
})(window, lobby, jQuery, Tea);
(function(n, t) {
    t = t || (n.lobby = {});
    t.migration = t.migration || {};
    t.migration.signals = {
        init: function() {
            var n = this;
            n.loadSubscribe();
            t.logging.logDebug("Migration Signals Loaded")
        },
        loadSubscribe: function() {
            var n = this;
            t.signal.subscribe("lobby.start", function() {
                    n.loadPublish();
                    t.migration.init()
                })
                .disposeAfter(1);
            t.signal.subscribe("lobby.loaded", function() {
                    (t.config.InitialView === "migrate" || t.config
                        .InitialView === "migratelogin") && t.migration
                        .migrateAccount()
                })
                .disposeAfter(1)
        },
        loadPublish: function() {},
        loadLoginSignalSubscribe: function() {
            var n, i, r = function() {
                n && n.unsubscribe();
                i && i.unsubscribe();
                t.migration.migrationComplete(!0)
            };
            n = t.signal.subscribe("login.success", r)
                .disposeAfter(1);
            i = t.signal.subscribe("login.fail", r)
                .disposeAfter(1)
        }
    };
    t.migration.signals.init()
})(window, lobby);
(function(n, t) {
    t(document)
        .ready(function() {
            n.logging.logDebug("Lobby Data Loaded");
            n.start()
        })
})(lobby, jQuery);