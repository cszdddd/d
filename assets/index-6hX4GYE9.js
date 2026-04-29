(function() {
    const y = document.createElement("link").relList;
    if (y && y.supports && y.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) c(s);
    new MutationObserver(s => {
        for (const r of s)
            if (r.type === "childList")
                for (const A of r.addedNodes) A.tagName === "LINK" && A.rel === "modulepreload" && c(A)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function g(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function c(s) {
        if (s.ep) return;
        s.ep = !0;
        const r = g(s);
        fetch(s.href, r)
    }
})();
var yc = {
        exports: {}
    },
    Ru = {};
var Tr;

function o1() {
    if (Tr) return Ru;
    Tr = 1;
    var n = Symbol.for("react.transitional.element"),
        y = Symbol.for("react.fragment");

    function g(c, s, r) {
        var A = null;
        if (r !== void 0 && (A = "" + r), s.key !== void 0 && (A = "" + s.key), "key" in s) {
            r = {};
            for (var _ in s) _ !== "key" && (r[_] = s[_])
        } else r = s;
        return s = r.ref, {
            $$typeof: n,
            type: c,
            key: A,
            ref: s !== void 0 ? s : null,
            props: r
        }
    }
    return Ru.Fragment = y, Ru.jsx = g, Ru.jsxs = g, Ru
}
var Ar;

function s1() {
    return Ar || (Ar = 1, yc.exports = o1()), yc.exports
}
var Qt = s1(),
    vc = {
        exports: {}
    },
    Ou = {},
    gc = {
        exports: {}
    },
    mc = {};
var Mr;

function r1() {
    return Mr || (Mr = 1, (function(n) {
        function y(O, q) {
            var V = O.length;
            O.push(q);
            l: for (; 0 < V;) {
                var sl = V - 1 >>> 1,
                    h = O[sl];
                if (0 < s(h, q)) O[sl] = q, O[V] = h, V = sl;
                else break l
            }
        }

        function g(O) {
            return O.length === 0 ? null : O[0]
        }

        function c(O) {
            if (O.length === 0) return null;
            var q = O[0],
                V = O.pop();
            if (V !== q) {
                O[0] = V;
                l: for (var sl = 0, h = O.length, U = h >>> 1; sl < U;) {
                    var B = 2 * (sl + 1) - 1,
                        H = O[B],
                        j = B + 1,
                        el = O[j];
                    if (0 > s(H, V)) j < h && 0 > s(el, H) ? (O[sl] = el, O[j] = V, sl = j) : (O[sl] = H, O[B] = V, sl = B);
                    else if (j < h && 0 > s(el, V)) O[sl] = el, O[j] = V, sl = j;
                    else break l
                }
            }
            return q
        }

        function s(O, q) {
            var V = O.sortIndex - q.sortIndex;
            return V !== 0 ? V : O.id - q.id
        }
        if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var r = performance;
            n.unstable_now = function() {
                return r.now()
            }
        } else {
            var A = Date,
                _ = A.now();
            n.unstable_now = function() {
                return A.now() - _
            }
        }
        var p = [],
            M = [],
            N = 1,
            Y = null,
            x = 3,
            fl = !1,
            _l = !1,
            ge = !1,
            jl = !1,
            bt = typeof setTimeout == "function" ? setTimeout : null,
            De = typeof clearTimeout == "function" ? clearTimeout : null,
            ql = typeof setImmediate < "u" ? setImmediate : null;

        function me(O) {
            for (var q = g(M); q !== null;) {
                if (q.callback === null) c(M);
                else if (q.startTime <= O) c(M), q.sortIndex = q.expirationTime, y(p, q);
                else break;
                q = g(M)
            }
        }

        function ll(O) {
            if (ge = !1, me(O), !_l)
                if (g(p) !== null) _l = !0, Jl || (Jl = !0, Bl());
                else {
                    var q = g(M);
                    q !== null && Cl(ll, q.startTime - O)
                }
        }
        var Jl = !1,
            wl = -1,
            Wl = 5,
            Te = -1;

        function Zt() {
            return jl ? !0 : !(n.unstable_now() - Te < Wl)
        }

        function Ue() {
            if (jl = !1, Jl) {
                var O = n.unstable_now();
                Te = O;
                var q = !0;
                try {
                    l: {
                        _l = !1,
                        ge && (ge = !1, De(wl), wl = -1),
                        fl = !0;
                        var V = x;
                        try {
                            e: {
                                for (me(O), Y = g(p); Y !== null && !(Y.expirationTime > O && Zt());) {
                                    var sl = Y.callback;
                                    if (typeof sl == "function") {
                                        Y.callback = null, x = Y.priorityLevel;
                                        var h = sl(Y.expirationTime <= O);
                                        if (O = n.unstable_now(), typeof h == "function") {
                                            Y.callback = h, me(O), q = !0;
                                            break e
                                        }
                                        Y === g(p) && c(p), me(O)
                                    } else c(p);
                                    Y = g(p)
                                }
                                if (Y !== null) q = !0;
                                else {
                                    var U = g(M);
                                    U !== null && Cl(ll, U.startTime - O), q = !1
                                }
                            }
                            break l
                        }
                        finally {
                            Y = null, x = V, fl = !1
                        }
                        q = void 0
                    }
                }
                finally {
                    q ? Bl() : Jl = !1
                }
            }
        }
        var Bl;
        if (typeof ql == "function") Bl = function() {
            ql(Ue)
        };
        else if (typeof MessageChannel < "u") {
            var St = new MessageChannel,
                pt = St.port2;
            St.port1.onmessage = Ue, Bl = function() {
                pt.postMessage(null)
            }
        } else Bl = function() {
            bt(Ue, 0)
        };

        function Cl(O, q) {
            wl = bt(function() {
                O(n.unstable_now())
            }, q)
        }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(O) {
            O.callback = null
        }, n.unstable_forceFrameRate = function(O) {
            0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Wl = 0 < O ? Math.floor(1e3 / O) : 5
        }, n.unstable_getCurrentPriorityLevel = function() {
            return x
        }, n.unstable_next = function(O) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                    var q = 3;
                    break;
                default:
                    q = x
            }
            var V = x;
            x = q;
            try {
                return O()
            } finally {
                x = V
            }
        }, n.unstable_requestPaint = function() {
            jl = !0
        }, n.unstable_runWithPriority = function(O, q) {
            switch (O) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    O = 3
            }
            var V = x;
            x = O;
            try {
                return q()
            } finally {
                x = V
            }
        }, n.unstable_scheduleCallback = function(O, q, V) {
            var sl = n.unstable_now();
            switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? sl + V : sl) : V = sl, O) {
                case 1:
                    var h = -1;
                    break;
                case 2:
                    h = 250;
                    break;
                case 5:
                    h = 1073741823;
                    break;
                case 4:
                    h = 1e4;
                    break;
                default:
                    h = 5e3
            }
            return h = V + h, O = {
                id: N++,
                callback: q,
                priorityLevel: O,
                startTime: V,
                expirationTime: h,
                sortIndex: -1
            }, V > sl ? (O.sortIndex = V, y(M, O), g(p) === null && O === g(M) && (ge ? (De(wl), wl = -1) : ge = !0, Cl(ll, V - sl))) : (O.sortIndex = h, y(p, O), _l || fl || (_l = !0, Jl || (Jl = !0, Bl()))), O
        }, n.unstable_shouldYield = Zt, n.unstable_wrapCallback = function(O) {
            var q = x;
            return function() {
                var V = x;
                x = q;
                try {
                    return O.apply(this, arguments)
                } finally {
                    x = V
                }
            }
        }
    })(mc)), mc
}
var Er;

function d1() {
    return Er || (Er = 1, gc.exports = r1()), gc.exports
}
var bc = {
        exports: {}
    },
    J = {};
var _r;

function h1() {
    if (_r) return J;
    _r = 1;
    var n = Symbol.for("react.transitional.element"),
        y = Symbol.for("react.portal"),
        g = Symbol.for("react.fragment"),
        c = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        r = Symbol.for("react.consumer"),
        A = Symbol.for("react.context"),
        _ = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        M = Symbol.for("react.memo"),
        N = Symbol.for("react.lazy"),
        Y = Symbol.iterator;

    function x(h) {
        return h === null || typeof h != "object" ? null : (h = Y && h[Y] || h["@@iterator"], typeof h == "function" ? h : null)
    }
    var fl = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        _l = Object.assign,
        ge = {};

    function jl(h, U, B) {
        this.props = h, this.context = U, this.refs = ge, this.updater = B || fl
    }
    jl.prototype.isReactComponent = {}, jl.prototype.setState = function(h, U) {
        if (typeof h != "object" && typeof h != "function" && h != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, U, "setState")
    }, jl.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate")
    };

    function bt() {}
    bt.prototype = jl.prototype;

    function De(h, U, B) {
        this.props = h, this.context = U, this.refs = ge, this.updater = B || fl
    }
    var ql = De.prototype = new bt;
    ql.constructor = De, _l(ql, jl.prototype), ql.isPureReactComponent = !0;
    var me = Array.isArray,
        ll = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        Jl = Object.prototype.hasOwnProperty;

    function wl(h, U, B, H, j, el) {
        return B = el.ref, {
            $$typeof: n,
            type: h,
            key: U,
            ref: B !== void 0 ? B : null,
            props: el
        }
    }

    function Wl(h, U) {
        return wl(h.type, U, void 0, void 0, void 0, h.props)
    }

    function Te(h) {
        return typeof h == "object" && h !== null && h.$$typeof === n
    }

    function Zt(h) {
        var U = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + h.replace(/[=:]/g, function(B) {
            return U[B]
        })
    }
    var Ue = /\/+/g;

    function Bl(h, U) {
        return typeof h == "object" && h !== null && h.key != null ? Zt("" + h.key) : U.toString(36)
    }

    function St() {}

    function pt(h) {
        switch (h.status) {
            case "fulfilled":
                return h.value;
            case "rejected":
                throw h.reason;
            default:
                switch (typeof h.status == "string" ? h.then(St, St) : (h.status = "pending", h.then(function(U) {
                        h.status === "pending" && (h.status = "fulfilled", h.value = U)
                    }, function(U) {
                        h.status === "pending" && (h.status = "rejected", h.reason = U)
                    })), h.status) {
                    case "fulfilled":
                        return h.value;
                    case "rejected":
                        throw h.reason
                }
        }
        throw h
    }

    function Cl(h, U, B, H, j) {
        var el = typeof h;
        (el === "undefined" || el === "boolean") && (h = null);
        var K = !1;
        if (h === null) K = !0;
        else switch (el) {
            case "bigint":
            case "string":
            case "number":
                K = !0;
                break;
            case "object":
                switch (h.$$typeof) {
                    case n:
                    case y:
                        K = !0;
                        break;
                    case N:
                        return K = h._init, Cl(K(h._payload), U, B, H, j)
                }
        }
        if (K) return j = j(h), K = H === "" ? "." + Bl(h, 0) : H, me(j) ? (B = "", K != null && (B = K.replace(Ue, "$&/") + "/"), Cl(j, U, B, "", function(Je) {
            return Je
        })) : j != null && (Te(j) && (j = Wl(j, B + (j.key == null || h && h.key === j.key ? "" : ("" + j.key).replace(Ue, "$&/") + "/") + K)), U.push(j)), 1;
        K = 0;
        var $l = H === "" ? "." : H + ":";
        if (me(h))
            for (var hl = 0; hl < h.length; hl++) H = h[hl], el = $l + Bl(H, hl), K += Cl(H, U, B, el, j);
        else if (hl = x(h), typeof hl == "function")
            for (h = hl.call(h), hl = 0; !(H = h.next()).done;) H = H.value, el = $l + Bl(H, hl++), K += Cl(H, U, B, el, j);
        else if (el === "object") {
            if (typeof h.then == "function") return Cl(pt(h), U, B, H, j);
            throw U = String(h), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.")
        }
        return K
    }

    function O(h, U, B) {
        if (h == null) return h;
        var H = [],
            j = 0;
        return Cl(h, H, "", "", function(el) {
            return U.call(B, el, j++)
        }), H
    }

    function q(h) {
        if (h._status === -1) {
            var U = h._result;
            U = U(), U.then(function(B) {
                (h._status === 0 || h._status === -1) && (h._status = 1, h._result = B)
            }, function(B) {
                (h._status === 0 || h._status === -1) && (h._status = 2, h._result = B)
            }), h._status === -1 && (h._status = 0, h._result = U)
        }
        if (h._status === 1) return h._result.default;
        throw h._result
    }
    var V = typeof reportError == "function" ? reportError : function(h) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var U = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
                error: h
            });
            if (!window.dispatchEvent(U)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", h);
            return
        }
        console.error(h)
    };

    function sl() {}
    return J.Children = {
        map: O,
        forEach: function(h, U, B) {
            O(h, function() {
                U.apply(this, arguments)
            }, B)
        },
        count: function(h) {
            var U = 0;
            return O(h, function() {
                U++
            }), U
        },
        toArray: function(h) {
            return O(h, function(U) {
                return U
            }) || []
        },
        only: function(h) {
            if (!Te(h)) throw Error("React.Children.only expected to receive a single React element child.");
            return h
        }
    }, J.Component = jl, J.Fragment = g, J.Profiler = s, J.PureComponent = De, J.StrictMode = c, J.Suspense = p, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ll, J.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(h) {
            return ll.H.useMemoCache(h)
        }
    }, J.cache = function(h) {
        return function() {
            return h.apply(null, arguments)
        }
    }, J.cloneElement = function(h, U, B) {
        if (h == null) throw Error("The argument must be a React element, but you passed " + h + ".");
        var H = _l({}, h.props),
            j = h.key,
            el = void 0;
        if (U != null)
            for (K in U.ref !== void 0 && (el = void 0), U.key !== void 0 && (j = "" + U.key), U) !Jl.call(U, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && U.ref === void 0 || (H[K] = U[K]);
        var K = arguments.length - 2;
        if (K === 1) H.children = B;
        else if (1 < K) {
            for (var $l = Array(K), hl = 0; hl < K; hl++) $l[hl] = arguments[hl + 2];
            H.children = $l
        }
        return wl(h.type, j, void 0, void 0, el, H)
    }, J.createContext = function(h) {
        return h = {
            $$typeof: A,
            _currentValue: h,
            _currentValue2: h,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, h.Provider = h, h.Consumer = {
            $$typeof: r,
            _context: h
        }, h
    }, J.createElement = function(h, U, B) {
        var H, j = {},
            el = null;
        if (U != null)
            for (H in U.key !== void 0 && (el = "" + U.key), U) Jl.call(U, H) && H !== "key" && H !== "__self" && H !== "__source" && (j[H] = U[H]);
        var K = arguments.length - 2;
        if (K === 1) j.children = B;
        else if (1 < K) {
            for (var $l = Array(K), hl = 0; hl < K; hl++) $l[hl] = arguments[hl + 2];
            j.children = $l
        }
        if (h && h.defaultProps)
            for (H in K = h.defaultProps, K) j[H] === void 0 && (j[H] = K[H]);
        return wl(h, el, void 0, void 0, null, j)
    }, J.createRef = function() {
        return {
            current: null
        }
    }, J.forwardRef = function(h) {
        return {
            $$typeof: _,
            render: h
        }
    }, J.isValidElement = Te, J.lazy = function(h) {
        return {
            $$typeof: N,
            _payload: {
                _status: -1,
                _result: h
            },
            _init: q
        }
    }, J.memo = function(h, U) {
        return {
            $$typeof: M,
            type: h,
            compare: U === void 0 ? null : U
        }
    }, J.startTransition = function(h) {
        var U = ll.T,
            B = {};
        ll.T = B;
        try {
            var H = h(),
                j = ll.S;
            j !== null && j(B, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(sl, V)
        } catch (el) {
            V(el)
        } finally {
            ll.T = U
        }
    }, J.unstable_useCacheRefresh = function() {
        return ll.H.useCacheRefresh()
    }, J.use = function(h) {
        return ll.H.use(h)
    }, J.useActionState = function(h, U, B) {
        return ll.H.useActionState(h, U, B)
    }, J.useCallback = function(h, U) {
        return ll.H.useCallback(h, U)
    }, J.useContext = function(h) {
        return ll.H.useContext(h)
    }, J.useDebugValue = function() {}, J.useDeferredValue = function(h, U) {
        return ll.H.useDeferredValue(h, U)
    }, J.useEffect = function(h, U, B) {
        var H = ll.H;
        if (typeof B == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return H.useEffect(h, U)
    }, J.useId = function() {
        return ll.H.useId()
    }, J.useImperativeHandle = function(h, U, B) {
        return ll.H.useImperativeHandle(h, U, B)
    }, J.useInsertionEffect = function(h, U) {
        return ll.H.useInsertionEffect(h, U)
    }, J.useLayoutEffect = function(h, U) {
        return ll.H.useLayoutEffect(h, U)
    }, J.useMemo = function(h, U) {
        return ll.H.useMemo(h, U)
    }, J.useOptimistic = function(h, U) {
        return ll.H.useOptimistic(h, U)
    }, J.useReducer = function(h, U, B) {
        return ll.H.useReducer(h, U, B)
    }, J.useRef = function(h) {
        return ll.H.useRef(h)
    }, J.useState = function(h) {
        return ll.H.useState(h)
    }, J.useSyncExternalStore = function(h, U, B) {
        return ll.H.useSyncExternalStore(h, U, B)
    }, J.useTransition = function() {
        return ll.H.useTransition()
    }, J.version = "19.1.0", J
}
var Rr;

function Rc() {
    return Rr || (Rr = 1, bc.exports = h1()), bc.exports
}
var Sc = {
        exports: {}
    },
    kl = {};
var Or;

function y1() {
    if (Or) return kl;
    Or = 1;
    var n = Rc();

    function y(p) {
        var M = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            M += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var N = 2; N < arguments.length; N++) M += "&args[]=" + encodeURIComponent(arguments[N])
        }
        return "Minified React error #" + p + "; visit " + M + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function g() {}
    var c = {
            d: {
                f: g,
                r: function() {
                    throw Error(y(522))
                },
                D: g,
                C: g,
                L: g,
                m: g,
                X: g,
                S: g,
                M: g
            },
            p: 0,
            findDOMNode: null
        },
        s = Symbol.for("react.portal");

    function r(p, M, N) {
        var Y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: s,
            key: Y == null ? null : "" + Y,
            children: p,
            containerInfo: M,
            implementation: N
        }
    }
    var A = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function _(p, M) {
        if (p === "font") return "";
        if (typeof M == "string") return M === "use-credentials" ? M : ""
    }
    return kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, kl.createPortal = function(p, M) {
        var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!M || M.nodeType !== 1 && M.nodeType !== 9 && M.nodeType !== 11) throw Error(y(299));
        return r(p, M, null, N)
    }, kl.flushSync = function(p) {
        var M = A.T,
            N = c.p;
        try {
            if (A.T = null, c.p = 2, p) return p()
        } finally {
            A.T = M, c.p = N, c.d.f()
        }
    }, kl.preconnect = function(p, M) {
        typeof p == "string" && (M ? (M = M.crossOrigin, M = typeof M == "string" ? M === "use-credentials" ? M : "" : void 0) : M = null, c.d.C(p, M))
    }, kl.prefetchDNS = function(p) {
        typeof p == "string" && c.d.D(p)
    }, kl.preinit = function(p, M) {
        if (typeof p == "string" && M && typeof M.as == "string") {
            var N = M.as,
                Y = _(N, M.crossOrigin),
                x = typeof M.integrity == "string" ? M.integrity : void 0,
                fl = typeof M.fetchPriority == "string" ? M.fetchPriority : void 0;
            N === "style" ? c.d.S(p, typeof M.precedence == "string" ? M.precedence : void 0, {
                crossOrigin: Y,
                integrity: x,
                fetchPriority: fl
            }) : N === "script" && c.d.X(p, {
                crossOrigin: Y,
                integrity: x,
                fetchPriority: fl,
                nonce: typeof M.nonce == "string" ? M.nonce : void 0
            })
        }
    }, kl.preinitModule = function(p, M) {
        if (typeof p == "string")
            if (typeof M == "object" && M !== null) {
                if (M.as == null || M.as === "script") {
                    var N = _(M.as, M.crossOrigin);
                    c.d.M(p, {
                        crossOrigin: N,
                        integrity: typeof M.integrity == "string" ? M.integrity : void 0,
                        nonce: typeof M.nonce == "string" ? M.nonce : void 0
                    })
                }
            } else M == null && c.d.M(p)
    }, kl.preload = function(p, M) {
        if (typeof p == "string" && typeof M == "object" && M !== null && typeof M.as == "string") {
            var N = M.as,
                Y = _(N, M.crossOrigin);
            c.d.L(p, N, {
                crossOrigin: Y,
                integrity: typeof M.integrity == "string" ? M.integrity : void 0,
                nonce: typeof M.nonce == "string" ? M.nonce : void 0,
                type: typeof M.type == "string" ? M.type : void 0,
                fetchPriority: typeof M.fetchPriority == "string" ? M.fetchPriority : void 0,
                referrerPolicy: typeof M.referrerPolicy == "string" ? M.referrerPolicy : void 0,
                imageSrcSet: typeof M.imageSrcSet == "string" ? M.imageSrcSet : void 0,
                imageSizes: typeof M.imageSizes == "string" ? M.imageSizes : void 0,
                media: typeof M.media == "string" ? M.media : void 0
            })
        }
    }, kl.preloadModule = function(p, M) {
        if (typeof p == "string")
            if (M) {
                var N = _(M.as, M.crossOrigin);
                c.d.m(p, {
                    as: typeof M.as == "string" && M.as !== "script" ? M.as : void 0,
                    crossOrigin: N,
                    integrity: typeof M.integrity == "string" ? M.integrity : void 0
                })
            } else c.d.m(p)
    }, kl.requestFormReset = function(p) {
        c.d.r(p)
    }, kl.unstable_batchedUpdates = function(p, M) {
        return p(M)
    }, kl.useFormState = function(p, M, N) {
        return A.H.useFormState(p, M, N)
    }, kl.useFormStatus = function() {
        return A.H.useHostTransitionStatus()
    }, kl.version = "19.1.0", kl
}
var zr;

function v1() {
    if (zr) return Sc.exports;
    zr = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (y) {
            console.error(y)
        }
    }
    return n(), Sc.exports = y1(), Sc.exports
}
var Dr;

function g1() {
    if (Dr) return Ou;
    Dr = 1;
    var n = d1(),
        y = Rc(),
        g = v1();

    function c(l) {
        var e = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var t = 2; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t])
        }
        return "Minified React error #" + l + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }

    function r(l) {
        var e = l,
            t = l;
        if (l.alternate)
            for (; e.return;) e = e.return;
        else {
            l = e;
            do e = l, (e.flags & 4098) !== 0 && (t = e.return), l = e.return; while (l)
        }
        return e.tag === 3 ? t : null
    }

    function A(l) {
        if (l.tag === 13) {
            var e = l.memoizedState;
            if (e === null && (l = l.alternate, l !== null && (e = l.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function _(l) {
        if (r(l) !== l) throw Error(c(188))
    }

    function p(l) {
        var e = l.alternate;
        if (!e) {
            if (e = r(l), e === null) throw Error(c(188));
            return e !== l ? null : l
        }
        for (var t = l, a = e;;) {
            var u = t.return;
            if (u === null) break;
            var f = u.alternate;
            if (f === null) {
                if (a = u.return, a !== null) {
                    t = a;
                    continue
                }
                break
            }
            if (u.child === f.child) {
                for (f = u.child; f;) {
                    if (f === t) return _(u), l;
                    if (f === a) return _(u), e;
                    f = f.sibling
                }
                throw Error(c(188))
            }
            if (t.return !== a.return) t = u, a = f;
            else {
                for (var i = !1, o = u.child; o;) {
                    if (o === t) {
                        i = !0, t = u, a = f;
                        break
                    }
                    if (o === a) {
                        i = !0, a = u, t = f;
                        break
                    }
                    o = o.sibling
                }
                if (!i) {
                    for (o = f.child; o;) {
                        if (o === t) {
                            i = !0, t = f, a = u;
                            break
                        }
                        if (o === a) {
                            i = !0, a = f, t = u;
                            break
                        }
                        o = o.sibling
                    }
                    if (!i) throw Error(c(189))
                }
            }
            if (t.alternate !== a) throw Error(c(190))
        }
        if (t.tag !== 3) throw Error(c(188));
        return t.stateNode.current === t ? l : e
    }

    function M(l) {
        var e = l.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return l;
        for (l = l.child; l !== null;) {
            if (e = M(l), e !== null) return e;
            l = l.sibling
        }
        return null
    }
    var N = Object.assign,
        Y = Symbol.for("react.element"),
        x = Symbol.for("react.transitional.element"),
        fl = Symbol.for("react.portal"),
        _l = Symbol.for("react.fragment"),
        ge = Symbol.for("react.strict_mode"),
        jl = Symbol.for("react.profiler"),
        bt = Symbol.for("react.provider"),
        De = Symbol.for("react.consumer"),
        ql = Symbol.for("react.context"),
        me = Symbol.for("react.forward_ref"),
        ll = Symbol.for("react.suspense"),
        Jl = Symbol.for("react.suspense_list"),
        wl = Symbol.for("react.memo"),
        Wl = Symbol.for("react.lazy"),
        Te = Symbol.for("react.activity"),
        Zt = Symbol.for("react.memo_cache_sentinel"),
        Ue = Symbol.iterator;

    function Bl(l) {
        return l === null || typeof l != "object" ? null : (l = Ue && l[Ue] || l["@@iterator"], typeof l == "function" ? l : null)
    }
    var St = Symbol.for("react.client.reference");

    function pt(l) {
        if (l == null) return null;
        if (typeof l == "function") return l.$$typeof === St ? null : l.displayName || l.name || null;
        if (typeof l == "string") return l;
        switch (l) {
            case _l:
                return "Fragment";
            case jl:
                return "Profiler";
            case ge:
                return "StrictMode";
            case ll:
                return "Suspense";
            case Jl:
                return "SuspenseList";
            case Te:
                return "Activity"
        }
        if (typeof l == "object") switch (l.$$typeof) {
            case fl:
                return "Portal";
            case ql:
                return (l.displayName || "Context") + ".Provider";
            case De:
                return (l._context.displayName || "Context") + ".Consumer";
            case me:
                var e = l.render;
                return l = l.displayName, l || (l = e.displayName || e.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
            case wl:
                return e = l.displayName || null, e !== null ? e : pt(l.type) || "Memo";
            case Wl:
                e = l._payload, l = l._init;
                try {
                    return pt(l(e))
                } catch {}
        }
        return null
    }
    var Cl = Array.isArray,
        O = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        q = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        V = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        sl = [],
        h = -1;

    function U(l) {
        return {
            current: l
        }
    }

    function B(l) {
        0 > h || (l.current = sl[h], sl[h] = null, h--)
    }

    function H(l, e) {
        h++, sl[h] = l.current, l.current = e
    }
    var j = U(null),
        el = U(null),
        K = U(null),
        $l = U(null);

    function hl(l, e) {
        switch (H(K, e), H(el, l), H(j, null), e.nodeType) {
            case 9:
            case 11:
                l = (l = e.documentElement) && (l = l.namespaceURI) ? $s(l) : 0;
                break;
            default:
                if (l = e.tagName, e = e.namespaceURI) e = $s(e), l = Fs(e, l);
                else switch (l) {
                    case "svg":
                        l = 1;
                        break;
                    case "math":
                        l = 2;
                        break;
                    default:
                        l = 0
                }
        }
        B(j), H(j, l)
    }

    function Je() {
        B(j), B(el), B(K)
    }

    function Pn(l) {
        l.memoizedState !== null && H($l, l);
        var e = j.current,
            t = Fs(e, l.type);
        e !== t && (H(el, l), H(j, t))
    }

    function Hu(l) {
        el.current === l && (B(j), B(el)), $l.current === l && (B($l), Tu._currentValue = V)
    }
    var In = Object.prototype.hasOwnProperty,
        lf = n.unstable_scheduleCallback,
        ef = n.unstable_cancelCallback,
        Qr = n.unstable_shouldYield,
        Zr = n.unstable_requestPaint,
        Ae = n.unstable_now,
        Vr = n.unstable_getCurrentPriorityLevel,
        zc = n.unstable_ImmediatePriority,
        Dc = n.unstable_UserBlockingPriority,
        qu = n.unstable_NormalPriority,
        Lr = n.unstable_LowPriority,
        Uc = n.unstable_IdlePriority,
        Kr = n.log,
        Jr = n.unstable_setDisableYieldValue,
        Da = null,
        Fl = null;

    function we(l) {
        if (typeof Kr == "function" && Jr(l), Fl && typeof Fl.setStrictMode == "function") try {
            Fl.setStrictMode(Da, l)
        } catch {}
    }
    var xl = Math.clz32 ? Math.clz32 : $r,
        wr = Math.log,
        Wr = Math.LN2;

    function $r(l) {
        return l >>>= 0, l === 0 ? 32 : 31 - (wr(l) / Wr | 0) | 0
    }
    var Bu = 256,
        Cu = 4194304;

    function Tt(l) {
        var e = l & 42;
        if (e !== 0) return e;
        switch (l & -l) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131028 M + :
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return l & 4194048;
            case 4194304:
            case 8388608:
            case 167728 M + 16:
            case 33554432:
                return l & 62914560;
            case 67108864:
                return 67108864;
            case 13421728 M + 8:
                return 13421728 M + 8;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return l
        }
    }

    function Gu(l, e, t) {
        var a = l.pendingLanes;
        if (a === 0) return 0;
        var u = 0,
            f = l.suspendedLanes,
            i = l.pingedLanes;
        l = l.warmLanes;
        var o = a & 13421728 M + 7;
        return o !== 0 ? (a = o & ~f, a !== 0 ? u = Tt(a) : (i &= o, i !== 0 ? u = Tt(i) : t || (t = o & ~l, t !== 0 && (u = Tt(t))))) : (o = a & ~f, o !== 0 ? u = Tt(o) : i !== 0 ? u = Tt(i) : t || (t = a & ~l, t !== 0 && (u = Tt(t)))), u === 0 ? 0 : e !== 0 && e !== u && (e & f) === 0 && (f = u & -u, t = e & -e, f >= t || f === 32 && (t & 4194048) !== 0) ? e : u
    }

    function Ua(l, e) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & e) === 0
    }

    function Fr(l, e) {
        switch (l) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131028 M + :
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 167728 M + 16:
            case 33554432:
                return -1;
            case 67108864:
            case 13421728 M + 8:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Nc() {
        var l = Bu;
        return Bu <<= 1, (Bu & 4194048) === 0 && (Bu = 256), l
    }

    function Hc() {
        var l = Cu;
        return Cu <<= 1, (Cu & 62914560) === 0 && (Cu = 4194304), l
    }

    function tf(l) {
        for (var e = [], t = 0; 31 > t; t++) e.push(l);
        return e
    }

    function Na(l, e) {
        l.pendingLanes |= e, e !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
    }

    function xr(l, e, t, a, u, f) {
        var i = l.pendingLanes;
        l.pendingLanes = t, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= t, l.entangledLanes &= t, l.errorRecoveryDisabledLanes &= t, l.shellSuspendCounter = 0;
        var o = l.entanglements,
            d = l.expirationTimes,
            S = l.hiddenUpdates;
        for (t = i & ~t; 0 < t;) {
            var R = 31 - xl(t),
                D = 1 << R;
            o[R] = 0, d[R] = -1;
            var T = S[R];
            if (T !== null)
                for (S[R] = null, R = 0; R < T.length; R++) {
                    var E = T[R];
                    E !== null && (E.lane &= -536870913)
                }
            t &= ~D
        }
        a !== 0 && qc(l, a, 0), f !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= f & ~(i & ~e))
    }

    function qc(l, e, t) {
        l.pendingLanes |= e, l.suspendedLanes &= ~e;
        var a = 31 - xl(e);
        l.entangledLanes |= e, l.entanglements[a] = l.entanglements[a] | 1073741824 | t & 4194090
    }

    function Bc(l, e) {
        var t = l.entangledLanes |= e;
        for (l = l.entanglements; t;) {
            var a = 31 - xl(t),
                u = 1 << a;
            u & e | l[a] & e && (l[a] |= e), t &= ~u
        }
    }

    function af(l) {
        switch (l) {
            case 2:
                l = 1;
                break;
            case 8:
                l = 4;
                break;
            case 32:
                l = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131028 M + :
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 167728 M + 16:
            case 33554432:
                l = 128;
                break;
            case 268435456:
                l = 13421728 M + 8;
                break;
            default:
                l = 0
        }
        return l
    }

    function uf(l) {
        return l &= -l, 2 < l ? 8 < l ? (l & 13421728 M + 7) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Cc() {
        var l = q.p;
        return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : vr(l.type))
    }

    function Pr(l, e) {
        var t = q.p;
        try {
            return q.p = l, e()
        } finally {
            q.p = t
        }
    }
    var We = Math.random().toString(36).slice(2),
        Gl = "__reactFiber$" + We,
        Ql = "__reactProps$" + We,
        Vt = "__reactContainer$" + We,
        nf = "__reactEvents$" + We,
        Ir = "__reactListeners$" + We,
        ld = "__reactHandles$" + We,
        Gc = "__reactResources$" + We,
        Ha = "__reactMarker$" + We;

    function ff(l) {
        delete l[Gl], delete l[Ql], delete l[nf], delete l[Ir], delete l[ld]
    }

    function Lt(l) {
        var e = l[Gl];
        if (e) return e;
        for (var t = l.parentNode; t;) {
            if (e = t[Vt] || t[Gl]) {
                if (t = e.alternate, e.child !== null || t !== null && t.child !== null)
                    for (l = lr(l); l !== null;) {
                        if (t = l[Gl]) return t;
                        l = lr(l)
                    }
                return e
            }
            l = t, t = l.parentNode
        }
        return null
    }

    function Kt(l) {
        if (l = l[Gl] || l[Vt]) {
            var e = l.tag;
            if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return l
        }
        return null
    }

    function qa(l) {
        var e = l.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return l.stateNode;
        throw Error(c(33))
    }

    function Jt(l) {
        var e = l[Gc];
        return e || (e = l[Gc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), e
    }

    function Rl(l) {
        l[Ha] = !0
    }
    var Yc = new Set,
        kc = {};

    function At(l, e) {
        wt(l, e), wt(l + "Capture", e)
    }

    function wt(l, e) {
        for (kc[l] = e, l = 0; l < e.length; l++) Yc.add(e[l])
    }
    var ed = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Xc = {},
        jc = {};

    function td(l) {
        return In.call(jc, l) ? !0 : In.call(Xc, l) ? !1 : ed.test(l) ? jc[l] = !0 : (Xc[l] = !0, !1)
    }

    function Yu(l, e, t) {
        if (td(e))
            if (t === null) l.removeAttribute(e);
            else {
                switch (typeof t) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        l.removeAttribute(e);
                        return;
                    case "boolean":
                        var a = e.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            l.removeAttribute(e);
                            return
                        }
                }
                l.setAttribute(e, "" + t)
            }
    }

    function ku(l, e, t) {
        if (t === null) l.removeAttribute(e);
        else {
            switch (typeof t) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(e);
                    return
            }
            l.setAttribute(e, "" + t)
        }
    }

    function Ne(l, e, t, a) {
        if (a === null) l.removeAttribute(t);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    l.removeAttribute(t);
                    return
            }
            l.setAttributeNS(e, t, "" + a)
        }
    }
    var cf, Qc;

    function Wt(l) {
        if (cf === void 0) try {
            throw Error()
        } catch (t) {
            var e = t.stack.trim().match(/\n( *(at )?)/);
            cf = e && e[1] || "", Qc = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + cf + l + Qc
    }
    var of = !1;

    function sf(l, e) {
        if (!l || of) return "";
        of = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var D = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(D.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(D, [])
                                } catch (E) {
                                    var T = E
                                }
                                Reflect.construct(l, [], D)
                            } else {
                                try {
                                    D.call()
                                } catch (E) {
                                    T = E
                                }
                                l.call(D.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (E) {
                                T = E
                            }(D = l()) && typeof D.catch == "function" && D.catch(function() {})
                        }
                    } catch (E) {
                        if (E && T && typeof E.stack == "string") return [E.stack, T.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var f = a.DetermineComponentFrameRoot(),
                i = f[0],
                o = f[1];
            if (i && o) {
                var d = i.split(`
`),
                    S = o.split(`
`);
                for (u = a = 0; a < d.length && !d[a].includes("DetermineComponentFrameRoot");) a++;
                for (; u < S.length && !S[u].includes("DetermineComponentFrameRoot");) u++;
                if (a === d.length || u === S.length)
                    for (a = d.length - 1, u = S.length - 1; 1 <= a && 0 <= u && d[a] !== S[u];) u--;
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (d[a] !== S[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--, u--, 0 > u || d[a] !== S[u]) {
                                    var R = `
` + d[a].replace(" at new ", " at ");
                                    return l.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", l.displayName)), R
                                } while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            of = !1, Error.prepareStackTrace = t
        }
        return (t = l ? l.displayName || l.name : "") ? Wt(t) : ""
    }

    function ad(l) {
        switch (l.tag) {
            case 26:
            case 27:
            case 5:
                return Wt(l.type);
            case 16:
                return Wt("Lazy");
            case 13:
                return Wt("Suspense");
            case 19:
                return Wt("SuspenseList");
            case 0:
            case 15:
                return sf(l.type, !1);
            case 11:
                return sf(l.type.render, !1);
            case 1:
                return sf(l.type, !0);
            case 31:
                return Wt("Activity");
            default:
                return ""
        }
    }

    function Zc(l) {
        try {
            var e = "";
            do e += ad(l), l = l.return; while (l);
            return e
        } catch (t) {
            return `
Error generating stack: ` + t.message + `
` + t.stack
        }
    }

    function fe(l) {
        switch (typeof l) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return l;
            case "object":
                return l;
            default:
                return ""
        }
    }

    function Vc(l) {
        var e = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function ud(l) {
        var e = Vc(l) ? "checked" : "value",
            t = Object.getOwnPropertyDescriptor(l.constructor.prototype, e),
            a = "" + l[e];
        if (!l.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
            var u = t.get,
                f = t.set;
            return Object.defineProperty(l, e, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(i) {
                    a = "" + i, f.call(this, i)
                }
            }), Object.defineProperty(l, e, {
                enumerable: t.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(i) {
                    a = "" + i
                },
                stopTracking: function() {
                    l._valueTracker = null, delete l[e]
                }
            }
        }
    }

    function Xu(l) {
        l._valueTracker || (l._valueTracker = ud(l))
    }

    function Lc(l) {
        if (!l) return !1;
        var e = l._valueTracker;
        if (!e) return !0;
        var t = e.getValue(),
            a = "";
        return l && (a = Vc(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== t ? (e.setValue(l), !0) : !1
    }

    function ju(l) {
        if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var nd = /[\n"\\]/g;

    function ie(l) {
        return l.replace(nd, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function rf(l, e, t, a, u, f, i, o) {
        l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && l.value === "" || l.value != e) && (l.value = "" + fe(e)) : l.value !== "" + fe(e) && (l.value = "" + fe(e)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), e != null ? df(l, i, fe(e)) : t != null ? df(l, i, fe(t)) : a != null && l.removeAttribute("value"), u == null && f != null && (l.defaultChecked = !!f), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? l.name = "" + fe(o) : l.removeAttribute("name")
    }

    function Kc(l, e, t, a, u, f, i, o) {
        if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.type = f), e != null || t != null) {
            if (!(f !== "submit" && f !== "reset" || e != null)) return;
            t = t != null ? "" + fe(t) : "", e = e != null ? "" + fe(e) : t, o || e === l.value || (l.value = e), l.defaultValue = e
        }
        a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = o ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i)
    }

    function df(l, e, t) {
        e === "number" && ju(l.ownerDocument) === l || l.defaultValue === "" + t || (l.defaultValue = "" + t)
    }

    function $t(l, e, t, a) {
        if (l = l.options, e) {
            e = {};
            for (var u = 0; u < t.length; u++) e["$" + t[u]] = !0;
            for (t = 0; t < l.length; t++) u = e.hasOwnProperty("$" + l[t].value), l[t].selected !== u && (l[t].selected = u), u && a && (l[t].defaultSelected = !0)
        } else {
            for (t = "" + fe(t), e = null, u = 0; u < l.length; u++) {
                if (l[u].value === t) {
                    l[u].selected = !0, a && (l[u].defaultSelected = !0);
                    return
                }
                e !== null || l[u].disabled || (e = l[u])
            }
            e !== null && (e.selected = !0)
        }
    }

    function Jc(l, e, t) {
        if (e != null && (e = "" + fe(e), e !== l.value && (l.value = e), t == null)) {
            l.defaultValue !== e && (l.defaultValue = e);
            return
        }
        l.defaultValue = t != null ? "" + fe(t) : ""
    }

    function wc(l, e, t, a) {
        if (e == null) {
            if (a != null) {
                if (t != null) throw Error(c(92));
                if (Cl(a)) {
                    if (1 < a.length) throw Error(c(93));
                    a = a[0]
                }
                t = a
            }
            t == null && (t = ""), e = t
        }
        t = fe(e), l.defaultValue = t, a = l.textContent, a === t && a !== "" && a !== null && (l.value = a)
    }

    function Ft(l, e) {
        if (e) {
            var t = l.firstChild;
            if (t && t === l.lastChild && t.nodeType === 3) {
                t.nodeValue = e;
                return
            }
        }
        l.textContent = e
    }
    var fd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Wc(l, e, t) {
        var a = e.indexOf("--") === 0;
        t == null || typeof t == "boolean" || t === "" ? a ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "" : a ? l.setProperty(e, t) : typeof t != "number" || t === 0 || fd.has(e) ? e === "float" ? l.cssFloat = t : l[e] = ("" + t).trim() : l[e] = t + "px"
    }

    function $c(l, e, t) {
        if (e != null && typeof e != "object") throw Error(c(62));
        if (l = l.style, t != null) {
            for (var a in t) !t.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var u in e) a = e[u], e.hasOwnProperty(u) && t[u] !== a && Wc(l, u, a)
        } else
            for (var f in e) e.hasOwnProperty(f) && Wc(l, f, e[f])
    }

    function hf(l) {
        if (l.indexOf("-") === -1) return !1;
        switch (l) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var id = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        cd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Qu(l) {
        return cd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    var yf = null;

    function vf(l) {
        return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
    }
    var xt = null,
        Pt = null;

    function Fc(l) {
        var e = Kt(l);
        if (e && (l = e.stateNode)) {
            var t = l[Ql] || null;
            l: switch (l = e.stateNode, e.type) {
                case "input":
                    if (rf(l, t.value, t.defaultValue, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name), e = t.name, t.type === "radio" && e != null) {
                        for (t = l; t.parentNode;) t = t.parentNode;
                        for (t = t.querySelectorAll('input[name="' + ie("" + e) + '"][type="radio"]'), e = 0; e < t.length; e++) {
                            var a = t[e];
                            if (a !== l && a.form === l.form) {
                                var u = a[Ql] || null;
                                if (!u) throw Error(c(90));
                                rf(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                            }
                        }
                        for (e = 0; e < t.length; e++) a = t[e], a.form === l.form && Lc(a)
                    }
                    break l;
                case "textarea":
                    Jc(l, t.value, t.defaultValue);
                    break l;
                case "select":
                    e = t.value, e != null && $t(l, !!t.multiple, e, !1)
            }
        }
    }
    var gf = !1;

    function xc(l, e, t) {
        if (gf) return l(e, t);
        gf = !0;
        try {
            var a = l(e);
            return a
        } finally {
            if (gf = !1, (xt !== null || Pt !== null) && (On(), xt && (e = xt, l = Pt, Pt = xt = null, Fc(e), l)))
                for (e = 0; e < l.length; e++) Fc(l[e])
        }
    }

    function Ba(l, e) {
        var t = l.stateNode;
        if (t === null) return null;
        var a = t[Ql] || null;
        if (a === null) return null;
        t = a[e];
        l: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
                break l;
            default:
                l = !1
        }
        if (l) return null;
        if (t && typeof t != "function") throw Error(c(231, e, typeof t));
        return t
    }
    var He = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        mf = !1;
    if (He) try {
        var Ca = {};
        Object.defineProperty(Ca, "passive", {
            get: function() {
                mf = !0
            }
        }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca)
    } catch {
        mf = !1
    }
    var $e = null,
        bf = null,
        Zu = null;

    function Pc() {
        if (Zu) return Zu;
        var l, e = bf,
            t = e.length,
            a, u = "value" in $e ? $e.value : $e.textContent,
            f = u.length;
        for (l = 0; l < t && e[l] === u[l]; l++);
        var i = t - l;
        for (a = 1; a <= i && e[t - a] === u[f - a]; a++);
        return Zu = u.slice(l, 1 < a ? 1 - a : void 0)
    }

    function Vu(l) {
        var e = l.keyCode;
        return "charCode" in l ? (l = l.charCode, l === 0 && e === 13 && (l = 13)) : l = e, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
    }

    function Lu() {
        return !0
    }

    function Ic() {
        return !1
    }

    function Zl(l) {
        function e(t, a, u, f, i) {
            this._reactName = t, this._targetInst = u, this.type = a, this.nativeEvent = f, this.target = i, this.currentTarget = null;
            for (var o in l) l.hasOwnProperty(o) && (t = l[o], this[o] = t ? t(f) : f[o]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Lu : Ic, this.isPropagationStopped = Ic, this
        }
        return N(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Lu)
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Lu)
            },
            persist: function() {},
            isPersistent: Lu
        }), e
    }
    var Mt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(l) {
                return l.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Ku = Zl(Mt),
        Ga = N({}, Mt, {
            view: 0,
            detail: 0
        }),
        od = Zl(Ga),
        Sf, pf, Ya, Ju = N({}, Ga, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Af,
            button: 0,
            buttons: 0,
            relatedTarget: function(l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
            },
            movementX: function(l) {
                return "movementX" in l ? l.movementX : (l !== Ya && (Ya && l.type === "mousemove" ? (Sf = l.screenX - Ya.screenX, pf = l.screenY - Ya.screenY) : pf = Sf = 0, Ya = l), Sf)
            },
            movementY: function(l) {
                return "movementY" in l ? l.movementY : pf
            }
        }),
        l0 = Zl(Ju),
        sd = N({}, Ju, {
            dataTransfer: 0
        }),
        rd = Zl(sd),
        dd = N({}, Ga, {
            relatedTarget: 0
        }),
        Tf = Zl(dd),
        hd = N({}, Mt, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        yd = Zl(hd),
        vd = N({}, Mt, {
            clipboardData: function(l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData
            }
        }),
        gd = Zl(vd),
        md = N({}, Mt, {
            data: 0
        }),
        e0 = Zl(md),
        bd = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Sd = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        pd = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Td(l) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(l) : (l = pd[l]) ? !!e[l] : !1
    }

    function Af() {
        return Td
    }
    var Ad = N({}, Ga, {
            key: function(l) {
                if (l.key) {
                    var e = bd[l.key] || l.key;
                    if (e !== "Unidentified") return e
                }
                return l.type === "keypress" ? (l = Vu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Sd[l.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Af,
            charCode: function(l) {
                return l.type === "keypress" ? Vu(l) : 0
            },
            keyCode: function(l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            },
            which: function(l) {
                return l.type === "keypress" ? Vu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            }
        }),
        Md = Zl(Ad),
        Ed = N({}, Ju, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        t0 = Zl(Ed),
        _d = N({}, Ga, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Af
        }),
        Rd = Zl(_d),
        Od = N({}, Mt, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        zd = Zl(Od),
        Dd = N({}, Ju, {
            deltaX: function(l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
            },
            deltaY: function(l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Ud = Zl(Dd),
        Nd = N({}, Mt, {
            newState: 0,
            oldState: 0
        }),
        Hd = Zl(Nd),
        qd = [9, 13, 27, 32],
        Mf = He && "CompositionEvent" in window,
        ka = null;
    He && "documentMode" in document && (ka = document.documentMode);
    var Bd = He && "TextEvent" in window && !ka,
        a0 = He && (!Mf || ka && 8 < ka && 11 >= ka),
        u0 = " ",
        n0 = !1;

    function f0(l, e) {
        switch (l) {
            case "keyup":
                return qd.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function i0(l) {
        return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
    }
    var It = !1;

    function Cd(l, e) {
        switch (l) {
            case "compositionend":
                return i0(e);
            case "keypress":
                return e.which !== 32 ? null : (n0 = !0, u0);
            case "textInput":
                return l = e.data, l === u0 && n0 ? null : l;
            default:
                return null
        }
    }

    function Gd(l, e) {
        if (It) return l === "compositionend" || !Mf && f0(l, e) ? (l = Pc(), Zu = bf = $e = null, It = !1, l) : null;
        switch (l) {
            case "paste":
                return null;
            case "keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case "compositionend":
                return a0 && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }
    var Yd = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function c0(l) {
        var e = l && l.nodeName && l.nodeName.toLowerCase();
        return e === "input" ? !!Yd[l.type] : e === "textarea"
    }

    function o0(l, e, t, a) {
        xt ? Pt ? Pt.push(a) : Pt = [a] : xt = a, e = qn(e, "onChange"), 0 < e.length && (t = new Ku("onChange", "change", null, t, a), l.push({
            event: t,
            listeners: e
        }))
    }
    var Xa = null,
        ja = null;

    function kd(l) {
        Ls(l, 0)
    }

    function wu(l) {
        var e = qa(l);
        if (Lc(e)) return l
    }

    function s0(l, e) {
        if (l === "change") return e
    }
    var r0 = !1;
    if (He) {
        var Ef;
        if (He) {
            var _f = "oninput" in document;
            if (!_f) {
                var d0 = document.createElement("div");
                d0.setAttribute("oninput", "return;"), _f = typeof d0.oninput == "function"
            }
            Ef = _f
        } else Ef = !1;
        r0 = Ef && (!document.documentMode || 9 < document.documentMode)
    }

    function h0() {
        Xa && (Xa.detachEvent("onpropertychange", y0), ja = Xa = null)
    }

    function y0(l) {
        if (l.propertyName === "value" && wu(ja)) {
            var e = [];
            o0(e, ja, l, vf(l)), xc(kd, e)
        }
    }

    function Xd(l, e, t) {
        l === "focusin" ? (h0(), Xa = e, ja = t, Xa.attachEvent("onpropertychange", y0)) : l === "focusout" && h0()
    }

    function jd(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown") return wu(ja)
    }

    function Qd(l, e) {
        if (l === "click") return wu(e)
    }

    function Zd(l, e) {
        if (l === "input" || l === "change") return wu(e)
    }

    function Vd(l, e) {
        return l === e && (l !== 0 || 1 / l === 1 / e) || l !== l && e !== e
    }
    var Pl = typeof Object.is == "function" ? Object.is : Vd;

    function Qa(l, e) {
        if (Pl(l, e)) return !0;
        if (typeof l != "object" || l === null || typeof e != "object" || e === null) return !1;
        var t = Object.keys(l),
            a = Object.keys(e);
        if (t.length !== a.length) return !1;
        for (a = 0; a < t.length; a++) {
            var u = t[a];
            if (!In.call(e, u) || !Pl(l[u], e[u])) return !1
        }
        return !0
    }

    function v0(l) {
        for (; l && l.firstChild;) l = l.firstChild;
        return l
    }

    function g0(l, e) {
        var t = v0(l);
        l = 0;
        for (var a; t;) {
            if (t.nodeType === 3) {
                if (a = l + t.textContent.length, l <= e && a >= e) return {
                    node: t,
                    offset: e - l
                };
                l = a
            }
            l: {
                for (; t;) {
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break l
                    }
                    t = t.parentNode
                }
                t = void 0
            }
            t = v0(t)
        }
    }

    function m0(l, e) {
        return l && e ? l === e ? !0 : l && l.nodeType === 3 ? !1 : e && e.nodeType === 3 ? m0(l, e.parentNode) : "contains" in l ? l.contains(e) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function b0(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var e = ju(l.document); e instanceof l.HTMLIFrameElement;) {
            try {
                var t = typeof e.contentWindow.location.href == "string"
            } catch {
                t = !1
            }
            if (t) l = e.contentWindow;
            else break;
            e = ju(l.document)
        }
        return e
    }

    function Rf(l) {
        var e = l && l.nodeName && l.nodeName.toLowerCase();
        return e && (e === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || e === "textarea" || l.contentEditable === "true")
    }
    var Ld = He && "documentMode" in document && 11 >= document.documentMode,
        la = null,
        Of = null,
        Za = null,
        zf = !1;

    function S0(l, e, t) {
        var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        zf || la == null || la !== ju(a) || (a = la, "selectionStart" in a && Rf(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), Za && Qa(Za, a) || (Za = a, a = qn(Of, "onSelect"), 0 < a.length && (e = new Ku("onSelect", "select", null, e, t), l.push({
            event: e,
            listeners: a
        }), e.target = la)))
    }

    function Et(l, e) {
        var t = {};
        return t[l.toLowerCase()] = e.toLowerCase(), t["Webkit" + l] = "webkit" + e, t["Moz" + l] = "moz" + e, t
    }
    var ea = {
            animationend: Et("Animation", "AnimationEnd"),
            animationiteration: Et("Animation", "AnimationIteration"),
            animationstart: Et("Animation", "AnimationStart"),
            transitionrun: Et("Transition", "TransitionRun"),
            transitionstart: Et("Transition", "TransitionStart"),
            transitioncancel: Et("Transition", "TransitionCancel"),
            transitionend: Et("Transition", "TransitionEnd")
        },
        Df = {},
        p0 = {};
    He && (p0 = document.createElement("div").style, "AnimationEvent" in window || (delete ea.animationend.animation, delete ea.animationiteration.animation, delete ea.animationstart.animation), "TransitionEvent" in window || delete ea.transitionend.transition);

    function _t(l) {
        if (Df[l]) return Df[l];
        if (!ea[l]) return l;
        var e = ea[l],
            t;
        for (t in e)
            if (e.hasOwnProperty(t) && t in p0) return Df[l] = e[t];
        return l
    }
    var T0 = _t("animationend"),
        A0 = _t("animationiteration"),
        M0 = _t("animationstart"),
        Kd = _t("transitionrun"),
        Jd = _t("transitionstart"),
        wd = _t("transitioncancel"),
        E0 = _t("transitionend"),
        _0 = new Map,
        Uf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Uf.push("scrollEnd");

    function be(l, e) {
        _0.set(l, e), At(e, [l])
    }
    var R0 = new WeakMap;

    function ce(l, e) {
        if (typeof l == "object" && l !== null) {
            var t = R0.get(l);
            return t !== void 0 ? t : (e = {
                value: l,
                source: e,
                stack: Zc(e)
            }, R0.set(l, e), e)
        }
        return {
            value: l,
            source: e,
            stack: Zc(e)
        }
    }
    var oe = [],
        ta = 0,
        Nf = 0;

    function Wu() {
        for (var l = ta, e = Nf = ta = 0; e < l;) {
            var t = oe[e];
            oe[e++] = null;
            var a = oe[e];
            oe[e++] = null;
            var u = oe[e];
            oe[e++] = null;
            var f = oe[e];
            if (oe[e++] = null, a !== null && u !== null) {
                var i = a.pending;
                i === null ? u.next = u : (u.next = i.next, i.next = u), a.pending = u
            }
            f !== 0 && O0(t, u, f)
        }
    }

    function $u(l, e, t, a) {
        oe[ta++] = l, oe[ta++] = e, oe[ta++] = t, oe[ta++] = a, Nf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a)
    }

    function Hf(l, e, t, a) {
        return $u(l, e, t, a), Fu(l)
    }

    function aa(l, e) {
        return $u(l, null, null, e), Fu(l)
    }

    function O0(l, e, t) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t);
        for (var u = !1, f = l.return; f !== null;) f.childLanes |= t, a = f.alternate, a !== null && (a.childLanes |= t), f.tag === 22 && (l = f.stateNode, l === null || l._visibility & 1 || (u = !0)), l = f, f = f.return;
        return l.tag === 3 ? (f = l.stateNode, u && e !== null && (u = 31 - xl(t), l = f.hiddenUpdates, a = l[u], a === null ? l[u] = [e] : a.push(e), e.lane = t | 536870912), f) : null
    }

    function Fu(l) {
        if (50 < hu) throw hu = 0, ki = null, Error(c(185));
        for (var e = l.return; e !== null;) l = e, e = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var ua = {};

    function Wd(l, e, t, a) {
        this.tag = l, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Il(l, e, t, a) {
        return new Wd(l, e, t, a)
    }

    function qf(l) {
        return l = l.prototype, !(!l || !l.isReactComponent)
    }

    function qe(l, e) {
        var t = l.alternate;
        return t === null ? (t = Il(l.tag, e, l.key, l.mode), t.elementType = l.elementType, t.type = l.type, t.stateNode = l.stateNode, t.alternate = l, l.alternate = t) : (t.pendingProps = e, t.type = l.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = l.flags & 65011712, t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, e = l.dependencies, t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }, t.sibling = l.sibling, t.index = l.index, t.ref = l.ref, t.refCleanup = l.refCleanup, t
    }

    function z0(l, e) {
        l.flags &= 65011714;
        var t = l.alternate;
        return t === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, l.type = t.type, e = t.dependencies, l.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }), l
    }

    function xu(l, e, t, a, u, f) {
        var i = 0;
        if (a = l, typeof l == "function") qf(l) && (i = 1);
        else if (typeof l == "string") i = Fh(l, t, j.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else l: switch (l) {
            case Te:
                return l = Il(31, t, e, u), l.elementType = Te, l.lanes = f, l;
            case _l:
                return Rt(t.children, u, f, e);
            case ge:
                i = 8, u |= 24;
                break;
            case jl:
                return l = Il(12, t, e, u | 2), l.elementType = jl, l.lanes = f, l;
            case ll:
                return l = Il(13, t, e, u), l.elementType = ll, l.lanes = f, l;
            case Jl:
                return l = Il(19, t, e, u), l.elementType = Jl, l.lanes = f, l;
            default:
                if (typeof l == "object" && l !== null) switch (l.$$typeof) {
                    case bt:
                    case ql:
                        i = 10;
                        break l;
                    case De:
                        i = 9;
                        break l;
                    case me:
                        i = 11;
                        break l;
                    case wl:
                        i = 14;
                        break l;
                    case Wl:
                        i = 16, a = null;
                        break l
                }
                i = 29, t = Error(c(130, l === null ? "null" : typeof l, "")), a = null
        }
        return e = Il(i, t, e, u), e.elementType = l, e.type = a, e.lanes = f, e
    }

    function Rt(l, e, t, a) {
        return l = Il(7, l, a, e), l.lanes = t, l
    }

    function Bf(l, e, t) {
        return l = Il(6, l, null, e), l.lanes = t, l
    }

    function Cf(l, e, t) {
        return e = Il(4, l.children !== null ? l.children : [], l.key, e), e.lanes = t, e.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        }, e
    }
    var na = [],
        fa = 0,
        Pu = null,
        Iu = 0,
        se = [],
        re = 0,
        Ot = null,
        Be = 1,
        Ce = "";

    function zt(l, e) {
        na[fa++] = Iu, na[fa++] = Pu, Pu = l, Iu = e
    }

    function D0(l, e, t) {
        se[re++] = Be, se[re++] = Ce, se[re++] = Ot, Ot = l;
        var a = Be;
        l = Ce;
        var u = 32 - xl(a) - 1;
        a &= ~(1 << u), t += 1;
        var f = 32 - xl(e) + u;
        if (30 < f) {
            var i = u - u % 5;
            f = (a & (1 << i) - 1).toString(32), a >>= i, u -= i, Be = 1 << 32 - xl(e) + u | t << u | a, Ce = f + l
        } else Be = 1 << f | t << u | a, Ce = l
    }

    function Gf(l) {
        l.return !== null && (zt(l, 1), D0(l, 1, 0))
    }

    function Yf(l) {
        for (; l === Pu;) Pu = na[--fa], na[fa] = null, Iu = na[--fa], na[fa] = null;
        for (; l === Ot;) Ot = se[--re], se[re] = null, Ce = se[--re], se[re] = null, Be = se[--re], se[re] = null
    }
    var Xl = null,
        gl = null,
        al = !1,
        Dt = null,
        Me = !1,
        kf = Error(c(519));

    function Ut(l) {
        var e = Error(c(418, ""));
        throw Ka(ce(e, l)), kf
    }

    function U0(l) {
        var e = l.stateNode,
            t = l.type,
            a = l.memoizedProps;
        switch (e[Gl] = l, e[Ql] = a, t) {
            case "dialog":
                F("cancel", e), F("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                F("load", e);
                break;
            case "video":
            case "audio":
                for (t = 0; t < vu.length; t++) F(vu[t], e);
                break;
            case "source":
                F("error", e);
                break;
            case "img":
            case "image":
            case "link":
                F("error", e), F("load", e);
                break;
            case "details":
                F("toggle", e);
                break;
            case "input":
                F("invalid", e), Kc(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Xu(e);
                break;
            case "select":
                F("invalid", e);
                break;
            case "textarea":
                F("invalid", e), wc(e, a.value, a.defaultValue, a.children), Xu(e)
        }
        t = a.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || e.textContent === "" + t || a.suppressHydrationWarning === !0 || Ws(e.textContent, t) ? (a.popover != null && (F("beforetoggle", e), F("toggle", e)), a.onScroll != null && F("scroll", e), a.onScrollEnd != null && F("scrollend", e), a.onClick != null && (e.onclick = Bn), e = !0) : e = !1, e || Ut(l)
    }

    function N0(l) {
        for (Xl = l.return; Xl;) switch (Xl.tag) {
            case 5:
            case 13:
                Me = !1;
                return;
            case 27:
            case 3:
                Me = !0;
                return;
            default:
                Xl = Xl.return
        }
    }

    function Va(l) {
        if (l !== Xl) return !1;
        if (!al) return N0(l), al = !0, !1;
        var e = l.tag,
            t;
        if ((t = e !== 3 && e !== 27) && ((t = e === 5) && (t = l.type, t = !(t !== "form" && t !== "button") || lc(l.type, l.memoizedProps)), t = !t), t && gl && Ut(l), N0(l), e === 13) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(c(317));
            l: {
                for (l = l.nextSibling, e = 0; l;) {
                    if (l.nodeType === 8)
                        if (t = l.data, t === "/$") {
                            if (e === 0) {
                                gl = pe(l.nextSibling);
                                break l
                            }
                            e--
                        } else t !== "$" && t !== "$!" && t !== "$?" || e++;
                    l = l.nextSibling
                }
                gl = null
            }
        } else e === 27 ? (e = gl, rt(l.type) ? (l = uc, uc = null, gl = l) : gl = e) : gl = Xl ? pe(l.stateNode.nextSibling) : null;
        return !0
    }

    function La() {
        gl = Xl = null, al = !1
    }

    function H0() {
        var l = Dt;
        return l !== null && (Kl === null ? Kl = l : Kl.push.apply(Kl, l), Dt = null), l
    }

    function Ka(l) {
        Dt === null ? Dt = [l] : Dt.push(l)
    }
    var Xf = U(null),
        Nt = null,
        Ge = null;

    function Fe(l, e, t) {
        H(Xf, e._currentValue), e._currentValue = t
    }

    function Ye(l) {
        l._currentValue = Xf.current, B(Xf)
    }

    function jf(l, e, t) {
        for (; l !== null;) {
            var a = l.alternate;
            if ((l.childLanes & e) !== e ? (l.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), l === t) break;
            l = l.return
        }
    }

    function Qf(l, e, t, a) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null;) {
            var f = u.dependencies;
            if (f !== null) {
                var i = u.child;
                f = f.firstContext;
                l: for (; f !== null;) {
                    var o = f;
                    f = u;
                    for (var d = 0; d < e.length; d++)
                        if (o.context === e[d]) {
                            f.lanes |= t, o = f.alternate, o !== null && (o.lanes |= t), jf(f.return, t, l), a || (i = null);
                            break l
                        } f = o.next
                }
            } else if (u.tag === 18) {
                if (i = u.return, i === null) throw Error(c(341));
                i.lanes |= t, f = i.alternate, f !== null && (f.lanes |= t), jf(i, t, l), i = null
            } else i = u.child;
            if (i !== null) i.return = u;
            else
                for (i = u; i !== null;) {
                    if (i === l) {
                        i = null;
                        break
                    }
                    if (u = i.sibling, u !== null) {
                        u.return = i.return, i = u;
                        break
                    }
                    i = i.return
                }
            u = i
        }
    }

    function Ja(l, e, t, a) {
        l = null;
        for (var u = e, f = !1; u !== null;) {
            if (!f) {
                if ((u.flags & 524288) !== 0) f = !0;
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var i = u.alternate;
                if (i === null) throw Error(c(387));
                if (i = i.memoizedProps, i !== null) {
                    var o = u.type;
                    Pl(u.pendingProps.value, i.value) || (l !== null ? l.push(o) : l = [o])
                }
            } else if (u === $l.current) {
                if (i = u.alternate, i === null) throw Error(c(387));
                i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Tu) : l = [Tu])
            }
            u = u.return
        }
        l !== null && Qf(e, l, t, a), e.flags |= 262144
    }

    function ln(l) {
        for (l = l.firstContext; l !== null;) {
            if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next
        }
        return !1
    }

    function Ht(l) {
        Nt = l, Ge = null, l = l.dependencies, l !== null && (l.firstContext = null)
    }

    function Yl(l) {
        return q0(Nt, l)
    }

    function en(l, e) {
        return Nt === null && Ht(l), q0(l, e)
    }

    function q0(l, e) {
        var t = e._currentValue;
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Ge === null) {
            if (l === null) throw Error(c(308));
            Ge = e, l.dependencies = {
                lanes: 0,
                firstContext: e
            }, l.flags |= 524288
        } else Ge = Ge.next = e;
        return t
    }
    var $d = typeof AbortController < "u" ? AbortController : function() {
            var l = [],
                e = this.signal = {
                    aborted: !1,
                    addEventListener: function(t, a) {
                        l.push(a)
                    }
                };
            this.abort = function() {
                e.aborted = !0, l.forEach(function(t) {
                    return t()
                })
            }
        },
        Fd = n.unstable_scheduleCallback,
        xd = n.unstable_NormalPriority,
        Ml = {
            $$typeof: ql,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Zf() {
        return {
            controller: new $d,
            data: new Map,
            refCount: 0
        }
    }

    function wa(l) {
        l.refCount--, l.refCount === 0 && Fd(xd, function() {
            l.controller.abort()
        })
    }
    var Wa = null,
        Vf = 0,
        ia = 0,
        ca = null;

    function Pd(l, e) {
        if (Wa === null) {
            var t = Wa = [];
            Vf = 0, ia = Ki(), ca = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    t.push(a)
                }
            }
        }
        return Vf++, e.then(B0, B0), e
    }

    function B0() {
        if (--Vf === 0 && Wa !== null) {
            ca !== null && (ca.status = "fulfilled");
            var l = Wa;
            Wa = null, ia = 0, ca = null;
            for (var e = 0; e < l.length; e++)(0, l[e])()
        }
    }

    function Id(l, e) {
        var t = [],
            a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    t.push(u)
                }
            };
        return l.then(function() {
            a.status = "fulfilled", a.value = e;
            for (var u = 0; u < t.length; u++)(0, t[u])(e)
        }, function(u) {
            for (a.status = "rejected", a.reason = u, u = 0; u < t.length; u++)(0, t[u])(void 0)
        }), a
    }
    var C0 = O.S;
    O.S = function(l, e) {
        typeof e == "object" && e !== null && typeof e.then == "function" && Pd(l, e), C0 !== null && C0(l, e)
    };
    var qt = U(null);

    function Lf() {
        var l = qt.current;
        return l !== null ? l : dl.pooledCache
    }

    function tn(l, e) {
        e === null ? H(qt, qt.current) : H(qt, e.pool)
    }

    function G0() {
        var l = Lf();
        return l === null ? null : {
            parent: Ml._currentValue,
            pool: l
        }
    }
    var $a = Error(c(460)),
        Y0 = Error(c(474)),
        an = Error(c(542)),
        Kf = {
            then: function() {}
        };

    function k0(l) {
        return l = l.status, l === "fulfilled" || l === "rejected"
    }

    function un() {}

    function X0(l, e, t) {
        switch (t = l[t], t === void 0 ? l.push(e) : t !== e && (e.then(un, un), e = t), e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw l = e.reason, Q0(l), l;
            default:
                if (typeof e.status == "string") e.then(un, un);
                else {
                    if (l = dl, l !== null && 100 < l.shellSuspendCounter) throw Error(c(482));
                    l = e, l.status = "pending", l.then(function(a) {
                        if (e.status === "pending") {
                            var u = e;
                            u.status = "fulfilled", u.value = a
                        }
                    }, function(a) {
                        if (e.status === "pending") {
                            var u = e;
                            u.status = "rejected", u.reason = a
                        }
                    })
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw l = e.reason, Q0(l), l
                }
                throw Fa = e, $a
        }
    }
    var Fa = null;

    function j0() {
        if (Fa === null) throw Error(c(459));
        var l = Fa;
        return Fa = null, l
    }

    function Q0(l) {
        if (l === $a || l === an) throw Error(c(483))
    }
    var xe = !1;

    function Jf(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function wf(l, e) {
        l = l.updateQueue, e.updateQueue === l && (e.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }

    function Pe(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Ie(l, e, t) {
        var a = l.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (ul & 2) !== 0) {
            var u = a.pending;
            return u === null ? e.next = e : (e.next = u.next, u.next = e), a.pending = e, e = Fu(l), O0(l, null, t), e
        }
        return $u(l, a, e, t), Fu(l)
    }

    function xa(l, e, t) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194048) !== 0)) {
            var a = e.lanes;
            a &= l.pendingLanes, t |= a, e.lanes = t, Bc(l, t)
        }
    }

    function Wf(l, e) {
        var t = l.updateQueue,
            a = l.alternate;
        if (a !== null && (a = a.updateQueue, t === a)) {
            var u = null,
                f = null;
            if (t = t.firstBaseUpdate, t !== null) {
                do {
                    var i = {
                        lane: t.lane,
                        tag: t.tag,
                        payload: t.payload,
                        callback: null,
                        next: null
                    };
                    f === null ? u = f = i : f = f.next = i, t = t.next
                } while (t !== null);
                f === null ? u = f = e : f = f.next = e
            } else u = f = e;
            t = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: f,
                shared: a.shared,
                callbacks: a.callbacks
            }, l.updateQueue = t;
            return
        }
        l = t.lastBaseUpdate, l === null ? t.firstBaseUpdate = e : l.next = e, t.lastBaseUpdate = e
    }
    var $f = !1;

    function Pa() {
        if ($f) {
            var l = ca;
            if (l !== null) throw l
        }
    }

    function Ia(l, e, t, a) {
        $f = !1;
        var u = l.updateQueue;
        xe = !1;
        var f = u.firstBaseUpdate,
            i = u.lastBaseUpdate,
            o = u.shared.pending;
        if (o !== null) {
            u.shared.pending = null;
            var d = o,
                S = d.next;
            d.next = null, i === null ? f = S : i.next = S, i = d;
            var R = l.alternate;
            R !== null && (R = R.updateQueue, o = R.lastBaseUpdate, o !== i && (o === null ? R.firstBaseUpdate = S : o.next = S, R.lastBaseUpdate = d))
        }
        if (f !== null) {
            var D = u.baseState;
            i = 0, R = S = d = null, o = f;
            do {
                var T = o.lane & -536870913,
                    E = T !== o.lane;
                if (E ? (P & T) === T : (a & T) === T) {
                    T !== 0 && T === ia && ($f = !0), R !== null && (R = R.next = {
                        lane: 0,
                        tag: o.tag,
                        payload: o.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var L = l,
                            Q = o;T = e;
                        var ol = t;
                        switch (Q.tag) {
                            case 1:
                                if (L = Q.payload, typeof L == "function") {
                                    D = L.call(ol, D, T);
                                    break l
                                }
                                D = L;
                                break l;
                            case 3:
                                L.flags = L.flags & -65537 | 128;
                            case 0:
                                if (L = Q.payload, T = typeof L == "function" ? L.call(ol, D, T) : L, T == null) break l;
                                D = N({}, D, T);
                                break l;
                            case 2:
                                xe = !0
                        }
                    }
                    T = o.callback, T !== null && (l.flags |= 64, E && (l.flags |= 8192), E = u.callbacks, E === null ? u.callbacks = [T] : E.push(T))
                } else E = {
                    lane: T,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                }, R === null ? (S = R = E, d = D) : R = R.next = E, i |= T;
                if (o = o.next, o === null) {
                    if (o = u.shared.pending, o === null) break;
                    E = o, o = E.next, E.next = null, u.lastBaseUpdate = E, u.shared.pending = null
                }
            } while (!0);
            R === null && (d = D), u.baseState = d, u.firstBaseUpdate = S, u.lastBaseUpdate = R, f === null && (u.shared.lanes = 0), it |= i, l.lanes = i, l.memoizedState = D
        }
    }

    function Z0(l, e) {
        if (typeof l != "function") throw Error(c(191, l));
        l.call(e)
    }

    function V0(l, e) {
        var t = l.callbacks;
        if (t !== null)
            for (l.callbacks = null, l = 0; l < t.length; l++) Z0(t[l], e)
    }
    var oa = U(null),
        nn = U(0);

    function L0(l, e) {
        l = Le, H(nn, l), H(oa, e), Le = l | e.baseLanes
    }

    function Ff() {
        H(nn, Le), H(oa, oa.current)
    }

    function xf() {
        Le = nn.current, B(oa), B(nn)
    }
    var lt = 0,
        w = null,
        il = null,
        pl = null,
        fn = !1,
        sa = !1,
        Bt = !1,
        cn = 0,
        lu = 0,
        ra = null,
        lh = 0;

    function bl() {
        throw Error(c(321))
    }

    function Pf(l, e) {
        if (e === null) return !1;
        for (var t = 0; t < e.length && t < l.length; t++)
            if (!Pl(l[t], e[t])) return !1;
        return !0
    }

    function If(l, e, t, a, u, f) {
        return lt = f, w = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = l === null || l.memoizedState === null ? zo : Do, Bt = !1, f = t(a, u), Bt = !1, sa && (f = J0(e, t, a, u)), K0(l), f
    }

    function K0(l) {
        O.H = yn;
        var e = il !== null && il.next !== null;
        if (lt = 0, pl = il = w = null, fn = !1, lu = 0, ra = null, e) throw Error(c(300));
        l === null || Ol || (l = l.dependencies, l !== null && ln(l) && (Ol = !0))
    }

    function J0(l, e, t, a) {
        w = l;
        var u = 0;
        do {
            if (sa && (ra = null), lu = 0, sa = !1, 25 <= u) throw Error(c(301));
            if (u += 1, pl = il = null, l.updateQueue != null) {
                var f = l.updateQueue;
                f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0)
            }
            O.H = ih, f = e(t, a)
        } while (sa);
        return f
    }

    function eh() {
        var l = O.H,
            e = l.useState()[0];
        return e = typeof e.then == "function" ? eu(e) : e, l = l.useState()[0], (il !== null ? il.memoizedState : null) !== l && (w.flags |= 1024), e
    }

    function li() {
        var l = cn !== 0;
        return cn = 0, l
    }

    function ei(l, e, t) {
        e.updateQueue = l.updateQueue, e.flags &= -2053, l.lanes &= ~t
    }

    function ti(l) {
        if (fn) {
            for (l = l.memoizedState; l !== null;) {
                var e = l.queue;
                e !== null && (e.pending = null), l = l.next
            }
            fn = !1
        }
        lt = 0, pl = il = w = null, sa = !1, lu = cn = 0, ra = null
    }

    function Vl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return pl === null ? w.memoizedState = pl = l : pl = pl.next = l, pl
    }

    function Tl() {
        if (il === null) {
            var l = w.alternate;
            l = l !== null ? l.memoizedState : null
        } else l = il.next;
        var e = pl === null ? w.memoizedState : pl.next;
        if (e !== null) pl = e, il = l;
        else {
            if (l === null) throw w.alternate === null ? Error(c(467)) : Error(c(310));
            il = l, l = {
                memoizedState: il.memoizedState,
                baseState: il.baseState,
                baseQueue: il.baseQueue,
                queue: il.queue,
                next: null
            }, pl === null ? w.memoizedState = pl = l : pl = pl.next = l
        }
        return pl
    }

    function ai() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function eu(l) {
        var e = lu;
        return lu += 1, ra === null && (ra = []), l = X0(ra, l, e), e = w, (pl === null ? e.memoizedState : pl.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? zo : Do), l
    }

    function on(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return eu(l);
            if (l.$$typeof === ql) return Yl(l)
        }
        throw Error(c(438, String(l)))
    }

    function ui(l) {
        var e = null,
            t = w.updateQueue;
        if (t !== null && (e = t.memoCache), e == null) {
            var a = w.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
                data: [],
                index: 0
            }), t === null && (t = ai(), w.updateQueue = t), t.memoCache = e, t = e.data[e.index], t === void 0)
            for (t = e.data[e.index] = Array(l), a = 0; a < l; a++) t[a] = Zt;
        return e.index++, t
    }

    function ke(l, e) {
        return typeof e == "function" ? e(l) : e
    }

    function sn(l) {
        var e = Tl();
        return ni(e, il, l)
    }

    function ni(l, e, t) {
        var a = l.queue;
        if (a === null) throw Error(c(311));
        a.lastRenderedReducer = t;
        var u = l.baseQueue,
            f = a.pending;
        if (f !== null) {
            if (u !== null) {
                var i = u.next;
                u.next = f.next, f.next = i
            }
            e.baseQueue = u = f, a.pending = null
        }
        if (f = l.baseState, u === null) l.memoizedState = f;
        else {
            e = u.next;
            var o = i = null,
                d = null,
                S = e,
                R = !1;
            do {
                var D = S.lane & -536870913;
                if (D !== S.lane ? (P & D) === D : (lt & D) === D) {
                    var T = S.revertLane;
                    if (T === 0) d !== null && (d = d.next = {
                        lane: 0,
                        revertLane: 0,
                        action: S.action,
                        hasEagerState: S.hasEagerState,
                        eagerState: S.eagerState,
                        next: null
                    }), D === ia && (R = !0);
                    else if ((lt & T) === T) {
                        S = S.next, T === ia && (R = !0);
                        continue
                    } else D = {
                        lane: 0,
                        revertLane: S.revertLane,
                        action: S.action,
                        hasEagerState: S.hasEagerState,
                        eagerState: S.eagerState,
                        next: null
                    }, d === null ? (o = d = D, i = f) : d = d.next = D, w.lanes |= T, it |= T;
                    D = S.action, Bt && t(f, D), f = S.hasEagerState ? S.eagerState : t(f, D)
                } else T = {
                    lane: D,
                    revertLane: S.revertLane,
                    action: S.action,
                    hasEagerState: S.hasEagerState,
                    eagerState: S.eagerState,
                    next: null
                }, d === null ? (o = d = T, i = f) : d = d.next = T, w.lanes |= D, it |= D;
                S = S.next
            } while (S !== null && S !== e);
            if (d === null ? i = f : d.next = o, !Pl(f, l.memoizedState) && (Ol = !0, R && (t = ca, t !== null))) throw t;
            l.memoizedState = f, l.baseState = i, l.baseQueue = d, a.lastRenderedState = f
        }
        return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]
    }

    function fi(l) {
        var e = Tl(),
            t = e.queue;
        if (t === null) throw Error(c(311));
        t.lastRenderedReducer = l;
        var a = t.dispatch,
            u = t.pending,
            f = e.memoizedState;
        if (u !== null) {
            t.pending = null;
            var i = u = u.next;
            do f = l(f, i.action), i = i.next; while (i !== u);
            Pl(f, e.memoizedState) || (Ol = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), t.lastRenderedState = f
        }
        return [f, a]
    }

    function w0(l, e, t) {
        var a = w,
            u = Tl(),
            f = al;
        if (f) {
            if (t === void 0) throw Error(c(407));
            t = t()
        } else t = e();
        var i = !Pl((il || u).memoizedState, t);
        i && (u.memoizedState = t, Ol = !0), u = u.queue;
        var o = F0.bind(null, a, u, l);
        if (tu(2048, 8, o, [l]), u.getSnapshot !== e || i || pl !== null && pl.memoizedState.tag & 1) {
            if (a.flags |= 2048, da(9, rn(), $0.bind(null, a, u, t, e), null), dl === null) throw Error(c(349));
            f || (lt & 124) !== 0 || W0(a, e, t)
        }
        return t
    }

    function W0(l, e, t) {
        l.flags |= 16384, l = {
            getSnapshot: e,
            value: t
        }, e = w.updateQueue, e === null ? (e = ai(), w.updateQueue = e, e.stores = [l]) : (t = e.stores, t === null ? e.stores = [l] : t.push(l))
    }

    function $0(l, e, t, a) {
        e.value = t, e.getSnapshot = a, x0(e) && P0(l)
    }

    function F0(l, e, t) {
        return t(function() {
            x0(e) && P0(l)
        })
    }

    function x0(l) {
        var e = l.getSnapshot;
        l = l.value;
        try {
            var t = e();
            return !Pl(l, t)
        } catch {
            return !0
        }
    }

    function P0(l) {
        var e = aa(l, 2);
        e !== null && ue(e, l, 2)
    }

    function ii(l) {
        var e = Vl();
        if (typeof l == "function") {
            var t = l;
            if (l = t(), Bt) {
                we(!0);
                try {
                    t()
                } finally {
                    we(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = l, e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ke,
            lastRenderedState: l
        }, e
    }

    function I0(l, e, t, a) {
        return l.baseState = t, ni(l, il, typeof a == "function" ? a : ke)
    }

    function th(l, e, t, a, u) {
        if (hn(l)) throw Error(c(485));
        if (l = e.action, l !== null) {
            var f = {
                payload: u,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    f.listeners.push(i)
                }
            };
            O.T !== null ? t(!0) : f.isTransition = !1, a(f), t = e.pending, t === null ? (f.next = e.pending = f, lo(e, f)) : (f.next = t.next, e.pending = t.next = f)
        }
    }

    function lo(l, e) {
        var t = e.action,
            a = e.payload,
            u = l.state;
        if (e.isTransition) {
            var f = O.T,
                i = {};
            O.T = i;
            try {
                var o = t(u, a),
                    d = O.S;
                d !== null && d(i, o), eo(l, e, o)
            } catch (S) {
                ci(l, e, S)
            } finally {
                O.T = f
            }
        } else try {
            f = t(u, a), eo(l, e, f)
        } catch (S) {
            ci(l, e, S)
        }
    }

    function eo(l, e, t) {
        t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function(a) {
            to(l, e, a)
        }, function(a) {
            return ci(l, e, a)
        }) : to(l, e, t)
    }

    function to(l, e, t) {
        e.status = "fulfilled", e.value = t, ao(e), l.state = t, e = l.pending, e !== null && (t = e.next, t === e ? l.pending = null : (t = t.next, e.next = t, lo(l, t)))
    }

    function ci(l, e, t) {
        var a = l.pending;
        if (l.pending = null, a !== null) {
            a = a.next;
            do e.status = "rejected", e.reason = t, ao(e), e = e.next; while (e !== a)
        }
        l.action = null
    }

    function ao(l) {
        l = l.listeners;
        for (var e = 0; e < l.length; e++)(0, l[e])()
    }

    function uo(l, e) {
        return e
    }

    function no(l, e) {
        if (al) {
            var t = dl.formState;
            if (t !== null) {
                l: {
                    var a = w;
                    if (al) {
                        if (gl) {
                            e: {
                                for (var u = gl, f = Me; u.nodeType !== 8;) {
                                    if (!f) {
                                        u = null;
                                        break e
                                    }
                                    if (u = pe(u.nextSibling), u === null) {
                                        u = null;
                                        break e
                                    }
                                }
                                f = u.data,
                                u = f === "F!" || f === "F" ? u : null
                            }
                            if (u) {
                                gl = pe(u.nextSibling), a = u.data === "F!";
                                break l
                            }
                        }
                        Ut(a)
                    }
                    a = !1
                }
                a && (e = t[0])
            }
        }
        return t = Vl(), t.memoizedState = t.baseState = e, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: uo,
            lastRenderedState: e
        }, t.queue = a, t = _o.bind(null, w, a), a.dispatch = t, a = ii(!1), f = hi.bind(null, w, !1, a.queue), a = Vl(), u = {
            state: e,
            dispatch: null,
            action: l,
            pending: null
        }, a.queue = u, t = th.bind(null, w, u, f, t), u.dispatch = t, a.memoizedState = l, [e, t, !1]
    }

    function fo(l) {
        var e = Tl();
        return io(e, il, l)
    }

    function io(l, e, t) {
        if (e = ni(l, e, uo)[0], l = sn(ke)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
            var a = eu(e)
        } catch (i) {
            throw i === $a ? an : i
        } else a = e;
        e = Tl();
        var u = e.queue,
            f = u.dispatch;
        return t !== e.memoizedState && (w.flags |= 2048, da(9, rn(), ah.bind(null, u, t), null)), [a, f, l]
    }

    function ah(l, e) {
        l.action = e
    }

    function co(l) {
        var e = Tl(),
            t = il;
        if (t !== null) return io(e, t, l);
        Tl(), e = e.memoizedState, t = Tl();
        var a = t.queue.dispatch;
        return t.memoizedState = l, [e, a, !1]
    }

    function da(l, e, t, a) {
        return l = {
            tag: l,
            create: t,
            deps: a,
            inst: e,
            next: null
        }, e = w.updateQueue, e === null && (e = ai(), w.updateQueue = e), t = e.lastEffect, t === null ? e.lastEffect = l.next = l : (a = t.next, t.next = l, l.next = a, e.lastEffect = l), l
    }

    function rn() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function oo() {
        return Tl().memoizedState
    }

    function dn(l, e, t, a) {
        var u = Vl();
        a = a === void 0 ? null : a, w.flags |= l, u.memoizedState = da(1 | e, rn(), t, a)
    }

    function tu(l, e, t, a) {
        var u = Tl();
        a = a === void 0 ? null : a;
        var f = u.memoizedState.inst;
        il !== null && a !== null && Pf(a, il.memoizedState.deps) ? u.memoizedState = da(e, f, t, a) : (w.flags |= l, u.memoizedState = da(1 | e, f, t, a))
    }

    function so(l, e) {
        dn(8390656, 8, l, e)
    }

    function ro(l, e) {
        tu(2048, 8, l, e)
    }

    function ho(l, e) {
        return tu(4, 2, l, e)
    }

    function yo(l, e) {
        return tu(4, 4, l, e)
    }

    function vo(l, e) {
        if (typeof e == "function") {
            l = l();
            var t = e(l);
            return function() {
                typeof t == "function" ? t() : e(null)
            }
        }
        if (e != null) return l = l(), e.current = l,
            function() {
                e.current = null
            }
    }

    function go(l, e, t) {
        t = t != null ? t.concat([l]) : null, tu(4, 4, vo.bind(null, e, l), t)
    }

    function oi() {}

    function mo(l, e) {
        var t = Tl();
        e = e === void 0 ? null : e;
        var a = t.memoizedState;
        return e !== null && Pf(e, a[1]) ? a[0] : (t.memoizedState = [l, e], l)
    }

    function bo(l, e) {
        var t = Tl();
        e = e === void 0 ? null : e;
        var a = t.memoizedState;
        if (e !== null && Pf(e, a[1])) return a[0];
        if (a = l(), Bt) {
            we(!0);
            try {
                l()
            } finally {
                we(!1)
            }
        }
        return t.memoizedState = [a, e], a
    }

    function si(l, e, t) {
        return t === void 0 || (lt & 1073741824) !== 0 ? l.memoizedState = e : (l.memoizedState = t, l = Ts(), w.lanes |= l, it |= l, t)
    }

    function So(l, e, t, a) {
        return Pl(t, e) ? t : oa.current !== null ? (l = si(l, t, a), Pl(l, e) || (Ol = !0), l) : (lt & 42) === 0 ? (Ol = !0, l.memoizedState = t) : (l = Ts(), w.lanes |= l, it |= l, e)
    }

    function po(l, e, t, a, u) {
        var f = q.p;
        q.p = f !== 0 && 8 > f ? f : 8;
        var i = O.T,
            o = {};
        O.T = o, hi(l, !1, e, t);
        try {
            var d = u(),
                S = O.S;
            if (S !== null && S(o, d), d !== null && typeof d == "object" && typeof d.then == "function") {
                var R = Id(d, a);
                au(l, e, R, ae(l))
            } else au(l, e, a, ae(l))
        } catch (D) {
            au(l, e, {
                then: function() {},
                status: "rejected",
                reason: D
            }, ae())
        } finally {
            q.p = f, O.T = i
        }
    }

    function uh() {}

    function ri(l, e, t, a) {
        if (l.tag !== 5) throw Error(c(476));
        var u = To(l).queue;
        po(l, u, e, V, t === null ? uh : function() {
            return Ao(l), t(a)
        })
    }

    function To(l) {
        var e = l.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: V,
            baseState: V,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ke,
                lastRenderedState: V
            },
            next: null
        };
        var t = {};
        return e.next = {
            memoizedState: t,
            baseState: t,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ke,
                lastRenderedState: t
            },
            next: null
        }, l.memoizedState = e, l = l.alternate, l !== null && (l.memoizedState = e), e
    }

    function Ao(l) {
        var e = To(l).next.queue;
        au(l, e, {}, ae())
    }

    function di() {
        return Yl(Tu)
    }

    function Mo() {
        return Tl().memoizedState
    }

    function Eo() {
        return Tl().memoizedState
    }

    function nh(l) {
        for (var e = l.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var t = ae();
                    l = Pe(t);
                    var a = Ie(e, l, t);
                    a !== null && (ue(a, e, t), xa(a, e, t)), e = {
                        cache: Zf()
                    }, l.payload = e;
                    return
            }
            e = e.return
        }
    }

    function fh(l, e, t) {
        var a = ae();
        t = {
            lane: a,
            revertLane: 0,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, hn(l) ? Ro(e, t) : (t = Hf(l, e, t, a), t !== null && (ue(t, l, a), Oo(t, e, a)))
    }

    function _o(l, e, t) {
        var a = ae();
        au(l, e, t, a)
    }

    function au(l, e, t, a) {
        var u = {
            lane: a,
            revertLane: 0,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (hn(l)) Ro(e, u);
        else {
            var f = l.alternate;
            if (l.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) try {
                var i = e.lastRenderedState,
                    o = f(i, t);
                if (u.hasEagerState = !0, u.eagerState = o, Pl(o, i)) return $u(l, e, u, 0), dl === null && Wu(), !1
            } catch {}
            if (t = Hf(l, e, u, a), t !== null) return ue(t, l, a), Oo(t, e, a), !0
        }
        return !1
    }

    function hi(l, e, t, a) {
        if (a = {
                lane: 2,
                revertLane: Ki(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, hn(l)) {
            if (e) throw Error(c(479))
        } else e = Hf(l, t, a, 2), e !== null && ue(e, l, 2)
    }

    function hn(l) {
        var e = l.alternate;
        return l === w || e !== null && e === w
    }

    function Ro(l, e) {
        sa = fn = !0;
        var t = l.pending;
        t === null ? e.next = e : (e.next = t.next, t.next = e), l.pending = e
    }

    function Oo(l, e, t) {
        if ((t & 4194048) !== 0) {
            var a = e.lanes;
            a &= l.pendingLanes, t |= a, e.lanes = t, Bc(l, t)
        }
    }
    var yn = {
            readContext: Yl,
            use: on,
            useCallback: bl,
            useContext: bl,
            useEffect: bl,
            useImperativeHandle: bl,
            useLayoutEffect: bl,
            useInsertionEffect: bl,
            useMemo: bl,
            useReducer: bl,
            useRef: bl,
            useState: bl,
            useDebugValue: bl,
            useDeferredValue: bl,
            useTransition: bl,
            useSyncExternalStore: bl,
            useId: bl,
            useHostTransitionStatus: bl,
            useFormState: bl,
            useActionState: bl,
            useOptimistic: bl,
            useMemoCache: bl,
            useCacheRefresh: bl
        },
        zo = {
            readContext: Yl,
            use: on,
            useCallback: function(l, e) {
                return Vl().memoizedState = [l, e === void 0 ? null : e], l
            },
            useContext: Yl,
            useEffect: so,
            useImperativeHandle: function(l, e, t) {
                t = t != null ? t.concat([l]) : null, dn(4194308, 4, vo.bind(null, e, l), t)
            },
            useLayoutEffect: function(l, e) {
                return dn(4194308, 4, l, e)
            },
            useInsertionEffect: function(l, e) {
                dn(4, 2, l, e)
            },
            useMemo: function(l, e) {
                var t = Vl();
                e = e === void 0 ? null : e;
                var a = l();
                if (Bt) {
                    we(!0);
                    try {
                        l()
                    } finally {
                        we(!1)
                    }
                }
                return t.memoizedState = [a, e], a
            },
            useReducer: function(l, e, t) {
                var a = Vl();
                if (t !== void 0) {
                    var u = t(e);
                    if (Bt) {
                        we(!0);
                        try {
                            t(e)
                        } finally {
                            we(!1)
                        }
                    }
                } else u = e;
                return a.memoizedState = a.baseState = u, l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: l,
                    lastRenderedState: u
                }, a.queue = l, l = l.dispatch = fh.bind(null, w, l), [a.memoizedState, l]
            },
            useRef: function(l) {
                var e = Vl();
                return l = {
                    current: l
                }, e.memoizedState = l
            },
            useState: function(l) {
                l = ii(l);
                var e = l.queue,
                    t = _o.bind(null, w, e);
                return e.dispatch = t, [l.memoizedState, t]
            },
            useDebugValue: oi,
            useDeferredValue: function(l, e) {
                var t = Vl();
                return si(t, l, e)
            },
            useTransition: function() {
                var l = ii(!1);
                return l = po.bind(null, w, l.queue, !0, !1), Vl().memoizedState = l, [!1, l]
            },
            useSyncExternalStore: function(l, e, t) {
                var a = w,
                    u = Vl();
                if (al) {
                    if (t === void 0) throw Error(c(407));
                    t = t()
                } else {
                    if (t = e(), dl === null) throw Error(c(349));
                    (P & 124) !== 0 || W0(a, e, t)
                }
                u.memoizedState = t;
                var f = {
                    value: t,
                    getSnapshot: e
                };
                return u.queue = f, so(F0.bind(null, a, f, l), [l]), a.flags |= 2048, da(9, rn(), $0.bind(null, a, f, t, e), null), t
            },
            useId: function() {
                var l = Vl(),
                    e = dl.identifierPrefix;
                if (al) {
                    var t = Ce,
                        a = Be;
                    t = (a & ~(1 << 32 - xl(a) - 1)).toString(32) + t, e = "«" + e + "R" + t, t = cn++, 0 < t && (e += "H" + t.toString(32)), e += "»"
                } else t = lh++, e = "«" + e + "r" + t.toString(32) + "»";
                return l.memoizedState = e
            },
            useHostTransitionStatus: di,
            useFormState: no,
            useActionState: no,
            useOptimistic: function(l) {
                var e = Vl();
                e.memoizedState = e.baseState = l;
                var t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return e.queue = t, e = hi.bind(null, w, !0, t), t.dispatch = e, [l, e]
            },
            useMemoCache: ui,
            useCacheRefresh: function() {
                return Vl().memoizedState = nh.bind(null, w)
            }
        },
        Do = {
            readContext: Yl,
            use: on,
            useCallback: mo,
            useContext: Yl,
            useEffect: ro,
            useImperativeHandle: go,
            useInsertionEffect: ho,
            useLayoutEffect: yo,
            useMemo: bo,
            useReducer: sn,
            useRef: oo,
            useState: function() {
                return sn(ke)
            },
            useDebugValue: oi,
            useDeferredValue: function(l, e) {
                var t = Tl();
                return So(t, il.memoizedState, l, e)
            },
            useTransition: function() {
                var l = sn(ke)[0],
                    e = Tl().memoizedState;
                return [typeof l == "boolean" ? l : eu(l), e]
            },
            useSyncExternalStore: w0,
            useId: Mo,
            useHostTransitionStatus: di,
            useFormState: fo,
            useActionState: fo,
            useOptimistic: function(l, e) {
                var t = Tl();
                return I0(t, il, l, e)
            },
            useMemoCache: ui,
            useCacheRefresh: Eo
        },
        ih = {
            readContext: Yl,
            use: on,
            useCallback: mo,
            useContext: Yl,
            useEffect: ro,
            useImperativeHandle: go,
            useInsertionEffect: ho,
            useLayoutEffect: yo,
            useMemo: bo,
            useReducer: fi,
            useRef: oo,
            useState: function() {
                return fi(ke)
            },
            useDebugValue: oi,
            useDeferredValue: function(l, e) {
                var t = Tl();
                return il === null ? si(t, l, e) : So(t, il.memoizedState, l, e)
            },
            useTransition: function() {
                var l = fi(ke)[0],
                    e = Tl().memoizedState;
                return [typeof l == "boolean" ? l : eu(l), e]
            },
            useSyncExternalStore: w0,
            useId: Mo,
            useHostTransitionStatus: di,
            useFormState: co,
            useActionState: co,
            useOptimistic: function(l, e) {
                var t = Tl();
                return il !== null ? I0(t, il, l, e) : (t.baseState = l, [l, t.queue.dispatch])
            },
            useMemoCache: ui,
            useCacheRefresh: Eo
        },
        ha = null,
        uu = 0;

    function vn(l) {
        var e = uu;
        return uu += 1, ha === null && (ha = []), X0(ha, l, e)
    }

    function nu(l, e) {
        e = e.props.ref, l.ref = e !== void 0 ? e : null
    }

    function gn(l, e) {
        throw e.$$typeof === Y ? Error(c(525)) : (l = Object.prototype.toString.call(e), Error(c(31, l === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : l)))
    }

    function Uo(l) {
        var e = l._init;
        return e(l._payload)
    }

    function No(l) {
        function e(m, v) {
            if (l) {
                var b = m.deletions;
                b === null ? (m.deletions = [v], m.flags |= 16) : b.push(v)
            }
        }

        function t(m, v) {
            if (!l) return null;
            for (; v !== null;) e(m, v), v = v.sibling;
            return null
        }

        function a(m) {
            for (var v = new Map; m !== null;) m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
            return v
        }

        function u(m, v) {
            return m = qe(m, v), m.index = 0, m.sibling = null, m
        }

        function f(m, v, b) {
            return m.index = b, l ? (b = m.alternate, b !== null ? (b = b.index, b < v ? (m.flags |= 67108866, v) : b) : (m.flags |= 67108866, v)) : (m.flags |= 1048576, v)
        }

        function i(m) {
            return l && m.alternate === null && (m.flags |= 67108866), m
        }

        function o(m, v, b, z) {
            return v === null || v.tag !== 6 ? (v = Bf(b, m.mode, z), v.return = m, v) : (v = u(v, b), v.return = m, v)
        }

        function d(m, v, b, z) {
            var G = b.type;
            return G === _l ? R(m, v, b.props.children, z, b.key) : v !== null && (v.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Wl && Uo(G) === v.type) ? (v = u(v, b.props), nu(v, b), v.return = m, v) : (v = xu(b.type, b.key, b.props, null, m.mode, z), nu(v, b), v.return = m, v)
        }

        function S(m, v, b, z) {
            return v === null || v.tag !== 4 || v.stateNode.containerInfo !== b.containerInfo || v.stateNode.implementation !== b.implementation ? (v = Cf(b, m.mode, z), v.return = m, v) : (v = u(v, b.children || []), v.return = m, v)
        }

        function R(m, v, b, z, G) {
            return v === null || v.tag !== 7 ? (v = Rt(b, m.mode, z, G), v.return = m, v) : (v = u(v, b), v.return = m, v)
        }

        function D(m, v, b) {
            if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = Bf("" + v, m.mode, b), v.return = m, v;
            if (typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                    case x:
                        return b = xu(v.type, v.key, v.props, null, m.mode, b), nu(b, v), b.return = m, b;
                    case fl:
                        return v = Cf(v, m.mode, b), v.return = m, v;
                    case Wl:
                        var z = v._init;
                        return v = z(v._payload), D(m, v, b)
                }
                if (Cl(v) || Bl(v)) return v = Rt(v, m.mode, b, null), v.return = m, v;
                if (typeof v.then == "function") return D(m, vn(v), b);
                if (v.$$typeof === ql) return D(m, en(m, v), b);
                gn(m, v)
            }
            return null
        }

        function T(m, v, b, z) {
            var G = v !== null ? v.key : null;
            if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return G !== null ? null : o(m, v, "" + b, z);
            if (typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                    case x:
                        return b.key === G ? d(m, v, b, z) : null;
                    case fl:
                        return b.key === G ? S(m, v, b, z) : null;
                    case Wl:
                        return G = b._init, b = G(b._payload), T(m, v, b, z)
                }
                if (Cl(b) || Bl(b)) return G !== null ? null : R(m, v, b, z, null);
                if (typeof b.then == "function") return T(m, v, vn(b), z);
                if (b.$$typeof === ql) return T(m, v, en(m, b), z);
                gn(m, b)
            }
            return null
        }

        function E(m, v, b, z, G) {
            if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return m = m.get(b) || null, o(v, m, "" + z, G);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                    case x:
                        return m = m.get(z.key === null ? b : z.key) || null, d(v, m, z, G);
                    case fl:
                        return m = m.get(z.key === null ? b : z.key) || null, S(v, m, z, G);
                    case Wl:
                        var W = z._init;
                        return z = W(z._payload), E(m, v, b, z, G)
                }
                if (Cl(z) || Bl(z)) return m = m.get(b) || null, R(v, m, z, G, null);
                if (typeof z.then == "function") return E(m, v, b, vn(z), G);
                if (z.$$typeof === ql) return E(m, v, b, en(v, z), G);
                gn(v, z)
            }
            return null
        }

        function L(m, v, b, z) {
            for (var G = null, W = null, k = v, Z = v = 0, Dl = null; k !== null && Z < b.length; Z++) {
                k.index > Z ? (Dl = k, k = null) : Dl = k.sibling;
                var tl = T(m, k, b[Z], z);
                if (tl === null) {
                    k === null && (k = Dl);
                    break
                }
                l && k && tl.alternate === null && e(m, k), v = f(tl, v, Z), W === null ? G = tl : W.sibling = tl, W = tl, k = Dl
            }
            if (Z === b.length) return t(m, k), al && zt(m, Z), G;
            if (k === null) {
                for (; Z < b.length; Z++) k = D(m, b[Z], z), k !== null && (v = f(k, v, Z), W === null ? G = k : W.sibling = k, W = k);
                return al && zt(m, Z), G
            }
            for (k = a(k); Z < b.length; Z++) Dl = E(k, m, Z, b[Z], z), Dl !== null && (l && Dl.alternate !== null && k.delete(Dl.key === null ? Z : Dl.key), v = f(Dl, v, Z), W === null ? G = Dl : W.sibling = Dl, W = Dl);
            return l && k.forEach(function(gt) {
                return e(m, gt)
            }), al && zt(m, Z), G
        }

        function Q(m, v, b, z) {
            if (b == null) throw Error(c(151));
            for (var G = null, W = null, k = v, Z = v = 0, Dl = null, tl = b.next(); k !== null && !tl.done; Z++, tl = b.next()) {
                k.index > Z ? (Dl = k, k = null) : Dl = k.sibling;
                var gt = T(m, k, tl.value, z);
                if (gt === null) {
                    k === null && (k = Dl);
                    break
                }
                l && k && gt.alternate === null && e(m, k), v = f(gt, v, Z), W === null ? G = gt : W.sibling = gt, W = gt, k = Dl
            }
            if (tl.done) return t(m, k), al && zt(m, Z), G;
            if (k === null) {
                for (; !tl.done; Z++, tl = b.next()) tl = D(m, tl.value, z), tl !== null && (v = f(tl, v, Z), W === null ? G = tl : W.sibling = tl, W = tl);
                return al && zt(m, Z), G
            }
            for (k = a(k); !tl.done; Z++, tl = b.next()) tl = E(k, m, Z, tl.value, z), tl !== null && (l && tl.alternate !== null && k.delete(tl.key === null ? Z : tl.key), v = f(tl, v, Z), W === null ? G = tl : W.sibling = tl, W = tl);
            return l && k.forEach(function(c1) {
                return e(m, c1)
            }), al && zt(m, Z), G
        }

        function ol(m, v, b, z) {
            if (typeof b == "object" && b !== null && b.type === _l && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                    case x:
                        l: {
                            for (var G = b.key; v !== null;) {
                                if (v.key === G) {
                                    if (G = b.type, G === _l) {
                                        if (v.tag === 7) {
                                            t(m, v.sibling), z = u(v, b.props.children), z.return = m, m = z;
                                            break l
                                        }
                                    } else if (v.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Wl && Uo(G) === v.type) {
                                        t(m, v.sibling), z = u(v, b.props), nu(z, b), z.return = m, m = z;
                                        break l
                                    }
                                    t(m, v);
                                    break
                                } else e(m, v);
                                v = v.sibling
                            }
                            b.type === _l ? (z = Rt(b.props.children, m.mode, z, b.key), z.return = m, m = z) : (z = xu(b.type, b.key, b.props, null, m.mode, z), nu(z, b), z.return = m, m = z)
                        }
                        return i(m);
                    case fl:
                        l: {
                            for (G = b.key; v !== null;) {
                                if (v.key === G)
                                    if (v.tag === 4 && v.stateNode.containerInfo === b.containerInfo && v.stateNode.implementation === b.implementation) {
                                        t(m, v.sibling), z = u(v, b.children || []), z.return = m, m = z;
                                        break l
                                    } else {
                                        t(m, v);
                                        break
                                    }
                                else e(m, v);
                                v = v.sibling
                            }
                            z = Cf(b, m.mode, z),
                            z.return = m,
                            m = z
                        }
                        return i(m);
                    case Wl:
                        return G = b._init, b = G(b._payload), ol(m, v, b, z)
                }
                if (Cl(b)) return L(m, v, b, z);
                if (Bl(b)) {
                    if (G = Bl(b), typeof G != "function") throw Error(c(150));
                    return b = G.call(b), Q(m, v, b, z)
                }
                if (typeof b.then == "function") return ol(m, v, vn(b), z);
                if (b.$$typeof === ql) return ol(m, v, en(m, b), z);
                gn(m, b)
            }
            return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, v !== null && v.tag === 6 ? (t(m, v.sibling), z = u(v, b), z.return = m, m = z) : (t(m, v), z = Bf(b, m.mode, z), z.return = m, m = z), i(m)) : t(m, v)
        }
        return function(m, v, b, z) {
            try {
                uu = 0;
                var G = ol(m, v, b, z);
                return ha = null, G
            } catch (k) {
                if (k === $a || k === an) throw k;
                var W = Il(29, k, null, m.mode);
                return W.lanes = z, W.return = m, W
            }
        }
    }
    var ya = No(!0),
        Ho = No(!1),
        de = U(null),
        Ee = null;

    function et(l) {
        var e = l.alternate;
        H(El, El.current & 1), H(de, l), Ee === null && (e === null || oa.current !== null || e.memoizedState !== null) && (Ee = l)
    }

    function qo(l) {
        if (l.tag === 22) {
            if (H(El, El.current), H(de, l), Ee === null) {
                var e = l.alternate;
                e !== null && e.memoizedState !== null && (Ee = l)
            }
        } else tt()
    }

    function tt() {
        H(El, El.current), H(de, de.current)
    }

    function Xe(l) {
        B(de), Ee === l && (Ee = null), B(El)
    }
    var El = U(0);

    function mn(l) {
        for (var e = l; e !== null;) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || ac(t))) return e
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === l) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === l) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }

    function yi(l, e, t, a) {
        e = l.memoizedState, t = t(a, e), t = t == null ? e : N({}, e, t), l.memoizedState = t, l.lanes === 0 && (l.updateQueue.baseState = t)
    }
    var vi = {
        enqueueSetState: function(l, e, t) {
            l = l._reactInternals;
            var a = ae(),
                u = Pe(a);
            u.payload = e, t != null && (u.callback = t), e = Ie(l, u, a), e !== null && (ue(e, l, a), xa(e, l, a))
        },
        enqueueReplaceState: function(l, e, t) {
            l = l._reactInternals;
            var a = ae(),
                u = Pe(a);
            u.tag = 1, u.payload = e, t != null && (u.callback = t), e = Ie(l, u, a), e !== null && (ue(e, l, a), xa(e, l, a))
        },
        enqueueForceUpdate: function(l, e) {
            l = l._reactInternals;
            var t = ae(),
                a = Pe(t);
            a.tag = 2, e != null && (a.callback = e), e = Ie(l, a, t), e !== null && (ue(e, l, t), xa(e, l, t))
        }
    };

    function Bo(l, e, t, a, u, f, i) {
        return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, f, i) : e.prototype && e.prototype.isPureReactComponent ? !Qa(t, a) || !Qa(u, f) : !0
    }

    function Co(l, e, t, a) {
        l = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, a), e.state !== l && vi.enqueueReplaceState(e, e.state, null)
    }

    function Ct(l, e) {
        var t = e;
        if ("ref" in e) {
            t = {};
            for (var a in e) a !== "ref" && (t[a] = e[a])
        }
        if (l = l.defaultProps) {
            t === e && (t = N({}, t));
            for (var u in l) t[u] === void 0 && (t[u] = l[u])
        }
        return t
    }
    var bn = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(e)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    };

    function Go(l) {
        bn(l)
    }

    function Yo(l) {
        console.error(l)
    }

    function ko(l) {
        bn(l)
    }

    function Sn(l, e) {
        try {
            var t = l.onUncaughtError;
            t(e.value, {
                componentStack: e.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }

    function Xo(l, e, t) {
        try {
            var a = l.onCaughtError;
            a(t.value, {
                componentStack: t.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }

    function gi(l, e, t) {
        return t = Pe(t), t.tag = 3, t.payload = {
            element: null
        }, t.callback = function() {
            Sn(l, e)
        }, t
    }

    function jo(l) {
        return l = Pe(l), l.tag = 3, l
    }

    function Qo(l, e, t, a) {
        var u = t.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var f = a.value;
            l.payload = function() {
                return u(f)
            }, l.callback = function() {
                Xo(e, t, a)
            }
        }
        var i = t.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
            Xo(e, t, a), typeof u != "function" && (ct === null ? ct = new Set([this]) : ct.add(this));
            var o = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: o !== null ? o : ""
            })
        })
    }

    function ch(l, e, t, a, u) {
        if (t.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = t.alternate, e !== null && Ja(e, t, u, !0), t = de.current, t !== null) {
                switch (t.tag) {
                    case 13:
                        return Ee === null ? ji() : t.alternate === null && ml === 0 && (ml = 3), t.flags &= -257, t.flags |= 65536, t.lanes = u, a === Kf ? t.flags |= 16384 : (e = t.updateQueue, e === null ? t.updateQueue = new Set([a]) : e.add(a), Zi(l, a, u)), !1;
                    case 22:
                        return t.flags |= 65536, a === Kf ? t.flags |= 16384 : (e = t.updateQueue, e === null ? (e = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a])
                        }, t.updateQueue = e) : (t = e.retryQueue, t === null ? e.retryQueue = new Set([a]) : t.add(a)), Zi(l, a, u)), !1
                }
                throw Error(c(435, t.tag))
            }
            return Zi(l, a, u), ji(), !1
        }
        if (al) return e = de.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = u, a !== kf && (l = Error(c(422), {
            cause: a
        }), Ka(ce(l, t)))) : (a !== kf && (e = Error(c(423), {
            cause: a
        }), Ka(ce(e, t))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = ce(a, t), u = gi(l.stateNode, a, u), Wf(l, u), ml !== 4 && (ml = 2)), !1;
        var f = Error(c(520), {
            cause: a
        });
        if (f = ce(f, t), du === null ? du = [f] : du.push(f), ml !== 4 && (ml = 2), e === null) return !0;
        a = ce(a, t), t = e;
        do {
            switch (t.tag) {
                case 3:
                    return t.flags |= 65536, l = u & -u, t.lanes |= l, l = gi(t.stateNode, a, l), Wf(t, l), !1;
                case 1:
                    if (e = t.type, f = t.stateNode, (t.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ct === null || !ct.has(f)))) return t.flags |= 65536, u &= -u, t.lanes |= u, u = jo(u), Qo(u, l, t, a), Wf(t, u), !1
            }
            t = t.return
        } while (t !== null);
        return !1
    }
    var Zo = Error(c(461)),
        Ol = !1;

    function Ul(l, e, t, a) {
        e.child = l === null ? Ho(e, null, t, a) : ya(e, l.child, t, a)
    }

    function Vo(l, e, t, a, u) {
        t = t.render;
        var f = e.ref;
        if ("ref" in a) {
            var i = {};
            for (var o in a) o !== "ref" && (i[o] = a[o])
        } else i = a;
        return Ht(e), a = If(l, e, t, i, f, u), o = li(), l !== null && !Ol ? (ei(l, e, u), je(l, e, u)) : (al && o && Gf(e), e.flags |= 1, Ul(l, e, a, u), e.child)
    }

    function Lo(l, e, t, a, u) {
        if (l === null) {
            var f = t.type;
            return typeof f == "function" && !qf(f) && f.defaultProps === void 0 && t.compare === null ? (e.tag = 15, e.type = f, Ko(l, e, f, a, u)) : (l = xu(t.type, null, a, e, e.mode, u), l.ref = e.ref, l.return = e, e.child = l)
        }
        if (f = l.child, !Ei(l, u)) {
            var i = f.memoizedProps;
            if (t = t.compare, t = t !== null ? t : Qa, t(i, a) && l.ref === e.ref) return je(l, e, u)
        }
        return e.flags |= 1, l = qe(f, a), l.ref = e.ref, l.return = e, e.child = l
    }

    function Ko(l, e, t, a, u) {
        if (l !== null) {
            var f = l.memoizedProps;
            if (Qa(f, a) && l.ref === e.ref)
                if (Ol = !1, e.pendingProps = a = f, Ei(l, u))(l.flags & 131028 M + ) !== 0 && (Ol = !0);
                else return e.lanes = l.lanes, je(l, e, u)
        }
        return mi(l, e, t, a, u)
    }

    function Jo(l, e, t) {
        var a = e.pendingProps,
            u = a.children,
            f = l !== null ? l.memoizedState : null;
        if (a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (a = f !== null ? f.baseLanes | t : t, l !== null) {
                    for (u = e.child = l.child, f = 0; u !== null;) f = f | u.lanes | u.childLanes, u = u.sibling;
                    e.childLanes = f & ~a
                } else e.childLanes = 0, e.child = null;
                return wo(l, e, a, t)
            }
            if ((t & 536870912) !== 0) e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, l !== null && tn(e, f !== null ? f.cachePool : null), f !== null ? L0(e, f) : Ff(), qo(e);
            else return e.lanes = e.childLanes = 536870912, wo(l, e, f !== null ? f.baseLanes | t : t, t)
        } else f !== null ? (tn(e, f.cachePool), L0(e, f), tt(), e.memoizedState = null) : (l !== null && tn(e, null), Ff(), tt());
        return Ul(l, e, u, t), e.child
    }

    function wo(l, e, t, a) {
        var u = Lf();
        return u = u === null ? null : {
            parent: Ml._currentValue,
            pool: u
        }, e.memoizedState = {
            baseLanes: t,
            cachePool: u
        }, l !== null && tn(e, null), Ff(), qo(e), l !== null && Ja(l, e, a, !0), null
    }

    function pn(l, e) {
        var t = e.ref;
        if (t === null) l !== null && l.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof t != "function" && typeof t != "object") throw Error(c(284));
            (l === null || l.ref !== t) && (e.flags |= 4194816)
        }
    }

    function mi(l, e, t, a, u) {
        return Ht(e), t = If(l, e, t, a, void 0, u), a = li(), l !== null && !Ol ? (ei(l, e, u), je(l, e, u)) : (al && a && Gf(e), e.flags |= 1, Ul(l, e, t, u), e.child)
    }

    function Wo(l, e, t, a, u, f) {
        return Ht(e), e.updateQueue = null, t = J0(e, a, t, u), K0(l), a = li(), l !== null && !Ol ? (ei(l, e, f), je(l, e, f)) : (al && a && Gf(e), e.flags |= 1, Ul(l, e, t, f), e.child)
    }

    function $o(l, e, t, a, u) {
        if (Ht(e), e.stateNode === null) {
            var f = ua,
                i = t.contextType;
            typeof i == "object" && i !== null && (f = Yl(i)), f = new t(a, f), e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = vi, e.stateNode = f, f._reactInternals = e, f = e.stateNode, f.props = a, f.state = e.memoizedState, f.refs = {}, Jf(e), i = t.contextType, f.context = typeof i == "object" && i !== null ? Yl(i) : ua, f.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (yi(e, t, i, a), f.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (i = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), i !== f.state && vi.enqueueReplaceState(f, f.state, null), Ia(e, a, f, u), Pa(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), a = !0
        } else if (l === null) {
            f = e.stateNode;
            var o = e.memoizedProps,
                d = Ct(t, o);
            f.props = d;
            var S = f.context,
                R = t.contextType;
            i = ua, typeof R == "object" && R !== null && (i = Yl(R));
            var D = t.getDerivedStateFromProps;
            R = typeof D == "function" || typeof f.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, R || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (o || S !== i) && Co(e, f, a, i), xe = !1;
            var T = e.memoizedState;
            f.state = T, Ia(e, a, f, u), Pa(), S = e.memoizedState, o || T !== S || xe ? (typeof D == "function" && (yi(e, t, D, a), S = e.memoizedState), (d = xe || Bo(e, t, d, a, T, S, i)) ? (R || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = S), f.props = a, f.state = S, f.context = i, a = d) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
        } else {
            f = e.stateNode, wf(l, e), i = e.memoizedProps, R = Ct(t, i), f.props = R, D = e.pendingProps, T = f.context, S = t.contextType, d = ua, typeof S == "object" && S !== null && (d = Yl(S)), o = t.getDerivedStateFromProps, (S = typeof o == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (i !== D || T !== d) && Co(e, f, a, d), xe = !1, T = e.memoizedState, f.state = T, Ia(e, a, f, u), Pa();
            var E = e.memoizedState;
            i !== D || T !== E || xe || l !== null && l.dependencies !== null && ln(l.dependencies) ? (typeof o == "function" && (yi(e, t, o, a), E = e.memoizedState), (R = xe || Bo(e, t, R, a, T, E, d) || l !== null && l.dependencies !== null && ln(l.dependencies)) ? (S || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(a, E, d), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(a, E, d)), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || i === l.memoizedProps && T === l.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && T === l.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = E), f.props = a, f.state = E, f.context = d, a = R) : (typeof f.componentDidUpdate != "function" || i === l.memoizedProps && T === l.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && T === l.memoizedState || (e.flags |= 1024), a = !1)
        }
        return f = a, pn(l, e), a = (e.flags & 128) !== 0, f || a ? (f = e.stateNode, t = a && typeof t.getDerivedStateFromError != "function" ? null : f.render(), e.flags |= 1, l !== null && a ? (e.child = ya(e, l.child, null, u), e.child = ya(e, null, t, u)) : Ul(l, e, t, u), e.memoizedState = f.state, l = e.child) : l = je(l, e, u), l
    }

    function Fo(l, e, t, a) {
        return La(), e.flags |= 256, Ul(l, e, t, a), e.child
    }
    var bi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Si(l) {
        return {
            baseLanes: l,
            cachePool: G0()
        }
    }

    function pi(l, e, t) {
        return l = l !== null ? l.childLanes & ~t : 0, e && (l |= he), l
    }

    function xo(l, e, t) {
        var a = e.pendingProps,
            u = !1,
            f = (e.flags & 128) !== 0,
            i;
        if ((i = f) || (i = l !== null && l.memoizedState === null ? !1 : (El.current & 2) !== 0), i && (u = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, l === null) {
            if (al) {
                if (u ? et(e) : tt(), al) {
                    var o = gl,
                        d;
                    if (d = o) {
                        l: {
                            for (d = o, o = Me; d.nodeType !== 8;) {
                                if (!o) {
                                    o = null;
                                    break l
                                }
                                if (d = pe(d.nextSibling), d === null) {
                                    o = null;
                                    break l
                                }
                            }
                            o = d
                        }
                        o !== null ? (e.memoizedState = {
                            dehydrated: o,
                            treeContext: Ot !== null ? {
                                id: Be,
                                overflow: Ce
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, d = Il(18, null, null, 0), d.stateNode = o, d.return = e, e.child = d, Xl = e, gl = null, d = !0) : d = !1
                    }
                    d || Ut(e)
                }
                if (o = e.memoizedState, o !== null && (o = o.dehydrated, o !== null)) return ac(o) ? e.lanes = 32 : e.lanes = 536870912, null;
                Xe(e)
            }
            return o = a.children, a = a.fallback, u ? (tt(), u = e.mode, o = Tn({
                mode: "hidden",
                children: o
            }, u), a = Rt(a, u, t, null), o.return = e, a.return = e, o.sibling = a, e.child = o, u = e.child, u.memoizedState = Si(t), u.childLanes = pi(l, i, t), e.memoizedState = bi, a) : (et(e), Ti(e, o))
        }
        if (d = l.memoizedState, d !== null && (o = d.dehydrated, o !== null)) {
            if (f) e.flags & 256 ? (et(e), e.flags &= -257, e = Ai(l, e, t)) : e.memoizedState !== null ? (tt(), e.child = l.child, e.flags |= 128, e = null) : (tt(), u = a.fallback, o = e.mode, a = Tn({
                mode: "visible",
                children: a.children
            }, o), u = Rt(u, o, t, null), u.flags |= 2, a.return = e, u.return = e, a.sibling = u, e.child = a, ya(e, l.child, null, t), a = e.child, a.memoizedState = Si(t), a.childLanes = pi(l, i, t), e.memoizedState = bi, e = u);
            else if (et(e), ac(o)) {
                if (i = o.nextSibling && o.nextSibling.dataset, i) var S = i.dgst;
                i = S, a = Error(c(419)), a.stack = "", a.digest = i, Ka({
                    value: a,
                    source: null,
                    stack: null
                }), e = Ai(l, e, t)
            } else if (Ol || Ja(l, e, t, !1), i = (t & l.childLanes) !== 0, Ol || i) {
                if (i = dl, i !== null && (a = t & -t, a = (a & 42) !== 0 ? 1 : af(a), a = (a & (i.suspendedLanes | t)) !== 0 ? 0 : a, a !== 0 && a !== d.retryLane)) throw d.retryLane = a, aa(l, a), ue(i, l, a), Zo;
                o.data === "$?" || ji(), e = Ai(l, e, t)
            } else o.data === "$?" ? (e.flags |= 192, e.child = l.child, e = null) : (l = d.treeContext, gl = pe(o.nextSibling), Xl = e, al = !0, Dt = null, Me = !1, l !== null && (se[re++] = Be, se[re++] = Ce, se[re++] = Ot, Be = l.id, Ce = l.overflow, Ot = e), e = Ti(e, a.children), e.flags |= 4096);
            return e
        }
        return u ? (tt(), u = a.fallback, o = e.mode, d = l.child, S = d.sibling, a = qe(d, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = d.subtreeFlags & 65011712, S !== null ? u = qe(S, u) : (u = Rt(u, o, t, null), u.flags |= 2), u.return = e, a.return = e, a.sibling = u, e.child = a, a = u, u = e.child, o = l.child.memoizedState, o === null ? o = Si(t) : (d = o.cachePool, d !== null ? (S = Ml._currentValue, d = d.parent !== S ? {
            parent: S,
            pool: S
        } : d) : d = G0(), o = {
            baseLanes: o.baseLanes | t,
            cachePool: d
        }), u.memoizedState = o, u.childLanes = pi(l, i, t), e.memoizedState = bi, a) : (et(e), t = l.child, l = t.sibling, t = qe(t, {
            mode: "visible",
            children: a.children
        }), t.return = e, t.sibling = null, l !== null && (i = e.deletions, i === null ? (e.deletions = [l], e.flags |= 16) : i.push(l)), e.child = t, e.memoizedState = null, t)
    }

    function Ti(l, e) {
        return e = Tn({
            mode: "visible",
            children: e
        }, l.mode), e.return = l, l.child = e
    }

    function Tn(l, e) {
        return l = Il(22, l, null, e), l.lanes = 0, l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, l
    }

    function Ai(l, e, t) {
        return ya(e, l.child, null, t), l = Ti(e, e.pendingProps.children), l.flags |= 2, e.memoizedState = null, l
    }

    function Po(l, e, t) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e), jf(l.return, e, t)
    }

    function Mi(l, e, t, a, u) {
        var f = l.memoizedState;
        f === null ? l.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: t,
            tailMode: u
        } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = t, f.tailMode = u)
    }

    function Io(l, e, t) {
        var a = e.pendingProps,
            u = a.revealOrder,
            f = a.tail;
        if (Ul(l, e, a.children, t), a = El.current, (a & 2) !== 0) a = a & 1 | 2, e.flags |= 128;
        else {
            if (l !== null && (l.flags & 128) !== 0) l: for (l = e.child; l !== null;) {
                if (l.tag === 13) l.memoizedState !== null && Po(l, t, e);
                else if (l.tag === 19) Po(l, t, e);
                else if (l.child !== null) {
                    l.child.return = l, l = l.child;
                    continue
                }
                if (l === e) break l;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === e) break l;
                    l = l.return
                }
                l.sibling.return = l.return, l = l.sibling
            }
            a &= 1
        }
        switch (H(El, a), u) {
            case "forwards":
                for (t = e.child, u = null; t !== null;) l = t.alternate, l !== null && mn(l) === null && (u = t), t = t.sibling;
                t = u, t === null ? (u = e.child, e.child = null) : (u = t.sibling, t.sibling = null), Mi(e, !1, u, t, f);
                break;
            case "backwards":
                for (t = null, u = e.child, e.child = null; u !== null;) {
                    if (l = u.alternate, l !== null && mn(l) === null) {
                        e.child = u;
                        break
                    }
                    l = u.sibling, u.sibling = t, t = u, u = l
                }
                Mi(e, !0, t, null, f);
                break;
            case "together":
                Mi(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function je(l, e, t) {
        if (l !== null && (e.dependencies = l.dependencies), it |= e.lanes, (t & e.childLanes) === 0)
            if (l !== null) {
                if (Ja(l, e, t, !1), (t & e.childLanes) === 0) return null
            } else return null;
        if (l !== null && e.child !== l.child) throw Error(c(153));
        if (e.child !== null) {
            for (l = e.child, t = qe(l, l.pendingProps), e.child = t, t.return = e; l.sibling !== null;) l = l.sibling, t = t.sibling = qe(l, l.pendingProps), t.return = e;
            t.sibling = null
        }
        return e.child
    }

    function Ei(l, e) {
        return (l.lanes & e) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && ln(l)))
    }

    function oh(l, e, t) {
        switch (e.tag) {
            case 3:
                hl(e, e.stateNode.containerInfo), Fe(e, Ml, l.memoizedState.cache), La();
                break;
            case 27:
            case 5:
                Pn(e);
                break;
            case 4:
                hl(e, e.stateNode.containerInfo);
                break;
            case 10:
                Fe(e, e.type, e.memoizedProps.value);
                break;
            case 13:
                var a = e.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (et(e), e.flags |= 128, null) : (t & e.child.childLanes) !== 0 ? xo(l, e, t) : (et(e), l = je(l, e, t), l !== null ? l.sibling : null);
                et(e);
                break;
            case 19:
                var u = (l.flags & 128) !== 0;
                if (a = (t & e.childLanes) !== 0, a || (Ja(l, e, t, !1), a = (t & e.childLanes) !== 0), u) {
                    if (a) return Io(l, e, t);
                    e.flags |= 128
                }
                if (u = e.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), H(El, El.current), a) break;
                return null;
            case 22:
            case 23:
                return e.lanes = 0, Jo(l, e, t);
            case 24:
                Fe(e, Ml, l.memoizedState.cache)
        }
        return je(l, e, t)
    }

    function ls(l, e, t) {
        if (l !== null)
            if (l.memoizedProps !== e.pendingProps) Ol = !0;
            else {
                if (!Ei(l, t) && (e.flags & 128) === 0) return Ol = !1, oh(l, e, t);
                Ol = (l.flags & 131028 M + ) !== 0
            }
        else Ol = !1, al && (e.flags & 1048576) !== 0 && D0(e, Iu, e.index);
        switch (e.lanes = 0, e.tag) {
            case 16:
                l: {
                    l = e.pendingProps;
                    var a = e.elementType,
                        u = a._init;
                    if (a = u(a._payload), e.type = a, typeof a == "function") qf(a) ? (l = Ct(a, l), e.tag = 1, e = $o(null, e, a, l, t)) : (e.tag = 0, e = mi(null, e, a, l, t));
                    else {
                        if (a != null) {
                            if (u = a.$$typeof, u === me) {
                                e.tag = 11, e = Vo(null, e, a, l, t);
                                break l
                            } else if (u === wl) {
                                e.tag = 14, e = Lo(null, e, a, l, t);
                                break l
                            }
                        }
                        throw e = pt(a) || a, Error(c(306, e, ""))
                    }
                }
                return e;
            case 0:
                return mi(l, e, e.type, e.pendingProps, t);
            case 1:
                return a = e.type, u = Ct(a, e.pendingProps), $o(l, e, a, u, t);
            case 3:
                l: {
                    if (hl(e, e.stateNode.containerInfo), l === null) throw Error(c(387));a = e.pendingProps;
                    var f = e.memoizedState;u = f.element,
                    wf(l, e),
                    Ia(e, a, null, t);
                    var i = e.memoizedState;
                    if (a = i.cache, Fe(e, Ml, a), a !== f.cache && Qf(e, [Ml], t, !0), Pa(), a = i.element, f.isDehydrated)
                        if (f = {
                                element: a,
                                isDehydrated: !1,
                                cache: i.cache
                            }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                            e = Fo(l, e, a, t);
                            break l
                        } else if (a !== u) {
                        u = ce(Error(c(424)), e), Ka(u), e = Fo(l, e, a, t);
                        break l
                    } else
                        for (l = e.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, gl = pe(l.firstChild), Xl = e, al = !0, Dt = null, Me = !0, t = Ho(e, null, a, t), e.child = t; t;) t.flags = t.flags & -3 | 4096, t = t.sibling;
                    else {
                        if (La(), a === u) {
                            e = je(l, e, t);
                            break l
                        }
                        Ul(l, e, a, t)
                    }
                    e = e.child
                }
                return e;
            case 26:
                return pn(l, e), l === null ? (t = ur(e.type, null, e.pendingProps, null)) ? e.memoizedState = t : al || (t = e.type, l = e.pendingProps, a = Cn(K.current).createElement(t), a[Gl] = e, a[Ql] = l, Hl(a, t, l), Rl(a), e.stateNode = a) : e.memoizedState = ur(e.type, l.memoizedProps, e.pendingProps, l.memoizedState), null;
            case 27:
                return Pn(e), l === null && al && (a = e.stateNode = er(e.type, e.pendingProps, K.current), Xl = e, Me = !0, u = gl, rt(e.type) ? (uc = u, gl = pe(a.firstChild)) : gl = u), Ul(l, e, e.pendingProps.children, t), pn(l, e), l === null && (e.flags |= 4194304), e.child;
            case 5:
                return l === null && al && ((u = a = gl) && (a = Yh(a, e.type, e.pendingProps, Me), a !== null ? (e.stateNode = a, Xl = e, gl = pe(a.firstChild), Me = !1, u = !0) : u = !1), u || Ut(e)), Pn(e), u = e.type, f = e.pendingProps, i = l !== null ? l.memoizedProps : null, a = f.children, lc(u, f) ? a = null : i !== null && lc(u, i) && (e.flags |= 32), e.memoizedState !== null && (u = If(l, e, eh, null, null, t), Tu._currentValue = u), pn(l, e), Ul(l, e, a, t), e.child;
            case 6:
                return l === null && al && ((l = t = gl) && (t = kh(t, e.pendingProps, Me), t !== null ? (e.stateNode = t, Xl = e, gl = null, l = !0) : l = !1), l || Ut(e)), null;
            case 13:
                return xo(l, e, t);
            case 4:
                return hl(e, e.stateNode.containerInfo), a = e.pendingProps, l === null ? e.child = ya(e, null, a, t) : Ul(l, e, a, t), e.child;
            case 11:
                return Vo(l, e, e.type, e.pendingProps, t);
            case 7:
                return Ul(l, e, e.pendingProps, t), e.child;
            case 8:
                return Ul(l, e, e.pendingProps.children, t), e.child;
            case 12:
                return Ul(l, e, e.pendingProps.children, t), e.child;
            case 10:
                return a = e.pendingProps, Fe(e, e.type, a.value), Ul(l, e, a.children, t), e.child;
            case 9:
                return u = e.type._context, a = e.pendingProps.children, Ht(e), u = Yl(u), a = a(u), e.flags |= 1, Ul(l, e, a, t), e.child;
            case 14:
                return Lo(l, e, e.type, e.pendingProps, t);
            case 15:
                return Ko(l, e, e.type, e.pendingProps, t);
            case 19:
                return Io(l, e, t);
            case 31:
                return a = e.pendingProps, t = e.mode, a = {
                    mode: a.mode,
                    children: a.children
                }, l === null ? (t = Tn(a, t), t.ref = e.ref, e.child = t, t.return = e, e = t) : (t = qe(l.child, a), t.ref = e.ref, e.child = t, t.return = e, e = t), e;
            case 22:
                return Jo(l, e, t);
            case 24:
                return Ht(e), a = Yl(Ml), l === null ? (u = Lf(), u === null && (u = dl, f = Zf(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= t), u = f), e.memoizedState = {
                    parent: a,
                    cache: u
                }, Jf(e), Fe(e, Ml, u)) : ((l.lanes & t) !== 0 && (wf(l, e), Ia(e, null, null, t), Pa()), u = l.memoizedState, f = e.memoizedState, u.parent !== a ? (u = {
                    parent: a,
                    cache: a
                }, e.memoizedState = u, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), Fe(e, Ml, a)) : (a = f.cache, Fe(e, Ml, a), a !== u.cache && Qf(e, [Ml], t, !0))), Ul(l, e, e.pendingProps.children, t), e.child;
            case 29:
                throw e.pendingProps
        }
        throw Error(c(156, e.tag))
    }

    function Qe(l) {
        l.flags |= 4
    }

    function es(l, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) l.flags &= -167728 M + 17;
        else if (l.flags |= 167728 M + 16, !or(e)) {
            if (e = de.current, e !== null && ((P & 4194048) === P ? Ee !== null : (P & 62914560) !== P && (P & 536870912) === 0 || e !== Ee)) throw Fa = Kf, Y0;
            l.flags |= 8192
        }
    }

    function An(l, e) {
        e !== null && (l.flags |= 4), l.flags & 16384 && (e = l.tag !== 22 ? Hc() : 536870912, l.lanes |= e, ba |= e)
    }

    function fu(l, e) {
        if (!al) switch (l.tailMode) {
            case "hidden":
                e = l.tail;
                for (var t = null; e !== null;) e.alternate !== null && (t = e), e = e.sibling;
                t === null ? l.tail = null : t.sibling = null;
                break;
            case "collapsed":
                t = l.tail;
                for (var a = null; t !== null;) t.alternate !== null && (a = t), t = t.sibling;
                a === null ? e || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
        }
    }

    function vl(l) {
        var e = l.alternate !== null && l.alternate.child === l.child,
            t = 0,
            a = 0;
        if (e)
            for (var u = l.child; u !== null;) t |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = l, u = u.sibling;
        else
            for (u = l.child; u !== null;) t |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
        return l.subtreeFlags |= a, l.childLanes = t, e
    }

    function sh(l, e, t) {
        var a = e.pendingProps;
        switch (Yf(e), e.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return vl(e), null;
            case 1:
                return vl(e), null;
            case 3:
                return t = e.stateNode, a = null, l !== null && (a = l.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ye(Ml), Je(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (l === null || l.child === null) && (Va(e) ? Qe(e) : l === null || l.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, H0())), vl(e), null;
            case 26:
                return t = e.memoizedState, l === null ? (Qe(e), t !== null ? (vl(e), es(e, t)) : (vl(e), e.flags &= -167728 M + 17)) : t ? t !== l.memoizedState ? (Qe(e), vl(e), es(e, t)) : (vl(e), e.flags &= -167728 M + 17) : (l.memoizedProps !== a && Qe(e), vl(e), e.flags &= -167728 M + 17), null;
            case 27:
                Hu(e), t = K.current;
                var u = e.type;
                if (l !== null && e.stateNode != null) l.memoizedProps !== a && Qe(e);
                else {
                    if (!a) {
                        if (e.stateNode === null) throw Error(c(166));
                        return vl(e), null
                    }
                    l = j.current, Va(e) ? U0(e) : (l = er(u, a, t), e.stateNode = l, Qe(e))
                }
                return vl(e), null;
            case 5:
                if (Hu(e), t = e.type, l !== null && e.stateNode != null) l.memoizedProps !== a && Qe(e);
                else {
                    if (!a) {
                        if (e.stateNode === null) throw Error(c(166));
                        return vl(e), null
                    }
                    if (l = j.current, Va(e)) U0(e);
                    else {
                        switch (u = Cn(K.current), l) {
                            case 1:
                                l = u.createElementNS("http://www.w3.org/2000/svg", t);
                                break;
                            case 2:
                                l = u.createElementNS("http://www.w3.org/1998/Math/MathML", t);
                                break;
                            default:
                                switch (t) {
                                    case "svg":
                                        l = u.createElementNS("http://www.w3.org/2000/svg", t);
                                        break;
                                    case "math":
                                        l = u.createElementNS("http://www.w3.org/1998/Math/MathML", t);
                                        break;
                                    case "script":
                                        l = u.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                                        break;
                                    case "select":
                                        l = typeof a.is == "string" ? u.createElement("select", {
                                            is: a.is
                                        }) : u.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                                        break;
                                    default:
                                        l = typeof a.is == "string" ? u.createElement(t, {
                                            is: a.is
                                        }) : u.createElement(t)
                                }
                        }
                        l[Gl] = e, l[Ql] = a;
                        l: for (u = e.child; u !== null;) {
                            if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
                            else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                                u.child.return = u, u = u.child;
                                continue
                            }
                            if (u === e) break l;
                            for (; u.sibling === null;) {
                                if (u.return === null || u.return === e) break l;
                                u = u.return
                            }
                            u.sibling.return = u.return, u = u.sibling
                        }
                        e.stateNode = l;
                        l: switch (Hl(l, t, a), t) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l = !!a.autoFocus;
                                break l;
                            case "img":
                                l = !0;
                                break l;
                            default:
                                l = !1
                        }
                        l && Qe(e)
                    }
                }
                return vl(e), e.flags &= -167728 M + 17, null;
            case 6:
                if (l && e.stateNode != null) l.memoizedProps !== a && Qe(e);
                else {
                    if (typeof a != "string" && e.stateNode === null) throw Error(c(166));
                    if (l = K.current, Va(e)) {
                        if (l = e.stateNode, t = e.memoizedProps, a = null, u = Xl, u !== null) switch (u.tag) {
                            case 27:
                            case 5:
                                a = u.memoizedProps
                        }
                        l[Gl] = e, l = !!(l.nodeValue === t || a !== null && a.suppressHydrationWarning === !0 || Ws(l.nodeValue, t)), l || Ut(e)
                    } else l = Cn(l).createTextNode(a), l[Gl] = e, e.stateNode = l
                }
                return vl(e), null;
            case 13:
                if (a = e.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                    if (u = Va(e), a !== null && a.dehydrated !== null) {
                        if (l === null) {
                            if (!u) throw Error(c(318));
                            if (u = e.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(c(317));
                            u[Gl] = e
                        } else La(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        vl(e), u = !1
                    } else u = H0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
                    if (!u) return e.flags & 256 ? (Xe(e), e) : (Xe(e), null)
                }
                if (Xe(e), (e.flags & 128) !== 0) return e.lanes = t, e;
                if (t = a !== null, l = l !== null && l.memoizedState !== null, t) {
                    a = e.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool);
                    var f = null;
                    a.memoizedState !== null && a.memoizedState.cachePool !== null && (f = a.memoizedState.cachePool.pool), f !== u && (a.flags |= 2048)
                }
                return t !== l && t && (e.child.flags |= 8192), An(e, e.updateQueue), vl(e), null;
            case 4:
                return Je(), l === null && $i(e.stateNode.containerInfo), vl(e), null;
            case 10:
                return Ye(e.type), vl(e), null;
            case 19:
                if (B(El), u = e.memoizedState, u === null) return vl(e), null;
                if (a = (e.flags & 128) !== 0, f = u.rendering, f === null)
                    if (a) fu(u, !1);
                    else {
                        if (ml !== 0 || l !== null && (l.flags & 128) !== 0)
                            for (l = e.child; l !== null;) {
                                if (f = mn(l), f !== null) {
                                    for (e.flags |= 128, fu(u, !1), l = f.updateQueue, e.updateQueue = l, An(e, l), e.subtreeFlags = 0, l = t, t = e.child; t !== null;) z0(t, l), t = t.sibling;
                                    return H(El, El.current & 1 | 2), e.child
                                }
                                l = l.sibling
                            }
                        u.tail !== null && Ae() > _n && (e.flags |= 128, a = !0, fu(u, !1), e.lanes = 4194304)
                    }
                else {
                    if (!a)
                        if (l = mn(f), l !== null) {
                            if (e.flags |= 128, a = !0, l = l.updateQueue, e.updateQueue = l, An(e, l), fu(u, !0), u.tail === null && u.tailMode === "hidden" && !f.alternate && !al) return vl(e), null
                        } else 2 * Ae() - u.renderingStartTime > _n && t !== 536870912 && (e.flags |= 128, a = !0, fu(u, !1), e.lanes = 4194304);
                    u.isBackwards ? (f.sibling = e.child, e.child = f) : (l = u.last, l !== null ? l.sibling = f : e.child = f, u.last = f)
                }
                return u.tail !== null ? (e = u.tail, u.rendering = e, u.tail = e.sibling, u.renderingStartTime = Ae(), e.sibling = null, l = El.current, H(El, a ? l & 1 | 2 : l & 1), e) : (vl(e), null);
            case 22:
            case 23:
                return Xe(e), xf(), a = e.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (t & 536870912) !== 0 && (e.flags & 128) === 0 && (vl(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : vl(e), t = e.updateQueue, t !== null && An(e, t.retryQueue), t = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== t && (e.flags |= 2048), l !== null && B(qt), null;
            case 24:
                return t = null, l !== null && (t = l.memoizedState.cache), e.memoizedState.cache !== t && (e.flags |= 2048), Ye(Ml), vl(e), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(c(156, e.tag))
    }

    function rh(l, e) {
        switch (Yf(e), e.tag) {
            case 1:
                return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
            case 3:
                return Ye(Ml), Je(), l = e.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (e.flags = l & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
                return Hu(e), null;
            case 13:
                if (Xe(e), l = e.memoizedState, l !== null && l.dehydrated !== null) {
                    if (e.alternate === null) throw Error(c(340));
                    La()
                }
                return l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
            case 19:
                return B(El), null;
            case 4:
                return Je(), null;
            case 10:
                return Ye(e.type), null;
            case 22:
            case 23:
                return Xe(e), xf(), l !== null && B(qt), l = e.flags, l & 65536 ? (e.flags = l & -65537 | 128, e) : null;
            case 24:
                return Ye(Ml), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function ts(l, e) {
        switch (Yf(e), e.tag) {
            case 3:
                Ye(Ml), Je();
                break;
            case 26:
            case 27:
            case 5:
                Hu(e);
                break;
            case 4:
                Je();
                break;
            case 13:
                Xe(e);
                break;
            case 19:
                B(El);
                break;
            case 10:
                Ye(e.type);
                break;
            case 22:
            case 23:
                Xe(e), xf(), l !== null && B(qt);
                break;
            case 24:
                Ye(Ml)
        }
    }

    function iu(l, e) {
        try {
            var t = e.updateQueue,
                a = t !== null ? t.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                t = u;
                do {
                    if ((t.tag & l) === l) {
                        a = void 0;
                        var f = t.create,
                            i = t.inst;
                        a = f(), i.destroy = a
                    }
                    t = t.next
                } while (t !== u)
            }
        } catch (o) {
            rl(e, e.return, o)
        }
    }

    function at(l, e, t) {
        try {
            var a = e.updateQueue,
                u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var f = u.next;
                a = f;
                do {
                    if ((a.tag & l) === l) {
                        var i = a.inst,
                            o = i.destroy;
                        if (o !== void 0) {
                            i.destroy = void 0, u = e;
                            var d = t,
                                S = o;
                            try {
                                S()
                            } catch (R) {
                                rl(u, d, R)
                            }
                        }
                    }
                    a = a.next
                } while (a !== f)
            }
        } catch (R) {
            rl(e, e.return, R)
        }
    }

    function as(l) {
        var e = l.updateQueue;
        if (e !== null) {
            var t = l.stateNode;
            try {
                V0(e, t)
            } catch (a) {
                rl(l, l.return, a)
            }
        }
    }

    function us(l, e, t) {
        t.props = Ct(l.type, l.memoizedProps), t.state = l.memoizedState;
        try {
            t.componentWillUnmount()
        } catch (a) {
            rl(l, e, a)
        }
    }

    function cu(l, e) {
        try {
            var t = l.ref;
            if (t !== null) {
                switch (l.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = l.stateNode;
                        break;
                    case 30:
                        a = l.stateNode;
                        break;
                    default:
                        a = l.stateNode
                }
                typeof t == "function" ? l.refCleanup = t(a) : t.current = a
            }
        } catch (u) {
            rl(l, e, u)
        }
    }

    function _e(l, e) {
        var t = l.ref,
            a = l.refCleanup;
        if (t !== null)
            if (typeof a == "function") try {
                a()
            } catch (u) {
                rl(l, e, u)
            } finally {
                l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
            } else if (typeof t == "function") try {
                t(null)
            } catch (u) {
                rl(l, e, u)
            } else t.current = null
    }

    function ns(l) {
        var e = l.type,
            t = l.memoizedProps,
            a = l.stateNode;
        try {
            l: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    t.autoFocus && a.focus();
                    break l;
                case "img":
                    t.src ? a.src = t.src : t.srcSet && (a.srcset = t.srcSet)
            }
        }
        catch (u) {
            rl(l, l.return, u)
        }
    }

    function _i(l, e, t) {
        try {
            var a = l.stateNode;
            Hh(a, l.type, t, e), a[Ql] = e
        } catch (u) {
            rl(l, l.return, u)
        }
    }

    function fs(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && rt(l.type) || l.tag === 4
    }

    function Ri(l) {
        l: for (;;) {
            for (; l.sibling === null;) {
                if (l.return === null || fs(l.return)) return null;
                l = l.return
            }
            for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                if (l.tag === 27 && rt(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                l.child.return = l, l = l.child
            }
            if (!(l.flags & 2)) return l.stateNode
        }
    }

    function Oi(l, e, t) {
        var a = l.tag;
        if (a === 5 || a === 6) l = l.stateNode, e ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(l, e) : (e = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.appendChild(l), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = Bn));
        else if (a !== 4 && (a === 27 && rt(l.type) && (t = l.stateNode, e = null), l = l.child, l !== null))
            for (Oi(l, e, t), l = l.sibling; l !== null;) Oi(l, e, t), l = l.sibling
    }

    function Mn(l, e, t) {
        var a = l.tag;
        if (a === 5 || a === 6) l = l.stateNode, e ? t.insertBefore(l, e) : t.appendChild(l);
        else if (a !== 4 && (a === 27 && rt(l.type) && (t = l.stateNode), l = l.child, l !== null))
            for (Mn(l, e, t), l = l.sibling; l !== null;) Mn(l, e, t), l = l.sibling
    }

    function is(l) {
        var e = l.stateNode,
            t = l.memoizedProps;
        try {
            for (var a = l.type, u = e.attributes; u.length;) e.removeAttributeNode(u[0]);
            Hl(e, a, t), e[Gl] = l, e[Ql] = t
        } catch (f) {
            rl(l, l.return, f)
        }
    }
    var Ze = !1,
        Sl = !1,
        zi = !1,
        cs = typeof WeakSet == "function" ? WeakSet : Set,
        zl = null;

    function dh(l, e) {
        if (l = l.containerInfo, Pi = Qn, l = b0(l), Rf(l)) {
            if ("selectionStart" in l) var t = {
                start: l.selectionStart,
                end: l.selectionEnd
            };
            else l: {
                t = (t = l.ownerDocument) && t.defaultView || window;
                var a = t.getSelection && t.getSelection();
                if (a && a.rangeCount !== 0) {
                    t = a.anchorNode;
                    var u = a.anchorOffset,
                        f = a.focusNode;
                    a = a.focusOffset;
                    try {
                        t.nodeType, f.nodeType
                    } catch {
                        t = null;
                        break l
                    }
                    var i = 0,
                        o = -1,
                        d = -1,
                        S = 0,
                        R = 0,
                        D = l,
                        T = null;
                    e: for (;;) {
                        for (var E; D !== t || u !== 0 && D.nodeType !== 3 || (o = i + u), D !== f || a !== 0 && D.nodeType !== 3 || (d = i + a), D.nodeType === 3 && (i += D.nodeValue.length), (E = D.firstChild) !== null;) T = D, D = E;
                        for (;;) {
                            if (D === l) break e;
                            if (T === t && ++S === u && (o = i), T === f && ++R === a && (d = i), (E = D.nextSibling) !== null) break;
                            D = T, T = D.parentNode
                        }
                        D = E
                    }
                    t = o === -1 || d === -1 ? null : {
                        start: o,
                        end: d
                    }
                } else t = null
            }
            t = t || {
                start: 0,
                end: 0
            }
        } else t = null;
        for (Ii = {
                focusedElem: l,
                selectionRange: t
            }, Qn = !1, zl = e; zl !== null;)
            if (e = zl, l = e.child, (e.subtreeFlags & 1024) !== 0 && l !== null) l.return = e, zl = l;
            else
                for (; zl !== null;) {
                    switch (e = zl, f = e.alternate, l = e.flags, e.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((l & 1024) !== 0 && f !== null) {
                                l = void 0, t = e, u = f.memoizedProps, f = f.memoizedState, a = t.stateNode;
                                try {
                                    var L = Ct(t.type, u, t.elementType === t.type);
                                    l = a.getSnapshotBeforeUpdate(L, f), a.__reactInternalSnapshotBeforeUpdate = l
                                } catch (Q) {
                                    rl(t, t.return, Q)
                                }
                            }
                            break;
                        case 3:
                            if ((l & 1024) !== 0) {
                                if (l = e.stateNode.containerInfo, t = l.nodeType, t === 9) tc(l);
                                else if (t === 1) switch (l.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        tc(l);
                                        break;
                                    default:
                                        l.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((l & 1024) !== 0) throw Error(c(163))
                    }
                    if (l = e.sibling, l !== null) {
                        l.return = e.return, zl = l;
                        break
                    }
                    zl = e.return
                }
    }

    function os(l, e, t) {
        var a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                ut(l, t), a & 4 && iu(5, t);
                break;
            case 1:
                if (ut(l, t), a & 4)
                    if (l = t.stateNode, e === null) try {
                        l.componentDidMount()
                    } catch (i) {
                        rl(t, t.return, i)
                    } else {
                        var u = Ct(t.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            l.componentDidUpdate(u, e, l.__reactInternalSnapshotBeforeUpdate)
                        } catch (i) {
                            rl(t, t.return, i)
                        }
                    }
                a & 64 && as(t), a & 512 && cu(t, t.return);
                break;
            case 3:
                if (ut(l, t), a & 64 && (l = t.updateQueue, l !== null)) {
                    if (e = null, t.child !== null) switch (t.child.tag) {
                        case 27:
                        case 5:
                            e = t.child.stateNode;
                            break;
                        case 1:
                            e = t.child.stateNode
                    }
                    try {
                        V0(l, e)
                    } catch (i) {
                        rl(t, t.return, i)
                    }
                }
                break;
            case 27:
                e === null && a & 4 && is(t);
            case 26:
            case 5:
                ut(l, t), e === null && a & 4 && ns(t), a & 512 && cu(t, t.return);
                break;
            case 12:
                ut(l, t);
                break;
            case 13:
                ut(l, t), a & 4 && ds(l, t), a & 64 && (l = t.memoizedState, l !== null && (l = l.dehydrated, l !== null && (t = Th.bind(null, t), Xh(l, t))));
                break;
            case 22:
                if (a = t.memoizedState !== null || Ze, !a) {
                    e = e !== null && e.memoizedState !== null || Sl, u = Ze;
                    var f = Sl;
                    Ze = a, (Sl = e) && !f ? nt(l, t, (t.subtreeFlags & 8728 M + ) !== 0) : ut(l, t), Ze = u, Sl = f
                }
                break;
            case 30:
                break;
            default:
                ut(l, t)
        }
    }

    function ss(l) {
        var e = l.alternate;
        e !== null && (l.alternate = null, ss(e)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (e = l.stateNode, e !== null && ff(e)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
    }
    var yl = null,
        Ll = !1;

    function Ve(l, e, t) {
        for (t = t.child; t !== null;) rs(l, e, t), t = t.sibling
    }

    function rs(l, e, t) {
        if (Fl && typeof Fl.onCommitFiberUnmount == "function") try {
            Fl.onCommitFiberUnmount(Da, t)
        } catch {}
        switch (t.tag) {
            case 26:
                Sl || _e(t, e), Ve(l, e, t), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
                break;
            case 27:
                Sl || _e(t, e);
                var a = yl,
                    u = Ll;
                rt(t.type) && (yl = t.stateNode, Ll = !1), Ve(l, e, t), mu(t.stateNode), yl = a, Ll = u;
                break;
            case 5:
                Sl || _e(t, e);
            case 6:
                if (a = yl, u = Ll, yl = null, Ve(l, e, t), yl = a, Ll = u, yl !== null)
                    if (Ll) try {
                        (yl.nodeType === 9 ? yl.body : yl.nodeName === "HTML" ? yl.ownerDocument.body : yl).removeChild(t.stateNode)
                    } catch (f) {
                        rl(t, e, f)
                    } else try {
                        yl.removeChild(t.stateNode)
                    } catch (f) {
                        rl(t, e, f)
                    }
                break;
            case 18:
                yl !== null && (Ll ? (l = yl, Is(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.stateNode), _u(l)) : Is(yl, t.stateNode));
                break;
            case 4:
                a = yl, u = Ll, yl = t.stateNode.containerInfo, Ll = !0, Ve(l, e, t), yl = a, Ll = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Sl || at(2, t, e), Sl || at(4, t, e), Ve(l, e, t);
                break;
            case 1:
                Sl || (_e(t, e), a = t.stateNode, typeof a.componentWillUnmount == "function" && us(t, e, a)), Ve(l, e, t);
                break;
            case 21:
                Ve(l, e, t);
                break;
            case 22:
                Sl = (a = Sl) || t.memoizedState !== null, Ve(l, e, t), Sl = a;
                break;
            default:
                Ve(l, e, t)
        }
    }

    function ds(l, e) {
        if (e.memoizedState === null && (l = e.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
            _u(l)
        } catch (t) {
            rl(e, e.return, t)
        }
    }

    function hh(l) {
        switch (l.tag) {
            case 13:
            case 19:
                var e = l.stateNode;
                return e === null && (e = l.stateNode = new cs), e;
            case 22:
                return l = l.stateNode, e = l._retryCache, e === null && (e = l._retryCache = new cs), e;
            default:
                throw Error(c(435, l.tag))
        }
    }

    function Di(l, e) {
        var t = hh(l);
        e.forEach(function(a) {
            var u = Ah.bind(null, l, a);
            t.has(a) || (t.add(a), a.then(u, u))
        })
    }

    function le(l, e) {
        var t = e.deletions;
        if (t !== null)
            for (var a = 0; a < t.length; a++) {
                var u = t[a],
                    f = l,
                    i = e,
                    o = i;
                l: for (; o !== null;) {
                    switch (o.tag) {
                        case 27:
                            if (rt(o.type)) {
                                yl = o.stateNode, Ll = !1;
                                break l
                            }
                            break;
                        case 5:
                            yl = o.stateNode, Ll = !1;
                            break l;
                        case 3:
                        case 4:
                            yl = o.stateNode.containerInfo, Ll = !0;
                            break l
                    }
                    o = o.return
                }
                if (yl === null) throw Error(c(160));
                rs(f, i, u), yl = null, Ll = !1, f = u.alternate, f !== null && (f.return = null), u.return = null
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null;) hs(e, l), e = e.sibling
    }
    var Se = null;

    function hs(l, e) {
        var t = l.alternate,
            a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                le(e, l), ee(l), a & 4 && (at(3, l, l.return), iu(3, l), at(5, l, l.return));
                break;
            case 1:
                le(e, l), ee(l), a & 512 && (Sl || t === null || _e(t, t.return)), a & 64 && Ze && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (t = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
                break;
            case 26:
                var u = Se;
                if (le(e, l), ee(l), a & 512 && (Sl || t === null || _e(t, t.return)), a & 4) {
                    var f = t !== null ? t.memoizedState : null;
                    if (a = l.memoizedState, t === null)
                        if (a === null)
                            if (l.stateNode === null) {
                                l: {
                                    a = l.type,
                                    t = l.memoizedProps,
                                    u = u.ownerDocument || u;e: switch (a) {
                                        case "title":
                                            f = u.getElementsByTagName("title")[0], (!f || f[Ha] || f[Gl] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(a), u.head.insertBefore(f, u.querySelector("head > title"))), Hl(f, a, t), f[Gl] = l, Rl(f), a = f;
                                            break l;
                                        case "link":
                                            var i = ir("link", "href", u).get(a + (t.href || ""));
                                            if (i) {
                                                for (var o = 0; o < i.length; o++)
                                                    if (f = i[o], f.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && f.getAttribute("rel") === (t.rel == null ? null : t.rel) && f.getAttribute("title") === (t.title == null ? null : t.title) && f.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                                                        i.splice(o, 1);
                                                        break e
                                                    }
                                            }
                                            f = u.createElement(a), Hl(f, a, t), u.head.appendChild(f);
                                            break;
                                        case "meta":
                                            if (i = ir("meta", "content", u).get(a + (t.content || ""))) {
                                                for (o = 0; o < i.length; o++)
                                                    if (f = i[o], f.getAttribute("content") === (t.content == null ? null : "" + t.content) && f.getAttribute("name") === (t.name == null ? null : t.name) && f.getAttribute("property") === (t.property == null ? null : t.property) && f.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && f.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                                                        i.splice(o, 1);
                                                        break e
                                                    }
                                            }
                                            f = u.createElement(a), Hl(f, a, t), u.head.appendChild(f);
                                            break;
                                        default:
                                            throw Error(c(468, a))
                                    }
                                    f[Gl] = l,
                                    Rl(f),
                                    a = f
                                }
                                l.stateNode = a
                            }
                    else cr(u, l.type, l.stateNode);
                    else l.stateNode = fr(u, a, l.memoizedProps);
                    else f !== a ? (f === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : f.count--, a === null ? cr(u, l.type, l.stateNode) : fr(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && _i(l, l.memoizedProps, t.memoizedProps)
                }
                break;
            case 27:
                le(e, l), ee(l), a & 512 && (Sl || t === null || _e(t, t.return)), t !== null && a & 4 && _i(l, l.memoizedProps, t.memoizedProps);
                break;
            case 5:
                if (le(e, l), ee(l), a & 512 && (Sl || t === null || _e(t, t.return)), l.flags & 32) {
                    u = l.stateNode;
                    try {
                        Ft(u, "")
                    } catch (E) {
                        rl(l, l.return, E)
                    }
                }
                a & 4 && l.stateNode != null && (u = l.memoizedProps, _i(l, u, t !== null ? t.memoizedProps : u)), a & 1024 && (zi = !0);
                break;
            case 6:
                if (le(e, l), ee(l), a & 4) {
                    if (l.stateNode === null) throw Error(c(162));
                    a = l.memoizedProps, t = l.stateNode;
                    try {
                        t.nodeValue = a
                    } catch (E) {
                        rl(l, l.return, E)
                    }
                }
                break;
            case 3:
                if (kn = null, u = Se, Se = Gn(e.containerInfo), le(e, l), Se = u, ee(l), a & 4 && t !== null && t.memoizedState.isDehydrated) try {
                    _u(e.containerInfo)
                } catch (E) {
                    rl(l, l.return, E)
                }
                zi && (zi = !1, ys(l));
                break;
            case 4:
                a = Se, Se = Gn(l.stateNode.containerInfo), le(e, l), ee(l), Se = a;
                break;
            case 12:
                le(e, l), ee(l);
                break;
            case 13:
                le(e, l), ee(l), l.child.flags & 8192 && l.memoizedState !== null != (t !== null && t.memoizedState !== null) && (Ci = Ae()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Di(l, a)));
                break;
            case 22:
                u = l.memoizedState !== null;
                var d = t !== null && t.memoizedState !== null,
                    S = Ze,
                    R = Sl;
                if (Ze = S || u, Sl = R || d, le(e, l), Sl = R, Ze = S, ee(l), a & 8192) l: for (e = l.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, u && (t === null || d || Ze || Sl || Gt(l)), t = null, e = l;;) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (t === null) {
                            d = t = e;
                            try {
                                if (f = d.stateNode, u) i = f.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    o = d.stateNode;
                                    var D = d.memoizedProps.style,
                                        T = D != null && D.hasOwnProperty("display") ? D.display : null;
                                    o.style.display = T == null || typeof T == "boolean" ? "" : ("" + T).trim()
                                }
                            } catch (E) {
                                rl(d, d.return, E)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (t === null) {
                            d = e;
                            try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps
                            } catch (E) {
                                rl(d, d.return, E)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === l) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === l) break l;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === l) break l;
                        t === e && (t = null), e = e.return
                    }
                    t === e && (t = null), e.sibling.return = e.return, e = e.sibling
                }
                a & 4 && (a = l.updateQueue, a !== null && (t = a.retryQueue, t !== null && (a.retryQueue = null, Di(l, t))));
                break;
            case 19:
                le(e, l), ee(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Di(l, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                le(e, l), ee(l)
        }
    }

    function ee(l) {
        var e = l.flags;
        if (e & 2) {
            try {
                for (var t, a = l.return; a !== null;) {
                    if (fs(a)) {
                        t = a;
                        break
                    }
                    a = a.return
                }
                if (t == null) throw Error(c(160));
                switch (t.tag) {
                    case 27:
                        var u = t.stateNode,
                            f = Ri(l);
                        Mn(l, f, u);
                        break;
                    case 5:
                        var i = t.stateNode;
                        t.flags & 32 && (Ft(i, ""), t.flags &= -33);
                        var o = Ri(l);
                        Mn(l, o, i);
                        break;
                    case 3:
                    case 4:
                        var d = t.stateNode.containerInfo,
                            S = Ri(l);
                        Oi(l, S, d);
                        break;
                    default:
                        throw Error(c(161))
                }
            } catch (R) {
                rl(l, l.return, R)
            }
            l.flags &= -3
        }
        e & 4096 && (l.flags &= -4097)
    }

    function ys(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null;) {
                var e = l;
                ys(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), l = l.sibling
            }
    }

    function ut(l, e) {
        if (e.subtreeFlags & 8728 M + )
            for (e = e.child; e !== null;) os(l, e.alternate, e), e = e.sibling
    }

    function Gt(l) {
        for (l = l.child; l !== null;) {
            var e = l;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    at(4, e, e.return), Gt(e);
                    break;
                case 1:
                    _e(e, e.return);
                    var t = e.stateNode;
                    typeof t.componentWillUnmount == "function" && us(e, e.return, t), Gt(e);
                    break;
                case 27:
                    mu(e.stateNode);
                case 26:
                case 5:
                    _e(e, e.return), Gt(e);
                    break;
                case 22:
                    e.memoizedState === null && Gt(e);
                    break;
                case 30:
                    Gt(e);
                    break;
                default:
                    Gt(e)
            }
            l = l.sibling
        }
    }

    function nt(l, e, t) {
        for (t = t && (e.subtreeFlags & 8728 M + ) !== 0, e = e.child; e !== null;) {
            var a = e.alternate,
                u = l,
                f = e,
                i = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    nt(u, f, t), iu(4, f);
                    break;
                case 1:
                    if (nt(u, f, t), a = f, u = a.stateNode, typeof u.componentDidMount == "function") try {
                        u.componentDidMount()
                    } catch (S) {
                        rl(a, a.return, S)
                    }
                    if (a = f, u = a.updateQueue, u !== null) {
                        var o = a.stateNode;
                        try {
                            var d = u.shared.hiddenCallbacks;
                            if (d !== null)
                                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++) Z0(d[u], o)
                        } catch (S) {
                            rl(a, a.return, S)
                        }
                    }
                    t && i & 64 && as(f), cu(f, f.return);
                    break;
                case 27:
                    is(f);
                case 26:
                case 5:
                    nt(u, f, t), t && a === null && i & 4 && ns(f), cu(f, f.return);
                    break;
                case 12:
                    nt(u, f, t);
                    break;
                case 13:
                    nt(u, f, t), t && i & 4 && ds(u, f);
                    break;
                case 22:
                    f.memoizedState === null && nt(u, f, t), cu(f, f.return);
                    break;
                case 30:
                    break;
                default:
                    nt(u, f, t)
            }
            e = e.sibling
        }
    }

    function Ui(l, e) {
        var t = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== t && (l != null && l.refCount++, t != null && wa(t))
    }

    function Ni(l, e) {
        l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && wa(l))
    }

    function Re(l, e, t, a) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) vs(l, e, t, a), e = e.sibling
    }

    function vs(l, e, t, a) {
        var u = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Re(l, e, t, a), u & 2048 && iu(9, e);
                break;
            case 1:
                Re(l, e, t, a);
                break;
            case 3:
                Re(l, e, t, a), u & 2048 && (l = null, e.alternate !== null && (l = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== l && (e.refCount++, l != null && wa(l)));
                break;
            case 12:
                if (u & 2048) {
                    Re(l, e, t, a), l = e.stateNode;
                    try {
                        var f = e.memoizedProps,
                            i = f.id,
                            o = f.onPostCommit;
                        typeof o == "function" && o(i, e.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                    } catch (d) {
                        rl(e, e.return, d)
                    }
                } else Re(l, e, t, a);
                break;
            case 13:
                Re(l, e, t, a);
                break;
            case 23:
                break;
            case 22:
                f = e.stateNode, i = e.alternate, e.memoizedState !== null ? f._visibility & 2 ? Re(l, e, t, a) : ou(l, e) : f._visibility & 2 ? Re(l, e, t, a) : (f._visibility |= 2, va(l, e, t, a, (e.subtreeFlags & 10256) !== 0)), u & 2048 && Ui(i, e);
                break;
            case 24:
                Re(l, e, t, a), u & 2048 && Ni(e.alternate, e);
                break;
            default:
                Re(l, e, t, a)
        }
    }

    function va(l, e, t, a, u) {
        for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null;) {
            var f = l,
                i = e,
                o = t,
                d = a,
                S = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    va(f, i, o, d, u), iu(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var R = i.stateNode;
                    i.memoizedState !== null ? R._visibility & 2 ? va(f, i, o, d, u) : ou(f, i) : (R._visibility |= 2, va(f, i, o, d, u)), u && S & 2048 && Ui(i.alternate, i);
                    break;
                case 24:
                    va(f, i, o, d, u), u && S & 2048 && Ni(i.alternate, i);
                    break;
                default:
                    va(f, i, o, d, u)
            }
            e = e.sibling
        }
    }

    function ou(l, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) {
                var t = l,
                    a = e,
                    u = a.flags;
                switch (a.tag) {
                    case 22:
                        ou(t, a), u & 2048 && Ui(a.alternate, a);
                        break;
                    case 24:
                        ou(t, a), u & 2048 && Ni(a.alternate, a);
                        break;
                    default:
                        ou(t, a)
                }
                e = e.sibling
            }
    }
    var su = 8192;

    function ga(l) {
        if (l.subtreeFlags & su)
            for (l = l.child; l !== null;) gs(l), l = l.sibling
    }

    function gs(l) {
        switch (l.tag) {
            case 26:
                ga(l), l.flags & su && l.memoizedState !== null && Ph(Se, l.memoizedState, l.memoizedProps);
                break;
            case 5:
                ga(l);
                break;
            case 3:
            case 4:
                var e = Se;
                Se = Gn(l.stateNode.containerInfo), ga(l), Se = e;
                break;
            case 22:
                l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = su, su = 167728 M + 16, ga(l), su = e) : ga(l));
                break;
            default:
                ga(l)
        }
    }

    function ms(l) {
        var e = l.alternate;
        if (e !== null && (l = e.child, l !== null)) {
            e.child = null;
            do e = l.sibling, l.sibling = null, l = e; while (l !== null)
        }
    }

    function ru(l) {
        var e = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (e !== null)
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    zl = a, Ss(a, l)
                }
            ms(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) bs(l), l = l.sibling
    }

    function bs(l) {
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                ru(l), l.flags & 2048 && at(9, l, l.return);
                break;
            case 3:
                ru(l);
                break;
            case 12:
                ru(l);
                break;
            case 22:
                var e = l.stateNode;
                l.memoizedState !== null && e._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (e._visibility &= -3, En(l)) : ru(l);
                break;
            default:
                ru(l)
        }
    }

    function En(l) {
        var e = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (e !== null)
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    zl = a, Ss(a, l)
                }
            ms(l)
        }
        for (l = l.child; l !== null;) {
            switch (e = l, e.tag) {
                case 0:
                case 11:
                case 15:
                    at(8, e, e.return), En(e);
                    break;
                case 22:
                    t = e.stateNode, t._visibility & 2 && (t._visibility &= -3, En(e));
                    break;
                default:
                    En(e)
            }
            l = l.sibling
        }
    }

    function Ss(l, e) {
        for (; zl !== null;) {
            var t = zl;
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    at(8, t, e);
                    break;
                case 23:
                case 22:
                    if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
                        var a = t.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    wa(t.memoizedState.cache)
            }
            if (a = t.child, a !== null) a.return = t, zl = a;
            else l: for (t = l; zl !== null;) {
                a = zl;
                var u = a.sibling,
                    f = a.return;
                if (ss(a), a === t) {
                    zl = null;
                    break l
                }
                if (u !== null) {
                    u.return = f, zl = u;
                    break l
                }
                zl = f
            }
        }
    }
    var yh = {
            getCacheForType: function(l) {
                var e = Yl(Ml),
                    t = e.data.get(l);
                return t === void 0 && (t = l(), e.data.set(l, t)), t
            }
        },
        vh = typeof WeakMap == "function" ? WeakMap : Map,
        ul = 0,
        dl = null,
        $ = null,
        P = 0,
        nl = 0,
        te = null,
        ft = !1,
        ma = !1,
        Hi = !1,
        Le = 0,
        ml = 0,
        it = 0,
        Yt = 0,
        qi = 0,
        he = 0,
        ba = 0,
        du = null,
        Kl = null,
        Bi = !1,
        Ci = 0,
        _n = 1 / 0,
        Rn = null,
        ct = null,
        Nl = 0,
        ot = null,
        Sa = null,
        pa = 0,
        Gi = 0,
        Yi = null,
        ps = null,
        hu = 0,
        ki = null;

    function ae() {
        if ((ul & 2) !== 0 && P !== 0) return P & -P;
        if (O.T !== null) {
            var l = ia;
            return l !== 0 ? l : Ki()
        }
        return Cc()
    }

    function Ts() {
        he === 0 && (he = (P & 536870912) === 0 || al ? Nc() : 536870912);
        var l = de.current;
        return l !== null && (l.flags |= 32), he
    }

    function ue(l, e, t) {
        (l === dl && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) && (Ta(l, 0), st(l, P, he, !1)), Na(l, t), ((ul & 2) === 0 || l !== dl) && (l === dl && ((ul & 2) === 0 && (Yt |= t), ml === 4 && st(l, P, he, !1)), Oe(l))
    }

    function As(l, e, t) {
        if ((ul & 6) !== 0) throw Error(c(327));
        var a = !t && (e & 124) === 0 && (e & l.expiredLanes) === 0 || Ua(l, e),
            u = a ? bh(l, e) : Qi(l, e, !0),
            f = a;
        do {
            if (u === 0) {
                ma && !a && st(l, e, 0, !1);
                break
            } else {
                if (t = l.current.alternate, f && !gh(t)) {
                    u = Qi(l, e, !1), f = !1;
                    continue
                }
                if (u === 2) {
                    if (f = e, l.errorRecoveryDisabledLanes & f) var i = 0;
                    else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        e = i;
                        l: {
                            var o = l;u = du;
                            var d = o.current.memoizedState.isDehydrated;
                            if (d && (Ta(o, i).flags |= 256), i = Qi(o, i, !1), i !== 2) {
                                if (Hi && !d) {
                                    o.errorRecoveryDisabledLanes |= f, Yt |= f, u = 4;
                                    break l
                                }
                                f = Kl, Kl = u, f !== null && (Kl === null ? Kl = f : Kl.push.apply(Kl, f))
                            }
                            u = i
                        }
                        if (f = !1, u !== 2) continue
                    }
                }
                if (u === 1) {
                    Ta(l, 0), st(l, e, 0, !0);
                    break
                }
                l: {
                    switch (a = l, f = u, f) {
                        case 0:
                        case 1:
                            throw Error(c(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            st(a, e, he, !ft);
                            break l;
                        case 2:
                            Kl = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(c(329))
                    }
                    if ((e & 62914560) === e && (u = Ci + 300 - Ae(), 10 < u)) {
                        if (st(a, e, he, !ft), Gu(a, 0, !0) !== 0) break l;
                        a.timeoutHandle = xs(Ms.bind(null, a, t, Kl, Rn, Bi, e, he, Yt, ba, ft, f, 2, -0, 0), u);
                        break l
                    }
                    Ms(a, t, Kl, Rn, Bi, e, he, Yt, ba, ft, f, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Oe(l)
    }

    function Ms(l, e, t, a, u, f, i, o, d, S, R, D, T, E) {
        if (l.timeoutHandle = -1, D = e.subtreeFlags, (D & 8192 || (D & 16785408) === 16785408) && (pu = {
                stylesheets: null,
                count: 0,
                unsuspend: xh
            }, gs(e), D = Ih(), D !== null)) {
            l.cancelPendingCommit = D(Us.bind(null, l, e, f, t, a, u, i, o, d, R, 1, T, E)), st(l, f, i, !S);
            return
        }
        Us(l, e, f, t, a, u, i, o, d)
    }

    function gh(l) {
        for (var e = l;;) {
            var t = e.tag;
            if ((t === 0 || t === 11 || t === 15) && e.flags & 16384 && (t = e.updateQueue, t !== null && (t = t.stores, t !== null)))
                for (var a = 0; a < t.length; a++) {
                    var u = t[a],
                        f = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Pl(f(), u)) return !1
                    } catch {
                        return !1
                    }
                }
            if (t = e.child, e.subtreeFlags & 16384 && t !== null) t.return = e, e = t;
            else {
                if (e === l) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === l) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function st(l, e, t, a) {
        e &= ~qi, e &= ~Yt, l.suspendedLanes |= e, l.pingedLanes &= ~e, a && (l.warmLanes |= e), a = l.expirationTimes;
        for (var u = e; 0 < u;) {
            var f = 31 - xl(u),
                i = 1 << f;
            a[f] = -1, u &= ~i
        }
        t !== 0 && qc(l, t, e)
    }

    function On() {
        return (ul & 6) === 0 ? (yu(0), !1) : !0
    }

    function Xi() {
        if ($ !== null) {
            if (nl === 0) var l = $.return;
            else l = $, Ge = Nt = null, ti(l), ha = null, uu = 0, l = $;
            for (; l !== null;) ts(l.alternate, l), l = l.return;
            $ = null
        }
    }

    function Ta(l, e) {
        var t = l.timeoutHandle;
        t !== -1 && (l.timeoutHandle = -1, Bh(t)), t = l.cancelPendingCommit, t !== null && (l.cancelPendingCommit = null, t()), Xi(), dl = l, $ = t = qe(l.current, null), P = e, nl = 0, te = null, ft = !1, ma = Ua(l, e), Hi = !1, ba = he = qi = Yt = it = ml = 0, Kl = du = null, Bi = !1, (e & 8) !== 0 && (e |= e & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements, a &= e; 0 < a;) {
                var u = 31 - xl(a),
                    f = 1 << u;
                e |= l[u], a &= ~f
            }
        return Le = e, Wu(), t
    }

    function Es(l, e) {
        w = null, O.H = yn, e === $a || e === an ? (e = j0(), nl = 3) : e === Y0 ? (e = j0(), nl = 4) : nl = e === Zo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, te = e, $ === null && (ml = 1, Sn(l, ce(e, l.current)))
    }

    function _s() {
        var l = O.H;
        return O.H = yn, l === null ? yn : l
    }

    function Rs() {
        var l = O.A;
        return O.A = yh, l
    }

    function ji() {
        ml = 4, ft || (P & 4194048) !== P && de.current !== null || (ma = !0), (it & 13421728 M + 7) === 0 && (Yt & 13421728 M + 7) === 0 || dl === null || st(dl, P, he, !1)
    }

    function Qi(l, e, t) {
        var a = ul;
        ul |= 2;
        var u = _s(),
            f = Rs();
        (dl !== l || P !== e) && (Rn = null, Ta(l, e)), e = !1;
        var i = ml;
        l: do try {
                if (nl !== 0 && $ !== null) {
                    var o = $,
                        d = te;
                    switch (nl) {
                        case 8:
                            Xi(), i = 6;
                            break l;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            de.current === null && (e = !0);
                            var S = nl;
                            if (nl = 0, te = null, Aa(l, o, d, S), t && ma) {
                                i = 0;
                                break l
                            }
                            break;
                        default:
                            S = nl, nl = 0, te = null, Aa(l, o, d, S)
                    }
                }
                mh(), i = ml;
                break
            } catch (R) {
                Es(l, R)
            }
            while (!0);
            return e && l.shellSuspendCounter++, Ge = Nt = null, ul = a, O.H = u, O.A = f, $ === null && (dl = null, P = 0, Wu()), i
    }

    function mh() {
        for (; $ !== null;) Os($)
    }

    function bh(l, e) {
        var t = ul;
        ul |= 2;
        var a = _s(),
            u = Rs();
        dl !== l || P !== e ? (Rn = null, _n = Ae() + 500, Ta(l, e)) : ma = Ua(l, e);
        l: do try {
                if (nl !== 0 && $ !== null) {
                    e = $;
                    var f = te;
                    e: switch (nl) {
                        case 1:
                            nl = 0, te = null, Aa(l, e, f, 1);
                            break;
                        case 2:
                        case 9:
                            if (k0(f)) {
                                nl = 0, te = null, zs(e);
                                break
                            }
                            e = function() {
                                nl !== 2 && nl !== 9 || dl !== l || (nl = 7), Oe(l)
                            }, f.then(e, e);
                            break l;
                        case 3:
                            nl = 7;
                            break l;
                        case 4:
                            nl = 5;
                            break l;
                        case 7:
                            k0(f) ? (nl = 0, te = null, zs(e)) : (nl = 0, te = null, Aa(l, e, f, 7));
                            break;
                        case 5:
                            var i = null;
                            switch ($.tag) {
                                case 26:
                                    i = $.memoizedState;
                                case 5:
                                case 27:
                                    var o = $;
                                    if (!i || or(i)) {
                                        nl = 0, te = null;
                                        var d = o.sibling;
                                        if (d !== null) $ = d;
                                        else {
                                            var S = o.return;
                                            S !== null ? ($ = S, zn(S)) : $ = null
                                        }
                                        break e
                                    }
                            }
                            nl = 0, te = null, Aa(l, e, f, 5);
                            break;
                        case 6:
                            nl = 0, te = null, Aa(l, e, f, 6);
                            break;
                        case 8:
                            Xi(), ml = 6;
                            break l;
                        default:
                            throw Error(c(462))
                    }
                }
                Sh();
                break
            } catch (R) {
                Es(l, R)
            }
            while (!0);
            return Ge = Nt = null, O.H = a, O.A = u, ul = t, $ !== null ? 0 : (dl = null, P = 0, Wu(), ml)
    }

    function Sh() {
        for (; $ !== null && !Qr();) Os($)
    }

    function Os(l) {
        var e = ls(l.alternate, l, Le);
        l.memoizedProps = l.pendingProps, e === null ? zn(l) : $ = e
    }

    function zs(l) {
        var e = l,
            t = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = Wo(t, e, e.pendingProps, e.type, void 0, P);
                break;
            case 11:
                e = Wo(t, e, e.pendingProps, e.type.render, e.ref, P);
                break;
            case 5:
                ti(e);
            default:
                ts(t, e), e = $ = z0(e, Le), e = ls(t, e, Le)
        }
        l.memoizedProps = l.pendingProps, e === null ? zn(l) : $ = e
    }

    function Aa(l, e, t, a) {
        Ge = Nt = null, ti(e), ha = null, uu = 0;
        var u = e.return;
        try {
            if (ch(l, u, e, t, P)) {
                ml = 1, Sn(l, ce(t, l.current)), $ = null;
                return
            }
        } catch (f) {
            if (u !== null) throw $ = u, f;
            ml = 1, Sn(l, ce(t, l.current)), $ = null;
            return
        }
        e.flags & 32768 ? (al || a === 1 ? l = !0 : ma || (P & 536870912) !== 0 ? l = !1 : (ft = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = de.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ds(e, l)) : zn(e)
    }

    function zn(l) {
        var e = l;
        do {
            if ((e.flags & 32768) !== 0) {
                Ds(e, ft);
                return
            }
            l = e.return;
            var t = sh(e.alternate, e, Le);
            if (t !== null) {
                $ = t;
                return
            }
            if (e = e.sibling, e !== null) {
                $ = e;
                return
            }
            $ = e = l
        } while (e !== null);
        ml === 0 && (ml = 5)
    }

    function Ds(l, e) {
        do {
            var t = rh(l.alternate, l);
            if (t !== null) {
                t.flags &= 32767, $ = t;
                return
            }
            if (t = l.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !e && (l = l.sibling, l !== null)) {
                $ = l;
                return
            }
            $ = l = t
        } while (l !== null);
        ml = 6, $ = null
    }

    function Us(l, e, t, a, u, f, i, o, d) {
        l.cancelPendingCommit = null;
        do Dn(); while (Nl !== 0);
        if ((ul & 6) !== 0) throw Error(c(327));
        if (e !== null) {
            if (e === l.current) throw Error(c(177));
            if (f = e.lanes | e.childLanes, f |= Nf, xr(l, t, f, i, o, d), l === dl && ($ = dl = null, P = 0), Sa = e, ot = l, pa = t, Gi = f, Yi = u, ps = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Mh(qu, function() {
                    return Cs(), null
                })) : (l.callbackNode = null, l.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
                a = O.T, O.T = null, u = q.p, q.p = 2, i = ul, ul |= 4;
                try {
                    dh(l, e, t)
                } finally {
                    ul = i, q.p = u, O.T = a
                }
            }
            Nl = 1, Ns(), Hs(), qs()
        }
    }

    function Ns() {
        if (Nl === 1) {
            Nl = 0;
            var l = ot,
                e = Sa,
                t = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || t) {
                t = O.T, O.T = null;
                var a = q.p;
                q.p = 2;
                var u = ul;
                ul |= 4;
                try {
                    hs(e, l);
                    var f = Ii,
                        i = b0(l.containerInfo),
                        o = f.focusedElem,
                        d = f.selectionRange;
                    if (i !== o && o && o.ownerDocument && m0(o.ownerDocument.documentElement, o)) {
                        if (d !== null && Rf(o)) {
                            var S = d.start,
                                R = d.end;
                            if (R === void 0 && (R = S), "selectionStart" in o) o.selectionStart = S, o.selectionEnd = Math.min(R, o.value.length);
                            else {
                                var D = o.ownerDocument || document,
                                    T = D && D.defaultView || window;
                                if (T.getSelection) {
                                    var E = T.getSelection(),
                                        L = o.textContent.length,
                                        Q = Math.min(d.start, L),
                                        ol = d.end === void 0 ? Q : Math.min(d.end, L);
                                    !E.extend && Q > ol && (i = ol, ol = Q, Q = i);
                                    var m = g0(o, Q),
                                        v = g0(o, ol);
                                    if (m && v && (E.rangeCount !== 1 || E.anchorNode !== m.node || E.anchorOffset !== m.offset || E.focusNode !== v.node || E.focusOffset !== v.offset)) {
                                        var b = D.createRange();
                                        b.setStart(m.node, m.offset), E.removeAllRanges(), Q > ol ? (E.addRange(b), E.extend(v.node, v.offset)) : (b.setEnd(v.node, v.offset), E.addRange(b))
                                    }
                                }
                            }
                        }
                        for (D = [], E = o; E = E.parentNode;) E.nodeType === 1 && D.push({
                            element: E,
                            left: E.scrollLeft,
                            top: E.scrollTop
                        });
                        for (typeof o.focus == "function" && o.focus(), o = 0; o < D.length; o++) {
                            var z = D[o];
                            z.element.scrollLeft = z.left, z.element.scrollTop = z.top
                        }
                    }
                    Qn = !!Pi, Ii = Pi = null
                } finally {
                    ul = u, q.p = a, O.T = t
                }
            }
            l.current = e, Nl = 2
        }
    }

    function Hs() {
        if (Nl === 2) {
            Nl = 0;
            var l = ot,
                e = Sa,
                t = (e.flags & 8728 M + ) !== 0;
            if ((e.subtreeFlags & 8728 M + ) !== 0 || t) {
                t = O.T, O.T = null;
                var a = q.p;
                q.p = 2;
                var u = ul;
                ul |= 4;
                try {
                    os(l, e.alternate, e)
                } finally {
                    ul = u, q.p = a, O.T = t
                }
            }
            Nl = 3
        }
    }

    function qs() {
        if (Nl === 4 || Nl === 3) {
            Nl = 0, Zr();
            var l = ot,
                e = Sa,
                t = pa,
                a = ps;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Nl = 5 : (Nl = 0, Sa = ot = null, Bs(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (u === 0 && (ct = null), uf(t), e = e.stateNode, Fl && typeof Fl.onCommitFiberRoot == "function") try {
                Fl.onCommitFiberRoot(Da, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
            if (a !== null) {
                e = O.T, u = q.p, q.p = 2, O.T = null;
                try {
                    for (var f = l.onRecoverableError, i = 0; i < a.length; i++) {
                        var o = a[i];
                        f(o.value, {
                            componentStack: o.stack
                        })
                    }
                } finally {
                    O.T = e, q.p = u
                }
            }(pa & 3) !== 0 && Dn(), Oe(l), u = l.pendingLanes, (t & 4194090) !== 0 && (u & 42) !== 0 ? l === ki ? hu++ : (hu = 0, ki = l) : hu = 0, yu(0)
        }
    }

    function Bs(l, e) {
        (l.pooledCacheLanes &= e) === 0 && (e = l.pooledCache, e != null && (l.pooledCache = null, wa(e)))
    }

    function Dn(l) {
        return Ns(), Hs(), qs(), Cs()
    }

    function Cs() {
        if (Nl !== 5) return !1;
        var l = ot,
            e = Gi;
        Gi = 0;
        var t = uf(pa),
            a = O.T,
            u = q.p;
        try {
            q.p = 32 > t ? 32 : t, O.T = null, t = Yi, Yi = null;
            var f = ot,
                i = pa;
            if (Nl = 0, Sa = ot = null, pa = 0, (ul & 6) !== 0) throw Error(c(331));
            var o = ul;
            if (ul |= 4, bs(f.current), vs(f, f.current, i, t), ul = o, yu(0, !1), Fl && typeof Fl.onPostCommitFiberRoot == "function") try {
                Fl.onPostCommitFiberRoot(Da, f)
            } catch {}
            return !0
        } finally {
            q.p = u, O.T = a, Bs(l, e)
        }
    }

    function Gs(l, e, t) {
        e = ce(t, e), e = gi(l.stateNode, e, 2), l = Ie(l, e, 2), l !== null && (Na(l, 2), Oe(l))
    }

    function rl(l, e, t) {
        if (l.tag === 3) Gs(l, l, t);
        else
            for (; e !== null;) {
                if (e.tag === 3) {
                    Gs(e, l, t);
                    break
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ct === null || !ct.has(a))) {
                        l = ce(t, l), t = jo(2), a = Ie(e, t, 2), a !== null && (Qo(t, a, e, l), Na(a, 2), Oe(a));
                        break
                    }
                }
                e = e.return
            }
    }

    function Zi(l, e, t) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new vh;
            var u = new Set;
            a.set(e, u)
        } else u = a.get(e), u === void 0 && (u = new Set, a.set(e, u));
        u.has(t) || (Hi = !0, u.add(t), l = ph.bind(null, l, e, t), e.then(l, l))
    }

    function ph(l, e, t) {
        var a = l.pingCache;
        a !== null && a.delete(e), l.pingedLanes |= l.suspendedLanes & t, l.warmLanes &= ~t, dl === l && (P & t) === t && (ml === 4 || ml === 3 && (P & 62914560) === P && 300 > Ae() - Ci ? (ul & 2) === 0 && Ta(l, 0) : qi |= t, ba === P && (ba = 0)), Oe(l)
    }

    function Ys(l, e) {
        e === 0 && (e = Hc()), l = aa(l, e), l !== null && (Na(l, e), Oe(l))
    }

    function Th(l) {
        var e = l.memoizedState,
            t = 0;
        e !== null && (t = e.retryLane), Ys(l, t)
    }

    function Ah(l, e) {
        var t = 0;
        switch (l.tag) {
            case 13:
                var a = l.stateNode,
                    u = l.memoizedState;
                u !== null && (t = u.retryLane);
                break;
            case 19:
                a = l.stateNode;
                break;
            case 22:
                a = l.stateNode._retryCache;
                break;
            default:
                throw Error(c(314))
        }
        a !== null && a.delete(e), Ys(l, t)
    }

    function Mh(l, e) {
        return lf(l, e)
    }
    var Un = null,
        Ma = null,
        Vi = !1,
        Nn = !1,
        Li = !1,
        kt = 0;

    function Oe(l) {
        l !== Ma && l.next === null && (Ma === null ? Un = Ma = l : Ma = Ma.next = l), Nn = !0, Vi || (Vi = !0, _h())
    }

    function yu(l, e) {
        if (!Li && Nn) {
            Li = !0;
            do
                for (var t = !1, a = Un; a !== null;) {
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var f = 0;
                        else {
                            var i = a.suspendedLanes,
                                o = a.pingedLanes;
                            f = (1 << 31 - xl(42 | l) + 1) - 1, f &= u & ~(i & ~o), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
                        }
                        f !== 0 && (t = !0, Qs(a, f))
                    } else f = P, f = Gu(a, a === dl ? f : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (f & 3) === 0 || Ua(a, f) || (t = !0, Qs(a, f));
                    a = a.next
                }
            while (t);
            Li = !1
        }
    }

    function Eh() {
        ks()
    }

    function ks() {
        Nn = Vi = !1;
        var l = 0;
        kt !== 0 && (qh() && (l = kt), kt = 0);
        for (var e = Ae(), t = null, a = Un; a !== null;) {
            var u = a.next,
                f = Xs(a, e);
            f === 0 ? (a.next = null, t === null ? Un = u : t.next = u, u === null && (Ma = t)) : (t = a, (l !== 0 || (f & 3) !== 0) && (Nn = !0)), a = u
        }
        yu(l)
    }

    function Xs(l, e) {
        for (var t = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, f = l.pendingLanes & -62914561; 0 < f;) {
            var i = 31 - xl(f),
                o = 1 << i,
                d = u[i];
            d === -1 ? ((o & t) === 0 || (o & a) !== 0) && (u[i] = Fr(o, e)) : d <= e && (l.expiredLanes |= o), f &= ~o
        }
        if (e = dl, t = P, t = Gu(l, l === e ? t : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, t === 0 || l === e && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && ef(a), l.callbackNode = null, l.callbackPriority = 0;
        if ((t & 3) === 0 || Ua(l, t)) {
            if (e = t & -t, e === l.callbackPriority) return e;
            switch (a !== null && ef(a), uf(t)) {
                case 2:
                case 8:
                    t = Dc;
                    break;
                case 32:
                    t = qu;
                    break;
                case 268435456:
                    t = Uc;
                    break;
                default:
                    t = qu
            }
            return a = js.bind(null, l), t = lf(t, a), l.callbackPriority = e, l.callbackNode = t, e
        }
        return a !== null && a !== null && ef(a), l.callbackPriority = 2, l.callbackNode = null, 2
    }

    function js(l, e) {
        if (Nl !== 0 && Nl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
        var t = l.callbackNode;
        if (Dn() && l.callbackNode !== t) return null;
        var a = P;
        return a = Gu(l, l === dl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (As(l, a, e), Xs(l, Ae()), l.callbackNode != null && l.callbackNode === t ? js.bind(null, l) : null)
    }

    function Qs(l, e) {
        if (Dn()) return null;
        As(l, e, !0)
    }

    function _h() {
        Ch(function() {
            (ul & 6) !== 0 ? lf(zc, Eh) : ks()
        })
    }

    function Ki() {
        return kt === 0 && (kt = Nc()), kt
    }

    function Zs(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Qu("" + l)
    }

    function Vs(l, e) {
        var t = e.ownerDocument.createElement("input");
        return t.name = e.name, t.value = e.value, l.id && t.setAttribute("form", l.id), e.parentNode.insertBefore(t, e), l = new FormData(l), t.parentNode.removeChild(t), l
    }

    function Rh(l, e, t, a, u) {
        if (e === "submit" && t && t.stateNode === u) {
            var f = Zs((u[Ql] || null).action),
                i = a.submitter;
            i && (e = (e = i[Ql] || null) ? Zs(e.formAction) : i.getAttribute("formAction"), e !== null && (f = e, i = null));
            var o = new Ku("action", "action", null, a, u);
            l.push({
                event: o,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (kt !== 0) {
                                var d = i ? Vs(u, i) : new FormData(u);
                                ri(t, {
                                    pending: !0,
                                    data: d,
                                    method: u.method,
                                    action: f
                                }, null, d)
                            }
                        } else typeof f == "function" && (o.preventDefault(), d = i ? Vs(u, i) : new FormData(u), ri(t, {
                            pending: !0,
                            data: d,
                            method: u.method,
                            action: f
                        }, f, d))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Ji = 0; Ji < Uf.length; Ji++) {
        var wi = Uf[Ji],
            Oh = wi.toLowerCase(),
            zh = wi[0].toUpperCase() + wi.slice(1);
        be(Oh, "on" + zh)
    }
    be(T0, "onAnimationEnd"), be(A0, "onAnimationIteration"), be(M0, "onAnimationStart"), be("dblclick", "onDoubleClick"), be("focusin", "onFocus"), be("focusout", "onBlur"), be(Kd, "onTransitionRun"), be(Jd, "onTransitionStart"), be(wd, "onTransitionCancel"), be(E0, "onTransitionEnd"), wt("onMouseEnter", ["mouseout", "mouseover"]), wt("onMouseLeave", ["mouseout", "mouseover"]), wt("onPointerEnter", ["pointerout", "pointerover"]), wt("onPointerLeave", ["pointerout", "pointerover"]), At("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), At("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), At("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), At("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), At("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), At("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var vu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Dh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vu));

    function Ls(l, e) {
        e = (e & 4) !== 0;
        for (var t = 0; t < l.length; t++) {
            var a = l[t],
                u = a.event;
            a = a.listeners;
            l: {
                var f = void 0;
                if (e)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var o = a[i],
                            d = o.instance,
                            S = o.currentTarget;
                        if (o = o.listener, d !== f && u.isPropagationStopped()) break l;
                        f = o, u.currentTarget = S;
                        try {
                            f(u)
                        } catch (R) {
                            bn(R)
                        }
                        u.currentTarget = null, f = d
                    } else
                        for (i = 0; i < a.length; i++) {
                            if (o = a[i], d = o.instance, S = o.currentTarget, o = o.listener, d !== f && u.isPropagationStopped()) break l;
                            f = o, u.currentTarget = S;
                            try {
                                f(u)
                            } catch (R) {
                                bn(R)
                            }
                            u.currentTarget = null, f = d
                        }
            }
        }
    }

    function F(l, e) {
        var t = e[nf];
        t === void 0 && (t = e[nf] = new Set);
        var a = l + "__bubble";
        t.has(a) || (Ks(e, l, 2, !1), t.add(a))
    }

    function Wi(l, e, t) {
        var a = 0;
        e && (a |= 4), Ks(t, l, a, e)
    }
    var Hn = "_reactListening" + Math.random().toString(36).slice(2);

    function $i(l) {
        if (!l[Hn]) {
            l[Hn] = !0, Yc.forEach(function(t) {
                t !== "selectionchange" && (Dh.has(t) || Wi(t, !1, l), Wi(t, !0, l))
            });
            var e = l.nodeType === 9 ? l : l.ownerDocument;
            e === null || e[Hn] || (e[Hn] = !0, Wi("selectionchange", !1, e))
        }
    }

    function Ks(l, e, t, a) {
        switch (vr(e)) {
            case 2:
                var u = t1;
                break;
            case 8:
                u = a1;
                break;
            default:
                u = oc
        }
        t = u.bind(null, e, t, l), u = void 0, !mf || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(e, t, {
            capture: !0,
            passive: u
        }) : l.addEventListener(e, t, !0) : u !== void 0 ? l.addEventListener(e, t, {
            passive: u
        }) : l.addEventListener(e, t, !1)
    }

    function Fi(l, e, t, a, u) {
        var f = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null) l: for (;;) {
            if (a === null) return;
            var i = a.tag;
            if (i === 3 || i === 4) {
                var o = a.stateNode.containerInfo;
                if (o === u) break;
                if (i === 4)
                    for (i = a.return; i !== null;) {
                        var d = i.tag;
                        if ((d === 3 || d === 4) && i.stateNode.containerInfo === u) return;
                        i = i.return
                    }
                for (; o !== null;) {
                    if (i = Lt(o), i === null) return;
                    if (d = i.tag, d === 5 || d === 6 || d === 26 || d === 27) {
                        a = f = i;
                        continue l
                    }
                    o = o.parentNode
                }
            }
            a = a.return
        }
        xc(function() {
            var S = f,
                R = vf(t),
                D = [];
            l: {
                var T = _0.get(l);
                if (T !== void 0) {
                    var E = Ku,
                        L = l;
                    switch (l) {
                        case "keypress":
                            if (Vu(t) === 0) break l;
                        case "keydown":
                        case "keyup":
                            E = Md;
                            break;
                        case "focusin":
                            L = "focus", E = Tf;
                            break;
                        case "focusout":
                            L = "blur", E = Tf;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            E = Tf;
                            break;
                        case "click":
                            if (t.button === 2) break l;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            E = l0;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            E = rd;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            E = Rd;
                            break;
                        case T0:
                        case A0:
                        case M0:
                            E = yd;
                            break;
                        case E0:
                            E = zd;
                            break;
                        case "scroll":
                        case "scrollend":
                            E = od;
                            break;
                        case "wheel":
                            E = Ud;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            E = gd;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            E = t0;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            E = Hd
                    }
                    var Q = (e & 4) !== 0,
                        ol = !Q && (l === "scroll" || l === "scrollend"),
                        m = Q ? T !== null ? T + "Capture" : null : T;
                    Q = [];
                    for (var v = S, b; v !== null;) {
                        var z = v;
                        if (b = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || b === null || m === null || (z = Ba(v, m), z != null && Q.push(gu(v, z, b))), ol) break;
                        v = v.return
                    }
                    0 < Q.length && (T = new E(T, L, null, t, R), D.push({
                        event: T,
                        listeners: Q
                    }))
                }
            }
            if ((e & 7) === 0) {
                l: {
                    if (T = l === "mouseover" || l === "pointerover", E = l === "mouseout" || l === "pointerout", T && t !== yf && (L = t.relatedTarget || t.fromElement) && (Lt(L) || L[Vt])) break l;
                    if ((E || T) && (T = R.window === R ? R : (T = R.ownerDocument) ? T.defaultView || T.parentWindow : window, E ? (L = t.relatedTarget || t.toElement, E = S, L = L ? Lt(L) : null, L !== null && (ol = r(L), Q = L.tag, L !== ol || Q !== 5 && Q !== 27 && Q !== 6) && (L = null)) : (E = null, L = S), E !== L)) {
                        if (Q = l0, z = "onMouseLeave", m = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (Q = t0, z = "onPointerLeave", m = "onPointerEnter", v = "pointer"), ol = E == null ? T : qa(E), b = L == null ? T : qa(L), T = new Q(z, v + "leave", E, t, R), T.target = ol, T.relatedTarget = b, z = null, Lt(R) === S && (Q = new Q(m, v + "enter", L, t, R), Q.target = b, Q.relatedTarget = ol, z = Q), ol = z, E && L) e: {
                            for (Q = E, m = L, v = 0, b = Q; b; b = Ea(b)) v++;
                            for (b = 0, z = m; z; z = Ea(z)) b++;
                            for (; 0 < v - b;) Q = Ea(Q),
                            v--;
                            for (; 0 < b - v;) m = Ea(m),
                            b--;
                            for (; v--;) {
                                if (Q === m || m !== null && Q === m.alternate) break e;
                                Q = Ea(Q), m = Ea(m)
                            }
                            Q = null
                        }
                        else Q = null;
                        E !== null && Js(D, T, E, Q, !1), L !== null && ol !== null && Js(D, ol, L, Q, !0)
                    }
                }
                l: {
                    if (T = S ? qa(S) : window, E = T.nodeName && T.nodeName.toLowerCase(), E === "select" || E === "input" && T.type === "file") var G = s0;
                    else if (c0(T))
                        if (r0) G = Zd;
                        else {
                            G = jd;
                            var W = Xd
                        }
                    else E = T.nodeName,
                    !E || E.toLowerCase() !== "input" || T.type !== "checkbox" && T.type !== "radio" ? S && hf(S.elementType) && (G = s0) : G = Qd;
                    if (G && (G = G(l, S))) {
                        o0(D, G, t, R);
                        break l
                    }
                    W && W(l, T, S),
                    l === "focusout" && S && T.type === "number" && S.memoizedProps.value != null && df(T, "number", T.value)
                }
                switch (W = S ? qa(S) : window, l) {
                    case "focusin":
                        (c0(W) || W.contentEditable === "true") && (la = W, Of = S, Za = null);
                        break;
                    case "focusout":
                        Za = Of = la = null;
                        break;
                    case "mousedown":
                        zf = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        zf = !1, S0(D, t, R);
                        break;
                    case "selectionchange":
                        if (Ld) break;
                    case "keydown":
                    case "keyup":
                        S0(D, t, R)
                }
                var k;
                if (Mf) l: {
                    switch (l) {
                        case "compositionstart":
                            var Z = "onCompositionStart";
                            break l;
                        case "compositionend":
                            Z = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            Z = "onCompositionUpdate";
                            break l
                    }
                    Z = void 0
                }
                else It ? f0(l, t) && (Z = "onCompositionEnd") : l === "keydown" && t.keyCode === 229 && (Z = "onCompositionStart");Z && (a0 && t.locale !== "ko" && (It || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && It && (k = Pc()) : ($e = R, bf = "value" in $e ? $e.value : $e.textContent, It = !0)), W = qn(S, Z), 0 < W.length && (Z = new e0(Z, l, null, t, R), D.push({
                    event: Z,
                    listeners: W
                }), k ? Z.data = k : (k = i0(t), k !== null && (Z.data = k)))),
                (k = Bd ? Cd(l, t) : Gd(l, t)) && (Z = qn(S, "onBeforeInput"), 0 < Z.length && (W = new e0("onBeforeInput", "beforeinput", null, t, R), D.push({
                    event: W,
                    listeners: Z
                }), W.data = k)),
                Rh(D, l, S, t, R)
            }
            Ls(D, e)
        })
    }

    function gu(l, e, t) {
        return {
            instance: l,
            listener: e,
            currentTarget: t
        }
    }

    function qn(l, e) {
        for (var t = e + "Capture", a = []; l !== null;) {
            var u = l,
                f = u.stateNode;
            if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || f === null || (u = Ba(l, t), u != null && a.unshift(gu(l, u, f)), u = Ba(l, e), u != null && a.push(gu(l, u, f))), l.tag === 3) return a;
            l = l.return
        }
        return []
    }

    function Ea(l) {
        if (l === null) return null;
        do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }

    function Js(l, e, t, a, u) {
        for (var f = e._reactName, i = []; t !== null && t !== a;) {
            var o = t,
                d = o.alternate,
                S = o.stateNode;
            if (o = o.tag, d !== null && d === a) break;
            o !== 5 && o !== 26 && o !== 27 || S === null || (d = S, u ? (S = Ba(t, f), S != null && i.unshift(gu(t, S, d))) : u || (S = Ba(t, f), S != null && i.push(gu(t, S, d)))), t = t.return
        }
        i.length !== 0 && l.push({
            event: e,
            listeners: i
        })
    }
    var Uh = /\r\n?/g,
        Nh = /\u0000|\uFFFD/g;

    function ws(l) {
        return (typeof l == "string" ? l : "" + l).replace(Uh, `
`).replace(Nh, "")
    }

    function Ws(l, e) {
        return e = ws(e), ws(l) === e
    }

    function Bn() {}

    function cl(l, e, t, a, u, f) {
        switch (t) {
            case "children":
                typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Ft(l, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Ft(l, "" + a);
                break;
            case "className":
                ku(l, "class", a);
                break;
            case "tabIndex":
                ku(l, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                ku(l, t, a);
                break;
            case "style":
                $c(l, a, f);
                break;
            case "data":
                if (e !== "object") {
                    ku(l, "data", a);
                    break
                }
            case "src":
            case "href":
                if (a === "" && (e !== "a" || t !== "href")) {
                    l.removeAttribute(t);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    l.removeAttribute(t);
                    break
                }
                a = Qu("" + a), l.setAttribute(t, a);
                break;
            case "action":
            case "formAction":
                if (typeof a == "function") {
                    l.setAttribute(t, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof f == "function" && (t === "formAction" ? (e !== "input" && cl(l, e, "name", u.name, u, null), cl(l, e, "formEncType", u.formEncType, u, null), cl(l, e, "formMethod", u.formMethod, u, null), cl(l, e, "formTarget", u.formTarget, u, null)) : (cl(l, e, "encType", u.encType, u, null), cl(l, e, "method", u.method, u, null), cl(l, e, "target", u.target, u, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    l.removeAttribute(t);
                    break
                }
                a = Qu("" + a), l.setAttribute(t, a);
                break;
            case "onClick":
                a != null && (l.onclick = Bn);
                break;
            case "onScroll":
                a != null && F("scroll", l);
                break;
            case "onScrollEnd":
                a != null && F("scrollend", l);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
                    if (t = a.__html, t != null) {
                        if (u.children != null) throw Error(c(60));
                        l.innerHTML = t
                    }
                }
                break;
            case "multiple":
                l.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "muted":
                l.muted = a && typeof a != "function" && typeof a != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    l.removeAttribute("xlink:href");
                    break
                }
                t = Qu("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, "" + a) : l.removeAttribute(t);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, "") : l.removeAttribute(t);
                break;
            case "capture":
            case "download":
                a === !0 ? l.setAttribute(t, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(t, a) : l.removeAttribute(t);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(t, a) : l.removeAttribute(t);
                break;
            case "rowSpan":
            case "start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(t) : l.setAttribute(t, a);
                break;
            case "popover":
                F("beforetoggle", l), F("toggle", l), Yu(l, "popover", a);
                break;
            case "xlinkActuate":
                Ne(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                Ne(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                Ne(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                Ne(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                Ne(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                Ne(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                Ne(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                Ne(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                Ne(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                Yu(l, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = id.get(t) || t, Yu(l, t, a))
        }
    }

    function xi(l, e, t, a, u, f) {
        switch (t) {
            case "style":
                $c(l, a, f);
                break;
            case "dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
                    if (t = a.__html, t != null) {
                        if (u.children != null) throw Error(c(60));
                        l.innerHTML = t
                    }
                }
                break;
            case "children":
                typeof a == "string" ? Ft(l, a) : (typeof a == "number" || typeof a == "bigint") && Ft(l, "" + a);
                break;
            case "onScroll":
                a != null && F("scroll", l);
                break;
            case "onScrollEnd":
                a != null && F("scrollend", l);
                break;
            case "onClick":
                a != null && (l.onclick = Bn);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!kc.hasOwnProperty(t)) l: {
                    if (t[0] === "o" && t[1] === "n" && (u = t.endsWith("Capture"), e = t.slice(2, u ? t.length - 7 : void 0), f = l[Ql] || null, f = f != null ? f[t] : null, typeof f == "function" && l.removeEventListener(e, f, u), typeof a == "function")) {
                        typeof f != "function" && f !== null && (t in l ? l[t] = null : l.hasAttribute(t) && l.removeAttribute(t)), l.addEventListener(e, a, u);
                        break l
                    }
                    t in l ? l[t] = a : a === !0 ? l.setAttribute(t, "") : Yu(l, t, a)
                }
        }
    }

    function Hl(l, e, t) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                F("error", l), F("load", l);
                var a = !1,
                    u = !1,
                    f;
                for (f in t)
                    if (t.hasOwnProperty(f)) {
                        var i = t[f];
                        if (i != null) switch (f) {
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(c(137, e));
                            default:
                                cl(l, e, f, i, t, null)
                        }
                    } u && cl(l, e, "srcSet", t.srcSet, t, null), a && cl(l, e, "src", t.src, t, null);
                return;
            case "input":
                F("invalid", l);
                var o = f = i = u = null,
                    d = null,
                    S = null;
                for (a in t)
                    if (t.hasOwnProperty(a)) {
                        var R = t[a];
                        if (R != null) switch (a) {
                            case "name":
                                u = R;
                                break;
                            case "type":
                                i = R;
                                break;
                            case "checked":
                                d = R;
                                break;
                            case "defaultChecked":
                                S = R;
                                break;
                            case "value":
                                f = R;
                                break;
                            case "defaultValue":
                                o = R;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (R != null) throw Error(c(137, e));
                                break;
                            default:
                                cl(l, e, a, R, t, null)
                        }
                    } Kc(l, f, o, d, S, i, u, !1), Xu(l);
                return;
            case "select":
                F("invalid", l), a = i = f = null;
                for (u in t)
                    if (t.hasOwnProperty(u) && (o = t[u], o != null)) switch (u) {
                        case "value":
                            f = o;
                            break;
                        case "defaultValue":
                            i = o;
                            break;
                        case "multiple":
                            a = o;
                        default:
                            cl(l, e, u, o, t, null)
                    }
                e = f, t = i, l.multiple = !!a, e != null ? $t(l, !!a, e, !1) : t != null && $t(l, !!a, t, !0);
                return;
            case "textarea":
                F("invalid", l), f = u = a = null;
                for (i in t)
                    if (t.hasOwnProperty(i) && (o = t[i], o != null)) switch (i) {
                        case "value":
                            a = o;
                            break;
                        case "defaultValue":
                            u = o;
                            break;
                        case "children":
                            f = o;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (o != null) throw Error(c(91));
                            break;
                        default:
                            cl(l, e, i, o, t, null)
                    }
                wc(l, a, u, f), Xu(l);
                return;
            case "option":
                for (d in t) t.hasOwnProperty(d) && (a = t[d], a != null) && (d === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : cl(l, e, d, a, t, null));
                return;
            case "dialog":
                F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
                break;
            case "iframe":
            case "object":
                F("load", l);
                break;
            case "video":
            case "audio":
                for (a = 0; a < vu.length; a++) F(vu[a], l);
                break;
            case "image":
                F("error", l), F("load", l);
                break;
            case "details":
                F("toggle", l);
                break;
            case "embed":
            case "source":
            case "link":
                F("error", l), F("load", l);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (S in t)
                    if (t.hasOwnProperty(S) && (a = t[S], a != null)) switch (S) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(c(137, e));
                        default:
                            cl(l, e, S, a, t, null)
                    }
                return;
            default:
                if (hf(e)) {
                    for (R in t) t.hasOwnProperty(R) && (a = t[R], a !== void 0 && xi(l, e, R, a, t, void 0));
                    return
                }
        }
        for (o in t) t.hasOwnProperty(o) && (a = t[o], a != null && cl(l, e, o, a, t, null))
    }

    function Hh(l, e, t, a) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var u = null,
                    f = null,
                    i = null,
                    o = null,
                    d = null,
                    S = null,
                    R = null;
                for (E in t) {
                    var D = t[E];
                    if (t.hasOwnProperty(E) && D != null) switch (E) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            d = D;
                        default:
                            a.hasOwnProperty(E) || cl(l, e, E, null, a, D)
                    }
                }
                for (var T in a) {
                    var E = a[T];
                    if (D = t[T], a.hasOwnProperty(T) && (E != null || D != null)) switch (T) {
                        case "type":
                            f = E;
                            break;
                        case "name":
                            u = E;
                            break;
                        case "checked":
                            S = E;
                            break;
                        case "defaultChecked":
                            R = E;
                            break;
                        case "value":
                            i = E;
                            break;
                        case "defaultValue":
                            o = E;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (E != null) throw Error(c(137, e));
                            break;
                        default:
                            E !== D && cl(l, e, T, E, a, D)
                    }
                }
                rf(l, i, o, d, S, R, f, u);
                return;
            case "select":
                E = i = o = T = null;
                for (f in t)
                    if (d = t[f], t.hasOwnProperty(f) && d != null) switch (f) {
                        case "value":
                            break;
                        case "multiple":
                            E = d;
                        default:
                            a.hasOwnProperty(f) || cl(l, e, f, null, a, d)
                    }
                for (u in a)
                    if (f = a[u], d = t[u], a.hasOwnProperty(u) && (f != null || d != null)) switch (u) {
                        case "value":
                            T = f;
                            break;
                        case "defaultValue":
                            o = f;
                            break;
                        case "multiple":
                            i = f;
                        default:
                            f !== d && cl(l, e, u, f, a, d)
                    }
                e = o, t = i, a = E, T != null ? $t(l, !!t, T, !1) : !!a != !!t && (e != null ? $t(l, !!t, e, !0) : $t(l, !!t, t ? [] : "", !1));
                return;
            case "textarea":
                E = T = null;
                for (o in t)
                    if (u = t[o], t.hasOwnProperty(o) && u != null && !a.hasOwnProperty(o)) switch (o) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            cl(l, e, o, null, a, u)
                    }
                for (i in a)
                    if (u = a[i], f = t[i], a.hasOwnProperty(i) && (u != null || f != null)) switch (i) {
                        case "value":
                            T = u;
                            break;
                        case "defaultValue":
                            E = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(c(91));
                            break;
                        default:
                            u !== f && cl(l, e, i, u, a, f)
                    }
                Jc(l, T, E);
                return;
            case "option":
                for (var L in t) T = t[L], t.hasOwnProperty(L) && T != null && !a.hasOwnProperty(L) && (L === "selected" ? l.selected = !1 : cl(l, e, L, null, a, T));
                for (d in a) T = a[d], E = t[d], a.hasOwnProperty(d) && T !== E && (T != null || E != null) && (d === "selected" ? l.selected = T && typeof T != "function" && typeof T != "symbol" : cl(l, e, d, T, a, E));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var Q in t) T = t[Q], t.hasOwnProperty(Q) && T != null && !a.hasOwnProperty(Q) && cl(l, e, Q, null, a, T);
                for (S in a)
                    if (T = a[S], E = t[S], a.hasOwnProperty(S) && T !== E && (T != null || E != null)) switch (S) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (T != null) throw Error(c(137, e));
                            break;
                        default:
                            cl(l, e, S, T, a, E)
                    }
                return;
            default:
                if (hf(e)) {
                    for (var ol in t) T = t[ol], t.hasOwnProperty(ol) && T !== void 0 && !a.hasOwnProperty(ol) && xi(l, e, ol, void 0, a, T);
                    for (R in a) T = a[R], E = t[R], !a.hasOwnProperty(R) || T === E || T === void 0 && E === void 0 || xi(l, e, R, T, a, E);
                    return
                }
        }
        for (var m in t) T = t[m], t.hasOwnProperty(m) && T != null && !a.hasOwnProperty(m) && cl(l, e, m, null, a, T);
        for (D in a) T = a[D], E = t[D], !a.hasOwnProperty(D) || T === E || T == null && E == null || cl(l, e, D, T, a, E)
    }
    var Pi = null,
        Ii = null;

    function Cn(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }

    function $s(l) {
        switch (l) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Fs(l, e) {
        if (l === 0) switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return l === 1 && e === "foreignObject" ? 0 : l
    }

    function lc(l, e) {
        return l === "textarea" || l === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var ec = null;

    function qh() {
        var l = window.event;
        return l && l.type === "popstate" ? l === ec ? !1 : (ec = l, !0) : (ec = null, !1)
    }
    var xs = typeof setTimeout == "function" ? setTimeout : void 0,
        Bh = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ps = typeof Promise == "function" ? Promise : void 0,
        Ch = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ps < "u" ? function(l) {
            return Ps.resolve(null).then(l).catch(Gh)
        } : xs;

    function Gh(l) {
        setTimeout(function() {
            throw l
        })
    }

    function rt(l) {
        return l === "head"
    }

    function Is(l, e) {
        var t = e,
            a = 0,
            u = 0;
        do {
            var f = t.nextSibling;
            if (l.removeChild(t), f && f.nodeType === 8)
                if (t = f.data, t === "/$") {
                    if (0 < a && 8 > a) {
                        t = a;
                        var i = l.ownerDocument;
                        if (t & 1 && mu(i.documentElement), t & 2 && mu(i.body), t & 4)
                            for (t = i.head, mu(t), i = t.firstChild; i;) {
                                var o = i.nextSibling,
                                    d = i.nodeName;
                                i[Ha] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || t.removeChild(i), i = o
                            }
                    }
                    if (u === 0) {
                        l.removeChild(f), _u(e);
                        return
                    }
                    u--
                } else t === "$" || t === "$?" || t === "$!" ? u++ : a = t.charCodeAt(0) - 48;
            else a = 0;
            t = f
        } while (t);
        _u(e)
    }

    function tc(l) {
        var e = l.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var t = e;
            switch (e = e.nextSibling, t.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    tc(t), ff(t);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (t.rel.toLowerCase() === "stylesheet") continue
            }
            l.removeChild(t)
        }
    }

    function Yh(l, e, t, a) {
        for (; l.nodeType === 1;) {
            var u = t;
            if (l.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
            } else if (a) {
                if (!l[Ha]) switch (e) {
                    case "meta":
                        if (!l.hasAttribute("itemprop")) break;
                        return l;
                    case "link":
                        if (f = l.getAttribute("rel"), f === "stylesheet" && l.hasAttribute("data-precedence")) break;
                        if (f !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence")) break;
                        return l;
                    case "script":
                        if (f = l.getAttribute("src"), (f !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
                        return l;
                    default:
                        return l
                }
            } else if (e === "input" && l.type === "hidden") {
                var f = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && l.getAttribute("name") === f) return l
            } else return l;
            if (l = pe(l.nextSibling), l === null) break
        }
        return null
    }

    function kh(l, e, t) {
        if (e === "") return null;
        for (; l.nodeType !== 3;)
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = pe(l.nextSibling), l === null)) return null;
        return l
    }

    function ac(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete"
    }

    function Xh(l, e) {
        var t = l.ownerDocument;
        if (l.data !== "$?" || t.readyState === "complete") e();
        else {
            var a = function() {
                e(), t.removeEventListener("DOMContentLoaded", a)
            };
            t.addEventListener("DOMContentLoaded", a), l._reactRetry = a
        }
    }

    function pe(l) {
        for (; l != null; l = l.nextSibling) {
            var e = l.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = l.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
                if (e === "/$") return null
            }
        }
        return l
    }
    var uc = null;

    function lr(l) {
        l = l.previousSibling;
        for (var e = 0; l;) {
            if (l.nodeType === 8) {
                var t = l.data;
                if (t === "$" || t === "$!" || t === "$?") {
                    if (e === 0) return l;
                    e--
                } else t === "/$" && e++
            }
            l = l.previousSibling
        }
        return null
    }

    function er(l, e, t) {
        switch (e = Cn(t), l) {
            case "html":
                if (l = e.documentElement, !l) throw Error(c(452));
                return l;
            case "head":
                if (l = e.head, !l) throw Error(c(453));
                return l;
            case "body":
                if (l = e.body, !l) throw Error(c(454));
                return l;
            default:
                throw Error(c(451))
        }
    }

    function mu(l) {
        for (var e = l.attributes; e.length;) l.removeAttributeNode(e[0]);
        ff(l)
    }
    var ye = new Map,
        tr = new Set;

    function Gn(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var Ke = q.d;
    q.d = {
        f: jh,
        r: Qh,
        D: Zh,
        C: Vh,
        L: Lh,
        m: Kh,
        X: wh,
        S: Jh,
        M: Wh
    };

    function jh() {
        var l = Ke.f(),
            e = On();
        return l || e
    }

    function Qh(l) {
        var e = Kt(l);
        e !== null && e.tag === 5 && e.type === "form" ? Ao(e) : Ke.r(l)
    }
    var _a = typeof document > "u" ? null : document;

    function ar(l, e, t) {
        var a = _a;
        if (a && typeof e == "string" && e) {
            var u = ie(e);
            u = 'link[rel="' + l + '"][href="' + u + '"]', typeof t == "string" && (u += '[crossorigin="' + t + '"]'), tr.has(u) || (tr.add(u), l = {
                rel: l,
                crossOrigin: t,
                href: e
            }, a.querySelector(u) === null && (e = a.createElement("link"), Hl(e, "link", l), Rl(e), a.head.appendChild(e)))
        }
    }

    function Zh(l) {
        Ke.D(l), ar("dns-prefetch", l, null)
    }

    function Vh(l, e) {
        Ke.C(l, e), ar("preconnect", l, e)
    }

    function Lh(l, e, t) {
        Ke.L(l, e, t);
        var a = _a;
        if (a && l && e) {
            var u = 'link[rel="preload"][as="' + ie(e) + '"]';
            e === "image" && t && t.imageSrcSet ? (u += '[imagesrcset="' + ie(t.imageSrcSet) + '"]', typeof t.imageSizes == "string" && (u += '[imagesizes="' + ie(t.imageSizes) + '"]')) : u += '[href="' + ie(l) + '"]';
            var f = u;
            switch (e) {
                case "style":
                    f = Ra(l);
                    break;
                case "script":
                    f = Oa(l)
            }
            ye.has(f) || (l = N({
                rel: "preload",
                href: e === "image" && t && t.imageSrcSet ? void 0 : l,
                as: e
            }, t), ye.set(f, l), a.querySelector(u) !== null || e === "style" && a.querySelector(bu(f)) || e === "script" && a.querySelector(Su(f)) || (e = a.createElement("link"), Hl(e, "link", l), Rl(e), a.head.appendChild(e)))
        }
    }

    function Kh(l, e) {
        Ke.m(l, e);
        var t = _a;
        if (t && l) {
            var a = e && typeof e.as == "string" ? e.as : "script",
                u = 'link[rel="modulepreload"][as="' + ie(a) + '"][href="' + ie(l) + '"]',
                f = u;
            switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    f = Oa(l)
            }
            if (!ye.has(f) && (l = N({
                    rel: "modulepreload",
                    href: l
                }, e), ye.set(f, l), t.querySelector(u) === null)) {
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (t.querySelector(Su(f))) return
                }
                a = t.createElement("link"), Hl(a, "link", l), Rl(a), t.head.appendChild(a)
            }
        }
    }

    function Jh(l, e, t) {
        Ke.S(l, e, t);
        var a = _a;
        if (a && l) {
            var u = Jt(a).hoistableStyles,
                f = Ra(l);
            e = e || "default";
            var i = u.get(f);
            if (!i) {
                var o = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(bu(f))) o.loading = 5;
                else {
                    l = N({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": e
                    }, t), (t = ye.get(f)) && nc(l, t);
                    var d = i = a.createElement("link");
                    Rl(d), Hl(d, "link", l), d._p = new Promise(function(S, R) {
                        d.onload = S, d.onerror = R
                    }), d.addEventListener("load", function() {
                        o.loading |= 1
                    }), d.addEventListener("error", function() {
                        o.loading |= 2
                    }), o.loading |= 4, Yn(i, e, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: o
                }, u.set(f, i)
            }
        }
    }

    function wh(l, e) {
        Ke.X(l, e);
        var t = _a;
        if (t && l) {
            var a = Jt(t).hoistableScripts,
                u = Oa(l),
                f = a.get(u);
            f || (f = t.querySelector(Su(u)), f || (l = N({
                src: l,
                async: !0
            }, e), (e = ye.get(u)) && fc(l, e), f = t.createElement("script"), Rl(f), Hl(f, "link", l), t.head.appendChild(f)), f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            }, a.set(u, f))
        }
    }

    function Wh(l, e) {
        Ke.M(l, e);
        var t = _a;
        if (t && l) {
            var a = Jt(t).hoistableScripts,
                u = Oa(l),
                f = a.get(u);
            f || (f = t.querySelector(Su(u)), f || (l = N({
                src: l,
                async: !0,
                type: "module"
            }, e), (e = ye.get(u)) && fc(l, e), f = t.createElement("script"), Rl(f), Hl(f, "link", l), t.head.appendChild(f)), f = {
                type: "script",
                instance: f,
                count: 1,
                state: null
            }, a.set(u, f))
        }
    }

    function ur(l, e, t, a) {
        var u = (u = K.current) ? Gn(u) : null;
        if (!u) throw Error(c(446));
        switch (l) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof t.precedence == "string" && typeof t.href == "string" ? (e = Ra(t.href), t = Jt(u).hoistableStyles, a = t.get(e), a || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, t.set(e, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
                    l = Ra(t.href);
                    var f = Jt(u).hoistableStyles,
                        i = f.get(l);
                    if (i || (u = u.ownerDocument || u, i = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, f.set(l, i), (f = u.querySelector(bu(l))) && !f._p && (i.instance = f, i.state.loading = 5), ye.has(l) || (t = {
                            rel: "preload",
                            as: "style",
                            href: t.href,
                            crossOrigin: t.crossOrigin,
                            integrity: t.integrity,
                            media: t.media,
                            hrefLang: t.hrefLang,
                            referrerPolicy: t.referrerPolicy
                        }, ye.set(l, t), f || $h(u, l, t, i.state))), e && a === null) throw Error(c(528, ""));
                    return i
                }
                if (e && a !== null) throw Error(c(529, ""));
                return null;
            case "script":
                return e = t.async, t = t.src, typeof t == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Oa(t), t = Jt(u).hoistableScripts, a = t.get(e), a || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, t.set(e, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(c(444, l))
        }
    }

    function Ra(l) {
        return 'href="' + ie(l) + '"'
    }

    function bu(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }

    function nr(l) {
        return N({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }

    function $h(l, e, t, a) {
        l.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = l.createElement("link"), a.preload = e, e.addEventListener("load", function() {
            return a.loading |= 1
        }), e.addEventListener("error", function() {
            return a.loading |= 2
        }), Hl(e, "link", t), Rl(e), l.head.appendChild(e))
    }

    function Oa(l) {
        return '[src="' + ie(l) + '"]'
    }

    function Su(l) {
        return "script[async]" + l
    }

    function fr(l, e, t) {
        if (e.count++, e.instance === null) switch (e.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + ie(t.href) + '"]');
                if (a) return e.instance = a, Rl(a), a;
                var u = N({}, t, {
                    "data-href": t.href,
                    "data-precedence": t.precedence,
                    href: null,
                    precedence: null
                });
                return a = (l.ownerDocument || l).createElement("style"), Rl(a), Hl(a, "style", u), Yn(a, t.precedence, l), e.instance = a;
            case "stylesheet":
                u = Ra(t.href);
                var f = l.querySelector(bu(u));
                if (f) return e.state.loading |= 4, e.instance = f, Rl(f), f;
                a = nr(t), (u = ye.get(u)) && nc(a, u), f = (l.ownerDocument || l).createElement("link"), Rl(f);
                var i = f;
                return i._p = new Promise(function(o, d) {
                    i.onload = o, i.onerror = d
                }), Hl(f, "link", a), e.state.loading |= 4, Yn(f, t.precedence, l), e.instance = f;
            case "script":
                return f = Oa(t.src), (u = l.querySelector(Su(f))) ? (e.instance = u, Rl(u), u) : (a = t, (u = ye.get(f)) && (a = N({}, t), fc(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Rl(u), Hl(u, "link", a), l.head.appendChild(u), e.instance = u);
            case "void":
                return null;
            default:
                throw Error(c(443, e.type))
        } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Yn(a, t.precedence, l));
        return e.instance
    }

    function Yn(l, e, t) {
        for (var a = t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, f = u, i = 0; i < a.length; i++) {
            var o = a[i];
            if (o.dataset.precedence === e) f = o;
            else if (f !== u) break
        }
        f ? f.parentNode.insertBefore(l, f.nextSibling) : (e = t.nodeType === 9 ? t.head : t, e.insertBefore(l, e.firstChild))
    }

    function nc(l, e) {
        l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.title == null && (l.title = e.title)
    }

    function fc(l, e) {
        l.crossOrigin == null && (l.crossOrigin = e.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy), l.integrity == null && (l.integrity = e.integrity)
    }
    var kn = null;

    function ir(l, e, t) {
        if (kn === null) {
            var a = new Map,
                u = kn = new Map;
            u.set(t, a)
        } else u = kn, a = u.get(t), a || (a = new Map, u.set(t, a));
        if (a.has(l)) return a;
        for (a.set(l, null), t = t.getElementsByTagName(l), u = 0; u < t.length; u++) {
            var f = t[u];
            if (!(f[Ha] || f[Gl] || l === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = f.getAttribute(e) || "";
                i = l + i;
                var o = a.get(i);
                o ? o.push(f) : a.set(i, [f])
            }
        }
        return a
    }

    function cr(l, e, t) {
        l = l.ownerDocument || l, l.head.insertBefore(t, e === "title" ? l.querySelector("head > title") : null)
    }

    function Fh(l, e, t) {
        if (t === 1 || e.itemProp != null) return !1;
        switch (l) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case "link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                return e.rel === "stylesheet" ? (l = e.disabled, typeof e.precedence == "string" && l == null) : !0;
            case "script":
                if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
        }
        return !1
    }

    function or(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    var pu = null;

    function xh() {}

    function Ph(l, e, t) {
        if (pu === null) throw Error(c(475));
        var a = pu;
        if (e.type === "stylesheet" && (typeof t.media != "string" || matchMedia(t.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var u = Ra(t.href),
                    f = l.querySelector(bu(u));
                if (f) {
                    l = f._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Xn.bind(a), l.then(a, a)), e.state.loading |= 4, e.instance = f, Rl(f);
                    return
                }
                f = l.ownerDocument || l, t = nr(t), (u = ye.get(u)) && nc(t, u), f = f.createElement("link"), Rl(f);
                var i = f;
                i._p = new Promise(function(o, d) {
                    i.onload = o, i.onerror = d
                }), Hl(f, "link", t), e.instance = f
            }
            a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = Xn.bind(a), l.addEventListener("load", e), l.addEventListener("error", e))
        }
    }

    function Ih() {
        if (pu === null) throw Error(c(475));
        var l = pu;
        return l.stylesheets && l.count === 0 && ic(l, l.stylesheets), 0 < l.count ? function(e) {
            var t = setTimeout(function() {
                if (l.stylesheets && ic(l, l.stylesheets), l.unsuspend) {
                    var a = l.unsuspend;
                    l.unsuspend = null, a()
                }
            }, 6e4);
            return l.unsuspend = e,
                function() {
                    l.unsuspend = null, clearTimeout(t)
                }
        } : null
    }

    function Xn() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) ic(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null, l()
            }
        }
    }
    var jn = null;

    function ic(l, e) {
        l.stylesheets = null, l.unsuspend !== null && (l.count++, jn = new Map, e.forEach(l1, l), jn = null, Xn.call(l))
    }

    function l1(l, e) {
        if (!(e.state.loading & 4)) {
            var t = jn.get(l);
            if (t) var a = t.get(null);
            else {
                t = new Map, jn.set(l, t);
                for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < u.length; f++) {
                    var i = u[f];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (t.set(i.dataset.precedence, i), a = i)
                }
                a && t.set(null, a)
            }
            u = e.instance, i = u.getAttribute("data-precedence"), f = t.get(i) || a, f === a && t.set(null, u), t.set(i, u), this.count++, a = Xn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), f ? f.parentNode.insertBefore(u, f.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), e.state.loading |= 4
        }
    }
    var Tu = {
        $$typeof: ql,
        Provider: null,
        Consumer: null,
        _currentValue: V,
        _currentValue2: V,
        _threadCount: 0
    };

    function e1(l, e, t, a, u, f, i, o) {
        this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tf(0), this.hiddenUpdates = tf(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = new Map
    }

    function sr(l, e, t, a, u, f, i, o, d, S, R, D) {
        return l = new e1(l, e, t, i, o, d, S, D), e = 1, f === !0 && (e |= 24), f = Il(3, null, null, e), l.current = f, f.stateNode = l, e = Zf(), e.refCount++, l.pooledCache = e, e.refCount++, f.memoizedState = {
            element: a,
            isDehydrated: t,
            cache: e
        }, Jf(f), l
    }

    function rr(l) {
        return l ? (l = ua, l) : ua
    }

    function dr(l, e, t, a, u, f) {
        u = rr(u), a.context === null ? a.context = u : a.pendingContext = u, a = Pe(e), a.payload = {
            element: t
        }, f = f === void 0 ? null : f, f !== null && (a.callback = f), t = Ie(l, a, e), t !== null && (ue(t, l, e), xa(t, l, e))
    }

    function hr(l, e) {
        if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
            var t = l.retryLane;
            l.retryLane = t !== 0 && t < e ? t : e
        }
    }

    function cc(l, e) {
        hr(l, e), (l = l.alternate) && hr(l, e)
    }

    function yr(l) {
        if (l.tag === 13) {
            var e = aa(l, 67108864);
            e !== null && ue(e, l, 67108864), cc(l, 67108864)
        }
    }
    var Qn = !0;

    function t1(l, e, t, a) {
        var u = O.T;
        O.T = null;
        var f = q.p;
        try {
            q.p = 2, oc(l, e, t, a)
        } finally {
            q.p = f, O.T = u
        }
    }

    function a1(l, e, t, a) {
        var u = O.T;
        O.T = null;
        var f = q.p;
        try {
            q.p = 8, oc(l, e, t, a)
        } finally {
            q.p = f, O.T = u
        }
    }

    function oc(l, e, t, a) {
        if (Qn) {
            var u = sc(a);
            if (u === null) Fi(l, e, a, Zn, t), gr(l, a);
            else if (n1(u, l, e, t, a)) a.stopPropagation();
            else if (gr(l, a), e & 4 && -1 < u1.indexOf(l)) {
                for (; u !== null;) {
                    var f = Kt(u);
                    if (f !== null) switch (f.tag) {
                        case 3:
                            if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                                var i = Tt(f.pendingLanes);
                                if (i !== 0) {
                                    var o = f;
                                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i;) {
                                        var d = 1 << 31 - xl(i);
                                        o.entanglements[1] |= d, i &= ~d
                                    }
                                    Oe(f), (ul & 6) === 0 && (_n = Ae() + 500, yu(0))
                                }
                            }
                            break;
                        case 13:
                            o = aa(f, 2), o !== null && ue(o, f, 2), On(), cc(f, 2)
                    }
                    if (f = sc(a), f === null && Fi(l, e, a, Zn, t), f === u) break;
                    u = f
                }
                u !== null && a.stopPropagation()
            } else Fi(l, e, a, null, t)
        }
    }

    function sc(l) {
        return l = vf(l), rc(l)
    }
    var Zn = null;

    function rc(l) {
        if (Zn = null, l = Lt(l), l !== null) {
            var e = r(l);
            if (e === null) l = null;
            else {
                var t = e.tag;
                if (t === 13) {
                    if (l = A(e), l !== null) return l;
                    l = null
                } else if (t === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                    l = null
                } else e !== l && (l = null)
            }
        }
        return Zn = l, null
    }

    function vr(l) {
        switch (l) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Vr()) {
                    case zc:
                        return 2;
                    case Dc:
                        return 8;
                    case qu:
                    case Lr:
                        return 32;
                    case Uc:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var dc = !1,
        dt = null,
        ht = null,
        yt = null,
        Au = new Map,
        Mu = new Map,
        vt = [],
        u1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function gr(l, e) {
        switch (l) {
            case "focusin":
            case "focusout":
                dt = null;
                break;
            case "dragenter":
            case "dragleave":
                ht = null;
                break;
            case "mouseover":
            case "mouseout":
                yt = null;
                break;
            case "pointerover":
            case "pointerout":
                Au.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Mu.delete(e.pointerId)
        }
    }

    function Eu(l, e, t, a, u, f) {
        return l === null || l.nativeEvent !== f ? (l = {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: a,
            nativeEvent: f,
            targetContainers: [u]
        }, e !== null && (e = Kt(e), e !== null && yr(e)), l) : (l.eventSystemFlags |= a, e = l.targetContainers, u !== null && e.indexOf(u) === -1 && e.push(u), l)
    }

    function n1(l, e, t, a, u) {
        switch (e) {
            case "focusin":
                return dt = Eu(dt, l, e, t, a, u), !0;
            case "dragenter":
                return ht = Eu(ht, l, e, t, a, u), !0;
            case "mouseover":
                return yt = Eu(yt, l, e, t, a, u), !0;
            case "pointerover":
                var f = u.pointerId;
                return Au.set(f, Eu(Au.get(f) || null, l, e, t, a, u)), !0;
            case "gotpointercapture":
                return f = u.pointerId, Mu.set(f, Eu(Mu.get(f) || null, l, e, t, a, u)), !0
        }
        return !1
    }

    function mr(l) {
        var e = Lt(l.target);
        if (e !== null) {
            var t = r(e);
            if (t !== null) {
                if (e = t.tag, e === 13) {
                    if (e = A(t), e !== null) {
                        l.blockedOn = e, Pr(l.priority, function() {
                            if (t.tag === 13) {
                                var a = ae();
                                a = af(a);
                                var u = aa(t, a);
                                u !== null && ue(u, t, a), cc(t, a)
                            }
                        });
                        return
                    }
                } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }

    function Vn(l) {
        if (l.blockedOn !== null) return !1;
        for (var e = l.targetContainers; 0 < e.length;) {
            var t = sc(l.nativeEvent);
            if (t === null) {
                t = l.nativeEvent;
                var a = new t.constructor(t.type, t);
                yf = a, t.target.dispatchEvent(a), yf = null
            } else return e = Kt(t), e !== null && yr(e), l.blockedOn = t, !1;
            e.shift()
        }
        return !0
    }

    function br(l, e, t) {
        Vn(l) && t.delete(e)
    }

    function f1() {
        dc = !1, dt !== null && Vn(dt) && (dt = null), ht !== null && Vn(ht) && (ht = null), yt !== null && Vn(yt) && (yt = null), Au.forEach(br), Mu.forEach(br)
    }

    function Ln(l, e) {
        l.blockedOn === e && (l.blockedOn = null, dc || (dc = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, f1)))
    }
    var Kn = null;

    function Sr(l) {
        Kn !== l && (Kn = l, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Kn === l && (Kn = null);
            for (var e = 0; e < l.length; e += 3) {
                var t = l[e],
                    a = l[e + 1],
                    u = l[e + 2];
                if (typeof a != "function") {
                    if (rc(a || t) === null) continue;
                    break
                }
                var f = Kt(t);
                f !== null && (l.splice(e, 3), e -= 3, ri(f, {
                    pending: !0,
                    data: u,
                    method: t.method,
                    action: a
                }, a, u))
            }
        }))
    }

    function _u(l) {
        function e(d) {
            return Ln(d, l)
        }
        dt !== null && Ln(dt, l), ht !== null && Ln(ht, l), yt !== null && Ln(yt, l), Au.forEach(e), Mu.forEach(e);
        for (var t = 0; t < vt.length; t++) {
            var a = vt[t];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < vt.length && (t = vt[0], t.blockedOn === null);) mr(t), t.blockedOn === null && vt.shift();
        if (t = (l.ownerDocument || l).$$reactFormReplay, t != null)
            for (a = 0; a < t.length; a += 3) {
                var u = t[a],
                    f = t[a + 1],
                    i = u[Ql] || null;
                if (typeof f == "function") i || Sr(t);
                else if (i) {
                    var o = null;
                    if (f && f.hasAttribute("formAction")) {
                        if (u = f, i = f[Ql] || null) o = i.formAction;
                        else if (rc(u) !== null) continue
                    } else o = i.action;
                    typeof o == "function" ? t[a + 1] = o : (t.splice(a, 3), a -= 3), Sr(t)
                }
            }
    }

    function hc(l) {
        this._internalRoot = l
    }
    Jn.prototype.render = hc.prototype.render = function(l) {
        var e = this._internalRoot;
        if (e === null) throw Error(c(409));
        var t = e.current,
            a = ae();
        dr(t, a, l, e, null, null)
    }, Jn.prototype.unmount = hc.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var e = l.containerInfo;
            dr(l.current, 2, null, l, null, null), On(), e[Vt] = null
        }
    };

    function Jn(l) {
        this._internalRoot = l
    }
    Jn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var e = Cc();
            l = {
                blockedOn: null,
                target: l,
                priority: e
            };
            for (var t = 0; t < vt.length && e !== 0 && e < vt[t].priority; t++);
            vt.splice(t, 0, l), t === 0 && mr(l)
        }
    };
    var pr = y.version;
    if (pr !== "19.1.0") throw Error(c(527, pr, "19.1.0"));
    q.findDOMNode = function(l) {
        var e = l._reactInternals;
        if (e === void 0) throw typeof l.render == "function" ? Error(c(188)) : (l = Object.keys(l).join(","), Error(c(268, l)));
        return l = p(e), l = l !== null ? M(l) : null, l = l === null ? null : l.stateNode, l
    };
    var i1 = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: O,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var wn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!wn.isDisabled && wn.supportsFiber) try {
            Da = wn.inject(i1), Fl = wn
        } catch {}
    }
    return Ou.createRoot = function(l, e) {
        if (!s(l)) throw Error(c(299));
        var t = !1,
            a = "",
            u = Go,
            f = Yo,
            i = ko,
            o = null;
        return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks)), e = sr(l, 1, !1, null, null, t, a, u, f, i, o, null), l[Vt] = e.current, $i(l), new hc(e)
    }, Ou.hydrateRoot = function(l, e, t) {
        if (!s(l)) throw Error(c(299));
        var a = !1,
            u = "",
            f = Go,
            i = Yo,
            o = ko,
            d = null,
            S = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (f = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (d = t.unstable_transitionCallbacks), t.formState !== void 0 && (S = t.formState)), e = sr(l, 1, !0, e, t ?? null, a, u, f, i, o, d, S), e.context = rr(null), t = e.current, a = ae(), a = af(a), u = Pe(a), u.callback = null, Ie(t, u, a), t = a, e.current.lanes = t, Na(e, t), Oe(e), l[Vt] = e.current, $i(l), new Jn(e)
    }, Ou.version = "19.1.0", Ou
}
var Ur;

function m1() {
    if (Ur) return vc.exports;
    Ur = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (y) {
            console.error(y)
        }
    }
    return n(), vc.exports = g1(), vc.exports
}
var b1 = m1(),
    ve = Rc();
const C = 800,
    I = 450,
    S1 = .65,
    p1 = -13.5,
    T1 = -12,
    Al = 36,
    X = I - 80,
    A1 = 5,
    M1 = 8.8,
    E1 = 11e-5,
    mt = [{
        name: "Chapter I",
        subtitle: "Victor's Laboratory",
        quote: '"It was on a dreary night of November that I beheld my creation..."',
        bgColor: [15, 8, 25],
        groundColor: "#2a1a3a",
        skyFeatures: "lab",
        obstacles: ["spike", "block", "lab_table", "spike", "spike_tall", "tesla_coil"],
        speedMultiplier: 1,
        bgScrollSpeed: .4,
        distanceThreshold: 0
    }, {
        name: "Chapter II",
        subtitle: "The Monster Awakens",
        quote: '"I, the miserable and the abandoned, am an abortion, to be spurned at..."',
        bgColor: [8, 18, 8],
        groundColor: "#1a2a1a",
        skyFeatures: "darkness",
        obstacles: ["spike", "gravestone", "block_tall", "saw", "spike", "coffin", "spike_double"],
        speedMultiplier: 1.1,
        bgScrollSpeed: .5,
        distanceThreshold: 4500
    }, {
        name: "Chapter III",
        subtitle: "The Village",
        quote: '"The children shrieked, and one of the women fainted..."',
        bgColor: [20, 14, 8],
        groundColor: "#2a1e10",
        skyFeatures: "village",
        obstacles: ["spike", "cross", "block", "flame", "spike_tall", "block_tall", "saw", "mushroom", "flame_tall"],
        speedMultiplier: 1.22,
        bgScrollSpeed: .65,
        distanceThreshold: 1e4
    }, {
        name: "Chapter IV",
        subtitle: "The Alps",
        quote: '"From the summit of Mont Blanc... I found myself face to face with the creature..."',
        bgColor: [10, 16, 28],
        groundColor: "#aaccee",
        skyFeatures: "alps",
        obstacles: ["spike", "block", "chain", "spike_tall", "spike_double", "saw", "block_tall", "gravestone", "saw_large"],
        speedMultiplier: 1.38,
        bgScrollSpeed: .8,
        distanceThreshold: 17500
    }, {
        name: "Chapter V",
        subtitle: "The Arctic Chase",
        quote: '"I have pursued him across the frozen sea... my enemy is close."',
        bgColor: [5, 12, 22],
        groundColor: "#e8f4ff",
        skyFeatures: "arctic",
        obstacles: ["lightning_pillar", "spike_tall", "saw", "block", "chain", "spike", "flame", "coffin", "ice_spike", "spike_triple", "tesla_coil", "saw_large"],
        speedMultiplier: 1.6,
        bgScrollSpeed: 1,
        distanceThreshold: 27e3
    }];
let _1 = 1,
    R1 = 1;

function O1(n, y) {
    const g = _1++;
    let c = X,
        s = 36,
        r = 36;
    switch (n) {
        case "spike":
            s = 28, r = 36, c = X - r;
            break;
        case "spike_tall":
            s = 28, r = 54, c = X - r;
            break;
        case "spike_double":
            s = 60, r = 36, c = X - r;
            break;
        case "spike_triple":
            s = 92, r = 36, c = X - r;
            break;
        case "block":
            s = 40, r = 44, c = X - r;
            break;
        case "block_tall":
            s = 40, r = 80, c = X - r;
            break;
        case "ceiling_spike":
            c = 0, s = 28, r = 36;
            break;
        case "saw":
            s = 40, r = 40, c = X - r;
            break;
        case "saw_large":
            s = 56, r = 56, c = X - r;
            break;
        case "flame":
            s = 30, r = 55, c = X - r;
            break;
        case "flame_tall":
            s = 30, r = 90, c = X - r;
            break;
        case "gravestone":
            s = 36, r = 50, c = X - r;
            break;
        case "chain":
            c = 0, s = 22, r = 195;
            break;
        case "lab_table":
            s = 55, r = 50, c = X - r;
            break;
        case "tesla_coil":
            s = 24, r = 80, c = X - r;
            break;
        case "lightning_pillar":
            s = 28, r = 70, c = X - r;
            break;
        case "coffin":
            s = 38, r = 52, c = X - r;
            break;
        case "cross":
            s = 32, r = 56, c = X - r;
            break;
        case "ice_spike":
            s = 24, r = 48, c = X - r;
            break;
        case "mushroom":
            s = 44, r = 48, c = X - r;
            break
    }
    return {
        id: g,
        kind: n,
        x: y,
        y: c,
        w: s,
        h: r
    }
}

function z1(n, y = 0) {
    return {
        id: R1++,
        x: n,
        y: X - Al - 28 - y,
        collected: !1,
        bobOffset: Math.random() * Math.PI * 2
    }
}

function D1(n = 0, y = 0) {
    return {
        phase: "title",
        tick: 0,
        px: 120,
        py: X - Al,
        pvx: 0,
        pvy: 0,
        prot: 0,
        scaleX: 1,
        scaleY: 1,
        onGround: !0,
        jumpsLeft: 1,
        dead: !1,
        invincible: 0,
        trail: [],
        coyoteTime: 0,
        jumpBuffer: 0,
        distance: 0,
        score: 0,
        speed: 5.5,
        obstacles: [],
        collectibles: [],
        nextObstacleX: C + 500,
        groundY: X,
        chapterIndex: 0,
        chapterIntroTimer: 0,
        bgObjects: [],
        bgOffset: 0,
        groundOffset: 0,
        particles: [],
        screenShake: 0,
        deathTimer: 0,
        jumpFlash: 0,
        collectFlash: 0,
        dangerFlash: 0,
        speedLines: [],
        floatTexts: [],
        bestScore: n,
        totalAttempts: y,
        percentage: 0,
        newBest: !1,
        muted: !1,
        collectiblesGot: 0
    }
}
let Xt = null,
    ze = null,
    xn = !1,
    Ec = null;
const U1 = 128,
    jt = 60 / U1,
    _c = jt * 4;

function Nu() {
    return Xt || (Xt = new AudioContext, ze = Xt.createGain(), ze.gain.setValueAtTime(.18, Xt.currentTime), ze.connect(Xt.destination)), Xt
}

function zu(n, y, g, c = "square", s = .3) {
    const r = Nu(),
        A = r.createOscillator(),
        _ = r.createGain();
    A.type = c, A.frequency.setValueAtTime(n, y), _.gain.setValueAtTime(0, y), _.gain.linearRampToValueAtTime(s, y + .005), _.gain.setValueAtTime(s, y + g * .75), _.gain.linearRampToValueAtTime(0, y + g), A.connect(_), _.connect(ze), A.start(y), A.stop(y + g + .01)
}

function pc(n, y) {
    const g = Nu(),
        c = g.sampleRate * .2,
        s = g.createBuffer(1, c, g.sampleRate),
        r = s.getChannelData(0);
    if (y === "kick")
        for (let p = 0; p < c; p++) {
            const M = p / g.sampleRate;
            r[p] = Math.sin(2 * Math.PI * (80 * Math.exp(-M * 30)) * M) * Math.exp(-M * 20)
        } else if (y === "snare")
            for (let p = 0; p < c; p++) {
                const M = p / g.sampleRate;
                r[p] = (Math.random() * 2 - 1) * Math.exp(-M * 25) * .7 + Math.sin(2 * Math.PI * 200 * M) * Math.exp(-M * 30) * .3
            } else
                for (let p = 0; p < c; p++) {
                    const M = p / g.sampleRate;
                    r[p] = (Math.random() * 2 - 1) * Math.exp(-M * 80) * .4
                }
    const A = g.createBufferSource(),
        _ = g.createGain();
    _.gain.setValueAtTime(y === "kick" ? .55 : y === "snare" ? .35 : .14, n), A.buffer = s, A.connect(_), _.connect(ze), A.start(n)
}
const Wn = [293.7, 349.2, 440, 349.2, 392, 349.2, 329.6, 293.7, 293.7, 349.2, 440, 587.3, 523.3, 440, 392, 349.2, 329.6, 293.7, 277.2, 293.7, 349.2, 329.6, 293.7, 277.2, 293.7, 349.2, 440, 392, 349.2, 329.6, 293.7, 293.7],
    $n = [73.4, 73.4, 87.3, 82.4, 73.4, 65.4, 58.3, 65.4, 73.4, 87.3, 98, 87.3, 73.4, 110, 87.3, 73.4];
let Fn = 0,
    Yr = 0;

function N1(n, y) {
    const g = y * 4 % Wn.length,
        c = y * 4 % $n.length;
    for (let s = 0; s < 4; s++) {
        const r = (g + s) % Wn.length,
            A = n + s * jt;
        zu(Wn[r], A, jt * .88, "square", .2), zu(Wn[r] * .5, A, jt * .6, "triangle", .08)
    }
    for (let s = 0; s < 4; s++) zu($n[(c + s) % $n.length], n + s * jt, jt * .95, "sawtooth", .18);
    if (y % 2 === 0) {
        const s = $n[c] * 2;
        zu(s, n, _c * .95, "sine", .06), zu(s * 1.5, n, _c * .95, "sine", .05)
    }
    for (let s = 0; s < 8; s++) {
        const r = n + s * jt * .5;
        (s === 0 || s === 4 || s === 6) && pc(r, "kick"), (s === 2 || s === 6) && pc(r, "snare"), s % 2 === 1 && pc(r, "hat")
    }
}

function kr() {
    const g = Nu().currentTime + .25;
    for (; Fn < g;) N1(Fn, Yr++), Fn += _c;
    xn && (Ec = setTimeout(kr, 80))
}

function Nr() {
    if (xn) return;
    const n = Nu();
    n.state === "suspended" && n.resume(), xn = !0, Fn = n.currentTime + .05, Yr = 0, kr()
}

function H1() {
    xn = !1, Ec && clearTimeout(Ec)
}

function Hr(n) {
    ze && ze.gain.setValueAtTime(n, Xt.currentTime)
}

function Oc(n, y) {
    if (y) return;
    const g = Nu();
    g.state === "suspended" && g.resume();
    const c = g.currentTime;
    if (n === "jump") {
        const s = g.createOscillator(),
            r = g.createGain();
        s.type = "square", s.frequency.setValueAtTime(440, c), s.frequency.linearRampToValueAtTime(600, c + .05), r.gain.setValueAtTime(.15, c), r.gain.linearRampToValueAtTime(0, c + .1), s.connect(r), r.connect(ze), s.start(c), s.stop(c + .12)
    } else if (n === "death") {
        const s = g.createOscillator(),
            r = g.createGain();
        s.type = "sawtooth", s.frequency.setValueAtTime(300, c), s.frequency.exponentialRampToValueAtTime(60, c + .35), r.gain.setValueAtTime(.2, c), r.gain.linearRampToValueAtTime(0, c + .4), s.connect(r), r.connect(ze), s.start(c), s.stop(c + .45)
    } else if (n === "collect")
        for (let s = 0; s < 3; s++) {
            const r = g.createOscillator(),
                A = g.createGain();
            r.type = "triangle";
            const _ = 660 * Math.pow(1.26, s);
            r.frequency.setValueAtTime(_, c + s * .06), A.gain.setValueAtTime(.18, c + s * .06), A.gain.linearRampToValueAtTime(0, c + s * .06 + .14), r.connect(A), A.connect(ze), r.start(c + s * .06), r.stop(c + s * .06 + .16)
        }
}
const Du = mt[mt.length - 1].distanceThreshold + 9e3,
    Tc = 8,
    q1 = 12;

function ne(n, y) {
    return n + Math.random() * (y - n)
}

function Uu(n, y, g, c, s = !1) {
    const r = ["#7ab88a", "#ffee00", "#ccaaff", "#ff4444", "#44aaff", "#ffaa44", "#aaffcc"];
    for (let A = 0; A < c; A++) {
        const _ = A / c * Math.PI * 2 + ne(-.4, .4),
            p = s ? ne(4, 10) : ne(1, 4);
        n.particles.push({
            x: y,
            y: g,
            vx: Math.cos(_) * p,
            vy: Math.sin(_) * p - (s ? ne(2, 6) : 0),
            life: s ? 55 : 30,
            maxLife: s ? 55 : 30,
            color: r[Math.floor(Math.random() * r.length)],
            size: ne(3, s ? 11 : 7),
            spin: ne(-.2, .2)
        })
    }
}

function qr(n, y, g, c, s) {
    n.floatTexts.push({
        x: y,
        y: g,
        text: c,
        color: s,
        life: 55
    })
}

function B1(n) {
    for (let y = mt.length - 1; y >= 0; y--)
        if (n >= mt[y].distanceThreshold) return y;
    return 0
}
const Br = {
        0: [
            [{
                kind: "spike",
                offset: 0
            }],
            [{
                kind: "lab_table",
                offset: 0
            }],
            [{
                kind: "spike",
                offset: 0
            }, {
                kind: "spike",
                offset: 40
            }],
            [{
                kind: "block",
                offset: 0
            }],
            [{
                kind: "spike_tall",
                offset: 0
            }],
            [{
                kind: "tesla_coil",
                offset: 0
            }],
            [{
                kind: "lab_table",
                offset: 0
            }, {
                kind: "spike",
                offset: 70
            }],
            [{
                kind: "spike",
                offset: 0
            }, {
                kind: "lab_table",
                offset: 80
            }],
            [{
                kind: "tesla_coil",
                offset: 0
            }, {
                kind: "spike",
                offset: 45
            }],
            [{
                kind: "block",
                offset: 0
            }, {
                kind: "spike",
                offset: 55
            }],
            [{
                kind: "spike",
                offset: 0
            }, {
                kind: "spike_tall",
                offset: 44
            }],
            [{
                kind: "lab_table",
                offset: 0
            }, {
                kind: "lab_table",
                offset: 80
            }]
        ],
        1: [
            [{
                kind: "gravestone",
                offset: 0
            }],
            [{
                kind: "coffin",
                offset: 0
            }],
            [{
                kind: "saw",
                offset: 0
            }],
            [{
                kind: "spike_double",
                offset: 0
            }],
            [{
                kind: "gravestone",
                offset: 0
            }, {
                kind: "spike",
                offset: 52
            }],
            [{
                kind: "saw",
                offset: 0
            }, {
                kind: "spike",
                offset: 55
            }],
            [{
                kind: "coffin",
                offset: 0
            }, {
                kind: "spike",
                offset: 55
            }],
            [{
                kind: "block_tall",
                offset: 0
            }, {
                kind: "spike",
                offset: 55
            }],
            [{
                kind: "spike_double",
                offset: 0
            }, {
                kind: "spike",
                offset: 78
            }],
            [{
                kind: "gravestone",
                offset: 0
            }, {
                kind: "coffin",
                offset: 52
            }],
            [{
                kind: "saw",
                offset: 0
            }, {
                kind: "gravestone",
                offset: 60
            }],
            [{
                kind: "spike",
                offset: 0
            }, {
                kind: "saw",
                offset: 44
            }, {
                kind: "spike",
                offset: 96
            }]
        ],
        2: [
            [{
                kind: "cross",
                offset: 0
            }],
            [{
                kind: "flame",
                offset: 0
            }],
            [{
                kind: "mushroom",
                offset: 0
            }],
            [{
                kind: "flame_tall",
                offset: 0
            }],
            [{
                kind: "cross",
                offset: 0
            }, {
                kind: "spike",
                offset: 48
            }],
            [{
                kind: "flame",
                offset: 0
            }, {
                kind: "spike",
                offset: 46
            }],
            [{
                kind: "mushroom",
                offset: 0
            }, {
                kind: "spike",
                offset: 58
            }],
            [{
                kind: "cross",
                offset: 0
            }, {
                kind: "flame",
                offset: 48
            }],
            [{
                kind: "spike_tall",
                offset: 0
            }, {
                kind: "mushroom",
                offset: 46
            }],
            [{
                kind: "block_tall",
                offset: 0
            }, {
                kind: "flame",
                offset: 55
            }],
            [{
                kind: "flame_tall",
                offset: 0
            }, {
                kind: "spike",
                offset: 46
            }],
            [{
                kind: "cross",
                offset: 0
            }, {
                kind: "mushroom",
                offset: 50
            }, {
                kind: "flame",
                offset: 104
            }],
            [{
                kind: "flame",
                offset: 0
            }, {
                kind: "flame",
                offset: 50
            }],
            [{
                kind: "saw",
                offset: 0
            }, {
                kind: "flame",
                offset: 55
            }]
        ],
        3: [
            [{
                kind: "chain",
                offset: 0
            }],
            [{
                kind: "saw_large",
                offset: 0
            }],
            [{
                kind: "spike_double",
                offset: 0
            }],
            [{
                kind: "saw",
                offset: 0
            }, {
                kind: "spike",
                offset: 55
            }],
            [{
                kind: "spike_tall",
                offset: 0
            }, {
                kind: "spike_tall",
                offset: 42
            }],
            [{
                kind: "chain",
                offset: 0
            }, {
                kind: "spike",
                offset: 36
            }],
            [{
                kind: "saw_large",
                offset: 0
            }, {
                kind: "spike",
                offset: 70
            }],
            [{
                kind: "spike_double",
                offset: 0
            }, {
                kind: "spike",
                offset: 80
            }],
            [{
                kind: "gravestone",
                offset: 0
            }, {
                kind: "saw",
                offset: 52
            }],
            [{
                kind: "block_tall",
                offset: 0
            }, {
                kind: "spike_double",
                offset: 56
            }],
            [{
                kind: "saw",
                offset: 0
            }, {
                kind: "saw",
                offset: 60
            }],
            [{
                kind: "chain",
                offset: 0
            }, {
                kind: "saw_large",
                offset: 40
            }],
            [{
                kind: "spike",
                offset: 0
            }, {
                kind: "saw_large",
                offset: 44
            }, {
                kind: "spike",
                offset: 114
            }],
            [{
                kind: "spike_double",
                offset: 0
            }, {
                kind: "spike_tall",
                offset: 78
            }]
        ],
        4: [
            [{
                kind: "ice_spike",
                offset: 0
            }],
            [{
                kind: "spike_triple",
                offset: 0
            }],
            [{
                kind: "tesla_coil",
                offset: 0
            }],
            [{
                kind: "ice_spike",
                offset: 0
            }, {
                kind: "spike",
                offset: 40
            }],
            [{
                kind: "lightning_pillar",
                offset: 0
            }, {
                kind: "ice_spike",
                offset: 44
            }],
            [{
                kind: "spike_triple",
                offset: 0
            }, {
                kind: "spike",
                offset: 112
            }],
            [{
                kind: "saw_large",
                offset: 0
            }, {
                kind: "ice_spike",
                offset: 28 M +
            }],
            [{
                kind: "tesla_coil",
                offset: 0
            }, {
                kind: "spike_double",
                offset: 44
            }],
            [{
                kind: "ice_spike",
                offset: 0
            }, {
                kind: "ice_spike",
                offset: 38
            }, {
                kind: "spike",
                offset: 76
            }],
            [{
                kind: "lightning_pillar",
                offset: 0
            }, {
                kind: "saw_large",
                offset: 44
            }],
            [{
                kind: "spike_triple",
                offset: 0
            }, {
                kind: "tesla_coil",
                offset: 112
            }],
            [{
                kind: "chain",
                offset: 0
            }, {
                kind: "ice_spike",
                offset: 38
            }, {
                kind: "spike_tall",
                offset: 76
            }],
            [{
                kind: "saw_large",
                offset: 0
            }, {
                kind: "saw_large",
                offset: 28 M +
            }],
            [{
                kind: "ice_spike",
                offset: 0
            }, {
                kind: "spike_triple",
                offset: 44
            }],
            [{
                kind: "tesla_coil",
                offset: 0
            }, {
                kind: "lightning_pillar",
                offset: 44
            }, {
                kind: "ice_spike",
                offset: 88
            }]
        ]
    },
    za = {};

function C1(n) {
    if (!za[n] || za[n].length === 0) {
        za[n] = [...Br[n] ?? Br[0]];
        const y = za[n];
        for (let g = y.length - 1; g > 0; g--) {
            const c = Math.floor(Math.random() * (g + 1));
            [y[g], y[c]] = [y[c], y[g]]
        }
    }
    return za[n].pop()
}

function G1(n) {
    const y = n.chapterIndex,
        g = C1(y),
        c = n.obstacles.length > 0 ? Math.max(...n.obstacles.map(p => p.x + p.w)) : C + 100,
        s = Math.max(245 - y * 14, 185),
        r = Math.max(395 - y * 18, 270),
        A = ne(s, r),
        _ = c + A;
    for (const p of g) n.obstacles.push(O1(p.kind, _ + p.offset));
    if (Math.random() < .6) {
        const p = c + A * .45;
        n.collectibles.push(z1(p, Math.random() < .3 ? 22 : 0))
    }
}

function Y1(n) {
    n.bgObjects.length < 12 && n.bgObjects.push({
        x: C + ne(0, 200),
        y: ne(30, X - 60),
        type: Math.floor(ne(0, 5)),
        scale: ne(.5, 1.5)
    })
}

function Cr(n, y, g, c, s, r, A, _, p = 5) {
    return n + p < s + A - p && n + g - p > s + p && y + p < r + _ - p && y + c - p > r + p
}

function k1(n) {
    if (n.phase !== "playing" && n.phase !== "chapter_intro") return;
    n.jumpBuffer = q1, (n.onGround || n.coyoteTime > 0 || n.jumpsLeft > 0) && Xr(n)
}

function Xr(n) {
    const y = n.onGround || n.coyoteTime > 0;
    n.pvy = y ? p1 : T1, n.onGround = !1, n.coyoteTime = 0, n.jumpBuffer = 0, y ? n.jumpsLeft = 1 : n.jumpsLeft = Math.max(0, n.jumpsLeft - 1), n.scaleX = .75, n.scaleY = 1.35, n.jumpFlash = 8, Uu(n, n.px + Al / 2, n.py + Al, 7), Oc("jump", n.muted)
}

function X1(n, y) {
    if (n.phase === "title") {
        n.tick++;
        return
    }
    if (n.phase === "chapter_intro") {
        n.tick++, n.chapterIntroTimer--, n.chapterIntroTimer <= 0 && (n.phase = "playing");
        return
    }
    if (n.phase === "dead") {
        n.tick++, n.deathTimer--;
        for (const _ of n.particles) _.x += _.vx, _.y += _.vy, _.vy += .18, _.life--;
        n.particles = n.particles.filter(_ => _.life > 0);
        return
    }
    if (n.phase === "victory") {
        n.tick++;
        return
    }
    n.tick++, n.distance += n.speed;
    const g = Math.min(100, Math.floor(n.distance / Du * 100));
    if (g > n.percentage) {
        const _ = Math.min(100, Math.floor(n.bestScore / Du * 100));
        g > _ && !n.newBest && (n.newBest = !0, qr(n, n.px - 10, n.py - 26, "★ NEW BEST!", "#ffee00")), n.percentage = g
    }
    n.speed = Math.min(M1, A1 + n.distance * E1);
    const c = B1(n.distance);
    if (c !== n.chapterIndex) {
        n.chapterIndex = c, n.chapterIntroTimer = 150, n.phase = "chapter_intro", n.bgObjects = [], za[c] = [];
        return
    }
    if (n.distance >= Du) {
        n.phase = "victory", n.score = Math.floor(n.distance) + n.collectiblesGot * 500, Uu(n, n.px, n.py, 50, !0);
        return
    }
    const s = n.onGround;
    if (n.pvy += S1, n.py += n.pvy, n.py >= X - Al) {
        if (n.py = X - Al, n.pvy > 0) {
            const _ = Math.min(n.pvy / 15, 1);
            n.scaleX = 1 + _ * .35, n.scaleY = 1 - _ * .3, s || Uu(n, n.px + Al / 2, n.py + Al, 4)
        }
        n.pvy = 0, n.onGround = !0, n.coyoteTime = Tc, n.jumpsLeft = 1
    } else s ? n.coyoteTime = Tc : n.coyoteTime > 0 && n.coyoteTime--, n.onGround = !1;
    n.jumpBuffer > 0 && (n.jumpBuffer--, (n.onGround || n.coyoteTime > 0) && Xr(n)), n.onGround ? n.prot = Math.round(n.prot / 90) * 90 : n.prot += 6.5, n.scaleX += (1 - n.scaleX) * .18, n.scaleY += (1 - n.scaleY) * .18, n.trail.unshift({
        x: n.px,
        y: n.py,
        alpha: .65
    }), n.trail.length > 14 && n.trail.pop();
    for (const _ of n.trail) _.alpha -= .05;
    n.trail = n.trail.filter(_ => _.alpha > 0), n.speed > 7 && Math.random() < .4 && n.speedLines.push({
        x: C,
        y: ne(30, X - 20),
        len: ne(40, 100),
        alpha: .6
    });
    for (const _ of n.speedLines) _.x -= n.speed * 3, _.alpha -= .04;
    n.speedLines = n.speedLines.filter(_ => _.alpha > 0 && _.x > -_.len);
    for (const _ of n.obstacles) _.x -= n.speed;
    n.obstacles = n.obstacles.filter(_ => _.x + _.w > -80);
    for (const _ of n.collectibles) _.x -= n.speed;
    n.collectibles = n.collectibles.filter(_ => !_.collected && _.x > -60), (n.obstacles.length === 0 || Math.max(...n.obstacles.map(_ => _.x)) < C + 80) && G1(n);
    const r = mt[n.chapterIndex];
    n.bgOffset = (n.bgOffset + r.bgScrollSpeed) % C, n.groundOffset = (n.groundOffset + n.speed) % 60;
    for (const _ of n.bgObjects) _.x -= r.bgScrollSpeed * 1.5;
    n.bgObjects = n.bgObjects.filter(_ => _.x > -200), Y1(n);
    for (const _ of n.particles) _.x += _.vx, _.y += _.vy, _.vy += .1, _.life--;
    n.particles = n.particles.filter(_ => _.life > 0);
    for (const _ of n.floatTexts) _.y -= 1.2, _.life--;
    n.floatTexts = n.floatTexts.filter(_ => _.life > 0), n.jumpFlash > 0 && n.jumpFlash--, n.collectFlash > 0 && n.collectFlash--, n.screenShake > 0 && n.screenShake--;
    const A = n.obstacles.find(_ => _.x > n.px && _.x - n.px < 280);
    n.dangerFlash = A && A.x - n.px < 200 ? Math.min(1, (200 - (A.x - n.px)) / 200) : 0;
    for (const _ of n.collectibles) {
        if (_.collected) continue;
        const p = _.y + Math.sin(n.tick * .07 + _.bobOffset) * 5;
        Cr(n.px, n.py, Al, Al, _.x, p, 22, 28, 2) && (_.collected = !0, n.collectiblesGot++, n.score += 500, n.collectFlash = 12, qr(n, _.x, _.y - 20, "+500 ⚡", "#ffee00"), Uu(n, _.x + 11, p + 14, 10), Oc("collect", n.muted))
    }
    if (n.invincible > 0) {
        n.invincible--;
        return
    }
    for (const _ of n.obstacles) {
        const p = _.kind === "block" || _.kind === "block_tall" || _.kind === "lab_table";
        if (Cr(n.px, n.py, Al, Al, _.x, _.y, _.w, _.h)) {
            p && n.pvy >= 0 && n.py + Al <= _.y + 12 ? (n.py = _.y - Al, n.pvy = 0, n.onGround = !0, n.jumpsLeft = 1, n.coyoteTime = Tc) : j1(n);
            return
        }
    }
    n.score = Math.floor(n.distance) + n.collectiblesGot * 500
}

function j1(n) {
    n.phase = "dead", n.deathTimer = 65, n.screenShake = 22, n.totalAttempts++, Uu(n, n.px + Al / 2, n.py + Al / 2, 35, !0), Oc("death", n.muted)
}

function jr(n) {
    return `rgb(${n[0]|0},${n[1]|0},${n[2]|0})`
}

function Q1(n, y) {
    if (n.save(), y.screenShake > 0) {
        const c = y.screenShake * .45;
        n.translate((Math.random() - .5) * c, (Math.random() - .5) * c)
    }
    const g = mt[y.chapterIndex];
    if (y.phase === "title") {
        n2(n, y), n.restore();
        return
    }
    if (y.phase === "chapter_intro") {
        Ac(n, y, g), Mc(n, y, g), f2(n, y), n.restore();
        return
    }
    if (y.phase === "victory") {
        Ac(n, y, g), Mc(n, y, g), i2(n, y), n.restore();
        return
    }
    if (Ac(n, y, g), Z1(n, y), x1(n, y, g), P1(n, y), Mc(n, y, g), V1(n, y), l2(n, y), e2(n, y), t2(n, y), L1(n, y), y.phase === "dead" && u2(n, y), a2(n, y, g), y.dangerFlash > 0) {
        const c = y.dangerFlash;
        n.strokeStyle = `rgba(255,60,0,${c*.55})`, n.lineWidth = 5 * c, n.strokeRect(0, 0, C, I)
    }
    y.jumpFlash > 0 && (n.fillStyle = `rgba(120,255,160,${y.jumpFlash/8*.08})`, n.fillRect(0, 0, C, I)), y.collectFlash > 0 && (n.fillStyle = `rgba(255,238,0,${y.collectFlash/12*.12})`, n.fillRect(0, 0, C, I)), n.restore()
}

function Z1(n, y) {
    if (y.speedLines.length !== 0) {
        n.save();
        for (const g of y.speedLines) n.globalAlpha = g.alpha * .45, n.strokeStyle = "rgba(180,230,200,0.8)", n.lineWidth = 1.5, n.beginPath(), n.moveTo(g.x, g.y), n.lineTo(g.x + g.len, g.y), n.stroke();
        n.globalAlpha = 1, n.restore()
    }
}

function V1(n, y) {
    for (const g of y.collectibles) {
        if (g.collected) continue;
        const c = Math.sin(y.tick * .07 + g.bobOffset) * 5,
            s = g.y + c;
        n.save(), n.translate(g.x + 11, s + 14);
        const r = .5 + Math.sin(y.tick * .12 + g.bobOffset) * .3,
            A = n.createRadialGradient(0, 0, 2, 0, 0, 22);
        A.addColorStop(0, `rgba(255,238,0,${r*.5})`), A.addColorStop(1, "rgba(255,238,0,0)"), n.fillStyle = A, n.fillRect(-22, -22, 44, 44), n.fillStyle = "#ffee00", n.strokeStyle = "#ffaa00", n.lineWidth = 1.5, n.beginPath(), n.moveTo(4, -12), n.lineTo(-3, 0), n.lineTo(3, 0), n.lineTo(-4, 12), n.lineTo(3, 1), n.lineTo(-3, 1), n.closePath(), n.fill(), n.stroke(), n.restore()
    }
}

function L1(n, y) {
    n.save();
    for (const g of y.floatTexts) {
        const c = g.life / 55;
        n.globalAlpha = c, n.fillStyle = g.color, n.font = "bold 13px monospace", n.textAlign = "left", n.fillText(g.text, g.x, g.y)
    }
    n.globalAlpha = 1, n.restore()
}

function Ac(n, y, g) {
    const c = g.bgColor,
        s = n.createLinearGradient(0, 0, 0, I);
    s.addColorStop(0, jr(c)), s.addColorStop(1, `rgb(${c[0]+10|0},${c[1]+8|0},${c[2]+15|0})`), n.fillStyle = s, n.fillRect(0, 0, C, I), n.fillStyle = "rgba(255,255,255,0.25)";
    for (let r = 0; r < 40; r++) {
        const A = (r * 197.3 + y.bgOffset * .3) % C,
            _ = r * 89.7 % (X - 40);
        n.globalAlpha = (Math.sin(y.tick * .04 + r) + 1) * .5 * .5, n.fillRect(A, _, 2, 2)
    }
    n.globalAlpha = 1, g.skyFeatures === "lab" ? K1(n, y) : g.skyFeatures === "arctic" ? J1(n, y) : g.skyFeatures === "alps" ? w1(n, y) : g.skyFeatures === "fire" ? W1(n, y) : g.skyFeatures === "village" ? $1(n, y) : g.skyFeatures === "darkness" && F1(n, y)
}

function K1(n, y) {
    const g = -y.bgOffset * .3;
    n.strokeStyle = "rgba(80,200,160,0.15)", n.lineWidth = 1;
    for (let c = g % 80; c < C; c += 80) n.beginPath(), n.moveTo(c, 0), n.lineTo(c, X - 20), n.stroke();
    for (let c = 0; c < 3; c++) {
        const s = (c * 250 + g * .5) % (C + 200) - 100;
        n.fillStyle = "rgba(80,200,160,0.12)", n.fillRect(s, 80, 60, 100), n.fillRect(s + 10, 60, 40, 25), n.strokeStyle = "rgba(100,255,180,0.2)", n.lineWidth = 2, n.strokeRect(s + 5, 85, 50, 90);
        const r = Math.sin(y.tick * .1 + c * 2) * .5 + .5;
        n.fillStyle = `rgba(255,255,100,${r*.5})`, n.fillRect(s + 25, 55, 10, 10)
    }
}

function J1(n, y) {
    const g = -y.bgOffset * .25;
    for (let s = 0; s < 5; s++) {
        const r = (s * 180 + g) % (C + 250) - 100,
            A = 60 + s * 20;
        n.fillStyle = `rgba(180,210,240,${.15+s*.03})`, n.beginPath(), n.moveTo(r, X - 20), n.lineTo(r + 80, X - 20 - A), n.lineTo(r + 160, X - 20), n.closePath(), n.fill()
    }
    const c = .04 + Math.sin(y.tick * .05) * .02;
    n.fillStyle = `rgba(100,180,255,${c})`, n.fillRect(0, 0, C, 80)
}

function w1(n, y) {
    const g = -y.bgOffset * .2;
    for (let c = 0; c < 4; c++) {
        const s = (c * 220 + g) % (C + 280) - 100,
            r = 100 + c * 30;
        n.fillStyle = `rgba(40,60,80,${.3+c*.05})`, n.beginPath(), n.moveTo(s, X), n.lineTo(s + 100, X - r), n.lineTo(s + 200, X), n.closePath(), n.fill(), n.fillStyle = "rgba(220,235,255,0.4)", n.beginPath(), n.moveTo(s + 90, X - r), n.lineTo(s + 100, X - r - 10), n.lineTo(s + 110, X - r), n.lineTo(s + 100, X - r + 15), n.closePath(), n.fill()
    }
}

function W1(n, y) {
    for (let g = 0; g < 6; g++) {
        const c = (g * 140 - y.bgOffset * .4) % (C + 140),
            s = Math.sin(y.tick * .12 + g) * 10,
            r = n.createLinearGradient(c, X, c, X - 80 + s);
        r.addColorStop(0, "rgba(255,80,0,0.4)"), r.addColorStop(1, "rgba(255,200,0,0)"), n.fillStyle = r, n.beginPath(), n.ellipse(c + 30, X, 20, 80 - s, 0, 0, Math.PI * 2), n.fill()
    }
}

function $1(n, y) {
    const g = -y.bgOffset * .35;
    for (let c = 0; c < 4; c++) {
        const s = (c * 200 + g) % (C + 250) - 100;
        n.fillStyle = "rgba(60,40,20,0.3)", n.fillRect(s, X - 80, 40, 80), n.beginPath(), n.moveTo(s - 10, X - 80), n.lineTo(s + 20, X - 120), n.lineTo(s + 50, X - 80), n.closePath(), n.fillStyle = "rgba(80,30,20,0.3)", n.fill(), n.fillStyle = `rgba(255,180,50,${.2+Math.sin(y.tick*.05+c)*.1})`, n.fillRect(s + 8, X - 60, 12, 12)
    }
}

function F1(n, y) {
    const g = Math.sin(y.tick * .04) * .05 + .05;
    n.fillStyle = `rgba(0,0,0,${g})`, n.fillRect(0, 0, C, I), n.strokeStyle = "rgba(80,0,120,0.2)", n.lineWidth = 1;
    for (let c = 0; c < X; c += 40) n.beginPath(), n.moveTo(0, c), n.lineTo(C, c), n.stroke()
}

function x1(n, y, g) {
    for (const c of y.bgObjects) {
        switch (n.save(), n.translate(c.x, c.y), n.scale(c.scale, c.scale), n.globalAlpha = .18, c.type % 5) {
            case 0:
                n.fillStyle = "#888", n.fillRect(-5, -30, 10, 45), n.fillRect(-18, -15, 36, 10);
                break;
            case 1:
                n.fillStyle = "#ffee00", n.fillRect(-4, -25, 8, 20), n.fillRect(-12, -5, 20, 8), n.fillRect(-4, 3, 8, 18);
                break;
            case 2:
                n.fillStyle = "#888", n.fillRect(-10, -20, 20, 30), n.beginPath(), n.arc(0, -20, 10, Math.PI, 0), n.fill();
                break;
            case 3:
                n.fillStyle = "#44ffaa", n.fillRect(-5, -20, 10, 25), n.fillRect(-8, 5, 16, 8), n.fillRect(-4, -25, 8, 8);
                break;
            case 4:
                n.fillStyle = "#eeeedd", n.beginPath(), n.arc(0, 0, 20, 0, Math.PI * 2), n.fill(), n.fillStyle = jr(g.bgColor), n.beginPath(), n.arc(8, -4, 18, 0, Math.PI * 2), n.fill();
                break
        }
        n.globalAlpha = 1, n.restore()
    }
}

function P1(n, y, g) {
    for (const c of y.obstacles) I1(n, c, y.tick)
}

function I1(n, y, g) {
    n.save();
    const {
        x: c,
        y: s,
        w: r,
        h: A,
        kind: _
    } = y;
    switch (_) {
        case "spike":
        case "spike_tall": {
            const p = n.createLinearGradient(c, s + A, c + r / 2, s);
            p.addColorStop(0, "#cc2222"), p.addColorStop(1, "#ff5555"), n.fillStyle = p, n.beginPath(), n.moveTo(c, s + A), n.lineTo(c + r / 2, s), n.lineTo(c + r, s + A), n.closePath(), n.fill(), n.strokeStyle = "#ff7777", n.lineWidth = 1, n.stroke();
            break
        }
        case "spike_double": {
            const p = r / 2;
            for (let M = 0; M < 2; M++) {
                const N = c + M * p,
                    Y = n.createLinearGradient(N, s + A, N + p / 2, s);
                Y.addColorStop(0, "#cc2222"), Y.addColorStop(1, "#ff5555"), n.fillStyle = Y, n.beginPath(), n.moveTo(N, s + A), n.lineTo(N + p / 2, s), n.lineTo(N + p, s + A), n.closePath(), n.fill(), n.strokeStyle = "#ff8888", n.lineWidth = 1, n.stroke()
            }
            break
        }
        case "spike_triple": {
            const p = r / 3;
            for (let M = 0; M < 3; M++) {
                const N = c + M * p,
                    Y = n.createLinearGradient(N, s + A, N + p / 2, s);
                Y.addColorStop(0, "#aa1111"), Y.addColorStop(1, "#ff4444"), n.fillStyle = Y, n.beginPath(), n.moveTo(N, s + A), n.lineTo(N + p / 2, s), n.lineTo(N + p, s + A), n.closePath(), n.fill(), n.strokeStyle = "#ff6666", n.lineWidth = 1, n.stroke()
            }
            break
        }
        case "block":
        case "block_tall": {
            n.fillStyle = "#5a4a3a", n.fillRect(c, s, r, A), n.fillStyle = "#6a5a4a", n.fillRect(c, s, r, 4), n.fillRect(c, s, 4, A), n.fillStyle = "#3a2a1a", n.fillRect(c + r - 4, s, 4, A), n.fillRect(c, s + A - 4, r, 4);
            break
        }
        case "saw": {
            n.save(), n.translate(c + r / 2, s + A / 2), n.rotate(g * .14);
            for (let p = 0; p < 8; p++) {
                const M = p / 8 * Math.PI * 2;
                n.beginPath(), n.moveTo(0, 0), n.lineTo(Math.cos(M) * (r / 2 + 7), Math.sin(M) * (A / 2 + 7)), n.lineTo(Math.cos(M + .3) * (r / 2), Math.sin(M + .3) * (A / 2)), n.closePath(), n.fillStyle = p % 2 === 0 ? "#bbb" : "#777", n.fill()
            }
            n.beginPath(), n.arc(0, 0, r / 2 - 4, 0, Math.PI * 2), n.fillStyle = "#555", n.fill(), n.restore();
            break
        }
        case "saw_large": {
            n.save(), n.translate(c + r / 2, s + A / 2), n.rotate(-g * .18);
            const p = r / 2;
            for (let M = 0; M < 12; M++) {
                const N = M / 12 * Math.PI * 2;
                n.beginPath(), n.moveTo(0, 0), n.lineTo(Math.cos(N) * (p + 8), Math.sin(N) * (p + 8)), n.lineTo(Math.cos(N + .22) * p, Math.sin(N + .22) * p), n.closePath(), n.fillStyle = M % 3 === 0 ? "#ddd" : M % 3 === 1 ? "#999" : "#666", n.fill()
            }
            n.beginPath(), n.arc(0, 0, p - 6, 0, Math.PI * 2), n.fillStyle = "#444", n.fill(), n.beginPath(), n.arc(0, 0, 5, 0, Math.PI * 2), n.fillStyle = "#cc4400", n.fill(), n.globalAlpha = .2 + Math.sin(g * .15) * .15, n.fillStyle = "#ff4400", n.beginPath(), n.arc(0, 0, p + 10, 0, Math.PI * 2), n.fill(), n.globalAlpha = 1, n.restore();
            break
        }
        case "flame":
        case "flame_tall": {
            const p = Math.sin(g * .18) * 8,
                M = Math.sin(g * .27 + 1.2) * 5,
                N = n.createLinearGradient(c + r / 2, s + A, c + r / 2, s - p);
            if (N.addColorStop(0, "rgba(255,60,0,0.95)"), N.addColorStop(.35, "rgba(255,140,0,0.8)"), N.addColorStop(.7, "rgba(255,200,0,0.5)"), N.addColorStop(1, "rgba(255,240,100,0)"), n.fillStyle = N, n.beginPath(), n.moveTo(c, s + A), n.quadraticCurveTo(c - 10, s + A * .5, c + r / 2, s - p), n.quadraticCurveTo(c + r + 10, s + A * .5, c + r, s + A), n.closePath(), n.fill(), _ === "flame_tall") {
                const Y = n.createLinearGradient(c + r / 2, s + A * .7, c + r / 2, s - p - 20);
                Y.addColorStop(0, "rgba(255,200,0,0.7)"), Y.addColorStop(1, "rgba(255,255,200,0)"), n.fillStyle = Y, n.beginPath(), n.moveTo(c + r * .25, s + A * .7), n.quadraticCurveTo(c + M, s + A * .2, c + r / 2, s - p - 20), n.quadraticCurveTo(c + r - M, s + A * .2, c + r * .75, s + A * .7), n.closePath(), n.fill()
            }
            break
        }
        case "gravestone": {
            n.fillStyle = "#7a7a8a", n.fillRect(c, s, r, A), n.beginPath(), n.arc(c + r / 2, s, r / 2, Math.PI, 0), n.fill(), n.fillStyle = "#5a5a6a", n.font = "11px monospace", n.textAlign = "center", n.fillText("R.I.P", c + r / 2, s + A * .5), n.textAlign = "left";
            break
        }
        case "chain": {
            n.fillStyle = "#555", n.fillRect(c - 6, s, r + 12, 8), n.strokeStyle = "#999", n.lineWidth = 3;
            for (let p = s + 8; p < s + A - 10; p += 18) n.beginPath(), n.arc(c + r / 2, p + 9, 7, 0, Math.PI * 2), n.stroke();
            n.strokeStyle = "#bbb", n.lineWidth = 2, n.beginPath(), n.arc(c + r / 2, s + A - 6, 6, Math.PI * .2, Math.PI * .9), n.stroke();
            break
        }
        case "lab_table": {
            n.fillStyle = "#4a5a6a", n.fillRect(c, s, r, A), n.fillStyle = "#3a4a5a", n.fillRect(c + 2, s + 2, r - 4, 12);
            const p = .3 + Math.sin(g * .1) * .2;
            n.fillStyle = `rgba(100,255,180,${p})`, n.fillRect(c + 8, s + 6, 14, 8), n.fillRect(c + 30, s + 6, 14, 8), n.fillStyle = "#222", n.fillRect(c + 10, s + 30, 12, A - 32), n.fillRect(c + 33, s + 30, 12, A - 32);
            break
        }
        case "lightning_pillar": {
            n.fillStyle = "#3a2a5a", n.fillRect(c, s, r, A);
            const p = Math.sin(g * .15) * .5 + .5;
            n.fillStyle = `rgba(160,100,255,${.4+p*.4})`, n.fillRect(c + 4, s, r - 8, A), n.strokeStyle = `rgba(200,150,255,${p*.8})`, n.lineWidth = 2, n.beginPath(), n.moveTo(c + r / 2, s);
            for (let M = s; M > 0; M -= 20) n.lineTo(c + r / 2 + (Math.random() - .5) * 20, M - 20);
            n.stroke();
            break
        }
        case "coffin": {
            n.fillStyle = "#3a2010", n.fillRect(c + 4, s, r - 8, A), n.fillRect(c, s + 10, r, A - 20), n.strokeStyle = "#6a4030", n.lineWidth = 2, n.strokeRect(c + 4, s, r - 8, A), n.fillStyle = "#5a3020", n.fillRect(c + r / 2 - 4, s + A / 2 - 6, 8, 12), n.fillRect(c + r / 2 - 6, s + A / 2 - 4, 12, 8);
            break
        }
        case "cross": {
            n.fillStyle = "#8a7a6a", n.fillRect(c + r * .35, s, r * .3, A), n.fillRect(c, s + A * .25, r, A * .2), n.strokeStyle = "#6a5a4a", n.lineWidth = 1, n.strokeRect(c + r * .35, s, r * .3, A), n.strokeRect(c, s + A * .25, r, A * .2);
            break
        }
        case "ceiling_spike": {
            const p = n.createLinearGradient(c, s, c + r / 2, s + A);
            p.addColorStop(0, "#cc2222"), p.addColorStop(1, "#ff4444"), n.fillStyle = p, n.beginPath(), n.moveTo(c, s), n.lineTo(c + r / 2, s + A), n.lineTo(c + r, s), n.closePath(), n.fill();
            break
        }
        case "tesla_coil": {
            n.fillStyle = "#2a1a4a", n.fillRect(c, s, r, A), n.fillStyle = "#4a3a7a", n.fillRect(c + 4, s, r - 8, A - 20), n.strokeStyle = "#8866cc", n.lineWidth = 2;
            for (let N = 0; N < 5; N++) {
                const Y = s + A - 20 - N * 12;
                n.beginPath(), n.ellipse(c + r / 2, Y, r / 2 - 2, 4, 0, 0, Math.PI * 2), n.stroke()
            }
            const p = Math.sin(g * .2) * .5 + .5,
                M = n.createRadialGradient(c + r / 2, s, 2, c + r / 2, s, 16);
            if (M.addColorStop(0, `rgba(200,150,255,${.8+p*.2})`), M.addColorStop(.5, `rgba(140,80,255,${.5+p*.3})`), M.addColorStop(1, "rgba(80,0,200,0)"), n.fillStyle = M, n.fillRect(c + r / 2 - 16, s - 16, 32, 32), n.beginPath(), n.arc(c + r / 2, s, 7, 0, Math.PI * 2), n.fillStyle = `rgba(220,180,255,${.8+p*.2})`, n.fill(), p > .5) {
                n.strokeStyle = `rgba(200,160,255,${(p-.5)*1.5})`, n.lineWidth = 1.5;
                for (let N = 0; N < 3; N++) {
                    n.beginPath(), n.moveTo(c + r / 2, s);
                    const Y = c + r / 2 + Math.sin(g * .4 + N * 2) * 18,
                        x = s - 12 - N * 8;
                    n.lineTo(Y, x), n.stroke()
                }
            }
            break
        }
        case "ice_spike": {
            const p = n.createLinearGradient(c, s + A, c + r / 2, s);
            p.addColorStop(0, "rgba(140,200,255,0.9)"), p.addColorStop(.5, "rgba(200,235,255,0.7)"), p.addColorStop(1, "rgba(240,250,255,0.4)"), n.fillStyle = p, n.beginPath(), n.moveTo(c, s + A), n.lineTo(c + r / 2, s), n.lineTo(c + r, s + A), n.closePath(), n.fill(), n.strokeStyle = "rgba(255,255,255,0.6)", n.lineWidth = 1, n.beginPath(), n.moveTo(c + r * .3, s + A * .8), n.lineTo(c + r / 2, s + 4), n.stroke(), n.beginPath(), n.moveTo(c + r * .6, s + A * .7), n.lineTo(c + r / 2, s + 4), n.stroke(), n.strokeStyle = "rgba(180,220,255,0.8)", n.lineWidth = 1.5, n.beginPath(), n.moveTo(c, s + A), n.lineTo(c + r / 2, s), n.lineTo(c + r, s + A), n.stroke(), n.globalAlpha = .15 + Math.sin(g * .09) * .08, n.fillStyle = "#aaddff", n.fillRect(c - 4, s, r + 8, A), n.globalAlpha = 1;
            break
        }
        case "mushroom": {
            const p = c + r * .3,
                M = r * .4;
            n.fillStyle = "#8a7a6a", n.fillRect(p, s + A * .5, M, A * .5), n.fillStyle = "#7a6a5a", n.fillRect(p + 2, s + A * .5, M - 4, A * .5);
            const N = n.createRadialGradient(c + r / 2, s + A * .35, 4, c + r / 2, s + A * .45, r / 2 + 6);
            N.addColorStop(0, "#9a5a9a"), N.addColorStop(.6, "#7a3a7a"), N.addColorStop(1, "#5a1a5a"), n.fillStyle = N, n.beginPath(), n.ellipse(c + r / 2, s + A * .48, r / 2 + 4, A * .45, 0, Math.PI, 0), n.closePath(), n.fill(), n.fillStyle = "rgba(255,220,200,0.5)", n.beginPath(), n.arc(c + r * .3, s + A * .28, 4, 0, Math.PI * 2), n.fill(), n.beginPath(), n.arc(c + r * .65, s + A * .25, 3, 0, Math.PI * 2), n.fill(), n.beginPath(), n.arc(c + r * .5, s + A * .18, 2.5, 0, Math.PI * 2), n.fill();
            const Y = .15 + Math.sin(g * .08) * .1;
            n.fillStyle = `rgba(120,255,80,${Y})`, n.fillRect(c - 2, s, r + 4, A);
            break
        }
    }
    n.restore()
}

function Mc(n, y, g) {
    const c = g.groundColor,
        s = n.createLinearGradient(0, X, 0, I);
    s.addColorStop(0, c), s.addColorStop(1, "rgba(0,0,0,0.8)"), n.fillStyle = s, n.fillRect(0, X, C, I - X), n.strokeStyle = "rgba(255,255,255,0.12)", n.lineWidth = 1, n.beginPath(), n.moveTo(0, X), n.lineTo(C, X), n.stroke(), n.strokeStyle = "rgba(0,0,0,0.2)", n.lineWidth = 1;
    for (let r = -(y.groundOffset % 60); r < C; r += 60) n.beginPath(), n.moveTo(r, X), n.lineTo(r, I), n.stroke()
}

function l2(n, y) {
    for (let g = 0; g < y.trail.length; g++) {
        const c = y.trail[g],
            s = Al * (1 - g / y.trail.length) * .7;
        n.save(), n.globalAlpha = c.alpha * .45, n.fillStyle = "#7ab88a", n.fillRect(c.x + (Al - s) / 2, c.y + (Al - s) / 2, s, s), n.restore()
    }
}

function e2(n, y) {
    const g = Al;
    n.save(), n.translate(y.px + g / 2, y.py + g / 2), n.rotate(y.prot * Math.PI / 180), n.scale(y.scaleX ?? 1, y.scaleY ?? 1);
    const c = g + 12 + Math.sin(y.tick * .1) * 3,
        s = n.createRadialGradient(0, 0, 2, 0, 0, c);
    s.addColorStop(0, "rgba(100,220,140,0.35)"), s.addColorStop(1, "rgba(100,220,140,0)"), n.fillStyle = s, n.fillRect(-c, -c, c * 2, c * 2), n.fillStyle = "#5a9a6a", n.fillRect(-g / 2, -g / 2, g, g), n.fillStyle = "#7ab88a", n.fillRect(-g / 2 + 2, -g / 2 + 2, g - 4, g - 4), n.fillStyle = "#cc4444", n.fillRect(-6, -10, 12, 2), n.fillRect(-2, -14, 4, 10);
    const r = .7 + Math.sin(y.tick * .07) * .3;
    n.fillStyle = `rgba(0,255,200,${r})`, n.fillRect(-9, -6, 6, 6), n.fillRect(3, -6, 6, 6), n.fillStyle = "#aaa", n.fillRect(-g / 2 - 5, -5, 6, 9), n.fillRect(g / 2 - 1, -5, 6, 9), n.strokeStyle = "#aaddaa", n.lineWidth = 1.5, n.strokeRect(-g / 2 + 1, -g / 2 + 1, g - 2, g - 2), n.restore()
}

function t2(n, y) {
    for (const g of y.particles) {
        const c = g.life / g.maxLife;
        n.save(), n.globalAlpha = c, n.fillStyle = g.color, n.translate(g.x, g.y), n.rotate(g.spin * y.tick), n.fillRect(-g.size / 2, -g.size / 2, g.size, g.size), n.restore()
    }
}

function a2(n, y, g) {
    n.save(), n.fillStyle = "rgba(0,0,0,0.55)", n.fillRect(0, 0, C, 30), n.fillStyle = "#7ab88a", n.font = "bold 12px monospace", n.fillText(`${g.name}: ${g.subtitle}`, 12, 19), n.fillStyle = "#ffee00", n.font = "bold 13px monospace", n.textAlign = "right", n.fillText(`${y.percentage}%`, C - 12, 19), n.textAlign = "left", y.collectiblesGot > 0 && (n.fillStyle = "#ffee44", n.font = "10px monospace", n.textAlign = "center", n.fillText(`⚡ ×${y.collectiblesGot}`, C / 2, 19), n.textAlign = "left"), n.fillStyle = "rgba(0,0,0,0.6)", n.fillRect(0, I - 14, C, 14), n.fillStyle = "#7ab88a", n.fillRect(0, I - 14, y.percentage / 100 * C, 14), n.fillStyle = "rgba(255,255,255,0.3)", n.fillRect(0, I - 14, y.percentage / 100 * C, 3);
    for (const c of mt) {
        const r = c.distanceThreshold / Du * C;
        n.fillStyle = "rgba(255,255,255,0.4)", n.fillRect(r - 1, I - 14, 2, 14)
    }
    if (n.fillStyle = "rgba(255,255,255,0.45)", n.font = "9px monospace", n.fillText(`Attempt ${y.totalAttempts+1}`, 12, I - 18), y.bestScore > 0) {
        const c = Math.min(100, Math.floor(y.bestScore / Du * 100));
        n.textAlign = "right", n.fillText(`Best: ${c}%`, C - 12, I - 18), n.textAlign = "left"
    }
    n.restore()
}

function u2(n, y) {
    const g = 1 - y.deathTimer / 65;
    if (n.fillStyle = `rgba(140,0,0,${g*.38})`, n.fillRect(0, 0, C, I), y.deathTimer < 45) {
        n.save();
        const c = 1 - y.deathTimer / 45;
        n.globalAlpha = Math.min(1, c * 2.5), n.fillStyle = "rgba(0,0,0,0.28M+)", n.fillRect(C / 2 - 200, I / 2 - 46, 400, 92), n.strokeStyle = "#ff3333", n.lineWidth = 2, n.strokeRect(C / 2 - 200, I / 2 - 46, 400, 92), n.fillStyle = "#ff4444", n.font = "bold 20px monospace", n.textAlign = "center", n.fillText("THE MONSTER FALLS", C / 2, I / 2 - 14), n.fillStyle = `rgba(255,180,100,${Math.floor(y.tick/12)%2===0?1:.5})`, n.font = "10px monospace", n.fillText("Press SPACE or click to try again", C / 2, I / 2 + 16), n.fillStyle = "#888", n.font = "9px monospace", n.fillText(`${y.percentage}% reached`, C / 2, I / 2 + 34), n.textAlign = "left", n.restore()
    }
}

function n2(n, y) {
    const g = y.tick,
        c = n.createLinearGradient(0, 0, 0, I);
    c.addColorStop(0, "#050510"), c.addColorStop(1, "#0a0520"), n.fillStyle = c, n.fillRect(0, 0, C, I);
    for (let A = 0; A < 60; A++) {
        const _ = A * 137.5 % C,
            p = A * 89.3 % I;
        n.globalAlpha = (Math.sin(g * .04 + A) + 1) * .4, n.fillStyle = "rgba(255,255,255,0.6)", n.fillRect(_, p, 2, 2)
    }
    if (n.globalAlpha = 1, Math.floor(g / 60) % 3 === 0) {
        n.strokeStyle = "rgba(160,120,255,0.4)", n.lineWidth = 2, n.beginPath(), n.moveTo(C / 2, 20);
        for (let A = 20; A < 120; A += 15) n.lineTo(C / 2 + Math.sin(g * .3 + A) * 20, A);
        n.stroke()
    }
    n.fillStyle = "rgba(0,0,0,0.75)", n.fillRect(C / 2 - 300, 30, 600, 95), n.strokeStyle = "#7ab88a", n.lineWidth = 2, n.strokeRect(C / 2 - 300, 30, 600, 95), n.fillStyle = "#7ab88a", n.font = "bold 26px monospace", n.textAlign = "center", n.shadowColor = "#00ff80", n.shadowBlur = 14, n.fillText("FRANKENSTEIN'S DASH", C / 2, 28 M + ), n.shadowBlur = 0, n.fillStyle = "#ccffcc", n.font = "11px monospace", n.fillText("A Geometry Dash × Mary Shelley Adventure", C / 2, 98), n.fillText("5 Chapters • The Monster's Journey", C / 2, 116), n.fillStyle = "rgba(0,0,0,0.65)", n.fillRect(C / 2 - 300, 142, 600, 120);
    const s = ['"I had worked hard for nearly two years,', "for the sole purpose of infusing life", 'into an inanimate body."', "", "You ARE that body. Run. Survive.", "Prove your creator right."];
    n.font = "10px monospace", s.forEach((A, _) => {
        n.fillStyle = _ < 3 ? "rgba(200,220,200,0.8)" : "#aaffaa", n.fillText(A, C / 2, 165 + _ * 17)
    }), n.fillStyle = "rgba(0,0,0,0.6)", n.fillRect(C / 2 - 220, 276, 440, 44), n.fillStyle = "#ffee88", n.font = "10px monospace", n.fillText("SPACE / Click = Jump    Double jump available!", C / 2, 296), n.fillStyle = "rgba(180,230,180,0.7)", n.font = "9px monospace", n.fillText("Collect ⚡ lightning bolts for bonus points", C / 2, 312), Math.floor(g / 25) % 2 === 0 && (n.fillStyle = "#ffee00", n.font = "bold 12px monospace", n.fillText("PRESS SPACE or CLICK TO BEGIN", C / 2, 358)), n.fillStyle = "#555", n.font = "8px monospace", n.fillText("Based on Mary Shelley's Frankenstein (1818)", C / 2, I - 10), n.textAlign = "left", n.shadowBlur = 0
}

function f2(n, y) {
    const g = mt[y.chapterIndex],
        c = Math.min(1, y.chapterIntroTimer > 120 ? (150 - y.chapterIntroTimer) / 30 : y.chapterIntroTimer / 30);
    n.save(), n.globalAlpha = c, n.fillStyle = "rgba(0,0,0,0.78)", n.fillRect(C / 2 - 320, I / 2 - 85, 640, 170), n.strokeStyle = "#7ab88a", n.lineWidth = 2, n.strokeRect(C / 2 - 320, I / 2 - 85, 640, 170), n.fillStyle = "#7ab88a", n.font = "bold 18px monospace", n.textAlign = "center", n.fillText(g.name, C / 2, I / 2 - 50), n.fillStyle = "#ffffff", n.font = "bold 13px monospace", n.fillText(g.subtitle, C / 2, I / 2 - 22), n.fillStyle = "rgba(180,220,180,0.85)", n.font = "9px monospace", (g.quote.match(/.{1,55}(\s|$)/g) ?? [g.quote]).forEach((r, A) => n.fillText(r.trim(), C / 2, I / 2 + 8 + A * 14)), n.fillStyle = "rgba(255,238,0,0.6)", n.font = "9px monospace", n.fillText("Collect ⚡ lightning bolts for bonus score!", C / 2, I / 2 + 60), n.textAlign = "left", n.restore()
}

function i2(n, y) {
    n.save(), n.fillStyle = "rgba(0,0,0,0.85)", n.fillRect(0, 0, C, I), n.fillStyle = "#7ab88a", n.font = "bold 22px monospace", n.textAlign = "center", n.shadowColor = "#00ff80", n.shadowBlur = 20, n.fillText("IT'S ALIVE! IT'S ALIVE!", C / 2, 110), n.shadowBlur = 0, n.fillStyle = "#ffee00", n.font = "13px monospace", n.fillText("THE CREATURE IS COMPLETE", C / 2, 148), n.fillStyle = "#fff", n.font = "bold 14px monospace", n.fillText(`FINAL SCORE: ${y.score.toLocaleString()}`, C / 2, 186), n.fillStyle = "#ffee44", n.font = "11px monospace", n.fillText(`⚡ Lightning bolts collected: ${y.collectiblesGot}`, C / 2, 208), n.fillStyle = "rgba(180,220,180,0.85)", n.font = "9px monospace", ['"I had worked hard for nearly two years,', "for the sole purpose of infusing life into an inanimate body.", "My limbs now trembled, and my eyes swam with the remembrance", 'of what I had suffered."', "", "— Mary Shelley, Frankenstein (1818)"].forEach((s, r) => n.fillText(s, C / 2, 238 + r * 14)), Math.floor(y.tick / 25) % 2 === 0 && (n.fillStyle = "#aaffaa", n.font = "11px monospace", n.fillText("PRESS SPACE or CLICK to play again", C / 2, 358)), n.textAlign = "left", n.shadowBlur = 0, n.restore()
}

function Gr(n) {
    return D1(n ? Math.max(n.bestScore, n.distance) : 0, n ? n.totalAttempts : 0)
}

function c2() {
    const n = ve.useRef(null),
        y = ve.useRef(Gr()),
        g = ve.useRef(0),
        c = ve.useRef(!1),
        s = ve.useRef(!1),
        r = ve.useRef(!1),
        [A, _] = ve.useState(!1),
        p = ve.useCallback(() => {
            const Y = y.current,
                x = Gr(Y);
            x.phase = "playing", y.current = x
        }, []),
        M = ve.useCallback(() => {
            const Y = y.current;
            if (Y.phase === "title") {
                Y.phase = "playing", Nr();
                return
            }
            if (Y.phase === "dead") {
                Y.deathTimer < 60 && p();
                return
            }
            if (Y.phase === "victory") {
                p();
                return
            }(Y.phase === "playing" || Y.phase === "chapter_intro") && k1(Y)
        }, [p]);
    ve.useEffect(() => {
        const Y = fl => {
                (fl.code === "Space" || fl.code === "ArrowUp" || fl.code === "KeyW") && (fl.preventDefault(), c.current || (s.current = !0, M()), c.current = !0), fl.code === "KeyM" && (r.current = !r.current, _(r.current), Hr(r.current ? 0 : .18))
            },
            x = fl => {
                (fl.code === "Space" || fl.code === "ArrowUp" || fl.code === "KeyW") && (c.current = !1, s.current = !1)
            };
        return window.addEventListener("keydown", Y), window.addEventListener("keyup", x), () => {
            window.removeEventListener("keydown", Y), window.removeEventListener("keyup", x)
        }
    }, [M]), ve.useEffect(() => {
        const Y = n.current;
        if (!Y) return;
        const x = Y.getContext("2d"),
            fl = () => {
                g.current = requestAnimationFrame(fl);
                const _l = y.current;
                X1(_l, c.current), Q1(x, _l)
            };
        return g.current = requestAnimationFrame(fl), () => {
            cancelAnimationFrame(g.current), H1()
        }
    }, []);
    const N = ve.useCallback(() => {
        n.current?.focus(), y.current.phase === "title" && Nr(), M()
    }, [M]);
    return Qt.jsxs("div", {
        id: "game-container",
        style: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#050510",
            overflow: "hidden",
            userSelect: "none"
        },
        children: [Qt.jsxs("div", {
            style: {
                position: "relative"
            },
            children: [Qt.jsx("canvas", {
                ref: n,
                width: C,
                height: I,
                onClick: N,
                tabIndex: 0,
                style: {
                    outline: "none",
                    cursor: "pointer",
                    display: "block",
                    border: "2px solid #2a4a2a",
                    boxShadow: "0 0 50px rgba(0,200,80,0.25), 0 0 120px rgba(0,80,40,0.12)",
                    imageRendering: "pixelated"
                }
            }), Qt.jsx("button", {
                onClick: Y => {
                    Y.stopPropagation(), r.current = !r.current, _(r.current), Hr(r.current ? 0 : .18)
                },
                style: {
                    position: "absolute",
                    top: 34,
                    right: 8,
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid #4a7a4a",
                    color: A ? "#666" : "#7ab88a",
                    fontFamily: "monospace",
                    fontSize: 10,
                    padding: "3px 8px",
                    cursor: "pointer",
                    borderRadius: 3
                },
                children: A ? "🔇 M" : "🔊 M"
            })]
        }), Qt.jsx("div", {
            style: {
                marginTop: 10,
                fontFamily: "monospace",
                fontSize: 9,
                color: "rgba(100,180,100,0.5)",
                letterSpacing: 1
            },
            children: "SPACE / CLICK = JUMP  |  DOUBLE JUMP AVAILABLE  |  M = MUTE"
        })]
    })
}

function o2() {
    return Qt.jsx(c2, {})
}
b1.createRoot(document.getElementById("root")).render(Qt.jsx(o2, {}));
