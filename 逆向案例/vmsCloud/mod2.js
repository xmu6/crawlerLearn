(self.webpackChunkvms = self.webpackChunkvms || []).push([[4546], {
    69282: function(t, e, r) {
        "use strict";
        var n = r(34155)
          , o = r(25108);
        function a(t) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            a(t)
        }
        var i, c, s = r(62136).codes, u = s.ERR_AMBIGUOUS_ARGUMENT, l = s.ERR_INVALID_ARG_TYPE, f = s.ERR_INVALID_ARG_VALUE, p = s.ERR_INVALID_RETURN_VALUE, y = s.ERR_MISSING_ARGS, d = r(25961), g = r(89539).inspect, h = r(89539).types, b = h.isPromise, m = h.isRegExp, v = Object.assign ? Object.assign : r(8091).assign, w = Object.is ? Object.is : r(20609);
        new Map;
        function S() {
            var t = r(19158);
            i = t.isDeepEqual,
            c = t.isDeepStrictEqual
        }
        var E = !1
          , _ = t.exports = j
          , A = {};
        function B(t) {
            if (t.message instanceof Error)
                throw t.message;
            throw new d(t)
        }
        function O(t, e, r, n) {
            if (!r) {
                var o = !1;
                if (0 === e)
                    o = !0,
                    n = "No value argument passed to `assert.ok()`";
                else if (n instanceof Error)
                    throw n;
                var a = new d({
                    actual: r,
                    expected: !0,
                    message: n,
                    operator: "==",
                    stackStartFn: t
                });
                throw a.generatedMessage = o,
                a
            }
        }
        function j() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            O.apply(void 0, [j, e.length].concat(e))
        }
        _.fail = function t(e, r, a, i, c) {
            var s, u = arguments.length;
            if (0 === u)
                s = "Failed";
            else if (1 === u)
                a = e,
                e = void 0;
            else {
                if (!1 === E)
                    E = !0,
                    (n.emitWarning ? n.emitWarning : o.warn.bind(o))("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
                2 === u && (i = "!=")
            }
            if (a instanceof Error)
                throw a;
            var l = {
                actual: e,
                expected: r,
                operator: void 0 === i ? "fail" : i,
                stackStartFn: c || t
            };
            void 0 !== a && (l.message = a);
            var f = new d(l);
            throw s && (f.message = s,
            f.generatedMessage = !0),
            f
        }
        ,
        _.AssertionError = d,
        _.ok = j,
        _.equal = function t(e, r, n) {
            if (arguments.length < 2)
                throw new y("actual","expected");
            e != r && B({
                actual: e,
                expected: r,
                message: n,
                operator: "==",
                stackStartFn: t
            })
        }
        ,
        _.notEqual = function t(e, r, n) {
            if (arguments.length < 2)
                throw new y("actual","expected");
            e == r && B({
                actual: e,
                expected: r,
                message: n,
                operator: "!=",
                stackStartFn: t
            })
        }
        ,
        _.deepEqual = function t(e, r, n) {
            if (arguments.length < 2)
                throw new y("actual","expected");
            void 0 === i && S(),
            i(e, r) || B({
                actual: e,
                expected: r,
                message: n,
                operator: "deepEqual",
                stackStartFn: t
            })
        }
        ,
        _.notDeepEqual = function t(e, r, n) {
            if (arguments.length < 2)
                throw new y("actual","expected");
            void 0 === i && S(),
            i(e, r) && B({
                actual: e,
                expected: r,
                message: n,
                operator: "notDeepEqual",
                stackStartFn: t
            })
        }
        ,
        _.deepStrictEqual = function t(e, r, n) {
            if (arguments.length < 2)
                throw new y("actual","expected");
            void 0 === i && S(),
            c(e, r) || B({
                actual: e,
                expected: r,
                message: n,
                operator: "deepStrictEqual",
                stackStartFn: t
            })
        }
        ,
        _.notDeepStrictEqual = function t(e, r, n) {
            if (arguments.length < 2)
                throw new y("actual","expected");
            void 0 === i && S();
            c(e, r) && B({
                actual: e,
                expected: r,
                message: n,
                operator: "notDeepStrictEqual",
                stackStartFn: t
            })
        }
        ,
        _.strictEqual = function t(e, r, n) {
            if (arguments.length < 2)
                throw new y("actual","expected");
            w(e, r) || B({
                actual: e,
                expected: r,
                message: n,
                operator: "strictEqual",
                stackStartFn: t
            })
        }
        ,
        _.notStrictEqual = function t(e, r, n) {
            if (arguments.length < 2)
                throw new y("actual","expected");
            w(e, r) && B({
                actual: e,
                expected: r,
                message: n,
                operator: "notStrictEqual",
                stackStartFn: t
            })
        }
        ;
        var x = function t(e, r, n) {
            var o = this;
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            r.forEach((function(t) {
                t in e && (void 0 !== n && "string" == typeof n[t] && m(e[t]) && e[t].test(n[t]) ? o[t] = n[t] : o[t] = e[t])
            }
            ))
        };
        function P(t, e, r, n) {
            if ("function" != typeof e) {
                if (m(e))
                    return e.test(t);
                if (2 === arguments.length)
                    throw new l("expected",["Function", "RegExp"],e);
                if ("object" !== a(t) || null === t) {
                    var o = new d({
                        actual: t,
                        expected: e,
                        message: r,
                        operator: "deepStrictEqual",
                        stackStartFn: n
                    });
                    throw o.operator = n.name,
                    o
                }
                var s = Object.keys(e);
                if (e instanceof Error)
                    s.push("name", "message");
                else if (0 === s.length)
                    throw new f("error",e,"may not be an empty object");
                return void 0 === i && S(),
                s.forEach((function(o) {
                    "string" == typeof t[o] && m(e[o]) && e[o].test(t[o]) || function(t, e, r, n, o, a) {
                        if (!(r in t) || !c(t[r], e[r])) {
                            if (!n) {
                                var i = new x(t,o)
                                  , s = new x(e,o,t)
                                  , u = new d({
                                    actual: i,
                                    expected: s,
                                    operator: "deepStrictEqual",
                                    stackStartFn: a
                                });
                                throw u.actual = t,
                                u.expected = e,
                                u.operator = a.name,
                                u
                            }
                            B({
                                actual: t,
                                expected: e,
                                message: n,
                                operator: a.name,
                                stackStartFn: a
                            })
                        }
                    }(t, e, o, r, s, n)
                }
                )),
                !0
            }
            return void 0 !== e.prototype && t instanceof e || !Error.isPrototypeOf(e) && !0 === e.call({}, t)
        }
        function U(t) {
            if ("function" != typeof t)
                throw new l("fn","Function",t);
            try {
                t()
            } catch (t) {
                return t
            }
            return A
        }
        function k(t) {
            return b(t) || null !== t && "object" === a(t) && "function" == typeof t.then && "function" == typeof t.catch
        }
        function T(t) {
            return Promise.resolve().then((function() {
                var e;
                if ("function" == typeof t) {
                    if (!k(e = t()))
                        throw new p("instance of Promise","promiseFn",e)
                } else {
                    if (!k(t))
                        throw new l("promiseFn",["Function", "Promise"],t);
                    e = t
                }
                return Promise.resolve().then((function() {
                    return e
                }
                )).then((function() {
                    return A
                }
                )).catch((function(t) {
                    return t
                }
                ))
            }
            ))
        }
        function R(t, e, r, n) {
            if ("string" == typeof r) {
                if (4 === arguments.length)
                    throw new l("error",["Object", "Error", "Function", "RegExp"],r);
                if ("object" === a(e) && null !== e) {
                    if (e.message === r)
                        throw new u("error/message",'The error message "'.concat(e.message, '" is identical to the message.'))
                } else if (e === r)
                    throw new u("error/message",'The error "'.concat(e, '" is identical to the message.'));
                n = r,
                r = void 0
            } else if (null != r && "object" !== a(r) && "function" != typeof r)
                throw new l("error",["Object", "Error", "Function", "RegExp"],r);
            if (e === A) {
                var o = "";
                r && r.name && (o += " (".concat(r.name, ")")),
                o += n ? ": ".concat(n) : ".";
                var i = "rejects" === t.name ? "rejection" : "exception";
                B({
                    actual: void 0,
                    expected: r,
                    operator: t.name,
                    message: "Missing expected ".concat(i).concat(o),
                    stackStartFn: t
                })
            }
            if (r && !P(e, r, n, t))
                throw e
        }
        function I(t, e, r, n) {
            if (e !== A) {
                if ("string" == typeof r && (n = r,
                r = void 0),
                !r || P(e, r)) {
                    var o = n ? ": ".concat(n) : "."
                      , a = "doesNotReject" === t.name ? "rejection" : "exception";
                    B({
                        actual: e,
                        expected: r,
                        operator: t.name,
                        message: "Got unwanted ".concat(a).concat(o, "\n") + 'Actual message: "'.concat(e && e.message, '"'),
                        stackStartFn: t
                    })
                }
                throw e
            }
        }
        function F() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            O.apply(void 0, [F, e.length].concat(e))
        }
        _.throws = function t(e) {
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                n[o - 1] = arguments[o];
            R.apply(void 0, [t, U(e)].concat(n))
        }
        ,
        _.rejects = function t(e) {
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                n[o - 1] = arguments[o];
            return T(e).then((function(e) {
                return R.apply(void 0, [t, e].concat(n))
            }
            ))
        }
        ,
        _.doesNotThrow = function t(e) {
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                n[o - 1] = arguments[o];
            I.apply(void 0, [t, U(e)].concat(n))
        }
        ,
        _.doesNotReject = function t(e) {
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                n[o - 1] = arguments[o];
            return T(e).then((function(e) {
                return I.apply(void 0, [t, e].concat(n))
            }
            ))
        }
        ,
        _.ifError = function t(e) {
            if (null != e) {
                var r = "ifError got unwanted exception: ";
                "object" === a(e) && "string" == typeof e.message ? 0 === e.message.length && e.constructor ? r += e.constructor.name : r += e.message : r += g(e);
                var n = new d({
                    actual: e,
                    expected: null,
                    operator: "ifError",
                    message: r,
                    stackStartFn: t
                })
                  , o = e.stack;
                if ("string" == typeof o) {
                    var i = o.split("\n");
                    i.shift();
                    for (var c = n.stack.split("\n"), s = 0; s < i.length; s++) {
                        var u = c.indexOf(i[s]);
                        if (-1 !== u) {
                            c = c.slice(0, u);
                            break
                        }
                    }
                    n.stack = "".concat(c.join("\n"), "\n").concat(i.join("\n"))
                }
                throw n
            }
        }
        ,
        _.strict = v(F, _, {
            equal: _.strictEqual,
            deepEqual: _.deepStrictEqual,
            notEqual: _.notStrictEqual,
            notDeepEqual: _.notDeepStrictEqual
        }),
        _.strict.strict = _.strict
    },
    25961: function(t, e, r) {
        "use strict";
        var n = r(34155);
        function o(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function a(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function i(t, e) {
            return !e || "object" !== p(e) && "function" != typeof e ? c(t) : e
        }
        function c(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function s(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return s = function(t) {
                if (null === t || (r = t,
                -1 === Function.toString.call(r).indexOf("[native code]")))
                    return t;
                var r;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, n)
                }
                function n() {
                    return u(t, arguments, f(this).constructor)
                }
                return n.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                l(n, t)
            }
            ,
            s(t)
        }
        function u(t, e, r) {
            return u = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }() ? Reflect.construct : function(t, e, r) {
                var n = [null];
                n.push.apply(n, e);
                var o = new (Function.bind.apply(t, n));
                return r && l(o, r.prototype),
                o
            }
            ,
            u.apply(null, arguments)
        }
        function l(t, e) {
            return l = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            l(t, e)
        }
        function f(t) {
            return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            f(t)
        }
        function p(t) {
            return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            p(t)
        }
        var y = r(89539).inspect
          , d = r(62136).codes.ERR_INVALID_ARG_TYPE;
        function g(t, e, r) {
            return (void 0 === r || r > t.length) && (r = t.length),
            t.substring(r - e.length, r) === e
        }
        var h = ""
          , b = ""
          , m = ""
          , v = ""
          , w = {
            deepStrictEqual: "Expected values to be strictly deep-equal:",
            strictEqual: "Expected values to be strictly equal:",
            strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
            deepEqual: "Expected values to be loosely deep-equal:",
            equal: "Expected values to be loosely equal:",
            notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
            notStrictEqual: 'Expected "actual" to be strictly unequal to:',
            notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
            notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
            notEqual: 'Expected "actual" to be loosely unequal to:',
            notIdentical: "Values identical but not reference-equal:"
        };
        function S(t) {
            var e = Object.keys(t)
              , r = Object.create(Object.getPrototypeOf(t));
            return e.forEach((function(e) {
                r[e] = t[e]
            }
            )),
            Object.defineProperty(r, "message", {
                value: t.message
            }),
            r
        }
        function E(t) {
            return y(t, {
                compact: !1,
                customInspect: !1,
                depth: 1e3,
                maxArrayLength: 1 / 0,
                showHidden: !1,
                breakLength: 1 / 0,
                showProxy: !1,
                sorted: !0,
                getters: !0
            })
        }
        function _(t, e, r) {
            var o = ""
              , a = ""
              , i = 0
              , c = ""
              , s = !1
              , u = E(t)
              , l = u.split("\n")
              , f = E(e).split("\n")
              , y = 0
              , d = "";
            if ("strictEqual" === r && "object" === p(t) && "object" === p(e) && null !== t && null !== e && (r = "strictEqualObject"),
            1 === l.length && 1 === f.length && l[0] !== f[0]) {
                var S = l[0].length + f[0].length;
                if (S <= 10) {
                    if (!("object" === p(t) && null !== t || "object" === p(e) && null !== e || 0 === t && 0 === e))
                        return "".concat(w[r], "\n\n") + "".concat(l[0], " !== ").concat(f[0], "\n")
                } else if ("strictEqualObject" !== r) {
                    if (S < (n.stderr && n.stderr.isTTY ? n.stderr.columns : 80)) {
                        for (; l[0][y] === f[0][y]; )
                            y++;
                        y > 2 && (d = "\n  ".concat(function(t, e) {
                            if (e = Math.floor(e),
                            0 == t.length || 0 == e)
                                return "";
                            var r = t.length * e;
                            for (e = Math.floor(Math.log(e) / Math.log(2)); e; )
                                t += t,
                                e--;
                            return t + t.substring(0, r - t.length)
                        }(" ", y), "^"),
                        y = 0)
                    }
                }
            }
            for (var _ = l[l.length - 1], A = f[f.length - 1]; _ === A && (y++ < 2 ? c = "\n  ".concat(_).concat(c) : o = _,
            l.pop(),
            f.pop(),
            0 !== l.length && 0 !== f.length); )
                _ = l[l.length - 1],
                A = f[f.length - 1];
            var B = Math.max(l.length, f.length);
            if (0 === B) {
                var O = u.split("\n");
                if (O.length > 30)
                    for (O[26] = "".concat(h, "...").concat(v); O.length > 27; )
                        O.pop();
                return "".concat(w.notIdentical, "\n\n").concat(O.join("\n"), "\n")
            }
            y > 3 && (c = "\n".concat(h, "...").concat(v).concat(c),
            s = !0),
            "" !== o && (c = "\n  ".concat(o).concat(c),
            o = "");
            var j = 0
              , x = w[r] + "\n".concat(b, "+ actual").concat(v, " ").concat(m, "- expected").concat(v)
              , P = " ".concat(h, "...").concat(v, " Lines skipped");
            for (y = 0; y < B; y++) {
                var U = y - i;
                if (l.length < y + 1)
                    U > 1 && y > 2 && (U > 4 ? (a += "\n".concat(h, "...").concat(v),
                    s = !0) : U > 3 && (a += "\n  ".concat(f[y - 2]),
                    j++),
                    a += "\n  ".concat(f[y - 1]),
                    j++),
                    i = y,
                    o += "\n".concat(m, "-").concat(v, " ").concat(f[y]),
                    j++;
                else if (f.length < y + 1)
                    U > 1 && y > 2 && (U > 4 ? (a += "\n".concat(h, "...").concat(v),
                    s = !0) : U > 3 && (a += "\n  ".concat(l[y - 2]),
                    j++),
                    a += "\n  ".concat(l[y - 1]),
                    j++),
                    i = y,
                    a += "\n".concat(b, "+").concat(v, " ").concat(l[y]),
                    j++;
                else {
                    var k = f[y]
                      , T = l[y]
                      , R = T !== k && (!g(T, ",") || T.slice(0, -1) !== k);
                    R && g(k, ",") && k.slice(0, -1) === T && (R = !1,
                    T += ","),
                    R ? (U > 1 && y > 2 && (U > 4 ? (a += "\n".concat(h, "...").concat(v),
                    s = !0) : U > 3 && (a += "\n  ".concat(l[y - 2]),
                    j++),
                    a += "\n  ".concat(l[y - 1]),
                    j++),
                    i = y,
                    a += "\n".concat(b, "+").concat(v, " ").concat(T),
                    o += "\n".concat(m, "-").concat(v, " ").concat(k),
                    j += 2) : (a += o,
                    o = "",
                    1 !== U && 0 !== y || (a += "\n  ".concat(T),
                    j++))
                }
                if (j > 20 && y < B - 2)
                    return "".concat(x).concat(P, "\n").concat(a, "\n").concat(h, "...").concat(v).concat(o, "\n") + "".concat(h, "...").concat(v)
            }
            return "".concat(x).concat(s ? P : "", "\n").concat(a).concat(o).concat(c).concat(d)
        }
        var A = function(t) {
            function e(t) {
                var r;
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                "object" !== p(t) || null === t)
                    throw new d("options","Object",t);
                var o = t.message
                  , a = t.operator
                  , s = t.stackStartFn
                  , u = t.actual
                  , l = t.expected
                  , y = Error.stackTraceLimit;
                if (Error.stackTraceLimit = 0,
                null != o)
                    r = i(this, f(e).call(this, String(o)));
                else if (n.stderr && n.stderr.isTTY && (n.stderr && n.stderr.getColorDepth && 1 !== n.stderr.getColorDepth() ? (h = "[34m",
                b = "[32m",
                v = "[39m",
                m = "[31m") : (h = "",
                b = "",
                v = "",
                m = "")),
                "object" === p(u) && null !== u && "object" === p(l) && null !== l && "stack"in u && u instanceof Error && "stack"in l && l instanceof Error && (u = S(u),
                l = S(l)),
                "deepStrictEqual" === a || "strictEqual" === a)
                    r = i(this, f(e).call(this, _(u, l, a)));
                else if ("notDeepStrictEqual" === a || "notStrictEqual" === a) {
                    var g = w[a]
                      , A = E(u).split("\n");
                    if ("notStrictEqual" === a && "object" === p(u) && null !== u && (g = w.notStrictEqualObject),
                    A.length > 30)
                        for (A[26] = "".concat(h, "...").concat(v); A.length > 27; )
                            A.pop();
                    r = 1 === A.length ? i(this, f(e).call(this, "".concat(g, " ").concat(A[0]))) : i(this, f(e).call(this, "".concat(g, "\n\n").concat(A.join("\n"), "\n")))
                } else {
                    var B = E(u)
                      , O = ""
                      , j = w[a];
                    "notDeepEqual" === a || "notEqual" === a ? (B = "".concat(w[a], "\n\n").concat(B)).length > 1024 && (B = "".concat(B.slice(0, 1021), "...")) : (O = "".concat(E(l)),
                    B.length > 512 && (B = "".concat(B.slice(0, 509), "...")),
                    O.length > 512 && (O = "".concat(O.slice(0, 509), "...")),
                    "deepEqual" === a || "equal" === a ? B = "".concat(j, "\n\n").concat(B, "\n\nshould equal\n\n") : O = " ".concat(a, " ").concat(O)),
                    r = i(this, f(e).call(this, "".concat(B).concat(O)))
                }
                return Error.stackTraceLimit = y,
                r.generatedMessage = !o,
                Object.defineProperty(c(r), "name", {
                    value: "AssertionError [ERR_ASSERTION]",
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }),
                r.code = "ERR_ASSERTION",
                r.actual = u,
                r.expected = l,
                r.operator = a,
                Error.captureStackTrace && Error.captureStackTrace(c(r), s),
                r.stack,
                r.name = "AssertionError",
                i(r)
            }
            var r, s, u;
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && l(t, e)
            }(e, t),
            r = e,
            s = [{
                key: "toString",
                value: function() {
                    return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
                }
            }, {
                key: y.custom,
                value: function(t, e) {
                    return y(this, function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {}
                              , n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(r, t).enumerable
                            }
                            )))),
                            n.forEach((function(e) {
                                o(t, e, r[e])
                            }
                            ))
                        }
                        return t
                    }({}, e, {
                        customInspect: !1,
                        depth: 0
                    }))
                }
            }],
            s && a(r.prototype, s),
            u && a(r, u),
            e
        }(s(Error));
        t.exports = A
    },
    62136: function(t, e, r) {
        "use strict";
        function n(t) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            n(t)
        }
        function o(t, e) {
            return !e || "object" !== n(e) && "function" != typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function a(t) {
            return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            a(t)
        }
        function i(t, e) {
            return i = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            i(t, e)
        }
        var c, s, u = {};
        function l(t, e, r) {
            r || (r = Error);
            var n = function(r) {
                function n(r, i, c) {
                    var s;
                    return function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, n),
                    s = o(this, a(n).call(this, function(t, r, n) {
                        return "string" == typeof e ? e : e(t, r, n)
                    }(r, i, c))),
                    s.code = t,
                    s
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    e && i(t, e)
                }(n, r),
                n
            }(r);
            u[t] = n
        }
        function f(t, e) {
            if (Array.isArray(t)) {
                var r = t.length;
                return t = t.map((function(t) {
                    return String(t)
                }
                )),
                r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : 2 === r ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
            }
            return "of ".concat(e, " ").concat(String(t))
        }
        l("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError),
        l("ERR_INVALID_ARG_TYPE", (function(t, e, o) {
            var a, i, s, u;
            if (void 0 === c && (c = r(69282)),
            c("string" == typeof t, "'name' must be a string"),
            "string" == typeof e && (i = "not ",
            e.substr(!s || s < 0 ? 0 : +s, i.length) === i) ? (a = "must not be",
            e = e.replace(/^not /, "")) : a = "must be",
            function(t, e, r) {
                return (void 0 === r || r > t.length) && (r = t.length),
                t.substring(r - e.length, r) === e
            }(t, " argument"))
                u = "The ".concat(t, " ").concat(a, " ").concat(f(e, "type"));
            else {
                var l = function(t, e, r) {
                    return "number" != typeof r && (r = 0),
                    !(r + e.length > t.length) && -1 !== t.indexOf(e, r)
                }(t, ".") ? "property" : "argument";
                u = 'The "'.concat(t, '" ').concat(l, " ").concat(a, " ").concat(f(e, "type"))
            }
            return u += ". Received type ".concat(n(o))
        }
        ), TypeError),
        l("ERR_INVALID_ARG_VALUE", (function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
            void 0 === s && (s = r(89539));
            var o = s.inspect(e);
            return o.length > 128 && (o = "".concat(o.slice(0, 128), "...")),
            "The argument '".concat(t, "' ").concat(n, ". Received ").concat(o)
        }
        ), TypeError, RangeError),
        l("ERR_INVALID_RETURN_VALUE", (function(t, e, r) {
            var o;
            return o = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(n(r)),
            "Expected ".concat(t, ' to be returned from the "').concat(e, '"') + " function but got ".concat(o, ".")
        }
        ), TypeError),
        l("ERR_MISSING_ARGS", (function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            void 0 === c && (c = r(69282)),
            c(e.length > 0, "At least one arg needs to be specified");
            var o = "The "
              , a = e.length;
            switch (e = e.map((function(t) {
                return '"'.concat(t, '"')
            }
            )),
            a) {
            case 1:
                o += "".concat(e[0], " argument");
                break;
            case 2:
                o += "".concat(e[0], " and ").concat(e[1], " arguments");
                break;
            default:
                o += e.slice(0, a - 1).join(", "),
                o += ", and ".concat(e[a - 1], " arguments")
            }
            return "".concat(o, " must be specified")
        }
        ), TypeError),
        t.exports.codes = u
    },
    19158: function(t, e, r) {
        "use strict";
        function n(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var r = []
                  , n = !0
                  , o = !1
                  , a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value),
                    !e || r.length !== e); n = !0)
                        ;
                } catch (t) {
                    o = !0,
                    a = t
                } finally {
                    try {
                        n || null == c.return || c.return()
                    } finally {
                        if (o)
                            throw a
                    }
                }
                return r
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        function o(t) {
            return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            o(t)
        }
        var a = void 0 !== /a/g.flags
          , i = function(t) {
            var e = [];
            return t.forEach((function(t) {
                return e.push(t)
            }
            )),
            e
        }
          , c = function(t) {
            var e = [];
            return t.forEach((function(t, r) {
                return e.push([r, t])
            }
            )),
            e
        }
          , s = Object.is ? Object.is : r(20609)
          , u = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
            return []
        }
          , l = Number.isNaN ? Number.isNaN : r(20360);
        function f(t) {
            return t.call.bind(t)
        }
        var p = f(Object.prototype.hasOwnProperty)
          , y = f(Object.prototype.propertyIsEnumerable)
          , d = f(Object.prototype.toString)
          , g = r(89539).types
          , h = g.isAnyArrayBuffer
          , b = g.isArrayBufferView
          , m = g.isDate
          , v = g.isMap
          , w = g.isRegExp
          , S = g.isSet
          , E = g.isNativeError
          , _ = g.isBoxedPrimitive
          , A = g.isNumberObject
          , B = g.isStringObject
          , O = g.isBooleanObject
          , j = g.isBigIntObject
          , x = g.isSymbolObject
          , P = g.isFloat32Array
          , U = g.isFloat64Array;
        function k(t) {
            if (0 === t.length || t.length > 10)
                return !0;
            for (var e = 0; e < t.length; e++) {
                var r = t.charCodeAt(e);
                if (r < 48 || r > 57)
                    return !0
            }
            return 10 === t.length && t >= Math.pow(2, 32)
        }
        function T(t) {
            return Object.keys(t).filter(k).concat(u(t).filter(Object.prototype.propertyIsEnumerable.bind(t)))
        }
        function R(t, e) {
            if (t === e)
                return 0;
            for (var r = t.length, n = e.length, o = 0, a = Math.min(r, n); o < a; ++o)
                if (t[o] !== e[o]) {
                    r = t[o],
                    n = e[o];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }
        var I = 0
          , F = 1
          , G = 2
          , D = 3;
        function N(t, e, r, n) {
            if (t === e)
                return 0 !== t || (!r || s(t, e));
            if (r) {
                if ("object" !== o(t))
                    return "number" == typeof t && l(t) && l(e);
                if ("object" !== o(e) || null === t || null === e)
                    return !1;
                if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e))
                    return !1
            } else {
                if (null === t || "object" !== o(t))
                    return (null === e || "object" !== o(e)) && t == e;
                if (null === e || "object" !== o(e))
                    return !1
            }
            var i, c, u, f, p = d(t);
            if (p !== d(e))
                return !1;
            if (Array.isArray(t)) {
                if (t.length !== e.length)
                    return !1;
                var y = T(t)
                  , g = T(e);
                return y.length === g.length && M(t, e, r, n, F, y)
            }
            if ("[object Object]" === p && (!v(t) && v(e) || !S(t) && S(e)))
                return !1;
            if (m(t)) {
                if (!m(e) || Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e))
                    return !1
            } else if (w(t)) {
                if (!w(e) || (u = t,
                f = e,
                !(a ? u.source === f.source && u.flags === f.flags : RegExp.prototype.toString.call(u) === RegExp.prototype.toString.call(f))))
                    return !1
            } else if (E(t) || t instanceof Error) {
                if (t.message !== e.message || t.name !== e.name)
                    return !1
            } else {
                if (b(t)) {
                    if (r || !P(t) && !U(t)) {
                        if (!function(t, e) {
                            return t.byteLength === e.byteLength && 0 === R(new Uint8Array(t.buffer,t.byteOffset,t.byteLength), new Uint8Array(e.buffer,e.byteOffset,e.byteLength))
                        }(t, e))
                            return !1
                    } else if (!function(t, e) {
                        if (t.byteLength !== e.byteLength)
                            return !1;
                        for (var r = 0; r < t.byteLength; r++)
                            if (t[r] !== e[r])
                                return !1;
                        return !0
                    }(t, e))
                        return !1;
                    var k = T(t)
                      , N = T(e);
                    return k.length === N.length && M(t, e, r, n, I, k)
                }
                if (S(t))
                    return !(!S(e) || t.size !== e.size) && M(t, e, r, n, G);
                if (v(t))
                    return !(!v(e) || t.size !== e.size) && M(t, e, r, n, D);
                if (h(t)) {
                    if (c = e,
                    (i = t).byteLength !== c.byteLength || 0 !== R(new Uint8Array(i), new Uint8Array(c)))
                        return !1
                } else if (_(t) && !function(t, e) {
                    return A(t) ? A(e) && s(Number.prototype.valueOf.call(t), Number.prototype.valueOf.call(e)) : B(t) ? B(e) && String.prototype.valueOf.call(t) === String.prototype.valueOf.call(e) : O(t) ? O(e) && Boolean.prototype.valueOf.call(t) === Boolean.prototype.valueOf.call(e) : j(t) ? j(e) && BigInt.prototype.valueOf.call(t) === BigInt.prototype.valueOf.call(e) : x(e) && Symbol.prototype.valueOf.call(t) === Symbol.prototype.valueOf.call(e)
                }(t, e))
                    return !1
            }
            return M(t, e, r, n, I)
        }
        function L(t, e) {
            return e.filter((function(e) {
                return y(t, e)
            }
            ))
        }
        function M(t, e, r, a, s, l) {
            if (5 === arguments.length) {
                l = Object.keys(t);
                var f = Object.keys(e);
                if (l.length !== f.length)
                    return !1
            }
            for (var d = 0; d < l.length; d++)
                if (!p(e, l[d]))
                    return !1;
            if (r && 5 === arguments.length) {
                var g = u(t);
                if (0 !== g.length) {
                    var h = 0;
                    for (d = 0; d < g.length; d++) {
                        var b = g[d];
                        if (y(t, b)) {
                            if (!y(e, b))
                                return !1;
                            l.push(b),
                            h++
                        } else if (y(e, b))
                            return !1
                    }
                    var m = u(e);
                    if (g.length !== m.length && L(e, m).length !== h)
                        return !1
                } else {
                    var v = u(e);
                    if (0 !== v.length && 0 !== L(e, v).length)
                        return !1
                }
            }
            if (0 === l.length && (s === I || s === F && 0 === t.length || 0 === t.size))
                return !0;
            if (void 0 === a)
                a = {
                    val1: new Map,
                    val2: new Map,
                    position: 0
                };
            else {
                var w = a.val1.get(t);
                if (void 0 !== w) {
                    var S = a.val2.get(e);
                    if (void 0 !== S)
                        return w === S
                }
                a.position++
            }
            a.val1.set(t, a.position),
            a.val2.set(e, a.position);
            var E = function(t, e, r, a, s, u) {
                var l = 0;
                if (u === G) {
                    if (!function(t, e, r, n) {
                        for (var a = null, c = i(t), s = 0; s < c.length; s++) {
                            var u = c[s];
                            if ("object" === o(u) && null !== u)
                                null === a && (a = new Set),
                                a.add(u);
                            else if (!e.has(u)) {
                                if (r)
                                    return !1;
                                if (!W(t, e, u))
                                    return !1;
                                null === a && (a = new Set),
                                a.add(u)
                            }
                        }
                        if (null !== a) {
                            for (var l = i(e), f = 0; f < l.length; f++) {
                                var p = l[f];
                                if ("object" === o(p) && null !== p) {
                                    if (!C(a, p, r, n))
                                        return !1
                                } else if (!r && !t.has(p) && !C(a, p, r, n))
                                    return !1
                            }
                            return 0 === a.size
                        }
                        return !0
                    }(t, e, r, s))
                        return !1
                } else if (u === D) {
                    if (!function(t, e, r, a) {
                        for (var i = null, s = c(t), u = 0; u < s.length; u++) {
                            var l = n(s[u], 2)
                              , f = l[0]
                              , p = l[1];
                            if ("object" === o(f) && null !== f)
                                null === i && (i = new Set),
                                i.add(f);
                            else {
                                var y = e.get(f);
                                if (void 0 === y && !e.has(f) || !N(p, y, r, a)) {
                                    if (r)
                                        return !1;
                                    if (!z(t, e, f, p, a))
                                        return !1;
                                    null === i && (i = new Set),
                                    i.add(f)
                                }
                            }
                        }
                        if (null !== i) {
                            for (var d = c(e), g = 0; g < d.length; g++) {
                                var h = n(d[g], 2)
                                  , b = (f = h[0],
                                h[1]);
                                if ("object" === o(f) && null !== f) {
                                    if (!V(i, t, f, b, r, a))
                                        return !1
                                } else if (!(r || t.has(f) && N(t.get(f), b, !1, a) || V(i, t, f, b, !1, a)))
                                    return !1
                            }
                            return 0 === i.size
                        }
                        return !0
                    }(t, e, r, s))
                        return !1
                } else if (u === F)
                    for (; l < t.length; l++) {
                        if (!p(t, l)) {
                            if (p(e, l))
                                return !1;
                            for (var f = Object.keys(t); l < f.length; l++) {
                                var y = f[l];
                                if (!p(e, y) || !N(t[y], e[y], r, s))
                                    return !1
                            }
                            return f.length === Object.keys(e).length
                        }
                        if (!p(e, l) || !N(t[l], e[l], r, s))
                            return !1
                    }
                for (l = 0; l < a.length; l++) {
                    var d = a[l];
                    if (!N(t[d], e[d], r, s))
                        return !1
                }
                return !0
            }(t, e, r, l, a, s);
            return a.val1.delete(t),
            a.val2.delete(e),
            E
        }
        function C(t, e, r, n) {
            for (var o = i(t), a = 0; a < o.length; a++) {
                var c = o[a];
                if (N(e, c, r, n))
                    return t.delete(c),
                    !0
            }
            return !1
        }
        function q(t) {
            switch (o(t)) {
            case "undefined":
                return null;
            case "object":
                return;
            case "symbol":
                return !1;
            case "string":
                t = +t;
            case "number":
                if (l(t))
                    return !1
            }
            return !0
        }
        function W(t, e, r) {
            var n = q(r);
            return null != n ? n : e.has(n) && !t.has(n)
        }
        function z(t, e, r, n, o) {
            var a = q(r);
            if (null != a)
                return a;
            var i = e.get(a);
            return !(void 0 === i && !e.has(a) || !N(n, i, !1, o)) && (!t.has(a) && N(n, i, !1, o))
        }
        function V(t, e, r, n, o, a) {
            for (var c = i(t), s = 0; s < c.length; s++) {
                var u = c[s];
                if (N(r, u, o, a) && N(n, e.get(u), o, a))
                    return t.delete(u),
                    !0
            }
            return !1
        }
        t.exports = {
            isDeepEqual: function(t, e) {
                return N(t, e, false)
            },
            isDeepStrictEqual: function(t, e) {
                return N(t, e, true)
            }
        }
    },
    21924: function(t, e, r) {
        "use strict";
        var n = r(40210)
          , o = r(55559)
          , a = o(n("String.prototype.indexOf"));
        t.exports = function(t, e) {
            var r = n(t, !!e);
            return "function" == typeof r && a(t, ".prototype.") > -1 ? o(r) : r
        }
    },
    55559: function(t, e, r) {
        "use strict";
        var n = r(58612)
          , o = r(40210)
          , a = r(67771)
          , i = o("%TypeError%")
          , c = o("%Function.prototype.apply%")
          , s = o("%Function.prototype.call%")
          , u = o("%Reflect.apply%", !0) || n.call(s, c)
          , l = o("%Object.defineProperty%", !0)
          , f = o("%Math.max%");
        if (l)
            try {
                l({}, "a", {
                    value: 1
                })
            } catch (t) {
                l = null
            }
        t.exports = function(t) {
            if ("function" != typeof t)
                throw new i("a function is required");
            var e = u(n, s, arguments);
            return a(e, 1 + f(0, t.length - (arguments.length - 1)), !0)
        }
        ;
        var p = function() {
            return u(n, c, arguments)
        };
        l ? l(t.exports, "apply", {
            value: p
        }) : t.exports.apply = p
    },
    25108: function(t, e, r) {
        var n = r(89539)
          , o = r(69282);
        function a() {
            return (new Date).getTime()
        }
        var i, c = Array.prototype.slice, s = {};
        i = void 0 !== r.g && r.g.console ? r.g.console : "undefined" != typeof window && window.console ? window.console : {};
        for (var u = [[function() {}
        , "log"], [function() {
            i.log.apply(i, arguments)
        }
        , "info"], [function() {
            i.log.apply(i, arguments)
        }
        , "warn"], [function() {
            i.warn.apply(i, arguments)
        }
        , "error"], [function(t) {
            s[t] = a()
        }
        , "time"], [function(t) {
            var e = s[t];
            if (!e)
                throw new Error("No such label: " + t);
            delete s[t];
            a()
        }
        , "timeEnd"], [function() {
            var t = new Error;
            t.name = "Trace",
            t.message = n.format.apply(null, arguments),
            i.error(t.stack)
        }
        , "trace"], [function(t) {
            n.inspect(t)
        }
        , "dir"], [function(t) {
            if (!t) {
                var e = c.call(arguments, 1);
                o.ok(!1, n.format.apply(null, e))
            }
        }
        , "assert"]], l = 0; l < u.length; l++) {
            var f = u[l]
              , p = f[0]
              , y = f[1];
            i[y] || (i[y] = p)
        }
        t.exports = i
    },
    12296: function(t, e, r) {
        "use strict";
        var n = r(31044)()
          , o = r(40210)
          , a = n && o("%Object.defineProperty%", !0);
        if (a)
            try {
                a({}, "a", {
                    value: 1
                })
            } catch (t) {
                a = !1
            }
        var i = o("%SyntaxError%")
          , c = o("%TypeError%")
          , s = r(27296);
        t.exports = function(t, e, r) {
            if (!t || "object" != typeof t && "function" != typeof t)
                throw new c("`obj` must be an object or a function`");
            if ("string" != typeof e && "symbol" != typeof e)
                throw new c("`property` must be a string or a symbol`");
            if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3])
                throw new c("`nonEnumerable`, if provided, must be a boolean or null");
            if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4])
                throw new c("`nonWritable`, if provided, must be a boolean or null");
            if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5])
                throw new c("`nonConfigurable`, if provided, must be a boolean or null");
            if (arguments.length > 6 && "boolean" != typeof arguments[6])
                throw new c("`loose`, if provided, must be a boolean");
            var n = arguments.length > 3 ? arguments[3] : null
              , o = arguments.length > 4 ? arguments[4] : null
              , u = arguments.length > 5 ? arguments[5] : null
              , l = arguments.length > 6 && arguments[6]
              , f = !!s && s(t, e);
            if (a)
                a(t, e, {
                    configurable: null === u && f ? f.configurable : !u,
                    enumerable: null === n && f ? f.enumerable : !n,
                    value: r,
                    writable: null === o && f ? f.writable : !o
                });
            else {
                if (!l && (n || o || u))
                    throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
                t[e] = r
            }
        }
    },
    4289: function(t, e, r) {
        "use strict";
        var n = r(82215)
          , o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo")
          , a = Object.prototype.toString
          , i = Array.prototype.concat
          , c = Object.defineProperty
          , s = r(31044)()
          , u = c && s
          , l = function(t, e, r, n) {
            if (e in t)
                if (!0 === n) {
                    if (t[e] === r)
                        return
                } else if ("function" != typeof (o = n) || "[object Function]" !== a.call(o) || !n())
                    return;
            var o;
            u ? c(t, e, {
                configurable: !0,
                enumerable: !1,
                value: r,
                writable: !0
            }) : t[e] = r
        }
          , f = function(t, e) {
            var r = arguments.length > 2 ? arguments[2] : {}
              , a = n(e);
            o && (a = i.call(a, Object.getOwnPropertySymbols(e)));
            for (var c = 0; c < a.length; c += 1)
                l(t, a[c], e[a[c]], r[a[c]])
        };
        f.supportsDescriptors = !!u,
        t.exports = f
    },
    8091: function(t) {
        "use strict";
        function e(t, e) {
            if (null == t)
                throw new TypeError("Cannot convert first argument to object");
            for (var r = Object(t), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (null != o)
                    for (var a = Object.keys(Object(o)), i = 0, c = a.length; i < c; i++) {
                        var s = a[i]
                          , u = Object.getOwnPropertyDescriptor(o, s);
                        void 0 !== u && u.enumerable && (r[s] = o[s])
                    }
            }
            return r
        }
        t.exports = {
            assign: e,
            polyfill: function() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
        }
    },
    94029: function(t, e, r) {
        "use strict";
        var n = r(95320)
          , o = Object.prototype.toString
          , a = Object.prototype.hasOwnProperty;
        t.exports = function(t, e, r) {
            if (!n(e))
                throw new TypeError("iterator must be a function");
            var i;
            arguments.length >= 3 && (i = r),
            "[object Array]" === o.call(t) ? function(t, e, r) {
                for (var n = 0, o = t.length; n < o; n++)
                    a.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t))
            }(t, e, i) : "string" == typeof t ? function(t, e, r) {
                for (var n = 0, o = t.length; n < o; n++)
                    null == r ? e(t.charAt(n), n, t) : e.call(r, t.charAt(n), n, t)
            }(t, e, i) : function(t, e, r) {
                for (var n in t)
                    a.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t))
            }(t, e, i)
        }
    },
    17648: function(t) {
        "use strict";
        var e = Object.prototype.toString
          , r = Math.max
          , n = function(t, e) {
            for (var r = [], n = 0; n < t.length; n += 1)
                r[n] = t[n];
            for (var o = 0; o < e.length; o += 1)
                r[o + t.length] = e[o];
            return r
        };
        t.exports = function(t) {
            var o = this;
            if ("function" != typeof o || "[object Function]" !== e.apply(o))
                throw new TypeError("Function.prototype.bind called on incompatible " + o);
            for (var a, i = function(t, e) {
                for (var r = [], n = e || 0, o = 0; n < t.length; n += 1,
                o += 1)
                    r[o] = t[n];
                return r
            }(arguments, 1), c = r(0, o.length - i.length), s = [], u = 0; u < c; u++)
                s[u] = "$" + u;
            if (a = Function("binder", "return function (" + function(t, e) {
                for (var r = "", n = 0; n < t.length; n += 1)
                    r += t[n],
                    n + 1 < t.length && (r += e);
                return r
            }(s, ",") + "){ return binder.apply(this,arguments); }")((function() {
                if (this instanceof a) {
                    var e = o.apply(this, n(i, arguments));
                    return Object(e) === e ? e : this
                }
                return o.apply(t, n(i, arguments))
            }
            )),
            o.prototype) {
                var l = function() {};
                l.prototype = o.prototype,
                a.prototype = new l,
                l.prototype = null
            }
            return a
        }
    },
    58612: function(t, e, r) {
        "use strict";
        var n = r(17648);
        t.exports = Function.prototype.bind || n
    },
    40210: function(t, e, r) {
        "use strict";
        var n, o = SyntaxError, a = Function, i = TypeError, c = function(t) {
            try {
                return a('"use strict"; return (' + t + ").constructor;")()
            } catch (t) {}
        }, s = Object.getOwnPropertyDescriptor;
        if (s)
            try {
                s({}, "")
            } catch (t) {
                s = null
            }
        var u = function() {
            throw new i
        }
          , l = s ? function() {
            try {
                return u
            } catch (t) {
                try {
                    return s(arguments, "callee").get
                } catch (t) {
                    return u
                }
            }
        }() : u
          , f = r(41405)()
          , p = r(28185)()
          , y = Object.getPrototypeOf || (p ? function(t) {
            return t.__proto__
        }
        : null)
          , d = {}
          , g = "undefined" != typeof Uint8Array && y ? y(Uint8Array) : n
          , h = {
            "%AggregateError%": "undefined" == typeof AggregateError ? n : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? n : ArrayBuffer,
            "%ArrayIteratorPrototype%": f && y ? y([][Symbol.iterator]()) : n,
            "%AsyncFromSyncIteratorPrototype%": n,
            "%AsyncFunction%": d,
            "%AsyncGenerator%": d,
            "%AsyncGeneratorFunction%": d,
            "%AsyncIteratorPrototype%": d,
            "%Atomics%": "undefined" == typeof Atomics ? n : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? n : BigInt,
            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? n : BigInt64Array,
            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? n : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? n : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": "undefined" == typeof Float32Array ? n : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? n : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? n : FinalizationRegistry,
            "%Function%": a,
            "%GeneratorFunction%": d,
            "%Int8Array%": "undefined" == typeof Int8Array ? n : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? n : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? n : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": f && y ? y(y([][Symbol.iterator]())) : n,
            "%JSON%": "object" == typeof JSON ? JSON : n,
            "%Map%": "undefined" == typeof Map ? n : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && f && y ? y((new Map)[Symbol.iterator]()) : n,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? n : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? n : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? n : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? n : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && f && y ? y((new Set)[Symbol.iterator]()) : n,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": f && y ? y(""[Symbol.iterator]()) : n,
            "%Symbol%": f ? Symbol : n,
            "%SyntaxError%": o,
            "%ThrowTypeError%": l,
            "%TypedArray%": g,
            "%TypeError%": i,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? n : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? n : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? n : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? n : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? n : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? n : WeakSet
        };
        if (y)
            try {
                null.error
            } catch (t) {
                var b = y(y(t));
                h["%Error.prototype%"] = b
            }
        var m = function t(e) {
            var r;
            if ("%AsyncFunction%" === e)
                r = c("async function () {}");
            else if ("%GeneratorFunction%" === e)
                r = c("function* () {}");
            else if ("%AsyncGeneratorFunction%" === e)
                r = c("async function* () {}");
            else if ("%AsyncGenerator%" === e) {
                var n = t("%AsyncGeneratorFunction%");
                n && (r = n.prototype)
            } else if ("%AsyncIteratorPrototype%" === e) {
                var o = t("%AsyncGenerator%");
                o && y && (r = y(o.prototype))
            }
            return h[e] = r,
            r
        }
          , v = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
        }
          , w = r(58612)
          , S = r(48824)
          , E = w.call(Function.call, Array.prototype.concat)
          , _ = w.call(Function.apply, Array.prototype.splice)
          , A = w.call(Function.call, String.prototype.replace)
          , B = w.call(Function.call, String.prototype.slice)
          , O = w.call(Function.call, RegExp.prototype.exec)
          , j = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
          , x = /\\(\\)?/g
          , P = function(t, e) {
            var r, n = t;
            if (S(v, n) && (n = "%" + (r = v[n])[0] + "%"),
            S(h, n)) {
                var a = h[n];
                if (a === d && (a = m(n)),
                void 0 === a && !e)
                    throw new i("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: r,
                    name: n,
                    value: a
                }
            }
            throw new o("intrinsic " + t + " does not exist!")
        };
        t.exports = function(t, e) {
            if ("string" != typeof t || 0 === t.length)
                throw new i("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof e)
                throw new i('"allowMissing" argument must be a boolean');
            if (null === O(/^%?[^%]*%?$/, t))
                throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
            var r = function(t) {
                var e = B(t, 0, 1)
                  , r = B(t, -1);
                if ("%" === e && "%" !== r)
                    throw new o("invalid intrinsic syntax, expected closing `%`");
                if ("%" === r && "%" !== e)
                    throw new o("invalid intrinsic syntax, expected opening `%`");
                var n = [];
                return A(t, j, (function(t, e, r, o) {
                    n[n.length] = r ? A(o, x, "$1") : e || t
                }
                )),
                n
            }(t)
              , n = r.length > 0 ? r[0] : ""
              , a = P("%" + n + "%", e)
              , c = a.name
              , u = a.value
              , l = !1
              , f = a.alias;
            f && (n = f[0],
            _(r, E([0, 1], f)));
            for (var p = 1, y = !0; p < r.length; p += 1) {
                var d = r[p]
                  , g = B(d, 0, 1)
                  , b = B(d, -1);
                if (('"' === g || "'" === g || "`" === g || '"' === b || "'" === b || "`" === b) && g !== b)
                    throw new o("property names with quotes must have matching quotes");
                if ("constructor" !== d && y || (l = !0),
                S(h, c = "%" + (n += "." + d) + "%"))
                    u = h[c];
                else if (null != u) {
                    if (!(d in u)) {
                        if (!e)
                            throw new i("base intrinsic for " + t + " exists, but the property is not available.");
                        return
                    }
                    if (s && p + 1 >= r.length) {
                        var m = s(u, d);
                        u = (y = !!m) && "get"in m && !("originalValue"in m.get) ? m.get : u[d]
                    } else
                        y = S(u, d),
                        u = u[d];
                    y && !l && (h[c] = u)
                }
            }
            return u
        }
    },
    27296: function(t, e, r) {
        "use strict";
        var n = r(40210)("%Object.getOwnPropertyDescriptor%", !0);
        if (n)
            try {
                n([], "length")
            } catch (t) {
                n = null
            }
        t.exports = n
    },
    31044: function(t, e, r) {
        "use strict";
        var n = r(40210)("%Object.defineProperty%", !0)
          , o = function() {
            if (n)
                try {
                    return n({}, "a", {
                        value: 1
                    }),
                    !0
                } catch (t) {
                    return !1
                }
            return !1
        };
        o.hasArrayLengthDefineBug = function() {
            if (!o())
                return null;
            try {
                return 1 !== n([], "length", {
                    value: 1
                }).length
            } catch (t) {
                return !0
            }
        }
        ,
        t.exports = o
    },
    28185: function(t) {
        "use strict";
        var e = {
            foo: {}
        }
          , r = Object;
        t.exports = function() {
            return {
                __proto__: e
            }.foo === e.foo && !({
                __proto__: null
            }instanceof r)
        }
    },
    41405: function(t, e, r) {
        "use strict";
        var n = "undefined" != typeof Symbol && Symbol
          , o = r(55419);
        t.exports = function() {
            return "function" == typeof n && ("function" == typeof Symbol && ("symbol" == typeof n("foo") && ("symbol" == typeof Symbol("bar") && o())))
        }
    },
    55419: function(t) {
        "use strict";
        t.exports = function() {
            if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
                return !1;
            if ("symbol" == typeof Symbol.iterator)
                return !0;
            var t = {}
              , e = Symbol("test")
              , r = Object(e);
            if ("string" == typeof e)
                return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(e))
                return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(r))
                return !1;
            for (e in t[e] = 42,
            t)
                return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(t).length)
                return !1;
            if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length)
                return !1;
            var n = Object.getOwnPropertySymbols(t);
            if (1 !== n.length || n[0] !== e)
                return !1;
            if (!Object.prototype.propertyIsEnumerable.call(t, e))
                return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
                var o = Object.getOwnPropertyDescriptor(t, e);
                if (42 !== o.value || !0 !== o.enumerable)
                    return !1
            }
            return !0
        }
    },
    96410: function(t, e, r) {
        "use strict";
        var n = r(55419);
        t.exports = function() {
            return n() && !!Symbol.toStringTag
        }
    },
    48824: function(t, e, r) {
        "use strict";
        var n = Function.prototype.call
          , o = Object.prototype.hasOwnProperty
          , a = r(58612);
        t.exports = a.call(n, o)
    },
    35717: function(t) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            e && (t.super_ = e,
            t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : t.exports = function(t, e) {
            if (e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype,
                t.prototype = new r,
                t.prototype.constructor = t
            }
        }
    },
    82584: function(t, e, r) {
        "use strict";
        var n = r(96410)()
          , o = r(21924)("Object.prototype.toString")
          , a = function(t) {
            return !(n && t && "object" == typeof t && Symbol.toStringTag in t) && "[object Arguments]" === o(t)
        }
          , i = function(t) {
            return !!a(t) || null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Array]" !== o(t) && "[object Function]" === o(t.callee)
        }
          , c = function() {
            return a(arguments)
        }();
        a.isLegacyArguments = i,
        t.exports = c ? a : i
    },
    95320: function(t) {
        "use strict";
        var e, r, n = Function.prototype.toString, o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if ("function" == typeof o && "function" == typeof Object.defineProperty)
            try {
                e = Object.defineProperty({}, "length", {
                    get: function() {
                        throw r
                    }
                }),
                r = {},
                o((function() {
                    throw 42
                }
                ), null, e)
            } catch (t) {
                t !== r && (o = null)
            }
        else
            o = null;
        var a = /^\s*class\b/
          , i = function(t) {
            try {
                var e = n.call(t);
                return a.test(e)
            } catch (t) {
                return !1
            }
        }
          , c = function(t) {
            try {
                return !i(t) && (n.call(t),
                !0)
            } catch (t) {
                return !1
            }
        }
          , s = Object.prototype.toString
          , u = "function" == typeof Symbol && !!Symbol.toStringTag
          , l = !(0 in [, ])
          , f = function() {
            return !1
        };
        if ("object" == typeof document) {
            var p = document.all;
            s.call(p) === s.call(document.all) && (f = function(t) {
                if ((l || !t) && (void 0 === t || "object" == typeof t))
                    try {
                        var e = s.call(t);
                        return ("[object HTMLAllCollection]" === e || "[object HTML document.all class]" === e || "[object HTMLCollection]" === e || "[object Object]" === e) && null == t("")
                    } catch (t) {}
                return !1
            }
            )
        }
        t.exports = o ? function(t) {
            if (f(t))
                return !0;
            if (!t)
                return !1;
            if ("function" != typeof t && "object" != typeof t)
                return !1;
            try {
                o(t, null, e)
            } catch (t) {
                if (t !== r)
                    return !1
            }
            return !i(t) && c(t)
        }
        : function(t) {
            if (f(t))
                return !0;
            if (!t)
                return !1;
            if ("function" != typeof t && "object" != typeof t)
                return !1;
            if (u)
                return c(t);
            if (i(t))
                return !1;
            var e = s.call(t);
            return !("[object Function]" !== e && "[object GeneratorFunction]" !== e && !/^\[object HTML/.test(e)) && c(t)
        }
    },
    48662: function(t, e, r) {
        "use strict";
        var n, o = Object.prototype.toString, a = Function.prototype.toString, i = /^\s*(?:function)?\*/, c = r(96410)(), s = Object.getPrototypeOf;
        t.exports = function(t) {
            if ("function" != typeof t)
                return !1;
            if (i.test(a.call(t)))
                return !0;
            if (!c)
                return "[object GeneratorFunction]" === o.call(t);
            if (!s)
                return !1;
            if (void 0 === n) {
                var e = function() {
                    if (!c)
                        return !1;
                    try {
                        return Function("return function*() {}")()
                    } catch (t) {}
                }();
                n = !!e && s(e)
            }
            return s(t) === n
        }
    },
    98611: function(t) {
        "use strict";
        t.exports = function(t) {
            return t != t
        }
    },
    20360: function(t, e, r) {
        "use strict";
        var n = r(55559)
          , o = r(4289)
          , a = r(98611)
          , i = r(29415)
          , c = r(23194)
          , s = n(i(), Number);
        o(s, {
            getPolyfill: i,
            implementation: a,
            shim: c
        }),
        t.exports = s
    },
    29415: function(t, e, r) {
        "use strict";
        var n = r(98611);
        t.exports = function() {
            return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : n
        }
    },
    23194: function(t, e, r) {
        "use strict";
        var n = r(4289)
          , o = r(29415);
        t.exports = function() {
            var t = o();
            return n(Number, {
                isNaN: t
            }, {
                isNaN: function() {
                    return Number.isNaN !== t
                }
            }),
            t
        }
    },
    85692: function(t, e, r) {
        "use strict";
        var n = r(86430);
        t.exports = function(t) {
            return !!n(t)
        }
    },
    24244: function(t) {
        "use strict";
        var e = function(t) {
            return t != t
        };
        t.exports = function(t, r) {
            return 0 === t && 0 === r ? 1 / t == 1 / r : t === r || !(!e(t) || !e(r))
        }
    },
    20609: function(t, e, r) {
        "use strict";
        var n = r(4289)
          , o = r(55559)
          , a = r(24244)
          , i = r(75624)
          , c = r(52281)
          , s = o(i(), Object);
        n(s, {
            getPolyfill: i,
            implementation: a,
            shim: c
        }),
        t.exports = s
    },
    75624: function(t, e, r) {
        "use strict";
        var n = r(24244);
        t.exports = function() {
            return "function" == typeof Object.is ? Object.is : n
        }
    },
    52281: function(t, e, r) {
        "use strict";
        var n = r(75624)
          , o = r(4289);
        t.exports = function() {
            var t = n();
            return o(Object, {
                is: t
            }, {
                is: function() {
                    return Object.is !== t
                }
            }),
            t
        }
    },
    18987: function(t, e, r) {
        "use strict";
        var n;
        if (!Object.keys) {
            var o = Object.prototype.hasOwnProperty
              , a = Object.prototype.toString
              , i = r(21414)
              , c = Object.prototype.propertyIsEnumerable
              , s = !c.call({
                toString: null
            }, "toString")
              , u = c.call((function() {}
            ), "prototype")
              , l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
              , f = function(t) {
                var e = t.constructor;
                return e && e.prototype === t
            }
              , p = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $onmozfullscreenchange: !0,
                $onmozfullscreenerror: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            }
              , y = function() {
                if ("undefined" == typeof window)
                    return !1;
                for (var t in window)
                    try {
                        if (!p["$" + t] && o.call(window, t) && null !== window[t] && "object" == typeof window[t])
                            try {
                                f(window[t])
                            } catch (t) {
                                return !0
                            }
                    } catch (t) {
                        return !0
                    }
                return !1
            }();
            n = function(t) {
                var e = null !== t && "object" == typeof t
                  , r = "[object Function]" === a.call(t)
                  , n = i(t)
                  , c = e && "[object String]" === a.call(t)
                  , p = [];
                if (!e && !r && !n)
                    throw new TypeError("Object.keys called on a non-object");
                var d = u && r;
                if (c && t.length > 0 && !o.call(t, 0))
                    for (var g = 0; g < t.length; ++g)
                        p.push(String(g));
                if (n && t.length > 0)
                    for (var h = 0; h < t.length; ++h)
                        p.push(String(h));
                else
                    for (var b in t)
                        d && "prototype" === b || !o.call(t, b) || p.push(String(b));
                if (s)
                    for (var m = function(t) {
                        if ("undefined" == typeof window || !y)
                            return f(t);
                        try {
                            return f(t)
                        } catch (t) {
                            return !1
                        }
                    }(t), v = 0; v < l.length; ++v)
                        m && "constructor" === l[v] || !o.call(t, l[v]) || p.push(l[v]);
                return p
            }
        }
        t.exports = n
    },
    82215: function(t, e, r) {
        "use strict";
        var n = Array.prototype.slice
          , o = r(21414)
          , a = Object.keys
          , i = a ? function(t) {
            return a(t)
        }
        : r(18987)
          , c = Object.keys;
        i.shim = function() {
            if (Object.keys) {
                var t = function() {
                    var t = Object.keys(arguments);
                    return t && t.length === arguments.length
                }(1, 2);
                t || (Object.keys = function(t) {
                    return o(t) ? c(n.call(t)) : c(t)
                }
                )
            } else
                Object.keys = i;
            return Object.keys || i
        }
        ,
        t.exports = i
    },
    21414: function(t) {
        "use strict";
        var e = Object.prototype.toString;
        t.exports = function(t) {
            var r = e.call(t)
              , n = "[object Arguments]" === r;
            return n || (n = "[object Array]" !== r && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === e.call(t.callee)),
            n
        }
    },
    34155: function(t) {
        var e, r, n = t.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(t) {
            if (e === setTimeout)
                return setTimeout(t, 0);
            if ((e === o || !e) && setTimeout)
                return e = setTimeout,
                setTimeout(t, 0);
            try {
                return e(t, 0)
            } catch (r) {
                try {
                    return e.call(null, t, 0)
                } catch (r) {
                    return e.call(this, t, 0)
                }
            }
        }
        !function() {
            try {
                e = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                e = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                r = a
            }
        }();
        var c, s = [], u = !1, l = -1;
        function f() {
            u && c && (u = !1,
            c.length ? s = c.concat(s) : l = -1,
            s.length && p())
        }
        function p() {
            if (!u) {
                var t = i(f);
                u = !0;
                for (var e = s.length; e; ) {
                    for (c = s,
                    s = []; ++l < e; )
                        c && c[l].run();
                    l = -1,
                    e = s.length
                }
                c = null,
                u = !1,
                function(t) {
                    if (r === clearTimeout)
                        return clearTimeout(t);
                    if ((r === a || !r) && clearTimeout)
                        return r = clearTimeout,
                        clearTimeout(t);
                    try {
                        return r(t)
                    } catch (e) {
                        try {
                            return r.call(null, t)
                        } catch (e) {
                            return r.call(this, t)
                        }
                    }
                }(t)
            }
        }
        function y(t, e) {
            this.fun = t,
            this.array = e
        }
        function d() {}
        n.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
            s.push(new y(t,e)),
            1 !== s.length || u || i(p)
        }
        ,
        y.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        n.title = "browser",
        n.browser = !0,
        n.env = {},
        n.argv = [],
        n.version = "",
        n.versions = {},
        n.on = d,
        n.addListener = d,
        n.once = d,
        n.off = d,
        n.removeListener = d,
        n.removeAllListeners = d,
        n.emit = d,
        n.prependListener = d,
        n.prependOnceListener = d,
        n.listeners = function(t) {
            return []
        }
        ,
        n.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        n.cwd = function() {
            return "/"
        }
        ,
        n.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        n.umask = function() {
            return 0
        }
    },
    67771: function(t, e, r) {
        "use strict";
        var n = r(40210)
          , o = r(12296)
          , a = r(31044)()
          , i = r(27296)
          , c = n("%TypeError%")
          , s = n("%Math.floor%");
        t.exports = function(t, e) {
            if ("function" != typeof t)
                throw new c("`fn` is not a function");
            if ("number" != typeof e || e < 0 || e > 4294967295 || s(e) !== e)
                throw new c("`length` must be a positive 32-bit integer");
            var r = arguments.length > 2 && !!arguments[2]
              , n = !0
              , u = !0;
            if ("length"in t && i) {
                var l = i(t, "length");
                l && !l.configurable && (n = !1),
                l && !l.writable && (u = !1)
            }
            return (n || u || !r) && (a ? o(t, "length", e, !0, !0) : o(t, "length", e)),
            t
        }
    },
    20384: function(t) {
        t.exports = function(t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
        }
    },
    55955: function(t, e, r) {
        "use strict";
        var n = r(82584)
          , o = r(48662)
          , a = r(86430)
          , i = r(85692);
        function c(t) {
            return t.call.bind(t)
        }
        var s = "undefined" != typeof BigInt
          , u = "undefined" != typeof Symbol
          , l = c(Object.prototype.toString)
          , f = c(Number.prototype.valueOf)
          , p = c(String.prototype.valueOf)
          , y = c(Boolean.prototype.valueOf);
        if (s)
            var d = c(BigInt.prototype.valueOf);
        if (u)
            var g = c(Symbol.prototype.valueOf);
        function h(t, e) {
            if ("object" != typeof t)
                return !1;
            try {
                return e(t),
                !0
            } catch (t) {
                return !1
            }
        }
        function b(t) {
            return "[object Map]" === l(t)
        }
        function m(t) {
            return "[object Set]" === l(t)
        }
        function v(t) {
            return "[object WeakMap]" === l(t)
        }
        function w(t) {
            return "[object WeakSet]" === l(t)
        }
        function S(t) {
            return "[object ArrayBuffer]" === l(t)
        }
        function E(t) {
            return "undefined" != typeof ArrayBuffer && (S.working ? S(t) : t instanceof ArrayBuffer)
        }
        function _(t) {
            return "[object DataView]" === l(t)
        }
        function A(t) {
            return "undefined" != typeof DataView && (_.working ? _(t) : t instanceof DataView)
        }
        e.isArgumentsObject = n,
        e.isGeneratorFunction = o,
        e.isTypedArray = i,
        e.isPromise = function(t) {
            return "undefined" != typeof Promise && t instanceof Promise || null !== t && "object" == typeof t && "function" == typeof t.then && "function" == typeof t.catch
        }
        ,
        e.isArrayBufferView = function(t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : i(t) || A(t)
        }
        ,
        e.isUint8Array = function(t) {
            return "Uint8Array" === a(t)
        }
        ,
        e.isUint8ClampedArray = function(t) {
            return "Uint8ClampedArray" === a(t)
        }
        ,
        e.isUint16Array = function(t) {
            return "Uint16Array" === a(t)
        }
        ,
        e.isUint32Array = function(t) {
            return "Uint32Array" === a(t)
        }
        ,
        e.isInt8Array = function(t) {
            return "Int8Array" === a(t)
        }
        ,
        e.isInt16Array = function(t) {
            return "Int16Array" === a(t)
        }
        ,
        e.isInt32Array = function(t) {
            return "Int32Array" === a(t)
        }
        ,
        e.isFloat32Array = function(t) {
            return "Float32Array" === a(t)
        }
        ,
        e.isFloat64Array = function(t) {
            return "Float64Array" === a(t)
        }
        ,
        e.isBigInt64Array = function(t) {
            return "BigInt64Array" === a(t)
        }
        ,
        e.isBigUint64Array = function(t) {
            return "BigUint64Array" === a(t)
        }
        ,
        b.working = "undefined" != typeof Map && b(new Map),
        e.isMap = function(t) {
            return "undefined" != typeof Map && (b.working ? b(t) : t instanceof Map)
        }
        ,
        m.working = "undefined" != typeof Set && m(new Set),
        e.isSet = function(t) {
            return "undefined" != typeof Set && (m.working ? m(t) : t instanceof Set)
        }
        ,
        v.working = "undefined" != typeof WeakMap && v(new WeakMap),
        e.isWeakMap = function(t) {
            return "undefined" != typeof WeakMap && (v.working ? v(t) : t instanceof WeakMap)
        }
        ,
        w.working = "undefined" != typeof WeakSet && w(new WeakSet),
        e.isWeakSet = function(t) {
            return w(t)
        }
        ,
        S.working = "undefined" != typeof ArrayBuffer && S(new ArrayBuffer),
        e.isArrayBuffer = E,
        _.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && _(new DataView(new ArrayBuffer(1),0,1)),
        e.isDataView = A;
        var B = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
        function O(t) {
            return "[object SharedArrayBuffer]" === l(t)
        }
        function j(t) {
            return void 0 !== B && (void 0 === O.working && (O.working = O(new B)),
            O.working ? O(t) : t instanceof B)
        }
        function x(t) {
            return h(t, f)
        }
        function P(t) {
            return h(t, p)
        }
        function U(t) {
            return h(t, y)
        }
        function k(t) {
            return s && h(t, d)
        }
        function T(t) {
            return u && h(t, g)
        }
        e.isSharedArrayBuffer = j,
        e.isAsyncFunction = function(t) {
            return "[object AsyncFunction]" === l(t)
        }
        ,
        e.isMapIterator = function(t) {
            return "[object Map Iterator]" === l(t)
        }
        ,
        e.isSetIterator = function(t) {
            return "[object Set Iterator]" === l(t)
        }
        ,
        e.isGeneratorObject = function(t) {
            return "[object Generator]" === l(t)
        }
        ,
        e.isWebAssemblyCompiledModule = function(t) {
            return "[object WebAssembly.Module]" === l(t)
        }
        ,
        e.isNumberObject = x,
        e.isStringObject = P,
        e.isBooleanObject = U,
        e.isBigIntObject = k,
        e.isSymbolObject = T,
        e.isBoxedPrimitive = function(t) {
            return x(t) || P(t) || U(t) || k(t) || T(t)
        }
        ,
        e.isAnyArrayBuffer = function(t) {
            return "undefined" != typeof Uint8Array && (E(t) || j(t))
        }
        ,
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach((function(t) {
            Object.defineProperty(e, t, {
                enumerable: !1,
                value: function() {
                    throw new Error(t + " is not supported in userland")
                }
            })
        }
        ))
    },
    89539: function(t, e, r) {
        var n = r(34155)
          , o = r(25108)
          , a = Object.getOwnPropertyDescriptors || function(t) {
            for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++)
                r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
            return r
        }
          , i = /%[sdj%]/g;
        e.format = function(t) {
            if (!w(t)) {
                for (var e = [], r = 0; r < arguments.length; r++)
                    e.push(l(arguments[r]));
                return e.join(" ")
            }
            r = 1;
            for (var n = arguments, o = n.length, a = String(t).replace(i, (function(t) {
                if ("%%" === t)
                    return "%";
                if (r >= o)
                    return t;
                switch (t) {
                case "%s":
                    return String(n[r++]);
                case "%d":
                    return Number(n[r++]);
                case "%j":
                    try {
                        return JSON.stringify(n[r++])
                    } catch (t) {
                        return "[Circular]"
                    }
                default:
                    return t
                }
            }
            )), c = n[r]; r < o; c = n[++r])
                m(c) || !_(c) ? a += " " + c : a += " " + l(c);
            return a
        }
        ,
        e.deprecate = function(t, r) {
            if (void 0 !== n && !0 === n.noDeprecation)
                return t;
            if (void 0 === n)
                return function() {
                    return e.deprecate(t, r).apply(this, arguments)
                }
                ;
            var a = !1;
            return function() {
                if (!a) {
                    if (n.throwDeprecation)
                        throw new Error(r);
                    n.traceDeprecation ? o.trace(r) : o.error(r),
                    a = !0
                }
                return t.apply(this, arguments)
            }
        }
        ;
        var c = {}
          , s = /^$/;
        if ({
            NODE_ENV: "production",
            VUE_APP_TYPE: "cloud",
            VUE_APP_MODEL: "single",
            VUE_APP_ACCESS: "normal",
            VUE_APP_ENV: "prd",
            VUE_APP_BASE_URL_KEY: "cloud_single_normal_production_prd",
            BASE_URL: "/"
        }.NODE_DEBUG) {
            var u = {
                NODE_ENV: "production",
                VUE_APP_TYPE: "cloud",
                VUE_APP_MODEL: "single",
                VUE_APP_ACCESS: "normal",
                VUE_APP_ENV: "prd",
                VUE_APP_BASE_URL_KEY: "cloud_single_normal_production_prd",
                BASE_URL: "/"
            }.NODE_DEBUG;
            u = u.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(),
            s = new RegExp("^" + u + "$","i")
        }
        function l(t, r) {
            var n = {
                seen: [],
                stylize: p
            };
            return arguments.length >= 3 && (n.depth = arguments[2]),
            arguments.length >= 4 && (n.colors = arguments[3]),
            b(r) ? n.showHidden = r : r && e._extend(n, r),
            S(n.showHidden) && (n.showHidden = !1),
            S(n.depth) && (n.depth = 2),
            S(n.colors) && (n.colors = !1),
            S(n.customInspect) && (n.customInspect = !0),
            n.colors && (n.stylize = f),
            y(n, t, n.depth)
        }
        function f(t, e) {
            var r = l.styles[e];
            return r ? "[" + l.colors[r][0] + "m" + t + "[" + l.colors[r][1] + "m" : t
        }
        function p(t, e) {
            return t
        }
        function y(t, r, n) {
            if (t.customInspect && r && O(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                var o = r.inspect(n, t);
                return w(o) || (o = y(t, o, n)),
                o
            }
            var a = function(t, e) {
                if (S(e))
                    return t.stylize("undefined", "undefined");
                if (w(e)) {
                    var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return t.stylize(r, "string")
                }
                if (v(e))
                    return t.stylize("" + e, "number");
                if (b(e))
                    return t.stylize("" + e, "boolean");
                if (m(e))
                    return t.stylize("null", "null")
            }(t, r);
            if (a)
                return a;
            var i = Object.keys(r)
              , c = function(t) {
                var e = {};
                return t.forEach((function(t, r) {
                    e[t] = !0
                }
                )),
                e
            }(i);
            if (t.showHidden && (i = Object.getOwnPropertyNames(r)),
            B(r) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))
                return d(r);
            if (0 === i.length) {
                if (O(r)) {
                    var s = r.name ? ": " + r.name : "";
                    return t.stylize("[Function" + s + "]", "special")
                }
                if (E(r))
                    return t.stylize(RegExp.prototype.toString.call(r), "regexp");
                if (A(r))
                    return t.stylize(Date.prototype.toString.call(r), "date");
                if (B(r))
                    return d(r)
            }
            var u, l = "", f = !1, p = ["{", "}"];
            (h(r) && (f = !0,
            p = ["[", "]"]),
            O(r)) && (l = " [Function" + (r.name ? ": " + r.name : "") + "]");
            return E(r) && (l = " " + RegExp.prototype.toString.call(r)),
            A(r) && (l = " " + Date.prototype.toUTCString.call(r)),
            B(r) && (l = " " + d(r)),
            0 !== i.length || f && 0 != r.length ? n < 0 ? E(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(r),
            u = f ? function(t, e, r, n, o) {
                for (var a = [], i = 0, c = e.length; i < c; ++i)
                    U(e, String(i)) ? a.push(g(t, e, r, n, String(i), !0)) : a.push("");
                return o.forEach((function(o) {
                    o.match(/^\d+$/) || a.push(g(t, e, r, n, o, !0))
                }
                )),
                a
            }(t, r, n, c, i) : i.map((function(e) {
                return g(t, r, n, c, e, f)
            }
            )),
            t.seen.pop(),
            function(t, e, r) {
                var n = t.reduce((function(t, e) {
                    return e.indexOf("\n") >= 0 && 0,
                    t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                }
                ), 0);
                if (n > 60)
                    return r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1];
                return r[0] + e + " " + t.join(", ") + " " + r[1]
            }(u, l, p)) : p[0] + l + p[1]
        }
        function d(t) {
            return "[" + Error.prototype.toString.call(t) + "]"
        }
        function g(t, e, r, n, o, a) {
            var i, c, s;
            if ((s = Object.getOwnPropertyDescriptor(e, o) || {
                value: e[o]
            }).get ? c = s.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : s.set && (c = t.stylize("[Setter]", "special")),
            U(n, o) || (i = "[" + o + "]"),
            c || (t.seen.indexOf(s.value) < 0 ? (c = m(r) ? y(t, s.value, null) : y(t, s.value, r - 1)).indexOf("\n") > -1 && (c = a ? c.split("\n").map((function(t) {
                return "  " + t
            }
            )).join("\n").slice(2) : "\n" + c.split("\n").map((function(t) {
                return "   " + t
            }
            )).join("\n")) : c = t.stylize("[Circular]", "special")),
            S(i)) {
                if (a && o.match(/^\d+$/))
                    return c;
                (i = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.slice(1, -1),
                i = t.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                i = t.stylize(i, "string"))
            }
            return i + ": " + c
        }
        function h(t) {
            return Array.isArray(t)
        }
        function b(t) {
            return "boolean" == typeof t
        }
        function m(t) {
            return null === t
        }
        function v(t) {
            return "number" == typeof t
        }
        function w(t) {
            return "string" == typeof t
        }
        function S(t) {
            return void 0 === t
        }
        function E(t) {
            return _(t) && "[object RegExp]" === j(t)
        }
        function _(t) {
            return "object" == typeof t && null !== t
        }
        function A(t) {
            return _(t) && "[object Date]" === j(t)
        }
        function B(t) {
            return _(t) && ("[object Error]" === j(t) || t instanceof Error)
        }
        function O(t) {
            return "function" == typeof t
        }
        function j(t) {
            return Object.prototype.toString.call(t)
        }
        function x(t) {
            return t < 10 ? "0" + t.toString(10) : t.toString(10)
        }
        e.debuglog = function(t) {
            if (t = t.toUpperCase(),
            !c[t])
                if (s.test(t)) {
                    var r = n.pid;
                    c[t] = function() {
                        var n = e.format.apply(e, arguments);
                        o.error("%s %d: %s", t, r, n)
                    }
                } else
                    c[t] = function() {}
                    ;
            return c[t]
        }
        ,
        e.inspect = l,
        l.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        },
        l.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        },
        e.types = r(55955),
        e.isArray = h,
        e.isBoolean = b,
        e.isNull = m,
        e.isNullOrUndefined = function(t) {
            return null == t
        }
        ,
        e.isNumber = v,
        e.isString = w,
        e.isSymbol = function(t) {
            return "symbol" == typeof t
        }
        ,
        e.isUndefined = S,
        e.isRegExp = E,
        e.types.isRegExp = E,
        e.isObject = _,
        e.isDate = A,
        e.types.isDate = A,
        e.isError = B,
        e.types.isNativeError = B,
        e.isFunction = O,
        e.isPrimitive = function(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
        }
        ,
        e.isBuffer = r(20384);
        var P = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        function U(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        e.log = function() {
            var t, r;
            t = new Date,
            r = [x(t.getHours()), x(t.getMinutes()), x(t.getSeconds())].join(":"),
            [t.getDate(), P[t.getMonth()], r].join(" "),
            e.format.apply(e, arguments)
        }
        ,
        e.inherits = r(35717),
        e._extend = function(t, e) {
            if (!e || !_(e))
                return t;
            for (var r = Object.keys(e), n = r.length; n--; )
                t[r[n]] = e[r[n]];
            return t
        }
        ;
        var k = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
        function T(t, e) {
            if (!t) {
                var r = new Error("Promise was rejected with a falsy value");
                r.reason = t,
                t = r
            }
            return e(t)
        }
        e.promisify = function(t) {
            if ("function" != typeof t)
                throw new TypeError('The "original" argument must be of type Function');
            if (k && t[k]) {
                var e;
                if ("function" != typeof (e = t[k]))
                    throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                return Object.defineProperty(e, k, {
                    value: e,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }),
                e
            }
            function e() {
                for (var e, r, n = new Promise((function(t, n) {
                    e = t,
                    r = n
                }
                )), o = [], a = 0; a < arguments.length; a++)
                    o.push(arguments[a]);
                o.push((function(t, n) {
                    t ? r(t) : e(n)
                }
                ));
                try {
                    t.apply(this, o)
                } catch (t) {
                    r(t)
                }
                return n
            }
            return Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            k && Object.defineProperty(e, k, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
            Object.defineProperties(e, a(t))
        }
        ,
        e.promisify.custom = k,
        e.callbackify = function(t) {
            if ("function" != typeof t)
                throw new TypeError('The "original" argument must be of type Function');
            function e() {
                for (var e = [], r = 0; r < arguments.length; r++)
                    e.push(arguments[r]);
                var o = e.pop();
                if ("function" != typeof o)
                    throw new TypeError("The last argument must be of type Function");
                var a = this
                  , i = function() {
                    return o.apply(a, arguments)
                };
                t.apply(this, e).then((function(t) {
                    n.nextTick(i.bind(null, null, t))
                }
                ), (function(t) {
                    n.nextTick(T.bind(null, t, i))
                }
                ))
            }
            return Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            Object.defineProperties(e, a(t)),
            e
        }
    },
    86430: function(t, e, r) {
        "use strict";
        var n = r(94029)
          , o = r(63083)
          , a = r(55559)
          , i = r(21924)
          , c = r(27296)
          , s = i("Object.prototype.toString")
          , u = r(96410)()
          , l = "undefined" == typeof globalThis ? r.g : globalThis
          , f = o()
          , p = i("String.prototype.slice")
          , y = Object.getPrototypeOf
          , d = i("Array.prototype.indexOf", !0) || function(t, e) {
            for (var r = 0; r < t.length; r += 1)
                if (t[r] === e)
                    return r;
            return -1
        }
          , g = {
            __proto__: null
        };
        n(f, u && c && y ? function(t) {
            var e = new l[t];
            if (Symbol.toStringTag in e) {
                var r = y(e)
                  , n = c(r, Symbol.toStringTag);
                if (!n) {
                    var o = y(r);
                    n = c(o, Symbol.toStringTag)
                }
                g["$" + t] = a(n.get)
            }
        }
        : function(t) {
            var e = new l[t]
              , r = e.slice || e.set;
            r && (g["$" + t] = a(r))
        }
        );
        t.exports = function(t) {
            if (!t || "object" != typeof t)
                return !1;
            if (!u) {
                var e = p(s(t), 8, -1);
                return d(f, e) > -1 ? e : "Object" === e && function(t) {
                    var e = !1;
                    return n(g, (function(r, n) {
                        if (!e)
                            try {
                                r(t),
                                e = p(n, 1)
                            } catch (t) {}
                    }
                    )),
                    e
                }(t)
            }
            return c ? function(t) {
                var e = !1;
                return n(g, (function(r, n) {
                    if (!e)
                        try {
                            "$" + r(t) === n && (e = p(n, 1))
                        } catch (t) {}
                }
                )),
                e
            }(t) : null
        }
    },
    63083: function(t, e, r) {
        "use strict";
        var n = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"]
          , o = "undefined" == typeof globalThis ? r.g : globalThis;
        t.exports = function() {
            for (var t = [], e = 0; e < n.length; e++)
                "function" == typeof o[n[e]] && (t[t.length] = n[e]);
            return t
        }
    },
    21012: function(t, e) {
        "use strict";
        e.Z = class {
            constructor(t) {
                this.buffer = t,
                this.bufferIndex = 0,
                this.totalBytes = t.byteLength,
                this.currentWord = 0,
                this.currentWordBitsLeft = 0
            }
            destroy() {
                this.buffer = new Uint8Array(0)
            }
            readBits(t) {
                if (t > 32)
                    throw new Error("ExpGolomb: readBits() bits exceeded max 32bits!");
                if (t <= this.currentWordBitsLeft) {
                    const e = this.currentWord >>> 32 - t;
                    return this.currentWord <<= t,
                    this.currentWordBitsLeft -= t,
                    e
                }
                let e = this.currentWordBitsLeft ? this.currentWord : 0;
                e >>>= 32 - this.currentWordBitsLeft;
                const r = t - this.currentWordBitsLeft;
                this.fillCurrentWord();
                const n = Math.min(r, this.currentWordBitsLeft)
                  , o = this.currentWord >>> 32 - n;
                return this.currentWord <<= n,
                this.currentWordBitsLeft -= n,
                e = e << n | o,
                e
            }
            readBool() {
                return 1 === this.readBits(1)
            }
            readByte() {
                return this.readBits(8)
            }
            readUEG() {
                const t = this.skipLeadingZero();
                return this.readBits(t + 1) - 1
            }
            readSEG() {
                const t = this.readUEG();
                return 1 & t ? t + 1 >>> 1 : -1 * (t >>> 1)
            }
            skipLeadingZero() {
                let t;
                for (t = 0; t < this.currentWordBitsLeft; t++)
                    if (0 != (this.currentWord & 2147483648 >>> t))
                        return this.currentWord <<= t,
                        this.currentWordBitsLeft -= t,
                        t;
                return this.fillCurrentWord(),
                t + this.skipLeadingZero()
            }
            fillCurrentWord() {
                const t = this.totalBytes - this.bufferIndex;
                if (t <= 0)
                    throw new Error("ExpGolomb: fillCurrentWord() but no bytes available");
                const e = Math.min(4, t)
                  , r = new Uint8Array(4);
                r.set(this.buffer.subarray(this.bufferIndex, this.bufferIndex + e)),
                this.currentWord = new DataView(r.buffer).getUint32(0, !1),
                this.bufferIndex += e,
                this.currentWordBitsLeft = 8 * e
            }
        }
    },
    35171: function(t, e, r) {
        "use strict";
        var n;
        r.d(e, {
            GV: function() {
                return i
            },
            JQ: function() {
                return c
            },
            k_: function() {
                return n
            },
            vf: function() {
                return a
            }
        }),
        function(t) {
            t[t.kUnspecified = 0] = "kUnspecified",
            t[t.kSliceNonIDR = 1] = "kSliceNonIDR",
            t[t.kSliceDPA = 2] = "kSliceDPA",
            t[t.kSliceDPB = 3] = "kSliceDPB",
            t[t.kSliceDPC = 4] = "kSliceDPC",
            t[t.kSliceIDR = 5] = "kSliceIDR",
            t[t.kSliceSEI = 6] = "kSliceSEI",
            t[t.kSliceSPS = 7] = "kSliceSPS",
            t[t.kSlicePPS = 8] = "kSlicePPS",
            t[t.kSliceAUD = 9] = "kSliceAUD",
            t[t.kEndOfSequence = 10] = "kEndOfSequence",
            t[t.kEndOfStream = 11] = "kEndOfStream",
            t[t.kFiller = 12] = "kFiller",
            t[t.kSPSExt = 13] = "kSPSExt",
            t[t.kReserved0 = 14] = "kReserved0"
        }(n || (n = {}));
        class o {
        }
        class a {
            constructor(t) {
                const e = t.data.byteLength;
                this.type = t.type,
                this.data = new Uint8Array(4 + e);
                new DataView(this.data.buffer).setUint32(0, e),
                this.data.set(t.data, 4)
            }
        }
        class i {
            constructor(t) {
                this.TAG = "H264AnnexBParser",
                this.current_startcode_offset_ = 0,
                this.eof_flag_ = !1,
                this.data_ = t,
                this.current_startcode_offset_ = this.findNextStartCodeOffset(0),
                this.eof_flag_
            }
            findNextStartCodeOffset(t) {
                let e = t;
                const r = this.data_;
                for (; ; ) {
                    if (e + 3 >= r.byteLength)
                        return this.eof_flag_ = !0,
                        r.byteLength;
                    const t = r[e + 0] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]
                      , n = r[e + 0] << 16 | r[e + 1] << 8 | r[e + 2];
                    if (1 === t || 1 === n)
                        return e;
                    e++
                }
            }
            readNextNaluPayload() {
                const t = this.data_;
                let e = null;
                for (; null == e && !this.eof_flag_; ) {
                    let r = this.current_startcode_offset_;
                    r += 1 === (t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]) ? 4 : 3;
                    const a = 31 & t[r]
                      , i = (128 & t[r]) >>> 7
                      , c = this.findNextStartCodeOffset(r);
                    if (this.current_startcode_offset_ = c,
                    a >= n.kReserved0)
                        continue;
                    if (0 !== i)
                        continue;
                    const s = t.subarray(r, c);
                    e = new o,
                    e.type = a,
                    e.data = s
                }
                return e
            }
        }
        class c {
            constructor(t, e, r) {
                let n = 8 + t.byteLength + 1 + 2 + e.byteLength
                  , o = !1;
                66 !== t[3] && 77 !== t[3] && 88 !== t[3] && (o = !0,
                n += 4);
                const a = this.data = new Uint8Array(n);
                a[0] = 1,
                a[1] = t[1],
                a[2] = t[2],
                a[3] = t[3],
                a[4] = 255,
                a[5] = 225;
                const i = t.byteLength;
                a[6] = i >>> 8,
                a[7] = 255 & i;
                let c = 8;
                a.set(t, 8),
                c += i,
                a[c] = 1;
                const s = e.byteLength;
                a[c + 1] = s >>> 8,
                a[c + 2] = 255 & s,
                a.set(e, c + 3),
                c += 3 + s,
                o && (a[c] = 252 | r.chroma_format_idc,
                a[c + 1] = 248 | r.bit_depth_luma - 8,
                a[c + 2] = 248 | r.bit_depth_chroma - 8,
                a[c + 3] = 0,
                c += 4)
            }
            getData() {
                return this.data
            }
        }
    },
    3359: function(t, e, r) {
        "use strict";
        var n = r(86490)
          , o = r(21012);
        class a {
            static _ebsp2rbsp(t) {
                const e = t
                  , r = e.byteLength
                  , n = new Uint8Array(r);
                let o = 0;
                for (let t = 0; t < r; t++)
                    t >= 2 && 3 === e[t] && 0 === e[t - 1] && 0 === e[t - 2] || (n[o] = e[t],
                    o++);
                return new Uint8Array(n.buffer,0,o)
            }
            static parseVPS(t) {
                const e = a._ebsp2rbsp(t)
                  , r = new o.Z(e);
                r.readByte(),
                r.readByte();
                r.readBits(4);
                r.readBits(2);
                r.readBits(6);
                return {
                    num_temporal_layers: r.readBits(3) + 1,
                    temporal_id_nested: r.readBool()
                }
            }
            static parseSPS(t) {
                const e = a._ebsp2rbsp(t)
                  , r = new o.Z(e);
                r.readByte(),
                r.readByte();
                let i = 0
                  , c = 0
                  , s = 0
                  , u = 0;
                r.readBits(4);
                const l = r.readBits(3)
                  , f = (r.readBool(),
                n.U3.get(n.uH.BT601))
                  , p = r.readBits(2)
                  , y = r.readBool()
                  , d = r.readBits(5)
                  , g = r.readByte()
                  , h = r.readByte()
                  , b = r.readByte()
                  , m = r.readByte()
                  , v = r.readByte()
                  , w = r.readByte()
                  , S = r.readByte()
                  , E = r.readByte()
                  , _ = r.readByte()
                  , A = r.readByte()
                  , B = r.readByte()
                  , O = []
                  , j = [];
                for (let t = 0; t < l; t++)
                    O.push(r.readBool()),
                    j.push(r.readBool());
                if (l > 0)
                    for (let t = l; t < 8; t++)
                        r.readBits(2);
                for (let t = 0; t < l; t++)
                    O[t] && (r.readByte(),
                    r.readByte(),
                    r.readByte(),
                    r.readByte(),
                    r.readByte(),
                    r.readByte(),
                    r.readByte(),
                    r.readByte(),
                    r.readByte(),
                    r.readByte(),
                    r.readByte()),
                    j[t] && r.readByte();
                r.readUEG();
                const x = r.readUEG();
                3 == x && r.readBits(1);
                const P = r.readUEG()
                  , U = r.readUEG();
                r.readBool() && (i += r.readUEG(),
                c += r.readUEG(),
                s += r.readUEG(),
                u += r.readUEG());
                const k = r.readUEG()
                  , T = r.readUEG()
                  , R = r.readUEG();
                for (let t = r.readBool() ? 0 : l; t <= l; t++)
                    r.readUEG(),
                    r.readUEG(),
                    r.readUEG();
                r.readUEG(),
                r.readUEG(),
                r.readUEG(),
                r.readUEG(),
                r.readUEG(),
                r.readUEG();
                if (r.readBool()) {
                    if (r.readBool())
                        for (let t = 0; t < 4; t++)
                            for (let e = 0; e < (3 === t ? 2 : 6); e++) {
                                if (r.readBool()) {
                                    const e = Math.min(64, 1 << 4 + (t << 1));
                                    t > 1 && r.readSEG();
                                    for (let t = 0; t < e; t++)
                                        r.readSEG()
                                } else
                                    r.readUEG()
                            }
                }
                r.readBool(),
                r.readBool();
                r.readBool() && (r.readByte(),
                r.readUEG(),
                r.readUEG(),
                r.readBool());
                const I = r.readUEG();
                let F = 0;
                for (let t = 0; t < I; t++) {
                    let e = !1;
                    if (0 !== t && (e = r.readBool()),
                    e) {
                        t === I && r.readUEG(),
                        r.readBool(),
                        r.readUEG();
                        let e = 0;
                        for (let t = 0; t <= F; t++) {
                            const t = r.readBool();
                            let n = !1;
                            t || (n = r.readBool()),
                            (t || n) && e++
                        }
                        F = e
                    } else {
                        const t = r.readUEG()
                          , e = r.readUEG();
                        F = t + e;
                        for (let e = 0; e < t; e++)
                            r.readUEG(),
                            r.readBool();
                        for (let t = 0; t < e; t++)
                            r.readUEG(),
                            r.readBool()
                    }
                }
                if (r.readBool()) {
                    const t = r.readUEG();
                    for (let e = 0; e < t; e++) {
                        for (let t = 0; t < R + 4; t++)
                            r.readBits(1);
                        r.readBits(1)
                    }
                }
                let G = !1
                  , D = 0
                  , N = 1
                  , L = 1
                  , M = !1
                  , C = 1
                  , q = 1;
                r.readBool(),
                r.readBool();
                if (r.readBool()) {
                    if (r.readBool()) {
                        const t = r.readByte();
                        t > 0 && t < 16 ? (N = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][t - 1],
                        L = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][t - 1]) : 255 === t && (N = r.readBits(16),
                        L = r.readBits(16))
                    }
                    r.readBool() && r.readBool();
                    if (r.readBool()) {
                        r.readBits(3),
                        f.fullRange = r.readBool();
                        if (r.readBool()) {
                            switch (r.readBits(8)) {
                            case n.zp.BT709:
                                f.primaries = n.mf.get(n.zp.BT709);
                                break;
                            case n.zp.BT470BG:
                                f.primaries = n.mf.get(n.zp.BT470BG);
                                break;
                            case n.zp.SMPTE170M:
                                f.primaries = n.mf.get(n.zp.SMPTE170M)
                            }
                            switch (r.readBits(8)) {
                            case n.uK.BT709:
                                f.transfer = n.q7.get(n.uK.BT709);
                                break;
                            case n.uK.SMPTE170M:
                                f.transfer = n.q7.get(n.uK.SMPTE170M)
                            }
                            switch (r.readBits(8)) {
                            case n.wo.RGB:
                                f.matrix = n.mb.get(n.wo.RGB);
                                break;
                            case n.wo.BT709:
                                f.matrix = n.mb.get(n.wo.BT709);
                                break;
                            case n.wo.BT470BG:
                                f.matrix = n.mb.get(n.wo.BT470BG);
                                break;
                            case n.wo.SMPTE170M:
                                f.matrix = n.mb.get(n.wo.SMPTE170M)
                            }
                        }
                    }
                    r.readBool() && (r.readUEG(),
                    r.readUEG());
                    r.readBool(),
                    r.readBool(),
                    r.readBool();
                    G = r.readBool(),
                    G && (i += r.readUEG(),
                    c += r.readUEG(),
                    s += r.readUEG(),
                    u += r.readUEG());
                    if (r.readBool()) {
                        C = r.readBits(32),
                        q = r.readBits(32);
                        if (r.readBool()) {
                            r.readUEG();
                            if (r.readBool()) {
                                let t = !1
                                  , e = !1
                                  , n = !1;
                                if (1 && (t = r.readBool(),
                                e = r.readBool(),
                                t || e)) {
                                    n = r.readBool(),
                                    n && (r.readByte(),
                                    r.readBits(5),
                                    r.readBool(),
                                    r.readBits(5));
                                    r.readBits(4),
                                    r.readBits(4);
                                    n && r.readBits(4),
                                    r.readBits(5),
                                    r.readBits(5),
                                    r.readBits(5)
                                }
                                for (let o = 0; o <= l; o++) {
                                    const o = r.readBool();
                                    M = o;
                                    let a = !1
                                      , i = 1;
                                    o || (a = r.readBool());
                                    let c = !1;
                                    if (a ? r.readSEG() : c = r.readBool(),
                                    c || (i = r.readUEG() + 1),
                                    t)
                                        for (let t = 0; t < i; t++)
                                            r.readUEG(),
                                            r.readUEG(),
                                            n && (r.readUEG(),
                                            r.readUEG());
                                    if (e)
                                        for (let t = 0; t < i; t++)
                                            r.readUEG(),
                                            r.readUEG(),
                                            n && (r.readUEG(),
                                            r.readUEG())
                                }
                            }
                        }
                    }
                    if (r.readBool()) {
                        r.readBool(),
                        r.readBool(),
                        r.readBool();
                        D = r.readUEG();
                        r.readUEG(),
                        r.readUEG(),
                        r.readUEG(),
                        r.readUEG()
                    }
                }
                r.readBool();
                const W = `hvc1.${d}.1.L${B}.B0`
                  , z = P
                  , V = U;
                let $ = 1;
                return 1 !== N && 1 !== L && ($ = N / L),
                r.destroy(),
                {
                    codec_mimetype: W,
                    level_string: a.getLevelString(B),
                    profile_idc: d,
                    bit_depth: k + 8,
                    ref_frames: 1,
                    chroma_format: x,
                    chroma_format_string: a.getChromaFormatString(x),
                    general_level_idc: B,
                    general_profile_space: p,
                    general_tier_flag: y,
                    general_profile_idc: d,
                    general_profile_compatibility_flags_1: g,
                    general_profile_compatibility_flags_2: h,
                    general_profile_compatibility_flags_3: b,
                    general_profile_compatibility_flags_4: m,
                    general_constraint_indicator_flags_1: v,
                    general_constraint_indicator_flags_2: w,
                    general_constraint_indicator_flags_3: S,
                    general_constraint_indicator_flags_4: E,
                    general_constraint_indicator_flags_5: _,
                    general_constraint_indicator_flags_6: A,
                    min_spatial_segmentation_idc: D,
                    constant_frame_rate: 0,
                    chroma_format_idc: x,
                    bit_depth_luma_minus8: k,
                    bit_depth_chroma_minus8: T,
                    frame_rate: {
                        fixed: M,
                        fps: q / C,
                        fps_den: C,
                        fps_num: q
                    },
                    sar_ratio: {
                        width: N,
                        height: L
                    },
                    codec_size: {
                        width: z,
                        height: V
                    },
                    present_size: {
                        width: z * $,
                        height: V
                    },
                    colorSpace: f
                }
            }
            static parsePPS(t) {
                const e = a._ebsp2rbsp(t)
                  , r = new o.Z(e);
                r.readByte(),
                r.readByte();
                r.readUEG(),
                r.readUEG(),
                r.readBool(),
                r.readBool(),
                r.readBits(3),
                r.readBool(),
                r.readBool(),
                r.readUEG(),
                r.readUEG(),
                r.readSEG(),
                r.readBool(),
                r.readBool();
                if (r.readBool()) {
                    r.readUEG()
                }
                r.readSEG(),
                r.readSEG(),
                r.readBool(),
                r.readBool(),
                r.readBool(),
                r.readBool();
                const n = r.readBool()
                  , i = r.readBool();
                let c = 1;
                return i && n ? c = 0 : i ? c = 3 : n && (c = 2),
                {
                    parallelismType: c
                }
            }
            static getChromaFormatString(t) {
                switch (t) {
                case 0:
                    return "4:0:0";
                case 1:
                    return "4:2:0";
                case 2:
                    return "4:2:2";
                case 3:
                    return "4:4:4";
                default:
                    return "Unknown"
                }
            }
            static getProfileString(t) {
                switch (t) {
                case 1:
                    return "Main";
                case 2:
                    return "Main10";
                case 3:
                    return "MainSP";
                case 4:
                    return "Rext";
                case 9:
                    return "SCC";
                default:
                    return "Unknown"
                }
            }
            static getLevelString(t) {
                return (t / 30).toFixed(1)
            }
        }
        e.Z = a
    },
    14988: function(t, e, r) {
        "use strict";
        var n;
        r.d(e, {
            L5: function() {
                return c
            },
            Xn: function() {
                return n
            },
            iA: function() {
                return i
            },
            zW: function() {
                return a
            }
        }),
        function(t) {
            t[t.kSliceIDR_W_RADL = 19] = "kSliceIDR_W_RADL",
            t[t.kSliceIDR_N_LP = 20] = "kSliceIDR_N_LP",
            t[t.kSliceCRA_NUT = 21] = "kSliceCRA_NUT",
            t[t.kSliceVPS = 32] = "kSliceVPS",
            t[t.kSliceSPS = 33] = "kSliceSPS",
            t[t.kSlicePPS = 34] = "kSlicePPS",
            t[t.kSliceAUD = 35] = "kSliceAUD"
        }(n || (n = {}));
        class o {
            constructor() {
                this.type = n.kSliceIDR_W_RADL,
                this.data = new Uint8Array(0)
            }
        }
        class a {
            constructor(t) {
                const e = t.data.byteLength;
                this.type = t.type,
                this.data = new Uint8Array(4 + e);
                new DataView(this.data.buffer).setUint32(0, e),
                this.data.set(t.data, 4)
            }
        }
        class i {
            constructor(t) {
                this.TAG = "H265AnnexBParser",
                this.current_startcode_offset_ = 0,
                this.eof_flag_ = !1,
                this.data_ = t,
                this.current_startcode_offset_ = this.findNextStartCodeOffset(0),
                this.eof_flag_
            }
            findNextStartCodeOffset(t) {
                let e = t;
                const r = this.data_;
                for (; ; ) {
                    if (e + 3 >= r.byteLength)
                        return this.eof_flag_ = !0,
                        r.byteLength;
                    const t = r[e + 0] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]
                      , n = r[e + 0] << 16 | r[e + 1] << 8 | r[e + 2];
                    if (1 === t || 1 === n)
                        return e;
                    e++
                }
            }
            readNextNaluPayload() {
                const t = this.data_;
                let e = null;
                for (; null == e && !this.eof_flag_; ) {
                    let r = this.current_startcode_offset_;
                    r += 1 === (t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]) ? 4 : 3;
                    const n = t[r] >> 1 & 63
                      , a = (128 & t[r]) >>> 7
                      , i = this.findNextStartCodeOffset(r);
                    if (this.current_startcode_offset_ = i,
                    0 !== a)
                        continue;
                    const c = t.subarray(r, i);
                    e = new o,
                    e.type = n,
                    e.data = c
                }
                return e
            }
        }
        class c {
            constructor(t, e, r, o) {
                const a = 23 + (5 + t.byteLength) + (5 + e.byteLength) + (5 + r.byteLength)
                  , i = this.data = new Uint8Array(a);
                i[0] = 1,
                i[1] = (3 & o.general_profile_space) << 6 | (o.general_tier_flag ? 1 : 0) << 5 | 31 & o.general_profile_idc,
                i[2] = o.general_profile_compatibility_flags_1,
                i[3] = o.general_profile_compatibility_flags_2,
                i[4] = o.general_profile_compatibility_flags_3,
                i[5] = o.general_profile_compatibility_flags_4,
                i[6] = o.general_constraint_indicator_flags_1,
                i[7] = o.general_constraint_indicator_flags_2,
                i[8] = o.general_constraint_indicator_flags_3,
                i[9] = o.general_constraint_indicator_flags_4,
                i[10] = o.general_constraint_indicator_flags_5,
                i[11] = o.general_constraint_indicator_flags_6,
                i[12] = o.general_level_idc,
                i[13] = 240 | (3840 & o.min_spatial_segmentation_idc) >> 8,
                i[14] = 255 & o.min_spatial_segmentation_idc,
                i[15] = 252 | 3 & o.parallelismType,
                i[16] = 252 | 3 & o.chroma_format_idc,
                i[17] = 248 | 7 & o.bit_depth_luma_minus8,
                i[18] = 248 | 7 & o.bit_depth_chroma_minus8,
                i[19] = 0,
                i[20] = 0,
                i[21] = (3 & o.constant_frame_rate) << 6 | (7 & o.num_temporal_layers) << 3 | (o.temporal_id_nested ? 1 : 0) << 2 | 3,
                i[22] = 3,
                i[23] = 128 | n.kSliceVPS,
                i[24] = 0,
                i[25] = 1,
                i[26] = (65280 & t.byteLength) >> 8,
                i[27] = (255 & t.byteLength) >> 0,
                i.set(t, 28),
                i[23 + (5 + t.byteLength) + 0] = 128 | n.kSliceSPS,
                i[23 + (5 + t.byteLength) + 1] = 0,
                i[23 + (5 + t.byteLength) + 2] = 1,
                i[23 + (5 + t.byteLength) + 3] = (65280 & e.byteLength) >> 8,
                i[23 + (5 + t.byteLength) + 4] = (255 & e.byteLength) >> 0,
                i.set(e, 23 + (5 + t.byteLength) + 5),
                i[23 + (5 + t.byteLength + 5 + e.byteLength) + 0] = 128 | n.kSlicePPS,
                i[23 + (5 + t.byteLength + 5 + e.byteLength) + 1] = 0,
                i[23 + (5 + t.byteLength + 5 + e.byteLength) + 2] = 1,
                i[23 + (5 + t.byteLength + 5 + e.byteLength) + 3] = (65280 & r.byteLength) >> 8,
                i[23 + (5 + t.byteLength + 5 + e.byteLength) + 4] = (255 & r.byteLength) >> 0,
                i.set(r, 23 + (5 + t.byteLength + 5 + e.byteLength) + 5)
            }
            getData() {
                return this.data
            }
        }
    },
    7677: function(t, e, r) {
        "use strict";
        r.d(e, {
            R: function() {
                return a
            }
        });
        var n = r(19131)
          , o = r(3174);
        const a = () => ({
            type: n.CO.VIDEO,
            id: 0,
            codec: "",
            keyframes: [],
            sampleIndex: 0,
            sampleOffset: [],
            sampleToChunk: [],
            sampleSize: [],
            chunkOffset: [],
            channelCount: 0,
            sampleRate: 0,
            keyframeCount: 0,
            keyframeIndex: [],
            duration: 0,
            timescale: 0,
            creationTime: 0,
            sequenceNumber: 0,
            codecWidth: 0,
            codecHeight: 0,
            presentWidth: 0,
            presentHeight: 0,
            profile: "",
            level: "",
            bitDepth: 0,
            chromaFormat: 0,
            sarRatio: {
                width: 0,
                height: 0
            },
            frameRate: {
                fixed: !0,
                fps: 0,
                fps_den: 0,
                fps_num: 0
            },
            refSampleDuration: 0,
            hvcc: new Uint8Array(0),
            avcc: new Uint8Array(0)
        })
          , i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
        class c {
            static init() {
                for (const t in c.types)
                    Object.prototype.hasOwnProperty.call(c.types, t) && (c.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)])
            }
            static box(t, ...e) {
                let r = 8;
                const n = e.length;
                for (let t = 0; t < n; t++)
                    r += e[t].byteLength;
                const o = new Uint8Array(r);
                o[0] = r >>> 24 & 255,
                o[1] = r >>> 16 & 255,
                o[2] = r >>> 8 & 255,
                o[3] = 255 & r,
                o.set(t, 4);
                let a = 8;
                for (let t = 0; t < n; t++)
                    o.set(e[t], a),
                    a += e[t].byteLength;
                return o
            }
            static generateInitSegment(t) {
                const e = c.box(c.types.ftyp, c.constants.FTYP)
                  , r = c.moov(t)
                  , n = new Uint8Array(e.byteLength + r.byteLength);
                return n.set(e, 0),
                n.set(r, e.byteLength),
                n
            }
            static get4BytesFromNumber(t) {
                return [t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
            }
            static moov(t) {
                const e = c.mvhd(t)
                  , r = [];
                if (t.videoTracks.length < 1)
                    throw new Error("Mp4 generator: video track not exists.");
                return t.fmp4 ? r.push(c.trak(t.videoTracks[0]), c.mvex(t.videoTracks[0])) : (t.videoTracks.forEach((t => {
                    r.push(c.trak(t))
                }
                )),
                t.audioTracks.forEach((t => {
                    r.push(c.trak(t))
                }
                ))),
                c.box(c.types.moov, e, ...r)
            }
            static mvhd({creationTime: t, timescale: e, duration: r, nextTrackId: n}) {
                return c.box(c.types.mvhd, new Uint8Array([0, 0, 0, 0, ...c.get4BytesFromNumber(t || 0), ...c.get4BytesFromNumber(t || 0), ...c.get4BytesFromNumber(e), ...c.get4BytesFromNumber(r), 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ...c.get4BytesFromNumber(n)]))
            }
            static trak(t) {
                return c.box(c.types.trak, c.tkhd(t), c.mdia(t))
            }
            static tkhd(t) {
                const e = t.id
                  , r = t.duration
                  , n = t.presentWidth
                  , o = t.presentHeight;
                return c.box(c.types.tkhd, new Uint8Array([0, 0, 0, 3, ...c.get4BytesFromNumber(t.creationTime || 0), ...c.get4BytesFromNumber(t.creationTime || 0), ...c.get4BytesFromNumber(e), 0, 0, 0, 0, ...c.get4BytesFromNumber(r), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >>> 8 & 255, 255 & n, 0, 0, o >>> 8 & 255, 255 & o, 0, 0]))
            }
            static mdia(t) {
                return c.box(c.types.mdia, c.mdhd(t), c.hdlr(t), c.minf(t))
            }
            static mdhd(t) {
                const e = t.timescale
                  , r = t.duration;
                return c.box(c.types.mdhd, new Uint8Array([0, 0, 0, 0, ...c.get4BytesFromNumber(t.creationTime || 0), ...c.get4BytesFromNumber(t.creationTime || 0), ...c.get4BytesFromNumber(e), ...c.get4BytesFromNumber(r), 85, 196, 0, 0]))
            }
            static hdlr(t) {
                let e = null;
                return e = t.type === n.CO.AUDIO ? c.constants.HDLR_AUDIO : c.constants.HDLR_VIDEO,
                c.box(c.types.hdlr, e)
            }
            static minf(t) {
                let e = null;
                return e = t.type === n.CO.AUDIO ? c.box(c.types.smhd, c.constants.SMHD) : c.box(c.types.vmhd, c.constants.VMHD),
                c.box(c.types.minf, e, c.dinf(), c.stbl(t))
            }
            static dinf() {
                return c.box(c.types.dinf, c.box(c.types.dref, c.constants.DREF))
            }
            static stbl(t) {
                let e;
                return "chunkOffset"in t ? (e = [c.stsd(t), c.stts(t), c.stss(t), c.stsc(t), c.stsz(t), c.stco(t)],
                t.type === n.CO.AUDIO && e.splice(2, 1)) : e = [c.stsd(t), c.box(c.types.stts, c.constants.STTS), c.box(c.types.stsc, c.constants.STSC), c.box(c.types.stsz, c.constants.STSZ), c.box(c.types.stco, c.constants.STCO)],
                c.box(c.types.stbl, ...e)
            }
            static stsd(t) {
                return t.type === n.CO.AUDIO ? t.codec === o.d.MP3 ? c.box(c.types.stsd, c.constants.STSD_PREFIX, c.mp3(t)) : t.codec === o.d.ALAW ? c.box(c.types.stsd, c.constants.STSD_PREFIX, c.alaw(t)) : c.box(c.types.stsd, c.constants.STSD_PREFIX, c.mp4a(t)) : "video" === t.type && t.codec.startsWith("hvc1") ? c.box(c.types.stsd, c.constants.STSD_PREFIX, c.hvc1(t)) : c.box(c.types.stsd, c.constants.STSD_PREFIX, c.avc1(t))
            }
            static mp3(t) {
                const e = t.channelCount || 0
                  , r = t.sampleRate || 0
                  , n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0, 16, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0]);
                return c.box(c.types[".mp3"], n)
            }
            static mp4a(t) {
                const e = t.channelCount || 0
                  , r = t.sampleRate || 0
                  , n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0, 16, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0]);
                return c.box(c.types.mp4a, n, c.esds(t))
            }
            static alaw(t) {
                const e = t.channelCount || 0
                  , r = t.sampleRate || 0
                  , n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, 0, 16, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0]);
                return c.box(c.types.alaw, n)
            }
            static stts(t) {
                if (!t.sampleOffset)
                    return c.box(c.types.stts, c.constants.STTS);
                const e = [0, 0, 0, 0, ...c.get4BytesFromNumber(t.sampleOffset.length)];
                return t.sampleOffset.forEach((t => {
                    e.push(...c.get4BytesFromNumber(t.sampleCount)),
                    e.push(...c.get4BytesFromNumber(t.sampleDelta))
                }
                )),
                c.box(c.types.stts, new Uint8Array(e))
            }
            static stss(t) {
                if (!t.keyframeCount)
                    return c.box(c.types.stss, c.constants.STSS);
                const e = [0, 0, 0, 0, ...c.get4BytesFromNumber(t.keyframeCount)];
                for (let r = 0; r < t.keyframeIndex.length; r++)
                    e.push(...c.get4BytesFromNumber(t.keyframeIndex[r]));
                return c.box(c.types.stss, new Uint8Array(e))
            }
            static stsc(t) {
                if (!t.sampleToChunk)
                    return c.box(c.types.stsc, c.constants.STSC);
                const e = [0, 0, 0, 0, ...c.get4BytesFromNumber(t.sampleToChunk.length)];
                for (let r = 0; r < t.sampleToChunk.length; r++)
                    e.push(...c.get4BytesFromNumber(t.sampleToChunk[r].firstChunk), ...c.get4BytesFromNumber(t.sampleToChunk[r].samplesPerChunk), ...c.get4BytesFromNumber(t.sampleToChunk[r].sampleDesc));
                return c.box(c.types.stsc, new Uint8Array(e))
            }
            static stsz(t) {
                if (!t.sampleSize)
                    return c.box(c.types.stsz, c.constants.STSZ);
                const e = [0, 0, 0, 0, 0, 0, 0, 0, ...c.get4BytesFromNumber(t.sampleSize.length)];
                for (let r = 0; r < t.sampleSize.length; r++)
                    e.push(...c.get4BytesFromNumber(t.sampleSize[r]));
                return c.box(c.types.stsz, new Uint8Array(e))
            }
            static stco(t) {
                if (!t.chunkOffset)
                    return c.box(c.types.stco, c.constants.STCO);
                const e = [0, 0, 0, 0, ...c.get4BytesFromNumber(t.chunkOffset.length)];
                for (let r = 0; r < t.chunkOffset.length; r++)
                    e.push(...c.get4BytesFromNumber(t.chunkOffset[r]));
                return c.box(c.types.stco, new Uint8Array(e))
            }
            static esds(t) {
                const e = t.config || []
                  , r = e.length
                  , n = new Uint8Array([0, 0, 0, 0, 3, 23 + r, 0, 1, 0, 4, 15 + r, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([r]).concat(e).concat([6, 1, 2]));
                return c.box(c.types.esds, n)
            }
            static avc1(t) {
                const e = t.avcc
                  , r = t.codecWidth
                  , n = t.codecHeight
                  , o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, n >>> 8 & 255, 255 & n, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
                return c.box(c.types.avc1, o, c.box(c.types.avcC, e))
            }
            static hvc1(t) {
                const e = t.hvcc
                  , r = t.codecWidth
                  , n = t.codecHeight
                  , o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, n >>> 8 & 255, 255 & n, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
                return c.box(c.types.hvc1, o, c.box(c.types.hvcC, e))
            }
            static mvex(t) {
                return c.box(c.types.mvex, c.trex(t))
            }
            static trex(t) {
                const e = t.id
                  , r = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                return c.box(c.types.trex, r)
            }
            static moof(t, e) {
                return c.box(c.types.moof, c.mfhd(t.sequenceNumber), c.traf(t, e))
            }
            static mfhd(t) {
                const e = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]);
                return c.box(c.types.mfhd, e)
            }
            static traf(t, e) {
                const r = t.id
                  , n = c.box(c.types.tfhd, new Uint8Array([0, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r]))
                  , o = c.box(c.types.tfdt, new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]))
                  , a = c.sdtp(t)
                  , i = c.trun(t, a.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
                return c.box(c.types.traf, n, o, i, a)
            }
            static sdtp(t) {
                const e = t.samples || []
                  , r = e.length
                  , n = new Uint8Array(4 + r);
                for (let t = 0; t < r; t++) {
                    const r = e[t].flags;
                    n[t + 4] = r.isLeading << 6 | r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy
                }
                return c.box(c.types.sdtp, n)
            }
            static trun(t, e) {
                const r = t.samples || []
                  , n = r.length
                  , o = 12 + 16 * n
                  , a = new Uint8Array(o);
                e += 8 + o,
                a.set([0, 0, 15, 1, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e], 0);
                for (let t = 0; t < n; t++) {
                    const e = r[t].duration
                      , n = r[t].size
                      , o = r[t].flags
                      , i = r[t].cts;
                    a.set([e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.isNonSync, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 12 + 16 * t)
                }
                return c.box(c.types.trun, a)
            }
            static mdat(t) {
                return c.box(c.types.mdat, t)
            }
        }
        c.types = {
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
            mvex: [],
            mvhd: [],
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
            stss: [],
            hvc1: [],
            hvcC: [],
            alaw: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: [],
            smhd: [],
            ".mp3": []
        },
        c.constants = {
            FTYP: new Uint8Array([105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49]),
            STSD_PREFIX: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]),
            STTS: i,
            STSS: i,
            STCO: i,
            STSC: i,
            STSZ: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            HDLR_VIDEO: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
            HDLR_AUDIO: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
            DREF: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
            SMHD: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
            VMHD: new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        },
        c.init(),
        e.Z = c
    },
    88087: function(t, e, r) {
        "use strict";
        var n = r(86490)
          , o = r(21012);
        class a {
            static _ebsp2rbsp(t) {
                const e = t
                  , r = e.byteLength
                  , n = new Uint8Array(r);
                let o = 0;
                for (let t = 0; t < r; t++)
                    t >= 2 && 3 === e[t] && 0 === e[t - 1] && 0 === e[t - 2] || (n[o] = e[t],
                    o++);
                return new Uint8Array(n.buffer,0,o)
            }
            static parseSPS(t) {
                const e = t.subarray(1, 4);
                let r = "avc1.";
                for (let t = 0; t < 3; t++) {
                    let n = e[t].toString(16);
                    n.length < 2 && (n = "0" + n),
                    r += n
                }
                const i = n.U3.get(n.uH.BT601)
                  , c = a._ebsp2rbsp(t)
                  , s = new o.Z(c);
                s.readByte();
                const u = s.readByte();
                s.readByte();
                const l = s.readByte();
                s.readUEG();
                const f = a.getProfileString(u)
                  , p = a.getLevelString(l);
                let y = 1
                  , d = 420;
                const g = [0, 420, 422, 444];
                let h = 8
                  , b = 8;
                if ((100 === u || 110 === u || 122 === u || 244 === u || 44 === u || 83 === u || 86 === u || 118 === u || 128 === u || 138 === u || 144 === u) && (y = s.readUEG(),
                3 === y && s.readBits(1),
                y <= 3 && (d = g[y]),
                h = s.readUEG() + 8,
                b = s.readUEG() + 8,
                s.readBits(1),
                s.readBool())) {
                    const t = 3 !== y ? 8 : 12;
                    for (let e = 0; e < t; e++)
                        s.readBool() && (e < 6 ? a._skipScalingList(s, 16) : a._skipScalingList(s, 64))
                }
                s.readUEG();
                const m = s.readUEG();
                if (0 === m)
                    s.readUEG();
                else if (1 === m) {
                    s.readBits(1),
                    s.readSEG(),
                    s.readSEG();
                    const t = s.readUEG();
                    for (let e = 0; e < t; e++)
                        s.readSEG()
                }
                const v = s.readUEG();
                s.readBits(1);
                const w = s.readUEG()
                  , S = s.readUEG()
                  , E = s.readBits(1);
                0 === E && s.readBits(1),
                s.readBits(1);
                let _ = 0
                  , A = 0
                  , B = 0
                  , O = 0;
                s.readBool() && (_ = s.readUEG(),
                A = s.readUEG(),
                B = s.readUEG(),
                O = s.readUEG());
                let j = 1
                  , x = 1
                  , P = 0
                  , U = !0
                  , k = 0
                  , T = 0;
                if (s.readBool()) {
                    if (s.readBool()) {
                        const t = s.readByte();
                        t > 0 && t < 16 ? (j = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][t - 1],
                        x = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][t - 1]) : 255 === t && (j = s.readByte() << 8 | s.readByte(),
                        x = s.readByte() << 8 | s.readByte())
                    }
                    if (s.readBool() && s.readBool(),
                    s.readBool() && (s.readBits(3),
                    i.fullRange = s.readBool(),
                    s.readBool())) {
                        switch (s.readBits(8)) {
                        case n.zp.BT709:
                            i.primaries = n.mf.get(n.zp.BT709);
                            break;
                        case n.zp.BT470BG:
                            i.primaries = n.mf.get(n.zp.BT470BG);
                            break;
                        case n.zp.SMPTE170M:
                            i.primaries = n.mf.get(n.zp.SMPTE170M)
                        }
                        switch (s.readBits(8)) {
                        case n.uK.BT709:
                            i.transfer = n.q7.get(n.uK.BT709);
                            break;
                        case n.uK.SMPTE170M:
                            i.transfer = n.q7.get(n.uK.SMPTE170M)
                        }
                        switch (s.readBits(8)) {
                        case n.wo.RGB:
                            i.matrix = n.mb.get(n.wo.RGB);
                            break;
                        case n.wo.BT709:
                            i.matrix = n.mb.get(n.wo.BT709);
                            break;
                        case n.wo.BT470BG:
                            i.matrix = n.mb.get(n.wo.BT470BG);
                            break;
                        case n.wo.SMPTE170M:
                            i.matrix = n.mb.get(n.wo.SMPTE170M)
                        }
                    }
                    if (s.readBool() && (s.readUEG(),
                    s.readUEG()),
                    s.readBool()) {
                        const t = s.readBits(32)
                          , e = s.readBits(32);
                        U = s.readBool(),
                        k = e,
                        T = 2 * t,
                        P = k / T
                    }
                }
                let R = 1;
                1 === j && 1 === x || (R = j / x);
                let I = 0
                  , F = 0;
                if (0 === y)
                    I = 1,
                    F = 2 - E;
                else {
                    I = 3 === y ? 1 : 2,
                    F = (1 === y ? 2 : 1) * (2 - E)
                }
                let G = 16 * (w + 1)
                  , D = 16 * (S + 1) * (2 - E);
                G -= (_ + A) * I,
                D -= (B + O) * F;
                const N = Math.ceil(G * R);
                return s.destroy(),
                {
                    codec_mimetype: r,
                    profile_idc: u,
                    level_idc: l,
                    profile_string: f,
                    level_string: p,
                    chroma_format_idc: y,
                    bit_depth: h,
                    bit_depth_luma: h,
                    bit_depth_chroma: b,
                    ref_frames: v,
                    chroma_format: d,
                    chroma_format_string: a.getChromaFormatString(d),
                    colorSpace: i,
                    frame_rate: {
                        fixed: U,
                        fps: P,
                        fps_den: T,
                        fps_num: k
                    },
                    sar_ratio: {
                        width: j,
                        height: x
                    },
                    codec_size: {
                        width: G,
                        height: D
                    },
                    present_size: {
                        width: N,
                        height: D
                    }
                }
            }
            static _skipScalingList(t, e) {
                let r = 8
                  , n = 8
                  , o = 0;
                for (let a = 0; a < e; a++)
                    0 !== n && (o = t.readSEG(),
                    n = (r + o + 256) % 256),
                    r = 0 === n ? r : n
            }
            static getProfileString(t) {
                switch (t) {
                case 66:
                    return "Baseline";
                case 77:
                    return "Main";
                case 88:
                    return "Extended";
                case 100:
                    return "High";
                case 110:
                    return "High10";
                case 122:
                    return "High422";
                case 244:
                    return "High444";
                default:
                    return "Unknown"
                }
            }
            static getLevelString(t) {
                return (t / 10).toFixed(1)
            }
            static getChromaFormatString(t) {
                switch (t) {
                case 420:
                    return "4:2:0";
                case 422:
                    return "4:2:2";
                case 444:
                    return "4:4:4";
                default:
                    return "Unknown"
                }
            }
        }
        e.Z = a
    },
    3174: function(t, e, r) {
        "use strict";
        var n, o;
        r.d(e, {
            d: function() {
                return o
            },
            z: function() {
                return n
            }
        }),
        function(t) {
            t.AUDIO_AAC = "audio/x-aac",
            t.AUDIO_MPEG = "audio/mpeg",
            t.AUDIO_G711A = "audio/g711a",
            t.AUDIO_G711U = "audio/g711u",
            t.AUDIO_WAV = "audio/wav",
            t.VIDEO_H264 = "video/x-h264",
            t.VIDEO_H265 = "video/x-h265",
            t.VIDEO_MP2T = "video/mp2t",
            t.APPLICATION_JSON = "application/json"
        }(n || (n = {})),
        function(t) {
            t.ALAW = "alaw",
            t.WAV = "wav",
            t.MP3 = "mp3"
        }(o || (o = {}))
    },
    7706: function(t, e, r) {
        "use strict";
        r.d(e, {
            K: function() {
                return a
            }
        });
        class n {
            constructor() {
                this.list = new Map
            }
            on(t, e) {
                const r = this.list.get(t);
                r ? r.push(e) : this.list.set(t, [e])
            }
            off(t, e) {
                if (this.list.get(t))
                    if (e)
                        for (let r = this.list.get(t).length - 1; r >= 0; r--)
                            this.list.get(t)[r] === e && this.list.get(t).splice(r, 1);
                    else
                        this.list.delete(t)
            }
            emit(t, e) {
                this.list.get(t) && 0 !== this.list.get(t).length && this.list.get(t).forEach((t => {
                    t(e)
                }
                ))
            }
        }
        var o = r(39092);
        class a {
            constructor(t) {
                this.emitter = new n,
                this.on = this.emitter.on.bind(this.emitter),
                this.off = this.emitter.off.bind(this.emitter),
                this.logger = new o.Z(Object.assign({
                    name: this.constructor.name
                }, null == t ? void 0 : t.log)),
                this.id = (null == t ? void 0 : t.id) || Math.random()
            }
        }
    }
}]);
