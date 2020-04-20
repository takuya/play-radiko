! function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 126)
}([function(t, e, r) {
    var n = r(2),
        i = r(21),
        a = r(12),
        o = r(13),
        s = r(18),
        u = function(t, e, r) {
            var c, l, f, h, d = t & u.F,
                p = t & u.G,
                v = t & u.S,
                y = t & u.P,
                g = t & u.B,
                m = p ? n : v ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
                b = p ? i : i[e] || (i[e] = {}),
                E = b.prototype || (b.prototype = {});
            for (c in p && (r = e), r) f = ((l = !d && m && void 0 !== m[c]) ? m : r)[c], h = g && l ? s(f, n) : y && "function" == typeof f ? s(Function.call, f) : f, m && o(m, c, f, t & u.U), b[c] != f && a(b, c, h), y && E[c] != f && (E[c] = f)
        };
    n.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e, r) {
    var n = r(4);
    t.exports = function(t) {
        if (!n(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, r) {
    var n = r(49)("wks"),
        i = r(32),
        a = r(2).Symbol,
        o = "function" == typeof a;
    (t.exports = function(t) {
        return n[t] || (n[t] = o && a[t] || (o ? a : i)("Symbol." + t))
    }).store = n
}, function(t, e, r) {
    t.exports = !r(3)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, r) {
    var n = r(1),
        i = r(92),
        a = r(22),
        o = Object.defineProperty;
    e.f = r(6) ? Object.defineProperty : function(t, e, r) {
        if (n(t), e = a(e, !0), n(r), i) try {
            return o(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[e] = r.value), t
    }
}, function(t, e, r) {
    var n = r(24),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(n(t), 9007199254740991) : 0
    }
}, function(t, e, r) {
    var n = r(23);
    t.exports = function(t) {
        return Object(n(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return r.call(t, e)
    }
}, function(t, e, r) {
    var n = r(7),
        i = r(31);
    t.exports = r(6) ? function(t, e, r) {
        return n.f(t, e, i(1, r))
    } : function(t, e, r) {
        return t[e] = r, t
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(12),
        a = r(11),
        o = r(32)("src"),
        s = Function.toString,
        u = ("" + s).split("toString");
    r(21).inspectSource = function(t) {
        return s.call(t)
    }, (t.exports = function(t, e, r, s) {
        var c = "function" == typeof r;
        c && (a(r, "name") || i(r, "name", e)), t[e] !== r && (c && (a(r, o) || i(r, o, t[e] ? "" + t[e] : u.join(String(e)))), t === n ? t[e] = r : s ? t[e] ? t[e] = r : i(t, e, r) : (delete t[e], i(t, e, r)))
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && this[o] || s.call(this)
    }))
}, function(t, e, r) {
    var n = r(0),
        i = r(3),
        a = r(23),
        o = /"/g,
        s = function(t, e, r, n) {
            var i = String(a(t)),
                s = "<" + e;
            return "" !== r && (s += " " + r + '="' + String(n).replace(o, "&quot;") + '"'), s + ">" + i + "</" + e + ">"
        };
    t.exports = function(t, e) {
        var r = {};
        r[t] = e(s), n(n.P + n.F * i((function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        })), "String", r)
    }
}, function(t, e, r) {
    var n = r(46),
        i = r(23);
    t.exports = function(t) {
        return n(i(t))
    }
}, function(t, e, r) {
    var n = r(47),
        i = r(31),
        a = r(15),
        o = r(22),
        s = r(11),
        u = r(92),
        c = Object.getOwnPropertyDescriptor;
    e.f = r(6) ? c : function(t, e) {
        if (t = a(t), e = o(e, !0), u) try {
            return c(t, e)
        } catch (t) {}
        if (s(t, e)) return i(!n.f.call(t, e), t[e])
    }
}, function(t, e, r) {
    var n = r(11),
        i = r(9),
        a = r(65)("IE_PROTO"),
        o = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null
    }
}, function(t, e, r) {
    var n = r(10);
    t.exports = function(t, e, r) {
        if (n(t), void 0 === e) return t;
        switch (r) {
            case 1:
                return function(r) {
                    return t.call(e, r)
                };
            case 2:
                return function(r, n) {
                    return t.call(e, r, n)
                };
            case 3:
                return function(r, n, i) {
                    return t.call(e, r, n, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    var r = {}.toString;
    t.exports = function(t) {
        return r.call(t).slice(8, -1)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(3);
    t.exports = function(t, e) {
        return !!t && n((function() {
            e ? t.call(null, (function() {}), 1) : t.call(null)
        }))
    }
}, function(t, e) {
    var r = t.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = r)
}, function(t, e, r) {
    var n = r(4);
    t.exports = function(t, e) {
        if (!n(t)) return t;
        var r, i;
        if (e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
        if ("function" == typeof(r = t.valueOf) && !n(i = r.call(t))) return i;
        if (!e && "function" == typeof(r = t.toString) && !n(i = r.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e) {
    var r = Math.ceil,
        n = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : r)(t)
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(21),
        a = r(3);
    t.exports = function(t, e) {
        var r = (i.Object || {})[t] || Object[t],
            o = {};
        o[t] = e(r), n(n.S + n.F * a((function() {
            r(1)
        })), "Object", o)
    }
}, function(t, e, r) {
    var n = r(18),
        i = r(46),
        a = r(9),
        o = r(8),
        s = r(82);
    t.exports = function(t, e) {
        var r = 1 == t,
            u = 2 == t,
            c = 3 == t,
            l = 4 == t,
            f = 6 == t,
            h = 5 == t || f,
            d = e || s;
        return function(e, s, p) {
            for (var v, y, g = a(e), m = i(g), b = n(s, p, 3), E = o(m.length), _ = 0, S = r ? d(e, E) : u ? d(e, 0) : void 0; E > _; _++)
                if ((h || _ in m) && (y = b(v = m[_], _, g), t))
                    if (r) S[_] = y;
                    else if (y) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return _;
                case 2:
                    S.push(v)
            } else if (l) return !1;
            return f ? -1 : c || l ? l : S
        }
    }
}, function(t, e, r) {
    "use strict";
    if (r(6)) {
        var n = r(33),
            i = r(2),
            a = r(3),
            o = r(0),
            s = r(59),
            u = r(88),
            c = r(18),
            l = r(39),
            f = r(31),
            h = r(12),
            d = r(41),
            p = r(24),
            v = r(8),
            y = r(118),
            g = r(35),
            m = r(22),
            b = r(11),
            E = r(48),
            _ = r(4),
            S = r(9),
            T = r(79),
            A = r(36),
            w = r(17),
            R = r(37).f,
            L = r(81),
            O = r(32),
            I = r(5),
            D = r(26),
            k = r(50),
            P = r(57),
            x = r(84),
            C = r(44),
            F = r(54),
            M = r(38),
            N = r(83),
            U = r(108),
            B = r(7),
            G = r(16),
            j = B.f,
            K = G.f,
            H = i.RangeError,
            W = i.TypeError,
            V = i.Uint8Array,
            Y = Array.prototype,
            X = u.ArrayBuffer,
            q = u.DataView,
            z = D(0),
            Q = D(2),
            J = D(3),
            $ = D(4),
            Z = D(5),
            tt = D(6),
            et = k(!0),
            rt = k(!1),
            nt = x.values,
            it = x.keys,
            at = x.entries,
            ot = Y.lastIndexOf,
            st = Y.reduce,
            ut = Y.reduceRight,
            ct = Y.join,
            lt = Y.sort,
            ft = Y.slice,
            ht = Y.toString,
            dt = Y.toLocaleString,
            pt = I("iterator"),
            vt = I("toStringTag"),
            yt = O("typed_constructor"),
            gt = O("def_constructor"),
            mt = s.CONSTR,
            bt = s.TYPED,
            Et = s.VIEW,
            _t = D(1, (function(t, e) {
                return Rt(P(t, t[gt]), e)
            })),
            St = a((function() {
                return 1 === new V(new Uint16Array([1]).buffer)[0]
            })),
            Tt = !!V && !!V.prototype.set && a((function() {
                new V(1).set({})
            })),
            At = function(t, e) {
                var r = p(t);
                if (r < 0 || r % e) throw H("Wrong offset!");
                return r
            },
            wt = function(t) {
                if (_(t) && bt in t) return t;
                throw W(t + " is not a typed array!")
            },
            Rt = function(t, e) {
                if (!(_(t) && yt in t)) throw W("It is not a typed array constructor!");
                return new t(e)
            },
            Lt = function(t, e) {
                return Ot(P(t, t[gt]), e)
            },
            Ot = function(t, e) {
                for (var r = 0, n = e.length, i = Rt(t, n); n > r;) i[r] = e[r++];
                return i
            },
            It = function(t, e, r) {
                j(t, e, {
                    get: function() {
                        return this._d[r]
                    }
                })
            },
            Dt = function(t) {
                var e, r, n, i, a, o, s = S(t),
                    u = arguments.length,
                    l = u > 1 ? arguments[1] : void 0,
                    f = void 0 !== l,
                    h = L(s);
                if (null != h && !T(h)) {
                    for (o = h.call(s), n = [], e = 0; !(a = o.next()).done; e++) n.push(a.value);
                    s = n
                }
                for (f && u > 2 && (l = c(l, arguments[2], 2)), e = 0, r = v(s.length), i = Rt(this, r); r > e; e++) i[e] = f ? l(s[e], e) : s[e];
                return i
            },
            kt = function() {
                for (var t = 0, e = arguments.length, r = Rt(this, e); e > t;) r[t] = arguments[t++];
                return r
            },
            Pt = !!V && a((function() {
                dt.call(new V(1))
            })),
            xt = function() {
                return dt.apply(Pt ? ft.call(wt(this)) : wt(this), arguments)
            },
            Ct = {
                copyWithin: function(t, e) {
                    return U.call(wt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return $(wt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return N.apply(wt(this), arguments)
                },
                filter: function(t) {
                    return Lt(this, Q(wt(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return Z(wt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return tt(wt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    z(wt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return rt(wt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return et(wt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return ct.apply(wt(this), arguments)
                },
                lastIndexOf: function(t) {
                    return ot.apply(wt(this), arguments)
                },
                map: function(t) {
                    return _t(wt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return st.apply(wt(this), arguments)
                },
                reduceRight: function(t) {
                    return ut.apply(wt(this), arguments)
                },
                reverse: function() {
                    for (var t, e = wt(this).length, r = Math.floor(e / 2), n = 0; n < r;) t = this[n], this[n++] = this[--e], this[e] = t;
                    return this
                },
                some: function(t) {
                    return J(wt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return lt.call(wt(this), t)
                },
                subarray: function(t, e) {
                    var r = wt(this),
                        n = r.length,
                        i = g(t, n);
                    return new(P(r, r[gt]))(r.buffer, r.byteOffset + i * r.BYTES_PER_ELEMENT, v((void 0 === e ? n : g(e, n)) - i))
                }
            },
            Ft = function(t, e) {
                return Lt(this, ft.call(wt(this), t, e))
            },
            Mt = function(t) {
                wt(this);
                var e = At(arguments[1], 1),
                    r = this.length,
                    n = S(t),
                    i = v(n.length),
                    a = 0;
                if (i + e > r) throw H("Wrong length!");
                for (; a < i;) this[e + a] = n[a++]
            },
            Nt = {
                entries: function() {
                    return at.call(wt(this))
                },
                keys: function() {
                    return it.call(wt(this))
                },
                values: function() {
                    return nt.call(wt(this))
                }
            },
            Ut = function(t, e) {
                return _(t) && t[bt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            },
            Bt = function(t, e) {
                return Ut(t, e = m(e, !0)) ? f(2, t[e]) : K(t, e)
            },
            Gt = function(t, e, r) {
                return !(Ut(t, e = m(e, !0)) && _(r) && b(r, "value")) || b(r, "get") || b(r, "set") || r.configurable || b(r, "writable") && !r.writable || b(r, "enumerable") && !r.enumerable ? j(t, e, r) : (t[e] = r.value, t)
            };
        mt || (G.f = Bt, B.f = Gt), o(o.S + o.F * !mt, "Object", {
            getOwnPropertyDescriptor: Bt,
            defineProperty: Gt
        }), a((function() {
            ht.call({})
        })) && (ht = dt = function() {
            return ct.call(this)
        });
        var jt = d({}, Ct);
        d(jt, Nt), h(jt, pt, Nt.values), d(jt, {
            slice: Ft,
            set: Mt,
            constructor: function() {},
            toString: ht,
            toLocaleString: xt
        }), It(jt, "buffer", "b"), It(jt, "byteOffset", "o"), It(jt, "byteLength", "l"), It(jt, "length", "e"), j(jt, vt, {
            get: function() {
                return this[bt]
            }
        }), t.exports = function(t, e, r, u) {
            var c = t + ((u = !!u) ? "Clamped" : "") + "Array",
                f = "get" + t,
                d = "set" + t,
                p = i[c],
                g = p || {},
                m = p && w(p),
                b = !p || !s.ABV,
                S = {},
                T = p && p.prototype,
                L = function(t, r) {
                    j(t, r, {
                        get: function() {
                            return function(t, r) {
                                var n = t._d;
                                return n.v[f](r * e + n.o, St)
                            }(this, r)
                        },
                        set: function(t) {
                            return function(t, r, n) {
                                var i = t._d;
                                u && (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n), i.v[d](r * e + i.o, n, St)
                            }(this, r, t)
                        },
                        enumerable: !0
                    })
                };
            b ? (p = r((function(t, r, n, i) {
                l(t, p, c, "_d");
                var a, o, s, u, f = 0,
                    d = 0;
                if (_(r)) {
                    if (!(r instanceof X || "ArrayBuffer" == (u = E(r)) || "SharedArrayBuffer" == u)) return bt in r ? Ot(p, r) : Dt.call(p, r);
                    a = r, d = At(n, e);
                    var g = r.byteLength;
                    if (void 0 === i) {
                        if (g % e) throw H("Wrong length!");
                        if ((o = g - d) < 0) throw H("Wrong length!")
                    } else if ((o = v(i) * e) + d > g) throw H("Wrong length!");
                    s = o / e
                } else s = y(r), a = new X(o = s * e);
                for (h(t, "_d", {
                        b: a,
                        o: d,
                        l: o,
                        e: s,
                        v: new q(a)
                    }); f < s;) L(t, f++)
            })), T = p.prototype = A(jt), h(T, "constructor", p)) : a((function() {
                p(1)
            })) && a((function() {
                new p(-1)
            })) && F((function(t) {
                new p, new p(null), new p(1.5), new p(t)
            }), !0) || (p = r((function(t, r, n, i) {
                var a;
                return l(t, p, c), _(r) ? r instanceof X || "ArrayBuffer" == (a = E(r)) || "SharedArrayBuffer" == a ? void 0 !== i ? new g(r, At(n, e), i) : void 0 !== n ? new g(r, At(n, e)) : new g(r) : bt in r ? Ot(p, r) : Dt.call(p, r) : new g(y(r))
            })), z(m !== Function.prototype ? R(g).concat(R(m)) : R(g), (function(t) {
                t in p || h(p, t, g[t])
            })), p.prototype = T, n || (T.constructor = p));
            var O = T[pt],
                I = !!O && ("values" == O.name || null == O.name),
                D = Nt.values;
            h(p, yt, !0), h(T, bt, c), h(T, Et, !0), h(T, gt, p), (u ? new p(1)[vt] == c : vt in T) || j(T, vt, {
                get: function() {
                    return c
                }
            }), S[c] = p, o(o.G + o.W + o.F * (p != g), S), o(o.S, c, {
                BYTES_PER_ELEMENT: e
            }), o(o.S + o.F * a((function() {
                g.of.call(p, 1)
            })), c, {
                from: Dt,
                of: kt
            }), "BYTES_PER_ELEMENT" in T || h(T, "BYTES_PER_ELEMENT", e), o(o.P, c, Ct), M(c), o(o.P + o.F * Tt, c, {
                set: Mt
            }), o(o.P + o.F * !I, c, Nt), n || T.toString == ht || (T.toString = ht), o(o.P + o.F * a((function() {
                new p(1).slice()
            })), c, {
                slice: Ft
            }), o(o.P + o.F * (a((function() {
                return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
            })) || !a((function() {
                T.toLocaleString.call([1, 2])
            }))), c, {
                toLocaleString: xt
            }), C[c] = I ? O : D, n || I || h(T, pt, D)
        }
    } else t.exports = function() {}
}, function(t, e, r) {
    var n = r(113),
        i = r(0),
        a = r(49)("metadata"),
        o = a.store || (a.store = new(r(116))),
        s = function(t, e, r) {
            var i = o.get(t);
            if (!i) {
                if (!r) return;
                o.set(t, i = new n)
            }
            var a = i.get(e);
            if (!a) {
                if (!r) return;
                i.set(e, a = new n)
            }
            return a
        };
    t.exports = {
        store: o,
        map: s,
        has: function(t, e, r) {
            var n = s(e, r, !1);
            return void 0 !== n && n.has(t)
        },
        get: function(t, e, r) {
            var n = s(e, r, !1);
            return void 0 === n ? void 0 : n.get(t)
        },
        set: function(t, e, r, n) {
            s(r, n, !0).set(t, e)
        },
        keys: function(t, e) {
            var r = s(t, e, !1),
                n = [];
            return r && r.forEach((function(t, e) {
                n.push(e)
            })), n
        },
        key: function(t) {
            return void 0 === t || "symbol" == typeof t ? t : String(t)
        },
        exp: function(t) {
            i(i.S, "Reflect", t)
        }
    }
}, function(t, e, r) {
    var n = r(32)("meta"),
        i = r(4),
        a = r(11),
        o = r(7).f,
        s = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !r(3)((function() {
            return u(Object.preventExtensions({}))
        })),
        l = function(t) {
            o(t, n, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: n,
            NEED: !1,
            fastKey: function(t, e) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!a(t, n)) {
                    if (!u(t)) return "F";
                    if (!e) return "E";
                    l(t)
                }
                return t[n].i
            },
            getWeak: function(t, e) {
                if (!a(t, n)) {
                    if (!u(t)) return !0;
                    if (!e) return !1;
                    l(t)
                }
                return t[n].w
            },
            onFreeze: function(t) {
                return c && f.NEED && u(t) && !a(t, n) && l(t), t
            }
        }
}, function(t, e, r) {
    var n = r(5)("unscopables"),
        i = Array.prototype;
    null == i[n] && r(12)(i, n, {}), t.exports = function(t) {
        i[n][t] = !0
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var r = 0,
        n = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + n).toString(36))
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, r) {
    var n = r(94),
        i = r(66);
    t.exports = Object.keys || function(t) {
        return n(t, i)
    }
}, function(t, e, r) {
    var n = r(24),
        i = Math.max,
        a = Math.min;
    t.exports = function(t, e) {
        return (t = n(t)) < 0 ? i(t + e, 0) : a(t, e)
    }
}, function(t, e, r) {
    var n = r(1),
        i = r(95),
        a = r(66),
        o = r(65)("IE_PROTO"),
        s = function() {},
        u = function() {
            var t, e = r(63)("iframe"),
                n = a.length;
            for (e.style.display = "none", r(67).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; n--;) delete u.prototype[a[n]];
            return u()
        };
    t.exports = Object.create || function(t, e) {
        var r;
        return null !== t ? (s.prototype = n(t), r = new s, s.prototype = null, r[o] = t) : r = u(), void 0 === e ? r : i(r, e)
    }
}, function(t, e, r) {
    var n = r(94),
        i = r(66).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, i)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(2),
        i = r(7),
        a = r(6),
        o = r(5)("species");
    t.exports = function(t) {
        var e = n[t];
        a && e && !e[o] && i.f(e, o, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e) {
    t.exports = function(t, e, r, n) {
        if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(r + ": incorrect invocation!");
        return t
    }
}, function(t, e, r) {
    var n = r(18),
        i = r(106),
        a = r(79),
        o = r(1),
        s = r(8),
        u = r(81),
        c = {},
        l = {};
    (e = t.exports = function(t, e, r, f, h) {
        var d, p, v, y, g = h ? function() {
                return t
            } : u(t),
            m = n(r, f, e ? 2 : 1),
            b = 0;
        if ("function" != typeof g) throw TypeError(t + " is not iterable!");
        if (a(g)) {
            for (d = s(t.length); d > b; b++)
                if ((y = e ? m(o(p = t[b])[0], p[1]) : m(t[b])) === c || y === l) return y
        } else
            for (v = g.call(t); !(p = v.next()).done;)
                if ((y = i(v, m, p.value, e)) === c || y === l) return y
    }).BREAK = c, e.RETURN = l
}, function(t, e, r) {
    var n = r(13);
    t.exports = function(t, e, r) {
        for (var i in e) n(t, i, e[i], r);
        return t
    }
}, function(t, e, r) {
    var n = r(7).f,
        i = r(11),
        a = r(5)("toStringTag");
    t.exports = function(t, e, r) {
        t && !i(t = r ? t : t.prototype, a) && n(t, a, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, r) {
    var n = r(0),
        i = r(23),
        a = r(3),
        o = r(69),
        s = "[" + o + "]",
        u = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"),
        l = function(t, e, r) {
            var i = {},
                s = a((function() {
                    return !!o[t]() || "​" != "​" [t]()
                })),
                u = i[t] = s ? e(f) : o[t];
            r && (i[r] = u), n(n.P + n.F * s, "String", i)
        },
        f = l.trim = function(t, e) {
            return t = String(i(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t
        };
    t.exports = l
}, function(t, e) {
    t.exports = {}
}, function(t, e, r) {
    var n = r(4);
    t.exports = function(t, e) {
        if (!n(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function(t, e, r) {
    var n = r(19);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == n(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, r) {
    var n = r(19),
        i = r(5)("toStringTag"),
        a = "Arguments" == n(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, r, o;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), i)) ? r : a ? n(e) : "Object" == (o = n(e)) && "function" == typeof e.callee ? "Arguments" : o
    }
}, function(t, e, r) {
    var n = r(2),
        i = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
    t.exports = function(t) {
        return i[t] || (i[t] = {})
    }
}, function(t, e, r) {
    var n = r(15),
        i = r(8),
        a = r(35);
    t.exports = function(t) {
        return function(e, r, o) {
            var s, u = n(e),
                c = i(u.length),
                l = a(o, c);
            if (t && r != r) {
                for (; c > l;)
                    if ((s = u[l++]) != s) return !0
            } else
                for (; c > l; l++)
                    if ((t || l in u) && u[l] === r) return t || l || 0;
            return !t && -1
        }
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, r) {
    var n = r(19);
    t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
    }
}, function(t, e, r) {
    var n = r(4),
        i = r(19),
        a = r(5)("match");
    t.exports = function(t) {
        var e;
        return n(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == i(t))
    }
}, function(t, e, r) {
    var n = r(5)("iterator"),
        i = !1;
    try {
        var a = [7][n]();
        a.return = function() {
            i = !0
        }, Array.from(a, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !i) return !1;
        var r = !1;
        try {
            var a = [7],
                o = a[n]();
            o.next = function() {
                return {
                    done: r = !0
                }
            }, a[n] = function() {
                return o
            }, t(a)
        } catch (t) {}
        return r
    }
}, function(t, e, r) {
    "use strict";
    var n = r(1);
    t.exports = function() {
        var t = n(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, r) {
    "use strict";
    var n = r(12),
        i = r(13),
        a = r(3),
        o = r(23),
        s = r(5);
    t.exports = function(t, e, r) {
        var u = s(t),
            c = r(o, u, "" [t]),
            l = c[0],
            f = c[1];
        a((function() {
            var e = {};
            return e[u] = function() {
                return 7
            }, 7 != "" [t](e)
        })) && (i(String.prototype, t, l), n(RegExp.prototype, u, 2 == e ? function(t, e) {
            return f.call(t, this, e)
        } : function(t) {
            return f.call(t, this)
        }))
    }
}, function(t, e, r) {
    var n = r(1),
        i = r(10),
        a = r(5)("species");
    t.exports = function(t, e) {
        var r, o = n(t).constructor;
        return void 0 === o || null == (r = n(o)[a]) ? e : i(r)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(2),
        i = r(0),
        a = r(13),
        o = r(41),
        s = r(29),
        u = r(40),
        c = r(39),
        l = r(4),
        f = r(3),
        h = r(54),
        d = r(42),
        p = r(70);
    t.exports = function(t, e, r, v, y, g) {
        var m = n[t],
            b = m,
            E = y ? "set" : "add",
            _ = b && b.prototype,
            S = {},
            T = function(t) {
                var e = _[t];
                a(_, t, "delete" == t ? function(t) {
                    return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return g && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, r) {
                    return e.call(this, 0 === t ? 0 : t, r), this
                })
            };
        if ("function" == typeof b && (g || _.forEach && !f((function() {
                (new b).entries().next()
            })))) {
            var A = new b,
                w = A[E](g ? {} : -0, 1) != A,
                R = f((function() {
                    A.has(1)
                })),
                L = h((function(t) {
                    new b(t)
                })),
                O = !g && f((function() {
                    for (var t = new b, e = 5; e--;) t[E](e, e);
                    return !t.has(-0)
                }));
            L || ((b = e((function(e, r) {
                c(e, b, t);
                var n = p(new m, e, b);
                return null != r && u(r, y, n[E], n), n
            }))).prototype = _, _.constructor = b), (R || O) && (T("delete"), T("has"), y && T("get")), (O || w) && T(E), g && _.clear && delete _.clear
        } else b = v.getConstructor(e, t, y, E), o(b.prototype, r), s.NEED = !0;
        return d(b, t), S[t] = b, i(i.G + i.W + i.F * (b != m), S), g || v.setStrong(b, t, y), b
    }
}, function(t, e, r) {
    for (var n, i = r(2), a = r(12), o = r(32), s = o("typed_array"), u = o("view"), c = !(!i.ArrayBuffer || !i.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(n = i[h[f++]]) ? (a(n.prototype, s, !0), a(n.prototype, u, !0)) : l = !1;
    t.exports = {
        ABV: c,
        CONSTR: l,
        TYPED: s,
        VIEW: u
    }
}, function(t, e, r) {
    "use strict";
    t.exports = r(33) || !r(3)((function() {
        var t = Math.random();
        __defineSetter__.call(null, t, (function() {})), delete r(2)[t]
    }))
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = function(t) {
        n(n.S, t, {
            of: function() {
                for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
                return new this(e)
            }
        })
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(10),
        a = r(18),
        o = r(40);
    t.exports = function(t) {
        n(n.S, t, {
            from: function(t) {
                var e, r, n, s, u = arguments[1];
                return i(this), (e = void 0 !== u) && i(u), null == t ? new this : (r = [], e ? (n = 0, s = a(u, arguments[2], 2), o(t, !1, (function(t) {
                    r.push(s(t, n++))
                }))) : o(t, !1, r.push, r), new this(r))
            }
        })
    }
}, function(t, e, r) {
    var n = r(4),
        i = r(2).document,
        a = n(i) && n(i.createElement);
    t.exports = function(t) {
        return a ? i.createElement(t) : {}
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(21),
        a = r(33),
        o = r(93),
        s = r(7).f;
    t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = a ? {} : n.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: o.f(t)
        })
    }
}, function(t, e, r) {
    var n = r(49)("keys"),
        i = r(32);
    t.exports = function(t) {
        return n[t] || (n[t] = i(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, r) {
    var n = r(2).document;
    t.exports = n && n.documentElement
}, function(t, e, r) {
    var n = r(4),
        i = r(1),
        a = function(t, e) {
            if (i(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, n) {
            try {
                (n = r(18)(Function.call, r(16).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, r) {
                return a(t, r), e ? t.__proto__ = r : n(t, r), t
            }
        }({}, !1) : void 0),
        check: a
    }
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, r) {
    var n = r(4),
        i = r(68).set;
    t.exports = function(t, e, r) {
        var a, o = e.constructor;
        return o !== r && "function" == typeof o && (a = o.prototype) !== r.prototype && n(a) && i && i(t, a), t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(24),
        i = r(23);
    t.exports = function(t) {
        var e = String(i(this)),
            r = "",
            a = n(t);
        if (a < 0 || a == 1 / 0) throw RangeError("Count can't be negative");
        for (; a > 0;
            (a >>>= 1) && (e += e)) 1 & a && (r += e);
        return r
    }
}, function(t, e) {
    t.exports = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function(t, e) {
    var r = Math.expm1;
    t.exports = !r || r(10) > 22025.465794806718 || r(10) < 22025.465794806718 || -2e-17 != r(-2e-17) ? function(t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : r
}, function(t, e, r) {
    var n = r(24),
        i = r(23);
    t.exports = function(t) {
        return function(e, r) {
            var a, o, s = String(i(e)),
                u = n(r),
                c = s.length;
            return u < 0 || u >= c ? t ? "" : void 0 : (a = s.charCodeAt(u)) < 55296 || a > 56319 || u + 1 === c || (o = s.charCodeAt(u + 1)) < 56320 || o > 57343 ? t ? s.charAt(u) : a : t ? s.slice(u, u + 2) : o - 56320 + (a - 55296 << 10) + 65536
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(33),
        i = r(0),
        a = r(13),
        o = r(12),
        s = r(11),
        u = r(44),
        c = r(76),
        l = r(42),
        f = r(17),
        h = r(5)("iterator"),
        d = !([].keys && "next" in [].keys()),
        p = function() {
            return this
        };
    t.exports = function(t, e, r, v, y, g, m) {
        c(r, e, v);
        var b, E, _, S = function(t) {
                if (!d && t in R) return R[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new r(this, t)
                        }
                }
                return function() {
                    return new r(this, t)
                }
            },
            T = e + " Iterator",
            A = "values" == y,
            w = !1,
            R = t.prototype,
            L = R[h] || R["@@iterator"] || y && R[y],
            O = !d && L || S(y),
            I = y ? A ? S("entries") : O : void 0,
            D = "Array" == e && R.entries || L;
        if (D && (_ = f(D.call(new t))) !== Object.prototype && _.next && (l(_, T, !0), n || s(_, h) || o(_, h, p)), A && L && "values" !== L.name && (w = !0, O = function() {
                return L.call(this)
            }), n && !m || !d && !w && R[h] || o(R, h, O), u[e] = O, u[T] = p, y)
            if (b = {
                    values: A ? O : S("values"),
                    keys: g ? O : S("keys"),
                    entries: I
                }, m)
                for (E in b) E in R || a(R, E, b[E]);
            else i(i.P + i.F * (d || w), e, b);
        return b
    }
}, function(t, e, r) {
    "use strict";
    var n = r(36),
        i = r(31),
        a = r(42),
        o = {};
    r(12)(o, r(5)("iterator"), (function() {
        return this
    })), t.exports = function(t, e, r) {
        t.prototype = n(o, {
            next: i(1, r)
        }), a(t, e + " Iterator")
    }
}, function(t, e, r) {
    var n = r(53),
        i = r(23);
    t.exports = function(t, e, r) {
        if (n(e)) throw TypeError("String#" + r + " doesn't accept regex!");
        return String(i(t))
    }
}, function(t, e, r) {
    var n = r(5)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (r) {
            try {
                return e[n] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, r) {
    var n = r(44),
        i = r(5)("iterator"),
        a = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (n.Array === t || a[i] === t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(7),
        i = r(31);
    t.exports = function(t, e, r) {
        e in t ? n.f(t, e, i(0, r)) : t[e] = r
    }
}, function(t, e, r) {
    var n = r(48),
        i = r(5)("iterator"),
        a = r(44);
    t.exports = r(21).getIteratorMethod = function(t) {
        if (null != t) return t[i] || t["@@iterator"] || a[n(t)]
    }
}, function(t, e, r) {
    var n = r(219);
    t.exports = function(t, e) {
        return new(n(t))(e)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = r(35),
        a = r(8);
    t.exports = function(t) {
        for (var e = n(this), r = a(e.length), o = arguments.length, s = i(o > 1 ? arguments[1] : void 0, r), u = o > 2 ? arguments[2] : void 0, c = void 0 === u ? r : i(u, r); c > s;) e[s++] = t;
        return e
    }
}, function(t, e, r) {
    "use strict";
    var n = r(30),
        i = r(109),
        a = r(44),
        o = r(15);
    t.exports = r(75)(Array, "Array", (function(t, e) {
        this._t = o(t), this._i = 0, this._k = e
    }), (function() {
        var t = this._t,
            e = this._k,
            r = this._i++;
        return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]])
    }), "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
}, function(t, e, r) {
    var n, i, a, o = r(18),
        s = r(99),
        u = r(67),
        c = r(63),
        l = r(2),
        f = l.process,
        h = l.setImmediate,
        d = l.clearImmediate,
        p = l.MessageChannel,
        v = l.Dispatch,
        y = 0,
        g = {},
        m = function() {
            var t = +this;
            if (g.hasOwnProperty(t)) {
                var e = g[t];
                delete g[t], e()
            }
        },
        b = function(t) {
            m.call(t.data)
        };
    h && d || (h = function(t) {
        for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
        return g[++y] = function() {
            s("function" == typeof t ? t : Function(t), e)
        }, n(y), y
    }, d = function(t) {
        delete g[t]
    }, "process" == r(19)(f) ? n = function(t) {
        f.nextTick(o(m, t, 1))
    } : v && v.now ? n = function(t) {
        v.now(o(m, t, 1))
    } : p ? (a = (i = new p).port2, i.port1.onmessage = b, n = o(a.postMessage, a, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function(t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", b, !1)) : n = "onreadystatechange" in c("script") ? function(t) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this), m.call(t)
        }
    } : function(t) {
        setTimeout(o(m, t, 1), 0)
    }), t.exports = {
        set: h,
        clear: d
    }
}, function(t, e, r) {
    var n = r(2),
        i = r(85).set,
        a = n.MutationObserver || n.WebKitMutationObserver,
        o = n.process,
        s = n.Promise,
        u = "process" == r(19)(o);
    t.exports = function() {
        var t, e, r, c = function() {
            var n, i;
            for (u && (n = o.domain) && n.exit(); t;) {
                i = t.fn, t = t.next;
                try {
                    i()
                } catch (n) {
                    throw t ? r() : e = void 0, n
                }
            }
            e = void 0, n && n.enter()
        };
        if (u) r = function() {
            o.nextTick(c)
        };
        else if (!a || n.navigator && n.navigator.standalone)
            if (s && s.resolve) {
                var l = s.resolve();
                r = function() {
                    l.then(c)
                }
            } else r = function() {
                i.call(n, c)
            };
        else {
            var f = !0,
                h = document.createTextNode("");
            new a(c).observe(h, {
                characterData: !0
            }), r = function() {
                h.data = f = !f
            }
        }
        return function(n) {
            var i = {
                fn: n,
                next: void 0
            };
            e && (e.next = i), t || (t = i, r()), e = i
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(10);

    function i(t) {
        var e, r;
        this.promise = new t((function(t, n) {
            if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
            e = t, r = n
        })), this.resolve = n(e), this.reject = n(r)
    }
    t.exports.f = function(t) {
        return new i(t)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(2),
        i = r(6),
        a = r(33),
        o = r(59),
        s = r(12),
        u = r(41),
        c = r(3),
        l = r(39),
        f = r(24),
        h = r(8),
        d = r(118),
        p = r(37).f,
        v = r(7).f,
        y = r(83),
        g = r(42),
        m = "prototype",
        b = "Wrong index!",
        E = n.ArrayBuffer,
        _ = n.DataView,
        S = n.Math,
        T = n.RangeError,
        A = n.Infinity,
        w = E,
        R = S.abs,
        L = S.pow,
        O = S.floor,
        I = S.log,
        D = S.LN2,
        k = i ? "_b" : "buffer",
        P = i ? "_l" : "byteLength",
        x = i ? "_o" : "byteOffset";

    function C(t, e, r) {
        var n, i, a, o = new Array(r),
            s = 8 * r - e - 1,
            u = (1 << s) - 1,
            c = u >> 1,
            l = 23 === e ? L(2, -24) - L(2, -77) : 0,
            f = 0,
            h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = R(t)) != t || t === A ? (i = t != t ? 1 : 0, n = u) : (n = O(I(t) / D), t * (a = L(2, -n)) < 1 && (n--, a *= 2), (t += n + c >= 1 ? l / a : l * L(2, 1 - c)) * a >= 2 && (n++, a /= 2), n + c >= u ? (i = 0, n = u) : n + c >= 1 ? (i = (t * a - 1) * L(2, e), n += c) : (i = t * L(2, c - 1) * L(2, e), n = 0)); e >= 8; o[f++] = 255 & i, i /= 256, e -= 8);
        for (n = n << e | i, s += e; s > 0; o[f++] = 255 & n, n /= 256, s -= 8);
        return o[--f] |= 128 * h, o
    }

    function F(t, e, r) {
        var n, i = 8 * r - e - 1,
            a = (1 << i) - 1,
            o = a >> 1,
            s = i - 7,
            u = r - 1,
            c = t[u--],
            l = 127 & c;
        for (c >>= 7; s > 0; l = 256 * l + t[u], u--, s -= 8);
        for (n = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; n = 256 * n + t[u], u--, s -= 8);
        if (0 === l) l = 1 - o;
        else {
            if (l === a) return n ? NaN : c ? -A : A;
            n += L(2, e), l -= o
        }
        return (c ? -1 : 1) * n * L(2, l - e)
    }

    function M(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function N(t) {
        return [255 & t]
    }

    function U(t) {
        return [255 & t, t >> 8 & 255]
    }

    function B(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function G(t) {
        return C(t, 52, 8)
    }

    function j(t) {
        return C(t, 23, 4)
    }

    function K(t, e, r) {
        v(t[m], e, {
            get: function() {
                return this[r]
            }
        })
    }

    function H(t, e, r, n) {
        var i = d(+r);
        if (i + e > t[P]) throw T(b);
        var a = t[k]._b,
            o = i + t[x],
            s = a.slice(o, o + e);
        return n ? s : s.reverse()
    }

    function W(t, e, r, n, i, a) {
        var o = d(+r);
        if (o + e > t[P]) throw T(b);
        for (var s = t[k]._b, u = o + t[x], c = n(+i), l = 0; l < e; l++) s[u + l] = c[a ? l : e - l - 1]
    }
    if (o.ABV) {
        if (!c((function() {
                E(1)
            })) || !c((function() {
                new E(-1)
            })) || c((function() {
                return new E, new E(1.5), new E(NaN), "ArrayBuffer" != E.name
            }))) {
            for (var V, Y = (E = function(t) {
                    return l(this, E), new w(d(t))
                })[m] = w[m], X = p(w), q = 0; X.length > q;)(V = X[q++]) in E || s(E, V, w[V]);
            a || (Y.constructor = E)
        }
        var z = new _(new E(2)),
            Q = _[m].setInt8;
        z.setInt8(0, 2147483648), z.setInt8(1, 2147483649), !z.getInt8(0) && z.getInt8(1) || u(_[m], {
            setInt8: function(t, e) {
                Q.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                Q.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else E = function(t) {
        l(this, E, "ArrayBuffer");
        var e = d(t);
        this._b = y.call(new Array(e), 0), this[P] = e
    }, _ = function(t, e, r) {
        l(this, _, "DataView"), l(t, E, "DataView");
        var n = t[P],
            i = f(e);
        if (i < 0 || i > n) throw T("Wrong offset!");
        if (i + (r = void 0 === r ? n - i : h(r)) > n) throw T("Wrong length!");
        this[k] = t, this[x] = i, this[P] = r
    }, i && (K(E, "byteLength", "_l"), K(_, "buffer", "_b"), K(_, "byteLength", "_l"), K(_, "byteOffset", "_o")), u(_[m], {
        getInt8: function(t) {
            return H(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return H(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = H(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = H(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return M(H(this, 4, t, arguments[1]))
        },
        getUint32: function(t) {
            return M(H(this, 4, t, arguments[1])) >>> 0
        },
        getFloat32: function(t) {
            return F(H(this, 4, t, arguments[1]), 23, 4)
        },
        getFloat64: function(t) {
            return F(H(this, 8, t, arguments[1]), 52, 8)
        },
        setInt8: function(t, e) {
            W(this, 1, t, N, e)
        },
        setUint8: function(t, e) {
            W(this, 1, t, N, e)
        },
        setInt16: function(t, e) {
            W(this, 2, t, U, e, arguments[2])
        },
        setUint16: function(t, e) {
            W(this, 2, t, U, e, arguments[2])
        },
        setInt32: function(t, e) {
            W(this, 4, t, B, e, arguments[2])
        },
        setUint32: function(t, e) {
            W(this, 4, t, B, e, arguments[2])
        },
        setFloat32: function(t, e) {
            W(this, 4, t, j, e, arguments[2])
        },
        setFloat64: function(t, e) {
            W(this, 8, t, G, e, arguments[2])
        }
    });
    g(E, "ArrayBuffer"), g(_, "DataView"), s(_[m], o.VIEW, !0), e.ArrayBuffer = E, e.DataView = _
}, function(t, e, r) {
    var n = r(2).navigator;
    t.exports = n && n.userAgent || ""
}, function(t, e) {
    ! function(t) {
        "use strict";
        if (!t.fetch) {
            var e = {
                searchParams: "URLSearchParams" in t,
                iterable: "Symbol" in t && "iterator" in Symbol,
                blob: "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in t,
                arrayBuffer: "ArrayBuffer" in t
            };
            if (e.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                n = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                i = ArrayBuffer.isView || function(t) {
                    return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                };
            l.prototype.append = function(t, e) {
                t = s(t), e = u(e);
                var r = this.map[t];
                this.map[t] = r ? r + "," + e : e
            }, l.prototype.delete = function(t) {
                delete this.map[s(t)]
            }, l.prototype.get = function(t) {
                return t = s(t), this.has(t) ? this.map[t] : null
            }, l.prototype.has = function(t) {
                return this.map.hasOwnProperty(s(t))
            }, l.prototype.set = function(t, e) {
                this.map[s(t)] = u(e)
            }, l.prototype.forEach = function(t, e) {
                for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
            }, l.prototype.keys = function() {
                var t = [];
                return this.forEach((function(e, r) {
                    t.push(r)
                })), c(t)
            }, l.prototype.values = function() {
                var t = [];
                return this.forEach((function(e) {
                    t.push(e)
                })), c(t)
            }, l.prototype.entries = function() {
                var t = [];
                return this.forEach((function(e, r) {
                    t.push([r, e])
                })), c(t)
            }, e.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
            var a = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            y.prototype.clone = function() {
                return new y(this, {
                    body: this._bodyInit
                })
            }, v.call(y.prototype), v.call(m.prototype), m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new l(this.headers),
                    url: this.url
                })
            }, m.error = function() {
                var t = new m(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var o = [301, 302, 303, 307, 308];
            m.redirect = function(t, e) {
                if (-1 === o.indexOf(e)) throw new RangeError("Invalid status code");
                return new m(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = l, t.Request = y, t.Response = m, t.fetch = function(t, r) {
                return new Promise((function(n, i) {
                    var a = new y(t, r),
                        o = new XMLHttpRequest;
                    o.onload = function() {
                        var t, e, r = {
                            status: o.status,
                            statusText: o.statusText,
                            headers: (t = o.getAllResponseHeaders() || "", e = new l, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                                var r = t.split(":"),
                                    n = r.shift().trim();
                                if (n) {
                                    var i = r.join(":").trim();
                                    e.append(n, i)
                                }
                            })), e)
                        };
                        r.url = "responseURL" in o ? o.responseURL : r.headers.get("X-Request-URL");
                        var i = "response" in o ? o.response : o.responseText;
                        n(new m(i, r))
                    }, o.onerror = function() {
                        i(new TypeError("Network request failed"))
                    }, o.ontimeout = function() {
                        i(new TypeError("Network request failed"))
                    }, o.open(a.method, a.url, !0), "include" === a.credentials ? o.withCredentials = !0 : "omit" === a.credentials && (o.withCredentials = !1), "responseType" in o && e.blob && (o.responseType = "blob"), a.headers.forEach((function(t, e) {
                        o.setRequestHeader(e, t)
                    })), o.send(void 0 === a._bodyInit ? null : a._bodyInit)
                }))
            }, t.fetch.polyfill = !0
        }

        function s(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function u(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function c(t) {
            var r = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return e.iterable && (r[Symbol.iterator] = function() {
                return r
            }), r
        }

        function l(t) {
            this.map = {}, t instanceof l ? t.forEach((function(t, e) {
                this.append(e, t)
            }), this) : Array.isArray(t) ? t.forEach((function(t) {
                this.append(t[0], t[1])
            }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                this.append(e, t[e])
            }), this)
        }

        function f(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function h(t) {
            return new Promise((function(e, r) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    r(t.error)
                }
            }))
        }

        function d(t) {
            var e = new FileReader,
                r = h(e);
            return e.readAsArrayBuffer(t), r
        }

        function p(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function v() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (e.arrayBuffer && e.blob && n(t)) this._bodyArrayBuffer = p(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !i(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = p(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, e.blob && (this.blob = function() {
                var t = f(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d)
            }), this.text = function() {
                var t, e, r, n = f(this);
                if (n) return n;
                if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, r = h(e), e.readAsText(t), r;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                    return r.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, e.formData && (this.formData = function() {
                return this.text().then(g)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function y(t, e) {
            var r, n, i = (e = e || {}).body;
            if (t instanceof y) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new l(t.headers)), this.method = t.method, this.mode = t.mode, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new l(e.headers)), this.method = (r = e.method || this.method || "GET", n = r.toUpperCase(), a.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }

        function g(t) {
            var e = new FormData;
            return t.trim().split("&").forEach((function(t) {
                if (t) {
                    var r = t.split("="),
                        n = r.shift().replace(/\+/g, " "),
                        i = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(i))
                }
            })), e
        }

        function m(t, e) {
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new l(e.headers), this.url = e.url || "", this._initBody(t)
        }
    }("undefined" != typeof self ? self : this)
}, function(t, e) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (r = window)
    }
    t.exports = r
}, function(t, e, r) {
    t.exports = !r(6) && !r(3)((function() {
        return 7 != Object.defineProperty(r(63)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, r) {
    e.f = r(5)
}, function(t, e, r) {
    var n = r(11),
        i = r(15),
        a = r(50)(!1),
        o = r(65)("IE_PROTO");
    t.exports = function(t, e) {
        var r, s = i(t),
            u = 0,
            c = [];
        for (r in s) r != o && n(s, r) && c.push(r);
        for (; e.length > u;) n(s, r = e[u++]) && (~a(c, r) || c.push(r));
        return c
    }
}, function(t, e, r) {
    var n = r(7),
        i = r(1),
        a = r(34);
    t.exports = r(6) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var r, o = a(e), s = o.length, u = 0; s > u;) n.f(t, r = o[u++], e[r]);
        return t
    }
}, function(t, e, r) {
    var n = r(15),
        i = r(37).f,
        a = {}.toString,
        o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return o && "[object Window]" == a.call(t) ? function(t) {
            try {
                return i(t)
            } catch (t) {
                return o.slice()
            }
        }(t) : i(n(t))
    }
}, function(t, e, r) {
    "use strict";
    var n = r(34),
        i = r(51),
        a = r(47),
        o = r(9),
        s = r(46),
        u = Object.assign;
    t.exports = !u || r(3)((function() {
        var t = {},
            e = {},
            r = Symbol(),
            n = "abcdefghijklmnopqrst";
        return t[r] = 7, n.split("").forEach((function(t) {
            e[t] = t
        })), 7 != u({}, t)[r] || Object.keys(u({}, e)).join("") != n
    })) ? function(t, e) {
        for (var r = o(t), u = arguments.length, c = 1, l = i.f, f = a.f; u > c;)
            for (var h, d = s(arguments[c++]), p = l ? n(d).concat(l(d)) : n(d), v = p.length, y = 0; v > y;) f.call(d, h = p[y++]) && (r[h] = d[h]);
        return r
    } : u
}, function(t, e, r) {
    "use strict";
    var n = r(10),
        i = r(4),
        a = r(99),
        o = [].slice,
        s = {},
        u = function(t, e, r) {
            if (!(e in s)) {
                for (var n = [], i = 0; i < e; i++) n[i] = "a[" + i + "]";
                s[e] = Function("F,a", "return new F(" + n.join(",") + ")")
            }
            return s[e](t, r)
        };
    t.exports = Function.bind || function(t) {
        var e = n(this),
            r = o.call(arguments, 1),
            s = function() {
                var n = r.concat(o.call(arguments));
                return this instanceof s ? u(e, n.length, n) : a(e, n, t)
            };
        return i(e.prototype) && (s.prototype = e.prototype), s
    }
}, function(t, e) {
    t.exports = function(t, e, r) {
        var n = void 0 === r;
        switch (e.length) {
            case 0:
                return n ? t() : t.call(r);
            case 1:
                return n ? t(e[0]) : t.call(r, e[0]);
            case 2:
                return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
            case 3:
                return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
            case 4:
                return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3])
        }
        return t.apply(r, e)
    }
}, function(t, e, r) {
    var n = r(2).parseInt,
        i = r(43).trim,
        a = r(69),
        o = /^[-+]?0[xX]/;
    t.exports = 8 !== n(a + "08") || 22 !== n(a + "0x16") ? function(t, e) {
        var r = i(String(t), 3);
        return n(r, e >>> 0 || (o.test(r) ? 16 : 10))
    } : n
}, function(t, e, r) {
    var n = r(2).parseFloat,
        i = r(43).trim;
    t.exports = 1 / n(r(69) + "-0") != -1 / 0 ? function(t) {
        var e = i(String(t), 3),
            r = n(e);
        return 0 === r && "-" == e.charAt(0) ? -0 : r
    } : n
}, function(t, e, r) {
    var n = r(19);
    t.exports = function(t, e) {
        if ("number" != typeof t && "Number" != n(t)) throw TypeError(e);
        return +t
    }
}, function(t, e, r) {
    var n = r(4),
        i = Math.floor;
    t.exports = function(t) {
        return !n(t) && isFinite(t) && i(t) === t
    }
}, function(t, e) {
    t.exports = Math.log1p || function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
}, function(t, e, r) {
    var n = r(72),
        i = Math.pow,
        a = i(2, -52),
        o = i(2, -23),
        s = i(2, 127) * (2 - o),
        u = i(2, -126);
    t.exports = Math.fround || function(t) {
        var e, r, i = Math.abs(t),
            c = n(t);
        return i < u ? c * (i / u / o + 1 / a - 1 / a) * u * o : (r = (e = (1 + o / a) * i) - (e - i)) > s || r != r ? c * (1 / 0) : c * r
    }
}, function(t, e, r) {
    var n = r(1);
    t.exports = function(t, e, r, i) {
        try {
            return i ? e(n(r)[0], r[1]) : e(r)
        } catch (e) {
            var a = t.return;
            throw void 0 !== a && n(a.call(t)), e
        }
    }
}, function(t, e, r) {
    var n = r(10),
        i = r(9),
        a = r(46),
        o = r(8);
    t.exports = function(t, e, r, s, u) {
        n(e);
        var c = i(t),
            l = a(c),
            f = o(c.length),
            h = u ? f - 1 : 0,
            d = u ? -1 : 1;
        if (r < 2)
            for (;;) {
                if (h in l) {
                    s = l[h], h += d;
                    break
                }
                if (h += d, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; u ? h >= 0 : f > h; h += d) h in l && (s = e(s, l[h], h, c));
        return s
    }
}, function(t, e, r) {
    "use strict";
    var n = r(9),
        i = r(35),
        a = r(8);
    t.exports = [].copyWithin || function(t, e) {
        var r = n(this),
            o = a(r.length),
            s = i(t, o),
            u = i(e, o),
            c = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === c ? o : i(c, o)) - u, o - s),
            f = 1;
        for (u < s && s < u + l && (f = -1, u += l - 1, s += l - 1); l-- > 0;) u in r ? r[s] = r[u] : delete r[s], s += f, u += f;
        return r
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, r) {
    r(6) && "g" != /./g.flags && r(7).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: r(55)
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, r) {
    var n = r(1),
        i = r(4),
        a = r(87);
    t.exports = function(t, e) {
        if (n(t), i(e) && e.constructor === t) return e;
        var r = a.f(t);
        return (0, r.resolve)(e), r.promise
    }
}, function(t, e, r) {
    "use strict";
    var n = r(114),
        i = r(45);
    t.exports = r(58)("Map", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        get: function(t) {
            var e = n.getEntry(i(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return n.def(i(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, n, !0)
}, function(t, e, r) {
    "use strict";
    var n = r(7).f,
        i = r(36),
        a = r(41),
        o = r(18),
        s = r(39),
        u = r(40),
        c = r(75),
        l = r(109),
        f = r(38),
        h = r(6),
        d = r(29).fastKey,
        p = r(45),
        v = h ? "_s" : "size",
        y = function(t, e) {
            var r, n = d(e);
            if ("F" !== n) return t._i[n];
            for (r = t._f; r; r = r.n)
                if (r.k == e) return r
        };
    t.exports = {
        getConstructor: function(t, e, r, c) {
            var l = t((function(t, n) {
                s(t, l, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[v] = 0, null != n && u(n, r, t[c], t)
            }));
            return a(l.prototype, {
                clear: function() {
                    for (var t = p(this, e), r = t._i, n = t._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete r[n.i];
                    t._f = t._l = void 0, t[v] = 0
                },
                delete: function(t) {
                    var r = p(this, e),
                        n = y(r, t);
                    if (n) {
                        var i = n.n,
                            a = n.p;
                        delete r._i[n.i], n.r = !0, a && (a.n = i), i && (i.p = a), r._f == n && (r._f = i), r._l == n && (r._l = a), r[v]--
                    }
                    return !!n
                },
                forEach: function(t) {
                    p(this, e);
                    for (var r, n = o(t, arguments.length > 1 ? arguments[1] : void 0, 3); r = r ? r.n : this._f;)
                        for (n(r.v, r.k, this); r && r.r;) r = r.p
                },
                has: function(t) {
                    return !!y(p(this, e), t)
                }
            }), h && n(l.prototype, "size", {
                get: function() {
                    return p(this, e)[v]
                }
            }), l
        },
        def: function(t, e, r) {
            var n, i, a = y(t, e);
            return a ? a.v = r : (t._l = a = {
                i: i = d(e, !0),
                k: e,
                v: r,
                p: n = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = a), n && (n.n = a), t[v]++, "F" !== i && (t._i[i] = a)), t
        },
        getEntry: y,
        setStrong: function(t, e, r) {
            c(t, e, (function(t, r) {
                this._t = p(t, e), this._k = r, this._l = void 0
            }), (function() {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1))
            }), r ? "entries" : "values", !r, !0), f(e)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(114),
        i = r(45);
    t.exports = r(58)("Set", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(t) {
            return n.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, n)
}, function(t, e, r) {
    "use strict";
    var n, i = r(26)(0),
        a = r(13),
        o = r(29),
        s = r(97),
        u = r(117),
        c = r(4),
        l = r(3),
        f = r(45),
        h = o.getWeak,
        d = Object.isExtensible,
        p = u.ufstore,
        v = {},
        y = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        g = {
            get: function(t) {
                if (c(t)) {
                    var e = h(t);
                    return !0 === e ? p(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return u.def(f(this, "WeakMap"), t, e)
            }
        },
        m = t.exports = r(58)("WeakMap", y, g, u, !0, !0);
    l((function() {
        return 7 != (new m).set((Object.freeze || Object)(v), 7).get(v)
    })) && (s((n = u.getConstructor(y, "WeakMap")).prototype, g), o.NEED = !0, i(["delete", "has", "get", "set"], (function(t) {
        var e = m.prototype,
            r = e[t];
        a(e, t, (function(e, i) {
            if (c(e) && !d(e)) {
                this._f || (this._f = new n);
                var a = this._f[t](e, i);
                return "set" == t ? this : a
            }
            return r.call(this, e, i)
        }))
    })))
}, function(t, e, r) {
    "use strict";
    var n = r(41),
        i = r(29).getWeak,
        a = r(1),
        o = r(4),
        s = r(39),
        u = r(40),
        c = r(26),
        l = r(11),
        f = r(45),
        h = c(5),
        d = c(6),
        p = 0,
        v = function(t) {
            return t._l || (t._l = new y)
        },
        y = function() {
            this.a = []
        },
        g = function(t, e) {
            return h(t.a, (function(t) {
                return t[0] === e
            }))
        };
    y.prototype = {
        get: function(t) {
            var e = g(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!g(this, t)
        },
        set: function(t, e) {
            var r = g(this, t);
            r ? r[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = d(this.a, (function(e) {
                return e[0] === t
            }));
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, r, a) {
            var c = t((function(t, n) {
                s(t, c, e, "_i"), t._t = e, t._i = p++, t._l = void 0, null != n && u(n, r, t[a], t)
            }));
            return n(c.prototype, {
                delete: function(t) {
                    if (!o(t)) return !1;
                    var r = i(t);
                    return !0 === r ? v(f(this, e)).delete(t) : r && l(r, this._i) && delete r[this._i]
                },
                has: function(t) {
                    if (!o(t)) return !1;
                    var r = i(t);
                    return !0 === r ? v(f(this, e)).has(t) : r && l(r, this._i)
                }
            }), c
        },
        def: function(t, e, r) {
            var n = i(a(e), !0);
            return !0 === n ? v(t).set(e, r) : n[t._i] = r, t
        },
        ufstore: v
    }
}, function(t, e, r) {
    var n = r(24),
        i = r(8);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = n(t),
            r = i(e);
        if (e !== r) throw RangeError("Wrong length!");
        return r
    }
}, function(t, e, r) {
    var n = r(37),
        i = r(51),
        a = r(1),
        o = r(2).Reflect;
    t.exports = o && o.ownKeys || function(t) {
        var e = n.f(a(t)),
            r = i.f;
        return r ? e.concat(r(t)) : e
    }
}, function(t, e, r) {
    "use strict";
    var n = r(52),
        i = r(4),
        a = r(8),
        o = r(18),
        s = r(5)("isConcatSpreadable");
    t.exports = function t(e, r, u, c, l, f, h, d) {
        for (var p, v, y = l, g = 0, m = !!h && o(h, d, 3); g < c;) {
            if (g in u) {
                if (p = m ? m(u[g], g, r) : u[g], v = !1, i(p) && (v = void 0 !== (v = p[s]) ? !!v : n(p)), v && f > 0) y = t(e, r, p, a(p.length), y, f - 1) - 1;
                else {
                    if (y >= 9007199254740991) throw TypeError();
                    e[y] = p
                }
                y++
            }
            g++
        }
        return y
    }
}, function(t, e, r) {
    var n = r(8),
        i = r(71),
        a = r(23);
    t.exports = function(t, e, r, o) {
        var s = String(a(t)),
            u = s.length,
            c = void 0 === r ? " " : String(r),
            l = n(e);
        if (l <= u || "" == c) return s;
        var f = l - u,
            h = i.call(c, Math.ceil(f / c.length));
        return h.length > f && (h = h.slice(0, f)), o ? h + s : s + h
    }
}, function(t, e, r) {
    var n = r(34),
        i = r(15),
        a = r(47).f;
    t.exports = function(t) {
        return function(e) {
            for (var r, o = i(e), s = n(o), u = s.length, c = 0, l = []; u > c;) a.call(o, r = s[c++]) && l.push(t ? [r, o[r]] : o[r]);
            return l
        }
    }
}, function(t, e, r) {
    var n = r(48),
        i = r(124);
    t.exports = function(t) {
        return function() {
            if (n(this) != t) throw TypeError(t + "#toJSON isn't generic");
            return i(this)
        }
    }
}, function(t, e, r) {
    var n = r(40);
    t.exports = function(t, e) {
        var r = [];
        return n(t, !1, r.push, r, e), r
    }
}, function(t, e) {
    t.exports = Math.scale || function(t, e, r, n, i) {
        return 0 === arguments.length || t != t || e != e || r != r || n != n || i != i ? NaN : t === 1 / 0 || t === -1 / 0 ? t : (t - e) * (i - n) / (r - e) + n
    }
}, function(t, e, r) {
    r(90), r(127), t.exports = r(329)
}, function(t, e, r) {
    "use strict";
    (function(t) {
        if (r(128), r(325), r(326), t._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
        t._babelPolyfill = !0;
        var e = "defineProperty";

        function n(t, r, n) {
            t[r] || Object[e](t, r, {
                writable: !0,
                configurable: !0,
                value: n
            })
        }
        n(String.prototype, "padLeft", "".padStart), n(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach((function(t) {
            [][t] && n(Array, t, Function.call.bind([][t]))
        }))
    }).call(this, r(91))
}, function(t, e, r) {
    r(129), r(131), r(132), r(133), r(134), r(135), r(136), r(137), r(138), r(139), r(140), r(141), r(142), r(143), r(144), r(145), r(147), r(148), r(149), r(150), r(151), r(152), r(153), r(154), r(155), r(156), r(157), r(158), r(159), r(160), r(161), r(162), r(163), r(164), r(165), r(166), r(167), r(168), r(169), r(170), r(171), r(172), r(173), r(174), r(175), r(176), r(177), r(178), r(179), r(180), r(181), r(182), r(183), r(184), r(185), r(186), r(187), r(188), r(189), r(190), r(191), r(192), r(193), r(194), r(195), r(196), r(197), r(198), r(199), r(200), r(201), r(202), r(203), r(204), r(205), r(206), r(207), r(209), r(210), r(212), r(213), r(214), r(215), r(216), r(217), r(218), r(220), r(221), r(222), r(223), r(224), r(225), r(226), r(227), r(228), r(229), r(230), r(231), r(232), r(84), r(233), r(234), r(110), r(235), r(236), r(237), r(238), r(239), r(113), r(115), r(116), r(240), r(241), r(242), r(243), r(244), r(245), r(246), r(247), r(248), r(249), r(250), r(251), r(252), r(253), r(254), r(255), r(256), r(257), r(258), r(259), r(260), r(261), r(262), r(263), r(264), r(265), r(266), r(267), r(268), r(269), r(270), r(271), r(272), r(273), r(274), r(275), r(276), r(277), r(278), r(279), r(280), r(281), r(282), r(283), r(284), r(285), r(286), r(287), r(288), r(289), r(290), r(291), r(292), r(293), r(294), r(295), r(296), r(297), r(298), r(299), r(300), r(301), r(302), r(303), r(304), r(305), r(306), r(307), r(308), r(309), r(310), r(311), r(312), r(313), r(314), r(315), r(316), r(317), r(318), r(319), r(320), r(321), r(322), r(323), r(324), t.exports = r(21)
}, function(t, e, r) {
    "use strict";
    var n = r(2),
        i = r(11),
        a = r(6),
        o = r(0),
        s = r(13),
        u = r(29).KEY,
        c = r(3),
        l = r(49),
        f = r(42),
        h = r(32),
        d = r(5),
        p = r(93),
        v = r(64),
        y = r(130),
        g = r(52),
        m = r(1),
        b = r(4),
        E = r(15),
        _ = r(22),
        S = r(31),
        T = r(36),
        A = r(96),
        w = r(16),
        R = r(7),
        L = r(34),
        O = w.f,
        I = R.f,
        D = A.f,
        k = n.Symbol,
        P = n.JSON,
        x = P && P.stringify,
        C = d("_hidden"),
        F = d("toPrimitive"),
        M = {}.propertyIsEnumerable,
        N = l("symbol-registry"),
        U = l("symbols"),
        B = l("op-symbols"),
        G = Object.prototype,
        j = "function" == typeof k,
        K = n.QObject,
        H = !K || !K.prototype || !K.prototype.findChild,
        W = a && c((function() {
            return 7 != T(I({}, "a", {
                get: function() {
                    return I(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, r) {
            var n = O(G, e);
            n && delete G[e], I(t, e, r), n && t !== G && I(G, e, n)
        } : I,
        V = function(t) {
            var e = U[t] = T(k.prototype);
            return e._k = t, e
        },
        Y = j && "symbol" == typeof k.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof k
        },
        X = function(t, e, r) {
            return t === G && X(B, e, r), m(t), e = _(e, !0), m(r), i(U, e) ? (r.enumerable ? (i(t, C) && t[C][e] && (t[C][e] = !1), r = T(r, {
                enumerable: S(0, !1)
            })) : (i(t, C) || I(t, C, S(1, {})), t[C][e] = !0), W(t, e, r)) : I(t, e, r)
        },
        q = function(t, e) {
            m(t);
            for (var r, n = y(e = E(e)), i = 0, a = n.length; a > i;) X(t, r = n[i++], e[r]);
            return t
        },
        z = function(t) {
            var e = M.call(this, t = _(t, !0));
            return !(this === G && i(U, t) && !i(B, t)) && (!(e || !i(this, t) || !i(U, t) || i(this, C) && this[C][t]) || e)
        },
        Q = function(t, e) {
            if (t = E(t), e = _(e, !0), t !== G || !i(U, e) || i(B, e)) {
                var r = O(t, e);
                return !r || !i(U, e) || i(t, C) && t[C][e] || (r.enumerable = !0), r
            }
        },
        J = function(t) {
            for (var e, r = D(E(t)), n = [], a = 0; r.length > a;) i(U, e = r[a++]) || e == C || e == u || n.push(e);
            return n
        },
        $ = function(t) {
            for (var e, r = t === G, n = D(r ? B : E(t)), a = [], o = 0; n.length > o;) !i(U, e = n[o++]) || r && !i(G, e) || a.push(U[e]);
            return a
        };
    j || (s((k = function() {
        if (this instanceof k) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(r) {
                this === G && e.call(B, r), i(this, C) && i(this[C], t) && (this[C][t] = !1), W(this, t, S(1, r))
            };
        return a && H && W(G, t, {
            configurable: !0,
            set: e
        }), V(t)
    }).prototype, "toString", (function() {
        return this._k
    })), w.f = Q, R.f = X, r(37).f = A.f = J, r(47).f = z, r(51).f = $, a && !r(33) && s(G, "propertyIsEnumerable", z, !0), p.f = function(t) {
        return V(d(t))
    }), o(o.G + o.W + o.F * !j, {
        Symbol: k
    });
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) d(Z[tt++]);
    for (var et = L(d.store), rt = 0; et.length > rt;) v(et[rt++]);
    o(o.S + o.F * !j, "Symbol", {
        for: function(t) {
            return i(N, t += "") ? N[t] : N[t] = k(t)
        },
        keyFor: function(t) {
            if (!Y(t)) throw TypeError(t + " is not a symbol!");
            for (var e in N)
                if (N[e] === t) return e
        },
        useSetter: function() {
            H = !0
        },
        useSimple: function() {
            H = !1
        }
    }), o(o.S + o.F * !j, "Object", {
        create: function(t, e) {
            return void 0 === e ? T(t) : q(T(t), e)
        },
        defineProperty: X,
        defineProperties: q,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: J,
        getOwnPropertySymbols: $
    }), P && o(o.S + o.F * (!j || c((function() {
        var t = k();
        return "[null]" != x([t]) || "{}" != x({
            a: t
        }) || "{}" != x(Object(t))
    }))), "JSON", {
        stringify: function(t) {
            for (var e, r, n = [t], i = 1; arguments.length > i;) n.push(arguments[i++]);
            if (r = e = n[1], (b(e) || void 0 !== t) && !Y(t)) return g(e) || (e = function(t, e) {
                if ("function" == typeof r && (e = r.call(this, t, e)), !Y(e)) return e
            }), n[1] = e, x.apply(P, n)
        }
    }), k.prototype[F] || r(12)(k.prototype, F, k.prototype.valueOf), f(k, "Symbol"), f(Math, "Math", !0), f(n.JSON, "JSON", !0)
}, function(t, e, r) {
    var n = r(34),
        i = r(51),
        a = r(47);
    t.exports = function(t) {
        var e = n(t),
            r = i.f;
        if (r)
            for (var o, s = r(t), u = a.f, c = 0; s.length > c;) u.call(t, o = s[c++]) && e.push(o);
        return e
    }
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Object", {
        create: r(36)
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S + n.F * !r(6), "Object", {
        defineProperty: r(7).f
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S + n.F * !r(6), "Object", {
        defineProperties: r(95)
    })
}, function(t, e, r) {
    var n = r(15),
        i = r(16).f;
    r(25)("getOwnPropertyDescriptor", (function() {
        return function(t, e) {
            return i(n(t), e)
        }
    }))
}, function(t, e, r) {
    var n = r(9),
        i = r(17);
    r(25)("getPrototypeOf", (function() {
        return function(t) {
            return i(n(t))
        }
    }))
}, function(t, e, r) {
    var n = r(9),
        i = r(34);
    r(25)("keys", (function() {
        return function(t) {
            return i(n(t))
        }
    }))
}, function(t, e, r) {
    r(25)("getOwnPropertyNames", (function() {
        return r(96).f
    }))
}, function(t, e, r) {
    var n = r(4),
        i = r(29).onFreeze;
    r(25)("freeze", (function(t) {
        return function(e) {
            return t && n(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, r) {
    var n = r(4),
        i = r(29).onFreeze;
    r(25)("seal", (function(t) {
        return function(e) {
            return t && n(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, r) {
    var n = r(4),
        i = r(29).onFreeze;
    r(25)("preventExtensions", (function(t) {
        return function(e) {
            return t && n(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, r) {
    var n = r(4);
    r(25)("isFrozen", (function(t) {
        return function(e) {
            return !n(e) || !!t && t(e)
        }
    }))
}, function(t, e, r) {
    var n = r(4);
    r(25)("isSealed", (function(t) {
        return function(e) {
            return !n(e) || !!t && t(e)
        }
    }))
}, function(t, e, r) {
    var n = r(4);
    r(25)("isExtensible", (function(t) {
        return function(e) {
            return !!n(e) && (!t || t(e))
        }
    }))
}, function(t, e, r) {
    var n = r(0);
    n(n.S + n.F, "Object", {
        assign: r(97)
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Object", {
        is: r(146)
    })
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Object", {
        setPrototypeOf: r(68).set
    })
}, function(t, e, r) {
    "use strict";
    var n = r(48),
        i = {};
    i[r(5)("toStringTag")] = "z", i + "" != "[object z]" && r(13)(Object.prototype, "toString", (function() {
        return "[object " + n(this) + "]"
    }), !0)
}, function(t, e, r) {
    var n = r(0);
    n(n.P, "Function", {
        bind: r(98)
    })
}, function(t, e, r) {
    var n = r(7).f,
        i = Function.prototype,
        a = /^\s*function ([^ (]*)/;
    "name" in i || r(6) && n(i, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(a)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(4),
        i = r(17),
        a = r(5)("hasInstance"),
        o = Function.prototype;
    a in o || r(7).f(o, a, {
        value: function(t) {
            if ("function" != typeof this || !n(t)) return !1;
            if (!n(this.prototype)) return t instanceof this;
            for (; t = i(t);)
                if (this.prototype === t) return !0;
            return !1
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(100);
    n(n.G + n.F * (parseInt != i), {
        parseInt: i
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(101);
    n(n.G + n.F * (parseFloat != i), {
        parseFloat: i
    })
}, function(t, e, r) {
    "use strict";
    var n = r(2),
        i = r(11),
        a = r(19),
        o = r(70),
        s = r(22),
        u = r(3),
        c = r(37).f,
        l = r(16).f,
        f = r(7).f,
        h = r(43).trim,
        d = n.Number,
        p = d,
        v = d.prototype,
        y = "Number" == a(r(36)(v)),
        g = "trim" in String.prototype,
        m = function(t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var r, n, i, a = (e = g ? e.trim() : h(e, 3)).charCodeAt(0);
                if (43 === a || 45 === a) {
                    if (88 === (r = e.charCodeAt(2)) || 120 === r) return NaN
                } else if (48 === a) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            n = 2, i = 49;
                            break;
                        case 79:
                        case 111:
                            n = 8, i = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var o, u = e.slice(2), c = 0, l = u.length; c < l; c++)
                        if ((o = u.charCodeAt(c)) < 48 || o > i) return NaN;
                    return parseInt(u, n)
                }
            }
            return +e
        };
    if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
        d = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                r = this;
            return r instanceof d && (y ? u((function() {
                v.valueOf.call(r)
            })) : "Number" != a(r)) ? o(new p(m(e)), r, d) : m(e)
        };
        for (var b, E = r(6) ? c(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; E.length > _; _++) i(p, b = E[_]) && !i(d, b) && f(d, b, l(p, b));
        d.prototype = v, v.constructor = d, r(13)(n, "Number", d)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(24),
        a = r(102),
        o = r(71),
        s = 1..toFixed,
        u = Math.floor,
        c = [0, 0, 0, 0, 0, 0],
        l = "Number.toFixed: incorrect invocation!",
        f = function(t, e) {
            for (var r = -1, n = e; ++r < 6;) n += t * c[r], c[r] = n % 1e7, n = u(n / 1e7)
        },
        h = function(t) {
            for (var e = 6, r = 0; --e >= 0;) r += c[e], c[e] = u(r / t), r = r % t * 1e7
        },
        d = function() {
            for (var t = 6, e = ""; --t >= 0;)
                if ("" !== e || 0 === t || 0 !== c[t]) {
                    var r = String(c[t]);
                    e = "" === e ? r : e + o.call("0", 7 - r.length) + r
                } return e
        },
        p = function(t, e, r) {
            return 0 === e ? r : e % 2 == 1 ? p(t, e - 1, r * t) : p(t * t, e / 2, r)
        };
    n(n.P + n.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !r(3)((function() {
        s.call({})
    }))), "Number", {
        toFixed: function(t) {
            var e, r, n, s, u = a(this, l),
                c = i(t),
                v = "",
                y = "0";
            if (c < 0 || c > 20) throw RangeError(l);
            if (u != u) return "NaN";
            if (u <= -1e21 || u >= 1e21) return String(u);
            if (u < 0 && (v = "-", u = -u), u > 1e-21)
                if (r = (e = function(t) {
                        for (var e = 0, r = t; r >= 4096;) e += 12, r /= 4096;
                        for (; r >= 2;) e += 1, r /= 2;
                        return e
                    }(u * p(2, 69, 1)) - 69) < 0 ? u * p(2, -e, 1) : u / p(2, e, 1), r *= 4503599627370496, (e = 52 - e) > 0) {
                    for (f(0, r), n = c; n >= 7;) f(1e7, 0), n -= 7;
                    for (f(p(10, n, 1), 0), n = e - 1; n >= 23;) h(1 << 23), n -= 23;
                    h(1 << n), f(1, 1), h(2), y = d()
                } else f(0, r), f(1 << -e, 0), y = d() + o.call("0", c);
            return y = c > 0 ? v + ((s = y.length) <= c ? "0." + o.call("0", c - s) + y : y.slice(0, s - c) + "." + y.slice(s - c)) : v + y
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(3),
        a = r(102),
        o = 1..toPrecision;
    n(n.P + n.F * (i((function() {
        return "1" !== o.call(1, void 0)
    })) || !i((function() {
        o.call({})
    }))), "Number", {
        toPrecision: function(t) {
            var e = a(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? o.call(e) : o.call(e, t)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Number", {
        EPSILON: Math.pow(2, -52)
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(2).isFinite;
    n(n.S, "Number", {
        isFinite: function(t) {
            return "number" == typeof t && i(t)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Number", {
        isInteger: r(103)
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Number", {
        isNaN: function(t) {
            return t != t
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(103),
        a = Math.abs;
    n(n.S, "Number", {
        isSafeInteger: function(t) {
            return i(t) && a(t) <= 9007199254740991
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(101);
    n(n.S + n.F * (Number.parseFloat != i), "Number", {
        parseFloat: i
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(100);
    n(n.S + n.F * (Number.parseInt != i), "Number", {
        parseInt: i
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(104),
        a = Math.sqrt,
        o = Math.acosh;
    n(n.S + n.F * !(o && 710 == Math.floor(o(Number.MAX_VALUE)) && o(1 / 0) == 1 / 0), "Math", {
        acosh: function(t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + a(t - 1) * a(t + 1))
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = Math.asinh;
    n(n.S + n.F * !(i && 1 / i(0) > 0), "Math", {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = Math.atanh;
    n(n.S + n.F * !(i && 1 / i(-0) < 0), "Math", {
        atanh: function(t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(72);
    n(n.S, "Math", {
        cbrt: function(t) {
            return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        clz32: function(t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = Math.exp;
    n(n.S, "Math", {
        cosh: function(t) {
            return (i(t = +t) + i(-t)) / 2
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(73);
    n(n.S + n.F * (i != Math.expm1), "Math", {
        expm1: i
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        fround: r(105)
    })
}, function(t, e, r) {
    var n = r(0),
        i = Math.abs;
    n(n.S, "Math", {
        hypot: function(t, e) {
            for (var r, n, a = 0, o = 0, s = arguments.length, u = 0; o < s;) u < (r = i(arguments[o++])) ? (a = a * (n = u / r) * n + 1, u = r) : a += r > 0 ? (n = r / u) * n : r;
            return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(a)
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = Math.imul;
    n(n.S + n.F * r(3)((function() {
        return -5 != i(4294967295, 5) || 2 != i.length
    })), "Math", {
        imul: function(t, e) {
            var r = +t,
                n = +e,
                i = 65535 & r,
                a = 65535 & n;
            return 0 | i * a + ((65535 & r >>> 16) * a + i * (65535 & n >>> 16) << 16 >>> 0)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        log10: function(t) {
            return Math.log(t) * Math.LOG10E
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        log1p: r(104)
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        log2: function(t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        sign: r(72)
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(73),
        a = Math.exp;
    n(n.S + n.F * r(3)((function() {
        return -2e-17 != !Math.sinh(-2e-17)
    })), "Math", {
        sinh: function(t) {
            return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (a(t - 1) - a(-t - 1)) * (Math.E / 2)
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(73),
        a = Math.exp;
    n(n.S, "Math", {
        tanh: function(t) {
            var e = i(t = +t),
                r = i(-t);
            return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (a(t) + a(-t))
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        trunc: function(t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(35),
        a = String.fromCharCode,
        o = String.fromCodePoint;
    n(n.S + n.F * (!!o && 1 != o.length), "String", {
        fromCodePoint: function(t) {
            for (var e, r = [], n = arguments.length, o = 0; n > o;) {
                if (e = +arguments[o++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                r.push(e < 65536 ? a(e) : a(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return r.join("")
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(15),
        a = r(8);
    n(n.S, "String", {
        raw: function(t) {
            for (var e = i(t.raw), r = a(e.length), n = arguments.length, o = [], s = 0; r > s;) o.push(String(e[s++])), s < n && o.push(String(arguments[s]));
            return o.join("")
        }
    })
}, function(t, e, r) {
    "use strict";
    r(43)("trim", (function(t) {
        return function() {
            return t(this, 3)
        }
    }))
}, function(t, e, r) {
    "use strict";
    var n = r(74)(!0);
    r(75)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
    }), (function() {
        var t, e = this._t,
            r = this._i;
        return r >= e.length ? {
            value: void 0,
            done: !0
        } : (t = n(e, r), this._i += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(74)(!1);
    n(n.P, "String", {
        codePointAt: function(t) {
            return i(this, t)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(8),
        a = r(77),
        o = "".endsWith;
    n(n.P + n.F * r(78)("endsWith"), "String", {
        endsWith: function(t) {
            var e = a(this, t, "endsWith"),
                r = arguments.length > 1 ? arguments[1] : void 0,
                n = i(e.length),
                s = void 0 === r ? n : Math.min(i(r), n),
                u = String(t);
            return o ? o.call(e, u, s) : e.slice(s - u.length, s) === u
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(77);
    n(n.P + n.F * r(78)("includes"), "String", {
        includes: function(t) {
            return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.P, "String", {
        repeat: r(71)
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(8),
        a = r(77),
        o = "".startsWith;
    n(n.P + n.F * r(78)("startsWith"), "String", {
        startsWith: function(t) {
            var e = a(this, t, "startsWith"),
                r = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                n = String(t);
            return o ? o.call(e, n, r) : e.slice(r, r + n.length) === n
        }
    })
}, function(t, e, r) {
    "use strict";
    r(14)("anchor", (function(t) {
        return function(e) {
            return t(this, "a", "name", e)
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("big", (function(t) {
        return function() {
            return t(this, "big", "", "")
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("blink", (function(t) {
        return function() {
            return t(this, "blink", "", "")
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("bold", (function(t) {
        return function() {
            return t(this, "b", "", "")
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("fixed", (function(t) {
        return function() {
            return t(this, "tt", "", "")
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("fontcolor", (function(t) {
        return function(e) {
            return t(this, "font", "color", e)
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("fontsize", (function(t) {
        return function(e) {
            return t(this, "font", "size", e)
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("italics", (function(t) {
        return function() {
            return t(this, "i", "", "")
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("link", (function(t) {
        return function(e) {
            return t(this, "a", "href", e)
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("small", (function(t) {
        return function() {
            return t(this, "small", "", "")
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("strike", (function(t) {
        return function() {
            return t(this, "strike", "", "")
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("sub", (function(t) {
        return function() {
            return t(this, "sub", "", "")
        }
    }))
}, function(t, e, r) {
    "use strict";
    r(14)("sup", (function(t) {
        return function() {
            return t(this, "sup", "", "")
        }
    }))
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(9),
        a = r(22);
    n(n.P + n.F * r(3)((function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    })), "Date", {
        toJSON: function(t) {
            var e = i(this),
                r = a(e);
            return "number" != typeof r || isFinite(r) ? e.toISOString() : null
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(208);
    n(n.P + n.F * (Date.prototype.toISOString !== i), "Date", {
        toISOString: i
    })
}, function(t, e, r) {
    "use strict";
    var n = r(3),
        i = Date.prototype.getTime,
        a = Date.prototype.toISOString,
        o = function(t) {
            return t > 9 ? t : "0" + t
        };
    t.exports = n((function() {
        return "0385-07-25T07:06:39.999Z" != a.call(new Date(-5e13 - 1))
    })) || !n((function() {
        a.call(new Date(NaN))
    })) ? function() {
        if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
        var t = this,
            e = t.getUTCFullYear(),
            r = t.getUTCMilliseconds(),
            n = e < 0 ? "-" : e > 9999 ? "+" : "";
        return n + ("00000" + Math.abs(e)).slice(n ? -6 : -4) + "-" + o(t.getUTCMonth() + 1) + "-" + o(t.getUTCDate()) + "T" + o(t.getUTCHours()) + ":" + o(t.getUTCMinutes()) + ":" + o(t.getUTCSeconds()) + "." + (r > 99 ? r : "0" + o(r)) + "Z"
    } : a
}, function(t, e, r) {
    var n = Date.prototype,
        i = n.toString,
        a = n.getTime;
    new Date(NaN) + "" != "Invalid Date" && r(13)(n, "toString", (function() {
        var t = a.call(this);
        return t == t ? i.call(this) : "Invalid Date"
    }))
}, function(t, e, r) {
    var n = r(5)("toPrimitive"),
        i = Date.prototype;
    n in i || r(12)(i, n, r(211))
}, function(t, e, r) {
    "use strict";
    var n = r(1),
        i = r(22);
    t.exports = function(t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return i(n(this), "number" != t)
    }
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Array", {
        isArray: r(52)
    })
}, function(t, e, r) {
    "use strict";
    var n = r(18),
        i = r(0),
        a = r(9),
        o = r(106),
        s = r(79),
        u = r(8),
        c = r(80),
        l = r(81);
    i(i.S + i.F * !r(54)((function(t) {
        Array.from(t)
    })), "Array", {
        from: function(t) {
            var e, r, i, f, h = a(t),
                d = "function" == typeof this ? this : Array,
                p = arguments.length,
                v = p > 1 ? arguments[1] : void 0,
                y = void 0 !== v,
                g = 0,
                m = l(h);
            if (y && (v = n(v, p > 2 ? arguments[2] : void 0, 2)), null == m || d == Array && s(m))
                for (r = new d(e = u(h.length)); e > g; g++) c(r, g, y ? v(h[g], g) : h[g]);
            else
                for (f = m.call(h), r = new d; !(i = f.next()).done; g++) c(r, g, y ? o(f, v, [i.value, g], !0) : i.value);
            return r.length = g, r
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(80);
    n(n.S + n.F * r(3)((function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    })), "Array", {
        of: function() {
            for (var t = 0, e = arguments.length, r = new("function" == typeof this ? this : Array)(e); e > t;) i(r, t, arguments[t++]);
            return r.length = e, r
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(15),
        a = [].join;
    n(n.P + n.F * (r(46) != Object || !r(20)(a)), "Array", {
        join: function(t) {
            return a.call(i(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(67),
        a = r(19),
        o = r(35),
        s = r(8),
        u = [].slice;
    n(n.P + n.F * r(3)((function() {
        i && u.call(i)
    })), "Array", {
        slice: function(t, e) {
            var r = s(this.length),
                n = a(this);
            if (e = void 0 === e ? r : e, "Array" == n) return u.call(this, t, e);
            for (var i = o(t, r), c = o(e, r), l = s(c - i), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == n ? this.charAt(i + h) : this[i + h];
            return f
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(10),
        a = r(9),
        o = r(3),
        s = [].sort,
        u = [1, 2, 3];
    n(n.P + n.F * (o((function() {
        u.sort(void 0)
    })) || !o((function() {
        u.sort(null)
    })) || !r(20)(s)), "Array", {
        sort: function(t) {
            return void 0 === t ? s.call(a(this)) : s.call(a(this), i(t))
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(26)(0),
        a = r(20)([].forEach, !0);
    n(n.P + n.F * !a, "Array", {
        forEach: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    var n = r(4),
        i = r(52),
        a = r(5)("species");
    t.exports = function(t) {
        var e;
        return i(t) && ("function" != typeof(e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), n(e) && null === (e = e[a]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(26)(1);
    n(n.P + n.F * !r(20)([].map, !0), "Array", {
        map: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(26)(2);
    n(n.P + n.F * !r(20)([].filter, !0), "Array", {
        filter: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(26)(3);
    n(n.P + n.F * !r(20)([].some, !0), "Array", {
        some: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(26)(4);
    n(n.P + n.F * !r(20)([].every, !0), "Array", {
        every: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(107);
    n(n.P + n.F * !r(20)([].reduce, !0), "Array", {
        reduce: function(t) {
            return i(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(107);
    n(n.P + n.F * !r(20)([].reduceRight, !0), "Array", {
        reduceRight: function(t) {
            return i(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(50)(!1),
        a = [].indexOf,
        o = !!a && 1 / [1].indexOf(1, -0) < 0;
    n(n.P + n.F * (o || !r(20)(a)), "Array", {
        indexOf: function(t) {
            return o ? a.apply(this, arguments) || 0 : i(this, t, arguments[1])
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(15),
        a = r(24),
        o = r(8),
        s = [].lastIndexOf,
        u = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    n(n.P + n.F * (u || !r(20)(s)), "Array", {
        lastIndexOf: function(t) {
            if (u) return s.apply(this, arguments) || 0;
            var e = i(this),
                r = o(e.length),
                n = r - 1;
            for (arguments.length > 1 && (n = Math.min(n, a(arguments[1]))), n < 0 && (n = r + n); n >= 0; n--)
                if (n in e && e[n] === t) return n || 0;
            return -1
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.P, "Array", {
        copyWithin: r(108)
    }), r(30)("copyWithin")
}, function(t, e, r) {
    var n = r(0);
    n(n.P, "Array", {
        fill: r(83)
    }), r(30)("fill")
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(26)(5),
        a = !0;
    "find" in [] && Array(1).find((function() {
        a = !1
    })), n(n.P + n.F * a, "Array", {
        find: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r(30)("find")
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(26)(6),
        a = "findIndex",
        o = !0;
    a in [] && Array(1)[a]((function() {
        o = !1
    })), n(n.P + n.F * o, "Array", {
        findIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r(30)(a)
}, function(t, e, r) {
    r(38)("Array")
}, function(t, e, r) {
    var n = r(2),
        i = r(70),
        a = r(7).f,
        o = r(37).f,
        s = r(53),
        u = r(55),
        c = n.RegExp,
        l = c,
        f = c.prototype,
        h = /a/g,
        d = /a/g,
        p = new c(h) !== h;
    if (r(6) && (!p || r(3)((function() {
            return d[r(5)("match")] = !1, c(h) != h || c(d) == d || "/a/i" != c(h, "i")
        })))) {
        c = function(t, e) {
            var r = this instanceof c,
                n = s(t),
                a = void 0 === e;
            return !r && n && t.constructor === c && a ? t : i(p ? new l(n && !a ? t.source : t, e) : l((n = t instanceof c) ? t.source : t, n && a ? u.call(t) : e), r ? this : f, c)
        };
        for (var v = function(t) {
                t in c || a(c, t, {
                    configurable: !0,
                    get: function() {
                        return l[t]
                    },
                    set: function(e) {
                        l[t] = e
                    }
                })
            }, y = o(l), g = 0; y.length > g;) v(y[g++]);
        f.constructor = c, c.prototype = f, r(13)(n, "RegExp", c)
    }
    r(38)("RegExp")
}, function(t, e, r) {
    "use strict";
    r(110);
    var n = r(1),
        i = r(55),
        a = r(6),
        o = /./.toString,
        s = function(t) {
            r(13)(RegExp.prototype, "toString", t, !0)
        };
    r(3)((function() {
        return "/a/b" != o.call({
            source: "a",
            flags: "b"
        })
    })) ? s((function() {
        var t = n(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !a && t instanceof RegExp ? i.call(t) : void 0)
    })) : "toString" != o.name && s((function() {
        return o.call(this)
    }))
}, function(t, e, r) {
    r(56)("match", 1, (function(t, e, r) {
        return [function(r) {
            "use strict";
            var n = t(this),
                i = null == r ? void 0 : r[e];
            return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n))
        }, r]
    }))
}, function(t, e, r) {
    r(56)("replace", 2, (function(t, e, r) {
        return [function(n, i) {
            "use strict";
            var a = t(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, a, i) : r.call(String(a), n, i)
        }, r]
    }))
}, function(t, e, r) {
    r(56)("search", 1, (function(t, e, r) {
        return [function(r) {
            "use strict";
            var n = t(this),
                i = null == r ? void 0 : r[e];
            return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n))
        }, r]
    }))
}, function(t, e, r) {
    r(56)("split", 2, (function(t, e, n) {
        "use strict";
        var i = r(53),
            a = n,
            o = [].push;
        if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
            var s = void 0 === /()??/.exec("")[1];
            n = function(t, e) {
                var r = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!i(t)) return a.call(r, t, e);
                var n, u, c, l, f, h = [],
                    d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                    p = 0,
                    v = void 0 === e ? 4294967295 : e >>> 0,
                    y = new RegExp(t.source, d + "g");
                for (s || (n = new RegExp("^" + y.source + "$(?!\\s)", d));
                    (u = y.exec(r)) && !((c = u.index + u[0].length) > p && (h.push(r.slice(p, u.index)), !s && u.length > 1 && u[0].replace(n, (function() {
                        for (f = 1; f < arguments.length - 2; f++) void 0 === arguments[f] && (u[f] = void 0)
                    })), u.length > 1 && u.index < r.length && o.apply(h, u.slice(1)), l = u[0].length, p = c, h.length >= v));) y.lastIndex === u.index && y.lastIndex++;
                return p === r.length ? !l && y.test("") || h.push("") : h.push(r.slice(p)), h.length > v ? h.slice(0, v) : h
            }
        } else "0".split(void 0, 0).length && (n = function(t, e) {
            return void 0 === t && 0 === e ? [] : a.call(this, t, e)
        });
        return [function(r, i) {
            var a = t(this),
                o = null == r ? void 0 : r[e];
            return void 0 !== o ? o.call(r, a, i) : n.call(String(a), r, i)
        }, n]
    }))
}, function(t, e, r) {
    "use strict";
    var n, i, a, o, s = r(33),
        u = r(2),
        c = r(18),
        l = r(48),
        f = r(0),
        h = r(4),
        d = r(10),
        p = r(39),
        v = r(40),
        y = r(57),
        g = r(85).set,
        m = r(86)(),
        b = r(87),
        E = r(111),
        _ = r(112),
        S = u.TypeError,
        T = u.process,
        A = u.Promise,
        w = "process" == l(T),
        R = function() {},
        L = i = b.f,
        O = !! function() {
            try {
                var t = A.resolve(1),
                    e = (t.constructor = {})[r(5)("species")] = function(t) {
                        t(R, R)
                    };
                return (w || "function" == typeof PromiseRejectionEvent) && t.then(R) instanceof e
            } catch (t) {}
        }(),
        I = function(t) {
            var e;
            return !(!h(t) || "function" != typeof(e = t.then)) && e
        },
        D = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var r = t._c;
                m((function() {
                    for (var n = t._v, i = 1 == t._s, a = 0, o = function(e) {
                            var r, a, o = i ? e.ok : e.fail,
                                s = e.resolve,
                                u = e.reject,
                                c = e.domain;
                            try {
                                o ? (i || (2 == t._h && x(t), t._h = 1), !0 === o ? r = n : (c && c.enter(), r = o(n), c && c.exit()), r === e.promise ? u(S("Promise-chain cycle")) : (a = I(r)) ? a.call(r, s, u) : s(r)) : u(n)
                            } catch (t) {
                                u(t)
                            }
                        }; r.length > a;) o(r[a++]);
                    t._c = [], t._n = !1, e && !t._h && k(t)
                }))
            }
        },
        k = function(t) {
            g.call(u, (function() {
                var e, r, n, i = t._v,
                    a = P(t);
                if (a && (e = E((function() {
                        w ? T.emit("unhandledRejection", i, t) : (r = u.onunhandledrejection) ? r({
                            promise: t,
                            reason: i
                        }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", i)
                    })), t._h = w || P(t) ? 2 : 1), t._a = void 0, a && e.e) throw e.v
            }))
        },
        P = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        x = function(t) {
            g.call(u, (function() {
                var e;
                w ? T.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            }))
        },
        C = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), D(e, !0))
        },
        F = function(t) {
            var e, r = this;
            if (!r._d) {
                r._d = !0, r = r._w || r;
                try {
                    if (r === t) throw S("Promise can't be resolved itself");
                    (e = I(t)) ? m((function() {
                        var n = {
                            _w: r,
                            _d: !1
                        };
                        try {
                            e.call(t, c(F, n, 1), c(C, n, 1))
                        } catch (t) {
                            C.call(n, t)
                        }
                    })): (r._v = t, r._s = 1, D(r, !1))
                } catch (t) {
                    C.call({
                        _w: r,
                        _d: !1
                    }, t)
                }
            }
        };
    O || (A = function(t) {
        p(this, A, "Promise", "_h"), d(t), n.call(this);
        try {
            t(c(F, this, 1), c(C, this, 1))
        } catch (t) {
            C.call(this, t)
        }
    }, (n = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = r(41)(A.prototype, {
        then: function(t, e) {
            var r = L(y(this, A));
            return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = w ? T.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && D(this, !1), r.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), a = function() {
        var t = new n;
        this.promise = t, this.resolve = c(F, t, 1), this.reject = c(C, t, 1)
    }, b.f = L = function(t) {
        return t === A || t === o ? new a(t) : i(t)
    }), f(f.G + f.W + f.F * !O, {
        Promise: A
    }), r(42)(A, "Promise"), r(38)("Promise"), o = r(21).Promise, f(f.S + f.F * !O, "Promise", {
        reject: function(t) {
            var e = L(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (s || !O), "Promise", {
        resolve: function(t) {
            return _(s && this === o ? A : this, t)
        }
    }), f(f.S + f.F * !(O && r(54)((function(t) {
        A.all(t).catch(R)
    }))), "Promise", {
        all: function(t) {
            var e = this,
                r = L(e),
                n = r.resolve,
                i = r.reject,
                a = E((function() {
                    var r = [],
                        a = 0,
                        o = 1;
                    v(t, !1, (function(t) {
                        var s = a++,
                            u = !1;
                        r.push(void 0), o++, e.resolve(t).then((function(t) {
                            u || (u = !0, r[s] = t, --o || n(r))
                        }), i)
                    })), --o || n(r)
                }));
            return a.e && i(a.v), r.promise
        },
        race: function(t) {
            var e = this,
                r = L(e),
                n = r.reject,
                i = E((function() {
                    v(t, !1, (function(t) {
                        e.resolve(t).then(r.resolve, n)
                    }))
                }));
            return i.e && n(i.v), r.promise
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(117),
        i = r(45);
    r(58)("WeakSet", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(t) {
            return n.def(i(this, "WeakSet"), t, !0)
        }
    }, n, !1, !0)
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(59),
        a = r(88),
        o = r(1),
        s = r(35),
        u = r(8),
        c = r(4),
        l = r(2).ArrayBuffer,
        f = r(57),
        h = a.ArrayBuffer,
        d = a.DataView,
        p = i.ABV && l.isView,
        v = h.prototype.slice,
        y = i.VIEW;
    n(n.G + n.W + n.F * (l !== h), {
        ArrayBuffer: h
    }), n(n.S + n.F * !i.CONSTR, "ArrayBuffer", {
        isView: function(t) {
            return p && p(t) || c(t) && y in t
        }
    }), n(n.P + n.U + n.F * r(3)((function() {
        return !new h(2).slice(1, void 0).byteLength
    })), "ArrayBuffer", {
        slice: function(t, e) {
            if (void 0 !== v && void 0 === e) return v.call(o(this), t);
            for (var r = o(this).byteLength, n = s(t, r), i = s(void 0 === e ? r : e, r), a = new(f(this, h))(u(i - n)), c = new d(this), l = new d(a), p = 0; n < i;) l.setUint8(p++, c.getUint8(n++));
            return a
        }
    }), r(38)("ArrayBuffer")
}, function(t, e, r) {
    var n = r(0);
    n(n.G + n.W + n.F * !r(59).ABV, {
        DataView: r(88).DataView
    })
}, function(t, e, r) {
    r(27)("Int8", 1, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }))
}, function(t, e, r) {
    r(27)("Uint8", 1, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }))
}, function(t, e, r) {
    r(27)("Uint8", 1, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }), !0)
}, function(t, e, r) {
    r(27)("Int16", 2, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }))
}, function(t, e, r) {
    r(27)("Uint16", 2, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }))
}, function(t, e, r) {
    r(27)("Int32", 4, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }))
}, function(t, e, r) {
    r(27)("Uint32", 4, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }))
}, function(t, e, r) {
    r(27)("Float32", 4, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }))
}, function(t, e, r) {
    r(27)("Float64", 8, (function(t) {
        return function(e, r, n) {
            return t(this, e, r, n)
        }
    }))
}, function(t, e, r) {
    var n = r(0),
        i = r(10),
        a = r(1),
        o = (r(2).Reflect || {}).apply,
        s = Function.apply;
    n(n.S + n.F * !r(3)((function() {
        o((function() {}))
    })), "Reflect", {
        apply: function(t, e, r) {
            var n = i(t),
                u = a(r);
            return o ? o(n, e, u) : s.call(n, e, u)
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(36),
        a = r(10),
        o = r(1),
        s = r(4),
        u = r(3),
        c = r(98),
        l = (r(2).Reflect || {}).construct,
        f = u((function() {
            function t() {}
            return !(l((function() {}), [], t) instanceof t)
        })),
        h = !u((function() {
            l((function() {}))
        }));
    n(n.S + n.F * (f || h), "Reflect", {
        construct: function(t, e) {
            a(t), o(e);
            var r = arguments.length < 3 ? t : a(arguments[2]);
            if (h && !f) return l(t, e, r);
            if (t == r) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var n = [null];
                return n.push.apply(n, e), new(c.apply(t, n))
            }
            var u = r.prototype,
                d = i(s(u) ? u : Object.prototype),
                p = Function.apply.call(t, d, e);
            return s(p) ? p : d
        }
    })
}, function(t, e, r) {
    var n = r(7),
        i = r(0),
        a = r(1),
        o = r(22);
    i(i.S + i.F * r(3)((function() {
        Reflect.defineProperty(n.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    })), "Reflect", {
        defineProperty: function(t, e, r) {
            a(t), e = o(e, !0), a(r);
            try {
                return n.f(t, e, r), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(16).f,
        a = r(1);
    n(n.S, "Reflect", {
        deleteProperty: function(t, e) {
            var r = i(a(t), e);
            return !(r && !r.configurable) && delete t[e]
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(1),
        a = function(t) {
            this._t = i(t), this._i = 0;
            var e, r = this._k = [];
            for (e in t) r.push(e)
        };
    r(76)(a, "Object", (function() {
        var t, e = this._k;
        do {
            if (this._i >= e.length) return {
                value: void 0,
                done: !0
            }
        } while (!((t = e[this._i++]) in this._t));
        return {
            value: t,
            done: !1
        }
    })), n(n.S, "Reflect", {
        enumerate: function(t) {
            return new a(t)
        }
    })
}, function(t, e, r) {
    var n = r(16),
        i = r(17),
        a = r(11),
        o = r(0),
        s = r(4),
        u = r(1);
    o(o.S, "Reflect", {
        get: function t(e, r) {
            var o, c, l = arguments.length < 3 ? e : arguments[2];
            return u(e) === l ? e[r] : (o = n.f(e, r)) ? a(o, "value") ? o.value : void 0 !== o.get ? o.get.call(l) : void 0 : s(c = i(e)) ? t(c, r, l) : void 0
        }
    })
}, function(t, e, r) {
    var n = r(16),
        i = r(0),
        a = r(1);
    i(i.S, "Reflect", {
        getOwnPropertyDescriptor: function(t, e) {
            return n.f(a(t), e)
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(17),
        a = r(1);
    n(n.S, "Reflect", {
        getPrototypeOf: function(t) {
            return i(a(t))
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Reflect", {
        has: function(t, e) {
            return e in t
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(1),
        a = Object.isExtensible;
    n(n.S, "Reflect", {
        isExtensible: function(t) {
            return i(t), !a || a(t)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Reflect", {
        ownKeys: r(119)
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(1),
        a = Object.preventExtensions;
    n(n.S, "Reflect", {
        preventExtensions: function(t) {
            i(t);
            try {
                return a && a(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, r) {
    var n = r(7),
        i = r(16),
        a = r(17),
        o = r(11),
        s = r(0),
        u = r(31),
        c = r(1),
        l = r(4);
    s(s.S, "Reflect", {
        set: function t(e, r, s) {
            var f, h, d = arguments.length < 4 ? e : arguments[3],
                p = i.f(c(e), r);
            if (!p) {
                if (l(h = a(e))) return t(h, r, s, d);
                p = u(0)
            }
            return o(p, "value") ? !(!1 === p.writable || !l(d)) && ((f = i.f(d, r) || u(0)).value = s, n.f(d, r, f), !0) : void 0 !== p.set && (p.set.call(d, s), !0)
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(68);
    i && n(n.S, "Reflect", {
        setPrototypeOf: function(t, e) {
            i.check(t, e);
            try {
                return i.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(50)(!0);
    n(n.P, "Array", {
        includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r(30)("includes")
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(120),
        a = r(9),
        o = r(8),
        s = r(10),
        u = r(82);
    n(n.P, "Array", {
        flatMap: function(t) {
            var e, r, n = a(this);
            return s(t), e = o(n.length), r = u(n, 0), i(r, n, n, e, 0, 1, t, arguments[1]), r
        }
    }), r(30)("flatMap")
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(120),
        a = r(9),
        o = r(8),
        s = r(24),
        u = r(82);
    n(n.P, "Array", {
        flatten: function() {
            var t = arguments[0],
                e = a(this),
                r = o(e.length),
                n = u(e, 0);
            return i(n, e, e, r, 0, void 0 === t ? 1 : s(t)), n
        }
    }), r(30)("flatten")
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(74)(!0);
    n(n.P, "String", {
        at: function(t) {
            return i(this, t)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(121),
        a = r(89);
    n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(a), "String", {
        padStart: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(121),
        a = r(89);
    n(n.P + n.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(a), "String", {
        padEnd: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function(t, e, r) {
    "use strict";
    r(43)("trimLeft", (function(t) {
        return function() {
            return t(this, 1)
        }
    }), "trimStart")
}, function(t, e, r) {
    "use strict";
    r(43)("trimRight", (function(t) {
        return function() {
            return t(this, 2)
        }
    }), "trimEnd")
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(23),
        a = r(8),
        o = r(53),
        s = r(55),
        u = RegExp.prototype,
        c = function(t, e) {
            this._r = t, this._s = e
        };
    r(76)(c, "RegExp String", (function() {
        var t = this._r.exec(this._s);
        return {
            value: t,
            done: null === t
        }
    })), n(n.P, "String", {
        matchAll: function(t) {
            if (i(this), !o(t)) throw TypeError(t + " is not a regexp!");
            var e = String(this),
                r = "flags" in u ? String(t.flags) : s.call(t),
                n = new RegExp(t.source, ~r.indexOf("g") ? r : "g" + r);
            return n.lastIndex = a(t.lastIndex), new c(n, e)
        }
    })
}, function(t, e, r) {
    r(64)("asyncIterator")
}, function(t, e, r) {
    r(64)("observable")
}, function(t, e, r) {
    var n = r(0),
        i = r(119),
        a = r(15),
        o = r(16),
        s = r(80);
    n(n.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, r, n = a(t), u = o.f, c = i(n), l = {}, f = 0; c.length > f;) void 0 !== (r = u(n, e = c[f++])) && s(l, e, r);
            return l
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(122)(!1);
    n(n.S, "Object", {
        values: function(t) {
            return i(t)
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(122)(!0);
    n(n.S, "Object", {
        entries: function(t) {
            return i(t)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(9),
        a = r(10),
        o = r(7);
    r(6) && n(n.P + r(60), "Object", {
        __defineGetter__: function(t, e) {
            o.f(i(this), t, {
                get: a(e),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(9),
        a = r(10),
        o = r(7);
    r(6) && n(n.P + r(60), "Object", {
        __defineSetter__: function(t, e) {
            o.f(i(this), t, {
                set: a(e),
                enumerable: !0,
                configurable: !0
            })
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(9),
        a = r(22),
        o = r(17),
        s = r(16).f;
    r(6) && n(n.P + r(60), "Object", {
        __lookupGetter__: function(t) {
            var e, r = i(this),
                n = a(t, !0);
            do {
                if (e = s(r, n)) return e.get
            } while (r = o(r))
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(9),
        a = r(22),
        o = r(17),
        s = r(16).f;
    r(6) && n(n.P + r(60), "Object", {
        __lookupSetter__: function(t) {
            var e, r = i(this),
                n = a(t, !0);
            do {
                if (e = s(r, n)) return e.set
            } while (r = o(r))
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.P + n.R, "Map", {
        toJSON: r(123)("Map")
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.P + n.R, "Set", {
        toJSON: r(123)("Set")
    })
}, function(t, e, r) {
    r(61)("Map")
}, function(t, e, r) {
    r(61)("Set")
}, function(t, e, r) {
    r(61)("WeakMap")
}, function(t, e, r) {
    r(61)("WeakSet")
}, function(t, e, r) {
    r(62)("Map")
}, function(t, e, r) {
    r(62)("Set")
}, function(t, e, r) {
    r(62)("WeakMap")
}, function(t, e, r) {
    r(62)("WeakSet")
}, function(t, e, r) {
    var n = r(0);
    n(n.G, {
        global: r(2)
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "System", {
        global: r(2)
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(19);
    n(n.S, "Error", {
        isError: function(t) {
            return "Error" === i(t)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        clamp: function(t, e, r) {
            return Math.min(r, Math.max(e, t))
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        DEG_PER_RAD: Math.PI / 180
    })
}, function(t, e, r) {
    var n = r(0),
        i = 180 / Math.PI;
    n(n.S, "Math", {
        degrees: function(t) {
            return t * i
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(125),
        a = r(105);
    n(n.S, "Math", {
        fscale: function(t, e, r, n, o) {
            return a(i(t, e, r, n, o))
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        iaddh: function(t, e, r, n) {
            var i = t >>> 0,
                a = r >>> 0;
            return (e >>> 0) + (n >>> 0) + ((i & a | (i | a) & ~(i + a >>> 0)) >>> 31) | 0
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        isubh: function(t, e, r, n) {
            var i = t >>> 0,
                a = r >>> 0;
            return (e >>> 0) - (n >>> 0) - ((~i & a | ~(i ^ a) & i - a >>> 0) >>> 31) | 0
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        imulh: function(t, e) {
            var r = +t,
                n = +e,
                i = 65535 & r,
                a = 65535 & n,
                o = r >> 16,
                s = n >> 16,
                u = (o * a >>> 0) + (i * a >>> 16);
            return o * s + (u >> 16) + ((i * s >>> 0) + (65535 & u) >> 16)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        RAD_PER_DEG: 180 / Math.PI
    })
}, function(t, e, r) {
    var n = r(0),
        i = Math.PI / 180;
    n(n.S, "Math", {
        radians: function(t) {
            return t * i
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        scale: r(125)
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        umulh: function(t, e) {
            var r = +t,
                n = +e,
                i = 65535 & r,
                a = 65535 & n,
                o = r >>> 16,
                s = n >>> 16,
                u = (o * a >>> 0) + (i * a >>> 16);
            return o * s + (u >>> 16) + ((i * s >>> 0) + (65535 & u) >>> 16)
        }
    })
}, function(t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
        signbit: function(t) {
            return (t = +t) != t ? t : 0 == t ? 1 / t == 1 / 0 : t > 0
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(21),
        a = r(2),
        o = r(57),
        s = r(112);
    n(n.P + n.R, "Promise", {
        finally: function(t) {
            var e = o(this, i.Promise || a.Promise),
                r = "function" == typeof t;
            return this.then(r ? function(r) {
                return s(e, t()).then((function() {
                    return r
                }))
            } : t, r ? function(r) {
                return s(e, t()).then((function() {
                    throw r
                }))
            } : t)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(87),
        a = r(111);
    n(n.S, "Promise", {
        try: function(t) {
            var e = i.f(this),
                r = a(t);
            return (r.e ? e.reject : e.resolve)(r.v), e.promise
        }
    })
}, function(t, e, r) {
    var n = r(28),
        i = r(1),
        a = n.key,
        o = n.set;
    n.exp({
        defineMetadata: function(t, e, r, n) {
            o(t, e, i(r), a(n))
        }
    })
}, function(t, e, r) {
    var n = r(28),
        i = r(1),
        a = n.key,
        o = n.map,
        s = n.store;
    n.exp({
        deleteMetadata: function(t, e) {
            var r = arguments.length < 3 ? void 0 : a(arguments[2]),
                n = o(i(e), r, !1);
            if (void 0 === n || !n.delete(t)) return !1;
            if (n.size) return !0;
            var u = s.get(e);
            return u.delete(r), !!u.size || s.delete(e)
        }
    })
}, function(t, e, r) {
    var n = r(28),
        i = r(1),
        a = r(17),
        o = n.has,
        s = n.get,
        u = n.key,
        c = function(t, e, r) {
            if (o(t, e, r)) return s(t, e, r);
            var n = a(e);
            return null !== n ? c(t, n, r) : void 0
        };
    n.exp({
        getMetadata: function(t, e) {
            return c(t, i(e), arguments.length < 3 ? void 0 : u(arguments[2]))
        }
    })
}, function(t, e, r) {
    var n = r(115),
        i = r(124),
        a = r(28),
        o = r(1),
        s = r(17),
        u = a.keys,
        c = a.key,
        l = function(t, e) {
            var r = u(t, e),
                a = s(t);
            if (null === a) return r;
            var o = l(a, e);
            return o.length ? r.length ? i(new n(r.concat(o))) : o : r
        };
    a.exp({
        getMetadataKeys: function(t) {
            return l(o(t), arguments.length < 2 ? void 0 : c(arguments[1]))
        }
    })
}, function(t, e, r) {
    var n = r(28),
        i = r(1),
        a = n.get,
        o = n.key;
    n.exp({
        getOwnMetadata: function(t, e) {
            return a(t, i(e), arguments.length < 3 ? void 0 : o(arguments[2]))
        }
    })
}, function(t, e, r) {
    var n = r(28),
        i = r(1),
        a = n.keys,
        o = n.key;
    n.exp({
        getOwnMetadataKeys: function(t) {
            return a(i(t), arguments.length < 2 ? void 0 : o(arguments[1]))
        }
    })
}, function(t, e, r) {
    var n = r(28),
        i = r(1),
        a = r(17),
        o = n.has,
        s = n.key,
        u = function(t, e, r) {
            if (o(t, e, r)) return !0;
            var n = a(e);
            return null !== n && u(t, n, r)
        };
    n.exp({
        hasMetadata: function(t, e) {
            return u(t, i(e), arguments.length < 3 ? void 0 : s(arguments[2]))
        }
    })
}, function(t, e, r) {
    var n = r(28),
        i = r(1),
        a = n.has,
        o = n.key;
    n.exp({
        hasOwnMetadata: function(t, e) {
            return a(t, i(e), arguments.length < 3 ? void 0 : o(arguments[2]))
        }
    })
}, function(t, e, r) {
    var n = r(28),
        i = r(1),
        a = r(10),
        o = n.key,
        s = n.set;
    n.exp({
        metadata: function(t, e) {
            return function(r, n) {
                s(t, e, (void 0 !== n ? i : a)(r), o(n))
            }
        }
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(86)(),
        a = r(2).process,
        o = "process" == r(19)(a);
    n(n.G, {
        asap: function(t) {
            var e = o && a.domain;
            i(e ? e.bind(t) : t)
        }
    })
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        i = r(2),
        a = r(21),
        o = r(86)(),
        s = r(5)("observable"),
        u = r(10),
        c = r(1),
        l = r(39),
        f = r(41),
        h = r(12),
        d = r(40),
        p = d.RETURN,
        v = function(t) {
            return null == t ? void 0 : u(t)
        },
        y = function(t) {
            var e = t._c;
            e && (t._c = void 0, e())
        },
        g = function(t) {
            return void 0 === t._o
        },
        m = function(t) {
            g(t) || (t._o = void 0, y(t))
        },
        b = function(t, e) {
            c(t), this._c = void 0, this._o = t, t = new E(this);
            try {
                var r = e(t),
                    n = r;
                null != r && ("function" == typeof r.unsubscribe ? r = function() {
                    n.unsubscribe()
                } : u(r), this._c = r)
            } catch (e) {
                return void t.error(e)
            }
            g(this) && y(this)
        };
    b.prototype = f({}, {
        unsubscribe: function() {
            m(this)
        }
    });
    var E = function(t) {
        this._s = t
    };
    E.prototype = f({}, {
        next: function(t) {
            var e = this._s;
            if (!g(e)) {
                var r = e._o;
                try {
                    var n = v(r.next);
                    if (n) return n.call(r, t)
                } catch (t) {
                    try {
                        m(e)
                    } finally {
                        throw t
                    }
                }
            }
        },
        error: function(t) {
            var e = this._s;
            if (g(e)) throw t;
            var r = e._o;
            e._o = void 0;
            try {
                var n = v(r.error);
                if (!n) throw t;
                t = n.call(r, t)
            } catch (t) {
                try {
                    y(e)
                } finally {
                    throw t
                }
            }
            return y(e), t
        },
        complete: function(t) {
            var e = this._s;
            if (!g(e)) {
                var r = e._o;
                e._o = void 0;
                try {
                    var n = v(r.complete);
                    t = n ? n.call(r, t) : void 0
                } catch (t) {
                    try {
                        y(e)
                    } finally {
                        throw t
                    }
                }
                return y(e), t
            }
        }
    });
    var _ = function(t) {
        l(this, _, "Observable", "_f")._f = u(t)
    };
    f(_.prototype, {
        subscribe: function(t) {
            return new b(t, this._f)
        },
        forEach: function(t) {
            var e = this;
            return new(a.Promise || i.Promise)((function(r, n) {
                u(t);
                var i = e.subscribe({
                    next: function(e) {
                        try {
                            return t(e)
                        } catch (t) {
                            n(t), i.unsubscribe()
                        }
                    },
                    error: n,
                    complete: r
                })
            }))
        }
    }), f(_, {
        from: function(t) {
            var e = "function" == typeof this ? this : _,
                r = v(c(t)[s]);
            if (r) {
                var n = c(r.call(t));
                return n.constructor === e ? n : new e((function(t) {
                    return n.subscribe(t)
                }))
            }
            return new e((function(e) {
                var r = !1;
                return o((function() {
                        if (!r) {
                            try {
                                if (d(t, !1, (function(t) {
                                        if (e.next(t), r) return p
                                    })) === p) return
                            } catch (t) {
                                if (r) throw t;
                                return void e.error(t)
                            }
                            e.complete()
                        }
                    })),
                    function() {
                        r = !0
                    }
            }))
        },
        of: function() {
            for (var t = 0, e = arguments.length, r = new Array(e); t < e;) r[t] = arguments[t++];
            return new("function" == typeof this ? this : _)((function(t) {
                var e = !1;
                return o((function() {
                        if (!e) {
                            for (var n = 0; n < r.length; ++n)
                                if (t.next(r[n]), e) return;
                            t.complete()
                        }
                    })),
                    function() {
                        e = !0
                    }
            }))
        }
    }), h(_.prototype, s, (function() {
        return this
    })), n(n.G, {
        Observable: _
    }), r(38)("Observable")
}, function(t, e, r) {
    var n = r(2),
        i = r(0),
        a = r(89),
        o = [].slice,
        s = /MSIE .\./.test(a),
        u = function(t) {
            return function(e, r) {
                var n = arguments.length > 2,
                    i = !!n && o.call(arguments, 2);
                return t(n ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, i)
                } : e, r)
            }
        };
    i(i.G + i.B + i.F * s, {
        setTimeout: u(n.setTimeout),
        setInterval: u(n.setInterval)
    })
}, function(t, e, r) {
    var n = r(0),
        i = r(85);
    n(n.G + n.B, {
        setImmediate: i.set,
        clearImmediate: i.clear
    })
}, function(t, e, r) {
    for (var n = r(84), i = r(34), a = r(13), o = r(2), s = r(12), u = r(44), c = r(5), l = c("iterator"), f = c("toStringTag"), h = u.Array, d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = i(d), v = 0; v < p.length; v++) {
        var y, g = p[v],
            m = d[g],
            b = o[g],
            E = b && b.prototype;
        if (E && (E[l] || s(E, l, h), E[f] || s(E, f, g), u[g] = h, m))
            for (y in n) E[y] || a(E, y, n[y], !0)
    }
}, function(t, e, r) {
    (function(e) {
        ! function(e) {
            "use strict";
            var r, n = Object.prototype,
                i = n.hasOwnProperty,
                a = "function" == typeof Symbol ? Symbol : {},
                o = a.iterator || "@@iterator",
                s = a.asyncIterator || "@@asyncIterator",
                u = a.toStringTag || "@@toStringTag",
                c = "object" == typeof t,
                l = e.regeneratorRuntime;
            if (l) c && (t.exports = l);
            else {
                (l = e.regeneratorRuntime = c ? t.exports : {}).wrap = E;
                var f = "suspendedStart",
                    h = "suspendedYield",
                    d = "executing",
                    p = "completed",
                    v = {},
                    y = {};
                y[o] = function() {
                    return this
                };
                var g = Object.getPrototypeOf,
                    m = g && g(g(k([])));
                m && m !== n && i.call(m, o) && (y = m);
                var b = A.prototype = S.prototype = Object.create(y);
                T.prototype = b.constructor = A, A.constructor = T, A[u] = T.displayName = "GeneratorFunction", l.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === T || "GeneratorFunction" === (e.displayName || e.name))
                }, l.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, A) : (t.__proto__ = A, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(b), t
                }, l.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, w(R.prototype), R.prototype[s] = function() {
                    return this
                }, l.AsyncIterator = R, l.async = function(t, e, r, n) {
                    var i = new R(E(t, e, r, n));
                    return l.isGeneratorFunction(e) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, w(b), b[u] = "Generator", b[o] = function() {
                    return this
                }, b.toString = function() {
                    return "[object Generator]"
                }, l.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, l.values = k, D.prototype = {
                    constructor: D,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(I), !t)
                            for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(n, i) {
                            return s.type = "throw", s.arg = t, e.next = n, i && (e.method = "next", e.arg = r), !!i
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var u = i.call(o, "catchLoc"),
                                    c = i.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(o)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), I(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var i = n.arg;
                                    I(r)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: k(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = r), v
                    }
                }
            }

            function E(t, e, r, n) {
                var i = e && e.prototype instanceof S ? e : S,
                    a = Object.create(i.prototype),
                    o = new D(n || []);
                return a._invoke = function(t, e, r) {
                    var n = f;
                    return function(i, a) {
                        if (n === d) throw new Error("Generator is already running");
                        if (n === p) {
                            if ("throw" === i) throw a;
                            return P()
                        }
                        for (r.method = i, r.arg = a;;) {
                            var o = r.delegate;
                            if (o) {
                                var s = L(o, r);
                                if (s) {
                                    if (s === v) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (n === f) throw n = p, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = d;
                            var u = _(t, e, r);
                            if ("normal" === u.type) {
                                if (n = r.done ? p : h, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (n = p, r.method = "throw", r.arg = u.arg)
                        }
                    }
                }(t, r, o), a
            }

            function _(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function S() {}

            function T() {}

            function A() {}

            function w(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                }))
            }

            function R(t) {
                function r(e, n, a, o) {
                    var s = _(t[e], t, n);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                            c = u.value;
                        return c && "object" == typeof c && i.call(c, "__await") ? Promise.resolve(c.__await).then((function(t) {
                            r("next", t, a, o)
                        }), (function(t) {
                            r("throw", t, a, o)
                        })) : Promise.resolve(c).then((function(t) {
                            u.value = t, a(u)
                        }), o)
                    }
                    o(s.arg)
                }
                var n;
                "object" == typeof e.process && e.process.domain && (r = e.process.domain.bind(r)), this._invoke = function(t, e) {
                    function i() {
                        return new Promise((function(n, i) {
                            r(t, e, n, i)
                        }))
                    }
                    return n = n ? n.then(i, i) : i()
                }
            }

            function L(t, e) {
                var n = t.iterator[e.method];
                if (n === r) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = r, L(t, e), "throw" === e.method)) return v;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return v
                }
                var i = _(n, t.iterator, e.arg);
                if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, v;
                var a = i.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, v) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
            }

            function O(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function I(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function D(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(O, this), this.reset(!0)
            }

            function k(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            a = function e() {
                                for (; ++n < t.length;)
                                    if (i.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = r, e.done = !0, e
                            };
                        return a.next = a
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: r,
                    done: !0
                }
            }
        }("object" == typeof e ? e : "object" == typeof window ? window : "object" == typeof self ? self : this)
    }).call(this, r(91))
}, function(t, e, r) {
    r(327), t.exports = r(21).RegExp.escape
}, function(t, e, r) {
    var n = r(0),
        i = r(328)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    n(n.S, "RegExp", {
        escape: function(t) {
            return i(t)
        }
    })
}, function(t, e) {
    t.exports = function(t, e) {
        var r = e === Object(e) ? function(t) {
            return e[t]
        } : e;
        return function(e) {
            return String(e).replace(t, r)
        }
    }
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(330),
        i = r(332),
        a = function() {
            function t(t, e, r, a) {
                this._default = {}, this._authToken = "", this._chasing = !1, this.isAuthorized = !1, a && Object.assign(this._default, a), this._auth = new n.default(e, r), this._appId = e, this._options = a, this._player = new i.default(t, this._authToken, a), this._player.appId = this._appId
            }
            return t.prototype.auth = function() {
                var t = this;
                this.authenticate(), setInterval((function() {
                    t.authenticate()
                }), 42e5)
            }, t.prototype.authenticate = function() {
                var t = this;
                this._auth.request().then((function() {
                    t._authToken = t._auth.token, t._player.authToken = t._authToken, t._player.areaId = t._auth.areaId, t.isAuthorized || (t.isAuthorized = !0, t.trigger("authorized"))
                }))
            }, t.prototype.load = function(t) {
                return this._nextPlayer = new i.default(new Audio, this._authToken, this._options), this._nextPlayer.url = t, this._nextPlayer.authToken = this._authToken, this._nextPlayer.areaId = this._auth.areaId, this._nextPlayer.appId = this._appId, this._player && (this._nextPlayer.volume = this._player.volume, this._nextPlayer.lsId = this._player.lsId, this._nextPlayer.length = this._player.length), this._nextPlayer.load(t)
            }, t.prototype.play = function(t) {
                var e = this;
                return this._player.isPlaying() && this._player.stop(), t ? this.load(t).then((function() {
                    if (e._player.destroy(), void 0 !== e._nextPlayer) return e._player = e._nextPlayer, !e._player._isLive && e._player.seektm && e.seek(e._player.seektm.diff(e._player.fttm, "seconds")), e._player.play()
                })) : (void 0 !== this._nextPlayer && (this._player = this._nextPlayer), !this._player._isLive && this._player.seektm && this.seek(this._player.seektm.diff(this._player.fttm, "seconds")), this._player.play())
            }, t.prototype.stop = function() {
                this._player.stop()
            }, t.prototype.pause = function() {
                this._player.pause()
            }, t.prototype.paused = function() {
                return this._player.paused()
            }, t.prototype.volume = function(t) {
                return null != t && (this._player.volume = t), this._player.volume
            }, t.prototype.fttm = function(t) {
                return t && (this._fttm = t), this._fttm
            }, t.prototype.totm = function(t) {
                return t && (this._totm = t), this._totm
            }, t.prototype.seektm = function(t) {
                return t && (this._seektm = t), this._seektm
            }, t.prototype.program_date = function(t) {
                return void 0 !== t && (this._programDate = t), this._programDate
            }, t.prototype.playing_date = function(t) {
                return t && (this._playingDate = t), this._playingDate
            }, t.prototype.chasing = function(t) {
                return null != t && (this._chasing = t), this._chasing
            }, t.prototype.lsId = function(t) {
                return null != t && (this._player.lsId = t), this._player.lsId
            }, t.prototype.length = function(t) {
                return null != t && (this._player.length = t), this._player.length
            }, t.prototype.seek = function(t) {
                this._player.seek(t)
            }, t.prototype.duration = function() {
                return this._player.duration
            }, t.prototype.area_id = function() {
                return this._player.areaId
            }, t.prototype.station_id = function(t) {
                return t && (this._stationId = t), this._stationId
            }, t.prototype.url = function(t) {
                return t && (this._player.url = t, this.load(t)), this._player.url
            }, t.prototype.setPosition = function(t, e) {
                this._auth.setPosition(t, e)
            }, t.prototype.isLive = function() {
                return this._player._isLive
            }, t.prototype.isPlaying = function() {
                return this._player.isPlaying()
            }, t.prototype.canSeek = function() {
                return this._player.canSeek()
            }, t.prototype.connectionType = function() {
                return this._player._connectionType
            }, t.isSupported = function() {
                return i.default.isSupported()
            }, t.version = function() {
                return "2.0.0"
            }, t.prototype.on = function(t, e) {
                window.addEventListener(t, e)
            }, t.prototype.trigger = function(t) {
                var e = document.createEvent("Event");
                e.initEvent(t, !1, !0), window.dispatchEvent(e)
            }, t
        }();
    e.default = a, window.RadikoJSPlayer = a
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r(90);
    var n = r(331),
        i = function() {
            function t(t, e) {
                this._areaId = "", this._token = "", this._authenticated = !1, this._partialKey = "", this._appId = t, this._authKey = e, this._device = n.default.getDevice(), this._host = "undefined" == typeof API_HOST ? location.host : API_HOST
            }
            return t.prototype.auth1 = function() {
                var t = new Headers({
                    "X-Radiko-App": this._appId,
                    "X-Radiko-App-Version": "0.0.1",
                    "X-Radiko-User": "dummy_user",
                    "X-Radiko-Device": this._device
                });
                return fetch("https://" + this._host + "/v2/api/auth1", {
                    headers: t,
                    method: "get",
                    credentials: "include"
                }).catch((function() {
                    console.log("auth1 error")
                }))
            }, t.prototype.auth2 = function() {
                var t = new Headers({
                    "X-Radiko-AuthToken": this._token,
                    "X-Radiko-Partialkey": this._partialKey,
                    "X-Radiko-User": "dummy_user",
                    "X-Radiko-Device": this._device
                });
                return this._lat && this._lng && (t.append("X-Radiko-Location", this._lat + "," + this._lng + ",gps"), t.append("X-Radiko-Connection", "mobile")), fetch("https://" + this._host + "/v2/api/auth2", {
                    headers: t,
                    method: "get",
                    credentials: "include"
                }).catch((function() {
                    console.log("auth2 error")
                }))
            }, t.createPartialkey = function(t, e, r) {
                for (var n = new Uint8Array(t, e, r), i = "", a = 0; a < n.length; a++) i += String.fromCharCode(n[a]);
                return btoa(i)
            }, Object.defineProperty(t.prototype, "areaId", {
                get: function() {
                    return this._areaId
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "areaNameKanji", {
                get: function() {
                    return this._areaNameKanji
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "areaNameEn", {
                get: function() {
                    return this._areaNameEn
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "authenticated", {
                get: function() {
                    return this._authenticated
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "token", {
                get: function() {
                    return this._token
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setPosition = function(t, e) {
                this._lat = t, this._lng = e
            }, t.prototype.request = function() {
                var e = this;
                return this.auth1().then((function(r) {
                    var i = r.headers.get("x-radiko-authtoken"),
                        a = r.headers.get("x-radiko-keyoffset"),
                        o = r.headers.get("x-radiko-keylength");
                    if (null != i && null != a && null != o) return e._token = i, e._partialKey = t.createPartialkey(n.default.str2Buffer(e._authKey), +a, +o), e.auth2();
                    console.log("not found playlist_create_url")
                })).then((function(t) {
                    return t.text()
                })).then((function(t) {
                    var r = (t = t.trim()).split(","),
                        n = r[0],
                        i = r[1],
                        a = r[2];
                    return e._areaId = n, e._areaNameKanji = i, e._areaNameEn = a, e._authenticated = !0, !0
                }))
            }, t
        }();
    e.default = i
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t() {}
        return t.str2Buffer = function(t) {
            return new Uint8Array([].map.call(t, (function(t) {
                return t.charCodeAt(0)
            }))).buffer
        }, t.getDevice = function() {
            var t = window.navigator.userAgent.toLowerCase();
            return -1 != t.indexOf("ipad") ? "ipad" : -1 != t.indexOf("iphone") ? "iphone" : -1 != t.indexOf("android") ? "android" : "pc"
        }, t.isSafari = function() {
            var t = navigator.userAgent.toLowerCase();
            return -1 == t.indexOf("chrome") && -1 == t.indexOf("msie") && -1 == t.indexOf("trident") && -1 == t.indexOf("edge") && -1 == t.indexOf("firefox")
        }, t
    }();
    e.default = n
}, function(t, e, r) {
    "use strict";
    var n = this && this.__awaiter || function(t, e, r, n) {
            return new(r || (r = Promise))((function(i, a) {
                function o(t) {
                    try {
                        u(n.next(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function s(t) {
                    try {
                        u(n.throw(t))
                    } catch (t) {
                        a(t)
                    }
                }

                function u(t) {
                    t.done ? i(t.value) : new r((function(e) {
                        e(t.value)
                    })).then(o, s)
                }
                u((n = n.apply(t, e || [])).next())
            }))
        },
        i = this && this.__generator || function(t, e) {
            var r, n, i, a, o = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return a = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                return this
            }), a;

            function s(a) {
                return function(s) {
                    return function(a) {
                        if (r) throw new TypeError("Generator is already executing.");
                        for (; o;) try {
                            if (r = 1, n && (i = n[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(i = i.call(n, a[1])).done) return i;
                            switch (n = 0, i && (a = [0, i.value]), a[0]) {
                                case 0:
                                case 1:
                                    i = a;
                                    break;
                                case 4:
                                    return o.label++, {
                                        value: a[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++, n = a[1], a = [0];
                                    continue;
                                case 7:
                                    a = o.ops.pop(), o.trys.pop();
                                    continue;
                                default:
                                    if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                        o.label = a[1];
                                        break
                                    }
                                    if (6 === a[0] && o.label < i[1]) {
                                        o.label = i[1], i = a;
                                        break
                                    }
                                    if (i && o.label < i[2]) {
                                        o.label = i[2], o.ops.push(a);
                                        break
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue
                            }
                            a = e.call(t, o)
                        } catch (t) {
                            a = [6, t], n = 0
                        } finally {
                            r = i = 0
                        }
                        if (5 & a[0]) throw a[1];
                        return {
                            value: a[0] ? a[1] : void 0,
                            done: !0
                        }
                    }([a, s])
                }
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = r(333),
        o = r(334),
        s = r(335),
        u = r(336),
        c = r(337),
        l = function() {
            function t(t, e, r) {
                var n;
                this._liveBaseSec = 0, this._url = "", this._areaId = "", this._lsId = "", this._length = 15, this._isLive = !1, this._authToken = e, this._host = "undefined" == typeof API_HOST ? location.host : API_HOST, o.isSupported() && !s.apple.device && (this._hls = this.createHls()), this._audio = t, this._audio.volume = .5, this._callbacks = r, r && (n = {
                    isAreaFree: r.isRadikoAreafree,
                    containStation: r.isStationInArea
                }), this._playlistManager = new u.PlaylistManager(n)
            }
            return Object.defineProperty(t.prototype, "lsId", {
                get: function() {
                    return this._lsId
                },
                set: function(t) {
                    this._lsId = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "length", {
                get: function() {
                    return this._length
                },
                set: function(t) {
                    this._length = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "appId", {
                set: function(t) {
                    this._appId = t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.createHls = function() {
                var t = this,
                    e = !/radiko\.jp/.test(location.host);
                return new o({
                    debug: e,
                    xhrSetup: function(e, r) {
                        null !== r.match(/playlist.m3u8/) && (e.setRequestHeader("X-Radiko-AuthToken", t._authToken), e.setRequestHeader("X-Radiko-AreaId", t._areaId)), e.withCredentials = null == r.match(/(wowza|smartstream\.ne\.jp)/)
                    },
                    maxMaxBufferLength: 30,
                    defaultAudioCodec: "mp4a.40.5",
                    fragLoadingMaxRetry: 2,
                    levelLoadingMaxRetry: 2
                })
            }, t.prototype.hlsPlaybackCompleteHandler = function(t) {
                return function() {
                    t()
                }
            }, t.prototype.currentTimeChangeHandler = function(t) {
                var e = this;
                return function(r) {
                    var n, i;
                    e._audio.paused && !e._audio.ended || (e._audio.ended ? (n = e.totm.diff(e.fttm, "seconds"), i = e.totm.diff(e.fttm, "seconds")) : (n = e.currentTime, i = e.duration), t({
                        position: n,
                        duration: i,
                        backbuffer: 0,
                        buffer: 0,
                        live_sliding_altaudio: 0,
                        live_sliding_main: 0
                    }))
                }
            }, t.prototype.playStateChangeHandler = function(t) {
                return function(e) {
                    var r = "";
                    switch (e.type) {
                        case "playing":
                            r = "playing";
                            break;
                        case "pause":
                        case "ended":
                            r = "stopped"
                    }
                    t(r)
                }
            }, t.prototype.fragmentPlayingHandler = function(t) {
                var e = this;
                return function(r, n) {
                    t({
                        program_date: n ? n.frag.rawProgramDateTime : e.fttm ? +e.fttm.valueOf() : 0
                    })
                }
            }, t.prototype.fragmentLoadedHandler = function(t) {
                return function(e, r) {
                    t(r.frag)
                }
            }, t.prototype.chunkListLoadedHandler = function(t) {
                return function(e, r) {
                    t(r.details)
                }
            }, t.prototype.hlsErrorHandler = function(t) {
                var e = this;
                return function(r, n) {
                    if ([o.ErrorDetails.MANIFEST_LOAD_TIMEOUT, o.ErrorDetails.MANIFEST_LOAD_ERROR].includes(n.details)) {
                        var i = e.requestUrls.next();
                        if (!1 === i.done) return void e.loadHlsjs(i.value).then((function() {
                            e.play()
                        }))
                    }!0 === n.fatal && t(n)
                }
            }, t.prototype.bind = function(t) {
                if (void 0 !== t) {
                    if (t.onHLSPlaybackComplete && this._audio.addEventListener("ended", this.hlsPlaybackCompleteHandler(t.onHLSPlaybackComplete)), t.onPlayStateChange) {
                        var e = this.playStateChangeHandler(t.onPlayStateChange);
                        this._audio.addEventListener("playing", e), this._audio.addEventListener("pause", e), this._audio.addEventListener("ended", e)
                    }
                    t.onCurrentTimeChange && this._audio.addEventListener("timeupdate", this.currentTimeChangeHandler(t.onCurrentTimeChange)), t.onFragmentPlaying && this._audio.addEventListener("play", this.fragmentPlayingHandler(t.onFragmentPlaying)), this._hls && t.onFragmentPlaying && this._hls.on(o.Events.FRAG_LOADING, this.fragmentPlayingHandler(t.onFragmentPlaying)), this._hls && t.onChunkListLoaded && this._hls.on(o.Events.LEVEL_LOADED, this.chunkListLoadedHandler(t.onChunkListLoaded)), t.onLoadStateReady && this._audio.addEventListener("play", t.onLoadStateReady), t.onLoadStateError && (this._audio.addEventListener("error", t.onLoadStateError), this._hls && this._hls.on(o.Events.ERROR, this.hlsErrorHandler(t.onLoadStateError))), t.onAuthFailure
                }
            }, t.prototype.load = function(t) {
                return n(this, void 0, void 0, (function() {
                    var e, r, n, a, o, s, u, l;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return (e = this.parse(t)).set("lsid", this._lsId), this._playlistManager.areaId = this._areaId, this._playlistManager.stationId = e.get("station_id"), this._playlistManager.playlistType = e.get("start_at") ? 1 : 0, [4, this.getPlaylistUrl(e.get("station_id"))];
                            case 1:
                                for (r = i.sent(), n = [], a = this.buildPlaylistParam(e), o = 0, s = r; o < s.length; o++)(u = s[o]).includes("?") ? n.push(u + "&" + a) : n.push(u + "?" + a);
                                return this.requestUrls = new c.default(n), l = this.requestUrls.next().value, this._hls ? [2, this.loadHlsjs(l)] : [2, this.loadNative(l)]
                        }
                    }))
                }))
            }, t.prototype.loadHlsjs = function(t) {
                var e = this;
                return this._hls.destroy(), new Promise((function(r, n) {
                    e._hls = e.createHls(), e.bind(e._callbacks), e._hls.attachMedia(e._audio), e._hls.on(o.Events.MEDIA_ATTACHED, (function() {
                        null != e._hls && (e._hls.loadSource(t), e._audio.addEventListener("canplay", (function() {
                            e._isLive = e._hls.levels[0].details.live, r()
                        }), {
                            once: !0
                        }))
                    }))
                }))
            }, t.prototype.loadNative = function(t) {
                return n(this, void 0, void 0, (function() {
                    var e, r, n, a = this;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return e = new Headers({
                                    "X-Radiko-AuthToken": this._authToken
                                }), [4, fetch(t, {
                                    headers: e
                                })];
                            case 1:
                                return [4, i.sent().text()];
                            case 2:
                                if (r = i.sent(), !(n = r.split(/\n/).find((function(t) {
                                        return /.m3u8/.test(t)
                                    })))) throw this._callbacks && this._callbacks.onLoadStateError && this._callbacks.onLoadStateError({}), "Cannot find resource url";
                                return this.bind(this._callbacks), [2, new Promise((function(t, e) {
                                    a._audio.addEventListener("loadstart", (function() {
                                        a._isLive = Number.POSITIVE_INFINITY == a._audio.duration, t()
                                    })), a._audio.setAttribute("src", n)
                                }))]
                        }
                    }))
                }))
            }, Object.defineProperty(t.prototype, "authToken", {
                set: function(t) {
                    this._authToken = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "url", {
                get: function() {
                    return this._url
                },
                set: function(t) {
                    this._url = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "areaId", {
                get: function() {
                    return this._areaId
                },
                set: function(t) {
                    this._areaId = t
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "currentTime", {
                get: function() {
                    return isNaN(this._audio.duration) && this.seektm ? 0 : this._audio.currentTime
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "duration", {
                get: function() {
                    return this.totm ? this.totm.unix() - this.fttm.unix() : 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "volume", {
                get: function() {
                    return this._audio.volume
                },
                set: function(t) {
                    this._audio.volume = t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.parse = function(t) {
                var e = this,
                    r = new Map;
                if (null == t.match(/\?(.*)/)) {
                    if (t.match(/^#(.+)/)) return r.set("station_id", RegExp.$1), r.set("l", this._length), r;
                    throw "Empty URL"
                }
                return Array.from(this.URLSearchParams(t)).forEach((function(t) {
                    var n = t[0],
                        i = t[1];
                    switch (n) {
                        case "ft":
                            var o = a(i, "YYYYMMDDHHmmss");
                            r.set("start_at", o.format("YYYYMMDDHHmmss")), r.set("ft", o.format("YYYYMMDDHHmmss")), e.fttm = o;
                            break;
                        case "to":
                            var s = a(i, "YYYYMMDDHHmmss");
                            r.set("end_at", s.format("YYYYMMDDHHmmss")), r.set("to", s.format("YYYYMMDDHHmmss")), e.totm = s;
                            break;
                        case "seek":
                            var u = a(i, "YYYYMMDDHHmmss");
                            r.set("seek", u.format("YYYYMMDDHHmmss")), e.seektm = u;
                            break;
                        case "l":
                            break;
                        default:
                            r.set(n, i)
                    }
                })), r.set("l", this._length), r
            }, t.prototype.URLSearchParams = function(t) {
                var e = /\?(.*)/.exec(t);
                if (null === e) return new Map;
                var r = new Map;
                return e[1].split("&").forEach((function(t) {
                    var e = t.split("="),
                        n = e[0],
                        i = e[1];
                    r.set(n, i)
                })), r
            }, t.prototype.buildParams = function(t) {
                return "" + Array.from(t).map((function(t) {
                    return t[0] + "=" + t[1]
                })).join("&")
            }, t.prototype.buildPlaylistParam = function(t) {
                return this._connectionType = this._playlistManager.connectionType, t.set("type", this._connectionType), this.buildParams(t)
            }, t.prototype.getPlaylistUrl = function(t) {
                return n(this, void 0, void 0, (function() {
                    var response, xml;
                    return i(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, fetch("http://" + this._host + "/v3/station/stream/" + this._appId + "/" + t + ".xml", {
                                    method: "get"
                                })];
                            case 1:
                                return [4, n.sent().text()];
                            case 2:
                                return response = n.sent(), xml = (new DOMParser).parseFromString(response, "text/xml"), [2, this._playlistManager.extractEndpoints(xml)]
                        }
                    }))
                }))
            }, t.prototype.play = function() {
                var t = this;
                return this._liveBaseSec = 0, this._audio.play(), new Promise((function(e, r) {
                    t._audio.addEventListener("playing", (function() {
                        e()
                    }), {
                        once: !0
                    })
                }))
            }, t.prototype.stop = function() {
                this.pause(), this._audio.currentTime = 0
            }, t.prototype.pause = function() {
                this._hls && this._hls.stopLoad(), this._audio.pause()
            }, t.prototype.seek = function(t) {
                this._audio.currentTime = t
            }, t.prototype.isPlaying = function() {
                return !this._audio.paused
            }, t.prototype.canSeek = function() {
                return Boolean(this._hls && 0 == this._isLive)
            }, t.prototype.seeking = function() {
                return 0 != this._audio.seekable.length
            }, t.prototype.paused = function() {
                return this._audio.paused
            }, t.prototype.destroy = function() {
                this._hls ? this._hls.destroy() : (this._audio.preload = "none", this._audio.src = null)
            }, t.isSupported = function() {
                return o.isSupported()
            }, t
        }();
    e.default = l
}, function(t, e) {
    t.exports = moment
}, function(t, e, r) {
    "undefined" != typeof self && self, t.exports = function(t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.d = function(t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, e.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "/dist/", e(e.s = 27)
    }([function(t, e, r) {
        "use strict";

        function n() {}

        function i(t, e) {
            return "[" + t + "] > " + e
        }

        function a(t) {
            var e = self.console[t];
            return e ? function() {
                for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                n[0] && (n[0] = i(t, n[0])), e.apply(self.console, n)
            } : n
        }
        r.d(e, "a", (function() {
            return c
        })), r.d(e, "b", (function() {
            return l
        }));
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            s = {
                trace: n,
                debug: n,
                log: n,
                warn: n,
                info: n,
                error: n
            },
            u = s,
            c = function(t) {
                if (!0 === t || "object" === (void 0 === t ? "undefined" : o(t))) {
                    ! function(t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                        r.forEach((function(e) {
                            u[e] = t[e] ? t[e].bind(t) : a(e)
                        }))
                    }(t, "debug", "log", "info", "warn", "error");
                    try {
                        u.log()
                    } catch (t) {
                        u = s
                    }
                } else u = s
            },
            l = s
    }, function(t, e, r) {
        "use strict";
        e.a = {
            MEDIA_ATTACHING: "hlsMediaAttaching",
            MEDIA_ATTACHED: "hlsMediaAttached",
            MEDIA_DETACHING: "hlsMediaDetaching",
            MEDIA_DETACHED: "hlsMediaDetached",
            BUFFER_RESET: "hlsBufferReset",
            BUFFER_CODECS: "hlsBufferCodecs",
            BUFFER_CREATED: "hlsBufferCreated",
            BUFFER_APPENDING: "hlsBufferAppending",
            BUFFER_APPENDED: "hlsBufferAppended",
            BUFFER_EOS: "hlsBufferEos",
            BUFFER_FLUSHING: "hlsBufferFlushing",
            BUFFER_FLUSHED: "hlsBufferFlushed",
            MANIFEST_LOADING: "hlsManifestLoading",
            MANIFEST_LOADED: "hlsManifestLoaded",
            MANIFEST_PARSED: "hlsManifestParsed",
            LEVEL_SWITCHING: "hlsLevelSwitching",
            LEVEL_SWITCHED: "hlsLevelSwitched",
            LEVEL_LOADING: "hlsLevelLoading",
            LEVEL_LOADED: "hlsLevelLoaded",
            LEVEL_UPDATED: "hlsLevelUpdated",
            LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
            AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
            AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
            AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
            AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
            AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
            SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
            SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
            SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
            SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
            SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
            INIT_PTS_FOUND: "hlsInitPtsFound",
            FRAG_LOADING: "hlsFragLoading",
            FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
            FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
            FRAG_LOADED: "hlsFragLoaded",
            FRAG_DECRYPTED: "hlsFragDecrypted",
            FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
            FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
            FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
            FRAG_PARSING_DATA: "hlsFragParsingData",
            FRAG_PARSED: "hlsFragParsed",
            FRAG_BUFFERED: "hlsFragBuffered",
            FRAG_CHANGED: "hlsFragChanged",
            FPS_DROP: "hlsFpsDrop",
            FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
            ERROR: "hlsError",
            DESTROYING: "hlsDestroying",
            KEY_LOADING: "hlsKeyLoading",
            KEY_LOADED: "hlsKeyLoaded",
            STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
        }
    }, function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return n
        })), r.d(e, "a", (function() {
            return i
        }));
        var n = {
                NETWORK_ERROR: "networkError",
                MEDIA_ERROR: "mediaError",
                KEY_SYSTEM_ERROR: "keySystemError",
                MUX_ERROR: "muxError",
                OTHER_ERROR: "otherError"
            },
            i = {
                KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
                KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
                KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
                KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
                MANIFEST_LOAD_ERROR: "manifestLoadError",
                MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                MANIFEST_PARSING_ERROR: "manifestParsingError",
                MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                LEVEL_LOAD_ERROR: "levelLoadError",
                LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                LEVEL_SWITCH_ERROR: "levelSwitchError",
                AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                FRAG_LOAD_ERROR: "fragLoadError",
                FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                FRAG_DECRYPT_ERROR: "fragDecryptError",
                FRAG_PARSING_ERROR: "fragParsingError",
                REMUX_ALLOC_ERROR: "remuxAllocError",
                KEY_LOAD_ERROR: "keyLoadError",
                KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                BUFFER_APPEND_ERROR: "bufferAppendError",
                BUFFER_APPENDING_ERROR: "bufferAppendingError",
                BUFFER_STALLED_ERROR: "bufferStalledError",
                BUFFER_FULL_ERROR: "bufferFullError",
                BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
                INTERNAL_EXCEPTION: "internalException"
            }
    }, function(t, e, r) {
        "use strict";
        var n = r(0),
            i = r(2),
            a = r(1),
            o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            s = new Set(["hlsEventGeneric", "hlsHandlerDestroying", "hlsHandlerDestroyed"]),
            u = function() {
                function t(e) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.hls = e, this.onEvent = this.onEvent.bind(this);
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    this.handledEvents = n, this.useGenericHandler = !0, this.registerListeners()
                }
                return t.prototype.destroy = function() {
                    this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed()
                }, t.prototype.onHandlerDestroying = function() {}, t.prototype.onHandlerDestroyed = function() {}, t.prototype.isEventHandler = function() {
                    return "object" === o(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
                }, t.prototype.registerListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach((function(t) {
                        if (s.has(t)) throw new Error("Forbidden event-name: " + t);
                        this.hls.on(t, this.onEvent)
                    }), this)
                }, t.prototype.unregisterListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach((function(t) {
                        this.hls.off(t, this.onEvent)
                    }), this)
                }, t.prototype.onEvent = function(t, e) {
                    this.onEventGeneric(t, e)
                }, t.prototype.onEventGeneric = function(t, e) {
                    try {
                        (function(t, e) {
                            var r = "on" + t.replace("hls", "");
                            if ("function" != typeof this[r]) throw new Error("Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                            return this[r].bind(this, e)
                        }).call(this, t, e).call()
                    } catch (e) {
                        n.b.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), this.hls.trigger(a.a.ERROR, {
                            type: i.b.OTHER_ERROR,
                            details: i.a.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: t,
                            err: e
                        })
                    }
                }, t
            }();
        e.a = u
    }, function(t, e, r) {
        ! function(e) {
            var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
                n = /^([^\/;?#]*)(.*)$/,
                i = /(?:\/|^)\.(?=\/)/g,
                a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
                o = {
                    buildAbsoluteURL: function(t, e, r) {
                        if (r = r || {}, t = t.trim(), !(e = e.trim())) {
                            if (!r.alwaysNormalize) return t;
                            var i = this.parseURL(t);
                            if (!s) throw new Error("Error trying to parse base URL.");
                            return i.path = o.normalizePath(i.path), o.buildURLFromParts(i)
                        }
                        var a = this.parseURL(e);
                        if (!a) throw new Error("Error trying to parse relative URL.");
                        if (a.scheme) return r.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : e;
                        var s = this.parseURL(t);
                        if (!s) throw new Error("Error trying to parse base URL.");
                        if (!s.netLoc && s.path && "/" !== s.path[0]) {
                            var u = n.exec(s.path);
                            s.netLoc = u[1], s.path = u[2]
                        }
                        s.netLoc && !s.path && (s.path = "/");
                        var c = {
                            scheme: s.scheme,
                            netLoc: a.netLoc,
                            path: null,
                            params: a.params,
                            query: a.query,
                            fragment: a.fragment
                        };
                        if (!a.netLoc && (c.netLoc = s.netLoc, "/" !== a.path[0]))
                            if (a.path) {
                                var l = s.path,
                                    f = l.substring(0, l.lastIndexOf("/") + 1) + a.path;
                                c.path = o.normalizePath(f)
                            } else c.path = s.path, a.params || (c.params = s.params, a.query || (c.query = s.query));
                        return null === c.path && (c.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path), o.buildURLFromParts(c)
                    },
                    parseURL: function(t) {
                        var e = r.exec(t);
                        return e ? {
                            scheme: e[1] || "",
                            netLoc: e[2] || "",
                            path: e[3] || "",
                            params: e[4] || "",
                            query: e[5] || "",
                            fragment: e[6] || ""
                        } : null
                    },
                    normalizePath: function(t) {
                        for (t = t.split("").reverse().join("").replace(i, ""); t.length !== (t = t.replace(a, "")).length;);
                        return t.split("").reverse().join("")
                    },
                    buildURLFromParts: function(t) {
                        return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                    }
                };
            t.exports = o
        }()
    }, function(t, e, r) {
        "use strict";
        r.d(e, "b", (function() {
            return i
        }));
        var n = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return t.isHeader = function(t, e) {
                    return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                }, t.isFooter = function(t, e) {
                    return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                }, t.getID3Data = function(e, r) {
                    for (var n = r, i = 0; t.isHeader(e, r);) i += 10, i += t._readSize(e, r + 6), t.isFooter(e, r + 10) && (i += 10), r += i;
                    if (i > 0) return e.subarray(n, n + i)
                }, t._readSize = function(t, e) {
                    var r = 0;
                    return r = (127 & t[e]) << 21, r |= (127 & t[e + 1]) << 14, (r |= (127 & t[e + 2]) << 7) | 127 & t[e + 3]
                }, t.getTimeStamp = function(e) {
                    for (var r = t.getID3Frames(e), n = 0; n < r.length; n++) {
                        var i = r[n];
                        if (t.isTimeStampFrame(i)) return t._readTimeStamp(i)
                    }
                }, t.isTimeStampFrame = function(t) {
                    return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
                }, t._getFrameData = function(e) {
                    var r = String.fromCharCode(e[0], e[1], e[2], e[3]),
                        n = t._readSize(e, 4);
                    return {
                        type: r,
                        size: n,
                        data: e.subarray(10, 10 + n)
                    }
                }, t.getID3Frames = function(e) {
                    for (var r = 0, n = []; t.isHeader(e, r);) {
                        for (var i = t._readSize(e, r + 6), a = (r += 10) + i; r + 8 < a;) {
                            var o = t._getFrameData(e.subarray(r)),
                                s = t._decodeFrame(o);
                            s && n.push(s), r += o.size + 10
                        }
                        t.isFooter(e, r) && (r += 10)
                    }
                    return n
                }, t._decodeFrame = function(e) {
                    return "PRIV" === e.type ? t._decodePrivFrame(e) : "T" === e.type[0] ? t._decodeTextFrame(e) : "W" === e.type[0] ? t._decodeURLFrame(e) : void 0
                }, t._readTimeStamp = function(t) {
                    if (8 === t.data.byteLength) {
                        var e = new Uint8Array(t.data),
                            r = 1 & e[3],
                            n = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                        return n /= 45, r && (n += 47721858.84), Math.round(n)
                    }
                }, t._decodePrivFrame = function(e) {
                    if (!(e.size < 2)) {
                        var r = t._utf8ArrayToStr(e.data, !0),
                            n = new Uint8Array(e.data.subarray(r.length + 1));
                        return {
                            key: e.type,
                            info: r,
                            data: n.buffer
                        }
                    }
                }, t._decodeTextFrame = function(e) {
                    if (!(e.size < 2)) {
                        if ("TXXX" === e.type) {
                            var r = 1,
                                n = t._utf8ArrayToStr(e.data.subarray(r));
                            r += n.length + 1;
                            var i = t._utf8ArrayToStr(e.data.subarray(r));
                            return {
                                key: e.type,
                                info: n,
                                data: i
                            }
                        }
                        var a = t._utf8ArrayToStr(e.data.subarray(1));
                        return {
                            key: e.type,
                            data: a
                        }
                    }
                }, t._decodeURLFrame = function(e) {
                    if ("WXXX" === e.type) {
                        if (e.size < 2) return;
                        var r = 1,
                            n = t._utf8ArrayToStr(e.data.subarray(r));
                        r += n.length + 1;
                        var i = t._utf8ArrayToStr(e.data.subarray(r));
                        return {
                            key: e.type,
                            info: n,
                            data: i
                        }
                    }
                    var a = t._utf8ArrayToStr(e.data);
                    return {
                        key: e.type,
                        data: a
                    }
                }, t._utf8ArrayToStr = function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = t.length, n = void 0, i = void 0, a = void 0, o = "", s = 0; s < r;) {
                        if (0 === (n = t[s++]) && e) return o;
                        if (0 !== n && 3 !== n) switch (n >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                o += String.fromCharCode(n);
                                break;
                            case 12:
                            case 13:
                                i = t[s++], o += String.fromCharCode((31 & n) << 6 | 63 & i);
                                break;
                            case 14:
                                i = t[s++], a = t[s++], o += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | (63 & a) << 0)
                        }
                    }
                    return o
                }, t
            }(),
            i = n._utf8ArrayToStr;
        e.a = n
    }, function(t, e, r) {
        "use strict";
        var n = r(4),
            i = r.n(n),
            a = r(16),
            o = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            s = function() {
                function t() {
                    var e;
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [], this._elementaryStreams = ((e = {})[t.ElementaryStreamTypes.AUDIO] = !1, e[t.ElementaryStreamTypes.VIDEO] = !1, e)
                }
                return t.prototype.addElementaryStream = function(t) {
                    this._elementaryStreams[t] = !0
                }, t.prototype.hasElementaryStream = function(t) {
                    return !0 === this._elementaryStreams[t]
                }, t.prototype.createInitializationVector = function(t) {
                    for (var e = new Uint8Array(16), r = 12; r < 16; r++) e[r] = t >> 8 * (15 - r) & 255;
                    return e
                }, t.prototype.fragmentDecryptdataFromLevelkey = function(t, e) {
                    var r = t;
                    return t && t.method && t.uri && !t.iv && ((r = new a.a).method = t.method, r.baseuri = t.baseuri, r.reluri = t.reluri, r.iv = this.createInitializationVector(e)), r
                }, o(t, [{
                    key: "url",
                    get: function() {
                        return !this._url && this.relurl && (this._url = i.a.buildAbsoluteURL(this.baseurl, this.relurl, {
                            alwaysNormalize: !0
                        })), this._url
                    },
                    set: function(t) {
                        this._url = t
                    }
                }, {
                    key: "programDateTime",
                    get: function() {
                        return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime
                    }
                }, {
                    key: "byteRange",
                    get: function() {
                        if (!this._byteRange && !this.rawByteRange) return [];
                        if (this._byteRange) return this._byteRange;
                        var t = [];
                        if (this.rawByteRange) {
                            var e = this.rawByteRange.split("@", 2);
                            if (1 === e.length) {
                                var r = this.lastByteRangeEndOffset;
                                t[0] = r || 0
                            } else t[0] = parseInt(e[1]);
                            t[1] = parseInt(e[0]) + t[0], this._byteRange = t
                        }
                        return t
                    }
                }, {
                    key: "byteRangeStartOffset",
                    get: function() {
                        return this.byteRange[0]
                    }
                }, {
                    key: "byteRangeEndOffset",
                    get: function() {
                        return this.byteRange[1]
                    }
                }, {
                    key: "decryptdata",
                    get: function() {
                        return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
                    }
                }], [{
                    key: "ElementaryStreamTypes",
                    get: function() {
                        return {
                            AUDIO: "audio",
                            VIDEO: "video"
                        }
                    }
                }]), t
            }();
        e.a = s
    }, function(t, e, r) {
        "use strict";
        e.a = {
            search: function(t, e) {
                for (var r = 0, n = t.length - 1, i = null, a = null; r <= n;) {
                    var o = e(a = t[i = (r + n) / 2 | 0]);
                    if (o > 0) r = i + 1;
                    else {
                        if (!(o < 0)) return a;
                        n = i - 1
                    }
                }
                return null
            }
        }
    }, function(t, e, r) {
        "use strict";
        e.a = {
            isBuffered: function(t, e) {
                try {
                    if (t)
                        for (var r = t.buffered, n = 0; n < r.length; n++)
                            if (e >= r.start(n) && e <= r.end(n)) return !0
                } catch (t) {}
                return !1
            },
            bufferInfo: function(t, e, r) {
                try {
                    if (t) {
                        var n = t.buffered,
                            i = [],
                            a = void 0;
                        for (a = 0; a < n.length; a++) i.push({
                            start: n.start(a),
                            end: n.end(a)
                        });
                        return this.bufferedInfo(i, e, r)
                    }
                } catch (t) {}
                return {
                    len: 0,
                    start: e,
                    end: e,
                    nextStart: void 0
                }
            },
            bufferedInfo: function(t, e, r) {
                var n = [],
                    i = void 0,
                    a = void 0,
                    o = void 0,
                    s = void 0,
                    u = void 0;
                for (t.sort((function(t, e) {
                        return t.start - e.start || e.end - t.end
                    })), u = 0; u < t.length; u++) {
                    var c = n.length;
                    if (c) {
                        var l = n[c - 1].end;
                        t[u].start - l < r ? t[u].end > l && (n[c - 1].end = t[u].end) : n.push(t[u])
                    } else n.push(t[u])
                }
                for (u = 0, i = 0, a = o = e; u < n.length; u++) {
                    var f = n[u].start,
                        h = n[u].end;
                    if (e + r >= f && e < h) a = f, i = (o = h) - e;
                    else if (e + r < f) {
                        s = f;
                        break
                    }
                }
                return {
                    len: i,
                    start: a,
                    end: o,
                    nextStart: s
                }
            }
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(33),
            i = r(34),
            a = r(35),
            o = r(2),
            s = r(0),
            u = function() {
                function t(e, r) {
                    var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).removePKCS7Padding,
                        i = void 0 === n || n;
                    if (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.logEnabled = !0, this.observer = e, this.config = r, this.removePKCS7Padding = i, i) try {
                        var a = crypto || self.crypto;
                        this.subtle = a.subtle || a.webkitSubtle
                    } catch (t) {}
                    this.disableWebCrypto = !this.subtle
                }
                return t.prototype.isSync = function() {
                    return this.disableWebCrypto && this.config.enableSoftwareAES
                }, t.prototype.decrypt = function(t, e, r, o) {
                    var u = this;
                    if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                        this.logEnabled && (s.b.log("JS AES decrypt"), this.logEnabled = !1);
                        var c = this.decryptor;
                        c || (this.decryptor = c = new a.a), c.expandKey(e), o(c.decrypt(t, 0, r, this.removePKCS7Padding))
                    } else {
                        this.logEnabled && (s.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                        var l = this.subtle;
                        this.key !== e && (this.key = e, this.fastAesKey = new i.a(l, e)), this.fastAesKey.expandKey().then((function(i) {
                            new n.a(l, r).decrypt(t, i).catch((function(n) {
                                u.onWebCryptoError(n, t, e, r, o)
                            })).then((function(t) {
                                o(t)
                            }))
                        })).catch((function(n) {
                            u.onWebCryptoError(n, t, e, r, o)
                        }))
                    }
                }, t.prototype.onWebCryptoError = function(t, e, r, n, i) {
                    this.config.enableSoftwareAES ? (s.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(e, r, n, i)) : (s.b.error("decrypting error : " + t.message), this.observer.trigger(Event.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.FRAG_DECRYPT_ERROR,
                        fatal: !0,
                        reason: t.message
                    }))
                }, t.prototype.destroy = function() {
                    var t = this.decryptor;
                    t && (t.destroy(), this.decryptor = void 0)
                }, t
            }();
        e.a = u
    }, function(t, e) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function n(t) {
            return "function" == typeof t
        }

        function i(t) {
            return "object" == typeof t && null !== t
        }

        function a(t) {
            return void 0 === t
        }
        t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(t) {
            if (! function(t) {
                    return "number" == typeof t
                }(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
            return this._maxListeners = t, this
        }, r.prototype.emit = function(t) {
            var e, r, o, s, u, c;
            if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if ((e = arguments[1]) instanceof Error) throw e;
                var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw l.context = e, l
            }
            if (a(r = this._events[t])) return !1;
            if (n(r)) switch (arguments.length) {
                case 1:
                    r.call(this);
                    break;
                case 2:
                    r.call(this, arguments[1]);
                    break;
                case 3:
                    r.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), r.apply(this, s)
            } else if (i(r))
                for (s = Array.prototype.slice.call(arguments, 1), o = (c = r.slice()).length, u = 0; u < o; u++) c[u].apply(this, s);
            return !0
        }, r.prototype.addListener = function(t, e) {
            var o;
            if (!n(e)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e), this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, i(this._events[t]) && !this._events[t].warned && (o = a(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && o > 0 && this._events[t].length > o && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(t, e) {
            function r() {
                this.removeListener(t, r), i || (i = !0, e.apply(this, arguments))
            }
            if (!n(e)) throw TypeError("listener must be a function");
            var i = !1;
            return r.listener = e, this.on(t, r), this
        }, r.prototype.removeListener = function(t, e) {
            var r, a, o, s;
            if (!n(e)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[t]) return this;
            if (o = (r = this._events[t]).length, a = -1, r === e || n(r.listener) && r.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
            else if (i(r)) {
                for (s = o; s-- > 0;)
                    if (r[s] === e || r[s].listener && r[s].listener === e) {
                        a = s;
                        break
                    } if (a < 0) return this;
                1 === r.length ? (r.length = 0, delete this._events[t]) : r.splice(a, 1), this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }, r.prototype.removeAllListeners = function(t) {
            var e, r;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
            if (0 === arguments.length) {
                for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n(r = this._events[t])) this.removeListener(t, r);
            else if (r)
                for (; r.length;) this.removeListener(t, r[r.length - 1]);
            return delete this._events[t], this
        }, r.prototype.listeners = function(t) {
            return this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }, r.prototype.listenerCount = function(t) {
            if (this._events) {
                var e = this._events[t];
                if (n(e)) return 1;
                if (e) return e.length
            }
            return 0
        }, r.listenerCount = function(t, e) {
            return t.listenerCount(e)
        }
    }, function(t, e, r) {
        "use strict";
        e.a = function() {
            if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
        }
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return a
        })), r.d(e, "b", (function() {
            return o
        }));
        var n = r(3),
            i = r(1),
            a = {
                NOT_LOADED: "NOT_LOADED",
                APPENDING: "APPENDING",
                PARTIAL: "PARTIAL",
                OK: "OK"
            },
            o = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, i.a.BUFFER_APPENDED, i.a.FRAG_BUFFERED, i.a.FRAG_LOADED));
                    return n.bufferPadding = .2, n.fragments = Object.create(null), n.timeRanges = Object.create(null), n.config = r.config, n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    this.fragments = null, this.timeRanges = null, this.config = null, n.a.prototype.destroy.call(this), t.prototype.destroy.call(this)
                }, e.prototype.getBufferedFrag = function(t, e) {
                    var r = this.fragments,
                        n = Object.keys(r).filter((function(n) {
                            var i = r[n];
                            if (i.body.type !== e) return !1;
                            if (!i.buffered) return !1;
                            var a = i.body;
                            return a.startPTS <= t && t <= a.endPTS
                        }));
                    if (0 === n.length) return null;
                    var i = n.pop();
                    return r[i].body
                }, e.prototype.detectEvictedFragments = function(t, e) {
                    var r = this,
                        n = void 0,
                        i = void 0;
                    Object.keys(this.fragments).forEach((function(a) {
                        var o = r.fragments[a];
                        if (!0 === o.buffered) {
                            var s = o.range[t];
                            if (s) {
                                n = s.time;
                                for (var u = 0; u < n.length; u++)
                                    if (i = n[u], !1 === r.isTimeBuffered(i.startPTS, i.endPTS, e)) {
                                        r.removeFragment(o.body);
                                        break
                                    }
                            }
                        }
                    }))
                }, e.prototype.detectPartialFragments = function(t) {
                    var e = this,
                        r = this.getFragmentKey(t),
                        n = this.fragments[r];
                    n && (n.buffered = !0, Object.keys(this.timeRanges).forEach((function(r) {
                        if (!0 === t.hasElementaryStream(r)) {
                            var i = e.timeRanges[r];
                            n.range[r] = e.getBufferedTimes(t.startPTS, t.endPTS, i)
                        }
                    })))
                }, e.prototype.getBufferedTimes = function(t, e, r) {
                    for (var n = [], i = void 0, a = void 0, o = !1, s = 0; s < r.length; s++) {
                        if (i = r.start(s) - this.bufferPadding, a = r.end(s) + this.bufferPadding, t >= i && e <= a) {
                            n.push({
                                startPTS: Math.max(t, r.start(s)),
                                endPTS: Math.min(e, r.end(s))
                            });
                            break
                        }
                        if (t < a && e > i) n.push({
                            startPTS: Math.max(t, r.start(s)),
                            endPTS: Math.min(e, r.end(s))
                        }), o = !0;
                        else if (e <= i) break
                    }
                    return {
                        time: n,
                        partial: o
                    }
                }, e.prototype.getFragmentKey = function(t) {
                    return t.type + "_" + t.level + "_" + t.sn
                }, e.prototype.getPartialFragment = function(t) {
                    var e = this,
                        r = void 0,
                        n = void 0,
                        i = void 0,
                        a = null,
                        o = 0;
                    return Object.keys(this.fragments).forEach((function(s) {
                        var u = e.fragments[s];
                        e.isPartial(u) && (n = u.body.startPTS - e.bufferPadding, i = u.body.endPTS + e.bufferPadding, t >= n && t <= i && (r = Math.min(t - n, i - t), o <= r && (a = u.body, o = r)))
                    })), a
                }, e.prototype.getState = function(t) {
                    var e = this.getFragmentKey(t),
                        r = this.fragments[e],
                        n = a.NOT_LOADED;
                    return void 0 !== r && (n = r.buffered ? !0 === this.isPartial(r) ? a.PARTIAL : a.OK : a.APPENDING), n
                }, e.prototype.isPartial = function(t) {
                    return !0 === t.buffered && (void 0 !== t.range.video && !0 === t.range.video.partial || void 0 !== t.range.audio && !0 === t.range.audio.partial)
                }, e.prototype.isTimeBuffered = function(t, e, r) {
                    for (var n = void 0, i = void 0, a = 0; a < r.length; a++) {
                        if (n = r.start(a) - this.bufferPadding, i = r.end(a) + this.bufferPadding, t >= n && e <= i) return !0;
                        if (e <= n) return !1
                    }
                    return !1
                }, e.prototype.onFragLoaded = function(t) {
                    var e = t.frag;
                    if (!isNaN(e.sn)) {
                        var r = this.getFragmentKey(e),
                            n = {
                                body: e,
                                range: Object.create(null),
                                buffered: !1
                            };
                        this.fragments[r] = n
                    }
                }, e.prototype.onBufferAppended = function(t) {
                    var e = this;
                    this.timeRanges = t.timeRanges, Object.keys(this.timeRanges).forEach((function(t) {
                        var r = e.timeRanges[t];
                        e.detectEvictedFragments(t, r)
                    }))
                }, e.prototype.onFragBuffered = function(t) {
                    this.detectPartialFragments(t.frag)
                }, e.prototype.hasFragment = function(t) {
                    var e = this.getFragmentKey(t);
                    return void 0 !== this.fragments[e]
                }, e.prototype.removeFragment = function(t) {
                    var e = this.getFragmentKey(t);
                    delete this.fragments[e]
                }, e.prototype.removeAllFragments = function() {
                    this.fragments = Object.create(null)
                }, e
            }(n.a)
    }, function(t, e, r) {
        "use strict";
        var n = function(t) {
            function e(r) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                var o = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, t.call.apply(t, [this, r].concat(i)));
                return o._tickInterval = null, o._tickCallCount = 0, o
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), e.prototype.destroy = function() {
                this.clearInterval(), t.prototype.destroy.call(this)
            }, e.prototype.hasInterval = function() {
                return null !== this._tickInterval
            }, e.prototype.setInterval = function(t) {
                function e(e) {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }, e
            }((function(t) {
                return !this._tickInterval && (this._tickInterval = setInterval(this.tick.bind(this, !1), t), !0)
            })), e.prototype.clearInterval = function(t) {
                function e() {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }, e
            }((function() {
                return !!this._tickInterval && (clearInterval(this._tickInterval), this._tickInterval = null, !0)
            })), e.prototype.tick = function() {
                1 == ++this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && setTimeout(this.tick.bind(this), 0), this._tickCallCount = 0)
            }, e.prototype.doTick = function() {
                throw new Error("TaskLoop is abstract and `doLoop` must be implemented")
            }, e
        }(r(3).a);
        e.a = n
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(2),
            o = r(0),
            s = r(15),
            u = r(28),
            c = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            l = {
                MANIFEST: "manifest",
                LEVEL: "level",
                AUDIO_TRACK: "audioTrack",
                SUBTITLE_TRACK: "subtitleTrack"
            },
            f = {
                MAIN: "main",
                AUDIO: "audio",
                SUBTITLE: "subtitle"
            },
            h = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.MANIFEST_LOADING, n.a.LEVEL_LOADING, n.a.AUDIO_TRACK_LOADING, n.a.SUBTITLE_TRACK_LOADING));
                    return i.loaders = {}, i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.canHaveQualityLevels = function(t) {
                    return t !== l.AUDIO_TRACK && t !== l.SUBTITLE_TRACK
                }, e.mapContextToLevelType = function(t) {
                    switch (t.type) {
                        case l.AUDIO_TRACK:
                            return f.AUDIO;
                        case l.SUBTITLE_TRACK:
                            return f.SUBTITLE;
                        default:
                            return f.MAIN
                    }
                }, e.getResponseUrl = function(t, e) {
                    var r = t.url;
                    return void 0 !== r && 0 !== r.indexOf("data:") || (r = e.url), r
                }, e.prototype.createInternalLoader = function(t) {
                    var e = this.hls.config,
                        r = e.pLoader,
                        n = e.loader,
                        i = new(r || n)(e);
                    return t.loader = i, this.loaders[t.type] = i, i
                }, e.prototype.getInternalLoader = function(t) {
                    return this.loaders[t.type]
                }, e.prototype.resetInternalLoader = function(t) {
                    this.loaders[t] && delete this.loaders[t]
                }, e.prototype.destroyInternalLoaders = function() {
                    for (var t in this.loaders) {
                        var e = this.loaders[t];
                        e && e.destroy(), this.resetInternalLoader(t)
                    }
                }, e.prototype.destroy = function() {
                    this.destroyInternalLoaders(), t.prototype.destroy.call(this)
                }, e.prototype.onManifestLoading = function(t) {
                    this.load(t.url, {
                        type: l.MANIFEST
                    })
                }, e.prototype.onLevelLoading = function(t) {
                    var e = t.url;
                    e += -1 !== e.indexOf("?") ? "&" : "?", e += "_=" + (new Date).getTime(), this.load(e, {
                        type: l.LEVEL,
                        level: t.level,
                        id: t.id
                    })
                }, e.prototype.onAudioTrackLoading = function(t) {
                    this.load(t.url, {
                        type: l.AUDIO_TRACK,
                        id: t.id
                    })
                }, e.prototype.onSubtitleTrackLoading = function(t) {
                    this.load(t.url, {
                        type: l.SUBTITLE_TRACK,
                        id: t.id
                    })
                }, e.prototype.load = function(t, e) {
                    var r = this.hls.config,
                        n = this.getInternalLoader(e);
                    if (n) {
                        var i = n.context;
                        if (i && i.url === t) return o.b.trace("playlist request ongoing"), !1;
                        o.b.warn("aborting previous loader for type: " + e.type), n.abort()
                    }
                    var a, s, u = void 0,
                        c = void 0,
                        f = void 0,
                        h = void 0;
                    switch (e.type) {
                        case l.MANIFEST:
                            u = r.manifestLoadingMaxRetry, c = r.manifestLoadingTimeOut, f = r.manifestLoadingRetryDelay, h = r.manifestLoadingMaxRetryTimeout;
                            break;
                        case l.LEVEL:
                            u = 0, c = r.levelLoadingTimeOut;
                            break;
                        default:
                            u = r.levelLoadingMaxRetry, c = r.levelLoadingTimeOut, f = r.levelLoadingRetryDelay, h = r.levelLoadingMaxRetryTimeout, o.b.log("Playlist loader for " + e.type + " " + (e.level || e.id))
                    }
                    return n = this.createInternalLoader(e), e.url = t, e.responseType = e.responseType || "", a = {
                        timeout: c,
                        maxRetry: u,
                        retryDelay: f,
                        maxRetryDelay: h
                    }, s = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this)
                    }, n.load(e, a, s), !0
                }, e.prototype.loadsuccess = function(t, e, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (r.isSidxRequest) return this._handleSidxRequest(t, r), void this._handlePlaylistLoaded(t, e, r, n);
                    this.resetInternalLoader(r.type);
                    var i = t.data;
                    e.tload = performance.now(), 0 === i.indexOf("#EXTM3U") ? i.indexOf("#EXTINF:") > 0 || i.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(t, e, r, n) : this._handleMasterPlaylist(t, e, r, n) : this._handleManifestParsingError(t, r, "no EXTM3U delimiter", n)
                }, e.prototype.loaderror = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._handleNetworkError(e, r)
                }, e.prototype.loadtimeout = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._handleNetworkError(e, r, !0)
                }, e.prototype._handleMasterPlaylist = function(t, r, i, a) {
                    var s = this.hls,
                        c = t.data,
                        l = e.getResponseUrl(t, i),
                        f = u.a.parseMasterPlaylist(c, l);
                    if (f.length) {
                        var h = f.map((function(t) {
                                return {
                                    id: t.attrs.AUDIO,
                                    codec: t.audioCodec
                                }
                            })),
                            d = u.a.parseMasterPlaylistMedia(c, l, "AUDIO", h),
                            p = u.a.parseMasterPlaylistMedia(c, l, "SUBTITLES");
                        if (d.length) {
                            var v = !1;
                            d.forEach((function(t) {
                                t.url || (v = !0)
                            })), !1 === v && f[0].audioCodec && !f[0].attrs.AUDIO && (o.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), d.unshift({
                                type: "main",
                                name: "main"
                            }))
                        }
                        s.trigger(n.a.MANIFEST_LOADED, {
                            levels: f,
                            audioTracks: d,
                            subtitles: p,
                            url: l,
                            stats: r,
                            networkDetails: a
                        })
                    } else this._handleManifestParsingError(t, i, "no level found in manifest", a)
                }, e.prototype._handleTrackOrLevelPlaylist = function(t, r, i, a) {
                    var o = this.hls,
                        s = i.id,
                        c = i.level,
                        f = i.type,
                        h = e.getResponseUrl(t, i),
                        d = isNaN(c) ? isNaN(s) ? 0 : s : c,
                        p = e.mapContextToLevelType(i),
                        v = u.a.parseLevelPlaylist(t.data, h, d, p);
                    if (v.tload = r.tload, f === l.MANIFEST) {
                        var y = {
                            url: h,
                            details: v
                        };
                        o.trigger(n.a.MANIFEST_LOADED, {
                            levels: [y],
                            audioTracks: [],
                            url: h,
                            stats: r,
                            networkDetails: a
                        })
                    }
                    if (r.tparsed = performance.now(), v.needSidxRanges) {
                        var g = v.initSegment.url;
                        this.load(g, {
                            isSidxRequest: !0,
                            type: f,
                            level: c,
                            levelDetails: v,
                            id: s,
                            rangeStart: 0,
                            rangeEnd: 2048,
                            responseType: "arraybuffer"
                        })
                    } else i.levelDetails = v, this._handlePlaylistLoaded(t, r, i, a)
                }, e.prototype._handleSidxRequest = function(t, e) {
                    var r = s.a.parseSegmentIndex(new Uint8Array(t.data));
                    r.references.forEach((function(t, r) {
                        var n = t.info,
                            i = e.levelDetails.fragments[r];
                        0 === i.byteRange.length && (i.rawByteRange = String(1 + n.end - n.start) + "@" + String(n.start))
                    })), e.levelDetails.initSegment.rawByteRange = String(r.moovEndOffset) + "@0"
                }, e.prototype._handleManifestParsingError = function(t, e, r, i) {
                    this.hls.trigger(n.a.ERROR, {
                        type: a.b.NETWORK_ERROR,
                        details: a.a.MANIFEST_PARSING_ERROR,
                        fatal: !0,
                        url: t.url,
                        reason: r,
                        networkDetails: i
                    })
                }, e.prototype._handleNetworkError = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = void 0,
                        o = void 0,
                        s = this.getInternalLoader(t);
                    switch (t.type) {
                        case l.MANIFEST:
                            i = r ? a.a.MANIFEST_LOAD_TIMEOUT : a.a.MANIFEST_LOAD_ERROR, o = !0;
                            break;
                        case l.LEVEL:
                            i = r ? a.a.LEVEL_LOAD_TIMEOUT : a.a.LEVEL_LOAD_ERROR, o = !1;
                            break;
                        case l.AUDIO_TRACK:
                            i = r ? a.a.AUDIO_TRACK_LOAD_TIMEOUT : a.a.AUDIO_TRACK_LOAD_ERROR, o = !1;
                            break;
                        default:
                            o = !1
                    }
                    s && (s.abort(), this.resetInternalLoader(t.type)), this.hls.trigger(n.a.ERROR, {
                        type: a.b.NETWORK_ERROR,
                        details: i,
                        fatal: o,
                        url: s.url,
                        loader: s,
                        context: t,
                        networkDetails: e
                    })
                }, e.prototype._handlePlaylistLoaded = function(t, r, i, a) {
                    var o = i.type,
                        s = i.level,
                        u = i.id,
                        c = i.levelDetails;
                    if (c.targetduration)
                        if (e.canHaveQualityLevels(i.type)) this.hls.trigger(n.a.LEVEL_LOADED, {
                            details: c,
                            level: s || 0,
                            id: u || 0,
                            stats: r,
                            networkDetails: a
                        });
                        else switch (o) {
                            case l.AUDIO_TRACK:
                                this.hls.trigger(n.a.AUDIO_TRACK_LOADED, {
                                    details: c,
                                    id: u,
                                    stats: r,
                                    networkDetails: a
                                });
                                break;
                            case l.SUBTITLE_TRACK:
                                this.hls.trigger(n.a.SUBTITLE_TRACK_LOADED, {
                                    details: c,
                                    id: u,
                                    stats: r,
                                    networkDetails: a
                                })
                        } else this._handleManifestParsingError(t, i, "invalid target duration", a)
                }, c(e, null, [{
                    key: "ContextType",
                    get: function() {
                        return l
                    }
                }, {
                    key: "LevelType",
                    get: function() {
                        return f
                    }
                }]), e
            }(i.a);
        e.a = h
    }, function(t, e, r) {
        "use strict";
        var n = r(0),
            i = r(1),
            a = Math.pow(2, 32) - 1,
            o = function() {
                function t(e, r) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.observer = e, this.remuxer = r
                }
                return t.prototype.resetTimeStamp = function(t) {
                    this.initPTS = t
                }, t.prototype.resetInitSegment = function(e, r, n, a) {
                    if (e && e.byteLength) {
                        var o = this.initData = t.parseInitSegment(e);
                        null == r && (r = "mp4a.40.5"), null == n && (n = "avc1.42e01e");
                        var s = {};
                        o.audio && o.video ? s.audiovideo = {
                            container: "video/mp4",
                            codec: r + "," + n,
                            initSegment: a ? e : null
                        } : (o.audio && (s.audio = {
                            container: "audio/mp4",
                            codec: r,
                            initSegment: a ? e : null
                        }), o.video && (s.video = {
                            container: "video/mp4",
                            codec: n,
                            initSegment: a ? e : null
                        })), this.observer.trigger(i.a.FRAG_PARSING_INIT_SEGMENT, {
                            tracks: s
                        })
                    } else r && (this.audioCodec = r), n && (this.videoCodec = n)
                }, t.probe = function(e) {
                    return t.findBox({
                        data: e,
                        start: 0,
                        end: Math.min(e.length, 16384)
                    }, ["moof"]).length > 0
                }, t.bin2str = function(t) {
                    return String.fromCharCode.apply(null, t)
                }, t.readUint16 = function(t, e) {
                    t.data && (e += t.start, t = t.data);
                    var r = t[e] << 8 | t[e + 1];
                    return r < 0 ? 65536 + r : r
                }, t.readUint32 = function(t, e) {
                    t.data && (e += t.start, t = t.data);
                    var r = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
                    return r < 0 ? 4294967296 + r : r
                }, t.writeUint32 = function(t, e, r) {
                    t.data && (e += t.start, t = t.data), t[e] = r >> 24, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r
                }, t.findBox = function(e, r) {
                    var n = [],
                        i = void 0,
                        a = void 0,
                        o = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0;
                    if (e.data ? (u = e.start, o = e.end, e = e.data) : (u = 0, o = e.byteLength), !r.length) return null;
                    for (i = u; i < o;) c = (a = t.readUint32(e, i)) > 1 ? i + a : o, t.bin2str(e.subarray(i + 4, i + 8)) === r[0] && (1 === r.length ? n.push({
                        data: e,
                        start: i + 8,
                        end: c
                    }) : (s = t.findBox({
                        data: e,
                        start: i + 8,
                        end: c
                    }, r.slice(1))).length && (n = n.concat(s))), i = c;
                    return n
                }, t.parseSegmentIndex = function(e) {
                    var r = t.findBox(e, ["moov"])[0],
                        n = r ? r.end : null,
                        i = 0,
                        a = t.findBox(e, ["sidx"]),
                        o = void 0;
                    if (!a || !a[0]) return null;
                    o = [];
                    var s = (a = a[0]).data[0];
                    i = 0 === s ? 8 : 16;
                    var u = t.readUint32(a, i);
                    i += 4, i += 0 === s ? 8 : 16, i += 2;
                    var c = a.end + 0,
                        l = t.readUint16(a, i);
                    i += 2;
                    for (var f = 0; f < l; f++) {
                        var h = i,
                            d = t.readUint32(a, h);
                        h += 4;
                        var p = 2147483647 & d;
                        if (1 == (2147483648 & d) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
                        var v = t.readUint32(a, h);
                        h += 4, o.push({
                            referenceSize: p,
                            subsegmentDuration: v,
                            info: {
                                duration: v / u,
                                start: c,
                                end: c + p - 1
                            }
                        }), c += p, i = h += 4
                    }
                    return {
                        earliestPresentationTime: 0,
                        timescale: u,
                        version: s,
                        referencesCount: l,
                        references: o,
                        moovEndOffset: n
                    }
                }, t.parseInitSegment = function(e) {
                    var r = [];
                    return t.findBox(e, ["moov", "trak"]).forEach((function(e) {
                        var i = t.findBox(e, ["tkhd"])[0];
                        if (i) {
                            var a = i.data[i.start],
                                o = 0 === a ? 12 : 20,
                                s = t.readUint32(i, o),
                                u = t.findBox(e, ["mdia", "mdhd"])[0];
                            if (u) {
                                o = 0 === (a = u.data[u.start]) ? 12 : 20;
                                var c = t.readUint32(u, o),
                                    l = t.findBox(e, ["mdia", "hdlr"])[0];
                                if (l) {
                                    var f = {
                                        soun: "audio",
                                        vide: "video"
                                    } [t.bin2str(l.data.subarray(l.start + 8, l.start + 12))];
                                    if (f) {
                                        var h = t.findBox(e, ["mdia", "minf", "stbl", "stsd"]);
                                        if (h.length) {
                                            h = h[0];
                                            var d = t.bin2str(h.data.subarray(h.start + 12, h.start + 16));
                                            n.b.log("MP4Demuxer:" + f + ":" + d + " found")
                                        }
                                        r[s] = {
                                            timescale: c,
                                            type: f
                                        }, r[f] = {
                                            timescale: c,
                                            id: s
                                        }
                                    }
                                }
                            }
                        }
                    })), r
                }, t.getStartDTS = function(e, r) {
                    var n, i, a = void 0;
                    return a = t.findBox(r, ["moof", "traf"]), n = [].concat.apply([], a.map((function(r) {
                        return t.findBox(r, ["tfhd"]).map((function(n) {
                            var i, a;
                            return i = t.readUint32(n, 4), a = e[i].timescale || 9e4, t.findBox(r, ["tfdt"]).map((function(e) {
                                var r, n = void 0;
                                return r = e.data[e.start], n = t.readUint32(e, 4), 1 === r && (n *= Math.pow(2, 32), n += t.readUint32(e, 8)), n
                            }))[0] / a
                        }))
                    }))), i = Math.min.apply(null, n), isFinite(i) ? i : 0
                }, t.offsetStartDTS = function(e, r, n) {
                    t.findBox(r, ["moof", "traf"]).map((function(r) {
                        return t.findBox(r, ["tfhd"]).map((function(i) {
                            var o = t.readUint32(i, 4),
                                s = e[o].timescale || 9e4;
                            t.findBox(r, ["tfdt"]).map((function(e) {
                                var r = e.data[e.start],
                                    i = t.readUint32(e, 4);
                                if (0 === r) t.writeUint32(e, 4, i - n * s);
                                else {
                                    i *= Math.pow(2, 32), i += t.readUint32(e, 8), i -= n * s, i = Math.max(i, 0);
                                    var o = Math.floor(i / (a + 1)),
                                        u = Math.floor(i % (a + 1));
                                    t.writeUint32(e, 4, o), t.writeUint32(e, 8, u)
                                }
                            }))
                        }))
                    }))
                }, t.prototype.append = function(e, r, n, a) {
                    var o = this.initData;
                    o || (this.resetInitSegment(e, this.audioCodec, this.videoCodec, !1), o = this.initData);
                    var s, u = this.initPTS;
                    if (void 0 === u) {
                        var c = t.getStartDTS(o, e);
                        this.initPTS = u = c - r, this.observer.trigger(i.a.INIT_PTS_FOUND, {
                            initPTS: u
                        })
                    }
                    t.offsetStartDTS(o, e, u), s = t.getStartDTS(o, e), this.remuxer.remux(o.audio, o.video, null, null, s, n, a, e)
                }, t.prototype.destroy = function() {}, t
            }();
        e.a = o
    }, function(t, e, r) {
        "use strict";
        var n = r(4),
            i = r.n(n),
            a = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            o = function() {
                function t() {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.method = null, this.key = null, this.iv = null, this._uri = null
                }
                return a(t, [{
                    key: "uri",
                    get: function() {
                        return !this._uri && this.reluri && (this._uri = i.a.buildAbsoluteURL(this.baseuri, this.reluri, {
                            alwaysNormalize: !0
                        })), this._uri
                    }
                }]), t
            }();
        e.a = o
    }, function(t, e, r) {
        "use strict";

        function n(t, e) {
            var r = a[e];
            return !!r && !0 === r[t.slice(0, 4)]
        }

        function i(t, e) {
            return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
        }
        r.d(e, "b", (function() {
            return n
        })), r.d(e, "a", (function() {
            return i
        }));
        var a = {
            audio: {
                a3ds: !0,
                "ac-3": !0,
                "ac-4": !0,
                alac: !0,
                alaw: !0,
                dra1: !0,
                "dts+": !0,
                "dts-": !0,
                dtsc: !0,
                dtse: !0,
                dtsh: !0,
                "ec-3": !0,
                enca: !0,
                g719: !0,
                g726: !0,
                m4ae: !0,
                mha1: !0,
                mha2: !0,
                mhm1: !0,
                mhm2: !0,
                mlpa: !0,
                mp4a: !0,
                "raw ": !0,
                Opus: !0,
                samr: !0,
                sawb: !0,
                sawp: !0,
                sevc: !0,
                sqcp: !0,
                ssmv: !0,
                twos: !0,
                ulaw: !0
            },
            video: {
                avc1: !0,
                avc2: !0,
                avc3: !0,
                avc4: !0,
                avcp: !0,
                drac: !0,
                dvav: !0,
                dvhe: !0,
                encv: !0,
                hev1: !0,
                hvc1: !0,
                mjp2: !0,
                mp4v: !0,
                mvc1: !0,
                mvc2: !0,
                mvc3: !0,
                mvc4: !0,
                resv: !0,
                rv60: !0,
                s263: !0,
                svc1: !0,
                svc2: !0,
                "vc-1": !0,
                vp08: !0,
                vp09: !0
            }
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(19),
            a = r(0),
            o = r(2),
            s = r(10),
            u = r.n(s),
            c = r(45),
            l = r.n(c),
            f = r(11),
            h = Object(f.a)(),
            d = function() {
                function t(e, r) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.hls = e, this.id = r;
                    var s = this.observer = new u.a,
                        c = e.config;
                    s.trigger = function(t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                        s.emit.apply(s, [t, t].concat(r))
                    }, s.off = function(t) {
                        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                        s.removeListener.apply(s, [t].concat(r))
                    };
                    var f = function(t, r) {
                        (r = r || {}).frag = this.frag, r.id = this.id, e.trigger(t, r)
                    }.bind(this);
                    s.on(n.a.FRAG_DECRYPTED, f), s.on(n.a.FRAG_PARSING_INIT_SEGMENT, f), s.on(n.a.FRAG_PARSING_DATA, f), s.on(n.a.FRAG_PARSED, f), s.on(n.a.ERROR, f), s.on(n.a.FRAG_PARSING_METADATA, f), s.on(n.a.FRAG_PARSING_USERDATA, f), s.on(n.a.INIT_PTS_FOUND, f);
                    var d = {
                            mp4: h.isTypeSupported("video/mp4"),
                            mpeg: h.isTypeSupported("audio/mpeg"),
                            mp3: h.isTypeSupported('audio/mp4; codecs="mp3"')
                        },
                        p = navigator.vendor;
                    if (c.enableWorker && "undefined" != typeof Worker) {
                        a.b.log("demuxing in webworker");
                        var v = void 0;
                        try {
                            v = this.w = l()(46), this.onwmsg = this.onWorkerMessage.bind(this), v.addEventListener("message", this.onwmsg), v.onerror = function(t) {
                                e.trigger(n.a.ERROR, {
                                    type: o.b.OTHER_ERROR,
                                    details: o.a.INTERNAL_EXCEPTION,
                                    fatal: !0,
                                    event: "demuxerWorker",
                                    err: {
                                        message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                    }
                                })
                            }, v.postMessage({
                                cmd: "init",
                                typeSupported: d,
                                vendor: p,
                                id: r,
                                config: JSON.stringify(c)
                            })
                        } catch (t) {
                            a.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), v && URL.revokeObjectURL(v.objectURL), this.demuxer = new i.a(s, d, c, p), this.w = void 0
                        }
                    } else this.demuxer = new i.a(s, d, c, p)
                }
                return t.prototype.destroy = function() {
                    var t = this.w;
                    if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.w = null;
                    else {
                        var e = this.demuxer;
                        e && (e.destroy(), this.demuxer = null)
                    }
                    var r = this.observer;
                    r && (r.removeAllListeners(), this.observer = null)
                }, t.prototype.push = function(t, e, r, n, i, o, s, u) {
                    var c = this.w,
                        l = isNaN(i.startDTS) ? i.start : i.startDTS,
                        f = i.decryptdata,
                        h = this.frag,
                        d = !(h && i.cc === h.cc),
                        p = !(h && i.level === h.level),
                        v = h && i.sn === h.sn + 1,
                        y = !p && v;
                    if (d && a.b.log(this.id + ":discontinuity detected"), p && a.b.log(this.id + ":switch detected"), this.frag = i, c) c.postMessage({
                        cmd: "demux",
                        data: t,
                        decryptdata: f,
                        initSegment: e,
                        audioCodec: r,
                        videoCodec: n,
                        timeOffset: l,
                        discontinuity: d,
                        trackSwitch: p,
                        contiguous: y,
                        duration: o,
                        accurateTimeOffset: s,
                        defaultInitPTS: u
                    }, t instanceof ArrayBuffer ? [t] : []);
                    else {
                        var g = this.demuxer;
                        g && g.push(t, f, e, r, n, l, d, p, y, o, s, u)
                    }
                }, t.prototype.onWorkerMessage = function(t) {
                    var e = t.data,
                        r = this.hls;
                    switch (e.event) {
                        case "init":
                            URL.revokeObjectURL(this.w.objectURL);
                            break;
                        case n.a.FRAG_PARSING_DATA:
                            e.data.data1 = new Uint8Array(e.data1), e.data2 && (e.data.data2 = new Uint8Array(e.data2));
                        default:
                            e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, r.trigger(e.event, e.data)
                    }
                }, t
            }();
        e.a = d
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(2),
            a = r(9),
            o = r(36),
            s = r(15),
            u = r(37),
            c = r(40),
            l = r(41),
            f = r(44),
            h = function() {
                function t(e, r, n, i) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.observer = e, this.typeSupported = r, this.config = n, this.vendor = i
                }
                return t.prototype.destroy = function() {
                    var t = this.demuxer;
                    t && t.destroy()
                }, t.prototype.push = function(t, e, r, i, o, s, u, c, l, f, h, d) {
                    if (t.byteLength > 0 && null != e && null != e.key && "AES-128" === e.method) {
                        var p = this.decrypter;
                        null == p && (p = this.decrypter = new a.a(this.observer, this.config));
                        var v = this,
                            y = void 0;
                        try {
                            y = performance.now()
                        } catch (t) {
                            y = Date.now()
                        }
                        p.decrypt(t, e.key.buffer, e.iv.buffer, (function(t) {
                            var a = void 0;
                            try {
                                a = performance.now()
                            } catch (t) {
                                a = Date.now()
                            }
                            v.observer.trigger(n.a.FRAG_DECRYPTED, {
                                stats: {
                                    tstart: y,
                                    tdecrypt: a
                                }
                            }), v.pushDecrypted(new Uint8Array(t), e, new Uint8Array(r), i, o, s, u, c, l, f, h, d)
                        }))
                    } else this.pushDecrypted(new Uint8Array(t), e, new Uint8Array(r), i, o, s, u, c, l, f, h, d)
                }, t.prototype.pushDecrypted = function(t, e, r, a, h, d, p, v, y, g, m, b) {
                    var E = this.demuxer;
                    if (!E || (p || v) && !this.probe(t)) {
                        for (var _ = this.observer, S = this.typeSupported, T = this.config, A = [{
                                demux: u.a,
                                remux: l.a
                            }, {
                                demux: s.a,
                                remux: f.a
                            }, {
                                demux: o.a,
                                remux: l.a
                            }, {
                                demux: c.a,
                                remux: l.a
                            }], w = 0, R = A.length; w < R; w++) {
                            var L = A[w],
                                O = L.demux.probe;
                            if (O(t)) {
                                var I = this.remuxer = new L.remux(_, T, S, this.vendor);
                                E = new L.demux(_, I, T, S), this.probe = O;
                                break
                            }
                        }
                        if (!E) return void _.trigger(n.a.ERROR, {
                            type: i.b.MEDIA_ERROR,
                            details: i.a.FRAG_PARSING_ERROR,
                            fatal: !0,
                            reason: "no demux matching with content found"
                        });
                        this.demuxer = E
                    }
                    var D = this.remuxer;
                    (p || v) && (E.resetInitSegment(r, a, h, g), D.resetInitSegment()), p && (E.resetTimeStamp(b), D.resetTimeStamp(b)), "function" == typeof E.setDecryptData && E.setDecryptData(e), E.append(t, d, y, m)
                }, t
            }();
        e.a = h
    }, function(t, e, r) {
        "use strict";

        function n(t, e) {
            return 255 === t[e] && 240 == (246 & t[e + 1])
        }

        function i(t, e) {
            return 1 & t[e + 1] ? 7 : 9
        }

        function a(t, e) {
            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
        }

        function o(t) {
            return 9216e4 / t
        }

        function s(t, e, r, n, o) {
            var s, u = void 0,
                c = t.length;
            if (s = i(t, e), u = a(t, e), (u -= s) > 0 && e + s + u <= c) return {
                headerLength: s,
                frameLength: u,
                stamp: r + n * o
            }
        }
        e.d = function(t, e) {
            return !!(e + 1 < t.length && n(t, e))
        }, e.e = function(t, e) {
            if (e + 1 < t.length && n(t, e)) {
                var r = i(t, e);
                e + 5 < t.length && (r = a(t, e));
                var o = e + r;
                if (o === t.length || o + 1 < t.length && n(t, o)) return !0
            }
            return !1
        }, e.c = function(t, e, r, n, i) {
            if (!t.samplerate) {
                var a = function(t, e, r, n) {
                    var i, a = void 0,
                        o = void 0,
                        s = void 0,
                        l = void 0,
                        f = navigator.userAgent.toLowerCase(),
                        h = n,
                        d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    return a = 1 + ((192 & e[r + 2]) >>> 6), (i = (60 & e[r + 2]) >>> 2) > d.length - 1 ? void t.trigger(Event.ERROR, {
                        type: c.b.MEDIA_ERROR,
                        details: c.a.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "invalid ADTS sampling index:" + i
                    }) : (s = (1 & e[r + 2]) << 2, s |= (192 & e[r + 3]) >>> 6, u.b.log("manifest codec:" + n + ",ADTS data:type:" + a + ",sampleingIndex:" + i + "[" + d[i] + "Hz],channelConfig:" + s), /firefox/i.test(f) ? i >= 6 ? (a = 5, l = new Array(4), o = i - 3) : (a = 2, l = new Array(2), o = i) : -1 !== f.indexOf("android") ? (a = 2, l = new Array(2), o = i) : (a = 5, l = new Array(4), n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && i >= 6 ? o = i - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (i >= 6 && 1 === s || /vivaldi/i.test(f)) || !n && 1 === s) && (a = 2, l = new Array(2)), o = i)), l[0] = a << 3, l[0] |= (14 & i) >> 1, l[1] |= (1 & i) << 7, l[1] |= s << 3, 5 === a && (l[1] |= (14 & o) >> 1, l[2] = (1 & o) << 7, l[2] |= 8, l[3] = 0), {
                        config: l,
                        samplerate: d[i],
                        channelCount: s,
                        codec: "mp4a.40." + a,
                        manifestCodec: h
                    })
                }(e, r, n, i);
                t.config = a.config, t.samplerate = a.samplerate, t.channelCount = a.channelCount, t.codec = a.codec, t.manifestCodec = a.manifestCodec, u.b.log("parsed codec:" + t.codec + ",rate:" + a.samplerate + ",nb channel:" + a.channelCount)
            }
        }, e.b = o, e.a = function(t, e, r, n, i) {
            var a = s(e, r, n, i, o(t.samplerate));
            if (a) {
                var u = a.stamp,
                    c = a.headerLength,
                    l = a.frameLength,
                    f = {
                        unit: e.subarray(r + c, r + c + l),
                        pts: u,
                        dts: u
                    };
                return t.samples.push(f), t.len += l, {
                    sample: f,
                    length: l + c
                }
            }
        };
        var u = r(0),
            c = r(2)
    }, function(t, e, r) {
        "use strict";
        var n = {
            BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
            SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            SamplesCoefficients: [
                [0, 72, 144, 12],
                [0, 0, 0, 0],
                [0, 72, 144, 12],
                [0, 144, 144, 12]
            ],
            BytesInSlot: [0, 1, 1, 4],
            appendFrame: function(t, e, r, n, i) {
                if (!(r + 24 > e.length)) {
                    var a = this.parseHeader(e, r);
                    if (a && r + a.frameLength <= e.length) {
                        var o = n + i * (9e4 * a.samplesPerFrame / a.sampleRate),
                            s = {
                                unit: e.subarray(r, r + a.frameLength),
                                pts: o,
                                dts: o
                            };
                        return t.config = [], t.channelCount = a.channelCount, t.samplerate = a.sampleRate, t.samples.push(s), t.len += a.frameLength, {
                            sample: s,
                            length: a.frameLength
                        }
                    }
                }
            },
            parseHeader: function(t, e) {
                var r = t[e + 1] >> 3 & 3,
                    i = t[e + 1] >> 1 & 3,
                    a = t[e + 2] >> 4 & 15,
                    o = t[e + 2] >> 2 & 3,
                    s = t[e + 2] >> 1 & 1;
                if (1 !== r && 0 !== a && 15 !== a && 3 !== o) {
                    var u = 3 === r ? 3 - i : 3 === i ? 3 : 4,
                        c = 1e3 * n.BitratesMap[14 * u + a - 1],
                        l = 3 === r ? 0 : 2 === r ? 1 : 2,
                        f = n.SamplingRateMap[3 * l + o],
                        h = t[e + 3] >> 6 == 3 ? 1 : 2,
                        d = n.SamplesCoefficients[r][i],
                        p = n.BytesInSlot[i],
                        v = 8 * d * p;
                    return {
                        sampleRate: f,
                        channelCount: h,
                        frameLength: parseInt(d * c / f + s, 10) * p,
                        samplesPerFrame: v
                    }
                }
            },
            isHeaderPattern: function(t, e) {
                return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
            },
            isHeader: function(t, e) {
                return !!(e + 1 < t.length && this.isHeaderPattern(t, e))
            },
            probe: function(t, e) {
                if (e + 1 < t.length && this.isHeaderPattern(t, e)) {
                    var r = this.parseHeader(t, e),
                        n = 4;
                    r && r.frameLength && (n = r.frameLength);
                    var i = e + n;
                    if (i === t.length || i + 1 < t.length && this.isHeaderPattern(t, i)) return !0
                }
                return !1
            }
        };
        e.a = n
    }, function(t, e, r) {
        "use strict";

        function n(t, e, r) {
            var n = t[e],
                i = t[r],
                o = i.startPTS;
            isNaN(o) ? i.start = r > e ? n.start + n.duration : Math.max(n.start - i.duration, 0) : r > e ? (n.duration = o - n.start, n.duration < 0 && a.b.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (i.duration = n.start - o, i.duration < 0 && a.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!"))
        }

        function i(t, e, r, i, a, o) {
            var s = r;
            if (!isNaN(e.startPTS)) {
                var u = Math.abs(e.startPTS - r);
                isNaN(e.deltaPTS) ? e.deltaPTS = u : e.deltaPTS = Math.max(u, e.deltaPTS), s = Math.max(r, e.startPTS), r = Math.min(r, e.startPTS), i = Math.max(i, e.endPTS), a = Math.min(a, e.startDTS), o = Math.max(o, e.endDTS)
            }
            var c = r - e.start;
            e.start = e.startPTS = r, e.maxStartPTS = s, e.endPTS = i, e.startDTS = a, e.endDTS = o, e.duration = i - r;
            var l = e.sn;
            if (!t || l < t.startSN || l > t.endSN) return 0;
            var f, h = void 0,
                d = void 0;
            for (f = l - t.startSN, (h = t.fragments)[f] = e, d = f; d > 0; d--) n(h, d, d - 1);
            for (d = f; d < h.length - 1; d++) n(h, d, d + 1);
            return t.PTSKnown = !0, c
        }
        e.b = i, e.a = function(t, e) {
            var r = Math.max(t.startSN, e.startSN) - e.startSN,
                n = Math.min(t.endSN, e.endSN) - e.startSN,
                o = e.startSN - t.startSN,
                s = t.fragments,
                u = e.fragments,
                c = 0,
                l = void 0;
            if (e.initSegment && t.initSegment && (e.initSegment = t.initSegment), n < r) e.PTSKnown = !1;
            else {
                for (var f = r; f <= n; f++) {
                    var h = s[o + f],
                        d = u[f];
                    d && h && (c = h.cc - d.cc, isNaN(h.startPTS) || (d.start = d.startPTS = h.startPTS, d.endPTS = h.endPTS, d.duration = h.duration, d.backtracked = h.backtracked, d.dropped = h.dropped, l = d))
                }
                if (c)
                    for (a.b.log("discontinuity sliding from playlist, take drift into account"), f = 0; f < u.length; f++) u[f].cc += c;
                if (l) i(e, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS);
                else if (o >= 0 && o < s.length) {
                    var p = s[o].start;
                    for (f = 0; f < u.length; f++) u[f].start += p
                }
                e.PTSKnown = t.PTSKnown
            }
        };
        var a = r(0)
    }, function(t, e, r) {
        "use strict";
        e.a = {
            toString: function(t) {
                for (var e = "", r = t.length, n = 0; n < r; n++) e += "[" + t.start(n).toFixed(3) + "," + t.end(n).toFixed(3) + "]";
                return e
            }
        }
    }, function(t, e, r) {
        "use strict";

        function n(t, e) {
            var r = t.fragments,
                n = e.fragments;
            if (n.length && r.length) {
                var i = function(t, e) {
                    for (var r = null, n = 0; n < t.length; n += 1) {
                        var i = t[n];
                        if (i && i.cc === e) {
                            r = i;
                            break
                        }
                    }
                    return r
                }(r, n[0].cc);
                return !i || i && !i.startPTS ? void o.b.log("No frag in previous level to align on") : i
            }
            o.b.log("No fragments to align")
        }

        function i(t, e) {
            e.fragments.forEach((function(e) {
                if (e) {
                    var r = e.start + t;
                    e.start = e.startPTS = r, e.endPTS = r + e.duration
                }
            })), e.PTSKnown = !0
        }
        e.b = function(t, e) {
            return a.a.search(t, (function(t) {
                return t.cc < e ? 1 : t.cc > e ? -1 : 0
            }))
        }, e.a = function(t, e, r) {
            if (function(t, e, r) {
                    var n = !1;
                    return e && e.details && r && (r.endCC > r.startCC || t && t.cc < r.startCC) && (n = !0), n
                }(t, e, r)) {
                var a = n(e.details, r);
                a && (o.b.log("Adjusting PTS using last level due to CC increase within current level"), i(a.start, r))
            }
            if (!1 === r.PTSKnown && e && e.details && e.details.fragments && e.details.fragments.length) {
                var s = e.details.programDateTime,
                    u = (r.programDateTime - s) / 1e3 + e.details.fragments[0].start;
                isNaN(u) || (o.b.log("adjusting PTS using programDateTime delta, sliding:" + u.toFixed(3)), i(u, r))
            }
        };
        var a = r(7),
            o = r(0)
    }, function(t, e, r) {
        "use strict";
        e.b = function(t, e) {
            var r = null;
            try {
                r = new window.Event("addtrack")
            } catch (t) {
                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = t, e.dispatchEvent(r)
        }, e.a = function(t) {
            if (t && t.cues)
                for (; t.cues.length > 0;) t.removeCue(t.cues[0])
        }
    }, function(t, e, r) {
        "use strict";

        function n() {
            this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new c, this.regionList = []
        }

        function i() {
            this.values = Object.create(null)
        }

        function a(t, e, r, n) {
            var i = n ? t.split(n) : [t];
            for (var a in i)
                if ("string" == typeof i[a]) {
                    var o = i[a].split(r);
                    2 === o.length && e(o[0], o[1])
                }
        }

        function o(t, e, r) {
            function n() {
                var e = function(t) {
                    function e(t, e, r, n) {
                        return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + (0 | n) / 1e3
                    }
                    var r = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return r ? r[3] ? e(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? e(r[1], r[2], 0, r[4]) : e(0, r[1], r[2], r[4]) : null
                }(t);
                if (null === e) throw new Error("Malformed timestamp: " + s);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
            }

            function o() {
                t = t.replace(/^\s+/, "")
            }
            var s = t;
            if (o(), e.startTime = n(), o(), "--\x3e" !== t.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + s);
            t = t.substr(3), o(), e.endTime = n(), o(),
                function(t, e) {
                    var n = new i;
                    a(t, (function(t, e) {
                        switch (t) {
                            case "region":
                                for (var i = r.length - 1; i >= 0; i--)
                                    if (r[i].id === e) {
                                        n.set(t, r[i].region);
                                        break
                                    } break;
                            case "vertical":
                                n.alt(t, e, ["rl", "lr"]);
                                break;
                            case "line":
                                var a = e.split(","),
                                    o = a[0];
                                n.integer(t, o), n.percent(t, o) && n.set("snapToLines", !1), n.alt(t, o, ["auto"]), 2 === a.length && n.alt("lineAlign", a[1], ["start", f, "end"]);
                                break;
                            case "position":
                                a = e.split(","), n.percent(t, a[0]), 2 === a.length && n.alt("positionAlign", a[1], ["start", f, "end", "line-left", "line-right", "auto"]);
                                break;
                            case "size":
                                n.percent(t, e);
                                break;
                            case "align":
                                n.alt(t, e, ["start", f, "end", "left", "right"])
                        }
                    }), /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", "");
                    var o = n.get("line", "auto");
                    "auto" === o && -1 === l.line && (o = -1), e.line = o, e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100), e.align = n.get("align", f);
                    var s = n.get("position", "auto");
                    "auto" === s && 50 === l.position && (s = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = s
                }(t, e)
        }

        function s(t) {
            return t.replace(/<br(?: \/)?>/gi, "\n")
        }
        r.d(e, "b", (function() {
            return s
        }));
        var u = r(61),
            c = function() {
                return {
                    decode: function(t) {
                        if (!t) return "";
                        if ("string" != typeof t) throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(t))
                    }
                }
            };
        i.prototype = {
            set: function(t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            },
            get: function(t, e, r) {
                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
            },
            has: function(t) {
                return t in this.values
            },
            alt: function(t, e, r) {
                for (var n = 0; n < r.length; ++n)
                    if (e === r[n]) {
                        this.set(t, e);
                        break
                    }
            },
            integer: function(t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            },
            percent: function(t, e) {
                return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (e = parseFloat(e)) >= 0 && e <= 100) && (this.set(t, e), !0)
            }
        };
        var l = new u.a(0, 0, 0),
            f = "middle" === l.align ? "middle" : "center";
        n.prototype = {
            parse: function(t) {
                function e() {
                    var t = r.buffer,
                        e = 0;
                    for (t = s(t); e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                    var n = t.substr(0, e);
                    return "\r" === t[e] && ++e, "\n" === t[e] && ++e, r.buffer = t.substr(e), n
                }
                var r = this;
                t && (r.buffer += r.decoder.decode(t, {
                    stream: !0
                }));
                try {
                    var n = void 0;
                    if ("INITIAL" === r.state) {
                        if (!/\r\n|\n/.test(r.buffer)) return this;
                        var i = (n = e()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                        if (!i || !i[0]) throw new Error("Malformed WebVTT signature.");
                        r.state = "HEADER"
                    }
                    for (var c = !1; r.buffer;) {
                        if (!/\r\n|\n/.test(r.buffer)) return this;
                        switch (c ? c = !1 : n = e(), r.state) {
                            case "HEADER":
                                /:/.test(n) ? function(t) {
                                    a(t, (function(t, e) {
                                        switch (t) {
                                            case "Region":
                                                console.log("parse region", e)
                                        }
                                    }), /:/)
                                }(n) : n || (r.state = "ID");
                                continue;
                            case "NOTE":
                                n || (r.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(n)) {
                                    r.state = "NOTE";
                                    break
                                }
                                if (!n) continue;
                                if (r.cue = new u.a(0, 0, ""), r.state = "CUE", -1 === n.indexOf("--\x3e")) {
                                    r.cue.id = n;
                                    continue
                                }
                                case "CUE":
                                    try {
                                        o(n, r.cue, r.regionList)
                                    } catch (t) {
                                        r.cue = null, r.state = "BADCUE";
                                        continue
                                    }
                                    r.state = "CUETEXT";
                                    continue;
                                case "CUETEXT":
                                    var l = -1 !== n.indexOf("--\x3e");
                                    if (!n || l && (c = !0)) {
                                        r.oncue && r.oncue(r.cue), r.cue = null, r.state = "ID";
                                        continue
                                    }
                                    r.cue.text && (r.cue.text += "\n"), r.cue.text += n;
                                    continue;
                                case "BADCUE":
                                    n || (r.state = "ID");
                                    continue
                        }
                    }
                } catch (t) {
                    "CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue), r.cue = null, r.state = "INITIAL" === r.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            },
            flush: function() {
                var t = this;
                try {
                    if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new Error("Malformed WebVTT signature.")
                } catch (t) {
                    throw t
                }
                return t.onflush && t.onflush(), this
            }
        }, e.a = n
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(4),
            i = r.n(n),
            a = r(2),
            o = r(14),
            s = r(30),
            u = r(31),
            c = r(32),
            l = r(47),
            f = r(48),
            h = r(49),
            d = r(0),
            p = r(50),
            v = r(12),
            y = r(1),
            g = r(10),
            m = r.n(g),
            b = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }();
        r(70);
        var E = function() {
            function t() {
                var e = this,
                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = t.DefaultConfig;
                if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                for (var i in n) i in r || (r[i] = n[i]);
                if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                Object(d.a)(r.debug), this.config = r, this._autoLevelCapping = -1;
                var a = this.observer = new m.a;
                a.trigger = function(t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                    a.emit.apply(a, [t, t].concat(r))
                }, a.off = function(t) {
                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                    a.removeListener.apply(a, [t].concat(r))
                }, this.on = a.on.bind(a), this.off = a.off.bind(a), this.trigger = a.trigger.bind(a);
                var h = this.abrController = new r.abrController(this),
                    p = new r.bufferController(this),
                    y = new r.capLevelController(this),
                    g = new r.fpsController(this),
                    b = new o.a(this),
                    E = new s.a(this),
                    _ = new u.a(this),
                    S = new f.a(this),
                    T = this.levelController = new l.a(this),
                    A = new v.b(this),
                    w = [T, this.streamController = new c.a(this, A)],
                    R = r.audioStreamController;
                R && w.push(new R(this, A)), this.networkControllers = w;
                var L = [b, E, _, h, p, y, g, S, A];
                if (R = r.audioTrackController) {
                    var O = new R(this);
                    this.audioTrackController = O, L.push(O)
                }
                if (R = r.subtitleTrackController) {
                    var I = new R(this);
                    this.subtitleTrackController = I, L.push(I)
                }
                if (R = r.emeController) {
                    var D = new R(this);
                    this.emeController = D, L.push(D)
                } [r.subtitleStreamController, r.timelineController].forEach((function(t) {
                    t && L.push(new t(e))
                })), this.coreComponents = L
            }
            return t.isSupported = function() {
                return Object(h.a)()
            }, b(t, null, [{
                key: "version",
                get: function() {
                    return "0.9.1"
                }
            }, {
                key: "Events",
                get: function() {
                    return y.a
                }
            }, {
                key: "ErrorTypes",
                get: function() {
                    return a.b
                }
            }, {
                key: "ErrorDetails",
                get: function() {
                    return a.a
                }
            }, {
                key: "DefaultConfig",
                get: function() {
                    return t.defaultConfig ? t.defaultConfig : p.a
                },
                set: function(e) {
                    t.defaultConfig = e
                }
            }]), t.prototype.destroy = function() {
                d.b.log("destroy"), this.trigger(y.a.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach((function(t) {
                    t.destroy()
                })), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1
            }, t.prototype.attachMedia = function(t) {
                d.b.log("attachMedia"), this.media = t, this.trigger(y.a.MEDIA_ATTACHING, {
                    media: t
                })
            }, t.prototype.detachMedia = function() {
                d.b.log("detachMedia"), this.trigger(y.a.MEDIA_DETACHING), this.media = null
            }, t.prototype.loadSource = function(t) {
                t = i.a.buildAbsoluteURL(window.location.href, t, {
                    alwaysNormalize: !0
                }), d.b.log("loadSource:" + t), this.url = t, this.trigger(y.a.MANIFEST_LOADING, {
                    url: t
                })
            }, t.prototype.startLoad = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                d.b.log("startLoad(" + t + ")"), this.networkControllers.forEach((function(e) {
                    e.startLoad(t)
                }))
            }, t.prototype.stopLoad = function() {
                d.b.log("stopLoad"), this.networkControllers.forEach((function(t) {
                    t.stopLoad()
                }))
            }, t.prototype.swapAudioCodec = function() {
                d.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
            }, t.prototype.recoverMediaError = function() {
                d.b.log("recoverMediaError");
                var t = this.media;
                this.detachMedia(), this.attachMedia(t)
            }, b(t, [{
                key: "levels",
                get: function() {
                    return this.levelController.levels
                }
            }, {
                key: "currentLevel",
                get: function() {
                    return this.streamController.currentLevel
                },
                set: function(t) {
                    d.b.log("set currentLevel:" + t), this.loadLevel = t, this.streamController.immediateLevelSwitch()
                }
            }, {
                key: "nextLevel",
                get: function() {
                    return this.streamController.nextLevel
                },
                set: function(t) {
                    d.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
                }
            }, {
                key: "loadLevel",
                get: function() {
                    return this.levelController.level
                },
                set: function(t) {
                    d.b.log("set loadLevel:" + t), this.levelController.manualLevel = t
                }
            }, {
                key: "nextLoadLevel",
                get: function() {
                    return this.levelController.nextLoadLevel
                },
                set: function(t) {
                    this.levelController.nextLoadLevel = t
                }
            }, {
                key: "firstLevel",
                get: function() {
                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                },
                set: function(t) {
                    d.b.log("set firstLevel:" + t), this.levelController.firstLevel = t
                }
            }, {
                key: "startLevel",
                get: function() {
                    return this.levelController.startLevel
                },
                set: function(t) {
                    d.b.log("set startLevel:" + t), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
                }
            }, {
                key: "autoLevelCapping",
                get: function() {
                    return this._autoLevelCapping
                },
                set: function(t) {
                    d.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t
                }
            }, {
                key: "autoLevelEnabled",
                get: function() {
                    return -1 === this.levelController.manualLevel
                }
            }, {
                key: "manualLevel",
                get: function() {
                    return this.levelController.manualLevel
                }
            }, {
                key: "minAutoLevel",
                get: function() {
                    for (var t = this.levels, e = this.config.minAutoBitrate, r = t ? t.length : 0, n = 0; n < r; n++)
                        if ((t[n].realBitrate ? Math.max(t[n].realBitrate, t[n].bitrate) : t[n].bitrate) > e) return n;
                    return 0
                }
            }, {
                key: "maxAutoLevel",
                get: function() {
                    var t = this.levels,
                        e = this.autoLevelCapping;
                    return -1 === e && t && t.length ? t.length - 1 : e
                }
            }, {
                key: "nextAutoLevel",
                get: function() {
                    var t = this;
                    return Math.min(Math.max(t.abrController.nextAutoLevel, t.minAutoLevel), t.maxAutoLevel)
                },
                set: function(t) {
                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
                }
            }, {
                key: "audioTracks",
                get: function() {
                    var t = this.audioTrackController;
                    return t ? t.audioTracks : []
                }
            }, {
                key: "audioTrack",
                get: function() {
                    var t = this.audioTrackController;
                    return t ? t.audioTrack : -1
                },
                set: function(t) {
                    var e = this.audioTrackController;
                    e && (e.audioTrack = t)
                }
            }, {
                key: "liveSyncPosition",
                get: function() {
                    return this.streamController.liveSyncPosition
                }
            }, {
                key: "subtitleTracks",
                get: function() {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTracks : []
                }
            }, {
                key: "subtitleTrack",
                get: function() {
                    var t = this.subtitleTrackController;
                    return t ? t.subtitleTrack : -1
                },
                set: function(t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleTrack = t)
                }
            }, {
                key: "subtitleDisplay",
                get: function() {
                    var t = this.subtitleTrackController;
                    return !!t && t.subtitleDisplay
                },
                set: function(t) {
                    var e = this.subtitleTrackController;
                    e && (e.subtitleDisplay = t)
                }
            }]), t
        }();
        e.default = E
    }, function(t, e, r) {
        "use strict";
        var n = r(4),
            i = r.n(n),
            a = r(6),
            o = r(16),
            s = r(29),
            u = r(0),
            c = r(17),
            l = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
            f = /#EXT-X-MEDIA:(.*)/g,
            h = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
            d = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:#EXT-X-(AD-ID):(.+))|(?:#EXT-X-(IMPRESSION):(.+))|(?:#EXT-X-(COMPANION-IMG-PATH):(.+))|(?:#EXT-X-(COMPANION-IMG-TRACKING):(.+))|(?:#EXT-X-(COMPANION-LINK):(.+))|(?:#EXT-X-(TRACKING-EVENT-START):(.+))|(?:#EXT-X-(TRACKING-EVENT-FQ):(.+))|(?:#EXT-X-(TRACKING-EVENT-MP):(.+))|(?:#EXT-X-(TRACKING-EVENT-TQ):(.+))|(?:#EXT-X-(TRACKING-EVENT-END):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
            p = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return t.findGroup = function(t, e) {
                    if (!t) return null;
                    for (var r = null, n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.id === e && (r = i)
                    }
                    return r
                }, t.convertAVC1ToAVCOTI = function(t) {
                    var e = void 0,
                        r = t.split(".");
                    return r.length > 2 ? (e = r.shift() + ".", e += parseInt(r.shift()).toString(16), e += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : e = t, e
                }, t.resolve = function(t, e) {
                    return i.a.buildAbsoluteURL(e, t, {
                        alwaysNormalize: !0
                    })
                }, t.parseMasterPlaylist = function(e, r) {
                    var n = [],
                        i = void 0;
                    for (l.lastIndex = 0; null != (i = l.exec(e));) {
                        var a = {},
                            o = a.attrs = new s.a(i[1]);
                        a.url = t.resolve(i[2], r);
                        var u = o.decimalResolution("RESOLUTION");
                        u && (a.width = u.width, a.height = u.height), a.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"), a.name = o.NAME,
                            function(t, e) {
                                ["video", "audio"].forEach((function(r) {
                                    var n = t.filter((function(t) {
                                        return Object(c.b)(t, r)
                                    }));
                                    if (n.length) {
                                        var i = n.filter((function(t) {
                                            return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                                        }));
                                        e[r + "Codec"] = i.length > 0 ? i[0] : n[0], t = t.filter((function(t) {
                                            return -1 === n.indexOf(t)
                                        }))
                                    }
                                })), e.unknownCodecs = t
                            }([].concat((o.CODECS || "").split(/[ ,]+/)), a), a.videoCodec && -1 !== a.videoCodec.indexOf("avc1") && (a.videoCodec = t.convertAVC1ToAVCOTI(a.videoCodec)), n.push(a)
                    }
                    return n
                }, t.parseMasterPlaylistMedia = function(e, r, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                        a = void 0,
                        o = [],
                        u = 0;
                    for (f.lastIndex = 0; null !== (a = f.exec(e));) {
                        var c = {},
                            l = new s.a(a[1]);
                        if (l.TYPE === n) {
                            if (c.groupId = l["GROUP-ID"], c.name = l.NAME, c.type = n, c.default = "YES" === l.DEFAULT, c.autoselect = "YES" === l.AUTOSELECT, c.forced = "YES" === l.FORCED, l.URI && (c.url = t.resolve(l.URI, r)), c.lang = l.LANGUAGE, c.name || (c.name = c.lang), i.length) {
                                var h = t.findGroup(i, c.groupId);
                                c.audioCodec = h ? h.codec : i[0].codec
                            }
                            c.id = u++, o.push(c)
                        }
                    }
                    return o
                }, t.parseLevelPlaylist = function(t, e, r, n) {
                    var i = 0,
                        c = 0,
                        l = {
                            type: null,
                            version: null,
                            url: e,
                            fragments: [],
                            live: !0,
                            startSN: 0
                        },
                        f = new o.a,
                        p = 0,
                        v = null,
                        y = new a.a,
                        g = void 0,
                        m = void 0;
                    for (h.lastIndex = 0; null !== (g = h.exec(t));) {
                        var b = g[1];
                        if (b) {
                            y.duration = parseFloat(b);
                            var E = (" " + g[2]).slice(1);
                            y.title = E || null, y.tagList.push(E ? ["INF", b, E] : ["INF", b])
                        } else if (g[3]) {
                            if (!isNaN(y.duration)) {
                                var _ = i++;
                                y.type = n, y.start = c, y.levelkey = f, y.sn = _, y.level = r, y.cc = p, y.baseurl = e, y.relurl = (" " + g[3]).slice(1), l.programDateTime && (v ? y.rawProgramDateTime ? y.pdt = Date.parse(y.rawProgramDateTime) : y.pdt = v.pdt + 1e3 * v.duration : y.pdt = Date.parse(l.programDateTime), y.endPdt = y.pdt + 1e3 * y.duration), l.fragments.push(y), v = y, c += y.duration, y = new a.a
                            }
                        } else if (g[4]) {
                            if (y.rawByteRange = (" " + g[4]).slice(1), v) {
                                var S = v.byteRangeEndOffset;
                                S && (y.lastByteRangeEndOffset = S)
                            }
                        } else if (g[5]) y.rawProgramDateTime = (" " + g[5]).slice(1), y.tagList.push(["PROGRAM-DATE-TIME", y.rawProgramDateTime]), void 0 === l.programDateTime && (l.programDateTime = new Date(new Date(Date.parse(g[5])) - 1e3 * c));
                        else {
                            for (g = g[0].match(d), m = 1; m < g.length && void 0 === g[m]; m++);
                            var T = (" " + g[m + 1]).slice(1),
                                A = (" " + g[m + 2]).slice(1);
                            switch (g[m]) {
                                case "#":
                                    y.tagList.push(A ? [T, A] : [T]);
                                    break;
                                case "AD-ID":
                                case "IMPRESSION":
                                case "COMPANION-IMG-PATH":
                                case "COMPANION-IMG-TRACKING":
                                case "COMPANION-LINK":
                                case "TRACKING-EVENT-START":
                                case "TRACKING-EVENT-FQ":
                                case "TRACKING-EVENT-MP":
                                case "TRACKING-EVENT-TQ":
                                case "TRACKING-EVENT-END":
                                    y.tagList.push(A ? [g[m], T, A] : [g[m], T]);
                                    break;
                                case "PLAYLIST-TYPE":
                                    l.type = T.toUpperCase();
                                    break;
                                case "MEDIA-SEQUENCE":
                                    i = l.startSN = parseInt(T);
                                    break;
                                case "TARGETDURATION":
                                    l.targetduration = parseFloat(T);
                                    break;
                                case "VERSION":
                                    l.version = parseInt(T);
                                    break;
                                case "EXTM3U":
                                    break;
                                case "ENDLIST":
                                    l.live = !1;
                                    break;
                                case "DIS":
                                    p++, y.tagList.push(["DIS"]);
                                    break;
                                case "DISCONTINUITY-SEQ":
                                    p = parseInt(T);
                                    break;
                                case "KEY":
                                    var w = T,
                                        R = new s.a(w),
                                        L = R.enumeratedString("METHOD"),
                                        O = R.URI,
                                        I = R.hexadecimalInteger("IV");
                                    L && (f = new o.a, O && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(L) >= 0 && (f.method = L, f.baseuri = e, f.reluri = O, f.key = null, f.iv = I));
                                    break;
                                case "START":
                                    var D = T,
                                        k = new s.a(D).decimalFloatingPoint("TIME-OFFSET");
                                    isNaN(k) || (l.startTimeOffset = k);
                                    break;
                                case "MAP":
                                    var P = new s.a(T);
                                    y.relurl = P.URI, y.rawByteRange = P.BYTERANGE, y.baseurl = e, y.level = r, y.type = n, y.sn = "initSegment", l.initSegment = y, y = new a.a;
                                    break;
                                default:
                                    u.b.warn("line parsed but not handled: " + g)
                            }
                        }
                    }
                    return (y = v) && !y.relurl && (l.fragments.pop(), c -= y.duration), l.totalduration = c, l.averagetargetduration = c / l.fragments.length, l.endSN = i - 1, l.startCC = l.fragments[0] ? l.fragments[0].cc : 0, l.endCC = p, !l.initSegment && l.fragments.length && l.fragments.every((function(t) {
                        return t.relurl.endsWith(".mp4")
                    })) && (u.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (y = new a.a).relurl = l.fragments[0].relurl, y.baseurl = e, y.level = r, y.type = n, y.sn = "initSegment", l.initSegment = y, l.needSidxRanges = !0), l
                }, t
            }();
        e.a = p
    }, function(t, e, r) {
        "use strict";
        var n = /^(\d+)x(\d+)$/,
            i = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
            a = function() {
                function t(e) {
                    for (var r in function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(r) && (this[r] = e[r])
                }
                return t.prototype.decimalInteger = function(t) {
                    var e = parseInt(this[t], 10);
                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                }, t.prototype.hexadecimalInteger = function(t) {
                    if (this[t]) {
                        var e = (this[t] || "0x").slice(2);
                        e = (1 & e.length ? "0" : "") + e;
                        for (var r = new Uint8Array(e.length / 2), n = 0; n < e.length / 2; n++) r[n] = parseInt(e.slice(2 * n, 2 * n + 2), 16);
                        return r
                    }
                    return null
                }, t.prototype.hexadecimalIntegerAsNumber = function(t) {
                    var e = parseInt(this[t], 16);
                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                }, t.prototype.decimalFloatingPoint = function(t) {
                    return parseFloat(this[t])
                }, t.prototype.enumeratedString = function(t) {
                    return this[t]
                }, t.prototype.decimalResolution = function(t) {
                    var e = n.exec(this[t]);
                    if (null !== e) return {
                        width: parseInt(e[1], 10),
                        height: parseInt(e[2], 10)
                    }
                }, t.parseAttrList = function(t) {
                    var e = void 0,
                        r = {};
                    for (i.lastIndex = 0; null !== (e = i.exec(t));) {
                        var n = e[2];
                        0 === n.indexOf('"') && n.lastIndexOf('"') === n.length - 1 && (n = n.slice(1, -1)), r[e[1]] = n
                    }
                    return r
                }, t
            }();
        e.a = a
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(2),
            o = r(0),
            s = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.FRAG_LOADING));
                    return i.loaders = {}, i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    var e = this.loaders;
                    for (var r in e) {
                        var n = e[r];
                        n && n.destroy()
                    }
                    this.loaders = {}, t.prototype.destroy.call(this)
                }, e.prototype.onFragLoading = function(t) {
                    var e = t.frag,
                        r = e.type,
                        n = this.loaders,
                        i = this.hls.config,
                        a = i.fLoader,
                        s = i.loader;
                    e.loaded = 0;
                    var u = n[r];
                    u && (o.b.warn("abort previous fragment loader for type: " + r), u.abort()), u = n[r] = e.loader = i.fLoader ? new a(i) : new s(i);
                    var c, l, f = void 0;
                    f = {
                        url: e.url,
                        frag: e,
                        responseType: "arraybuffer",
                        progressData: !1
                    };
                    var h = e.byteRangeStartOffset,
                        d = e.byteRangeEndOffset;
                    isNaN(h) || isNaN(d) || (f.rangeStart = h, f.rangeEnd = d), c = {
                        timeout: i.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: i.fragLoadingMaxRetryTimeout
                    }, l = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this),
                        onProgress: this.loadprogress.bind(this)
                    }, u.load(f, c, l)
                }, e.prototype.loadsuccess = function(t, e, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = t.data,
                        o = r.frag;
                    o.loader = void 0, this.loaders[o.type] = void 0, this.hls.trigger(n.a.FRAG_LOADED, {
                        payload: a,
                        frag: o,
                        stats: e,
                        networkDetails: i
                    })
                }, e.prototype.loaderror = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        i = e.loader;
                    i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(n.a.ERROR, {
                        type: a.b.NETWORK_ERROR,
                        details: a.a.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: e.frag,
                        response: t,
                        networkDetails: r
                    })
                }, e.prototype.loadtimeout = function(t, e) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        i = e.loader;
                    i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(n.a.ERROR, {
                        type: a.b.NETWORK_ERROR,
                        details: a.a.FRAG_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: e.frag,
                        networkDetails: r
                    })
                }, e.prototype.loadprogress = function(t, e, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        a = e.frag;
                    a.loaded = t.loaded, this.hls.trigger(n.a.FRAG_LOAD_PROGRESS, {
                        frag: a,
                        stats: t,
                        networkDetails: i
                    })
                }, e
            }(i.a);
        e.a = s
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(2),
            o = r(0),
            s = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.KEY_LOADING));
                    return i.loaders = {}, i.decryptkey = null, i.decrypturl = null, i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    for (var t in this.loaders) {
                        var e = this.loaders[t];
                        e && e.destroy()
                    }
                    this.loaders = {}, i.a.prototype.destroy.call(this)
                }, e.prototype.onKeyLoading = function(t) {
                    var e = t.frag,
                        r = e.type,
                        i = this.loaders[r],
                        a = e.decryptdata,
                        s = a.uri;
                    if (s !== this.decrypturl || null === this.decryptkey) {
                        var u, c, l, f = this.hls.config;
                        i && (o.b.warn("abort previous key loader for type:" + r), i.abort()), e.loader = this.loaders[r] = new f.loader(f), this.decrypturl = s, this.decryptkey = null, u = {
                            url: s,
                            frag: e,
                            responseType: "arraybuffer"
                        }, c = {
                            timeout: f.fragLoadingTimeOut,
                            maxRetry: f.fragLoadingMaxRetry,
                            retryDelay: f.fragLoadingRetryDelay,
                            maxRetryDelay: f.fragLoadingMaxRetryTimeout
                        }, l = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        }, e.loader.load(u, c, l)
                    } else this.decryptkey && (a.key = this.decryptkey, this.hls.trigger(n.a.KEY_LOADED, {
                        frag: e
                    }))
                }, e.prototype.loadsuccess = function(t, e, r) {
                    var i = r.frag;
                    this.decryptkey = i.decryptdata.key = new Uint8Array(t.data), i.loader = void 0, this.loaders[i.type] = void 0, this.hls.trigger(n.a.KEY_LOADED, {
                        frag: i
                    })
                }, e.prototype.loaderror = function(t, e) {
                    var r = e.frag,
                        i = r.loader;
                    i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(n.a.ERROR, {
                        type: a.b.NETWORK_ERROR,
                        details: a.a.KEY_LOAD_ERROR,
                        fatal: !1,
                        frag: r,
                        response: t
                    })
                }, e.prototype.loadtimeout = function(t, e) {
                    var r = e.frag,
                        i = r.loader;
                    i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(n.a.ERROR, {
                        type: a.b.NETWORK_ERROR,
                        details: a.a.KEY_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: r
                    })
                }, e
            }(i.a);
        e.a = s
    }, function(t, e, r) {
        "use strict";
        var n = r(7),
            i = r(8),
            a = r(18),
            o = r(1),
            s = r(12),
            u = r(6),
            c = r(14),
            l = r(22),
            f = r(23),
            h = r(2),
            d = r(0),
            p = r(24),
            v = r(13),
            y = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            g = {
                STOPPED: "STOPPED",
                IDLE: "IDLE",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_LEVEL: "WAITING_LEVEL",
                PARSING: "PARSING",
                PARSED: "PARSED",
                BUFFER_FLUSHING: "BUFFER_FLUSHING",
                ENDED: "ENDED",
                ERROR: "ERROR"
            },
            m = function(t) {
                function e(r, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, o.a.MEDIA_ATTACHED, o.a.MEDIA_DETACHING, o.a.MANIFEST_LOADING, o.a.MANIFEST_PARSED, o.a.LEVEL_LOADED, o.a.KEY_LOADED, o.a.FRAG_LOADED, o.a.FRAG_LOAD_EMERGENCY_ABORTED, o.a.FRAG_PARSING_INIT_SEGMENT, o.a.FRAG_PARSING_DATA, o.a.FRAG_PARSED, o.a.ERROR, o.a.AUDIO_TRACK_SWITCHING, o.a.AUDIO_TRACK_SWITCHED, o.a.BUFFER_CREATED, o.a.BUFFER_APPENDED, o.a.BUFFER_FLUSHED));
                    return i.fragmentTracker = n, i.config = r.config, i.audioCodecSwap = !1, i._state = g.STOPPED, i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.onHandlerDestroying = function() {
                    this.stopLoad()
                }, e.prototype.onHandlerDestroyed = function() {
                    this.state = g.STOPPED, this.fragmentTracker = null
                }, e.prototype.startLoad = function(t) {
                    if (this.levels) {
                        var e = this.lastCurrentTime,
                            r = this.hls;
                        if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                            var n = r.startLevel; - 1 === n && (n = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = n, this.loadedmetadata = !1
                        }
                        e > 0 && -1 === t && (d.b.log("override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = g.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                    } else this.forceStartLoad = !0, this.state = g.STOPPED
                }, e.prototype.stopLoad = function() {
                    var t = this.fragCurrent;
                    t && (t.loader && t.loader.abort(), this.fragmentTracker.removeFragment(t), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.clearInterval(), this.state = g.STOPPED, this.forceStartLoad = !1
                }, e.prototype.doTick = function() {
                    switch (this.state) {
                        case g.BUFFER_FLUSHING:
                            this.fragLoadError = 0;
                            break;
                        case g.IDLE:
                            this._doTickIdle();
                            break;
                        case g.WAITING_LEVEL:
                            var t = this.levels[this.level];
                            t && t.details && (this.state = g.IDLE);
                            break;
                        case g.FRAG_LOADING_WAITING_RETRY:
                            var e = performance.now(),
                                r = this.retryDate;
                            (!r || e >= r || this.media && this.media.seeking) && (d.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = g.IDLE);
                            break;
                        case g.ERROR:
                        case g.STOPPED:
                        case g.FRAG_LOADING:
                        case g.PARSING:
                        case g.PARSED:
                        case g.ENDED:
                    }
                    this._checkBuffer(), this._checkFragmentChanged()
                }, e.prototype._doTickIdle = function() {
                    var t = this.hls,
                        e = t.config,
                        r = this.media;
                    if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && e.startFragPrefetch)) {
                        var n;
                        n = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                        var a = t.nextLoadLevel,
                            s = this.levels[a];
                        if (s) {
                            var u = s.bitrate,
                                c = void 0;
                            c = u ? Math.max(8 * e.maxBufferSize / u, e.maxBufferLength) : e.maxBufferLength, c = Math.min(c, e.maxMaxBufferLength);
                            var l = i.a.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, n, e.maxBufferHole),
                                f = l.len;
                            if (!(f >= c)) {
                                d.b.trace("buffer length of " + f.toFixed(3) + " is below max of " + c.toFixed(3) + ". checking for more payload ..."), this.level = t.nextLoadLevel = a;
                                var h = s.details;
                                if (void 0 === h || !0 === h.live && this.levelLastLoaded !== a) return void(this.state = g.WAITING_LEVEL);
                                var p = this.fragPrevious;
                                if (!h.live && p && !p.backtracked && p.sn === h.endSN && !l.nextStart && Math.min(r.duration, p.start + p.duration) - Math.max(l.end, p.start) <= Math.max(.2, p.duration)) {
                                    var v = {};
                                    return this.altAudio && (v.type = "video"), this.hls.trigger(o.a.BUFFER_EOS, v), void(this.state = g.ENDED)
                                }
                                this._fetchPayloadOrEos(n, l, h)
                            }
                        }
                    }
                }, e.prototype._fetchPayloadOrEos = function(t, e, r) {
                    var n = this.fragPrevious,
                        i = this.level,
                        a = r.fragments,
                        o = a.length;
                    if (0 !== o) {
                        var s = a[0].start,
                            u = a[o - 1].start + a[o - 1].duration,
                            c = e.end,
                            l = void 0;
                        if (r.initSegment && !r.initSegment.data) l = r.initSegment;
                        else if (r.live) {
                            var f = this.config.initialLiveManifestSize;
                            if (o < f) return void d.b.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + f);
                            if (null === (l = this._ensureFragmentAtLivePoint(r, c, s, u, n, a, o))) return
                        } else c < s && (l = a[0]);
                        l || (l = this._findFragment(s, n, o, a, c, u, r)), l && this._loadFragmentOrKey(l, i, r, t, c)
                    }
                }, e.prototype._ensureFragmentAtLivePoint = function(t, e, r, i, a, o, s) {
                    var u = this.hls.config,
                        c = this.media,
                        l = void 0,
                        f = void 0 !== u.liveMaxLatencyDuration ? u.liveMaxLatencyDuration : u.liveMaxLatencyDurationCount * t.targetduration;
                    if (e < Math.max(r - u.maxFragLookUpTolerance, i - f)) {
                        var h = this.liveSyncPosition = this.computeLivePosition(r, t);
                        d.b.log("buffer end: " + e.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), e = h, c && c.readyState && c.duration > h && (c.currentTime = h), this.nextLoadPosition = h
                    }
                    if (t.PTSKnown && e > i && c && c.readyState) return null;
                    if (this.startFragRequested && !t.PTSKnown) {
                        if (a)
                            if (t.programDateTime) l = this._findFragmentByPDT(o, a.endPdt + 1);
                            else {
                                var p = a.sn + 1;
                                if (p >= t.startSN && p <= t.endSN) {
                                    var v = o[p - t.startSN];
                                    a.cc === v.cc && (l = v, d.b.log("live playlist, switching playlist, load frag with next SN: " + l.sn))
                                }
                                l || (l = n.a.search(o, (function(t) {
                                    return a.cc - t.cc
                                }))) && d.b.log("live playlist, switching playlist, load frag with same CC: " + l.sn)
                            } l || (l = o[Math.min(s - 1, Math.round(s / 2))], d.b.log("live playlist, switching playlist, unknown, load middle frag : " + l.sn))
                    }
                    return l
                }, e.prototype._findFragmentByPDT = function(t, e) {
                    if (!t || void 0 === e) return null;
                    if (e < t[0].pdt) return null;
                    if (e >= t[t.length - 1].endPdt) return null;
                    for (var r = 0; r < t.length; ++r) {
                        var n = t[r];
                        if (e < n.endPdt) return n
                    }
                    return null
                }, e.prototype._findFragmentBySN = function(t, e, r, i) {
                    var a = void 0,
                        o = this.hls.config.maxFragLookUpTolerance,
                        s = t ? e[t.sn - e[0].sn + 1] : void 0,
                        u = function(t) {
                            var e = Math.min(o, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
                            return t.start + t.duration - e <= r ? 1 : t.start - e > r && t.start ? -1 : 0
                        };
                    return r < i && (r > i - o && (o = 0), a = s && !u(s) ? s : n.a.search(e, u)), a
                }, e.prototype._findFragment = function(t, e, r, n, i, a, o) {
                    var s, u = this.hls.config,
                        c = void 0;
                    if (s = i < a ? this._findFragmentBySN(e, n, i, a) : n[r - 1]) {
                        var l = (c = s).sn - o.startSN,
                            f = e && c.level === e.level,
                            h = n[l - 1],
                            p = n[l + 1];
                        if (e && c.sn === e.sn)
                            if (f && !c.backtracked)
                                if (c.sn < o.endSN) {
                                    var v = e.deltaPTS;
                                    v && v > u.maxBufferHole && e.dropped && l ? (c = h, d.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (c = p, d.b.log("SN just loaded, load next one: " + c.sn))
                                } else c = null;
                        else c.backtracked && (p && p.backtracked ? (d.b.warn("Already backtracked from fragment " + p.sn + ", will not backtrack to fragment " + c.sn + ". Loading fragment " + p.sn), c = p) : (d.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), c.dropped = 0, h ? (c = h).backtracked = !0 : l && (c = null)))
                    }
                    return c
                }, e.prototype._loadFragmentOrKey = function(t, e, r, n, i) {
                    if (t.decryptdata && null != t.decryptdata.uri && null == t.decryptdata.key) d.b.log("Loading key for " + t.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + e), this.state = g.KEY_LOADING, this.hls.trigger(o.a.KEY_LOADING, {
                        frag: t
                    });
                    else {
                        d.b.log("Loading " + t.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + e + ", currentTime:" + n.toFixed(3) + ",bufferEnd:" + i.toFixed(3));
                        var u = this.fragmentTracker.getState(t);
                        this.fragCurrent = t, this.startFragRequested = !0, isNaN(t.sn) || t.bitrateTest || (this.nextLoadPosition = t.start + t.duration), t.backtracked || u === s.a.NOT_LOADED ? (t.autoLevel = this.hls.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.hls.trigger(o.a.FRAG_LOADING, {
                            frag: t
                        }), this.demuxer || (this.demuxer = new a.a(this.hls, "main")), this.state = g.FRAG_LOADING) : u === s.a.APPENDING && this._reduceMaxBufferLength(t.duration) && this.fragmentTracker.removeFragment(t)
                    }
                }, e.prototype.getBufferedFrag = function(t) {
                    return this.fragmentTracker.getBufferedFrag(t, c.a.LevelType.MAIN)
                }, e.prototype.followingBufferedFrag = function(t) {
                    return t ? this.getBufferedFrag(t.endPTS + .5) : null
                }, e.prototype._checkFragmentChanged = function() {
                    var t = void 0,
                        e = void 0,
                        r = this.media;
                    if (r && r.readyState && !1 === r.seeking && ((e = r.currentTime) > r.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = e), i.a.isBuffered(r, e) ? t = this.getBufferedFrag(e) : i.a.isBuffered(r, e + .1) && (t = this.getBufferedFrag(e + .1)), t)) {
                        var n = t;
                        if (n !== this.fragPlaying) {
                            this.hls.trigger(o.a.FRAG_CHANGED, {
                                frag: n
                            });
                            var a = n.level;
                            this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(o.a.LEVEL_SWITCHED, {
                                level: a
                            }), this.fragPlaying = n
                        }
                    }
                }, e.prototype.immediateLevelSwitch = function() {
                    if (d.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
                        this.immediateSwitch = !0;
                        var t = this.media,
                            e = void 0;
                        t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
                    }
                    var r = this.fragCurrent;
                    r && r.loader && r.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                }, e.prototype.immediateLevelSwitchEnd = function() {
                    var t = this.media;
                    t && t.buffered.length && (this.immediateSwitch = !1, i.a.isBuffered(t, t.currentTime) && (t.currentTime -= 1e-4), this.previouslyPaused || t.play())
                }, e.prototype.nextLevelSwitch = function() {
                    var t = this.media;
                    if (t && t.readyState) {
                        var e, r = void 0,
                            n = void 0;
                        if ((e = this.getBufferedFrag(t.currentTime)) && e.startPTS > 1 && this.flushMainBuffer(0, e.startPTS - 1), t.paused) r = 0;
                        else {
                            var i = this.hls.nextLoadLevel,
                                a = this.levels[i],
                                o = this.fragLastKbps;
                            r = o && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * o) + 1 : 0
                        }
                        if ((n = this.getBufferedFrag(t.currentTime + r)) && (n = this.followingBufferedFrag(n))) {
                            var s = this.fragCurrent;
                            s && s.loader && s.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(n.maxStartPTS, Number.POSITIVE_INFINITY)
                        }
                    }
                }, e.prototype.flushMainBuffer = function(t, e) {
                    this.state = g.BUFFER_FLUSHING;
                    var r = {
                        startOffset: t,
                        endOffset: e
                    };
                    this.altAudio && (r.type = "video"), this.hls.trigger(o.a.BUFFER_FLUSHING, r)
                }, e.prototype.onMediaAttached = function(t) {
                    var e = this.media = this.mediaBuffer = t.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("seeked", this.onvseeked), e.addEventListener("ended", this.onvended);
                    var r = this.config;
                    this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition)
                }, e.prototype.onMediaDetaching = function() {
                    var t = this.media;
                    t && t.ended && (d.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                    var e = this.levels;
                    e && e.forEach((function(t) {
                        t.details && t.details.fragments.forEach((function(t) {
                            t.backtracked = void 0
                        }))
                    })), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("seeked", this.onvseeked), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                }, e.prototype.onMediaSeeking = function() {
                    var t = this.media,
                        e = t ? t.currentTime : void 0,
                        r = this.config;
                    isNaN(e) || d.b.log("media seeking to " + e.toFixed(3));
                    var n = this.mediaBuffer ? this.mediaBuffer : t,
                        a = i.a.bufferInfo(n, e, this.config.maxBufferHole);
                    if (this.state === g.FRAG_LOADING) {
                        var o = this.fragCurrent;
                        if (0 === a.len && o) {
                            var s = r.maxFragLookUpTolerance,
                                u = o.start - s,
                                c = o.start + o.duration + s;
                            e < u || e > c ? (o.loader && (d.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), o.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = g.IDLE) : d.b.log("seeking outside of buffer but within currently loaded fragment range")
                        }
                    } else this.state === g.ENDED && (0 === a.len && (this.fragPrevious = 0), this.state = g.IDLE);
                    t && (this.lastCurrentTime = e), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = e), this.tick()
                }, e.prototype.onMediaSeeked = function() {
                    var t = this.media,
                        e = t ? t.currentTime : void 0;
                    isNaN(e) || d.b.log("media seeked to " + e.toFixed(3)), this.tick()
                }, e.prototype.onMediaEnded = function() {
                    d.b.log("media ended"), this.startPosition = this.lastCurrentTime = 0
                }, e.prototype.onManifestLoading = function() {
                    d.b.log("trigger BUFFER_RESET"), this.hls.trigger(o.a.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                }, e.prototype.onManifestParsed = function(t) {
                    var e = !1,
                        r = !1,
                        n = void 0;
                    t.levels.forEach((function(t) {
                        (n = t.audioCodec) && (-1 !== n.indexOf("mp4a.40.2") && (e = !0), -1 !== n.indexOf("mp4a.40.5") && (r = !0))
                    })), this.audioCodecSwitch = e && r, this.audioCodecSwitch && d.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
                    var i = this.config;
                    (i.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(i.startPosition)
                }, e.prototype.onLevelLoaded = function(t) {
                    var e = t.details,
                        r = t.level,
                        n = this.levels[this.levelLastLoaded],
                        i = this.levels[r],
                        a = e.totalduration,
                        s = 0;
                    if (d.b.log("level " + r + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + a), e.live || n && n.details.live) {
                        var u = i.details;
                        u && e.fragments.length > 0 ? (l.a(u, e), s = e.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(s, u), e.PTSKnown && !isNaN(s) ? d.b.log("live playlist sliding:" + s.toFixed(3)) : (d.b.log("live playlist - outdated PTS, unknown sliding"), Object(p.a)(this.fragPrevious, n, e))) : (d.b.log("live playlist - first load, unknown sliding"), e.PTSKnown = !1, Object(p.a)(this.fragPrevious, n, e))
                    } else e.PTSKnown = !1;
                    if (i.details = e, this.levelLastLoaded = r, this.hls.trigger(o.a.LEVEL_UPDATED, {
                            details: e,
                            level: r
                        }), !1 === this.startFragRequested) {
                        if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                            var c = e.startTimeOffset;
                            isNaN(c) ? e.live ? (this.startPosition = this.computeLivePosition(s, e), d.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (c < 0 && (d.b.log("negative start time offset " + c + ", count from end of last fragment"), c = s + a + c), d.b.log("start time offset found in playlist, adjust startPosition to " + c), this.startPosition = c), this.lastCurrentTime = this.startPosition
                        }
                        this.nextLoadPosition = this.startPosition
                    }
                    this.state === g.WAITING_LEVEL && (this.state = g.IDLE), this.tick()
                }, e.prototype.onKeyLoaded = function() {
                    this.state === g.KEY_LOADING && (this.state = g.IDLE, this.tick())
                }, e.prototype.onFragLoaded = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    if (this.state === g.FRAG_LOADING && e && "main" === r.type && r.level === e.level && r.sn === e.sn) {
                        var n = t.stats,
                            i = this.levels[e.level],
                            s = i.details;
                        if (d.b.log("Loaded  " + e.sn + " of [" + s.startSN + " ," + s.endSN + "],level " + e.level), this.bitrateTest = !1, this.stats = n, !0 === r.bitrateTest && this.hls.nextLoadLevel) this.state = g.IDLE, this.startFragRequested = !1, n.tparsed = n.tbuffered = performance.now(), this.hls.trigger(o.a.FRAG_BUFFERED, {
                            stats: n,
                            frag: e,
                            id: "main"
                        }), this.tick();
                        else if ("initSegment" === r.sn) this.state = g.IDLE, n.tparsed = n.tbuffered = performance.now(), s.initSegment.data = t.payload, this.hls.trigger(o.a.FRAG_BUFFERED, {
                            stats: n,
                            frag: e,
                            id: "main"
                        }), this.tick();
                        else {
                            this.state = g.PARSING;
                            var u = s.totalduration,
                                c = e.level,
                                l = e.sn,
                                f = this.config.defaultAudioCodec || i.audioCodec;
                            this.audioCodecSwap && (d.b.log("swapping playlist audio codec"), void 0 === f && (f = this.lastAudioCodec), f && (f = -1 !== f.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), this.pendingBuffering = !0, this.appended = !1, d.b.log("Parsing " + l + " of [" + s.startSN + " ," + s.endSN + "],level " + c + ", cc " + e.cc);
                            var h = this.demuxer;
                            h || (h = this.demuxer = new a.a(this.hls, "main"));
                            var p = this.media,
                                v = !(p && p.seeking) && (s.PTSKnown || !s.live),
                                y = s.initSegment ? s.initSegment.data : [];
                            h.push(t.payload, y, f, i.videoCodec, e, u, v, void 0)
                        }
                    }
                    this.fragLoadError = 0
                }, e.prototype.onFragParsingInitSegment = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    if (e && "main" === t.id && r.sn === e.sn && r.level === e.level && this.state === g.PARSING) {
                        var n = t.tracks,
                            i = void 0,
                            a = void 0;
                        if (n.audio && this.altAudio && delete n.audio, a = n.audio) {
                            var s = this.levels[this.level].audioCodec,
                                u = navigator.userAgent.toLowerCase();
                            s && this.audioCodecSwap && (d.b.log("swapping playlist audio codec"), s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === u.indexOf("firefox") && (s = "mp4a.40.5"), -1 !== u.indexOf("android") && "audio/mpeg" !== a.container && (s = "mp4a.40.2", d.b.log("Android: force audio codec to " + s)), a.levelCodec = s, a.id = t.id
                        }
                        for (i in (a = n.video) && (a.levelCodec = this.levels[this.level].videoCodec, a.id = t.id), this.hls.trigger(o.a.BUFFER_CODECS, n), n) {
                            a = n[i], d.b.log("main track:" + i + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                            var c = a.initSegment;
                            c && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(o.a.BUFFER_APPENDING, {
                                type: i,
                                data: c,
                                parent: "main",
                                content: "initSegment"
                            }))
                        }
                        this.tick()
                    }
                }, e.prototype.onFragParsingData = function(t) {
                    var e = this,
                        r = this.fragCurrent,
                        n = t.frag;
                    if (r && "main" === t.id && n.sn === r.sn && n.level === r.level && ("audio" !== t.type || !this.altAudio) && this.state === g.PARSING) {
                        var i = this.levels[this.level],
                            a = r;
                        if (isNaN(t.endPTS) && (t.endPTS = t.startPTS + r.duration, t.endDTS = t.startDTS + r.duration), !0 === t.hasAudio && a.addElementaryStream(u.a.ElementaryStreamTypes.AUDIO), !0 === t.hasVideo && a.addElementaryStream(u.a.ElementaryStreamTypes.VIDEO), d.b.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type)
                            if (a.dropped = t.dropped, a.dropped)
                                if (a.backtracked) d.b.warn("Already backtracked on this fragment, appending with the gap");
                                else {
                                    var s = i.details;
                                    if (!s || a.sn !== s.startSN) return d.b.warn("missing video frame(s), backtracking fragment"), this.fragmentTracker.removeFragment(a), a.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = g.IDLE, this.fragPrevious = a, void this.tick();
                                    d.b.warn("missing video frame(s) on first frag, appending with gap")
                                }
                        else a.backtracked = !1;
                        var c = l.b(i.details, a, t.startPTS, t.endPTS, t.startDTS, t.endDTS),
                            f = this.hls;
                        f.trigger(o.a.LEVEL_PTS_UPDATED, {
                            details: i.details,
                            level: this.level,
                            drift: c,
                            type: t.type,
                            start: t.startPTS,
                            end: t.endPTS
                        }), [t.data1, t.data2].forEach((function(r) {
                            r && r.length && e.state === g.PARSING && (e.appended = !0, e.pendingBuffering = !0, f.trigger(o.a.BUFFER_APPENDING, {
                                type: t.type,
                                data: r,
                                parent: "main",
                                content: "data"
                            }))
                        })), this.tick()
                    }
                }, e.prototype.onFragParsed = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    e && "main" === t.id && r.sn === e.sn && r.level === e.level && this.state === g.PARSING && (this.stats.tparsed = performance.now(), this.state = g.PARSED, this._checkAppendedParsed())
                }, e.prototype.onAudioTrackSwitching = function(t) {
                    var e = !!t.url,
                        r = t.id;
                    if (!e) {
                        if (this.mediaBuffer !== this.media) {
                            d.b.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                            var n = this.fragCurrent;
                            n.loader && (d.b.log("switching to main audio track, cancel main fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = g.IDLE
                        }
                        var i = this.hls;
                        i.trigger(o.a.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: Number.POSITIVE_INFINITY,
                            type: "audio"
                        }), i.trigger(o.a.AUDIO_TRACK_SWITCHED, {
                            id: r
                        }), this.altAudio = !1
                    }
                }, e.prototype.onAudioTrackSwitched = function(t) {
                    var e = t.id,
                        r = !!this.hls.audioTracks[e].url;
                    if (r) {
                        var n = this.videoBuffer;
                        n && this.mediaBuffer !== n && (d.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                    }
                    this.altAudio = r, this.tick()
                }, e.prototype.onBufferCreated = function(t) {
                    var e = t.tracks,
                        r = void 0,
                        n = void 0,
                        i = !1;
                    for (var a in e) {
                        var o = e[a];
                        "main" === o.id ? (n = a, r = o, "video" === a && (this.videoBuffer = e[a].buffer)) : i = !0
                    }
                    i && r ? (d.b.log("alternate track found, use " + n + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
                }, e.prototype.onBufferAppended = function(t) {
                    if ("main" === t.parent) {
                        var e = this.state;
                        e !== g.PARSING && e !== g.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
                    }
                }, e.prototype._checkAppendedParsed = function() {
                    if (!(this.state !== g.PARSED || this.appended && this.pendingBuffering)) {
                        var t = this.fragCurrent;
                        if (t) {
                            var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                            d.b.log("main buffered : " + f.a.toString(e.buffered)), this.fragPrevious = t;
                            var r = this.stats;
                            r.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(o.a.FRAG_BUFFERED, {
                                stats: r,
                                frag: t,
                                id: "main"
                            }), this.state = g.IDLE
                        }
                        this.tick()
                    }
                }, e.prototype.onError = function(t) {
                    var e = t.frag || this.fragCurrent;
                    if (!e || "main" === e.type) {
                        var r = !!this.media && i.a.isBuffered(this.media, this.media.currentTime) && i.a.isBuffered(this.media, this.media.currentTime + .5);
                        switch (t.details) {
                            case h.a.FRAG_LOAD_ERROR:
                            case h.a.FRAG_LOAD_TIMEOUT:
                            case h.a.KEY_LOAD_ERROR:
                            case h.a.KEY_LOAD_TIMEOUT:
                                if (!t.fatal)
                                    if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                        var n = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                        d.b.warn("mediaController: frag loading failed, retry in " + n + " ms"), this.retryDate = performance.now() + n, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = g.FRAG_LOADING_WAITING_RETRY
                                    } else d.b.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = g.ERROR;
                                break;
                            case h.a.LEVEL_LOAD_ERROR:
                            case h.a.LEVEL_LOAD_TIMEOUT:
                                this.state !== g.ERROR && (t.fatal ? (this.state = g.ERROR, d.b.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== g.WAITING_LEVEL || (this.state = g.IDLE));
                                break;
                            case h.a.BUFFER_FULL_ERROR:
                                "main" !== t.parent || this.state !== g.PARSING && this.state !== g.PARSED || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = g.IDLE) : (d.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                        }
                    }
                }, e.prototype._reduceMaxBufferLength = function(t) {
                    var e = this.config;
                    return e.maxMaxBufferLength >= t && (e.maxMaxBufferLength /= 2, d.b.warn("main:reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                }, e.prototype._checkBuffer = function() {
                    var t = this.media,
                        e = this.config;
                    if (t && t.readyState) {
                        var r = t.currentTime,
                            n = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
                        if (!this.loadedmetadata && n.length) {
                            this.loadedmetadata = !0;
                            var a = t.seeking ? r : this.startPosition;
                            r !== a && (d.b.log("target start position not buffered, seek to buffered.start(0) " + a + " from current time" + r + " "), t.currentTime = a)
                        } else if (this.immediateSwitch) this.immediateLevelSwitchEnd();
                        else {
                            var s = i.a.bufferInfo(t, r, e.maxBufferHole),
                                u = !(t.paused && t.readyState > 1 || t.ended || 0 === t.buffered.length);
                            if (r !== this.lastCurrentTime) this.stallReported && (d.b.warn("playback not stuck anymore @" + r + ", after " + Math.round(performance.now() - this.stalled) + "ms"), this.stallReported = !1), this.stalled = void 0, this.nudgeRetry = 0;
                            else if (u) {
                                var c = performance.now(),
                                    l = this.hls;
                                if (this.stalled) {
                                    var f = c - this.stalled,
                                        p = s.len,
                                        v = this.nudgeRetry || 0,
                                        y = this.fragmentTracker.getPartialFragment(r);
                                    if (null !== y)
                                        for (var g = 0, m = 0; m < t.buffered.length; m++) {
                                            var b = t.buffered.start(m);
                                            if (r >= g && r < b) return t.currentTime = Math.max(b, t.currentTime + .1), d.b.warn("skipping hole, adjusting currentTime from " + r + " to " + t.currentTime), this.stalled = void 0, void l.trigger(o.a.ERROR, {
                                                type: h.b.MEDIA_ERROR,
                                                details: h.a.BUFFER_SEEK_OVER_HOLE,
                                                fatal: !1,
                                                reason: "fragment loaded with buffer holes, seeking from " + r + " to " + t.currentTime,
                                                frag: y
                                            });
                                            g = t.buffered.end(m)
                                        }
                                    if (p > .5 && f > 1e3 * e.highBufferWatchdogPeriod)
                                        if (this.stallReported || (this.stallReported = !0, d.b.warn("playback stalling in high buffer @" + r), l.trigger(o.a.ERROR, {
                                                type: h.b.MEDIA_ERROR,
                                                details: h.a.BUFFER_STALLED_ERROR,
                                                fatal: !1,
                                                buffer: p
                                            })), this.stalled = void 0, this.nudgeRetry = ++v, v < e.nudgeMaxRetry) {
                                            var E = t.currentTime,
                                                _ = E + v * e.nudgeOffset;
                                            d.b.log("adjust currentTime from " + E + " to " + _), t.currentTime = _, l.trigger(o.a.ERROR, {
                                                type: h.b.MEDIA_ERROR,
                                                details: h.a.BUFFER_NUDGE_ON_STALL,
                                                fatal: !1
                                            })
                                        } else d.b.error("still stuck in high buffer @" + r + " after " + e.nudgeMaxRetry + ", raise fatal error"), l.trigger(o.a.ERROR, {
                                            type: h.b.MEDIA_ERROR,
                                            details: h.a.BUFFER_STALLED_ERROR,
                                            fatal: !0
                                        })
                                } else this.stalled = c, this.stallReported = !1
                            }
                        }
                    }
                }, e.prototype.onFragLoadEmergencyAborted = function() {
                    this.state = g.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
                }, e.prototype.onBufferFlushed = function() {
                    var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                    this.fragmentTracker.detectEvictedFragments(u.a.ElementaryStreamTypes.VIDEO, t.buffered), this.state = g.IDLE, this.fragPrevious = null
                }, e.prototype.swapAudioCodec = function() {
                    this.audioCodecSwap = !this.audioCodecSwap
                }, e.prototype.computeLivePosition = function(t, e) {
                    var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * e.targetduration;
                    return t + Math.max(0, e.totalduration - r)
                }, y(e, [{
                    key: "state",
                    set: function(t) {
                        if (this.state !== t) {
                            var e = this.state;
                            this._state = t, d.b.log("main stream:" + e + "->" + t), this.hls.trigger(o.a.STREAM_STATE_TRANSITION, {
                                previousState: e,
                                nextState: t
                            })
                        }
                    },
                    get: function() {
                        return this._state
                    }
                }, {
                    key: "currentLevel",
                    get: function() {
                        var t = this.media;
                        if (t) {
                            var e = this.getBufferedFrag(t.currentTime);
                            if (e) return e.level
                        }
                        return -1
                    }
                }, {
                    key: "nextBufferedFrag",
                    get: function() {
                        var t = this.media;
                        return t ? this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)) : null
                    }
                }, {
                    key: "nextLevel",
                    get: function() {
                        var t = this.nextBufferedFrag;
                        return t ? t.level : -1
                    }
                }, {
                    key: "liveSyncPosition",
                    get: function() {
                        return this._liveSyncPosition
                    },
                    set: function(t) {
                        this._liveSyncPosition = t
                    }
                }]), e
            }(v.a);
        e.a = m
    }, function(t, e, r) {
        "use strict";
        var n = function() {
            function t(e, r) {
                (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t), this.subtle = e, this.aesIV = r
            }
            return t.prototype.decrypt = function(t, e) {
                return this.subtle.decrypt({
                    name: "AES-CBC",
                    iv: this.aesIV
                }, e, t)
            }, t
        }();
        e.a = n
    }, function(t, e, r) {
        "use strict";
        var n = function() {
            function t(e, r) {
                (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t), this.subtle = e, this.key = r
            }
            return t.prototype.expandKey = function() {
                return this.subtle.importKey("raw", this.key, {
                    name: "AES-CBC"
                }, !1, ["encrypt", "decrypt"])
            }, t
        }();
        e.a = n
    }, function(t, e, r) {
        "use strict";
        var n = function() {
            function t() {
                (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
            }
            return t.prototype.uint8ArrayToUint32Array_ = function(t) {
                for (var e = new DataView(t), r = new Uint32Array(4), n = 0; n < 4; n++) r[n] = e.getUint32(4 * n);
                return r
            }, t.prototype.initTable = function() {
                var t = this.sBox,
                    e = this.invSBox,
                    r = this.subMix,
                    n = r[0],
                    i = r[1],
                    a = r[2],
                    o = r[3],
                    s = this.invSubMix,
                    u = s[0],
                    c = s[1],
                    l = s[2],
                    f = s[3],
                    h = new Uint32Array(256),
                    d = 0,
                    p = 0,
                    v = 0;
                for (v = 0; v < 256; v++) h[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                for (v = 0; v < 256; v++) {
                    var y = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                    y = y >>> 8 ^ 255 & y ^ 99, t[d] = y, e[y] = d;
                    var g = h[d],
                        m = h[g],
                        b = h[m],
                        E = 257 * h[y] ^ 16843008 * y;
                    n[d] = E << 24 | E >>> 8, i[d] = E << 16 | E >>> 16, a[d] = E << 8 | E >>> 24, o[d] = E, E = 16843009 * b ^ 65537 * m ^ 257 * g ^ 16843008 * d, u[y] = E << 24 | E >>> 8, c[y] = E << 16 | E >>> 16, l[y] = E << 8 | E >>> 24, f[y] = E, d ? (d = g ^ h[h[h[b ^ g]]], p ^= h[h[p]]) : d = p = 1
                }
            }, t.prototype.expandKey = function(t) {
                for (var e = this.uint8ArrayToUint32Array_(t), r = !0, n = 0; n < e.length && r;) r = e[n] === this.key[n], n++;
                if (!r) {
                    this.key = e;
                    var i = this.keySize = e.length;
                    if (4 !== i && 6 !== i && 8 !== i) throw new Error("Invalid aes key size=" + i);
                    var a = this.ksRows = 4 * (i + 6 + 1),
                        o = void 0,
                        s = void 0,
                        u = this.keySchedule = new Uint32Array(a),
                        c = this.invKeySchedule = new Uint32Array(a),
                        l = this.sBox,
                        f = this.rcon,
                        h = this.invSubMix,
                        d = h[0],
                        p = h[1],
                        v = h[2],
                        y = h[3],
                        g = void 0,
                        m = void 0;
                    for (o = 0; o < a; o++) o < i ? g = u[o] = e[o] : (m = g, o % i == 0 ? (m = l[(m = m << 8 | m >>> 24) >>> 24] << 24 | l[m >>> 16 & 255] << 16 | l[m >>> 8 & 255] << 8 | l[255 & m], m ^= f[o / i | 0] << 24) : i > 6 && o % i == 4 && (m = l[m >>> 24] << 24 | l[m >>> 16 & 255] << 16 | l[m >>> 8 & 255] << 8 | l[255 & m]), u[o] = g = (u[o - i] ^ m) >>> 0);
                    for (s = 0; s < a; s++) o = a - s, m = 3 & s ? u[o] : u[o - 4], c[s] = s < 4 || o <= 4 ? m : d[l[m >>> 24]] ^ p[l[m >>> 16 & 255]] ^ v[l[m >>> 8 & 255]] ^ y[l[255 & m]], c[s] = c[s] >>> 0
                }
            }, t.prototype.networkToHostOrderSwap = function(t) {
                return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
            }, t.prototype.decrypt = function(t, e, r, n) {
                for (var i = this.keySize + 6, a = this.invKeySchedule, o = this.invSBox, s = this.invSubMix, u = s[0], c = s[1], l = s[2], f = s[3], h = this.uint8ArrayToUint32Array_(r), d = h[0], p = h[1], v = h[2], y = h[3], g = new Int32Array(t), m = new Int32Array(g.length), b = void 0, E = void 0, _ = void 0, S = void 0, T = void 0, A = void 0, w = void 0, R = void 0, L = void 0, O = void 0, I = void 0, D = void 0, k = void 0, P = void 0, x = this.networkToHostOrderSwap; e < g.length;) {
                    for (L = x(g[e]), O = x(g[e + 1]), I = x(g[e + 2]), D = x(g[e + 3]), T = L ^ a[0], A = D ^ a[1], w = I ^ a[2], R = O ^ a[3], k = 4, P = 1; P < i; P++) b = u[T >>> 24] ^ c[A >> 16 & 255] ^ l[w >> 8 & 255] ^ f[255 & R] ^ a[k], E = u[A >>> 24] ^ c[w >> 16 & 255] ^ l[R >> 8 & 255] ^ f[255 & T] ^ a[k + 1], _ = u[w >>> 24] ^ c[R >> 16 & 255] ^ l[T >> 8 & 255] ^ f[255 & A] ^ a[k + 2], S = u[R >>> 24] ^ c[T >> 16 & 255] ^ l[A >> 8 & 255] ^ f[255 & w] ^ a[k + 3], T = b, A = E, w = _, R = S, k += 4;
                    b = o[T >>> 24] << 24 ^ o[A >> 16 & 255] << 16 ^ o[w >> 8 & 255] << 8 ^ o[255 & R] ^ a[k], E = o[A >>> 24] << 24 ^ o[w >> 16 & 255] << 16 ^ o[R >> 8 & 255] << 8 ^ o[255 & T] ^ a[k + 1], _ = o[w >>> 24] << 24 ^ o[R >> 16 & 255] << 16 ^ o[T >> 8 & 255] << 8 ^ o[255 & A] ^ a[k + 2], S = o[R >>> 24] << 24 ^ o[T >> 16 & 255] << 16 ^ o[A >> 8 & 255] << 8 ^ o[255 & w] ^ a[k + 3], k += 3, m[e] = x(b ^ d), m[e + 1] = x(S ^ p), m[e + 2] = x(_ ^ v), m[e + 3] = x(E ^ y), d = L, p = O, v = I, y = D, e += 4
                }
                return n ? function(t) {
                    var e = t.byteLength,
                        r = e && new DataView(t).getUint8(e - 1);
                    return r ? t.slice(0, e - r) : t
                }(m.buffer) : m.buffer
            }, t.prototype.destroy = function() {
                this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
            }, t
        }();
        e.a = n
    }, function(t, e, r) {
        "use strict";
        var n = r(20),
            i = r(0),
            a = r(5),
            o = function() {
                function t(e, r, n) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.observer = e, this.config = n, this.remuxer = r
                }
                return t.prototype.resetInitSegment = function(t, e, r, n) {
                    this._audioTrack = {
                        container: "audio/adts",
                        type: "audio",
                        id: 0,
                        sequenceNumber: 0,
                        isAAC: !0,
                        samples: [],
                        len: 0,
                        manifestCodec: e,
                        duration: n,
                        inputTimeScale: 9e4
                    }
                }, t.prototype.resetTimeStamp = function() {}, t.probe = function(t) {
                    if (!t) return !1;
                    for (var e = (a.a.getID3Data(t, 0) || []).length, r = t.length; e < r; e++)
                        if (n.e(t, e)) return i.b.log("ADTS sync word found !"), !0;
                    return !1
                }, t.prototype.append = function(t, e, r, o) {
                    for (var s = this._audioTrack, u = a.a.getID3Data(t, 0) || [], c = 9e4 * e, l = 0, f = c, h = t.length, d = u.length, p = [{
                            pts: f,
                            dts: f,
                            data: u
                        }]; d < h - 1;)
                        if (n.d(t, d) && d + 5 < h) {
                            n.c(s, this.observer, t, d, s.manifestCodec);
                            var v = n.a(s, t, d, c, l);
                            if (!v) {
                                i.b.log("Unable to parse AAC frame");
                                break
                            }
                            d += v.length, f = v.sample.pts, l++
                        } else a.a.isHeader(t, d) ? (u = a.a.getID3Data(t, d), p.push({
                            pts: f,
                            dts: f,
                            data: u
                        }), d += u.length) : d++;
                    this.remuxer.remux(s, {
                        samples: []
                    }, {
                        samples: p,
                        inputTimeScale: 9e4
                    }, {
                        samples: []
                    }, e, r, o)
                }, t.prototype.destroy = function() {}, t
            }();
        e.a = o
    }, function(t, e, r) {
        "use strict";
        var n = r(20),
            i = r(21),
            a = r(1),
            o = r(38),
            s = r(39),
            u = r(0),
            c = r(2),
            l = {
                video: 0,
                audio: 1,
                id3: 2,
                text: 3
            },
            f = function() {
                function t(e, r, n, i) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.observer = e, this.config = n, this.typeSupported = i, this.remuxer = r, this.sampleAes = null
                }
                return t.prototype.setDecryptData = function(t) {
                    null != t && null != t.key && "SAMPLE-AES" === t.method ? this.sampleAes = new s.a(this.observer, this.config, t, this.discardEPB) : this.sampleAes = null
                }, t.probe = function(e) {
                    var r = t._syncOffset(e);
                    return !(r < 0 || (r && u.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), 0))
                }, t._syncOffset = function(t) {
                    for (var e = Math.min(1e3, t.length - 564), r = 0; r < e;) {
                        if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376]) return r;
                        r++
                    }
                    return -1
                }, t.createTrack = function(t, e) {
                    return {
                        container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                        type: t,
                        id: l[t],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        len: 0,
                        dropped: "video" === t ? 0 : void 0,
                        isAAC: "audio" === t || void 0,
                        duration: "audio" === t ? e : void 0
                    }
                }, t.prototype.resetInitSegment = function(e, r, n, i) {
                    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video", i), this._audioTrack = t.createTrack("audio", i), this._id3Track = t.createTrack("id3", i), this._txtTrack = t.createTrack("text", i), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = n, this._duration = i
                }, t.prototype.resetTimeStamp = function() {}, t.prototype.append = function(e, r, n, i) {
                    var o = void 0,
                        s = e.length,
                        l = void 0,
                        f = void 0,
                        h = void 0,
                        d = void 0,
                        p = !1;
                    this.contiguous = n;
                    var v = this.pmtParsed,
                        y = this._avcTrack,
                        g = this._audioTrack,
                        m = this._id3Track,
                        b = y.pid,
                        E = g.pid,
                        _ = m.pid,
                        S = this._pmtId,
                        T = y.pesData,
                        A = g.pesData,
                        w = m.pesData,
                        R = this._parsePAT,
                        L = this._parsePMT,
                        O = this._parsePES,
                        I = this._parseAVCPES.bind(this),
                        D = this._parseAACPES.bind(this),
                        k = this._parseMPEGPES.bind(this),
                        P = this._parseID3PES.bind(this),
                        x = t._syncOffset(e);
                    for (s -= (s + x) % 188, o = x; o < s; o += 188)
                        if (71 === e[o]) {
                            if (l = !!(64 & e[o + 1]), f = ((31 & e[o + 1]) << 8) + e[o + 2], (48 & e[o + 3]) >> 4 > 1) {
                                if ((h = o + 5 + e[o + 4]) === o + 188) continue
                            } else h = o + 4;
                            switch (f) {
                                case b:
                                    l && (T && (d = O(T)) && void 0 !== d.pts && I(d, !1), T = {
                                        data: [],
                                        size: 0
                                    }), T && (T.data.push(e.subarray(h, o + 188)), T.size += o + 188 - h);
                                    break;
                                case E:
                                    l && (A && (d = O(A)) && void 0 !== d.pts && (g.isAAC ? D(d) : k(d)), A = {
                                        data: [],
                                        size: 0
                                    }), A && (A.data.push(e.subarray(h, o + 188)), A.size += o + 188 - h);
                                    break;
                                case _:
                                    l && (w && (d = O(w)) && void 0 !== d.pts && P(d), w = {
                                        data: [],
                                        size: 0
                                    }), w && (w.data.push(e.subarray(h, o + 188)), w.size += o + 188 - h);
                                    break;
                                case 0:
                                    l && (h += e[h] + 1), S = this._pmtId = R(e, h);
                                    break;
                                case S:
                                    l && (h += e[h] + 1);
                                    var C = L(e, h, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                    (b = C.avc) > 0 && (y.pid = b), (E = C.audio) > 0 && (g.pid = E, g.isAAC = C.isAAC), (_ = C.id3) > 0 && (m.pid = _), p && !v && (u.b.log("reparse from beginning"), p = !1, o = x - 188), v = this.pmtParsed = !0;
                                    break;
                                case 17:
                                case 8191:
                                    break;
                                default:
                                    p = !0
                            }
                        } else this.observer.trigger(a.a.ERROR, {
                            type: c.b.MEDIA_ERROR,
                            details: c.a.FRAG_PARSING_ERROR,
                            fatal: !1,
                            reason: "TS packet did not start with 0x47"
                        });
                    T && (d = O(T)) && void 0 !== d.pts ? (I(d, !0), y.pesData = null) : y.pesData = T, A && (d = O(A)) && void 0 !== d.pts ? (g.isAAC ? D(d) : k(d), g.pesData = null) : (A && A.size && u.b.log("last AAC PES packet truncated,might overlap between fragments"), g.pesData = A), w && (d = O(w)) && void 0 !== d.pts ? (P(d), m.pesData = null) : m.pesData = w, null == this.sampleAes ? this.remuxer.remux(g, y, m, this._txtTrack, r, n, i) : this.decryptAndRemux(g, y, m, this._txtTrack, r, n, i)
                }, t.prototype.decryptAndRemux = function(t, e, r, n, i, a, o) {
                    if (t.samples && t.isAAC) {
                        var s = this;
                        this.sampleAes.decryptAacSamples(t.samples, 0, (function() {
                            s.decryptAndRemuxAvc(t, e, r, n, i, a, o)
                        }))
                    } else this.decryptAndRemuxAvc(t, e, r, n, i, a, o)
                }, t.prototype.decryptAndRemuxAvc = function(t, e, r, n, i, a, o) {
                    if (e.samples) {
                        var s = this;
                        this.sampleAes.decryptAvcSamples(e.samples, 0, 0, (function() {
                            s.remuxer.remux(t, e, r, n, i, a, o)
                        }))
                    } else this.remuxer.remux(t, e, r, n, i, a, o)
                }, t.prototype.destroy = function() {
                    this._initPTS = this._initDTS = void 0, this._duration = 0
                }, t.prototype._parsePAT = function(t, e) {
                    return (31 & t[e + 10]) << 8 | t[e + 11]
                }, t.prototype._parsePMT = function(t, e, r, n) {
                    var i, a = void 0,
                        o = {
                            audio: -1,
                            avc: -1,
                            id3: -1,
                            isAAC: !0
                        };
                    for (i = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4, e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < i;) {
                        switch (a = (31 & t[e + 1]) << 8 | t[e + 2], t[e]) {
                            case 207:
                                if (!n) {
                                    u.b.log("unkown stream type:" + t[e]);
                                    break
                                }
                                case 15:
                                    -1 === o.audio && (o.audio = a);
                                    break;
                                case 21:
                                    -1 === o.id3 && (o.id3 = a);
                                    break;
                                case 219:
                                    if (!n) {
                                        u.b.log("unkown stream type:" + t[e]);
                                        break
                                    }
                                    case 27:
                                        -1 === o.avc && (o.avc = a);
                                        break;
                                    case 3:
                                    case 4:
                                        r ? -1 === o.audio && (o.audio = a, o.isAAC = !1) : u.b.log("MPEG audio found, not supported in this browser for now");
                                        break;
                                    case 36:
                                        u.b.warn("HEVC stream type found, not supported for now");
                                        break;
                                    default:
                                        u.b.log("unkown stream type:" + t[e])
                        }
                        e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
                    }
                    return o
                }, t.prototype._parsePES = function(t) {
                    var e = 0,
                        r = void 0,
                        n = void 0,
                        i = void 0,
                        a = void 0,
                        o = void 0,
                        s = void 0,
                        c = void 0,
                        l = void 0,
                        f = t.data;
                    if (!t || 0 === t.size) return null;
                    for (; f[0].length < 19 && f.length > 1;) {
                        var h = new Uint8Array(f[0].length + f[1].length);
                        h.set(f[0]), h.set(f[1], f[0].length), f[0] = h, f.splice(1, 1)
                    }
                    if (1 === ((r = f[0])[0] << 16) + (r[1] << 8) + r[2]) {
                        if ((i = (r[4] << 8) + r[5]) && i > t.size - 6) return null;
                        192 & (n = r[7]) && ((s = 536870912 * (14 & r[9]) + 4194304 * (255 & r[10]) + 16384 * (254 & r[11]) + 128 * (255 & r[12]) + (254 & r[13]) / 2) > 4294967295 && (s -= 8589934592), 64 & n ? ((c = 536870912 * (14 & r[14]) + 4194304 * (255 & r[15]) + 16384 * (254 & r[16]) + 128 * (255 & r[17]) + (254 & r[18]) / 2) > 4294967295 && (c -= 8589934592), s - c > 54e5 && (u.b.warn(Math.round((s - c) / 9e4) + "s delta between PTS and DTS, align them"), s = c)) : c = s), l = (a = r[8]) + 9, t.size -= l, o = new Uint8Array(t.size);
                        for (var d = 0, p = f.length; d < p; d++) {
                            var v = (r = f[d]).byteLength;
                            if (l) {
                                if (l > v) {
                                    l -= v;
                                    continue
                                }
                                r = r.subarray(l), v -= l, l = 0
                            }
                            o.set(r, e), e += v
                        }
                        return i && (i -= a + 3), {
                            data: o,
                            pts: s,
                            dts: c,
                            len: i
                        }
                    }
                    return null
                }, t.prototype.pushAccesUnit = function(t, e) {
                    if (t.units.length && t.frame) {
                        var r = e.samples,
                            n = r.length;
                        !this.config.forceKeyFrameOnDiscontinuity || !0 === t.key || e.sps && (n || this.contiguous) ? (t.id = n, r.push(t)) : e.dropped++
                    }
                    t.debug.length && u.b.log(t.pts + "/" + t.dts + ":" + t.debug)
                }, t.prototype._parseAVCPES = function(t, e) {
                    var r = this,
                        n = this._avcTrack,
                        i = this._parseAVCNALu(t.data),
                        a = void 0,
                        s = this.avcSample,
                        u = void 0,
                        c = !1,
                        l = void 0,
                        f = this.pushAccesUnit.bind(this),
                        h = function(t, e, r, n) {
                            return {
                                key: t,
                                pts: e,
                                dts: r,
                                units: [],
                                debug: n
                            }
                        };
                    t.data = null, s && i.length && !n.audFound && (f(s, n), s = this.avcSample = h(!1, t.pts, t.dts, "")), i.forEach((function(e) {
                        switch (e.type) {
                            case 1:
                                u = !0, s || (s = r.avcSample = h(!0, t.pts, t.dts, "")), s.frame = !0;
                                var i = e.data;
                                if (c && i.length > 4) {
                                    var d = new o.a(i).readSliceType();
                                    2 !== d && 4 !== d && 7 !== d && 9 !== d || (s.key = !0)
                                }
                                break;
                            case 5:
                                u = !0, s || (s = r.avcSample = h(!0, t.pts, t.dts, "")), s.key = !0, s.frame = !0;
                                break;
                            case 6:
                                u = !0, (a = new o.a(r.discardEPB(e.data))).readUByte();
                                for (var p = 0, v = 0, y = !1, g = 0; !y && a.bytesAvailable > 1;) {
                                    p = 0;
                                    do {
                                        p += g = a.readUByte()
                                    } while (255 === g);
                                    v = 0;
                                    do {
                                        v += g = a.readUByte()
                                    } while (255 === g);
                                    if (4 === p && 0 !== a.bytesAvailable) {
                                        if (y = !0, 181 === a.readUByte() && 49 === a.readUShort() && 1195456820 === a.readUInt() && 3 === a.readUByte()) {
                                            var m = a.readUByte(),
                                                b = 31 & m,
                                                E = [m, a.readUByte()];
                                            for (l = 0; l < b; l++) E.push(a.readUByte()), E.push(a.readUByte()), E.push(a.readUByte());
                                            r._insertSampleInOrder(r._txtTrack.samples, {
                                                type: 3,
                                                pts: t.pts,
                                                bytes: E
                                            })
                                        }
                                    } else if (v < a.bytesAvailable)
                                        for (l = 0; l < v; l++) a.readUByte()
                                }
                                break;
                            case 7:
                                if (u = !0, c = !0, !n.sps) {
                                    var _ = (a = new o.a(e.data)).readSPS();
                                    n.width = _.width, n.height = _.height, n.pixelRatio = _.pixelRatio, n.sps = [e.data], n.duration = r._duration;
                                    var S = e.data.subarray(1, 4),
                                        T = "avc1.";
                                    for (l = 0; l < 3; l++) {
                                        var A = S[l].toString(16);
                                        A.length < 2 && (A = "0" + A), T += A
                                    }
                                    n.codec = T
                                }
                                break;
                            case 8:
                                u = !0, n.pps || (n.pps = [e.data]);
                                break;
                            case 9:
                                u = !1, n.audFound = !0, s && f(s, n), s = r.avcSample = h(!1, t.pts, t.dts, "");
                                break;
                            case 12:
                                u = !1;
                                break;
                            default:
                                u = !1, s && (s.debug += "unknown NAL " + e.type + " ")
                        }
                        s && u && s.units.push(e)
                    })), e && s && (f(s, n), this.avcSample = null)
                }, t.prototype._insertSampleInOrder = function(t, e) {
                    var r = t.length;
                    if (r > 0) {
                        if (e.pts >= t[r - 1].pts) t.push(e);
                        else
                            for (var n = r - 1; n >= 0; n--)
                                if (e.pts < t[n].pts) {
                                    t.splice(n, 0, e);
                                    break
                                }
                    } else t.push(e)
                }, t.prototype._getLastNalUnit = function() {
                    var t = this.avcSample,
                        e = void 0;
                    if (!t || 0 === t.units.length) {
                        var r = this._avcTrack.samples;
                        t = r[r.length - 1]
                    }
                    if (t) {
                        var n = t.units;
                        e = n[n.length - 1]
                    }
                    return e
                }, t.prototype._parseAVCNALu = function(t) {
                    var e = 0,
                        r = t.byteLength,
                        n = void 0,
                        i = void 0,
                        a = this._avcTrack,
                        o = a.naluState || 0,
                        s = o,
                        u = [],
                        c = void 0,
                        l = -1,
                        f = void 0;
                    for (-1 === o && (l = 0, f = 31 & t[0], o = 0, e = 1); e < r;)
                        if (n = t[e++], o)
                            if (1 !== o)
                                if (n)
                                    if (1 === n) {
                                        if (l >= 0) c = {
                                            data: t.subarray(l, e - o - 1),
                                            type: f
                                        }, u.push(c);
                                        else {
                                            var h = this._getLastNalUnit();
                                            if (h && (s && e <= 4 - s && h.state && (h.data = h.data.subarray(0, h.data.byteLength - s)), (i = e - o - 1) > 0)) {
                                                var d = new Uint8Array(h.data.byteLength + i);
                                                d.set(h.data, 0), d.set(t.subarray(0, i), h.data.byteLength), h.data = d
                                            }
                                        }
                                        e < r ? (l = e, f = 31 & t[e], o = 0) : o = -1
                                    } else o = 0;
                    else o = 3;
                    else o = n ? 0 : 2;
                    else o = n ? 0 : 1;
                    if (l >= 0 && o >= 0 && (c = {
                            data: t.subarray(l, r),
                            type: f,
                            state: o
                        }, u.push(c)), 0 === u.length) {
                        var p = this._getLastNalUnit();
                        if (p) {
                            var v = new Uint8Array(p.data.byteLength + t.byteLength);
                            v.set(p.data, 0), v.set(t, p.data.byteLength), p.data = v
                        }
                    }
                    return a.naluState = o, u
                }, t.prototype.discardEPB = function(t) {
                    for (var e, r = t.byteLength, n = [], i = 1, a = void 0; i < r - 2;) 0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (n.push(i + 2), i += 2) : i++;
                    if (0 === n.length) return t;
                    e = r - n.length, a = new Uint8Array(e);
                    var o = 0;
                    for (i = 0; i < e; o++, i++) o === n[0] && (o++, n.shift()), a[i] = t[o];
                    return a
                }, t.prototype._parseAACPES = function(t) {
                    var e, r, i = this._audioTrack,
                        o = t.data,
                        s = t.pts,
                        l = this.aacOverFlow,
                        f = this.aacLastPTS,
                        h = void 0,
                        d = void 0,
                        p = void 0;
                    if (l) {
                        var v = new Uint8Array(l.byteLength + o.byteLength);
                        v.set(l, 0), v.set(o, l.byteLength), o = v
                    }
                    for (d = 0, r = o.length; d < r - 1 && !n.d(o, d); d++);
                    if (d) {
                        var y = void 0,
                            g = void 0;
                        if (d < r - 1 ? (y = "AAC PES did not start with ADTS header,offset:" + d, g = !1) : (y = "no ADTS header found in AAC PES", g = !0), u.b.warn("parsing error:" + y), this.observer.trigger(a.a.ERROR, {
                                type: c.b.MEDIA_ERROR,
                                details: c.a.FRAG_PARSING_ERROR,
                                fatal: g,
                                reason: y
                            }), g) return
                    }
                    if (n.c(i, this.observer, o, d, this.audioCodec), h = 0, e = n.b(i.samplerate), l && f) {
                        var m = f + e;
                        Math.abs(m - s) > 1 && (u.b.log("AAC: align PTS for overlapping frames by " + Math.round((m - s) / 90)), s = m)
                    }
                    for (; d < r;)
                        if (n.d(o, d) && d + 5 < r) {
                            var b = n.a(i, o, d, s, h);
                            if (!b) break;
                            d += b.length, p = b.sample.pts, h++
                        } else d++;
                    l = d < r ? o.subarray(d, r) : null, this.aacOverFlow = l, this.aacLastPTS = p
                }, t.prototype._parseMPEGPES = function(t) {
                    for (var e = t.data, r = e.length, n = 0, a = 0, o = t.pts; a < r;)
                        if (i.a.isHeader(e, a)) {
                            var s = i.a.appendFrame(this._audioTrack, e, a, o, n);
                            if (!s) break;
                            a += s.length, n++
                        } else a++
                }, t.prototype._parseID3PES = function(t) {
                    this._id3Track.samples.push(t)
                }, t
            }();
        e.a = f
    }, function(t, e, r) {
        "use strict";
        var n = r(0),
            i = function() {
                function t(e) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
                }
                return t.prototype.loadWord = function() {
                    var t = this.data,
                        e = this.bytesAvailable,
                        r = t.byteLength - e,
                        n = new Uint8Array(4),
                        i = Math.min(4, e);
                    if (0 === i) throw new Error("no bytes available");
                    n.set(t.subarray(r, r + i)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -= i
                }, t.prototype.skipBits = function(t) {
                    var e = void 0;
                    this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) >> 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t)
                }, t.prototype.readBits = function(t) {
                    var e = Math.min(this.bitsAvailable, t),
                        r = this.word >>> 32 - e;
                    return t > 32 && n.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), (e = t - e) > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r
                }, t.prototype.skipLZ = function() {
                    var t = void 0;
                    for (t = 0; t < this.bitsAvailable; ++t)
                        if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
                    return this.loadWord(), t + this.skipLZ()
                }, t.prototype.skipUEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, t.prototype.skipEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }, t.prototype.readUEG = function() {
                    var t = this.skipLZ();
                    return this.readBits(t + 1) - 1
                }, t.prototype.readEG = function() {
                    var t = this.readUEG();
                    return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                }, t.prototype.readBoolean = function() {
                    return 1 === this.readBits(1)
                }, t.prototype.readUByte = function() {
                    return this.readBits(8)
                }, t.prototype.readUShort = function() {
                    return this.readBits(16)
                }, t.prototype.readUInt = function() {
                    return this.readBits(32)
                }, t.prototype.skipScalingList = function(t) {
                    var e = 8,
                        r = 8,
                        n = void 0;
                    for (n = 0; n < t; n++) 0 !== r && (r = (e + this.readEG() + 256) % 256), e = 0 === r ? e : r
                }, t.prototype.readSPS = function() {
                    var t, e, r, n, i = 0,
                        a = 0,
                        o = 0,
                        s = 0,
                        u = void 0,
                        c = void 0,
                        l = void 0,
                        f = this.readUByte.bind(this),
                        h = this.readBits.bind(this),
                        d = this.readUEG.bind(this),
                        p = this.readBoolean.bind(this),
                        v = this.skipBits.bind(this),
                        y = this.skipEG.bind(this),
                        g = this.skipUEG.bind(this),
                        m = this.skipScalingList.bind(this);
                    if (f(), t = f(), h(5), v(3), f(), g(), 100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
                        var b = d();
                        if (3 === b && v(1), g(), g(), v(1), p())
                            for (c = 3 !== b ? 8 : 12, l = 0; l < c; l++) p() && m(l < 6 ? 16 : 64)
                    }
                    g();
                    var E = d();
                    if (0 === E) d();
                    else if (1 === E)
                        for (v(1), y(), y(), u = d(), l = 0; l < u; l++) y();
                    g(), v(1), e = d(), r = d(), 0 === (n = h(1)) && v(1), v(1), p() && (i = d(), a = d(), o = d(), s = d());
                    var _ = [1, 1];
                    if (p() && p()) switch (f()) {
                        case 1:
                            _ = [1, 1];
                            break;
                        case 2:
                            _ = [12, 11];
                            break;
                        case 3:
                            _ = [10, 11];
                            break;
                        case 4:
                            _ = [16, 11];
                            break;
                        case 5:
                            _ = [40, 33];
                            break;
                        case 6:
                            _ = [24, 11];
                            break;
                        case 7:
                            _ = [20, 11];
                            break;
                        case 8:
                            _ = [32, 11];
                            break;
                        case 9:
                            _ = [80, 33];
                            break;
                        case 10:
                            _ = [18, 11];
                            break;
                        case 11:
                            _ = [15, 11];
                            break;
                        case 12:
                            _ = [64, 33];
                            break;
                        case 13:
                            _ = [160, 99];
                            break;
                        case 14:
                            _ = [4, 3];
                            break;
                        case 15:
                            _ = [3, 2];
                            break;
                        case 16:
                            _ = [2, 1];
                            break;
                        case 255:
                            _ = [f() << 8 | f(), f() << 8 | f()]
                    }
                    return {
                        width: Math.ceil(16 * (e + 1) - 2 * i - 2 * a),
                        height: (2 - n) * (r + 1) * 16 - (n ? 2 : 4) * (o + s),
                        pixelRatio: _
                    }
                }, t.prototype.readSliceType = function() {
                    return this.readUByte(), this.readUEG(), this.readUEG()
                }, t
            }();
        e.a = i
    }, function(t, e, r) {
        "use strict";
        var n = r(9),
            i = function() {
                function t(e, r, i, a) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.decryptdata = i, this.discardEPB = a, this.decrypter = new n.a(e, r, {
                        removePKCS7Padding: !1
                    })
                }
                return t.prototype.decryptBuffer = function(t, e) {
                    this.decrypter.decrypt(t, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, e)
                }, t.prototype.decryptAacSample = function(t, e, r, n) {
                    var i = t[e].unit,
                        a = i.subarray(16, i.length - i.length % 16),
                        o = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                        s = this;
                    this.decryptBuffer(o, (function(a) {
                        a = new Uint8Array(a), i.set(a, 16), n || s.decryptAacSamples(t, e + 1, r)
                    }))
                }, t.prototype.decryptAacSamples = function(t, e, r) {
                    for (;; e++) {
                        if (e >= t.length) return void r();
                        if (!(t[e].unit.length < 32)) {
                            var n = this.decrypter.isSync();
                            if (this.decryptAacSample(t, e, r, n), !n) return
                        }
                    }
                }, t.prototype.getAvcEncryptedData = function(t) {
                    for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), n = 0, i = 32; i <= t.length - 16; i += 160, n += 16) r.set(t.subarray(i, i + 16), n);
                    return r
                }, t.prototype.getAvcDecryptedUnit = function(t, e) {
                    e = new Uint8Array(e);
                    for (var r = 0, n = 32; n <= t.length - 16; n += 160, r += 16) t.set(e.subarray(r, r + 16), n);
                    return t
                }, t.prototype.decryptAvcSample = function(t, e, r, n, i, a) {
                    var o = this.discardEPB(i.data),
                        s = this.getAvcEncryptedData(o),
                        u = this;
                    this.decryptBuffer(s.buffer, (function(s) {
                        i.data = u.getAvcDecryptedUnit(o, s), a || u.decryptAvcSamples(t, e, r + 1, n)
                    }))
                }, t.prototype.decryptAvcSamples = function(t, e, r, n) {
                    for (;; e++, r = 0) {
                        if (e >= t.length) return void n();
                        for (var i = t[e].units; !(r >= i.length); r++) {
                            var a = i[r];
                            if (!(a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                                var o = this.decrypter.isSync();
                                if (this.decryptAvcSample(t, e, r, n, a, o), !o) return
                            }
                        }
                    }
                }, t
            }();
        e.a = i
    }, function(t, e, r) {
        "use strict";
        var n = r(5),
            i = r(0),
            a = r(21),
            o = function() {
                function t(e, r, n) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.observer = e, this.config = n, this.remuxer = r
                }
                return t.prototype.resetInitSegment = function(t, e, r, n) {
                    this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: -1,
                        sequenceNumber: 0,
                        isAAC: !1,
                        samples: [],
                        len: 0,
                        manifestCodec: e,
                        duration: n,
                        inputTimeScale: 9e4
                    }
                }, t.prototype.resetTimeStamp = function() {}, t.probe = function(t) {
                    var e = void 0,
                        r = void 0,
                        o = n.a.getID3Data(t, 0);
                    if (o && void 0 !== n.a.getTimeStamp(o))
                        for (e = o.length, r = Math.min(t.length - 1, e + 100); e < r; e++)
                            if (a.a.probe(t, e)) return i.b.log("MPEG Audio sync word found !"), !0;
                    return !1
                }, t.prototype.append = function(t, e, r, i) {
                    for (var o = n.a.getID3Data(t, 0), s = n.a.getTimeStamp(o), u = s ? 90 * s : 9e4 * e, c = o.length, l = t.length, f = 0, h = 0, d = this._audioTrack, p = [{
                            pts: u,
                            dts: u,
                            data: o
                        }]; c < l;)
                        if (a.a.isHeader(t, c)) {
                            var v = a.a.appendFrame(d, t, c, u, f);
                            if (!v) break;
                            c += v.length, h = v.sample.pts, f++
                        } else n.a.isHeader(t, c) ? (o = n.a.getID3Data(t, c), p.push({
                            pts: h,
                            dts: h,
                            data: o
                        }), c += o.length) : c++;
                    this.remuxer.remux(d, {
                        samples: []
                    }, {
                        samples: p,
                        inputTimeScale: 9e4
                    }, {
                        samples: []
                    }, e, r, i)
                }, t.prototype.destroy = function() {}, t
            }();
        e.a = o
    }, function(t, e, r) {
        "use strict";
        var n = r(42),
            i = r(1),
            a = r(0),
            o = r(43),
            s = r(2),
            u = function() {
                function t(e, r, n, i) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.observer = e, this.config = r, this.typeSupported = n;
                    var a = navigator.userAgent;
                    this.isSafari = i && i.indexOf("Apple") > -1 && a && !a.match("CriOS"), this.ISGenerated = !1
                }
                return t.prototype.destroy = function() {}, t.prototype.resetTimeStamp = function(t) {
                    this._initPTS = this._initDTS = t
                }, t.prototype.resetInitSegment = function() {
                    this.ISGenerated = !1
                }, t.prototype.remux = function(t, e, r, n, o, s, u) {
                    if (this.ISGenerated || this.generateIS(t, e, o), this.ISGenerated) {
                        var c = t.samples.length,
                            l = e.samples.length,
                            f = o,
                            h = o;
                        if (c && l) {
                            var d = (t.samples[0].dts - e.samples[0].dts) / e.inputTimeScale;
                            f += Math.max(0, d), h += Math.max(0, -d)
                        }
                        if (c) {
                            t.timescale || (a.b.warn("regenerate InitSegment as audio detected"), this.generateIS(t, e, o));
                            var p = this.remuxAudio(t, f, s, u);
                            if (l) {
                                var v = void 0;
                                p && (v = p.endPTS - p.startPTS), e.timescale || (a.b.warn("regenerate InitSegment as video detected"), this.generateIS(t, e, o)), this.remuxVideo(e, h, s, v, u)
                            }
                        } else if (l) {
                            var y = this.remuxVideo(e, h, s, 0, u);
                            y && t.codec && this.remuxEmptyAudio(t, f, s, y)
                        }
                    }
                    r.samples.length && this.remuxID3(r, o), n.samples.length && this.remuxText(n, o), this.observer.trigger(i.a.FRAG_PARSED)
                }, t.prototype.generateIS = function(t, e, r) {
                    var n = this.observer,
                        u = t.samples,
                        c = e.samples,
                        l = this.typeSupported,
                        f = "audio/mp4",
                        h = {},
                        d = {
                            tracks: h
                        },
                        p = void 0 === this._initPTS,
                        v = void 0,
                        y = void 0;
                    if (p && (v = y = 1 / 0), t.config && u.length && (t.timescale = t.samplerate, a.b.log("audio sampling rate : " + t.samplerate), t.isAAC || (l.mpeg ? (f = "audio/mpeg", t.codec = "") : l.mp3 && (t.codec = "mp3")), h.audio = {
                            container: f,
                            codec: t.codec,
                            initSegment: !t.isAAC && l.mpeg ? new Uint8Array : o.a.initSegment([t]),
                            metadata: {
                                channelCount: t.channelCount
                            }
                        }, p && (v = y = u[0].pts - t.inputTimeScale * r)), e.sps && e.pps && c.length) {
                        var g = e.inputTimeScale;
                        e.timescale = g, h.video = {
                            container: "video/mp4",
                            codec: e.codec,
                            initSegment: o.a.initSegment([e]),
                            metadata: {
                                width: e.width,
                                height: e.height
                            }
                        }, p && (v = Math.min(v, c[0].pts - g * r), y = Math.min(y, c[0].dts - g * r), this.observer.trigger(i.a.INIT_PTS_FOUND, {
                            initPTS: v
                        }))
                    }
                    Object.keys(h).length ? (n.trigger(i.a.FRAG_PARSING_INIT_SEGMENT, d), this.ISGenerated = !0, p && (this._initPTS = v, this._initDTS = y)) : n.trigger(i.a.ERROR, {
                        type: s.b.MEDIA_ERROR,
                        details: s.a.FRAG_PARSING_ERROR,
                        fatal: !1,
                        reason: "no audio/video samples found"
                    })
                }, t.prototype.remuxVideo = function(t, e, r, n, u) {
                    var c = 8,
                        l = t.timescale,
                        f = void 0,
                        h = void 0,
                        d = void 0,
                        p = void 0,
                        v = void 0,
                        y = void 0,
                        g = void 0,
                        m = t.samples,
                        b = [],
                        E = m.length,
                        _ = this._PTSNormalize,
                        S = this._initDTS,
                        T = this.nextAvcDts,
                        A = this.isSafari;
                    if (0 !== E) {
                        A && (r |= m.length && T && (u && Math.abs(e - T / l) < .1 || Math.abs(m[0].pts - T - S) < l / 5)), r || (T = e * l), m.forEach((function(t) {
                            t.pts = _(t.pts - S, T), t.dts = _(t.dts - S, T)
                        })), m.sort((function(t, e) {
                            var r = t.dts - e.dts,
                                n = t.pts - e.pts;
                            return r || n || t.id - e.id
                        }));
                        var w = m.reduce((function(t, e) {
                            return Math.max(Math.min(t, e.pts - e.dts), -18e3)
                        }), 0);
                        if (w < 0) {
                            a.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(w / 90) + " ms to overcome this issue");
                            for (var R = 0; R < m.length; R++) m[R].dts += w
                        }
                        var L = m[0];
                        v = Math.max(L.dts, 0), p = Math.max(L.pts, 0);
                        var O = Math.round((v - T) / 90);
                        r && O && (O > 1 ? a.b.log("AVC:" + O + " ms hole between fragments detected,filling it") : O < -1 && a.b.log("AVC:" + -O + " ms overlapping between fragments detected"), v = T, m[0].dts = v, p = Math.max(p - O, T), m[0].pts = p, a.b.log("Video/PTS/DTS adjusted: " + Math.round(p / 90) + "/" + Math.round(v / 90) + ",delta:" + O + " ms")), L = m[m.length - 1], g = Math.max(L.dts, 0), y = Math.max(L.pts, 0, g), A && (f = Math.round((g - v) / (m.length - 1)));
                        for (var I = 0, D = 0, k = 0; k < E; k++) {
                            for (var P = m[k], x = P.units, C = x.length, F = 0, M = 0; M < C; M++) F += x[M].data.length;
                            D += F, I += C, P.length = F, P.dts = A ? v + k * f : Math.max(P.dts, v), P.pts = Math.max(P.pts, P.dts)
                        }
                        var N = D + 4 * I + 8;
                        try {
                            h = new Uint8Array(N)
                        } catch (t) {
                            return void this.observer.trigger(i.a.ERROR, {
                                type: s.b.MUX_ERROR,
                                details: s.a.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: N,
                                reason: "fail allocating video mdat " + N
                            })
                        }
                        var U = new DataView(h.buffer);
                        U.setUint32(0, N), h.set(o.a.types.mdat, 4);
                        for (var B = 0; B < E; B++) {
                            for (var G = m[B], j = G.units, K = 0, H = void 0, W = 0, V = j.length; W < V; W++) {
                                var Y = j[W],
                                    X = Y.data,
                                    q = Y.data.byteLength;
                                U.setUint32(c, q), c += 4, h.set(X, c), c += q, K += 4 + q
                            }
                            if (A) H = Math.max(0, f * Math.round((G.pts - G.dts) / f));
                            else {
                                if (B < E - 1) f = m[B + 1].dts - G.dts;
                                else {
                                    var z = this.config,
                                        Q = G.dts - m[B > 0 ? B - 1 : B].dts;
                                    if (z.stretchShortVideoTrack) {
                                        var J = z.maxBufferHole,
                                            $ = Math.floor(J * l),
                                            Z = (n ? p + n * l : this.nextAudioPts) - G.pts;
                                        Z > $ ? ((f = Z - Q) < 0 && (f = Q), a.b.log("It is approximately " + Z / 90 + " ms to the next segment; using duration " + f / 90 + " ms for the last video frame.")) : f = Q
                                    } else f = Q
                                }
                                H = Math.round(G.pts - G.dts)
                            }
                            b.push({
                                size: K,
                                duration: f,
                                cts: H,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: G.key ? 2 : 1,
                                    isNonSync: G.key ? 0 : 1
                                }
                            })
                        }
                        this.nextAvcDts = g + f;
                        var tt = t.dropped;
                        if (t.len = 0, t.nbNalu = 0, t.dropped = 0, b.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var et = b[0].flags;
                            et.dependsOn = 2, et.isNonSync = 0
                        }
                        t.samples = b, d = o.a.moof(t.sequenceNumber++, v, t), t.samples = [];
                        var rt = {
                            data1: d,
                            data2: h,
                            startPTS: p / l,
                            endPTS: (y + f) / l,
                            startDTS: v / l,
                            endDTS: this.nextAvcDts / l,
                            type: "video",
                            hasAudio: !1,
                            hasVideo: !0,
                            nb: b.length,
                            dropped: tt
                        };
                        return this.observer.trigger(i.a.FRAG_PARSING_DATA, rt), rt
                    }
                }, t.prototype.remuxAudio = function(t, e, r, u) {
                    var c = t.inputTimeScale,
                        l = t.timescale,
                        f = c / l,
                        h = (t.isAAC ? 1024 : 1152) * f,
                        d = this._PTSNormalize,
                        p = this._initDTS,
                        v = !t.isAAC && this.typeSupported.mpeg,
                        y = void 0,
                        g = void 0,
                        m = void 0,
                        b = void 0,
                        E = void 0,
                        _ = void 0,
                        S = void 0,
                        T = t.samples,
                        A = [],
                        w = this.nextAudioPts;
                    if (r |= T.length && w && (u && Math.abs(e - w / c) < .1 || Math.abs(T[0].pts - w - p) < 20 * h), T.forEach((function(t) {
                            t.pts = t.dts = d(t.pts - p, e * c)
                        })), 0 !== (T = T.filter((function(t) {
                            return t.pts >= 0
                        }))).length) {
                        if (r || (w = u ? e * c : T[0].pts), t.isAAC)
                            for (var R = this.config.maxAudioFramesDrift, L = 0, O = w; L < T.length;) {
                                var I, D = T[L];
                                I = D.pts - O;
                                var k = Math.abs(1e3 * I / c);
                                if (I <= -R * h) a.b.warn("Dropping 1 audio frame @ " + (O / c).toFixed(3) + "s due to " + Math.round(k) + " ms overlap."), T.splice(L, 1), t.len -= D.unit.length;
                                else if (I >= R * h && k < 1e4 && O) {
                                    var P = Math.round(I / h);
                                    a.b.warn("Injecting " + P + " audio frame @ " + (O / c).toFixed(3) + "s due to " + Math.round(1e3 * I / c) + " ms gap.");
                                    for (var x = 0; x < P; x++) {
                                        var C = Math.max(O, 0);
                                        (m = n.a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (a.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), m = D.unit.subarray()), T.splice(L, 0, {
                                            unit: m,
                                            pts: C,
                                            dts: C
                                        }), t.len += m.length, O += h, L++
                                    }
                                    D.pts = D.dts = O, O += h, L++
                                } else Math.abs(I), D.pts = D.dts = O, O += h, L++
                            }
                        for (var F = 0, M = T.length; F < M; F++) {
                            var N = T[F],
                                U = N.unit,
                                B = N.pts;
                            if (void 0 !== S) g.duration = Math.round((B - S) / f);
                            else {
                                var G = Math.round(1e3 * (B - w) / c),
                                    j = 0;
                                if (r && t.isAAC && G) {
                                    if (G > 0 && G < 1e4) j = Math.round((B - w) / h), a.b.log(G + " ms hole between AAC samples detected,filling it"), j > 0 && ((m = n.a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (m = U.subarray()), t.len += j * m.length);
                                    else if (G < -12) {
                                        a.b.log("drop overlapping AAC sample, expected/parsed/delta:" + (w / c).toFixed(3) + "s/" + (B / c).toFixed(3) + "s/" + -G + "ms"), t.len -= U.byteLength;
                                        continue
                                    }
                                    B = w
                                }
                                if (_ = B, !(t.len > 0)) return;
                                var K = v ? t.len : t.len + 8;
                                y = v ? 0 : 8;
                                try {
                                    b = new Uint8Array(K)
                                } catch (t) {
                                    return void this.observer.trigger(i.a.ERROR, {
                                        type: s.b.MUX_ERROR,
                                        details: s.a.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: K,
                                        reason: "fail allocating audio mdat " + K
                                    })
                                }
                                v || (new DataView(b.buffer).setUint32(0, K), b.set(o.a.types.mdat, 4));
                                for (var H = 0; H < j; H++)(m = n.a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (a.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), m = U.subarray()), b.set(m, y), y += m.byteLength, g = {
                                    size: m.byteLength,
                                    cts: 0,
                                    duration: 1024,
                                    flags: {
                                        isLeading: 0,
                                        isDependedOn: 0,
                                        hasRedundancy: 0,
                                        degradPrio: 0,
                                        dependsOn: 1
                                    }
                                }, A.push(g)
                            }
                            b.set(U, y);
                            var W = U.byteLength;
                            y += W, g = {
                                size: W,
                                cts: 0,
                                duration: 0,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: 1
                                }
                            }, A.push(g), S = B
                        }
                        var V = 0,
                            Y = A.length;
                        if (Y >= 2 && (V = A[Y - 2].duration, g.duration = V), Y) {
                            this.nextAudioPts = w = S + f * V, t.len = 0, t.samples = A, E = v ? new Uint8Array : o.a.moof(t.sequenceNumber++, _ / f, t), t.samples = [];
                            var X = _ / c,
                                q = w / c,
                                z = {
                                    data1: E,
                                    data2: b,
                                    startPTS: X,
                                    endPTS: q,
                                    startDTS: X,
                                    endDTS: q,
                                    type: "audio",
                                    hasAudio: !0,
                                    hasVideo: !1,
                                    nb: Y
                                };
                            return this.observer.trigger(i.a.FRAG_PARSING_DATA, z), z
                        }
                        return null
                    }
                }, t.prototype.remuxEmptyAudio = function(t, e, r, i) {
                    var o = t.inputTimeScale,
                        s = o / (t.samplerate ? t.samplerate : o),
                        u = this.nextAudioPts,
                        c = (void 0 !== u ? u : i.startDTS * o) + this._initDTS,
                        l = i.endDTS * o + this._initDTS,
                        f = 1024 * s,
                        h = Math.ceil((l - c) / f),
                        d = n.a.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                    if (a.b.warn("remux empty Audio"), d) {
                        for (var p = [], v = 0; v < h; v++) {
                            var y = c + v * f;
                            p.push({
                                unit: d,
                                pts: y,
                                dts: y
                            }), t.len += d.length
                        }
                        t.samples = p, this.remuxAudio(t, e, r)
                    } else a.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
                }, t.prototype.remuxID3 = function(t, e) {
                    var r = t.samples.length,
                        n = void 0,
                        a = t.inputTimeScale,
                        o = this._initPTS,
                        s = this._initDTS;
                    if (r) {
                        for (var u = 0; u < r; u++)(n = t.samples[u]).pts = (n.pts - o) / a, n.dts = (n.dts - s) / a;
                        this.observer.trigger(i.a.FRAG_PARSING_METADATA, {
                            samples: t.samples
                        })
                    }
                    t.samples = [], e = e
                }, t.prototype.remuxText = function(t, e) {
                    t.samples.sort((function(t, e) {
                        return t.pts - e.pts
                    }));
                    var r = t.samples.length,
                        n = void 0,
                        a = t.inputTimeScale,
                        o = this._initPTS;
                    if (r) {
                        for (var s = 0; s < r; s++)(n = t.samples[s]).pts = (n.pts - o) / a;
                        this.observer.trigger(i.a.FRAG_PARSING_USERDATA, {
                            samples: t.samples
                        })
                    }
                    t.samples = [], e = e
                }, t.prototype._PTSNormalize = function(t, e) {
                    var r;
                    if (void 0 === e) return t;
                    for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += r;
                    return t
                }, t
            }();
        e.a = u
    }, function(t, e, r) {
        "use strict";
        var n = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }
            return t.getSilentFrame = function(t, e) {
                switch (t) {
                    case "mp4a.40.2":
                        if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                        if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                        if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                        if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                        if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                        if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                        break;
                    default:
                        if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                }
                return null
            }, t
        }();
        e.a = n
    }, function(t, e, r) {
        "use strict";
        var n = Math.pow(2, 32) - 1,
            i = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                return t.init = function() {
                    t.types = {
                        avc1: [],
                        avcC: [],
                        btrt: [],
                        dinf: [],
                        dref: [],
                        esds: [],
                        ftyp: [],
                        hdlr: [],
                        mdat: [],
                        mdhd: [],
                        mdia: [],
                        mfhd: [],
                        minf: [],
                        moof: [],
                        moov: [],
                        mp4a: [],
                        ".mp3": [],
                        mvex: [],
                        mvhd: [],
                        pasp: [],
                        sdtp: [],
                        stbl: [],
                        stco: [],
                        stsc: [],
                        stsd: [],
                        stsz: [],
                        stts: [],
                        tfdt: [],
                        tfhd: [],
                        traf: [],
                        trak: [],
                        trun: [],
                        trex: [],
                        tkhd: [],
                        vmhd: [],
                        smhd: []
                    };
                    var e = void 0;
                    for (e in t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                    var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                        n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    t.HDLR_TYPES = {
                        video: r,
                        audio: n
                    };
                    var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                        a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    t.STTS = t.STSC = t.STCO = a, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    var o = new Uint8Array([105, 115, 111, 109]),
                        s = new Uint8Array([97, 118, 99, 49]),
                        u = new Uint8Array([0, 0, 0, 1]);
                    t.FTYP = t.box(t.types.ftyp, o, u, o, s), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, i))
                }, t.box = function(t) {
                    for (var e = Array.prototype.slice.call(arguments, 1), r = 8, n = e.length, i = n, a = void 0; n--;) r += e[n].byteLength;
                    for ((a = new Uint8Array(r))[0] = r >> 24 & 255, a[1] = r >> 16 & 255, a[2] = r >> 8 & 255, a[3] = 255 & r, a.set(t, 4), n = 0, r = 8; n < i; n++) a.set(e[n], r), r += e[n].byteLength;
                    return a
                }, t.hdlr = function(e) {
                    return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                }, t.mdat = function(e) {
                    return t.box(t.types.mdat, e)
                }, t.mdhd = function(e, r) {
                    r *= e;
                    var i = Math.floor(r / (n + 1)),
                        a = Math.floor(r % (n + 1));
                    return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
                }, t.mdia = function(e) {
                    return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                }, t.mfhd = function(e) {
                    return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                }, t.minf = function(e) {
                    return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                }, t.moof = function(e, r, n) {
                    return t.box(t.types.moof, t.mfhd(e), t.traf(n, r))
                }, t.moov = function(e) {
                    for (var r = e.length, n = []; r--;) n[r] = t.trak(e[r]);
                    return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(n).concat(t.mvex(e)))
                }, t.mvex = function(e) {
                    for (var r = e.length, n = []; r--;) n[r] = t.trex(e[r]);
                    return t.box.apply(null, [t.types.mvex].concat(n))
                }, t.mvhd = function(e, r) {
                    r *= e;
                    var i = Math.floor(r / (n + 1)),
                        a = Math.floor(r % (n + 1)),
                        o = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return t.box(t.types.mvhd, o)
                }, t.sdtp = function(e) {
                    var r = e.samples || [],
                        n = new Uint8Array(4 + r.length),
                        i = void 0,
                        a = void 0;
                    for (a = 0; a < r.length; a++) i = r[a].flags, n[a + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                    return t.box(t.types.sdtp, n)
                }, t.stbl = function(e) {
                    return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                }, t.avc1 = function(e) {
                    var r = [],
                        n = [],
                        i = void 0,
                        a = void 0,
                        o = void 0;
                    for (i = 0; i < e.sps.length; i++) o = (a = e.sps[i]).byteLength, r.push(o >>> 8 & 255), r.push(255 & o), r = r.concat(Array.prototype.slice.call(a));
                    for (i = 0; i < e.pps.length; i++) o = (a = e.pps[i]).byteLength, n.push(o >>> 8 & 255), n.push(255 & o), n = n.concat(Array.prototype.slice.call(a));
                    var s = t.box(t.types.avcC, new Uint8Array([1, r[3], r[4], r[5], 255, 224 | e.sps.length].concat(r).concat([e.pps.length]).concat(n))),
                        u = e.width,
                        c = e.height,
                        l = e.pixelRatio[0],
                        f = e.pixelRatio[1];
                    return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, u >> 8 & 255, 255 & u, c >> 8 & 255, 255 & c, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, f >> 24, f >> 16 & 255, f >> 8 & 255, 255 & f])))
                }, t.esds = function(t) {
                    var e = t.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                }, t.mp4a = function(e) {
                    var r = e.samplerate;
                    return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
                }, t.mp3 = function(e) {
                    var r = e.samplerate;
                    return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                }, t.stsd = function(e) {
                    return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e)) : t.box(t.types.stsd, t.STSD, t.avc1(e))
                }, t.tkhd = function(e) {
                    var r = e.id,
                        i = e.duration * e.timescale,
                        a = e.width,
                        o = e.height,
                        s = Math.floor(i / (n + 1)),
                        u = Math.floor(i % (n + 1));
                    return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, o >> 8 & 255, 255 & o, 0, 0]))
                }, t.traf = function(e, r) {
                    var i = t.sdtp(e),
                        a = e.id,
                        o = Math.floor(r / (n + 1)),
                        s = Math.floor(r % (n + 1));
                    return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                }, t.trak = function(e) {
                    return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                }, t.trex = function(e) {
                    var r = e.id;
                    return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                }, t.trun = function(e, r) {
                    var n = e.samples || [],
                        i = n.length,
                        a = 12 + 16 * i,
                        o = new Uint8Array(a),
                        s = void 0,
                        u = void 0,
                        c = void 0,
                        l = void 0,
                        f = void 0,
                        h = void 0;
                    for (r += 8 + a, o.set([0, 0, 15, 1, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), s = 0; s < i; s++) c = (u = n[s]).duration, l = u.size, f = u.flags, h = u.cts, o.set([c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, f.isLeading << 2 | f.dependsOn, f.isDependedOn << 6 | f.hasRedundancy << 4 | f.paddingValue << 1 | f.isNonSync, 61440 & f.degradPrio, 15 & f.degradPrio, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h], 12 + 16 * s);
                    return t.box(t.types.trun, o)
                }, t.initSegment = function(e) {
                    t.types || t.init();
                    var r = t.moov(e),
                        n = void 0;
                    return (n = new Uint8Array(t.FTYP.byteLength + r.byteLength)).set(t.FTYP), n.set(r, t.FTYP.byteLength), n
                }, t
            }();
        e.a = i
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = function() {
                function t(e) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.observer = e
                }
                return t.prototype.destroy = function() {}, t.prototype.resetTimeStamp = function() {}, t.prototype.resetInitSegment = function() {}, t.prototype.remux = function(t, e, r, i, a, o, s, u) {
                    var c = this.observer,
                        l = "";
                    t && (l += "audio"), e && (l += "video"), c.trigger(n.a.FRAG_PARSING_DATA, {
                        data1: u,
                        startPTS: a,
                        startDTS: a,
                        type: l,
                        hasAudio: !!t,
                        hasVideo: !!e,
                        nb: 1,
                        dropped: 0
                    }), c.trigger(n.a.FRAG_PARSED)
                }, t
            }();
        e.a = i
    }, function(t, e, r) {
        function n(t) {
            function e(n) {
                if (r[n]) return r[n].exports;
                var i = r[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
            }
            var r = {};
            e.m = t, e.c = r, e.i = function(t) {
                return t
            }, e.d = function(t, r, n) {
                e.o(t, r) || Object.defineProperty(t, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }, e.n = function(t) {
                var r = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return e.d(r, "a", r), r
            }, e.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, e.p = "/", e.oe = function(t) {
                throw console.error(t), t
            };
            var n = e(e.s = ENTRY_MODULE);
            return n.default || n
        }

        function i(t) {
            return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }

        function a(t, e, n) {
            var a = {};
            a[n] = [];
            var o = e.toString(),
                s = o.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
            if (!s) return a;
            for (var l, f = s[1], h = new RegExp("(\\\\n|\\W)" + i(f) + c, "g"); l = h.exec(o);) "dll-reference" !== l[3] && a[n].push(l[3]);
            for (h = new RegExp("\\(" + i(f) + '\\("(dll-reference\\s(' + u + '))"\\)\\)' + c, "g"); l = h.exec(o);) t[l[2]] || (a[n].push(l[1]), t[l[2]] = r(l[1]).m), a[l[2]] = a[l[2]] || [], a[l[2]].push(l[4]);
            return a
        }

        function o(t) {
            return Object.keys(t).reduce((function(e, r) {
                return e || t[r].length > 0
            }), !1)
        }

        function s(t, e) {
            for (var r = {
                    main: [e]
                }, n = {
                    main: []
                }, i = {
                    main: {}
                }; o(r);)
                for (var s = Object.keys(r), u = 0; u < s.length; u++) {
                    var c = s[u],
                        l = r[c].pop();
                    if (i[c] = i[c] || {}, !i[c][l] && t[c][l]) {
                        i[c][l] = !0, n[c] = n[c] || [], n[c].push(l);
                        for (var f = a(t, t[c][l], c), h = Object.keys(f), d = 0; d < h.length; d++) r[h[d]] = r[h[d]] || [], r[h[d]] = r[h[d]].concat(f[h[d]])
                    }
                }
            return n
        }
        var u = "[\\.|\\-|\\+|\\w|/|@]+",
            c = "\\((/\\*.*?\\*/)?s?.*?(" + u + ").*?\\)";
        t.exports = function(t, e) {
            e = e || {};
            var i = {
                    main: r.m
                },
                a = e.all ? {
                    main: Object.keys(i)
                } : s(i, t),
                o = "";
            Object.keys(a).filter((function(t) {
                return "main" !== t
            })).forEach((function(t) {
                for (var e = 0; a[t][e];) e++;
                a[t].push(e), i[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", o = o + "var " + t + " = (" + n.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + a[t].map((function(e) {
                    return JSON.stringify(e) + ": " + i[t][e].toString()
                })).join(",") + "});\n"
            })), o = o + "(" + n.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a.main.map((function(t) {
                return JSON.stringify(t) + ": " + i.main[t].toString()
            })).join(",") + "})(self);";
            var u = new window.Blob([o], {
                type: "text/javascript"
            });
            if (e.bare) return u;
            var c = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
                l = new window.Worker(c);
            return l.objectURL = c, l
        }
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = r(19),
            i = r(1),
            a = r(0),
            o = r(10),
            s = r.n(o);
        e.default = function(t) {
            var e = new s.a;
            e.trigger = function(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                e.emit.apply(e, [t, t].concat(n))
            }, e.off = function(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                e.removeListener.apply(e, [t].concat(n))
            };
            var r = function(e, r) {
                t.postMessage({
                    event: e,
                    data: r
                })
            };
            t.addEventListener("message", (function(i) {
                var o = i.data;
                switch (o.cmd) {
                    case "init":
                        var s = JSON.parse(o.config);
                        t.demuxer = new n.a(e, o.typeSupported, s, o.vendor);
                        try {
                            Object(a.a)(!0 === s.debug)
                        } catch (t) {
                            console.warn("demuxerWorker: unable to enable logs")
                        }
                        r("init", null);
                        break;
                    case "demux":
                        t.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
                }
            })), e.on(i.a.FRAG_DECRYPTED, r), e.on(i.a.FRAG_PARSING_INIT_SEGMENT, r), e.on(i.a.FRAG_PARSED, r), e.on(i.a.ERROR, r), e.on(i.a.FRAG_PARSING_METADATA, r), e.on(i.a.FRAG_PARSING_USERDATA, r), e.on(i.a.INIT_PTS_FOUND, r), e.on(i.a.FRAG_PARSING_DATA, (function(e, r) {
                var n = [],
                    i = {
                        event: e,
                        data: r
                    };
                r.data1 && (i.data1 = r.data1.buffer, n.push(r.data1.buffer), delete r.data1), r.data2 && (i.data2 = r.data2.buffer, n.push(r.data2.buffer), delete r.data2), t.postMessage(i, n)
            }))
        }
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(0),
            o = r(2),
            s = r(17),
            u = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            c = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.MANIFEST_LOADED, n.a.LEVEL_LOADED, n.a.FRAG_LOADED, n.a.ERROR));
                    return i.canload = !1, i.currentLevelIndex = null, i.manualLevelIndex = -1, i.timer = null, i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.onHandlerDestroying = function() {
                    this.cleanTimer(), this.manualLevelIndex = -1
                }, e.prototype.cleanTimer = function() {
                    null !== this.timer && (clearTimeout(this.timer), this.timer = null)
                }, e.prototype.startLoad = function() {
                    var t = this._levels;
                    this.canload = !0, this.levelRetryCount = 0, t && t.forEach((function(t) {
                        t.loadError = 0;
                        var e = t.details;
                        e && e.live && (t.details = void 0)
                    })), null !== this.timer && this.loadLevel()
                }, e.prototype.stopLoad = function() {
                    this.canload = !1
                }, e.prototype.onManifestLoaded = function(t) {
                    var e = [],
                        r = void 0,
                        i = {},
                        u = null,
                        c = !1,
                        l = !1,
                        f = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                        h = [];
                    if (t.levels.forEach((function(t) {
                            t.loadError = 0, t.fragmentError = !1, c = c || !!t.videoCodec, l = l || !!t.audioCodec || !(!t.attrs || !t.attrs.AUDIO), !0 === f && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0), void 0 === (u = i[t.bitrate]) ? (t.url = [t.url], t.urlId = 0, i[t.bitrate] = t, e.push(t)) : u.url.push(t.url)
                        })), !0 === c && !0 === l && (e = e.filter((function(t) {
                            return !!t.videoCodec
                        }))), e = e.filter((function(t) {
                            var e = t.audioCodec,
                                r = t.videoCodec;
                            return (!e || Object(s.a)(e)) && (!r || Object(s.a)(r))
                        })), t.audioTracks && (h = t.audioTracks.filter((function(t) {
                            return !t.audioCodec || Object(s.a)(t.audioCodec, "audio")
                        }))), e.length > 0) {
                        r = e[0].bitrate, e.sort((function(t, e) {
                            return t.bitrate - e.bitrate
                        })), this._levels = e;
                        for (var d = 0; d < e.length; d++)
                            if (e[d].bitrate === r) {
                                this._firstLevel = d, a.b.log("manifest loaded," + e.length + " level(s) found, first bitrate:" + r);
                                break
                            } this.hls.trigger(n.a.MANIFEST_PARSED, {
                            levels: e,
                            audioTracks: h,
                            firstLevel: this._firstLevel,
                            stats: t.stats,
                            audio: l,
                            video: c,
                            altAudio: h.length > 0
                        })
                    } else this.hls.trigger(n.a.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                        fatal: !0,
                        url: this.hls.url,
                        reason: "no level with compatible codecs found in manifest"
                    })
                }, e.prototype.setLevelInternal = function(t) {
                    var e = this._levels,
                        r = this.hls;
                    if (t >= 0 && t < e.length) {
                        if (this.cleanTimer(), this.currentLevelIndex !== t) {
                            a.b.log("switching to level " + t), this.currentLevelIndex = t;
                            var i = e[t];
                            i.level = t, r.trigger(n.a.LEVEL_SWITCHING, i)
                        }
                        var s = e[t],
                            u = s.details;
                        if (!u || !0 === u.live) {
                            var c = s.urlId;
                            r.trigger(n.a.LEVEL_LOADING, {
                                url: s.url[c],
                                level: t,
                                id: c
                            })
                        }
                    } else r.trigger(n.a.ERROR, {
                        type: o.b.OTHER_ERROR,
                        details: o.a.LEVEL_SWITCH_ERROR,
                        level: t,
                        fatal: !1,
                        reason: "invalid level idx"
                    })
                }, e.prototype.onError = function(t) {
                    if (!0 !== t.fatal) {
                        var e = !1,
                            r = !1,
                            n = void 0;
                        switch (t.details) {
                            case o.a.FRAG_LOAD_ERROR:
                            case o.a.FRAG_LOAD_TIMEOUT:
                            case o.a.KEY_LOAD_ERROR:
                            case o.a.KEY_LOAD_TIMEOUT:
                                n = t.frag.level, r = !0;
                                break;
                            case o.a.LEVEL_LOAD_ERROR:
                            case o.a.LEVEL_LOAD_TIMEOUT:
                                n = t.context.level, e = !0;
                                break;
                            case o.a.REMUX_ALLOC_ERROR:
                                n = t.level, e = !0
                        }
                        void 0 !== n && this.recoverLevel(t, n, e, r)
                    } else t.type === o.b.NETWORK_ERROR && this.cleanTimer()
                }, e.prototype.recoverLevel = function(t, e, r, n) {
                    var i = this,
                        o = this.hls.config,
                        s = t.details,
                        u = this._levels[e],
                        c = void 0,
                        l = void 0,
                        f = void 0;
                    if (u.loadError++, u.fragmentError = n, !0 === r) {
                        if (!(this.levelRetryCount + 1 <= o.levelLoadingMaxRetry)) return a.b.error("level controller, cannot recover from " + s + " error"), this.currentLevelIndex = null, this.cleanTimer(), void(t.fatal = !0);
                        l = Math.min(Math.pow(2, this.levelRetryCount) * o.levelLoadingRetryDelay, o.levelLoadingMaxRetryTimeout), this.timer = setTimeout((function() {
                            return i.loadLevel()
                        }), l), t.levelRetry = !0, this.levelRetryCount++, a.b.warn("level controller, " + s + ", retry in " + l + " ms, current retry count is " + this.levelRetryCount)
                    }!0 !== r && !0 !== n || ((c = u.url.length) > 1 && u.loadError < c ? (a.b.warn("level controller, " + s + " for level " + e + ": switching to redundant stream id " + u.urlId), u.urlId = (u.urlId + 1) % c, u.details = void 0) : -1 === this.manualLevelIndex ? (f = 0 === e ? this._levels.length - 1 : e - 1, a.b.warn("level controller, " + s + ": switch to " + f), this.hls.nextAutoLevel = this.currentLevelIndex = f) : !0 === n && (a.b.warn("level controller, " + s + ": reload a fragment"), this.currentLevelIndex = null))
                }, e.prototype.onFragLoaded = function(t) {
                    var e = t.frag;
                    if (void 0 !== e && "main" === e.type) {
                        var r = this._levels[e.level];
                        void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
                    }
                }, e.prototype.onLevelLoaded = function(t) {
                    var e = this,
                        r = t.level;
                    if (r === this.currentLevelIndex) {
                        var n = this._levels[r];
                        !1 === n.fragmentError && (n.loadError = 0, this.levelRetryCount = 0);
                        var i = t.details;
                        if (i.live) {
                            var o = 1e3 * (i.averagetargetduration ? i.averagetargetduration : i.targetduration),
                                s = o,
                                u = n.details;
                            u && i.endSN === u.endSN && (s /= 2, a.b.log("same live playlist, reload twice faster")), s -= performance.now() - t.stats.trequest, s = Math.max(o / 2, Math.round(s)), a.b.log("live playlist, reload in " + Math.round(s) + " ms"), this.timer = setTimeout((function() {
                                return e.loadLevel()
                            }), s)
                        } else this.cleanTimer()
                    }
                }, e.prototype.loadLevel = function() {
                    var t = void 0,
                        e = void 0;
                    null !== this.currentLevelIndex && !0 === this.canload && void 0 !== (t = this._levels[this.currentLevelIndex]) && t.url.length > 0 && (e = t.urlId, this.hls.trigger(n.a.LEVEL_LOADING, {
                        url: t.url[e],
                        level: this.currentLevelIndex,
                        id: e
                    }))
                }, u(e, [{
                    key: "levels",
                    get: function() {
                        return this._levels
                    }
                }, {
                    key: "level",
                    get: function() {
                        return this.currentLevelIndex
                    },
                    set: function(t) {
                        var e = this._levels;
                        e && (t = Math.min(t, e.length - 1), this.currentLevelIndex === t && void 0 !== e[t].details || this.setLevelInternal(t))
                    }
                }, {
                    key: "manualLevel",
                    get: function() {
                        return this.manualLevelIndex
                    },
                    set: function(t) {
                        this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
                    }
                }, {
                    key: "firstLevel",
                    get: function() {
                        return this._firstLevel
                    },
                    set: function(t) {
                        this._firstLevel = t
                    }
                }, {
                    key: "startLevel",
                    get: function() {
                        if (void 0 === this._startLevel) {
                            var t = this.hls.config.startLevel;
                            return void 0 !== t ? t : this._firstLevel
                        }
                        return this._startLevel
                    },
                    set: function(t) {
                        this._startLevel = t
                    }
                }, {
                    key: "nextLoadLevel",
                    get: function() {
                        return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                    },
                    set: function(t) {
                        this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                    }
                }]), e
            }(i.a);
        e.a = c
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(5),
            o = r(25),
            s = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.MEDIA_ATTACHED, n.a.MEDIA_DETACHING, n.a.FRAG_PARSING_METADATA));
                    return i.id3Track = void 0, i.media = void 0, i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    i.a.prototype.destroy.call(this)
                }, e.prototype.onMediaAttached = function(t) {
                    this.media = t.media, this.media
                }, e.prototype.onMediaDetaching = function() {
                    Object(o.a)(this.id3Track), this.id3Track = void 0, this.media = void 0
                }, e.prototype.getID3Track = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var r = t[e];
                        if ("metadata" === r.kind && "id3" === r.label) return Object(o.b)(r, this.media), r
                    }
                    return this.media.addTextTrack("metadata", "id3")
                }, e.prototype.onFragParsingMetadata = function(t) {
                    var e = t.frag,
                        r = t.samples;
                    this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                    for (var n = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, i = 0; i < r.length; i++) {
                        var o = a.a.getID3Frames(r[i].data);
                        if (o) {
                            var s = r[i].pts,
                                u = i < r.length - 1 ? r[i + 1].pts : e.endPTS;
                            s === u && (u += 1e-4);
                            for (var c = 0; c < o.length; c++) {
                                var l = o[c];
                                if (!a.a.isTimeStampFrame(l)) {
                                    var f = new n(s, u, "");
                                    f.value = l, this.id3Track.addCue(f)
                                }
                            }
                        }
                    }
                }, e
            }(i.a);
        e.a = s
    }, function(t, e, r) {
        "use strict";
        e.a = function() {
            var t = Object(n.a)(),
                e = window.SourceBuffer || window.WebKitSourceBuffer,
                r = t && "function" == typeof t.isTypeSupported,
                i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
            return !!r && !!i
        };
        var n = r(11)
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return y
        }));
        var n = r(51),
            i = r(54),
            a = r(55),
            o = r(56),
            s = r(57),
            u = r(58),
            c = r(59),
            l = r(60),
            f = r(62),
            h = r(66),
            d = r(67),
            p = r(68),
            v = r(69),
            y = {
                autoStartLoad: !0,
                startPosition: -1,
                defaultAudioCodec: void 0,
                debug: !1,
                capLevelOnFPSDrop: !1,
                capLevelToPlayerSize: !1,
                initialLiveManifestSize: 1,
                maxBufferLength: 30,
                maxBufferSize: 6e7,
                maxBufferHole: .5,
                lowBufferWatchdogPeriod: .5,
                highBufferWatchdogPeriod: 3,
                nudgeOffset: .1,
                nudgeMaxRetry: 3,
                maxFragLookUpTolerance: .25,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: 1 / 0,
                liveSyncDuration: void 0,
                liveMaxLatencyDuration: void 0,
                liveDurationInfinity: !1,
                maxMaxBufferLength: 600,
                enableWorker: !0,
                enableSoftwareAES: !0,
                manifestLoadingTimeOut: 1e4,
                manifestLoadingMaxRetry: 1,
                manifestLoadingRetryDelay: 1e3,
                manifestLoadingMaxRetryTimeout: 64e3,
                startLevel: void 0,
                levelLoadingTimeOut: 1e4,
                levelLoadingMaxRetry: 4,
                levelLoadingRetryDelay: 1e3,
                levelLoadingMaxRetryTimeout: 64e3,
                fragLoadingTimeOut: 2e4,
                fragLoadingMaxRetry: 6,
                fragLoadingRetryDelay: 1e3,
                fragLoadingMaxRetryTimeout: 64e3,
                startFragPrefetch: !1,
                fpsDroppedMonitoringPeriod: 5e3,
                fpsDroppedMonitoringThreshold: .2,
                appendErrorMaxRetry: 3,
                loader: s.a,
                fLoader: void 0,
                pLoader: void 0,
                xhrSetup: void 0,
                licenseXhrSetup: void 0,
                abrController: n.a,
                bufferController: i.a,
                capLevelController: a.a,
                fpsController: o.a,
                stretchShortVideoTrack: !1,
                maxAudioFramesDrift: 1,
                forceKeyFrameOnDiscontinuity: !0,
                abrEwmaFastLive: 3,
                abrEwmaSlowLive: 9,
                abrEwmaFastVoD: 3,
                abrEwmaSlowVoD: 9,
                abrEwmaDefaultEstimate: 5e5,
                abrBandWidthFactor: .95,
                abrBandWidthUpFactor: .7,
                abrMaxWithRealBitrate: !1,
                maxStarvationDelay: 4,
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                emeEnabled: !1,
                widevineLicenseUrl: void 0,
                requestMediaKeySystemAccessFunc: v.a
            };
        y.subtitleStreamController = d.a, y.subtitleTrackController = h.a, y.timelineController = f.a, y.cueHandler = l, y.enableCEA708Captions = !0, y.enableWebVTT = !0, y.captionsTextTrack1Label = "English", y.captionsTextTrack1LanguageCode = "en", y.captionsTextTrack2Label = "Spanish", y.captionsTextTrack2LanguageCode = "es", y.audioStreamController = c.a, y.audioTrackController = u.a, y.emeController = p.a
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(8),
            o = r(2),
            s = r(0),
            u = r(52),
            c = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            l = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.FRAG_LOADING, n.a.FRAG_LOADED, n.a.FRAG_BUFFERED, n.a.ERROR));
                    return i.lastLoadedFragLevel = 0, i._nextAutoLevel = -1, i.hls = r, i.timer = null, i._bwEstimator = null, i.onCheck = i._abandonRulesCheck.bind(i), i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    this.clearTimer(), i.a.prototype.destroy.call(this)
                }, e.prototype.onFragLoading = function(t) {
                    var e = t.frag;
                    if ("main" === e.type) {
                        if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator) {
                            var r = this.hls,
                                n = t.frag.level,
                                i = r.levels[n].details.live,
                                a = r.config,
                                o = void 0,
                                s = void 0;
                            i ? (o = a.abrEwmaFastLive, s = a.abrEwmaSlowLive) : (o = a.abrEwmaFastVoD, s = a.abrEwmaSlowVoD), this._bwEstimator = new u.a(r, s, o, a.abrEwmaDefaultEstimate)
                        }
                        this.fragCurrent = e
                    }
                }, e.prototype._abandonRulesCheck = function() {
                    var t = this.hls,
                        e = t.media,
                        r = this.fragCurrent,
                        i = r.loader,
                        o = t.minAutoLevel;
                    if (!i || i.stats && i.stats.aborted) return s.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
                    var u = i.stats;
                    if (e && u && (!e.paused && 0 !== e.playbackRate || !e.readyState) && r.autoLevel && r.level) {
                        var c = performance.now() - u.trequest,
                            l = Math.abs(e.playbackRate);
                        if (c > 500 * r.duration / l) {
                            var f = t.levels,
                                h = Math.max(1, u.bw ? u.bw / 8 : 1e3 * u.loaded / c),
                                d = f[r.level],
                                p = d.realBitrate ? Math.max(d.realBitrate, d.bitrate) : d.bitrate,
                                v = u.total ? u.total : Math.max(u.loaded, Math.round(r.duration * p / 8)),
                                y = e.currentTime,
                                g = (v - u.loaded) / h,
                                m = (a.a.bufferInfo(e, y, t.config.maxBufferHole).end - y) / l;
                            if (m < 2 * r.duration / l && g > m) {
                                var b = void 0,
                                    E = void 0;
                                for (E = r.level - 1; E > o; E--) {
                                    var _ = f[E].realBitrate ? Math.max(f[E].realBitrate, f[E].bitrate) : f[E].bitrate;
                                    if ((b = r.duration * _ / (6.4 * h)) < m) break
                                }
                                b < g && (s.b.warn("loading too slow, abort fragment loading and switch to level " + E + ":fragLoadedDelay[" + E + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + b.toFixed(1) + "<" + g.toFixed(1) + ":" + m.toFixed(1)), t.nextLoadLevel = E, this._bwEstimator.sample(c, u.loaded), i.abort(), this.clearTimer(), t.trigger(n.a.FRAG_LOAD_EMERGENCY_ABORTED, {
                                    frag: r,
                                    stats: u
                                }))
                            }
                        }
                    }
                }, e.prototype.onFragLoaded = function(t) {
                    var e = t.frag;
                    if ("main" === e.type && !isNaN(e.sn)) {
                        if (this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                            var r = this.hls.levels[e.level],
                                n = (r.loaded ? r.loaded.bytes : 0) + t.stats.loaded,
                                i = (r.loaded ? r.loaded.duration : 0) + t.frag.duration;
                            r.loaded = {
                                bytes: n,
                                duration: i
                            }, r.realBitrate = Math.round(8 * n / i)
                        }
                        if (t.frag.bitrateTest) {
                            var a = t.stats;
                            a.tparsed = a.tbuffered = a.tload, this.onFragBuffered(t)
                        }
                    }
                }, e.prototype.onFragBuffered = function(t) {
                    var e = t.stats,
                        r = t.frag;
                    if (!(!0 === e.aborted || "main" !== r.type || isNaN(r.sn) || r.bitrateTest && e.tload !== e.tbuffered)) {
                        var n = e.tparsed - e.trequest;
                        s.b.log("latency/loading/parsing/append/kbps:" + Math.round(e.tfirst - e.trequest) + "/" + Math.round(e.tload - e.tfirst) + "/" + Math.round(e.tparsed - e.tload) + "/" + Math.round(e.tbuffered - e.tparsed) + "/" + Math.round(8 * e.loaded / (e.tbuffered - e.trequest))), this._bwEstimator.sample(n, e.loaded), e.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
                    }
                }, e.prototype.onError = function(t) {
                    switch (t.details) {
                        case o.a.FRAG_LOAD_ERROR:
                        case o.a.FRAG_LOAD_TIMEOUT:
                            this.clearTimer()
                    }
                }, e.prototype.clearTimer = function() {
                    clearInterval(this.timer), this.timer = null
                }, e.prototype._findBestLevel = function(t, e, r, n, i, a, o, u, c) {
                    for (var l = i; l >= n; l--) {
                        var f, h = c[l].details,
                            d = h ? h.totalduration / h.fragments.length : e,
                            p = !!h && h.live;
                        f = l <= t ? o * r : u * r;
                        var v = c[l].realBitrate ? Math.max(c[l].realBitrate, c[l].bitrate) : c[l].bitrate,
                            y = v * d / f;
                        if (s.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + l + "/" + Math.round(f) + "/" + v + "/" + d + "/" + a + "/" + y), f > v && (!y || p && !this.bitrateTestDelay || y < a)) return l
                    }
                    return -1
                }, c(e, [{
                    key: "nextAutoLevel",
                    get: function() {
                        var t = this._nextAutoLevel,
                            e = this._bwEstimator;
                        if (!(-1 === t || e && e.canEstimate())) return t;
                        var r = this._nextABRAutoLevel;
                        return -1 !== t && (r = Math.min(t, r)), r
                    },
                    set: function(t) {
                        this._nextAutoLevel = t
                    }
                }, {
                    key: "_nextABRAutoLevel",
                    get: function() {
                        var t = this.hls,
                            e = t.maxAutoLevel,
                            r = t.levels,
                            n = t.config,
                            i = t.minAutoLevel,
                            o = t.media,
                            u = this.lastLoadedFragLevel,
                            c = this.fragCurrent ? this.fragCurrent.duration : 0,
                            l = o ? o.currentTime : 0,
                            f = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1,
                            h = this._bwEstimator ? this._bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                            d = (a.a.bufferInfo(o, l, n.maxBufferHole).end - l) / f,
                            p = this._findBestLevel(u, c, h, i, e, d, n.abrBandWidthFactor, n.abrBandWidthUpFactor, r);
                        if (p >= 0) return p;
                        s.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                        var v = c ? Math.min(c, n.maxStarvationDelay) : n.maxStarvationDelay,
                            y = n.abrBandWidthFactor,
                            g = n.abrBandWidthUpFactor;
                        if (0 === d) {
                            var m = this.bitrateTestDelay;
                            m && (v = (c ? Math.min(c, n.maxLoadingDelay) : n.maxLoadingDelay) - m, s.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"), y = g = 1)
                        }
                        return p = this._findBestLevel(u, c, h, i, e, d + v, y, g, r), Math.max(p, 0)
                    }
                }]), e
            }(i.a);
        e.a = l
    }, function(t, e, r) {
        "use strict";
        var n = r(53),
            i = function() {
                function t(e, r, i, a) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.hls = e, this.defaultEstimate_ = a, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new n.a(r), this.fast_ = new n.a(i)
                }
                return t.prototype.sample = function(t, e) {
                    var r = 8e3 * e / (t = Math.max(t, this.minDelayMs_)),
                        n = t / 1e3;
                    this.fast_.sample(n, r), this.slow_.sample(n, r)
                }, t.prototype.canEstimate = function() {
                    var t = this.fast_;
                    return t && t.getTotalWeight() >= this.minWeight_
                }, t.prototype.getEstimate = function() {
                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                }, t.prototype.destroy = function() {}, t
            }();
        e.a = i
    }, function(t, e, r) {
        "use strict";
        var n = function() {
            function t(e) {
                (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t), this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
            }
            return t.prototype.sample = function(t, e) {
                var r = Math.pow(this.alpha_, t);
                this.estimate_ = e * (1 - r) + r * this.estimate_, this.totalWeight_ += t
            }, t.prototype.getTotalWeight = function() {
                return this.totalWeight_
            }, t.prototype.getEstimate = function() {
                if (this.alpha_) {
                    var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                    return this.estimate_ / t
                }
                return this.estimate_
            }, t
        }();
        e.a = n
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(0),
            o = r(2),
            s = r(11),
            u = Object(s.a)(),
            c = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.MEDIA_ATTACHING, n.a.MEDIA_DETACHING, n.a.MANIFEST_PARSED, n.a.BUFFER_RESET, n.a.BUFFER_APPENDING, n.a.BUFFER_CODECS, n.a.BUFFER_EOS, n.a.BUFFER_FLUSHING, n.a.LEVEL_PTS_UPDATED, n.a.LEVEL_UPDATED));
                    return i._msDuration = null, i._levelDuration = null, i._live = null, i._objectUrl = null, i.onsbue = i.onSBUpdateEnd.bind(i), i.onsbe = i.onSBUpdateError.bind(i), i.pendingTracks = {}, i.tracks = {}, i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    i.a.prototype.destroy.call(this)
                }, e.prototype.onLevelPtsUpdated = function(t) {
                    var e = t.type,
                        r = this.tracks.audio;
                    if ("audio" === e && r && "audio/mpeg" === r.container) {
                        var n = this.sourceBuffer.audio;
                        if (Math.abs(n.timestampOffset - t.start) > .1) {
                            var i = n.updating;
                            try {
                                n.abort()
                            } catch (t) {
                                i = !0, a.b.warn("can not abort audio buffer: " + t)
                            }
                            i ? this.audioTimestampOffset = t.start : (a.b.warn("change mpeg audio timestamp offset from " + n.timestampOffset + " to " + t.start), n.timestampOffset = t.start)
                        }
                    }
                }, e.prototype.onManifestParsed = function(t) {
                    var e = t.audio,
                        r = t.video || t.levels.length && t.audio,
                        n = 0;
                    t.altAudio && (e || r) && (n = (e ? 1 : 0) + (r ? 1 : 0), a.b.log(n + " sourceBuffer(s) expected")), this.sourceBufferNb = n
                }, e.prototype.onMediaAttaching = function(t) {
                    var e = this.media = t.media;
                    if (e) {
                        var r = this.mediaSource = new u;
                        this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), r.addEventListener("sourceopen", this.onmso), r.addEventListener("sourceended", this.onmse), r.addEventListener("sourceclose", this.onmsc), e.src = URL.createObjectURL(r), this._objectUrl = e.src
                    }
                }, e.prototype.onMediaDetaching = function() {
                    a.b.log("media source detaching");
                    var t = this.mediaSource;
                    if (t) {
                        if ("open" === t.readyState) try {
                            t.endOfStream()
                        } catch (t) {
                            a.b.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                        }
                        t.removeEventListener("sourceopen", this.onmso), t.removeEventListener("sourceended", this.onmse), t.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : a.b.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                    }
                    this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(n.a.MEDIA_DETACHED)
                }, e.prototype.onMediaSourceOpen = function() {
                    a.b.log("media source opened"), this.hls.trigger(n.a.MEDIA_ATTACHED, {
                        media: this.media
                    });
                    var t = this.mediaSource;
                    t && t.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
                }, e.prototype.checkPendingTracks = function() {
                    var t = this.pendingTracks,
                        e = Object.keys(t).length;
                    e && (this.sourceBufferNb <= e || 0 === this.sourceBufferNb) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
                }, e.prototype.onMediaSourceClose = function() {
                    a.b.log("media source closed")
                }, e.prototype.onMediaSourceEnded = function() {
                    a.b.log("media source ended")
                }, e.prototype.onSBUpdateEnd = function() {
                    if (this.audioTimestampOffset) {
                        var t = this.sourceBuffer.audio;
                        a.b.warn("change mpeg audio timestamp offset from " + t.timestampOffset + " to " + this.audioTimestampOffset), t.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
                    }
                    this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
                    var e = this.parent,
                        r = this.segments.reduce((function(t, r) {
                            return r.parent === e ? t + 1 : t
                        }), 0),
                        i = {},
                        o = this.sourceBuffer;
                    for (var s in o) i[s] = o[s].buffered;
                    this.hls.trigger(n.a.BUFFER_APPENDED, {
                        parent: e,
                        pending: r,
                        timeRanges: i
                    }), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
                }, e.prototype.onSBUpdateError = function(t) {
                    a.b.error("sourceBuffer error:", t), this.hls.trigger(n.a.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    })
                }, e.prototype.onBufferReset = function() {
                    var t = this.sourceBuffer;
                    for (var e in t) {
                        var r = t[e];
                        try {
                            this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this.onsbue), r.removeEventListener("error", this.onsbe)
                        } catch (t) {}
                    }
                    this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                }, e.prototype.onBufferCodecs = function(t) {
                    if (0 === Object.keys(this.sourceBuffer).length) {
                        for (var e in t) this.pendingTracks[e] = t[e];
                        var r = this.mediaSource;
                        r && "open" === r.readyState && this.checkPendingTracks()
                    }
                }, e.prototype.createSourceBuffers = function(t) {
                    var e = this.sourceBuffer,
                        r = this.mediaSource;
                    for (var i in t)
                        if (!e[i]) {
                            var s = t[i],
                                u = s.levelCodec || s.codec,
                                c = s.container + ";codecs=" + u;
                            a.b.log("creating sourceBuffer(" + c + ")");
                            try {
                                var l = e[i] = r.addSourceBuffer(c);
                                l.addEventListener("updateend", this.onsbue), l.addEventListener("error", this.onsbe), this.tracks[i] = {
                                    codec: u,
                                    container: s.container
                                }, s.buffer = l
                            } catch (t) {
                                a.b.error("error while trying to add sourceBuffer:" + t.message), this.hls.trigger(n.a.ERROR, {
                                    type: o.b.MEDIA_ERROR,
                                    details: o.a.BUFFER_ADD_CODEC_ERROR,
                                    fatal: !1,
                                    err: t,
                                    mimeType: c
                                })
                            }
                        } this.hls.trigger(n.a.BUFFER_CREATED, {
                        tracks: t
                    })
                }, e.prototype.onBufferAppending = function(t) {
                    this._needsFlush || (this.segments ? this.segments.push(t) : this.segments = [t], this.doAppending())
                }, e.prototype.onBufferAppendFail = function(t) {
                    a.b.error("sourceBuffer error:", t.event), this.hls.trigger(n.a.ERROR, {
                        type: o.b.MEDIA_ERROR,
                        details: o.a.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    })
                }, e.prototype.onBufferEos = function(t) {
                    var e = this.sourceBuffer,
                        r = t.type;
                    for (var n in e) r && n !== r || e[n].ended || (e[n].ended = !0, a.b.log(n + " sourceBuffer now EOS"));
                    this.checkEos()
                }, e.prototype.checkEos = function() {
                    var t = this.sourceBuffer,
                        e = this.mediaSource;
                    if (e && "open" === e.readyState) {
                        for (var r in t) {
                            var n = t[r];
                            if (!n.ended) return;
                            if (n.updating) return void(this._needsEos = !0)
                        }
                        a.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                        try {
                            e.endOfStream()
                        } catch (t) {
                            a.b.warn("exception while calling mediaSource.endOfStream()")
                        }
                        this._needsEos = !1
                    } else this._needsEos = !1
                }, e.prototype.onBufferFlushing = function(t) {
                    this.flushRange.push({
                        start: t.startOffset,
                        end: t.endOffset,
                        type: t.type
                    }), this.flushBufferCounter = 0, this.doFlush()
                }, e.prototype.onLevelUpdated = function(t) {
                    var e = t.details;
                    e.fragments.length > 0 && (this._levelDuration = e.totalduration + e.fragments[0].start, this._live = e.live, this.updateMediaElementDuration())
                }, e.prototype.updateMediaElementDuration = function() {
                    var t = this.hls.config,
                        e = void 0;
                    if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                        for (var r in this.sourceBuffer)
                            if (!0 === this.sourceBuffer[r].updating) return;
                        e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === t.liveDurationInfinity ? (a.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || e === 1 / 0 || isNaN(e)) && (a.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
                    }
                }, e.prototype.doFlush = function() {
                    for (; this.flushRange.length;) {
                        var t = this.flushRange[0];
                        if (!this.flushBuffer(t.start, t.end, t.type)) return void(this._needsFlush = !0);
                        this.flushRange.shift(), this.flushBufferCounter = 0
                    }
                    if (0 === this.flushRange.length) {
                        this._needsFlush = !1;
                        var e = 0,
                            r = this.sourceBuffer;
                        try {
                            for (var i in r) e += r[i].buffered.length
                        } catch (t) {
                            a.b.error("error while accessing sourceBuffer.buffered")
                        }
                        this.appended = e, this.hls.trigger(n.a.BUFFER_FLUSHED)
                    }
                }, e.prototype.doAppending = function() {
                    var t = this.hls,
                        e = this.sourceBuffer,
                        r = this.segments;
                    if (Object.keys(e).length) {
                        if (this.media.error) return this.segments = [], void a.b.error("trying to append although a media error occured, flush segment and abort");
                        if (this.appending) return;
                        if (r && r.length) {
                            var i = r.shift();
                            try {
                                var s = e[i.type];
                                s ? s.updating ? r.unshift(i) : (s.ended = !1, this.parent = i.parent, s.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                            } catch (e) {
                                a.b.error("error while trying to append buffer:" + e.message), r.unshift(i);
                                var u = {
                                    type: o.b.MEDIA_ERROR,
                                    parent: i.parent
                                };
                                22 !== e.code ? (this.appendError ? this.appendError++ : this.appendError = 1, u.details = o.a.BUFFER_APPEND_ERROR, this.appendError > t.config.appendErrorMaxRetry ? (a.b.log("fail " + t.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), r = [], u.fatal = !0, t.trigger(n.a.ERROR, u)) : (u.fatal = !1, t.trigger(n.a.ERROR, u))) : (this.segments = [], u.details = o.a.BUFFER_FULL_ERROR, u.fatal = !1, t.trigger(n.a.ERROR, u))
                            }
                        }
                    }
                }, e.prototype.flushBuffer = function(t, e, r) {
                    var n = void 0,
                        i = void 0,
                        o = void 0,
                        s = void 0,
                        u = void 0,
                        c = void 0,
                        l = this.sourceBuffer;
                    if (Object.keys(l).length) {
                        if (a.b.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + e), this.flushBufferCounter < this.appended) {
                            for (var f in l)
                                if (!r || f === r) {
                                    if ((n = l[f]).ended = !1, n.updating) return a.b.warn("cannot flush, sb updating in progress"), !1;
                                    try {
                                        for (i = 0; i < n.buffered.length; i++)
                                            if (o = n.buffered.start(i), s = n.buffered.end(i), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && e === Number.POSITIVE_INFINITY ? (u = t, c = e) : (u = Math.max(o, t), c = Math.min(s, e)), Math.min(c, s) - u > .5) return this.flushBufferCounter++, a.b.log("flush " + f + " [" + u + "," + c + "], of [" + o + "," + s + "], pos:" + this.media.currentTime), n.remove(u, c), !1
                                    } catch (t) {
                                        a.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
                                    }
                                }
                        } else a.b.warn("abort flushing too many retries");
                        a.b.log("buffer flushed")
                    }
                    return !0
                }, e
            }(i.a);
        e.a = c
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            o = function(t) {
                function e(r) {
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, t.call(this, r, n.a.FPS_DROP_LEVEL_CAPPING, n.a.MEDIA_ATTACHING, n.a.MANIFEST_PARSED))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)))
                }, e.prototype.onFpsDropLevelCapping = function(t) {
                    e.isLevelAllowed(t.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(t.droppedLevel)
                }, e.prototype.onMediaAttaching = function(t) {
                    this.media = t.media instanceof HTMLVideoElement ? t.media : null
                }, e.prototype.onManifestParsed = function(t) {
                    var e = this.hls;
                    this.restrictedLevels = [], e.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = t.levels, e.firstLevel = this.getMaxLevel(t.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                }, e.prototype.detectPlayerSize = function() {
                    if (this.media) {
                        var t = this.levels ? this.levels.length : 0;
                        if (t) {
                            var e = this.hls;
                            e.autoLevelCapping = this.getMaxLevel(t - 1), e.autoLevelCapping > this.autoLevelCapping && e.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                        }
                    }
                }, e.prototype.getMaxLevel = function(t) {
                    var r = this;
                    if (!this.levels) return -1;
                    var n = this.levels.filter((function(n, i) {
                        return e.isLevelAllowed(i, r.restrictedLevels) && i <= t
                    }));
                    return e.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
                }, e.isLevelAllowed = function(t) {
                    return -1 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).indexOf(t)
                }, e.getMaxLevelByMediaSize = function(t, e, r) {
                    if (!t || t && !t.length) return -1;
                    for (var n = t.length - 1, i = 0; i < t.length; i += 1) {
                        var a = t[i];
                        if ((a.width >= e || a.height >= r) && function(t, e) {
                                return !e || t.width !== e.width || t.height !== e.height
                            }(a, t[i + 1])) {
                            n = i;
                            break
                        }
                    }
                    return n
                }, a(e, [{
                    key: "mediaWidth",
                    get: function() {
                        var t = void 0,
                            r = this.media;
                        return r && (t = r.width || r.clientWidth || r.offsetWidth, t *= e.contentScaleFactor), t
                    }
                }, {
                    key: "mediaHeight",
                    get: function() {
                        var t = void 0,
                            r = this.media;
                        return r && (t = r.height || r.clientHeight || r.offsetHeight, t *= e.contentScaleFactor), t
                    }
                }], [{
                    key: "contentScaleFactor",
                    get: function() {
                        var t = 1;
                        try {
                            t = window.devicePixelRatio
                        } catch (t) {}
                        return t
                    }
                }]), e
            }(i.a);
        e.a = o
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(0),
            o = function(t) {
                function e(r) {
                    return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, t.call(this, r, n.a.MEDIA_ATTACHING))
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                }, e.prototype.onMediaAttaching = function(t) {
                    var e = this.hls.config;
                    e.capLevelOnFPSDrop && ("function" == typeof(this.video = t.media instanceof HTMLVideoElement ? t.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), e.fpsDroppedMonitoringPeriod))
                }, e.prototype.checkFPS = function(t, e, r) {
                    var i = performance.now();
                    if (e) {
                        if (this.lastTime) {
                            var o = i - this.lastTime,
                                s = r - this.lastDroppedFrames,
                                u = e - this.lastDecodedFrames,
                                c = 1e3 * s / o,
                                l = this.hls;
                            if (l.trigger(n.a.FPS_DROP, {
                                    currentDropped: s,
                                    currentDecoded: u,
                                    totalDroppedFrames: r
                                }), c > 0 && s > l.config.fpsDroppedMonitoringThreshold * u) {
                                var f = l.currentLevel;
                                a.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + f), f > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= f) && (f -= 1, l.trigger(n.a.FPS_DROP_LEVEL_CAPPING, {
                                    level: f,
                                    droppedLevel: l.currentLevel
                                }), l.autoLevelCapping = f, l.streamController.nextLevelSwitch())
                            }
                        }
                        this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = e
                    }
                }, e.prototype.checkFPSInterval = function() {
                    var t = this.video;
                    if (t)
                        if (this.isVideoPlaybackQualityAvailable) {
                            var e = t.getVideoPlaybackQuality();
                            this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                        } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                }, e
            }(i.a);
        e.a = o
    }, function(t, e, r) {
        "use strict";
        var n = r(0),
            i = function() {
                function t(e) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                }
                return t.prototype.destroy = function() {
                    this.abort(), this.loader = null
                }, t.prototype.abort = function() {
                    var t = this.loader;
                    t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                }, t.prototype.load = function(t, e, r) {
                    this.context = t, this.config = e, this.callbacks = r, this.stats = {
                        trequest: performance.now(),
                        retry: 0
                    }, this.retryDelay = e.retryDelay, this.loadInternal()
                }, t.prototype.loadInternal = function() {
                    var t = void 0,
                        e = this.context;
                    t = this.loader = new XMLHttpRequest;
                    var r = this.stats;
                    r.tfirst = 0, r.loaded = 0;
                    var n = this.xhrSetup;
                    try {
                        if (n) try {
                            n(t, e.url)
                        } catch (r) {
                            t.open("GET", e.url, !0), n(t, e.url)
                        }
                        t.readyState || t.open("GET", e.url, !0)
                    } catch (r) {
                        return void this.callbacks.onError({
                            code: t.status,
                            text: r.message
                        }, e, t)
                    }
                    e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), t.send()
                }, t.prototype.readystatechange = function(t) {
                    var e = t.currentTarget,
                        r = e.readyState,
                        i = this.stats,
                        a = this.context,
                        o = this.config;
                    if (!i.aborted && r >= 2)
                        if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(performance.now(), i.trequest)), 4 === r) {
                            var s = e.status;
                            if (s >= 200 && s < 300) {
                                i.tload = Math.max(i.tfirst, performance.now());
                                var u = void 0,
                                    c = void 0;
                                c = "arraybuffer" === a.responseType ? (u = e.response).byteLength : (u = e.responseText).length, i.loaded = i.total = c;
                                var l = {
                                    url: e.responseURL,
                                    data: u
                                };
                                this.callbacks.onSuccess(l, i, a, e)
                            } else i.retry >= o.maxRetry || s >= 400 && s < 499 ? (n.b.error(s + " while loading " + a.url), this.callbacks.onError({
                                code: s,
                                text: e.statusText
                            }, a, e)) : (n.b.warn(s + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, o.maxRetryDelay), i.retry++)
                        } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), o.timeout)
                }, t.prototype.loadtimeout = function() {
                    n.b.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                }, t.prototype.loadprogress = function(t) {
                    var e = t.currentTarget,
                        r = this.stats;
                    r.loaded = t.loaded, t.lengthComputable && (r.total = t.total);
                    var n = this.callbacks.onProgress;
                    n && n(r, this.context, null, e)
                }, t
            }();
        e.a = i
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(3),
            a = r(0),
            o = r(2),
            s = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            u = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.MANIFEST_LOADING, n.a.MANIFEST_PARSED, n.a.AUDIO_TRACK_LOADED, n.a.ERROR));
                    return i.ticks = 0, i.ontick = i.tick.bind(i), i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.destroy = function() {
                    this.cleanTimer(), i.a.prototype.destroy.call(this)
                }, e.prototype.cleanTimer = function() {
                    this.timer && (clearTimeout(this.timer), this.timer = null)
                }, e.prototype.tick = function() {
                    1 == ++this.ticks && (this.doTick(), this.ticks > 1 && setTimeout(this.tick, 1), this.ticks = 0)
                }, e.prototype.doTick = function() {
                    this.updateTrack(this.trackId)
                }, e.prototype.onError = function(t) {
                    t.fatal && t.type === o.b.NETWORK_ERROR && this.cleanTimer()
                }, e.prototype.onManifestLoading = function() {
                    this.tracks = [], this.trackId = -1
                }, e.prototype.onManifestParsed = function(t) {
                    var e = this,
                        r = t.audioTracks || [],
                        i = !1;
                    this.tracks = r, this.hls.trigger(n.a.AUDIO_TRACKS_UPDATED, {
                        audioTracks: r
                    });
                    var o = 0;
                    r.forEach((function(t) {
                        if (t.default && !i) return e.audioTrack = o, void(i = !0);
                        o++
                    })), !1 === i && r.length && (a.b.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
                }, e.prototype.onAudioTrackLoaded = function(t) {
                    t.id < this.tracks.length && (a.b.log("audioTrack " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * t.details.targetduration)), !t.details.live && this.timer && this.cleanTimer())
                }, e.prototype.setAudioTrackInternal = function(t) {
                    if (t >= 0 && t < this.tracks.length) {
                        this.cleanTimer(), this.trackId = t, a.b.log("switching to audioTrack " + t);
                        var e = this.tracks[t],
                            r = this.hls,
                            i = e.type,
                            o = e.url,
                            s = {
                                id: t,
                                type: i,
                                url: o
                            };
                        r.trigger(n.a.AUDIO_TRACK_SWITCHING, s);
                        var u = e.details;
                        !o || void 0 !== u && !0 !== u.live || (a.b.log("(re)loading playlist for audioTrack " + t), r.trigger(n.a.AUDIO_TRACK_LOADING, {
                            url: o,
                            id: t
                        }))
                    }
                }, e.prototype.updateTrack = function(t) {
                    if (t >= 0 && t < this.tracks.length) {
                        this.cleanTimer(), this.trackId = t, a.b.log("updating audioTrack " + t);
                        var e = this.tracks[t],
                            r = e.url,
                            i = e.details;
                        !r || void 0 !== i && !0 !== i.live || (a.b.log("(re)loading playlist for audioTrack " + t), this.hls.trigger(n.a.AUDIO_TRACK_LOADING, {
                            url: r,
                            id: t
                        }))
                    }
                }, s(e, [{
                    key: "audioTracks",
                    get: function() {
                        return this.tracks
                    }
                }, {
                    key: "audioTrack",
                    get: function() {
                        return this.trackId
                    },
                    set: function(t) {
                        this.trackId === t && void 0 !== this.tracks[t].details || this.setAudioTrackInternal(t)
                    }
                }]), e
            }(i.a);
        e.a = u
    }, function(t, e, r) {
        "use strict";
        var n = r(7),
            i = r(8),
            a = r(18),
            o = r(1),
            s = r(22),
            u = r(23),
            c = r(2),
            l = r(0),
            f = r(24),
            h = r(13),
            d = r(12),
            p = r(6),
            v = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            y = {
                STOPPED: "STOPPED",
                STARTING: "STARTING",
                IDLE: "IDLE",
                PAUSED: "PAUSED",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING",
                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                WAITING_TRACK: "WAITING_TRACK",
                PARSING: "PARSING",
                PARSED: "PARSED",
                BUFFER_FLUSHING: "BUFFER_FLUSHING",
                ENDED: "ENDED",
                ERROR: "ERROR",
                WAITING_INIT_PTS: "WAITING_INIT_PTS"
            },
            g = function(t) {
                function e(r, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, o.a.MEDIA_ATTACHED, o.a.MEDIA_DETACHING, o.a.AUDIO_TRACKS_UPDATED, o.a.AUDIO_TRACK_SWITCHING, o.a.AUDIO_TRACK_LOADED, o.a.KEY_LOADED, o.a.FRAG_LOADED, o.a.FRAG_PARSING_INIT_SEGMENT, o.a.FRAG_PARSING_DATA, o.a.FRAG_PARSED, o.a.ERROR, o.a.BUFFER_RESET, o.a.BUFFER_CREATED, o.a.BUFFER_APPENDED, o.a.BUFFER_FLUSHED, o.a.INIT_PTS_FOUND));
                    return i.fragmentTracker = n, i.config = r.config, i.audioCodecSwap = !1, i._state = y.STOPPED, i.initPTS = [], i.waitingFragment = null, i.videoTrackCC = null, i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.onHandlerDestroying = function() {
                    this.stopLoad()
                }, e.prototype.onHandlerDestroyed = function() {
                    this.state = y.STOPPED, this.fragmentTracker = null
                }, e.prototype.onInitPtsFound = function(t) {
                    var e = t.id,
                        r = t.frag.cc,
                        n = t.initPTS;
                    "main" === e && (this.initPTS[r] = n, this.videoTrackCC = r, l.b.log("InitPTS for cc: " + r + " found from video track: " + n), this.state === y.WAITING_INIT_PTS && this.tick())
                }, e.prototype.startLoad = function(t) {
                    if (this.tracks) {
                        var e = this.lastCurrentTime;
                        this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, e > 0 && -1 === t ? (l.b.log("audio:override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = y.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : t, this.state = y.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                    } else this.startPosition = t, this.state = y.STOPPED
                }, e.prototype.stopLoad = function() {
                    var t = this.fragCurrent;
                    t && (t.loader && t.loader.abort(), this.fragmentTracker.removeFragment(t), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = y.STOPPED
                }, e.prototype.doTick = function() {
                    var t = void 0,
                        e = void 0,
                        r = void 0,
                        a = this.hls,
                        s = a.config;
                    switch (this.state) {
                        case y.ERROR:
                        case y.PAUSED:
                        case y.BUFFER_FLUSHING:
                            break;
                        case y.STARTING:
                            this.state = y.WAITING_TRACK, this.loadedmetadata = !1;
                            break;
                        case y.IDLE:
                            var u = this.tracks;
                            if (!u) break;
                            if (!this.media && (this.startFragRequested || !s.startFragPrefetch)) break;
                            if (this.loadedmetadata) t = this.media.currentTime;
                            else if (void 0 === (t = this.nextLoadPosition)) break;
                            var c = this.mediaBuffer ? this.mediaBuffer : this.media,
                                h = this.videoBuffer ? this.videoBuffer : this.media,
                                p = i.a.bufferInfo(c, t, s.maxBufferHole),
                                v = i.a.bufferInfo(h, t, s.maxBufferHole),
                                g = p.len,
                                m = p.end,
                                b = this.fragPrevious,
                                E = Math.min(s.maxBufferLength, s.maxMaxBufferLength),
                                _ = Math.max(E, v.len),
                                S = this.audioSwitch,
                                T = this.trackId;
                            if ((g < _ || S) && T < u.length) {
                                if (void 0 === (r = u[T].details)) {
                                    this.state = y.WAITING_TRACK;
                                    break
                                }
                                if (!S && !r.live && b && b.sn === r.endSN && !p.nextStart && (!this.media.seeking || this.media.duration - m < b.duration / 2)) {
                                    this.hls.trigger(o.a.BUFFER_EOS, {
                                        type: "audio"
                                    }), this.state = y.ENDED;
                                    break
                                }
                                var A = r.fragments,
                                    w = A.length,
                                    R = A[0].start,
                                    L = A[w - 1].start + A[w - 1].duration,
                                    O = void 0;
                                if (S)
                                    if (r.live && !r.PTSKnown) l.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"), m = 0;
                                    else if (m = t, r.PTSKnown && t < R) {
                                    if (!(p.end > R || p.nextStart)) return;
                                    l.b.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = R + .05
                                }
                                if (r.initSegment && !r.initSegment.data) O = r.initSegment;
                                else if (m <= R) {
                                    if (O = A[0], null !== this.videoTrackCC && O.cc !== this.videoTrackCC && (O = Object(f.b)(A, this.videoTrackCC)), r.live && O.loadIdx && O.loadIdx === this.fragLoadIdx) {
                                        var I = p.nextStart ? p.nextStart : R;
                                        return l.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (I + .05)), void(this.media.currentTime = I + .05)
                                    }
                                } else {
                                    var D = void 0,
                                        k = s.maxFragLookUpTolerance,
                                        P = b ? A[b.sn - A[0].sn + 1] : void 0,
                                        x = function(t) {
                                            var e = Math.min(k, t.duration);
                                            return t.start + t.duration - e <= m ? 1 : t.start - e > m && t.start ? -1 : 0
                                        };
                                    m < L ? (m > L - k && (k = 0), D = P && !x(P) ? P : n.a.search(A, x)) : D = A[w - 1], D && (O = D, R = D.start, b && O.level === b.level && O.sn === b.sn && (O.sn < r.endSN ? (O = A[O.sn + 1 - r.startSN], l.b.log("SN just loaded, load next one: " + O.sn)) : O = null))
                                }
                                O && (O.decryptdata && null != O.decryptdata.uri && null == O.decryptdata.key ? (l.b.log("Loading key for " + O.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + T), this.state = y.KEY_LOADING, a.trigger(o.a.KEY_LOADING, {
                                    frag: O
                                })) : (l.b.log("Loading " + O.sn + ", cc: " + O.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + T + ", currentTime:" + t + ",bufferEnd:" + m.toFixed(3)), this.fragmentTracker.getState(O) === d.a.NOT_LOADED && (this.fragCurrent = O, this.startFragRequested = !0, isNaN(O.sn) || (this.nextLoadPosition = O.start + O.duration), a.trigger(o.a.FRAG_LOADING, {
                                    frag: O
                                }), this.state = y.FRAG_LOADING)))
                            }
                            break;
                        case y.WAITING_TRACK:
                            (e = this.tracks[this.trackId]) && e.details && (this.state = y.IDLE);
                            break;
                        case y.FRAG_LOADING_WAITING_RETRY:
                            var C = performance.now(),
                                F = this.retryDate,
                                M = (c = this.media) && c.seeking;
                            (!F || C >= F || M) && (l.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = y.IDLE);
                            break;
                        case y.WAITING_INIT_PTS:
                            var N = this.videoTrackCC;
                            if (void 0 === this.initPTS[N]) break;
                            var U = this.waitingFragment;
                            if (U) {
                                var B = U.frag.cc;
                                N !== B ? (e = this.tracks[this.trackId]).details && e.details.live && (l.b.warn("Waiting fragment CC (" + B + ") does not match video track CC (" + N + ")"), this.waitingFragment = null, this.state = y.IDLE) : (this.state = y.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                            } else this.state = y.IDLE;
                            break;
                        case y.STOPPED:
                        case y.FRAG_LOADING:
                        case y.PARSING:
                        case y.PARSED:
                        case y.ENDED:
                    }
                }, e.prototype.onMediaAttached = function(t) {
                    var e = this.media = this.mediaBuffer = t.media;
                    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("ended", this.onvended);
                    var r = this.config;
                    this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                }, e.prototype.onMediaDetaching = function() {
                    var t = this.media;
                    t && t.ended && (l.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                }, e.prototype.onMediaSeeking = function() {
                    this.state === y.ENDED && (this.state = y.IDLE), this.media && (this.lastCurrentTime = this.media.currentTime), this.tick()
                }, e.prototype.onMediaEnded = function() {
                    this.startPosition = this.lastCurrentTime = 0
                }, e.prototype.onAudioTracksUpdated = function(t) {
                    l.b.log("audio tracks updated"), this.tracks = t.audioTracks
                }, e.prototype.onAudioTrackSwitching = function(t) {
                    var e = !!t.url;
                    this.trackId = t.id, this.fragCurrent = null, this.state = y.PAUSED, this.waitingFragment = null, e ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), e && (this.audioSwitch = !0, this.state = y.IDLE), this.tick()
                }, e.prototype.onAudioTrackLoaded = function(t) {
                    var e = t.details,
                        r = t.id,
                        n = this.tracks[r],
                        i = e.totalduration,
                        a = 0;
                    if (l.b.log("track " + r + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + i), e.live) {
                        var o = n.details;
                        o && e.fragments.length > 0 ? (s.a(o, e), a = e.fragments[0].start, e.PTSKnown ? l.b.log("live audio playlist sliding:" + a.toFixed(3)) : l.b.log("live audio playlist - outdated PTS, unknown sliding")) : (e.PTSKnown = !1, l.b.log("live audio playlist - first load, unknown sliding"))
                    } else e.PTSKnown = !1;
                    if (n.details = e, !this.startFragRequested) {
                        if (-1 === this.startPosition) {
                            var u = e.startTimeOffset;
                            isNaN(u) ? this.startPosition = 0 : (l.b.log("start time offset found in playlist, adjust startPosition to " + u), this.startPosition = u)
                        }
                        this.nextLoadPosition = this.startPosition
                    }
                    this.state === y.WAITING_TRACK && (this.state = y.IDLE), this.tick()
                }, e.prototype.onKeyLoaded = function() {
                    this.state === y.KEY_LOADING && (this.state = y.IDLE, this.tick())
                }, e.prototype.onFragLoaded = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    if (this.state === y.FRAG_LOADING && e && "audio" === r.type && r.level === e.level && r.sn === e.sn) {
                        var n = this.tracks[this.trackId],
                            i = n.details,
                            s = i.totalduration,
                            u = e.level,
                            c = e.sn,
                            f = e.cc,
                            h = this.config.defaultAudioCodec || n.audioCodec || "mp4a.40.2",
                            d = this.stats = t.stats;
                        if ("initSegment" === c) this.state = y.IDLE, d.tparsed = d.tbuffered = performance.now(), i.initSegment.data = t.payload, this.hls.trigger(o.a.FRAG_BUFFERED, {
                            stats: d,
                            frag: e,
                            id: "audio"
                        }), this.tick();
                        else {
                            this.state = y.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new a.a(this.hls, "audio"));
                            var p = this.initPTS[f],
                                v = i.initSegment ? i.initSegment.data : [];
                            i.initSegment || void 0 !== p ? (this.pendingBuffering = !0, l.b.log("Demuxing " + c + " of [" + i.startSN + " ," + i.endSN + "],track " + u), this.demuxer.push(t.payload, v, h, null, e, s, !1, p)) : (l.b.log("unknown video PTS for continuity counter " + f + ", waiting for video PTS before demuxing audio frag " + c + " of [" + i.startSN + " ," + i.endSN + "],track " + u), this.waitingFragment = t, this.state = y.WAITING_INIT_PTS)
                        }
                    }
                    this.fragLoadError = 0
                }, e.prototype.onFragParsingInitSegment = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    if (e && "audio" === t.id && r.sn === e.sn && r.level === e.level && this.state === y.PARSING) {
                        var n = t.tracks,
                            i = void 0;
                        if (n.video && delete n.video, i = n.audio) {
                            i.levelCodec = i.codec, i.id = t.id, this.hls.trigger(o.a.BUFFER_CODECS, n), l.b.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                            var a = i.initSegment;
                            if (a) {
                                var s = {
                                    type: "audio",
                                    data: a,
                                    parent: "audio",
                                    content: "initSegment"
                                };
                                this.audioSwitch ? this.pendingData = [s] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(o.a.BUFFER_APPENDING, s))
                            }
                            this.tick()
                        }
                    }
                }, e.prototype.onFragParsingData = function(t) {
                    var e = this,
                        r = this.fragCurrent,
                        n = t.frag;
                    if (r && "audio" === t.id && "audio" === t.type && n.sn === r.sn && n.level === r.level && this.state === y.PARSING) {
                        var i = this.trackId,
                            a = this.tracks[i],
                            u = this.hls;
                        isNaN(t.endPTS) && (t.endPTS = t.startPTS + r.duration, t.endDTS = t.startDTS + r.duration), r.addElementaryStream(p.a.ElementaryStreamTypes.AUDIO), l.b.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), s.b(a.details, r, t.startPTS, t.endPTS);
                        var f = this.audioSwitch,
                            h = this.media,
                            d = !1;
                        if (f && h)
                            if (h.readyState) {
                                var v = h.currentTime;
                                l.b.log("switching audio track : currentTime:" + v), v >= t.startPTS && (l.b.log("switching audio track : flushing all audio"), this.state = y.BUFFER_FLUSHING, u.trigger(o.a.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio"
                                }), d = !0, this.audioSwitch = !1, u.trigger(o.a.AUDIO_TRACK_SWITCHED, {
                                    id: i
                                }))
                            } else this.audioSwitch = !1, u.trigger(o.a.AUDIO_TRACK_SWITCHED, {
                                id: i
                            });
                        var g = this.pendingData;
                        if (!g) return console.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void u.trigger(o.a.ERROR, {
                            type: c.b.MEDIA_ERROR,
                            details: null,
                            fatal: !0
                        });
                        this.audioSwitch || ([t.data1, t.data2].forEach((function(e) {
                            e && e.length && g.push({
                                type: t.type,
                                data: e,
                                parent: "audio",
                                content: "data"
                            })
                        })), !d && g.length && (g.forEach((function(t) {
                            e.state === y.PARSING && (e.pendingBuffering = !0, e.hls.trigger(o.a.BUFFER_APPENDING, t))
                        })), this.pendingData = [], this.appended = !0)), this.tick()
                    }
                }, e.prototype.onFragParsed = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag;
                    e && "audio" === t.id && r.sn === e.sn && r.level === e.level && this.state === y.PARSING && (this.stats.tparsed = performance.now(), this.state = y.PARSED, this._checkAppendedParsed())
                }, e.prototype.onBufferReset = function() {
                    this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                }, e.prototype.onBufferCreated = function(t) {
                    var e = t.tracks.audio;
                    e && (this.mediaBuffer = e.buffer, this.loadedmetadata = !0), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
                }, e.prototype.onBufferAppended = function(t) {
                    if ("audio" === t.parent) {
                        var e = this.state;
                        e !== y.PARSING && e !== y.PARSED || (this.pendingBuffering = t.pending > 0, this._checkAppendedParsed())
                    }
                }, e.prototype._checkAppendedParsed = function() {
                    if (!(this.state !== y.PARSED || this.appended && this.pendingBuffering)) {
                        var t = this.fragCurrent,
                            e = this.stats,
                            r = this.hls;
                        if (t) {
                            this.fragPrevious = t, e.tbuffered = performance.now(), r.trigger(o.a.FRAG_BUFFERED, {
                                stats: e,
                                frag: t,
                                id: "audio"
                            });
                            var n = this.mediaBuffer ? this.mediaBuffer : this.media;
                            l.b.log("audio buffered : " + u.a.toString(n.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(o.a.AUDIO_TRACK_SWITCHED, {
                                id: this.trackId
                            })), this.state = y.IDLE
                        }
                        this.tick()
                    }
                }, e.prototype.onError = function(t) {
                    var e = t.frag;
                    if (!e || "audio" === e.type) switch (t.details) {
                        case c.a.FRAG_LOAD_ERROR:
                        case c.a.FRAG_LOAD_TIMEOUT:
                            if (!t.fatal) {
                                var r = this.fragLoadError;
                                r ? r++ : r = 1;
                                var n = this.config;
                                if (r <= n.fragLoadingMaxRetry) {
                                    this.fragLoadError = r;
                                    var a = Math.min(Math.pow(2, r - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
                                    l.b.warn("audioStreamController: frag loading failed, retry in " + a + " ms"), this.retryDate = performance.now() + a, this.state = y.FRAG_LOADING_WAITING_RETRY
                                } else l.b.error("audioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = y.ERROR
                            }
                            break;
                        case c.a.AUDIO_TRACK_LOAD_ERROR:
                        case c.a.AUDIO_TRACK_LOAD_TIMEOUT:
                        case c.a.KEY_LOAD_ERROR:
                        case c.a.KEY_LOAD_TIMEOUT:
                            this.state !== y.ERROR && (this.state = t.fatal ? y.ERROR : y.IDLE, l.b.warn("audioStreamController: " + t.details + " while loading frag,switch to " + this.state + " state ..."));
                            break;
                        case c.a.BUFFER_FULL_ERROR:
                            if ("audio" === t.parent && (this.state === y.PARSING || this.state === y.PARSED)) {
                                var s = this.mediaBuffer,
                                    u = this.media.currentTime;
                                if (s && i.a.isBuffered(s, u) && i.a.isBuffered(s, u + .5)) {
                                    var f = this.config;
                                    f.maxMaxBufferLength >= f.maxBufferLength && (f.maxMaxBufferLength /= 2, l.b.warn("audio:reduce max buffer length to " + f.maxMaxBufferLength + "s")), this.state = y.IDLE
                                } else l.b.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = y.BUFFER_FLUSHING, this.hls.trigger(o.a.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: "audio"
                                })
                            }
                    }
                }, e.prototype.onBufferFlushed = function() {
                    var t = this,
                        e = this.pendingData;
                    e && e.length ? (l.b.log("appending pending audio data on Buffer Flushed"), e.forEach((function(e) {
                        t.hls.trigger(o.a.BUFFER_APPENDING, e)
                    })), this.appended = !0, this.pendingData = [], this.state = y.PARSED) : (this.state = y.IDLE, this.fragPrevious = null, this.tick())
                }, v(e, [{
                    key: "state",
                    set: function(t) {
                        if (this.state !== t) {
                            var e = this.state;
                            this._state = t, l.b.log("audio stream:" + e + "->" + t)
                        }
                    },
                    get: function() {
                        return this._state
                    }
                }]), e
            }(h.a);
        e.a = g
    }, function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.newCue = function(t, e, r, i) {
            for (var a = void 0, o = void 0, s = void 0, u = void 0, c = void 0, l = window.VTTCue || window.TextTrackCue, f = 0; f < i.rows.length; f++)
                if (s = !0, u = 0, c = "", !(a = i.rows[f]).isEmpty()) {
                    for (var h = 0; h < a.chars.length; h++) a.chars[h].uchar.match(/\s/) && s ? u++ : (c += a.chars[h].uchar, s = !1);
                    a.cueStartTime = e, e === r && (r += 1e-4), o = new l(e, r, Object(n.b)(c.trim())), u >= 16 ? u-- : u++, navigator.userAgent.match(/Firefox\//) ? o.line = f + 1 : o.line = f > 7 ? f - 2 : f + 1, o.align = "left", o.position = Math.max(0, Math.min(100, u / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), t.addCue(o)
                }
        };
        var n = r(26)
    }, function(t, e, r) {
        "use strict";
        e.a = function() {
            function t(t) {
                return "string" == typeof t && !!a[t.toLowerCase()] && t.toLowerCase()
            }

            function e(t) {
                return "string" == typeof t && !!o[t.toLowerCase()] && t.toLowerCase()
            }

            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r) t[n] = r[n]
                }
                return t
            }

            function n(n, a, o) {
                var s = this,
                    u = function() {
                        if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
                    }(),
                    c = {};
                u ? s = document.createElement("custom") : c.enumerable = !0, s.hasBeenReset = !1;
                var l = "",
                    f = !1,
                    h = n,
                    d = a,
                    p = o,
                    v = null,
                    y = "",
                    g = !0,
                    m = "auto",
                    b = "start",
                    E = 50,
                    _ = "middle",
                    S = 50,
                    T = "middle";
                if (Object.defineProperty(s, "id", r({}, c, {
                        get: function() {
                            return l
                        },
                        set: function(t) {
                            l = "" + t
                        }
                    })), Object.defineProperty(s, "pauseOnExit", r({}, c, {
                        get: function() {
                            return f
                        },
                        set: function(t) {
                            f = !!t
                        }
                    })), Object.defineProperty(s, "startTime", r({}, c, {
                        get: function() {
                            return h
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                            h = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "endTime", r({}, c, {
                        get: function() {
                            return d
                        },
                        set: function(t) {
                            if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                            d = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "text", r({}, c, {
                        get: function() {
                            return p
                        },
                        set: function(t) {
                            p = "" + t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "region", r({}, c, {
                        get: function() {
                            return v
                        },
                        set: function(t) {
                            v = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "vertical", r({}, c, {
                        get: function() {
                            return y
                        },
                        set: function(e) {
                            var r = t(e);
                            if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
                            y = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "snapToLines", r({}, c, {
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            g = !!t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "line", r({}, c, {
                        get: function() {
                            return m
                        },
                        set: function(t) {
                            if ("number" != typeof t && t !== i) throw new SyntaxError("An invalid number or illegal string was specified.");
                            m = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "lineAlign", r({}, c, {
                        get: function() {
                            return b
                        },
                        set: function(t) {
                            var r = e(t);
                            if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                            b = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "position", r({}, c, {
                        get: function() {
                            return E
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                            E = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "positionAlign", r({}, c, {
                        get: function() {
                            return _
                        },
                        set: function(t) {
                            var r = e(t);
                            if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                            _ = r, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "size", r({}, c, {
                        get: function() {
                            return S
                        },
                        set: function(t) {
                            if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                            S = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(s, "align", r({}, c, {
                        get: function() {
                            return T
                        },
                        set: function(t) {
                            var r = e(t);
                            if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                            T = r, this.hasBeenReset = !0
                        }
                    })), s.displayState = void 0, u) return s
            }
            if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
            var i = "auto",
                a = {
                    "": !0,
                    lr: !0,
                    rl: !0
                },
                o = {
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                };
            return n.prototype.getCueAsHTML = function() {
                return window.WebVTT.convertCueToDOMTree(window, this.text)
            }, n
        }()
    }, function(t, e, r) {
        "use strict";

        function n(t, e, r, n) {
            return Math.min(e, n) - Math.max(t, r)
        }
        var i = r(1),
            a = r(3),
            o = r(63),
            s = r(64),
            u = r(65),
            c = r(0),
            l = r(25),
            f = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, i.a.MEDIA_ATTACHING, i.a.MEDIA_DETACHING, i.a.FRAG_PARSING_USERDATA, i.a.FRAG_DECRYPTED, i.a.MANIFEST_LOADING, i.a.MANIFEST_LOADED, i.a.FRAG_LOADED, i.a.LEVEL_SWITCHING, i.a.INIT_PTS_FOUND));
                    if (n.hls = r, n.config = r.config, n.enabled = !0, n.Cues = r.config.cueHandler, n.textTracks = [], n.tracks = [], n.unparsedVttFrags = [], n.initPTS = void 0, n.cueRanges = [], n.config.enableCEA708Captions) {
                        var a = new s.a(n, 1),
                            u = new s.a(n, 2);
                        n.cea608Parser = new o.a(0, a, u)
                    }
                    return n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.addCues = function(t, e, r, i) {
                    for (var a = this.cueRanges, o = !1, s = a.length; s--;) {
                        var u = a[s],
                            c = n(u[0], u[1], e, r);
                        if (c >= 0 && (u[0] = Math.min(u[0], e), u[1] = Math.max(u[1], r), o = !0, c / (r - e) > .5)) return
                    }
                    o || a.push([e, r]), this.Cues.newCue(this[t], e, r, i)
                }, e.prototype.onInitPtsFound = function(t) {
                    var e = this;
                    void 0 === this.initPTS && (this.initPTS = t.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach((function(t) {
                        e.onFragLoaded(t)
                    })), this.unparsedVttFrags = [])
                }, e.prototype.getExistingTrack = function(t) {
                    var e = this.media;
                    if (e)
                        for (var r = 0; r < e.textTracks.length; r++) {
                            var n = e.textTracks[r];
                            if (!0 === n["textTrack" + t]) return n
                        }
                    return null
                }, e.prototype.createCaptionsTrack = function(t) {
                    var e = "textTrack" + t;
                    if (!this[e]) {
                        var r = this.getExistingTrack(t);
                        if (r) this[e] = r, Object(l.a)(this[e]), Object(l.b)(this[e], this.media);
                        else {
                            var n = this.createTextTrack("captions", this.config["captionsTextTrack" + t + "Label"], this.config["captionsTextTrack" + t + "LanguageCode"]);
                            n && (n[e] = !0, this[e] = n)
                        }
                    }
                }, e.prototype.createTextTrack = function(t, e, r) {
                    var n = this.media;
                    if (n) return n.addTextTrack(t, e, r)
                }, e.prototype.destroy = function() {
                    a.a.prototype.destroy.call(this)
                }, e.prototype.onMediaAttaching = function(t) {
                    this.media = t.media, this._cleanTracks()
                }, e.prototype.onMediaDetaching = function() {
                    Object(l.a)(this.textTrack1), Object(l.a)(this.textTrack2)
                }, e.prototype.onManifestLoading = function() {
                    this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0
                    }, this._cleanTracks()
                }, e.prototype._cleanTracks = function() {
                    var t = this.media;
                    if (t) {
                        var e = t.textTracks;
                        if (e)
                            for (var r = 0; r < e.length; r++) Object(l.a)(e[r])
                    }
                }, e.prototype.onManifestLoaded = function(t) {
                    var e = this;
                    if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges = [], this.config.enableWebVTT) {
                        this.tracks = t.subtitles || [];
                        var r = this.media ? this.media.textTracks : [];
                        this.tracks.forEach((function(t, n) {
                            var i = void 0;
                            if (n < r.length) {
                                var a = r[n];
                                (function(t, e) {
                                    return t && t.label === e.name && !(t.textTrack1 || t.textTrack2)
                                })(a, t) && (i = a)
                            }
                            i || (i = e.createTextTrack("subtitles", t.name, t.lang)), t.default ? i.mode = e.hls.subtitleDisplay ? "showing" : "hidden" : i.mode = "disabled", e.textTracks.push(i)
                        }))
                    }
                }, e.prototype.onLevelSwitching = function() {
                    this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
                }, e.prototype.onFragLoaded = function(t) {
                    var e = t.frag,
                        r = t.payload;
                    if ("main" === e.type) {
                        var n = e.sn;
                        if (n !== this.lastSn + 1) {
                            var a = this.cea608Parser;
                            a && a.reset()
                        }
                        this.lastSn = n
                    } else if ("subtitle" === e.type)
                        if (r.byteLength) {
                            if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
                            var o = e.decryptdata;
                            null != o && null != o.key && "AES-128" === o.method || this._parseVTTs(e, r)
                        } else this.hls.trigger(i.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: e
                        })
                }, e.prototype._parseVTTs = function(t, e) {
                    var r = this.vttCCs;
                    r[t.cc] || (r[t.cc] = {
                        start: t.start,
                        prevCC: this.prevCC,
                        new: !0
                    }, this.prevCC = t.cc);
                    var n = this.textTracks,
                        a = this.hls;
                    u.a.parse(e, this.initPTS, r, t.cc, (function(e) {
                        var r = n[t.trackId];
                        "disabled" !== r.mode ? (e.forEach((function(t) {
                            if (!r.cues.getCueById(t.id)) try {
                                r.addCue(t)
                            } catch (n) {
                                var e = new window.TextTrackCue(t.startTime, t.endTime, t.text);
                                e.id = t.id, r.addCue(e)
                            }
                        })), a.trigger(i.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: t
                        })) : a.trigger(i.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: t
                        })
                    }), (function(e) {
                        c.b.log("Failed to parse VTT cue: " + e), a.trigger(i.a.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: t
                        })
                    }))
                }, e.prototype.onFragDecrypted = function(t) {
                    var e = t.payload,
                        r = t.frag;
                    if ("subtitle" === r.type) {
                        if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
                        this._parseVTTs(r, e)
                    }
                }, e.prototype.onFragParsingUserdata = function(t) {
                    if (this.enabled && this.config.enableCEA708Captions)
                        for (var e = 0; e < t.samples.length; e++) {
                            var r = this.extractCea608Data(t.samples[e].bytes);
                            this.cea608Parser.addData(t.samples[e].pts, r)
                        }
                }, e.prototype.extractCea608Data = function(t) {
                    for (var e = 31 & t[0], r = 2, n = void 0, i = void 0, a = void 0, o = [], s = 0; s < e; s++) n = t[r++], i = 127 & t[r++], a = 127 & t[r++], 0 === i && 0 === a || 0 != (4 & n) && 0 == (3 & n) && (o.push(i), o.push(a));
                    return o
                }, e
            }(a.a);
        e.a = f
    }, function(t, e, r) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var i = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            },
            a = function(t) {
                var e = t;
                return i.hasOwnProperty(t) && (e = i[t]), String.fromCharCode(e)
            },
            o = 15,
            s = 100,
            u = {
                17: 1,
                18: 3,
                21: 5,
                22: 7,
                23: 9,
                16: 11,
                19: 12,
                20: 14
            },
            c = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            },
            l = {
                25: 1,
                26: 3,
                29: 5,
                30: 7,
                31: 9,
                24: 11,
                27: 12,
                28: 14
            },
            f = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            },
            h = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
            d = {
                verboseFilter: {
                    DATA: 3,
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 2,
                    TEXT: 1,
                    ERROR: 0
                },
                time: null,
                verboseLevel: 0,
                setTime: function(t) {
                    this.time = t
                },
                log: function(t, e) {
                    var r = this.verboseFilter[t];
                    this.verboseLevel >= r && console.log(this.time + " [" + t + "] " + e)
                }
            },
            p = function(t) {
                for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
                return e
            },
            v = function() {
                function t(e, r, i, a, o) {
                    n(this, t), this.foreground = e || "white", this.underline = r || !1, this.italics = i || !1, this.background = a || "black", this.flash = o || !1
                }
                return t.prototype.reset = function() {
                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                }, t.prototype.setStyles = function(t) {
                    for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                        var n = e[r];
                        t.hasOwnProperty(n) && (this[n] = t[n])
                    }
                }, t.prototype.isDefault = function() {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }, t.prototype.equals = function(t) {
                    return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                }, t.prototype.copy = function(t) {
                    this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                }, t.prototype.toString = function() {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }, t
            }(),
            y = function() {
                function t(e, r, i, a, o, s) {
                    n(this, t), this.uchar = e || " ", this.penState = new v(r, i, a, o, s)
                }
                return t.prototype.reset = function() {
                    this.uchar = " ", this.penState.reset()
                }, t.prototype.setChar = function(t, e) {
                    this.uchar = t, this.penState.copy(e)
                }, t.prototype.setPenState = function(t) {
                    this.penState.copy(t)
                }, t.prototype.equals = function(t) {
                    return this.uchar === t.uchar && this.penState.equals(t.penState)
                }, t.prototype.copy = function(t) {
                    this.uchar = t.uchar, this.penState.copy(t.penState)
                }, t.prototype.isEmpty = function() {
                    return " " === this.uchar && this.penState.isDefault()
                }, t
            }(),
            g = function() {
                function t() {
                    n(this, t), this.chars = [];
                    for (var e = 0; e < s; e++) this.chars.push(new y);
                    this.pos = 0, this.currPenState = new v
                }
                return t.prototype.equals = function(t) {
                    for (var e = !0, r = 0; r < s; r++)
                        if (!this.chars[r].equals(t.chars[r])) {
                            e = !1;
                            break
                        } return e
                }, t.prototype.copy = function(t) {
                    for (var e = 0; e < s; e++) this.chars[e].copy(t.chars[e])
                }, t.prototype.isEmpty = function() {
                    for (var t = !0, e = 0; e < s; e++)
                        if (!this.chars[e].isEmpty()) {
                            t = !1;
                            break
                        } return t
                }, t.prototype.setCursor = function(t) {
                    this.pos !== t && (this.pos = t), this.pos < 0 ? (d.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > s && (d.log("ERROR", "Too large cursor position " + this.pos), this.pos = s)
                }, t.prototype.moveCursor = function(t) {
                    var e = this.pos + t;
                    if (t > 1)
                        for (var r = this.pos + 1; r < e + 1; r++) this.chars[r].setPenState(this.currPenState);
                    this.setCursor(e)
                }, t.prototype.backSpace = function() {
                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                }, t.prototype.insertChar = function(t) {
                    t >= 144 && this.backSpace();
                    var e = a(t);
                    this.pos >= s ? d.log("ERROR", "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
                }, t.prototype.clearFromPos = function(t) {
                    var e = void 0;
                    for (e = t; e < s; e++) this.chars[e].reset()
                }, t.prototype.clear = function() {
                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                }, t.prototype.clearToEndOfRow = function() {
                    this.clearFromPos(this.pos)
                }, t.prototype.getTextString = function() {
                    for (var t = [], e = !0, r = 0; r < s; r++) {
                        var n = this.chars[r].uchar;
                        " " !== n && (e = !1), t.push(n)
                    }
                    return e ? "" : t.join("")
                }, t.prototype.setPenStyles = function(t) {
                    this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                }, t
            }(),
            m = function() {
                function t() {
                    n(this, t), this.rows = [];
                    for (var e = 0; e < o; e++) this.rows.push(new g);
                    this.currRow = o - 1, this.nrRollUpRows = null, this.reset()
                }
                return t.prototype.reset = function() {
                    for (var t = 0; t < o; t++) this.rows[t].clear();
                    this.currRow = o - 1
                }, t.prototype.equals = function(t) {
                    for (var e = !0, r = 0; r < o; r++)
                        if (!this.rows[r].equals(t.rows[r])) {
                            e = !1;
                            break
                        } return e
                }, t.prototype.copy = function(t) {
                    for (var e = 0; e < o; e++) this.rows[e].copy(t.rows[e])
                }, t.prototype.isEmpty = function() {
                    for (var t = !0, e = 0; e < o; e++)
                        if (!this.rows[e].isEmpty()) {
                            t = !1;
                            break
                        } return t
                }, t.prototype.backSpace = function() {
                    this.rows[this.currRow].backSpace()
                }, t.prototype.clearToEndOfRow = function() {
                    this.rows[this.currRow].clearToEndOfRow()
                }, t.prototype.insertChar = function(t) {
                    this.rows[this.currRow].insertChar(t)
                }, t.prototype.setPen = function(t) {
                    this.rows[this.currRow].setPenStyles(t)
                }, t.prototype.moveCursor = function(t) {
                    this.rows[this.currRow].moveCursor(t)
                }, t.prototype.setCursor = function(t) {
                    d.log("INFO", "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                }, t.prototype.setPAC = function(t) {
                    d.log("INFO", "pacData = " + JSON.stringify(t));
                    var e = t.row - 1;
                    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                        for (var r = 0; r < o; r++) this.rows[r].clear();
                        var n = this.currRow + 1 - this.nrRollUpRows,
                            i = this.lastOutputScreen;
                        if (i) {
                            var a = i.rows[n].cueStartTime;
                            if (a && a < d.time)
                                for (var s = 0; s < this.nrRollUpRows; s++) this.rows[e - this.nrRollUpRows + s + 1].copy(i.rows[n + s])
                        }
                    }
                    this.currRow = e;
                    var u = this.rows[this.currRow];
                    if (null !== t.indent) {
                        var c = t.indent,
                            l = Math.max(c - 1, 0);
                        u.setCursor(t.indent), t.color = u.chars[l].penState.foreground
                    }
                    var f = {
                        foreground: t.color,
                        underline: t.underline,
                        italics: t.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(f)
                }, t.prototype.setBkgData = function(t) {
                    d.log("INFO", "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                }, t.prototype.setRollUpRows = function(t) {
                    this.nrRollUpRows = t
                }, t.prototype.rollUp = function() {
                    if (null !== this.nrRollUpRows) {
                        d.log("TEXT", this.getDisplayText());
                        var t = this.currRow + 1 - this.nrRollUpRows,
                            e = this.rows.splice(t, 1)[0];
                        e.clear(), this.rows.splice(this.currRow, 0, e), d.log("INFO", "Rolling up")
                    } else d.log("DEBUG", "roll_up but nrRollUpRows not set yet")
                }, t.prototype.getDisplayText = function(t) {
                    t = t || !1;
                    for (var e = [], r = "", n = -1, i = 0; i < o; i++) {
                        var a = this.rows[i].getTextString();
                        a && (n = i + 1, t ? e.push("Row " + n + ": '" + a + "'") : e.push(a.trim()))
                    }
                    return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                }, t.prototype.getTextAndFormat = function() {
                    return this.rows
                }, t
            }(),
            b = function() {
                function t(e, r) {
                    n(this, t), this.chNr = e, this.outputFilter = r, this.mode = null, this.verbose = 0, this.displayedMemory = new m, this.nonDisplayedMemory = new m, this.lastOutputScreen = new m, this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                }
                return t.prototype.reset = function() {
                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[o - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
                }, t.prototype.getHandler = function() {
                    return this.outputFilter
                }, t.prototype.setHandler = function(t) {
                    this.outputFilter = t
                }, t.prototype.setPAC = function(t) {
                    this.writeScreen.setPAC(t)
                }, t.prototype.setBkgData = function(t) {
                    this.writeScreen.setBkgData(t)
                }, t.prototype.setMode = function(t) {
                    t !== this.mode && (this.mode = t, d.log("INFO", "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                }, t.prototype.insertChars = function(t) {
                    for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
                    var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    d.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (d.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                }, t.prototype.ccRCL = function() {
                    d.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                }, t.prototype.ccBS = function() {
                    d.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }, t.prototype.ccAOF = function() {}, t.prototype.ccAON = function() {}, t.prototype.ccDER = function() {
                    d.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                }, t.prototype.ccRU = function(t) {
                    d.log("INFO", "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                }, t.prototype.ccFON = function() {
                    d.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
                        flash: !0
                    })
                }, t.prototype.ccRDC = function() {
                    d.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                }, t.prototype.ccTR = function() {
                    d.log("INFO", "TR"), this.setMode("MODE_TEXT")
                }, t.prototype.ccRTD = function() {
                    d.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                }, t.prototype.ccEDM = function() {
                    d.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                }, t.prototype.ccCR = function() {
                    d.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                }, t.prototype.ccENM = function() {
                    d.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                }, t.prototype.ccEOC = function() {
                    if (d.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                        var t = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, d.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate(!0)
                }, t.prototype.ccTO = function(t) {
                    d.log("INFO", "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                }, t.prototype.ccMIDROW = function(t) {
                    var e = {
                        flash: !1
                    };
                    if (e.underline = t % 2 == 1, e.italics = t >= 46, e.italics) e.foreground = "white";
                    else {
                        var r = Math.floor(t / 2) - 16;
                        e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                    }
                    d.log("INFO", "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                }, t.prototype.outputDataUpdate = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        e = d.time;
                    null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), !0 === t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                }, t.prototype.cueSplitAtTime = function(t) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
                }, t
            }(),
            E = function() {
                function t(e, r, i) {
                    n(this, t), this.field = e || 1, this.outputs = [r, i], this.channels = [new b(1, r), new b(2, i)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
                        padding: 0,
                        char: 0,
                        cmd: 0,
                        other: 0
                    }
                }
                return t.prototype.getHandler = function(t) {
                    return this.channels[t].getHandler()
                }, t.prototype.setHandler = function(t, e) {
                    this.channels[t].setHandler(e)
                }, t.prototype.addData = function(t, e) {
                    var r = void 0,
                        n = void 0,
                        i = void 0,
                        a = !1;
                    this.lastTime = t, d.setTime(t);
                    for (var o = 0; o < e.length; o += 2) n = 127 & e[o], i = 127 & e[o + 1], 0 !== n || 0 !== i ? (d.log("DATA", "[" + p([e[o], e[o + 1]]) + "] -> (" + p([n, i]) + ")"), (r = this.parseCmd(n, i)) || (r = this.parseMidrow(n, i)), r || (r = this.parsePAC(n, i)), r || (r = this.parseBackgroundAttributes(n, i)), !r && (a = this.parseChars(n, i)) && (this.currChNr && this.currChNr >= 0 ? this.channels[this.currChNr - 1].insertChars(a) : d.log("WARNING", "No channel found yet. TEXT-MODE?")), r ? this.dataCounters.cmd += 2 : a ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, d.log("WARNING", "Couldn't parse cleaned data " + p([n, i]) + " orig: " + p([e[o], e[o + 1]])))) : this.dataCounters.padding += 2
                }, t.prototype.parseCmd = function(t, e) {
                    var r;
                    if (!((20 === t || 28 === t) && e >= 32 && e <= 47 || (23 === t || 31 === t) && e >= 33 && e <= 35)) return !1;
                    if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, d.log("DEBUG", "Repeated command (" + p([t, e]) + ") is dropped"), !0;
                    r = 20 === t || 23 === t ? 1 : 2;
                    var n = this.channels[r - 1];
                    return 20 === t || 28 === t ? 32 === e ? n.ccRCL() : 33 === e ? n.ccBS() : 34 === e ? n.ccAOF() : 35 === e ? n.ccAON() : 36 === e ? n.ccDER() : 37 === e ? n.ccRU(2) : 38 === e ? n.ccRU(3) : 39 === e ? n.ccRU(4) : 40 === e ? n.ccFON() : 41 === e ? n.ccRDC() : 42 === e ? n.ccTR() : 43 === e ? n.ccRTD() : 44 === e ? n.ccEDM() : 45 === e ? n.ccCR() : 46 === e ? n.ccENM() : 47 === e && n.ccEOC() : n.ccTO(e - 32), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = r, !0
                }, t.prototype.parseMidrow = function(t, e) {
                    var r = null;
                    return (17 === t || 25 === t) && e >= 32 && e <= 47 && ((r = 17 === t ? 1 : 2) !== this.currChNr ? (d.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[r - 1].ccMIDROW(e), d.log("DEBUG", "MIDROW (" + p([t, e]) + ")"), !0))
                }, t.prototype.parsePAC = function(t, e) {
                    var r, n;
                    if (!((t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127 || (16 === t || 24 === t) && e >= 64 && e <= 95)) return !1;
                    if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, !0;
                    r = t <= 23 ? 1 : 2, n = e >= 64 && e <= 95 ? 1 === r ? u[t] : l[t] : 1 === r ? c[t] : f[t];
                    var i = this.interpretPAC(n, e);
                    return this.channels[r - 1].setPAC(i), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = r, !0
                }, t.prototype.interpretPAC = function(t, e) {
                    var r, n = {
                        color: null,
                        italics: !1,
                        indent: null,
                        underline: !1,
                        row: t
                    };
                    return r = e > 95 ? e - 96 : e - 64, n.underline = 1 == (1 & r), r <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((r - 16) / 2), n
                }, t.prototype.parseChars = function(t, e) {
                    var r, n = null,
                        i = null,
                        o = null;
                    if (t >= 25 ? (n = 2, o = t - 8) : (n = 1, o = t), o >= 17 && o <= 19 ? (r = 17 === o ? e + 80 : 18 === o ? e + 112 : e + 144, d.log("INFO", "Special char '" + a(r) + "' in channel " + n), i = [r]) : t >= 32 && t <= 127 && (i = 0 === e ? [t] : [t, e]), i) {
                        var s = p(i);
                        d.log("DEBUG", "Char codes =  " + s.join(",")), this.lastCmdA = null, this.lastCmdB = null
                    }
                    return i
                }, t.prototype.parseBackgroundAttributes = function(t, e) {
                    var r = void 0,
                        n = void 0,
                        i = void 0,
                        a = void 0;
                    return !(!((16 === t || 24 === t) && e >= 32 && e <= 47) && !((23 === t || 31 === t) && e >= 45 && e <= 47) || (r = {}, 16 === t || 24 === t ? (n = Math.floor((e - 32) / 2), r.background = h[n], e % 2 == 1 && (r.background = r.background + "_semi")) : 45 === e ? r.background = "transparent" : (r.foreground = "black", 47 === e && (r.underline = !0)), i = t < 24 ? 1 : 2, a = this.channels[i - 1], a.setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, 0))
                }, t.prototype.reset = function() {
                    for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].reset();
                    this.lastCmdA = null, this.lastCmdB = null
                }, t.prototype.cueSplitAtTime = function(t) {
                    for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].cueSplitAtTime(t)
                }, t
            }();
        e.a = E
    }, function(t, e, r) {
        "use strict";
        var n = function() {
            function t(e, r) {
                (function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                })(this, t), this.timelineController = e, this.track = r, this.startTime = null, this.endTime = null, this.screen = null
            }
            return t.prototype.dispatchCue = function() {
                null !== this.startTime && (this.timelineController.addCues("textTrack" + this.track, this.startTime, this.endTime, this.screen), this.startTime = null)
            }, t.prototype.newCue = function(t, e, r) {
                (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = r, this.timelineController.createCaptionsTrack(this.track)
            }, t
        }();
        e.a = n
    }, function(t, e, r) {
        "use strict";
        var n = r(26),
            i = r(5),
            a = function(t, e, r) {
                return t.substr(r || 0, e.length) === e
            },
            o = function(t) {
                for (var e = 5381, r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
                return (e >>> 0).toString()
            },
            s = {
                parse: function(t, e, r, s, u, c) {
                    var l = Object(i.b)(new Uint8Array(t)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
                        f = "00:00.000",
                        h = 0,
                        d = 0,
                        p = 0,
                        v = [],
                        y = void 0,
                        g = !0,
                        m = new n.a;
                    m.oncue = function(t) {
                        var e = r[s],
                            n = r.ccOffset;
                        e && e.new && (void 0 !== d ? n = r.ccOffset = e.start : function(t, e, r) {
                            var n = t[e],
                                i = t[n.prevCC];
                            if (!i || !i.new && n.new) return t.ccOffset = t.presentationOffset = n.start, void(n.new = !1);
                            for (; i && i.new;) t.ccOffset += n.start - i.start, n.new = !1, i = t[(n = i).prevCC];
                            t.presentationOffset = r
                        }(r, s, p)), p && (n = p + r.ccOffset - r.presentationOffset), t.startTime += n - d, t.endTime += n - d, t.id = o(t.startTime.toString()) + o(t.endTime.toString()) + o(t.text), t.text = decodeURIComponent(encodeURIComponent(t.text)), t.endTime > 0 && v.push(t)
                    }, m.onparsingerror = function(t) {
                        y = t
                    }, m.onflush = function() {
                        y && c ? c(y) : u(v)
                    }, l.forEach((function(t) {
                        if (g) {
                            if (a(t, "X-TIMESTAMP-MAP=")) {
                                g = !1, t.substr(16).split(",").forEach((function(t) {
                                    a(t, "LOCAL:") ? f = t.substr(6) : a(t, "MPEGTS:") && (h = parseInt(t.substr(7)))
                                }));
                                try {
                                    h -= e = e < 0 ? e + 8589934592 : e, d = function(t) {
                                        var e = parseInt(t.substr(-3)),
                                            r = parseInt(t.substr(-6, 2)),
                                            n = parseInt(t.substr(-9, 2)),
                                            i = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                                        return isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) ? -1 : (e += 1e3 * r, e += 6e4 * n, e += 36e5 * i)
                                    }(f) / 1e3, p = h / 9e4, -1 === d && (y = new Error("Malformed X-TIMESTAMP-MAP: " + t))
                                } catch (e) {
                                    y = new Error("Malformed X-TIMESTAMP-MAP: " + t)
                                }
                                return
                            }
                            "" === t && (g = !1)
                        }
                        m.parse(t + "\n")
                    })), m.flush()
                }
            };
        e.a = s
    }, function(t, e, r) {
        "use strict";

        function n(t) {
            for (var e = [], r = 0; r < t.length; r++) "subtitles" === t[r].kind && e.push(t[r]);
            return e
        }
        var i = r(1),
            a = r(3),
            o = r(0),
            s = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            u = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, i.a.MEDIA_ATTACHED, i.a.MEDIA_DETACHING, i.a.MANIFEST_LOADING, i.a.MANIFEST_LOADED, i.a.SUBTITLE_TRACK_LOADED));
                    return n.tracks = [], n.trackId = -1, n.media = void 0, n.subtitleDisplay = !1, n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype._onTextTracksChanged = function() {
                    if (this.media) {
                        for (var t = -1, e = n(this.media.textTracks), r = 0; r < e.length; r++)
                            if ("hidden" === e[r].mode) t = r;
                            else if ("showing" === e[r].mode) {
                            t = r;
                            break
                        }
                        this.subtitleTrack = t
                    }
                }, e.prototype.destroy = function() {
                    a.a.prototype.destroy.call(this)
                }, e.prototype.onMediaAttached = function(t) {
                    var e = this;
                    this.media = t.media, this.media && (void 0 !== this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval((function() {
                        e.trackChangeListener()
                    }), 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                }, e.prototype.onMediaDetaching = function() {
                    this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = void 0)
                }, e.prototype.onManifestLoading = function() {
                    this.tracks = [], this.trackId = -1
                }, e.prototype.onManifestLoaded = function(t) {
                    var e = this,
                        r = t.subtitles || [];
                    this.tracks = r, this.trackId = -1, this.hls.trigger(i.a.SUBTITLE_TRACKS_UPDATED, {
                        subtitleTracks: r
                    }), r.forEach((function(t) {
                        t.default && (e.media ? e.subtitleTrack = t.id : e.queuedDefaultTrack = t.id)
                    }))
                }, e.prototype.onTick = function() {
                    var t = this.trackId,
                        e = this.tracks[t];
                    if (e) {
                        var r = e.details;
                        void 0 !== r && !0 !== r.live || (o.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(i.a.SUBTITLE_TRACK_LOADING, {
                            url: e.url,
                            id: t
                        }))
                    }
                }, e.prototype.onSubtitleTrackLoaded = function(t) {
                    var e = this;
                    t.id < this.tracks.length && (o.b.log("subtitle track " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval((function() {
                        e.onTick()
                    }), 1e3 * t.details.targetduration, this)), !t.details.live && this.timer && (clearInterval(this.timer), this.timer = null))
                }, e.prototype.setSubtitleTrackInternal = function(t) {
                    if (!(t < -1 || t >= this.tracks.length)) {
                        this.timer && (clearInterval(this.timer), this.timer = null);
                        var e = n(this.media.textTracks);
                        if (-1 !== this.trackId && (e[this.trackId].mode = "disabled"), this.trackId = t, o.b.log("switching to subtitle track " + t), this.hls.trigger(i.a.SUBTITLE_TRACK_SWITCH, {
                                id: t
                            }), -1 !== t) {
                            var r = this.tracks[t];
                            t < e.length && (e[t].mode = this.subtitleDisplay ? "showing" : "hidden");
                            var a = r.details;
                            void 0 !== a && !0 !== a.live || (o.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(i.a.SUBTITLE_TRACK_LOADING, {
                                url: r.url,
                                id: t
                            }))
                        }
                    }
                }, s(e, [{
                    key: "subtitleTracks",
                    get: function() {
                        return this.tracks
                    }
                }, {
                    key: "subtitleTrack",
                    get: function() {
                        return this.trackId
                    },
                    set: function(t) {
                        this.trackId !== t && this.setSubtitleTrackInternal(t)
                    }
                }]), e
            }(a.a);
        e.a = u
    }, function(t, e, r) {
        "use strict";
        var n = r(1),
            i = r(0),
            a = r(9),
            o = r(13),
            s = {
                STOPPED: "STOPPED",
                IDLE: "IDLE",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING"
            },
            u = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, n.a.MEDIA_ATTACHED, n.a.ERROR, n.a.KEY_LOADED, n.a.FRAG_LOADED, n.a.SUBTITLE_TRACKS_UPDATED, n.a.SUBTITLE_TRACK_SWITCH, n.a.SUBTITLE_TRACK_LOADED, n.a.SUBTITLE_FRAG_PROCESSED));
                    return i.config = r.config, i.vttFragSNsProcessed = {}, i.vttFragQueues = void 0, i.currentlyProcessing = null, i.state = s.STOPPED, i.currentTrackId = -1, i.decrypter = new a.a(r.observer, r.config), i
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.onHandlerDestroyed = function() {
                    this.state = s.STOPPED
                }, e.prototype.clearVttFragQueues = function() {
                    var t = this;
                    this.vttFragQueues = {}, this.tracks.forEach((function(e) {
                        t.vttFragQueues[e.id] = []
                    }))
                }, e.prototype.nextFrag = function() {
                    if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
                        var t = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
                        this.fragCurrent = t, this.hls.trigger(n.a.FRAG_LOADING, {
                            frag: t
                        }), this.state = s.FRAG_LOADING
                    }
                }, e.prototype.onSubtitleFragProcessed = function(t) {
                    t.success && this.vttFragSNsProcessed[t.frag.trackId].push(t.frag.sn), this.currentlyProcessing = null, this.state = s.IDLE, this.nextFrag()
                }, e.prototype.onMediaAttached = function() {
                    this.state = s.IDLE
                }, e.prototype.onError = function(t) {
                    var e = t.frag;
                    e && "subtitle" !== e.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag())
                }, e.prototype.doTick = function() {
                    var t = this;
                    switch (this.state) {
                        case s.IDLE:
                            var e, r = this.tracks,
                                a = this.currentTrackId,
                                o = this.vttFragSNsProcessed[a],
                                u = this.vttFragQueues[a],
                                c = this.currentlyProcessing ? this.currentlyProcessing.sn : -1;
                            if (!r) break;
                            if (a < r.length && (e = r[a].details), void 0 === e) break;
                            e.fragments.forEach((function(e) {
                                (function(t) {
                                    return o.indexOf(t.sn) > -1
                                })(e) || e.sn === c || function(t) {
                                    return u.some((function(e) {
                                        return e.sn === t.sn
                                    }))
                                }(e) || (e.decryptdata && null != e.decryptdata.uri && null == e.decryptdata.key ? (i.b.log("Loading key for " + e.sn), t.state = s.KEY_LOADING, t.hls.trigger(n.a.KEY_LOADING, {
                                    frag: e
                                })) : (e.trackId = a, u.push(e), t.nextFrag()))
                            }))
                    }
                }, e.prototype.onSubtitleTracksUpdated = function(t) {
                    var e = this;
                    i.b.log("subtitle tracks updated"), this.tracks = t.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach((function(t) {
                        e.vttFragSNsProcessed[t.id] = []
                    }))
                }, e.prototype.onSubtitleTrackSwitch = function(t) {
                    this.currentTrackId = t.id, -1 !== this.currentTrackId && void 0 !== this.tracks[this.currentTrackId].details && this.tick()
                }, e.prototype.onSubtitleTrackLoaded = function() {
                    this.tick()
                }, e.prototype.onKeyLoaded = function() {
                    this.state === s.KEY_LOADING && (this.state = s.IDLE, this.tick())
                }, e.prototype.onFragLoaded = function(t) {
                    var e = this.fragCurrent,
                        r = t.frag.decryptdata,
                        i = t.frag,
                        a = this.hls;
                    if (this.state === s.FRAG_LOADING && e && "subtitle" === t.frag.type && e.sn === t.frag.sn && t.payload.byteLength > 0 && null != r && null != r.key && "AES-128" === r.method) {
                        var o = void 0;
                        try {
                            o = performance.now()
                        } catch (t) {
                            o = Date.now()
                        }
                        this.decrypter.decrypt(t.payload, r.key.buffer, r.iv.buffer, (function(t) {
                            var e = void 0;
                            try {
                                e = performance.now()
                            } catch (t) {
                                e = Date.now()
                            }
                            a.trigger(n.a.FRAG_DECRYPTED, {
                                frag: i,
                                payload: t,
                                stats: {
                                    tstart: o,
                                    tdecrypt: e
                                }
                            })
                        }))
                    }
                }, e
            }(o.a);
        e.a = u
    }, function(t, e, r) {
        "use strict";
        var n = r(3),
            i = r(1),
            a = r(2),
            o = r(0),
            s = function() {
                function t(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, r, n) {
                    return r && t(e.prototype, r), n && t(e, n), e
                }
            }(),
            u = "com.widevine.alpha",
            c = "com.microsoft.playready",
            l = function(t) {
                function e(r) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, r, i.a.MEDIA_ATTACHED, i.a.MANIFEST_PARSED));
                    return n._widevineLicenseUrl = r.config.widevineLicenseUrl, n._licenseXhrSetup = r.config.licenseXhrSetup, n._emeEnabled = r.config.emeEnabled, n._requestMediaKeySystemAccess = r.config.requestMediaKeySystemAccessFunc, n._mediaKeysList = [], n._media = null, n._hasSetMediaKeys = !1, n._isMediaEncrypted = !1, n._requestLicenseFailureCount = 0, n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.getLicenseServerUrl = function(t) {
                    var e = void 0;
                    switch (t) {
                        case u:
                            e = this._widevineLicenseUrl;
                            break;
                        default:
                            e = null
                    }
                    return e || (o.b.error('No license server URL configured for key-system "' + t + '"'), this.hls.trigger(i.a.ERROR, {
                        type: a.b.KEY_SYSTEM_ERROR,
                        details: a.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0
                    })), e
                }, e.prototype._attemptKeySystemAccess = function(t, e, r) {
                    var n = this,
                        i = function(t, e, r) {
                            switch (t) {
                                case u:
                                    return function(t, e, r) {
                                        var n = {
                                            videoCapabilities: []
                                        };
                                        return e.forEach((function(t) {
                                            n.videoCapabilities.push({
                                                contentType: 'video/mp4; codecs="' + t + '"'
                                            })
                                        })), [n]
                                    }(0, r);
                                default:
                                    throw Error("Unknown key-system: " + t)
                            }
                        }(t, 0, r);
                    i ? (o.b.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(t, i).then((function(e) {
                        n._onMediaKeySystemAccessObtained(t, e)
                    })).catch((function(e) {
                        o.b.error('Failed to obtain key-system "' + t + '" access:', e)
                    }))) : o.b.warn("Can not create config for key-system (maybe because platform is not supported):", t)
                }, e.prototype._onMediaKeySystemAccessObtained = function(t, e) {
                    var r = this;
                    o.b.log('Access for key-system "' + t + '" obtained');
                    var n = {
                        mediaKeys: null,
                        mediaKeysSession: null,
                        mediaKeysSessionInitialized: !1,
                        mediaKeySystemAccess: e,
                        mediaKeySystemDomain: t
                    };
                    this._mediaKeysList.push(n), e.createMediaKeys().then((function(e) {
                        n.mediaKeys = e, o.b.log('Media-keys created for key-system "' + t + '"'), r._onMediaKeysCreated()
                    })).catch((function(t) {
                        o.b.error("Failed to create media-keys:", t)
                    }))
                }, e.prototype._onMediaKeysCreated = function() {
                    var t = this;
                    this._mediaKeysList.forEach((function(e) {
                        e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
                    }))
                }, e.prototype._onNewMediaKeySession = function(t) {
                    var e = this;
                    o.b.log("New key-system session " + t.sessionId), t.addEventListener("message", (function(r) {
                        e._onKeySessionMessage(t, r.message)
                    }), !1)
                }, e.prototype._onKeySessionMessage = function(t, e) {
                    o.b.log("Got EME message event, creating license request"), this._requestLicense(e, (function(e) {
                        o.b.log("Received license data, updating key-session"), t.update(e)
                    }))
                }, e.prototype._onMediaEncrypted = function(t, e) {
                    o.b.log('Media is encrypted using "' + t + '" init data type'), this._isMediaEncrypted = !0, this._mediaEncryptionInitDataType = t, this._mediaEncryptionInitData = e, this._attemptSetMediaKeys(), this._generateRequestWithPreferredKeySession()
                }, e.prototype._attemptSetMediaKeys = function() {
                    if (!this._hasSetMediaKeys) {
                        var t = this._mediaKeysList[0];
                        if (!t || !t.mediaKeys) return o.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(i.a.ERROR, {
                            type: a.b.KEY_SYSTEM_ERROR,
                            details: a.a.KEY_SYSTEM_NO_KEYS,
                            fatal: !0
                        });
                        o.b.log("Setting keys for encrypted media"), this._media.setMediaKeys(t.mediaKeys), this._hasSetMediaKeys = !0
                    }
                }, e.prototype._generateRequestWithPreferredKeySession = function() {
                    var t = this,
                        e = this._mediaKeysList[0];
                    if (!e) return o.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(i.a.ERROR, {
                        type: a.b.KEY_SYSTEM_ERROR,
                        details: a.a.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                    if (e.mediaKeysSessionInitialized) o.b.warn("Key-Session already initialized but requested again");
                    else {
                        var r = e.mediaKeysSession;
                        r || (o.b.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(i.a.ERROR, {
                            type: a.b.KEY_SYSTEM_ERROR,
                            details: a.a.KEY_SYSTEM_NO_SESSION,
                            fatal: !0
                        }));
                        var n = this._mediaEncryptionInitDataType,
                            s = this._mediaEncryptionInitData;
                        o.b.log('Generating key-session request for "' + n + '" init data type'), e.mediaKeysSessionInitialized = !0, r.generateRequest(n, s).then((function() {
                            o.b.debug("Key-session generation succeeded")
                        })).catch((function(e) {
                            o.b.error("Error generating key-session request:", e), t.hls.trigger(i.a.ERROR, {
                                type: a.b.KEY_SYSTEM_ERROR,
                                details: a.a.KEY_SYSTEM_NO_SESSION,
                                fatal: !1
                            })
                        }))
                    }
                }, e.prototype._createLicenseXhr = function(t, e, r) {
                    var n = new XMLHttpRequest,
                        s = this._licenseXhrSetup;
                    try {
                        if (s) try {
                            s(n, t)
                        } catch (e) {
                            n.open("POST", t, !0), s(n, t)
                        }
                        n.readyState || n.open("POST", t, !0)
                    } catch (t) {
                        return o.b.error("Error setting up key-system license XHR", t), void this.hls.trigger(i.a.ERROR, {
                            type: a.b.KEY_SYSTEM_ERROR,
                            details: a.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0
                        })
                    }
                    return n.responseType = "arraybuffer", n.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, n, t, e, r), n
                }, e.prototype._onLicenseRequestReadyStageChange = function(t, e, r, n) {
                    switch (t.readyState) {
                        case 4:
                            if (200 === t.status) this._requestLicenseFailureCount = 0, o.b.log("License request succeeded"), n(t.response);
                            else {
                                if (o.b.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), ++this._requestLicenseFailureCount <= 3) {
                                    var s = 3 - this._requestLicenseFailureCount + 1;
                                    return o.b.warn("Retrying license request, " + s + " attempts left"), void this._requestLicense(r, n)
                                }
                                this.hls.trigger(i.a.ERROR, {
                                    type: a.b.KEY_SYSTEM_ERROR,
                                    details: a.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                    fatal: !0
                                })
                            }
                    }
                }, e.prototype._generateLicenseRequestChallenge = function(t, e) {
                    var r = void 0;
                    return t.mediaKeySystemDomain === c ? o.b.error("PlayReady is not supported (yet)") : t.mediaKeySystemDomain === u ? r = e : o.b.error("Unsupported key-system:", t.mediaKeySystemDomain), r
                }, e.prototype._requestLicense = function(t, e) {
                    o.b.log("Requesting content license for key-system");
                    var r = this._mediaKeysList[0];
                    if (!r) return o.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(i.a.ERROR, {
                        type: a.b.KEY_SYSTEM_ERROR,
                        details: a.a.KEY_SYSTEM_NO_ACCESS,
                        fatal: !0
                    });
                    var n = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                        s = this._createLicenseXhr(n, t, e);
                    o.b.log("Sending license request to URL: " + n), s.send(this._generateLicenseRequestChallenge(r, t))
                }, e.prototype.onMediaAttached = function(t) {
                    var e = this;
                    if (this._emeEnabled) {
                        var r = t.media;
                        this._media = r, r.addEventListener("encrypted", (function(t) {
                            e._onMediaEncrypted(t.initDataType, t.initData)
                        }))
                    }
                }, e.prototype.onManifestParsed = function(t) {
                    if (this._emeEnabled) {
                        var e = t.levels.map((function(t) {
                                return t.audioCodec
                            })),
                            r = t.levels.map((function(t) {
                                return t.videoCodec
                            }));
                        this._attemptKeySystemAccess(u, e, r)
                    }
                }, s(e, [{
                    key: "requestMediaKeySystemAccess",
                    get: function() {
                        if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                        return this._requestMediaKeySystemAccess
                    }
                }]), e
            }(n.a);
        e.a = l
    }, function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return n
        }));
        var n = window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null
    }, function(t, e) {
        /*! http://mths.be/endswith v0.2.0 by @mathias */
        String.prototype.endsWith || function() {
            "use strict";
            var t = function() {
                    try {
                        var t = {},
                            e = Object.defineProperty,
                            r = e(t, t, t) && e
                    } catch (t) {}
                    return r
                }(),
                e = {}.toString,
                r = function(t) {
                    if (null == this) throw TypeError();
                    var r = String(this);
                    if (t && "[object RegExp]" == e.call(t)) throw TypeError();
                    var n = r.length,
                        i = String(t),
                        a = i.length,
                        o = n;
                    if (arguments.length > 1) {
                        var s = arguments[1];
                        void 0 !== s && (o = s ? Number(s) : 0) != o && (o = 0)
                    }
                    var u = Math.min(Math.max(o, 0), n),
                        c = u - a;
                    if (c < 0) return !1;
                    for (var l = -1; ++l < a;)
                        if (r.charCodeAt(c + l) != i.charCodeAt(l)) return !1;
                    return !0
                };
            t ? t(String.prototype, "endsWith", {
                value: r,
                configurable: !0,
                writable: !0
            }) : String.prototype.endsWith = r
        }()
    }]).default
}, function(t, e, r) {
    var n, i, a, o, s, u, c, l, f, h, d, p, v, y, g, m, b, E, _, S, T, A;
    /**
     * isMobile.js v0.4.1
     *
     * A simple library to detect Apple phones and tablets,
     * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
     * and any kind of seven inch device, via user agent sniffing.
     *
     * @author: Kai Mallea (kmallea@gmail.com)
     *
     * @license: http://creativecommons.org/publicdomain/zero/1.0/
     */
    o = this, s = /iPhone/i, u = /iPod/i, c = /iPad/i, l = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, f = /Android/i, h = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, d = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, p = /Windows Phone/i, v = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, y = /BlackBerry/i, g = /BB10/i, m = /Opera Mini/i, b = /(CriOS|Chrome)(?=.*\bMobile\b)/i, E = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, _ = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), S = function(t, e) {
        return t.test(e)
    }, T = function(t) {
        var e = t || navigator.userAgent,
            r = e.split("[FBAN");
        if (void 0 !== r[1] && (e = r[0]), void 0 !== (r = e.split("Twitter"))[1] && (e = r[0]), this.apple = {
                phone: S(s, e),
                ipod: S(u, e),
                tablet: !S(s, e) && S(c, e),
                device: S(s, e) || S(u, e) || S(c, e)
            }, this.amazon = {
                phone: S(h, e),
                tablet: !S(h, e) && S(d, e),
                device: S(h, e) || S(d, e)
            }, this.android = {
                phone: S(h, e) || S(l, e),
                tablet: !S(h, e) && !S(l, e) && (S(d, e) || S(f, e)),
                device: S(h, e) || S(d, e) || S(l, e) || S(f, e)
            }, this.windows = {
                phone: S(p, e),
                tablet: S(v, e),
                device: S(p, e) || S(v, e)
            }, this.other = {
                blackberry: S(y, e),
                blackberry10: S(g, e),
                opera: S(m, e),
                firefox: S(E, e),
                chrome: S(b, e),
                device: S(y, e) || S(g, e) || S(m, e) || S(E, e) || S(b, e)
            }, this.seven_inch = S(_, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
    }, A = function() {
        var t = new T;
        return t.Class = T, t
    }, t.exports && "undefined" == typeof window ? t.exports = T : t.exports && "undefined" != typeof window ? t.exports = A() : (i = [], n = o.isMobile = A(), void 0 === (a = "function" == typeof n ? n.apply(e, i) : n) || (t.exports = a))
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t) {
            this._options = t
        }
        return Object.defineProperty(t.prototype, "areaId", {
            set: function(t) {
                this._areaId = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "stationId", {
            set: function(t) {
                this._stationId = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "playlistType", {
            set: function(t) {
                this._playlistType = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "connectionType", {
            get: function() {
                return 0 === this.allocateConnection() ? "b" : "c"
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.allocateConnection = function() {
            return this.containStation(this._areaId, this._stationId) || !this.isAreaFree() ? 0 : 1
        }, t.prototype.extractEndpoints = function(response_xml) {
            var e = this.allocateConnection(),
                playlist_create_url = Array.from(response_xml.getElementsByTagName("url")).filter(this.filterByPlaylistType(this._playlistType)).filter(this.filterByConnectionType(e)).map((function(t) {
                    return t.querySelector("playlist_create_url").textContent || ""
                }));
            if (0 === playlist_create_url.length) throw "not found playlist_create_url";
            return playlist_create_url
        }, t.prototype.filterByPlaylistType = function(t) {
            return function(e) {
                var r = e.getAttribute("timefree");
                return null !== r && +r === t
            }
        }, t.prototype.filterByConnectionType = function(t) {
            return function(e) {
                var r = e.getAttribute("areafree");
                return null !== r && +r === t
            }
        }, t.prototype.isAreaFree = function() {
            return !(!this._options || !this._options.isAreaFree) && this._options.isAreaFree()
        }, t.prototype.containStation = function(t, e) {
            return !(!this._options || !this._options.containStation) && this._options.containStation(t, e)
        }, t
    }();
    e.PlaylistManager = n
}, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function() {
        function t(t) {
            this.urls = t, this.pointer = 0
        }
        return t.prototype.next = function() {
            return this.pointer < this.urls.length ? {
                done: !1,
                value: this.urls[this.pointer++]
            } : {
                done: !0,
                value: ""
            }
        }, t
    }();
    e.default = n
}]);
//# sourceMappingURL=radiko-js-player.min.js.map