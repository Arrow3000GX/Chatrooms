(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const l of s.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function bc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Tu = {
    exports: {}
}
  , gi = {}
  , ju = {
    exports: {}
}
  , R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = Symbol.for("react.element")
  , ef = Symbol.for("react.portal")
  , tf = Symbol.for("react.fragment")
  , nf = Symbol.for("react.strict_mode")
  , rf = Symbol.for("react.profiler")
  , sf = Symbol.for("react.provider")
  , lf = Symbol.for("react.context")
  , of = Symbol.for("react.forward_ref")
  , uf = Symbol.for("react.suspense")
  , af = Symbol.for("react.memo")
  , cf = Symbol.for("react.lazy")
  , fo = Symbol.iterator;
function ff(e) {
    return e === null || typeof e != "object" ? null : (e = fo && e[fo] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Pu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Ru = Object.assign
  , Lu = {};
function dn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Lu,
    this.updater = n || Pu
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
dn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ou() {}
Ou.prototype = dn.prototype;
function fl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Lu,
    this.updater = n || Pu
}
var dl = fl.prototype = new Ou;
dl.constructor = fl;
Ru(dl, dn.prototype);
dl.isPureReactComponent = !0;
var po = Array.isArray
  , zu = Object.prototype.hasOwnProperty
  , pl = {
    current: null
}
  , Au = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Du(e, t, n) {
    var r, i = {}, s = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            zu.call(t, r) && !Au.hasOwnProperty(r) && (i[r] = t[r]);
    var o = arguments.length - 2;
    if (o === 1)
        i.children = n;
    else if (1 < o) {
        for (var u = Array(o), f = 0; f < o; f++)
            u[f] = arguments[f + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in o = e.defaultProps,
        o)
            i[r] === void 0 && (i[r] = o[r]);
    return {
        $$typeof: sr,
        type: e,
        key: s,
        ref: l,
        props: i,
        _owner: pl.current
    }
}
function df(e, t) {
    return {
        $$typeof: sr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function hl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sr
}
function pf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ho = /\/+/g;
function Mi(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? pf("" + e.key) : t.toString(36)
}
function Lr(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (s) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case sr:
            case ef:
                l = !0
            }
        }
    if (l)
        return l = e,
        i = i(l),
        e = r === "" ? "." + Mi(l, 0) : r,
        po(i) ? (n = "",
        e != null && (n = e.replace(ho, "$&/") + "/"),
        Lr(i, t, n, "", function(f) {
            return f
        })) : i != null && (hl(i) && (i = df(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(ho, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    po(e))
        for (var o = 0; o < e.length; o++) {
            s = e[o];
            var u = r + Mi(s, o);
            l += Lr(s, t, n, u, i)
        }
    else if (u = ff(e),
    typeof u == "function")
        for (e = u.call(e),
        o = 0; !(s = e.next()).done; )
            s = s.value,
            u = r + Mi(s, o++),
            l += Lr(s, t, n, u, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function dr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Lr(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function hf(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ce = {
    current: null
}
  , Or = {
    transition: null
}
  , mf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Or,
    ReactCurrentOwner: pl
};
function Bu() {
    throw Error("act(...) is not supported in production builds of React.")
}
R.Children = {
    map: dr,
    forEach: function(e, t, n) {
        dr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return dr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return dr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!hl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
R.Component = dn;
R.Fragment = tf;
R.Profiler = rf;
R.PureComponent = fl;
R.StrictMode = nf;
R.Suspense = uf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mf;
R.act = Bu;
R.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ru({}, e.props)
      , i = e.key
      , s = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        l = pl.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var o = e.type.defaultProps;
        for (u in t)
            zu.call(t, u) && !Au.hasOwnProperty(u) && (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        o = Array(u);
        for (var f = 0; f < u; f++)
            o[f] = arguments[f + 2];
        r.children = o
    }
    return {
        $$typeof: sr,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: l
    }
}
;
R.createContext = function(e) {
    return e = {
        $$typeof: lf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: sf,
        _context: e
    },
    e.Consumer = e
}
;
R.createElement = Du;
R.createFactory = function(e) {
    var t = Du.bind(null, e);
    return t.type = e,
    t
}
;
R.createRef = function() {
    return {
        current: null
    }
}
;
R.forwardRef = function(e) {
    return {
        $$typeof: of,
        render: e
    }
}
;
R.isValidElement = hl;
R.lazy = function(e) {
    return {
        $$typeof: cf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: hf
    }
}
;
R.memo = function(e, t) {
    return {
        $$typeof: af,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
R.startTransition = function(e) {
    var t = Or.transition;
    Or.transition = {};
    try {
        e()
    } finally {
        Or.transition = t
    }
}
;
R.unstable_act = Bu;
R.useCallback = function(e, t) {
    return ce.current.useCallback(e, t)
}
;
R.useContext = function(e) {
    return ce.current.useContext(e)
}
;
R.useDebugValue = function() {}
;
R.useDeferredValue = function(e) {
    return ce.current.useDeferredValue(e)
}
;
R.useEffect = function(e, t) {
    return ce.current.useEffect(e, t)
}
;
R.useId = function() {
    return ce.current.useId()
}
;
R.useImperativeHandle = function(e, t, n) {
    return ce.current.useImperativeHandle(e, t, n)
}
;
R.useInsertionEffect = function(e, t) {
    return ce.current.useInsertionEffect(e, t)
}
;
R.useLayoutEffect = function(e, t) {
    return ce.current.useLayoutEffect(e, t)
}
;
R.useMemo = function(e, t) {
    return ce.current.useMemo(e, t)
}
;
R.useReducer = function(e, t, n) {
    return ce.current.useReducer(e, t, n)
}
;
R.useRef = function(e) {
    return ce.current.useRef(e)
}
;
R.useState = function(e) {
    return ce.current.useState(e)
}
;
R.useSyncExternalStore = function(e, t, n) {
    return ce.current.useSyncExternalStore(e, t, n)
}
;
R.useTransition = function() {
    return ce.current.useTransition()
}
;
R.version = "18.3.1";
ju.exports = R;
var Y = ju.exports;
const gf = bc(Y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf = Y
  , vf = Symbol.for("react.element")
  , wf = Symbol.for("react.fragment")
  , xf = Object.prototype.hasOwnProperty
  , kf = yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Sf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Mu(e, t, n) {
    var r, i = {}, s = null, l = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        xf.call(t, r) && !Sf.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: vf,
        type: e,
        key: s,
        ref: l,
        props: i,
        _owner: kf.current
    }
}
gi.Fragment = wf;
gi.jsx = Mu;
gi.jsxs = Mu;
Tu.exports = gi;
var a = Tu.exports
  , ds = {}
  , Iu = {
    exports: {}
}
  , ke = {}
  , Fu = {
    exports: {}
}
  , Uu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, j) {
        var P = E.length;
        E.push(j);
        e: for (; 0 < P; ) {
            var Q = P - 1 >>> 1
              , Z = E[Q];
            if (0 < i(Z, j))
                E[Q] = j,
                E[P] = Z,
                P = Q;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var j = E[0]
          , P = E.pop();
        if (P !== j) {
            E[0] = P;
            e: for (var Q = 0, Z = E.length, cr = Z >>> 1; Q < cr; ) {
                var _t = 2 * (Q + 1) - 1
                  , Bi = E[_t]
                  , Et = _t + 1
                  , fr = E[Et];
                if (0 > i(Bi, P))
                    Et < Z && 0 > i(fr, Bi) ? (E[Q] = fr,
                    E[Et] = P,
                    Q = Et) : (E[Q] = Bi,
                    E[_t] = P,
                    Q = _t);
                else if (Et < Z && 0 > i(fr, P))
                    E[Q] = fr,
                    E[Et] = P,
                    Q = Et;
                else
                    break e
            }
        }
        return j
    }
    function i(E, j) {
        var P = E.sortIndex - j.sortIndex;
        return P !== 0 ? P : E.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var l = Date
          , o = l.now();
        e.unstable_now = function() {
            return l.now() - o
        }
    }
    var u = []
      , f = []
      , h = 1
      , g = null
      , m = 3
      , x = !1
      , w = !1
      , k = !1
      , A = typeof setTimeout == "function" ? setTimeout : null
      , d = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(E) {
        for (var j = n(f); j !== null; ) {
            if (j.callback === null)
                r(f);
            else if (j.startTime <= E)
                r(f),
                j.sortIndex = j.expirationTime,
                t(u, j);
            else
                break;
            j = n(f)
        }
    }
    function y(E) {
        if (k = !1,
        p(E),
        !w)
            if (n(u) !== null)
                w = !0,
                Ai(_);
            else {
                var j = n(f);
                j !== null && Di(y, j.startTime - E)
            }
    }
    function _(E, j) {
        w = !1,
        k && (k = !1,
        d(T),
        T = -1),
        x = !0;
        var P = m;
        try {
            for (p(j),
            g = n(u); g !== null && (!(g.expirationTime > j) || E && !Re()); ) {
                var Q = g.callback;
                if (typeof Q == "function") {
                    g.callback = null,
                    m = g.priorityLevel;
                    var Z = Q(g.expirationTime <= j);
                    j = e.unstable_now(),
                    typeof Z == "function" ? g.callback = Z : g === n(u) && r(u),
                    p(j)
                } else
                    r(u);
                g = n(u)
            }
            if (g !== null)
                var cr = !0;
            else {
                var _t = n(f);
                _t !== null && Di(y, _t.startTime - j),
                cr = !1
            }
            return cr
        } finally {
            g = null,
            m = P,
            x = !1
        }
    }
    var N = !1
      , C = null
      , T = -1
      , W = 5
      , L = -1;
    function Re() {
        return !(e.unstable_now() - L < W)
    }
    function gn() {
        if (C !== null) {
            var E = e.unstable_now();
            L = E;
            var j = !0;
            try {
                j = C(!0, E)
            } finally {
                j ? yn() : (N = !1,
                C = null)
            }
        } else
            N = !1
    }
    var yn;
    if (typeof c == "function")
        yn = function() {
            c(gn)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var co = new MessageChannel
          , Zc = co.port2;
        co.port1.onmessage = gn,
        yn = function() {
            Zc.postMessage(null)
        }
    } else
        yn = function() {
            A(gn, 0)
        }
        ;
    function Ai(E) {
        C = E,
        N || (N = !0,
        yn())
    }
    function Di(E, j) {
        T = A(function() {
            E(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        Ai(_))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(E) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var j = 3;
            break;
        default:
            j = m
        }
        var P = m;
        m = j;
        try {
            return E()
        } finally {
            m = P
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, j) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var P = m;
        m = E;
        try {
            return j()
        } finally {
            m = P
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, j, P) {
        var Q = e.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay,
        P = typeof P == "number" && 0 < P ? Q + P : Q) : P = Q,
        E) {
        case 1:
            var Z = -1;
            break;
        case 2:
            Z = 250;
            break;
        case 5:
            Z = 1073741823;
            break;
        case 4:
            Z = 1e4;
            break;
        default:
            Z = 5e3
        }
        return Z = P + Z,
        E = {
            id: h++,
            callback: j,
            priorityLevel: E,
            startTime: P,
            expirationTime: Z,
            sortIndex: -1
        },
        P > Q ? (E.sortIndex = P,
        t(f, E),
        n(u) === null && E === n(f) && (k ? (d(T),
        T = -1) : k = !0,
        Di(y, P - Q))) : (E.sortIndex = Z,
        t(u, E),
        w || x || (w = !0,
        Ai(_))),
        E
    }
    ,
    e.unstable_shouldYield = Re,
    e.unstable_wrapCallback = function(E) {
        var j = m;
        return function() {
            var P = m;
            m = j;
            try {
                return E.apply(this, arguments)
            } finally {
                m = P
            }
        }
    }
}
)(Uu);
Fu.exports = Uu;
var _f = Fu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ef = Y
  , xe = _f;
function v(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Vu = new Set
  , $n = {};
function Mt(e, t) {
    sn(e, t),
    sn(e + "Capture", t)
}
function sn(e, t) {
    for ($n[e] = t,
    e = 0; e < t.length; e++)
        Vu.add(t[e])
}
var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ps = Object.prototype.hasOwnProperty
  , Nf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , mo = {}
  , go = {};
function Cf(e) {
    return ps.call(go, e) ? !0 : ps.call(mo, e) ? !1 : Nf.test(e) ? go[e] = !0 : (mo[e] = !0,
    !1)
}
function Tf(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function jf(e, t, n, r) {
    if (t === null || typeof t > "u" || Tf(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function fe(e, t, n, r, i, s, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = l
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    re[e] = new fe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    re[t] = new fe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    re[e] = new fe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    re[e] = new fe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    re[e] = new fe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    re[e] = new fe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    re[e] = new fe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    re[e] = new fe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    re[e] = new fe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ml = /[\-:]([a-z])/g;
function gl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ml, gl);
    re[t] = new fe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ml, gl);
    re[t] = new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ml, gl);
    re[t] = new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    re[e] = new fe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
re.xlinkHref = new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    re[e] = new fe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function yl(e, t, n, r) {
    var i = re.hasOwnProperty(t) ? re[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jf(t, n, i, r) && (n = null),
    r || i === null ? Cf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var tt = Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , pr = Symbol.for("react.element")
  , Ut = Symbol.for("react.portal")
  , Vt = Symbol.for("react.fragment")
  , vl = Symbol.for("react.strict_mode")
  , hs = Symbol.for("react.profiler")
  , $u = Symbol.for("react.provider")
  , Hu = Symbol.for("react.context")
  , wl = Symbol.for("react.forward_ref")
  , ms = Symbol.for("react.suspense")
  , gs = Symbol.for("react.suspense_list")
  , xl = Symbol.for("react.memo")
  , rt = Symbol.for("react.lazy")
  , Wu = Symbol.for("react.offscreen")
  , yo = Symbol.iterator;
function vn(e) {
    return e === null || typeof e != "object" ? null : (e = yo && e[yo] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var $ = Object.assign, Ii;
function Tn(e) {
    if (Ii === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ii = t && t[1] || ""
        }
    return `
` + Ii + e
}
var Fi = !1;
function Ui(e, t) {
    if (!e || Fi)
        return "";
    Fi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (f) {
                    var r = f
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (f) {
                    r = f
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (f) {
                r = f
            }
            e()
        }
    } catch (f) {
        if (f && r && typeof f.stack == "string") {
            for (var i = f.stack.split(`
`), s = r.stack.split(`
`), l = i.length - 1, o = s.length - 1; 1 <= l && 0 <= o && i[l] !== s[o]; )
                o--;
            for (; 1 <= l && 0 <= o; l--,
            o--)
                if (i[l] !== s[o]) {
                    if (l !== 1 || o !== 1)
                        do
                            if (l--,
                            o--,
                            0 > o || i[l] !== s[o]) {
                                var u = `
` + i[l].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= l && 0 <= o);
                    break
                }
        }
    } finally {
        Fi = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Tn(e) : ""
}
function Pf(e) {
    switch (e.tag) {
    case 5:
        return Tn(e.type);
    case 16:
        return Tn("Lazy");
    case 13:
        return Tn("Suspense");
    case 19:
        return Tn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ui(e.type, !1),
        e;
    case 11:
        return e = Ui(e.type.render, !1),
        e;
    case 1:
        return e = Ui(e.type, !0),
        e;
    default:
        return ""
    }
}
function ys(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Vt:
        return "Fragment";
    case Ut:
        return "Portal";
    case hs:
        return "Profiler";
    case vl:
        return "StrictMode";
    case ms:
        return "Suspense";
    case gs:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Hu:
            return (e.displayName || "Context") + ".Consumer";
        case $u:
            return (e._context.displayName || "Context") + ".Provider";
        case wl:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case xl:
            return t = e.displayName || null,
            t !== null ? t : ys(e.type) || "Memo";
        case rt:
            t = e._payload,
            e = e._init;
            try {
                return ys(e(t))
            } catch {}
        }
    return null
}
function Rf(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ys(t);
    case 8:
        return t === vl ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function vt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Qu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Lf(e) {
    var t = Qu(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(l) {
                r = "" + l,
                s.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function hr(e) {
    e._valueTracker || (e._valueTracker = Lf(e))
}
function Ku(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Qu(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Kr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function vs(e, t) {
    var n = t.checked;
    return $({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function vo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = vt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Yu(e, t) {
    t = t.checked,
    t != null && yl(e, "checked", t, !1)
}
function ws(e, t) {
    Yu(e, t);
    var n = vt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? xs(e, t.type, n) : t.hasOwnProperty("defaultValue") && xs(e, t.type, vt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function wo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function xs(e, t, n) {
    (t !== "number" || Kr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var jn = Array.isArray;
function Zt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + vt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function ks(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(v(91));
    return $({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function xo(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(v(92));
            if (jn(n)) {
                if (1 < n.length)
                    throw Error(v(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: vt(n)
    }
}
function qu(e, t) {
    var n = vt(t.value)
      , r = vt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ko(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Gu(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ss(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Gu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var mr, Xu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (mr = mr || document.createElement("div"),
        mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = mr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Hn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var On = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Of = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function(e) {
    Of.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        On[t] = On[e]
    })
});
function Ju(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px"
}
function Zu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Ju(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var zf = $({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function _s(e, t) {
    if (t) {
        if (zf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(v(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(v(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(v(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(v(62))
    }
}
function Es(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
var Ns = null;
function kl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Cs = null
  , bt = null
  , en = null;
function So(e) {
    if (e = ur(e)) {
        if (typeof Cs != "function")
            throw Error(v(280));
        var t = e.stateNode;
        t && (t = ki(t),
        Cs(e.stateNode, e.type, t))
    }
}
function bu(e) {
    bt ? en ? en.push(e) : en = [e] : bt = e
}
function ea() {
    if (bt) {
        var e = bt
          , t = en;
        if (en = bt = null,
        So(e),
        t)
            for (e = 0; e < t.length; e++)
                So(t[e])
    }
}
function ta(e, t) {
    return e(t)
}
function na() {}
var Vi = !1;
function ra(e, t, n) {
    if (Vi)
        return e(t, n);
    Vi = !0;
    try {
        return ta(e, t, n)
    } finally {
        Vi = !1,
        (bt !== null || en !== null) && (na(),
        ea())
    }
}
function Wn(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ki(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(v(231, t, typeof n));
    return n
}
var Ts = !1;
if (Je)
    try {
        var wn = {};
        Object.defineProperty(wn, "passive", {
            get: function() {
                Ts = !0
            }
        }),
        window.addEventListener("test", wn, wn),
        window.removeEventListener("test", wn, wn)
    } catch {
        Ts = !1
    }
function Af(e, t, n, r, i, s, l, o, u) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, f)
    } catch (h) {
        this.onError(h)
    }
}
var zn = !1
  , Yr = null
  , qr = !1
  , js = null
  , Df = {
    onError: function(e) {
        zn = !0,
        Yr = e
    }
};
function Bf(e, t, n, r, i, s, l, o, u) {
    zn = !1,
    Yr = null,
    Af.apply(Df, arguments)
}
function Mf(e, t, n, r, i, s, l, o, u) {
    if (Bf.apply(this, arguments),
    zn) {
        if (zn) {
            var f = Yr;
            zn = !1,
            Yr = null
        } else
            throw Error(v(198));
        qr || (qr = !0,
        js = f)
    }
}
function It(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ia(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function _o(e) {
    if (It(e) !== e)
        throw Error(v(188))
}
function If(e) {
    var t = e.alternate;
    if (!t) {
        if (t = It(e),
        t === null)
            throw Error(v(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return _o(i),
                    e;
                if (s === r)
                    return _o(i),
                    t;
                s = s.sibling
            }
            throw Error(v(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var l = !1, o = i.child; o; ) {
                if (o === n) {
                    l = !0,
                    n = i,
                    r = s;
                    break
                }
                if (o === r) {
                    l = !0,
                    r = i,
                    n = s;
                    break
                }
                o = o.sibling
            }
            if (!l) {
                for (o = s.child; o; ) {
                    if (o === n) {
                        l = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (o === r) {
                        l = !0,
                        r = s,
                        n = i;
                        break
                    }
                    o = o.sibling
                }
                if (!l)
                    throw Error(v(189))
            }
        }
        if (n.alternate !== r)
            throw Error(v(190))
    }
    if (n.tag !== 3)
        throw Error(v(188));
    return n.stateNode.current === n ? e : t
}
function sa(e) {
    return e = If(e),
    e !== null ? la(e) : null
}
function la(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = la(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var oa = xe.unstable_scheduleCallback
  , Eo = xe.unstable_cancelCallback
  , Ff = xe.unstable_shouldYield
  , Uf = xe.unstable_requestPaint
  , K = xe.unstable_now
  , Vf = xe.unstable_getCurrentPriorityLevel
  , Sl = xe.unstable_ImmediatePriority
  , ua = xe.unstable_UserBlockingPriority
  , Gr = xe.unstable_NormalPriority
  , $f = xe.unstable_LowPriority
  , aa = xe.unstable_IdlePriority
  , yi = null
  , $e = null;
function Hf(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function")
        try {
            $e.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Kf
  , Wf = Math.log
  , Qf = Math.LN2;
function Kf(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Wf(e) / Qf | 0) | 0
}
var gr = 64
  , yr = 4194304;
function Pn(e) {
    switch (e & -e) {
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
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Xr(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var o = l & ~i;
        o !== 0 ? r = Pn(o) : (s &= l,
        s !== 0 && (r = Pn(s)))
    } else
        l = n & ~i,
        l !== 0 ? r = Pn(l) : s !== 0 && (r = Pn(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Be(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Yf(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function qf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var l = 31 - Be(s)
          , o = 1 << l
          , u = i[l];
        u === -1 ? (!(o & n) || o & r) && (i[l] = Yf(o, t)) : u <= t && (e.expiredLanes |= o),
        s &= ~o
    }
}
function Ps(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ca() {
    var e = gr;
    return gr <<= 1,
    !(gr & 4194240) && (gr = 64),
    e
}
function $i(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function lr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Be(t),
    e[t] = n
}
function Gf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Be(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function _l(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Be(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var D = 0;
function fa(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var da, El, pa, ha, ma, Rs = !1, vr = [], at = null, ct = null, ft = null, Qn = new Map, Kn = new Map, st = [], Xf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function No(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        at = null;
        break;
    case "dragenter":
    case "dragleave":
        ct = null;
        break;
    case "mouseover":
    case "mouseout":
        ft = null;
        break;
    case "pointerover":
    case "pointerout":
        Qn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Kn.delete(t.pointerId)
    }
}
function xn(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = ur(t),
    t !== null && El(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Jf(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return at = xn(at, e, t, n, r, i),
        !0;
    case "dragenter":
        return ct = xn(ct, e, t, n, r, i),
        !0;
    case "mouseover":
        return ft = xn(ft, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Qn.set(s, xn(Qn.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        Kn.set(s, xn(Kn.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function ga(e) {
    var t = Tt(e.target);
    if (t !== null) {
        var n = It(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ia(n),
                t !== null) {
                    e.blockedOn = t,
                    ma(e.priority, function() {
                        pa(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function zr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ls(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ns = r,
            n.target.dispatchEvent(r),
            Ns = null
        } else
            return t = ur(n),
            t !== null && El(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Co(e, t, n) {
    zr(e) && n.delete(t)
}
function Zf() {
    Rs = !1,
    at !== null && zr(at) && (at = null),
    ct !== null && zr(ct) && (ct = null),
    ft !== null && zr(ft) && (ft = null),
    Qn.forEach(Co),
    Kn.forEach(Co)
}
function kn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Rs || (Rs = !0,
    xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Zf)))
}
function Yn(e) {
    function t(i) {
        return kn(i, e)
    }
    if (0 < vr.length) {
        kn(vr[0], e);
        for (var n = 1; n < vr.length; n++) {
            var r = vr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (at !== null && kn(at, e),
    ct !== null && kn(ct, e),
    ft !== null && kn(ft, e),
    Qn.forEach(t),
    Kn.forEach(t),
    n = 0; n < st.length; n++)
        r = st[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < st.length && (n = st[0],
    n.blockedOn === null); )
        ga(n),
        n.blockedOn === null && st.shift()
}
var tn = tt.ReactCurrentBatchConfig
  , Jr = !0;
function bf(e, t, n, r) {
    var i = D
      , s = tn.transition;
    tn.transition = null;
    try {
        D = 1,
        Nl(e, t, n, r)
    } finally {
        D = i,
        tn.transition = s
    }
}
function ed(e, t, n, r) {
    var i = D
      , s = tn.transition;
    tn.transition = null;
    try {
        D = 4,
        Nl(e, t, n, r)
    } finally {
        D = i,
        tn.transition = s
    }
}
function Nl(e, t, n, r) {
    if (Jr) {
        var i = Ls(e, t, n, r);
        if (i === null)
            Zi(e, t, r, Zr, n),
            No(e, r);
        else if (Jf(i, e, t, n, r))
            r.stopPropagation();
        else if (No(e, r),
        t & 4 && -1 < Xf.indexOf(e)) {
            for (; i !== null; ) {
                var s = ur(i);
                if (s !== null && da(s),
                s = Ls(e, t, n, r),
                s === null && Zi(e, t, r, Zr, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            Zi(e, t, r, null, n)
    }
}
var Zr = null;
function Ls(e, t, n, r) {
    if (Zr = null,
    e = kl(r),
    e = Tt(e),
    e !== null)
        if (t = It(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ia(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Zr = e,
    null
}
function ya(e) {
    switch (e) {
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
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Vf()) {
        case Sl:
            return 1;
        case ua:
            return 4;
        case Gr:
        case $f:
            return 16;
        case aa:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var ot = null
  , Cl = null
  , Ar = null;
function va() {
    if (Ar)
        return Ar;
    var e, t = Cl, n = t.length, r, i = "value"in ot ? ot.value : ot.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === i[s - r]; r++)
        ;
    return Ar = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Dr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function wr() {
    return !0
}
function To() {
    return !1
}
function Se(e) {
    function t(n, r, i, s, l) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = l,
        this.currentTarget = null;
        for (var o in e)
            e.hasOwnProperty(o) && (n = e[o],
            this[o] = n ? n(s) : s[o]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wr : To,
        this.isPropagationStopped = To,
        this
    }
    return $(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = wr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = wr)
        },
        persist: function() {},
        isPersistent: wr
    }),
    t
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Tl = Se(pn), or = $({}, pn, {
    view: 0,
    detail: 0
}), td = Se(or), Hi, Wi, Sn, vi = $({}, or, {
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
    getModifierState: jl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Sn && (Sn && e.type === "mousemove" ? (Hi = e.screenX - Sn.screenX,
        Wi = e.screenY - Sn.screenY) : Wi = Hi = 0,
        Sn = e),
        Hi)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Wi
    }
}), jo = Se(vi), nd = $({}, vi, {
    dataTransfer: 0
}), rd = Se(nd), id = $({}, or, {
    relatedTarget: 0
}), Qi = Se(id), sd = $({}, pn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), ld = Se(sd), od = $({}, pn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), ud = Se(od), ad = $({}, pn, {
    data: 0
}), Po = Se(ad), cd = {
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
}, fd = {
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
}, dd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function pd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = dd[e]) ? !!t[e] : !1
}
function jl() {
    return pd
}
var hd = $({}, or, {
    key: function(e) {
        if (e.key) {
            var t = cd[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Dr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fd[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jl,
    charCode: function(e) {
        return e.type === "keypress" ? Dr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , md = Se(hd)
  , gd = $({}, vi, {
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
})
  , Ro = Se(gd)
  , yd = $({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jl
})
  , vd = Se(yd)
  , wd = $({}, pn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , xd = Se(wd)
  , kd = $({}, vi, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Sd = Se(kd)
  , _d = [9, 13, 27, 32]
  , Pl = Je && "CompositionEvent"in window
  , An = null;
Je && "documentMode"in document && (An = document.documentMode);
var Ed = Je && "TextEvent"in window && !An
  , wa = Je && (!Pl || An && 8 < An && 11 >= An)
  , Lo = " "
  , Oo = !1;
function xa(e, t) {
    switch (e) {
    case "keyup":
        return _d.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function ka(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var $t = !1;
function Nd(e, t) {
    switch (e) {
    case "compositionend":
        return ka(t);
    case "keypress":
        return t.which !== 32 ? null : (Oo = !0,
        Lo);
    case "textInput":
        return e = t.data,
        e === Lo && Oo ? null : e;
    default:
        return null
    }
}
function Cd(e, t) {
    if ($t)
        return e === "compositionend" || !Pl && xa(e, t) ? (e = va(),
        Ar = Cl = ot = null,
        $t = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return wa && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Td = {
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
function zo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Td[e.type] : t === "textarea"
}
function Sa(e, t, n, r) {
    bu(r),
    t = br(t, "onChange"),
    0 < t.length && (n = new Tl("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Dn = null
  , qn = null;
function jd(e) {
    za(e, 0)
}
function wi(e) {
    var t = Qt(e);
    if (Ku(t))
        return e
}
function Pd(e, t) {
    if (e === "change")
        return t
}
var _a = !1;
if (Je) {
    var Ki;
    if (Je) {
        var Yi = "oninput"in document;
        if (!Yi) {
            var Ao = document.createElement("div");
            Ao.setAttribute("oninput", "return;"),
            Yi = typeof Ao.oninput == "function"
        }
        Ki = Yi
    } else
        Ki = !1;
    _a = Ki && (!document.documentMode || 9 < document.documentMode)
}
function Do() {
    Dn && (Dn.detachEvent("onpropertychange", Ea),
    qn = Dn = null)
}
function Ea(e) {
    if (e.propertyName === "value" && wi(qn)) {
        var t = [];
        Sa(t, qn, e, kl(e)),
        ra(jd, t)
    }
}
function Rd(e, t, n) {
    e === "focusin" ? (Do(),
    Dn = t,
    qn = n,
    Dn.attachEvent("onpropertychange", Ea)) : e === "focusout" && Do()
}
function Ld(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return wi(qn)
}
function Od(e, t) {
    if (e === "click")
        return wi(t)
}
function zd(e, t) {
    if (e === "input" || e === "change")
        return wi(t)
}
function Ad(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ie = typeof Object.is == "function" ? Object.is : Ad;
function Gn(e, t) {
    if (Ie(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ps.call(t, i) || !Ie(e[i], t[i]))
            return !1
    }
    return !0
}
function Bo(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Mo(e, t) {
    var n = Bo(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Bo(n)
    }
}
function Na(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Na(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Ca() {
    for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Kr(e.document)
    }
    return t
}
function Rl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Dd(e) {
    var t = Ca()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Na(n.ownerDocument.documentElement, n)) {
        if (r !== null && Rl(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = Mo(n, s);
                var l = Mo(n, r);
                i && l && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Bd = Je && "documentMode"in document && 11 >= document.documentMode
  , Ht = null
  , Os = null
  , Bn = null
  , zs = !1;
function Io(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    zs || Ht == null || Ht !== Kr(r) || (r = Ht,
    "selectionStart"in r && Rl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Bn && Gn(Bn, r) || (Bn = r,
    r = br(Os, "onSelect"),
    0 < r.length && (t = new Tl("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Ht)))
}
function xr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Wt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd")
}
  , qi = {}
  , Ta = {};
Je && (Ta = document.createElement("div").style,
"AnimationEvent"in window || (delete Wt.animationend.animation,
delete Wt.animationiteration.animation,
delete Wt.animationstart.animation),
"TransitionEvent"in window || delete Wt.transitionend.transition);
function xi(e) {
    if (qi[e])
        return qi[e];
    if (!Wt[e])
        return e;
    var t = Wt[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ta)
            return qi[e] = t[n];
    return e
}
var ja = xi("animationend")
  , Pa = xi("animationiteration")
  , Ra = xi("animationstart")
  , La = xi("transitionend")
  , Oa = new Map
  , Fo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xt(e, t) {
    Oa.set(e, t),
    Mt(t, [e])
}
for (var Gi = 0; Gi < Fo.length; Gi++) {
    var Xi = Fo[Gi]
      , Md = Xi.toLowerCase()
      , Id = Xi[0].toUpperCase() + Xi.slice(1);
    xt(Md, "on" + Id)
}
xt(ja, "onAnimationEnd");
xt(Pa, "onAnimationIteration");
xt(Ra, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(La, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Fd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function Uo(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Mf(r, t, void 0, e),
    e.currentTarget = null
}
function za(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var o = r[l]
                      , u = o.instance
                      , f = o.currentTarget;
                    if (o = o.listener,
                    u !== s && i.isPropagationStopped())
                        break e;
                    Uo(i, o, f),
                    s = u
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (o = r[l],
                    u = o.instance,
                    f = o.currentTarget,
                    o = o.listener,
                    u !== s && i.isPropagationStopped())
                        break e;
                    Uo(i, o, f),
                    s = u
                }
        }
    }
    if (qr)
        throw e = js,
        qr = !1,
        js = null,
        e
}
function M(e, t) {
    var n = t[Is];
    n === void 0 && (n = t[Is] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Aa(t, e, 2, !1),
    n.add(r))
}
function Ji(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Aa(n, e, r, t)
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Xn(e) {
    if (!e[kr]) {
        e[kr] = !0,
        Vu.forEach(function(n) {
            n !== "selectionchange" && (Fd.has(n) || Ji(n, !1, e),
            Ji(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[kr] || (t[kr] = !0,
        Ji("selectionchange", !1, t))
    }
}
function Aa(e, t, n, r) {
    switch (ya(t)) {
    case 1:
        var i = bf;
        break;
    case 4:
        i = ed;
        break;
    default:
        i = Nl
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Ts || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Zi(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var o = r.stateNode.containerInfo;
                if (o === i || o.nodeType === 8 && o.parentNode === i)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var u = l.tag;
                        if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo,
                        u === i || u.nodeType === 8 && u.parentNode === i))
                            return;
                        l = l.return
                    }
                for (; o !== null; ) {
                    if (l = Tt(o),
                    l === null)
                        return;
                    if (u = l.tag,
                    u === 5 || u === 6) {
                        r = s = l;
                        continue e
                    }
                    o = o.parentNode
                }
            }
            r = r.return
        }
    ra(function() {
        var f = s
          , h = kl(n)
          , g = [];
        e: {
            var m = Oa.get(e);
            if (m !== void 0) {
                var x = Tl
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Dr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = md;
                    break;
                case "focusin":
                    w = "focus",
                    x = Qi;
                    break;
                case "focusout":
                    w = "blur",
                    x = Qi;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = Qi;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = jo;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = rd;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = vd;
                    break;
                case ja:
                case Pa:
                case Ra:
                    x = ld;
                    break;
                case La:
                    x = xd;
                    break;
                case "scroll":
                    x = td;
                    break;
                case "wheel":
                    x = Sd;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = ud;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = Ro
                }
                var k = (t & 4) !== 0
                  , A = !k && e === "scroll"
                  , d = k ? m !== null ? m + "Capture" : null : m;
                k = [];
                for (var c = f, p; c !== null; ) {
                    p = c;
                    var y = p.stateNode;
                    if (p.tag === 5 && y !== null && (p = y,
                    d !== null && (y = Wn(c, d),
                    y != null && k.push(Jn(c, y, p)))),
                    A)
                        break;
                    c = c.return
                }
                0 < k.length && (m = new x(m,w,null,n,h),
                g.push({
                    event: m,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                m && n !== Ns && (w = n.relatedTarget || n.fromElement) && (Tt(w) || w[Ze]))
                    break e;
                if ((x || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = f,
                w = w ? Tt(w) : null,
                w !== null && (A = It(w),
                w !== A || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = f),
                x !== w)) {
                    if (k = jo,
                    y = "onMouseLeave",
                    d = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = Ro,
                    y = "onPointerLeave",
                    d = "onPointerEnter",
                    c = "pointer"),
                    A = x == null ? m : Qt(x),
                    p = w == null ? m : Qt(w),
                    m = new k(y,c + "leave",x,n,h),
                    m.target = A,
                    m.relatedTarget = p,
                    y = null,
                    Tt(h) === f && (k = new k(d,c + "enter",w,n,h),
                    k.target = p,
                    k.relatedTarget = A,
                    y = k),
                    A = y,
                    x && w)
                        t: {
                            for (k = x,
                            d = w,
                            c = 0,
                            p = k; p; p = Ft(p))
                                c++;
                            for (p = 0,
                            y = d; y; y = Ft(y))
                                p++;
                            for (; 0 < c - p; )
                                k = Ft(k),
                                c--;
                            for (; 0 < p - c; )
                                d = Ft(d),
                                p--;
                            for (; c--; ) {
                                if (k === d || d !== null && k === d.alternate)
                                    break t;
                                k = Ft(k),
                                d = Ft(d)
                            }
                            k = null
                        }
                    else
                        k = null;
                    x !== null && Vo(g, m, x, k, !1),
                    w !== null && A !== null && Vo(g, A, w, k, !0)
                }
            }
            e: {
                if (m = f ? Qt(f) : window,
                x = m.nodeName && m.nodeName.toLowerCase(),
                x === "select" || x === "input" && m.type === "file")
                    var _ = Pd;
                else if (zo(m))
                    if (_a)
                        _ = zd;
                    else {
                        _ = Ld;
                        var N = Rd
                    }
                else
                    (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (_ = Od);
                if (_ && (_ = _(e, f))) {
                    Sa(g, _, n, h);
                    break e
                }
                N && N(e, m, f),
                e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && xs(m, "number", m.value)
            }
            switch (N = f ? Qt(f) : window,
            e) {
            case "focusin":
                (zo(N) || N.contentEditable === "true") && (Ht = N,
                Os = f,
                Bn = null);
                break;
            case "focusout":
                Bn = Os = Ht = null;
                break;
            case "mousedown":
                zs = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                zs = !1,
                Io(g, n, h);
                break;
            case "selectionchange":
                if (Bd)
                    break;
            case "keydown":
            case "keyup":
                Io(g, n, h)
            }
            var C;
            if (Pl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                $t ? xa(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (wa && n.locale !== "ko" && ($t || T !== "onCompositionStart" ? T === "onCompositionEnd" && $t && (C = va()) : (ot = h,
            Cl = "value"in ot ? ot.value : ot.textContent,
            $t = !0)),
            N = br(f, T),
            0 < N.length && (T = new Po(T,e,null,n,h),
            g.push({
                event: T,
                listeners: N
            }),
            C ? T.data = C : (C = ka(n),
            C !== null && (T.data = C)))),
            (C = Ed ? Nd(e, n) : Cd(e, n)) && (f = br(f, "onBeforeInput"),
            0 < f.length && (h = new Po("onBeforeInput","beforeinput",null,n,h),
            g.push({
                event: h,
                listeners: f
            }),
            h.data = C))
        }
        za(g, t)
    })
}
function Jn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = Wn(e, n),
        s != null && r.unshift(Jn(e, s, i)),
        s = Wn(e, t),
        s != null && r.push(Jn(e, s, i))),
        e = e.return
    }
    return r
}
function Ft(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Vo(e, t, n, r, i) {
    for (var s = t._reactName, l = []; n !== null && n !== r; ) {
        var o = n
          , u = o.alternate
          , f = o.stateNode;
        if (u !== null && u === r)
            break;
        o.tag === 5 && f !== null && (o = f,
        i ? (u = Wn(n, s),
        u != null && l.unshift(Jn(n, u, o))) : i || (u = Wn(n, s),
        u != null && l.push(Jn(n, u, o)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var Ud = /\r\n?/g
  , Vd = /\u0000|\uFFFD/g;
function $o(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ud, `
`).replace(Vd, "")
}
function Sr(e, t, n) {
    if (t = $o(t),
    $o(e) !== t && n)
        throw Error(v(425))
}
function ei() {}
var As = null
  , Ds = null;
function Bs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ms = typeof setTimeout == "function" ? setTimeout : void 0
  , $d = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Ho = typeof Promise == "function" ? Promise : void 0
  , Hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ho < "u" ? function(e) {
    return Ho.resolve(null).then(e).catch(Wd)
}
: Ms;
function Wd(e) {
    setTimeout(function() {
        throw e
    })
}
function bi(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Yn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Yn(t)
}
function dt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Wo(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var hn = Math.random().toString(36).slice(2)
  , Ve = "__reactFiber$" + hn
  , Zn = "__reactProps$" + hn
  , Ze = "__reactContainer$" + hn
  , Is = "__reactEvents$" + hn
  , Qd = "__reactListeners$" + hn
  , Kd = "__reactHandles$" + hn;
function Tt(e) {
    var t = e[Ve];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ze] || n[Ve]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Wo(e); e !== null; ) {
                    if (n = e[Ve])
                        return n;
                    e = Wo(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function ur(e) {
    return e = e[Ve] || e[Ze],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Qt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(v(33))
}
function ki(e) {
    return e[Zn] || null
}
var Fs = []
  , Kt = -1;
function kt(e) {
    return {
        current: e
    }
}
function I(e) {
    0 > Kt || (e.current = Fs[Kt],
    Fs[Kt] = null,
    Kt--)
}
function B(e, t) {
    Kt++,
    Fs[Kt] = e.current,
    e.current = t
}
var wt = {}
  , oe = kt(wt)
  , he = kt(!1)
  , Ot = wt;
function ln(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function me(e) {
    return e = e.childContextTypes,
    e != null
}
function ti() {
    I(he),
    I(oe)
}
function Qo(e, t, n) {
    if (oe.current !== wt)
        throw Error(v(168));
    B(oe, t),
    B(he, n)
}
function Da(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(v(108, Rf(e) || "Unknown", i));
    return $({}, n, r)
}
function ni(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wt,
    Ot = oe.current,
    B(oe, e),
    B(he, he.current),
    !0
}
function Ko(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(v(169));
    n ? (e = Da(e, t, Ot),
    r.__reactInternalMemoizedMergedChildContext = e,
    I(he),
    I(oe),
    B(oe, e)) : I(he),
    B(he, n)
}
var Ye = null
  , Si = !1
  , es = !1;
function Ba(e) {
    Ye === null ? Ye = [e] : Ye.push(e)
}
function Yd(e) {
    Si = !0,
    Ba(e)
}
function St() {
    if (!es && Ye !== null) {
        es = !0;
        var e = 0
          , t = D;
        try {
            var n = Ye;
            for (D = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ye = null,
            Si = !1
        } catch (i) {
            throw Ye !== null && (Ye = Ye.slice(e + 1)),
            oa(Sl, St),
            i
        } finally {
            D = t,
            es = !1
        }
    }
    return null
}
var Yt = []
  , qt = 0
  , ri = null
  , ii = 0
  , _e = []
  , Ee = 0
  , zt = null
  , qe = 1
  , Ge = "";
function Nt(e, t) {
    Yt[qt++] = ii,
    Yt[qt++] = ri,
    ri = e,
    ii = t
}
function Ma(e, t, n) {
    _e[Ee++] = qe,
    _e[Ee++] = Ge,
    _e[Ee++] = zt,
    zt = e;
    var r = qe;
    e = Ge;
    var i = 32 - Be(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - Be(t) + i;
    if (30 < s) {
        var l = i - i % 5;
        s = (r & (1 << l) - 1).toString(32),
        r >>= l,
        i -= l,
        qe = 1 << 32 - Be(t) + i | n << i | r,
        Ge = s + e
    } else
        qe = 1 << s | n << i | r,
        Ge = e
}
function Ll(e) {
    e.return !== null && (Nt(e, 1),
    Ma(e, 1, 0))
}
function Ol(e) {
    for (; e === ri; )
        ri = Yt[--qt],
        Yt[qt] = null,
        ii = Yt[--qt],
        Yt[qt] = null;
    for (; e === zt; )
        zt = _e[--Ee],
        _e[Ee] = null,
        Ge = _e[--Ee],
        _e[Ee] = null,
        qe = _e[--Ee],
        _e[Ee] = null
}
var we = null
  , ve = null
  , F = !1
  , De = null;
function Ia(e, t) {
    var n = Ce(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Yo(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        we = e,
        ve = dt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        we = e,
        ve = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = zt !== null ? {
            id: qe,
            overflow: Ge
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ce(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        we = e,
        ve = null,
        !0) : !1;
    default:
        return !1
    }
}
function Us(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Vs(e) {
    if (F) {
        var t = ve;
        if (t) {
            var n = t;
            if (!Yo(e, t)) {
                if (Us(e))
                    throw Error(v(418));
                t = dt(n.nextSibling);
                var r = we;
                t && Yo(e, t) ? Ia(r, n) : (e.flags = e.flags & -4097 | 2,
                F = !1,
                we = e)
            }
        } else {
            if (Us(e))
                throw Error(v(418));
            e.flags = e.flags & -4097 | 2,
            F = !1,
            we = e
        }
    }
}
function qo(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    we = e
}
function _r(e) {
    if (e !== we)
        return !1;
    if (!F)
        return qo(e),
        F = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Bs(e.type, e.memoizedProps)),
    t && (t = ve)) {
        if (Us(e))
            throw Fa(),
            Error(v(418));
        for (; t; )
            Ia(e, t),
            t = dt(t.nextSibling)
    }
    if (qo(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(v(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = dt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else
        ve = we ? dt(e.stateNode.nextSibling) : null;
    return !0
}
function Fa() {
    for (var e = ve; e; )
        e = dt(e.nextSibling)
}
function on() {
    ve = we = null,
    F = !1
}
function zl(e) {
    De === null ? De = [e] : De.push(e)
}
var qd = tt.ReactCurrentBatchConfig;
function _n(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(v(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(v(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(l) {
                var o = i.refs;
                l === null ? delete o[s] : o[s] = l
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(v(284));
        if (!n._owner)
            throw Error(v(290, e))
    }
    return e
}
function Er(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Go(e) {
    var t = e._init;
    return t(e._payload)
}
function Ua(e) {
    function t(d, c) {
        if (e) {
            var p = d.deletions;
            p === null ? (d.deletions = [c],
            d.flags |= 16) : p.push(c)
        }
    }
    function n(d, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(d, c),
            c = c.sibling;
        return null
    }
    function r(d, c) {
        for (d = new Map; c !== null; )
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
            c = c.sibling;
        return d
    }
    function i(d, c) {
        return d = gt(d, c),
        d.index = 0,
        d.sibling = null,
        d
    }
    function s(d, c, p) {
        return d.index = p,
        e ? (p = d.alternate,
        p !== null ? (p = p.index,
        p < c ? (d.flags |= 2,
        c) : p) : (d.flags |= 2,
        c)) : (d.flags |= 1048576,
        c)
    }
    function l(d) {
        return e && d.alternate === null && (d.flags |= 2),
        d
    }
    function o(d, c, p, y) {
        return c === null || c.tag !== 6 ? (c = os(p, d.mode, y),
        c.return = d,
        c) : (c = i(c, p),
        c.return = d,
        c)
    }
    function u(d, c, p, y) {
        var _ = p.type;
        return _ === Vt ? h(d, c, p.props.children, y, p.key) : c !== null && (c.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === rt && Go(_) === c.type) ? (y = i(c, p.props),
        y.ref = _n(d, c, p),
        y.return = d,
        y) : (y = $r(p.type, p.key, p.props, null, d.mode, y),
        y.ref = _n(d, c, p),
        y.return = d,
        y)
    }
    function f(d, c, p, y) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = us(p, d.mode, y),
        c.return = d,
        c) : (c = i(c, p.children || []),
        c.return = d,
        c)
    }
    function h(d, c, p, y, _) {
        return c === null || c.tag !== 7 ? (c = Lt(p, d.mode, y, _),
        c.return = d,
        c) : (c = i(c, p),
        c.return = d,
        c)
    }
    function g(d, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = os("" + c, d.mode, p),
            c.return = d,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case pr:
                return p = $r(c.type, c.key, c.props, null, d.mode, p),
                p.ref = _n(d, null, c),
                p.return = d,
                p;
            case Ut:
                return c = us(c, d.mode, p),
                c.return = d,
                c;
            case rt:
                var y = c._init;
                return g(d, y(c._payload), p)
            }
            if (jn(c) || vn(c))
                return c = Lt(c, d.mode, p, null),
                c.return = d,
                c;
            Er(d, c)
        }
        return null
    }
    function m(d, c, p, y) {
        var _ = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return _ !== null ? null : o(d, c, "" + p, y);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case pr:
                return p.key === _ ? u(d, c, p, y) : null;
            case Ut:
                return p.key === _ ? f(d, c, p, y) : null;
            case rt:
                return _ = p._init,
                m(d, c, _(p._payload), y)
            }
            if (jn(p) || vn(p))
                return _ !== null ? null : h(d, c, p, y, null);
            Er(d, p)
        }
        return null
    }
    function x(d, c, p, y, _) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return d = d.get(p) || null,
            o(c, d, "" + y, _);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case pr:
                return d = d.get(y.key === null ? p : y.key) || null,
                u(c, d, y, _);
            case Ut:
                return d = d.get(y.key === null ? p : y.key) || null,
                f(c, d, y, _);
            case rt:
                var N = y._init;
                return x(d, c, p, N(y._payload), _)
            }
            if (jn(y) || vn(y))
                return d = d.get(p) || null,
                h(c, d, y, _, null);
            Er(c, y)
        }
        return null
    }
    function w(d, c, p, y) {
        for (var _ = null, N = null, C = c, T = c = 0, W = null; C !== null && T < p.length; T++) {
            C.index > T ? (W = C,
            C = null) : W = C.sibling;
            var L = m(d, C, p[T], y);
            if (L === null) {
                C === null && (C = W);
                break
            }
            e && C && L.alternate === null && t(d, C),
            c = s(L, c, T),
            N === null ? _ = L : N.sibling = L,
            N = L,
            C = W
        }
        if (T === p.length)
            return n(d, C),
            F && Nt(d, T),
            _;
        if (C === null) {
            for (; T < p.length; T++)
                C = g(d, p[T], y),
                C !== null && (c = s(C, c, T),
                N === null ? _ = C : N.sibling = C,
                N = C);
            return F && Nt(d, T),
            _
        }
        for (C = r(d, C); T < p.length; T++)
            W = x(C, d, T, p[T], y),
            W !== null && (e && W.alternate !== null && C.delete(W.key === null ? T : W.key),
            c = s(W, c, T),
            N === null ? _ = W : N.sibling = W,
            N = W);
        return e && C.forEach(function(Re) {
            return t(d, Re)
        }),
        F && Nt(d, T),
        _
    }
    function k(d, c, p, y) {
        var _ = vn(p);
        if (typeof _ != "function")
            throw Error(v(150));
        if (p = _.call(p),
        p == null)
            throw Error(v(151));
        for (var N = _ = null, C = c, T = c = 0, W = null, L = p.next(); C !== null && !L.done; T++,
        L = p.next()) {
            C.index > T ? (W = C,
            C = null) : W = C.sibling;
            var Re = m(d, C, L.value, y);
            if (Re === null) {
                C === null && (C = W);
                break
            }
            e && C && Re.alternate === null && t(d, C),
            c = s(Re, c, T),
            N === null ? _ = Re : N.sibling = Re,
            N = Re,
            C = W
        }
        if (L.done)
            return n(d, C),
            F && Nt(d, T),
            _;
        if (C === null) {
            for (; !L.done; T++,
            L = p.next())
                L = g(d, L.value, y),
                L !== null && (c = s(L, c, T),
                N === null ? _ = L : N.sibling = L,
                N = L);
            return F && Nt(d, T),
            _
        }
        for (C = r(d, C); !L.done; T++,
        L = p.next())
            L = x(C, d, T, L.value, y),
            L !== null && (e && L.alternate !== null && C.delete(L.key === null ? T : L.key),
            c = s(L, c, T),
            N === null ? _ = L : N.sibling = L,
            N = L);
        return e && C.forEach(function(gn) {
            return t(d, gn)
        }),
        F && Nt(d, T),
        _
    }
    function A(d, c, p, y) {
        if (typeof p == "object" && p !== null && p.type === Vt && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case pr:
                e: {
                    for (var _ = p.key, N = c; N !== null; ) {
                        if (N.key === _) {
                            if (_ = p.type,
                            _ === Vt) {
                                if (N.tag === 7) {
                                    n(d, N.sibling),
                                    c = i(N, p.props.children),
                                    c.return = d,
                                    d = c;
                                    break e
                                }
                            } else if (N.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === rt && Go(_) === N.type) {
                                n(d, N.sibling),
                                c = i(N, p.props),
                                c.ref = _n(d, N, p),
                                c.return = d,
                                d = c;
                                break e
                            }
                            n(d, N);
                            break
                        } else
                            t(d, N);
                        N = N.sibling
                    }
                    p.type === Vt ? (c = Lt(p.props.children, d.mode, y, p.key),
                    c.return = d,
                    d = c) : (y = $r(p.type, p.key, p.props, null, d.mode, y),
                    y.ref = _n(d, c, p),
                    y.return = d,
                    d = y)
                }
                return l(d);
            case Ut:
                e: {
                    for (N = p.key; c !== null; ) {
                        if (c.key === N)
                            if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                n(d, c.sibling),
                                c = i(c, p.children || []),
                                c.return = d,
                                d = c;
                                break e
                            } else {
                                n(d, c);
                                break
                            }
                        else
                            t(d, c);
                        c = c.sibling
                    }
                    c = us(p, d.mode, y),
                    c.return = d,
                    d = c
                }
                return l(d);
            case rt:
                return N = p._init,
                A(d, c, N(p._payload), y)
            }
            if (jn(p))
                return w(d, c, p, y);
            if (vn(p))
                return k(d, c, p, y);
            Er(d, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        c !== null && c.tag === 6 ? (n(d, c.sibling),
        c = i(c, p),
        c.return = d,
        d = c) : (n(d, c),
        c = os(p, d.mode, y),
        c.return = d,
        d = c),
        l(d)) : n(d, c)
    }
    return A
}
var un = Ua(!0)
  , Va = Ua(!1)
  , si = kt(null)
  , li = null
  , Gt = null
  , Al = null;
function Dl() {
    Al = Gt = li = null
}
function Bl(e) {
    var t = si.current;
    I(si),
    e._currentValue = t
}
function $s(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function nn(e, t) {
    li = e,
    Al = Gt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (pe = !0),
    e.firstContext = null)
}
function je(e) {
    var t = e._currentValue;
    if (Al !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Gt === null) {
            if (li === null)
                throw Error(v(308));
            Gt = e,
            li.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Gt = Gt.next = e;
    return t
}
var jt = null;
function Ml(e) {
    jt === null ? jt = [e] : jt.push(e)
}
function $a(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Ml(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    be(e, r)
}
function be(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var it = !1;
function Il(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ha(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Xe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function pt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    z & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        be(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Ml(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    be(e, n)
}
function Br(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        _l(e, n)
    }
}
function Xo(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = l : s = s.next = l,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function oi(e, t, n, r) {
    var i = e.updateQueue;
    it = !1;
    var s = i.firstBaseUpdate
      , l = i.lastBaseUpdate
      , o = i.shared.pending;
    if (o !== null) {
        i.shared.pending = null;
        var u = o
          , f = u.next;
        u.next = null,
        l === null ? s = f : l.next = f,
        l = u;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
        o = h.lastBaseUpdate,
        o !== l && (o === null ? h.firstBaseUpdate = f : o.next = f,
        h.lastBaseUpdate = u))
    }
    if (s !== null) {
        var g = i.baseState;
        l = 0,
        h = f = u = null,
        o = s;
        do {
            var m = o.lane
              , x = o.eventTime;
            if ((r & m) === m) {
                h !== null && (h = h.next = {
                    eventTime: x,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                });
                e: {
                    var w = e
                      , k = o;
                    switch (m = t,
                    x = n,
                    k.tag) {
                    case 1:
                        if (w = k.payload,
                        typeof w == "function") {
                            g = w.call(x, g, m);
                            break e
                        }
                        g = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = k.payload,
                        m = typeof w == "function" ? w.call(x, g, m) : w,
                        m == null)
                            break e;
                        g = $({}, g, m);
                        break e;
                    case 2:
                        it = !0
                    }
                }
                o.callback !== null && o.lane !== 0 && (e.flags |= 64,
                m = i.effects,
                m === null ? i.effects = [o] : m.push(o))
            } else
                x = {
                    eventTime: x,
                    lane: m,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                },
                h === null ? (f = h = x,
                u = g) : h = h.next = x,
                l |= m;
            if (o = o.next,
            o === null) {
                if (o = i.shared.pending,
                o === null)
                    break;
                m = o,
                o = m.next,
                m.next = null,
                i.lastBaseUpdate = m,
                i.shared.pending = null
            }
        } while (!0);
        if (h === null && (u = g),
        i.baseState = u,
        i.firstBaseUpdate = f,
        i.lastBaseUpdate = h,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                l |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        Dt |= l,
        e.lanes = l,
        e.memoizedState = g
    }
}
function Jo(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(v(191, i));
                i.call(r)
            }
        }
}
var ar = {}
  , He = kt(ar)
  , bn = kt(ar)
  , er = kt(ar);
function Pt(e) {
    if (e === ar)
        throw Error(v(174));
    return e
}
function Fl(e, t) {
    switch (B(er, t),
    B(bn, e),
    B(He, ar),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ss(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ss(t, e)
    }
    I(He),
    B(He, t)
}
function an() {
    I(He),
    I(bn),
    I(er)
}
function Wa(e) {
    Pt(er.current);
    var t = Pt(He.current)
      , n = Ss(t, e.type);
    t !== n && (B(bn, e),
    B(He, n))
}
function Ul(e) {
    bn.current === e && (I(He),
    I(bn))
}
var U = kt(0);
function ui(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ts = [];
function Vl() {
    for (var e = 0; e < ts.length; e++)
        ts[e]._workInProgressVersionPrimary = null;
    ts.length = 0
}
var Mr = tt.ReactCurrentDispatcher
  , ns = tt.ReactCurrentBatchConfig
  , At = 0
  , V = null
  , X = null
  , b = null
  , ai = !1
  , Mn = !1
  , tr = 0
  , Gd = 0;
function ie() {
    throw Error(v(321))
}
function $l(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ie(e[n], t[n]))
            return !1;
    return !0
}
function Hl(e, t, n, r, i, s) {
    if (At = s,
    V = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Mr.current = e === null || e.memoizedState === null ? bd : ep,
    e = n(r, i),
    Mn) {
        s = 0;
        do {
            if (Mn = !1,
            tr = 0,
            25 <= s)
                throw Error(v(301));
            s += 1,
            b = X = null,
            t.updateQueue = null,
            Mr.current = tp,
            e = n(r, i)
        } while (Mn)
    }
    if (Mr.current = ci,
    t = X !== null && X.next !== null,
    At = 0,
    b = X = V = null,
    ai = !1,
    t)
        throw Error(v(300));
    return e
}
function Wl() {
    var e = tr !== 0;
    return tr = 0,
    e
}
function Ue() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return b === null ? V.memoizedState = b = e : b = b.next = e,
    b
}
function Pe() {
    if (X === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = X.next;
    var t = b === null ? V.memoizedState : b.next;
    if (t !== null)
        b = t,
        X = e;
    else {
        if (e === null)
            throw Error(v(310));
        X = e,
        e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null
        },
        b === null ? V.memoizedState = b = e : b = b.next = e
    }
    return b
}
function nr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function rs(e) {
    var t = Pe()
      , n = t.queue;
    if (n === null)
        throw Error(v(311));
    n.lastRenderedReducer = e;
    var r = X
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var l = i.next;
            i.next = s.next,
            s.next = l
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var o = l = null
          , u = null
          , f = s;
        do {
            var h = f.lane;
            if ((At & h) === h)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                }),
                r = f.hasEagerState ? f.eagerState : e(r, f.action);
            else {
                var g = {
                    lane: h,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                };
                u === null ? (o = u = g,
                l = r) : u = u.next = g,
                V.lanes |= h,
                Dt |= h
            }
            f = f.next
        } while (f !== null && f !== s);
        u === null ? l = r : u.next = o,
        Ie(r, t.memoizedState) || (pe = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            V.lanes |= s,
            Dt |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function is(e) {
    var t = Pe()
      , n = t.queue;
    if (n === null)
        throw Error(v(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var l = i = i.next;
        do
            s = e(s, l.action),
            l = l.next;
        while (l !== i);
        Ie(s, t.memoizedState) || (pe = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Qa() {}
function Ka(e, t) {
    var n = V
      , r = Pe()
      , i = t()
      , s = !Ie(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    pe = !0),
    r = r.queue,
    Ql(Ga.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || b !== null && b.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        rr(9, qa.bind(null, n, r, i, t), void 0, null),
        ee === null)
            throw Error(v(349));
        At & 30 || Ya(n, t, i)
    }
    return i
}
function Ya(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = V.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    V.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function qa(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Xa(t) && Ja(e)
}
function Ga(e, t, n) {
    return n(function() {
        Xa(t) && Ja(e)
    })
}
function Xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ie(e, n)
    } catch {
        return !0
    }
}
function Ja(e) {
    var t = be(e, 1);
    t !== null && Me(t, e, 1, -1)
}
function Zo(e) {
    var t = Ue();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Zd.bind(null, V, e),
    [t.memoizedState, e]
}
function rr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = V.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    V.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Za() {
    return Pe().memoizedState
}
function Ir(e, t, n, r) {
    var i = Ue();
    V.flags |= e,
    i.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r)
}
function _i(e, t, n, r) {
    var i = Pe();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (X !== null) {
        var l = X.memoizedState;
        if (s = l.destroy,
        r !== null && $l(r, l.deps)) {
            i.memoizedState = rr(t, n, s, r);
            return
        }
    }
    V.flags |= e,
    i.memoizedState = rr(1 | t, n, s, r)
}
function bo(e, t) {
    return Ir(8390656, 8, e, t)
}
function Ql(e, t) {
    return _i(2048, 8, e, t)
}
function ba(e, t) {
    return _i(4, 2, e, t)
}
function ec(e, t) {
    return _i(4, 4, e, t)
}
function tc(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function nc(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    _i(4, 4, tc.bind(null, t, e), n)
}
function Kl() {}
function rc(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $l(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function ic(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $l(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function sc(e, t, n) {
    return At & 21 ? (Ie(n, t) || (n = ca(),
    V.lanes |= n,
    Dt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    pe = !0),
    e.memoizedState = n)
}
function Xd(e, t) {
    var n = D;
    D = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ns.transition;
    ns.transition = {};
    try {
        e(!1),
        t()
    } finally {
        D = n,
        ns.transition = r
    }
}
function lc() {
    return Pe().memoizedState
}
function Jd(e, t, n) {
    var r = mt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    oc(e))
        uc(t, n);
    else if (n = $a(e, t, n, r),
    n !== null) {
        var i = ae();
        Me(n, e, r, i),
        ac(n, t, r)
    }
}
function Zd(e, t, n) {
    var r = mt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (oc(e))
        uc(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var l = t.lastRenderedState
                  , o = s(l, n);
                if (i.hasEagerState = !0,
                i.eagerState = o,
                Ie(o, l)) {
                    var u = t.interleaved;
                    u === null ? (i.next = i,
                    Ml(t)) : (i.next = u.next,
                    u.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = $a(e, t, i, r),
        n !== null && (i = ae(),
        Me(n, e, r, i),
        ac(n, t, r))
    }
}
function oc(e) {
    var t = e.alternate;
    return e === V || t !== null && t === V
}
function uc(e, t) {
    Mn = ai = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function ac(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        _l(e, n)
    }
}
var ci = {
    readContext: je,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1
}
  , bd = {
    readContext: je,
    useCallback: function(e, t) {
        return Ue().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: je,
    useEffect: bo,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ir(4194308, 4, tc.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ir(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ir(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Ue();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Ue();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Jd.bind(null, V, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Ue();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Zo,
    useDebugValue: Kl,
    useDeferredValue: function(e) {
        return Ue().memoizedState = e
    },
    useTransition: function() {
        var e = Zo(!1)
          , t = e[0];
        return e = Xd.bind(null, e[1]),
        Ue().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = V
          , i = Ue();
        if (F) {
            if (n === void 0)
                throw Error(v(407));
            n = n()
        } else {
            if (n = t(),
            ee === null)
                throw Error(v(349));
            At & 30 || Ya(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        bo(Ga.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        rr(9, qa.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Ue()
          , t = ee.identifierPrefix;
        if (F) {
            var n = Ge
              , r = qe;
            n = (r & ~(1 << 32 - Be(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = tr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Gd++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ep = {
    readContext: je,
    useCallback: rc,
    useContext: je,
    useEffect: Ql,
    useImperativeHandle: nc,
    useInsertionEffect: ba,
    useLayoutEffect: ec,
    useMemo: ic,
    useReducer: rs,
    useRef: Za,
    useState: function() {
        return rs(nr)
    },
    useDebugValue: Kl,
    useDeferredValue: function(e) {
        var t = Pe();
        return sc(t, X.memoizedState, e)
    },
    useTransition: function() {
        var e = rs(nr)[0]
          , t = Pe().memoizedState;
        return [e, t]
    },
    useMutableSource: Qa,
    useSyncExternalStore: Ka,
    useId: lc,
    unstable_isNewReconciler: !1
}
  , tp = {
    readContext: je,
    useCallback: rc,
    useContext: je,
    useEffect: Ql,
    useImperativeHandle: nc,
    useInsertionEffect: ba,
    useLayoutEffect: ec,
    useMemo: ic,
    useReducer: is,
    useRef: Za,
    useState: function() {
        return is(nr)
    },
    useDebugValue: Kl,
    useDeferredValue: function(e) {
        var t = Pe();
        return X === null ? t.memoizedState = e : sc(t, X.memoizedState, e)
    },
    useTransition: function() {
        var e = is(nr)[0]
          , t = Pe().memoizedState;
        return [e, t]
    },
    useMutableSource: Qa,
    useSyncExternalStore: Ka,
    useId: lc,
    unstable_isNewReconciler: !1
};
function Oe(e, t) {
    if (e && e.defaultProps) {
        t = $({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Hs(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : $({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ei = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? It(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ae()
          , i = mt(e)
          , s = Xe(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = pt(e, s, i),
        t !== null && (Me(t, e, i, r),
        Br(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ae()
          , i = mt(e)
          , s = Xe(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = pt(e, s, i),
        t !== null && (Me(t, e, i, r),
        Br(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ae()
          , r = mt(e)
          , i = Xe(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = pt(e, i, r),
        t !== null && (Me(t, e, r, n),
        Br(t, e, r))
    }
};
function eu(e, t, n, r, i, s, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, l) : t.prototype && t.prototype.isPureReactComponent ? !Gn(n, r) || !Gn(i, s) : !0
}
function cc(e, t, n) {
    var r = !1
      , i = wt
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = je(s) : (i = me(t) ? Ot : oe.current,
    r = t.contextTypes,
    s = (r = r != null) ? ln(e, i) : wt),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ei,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function tu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ei.enqueueReplaceState(t, t.state, null)
}
function Ws(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Il(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = je(s) : (s = me(t) ? Ot : oe.current,
    i.context = ln(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Hs(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Ei.enqueueReplaceState(i, i.state, null),
    oi(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function cn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Pf(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function ss(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Qs(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var np = typeof WeakMap == "function" ? WeakMap : Map;
function fc(e, t, n) {
    n = Xe(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        di || (di = !0,
        tl = r),
        Qs(e, t)
    }
    ,
    n
}
function dc(e, t, n) {
    n = Xe(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Qs(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Qs(e, t),
        typeof r != "function" && (ht === null ? ht = new Set([this]) : ht.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function nu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new np;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = gp.bind(null, e, t, n),
    t.then(e, e))
}
function ru(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function iu(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1),
    t.tag = 2,
    pt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var rp = tt.ReactCurrentOwner
  , pe = !1;
function ue(e, t, n, r) {
    t.child = e === null ? Va(t, null, n, r) : un(t, e.child, n, r)
}
function su(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return nn(t, i),
    r = Hl(e, t, n, r, s, i),
    n = Wl(),
    e !== null && !pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    et(e, t, i)) : (F && n && Ll(t),
    t.flags |= 1,
    ue(e, t, r, i),
    t.child)
}
function lu(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !eo(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        pc(e, t, s, r, i)) : (e = $r(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var l = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Gn,
        n(l, r) && e.ref === t.ref)
            return et(e, t, i)
    }
    return t.flags |= 1,
    e = gt(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function pc(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Gn(s, r) && e.ref === t.ref)
            if (pe = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (pe = !0);
            else
                return t.lanes = e.lanes,
                et(e, t, i)
    }
    return Ks(e, t, n, r, i)
}
function hc(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            B(Jt, ye),
            ye |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                B(Jt, ye),
                ye |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            B(Jt, ye),
            ye |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        B(Jt, ye),
        ye |= r;
    return ue(e, t, i, n),
    t.child
}
function mc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Ks(e, t, n, r, i) {
    var s = me(n) ? Ot : oe.current;
    return s = ln(t, s),
    nn(t, i),
    n = Hl(e, t, n, r, s, i),
    r = Wl(),
    e !== null && !pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    et(e, t, i)) : (F && r && Ll(t),
    t.flags |= 1,
    ue(e, t, n, i),
    t.child)
}
function ou(e, t, n, r, i) {
    if (me(n)) {
        var s = !0;
        ni(t)
    } else
        s = !1;
    if (nn(t, i),
    t.stateNode === null)
        Fr(e, t),
        cc(t, n, r),
        Ws(t, n, r, i),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , o = t.memoizedProps;
        l.props = o;
        var u = l.context
          , f = n.contextType;
        typeof f == "object" && f !== null ? f = je(f) : (f = me(n) ? Ot : oe.current,
        f = ln(t, f));
        var h = n.getDerivedStateFromProps
          , g = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        g || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== r || u !== f) && tu(t, l, r, f),
        it = !1;
        var m = t.memoizedState;
        l.state = m,
        oi(t, r, l, i),
        u = t.memoizedState,
        o !== r || m !== u || he.current || it ? (typeof h == "function" && (Hs(t, n, h, r),
        u = t.memoizedState),
        (o = it || eu(t, n, o, r, m, u, f)) ? (g || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        l.props = r,
        l.state = u,
        l.context = f,
        r = o) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Ha(e, t),
        o = t.memoizedProps,
        f = t.type === t.elementType ? o : Oe(t.type, o),
        l.props = f,
        g = t.pendingProps,
        m = l.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = je(u) : (u = me(n) ? Ot : oe.current,
        u = ln(t, u));
        var x = n.getDerivedStateFromProps;
        (h = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (o !== g || m !== u) && tu(t, l, r, u),
        it = !1,
        m = t.memoizedState,
        l.state = m,
        oi(t, r, l, i);
        var w = t.memoizedState;
        o !== g || m !== w || he.current || it ? (typeof x == "function" && (Hs(t, n, x, r),
        w = t.memoizedState),
        (f = it || eu(t, n, f, r, m, w, u) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, u),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, u)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        l.props = r,
        l.state = w,
        l.context = u,
        r = f) : (typeof l.componentDidUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ys(e, t, n, r, s, i)
}
function Ys(e, t, n, r, i, s) {
    mc(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return i && Ko(t, n, !1),
        et(e, t, s);
    r = t.stateNode,
    rp.current = t;
    var o = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = un(t, e.child, null, s),
    t.child = un(t, null, o, s)) : ue(e, t, o, s),
    t.memoizedState = r.state,
    i && Ko(t, n, !0),
    t.child
}
function gc(e) {
    var t = e.stateNode;
    t.pendingContext ? Qo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Qo(e, t.context, !1),
    Fl(e, t.containerInfo)
}
function uu(e, t, n, r, i) {
    return on(),
    zl(i),
    t.flags |= 256,
    ue(e, t, n, r),
    t.child
}
var qs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Gs(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function yc(e, t, n) {
    var r = t.pendingProps, i = U.current, s = !1, l = (t.flags & 128) !== 0, o;
    if ((o = l) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    B(U, i & 1),
    e === null)
        return Vs(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = l) : s = Ti(l, r, 0, null),
        e = Lt(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Gs(n),
        t.memoizedState = qs,
        e) : Yl(t, l));
    if (i = e.memoizedState,
    i !== null && (o = i.dehydrated,
    o !== null))
        return ip(e, t, l, r, o, i, n);
    if (s) {
        s = r.fallback,
        l = t.mode,
        i = e.child,
        o = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = gt(i, u),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        o !== null ? s = gt(o, s) : (s = Lt(s, l, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        l = e.child.memoizedState,
        l = l === null ? Gs(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        s.memoizedState = l,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = qs,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = gt(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Yl(e, t) {
    return t = Ti({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Nr(e, t, n, r) {
    return r !== null && zl(r),
    un(t, e.child, null, n),
    e = Yl(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function ip(e, t, n, r, i, s, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = ss(Error(v(422))),
        Nr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Ti({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = Lt(s, i, l, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && un(t, e.child, null, l),
        t.child.memoizedState = Gs(l),
        t.memoizedState = qs,
        s);
    if (!(t.mode & 1))
        return Nr(e, t, l, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var o = r.dgst;
        return r = o,
        s = Error(v(419)),
        r = ss(s, r, void 0),
        Nr(e, t, l, r)
    }
    if (o = (l & e.childLanes) !== 0,
    pe || o) {
        if (r = ee,
        r !== null) {
            switch (l & -l) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
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
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | l) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            be(e, i),
            Me(r, e, i, -1))
        }
        return bl(),
        r = ss(Error(v(421))),
        Nr(e, t, l, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = yp.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    ve = dt(i.nextSibling),
    we = t,
    F = !0,
    De = null,
    e !== null && (_e[Ee++] = qe,
    _e[Ee++] = Ge,
    _e[Ee++] = zt,
    qe = e.id,
    Ge = e.overflow,
    zt = t),
    t = Yl(t, r.children),
    t.flags |= 4096,
    t)
}
function au(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    $s(e.return, t, n)
}
function ls(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function vc(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (ue(e, t, r.children, n),
    r = U.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && au(e, n, t);
                else if (e.tag === 19)
                    au(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (B(U, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && ui(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ls(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && ui(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ls(t, !0, n, null, s);
            break;
        case "together":
            ls(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Fr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function et(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Dt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(v(153));
    if (t.child !== null) {
        for (e = t.child,
        n = gt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = gt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function sp(e, t, n) {
    switch (t.tag) {
    case 3:
        gc(t),
        on();
        break;
    case 5:
        Wa(t);
        break;
    case 1:
        me(t.type) && ni(t);
        break;
    case 4:
        Fl(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        B(si, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (B(U, U.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? yc(e, t, n) : (B(U, U.current & 1),
            e = et(e, t, n),
            e !== null ? e.sibling : null);
        B(U, U.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return vc(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        B(U, U.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        hc(e, t, n)
    }
    return et(e, t, n)
}
var wc, Xs, xc, kc;
wc = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Xs = function() {}
;
xc = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Pt(He.current);
        var s = null;
        switch (n) {
        case "input":
            i = vs(e, i),
            r = vs(e, r),
            s = [];
            break;
        case "select":
            i = $({}, i, {
                value: void 0
            }),
            r = $({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = ks(e, i),
            r = ks(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ei)
        }
        _s(n, r);
        var l;
        n = null;
        for (f in i)
            if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
                if (f === "style") {
                    var o = i[f];
                    for (l in o)
                        o.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && ($n.hasOwnProperty(f) ? s || (s = []) : (s = s || []).push(f, null));
        for (f in r) {
            var u = r[f];
            if (o = i != null ? i[f] : void 0,
            r.hasOwnProperty(f) && u !== o && (u != null || o != null))
                if (f === "style")
                    if (o) {
                        for (l in o)
                            !o.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in u)
                            u.hasOwnProperty(l) && o[l] !== u[l] && (n || (n = {}),
                            n[l] = u[l])
                    } else
                        n || (s || (s = []),
                        s.push(f, n)),
                        n = u;
                else
                    f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    o = o ? o.__html : void 0,
                    u != null && o !== u && (s = s || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (s = s || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && ($n.hasOwnProperty(f) ? (u != null && f === "onScroll" && M("scroll", e),
                    s || o === u || (s = [])) : (s = s || []).push(f, u))
        }
        n && (s = s || []).push("style", n);
        var f = s;
        (t.updateQueue = f) && (t.flags |= 4)
    }
}
;
kc = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function En(e, t) {
    if (!F)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function se(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function lp(e, t, n) {
    var r = t.pendingProps;
    switch (Ol(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return se(t),
        null;
    case 1:
        return me(t.type) && ti(),
        se(t),
        null;
    case 3:
        return r = t.stateNode,
        an(),
        I(he),
        I(oe),
        Vl(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (_r(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        De !== null && (il(De),
        De = null))),
        Xs(e, t),
        se(t),
        null;
    case 5:
        Ul(t);
        var i = Pt(er.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            xc(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(v(166));
                return se(t),
                null
            }
            if (e = Pt(He.current),
            _r(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[Ve] = t,
                r[Zn] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    M("cancel", r),
                    M("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    M("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Rn.length; i++)
                        M(Rn[i], r);
                    break;
                case "source":
                    M("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    M("error", r),
                    M("load", r);
                    break;
                case "details":
                    M("toggle", r);
                    break;
                case "input":
                    vo(r, s),
                    M("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    M("invalid", r);
                    break;
                case "textarea":
                    xo(r, s),
                    M("invalid", r)
                }
                _s(n, s),
                i = null;
                for (var l in s)
                    if (s.hasOwnProperty(l)) {
                        var o = s[l];
                        l === "children" ? typeof o == "string" ? r.textContent !== o && (s.suppressHydrationWarning !== !0 && Sr(r.textContent, o, e),
                        i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (s.suppressHydrationWarning !== !0 && Sr(r.textContent, o, e),
                        i = ["children", "" + o]) : $n.hasOwnProperty(l) && o != null && l === "onScroll" && M("scroll", r)
                    }
                switch (n) {
                case "input":
                    hr(r),
                    wo(r, s, !0);
                    break;
                case "textarea":
                    hr(r),
                    ko(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = ei)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Gu(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[Ve] = t,
                e[Zn] = r,
                wc(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = Es(n, r),
                    n) {
                    case "dialog":
                        M("cancel", e),
                        M("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        M("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Rn.length; i++)
                            M(Rn[i], e);
                        i = r;
                        break;
                    case "source":
                        M("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        M("error", e),
                        M("load", e),
                        i = r;
                        break;
                    case "details":
                        M("toggle", e),
                        i = r;
                        break;
                    case "input":
                        vo(e, r),
                        i = vs(e, r),
                        M("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = $({}, r, {
                            value: void 0
                        }),
                        M("invalid", e);
                        break;
                    case "textarea":
                        xo(e, r),
                        i = ks(e, r),
                        M("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    _s(n, i),
                    o = i;
                    for (s in o)
                        if (o.hasOwnProperty(s)) {
                            var u = o[s];
                            s === "style" ? Zu(e, u) : s === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Xu(e, u)) : s === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Hn(e, u) : typeof u == "number" && Hn(e, "" + u) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && ($n.hasOwnProperty(s) ? u != null && s === "onScroll" && M("scroll", e) : u != null && yl(e, s, u, l))
                        }
                    switch (n) {
                    case "input":
                        hr(e),
                        wo(e, r, !1);
                        break;
                    case "textarea":
                        hr(e),
                        ko(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + vt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Zt(e, !!r.multiple, s, !1) : r.defaultValue != null && Zt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ei)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return se(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            kc(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(v(166));
            if (n = Pt(er.current),
            Pt(He.current),
            _r(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ve] = t,
                (s = r.nodeValue !== n) && (e = we,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Sr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Sr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ve] = t,
                t.stateNode = r
        }
        return se(t),
        null;
    case 13:
        if (I(U),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (F && ve !== null && t.mode & 1 && !(t.flags & 128))
                Fa(),
                on(),
                t.flags |= 98560,
                s = !1;
            else if (s = _r(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(v(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(v(317));
                    s[Ve] = t
                } else
                    on(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                se(t),
                s = !1
            } else
                De !== null && (il(De),
                De = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || U.current & 1 ? J === 0 && (J = 3) : bl())),
        t.updateQueue !== null && (t.flags |= 4),
        se(t),
        null);
    case 4:
        return an(),
        Xs(e, t),
        e === null && Xn(t.stateNode.containerInfo),
        se(t),
        null;
    case 10:
        return Bl(t.type._context),
        se(t),
        null;
    case 17:
        return me(t.type) && ti(),
        se(t),
        null;
    case 19:
        if (I(U),
        s = t.memoizedState,
        s === null)
            return se(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = s.rendering,
        l === null)
            if (r)
                En(s, !1);
            else {
                if (J !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = ui(e),
                        l !== null) {
                            for (t.flags |= 128,
                            En(s, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                l = s.alternate,
                                l === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = l.childLanes,
                                s.lanes = l.lanes,
                                s.child = l.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = l.memoizedProps,
                                s.memoizedState = l.memoizedState,
                                s.updateQueue = l.updateQueue,
                                s.type = l.type,
                                e = l.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return B(U, U.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && K() > fn && (t.flags |= 128,
                r = !0,
                En(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ui(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    En(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !l.alternate && !F)
                        return se(t),
                        null
                } else
                    2 * K() - s.renderingStartTime > fn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    En(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = s.last,
            n !== null ? n.sibling = l : t.child = l,
            s.last = l)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = K(),
        t.sibling = null,
        n = U.current,
        B(U, r ? n & 1 | 2 : n & 1),
        t) : (se(t),
        null);
    case 22:
    case 23:
        return Zl(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ye & 1073741824 && (se(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : se(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(v(156, t.tag))
}
function op(e, t) {
    switch (Ol(t),
    t.tag) {
    case 1:
        return me(t.type) && ti(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return an(),
        I(he),
        I(oe),
        Vl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ul(t),
        null;
    case 13:
        if (I(U),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(v(340));
            on()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return I(U),
        null;
    case 4:
        return an(),
        null;
    case 10:
        return Bl(t.type._context),
        null;
    case 22:
    case 23:
        return Zl(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Cr = !1
  , le = !1
  , up = typeof WeakSet == "function" ? WeakSet : Set
  , S = null;
function Xt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                H(e, t, r)
            }
        else
            n.current = null
}
function Js(e, t, n) {
    try {
        n()
    } catch (r) {
        H(e, t, r)
    }
}
var cu = !1;
function ap(e, t) {
    if (As = Jr,
    e = Ca(),
    Rl(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , o = -1
                      , u = -1
                      , f = 0
                      , h = 0
                      , g = e
                      , m = null;
                    t: for (; ; ) {
                        for (var x; g !== n || i !== 0 && g.nodeType !== 3 || (o = l + i),
                        g !== s || r !== 0 && g.nodeType !== 3 || (u = l + r),
                        g.nodeType === 3 && (l += g.nodeValue.length),
                        (x = g.firstChild) !== null; )
                            m = g,
                            g = x;
                        for (; ; ) {
                            if (g === e)
                                break t;
                            if (m === n && ++f === i && (o = l),
                            m === s && ++h === r && (u = l),
                            (x = g.nextSibling) !== null)
                                break;
                            g = m,
                            m = g.parentNode
                        }
                        g = x
                    }
                    n = o === -1 || u === -1 ? null : {
                        start: o,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ds = {
        focusedElem: e,
        selectionRange: n
    },
    Jr = !1,
    S = t; S !== null; )
        if (t = S,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            S = e;
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps
                                  , A = w.memoizedState
                                  , d = t.stateNode
                                  , c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Oe(t.type, k), A);
                                d.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(v(163))
                        }
                } catch (y) {
                    H(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    S = e;
                    break
                }
                S = t.return
            }
    return w = cu,
    cu = !1,
    w
}
function In(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Js(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Ni(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Zs(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Sc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Sc(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ve],
    delete t[Zn],
    delete t[Is],
    delete t[Qd],
    delete t[Kd])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function _c(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || _c(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function bs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ei));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (bs(e, t, n),
        e = e.sibling; e !== null; )
            bs(e, t, n),
            e = e.sibling
}
function el(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (el(e, t, n),
        e = e.sibling; e !== null; )
            el(e, t, n),
            e = e.sibling
}
var te = null
  , ze = !1;
function nt(e, t, n) {
    for (n = n.child; n !== null; )
        Ec(e, t, n),
        n = n.sibling
}
function Ec(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function")
        try {
            $e.onCommitFiberUnmount(yi, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Xt(n, t);
    case 6:
        var r = te
          , i = ze;
        te = null,
        nt(e, t, n),
        te = r,
        ze = i,
        te !== null && (ze ? (e = te,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
        break;
    case 18:
        te !== null && (ze ? (e = te,
        n = n.stateNode,
        e.nodeType === 8 ? bi(e.parentNode, n) : e.nodeType === 1 && bi(e, n),
        Yn(e)) : bi(te, n.stateNode));
        break;
    case 4:
        r = te,
        i = ze,
        te = n.stateNode.containerInfo,
        ze = !0,
        nt(e, t, n),
        te = r,
        ze = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , l = s.destroy;
                s = s.tag,
                l !== void 0 && (s & 2 || s & 4) && Js(n, t, l),
                i = i.next
            } while (i !== r)
        }
        nt(e, t, n);
        break;
    case 1:
        if (!le && (Xt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (o) {
                H(n, t, o)
            }
        nt(e, t, n);
        break;
    case 21:
        nt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        nt(e, t, n),
        le = r) : nt(e, t, n);
        break;
    default:
        nt(e, t, n)
    }
}
function du(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new up),
        t.forEach(function(r) {
            var i = vp.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Le(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , l = t
                  , o = l;
                e: for (; o !== null; ) {
                    switch (o.tag) {
                    case 5:
                        te = o.stateNode,
                        ze = !1;
                        break e;
                    case 3:
                        te = o.stateNode.containerInfo,
                        ze = !0;
                        break e;
                    case 4:
                        te = o.stateNode.containerInfo,
                        ze = !0;
                        break e
                    }
                    o = o.return
                }
                if (te === null)
                    throw Error(v(160));
                Ec(s, l, i),
                te = null,
                ze = !1;
                var u = i.alternate;
                u !== null && (u.return = null),
                i.return = null
            } catch (f) {
                H(i, t, f)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Nc(t, e),
            t = t.sibling
}
function Nc(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Le(t, e),
        Fe(e),
        r & 4) {
            try {
                In(3, e, e.return),
                Ni(3, e)
            } catch (k) {
                H(e, e.return, k)
            }
            try {
                In(5, e, e.return)
            } catch (k) {
                H(e, e.return, k)
            }
        }
        break;
    case 1:
        Le(t, e),
        Fe(e),
        r & 512 && n !== null && Xt(n, n.return);
        break;
    case 5:
        if (Le(t, e),
        Fe(e),
        r & 512 && n !== null && Xt(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Hn(i, "")
            } catch (k) {
                H(e, e.return, k)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , l = n !== null ? n.memoizedProps : s
              , o = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    o === "input" && s.type === "radio" && s.name != null && Yu(i, s),
                    Es(o, l);
                    var f = Es(o, s);
                    for (l = 0; l < u.length; l += 2) {
                        var h = u[l]
                          , g = u[l + 1];
                        h === "style" ? Zu(i, g) : h === "dangerouslySetInnerHTML" ? Xu(i, g) : h === "children" ? Hn(i, g) : yl(i, h, g, f)
                    }
                    switch (o) {
                    case "input":
                        ws(i, s);
                        break;
                    case "textarea":
                        qu(i, s);
                        break;
                    case "select":
                        var m = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var x = s.value;
                        x != null ? Zt(i, !!s.multiple, x, !1) : m !== !!s.multiple && (s.defaultValue != null ? Zt(i, !!s.multiple, s.defaultValue, !0) : Zt(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Zn] = s
                } catch (k) {
                    H(e, e.return, k)
                }
        }
        break;
    case 6:
        if (Le(t, e),
        Fe(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(v(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (k) {
                H(e, e.return, k)
            }
        }
        break;
    case 3:
        if (Le(t, e),
        Fe(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Yn(t.containerInfo)
            } catch (k) {
                H(e, e.return, k)
            }
        break;
    case 4:
        Le(t, e),
        Fe(e);
        break;
    case 13:
        Le(t, e),
        Fe(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (Xl = K())),
        r & 4 && du(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (f = le) || h,
        Le(t, e),
        le = f) : Le(t, e),
        Fe(e),
        r & 8192) {
            if (f = e.memoizedState !== null,
            (e.stateNode.isHidden = f) && !h && e.mode & 1)
                for (S = e,
                h = e.child; h !== null; ) {
                    for (g = S = h; S !== null; ) {
                        switch (m = S,
                        x = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            In(4, m, m.return);
                            break;
                        case 1:
                            Xt(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (k) {
                                    H(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            Xt(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                hu(g);
                                continue
                            }
                        }
                        x !== null ? (x.return = m,
                        S = x) : hu(g)
                    }
                    h = h.sibling
                }
            e: for (h = null,
            g = e; ; ) {
                if (g.tag === 5) {
                    if (h === null) {
                        h = g;
                        try {
                            i = g.stateNode,
                            f ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (o = g.stateNode,
                            u = g.memoizedProps.style,
                            l = u != null && u.hasOwnProperty("display") ? u.display : null,
                            o.style.display = Ju("display", l))
                        } catch (k) {
                            H(e, e.return, k)
                        }
                    }
                } else if (g.tag === 6) {
                    if (h === null)
                        try {
                            g.stateNode.nodeValue = f ? "" : g.memoizedProps
                        } catch (k) {
                            H(e, e.return, k)
                        }
                } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                    g.child.return = g,
                    g = g.child;
                    continue
                }
                if (g === e)
                    break e;
                for (; g.sibling === null; ) {
                    if (g.return === null || g.return === e)
                        break e;
                    h === g && (h = null),
                    g = g.return
                }
                h === g && (h = null),
                g.sibling.return = g.return,
                g = g.sibling
            }
        }
        break;
    case 19:
        Le(t, e),
        Fe(e),
        r & 4 && du(e);
        break;
    case 21:
        break;
    default:
        Le(t, e),
        Fe(e)
    }
}
function Fe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (_c(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(v(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Hn(i, ""),
                r.flags &= -33);
                var s = fu(e);
                el(e, s, i);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , o = fu(e);
                bs(e, o, l);
                break;
            default:
                throw Error(v(161))
            }
        } catch (u) {
            H(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function cp(e, t, n) {
    S = e,
    Cc(e)
}
function Cc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var i = S
          , s = i.child;
        if (i.tag === 22 && r) {
            var l = i.memoizedState !== null || Cr;
            if (!l) {
                var o = i.alternate
                  , u = o !== null && o.memoizedState !== null || le;
                o = Cr;
                var f = le;
                if (Cr = l,
                (le = u) && !f)
                    for (S = i; S !== null; )
                        l = S,
                        u = l.child,
                        l.tag === 22 && l.memoizedState !== null ? mu(i) : u !== null ? (u.return = l,
                        S = u) : mu(i);
                for (; s !== null; )
                    S = s,
                    Cc(s),
                    s = s.sibling;
                S = i,
                Cr = o,
                le = f
            }
            pu(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            S = s) : pu(e)
    }
}
function pu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || Ni(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Oe(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Jo(t, s, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Jo(t, l, n)
                        }
                        break;
                    case 5:
                        var o = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = o;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var f = t.alternate;
                            if (f !== null) {
                                var h = f.memoizedState;
                                if (h !== null) {
                                    var g = h.dehydrated;
                                    g !== null && Yn(g)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(v(163))
                    }
                le || t.flags & 512 && Zs(t)
            } catch (m) {
                H(t, t.return, m)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function hu(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function mu(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ni(4, t)
                } catch (u) {
                    H(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        H(t, i, u)
                    }
                }
                var s = t.return;
                try {
                    Zs(t)
                } catch (u) {
                    H(t, s, u)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Zs(t)
                } catch (u) {
                    H(t, l, u)
                }
            }
        } catch (u) {
            H(t, t.return, u)
        }
        if (t === e) {
            S = null;
            break
        }
        var o = t.sibling;
        if (o !== null) {
            o.return = t.return,
            S = o;
            break
        }
        S = t.return
    }
}
var fp = Math.ceil
  , fi = tt.ReactCurrentDispatcher
  , ql = tt.ReactCurrentOwner
  , Te = tt.ReactCurrentBatchConfig
  , z = 0
  , ee = null
  , q = null
  , ne = 0
  , ye = 0
  , Jt = kt(0)
  , J = 0
  , ir = null
  , Dt = 0
  , Ci = 0
  , Gl = 0
  , Fn = null
  , de = null
  , Xl = 0
  , fn = 1 / 0
  , Ke = null
  , di = !1
  , tl = null
  , ht = null
  , Tr = !1
  , ut = null
  , pi = 0
  , Un = 0
  , nl = null
  , Ur = -1
  , Vr = 0;
function ae() {
    return z & 6 ? K() : Ur !== -1 ? Ur : Ur = K()
}
function mt(e) {
    return e.mode & 1 ? z & 2 && ne !== 0 ? ne & -ne : qd.transition !== null ? (Vr === 0 && (Vr = ca()),
    Vr) : (e = D,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ya(e.type)),
    e) : 1
}
function Me(e, t, n, r) {
    if (50 < Un)
        throw Un = 0,
        nl = null,
        Error(v(185));
    lr(e, n, r),
    (!(z & 2) || e !== ee) && (e === ee && (!(z & 2) && (Ci |= n),
    J === 4 && lt(e, ne)),
    ge(e, r),
    n === 1 && z === 0 && !(t.mode & 1) && (fn = K() + 500,
    Si && St()))
}
function ge(e, t) {
    var n = e.callbackNode;
    qf(e, t);
    var r = Xr(e, e === ee ? ne : 0);
    if (r === 0)
        n !== null && Eo(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Eo(n),
        t === 1)
            e.tag === 0 ? Yd(gu.bind(null, e)) : Ba(gu.bind(null, e)),
            Hd(function() {
                !(z & 6) && St()
            }),
            n = null;
        else {
            switch (fa(r)) {
            case 1:
                n = Sl;
                break;
            case 4:
                n = ua;
                break;
            case 16:
                n = Gr;
                break;
            case 536870912:
                n = aa;
                break;
            default:
                n = Gr
            }
            n = Ac(n, Tc.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Tc(e, t) {
    if (Ur = -1,
    Vr = 0,
    z & 6)
        throw Error(v(327));
    var n = e.callbackNode;
    if (rn() && e.callbackNode !== n)
        return null;
    var r = Xr(e, e === ee ? ne : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = hi(e, r);
    else {
        t = r;
        var i = z;
        z |= 2;
        var s = Pc();
        (ee !== e || ne !== t) && (Ke = null,
        fn = K() + 500,
        Rt(e, t));
        do
            try {
                hp();
                break
            } catch (o) {
                jc(e, o)
            }
        while (!0);
        Dl(),
        fi.current = s,
        z = i,
        q !== null ? t = 0 : (ee = null,
        ne = 0,
        t = J)
    }
    if (t !== 0) {
        if (t === 2 && (i = Ps(e),
        i !== 0 && (r = i,
        t = rl(e, i))),
        t === 1)
            throw n = ir,
            Rt(e, 0),
            lt(e, r),
            ge(e, K()),
            n;
        if (t === 6)
            lt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !dp(i) && (t = hi(e, r),
            t === 2 && (s = Ps(e),
            s !== 0 && (r = s,
            t = rl(e, s))),
            t === 1))
                throw n = ir,
                Rt(e, 0),
                lt(e, r),
                ge(e, K()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(v(345));
            case 2:
                Ct(e, de, Ke);
                break;
            case 3:
                if (lt(e, r),
                (r & 130023424) === r && (t = Xl + 500 - K(),
                10 < t)) {
                    if (Xr(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        ae(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Ms(Ct.bind(null, e, de, Ke), t);
                    break
                }
                Ct(e, de, Ke);
                break;
            case 4:
                if (lt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var l = 31 - Be(r);
                    s = 1 << l,
                    l = t[l],
                    l > i && (i = l),
                    r &= ~s
                }
                if (r = i,
                r = K() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fp(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ms(Ct.bind(null, e, de, Ke), r);
                    break
                }
                Ct(e, de, Ke);
                break;
            case 5:
                Ct(e, de, Ke);
                break;
            default:
                throw Error(v(329))
            }
        }
    }
    return ge(e, K()),
    e.callbackNode === n ? Tc.bind(null, e) : null
}
function rl(e, t) {
    var n = Fn;
    return e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    e = hi(e, t),
    e !== 2 && (t = de,
    de = n,
    t !== null && il(t)),
    e
}
function il(e) {
    de === null ? de = e : de.push.apply(de, e)
}
function dp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ie(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function lt(e, t) {
    for (t &= ~Gl,
    t &= ~Ci,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Be(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function gu(e) {
    if (z & 6)
        throw Error(v(327));
    rn();
    var t = Xr(e, 0);
    if (!(t & 1))
        return ge(e, K()),
        null;
    var n = hi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ps(e);
        r !== 0 && (t = r,
        n = rl(e, r))
    }
    if (n === 1)
        throw n = ir,
        Rt(e, 0),
        lt(e, t),
        ge(e, K()),
        n;
    if (n === 6)
        throw Error(v(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ct(e, de, Ke),
    ge(e, K()),
    null
}
function Jl(e, t) {
    var n = z;
    z |= 1;
    try {
        return e(t)
    } finally {
        z = n,
        z === 0 && (fn = K() + 500,
        Si && St())
    }
}
function Bt(e) {
    ut !== null && ut.tag === 0 && !(z & 6) && rn();
    var t = z;
    z |= 1;
    var n = Te.transition
      , r = D;
    try {
        if (Te.transition = null,
        D = 1,
        e)
            return e()
    } finally {
        D = r,
        Te.transition = n,
        z = t,
        !(z & 6) && St()
    }
}
function Zl() {
    ye = Jt.current,
    I(Jt)
}
function Rt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    $d(n)),
    q !== null)
        for (n = q.return; n !== null; ) {
            var r = n;
            switch (Ol(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ti();
                break;
            case 3:
                an(),
                I(he),
                I(oe),
                Vl();
                break;
            case 5:
                Ul(r);
                break;
            case 4:
                an();
                break;
            case 13:
                I(U);
                break;
            case 19:
                I(U);
                break;
            case 10:
                Bl(r.type._context);
                break;
            case 22:
            case 23:
                Zl()
            }
            n = n.return
        }
    if (ee = e,
    q = e = gt(e.current, null),
    ne = ye = t,
    J = 0,
    ir = null,
    Gl = Ci = Dt = 0,
    de = Fn = null,
    jt !== null) {
        for (t = 0; t < jt.length; t++)
            if (n = jt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var l = s.next;
                    s.next = i,
                    r.next = l
                }
                n.pending = r
            }
        jt = null
    }
    return e
}
function jc(e, t) {
    do {
        var n = q;
        try {
            if (Dl(),
            Mr.current = ci,
            ai) {
                for (var r = V.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                ai = !1
            }
            if (At = 0,
            b = X = V = null,
            Mn = !1,
            tr = 0,
            ql.current = null,
            n === null || n.return === null) {
                J = 1,
                ir = t,
                q = null;
                break
            }
            e: {
                var s = e
                  , l = n.return
                  , o = n
                  , u = t;
                if (t = ne,
                o.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var f = u
                      , h = o
                      , g = h.tag;
                    if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
                        var m = h.alternate;
                        m ? (h.updateQueue = m.updateQueue,
                        h.memoizedState = m.memoizedState,
                        h.lanes = m.lanes) : (h.updateQueue = null,
                        h.memoizedState = null)
                    }
                    var x = ru(l);
                    if (x !== null) {
                        x.flags &= -257,
                        iu(x, l, o, s, t),
                        x.mode & 1 && nu(s, f, t),
                        t = x,
                        u = f;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(u),
                            t.updateQueue = k
                        } else
                            w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            nu(s, f, t),
                            bl();
                            break e
                        }
                        u = Error(v(426))
                    }
                } else if (F && o.mode & 1) {
                    var A = ru(l);
                    if (A !== null) {
                        !(A.flags & 65536) && (A.flags |= 256),
                        iu(A, l, o, s, t),
                        zl(cn(u, o));
                        break e
                    }
                }
                s = u = cn(u, o),
                J !== 4 && (J = 2),
                Fn === null ? Fn = [s] : Fn.push(s),
                s = l;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var d = fc(s, u, t);
                        Xo(s, d);
                        break e;
                    case 1:
                        o = u;
                        var c = s.type
                          , p = s.stateNode;
                        if (!(s.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ht === null || !ht.has(p)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var y = dc(s, o, t);
                            Xo(s, y);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Lc(n)
        } catch (_) {
            t = _,
            q === n && n !== null && (q = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Pc() {
    var e = fi.current;
    return fi.current = ci,
    e === null ? ci : e
}
function bl() {
    (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || !(Dt & 268435455) && !(Ci & 268435455) || lt(ee, ne)
}
function hi(e, t) {
    var n = z;
    z |= 2;
    var r = Pc();
    (ee !== e || ne !== t) && (Ke = null,
    Rt(e, t));
    do
        try {
            pp();
            break
        } catch (i) {
            jc(e, i)
        }
    while (!0);
    if (Dl(),
    z = n,
    fi.current = r,
    q !== null)
        throw Error(v(261));
    return ee = null,
    ne = 0,
    J
}
function pp() {
    for (; q !== null; )
        Rc(q)
}
function hp() {
    for (; q !== null && !Ff(); )
        Rc(q)
}
function Rc(e) {
    var t = zc(e.alternate, e, ye);
    e.memoizedProps = e.pendingProps,
    t === null ? Lc(e) : q = t,
    ql.current = null
}
function Lc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = op(n, t),
            n !== null) {
                n.flags &= 32767,
                q = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                J = 6,
                q = null;
                return
            }
        } else if (n = lp(n, t, ye),
        n !== null) {
            q = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            q = t;
            return
        }
        q = t = e
    } while (t !== null);
    J === 0 && (J = 5)
}
function Ct(e, t, n) {
    var r = D
      , i = Te.transition;
    try {
        Te.transition = null,
        D = 1,
        mp(e, t, n, r)
    } finally {
        Te.transition = i,
        D = r
    }
    return null
}
function mp(e, t, n, r) {
    do
        rn();
    while (ut !== null);
    if (z & 6)
        throw Error(v(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(v(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Gf(e, s),
    e === ee && (q = ee = null,
    ne = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Tr || (Tr = !0,
    Ac(Gr, function() {
        return rn(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Te.transition,
        Te.transition = null;
        var l = D;
        D = 1;
        var o = z;
        z |= 4,
        ql.current = null,
        ap(e, n),
        Nc(n, e),
        Dd(Ds),
        Jr = !!As,
        Ds = As = null,
        e.current = n,
        cp(n),
        Uf(),
        z = o,
        D = l,
        Te.transition = s
    } else
        e.current = n;
    if (Tr && (Tr = !1,
    ut = e,
    pi = i),
    s = e.pendingLanes,
    s === 0 && (ht = null),
    Hf(n.stateNode),
    ge(e, K()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (di)
        throw di = !1,
        e = tl,
        tl = null,
        e;
    return pi & 1 && e.tag !== 0 && rn(),
    s = e.pendingLanes,
    s & 1 ? e === nl ? Un++ : (Un = 0,
    nl = e) : Un = 0,
    St(),
    null
}
function rn() {
    if (ut !== null) {
        var e = fa(pi)
          , t = Te.transition
          , n = D;
        try {
            if (Te.transition = null,
            D = 16 > e ? 16 : e,
            ut === null)
                var r = !1;
            else {
                if (e = ut,
                ut = null,
                pi = 0,
                z & 6)
                    throw Error(v(331));
                var i = z;
                for (z |= 4,
                S = e.current; S !== null; ) {
                    var s = S
                      , l = s.child;
                    if (S.flags & 16) {
                        var o = s.deletions;
                        if (o !== null) {
                            for (var u = 0; u < o.length; u++) {
                                var f = o[u];
                                for (S = f; S !== null; ) {
                                    var h = S;
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        In(8, h, s)
                                    }
                                    var g = h.child;
                                    if (g !== null)
                                        g.return = h,
                                        S = g;
                                    else
                                        for (; S !== null; ) {
                                            h = S;
                                            var m = h.sibling
                                              , x = h.return;
                                            if (Sc(h),
                                            h === f) {
                                                S = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x,
                                                S = m;
                                                break
                                            }
                                            S = x
                                        }
                                }
                            }
                            var w = s.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var A = k.sibling;
                                        k.sibling = null,
                                        k = A
                                    } while (k !== null)
                                }
                            }
                            S = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && l !== null)
                        l.return = s,
                        S = l;
                    else
                        e: for (; S !== null; ) {
                            if (s = S,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    In(9, s, s.return)
                                }
                            var d = s.sibling;
                            if (d !== null) {
                                d.return = s.return,
                                S = d;
                                break e
                            }
                            S = s.return
                        }
                }
                var c = e.current;
                for (S = c; S !== null; ) {
                    l = S;
                    var p = l.child;
                    if (l.subtreeFlags & 2064 && p !== null)
                        p.return = l,
                        S = p;
                    else
                        e: for (l = c; S !== null; ) {
                            if (o = S,
                            o.flags & 2048)
                                try {
                                    switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ni(9, o)
                                    }
                                } catch (_) {
                                    H(o, o.return, _)
                                }
                            if (o === l) {
                                S = null;
                                break e
                            }
                            var y = o.sibling;
                            if (y !== null) {
                                y.return = o.return,
                                S = y;
                                break e
                            }
                            S = o.return
                        }
                }
                if (z = i,
                St(),
                $e && typeof $e.onPostCommitFiberRoot == "function")
                    try {
                        $e.onPostCommitFiberRoot(yi, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            D = n,
            Te.transition = t
        }
    }
    return !1
}
function yu(e, t, n) {
    t = cn(n, t),
    t = fc(e, t, 1),
    e = pt(e, t, 1),
    t = ae(),
    e !== null && (lr(e, 1, t),
    ge(e, t))
}
function H(e, t, n) {
    if (e.tag === 3)
        yu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                yu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ht === null || !ht.has(r))) {
                    e = cn(n, e),
                    e = dc(t, e, 1),
                    t = pt(t, e, 1),
                    e = ae(),
                    t !== null && (lr(t, 1, e),
                    ge(t, e));
                    break
                }
            }
            t = t.return
        }
}
function gp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ae(),
    e.pingedLanes |= e.suspendedLanes & n,
    ee === e && (ne & n) === n && (J === 4 || J === 3 && (ne & 130023424) === ne && 500 > K() - Xl ? Rt(e, 0) : Gl |= n),
    ge(e, t)
}
function Oc(e, t) {
    t === 0 && (e.mode & 1 ? (t = yr,
    yr <<= 1,
    !(yr & 130023424) && (yr = 4194304)) : t = 1);
    var n = ae();
    e = be(e, t),
    e !== null && (lr(e, t, n),
    ge(e, n))
}
function yp(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Oc(e, n)
}
function vp(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(v(314))
    }
    r !== null && r.delete(t),
    Oc(e, n)
}
var zc;
zc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || he.current)
            pe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return pe = !1,
                sp(e, t, n);
            pe = !!(e.flags & 131072)
        }
    else
        pe = !1,
        F && t.flags & 1048576 && Ma(t, ii, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Fr(e, t),
        e = t.pendingProps;
        var i = ln(t, oe.current);
        nn(t, n),
        i = Hl(null, t, r, e, i, n);
        var s = Wl();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        me(r) ? (s = !0,
        ni(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Il(t),
        i.updater = Ei,
        t.stateNode = i,
        i._reactInternals = t,
        Ws(t, r, e, n),
        t = Ys(null, t, r, !0, s, n)) : (t.tag = 0,
        F && s && Ll(t),
        ue(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Fr(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = xp(r),
            e = Oe(r, e),
            i) {
            case 0:
                t = Ks(null, t, r, e, n);
                break e;
            case 1:
                t = ou(null, t, r, e, n);
                break e;
            case 11:
                t = su(null, t, r, e, n);
                break e;
            case 14:
                t = lu(null, t, r, Oe(r.type, e), n);
                break e
            }
            throw Error(v(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Oe(r, i),
        Ks(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Oe(r, i),
        ou(e, t, r, i, n);
    case 3:
        e: {
            if (gc(t),
            e === null)
                throw Error(v(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            Ha(e, t),
            oi(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = cn(Error(v(423)), t),
                    t = uu(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = cn(Error(v(424)), t),
                    t = uu(e, t, r, n, i);
                    break e
                } else
                    for (ve = dt(t.stateNode.containerInfo.firstChild),
                    we = t,
                    F = !0,
                    De = null,
                    n = Va(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (on(),
                r === i) {
                    t = et(e, t, n);
                    break e
                }
                ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Wa(t),
        e === null && Vs(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        l = i.children,
        Bs(r, i) ? l = null : s !== null && Bs(r, s) && (t.flags |= 32),
        mc(e, t),
        ue(e, t, l, n),
        t.child;
    case 6:
        return e === null && Vs(t),
        null;
    case 13:
        return yc(e, t, n);
    case 4:
        return Fl(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = un(t, null, r, n) : ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Oe(r, i),
        su(e, t, r, i, n);
    case 7:
        return ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            l = i.value,
            B(si, r._currentValue),
            r._currentValue = l,
            s !== null)
                if (Ie(s.value, l)) {
                    if (s.children === i.children && !he.current) {
                        t = et(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var o = s.dependencies;
                        if (o !== null) {
                            l = s.child;
                            for (var u = o.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (s.tag === 1) {
                                        u = Xe(-1, n & -n),
                                        u.tag = 2;
                                        var f = s.updateQueue;
                                        if (f !== null) {
                                            f = f.shared;
                                            var h = f.pending;
                                            h === null ? u.next = u : (u.next = h.next,
                                            h.next = u),
                                            f.pending = u
                                        }
                                    }
                                    s.lanes |= n,
                                    u = s.alternate,
                                    u !== null && (u.lanes |= n),
                                    $s(s.return, n, t),
                                    o.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (s.tag === 10)
                            l = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (l = s.return,
                            l === null)
                                throw Error(v(341));
                            l.lanes |= n,
                            o = l.alternate,
                            o !== null && (o.lanes |= n),
                            $s(l, n, t),
                            l = s.sibling
                        } else
                            l = s.child;
                        if (l !== null)
                            l.return = s;
                        else
                            for (l = s; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (s = l.sibling,
                                s !== null) {
                                    s.return = l.return,
                                    l = s;
                                    break
                                }
                                l = l.return
                            }
                        s = l
                    }
            ue(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        nn(t, n),
        i = je(i),
        r = r(i),
        t.flags |= 1,
        ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Oe(r, t.pendingProps),
        i = Oe(r.type, i),
        lu(e, t, r, i, n);
    case 15:
        return pc(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Oe(r, i),
        Fr(e, t),
        t.tag = 1,
        me(r) ? (e = !0,
        ni(t)) : e = !1,
        nn(t, n),
        cc(t, r, i),
        Ws(t, r, i, n),
        Ys(null, t, r, !0, e, n);
    case 19:
        return vc(e, t, n);
    case 22:
        return hc(e, t, n)
    }
    throw Error(v(156, t.tag))
}
;
function Ac(e, t) {
    return oa(e, t)
}
function wp(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ce(e, t, n, r) {
    return new wp(e,t,n,r)
}
function eo(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function xp(e) {
    if (typeof e == "function")
        return eo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === wl)
            return 11;
        if (e === xl)
            return 14
    }
    return 2
}
function gt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ce(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function $r(e, t, n, r, i, s) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        eo(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case Vt:
            return Lt(n.children, i, s, t);
        case vl:
            l = 8,
            i |= 8;
            break;
        case hs:
            return e = Ce(12, n, t, i | 2),
            e.elementType = hs,
            e.lanes = s,
            e;
        case ms:
            return e = Ce(13, n, t, i),
            e.elementType = ms,
            e.lanes = s,
            e;
        case gs:
            return e = Ce(19, n, t, i),
            e.elementType = gs,
            e.lanes = s,
            e;
        case Wu:
            return Ti(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case $u:
                    l = 10;
                    break e;
                case Hu:
                    l = 9;
                    break e;
                case wl:
                    l = 11;
                    break e;
                case xl:
                    l = 14;
                    break e;
                case rt:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(v(130, e == null ? e : typeof e, ""))
        }
    return t = Ce(l, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Lt(e, t, n, r) {
    return e = Ce(7, e, r, t),
    e.lanes = n,
    e
}
function Ti(e, t, n, r) {
    return e = Ce(22, e, r, t),
    e.elementType = Wu,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function os(e, t, n) {
    return e = Ce(6, e, null, t),
    e.lanes = n,
    e
}
function us(e, t, n) {
    return t = Ce(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function kp(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = $i(0),
    this.expirationTimes = $i(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = $i(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function to(e, t, n, r, i, s, l, o, u) {
    return e = new kp(e,t,n,o,u),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Ce(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Il(s),
    e
}
function Sp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ut,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Dc(e) {
    if (!e)
        return wt;
    e = e._reactInternals;
    e: {
        if (It(e) !== e || e.tag !== 1)
            throw Error(v(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (me(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(v(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (me(n))
            return Da(e, n, t)
    }
    return t
}
function Bc(e, t, n, r, i, s, l, o, u) {
    return e = to(n, r, !0, e, i, s, l, o, u),
    e.context = Dc(null),
    n = e.current,
    r = ae(),
    i = mt(n),
    s = Xe(r, i),
    s.callback = t ?? null,
    pt(n, s, i),
    e.current.lanes = i,
    lr(e, i, r),
    ge(e, r),
    e
}
function ji(e, t, n, r) {
    var i = t.current
      , s = ae()
      , l = mt(i);
    return n = Dc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Xe(s, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = pt(i, t, l),
    e !== null && (Me(e, i, l, s),
    Br(e, i, l)),
    l
}
function mi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function vu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function no(e, t) {
    vu(e, t),
    (e = e.alternate) && vu(e, t)
}
function _p() {
    return null
}
var Mc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ro(e) {
    this._internalRoot = e
}
Pi.prototype.render = ro.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(v(409));
    ji(e, t, null, null)
}
;
Pi.prototype.unmount = ro.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Bt(function() {
            ji(null, e, null, null)
        }),
        t[Ze] = null
    }
}
;
function Pi(e) {
    this._internalRoot = e
}
Pi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ha();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++)
            ;
        st.splice(n, 0, e),
        n === 0 && ga(e)
    }
}
;
function io(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ri(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function wu() {}
function Ep(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var f = mi(l);
                s.call(f)
            }
        }
        var l = Bc(t, r, e, 0, null, !1, !1, "", wu);
        return e._reactRootContainer = l,
        e[Ze] = l.current,
        Xn(e.nodeType === 8 ? e.parentNode : e),
        Bt(),
        l
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var o = r;
        r = function() {
            var f = mi(u);
            o.call(f)
        }
    }
    var u = to(e, 0, !1, null, null, !1, !1, "", wu);
    return e._reactRootContainer = u,
    e[Ze] = u.current,
    Xn(e.nodeType === 8 ? e.parentNode : e),
    Bt(function() {
        ji(t, u, n, r)
    }),
    u
}
function Li(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var l = s;
        if (typeof i == "function") {
            var o = i;
            i = function() {
                var u = mi(l);
                o.call(u)
            }
        }
        ji(t, l, e, i)
    } else
        l = Ep(n, t, e, i, r);
    return mi(l)
}
da = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Pn(t.pendingLanes);
            n !== 0 && (_l(t, n | 1),
            ge(t, K()),
            !(z & 6) && (fn = K() + 500,
            St()))
        }
        break;
    case 13:
        Bt(function() {
            var r = be(e, 1);
            if (r !== null) {
                var i = ae();
                Me(r, e, 1, i)
            }
        }),
        no(e, 1)
    }
}
;
El = function(e) {
    if (e.tag === 13) {
        var t = be(e, 134217728);
        if (t !== null) {
            var n = ae();
            Me(t, e, 134217728, n)
        }
        no(e, 134217728)
    }
}
;
pa = function(e) {
    if (e.tag === 13) {
        var t = mt(e)
          , n = be(e, t);
        if (n !== null) {
            var r = ae();
            Me(n, e, t, r)
        }
        no(e, t)
    }
}
;
ha = function() {
    return D
}
;
ma = function(e, t) {
    var n = D;
    try {
        return D = e,
        t()
    } finally {
        D = n
    }
}
;
Cs = function(e, t, n) {
    switch (t) {
    case "input":
        if (ws(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = ki(r);
                    if (!i)
                        throw Error(v(90));
                    Ku(r),
                    ws(r, i)
                }
            }
        }
        break;
    case "textarea":
        qu(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Zt(e, !!n.multiple, t, !1)
    }
}
;
ta = Jl;
na = Bt;
var Np = {
    usingClientEntryPoint: !1,
    Events: [ur, Qt, ki, bu, ea, Jl]
}
  , Nn = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Cp = {
    bundleType: Nn.bundleType,
    version: Nn.version,
    rendererPackageName: Nn.rendererPackageName,
    rendererConfig: Nn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = sa(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Nn.findFiberByHostInstance || _p,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jr.isDisabled && jr.supportsFiber)
        try {
            yi = jr.inject(Cp),
            $e = jr
        } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!io(t))
        throw Error(v(200));
    return Sp(e, t, null, n)
}
;
ke.createRoot = function(e, t) {
    if (!io(e))
        throw Error(v(299));
    var n = !1
      , r = ""
      , i = Mc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = to(e, 1, !1, null, null, n, !1, r, i),
    e[Ze] = t.current,
    Xn(e.nodeType === 8 ? e.parentNode : e),
    new ro(t)
}
;
ke.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","),
        Error(v(268, e)));
    return e = sa(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ke.flushSync = function(e) {
    return Bt(e)
}
;
ke.hydrate = function(e, t, n) {
    if (!Ri(t))
        throw Error(v(200));
    return Li(null, e, t, !0, n)
}
;
ke.hydrateRoot = function(e, t, n) {
    if (!io(e))
        throw Error(v(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , l = Mc;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = Bc(t, null, e, 1, n ?? null, i, !1, s, l),
    e[Ze] = t.current,
    Xn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Pi(t)
}
;
ke.render = function(e, t, n) {
    if (!Ri(t))
        throw Error(v(200));
    return Li(null, e, t, !1, n)
}
;
ke.unmountComponentAtNode = function(e) {
    if (!Ri(e))
        throw Error(v(40));
    return e._reactRootContainer ? (Bt(function() {
        Li(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ze] = null
        })
    }),
    !0) : !1
}
;
ke.unstable_batchedUpdates = Jl;
ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ri(n))
        throw Error(v(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(v(38));
    return Li(e, t, n, !1, r)
}
;
ke.version = "18.3.1-next-f1338f8080-20240426";
function Ic() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic)
        } catch (e) {
            console.error(e)
        }
}
Ic(),
Iu.exports = ke;
var Tp = Iu.exports
  , xu = Tp;
ds.createRoot = xu.createRoot,
ds.hydrateRoot = xu.hydrateRoot;
const Qe = Object.create(null);
Qe.open = "0";
Qe.close = "1";
Qe.ping = "2";
Qe.pong = "3";
Qe.message = "4";
Qe.upgrade = "5";
Qe.noop = "6";
const Hr = Object.create(null);
Object.keys(Qe).forEach(e => {
    Hr[Qe[e]] = e
}
);
const sl = {
    type: "error",
    data: "parser error"
}
  , Fc = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , Uc = typeof ArrayBuffer == "function"
  , Vc = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer
  , so = ({type: e, data: t}, n, r) => Fc && t instanceof Blob ? n ? r(t) : ku(t, r) : Uc && (t instanceof ArrayBuffer || Vc(t)) ? n ? r(t) : ku(new Blob([t]), r) : r(Qe[e] + (t || ""))
  , ku = (e, t) => {
    const n = new FileReader;
    return n.onload = function() {
        const r = n.result.split(",")[1];
        t("b" + (r || ""))
    }
    ,
    n.readAsDataURL(e)
}
;
function Su(e) {
    return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer,e.byteOffset,e.byteLength)
}
let as;
function jp(e, t) {
    if (Fc && e.data instanceof Blob)
        return e.data.arrayBuffer().then(Su).then(t);
    if (Uc && (e.data instanceof ArrayBuffer || Vc(e.data)))
        return t(Su(e.data));
    so(e, !1, n => {
        as || (as = new TextEncoder),
        t(as.encode(n))
    }
    )
}
const _u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Ln = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < _u.length; e++)
    Ln[_u.charCodeAt(e)] = e;
const Pp = e => {
    let t = e.length * .75, n = e.length, r, i = 0, s, l, o, u;
    e[e.length - 1] === "=" && (t--,
    e[e.length - 2] === "=" && t--);
    const f = new ArrayBuffer(t)
      , h = new Uint8Array(f);
    for (r = 0; r < n; r += 4)
        s = Ln[e.charCodeAt(r)],
        l = Ln[e.charCodeAt(r + 1)],
        o = Ln[e.charCodeAt(r + 2)],
        u = Ln[e.charCodeAt(r + 3)],
        h[i++] = s << 2 | l >> 4,
        h[i++] = (l & 15) << 4 | o >> 2,
        h[i++] = (o & 3) << 6 | u & 63;
    return f
}
  , Rp = typeof ArrayBuffer == "function"
  , lo = (e, t) => {
    if (typeof e != "string")
        return {
            type: "message",
            data: $c(e, t)
        };
    const n = e.charAt(0);
    return n === "b" ? {
        type: "message",
        data: Lp(e.substring(1), t)
    } : Hr[n] ? e.length > 1 ? {
        type: Hr[n],
        data: e.substring(1)
    } : {
        type: Hr[n]
    } : sl
}
  , Lp = (e, t) => {
    if (Rp) {
        const n = Pp(e);
        return $c(n, t)
    } else
        return {
            base64: !0,
            data: e
        }
}
  , $c = (e, t) => {
    switch (t) {
    case "blob":
        return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
        return e instanceof ArrayBuffer ? e : e.buffer
    }
}
  , Hc = ""
  , Op = (e, t) => {
    const n = e.length
      , r = new Array(n);
    let i = 0;
    e.forEach( (s, l) => {
        so(s, !1, o => {
            r[l] = o,
            ++i === n && t(r.join(Hc))
        }
        )
    }
    )
}
  , zp = (e, t) => {
    const n = e.split(Hc)
      , r = [];
    for (let i = 0; i < n.length; i++) {
        const s = lo(n[i], t);
        if (r.push(s),
        s.type === "error")
            break
    }
    return r
}
;
function Ap() {
    return new TransformStream({
        transform(e, t) {
            jp(e, n => {
                const r = n.length;
                let i;
                if (r < 126)
                    i = new Uint8Array(1),
                    new DataView(i.buffer).setUint8(0, r);
                else if (r < 65536) {
                    i = new Uint8Array(3);
                    const s = new DataView(i.buffer);
                    s.setUint8(0, 126),
                    s.setUint16(1, r)
                } else {
                    i = new Uint8Array(9);
                    const s = new DataView(i.buffer);
                    s.setUint8(0, 127),
                    s.setBigUint64(1, BigInt(r))
                }
                e.data && typeof e.data != "string" && (i[0] |= 128),
                t.enqueue(i),
                t.enqueue(n)
            }
            )
        }
    })
}
let cs;
function Pr(e) {
    return e.reduce( (t, n) => t + n.length, 0)
}
function Rr(e, t) {
    if (e[0].length === t)
        return e.shift();
    const n = new Uint8Array(t);
    let r = 0;
    for (let i = 0; i < t; i++)
        n[i] = e[0][r++],
        r === e[0].length && (e.shift(),
        r = 0);
    return e.length && r < e[0].length && (e[0] = e[0].slice(r)),
    n
}
function Dp(e, t) {
    cs || (cs = new TextDecoder);
    const n = [];
    let r = 0
      , i = -1
      , s = !1;
    return new TransformStream({
        transform(l, o) {
            for (n.push(l); ; ) {
                if (r === 0) {
                    if (Pr(n) < 1)
                        break;
                    const u = Rr(n, 1);
                    s = (u[0] & 128) === 128,
                    i = u[0] & 127,
                    i < 126 ? r = 3 : i === 126 ? r = 1 : r = 2
                } else if (r === 1) {
                    if (Pr(n) < 2)
                        break;
                    const u = Rr(n, 2);
                    i = new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),
                    r = 3
                } else if (r === 2) {
                    if (Pr(n) < 8)
                        break;
                    const u = Rr(n, 8)
                      , f = new DataView(u.buffer,u.byteOffset,u.length)
                      , h = f.getUint32(0);
                    if (h > Math.pow(2, 21) - 1) {
                        o.enqueue(sl);
                        break
                    }
                    i = h * Math.pow(2, 32) + f.getUint32(4),
                    r = 3
                } else {
                    if (Pr(n) < i)
                        break;
                    const u = Rr(n, i);
                    o.enqueue(lo(s ? u : cs.decode(u), t)),
                    r = 0
                }
                if (i === 0 || i > e) {
                    o.enqueue(sl);
                    break
                }
            }
        }
    })
}
const Wc = 4;
function G(e) {
    if (e)
        return Bp(e)
}
function Bp(e) {
    for (var t in G.prototype)
        e[t] = G.prototype[t];
    return e
}
G.prototype.on = G.prototype.addEventListener = function(e, t) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
    this
}
;
G.prototype.once = function(e, t) {
    function n() {
        this.off(e, n),
        t.apply(this, arguments)
    }
    return n.fn = t,
    this.on(e, n),
    this
}
;
G.prototype.off = G.prototype.removeListener = G.prototype.removeAllListeners = G.prototype.removeEventListener = function(e, t) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var n = this._callbacks["$" + e];
    if (!n)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + e],
        this;
    for (var r, i = 0; i < n.length; i++)
        if (r = n[i],
        r === t || r.fn === t) {
            n.splice(i, 1);
            break
        }
    return n.length === 0 && delete this._callbacks["$" + e],
    this
}
;
G.prototype.emit = function(e) {
    this._callbacks = this._callbacks || {};
    for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r)
            n[r].apply(this, t)
    }
    return this
}
;
G.prototype.emitReserved = G.prototype.emit;
G.prototype.listeners = function(e) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + e] || []
}
;
G.prototype.hasListeners = function(e) {
    return !!this.listeners(e).length
}
;
const Oi = typeof Promise == "function" && typeof Promise.resolve == "function" ? t => Promise.resolve().then(t) : (t, n) => n(t, 0)
  , Ne = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , Mp = "arraybuffer";
function Qc(e, ...t) {
    return t.reduce( (n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]),
    n), {})
}
const Ip = Ne.setTimeout
  , Fp = Ne.clearTimeout;
function zi(e, t) {
    t.useNativeTimers ? (e.setTimeoutFn = Ip.bind(Ne),
    e.clearTimeoutFn = Fp.bind(Ne)) : (e.setTimeoutFn = Ne.setTimeout.bind(Ne),
    e.clearTimeoutFn = Ne.clearTimeout.bind(Ne))
}
const Up = 1.33;
function Vp(e) {
    return typeof e == "string" ? $p(e) : Math.ceil((e.byteLength || e.size) * Up)
}
function $p(e) {
    let t = 0
      , n = 0;
    for (let r = 0, i = e.length; r < i; r++)
        t = e.charCodeAt(r),
        t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++,
        n += 4);
    return n
}
function Kc() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function Hp(e) {
    let t = "";
    for (let n in e)
        e.hasOwnProperty(n) && (t.length && (t += "&"),
        t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
}
function Wp(e) {
    let t = {}
      , n = e.split("&");
    for (let r = 0, i = n.length; r < i; r++) {
        let s = n[r].split("=");
        t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return t
}
class Qp extends Error {
    constructor(t, n, r) {
        super(t),
        this.description = n,
        this.context = r,
        this.type = "TransportError"
    }
}
class oo extends G {
    constructor(t) {
        super(),
        this.writable = !1,
        zi(this, t),
        this.opts = t,
        this.query = t.query,
        this.socket = t.socket,
        this.supportsBinary = !t.forceBase64
    }
    onError(t, n, r) {
        return super.emitReserved("error", new Qp(t,n,r)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(t) {
        this.readyState === "open" && this.write(t)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(t) {
        const n = lo(t, this.socket.binaryType);
        this.onPacket(n)
    }
    onPacket(t) {
        super.emitReserved("packet", t)
    }
    onClose(t) {
        this.readyState = "closed",
        super.emitReserved("close", t)
    }
    pause(t) {}
    createUri(t, n={}) {
        return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n)
    }
    _hostname() {
        const t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(t) {
        const n = Hp(t);
        return n.length ? "?" + n : ""
    }
}
class Kp extends oo {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            this.readyState = "paused",
            t()
        }
        ;
        if (this._polling || !this.writable) {
            let r = 0;
            this._polling && (r++,
            this.once("pollComplete", function() {
                --r || n()
            })),
            this.writable || (r++,
            this.once("drain", function() {
                --r || n()
            }))
        } else
            n()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(t) {
        const n = r => {
            if (this.readyState === "opening" && r.type === "open" && this.onOpen(),
            r.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(r)
        }
        ;
        zp(t, this.socket.binaryType).forEach(n),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const t = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? t() : this.once("open", t)
    }
    write(t) {
        this.writable = !1,
        Op(t, n => {
            this.doWrite(n, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const t = this.opts.secure ? "https" : "http"
          , n = this.query || {};
        return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Kc()),
        !this.supportsBinary && !n.sid && (n.b64 = 1),
        this.createUri(t, n)
    }
}
let Yc = !1;
try {
    Yc = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const Yp = Yc;
function qp() {}
class Gp extends Kp {
    constructor(t) {
        if (super(t),
        typeof location < "u") {
            const n = location.protocol === "https:";
            let r = location.port;
            r || (r = n ? "443" : "80"),
            this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port
        }
    }
    doWrite(t, n) {
        const r = this.request({
            method: "POST",
            data: t
        });
        r.on("success", n),
        r.on("error", (i, s) => {
            this.onError("xhr post error", i, s)
        }
        )
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)),
        t.on("error", (n, r) => {
            this.onError("xhr poll error", n, r)
        }
        ),
        this.pollXhr = t
    }
}
class We extends G {
    constructor(t, n, r) {
        super(),
        this.createRequest = t,
        zi(this, r),
        this._opts = r,
        this._method = r.method || "GET",
        this._uri = n,
        this._data = r.data !== void 0 ? r.data : null,
        this._create()
    }
    _create() {
        var t;
        const n = Qc(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        n.xdomain = !!this._opts.xd;
        const r = this._xhr = this.createRequest(n);
        try {
            r.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
                    for (let i in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(i) && r.setRequestHeader(i, this._opts.extraHeaders[i])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    r.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                r.setRequestHeader("Accept", "*/*")
            } catch {}
            (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r),
            "withCredentials"in r && (r.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
            r.onreadystatechange = () => {
                var i;
                r.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(r.getResponseHeader("set-cookie"))),
                r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof r.status == "number" ? r.status : 0)
                }
                , 0))
            }
            ,
            r.send(this._data)
        } catch (i) {
            this.setTimeoutFn( () => {
                this._onError(i)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = We.requestsCount++,
        We.requests[this._index] = this)
    }
    _onError(t) {
        this.emitReserved("error", t, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(t) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = qp,
            t)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete We.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const t = this._xhr.responseText;
        t !== null && (this.emitReserved("data", t),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
We.requestsCount = 0;
We.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", Eu);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide"in Ne ? "pagehide" : "unload";
        addEventListener(e, Eu, !1)
    }
}
function Eu() {
    for (let e in We.requests)
        We.requests.hasOwnProperty(e) && We.requests[e].abort()
}
const Xp = function() {
    const e = qc({
        xdomain: !1
    });
    return e && e.responseType !== null
}();
class Jp extends Gp {
    constructor(t) {
        super(t);
        const n = t && t.forceBase64;
        this.supportsBinary = Xp && !n
    }
    request(t={}) {
        return Object.assign(t, {
            xd: this.xd
        }, this.opts),
        new We(qc,this.uri(),t)
    }
}
function qc(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || Yp))
            return new XMLHttpRequest
    } catch {}
    if (!t)
        try {
            return new Ne[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const Gc = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Zp extends oo {
    get name() {
        return "websocket"
    }
    doOpen() {
        const t = this.uri()
          , n = this.opts.protocols
          , r = Gc ? {} : Qc(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(t, n, r)
        } catch (i) {
            return this.emitReserved("error", i)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = t => this.onClose({
            description: "websocket connection closed",
            context: t
        }),
        this.ws.onmessage = t => this.onData(t.data),
        this.ws.onerror = t => this.onError("websocket error", t)
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n]
              , i = n === t.length - 1;
            so(r, this.supportsBinary, s => {
                try {
                    this.doWrite(r, s)
                } catch {}
                i && Oi( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const t = this.opts.secure ? "wss" : "ws"
          , n = this.query || {};
        return this.opts.timestampRequests && (n[this.opts.timestampParam] = Kc()),
        this.supportsBinary || (n.b64 = 1),
        this.createUri(t, n)
    }
}
const fs = Ne.WebSocket || Ne.MozWebSocket;
class bp extends Zp {
    createSocket(t, n, r) {
        return Gc ? new fs(t,n,r) : n ? new fs(t,n) : new fs(t)
    }
    doWrite(t, n) {
        this.ws.send(n)
    }
}
class eh extends oo {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (t) {
            return this.emitReserved("error", t)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(t => {
            this.onError("webtransport error", t)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(t => {
                const n = Dp(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , r = t.readable.pipeThrough(n).getReader()
                  , i = Ap();
                i.readable.pipeTo(t.writable),
                this._writer = i.writable.getWriter();
                const s = () => {
                    r.read().then( ({done: o, value: u}) => {
                        o || (this.onPacket(u),
                        s())
                    }
                    ).catch(o => {}
                    )
                }
                ;
                s();
                const l = {
                    type: "open"
                };
                this.query.sid && (l.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(l).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n]
              , i = n === t.length - 1;
            this._writer.write(r).then( () => {
                i && Oi( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var t;
        (t = this._transport) === null || t === void 0 || t.close()
    }
}
const th = {
    websocket: bp,
    webtransport: eh,
    polling: Jp
}
  , nh = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , rh = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function ll(e) {
    if (e.length > 8e3)
        throw "URI too long";
    const t = e
      , n = e.indexOf("[")
      , r = e.indexOf("]");
    n != -1 && r != -1 && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
    let i = nh.exec(e || "")
      , s = {}
      , l = 14;
    for (; l--; )
        s[rh[l]] = i[l] || "";
    return n != -1 && r != -1 && (s.source = t,
    s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"),
    s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    s.ipv6uri = !0),
    s.pathNames = ih(s, s.path),
    s.queryKey = sh(s, s.query),
    s
}
function ih(e, t) {
    const n = /\/{2,9}/g
      , r = t.replace(n, "/").split("/");
    return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == "/" && r.splice(r.length - 1, 1),
    r
}
function sh(e, t) {
    const n = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, i, s) {
        i && (n[i] = s)
    }),
    n
}
const ol = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , Wr = [];
ol && addEventListener("offline", () => {
    Wr.forEach(e => e())
}
, !1);
class yt extends G {
    constructor(t, n) {
        if (super(),
        this.binaryType = Mp,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        t && typeof t == "object" && (n = t,
        t = null),
        t) {
            const r = ll(t);
            n.hostname = r.host,
            n.secure = r.protocol === "https" || r.protocol === "wss",
            n.port = r.port,
            r.query && (n.query = r.query)
        } else
            n.host && (n.hostname = ll(n.host).host);
        zi(this, n),
        this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:",
        n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
        this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        n.transports.forEach(r => {
            const i = r.prototype.name;
            this.transports.push(i),
            this._transportsByName[i] = r
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, n),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = Wp(this.opts.query)),
        ol && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        Wr.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        n.EIO = Wc,
        n.transport = t,
        this.id && (n.sid = this.id);
        const r = Object.assign({}, this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[t]);
        return new this._transportsByName[t](r)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const t = this.opts.rememberUpgrade && yt.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const n = this.createTransport(t);
        n.open(),
        this.setTransport(n)
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = t,
        t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", n => this._onClose("transport close", n))
    }
    onOpen() {
        this.readyState = "open",
        yt.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(t) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", t),
            this.emitReserved("heartbeat"),
            t.type) {
            case "open":
                this.onHandshake(JSON.parse(t.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const n = new Error("server error");
                n.code = t.data,
                this._onError(n);
                break;
            case "message":
                this.emitReserved("data", t.data),
                this.emitReserved("message", t.data);
                break
            }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t),
        this.id = t.sid,
        this.transport.query.sid = t.sid,
        this._pingInterval = t.pingInterval,
        this._pingTimeout = t.pingTimeout,
        this._maxPayload = t.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const t = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + t,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , t),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const t = this._getWritablePackets();
            this.transport.send(t),
            this._prevBufferLen = t.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const i = this.writeBuffer[r].data;
            if (i && (n += Vp(i)),
            r > 0 && n > this._maxPayload)
                return this.writeBuffer.slice(0, r);
            n += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const t = Date.now() > this._pingTimeoutTime;
        return t && (this._pingTimeoutTime = 0,
        Oi( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        t
    }
    write(t, n, r) {
        return this._sendPacket("message", t, n, r),
        this
    }
    send(t, n, r) {
        return this._sendPacket("message", t, n, r),
        this
    }
    _sendPacket(t, n, r, i) {
        if (typeof n == "function" && (i = n,
        n = void 0),
        typeof r == "function" && (i = r,
        r = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        r = r || {},
        r.compress = r.compress !== !1;
        const s = {
            type: t,
            data: n,
            options: r
        };
        this.emitReserved("packetCreate", s),
        this.writeBuffer.push(s),
        i && this.once("flush", i),
        this.flush()
    }
    close() {
        const t = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , n = () => {
            this.off("upgrade", n),
            this.off("upgradeError", n),
            t()
        }
          , r = () => {
            this.once("upgrade", n),
            this.once("upgradeError", n)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? r() : t()
        }
        ) : this.upgrading ? r() : t()),
        this
    }
    _onError(t) {
        if (yt.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", t),
        this._onClose("transport error", t)
    }
    _onClose(t, n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            ol && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const r = Wr.indexOf(this._offlineEventListener);
                r !== -1 && Wr.splice(r, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", t, n),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
yt.protocol = Wc;
class lh extends yt {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let t = 0; t < this._upgrades.length; t++)
                this._probe(this._upgrades[t])
    }
    _probe(t) {
        let n = this.createTransport(t)
          , r = !1;
        yt.priorWebsocketSuccess = !1;
        const i = () => {
            r || (n.send([{
                type: "ping",
                data: "probe"
            }]),
            n.once("packet", g => {
                if (!r)
                    if (g.type === "pong" && g.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", n),
                        !n)
                            return;
                        yt.priorWebsocketSuccess = n.name === "websocket",
                        this.transport.pause( () => {
                            r || this.readyState !== "closed" && (h(),
                            this.setTransport(n),
                            n.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", n),
                            n = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const m = new Error("probe error");
                        m.transport = n.name,
                        this.emitReserved("upgradeError", m)
                    }
            }
            ))
        }
        ;
        function s() {
            r || (r = !0,
            h(),
            n.close(),
            n = null)
        }
        const l = g => {
            const m = new Error("probe error: " + g);
            m.transport = n.name,
            s(),
            this.emitReserved("upgradeError", m)
        }
        ;
        function o() {
            l("transport closed")
        }
        function u() {
            l("socket closed")
        }
        function f(g) {
            n && g.name !== n.name && s()
        }
        const h = () => {
            n.removeListener("open", i),
            n.removeListener("error", l),
            n.removeListener("close", o),
            this.off("close", u),
            this.off("upgrading", f)
        }
        ;
        n.once("open", i),
        n.once("error", l),
        n.once("close", o),
        this.once("close", u),
        this.once("upgrading", f),
        this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn( () => {
            r || n.open()
        }
        , 200) : n.open()
    }
    onHandshake(t) {
        this._upgrades = this._filterUpgrades(t.upgrades),
        super.onHandshake(t)
    }
    _filterUpgrades(t) {
        const n = [];
        for (let r = 0; r < t.length; r++)
            ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n
    }
}
let oh = class extends lh {
    constructor(t, n={}) {
        const r = typeof t == "object" ? t : n;
        (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map(i => th[i]).filter(i => !!i)),
        super(t, r)
    }
}
;
function uh(e, t="", n) {
    let r = e;
    n = n || typeof location < "u" && location,
    e == null && (e = n.protocol + "//" + n.host),
    typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e),
    /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e),
    r = ll(e)),
    r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
    r.path = r.path || "/";
    const s = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + s + ":" + r.port + t,
    r.href = r.protocol + "://" + s + (n && n.port === r.port ? "" : ":" + r.port),
    r
}
const ah = typeof ArrayBuffer == "function"
  , ch = e => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
  , Xc = Object.prototype.toString
  , fh = typeof Blob == "function" || typeof Blob < "u" && Xc.call(Blob) === "[object BlobConstructor]"
  , dh = typeof File == "function" || typeof File < "u" && Xc.call(File) === "[object FileConstructor]";
function uo(e) {
    return ah && (e instanceof ArrayBuffer || ch(e)) || fh && e instanceof Blob || dh && e instanceof File
}
function Qr(e, t) {
    if (!e || typeof e != "object")
        return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++)
            if (Qr(e[n]))
                return !0;
        return !1
    }
    if (uo(e))
        return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return Qr(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && Qr(e[n]))
            return !0;
    return !1
}
function ph(e) {
    const t = []
      , n = e.data
      , r = e;
    return r.data = ul(n, t),
    r.attachments = t.length,
    {
        packet: r,
        buffers: t
    }
}
function ul(e, t) {
    if (!e)
        return e;
    if (uo(e)) {
        const n = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e),
        n
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let r = 0; r < e.length; r++)
            n[r] = ul(e[r], t);
        return n
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = ul(e[r], t));
        return n
    }
    return e
}
function hh(e, t) {
    return e.data = al(e.data, t),
    delete e.attachments,
    e
}
function al(e, t) {
    if (!e)
        return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
            return t[e.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++)
            e[n] = al(e[n], t);
    else if (typeof e == "object")
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = al(e[n], t));
    return e
}
const mh = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
  , gh = 5;
var O;
(function(e) {
    e[e.CONNECT = 0] = "CONNECT",
    e[e.DISCONNECT = 1] = "DISCONNECT",
    e[e.EVENT = 2] = "EVENT",
    e[e.ACK = 3] = "ACK",
    e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    e[e.BINARY_EVENT = 5] = "BINARY_EVENT",
    e[e.BINARY_ACK = 6] = "BINARY_ACK"
}
)(O || (O = {}));
class yh {
    constructor(t) {
        this.replacer = t
    }
    encode(t) {
        return (t.type === O.EVENT || t.type === O.ACK) && Qr(t) ? this.encodeAsBinary({
            type: t.type === O.EVENT ? O.BINARY_EVENT : O.BINARY_ACK,
            nsp: t.nsp,
            data: t.data,
            id: t.id
        }) : [this.encodeAsString(t)]
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (t.type === O.BINARY_EVENT || t.type === O.BINARY_ACK) && (n += t.attachments + "-"),
        t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
        t.id != null && (n += t.id),
        t.data != null && (n += JSON.stringify(t.data, this.replacer)),
        n
    }
    encodeAsBinary(t) {
        const n = ph(t)
          , r = this.encodeAsString(n.packet)
          , i = n.buffers;
        return i.unshift(r),
        i
    }
}
function Nu(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
class ao extends G {
    constructor(t) {
        super(),
        this.reviver = t
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            n = this.decodeString(t);
            const r = n.type === O.BINARY_EVENT;
            r || n.type === O.BINARY_ACK ? (n.type = r ? O.EVENT : O.ACK,
            this.reconstructor = new vh(n),
            n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n)
        } else if (uo(t) || t.base64)
            if (this.reconstructor)
                n = this.reconstructor.takeBinaryData(t),
                n && (this.reconstructor = null,
                super.emitReserved("decoded", n));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + t)
    }
    decodeString(t) {
        let n = 0;
        const r = {
            type: Number(t.charAt(0))
        };
        if (O[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === O.BINARY_EVENT || r.type === O.BINARY_ACK) {
            const s = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length; )
                ;
            const l = t.substring(s, n);
            if (l != Number(l) || t.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            r.attachments = Number(l)
        }
        if (t.charAt(n + 1) === "/") {
            const s = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length); )
                ;
            r.nsp = t.substring(s, n)
        } else
            r.nsp = "/";
        const i = t.charAt(n + 1);
        if (i !== "" && Number(i) == i) {
            const s = n + 1;
            for (; ++n; ) {
                const l = t.charAt(n);
                if (l == null || Number(l) != l) {
                    --n;
                    break
                }
                if (n === t.length)
                    break
            }
            r.id = Number(t.substring(s, n + 1))
        }
        if (t.charAt(++n)) {
            const s = this.tryParse(t.substr(n));
            if (ao.isPayloadValid(r.type, s))
                r.data = s;
            else
                throw new Error("invalid payload")
        }
        return r
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
        case O.CONNECT:
            return Nu(n);
        case O.DISCONNECT:
            return n === void 0;
        case O.CONNECT_ERROR:
            return typeof n == "string" || Nu(n);
        case O.EVENT:
        case O.BINARY_EVENT:
            return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && mh.indexOf(n[0]) === -1);
        case O.ACK:
        case O.BINARY_ACK:
            return Array.isArray(n)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class vh {
    constructor(t) {
        this.packet = t,
        this.buffers = [],
        this.reconPack = t
    }
    takeBinaryData(t) {
        if (this.buffers.push(t),
        this.buffers.length === this.reconPack.attachments) {
            const n = hh(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            n
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
const wh = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: ao,
    Encoder: yh,
    get PacketType() {
        return O
    },
    protocol: gh
}, Symbol.toStringTag, {
    value: "Module"
}));
function Ae(e, t, n) {
    return e.on(t, n),
    function() {
        e.off(t, n)
    }
}
const xh = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class Jc extends G {
    constructor(t, n, r) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = t,
        this.nsp = n,
        r && r.auth && (this.auth = r.auth),
        this._opts = Object.assign({}, r),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const t = this.io;
        this.subs = [Ae(t, "open", this.onopen.bind(this)), Ae(t, "packet", this.onpacket.bind(this)), Ae(t, "error", this.onerror.bind(this)), Ae(t, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...t) {
        return t.unshift("message"),
        this.emit.apply(this, t),
        this
    }
    emit(t, ...n) {
        var r, i, s;
        if (xh.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        if (n.unshift(t),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(n),
            this;
        const l = {
            type: O.EVENT,
            data: n
        };
        if (l.options = {},
        l.options.compress = this.flags.compress !== !1,
        typeof n[n.length - 1] == "function") {
            const h = this.ids++
              , g = n.pop();
            this._registerAckCallback(h, g),
            l.id = h
        }
        const o = (i = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || i === void 0 ? void 0 : i.writable
          , u = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
        return this.flags.volatile && !o || (u ? (this.notifyOutgoingListeners(l),
        this.packet(l)) : this.sendBuffer.push(l)),
        this.flags = {},
        this
    }
    _registerAckCallback(t, n) {
        var r;
        const i = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
        if (i === void 0) {
            this.acks[t] = n;
            return
        }
        const s = this.io.setTimeoutFn( () => {
            delete this.acks[t];
            for (let o = 0; o < this.sendBuffer.length; o++)
                this.sendBuffer[o].id === t && this.sendBuffer.splice(o, 1);
            n.call(this, new Error("operation has timed out"))
        }
        , i)
          , l = (...o) => {
            this.io.clearTimeoutFn(s),
            n.apply(this, o)
        }
        ;
        l.withError = !0,
        this.acks[t] = l
    }
    emitWithAck(t, ...n) {
        return new Promise( (r, i) => {
            const s = (l, o) => l ? i(l) : r(o);
            s.withError = !0,
            n.push(s),
            this.emit(t, ...n)
        }
        )
    }
    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        t.push( (i, ...s) => r !== this._queue[0] ? void 0 : (i !== null ? r.tryCount > this._opts.retries && (this._queue.shift(),
        n && n(i)) : (this._queue.shift(),
        n && n(null, ...s)),
        r.pending = !1,
        this._drainQueue())),
        this._queue.push(r),
        this._drainQueue()
    }
    _drainQueue(t=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const n = this._queue[0];
        n.pending && !t || (n.pending = !0,
        n.tryCount++,
        this.flags = n.flags,
        this.emit.apply(this, n.args))
    }
    packet(t) {
        t.nsp = this.nsp,
        this.io._packet(t)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(t => {
            this._sendConnectPacket(t)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(t) {
        this.packet({
            type: O.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, t) : t
        })
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t)
    }
    onclose(t, n) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", t, n),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(t => {
            if (!this.sendBuffer.some(r => String(r.id) === t)) {
                const r = this.acks[t];
                delete this.acks[t],
                r.withError && r.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
            case O.CONNECT:
                t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case O.EVENT:
            case O.BINARY_EVENT:
                this.onevent(t);
                break;
            case O.ACK:
            case O.BINARY_ACK:
                this.onack(t);
                break;
            case O.DISCONNECT:
                this.ondisconnect();
                break;
            case O.CONNECT_ERROR:
                this.destroy();
                const r = new Error(t.data.message);
                r.data = t.data.data,
                this.emitReserved("connect_error", r);
                break
            }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)),
        this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n))
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n)
                r.apply(this, t)
        }
        super.emit.apply(this, t),
        this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1])
    }
    ack(t) {
        const n = this;
        let r = !1;
        return function(...i) {
            r || (r = !0,
            n.packet({
                type: O.ACK,
                id: t,
                data: i
            }))
        }
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" && (delete this.acks[t.id],
        n.withError && t.data.unshift(null),
        n.apply(this, t.data))
    }
    onconnect(t, n) {
        this.id = t,
        this.recovered = n && this._pid === n,
        this._pid = n,
        this.connected = !0,
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(t => this.emitEvent(t)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(t => {
            this.notifyOutgoingListeners(t),
            this.packet(t)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(t => t()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: O.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(t) {
        return this.flags.compress = t,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(t) {
        return this.flags.timeout = t,
        this
    }
    onAny(t) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(t),
        this
    }
    prependAny(t) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(t),
        this
    }
    offAny(t) {
        if (!this._anyListeners)
            return this;
        if (t) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r])
                    return n.splice(r, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(t),
        this
    }
    prependAnyOutgoing(t) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(t),
        this
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners)
            return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r])
                    return n.splice(r, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n)
                r.apply(this, t.data)
        }
    }
}
function mn(e) {
    e = e || {},
    this.ms = e.min || 100,
    this.max = e.max || 1e4,
    this.factor = e.factor || 2,
    this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0,
    this.attempts = 0
}
mn.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random()
          , n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n
    }
    return Math.min(e, this.max) | 0
}
;
mn.prototype.reset = function() {
    this.attempts = 0
}
;
mn.prototype.setMin = function(e) {
    this.ms = e
}
;
mn.prototype.setMax = function(e) {
    this.max = e
}
;
mn.prototype.setJitter = function(e) {
    this.jitter = e
}
;
class cl extends G {
    constructor(t, n) {
        var r;
        super(),
        this.nsps = {},
        this.subs = [],
        t && typeof t == "object" && (n = t,
        t = void 0),
        n = n || {},
        n.path = n.path || "/socket.io",
        this.opts = n,
        zi(this, n),
        this.reconnection(n.reconnection !== !1),
        this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(n.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
        this.randomizationFactor((r = n.randomizationFactor) !== null && r !== void 0 ? r : .5),
        this.backoff = new mn({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(n.timeout == null ? 2e4 : n.timeout),
        this._readyState = "closed",
        this.uri = t;
        const i = n.parser || wh;
        this.encoder = new i.Encoder,
        this.decoder = new i.Decoder,
        this._autoConnect = n.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(t) {
        return arguments.length ? (this._reconnection = !!t,
        t || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(t) {
        return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t,
        this)
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t,
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this)
    }
    randomizationFactor(t) {
        var n;
        return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t,
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this)
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t,
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this)
    }
    timeout(t) {
        return arguments.length ? (this._timeout = t,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(t) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new oh(this.uri,this.opts);
        const n = this.engine
          , r = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const i = Ae(n, "open", function() {
            r.onopen(),
            t && t()
        })
          , s = o => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", o),
            t ? t(o) : this.maybeReconnectOnOpen()
        }
          , l = Ae(n, "error", s);
        if (this._timeout !== !1) {
            const o = this._timeout
              , u = this.setTimeoutFn( () => {
                i(),
                s(new Error("timeout")),
                n.close()
            }
            , o);
            this.opts.autoUnref && u.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(u)
            }
            )
        }
        return this.subs.push(i),
        this.subs.push(l),
        this
    }
    connect(t) {
        return this.open(t)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const t = this.engine;
        this.subs.push(Ae(t, "ping", this.onping.bind(this)), Ae(t, "data", this.ondata.bind(this)), Ae(t, "error", this.onerror.bind(this)), Ae(t, "close", this.onclose.bind(this)), Ae(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(t) {
        try {
            this.decoder.add(t)
        } catch (n) {
            this.onclose("parse error", n)
        }
    }
    ondecoded(t) {
        Oi( () => {
            this.emitReserved("packet", t)
        }
        , this.setTimeoutFn)
    }
    onerror(t) {
        this.emitReserved("error", t)
    }
    socket(t, n) {
        let r = this.nsps[t];
        return r ? this._autoConnect && !r.active && r.connect() : (r = new Jc(this,t,n),
        this.nsps[t] = r),
        r
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const r of n)
            if (this.nsps[r].active)
                return;
        this._close()
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++)
            this.engine.write(n[r], t.options)
    }
    cleanup() {
        this.subs.forEach(t => t()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(t, n) {
        var r;
        this.cleanup(),
        (r = this.engine) === null || r === void 0 || r.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", t, n),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn( () => {
                t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                !t.skipReconnect && t.open(i => {
                    i ? (t._reconnecting = !1,
                    t.reconnect(),
                    this.emitReserved("reconnect_error", i)) : t.onreconnect()
                }
                ))
            }
            , n);
            this.opts.autoUnref && r.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(r)
            }
            )
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", t)
    }
}
const Cn = {};
function Vn(e, t) {
    typeof e == "object" && (t = e,
    e = void 0),
    t = t || {};
    const n = uh(e, t.path || "/socket.io")
      , r = n.source
      , i = n.id
      , s = n.path
      , l = Cn[i] && s in Cn[i].nsps
      , o = t.forceNew || t["force new connection"] || t.multiplex === !1 || l;
    let u;
    return o ? u = new cl(r,t) : (Cn[i] || (Cn[i] = new cl(r,t)),
    u = Cn[i]),
    n.query && !t.query && (t.query = n.queryKey),
    u.socket(n.path, t)
}
Object.assign(Vn, {
    Manager: cl,
    Socket: Jc,
    io: Vn,
    connect: Vn
});
const kh = ({onLogin: e}) => {
    const [t,n] = Y.useState("")
      , [r,i] = Y.useState("")
      , [s,l] = Y.useState("")
      , [o,u] = Y.useState([]);
    Y.useEffect( () => {
        const h = window.location.hostname === "localhost" ? "http://localhost:10000" : window.location.origin;
        console.log("Connecting to server at:", h);
        const g = Vn(h, {
            transports: ["websocket", "polling"],
            reconnectionAttempts: 5,
            reconnectionDelay: 1e3
        });
        return g.on("connect", () => {
            console.log("Connected to server")
        }
        ),
        g.on("connect_error", m => {
            console.error("Connection error:", m),
            l("Failed to connect to server. Please try again later.")
        }
        ),
        g.on("activeRooms", m => {
            console.log("Received active rooms:", m),
            u(m)
        }
        ),
        g.emit("getActiveRooms"),
        () => {
            console.log("Cleaning up socket connection"),
            g.close()
        }
    }
    , []);
    const f = h => {
        if (h.preventDefault(),
        !t.trim() || !r.trim()) {
            l("Please enter both username and study group code");
            return
        }
        e(t, r)
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4",
        children: a.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [a.jsxs("div", {
                className: "text-center mb-8",
                children: [a.jsx("h1", {
                    className: "text-4xl font-bold text-blue-800 mb-2",
                    children: "GCSE Biology Revision"
                }), a.jsx("p", {
                    className: "text-gray-600",
                    children: "AQA Specification 8461"
                }), a.jsx("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: "Exam Board: AQA | Course Code: 8461 | Paper 1 & 2"
                })]
            }), a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                children: [a.jsxs("div", {
                    className: "bg-white rounded-lg shadow-lg p-6",
                    children: [a.jsx("h2", {
                        className: "text-2xl font-semibold text-blue-800 mb-4",
                        children: "Topic 1: Cell Biology"
                    }), a.jsxs("div", {
                        className: "space-y-4",
                        children: [a.jsxs("div", {
                            className: "border-l-4 border-green-500 pl-4",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-blue-800",
                                children: "1.1 Cell Structure"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Eukaryotic and prokaryotic cells, cell specialisation, and microscopy"
                            }), a.jsxs("ul", {
                                className: "text-sm text-gray-500 mt-2 list-disc list-inside",
                                children: [a.jsx("li", {
                                    children: "Animal and plant cells"
                                }), a.jsx("li", {
                                    children: "Bacterial cells"
                                }), a.jsx("li", {
                                    children: "Microscopy techniques"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "border-l-4 border-green-500 pl-4",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-blue-800",
                                children: "1.2 Cell Division"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Chromosomes, mitosis, and the cell cycle"
                            }), a.jsxs("ul", {
                                className: "text-sm text-gray-500 mt-2 list-disc list-inside",
                                children: [a.jsx("li", {
                                    children: "Mitosis stages"
                                }), a.jsx("li", {
                                    children: "Cell cycle phases"
                                }), a.jsx("li", {
                                    children: "Stem cells"
                                })]
                            })]
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "bg-white rounded-lg shadow-lg p-6",
                    children: [a.jsx("h2", {
                        className: "text-2xl font-semibold text-blue-800 mb-4",
                        children: "Topic 2: Organisation"
                    }), a.jsxs("div", {
                        className: "space-y-4",
                        children: [a.jsxs("div", {
                            className: "border-l-4 border-green-500 pl-4",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-blue-800",
                                children: "2.1 Principles of Organisation"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Cells, tissues, organs, and organ systems"
                            }), a.jsxs("ul", {
                                className: "text-sm text-gray-500 mt-2 list-disc list-inside",
                                children: [a.jsx("li", {
                                    children: "Levels of organisation"
                                }), a.jsx("li", {
                                    children: "Digestive system"
                                }), a.jsx("li", {
                                    children: "Enzymes"
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "border-l-4 border-green-500 pl-4",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-blue-800",
                                children: "2.2 Plant Tissues"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Plant tissues, organs, and transport systems"
                            }), a.jsxs("ul", {
                                className: "text-sm text-gray-500 mt-2 list-disc list-inside",
                                children: [a.jsx("li", {
                                    children: "Leaf structure"
                                }), a.jsx("li", {
                                    children: "Transpiration"
                                }), a.jsx("li", {
                                    children: "Xylem and phloem"
                                })]
                            })]
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-6 mb-8",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold text-blue-800 mb-4",
                    children: "Past Papers & Resources"
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [a.jsx("div", {
                        className: "space-y-4",
                        children: a.jsxs("div", {
                            className: "border-l-4 border-blue-500 pl-4",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-blue-800",
                                children: "Paper 1"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Topics: Cell Biology, Organisation, Infection & Response, Bioenergetics"
                            }), a.jsxs("div", {
                                className: "mt-2 space-y-2",
                                children: [a.jsxs("div", {
                                    className: "bg-gray-50 p-3 rounded-lg",
                                    children: [a.jsx("p", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "2023 Papers"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Links coming soon..."
                                    })]
                                }), a.jsxs("div", {
                                    className: "bg-gray-50 p-3 rounded-lg",
                                    children: [a.jsx("p", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "2022 Papers"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Links coming soon..."
                                    })]
                                }), a.jsxs("div", {
                                    className: "bg-gray-50 p-3 rounded-lg",
                                    children: [a.jsx("p", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "2021 Papers"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Links coming soon..."
                                    })]
                                })]
                            })]
                        })
                    }), a.jsx("div", {
                        className: "space-y-4",
                        children: a.jsxs("div", {
                            className: "border-l-4 border-green-500 pl-4",
                            children: [a.jsx("h3", {
                                className: "font-semibold text-blue-800",
                                children: "Paper 2"
                            }), a.jsx("p", {
                                className: "text-gray-600",
                                children: "Topics: Homeostasis, Inheritance, Ecology"
                            }), a.jsxs("div", {
                                className: "mt-2 space-y-2",
                                children: [a.jsxs("div", {
                                    className: "bg-gray-50 p-3 rounded-lg",
                                    children: [a.jsx("p", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "2023 Papers"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Links coming soon..."
                                    })]
                                }), a.jsxs("div", {
                                    className: "bg-gray-50 p-3 rounded-lg",
                                    children: [a.jsx("p", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "2022 Papers"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Links coming soon..."
                                    })]
                                }), a.jsxs("div", {
                                    className: "bg-gray-50 p-3 rounded-lg",
                                    children: [a.jsx("p", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: "2021 Papers"
                                    }), a.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Links coming soon..."
                                    })]
                                })]
                            })]
                        })
                    })]
                }), a.jsxs("div", {
                    className: "mt-6 p-4 bg-blue-50 rounded-lg",
                    children: [a.jsx("h3", {
                        className: "font-semibold text-blue-800 mb-2",
                        children: "Additional Resources"
                    }), a.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [a.jsxs("div", {
                            className: "bg-white p-3 rounded-lg shadow-sm",
                            children: [a.jsx("p", {
                                className: "text-sm font-medium text-gray-700",
                                children: "Mark Schemes"
                            }), a.jsx("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: "Coming soon..."
                            })]
                        }), a.jsxs("div", {
                            className: "bg-white p-3 rounded-lg shadow-sm",
                            children: [a.jsx("p", {
                                className: "text-sm font-medium text-gray-700",
                                children: "Examiner Reports"
                            }), a.jsx("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: "Coming soon..."
                            })]
                        }), a.jsxs("div", {
                            className: "bg-white p-3 rounded-lg shadow-sm",
                            children: [a.jsx("p", {
                                className: "text-sm font-medium text-gray-700",
                                children: "Practice Questions"
                            }), a.jsx("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: "Coming soon..."
                            })]
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-6 mb-8",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold text-blue-800 mb-4",
                    children: "Exam Tips"
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [a.jsxs("div", {
                        className: "bg-blue-50 p-4 rounded-lg",
                        children: [a.jsx("h3", {
                            className: "font-semibold text-blue-800 mb-2",
                            children: "Command Words"
                        }), a.jsxs("ul", {
                            className: "text-sm text-gray-600 space-y-1",
                            children: [a.jsx("li", {
                                children: "• Describe: Give details"
                            }), a.jsx("li", {
                                children: "• Explain: Give reasons"
                            }), a.jsx("li", {
                                children: "• Compare: Identify similarities"
                            }), a.jsx("li", {
                                children: "• Evaluate: Make a judgement"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "bg-green-50 p-4 rounded-lg",
                        children: [a.jsx("h3", {
                            className: "font-semibold text-green-800 mb-2",
                            children: "Practical Skills"
                        }), a.jsxs("ul", {
                            className: "text-sm text-gray-600 space-y-1",
                            children: [a.jsx("li", {
                                children: "• Required practicals"
                            }), a.jsx("li", {
                                children: "• Scientific methods"
                            }), a.jsx("li", {
                                children: "• Data analysis"
                            }), a.jsx("li", {
                                children: "• Graph drawing"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "bg-purple-50 p-4 rounded-lg",
                        children: [a.jsx("h3", {
                            className: "font-semibold text-purple-800 mb-2",
                            children: "Revision Strategy"
                        }), a.jsxs("ul", {
                            className: "text-sm text-gray-600 space-y-1",
                            children: [a.jsx("li", {
                                children: "• Past papers"
                            }), a.jsx("li", {
                                children: "• Mind maps"
                            }), a.jsx("li", {
                                children: "• Flashcards"
                            }), a.jsx("li", {
                                children: "• Group study"
                            })]
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-6",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold text-blue-800 mb-4",
                    children: "Study Group Access"
                }), a.jsx("p", {
                    className: "text-gray-600 mb-4",
                    children: "Join a study group to discuss biology topics and prepare for your exams:"
                }), a.jsxs("form", {
                    onSubmit: f,
                    className: "space-y-4",
                    children: [a.jsxs("div", {
                        children: [a.jsx("label", {
                            htmlFor: "username",
                            className: "block text-blue-800 font-semibold mb-2",
                            children: "Student Name"
                        }), a.jsx("input", {
                            type: "text",
                            id: "username",
                            value: t,
                            onChange: h => n(h.target.value),
                            className: "w-full bg-gray-50 text-gray-800 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-300",
                            placeholder: "Enter your name",
                            required: !0
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("label", {
                            htmlFor: "roomCode",
                            className: "block text-blue-800 font-semibold mb-2",
                            children: "Study Group Code"
                        }), a.jsx("input", {
                            type: "text",
                            id: "roomCode",
                            value: r,
                            onChange: h => i(h.target.value),
                            className: "w-full bg-gray-50 text-gray-800 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-300",
                            placeholder: "Enter study group code",
                            required: !0
                        })]
                    }), s && a.jsx("p", {
                        className: "text-red-500 text-sm",
                        children: s
                    }), a.jsx("button", {
                        type: "submit",
                        className: "w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200",
                        children: "Join Study Group"
                    })]
                })]
            }), a.jsxs("div", {
                className: "mt-8 text-center text-sm text-gray-600",
                children: [a.jsx("p", {
                    children: "© 2024 GCSE Biology Revision Guide"
                }), a.jsx("p", {
                    className: "mt-1",
                    children: "For educational purposes only"
                }), a.jsx("p", {
                    className: "mt-1",
                    children: "Based on AQA GCSE Biology Specification (8461)"
                })]
            }), a.jsxs("div", {
                className: "mt-8 border-t border-gray-200 pt-6",
                children: [a.jsx("h3", {
                    className: "text-lg font-semibold text-blue-800 mb-4",
                    children: "Active Study Groups"
                }), o.length > 0 ? a.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                    children: o.map(h => a.jsxs("div", {
                        className: "bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer",
                        onClick: () => i(h.name),
                        children: [a.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [a.jsx("span", {
                                className: "font-medium text-blue-800",
                                children: h.name
                            }), a.jsxs("span", {
                                className: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full",
                                children: [h.userCount, " ", h.userCount === 1 ? "student" : "students"]
                            })]
                        }), a.jsx("p", {
                            className: "text-sm text-gray-500 mt-1",
                            children: "Click to join"
                        })]
                    }, h.name))
                }) : a.jsx("p", {
                    className: "text-gray-500 italic",
                    children: "No active study groups at the moment"
                })]
            })]
        })
    })
}
;
function Sh({user: e, room: t, socket: n}) {
    const [r,i] = Y.useState([])
      , [s,l] = Y.useState("")
      , [o,u] = Y.useState([])
      , f = Y.useRef(null)
      , h = Y.useRef(null)
      , g = () => {
        var w;
        (w = f.current) == null || w.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    Y.useEffect( () => {
        n.emit("join", {
            username: e,
            roomCode: t
        });
        const w = d => {
            console.log("Received message:", d),
            d.room === t && i(c => [...c, d])
        }
          , k = d => {
            console.log("User joined:", d),
            i(c => [...c, {
                user: "SYSTEM",
                text: d.message,
                time: d.time,
                room: t
            }]),
            u(d.users)
        }
          , A = d => {
            console.log("User left:", d),
            i(c => [...c, {
                user: "SYSTEM",
                text: d.message,
                time: d.time,
                room: t
            }]),
            u(d.users)
        }
        ;
        return n.on("message", w),
        n.on("userJoined", k),
        n.on("userLeft", A),
        () => {
            n.off("message", w),
            n.off("userJoined", k),
            n.off("userLeft", A)
        }
    }
    , [n, e, t]),
    Y.useEffect( () => {
        g()
    }
    , [r]);
    const m = async w => {
        if (w.preventDefault(),
        w.stopPropagation(),
        !s.trim())
            return;
        const k = {
            user: e,
            text: s.trim(),
            time: new Date().toLocaleTimeString(),
            room: t
        };
        try {
            console.log("Sending message:", k),
            n.emit("message", k),
            l(""),
            h.current && h.current.focus()
        } catch (A) {
            console.error("Error sending message:", A)
        }
    }
      , x = () => {}
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4",
        children: a.jsx("div", {
            className: "max-w-6xl mx-auto",
            children: a.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-6",
                children: [a.jsxs("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [a.jsxs("div", {
                        children: [a.jsxs("h2", {
                            className: "text-2xl font-semibold text-blue-800",
                            children: ["Study Group: ", t]
                        }), a.jsx("p", {
                            className: "text-gray-600",
                            children: "Discuss biology topics with your peers"
                        }), a.jsxs("p", {
                            className: "text-sm text-gray-500 mt-1",
                            children: ["Active members: ", o.join(", ")]
                        })]
                    }), a.jsx("button", {
                        onClick: x,
                        className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200",
                        children: "Leave Group"
                    })]
                }), a.jsxs("div", {
                    className: "bg-gray-50 rounded-lg p-4 mb-4 h-[60vh] overflow-y-auto",
                    children: [r.map( (w, k) => a.jsx("div", {
                        className: `mb-4 ${w.user === e ? "text-right" : "text-left"}`,
                        children: a.jsxs("div", {
                            className: `inline-block max-w-[70%] rounded-lg p-3 ${w.user === e ? "bg-green-600 text-white" : "bg-blue-100 text-gray-800"}`,
                            children: [a.jsx("div", {
                                className: "font-semibold mb-1",
                                children: w.user === e ? "You" : w.user
                            }), a.jsx("div", {
                                children: w.text
                            }), a.jsx("div", {
                                className: "text-xs mt-1 opacity-75",
                                children: w.time
                            })]
                        })
                    }, k)), a.jsx("div", {
                        ref: f
                    })]
                }), a.jsxs("form", {
                    onSubmit: m,
                    className: "flex gap-2",
                    children: [a.jsx("input", {
                        type: "text",
                        value: s,
                        onChange: w => l(w.target.value),
                        className: "flex-1 bg-gray-50 text-gray-800 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-300",
                        placeholder: "Type your message..."
                    }), a.jsx("button", {
                        type: "submit",
                        className: "bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200",
                        children: "Send"
                    })]
                })]
            })
        })
    })
}
function _h({socket: e, onJoinRoom: t}) {
    const [n,r] = Y.useState([]);
    Y.useEffect( () => {
        const s = l => {
            r(l.rooms)
        }
        ;
        return e.on("adminRooms", r),
        e.on("roomUpdate", s),
        () => {
            e.off("adminRooms", r),
            e.off("roomUpdate", s)
        }
    }
    , [e]);
    const i = (s, l) => {
        window.confirm(`Are you sure you want to remove ${l} from study group ${s}?`) && e.emit("kickUser", {
            roomCode: s,
            username: l
        })
    }
    ;
    return a.jsx("div", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-green-50 p-4",
        children: a.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [a.jsxs("div", {
                className: "text-center mb-8",
                children: [a.jsx("h1", {
                    className: "text-4xl font-bold text-blue-800 mb-2",
                    children: "Study Group Management"
                }), a.jsx("p", {
                    className: "text-gray-600",
                    children: "Monitor and manage active study groups"
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-6 mb-8",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold text-blue-800 mb-4",
                    children: "Active Study Groups"
                }), a.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: n.map(s => a.jsxs("div", {
                        className: "bg-white rounded-lg border border-green-200 p-4 hover:shadow-md transition-shadow duration-200",
                        children: [a.jsxs("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [a.jsxs("div", {
                                children: [a.jsxs("h3", {
                                    className: "font-semibold text-blue-800",
                                    children: ["Study Group: ", s.id]
                                }), a.jsxs("p", {
                                    className: "text-sm text-gray-600",
                                    children: [s.userCount, " ", s.userCount === 1 ? "student" : "students", " online"]
                                })]
                            }), a.jsx("button", {
                                onClick: () => t(s.id),
                                className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200",
                                children: "Join Group"
                            })]
                        }), a.jsxs("div", {
                            className: "space-y-2",
                            children: [a.jsx("h4", {
                                className: "font-medium text-blue-800 text-sm",
                                children: "Current Students:"
                            }), a.jsx("div", {
                                className: "bg-gray-50 rounded-lg p-3",
                                children: s.users.map(l => a.jsxs("div", {
                                    className: "flex items-center justify-between py-1",
                                    children: [a.jsx("span", {
                                        className: "text-gray-700",
                                        children: l
                                    }), a.jsx("button", {
                                        onClick: () => i(s.id, l),
                                        className: "text-red-600 hover:text-red-700 text-sm px-2 py-1 rounded border border-red-200 hover:border-red-300 transition-colors duration-200",
                                        children: "Remove"
                                    })]
                                }, l))
                            })]
                        })]
                    }, s.id))
                }), n.length === 0 && a.jsx("div", {
                    className: "text-center py-8",
                    children: a.jsx("p", {
                        className: "text-gray-500 italic",
                        children: "No active study groups at the moment"
                    })
                })]
            }), a.jsxs("div", {
                className: "bg-white rounded-lg shadow-lg p-6",
                children: [a.jsx("h2", {
                    className: "text-2xl font-semibold text-blue-800 mb-4",
                    children: "Management Guidelines"
                }), a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [a.jsxs("div", {
                        className: "bg-blue-50 p-4 rounded-lg",
                        children: [a.jsx("h3", {
                            className: "font-semibold text-blue-800 mb-2",
                            children: "Group Management"
                        }), a.jsxs("ul", {
                            className: "text-sm text-gray-600 space-y-1",
                            children: [a.jsx("li", {
                                children: "• Monitor group activity"
                            }), a.jsx("li", {
                                children: "• Ensure focused discussion"
                            }), a.jsx("li", {
                                children: "• Maintain study environment"
                            }), a.jsx("li", {
                                children: "• Handle disruptions"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "bg-green-50 p-4 rounded-lg",
                        children: [a.jsx("h3", {
                            className: "font-semibold text-green-800 mb-2",
                            children: "Student Support"
                        }), a.jsxs("ul", {
                            className: "text-sm text-gray-600 space-y-1",
                            children: [a.jsx("li", {
                                children: "• Guide discussions"
                            }), a.jsx("li", {
                                children: "• Answer questions"
                            }), a.jsx("li", {
                                children: "• Provide resources"
                            }), a.jsx("li", {
                                children: "• Monitor progress"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "bg-purple-50 p-4 rounded-lg",
                        children: [a.jsx("h3", {
                            className: "font-semibold text-purple-800 mb-2",
                            children: "Best Practices"
                        }), a.jsxs("ul", {
                            className: "text-sm text-gray-600 space-y-1",
                            children: [a.jsx("li", {
                                children: "• Encourage participation"
                            }), a.jsx("li", {
                                children: "• Maintain order"
                            }), a.jsx("li", {
                                children: "• Respect privacy"
                            }), a.jsx("li", {
                                children: "• Follow guidelines"
                            })]
                        })]
                    })]
                })]
            }), a.jsxs("div", {
                className: "mt-8 text-center text-sm text-gray-600",
                children: [a.jsx("p", {
                    children: "© 2024 GCSE Biology Revision Guide"
                }), a.jsx("p", {
                    className: "mt-1",
                    children: "For educational purposes only"
                }), a.jsx("p", {
                    className: "mt-1",
                    children: "Based on AQA GCSE Biology Specification (8461)"
                })]
            })]
        })
    })
}
const Cu = Vn(window.location.origin);
function Eh() {
    const [e,t] = Y.useState(null)
      , [n,r] = Y.useState(null)
      , [i,s] = Y.useState(!1)
      , l = (u, f) => {
        t(u),
        f === "super_safe1" ? s(!0) : r(f)
    }
      , o = u => {
        r(u),
        s(!1)
    }
    ;
    return a.jsx("div", {
        className: "h-screen bg-black",
        children: e ? i ? a.jsx(_h, {
            socket: Cu,
            onJoinRoom: o
        }) : a.jsx(Sh, {
            user: e,
            room: n,
            socket: Cu
        }) : a.jsx(kh, {
            onLogin: l
        })
    })
}
ds.createRoot(document.getElementById("root")).render(a.jsx(gf.StrictMode, {
    children: a.jsx(Eh, {})
}));
